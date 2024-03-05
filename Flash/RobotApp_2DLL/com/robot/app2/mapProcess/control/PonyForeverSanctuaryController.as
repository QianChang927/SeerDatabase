package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   
   public class PonyForeverSanctuaryController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const FULL:int = 20;
      
      private static const FOREVER_SPEED_ABILITY:int = 3665;
       
      
      public function PonyForeverSanctuaryController()
      {
         super();
      }
      
      public static function initMap1114(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         PonySpecialTrainningController.playPonyMovie("pony_forever_sanctuary_pre",22872,function():void
         {
            _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
         });
      }
      
      public static function destroyMap1114() : void
      {
         _map.conLevel.removeEventListener(MouseEvent.CLICK,onClick);
         _map = null;
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var name:String = String(e.target.name);
         if(name == "btnPony")
         {
            KTool.getForeverNum(FOREVER_SPEED_ABILITY,function(param1:int):void
            {
               if(param1 >= FULL)
               {
                  Alarm.show("获得的速度能力值已达上限，敬请期待其他圣殿的开放！");
               }
               else
               {
                  ModuleManager.showAppModule("PonyForeverSanctuaryMainPanel");
               }
            });
         }
      }
   }
}
