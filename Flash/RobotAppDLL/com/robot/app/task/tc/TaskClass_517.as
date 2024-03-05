package com.robot.app.task.tc
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.info.task.novice.NoviceFinishInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import flash.events.MouseEvent;
   
   public class TaskClass_517
   {
       
      
      public function TaskClass_517(param1:NoviceFinishInfo)
      {
         var i:NoviceFinishInfo = param1;
         super();
         if(MapManager.currentMap.id == 514)
         {
            AnimateManager.playMcAnimate(MapManager.currentMap.topLevel["puli_mc"],0,"",function():void
            {
               MapManager.currentMap.topLevel["puli_mc"].buttonMode = true;
               MapManager.currentMap.topLevel["puli_mc"].addEventListener(MouseEvent.CLICK,function():void
               {
                  MapManager.currentMap.topLevel["puli_mc"].visible = false;
                  MapManager.currentMap.topLevel["puli_mc"].removeEventListener(MouseEvent.CLICK,arguments.callee);
                  ItemInBagAlert.show(400150,"一个谱尼真身的精元已放入了你的储存箱。");
               });
            });
         }
      }
   }
}
