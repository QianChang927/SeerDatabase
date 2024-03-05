package com.robot.app.control
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class FreeHaYeKeController extends JPBaseMapController
   {
      
      private static var _instance:com.robot.app.control.FreeHaYeKeController;
       
      
      public function FreeHaYeKeController()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.control.FreeHaYeKeController
      {
         return _instance = _instance || new com.robot.app.control.FreeHaYeKeController();
      }
      
      override public function addEvents() : void
      {
         super.addEvents();
      }
      
      override public function get animationMC() : MovieClip
      {
         return _curMap.controlLevel["taskMC"];
      }
      
      override public function depose() : void
      {
         super.depose();
      }
      
      override protected function get prevStroy() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELAIAO,["好久不见了，我的朋友！最近可还好啊？ "],["哈哈哈…"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAYEKE,["你这个使用卑鄙伎俩将我困在此处的小人，居然还有脸来见我！ "],["敢和我正大光明的再战一场嘛？"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELAIAO,["你这个手下败将，是谁给你勇气对我如此说话？难道不怕我彻底了结你吗？ "],["如蝼蚁般活着不是很好嘛？"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAYEKE,["不要再多说废话了，来看看我现在的实力吧"],["正合我心意！"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,2,"mc2"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELAIAO,["刚刚是谁在说话？"],["赶紧给我出来，不要装神弄鬼！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,3,"mc3"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELAIAO,["原来是你！我的私人恩怨，就不用你插手了吧！"],["你说啦？"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,4,"mc4"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,5,"mc5"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_];
      }
      
      override public function removeEvents() : void
      {
         super.removeEvents();
      }
      
      override public function start() : void
      {
         super.start();
         BUFFER_ID = 791;
         if(!BufferRecordManager.getMyState(BUFFER_ID))
         {
            SocketConnection.send(1022,86061851);
            KTool.hideMapAllPlayerAndMonster();
            this.animationMC.visible = true;
            this.animationMC.gotoAndStop(5);
            KTool.showMapAllPlayerAndMonster();
            BufferRecordManager.setMyState(BUFFER_ID,true);
            SocketConnection.send(1022,86061852);
            this.animationMC.buttonMode = true;
            this.animationMC.addEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
         }
         else
         {
            this.animationMC.buttonMode = true;
            this.animationMC.gotoAndStop(5);
            this.animationMC.addEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
         }
      }
      
      private function onMouseClickHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.HAYEKE,["你是谁，怎么会来到这里？"],["我想挑战你！","我只是路过，马上就走！"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverSPTHandler);
            FightBossController.fightBoss("哈耶克",4);
         }],false,null);
      }
      
      private function onFightOverSPTHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverSPTHandler);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            TaskDiaLogManager.single.playStory(this.winStory,function():void
            {
            });
         }
         else if(info.winnerID == 0)
         {
            NpcDialog.show(NPC.HAYEKE,["你还没有能力战胜我，如何能在众多星球之间自由前行！"],["继续挑战你！","暂且先回去，再准备一下！"],[function():void
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverSPTHandler);
               FightBossController.fightBoss("哈耶克",4);
            }],false,null);
         }
      }
      
      private function get winStory() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.HAYEKE,["想不到你仅有如此强大的实力！！！你已经通过我对你的考验了！  "],["记得继续努力哦！"]);
         return [_loc1_];
      }
   }
}
