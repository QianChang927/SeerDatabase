package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class SptTanHuangController
   {
      
      private static var _instance:SptTanHuangController;
       
      
      private const BUFFER_ID:uint = 905;
      
      private var _taskMC:MovieClip;
      
      public function SptTanHuangController()
      {
         super();
      }
      
      public static function get instance() : SptTanHuangController
      {
         return _instance = _instance || new SptTanHuangController();
      }
      
      public function get taskMC() : MovieClip
      {
         return this._taskMC;
      }
      
      public function start() : void
      {
         StoryLoaderManager.insatnce.swfName = "map_721_0";
         StoryLoaderManager.insatnce.setloaderHandler = this.loadAnimationHandler;
      }
      
      private function loadAnimationHandler(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         this._taskMC = mc;
         if(BufferRecordManager.getMyState(this.BUFFER_ID) == true)
         {
            KTool.showMapPlayerAndMonster();
            this._taskMC.gotoAndStop(5);
            this.addEvents();
         }
         else
         {
            KTool.hideMapAllPlayerAndMonster();
            TaskDiaLogManager.single.playStory(this.stroyLine,function():void
            {
               KTool.showMapAllPlayerAndMonster(true);
               BufferRecordManager.setMyState(BUFFER_ID,true);
               _taskMC.gotoAndStop(5);
               addEvents();
            });
         }
      }
      
      private function get stroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELEIZHA,["小矮个，你崇拜我吗？"],["崇拜你什么？"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELEIZHA,["你难道没看到我的弹跳功力吗？看我刚刚跳的多高！"],["那又怎么样？"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELEIZHA,["小把戏，你一定没感受过上面的新鲜空气，真是井底之蛙！"],["不过就是脚上有个弹簧而已，有什么了不起！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELEIZHA,["怎么样，现在开始崇拜我了吧！"],["……你这是有多希望别人崇拜你……"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELEIZHA,["我天生就是做偶像的料！是你们这帮机器人没眼光，没看到我的闪光点！"],["闪光点在哪儿？"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你这是怎么了！你刚刚说的爸爸妈妈是……？"],["不要你管！你给我走！"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你别哭了！我相信你会成为大家心中的偶像的！"],["你是说真的吗？"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KELEIZHA,["那我跟你打一场，我赢了你就做我第一个小粉丝好吗？"],["好的，来吧！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_];
      }
      
      private function addEvents() : void
      {
         if(this._taskMC.currentFrame == 5)
         {
            MapListenerManager.add(this._taskMC["mc5"]["manMc"],this.onFightClickHandler,"挑战我吧~~");
         }
      }
      
      protected function onFightClickHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.KELEIZHA,["我跟你打一场，我赢了你就做我第一个小粉丝好吗？"],["好的，来吧！","让我再准备一下！"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
            FightManager.fightWithBoss("克雷扎",0);
         }]);
      }
      
      protected function onFightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
         info = event.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.KELEIZHA,["没想到你那么厉害！再来一次好吗！"],["哈哈，那我们开始吧！"]);
         }
         else
         {
            NpcDialog.show(NPC.KELEIZHA,["你输了，现在我就是你的偶像了！"],["继续挑战你！","让我再准备一下！"],[function():void
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
               FightManager.fightWithBoss("克雷扎",0);
            }]);
         }
      }
   }
}
