package com.robot.app2.control.newSeer2015.task
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.newSeer2015.NewSeerGuide;
   import com.robot.app2.control.newSeer2015.NewSeerIcon;
   import com.robot.app2.control.newSeer2015.NewSeerInteract;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.PetEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   
   public class NewSeerAdvanceTask
   {
      
      private static var _ins:com.robot.app2.control.newSeer2015.task.NewSeerAdvanceTask;
       
      
      public function NewSeerAdvanceTask()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.newSeer2015.task.NewSeerAdvanceTask
      {
         return _ins || (_ins = new com.robot.app2.control.newSeer2015.task.NewSeerAdvanceTask());
      }
      
      public function advance_1_introduce_movie() : void
      {
         ToolBarController.panel.closePetBag(true);
         NewSeerInteract.instance.start(this.advance_2_dv_movie);
      }
      
      public function advance_2_dv_movie() : void
      {
         if(PetManager.defaultTime != NewSeerGuide.instance.catchTime)
         {
            PetManager.addEventListener(PetEvent.SET_DEFAULT,function(param1:PetEvent):void
            {
               PetManager.removeEventListener(PetEvent.SET_DEFAULT,arguments.callee);
               NewSeerInteract.instance.start();
            });
            PetManager.setDefault(NewSeerGuide.instance.catchTime);
         }
         else
         {
            NewSeerInteract.instance.start();
         }
      }
      
      public function advance_2_dv_listen() : void
      {
         var onPetImprove:Function = null;
         onPetImprove = function(param1:PetEvent):void
         {
            if(PetManager.getPetInfo(NewSeerGuide.instance.catchTime).dv >= 31)
            {
               PetManager.removeEventListener(PetEvent.UPDATE_INFO,onPetImprove);
               NewSeerProgress.instance.complete(NewSeerProgress.ADVANCE_DV);
            }
         };
         PetManager.addEventListener(PetEvent.UPDATE_INFO,onPetImprove);
         onPetImprove(null);
      }
      
      public function advance_2_dv() : void
      {
         ModuleManager.showAppModule("ADPetBagPanelNew");
      }
      
      public function final_panel() : void
      {
         ModuleManager.showAppModule("NewSeerFinalPanel");
      }
      
      public function final_movie() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("newseer_2015_full_over"),this.over);
      }
      
      public function check_over() : void
      {
         KTool.getHasEverGotPet([70],function(param1:Array):void
         {
            if(param1[0])
            {
               over();
            }
            else
            {
               final_panel();
            }
         });
      }
      
      public function over() : void
      {
         NewSeerIcon.instance.destroy();
         NewSeerProgressPanel.instance.destroy();
         NewSeerInteract.instance.start(function():void
         {
            NewSeerProgress.instance.destroy();
            TasksManager.setTaskStatus(3077,TasksManager.COMPLETE);
            MainManager.actorInfo.mapID = 4;
            MapManager.changeMap(1);
            getNono();
            NewSeerProgress.instance.toggleToolBar(true);
         });
      }
      
      private function getNono() : void
      {
         SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_GET_NONO,null,function(param1:*):void
         {
            MainManager.actorInfo.hasNono = true;
            SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,1);
         });
      }
   }
}
