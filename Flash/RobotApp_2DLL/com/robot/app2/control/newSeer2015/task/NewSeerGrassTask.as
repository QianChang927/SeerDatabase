package com.robot.app2.control.newSeer2015.task
{
   import com.robot.app.fight.FightManager;
   import com.robot.app2.control.newSeer2015.NewSeerGuide;
   import com.robot.app2.control.newSeer2015.NewSeerInteract;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerGrassTask
   {
      
      private static var _ins:com.robot.app2.control.newSeer2015.task.NewSeerGrassTask;
       
      
      public function NewSeerGrassTask()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.newSeer2015.task.NewSeerGrassTask
      {
         return _ins || (_ins = new com.robot.app2.control.newSeer2015.task.NewSeerGrassTask());
      }
      
      public function grass_1_catch_movie() : void
      {
         if(MapManager.currentMap.id == 1077)
         {
            Alarm.show("请点击场景的皮皮进行捕捉哦！");
         }
         else
         {
            NewSeerInteract.instance.start();
         }
      }
      
      public function grass_1_catch() : void
      {
         if(MapManager.currentMap.id == 1077)
         {
            Alarm.show("请点击场景的皮皮进行捕捉哦！");
         }
         else
         {
            MapManager.changeMap(1077);
         }
      }
      
      public function grass_1_catch_listen() : void
      {
         var onFightOver:Function = null;
         var onFightClick:Function = null;
         var _guideWord:MovieClip = null;
         var onFightStart:Function = null;
         onFightOver = function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onFightOver);
            FightDispatcher.removeEventListener(PetFightEvent.START_FIGHT,onFightStart);
            onFightClose(null);
            NewSeerProgress.instance.complete(NewSeerProgress.GRASS_1_CATCH);
         };
         onFightClick = function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightClick);
            onFightClose(null);
         };
         onFightStart = function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            ResourceManager.getResource(ClientConfig.getAppRes("newSeer2015/guide/guide_grass_fight_word"),function(param1:MovieClip):void
            {
               _guideWord = param1;
               LevelManager.fightLevel.addChild(param1);
            });
         };
         var onFightClose:Function = function(param1:PetFightEvent):void
         {
            DisplayUtil.removeForParent(_guideWord);
            _guideWord = null;
         };
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,onFightOver);
         FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,onFightStart);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightClick);
      }
      
      public function grass_2_pet_movie() : void
      {
         NewSeerInteract.instance.start(this.grass_2_pet);
      }
      
      public function grass_2_pet() : void
      {
         var onDefault:Function = null;
         var info:PetInfo = null;
         onDefault = function(param1:Event = null):void
         {
            PetManager.removeEventListener(PetEvent.SET_DEFAULT,onDefault);
            FightManager.fightNoMapBoss("丽莎布布",3710);
         };
         var ids:Array = PetManager.getBagPetsById(309);
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
            Alarm.show("需要使用魔焰猩猩作为首发精灵！");
         }
      }
      
      public function grass_2_pet_listen() : void
      {
         var onFightOver:Function = null;
         onFightOver = function(param1:PetFightEvent):void
         {
            if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
               NewSeerGuide.instance.update();
            }
         };
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
   }
}
