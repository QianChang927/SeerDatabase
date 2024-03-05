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
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class MissingPartnerController extends JPBaseMapController
   {
      
      private static var _instance:com.robot.app.control.MissingPartnerController;
       
      
      private var _callBack:Function;
      
      public function MissingPartnerController()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.control.MissingPartnerController
      {
         return _instance = _instance || new com.robot.app.control.MissingPartnerController();
      }
      
      override public function get animationMC() : MovieClip
      {
         return _curMap.controlLevel["taskMC"];
      }
      
      override public function depose() : void
      {
         super.depose();
      }
      
      override public function start() : void
      {
         super.start();
         PREV_TASK_ID = 768;
         if(BufferRecordManager.getMyState(PREV_TASK_ID))
         {
            KTool.hideMapAllPlayerAndMonster();
            this.animationMC.visible = true;
            TaskDiaLogManager.single.playStory(this.prevStroy2,function():void
            {
               KTool.showMapAllPlayerAndMonster();
               (animationMC["mc4"]["aiLiWengMC"] as MovieClip).addEventListener(MouseEvent.CLICK,onAiliWengClickHandler);
               (animationMC["mc4"]["aidaoMC"] as MovieClip).addEventListener(MouseEvent.CLICK,onHaiDaoClickHandler);
            });
         }
      }
      
      protected function onHaiDaoClickHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86061177);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightHaidaoInitHandler);
         FightManager.fightWithBoss("海盗",0);
      }
      
      protected function onFightHaidaoInitHandler(param1:PetFightEvent) : void
      {
      }
      
      protected function onAiliWengClickHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86061178);
         ModuleManager.showModule(ClientConfig.getAppModule("missPartner/MissingPartnerPanel"),"正在努力打开记忆中消失的面板...");
      }
      
      override public function addEvents() : void
      {
         super.addEvents();
         this.animationMC.buttonMode = true;
         this.animationMC.addEventListener(MouseEvent.CLICK,this.onPlayAnimationHandler);
      }
      
      private function onPlayAnimationHandler(param1:MouseEvent) : void
      {
         var cVo:CronTimeVo = null;
         var event:MouseEvent = param1;
         if(!BufferRecordManager.getMyState(PREV_TASK_ID))
         {
            cVo = new CronTimeVo("0-59","*","22-23","8","*","2013");
            if(cVo.checkTimeHit(SystemTimerManager.sysDate) != CronTimeVo.PAST)
            {
               KTool.showMapAllPlayerAndMonster();
               TaskDiaLogManager.single.playStory([new TaskMod(TaskDiaLogManager.DIALOG,NPC.KABEIJI,["咦？这里发生了什么?勇敢的赛尔，明天再来看看吧！"],["好的！"])],function():void
               {
               });
               return;
            }
            KTool.hideMapAllPlayerAndMonster();
            TaskDiaLogManager.single.playStory(this.prevStroy,function():void
            {
               SocketConnection.send(1022,86061176);
               BufferRecordManager.setMyState(PREV_TASK_ID,true);
               KTool.showMapAllPlayerAndMonster();
               if(PetManager.isPackSpiriHavetHp)
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverAiliwengInitHandler);
                  FightManager.fightWithBoss("埃利翁",1);
               }
               else
               {
                  TaskDiaLogManager.single.playStory(prevStroy2,function():void
                  {
                     (animationMC["mc4"]["aiLiWengMC"] as MovieClip).addEventListener(MouseEvent.CLICK,onAiliWengClickHandler);
                     (animationMC["mc4"]["aidaoMC"] as MovieClip).addEventListener(MouseEvent.CLICK,onHaiDaoClickHandler);
                  });
               }
            });
         }
      }
      
      private function onFightOverAiliwengInitHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverAiliwengInitHandler);
         BufferRecordManager.setMyState(772,false);
      }
      
      public function fightAiliWengWin() : void
      {
         TaskDiaLogManager.single.playStory(this.winAiliWeng,function():void
         {
            ItemInBagAlert.show(1,"1000个赛尔豆已经放入你的背包中！");
            MainManager.actorInfo.coins += 1000;
            ModuleManager.showModule(ClientConfig.getAppModule("NewYearPetFestivalPanel"),"正在努力打开最新活动面板...");
         });
      }
      
      private function get winAiliWeng() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIWENG,["你们……你们是我一起长大的卡贝基、尤克斯？我……我这是在哪里？ "],["啊！你终于想起来了！"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.UKESI,["我们都不知道为什么会来到这里，但是这一切一定会跟艾辛格有关系！ "],["我们一定要查清楚！"]);
         return [_loc1_,_loc2_];
      }
      
      public function fightAiliWengLoss() : void
      {
         TaskDiaLogManager.single.playStory(this.lossAiliWengStroy);
      }
      
      private function get lossAiliWengStroy() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIWENG,["不用再挣扎了！这个世界终究要被暗雷联盟主宰的！你们认输吧！ "]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KABEIJI,["艾辛格他们只是在利用我们！你就是我们一起长大的埃利翁，你难道忘记我们了吗？ "],["不要再白费力气了！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,4,"mc4"]);
         return [_loc1_,_loc2_,_loc3_];
      }
      
      protected function get prevStroy2() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,4,"mc4"]);
         return [_loc1_];
      }
      
      override protected function get prevStroy() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KABEIJI,["埃利翁？你是埃利翁吗？你还记得我们吗？我是卡贝基，这是我哥哥尤克斯啊！ "],["你说什么？"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["埃利翁？你们难道认识吗？那他为什么会突然出现把艾辛格救走？ "],["可他就是埃利翁啊！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.UKESI,["等等，他不是我们认识的埃利翁了！我感觉他全身都散发一股暗黑能量。"],["尤克斯还是一如既往的细心啊！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIWENG,["冤家路窄，你们兄弟就只能到这里了！艾辛格大人派我来解决你们！"],["你说什么？什么冤家路窄？"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KABEIJI,["你还是我们的伙伴埃利翁吗？你一定是被艾辛格利用了！他是在骗我们的！ "],["哼！我不会相信你们！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIWENG,["伙伴？哈哈！艾辛格大人告诉我，我和你们天生就是敌人。去和艾利逊做伙伴吧！"],["看来只有唤醒你的记忆了！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,3,"mc3"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIWENG,["简直是浪费时间。来吧！替艾辛格大人一起解决你们！"],["那我就不客气了！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_];
      }
      
      override public function removeEvents() : void
      {
         super.removeEvents();
         if(Boolean(this.animationMC) && this.animationMC.currentFrame == 4)
         {
         }
      }
   }
}
