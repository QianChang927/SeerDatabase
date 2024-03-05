package com.robot.app.mapProcess.control
{
   import com.robot.app.mapProcess.MapProcess_464;
   import com.robot.app.task.taskscollection.Task142;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MP464Helper
   {
      
      private static var _count:int;
      
      private static var _map:BaseMapProcess;
      
      private static var _lightAnn:MovieClip;
      
      private static var _brickArr:Array;
      
      private static var _lightMC:MovieClip;
      
      private static var sc:SoundChannel;
       
      
      public function MP464Helper()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         initResource(param1);
         if(MapProcess_464.hasTaskInteractOver)
         {
            startResource();
         }
         else
         {
            EventManager.addEventListener("taskWithoutMap",onMapInteract);
         }
      }
      
      private static function initResource(param1:BaseMapProcess) : void
      {
         var _loc2_:MovieClip = null;
         _map = param1;
         _lightAnn = _map.topLevel["lightAnn"];
         DisplayUtil.removeForParent(_lightAnn,false);
         _lightMC = _map.conLevel["lightMC"];
         _brickArr = [];
         var _loc3_:int = 0;
         while(_loc3_ < 6)
         {
            _loc2_ = _map.conLevel["brick_" + _loc3_];
            _brickArr.push(_loc2_);
            _loc2_.gotoAndStop(4);
            _loc2_.visible = false;
            _loc3_++;
         }
      }
      
      private static function startResource() : void
      {
         var _loc1_:MovieClip = null;
         _count = 0;
         _lightMC.mouseEnabled = false;
         _lightMC.mouseChildren = false;
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            _loc1_ = _brickArr[_loc2_];
            _loc1_.gotoAndStop(1);
            _loc1_.visible = true;
            _loc1_.buttonMode = true;
            _loc1_.addEventListener(MouseEvent.MOUSE_OUT,onMCOut);
            _loc1_.addEventListener(MouseEvent.MOUSE_OVER,onMCOver);
            _loc1_.addEventListener(MouseEvent.CLICK,onMCClick);
            _loc2_++;
         }
      }
      
      private static function onMapInteract(param1:DynamicEvent) : void
      {
         var _loc2_:String = param1.paramObject as String;
         var _loc3_:Array = _loc2_.split("_");
         var _loc4_:int = int(_loc3_[1]);
         var _loc5_:int = int(_loc3_[3]);
         if(_loc4_ == 568 && _loc5_ == 464 && MapProcess_464.hasTaskInteractOver)
         {
            startResource();
         }
      }
      
      private static function onMCOut(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         _loc2_.gotoAndStop(1);
         if(sc)
         {
            sc.stop();
            sc = null;
         }
      }
      
      private static function onMCOver(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         _loc2_.gotoAndStop(2);
         playSound("s1");
      }
      
      private static function onMCClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var target:MovieClip = e.currentTarget as MovieClip;
         target.buttonMode = false;
         target.removeEventListener(MouseEvent.MOUSE_OUT,onMCOut);
         target.removeEventListener(MouseEvent.MOUSE_OVER,onMCOver);
         target.removeEventListener(MouseEvent.CLICK,onMCClick);
         playSound("s2");
         Task142.getMc(target,3,"",function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            mc.addEventListener(Event.ENTER_FRAME,function():void
            {
               if(mc.currentFrame == mc.totalFrames)
               {
                  mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  mc.stop();
                  ++_count;
                  checkCount();
               }
            });
         });
      }
      
      public static function playSound(param1:String) : void
      {
         if(sc)
         {
            sc.stop();
            sc = null;
         }
         var _loc2_:Sound = MapManager.currentMap.libManager.getSound(param1);
         if(_loc2_)
         {
            sc = _loc2_.play();
         }
      }
      
      private static function checkCount() : void
      {
         if(_count == 6)
         {
            LevelManager.appLevel.addChild(_lightAnn);
            LevelManager.appLevel.addChild(_lightMC);
            _lightAnn.mouseEnabled = false;
            _lightAnn.mouseChildren = false;
            _lightMC.buttonMode = true;
            _lightMC.mouseEnabled = true;
            _lightMC.mouseChildren = true;
            _lightAnn.gotoAndPlay(1);
            _lightAnn.addEventListener(Event.ENTER_FRAME,onLightAnnPlay);
            _lightMC.addEventListener(MouseEvent.CLICK,onLightMCClick);
            playSound("s3");
         }
      }
      
      private static function onLightAnnPlay(param1:Event) : void
      {
         if(_lightAnn.currentFrame == _lightAnn.totalFrames)
         {
            _lightAnn.gotoAndPlay("start");
         }
      }
      
      private static function onLightMCClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("nonoPanel/NonoVipFirePanel"));
         MP464Helper.playSound("s4");
      }
      
      public static function destroy() : void
      {
         EventManager.removeEventListener("taskWithoutMap",onMapInteract);
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            if(Boolean(_brickArr) && Boolean(_brickArr[_loc1_]))
            {
               _brickArr[_loc1_].removeEventListener(MouseEvent.MOUSE_OUT,onMCOut);
               _brickArr[_loc1_].removeEventListener(MouseEvent.MOUSE_OVER,onMCOver);
               _brickArr[_loc1_].removeEventListener(MouseEvent.CLICK,onMCClick);
               DisplayUtil.removeForParent(_brickArr[_loc1_]);
            }
            _loc1_++;
         }
         if(_lightAnn)
         {
            DisplayUtil.removeForParent(_lightAnn);
            _lightAnn.removeEventListener(Event.ENTER_FRAME,onLightAnnPlay);
            _lightAnn = null;
         }
         if(_lightMC)
         {
            DisplayUtil.removeForParent(_lightMC);
            _lightMC.removeEventListener(MouseEvent.CLICK,onLightMCClick);
            _lightMC = null;
         }
         _brickArr = null;
         _map = null;
      }
   }
}
