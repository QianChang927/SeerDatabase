package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   
   public class PonyHolySanctuaryController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const BIT_BUF_HAS_GOT_SKILL:int = 195;
       
      
      public function PonyHolySanctuaryController()
      {
         super();
      }
      
      public static function initMap1124(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         PonySpecialTrainningController.playPonyMovie("pony_holy_sanctuary_pre",22881,function():void
         {
            _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
         });
      }
      
      public static function destroyMap1124() : void
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
            KTool.getBitSet([BIT_BUF_HAS_GOT_SKILL],function(param1:Array):void
            {
               if(param1[0] > 0)
               {
                  Alarm.show("你已领取技能！");
               }
               else
               {
                  ModuleManager.showAppModule("PonyHolySanctuaryMainPanel");
               }
            });
         }
      }
   }
}
