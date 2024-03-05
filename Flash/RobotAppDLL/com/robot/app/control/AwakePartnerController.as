package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class AwakePartnerController extends JPBaseMapController
   {
      
      private static var _instance:com.robot.app.control.AwakePartnerController;
       
      
      private const TASK1:uint = 9760;
      
      public function AwakePartnerController()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.control.AwakePartnerController
      {
         return _instance = _instance || new com.robot.app.control.AwakePartnerController();
      }
      
      override public function addEvents() : void
      {
         super.addEvents();
      }
      
      override public function get animationMC() : MovieClip
      {
         return _curMap.controlLevel["taskMC"] as MovieClip;
      }
      
      override public function depose() : void
      {
         super.depose();
      }
      
      override protected function get prevStroy() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIDIER,["你们三个休想再走！你们这群叛徒！我一定要为魔域除害！ "],["叛徒？"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.UKESI,["我们从来没有背叛过谁，我们只是不想被利用，不想变成他们的工具！ "],["废话少说！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIWENG,["你在这里过得快乐吗？你难道不怀念我们生活在魔域的世界里的日子吗？ "],["哼！魔域的日子我已经忘了！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KABEIJI,["为什么我们一定要互相争斗！我们都被艾辛格利用了!我们回不去我们的时空了！ "],["哼！我不会相信你们！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIDIER,["我一定要帮艾辛格大人铲除你们这些叛徒！ "],["看来要唤醒你在魔域的记忆！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,3,"mc3"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_];
      }
      
      public function allCompleteOver() : void
      {
         TaskDiaLogManager.single.playStory(this.allStroy,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            SocketConnection.send(TASK1);
            MainManager.actorInfo.coins += 2000;
            ItemInBagAlert.show(1,"2000个赛尔豆已经放入你的背包中！");
            (animationMC["mc4"]["aiDierBtn"] as MovieClip).buttonMode = true;
            (animationMC["mc4"]["aiDierBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickAidierHandler);
            ModuleManager.showModule(ClientConfig.getAppModule("NewYearPetFestivalPanel"),"正在努力打开最新活动面板...");
         });
      }
      
      private function get allStroy() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,6,"mc6"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIDIER,["难道我真的就是艾辛格的工具？我们真的回不去了吗？ "],["别灰心！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.UKESI,["放心！接下来我们团结起来，一致对抗艾辛格他们。一定会找到办法的！ "],["嗯。我们要团结一致！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["有赛尔先锋队在，一切问题都可以解决的！我们一定会帮助你们的！ "],["我们一起加油！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,4,"mc4"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_];
      }
      
      public function isNotCompleteFightOver() : void
      {
         TaskDiaLogManager.single.playStory(this.notCompleteStory,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            (animationMC["mc4"]["aiDierBtn"] as MovieClip).buttonMode = true;
            (animationMC["mc4"]["aiDierBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickAidierHandler);
         });
      }
      
      private function get notCompleteStory() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,5,"mc5"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIDIER,["你们不要做无谓的斗争了！叛徒，让我替艾辛格大人解决你们吧！ "],["你难道不想回去吗？"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.UKESI,["艾辛格只是在利用我们！醒醒啊！我们想办法回去！ "],["我不会相信你们！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,4,"mc4"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_];
      }
      
      override public function removeEvents() : void
      {
         super.removeEvents();
      }
      
      override public function start() : void
      {
         super.start();
         BUFFER_ID = 780;
         KTool.hideMapAllPlayerAndMonster();
         if(BufferRecordManager.getMyState(BUFFER_ID) == false)
         {
            TaskDiaLogManager.single.playStory(this.prevStroy,function():void
            {
               BufferRecordManager.setMyState(BUFFER_ID,true);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHaiDaoHandler);
               FightManager.fightWithBoss("尼斯克",1);
               KTool.showMapAllPlayerAndMonster();
            });
         }
         else
         {
            TaskDiaLogManager.single.playStory(this.prevStory2,function():void
            {
               KTool.showMapAllPlayerAndMonster();
               (animationMC["mc4"]["aiDierBtn"] as MovieClip).buttonMode = true;
               (animationMC["mc4"]["aiDierBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickAidierHandler);
            });
         }
      }
      
      private function onClickAidierHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AwakePartnerPanel"));
      }
      
      private function onFightOverHaiDaoHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         TaskDiaLogManager.single.playStory(this.prevStory2,function():void
         {
            (animationMC["mc4"]["aiDierBtn"] as MovieClip).buttonMode = true;
            (animationMC["mc4"]["aiDierBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,onClickAidierHandler);
         });
      }
      
      private function get prevStory2() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,4,"mc4"]);
         return [_loc1_];
      }
   }
}
