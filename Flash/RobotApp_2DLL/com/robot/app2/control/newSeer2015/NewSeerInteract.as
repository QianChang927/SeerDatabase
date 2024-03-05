package com.robot.app2.control.newSeer2015
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.newSeer2015.task.NewSeerProgress;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import gs.TweenLite;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerInteract
   {
      
      private static var _ins:com.robot.app2.control.newSeer2015.NewSeerInteract;
       
      
      private var _anim:MovieClip;
      
      private var _callback:Function;
      
      private var _taskObject:Object;
      
      private var _endFunc:Function = null;
      
      private var _curStep:Object;
      
      private var _curIndex:int = 0;
      
      public function NewSeerInteract()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.newSeer2015.NewSeerInteract
      {
         return _ins || (_ins = new com.robot.app2.control.newSeer2015.NewSeerInteract());
      }
      
      public function play(param1:MovieClip, param2:Function) : void
      {
         this._anim = param1;
         this._callback = param2;
         this._anim.gotoAndStop(1);
         this._anim.addEventListener(MouseEvent.CLICK,this.onAnim);
         LevelManager.tipLevel.addChild(this._anim);
      }
      
      private function onAnim(param1:MouseEvent) : void
      {
         if(param1.target.name == "next")
         {
            if(this._anim.currentFrame == this._anim.totalFrames)
            {
               if(null != this._callback)
               {
                  this._callback();
               }
               this.clear();
            }
            else
            {
               this._anim.gotoAndStop(this._anim.currentFrame + 1);
            }
         }
      }
      
      public function clear() : void
      {
         this._anim.removeEventListener(MouseEvent.CLICK,this.onAnim);
         DisplayUtil.removeForParent(this._anim);
         this._anim = null;
         this._callback = null;
      }
      
      public function loadAndPlay(param1:String, param2:Function) : void
      {
         var url:String = param1;
         var callback:Function = param2;
         ResourceManager.getResource(ClientConfig.getAppRes("newSeer2015/" + url),function(param1:MovieClip):void
         {
            play(param1,callback);
         });
      }
      
      public function start(param1:Function = null) : void
      {
         this._taskObject = NewSeerProgress.instance.currentTask;
         if(this._taskObject.stat)
         {
            StatManager.sendStat2014("新手",this._taskObject.stat,StatManager.RUN_ACT_2015);
         }
         this._endFunc = param1;
         EventManager.addEventListener(RobotEvent.LOADING_START,this.onLoadingStart);
         EventManager.addEventListener(RobotEvent.LOADING_END,this.onLoadingEnd);
         this.playStep();
      }
      
      private function onLoadingStart(param1:RobotEvent) : void
      {
         if(this._taskObject.maskUI)
         {
            this._taskObject.maskUI.visible = false;
         }
      }
      
      private function onLoadingEnd(param1:RobotEvent) : void
      {
         if(this._taskObject.maskUI)
         {
            this._taskObject.maskUI.visible = true;
         }
      }
      
      private function taskDone() : void
      {
         EventManager.removeEventListener(RobotEvent.LOADING_START,this.onLoadingStart);
         EventManager.removeEventListener(RobotEvent.LOADING_END,this.onLoadingEnd);
         NewSeerProgress.instance.complete(this._taskObject.progress,this._endFunc);
         this._curIndex = 0;
      }
      
      private function playStep() : void
      {
         var nextMaskFrame:Function;
         var clearFightUI:Function;
         var onMaskNextFrame:Function = null;
         var onRemove:Function = null;
         var onEnterFrame:Function = null;
         var onFightRemove:Function = null;
         if(this._curIndex + 1 > this._taskObject.steps.length)
         {
            this.taskDone();
            return;
         }
         this._curStep = this._taskObject.steps[this._curIndex];
         if(this._curStep.type == "dialog")
         {
            nextMaskFrame = function():void
            {
               var _loc1_:MovieClip = _taskObject.maskUI;
               if(_loc1_.currentFrame == _loc1_.totalFrames)
               {
                  DisplayUtil.removeForParent(_loc1_);
               }
               else
               {
                  _loc1_.gotoAndStop(_loc1_.currentFrame + 1);
               }
            };
            onMaskNextFrame = function(param1:MouseEvent):void
            {
               var _loc2_:* = undefined;
               if(param1.target.name == _curStep.next)
               {
                  if(_curStep.action == "nextFrame")
                  {
                     nextMaskFrame();
                     stepDone();
                  }
                  else if(_curStep.action == "dispatchClick")
                  {
                     _loc2_ = getUIByName(_curStep.ui.split(":")[0],_curStep.ui.split(":")[1],new Point(param1.stageX,param1.stageY));
                     if(_loc2_)
                     {
                        _loc2_.dispatchEvent(new MouseEvent(MouseEvent.ROLL_OVER,false,false,param1.localX,param1.localY));
                        _loc2_.dispatchEvent(new MouseEvent(MouseEvent.CLICK,true,false,param1.localX,param1.localY));
                        nextMaskFrame();
                        stepDone();
                     }
                  }
               }
               else if(_curStep.action == "nextFrame")
               {
                  nextMaskFrame();
                  stepDone();
               }
            };
            onRemove = function(param1:Event):void
            {
               param1.currentTarget.removeEventListener(MouseEvent.CLICK,onMaskNextFrame);
               param1.currentTarget.removeEventListener(Event.REMOVED_FROM_STAGE,onRemove);
            };
            if(this._curStep.action == "load")
            {
               ResourceManager.getResource(ClientConfig.getAppRes(this._curStep.path),function(param1:MovieClip):void
               {
                  _taskObject.maskUI = param1;
                  LevelManager.fightLevel.addChild(param1);
                  param1.addEventListener(MouseEvent.CLICK,onMaskNextFrame);
                  param1.addEventListener(Event.REMOVED_FROM_STAGE,onRemove);
                  param1.gotoAndStop(1);
                  stepDone();
               });
            }
            else if(this._curStep.action == "hide")
            {
               this._taskObject.maskUI.visible = false;
               this.stepDone();
            }
            else if(this._curStep.action == "show")
            {
               this._taskObject.maskUI.visible = true;
               this.stepDone();
            }
            else if(this._curStep.action == "destroy")
            {
               if(this._taskObject.maskUI)
               {
                  DisplayUtil.removeForParent(this._taskObject.maskUI);
                  this._taskObject.maskUI = null;
               }
               this.stepDone();
            }
            else if(this._curStep.action == "anim")
            {
               AnimateManager.playMcAnimate(this._taskObject.maskUI,this._taskObject.maskUI.currentFrame,"anim",function():void
               {
                  nextMaskFrame();
                  stepDone();
               });
            }
         }
         else if(this._curStep.type == "panel")
         {
            if(this._curStep.action == "load")
            {
               ModuleManager.showModule(ClientConfig.getModule(this._curStep.path));
               this.stepDone();
            }
            else if(this._curStep.action == "destroy")
            {
               ModuleManager.destroy(ClientConfig.getModule(this._curStep.path));
               this.stepDone();
            }
            else if(this._curStep.action == "hide")
            {
               ModuleManager.hideModule(ClientConfig.getModule(this._curStep.path));
               this.stepDone();
            }
         }
         else if(this._curStep.type == "map")
         {
            KTool.changeMapWithCallBack(this._curStep.id,this.stepDone);
         }
         else if(this._curStep.type == "fakeFight")
         {
            onEnterFrame = function(param1:Event):void
            {
               if(_taskObject.fightUI.currentFrame == _curStep.end)
               {
                  _taskObject.fightUI.stop();
                  stepDone();
               }
               else if(_taskObject.fightUI.currentFrame == _taskObject.fightUI.totalFrames)
               {
                  clearFightUI();
                  stepDone();
               }
            };
            clearFightUI = function():void
            {
               DisplayUtil.removeForParent(_taskObject.fightUI);
               _taskObject.fightUI.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
               _taskObject.fightUI.removeEventListener(Event.REMOVED_FROM_STAGE,onFightRemove);
               _taskObject.fightUI = null;
            };
            onFightRemove = function(param1:Event):void
            {
               param1.currentTarget.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
               param1.currentTarget.removeEventListener(Event.REMOVED_FROM_STAGE,onFightRemove);
            };
            if(this._curStep.action == "load")
            {
               ResourceManager.getResource(ClientConfig.getAppRes(this._curStep.path),function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  _taskObject.fightUI = mc;
                  LevelManager.tipLevel.addChild(mc);
                  mc.gotoAndStop(1);
                  DisplayUtil.stopAllMovieClip(mc);
                  TweenLite.from(mc,1,{
                     "x":480,
                     "y":280,
                     "scaleX":0,
                     "scaleY":0,
                     "onComplete":function():void
                     {
                        mc.addEventListener(Event.ENTER_FRAME,onEnterFrame);
                        mc.addEventListener(Event.REMOVED_FROM_STAGE,onFightRemove);
                        stepDone();
                     }
                  });
               });
            }
            else if(this._curStep.action == "play")
            {
               this._taskObject.fightUI.gotoAndPlay(this._curStep.from);
            }
            else if(this._curStep.action == "destroy")
            {
               clearFightUI();
               this.stepDone();
            }
         }
         else if(this._curStep.type == "icon")
         {
            if(this._curStep.action == "show")
            {
               NewSeerIcon.instance.show(this._curStep.ui);
               NewSeerIcon.instance.showRightIcons();
               NewSeerProgress.instance.toggleToolBar(true);
               this.stepDone();
            }
            else if(this._curStep.action == "hide")
            {
               NewSeerIcon.instance.hide(this._curStep.ui);
               this.stepDone();
            }
         }
      }
      
      private function getUIByName(param1:String, param2:String, param3:Point) : DisplayObject
      {
         var _loc5_:DisplayObject = null;
         var _loc6_:DisplayObject = null;
         var _loc4_:Array = LevelManager[param1].getObjectsUnderPoint(param3);
         for each(_loc6_ in _loc4_)
         {
            _loc5_ = _loc6_;
            while(_loc5_ != null)
            {
               if(_loc5_.name == param1)
               {
                  break;
               }
               if(_loc5_.name == param2)
               {
                  return _loc5_;
               }
               if((Boolean(_loc5_ = _loc5_.parent)) && _loc5_.hasOwnProperty(param2))
               {
                  return _loc5_[param2];
               }
            }
         }
         return null;
      }
      
      private function stepDone() : void
      {
         ++this._curIndex;
         this.playStep();
      }
   }
}
