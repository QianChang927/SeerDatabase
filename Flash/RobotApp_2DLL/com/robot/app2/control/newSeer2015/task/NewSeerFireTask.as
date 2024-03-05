package com.robot.app2.control.newSeer2015.task
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.newSeer2015.NewSeerInteract;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerFireTask
   {
      
      private static var _ins:com.robot.app2.control.newSeer2015.task.NewSeerFireTask;
       
      
      private var _isUseDrug:Boolean = false;
      
      public function NewSeerFireTask()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.newSeer2015.task.NewSeerFireTask
      {
         return _ins || (_ins = new com.robot.app2.control.newSeer2015.task.NewSeerFireTask());
      }
      
      public function fire_1_drug_movie() : void
      {
         NewSeerInteract.instance.start(this.fire_1_drug);
      }
      
      public function fire_1_drug() : void
      {
         FightManager.fightNoMapBoss("波克尔",3708);
      }
      
      public function fire_1_drug_listen() : void
      {
         var onFightOver:Function = null;
         var onUseDrug:Function = null;
         var _guideWord:MovieClip = null;
         var onFightStart:Function = null;
         var onFightClose:Function = null;
         onFightOver = function(param1:PetFightEvent):void
         {
            if(_isUseDrug)
            {
               FightDispatcher.removeEventListener(PetFightEvent.USE_PET_ITEM,onUseDrug);
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
               FightDispatcher.removeEventListener(PetFightEvent.START_FIGHT,onFightStart);
               FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,onFightClose);
               _isUseDrug = false;
               NewSeerProgress.instance.complete(NewSeerProgress.FIRE_1_DRUG);
            }
         };
         onUseDrug = function(param1:PetFightEvent):void
         {
            _isUseDrug = true;
         };
         onFightStart = function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            ResourceManager.getResource(ClientConfig.getAppRes("newSeer2015/guide/guide_fire_fight_word"),function(param1:MovieClip):void
            {
               _guideWord = param1;
               LevelManager.fightLevel.addChild(param1);
            });
         };
         onFightClose = function(param1:PetFightEvent):void
         {
            DisplayUtil.removeForParent(_guideWord);
            _guideWord = null;
         };
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         FightDispatcher.addEventListener(PetFightEvent.USE_PET_ITEM,onUseDrug);
         FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,onFightStart);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,onFightClose);
      }
      
      public function fire_2_pet_movie() : void
      {
         ToolBarController.panel.closePetBag(true);
         NewSeerInteract.instance.start();
      }
      
      public function fire_2_pet() : void
      {
         var onDefault:Function = null;
         var info:PetInfo = null;
         onDefault = function(param1:Event = null):void
         {
            PetManager.removeEventListener(PetEvent.SET_DEFAULT,onDefault);
            FightManager.fightNoMapBoss("魔焰猩猩",3709);
         };
         var ids:Array = PetManager.getBagPetsById(306);
         if(ids.length > 0)
         {
            info = PetManager.getPetInfo(ids[0].catchTime);
            if(info.catchTime != PetManager.defaultTime)
            {
               PetManager.addEventListener(PetEvent.SET_DEFAULT,onDefault);
               PetManager.setDefault(info.catchTime);
            }
            else
            {
               onDefault();
            }
         }
         else
         {
            Alarm.show("需要使用鲁斯王作为首发精灵！");
         }
      }
      
      public function fire_2_pet_listen() : void
      {
         var onFightOver:Function = null;
         onFightOver = function(param1:PetFightEvent):void
         {
            if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
               NewSeerProgress.instance.complete(NewSeerProgress.FIRE_2_PET);
            }
         };
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
   }
}
