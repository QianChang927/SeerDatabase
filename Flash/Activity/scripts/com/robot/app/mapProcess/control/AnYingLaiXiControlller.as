package com.robot.app.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public class AnYingLaiXiControlller
   {
      
      private static var _instance:AnYingLaiXiControlller;
       
      
      private const BUFFER:uint = 876;
      
      private var _taskMC:MovieClip;
      
      private var _fightMonsterName:String;
      
      public function AnYingLaiXiControlller()
      {
         super();
      }
      
      public static function get instance() : AnYingLaiXiControlller
      {
         return _instance = _instance || new AnYingLaiXiControlller();
      }
      
      public function start() : void
      {
         StoryLoaderManager.insatnce.swfName = "map_786_0";
         StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         this._taskMC = param1;
         if(BufferRecordManager.getMyState(this.BUFFER) == false)
         {
            SocketConnection.send(1022,86063909);
            this.startPreStroy();
            this.anYingLaiXiBtn.visible = false;
         }
         else
         {
            KTool.showMapAllPlayerAndMonster();
            this.anYingLaiXiBtn.visible = true;
            this._taskMC.gotoAndStop(4);
            this.addEvents();
         }
         MapListenerManager.add(this.anYingLaiXiBtn,this.openAnYingPanel,"暗影来袭！稀有精灵狂欢派对");
      }
      
      private function addEvents() : void
      {
         (this._taskMC["mc4"]["deKuLaBtn"] as MovieClip).buttonMode = true;
         (this._taskMC["mc4"]["nanguaBtn"] as MovieClip).buttonMode = true;
         (this._taskMC["mc4"]["youlinghuoBtn"] as MovieClip).buttonMode = true;
         (this._taskMC["mc4"]["deKuLaBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onClicSpritekHandler);
         (this._taskMC["mc4"]["nanguaBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onClicSpritekHandler);
         (this._taskMC["mc4"]["youlinghuoBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onClicSpritekHandler);
      }
      
      private function onClicSpritekHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         switch(event.target.name)
         {
            case "deKuLaBtn":
               MainManager.isFighting = true;
               BonusController.addDelay(54);
               TaskDiaLogManager.single.playStory([new TaskMod(TaskDiaLogManager.DIALOG,NPC.DEKULA,[MainManager.actorInfo.formatNick + "想做正义的使者？先找到他们吧！哈哈哈！看，他们在这里玩得多开心！破坏越多，他们就开心呢！ "],["我一定会阻止他们！"])],function():void
               {
               });
               break;
            case "nanguaBtn":
               MainManager.isFighting = true;
               BonusController.addDelay(54);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverPiaoPiaoPuPuHandler);
               FightManager.fightWithBoss("阿普",0);
               break;
            case "youlinghuoBtn":
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverPiaoPiaoPuPuHandler);
               FightManager.fightWithBoss("飘飘",1);
         }
      }
      
      private function onFightOverPiaoPiaoPuPuHandler(param1:PetFightEvent) : void
      {
         MainManager.isFighting = false;
         BonusController.showDelayBonus(54);
      }
      
      private function openAnYingPanel(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AnYingLaiXiPanel"),"暗影来袭");
      }
      
      private function startPreStroy() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(this.stroyLine,function():void
         {
            BufferRecordManager.setMyState(BUFFER,true);
            anYingLaiXiBtn.visible = true;
            KTool.showMapAllPlayerAndMonster();
            _taskMC.gotoAndStop(4);
            (_taskMC["mc4"]["deKuLaBtn"] as MovieClip).buttonMode = true;
            (_taskMC["mc4"]["nanguaBtn"] as MovieClip).buttonMode = true;
            (_taskMC["mc4"]["youlinghuoBtn"] as MovieClip).buttonMode = true;
            SocketConnection.send(1022,86063910);
            addEvents();
         });
      }
      
      private function get stroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GUSITE,["你们怎么可以这样！万圣节虽然可以恶作剧，但是你们明显是在欺负阿普！太过分了！ "],["哟？这里还有？"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEERDUN,["既然那么爱管闲事，万圣节可不能放过你呢！来，让我们尽情地破坏吧！ "],["可恶！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GEERDUN,["暗影精灵是最讨厌别人管我们了！男爵大人，今年万圣节就让我们尽情狂欢吧！ "],["这是我们的节日！"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["怎么办！根本看不到这些稀有精灵呢！这样就没办法阻止他们搞破坏！"],["或许我们有办法"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GUSITE,[MainManager.actorInfo.formatNick + "你只要通过我们收集南瓜皮和幽灵火，合成南瓜灯笼，就可以找到了！"],["真的吗？太棒啦！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_];
      }
      
      private function get taskMC() : MovieClip
      {
         return this._taskMC;
      }
      
      private function get anYingLaiXiBtn() : SimpleButton
      {
         return MapManager.currentMap.controlLevel["anYingLaiXiBtn"] as SimpleButton;
      }
      
      public function fightMonsterHandler(param1:String) : void
      {
         this._fightMonsterName = param1;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHaidaoHandler);
         switch(this._fightMonsterName)
         {
            case "波德尔":
               SocketConnection.send(1022,86063914);
               FightManager.fightWithBossAndDelItem(this._fightMonsterName,2);
               break;
            case "莫弗克":
               SocketConnection.send(1022,86063918);
               FightManager.fightWithBossAndDelItem(this._fightMonsterName,4);
               break;
            case "哈尔威克":
               SocketConnection.send(1022,86063920);
               FightManager.fightWithBossAndDelItem(this._fightMonsterName,5);
               break;
            case "黑布罗":
               SocketConnection.send(1022,86063916);
               FightManager.fightWithBossAndDelItem(this._fightMonsterName,3);
               break;
            case "格尔顿":
               SocketConnection.send(1022,86063922);
               FightManager.fightWithBossAndDelItem(this._fightMonsterName,6);
               break;
            case "德库拉":
               SocketConnection.send(1022,86063924);
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHaidaoHandler);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverDeKulaHandler);
               BonusController.addDelay(54);
               FightManager.fightWithBossAndDelItem(this._fightMonsterName,12);
         }
      }
      
      private function onFightOverDeKulaHandler(param1:PetFightEvent) : void
      {
         var m1:TaskMod;
         var m2:TaskMod;
         var m3:TaskMod;
         var info:FightOverInfo;
         var event:PetFightEvent = param1;
         BonusController.showDelayBonus(54);
         m1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,6,"mc6"]);
         m2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哈哈！我真是聪明勇敢赛尔！你们再来，我就再打跑你们！而且这里的奖励好丰厚呢！  "],["太棒啦！我们再来！"]);
         m3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DEKULA,["竟然能够来到我的面前！可惜，你只能走到这里了！多管闲事的后果就是提早灭亡！ "],["可恶！"]);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverDeKulaHandler);
         KTool.hideMapAllPlayerAndMonster();
         this.anYingLaiXiBtn.visible = false;
         info = event.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            TaskDiaLogManager.single.playStory([m1,m2],function():void
            {
               KTool.showMapAllPlayerAndMonster();
               _taskMC.gotoAndStop(4);
               anYingLaiXiBtn.visible = true;
               addEvents();
            });
         }
         else
         {
            TaskDiaLogManager.single.playStory([m3],function():void
            {
               anYingLaiXiBtn.visible = true;
               KTool.showMapAllPlayerAndMonster();
               _taskMC.gotoAndStop(4);
               addEvents();
            });
         }
      }
      
      private function onFightOverHaidaoHandler(param1:PetFightEvent) : void
      {
         var m1:TaskMod;
         var m2:TaskMod;
         var info:FightOverInfo;
         var npcIconId:uint = 0;
         var e:PetFightEvent = param1;
         var winFightHandler:Function = function():void
         {
            _taskMC.gotoAndStop(5);
            switch(_fightMonsterName)
            {
               case "波德尔":
                  (_taskMC["mc5"] as MovieClip).gotoAndStop(1);
                  (_taskMC["mc5"] as MovieClip).addEventListener(Event.ENTER_FRAME,function(param1:Event):void
                  {
                     _taskMC["mc5"]["bodeerBtn"].buttonMode = true;
                     (_taskMC["mc5"] as MovieClip).removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     (_taskMC["mc5"]["bodeerBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,onBodeerHandler);
                  });
                  break;
               case "莫弗克":
                  (_taskMC["mc5"] as MovieClip).gotoAndStop(3);
                  _taskMC["mc5"]["mofukeBtn"].buttonMode = true;
                  (_taskMC["mc5"]["mofukeBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,onMofuKeHandler);
                  break;
               case "哈尔威克":
                  (_taskMC["mc5"] as MovieClip).gotoAndStop(4);
                  _taskMC["mc5"]["haerweikeBtn"].buttonMode = true;
                  (_taskMC["mc5"]["haerweikeBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,onHaErWeiKeHandler);
                  break;
               case "黑布罗":
                  (_taskMC["mc5"] as MovieClip).gotoAndStop(2);
                  _taskMC["mc5"]["heibuluoBtn"].buttonMode = true;
                  (_taskMC["mc5"]["heibuluoBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,onHeiBuLuoHandler);
                  break;
               case "格尔顿":
                  (_taskMC["mc5"] as MovieClip).gotoAndStop(5);
                  _taskMC["mc5"]["geerdunBtn"].buttonMode = true;
                  (_taskMC["mc5"]["geerdunBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,onGeerdunBtnHandler);
            }
         };
         var looseFightHandler:Function = function():void
         {
            _taskMC.gotoAndStop(4);
         };
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHaidaoHandler);
         switch(this._fightMonsterName)
         {
            case "波德尔":
               npcIconId = uint(NPC.BODEER);
               break;
            case "莫弗克":
               npcIconId = uint(NPC.MOFUKE);
               break;
            case "哈尔威克":
               npcIconId = uint(NPC.HAERWEIKE);
               break;
            case "黑布罗":
               npcIconId = uint(NPC.HEIBULUO);
               break;
            case "格尔顿":
               npcIconId = uint(NPC.GEERDUN);
               break;
            case "德库拉":
               npcIconId = uint(NPC.DEKULA);
         }
         m1 = new TaskMod(TaskDiaLogManager.DIALOG,npcIconId,["我们不是有意搞破坏的！都是男爵大人指使我们的！你只有全部捕获五只精灵，才能够击败男爵大人呢！我只能帮到你这里了!"],["我不会放弃的！"]);
         m2 = new TaskMod(TaskDiaLogManager.DIALOG,npcIconId,["哈哈！臭赛尔瞎逞能。别打扰我们玩游戏！呀！这里还有一个好大的南瓜！我还看到了那个飘飘，快来啊！ "],["我不会放弃的！"]);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            TaskDiaLogManager.single.playStory([m1],winFightHandler);
         }
         else
         {
            TaskDiaLogManager.single.playStory([m2],looseFightHandler);
         }
      }
      
      protected function onBodeerHandler(param1:MouseEvent) : void
      {
         MainManager.isFighting = true;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightCatchPetHandler);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,this.onCathPetHandler);
         FightManager.fightWithBoss(this._fightMonsterName,7);
         BonusController.addDelay(54);
      }
      
      protected function onMofuKeHandler(param1:MouseEvent) : void
      {
         MainManager.isFighting = true;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightCatchPetHandler);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,this.onCathPetHandler);
         FightManager.fightWithBoss(this._fightMonsterName,9);
         BonusController.addDelay(54);
      }
      
      protected function onHeiBuLuoHandler(param1:MouseEvent) : void
      {
         MainManager.isFighting = true;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightCatchPetHandler);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,this.onCathPetHandler);
         FightManager.fightWithBoss(this._fightMonsterName,8);
         BonusController.addDelay(54);
      }
      
      protected function onHaErWeiKeHandler(param1:MouseEvent) : void
      {
         MainManager.isFighting = true;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightCatchPetHandler);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,this.onCathPetHandler);
         FightManager.fightWithBoss(this._fightMonsterName,10);
         BonusController.addDelay(54);
      }
      
      protected function onGeerdunBtnHandler(param1:MouseEvent) : void
      {
         MainManager.isFighting = true;
         (this._taskMC["mc5"]["geerdunBtn"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onGeerdunBtnHandler);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,this.onCathPetHandler);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightCatchPetHandler);
         FightManager.fightWithBoss(this._fightMonsterName,11);
         BonusController.addDelay(54);
      }
      
      protected function onCathPetHandler(param1:PetFightEvent) : void
      {
         MainManager.isFighting = false;
         BonusController.showDelayBonus(54);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightCatchPetHandler);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,this.onCathPetHandler);
         this._taskMC.gotoAndStop(4);
      }
      
      protected function onFightCatchPetHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightCatchPetHandler);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,this.onCathPetHandler);
         MainManager.isFighting = false;
         this._taskMC.gotoAndStop(4);
      }
   }
}
