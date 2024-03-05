package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class StargateOpenCountdownController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _anim:MovieClip;
      
      private static var _loaded:Boolean;
       
      
      public function StargateOpenCountdownController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["doorBtn"].addEventListener(MouseEvent.CLICK,onClickDoor);
         SystemTimerManager.addTickFun(onTime);
      }
      
      private static function onTime() : void
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(_loc1_.month == 9 && _loc1_.hours >= 16)
         {
            if(_loc1_.date == 16)
            {
               _map.conLevel["doorMC"].gotoAndStop(2);
            }
            else if(_loc1_.date == 17)
            {
               _map.conLevel["doorMC"].gotoAndStop(3);
            }
            else if(_loc1_.date == 18)
            {
               _map.conLevel["doorMC"].gotoAndStop(4);
            }
            else if(_loc1_.date == 19)
            {
               _map.conLevel["doorMC"].gotoAndStop(5);
            }
         }
      }
      
      private static function onClickDoor(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!_loaded)
         {
            _loaded = true;
            ResourceManager.getResource(ClientConfig.getMapAnimate("StargateOpenClickAnimation"),function(param1:MovieClip):void
            {
               _anim = param1;
               _map.topLevel.addChild(_anim);
               _anim.visible = false;
               _anim.gotoAndStop(_anim.totalFrames);
               doExchange();
            });
         }
         else if(_anim)
         {
            doExchange();
         }
      }
      
      private static function doExchange() : void
      {
         if(_anim.currentFrame != _anim.totalFrames)
         {
            return;
         }
         _anim.addFrameScript(_anim.totalFrames - 1,function():void
         {
            _anim.stop();
            _anim.visible = false;
            KTool.doExchange(4103);
         });
         KTool.getMultiValue([11718],function(param1:Array):void
         {
            if(param1[0] >= 100000)
            {
               Alarm.show("你今天已经为星际之门注入了太多能量，休息一下吧！");
            }
            else
            {
               _anim.gotoAndPlay(1);
               _anim.visible = true;
            }
         });
      }
      
      public static function destroy() : void
      {
         SystemTimerManager.removeTickFun(onTime);
         _map.conLevel["doorBtn"].removeEventListener(MouseEvent.CLICK,onClickDoor);
         if(_anim)
         {
            _map.topLevel.removeChild(_anim);
            _anim = null;
         }
         _map = null;
      }
   }
}
