package com.robot.core.animate
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.SoundManager;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.utils.FrameDebug;
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AnimateManager
   {
      
      private static var _fullUrl:String;
      
      private static var _fullFun:Function;
      
      private static var _fullStopMapSound:Boolean;
      
      private static var _fullBg:Bitmap;
      
      private static var _fullMc:MovieClip;
      
      private static var _fullMcloader:MCLoader;
      
      private static var _animatePlaying:Boolean = false;
      
      private static var _closeBtn:SimpleButton;
      
      public static const START_PLAY:String = "start_play";
      
      private static var _frameMap:HashMap = new HashMap(true);
       
      
      public function AnimateManager()
      {
         super();
      }
      
      public static function playFullScreenAnimateWithPromise(param1:String, param2:Boolean = true) : Promise
      {
         var deferred:Deferred = null;
         var url:String = param1;
         var stopMapSound:Boolean = param2;
         deferred = new Deferred();
         playFullScreenAnimate(url,function():void
         {
            deferred.resolve(true);
         },stopMapSound);
         return deferred.promise;
      }
      
      public static function playFullScreenAnimate(param1:String = "", param2:Function = null, param3:Boolean = true) : void
      {
         _fullUrl = param1;
         _fullFun = param2;
         _fullStopMapSound = param3;
         if(_fullUrl == "" || _fullUrl == null)
         {
            throw new Error("动画路径不对！");
         }
         _fullMcloader = new MCLoader(_fullUrl,LevelManager.appLevel,1,"正在加载动画....");
         _fullMcloader.addEventListener(MCLoadEvent.SUCCESS,onFullLoadAnimate);
         _fullMcloader.doLoad(_fullUrl);
      }
      
      private static function onFullLoadAnimate(param1:MCLoadEvent) : void
      {
         var _loc2_:BitmapData = null;
         _fullMcloader.removeEventListener(MCLoadEvent.SUCCESS,onFullLoadAnimate);
         if(_fullStopMapSound)
         {
            SoundManager.stopSoundImmediately();
         }
         LevelManager.closeMouseEvent();
         LevelManager.removeContentLevel();
         if(MapManager.currentMap != null)
         {
            _loc2_ = new BitmapData(960,560);
            _loc2_.draw(MapManager.currentMap.root);
            _fullBg = new Bitmap(_loc2_);
            LevelManager.stage.addChild(_fullBg);
         }
         _fullMc = param1.getContent() as MovieClip;
         LevelManager.stage.addChild(_fullMc);
         if(MainManager.isDebug)
         {
            _closeBtn = UIManager.getButton("Close_Btn");
            _closeBtn.addEventListener(MouseEvent.CLICK,onFullCloseClick);
            _closeBtn.x = 930;
            _fullMc.addChild(_closeBtn);
         }
         if(MainManager.isDebug && _closeBtn != null && _closeBtn.parent != null)
         {
            _closeBtn.parent.setChildIndex(_closeBtn,_closeBtn.parent.numChildren - 1);
         }
         _fullMc.addEventListener(Event.ENTER_FRAME,onFullEnterFrame);
         _fullMc.addEventListener(MouseEvent.CLICK,onFullClickHandler);
         _fullMc.gotoAndPlay(2);
         EventManager.dispatchEvent(new Event(START_PLAY));
         _animatePlaying = true;
      }
      
      private static function onFullCloseClick(param1:MouseEvent) : void
      {
         destoryFullAnimate();
      }
      
      private static function onFullEnterFrame(param1:Event) : void
      {
         FrameDebug.debug(_fullMc);
         if(_fullMc.currentFrame == _fullMc.totalFrames)
         {
            destoryFullAnimate();
         }
      }
      
      private static function onFullClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         if(_loc2_ == "close_btn")
         {
            destoryFullAnimate();
         }
      }
      
      public static function destoryFullAnimate() : void
      {
         FrameDebug.destroy();
         if(_fullStopMapSound)
         {
            SoundManager.playSound();
         }
         LevelManager.openMouseEvent();
         LevelManager.addLevel();
         if(_fullBg)
         {
            DisplayUtil.removeForParent(_fullBg);
            _fullBg.bitmapData.dispose();
            _fullBg = null;
         }
         if(_fullMc)
         {
            if(_closeBtn)
            {
               _closeBtn.removeEventListener(MouseEvent.CLICK,onFullCloseClick);
               DisplayUtil.removeForParent(_closeBtn);
               _closeBtn = null;
            }
            _fullMc.removeEventListener(Event.ENTER_FRAME,onFullEnterFrame);
            _fullMc.removeEventListener(MouseEvent.CLICK,onFullClickHandler);
            DisplayUtil.stopAllMovieClip(_fullMc);
            DisplayUtil.removeForParent(_fullMc);
            _fullMc = null;
         }
         if(_fullMcloader)
         {
            _fullMcloader.loader.unloadAndStop();
            _fullMcloader.clear();
            _fullMcloader = null;
         }
         if(_fullFun != null)
         {
            _fullFun();
         }
         _animatePlaying = false;
      }
      
      public static function playMcAnimateWithPromis(param1:MovieClip, param2:Object = 0, param3:String = "", param4:Boolean = false, param5:Boolean = true) : Promise
      {
         var deferred:Deferred = null;
         var mc:MovieClip = param1;
         var frame:Object = param2;
         var name:String = param3;
         var toLastFrame:Boolean = param4;
         var closeMouseEvent:Boolean = param5;
         deferred = new Deferred();
         playMcAnimate(mc,frame,name,function():void
         {
            deferred.resolve(true);
         },toLastFrame,closeMouseEvent);
         return deferred.promise;
      }
      
      public static function playMcAnimate(param1:MovieClip, param2:Object = 0, param3:String = "", param4:Function = null, param5:Boolean = false, param6:Boolean = true) : void
      {
         var onAnimateCloseClick:Function = null;
         var mc:MovieClip = param1;
         var frame:Object = param2;
         var name:String = param3;
         var fun:Function = param4;
         var toLastFrame:Boolean = param5;
         var closeMouseEvent:Boolean = param6;
         onAnimateCloseClick = function(param1:MouseEvent):void
         {
            var _loc2_:MovieClip = new MovieClip();
            if(frame == 0 || name == "" || name == null)
            {
               _loc2_ = mc;
            }
            else
            {
               _loc2_ = mc[name];
            }
            if(_closeBtn)
            {
               _loc2_.gotoAndStop(_loc2_.totalFrames);
               _loc2_.removeEventListener(Event.ENTER_FRAME,onFrameEnterFrame);
               _closeBtn.removeEventListener(MouseEvent.CLICK,onAnimateCloseClick);
               destoryFrameAnimate(_loc2_);
            }
         };
         if(mc == null)
         {
            throw new Error("影片剪辑为空对象！");
         }
         if(closeMouseEvent)
         {
            LevelManager.closeMouseEvent();
         }
         if(frame == 0 || name == "" || name == null)
         {
            if(_frameMap.containsKey(mc))
            {
               throw new Error("影片剪辑重复播放！");
            }
            if(MainManager.isDebug)
            {
               _closeBtn = UIManager.getButton("Close_Btn");
               _closeBtn.addEventListener(MouseEvent.CLICK,onAnimateCloseClick);
               _closeBtn.x = 480;
               _closeBtn.y = 50;
               LevelManager.stage.addChild(_closeBtn);
            }
            _frameMap.add(mc,fun);
            mc.addEventListener(Event.ENTER_FRAME,onFrameEnterFrame);
            mc.gotoAndPlay(2);
         }
         else
         {
            mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
            {
               var _loc3_:MovieClip = mc[name];
               if(_loc3_ != null)
               {
                  mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  if(_frameMap.containsKey(_loc3_))
                  {
                     throw new Error("影片剪辑重复播放！");
                  }
                  if(MainManager.isDebug)
                  {
                     _closeBtn = UIManager.getButton("Close_Btn");
                     _closeBtn.addEventListener(MouseEvent.CLICK,onAnimateCloseClick);
                     _closeBtn.x = 480;
                     _closeBtn.y = 50;
                     LevelManager.stage.addChild(_closeBtn);
                  }
                  _frameMap.add(_loc3_,fun);
                  if(toLastFrame)
                  {
                     _loc3_.addEventListener(Event.ENTER_FRAME,onFrameEnterFrame);
                     _loc3_.gotoAndStop(_loc3_.totalFrames);
                  }
                  else
                  {
                     _loc3_.addEventListener(Event.ENTER_FRAME,onFrameEnterFrame);
                     _loc3_.gotoAndPlay(2);
                  }
               }
            });
            mc.gotoAndStop(frame);
         }
      }
      
      public static function playMcEndHandler(param1:MovieClip, param2:Function, param3:uint = 1) : void
      {
         var mc:MovieClip = param1;
         var handler:Function = param2;
         var startFrame:uint = param3;
         if(mc == null)
         {
            return;
         }
         mc.addFrameScript(mc.totalFrames - 1,function():void
         {
            if(mc)
            {
               mc.stop();
               mc.addFrameScript(mc.totalFrames - 1,null);
               if(handler != null)
               {
                  handler.call();
               }
            }
         });
         mc.gotoAndPlay(startFrame);
      }
      
      public static function removeMcEndHandler(param1:MovieClip) : void
      {
         if(param1 == null)
         {
            return;
         }
         param1.addFrameScript(param1.totalFrames - 1,null);
      }
      
      public static function playInteractiveMc(param1:MovieClip, param2:uint = 1, param3:uint = 1, param4:Function = null, param5:Boolean = false, param6:Boolean = true) : void
      {
         var currentPos:uint = 0;
         var mc:MovieClip = param1;
         var startFrame:uint = param2;
         var endFrame:uint = param3;
         var callback:Function = param4;
         var autoStart:Boolean = param5;
         var autoEnd:Boolean = param6;
         if(1 > startFrame)
         {
            currentPos = startFrame = 1;
         }
         else
         {
            currentPos = startFrame;
         }
         if(endFrame < startFrame)
         {
            endFrame = startFrame;
         }
         _animatePlaying = true;
         if(autoStart)
         {
            playMcAnimate(mc,currentPos,"mc" + currentPos,function():void
            {
               ++currentPos;
               mc.buttonMode = true;
               if(currentPos > endFrame)
               {
                  mc.addEventListener(MouseEvent.CLICK,function():void
                  {
                     mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                     mc.buttonMode = false;
                     _animatePlaying = false;
                     callback();
                  });
               }
               else
               {
                  mc.addEventListener(MouseEvent.CLICK,function():void
                  {
                     var func:Function = null;
                     func = arguments.callee;
                     mc.buttonMode = false;
                     playMcAnimate(mc,currentPos,"mc" + currentPos,function():void
                     {
                        mc.buttonMode = true;
                        ++currentPos;
                        if(currentPos > endFrame)
                        {
                           mc.removeEventListener(MouseEvent.CLICK,func);
                           if(null != callback)
                           {
                              if(autoEnd)
                              {
                                 mc.buttonMode = false;
                                 _animatePlaying = false;
                                 callback();
                              }
                              else
                              {
                                 mc.addEventListener(MouseEvent.CLICK,function():void
                                 {
                                    mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                                    mc.buttonMode = false;
                                    _animatePlaying = false;
                                    callback();
                                 });
                              }
                           }
                           _animatePlaying = false;
                        }
                     });
                  });
               }
            });
         }
         else
         {
            mc.buttonMode = true;
            mc.addEventListener(MouseEvent.CLICK,function():void
            {
               var func:Function = null;
               func = arguments.callee;
               mc.buttonMode = false;
               playMcAnimate(mc,currentPos,"mc" + currentPos,function():void
               {
                  mc.buttonMode = true;
                  ++currentPos;
                  if(currentPos > endFrame)
                  {
                     mc.removeEventListener(MouseEvent.CLICK,func);
                     if(null != callback)
                     {
                        if(autoEnd)
                        {
                           mc.buttonMode = false;
                           _animatePlaying = false;
                           callback();
                        }
                        else
                        {
                           mc.addEventListener(MouseEvent.CLICK,function():void
                           {
                              mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                              mc.buttonMode = false;
                              _animatePlaying = false;
                              callback();
                           });
                        }
                     }
                     _animatePlaying = false;
                  }
               });
            });
         }
      }
      
      private static function onFrameEnterFrame(param1:Event) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         FrameDebug.debug(_loc2_);
         if(!_animatePlaying)
         {
            _animatePlaying = true;
         }
         if(_loc2_.currentFrame == _loc2_.totalFrames || _loc2_.lastFrame == _loc2_.currentFrame)
         {
            _loc2_.gotoAndStop(_loc2_.totalFrames);
            _loc2_.removeEventListener(Event.ENTER_FRAME,onFrameEnterFrame);
            destoryFrameAnimate(_loc2_);
         }
         else
         {
            _loc2_.lastFrame = _loc2_.currentFrame;
         }
      }
      
      private static function destoryFrameAnimate(param1:MovieClip) : void
      {
         FrameDebug.destroy();
         LevelManager.openMouseEvent();
         _animatePlaying = false;
         var _loc2_:Function = _frameMap.remove(param1) as Function;
         if(_closeBtn)
         {
            DisplayUtil.removeForParent(_closeBtn);
            _closeBtn = null;
         }
         if(_loc2_ != null)
         {
            _loc2_();
         }
      }
      
      public static function get AnimatePlaying() : Boolean
      {
         return _animatePlaying;
      }
   }
}
