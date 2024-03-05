package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class TheWholeCarnivalController
   {
      
      private static var ITEM_ID:int = 1707382;
      
      public static var IsShow:Boolean = true;
       
      
      public function TheWholeCarnivalController()
      {
         super();
      }
      
      public static function alertTaoleStar() : void
      {
         EventManager.addEventListener(ItemEvent.ITEM_IN_BAG_ALARM_CLICK,function(param1:DynamicEvent):void
         {
            var e:DynamicEvent = param1;
            KTool.getBitSet([1000156],function(param1:Array):void
            {
               if(param1[0] == 0)
               {
                  IsShow = true;
               }
               else
               {
                  IsShow = false;
               }
            });
            if(e.paramObject.id == ITEM_ID && IsShow)
            {
               StatManager.sendStat2014("1127全民嘉年华","打开小面板",StatManager.RUN_ACT_2015);
               ModuleManager.showAppModule("TaoleStarAlertPanel");
            }
         });
      }
   }
}
