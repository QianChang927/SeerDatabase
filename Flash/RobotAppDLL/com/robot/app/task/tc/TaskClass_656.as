package com.robot.app.task.tc
{
   import com.robot.app.mapProcess.control.mysteryHole.mapBoss;
   import com.robot.core.info.task.novice.NoviceFinishInfo;
   import com.robot.core.ui.alert.ItemInBagAlert;
   
   public class TaskClass_656
   {
       
      
      public function TaskClass_656(param1:NoviceFinishInfo)
      {
         var i:NoviceFinishInfo = param1;
         super();
         ItemInBagAlert.show(400816,"你获得了金色能量残片，当集齐所有能量残片时，炫彩山传说中的精灵即将出现。",function():void
         {
            mapBoss.getInstance().monsterSayOver();
         });
      }
   }
}
