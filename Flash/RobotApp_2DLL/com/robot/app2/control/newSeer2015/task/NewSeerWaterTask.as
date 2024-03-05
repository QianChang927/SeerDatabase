package com.robot.app2.control.newSeer2015.task
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.newSeer2015.NewSeerGuide;
   import com.robot.app2.control.newSeer2015.NewSeerInteract;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   
   public class NewSeerWaterTask
   {
      
      private static var _ins:com.robot.app2.control.newSeer2015.task.NewSeerWaterTask;
       
      
      private var _haveListened:Boolean = false;
      
      public function NewSeerWaterTask()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.newSeer2015.task.NewSeerWaterTask
      {
         return _ins || (_ins = new com.robot.app2.control.newSeer2015.task.NewSeerWaterTask());
      }
      
      public function water_1_fight() : void
      {
         KTool.changeMapWithCallBack(1077,NewSeerInteract.instance.start);
      }
      
      public function water_2_exp_movie() : void
      {
         ToolBarController.panel.closePetBag(true);
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
      
      public function water_2_exp() : void
      {
         if(PetManager.defaultTime != NewSeerGuide.instance.catchTime)
         {
            PetManager.addEventListener(PetEvent.SET_DEFAULT,function(param1:PetEvent):void
            {
               PetManager.removeEventListener(PetEvent.SET_DEFAULT,arguments.callee);
               ModuleManager.showAppModule("ExpAdmPanel");
            });
            PetManager.setDefault(NewSeerGuide.instance.catchTime);
         }
         else
         {
            ModuleManager.showAppModule("ExpAdmPanel");
         }
      }
      
      public function water_2_exp_listen() : void
      {
         var onPetImprove:Function = null;
         onPetImprove = function(param1:PetEvent):void
         {
            var _loc2_:PetInfo = PetManager.getPetInfo(NewSeerGuide.instance.catchTime);
            if(Boolean(_loc2_) && _loc2_.level >= 50)
            {
               NewSeerProgress.instance.complete(NewSeerProgress.WATER_2_EXP);
               PetManager.removeEventListener(PetEvent.UPDATE_INFO,onPetImprove);
            }
         };
         PetManager.addEventListener(PetEvent.UPDATE_INFO,onPetImprove);
         onPetImprove(null);
      }
      
      public function water_3_pet_movie() : void
      {
         NewSeerInteract.instance.start(this.water_3_pet);
      }
      
      public function water_3_pet() : void
      {
         FightManager.fightNoMapBoss("鲁斯王",3707);
      }
      
      public function water_3_pet_listen() : void
      {
         var onOver:Function = null;
         onOver = function(param1:PetFightEvent):void
         {
            if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onOver);
               NewSeerProgress.instance.complete(NewSeerProgress.WATER_3_PET);
            }
         };
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onOver);
      }
   }
}
