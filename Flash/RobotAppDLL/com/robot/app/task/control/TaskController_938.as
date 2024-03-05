package com.robot.app.task.control
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
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class TaskController_938
   {
      
      public static const BUFF_ID:uint = 759;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_938()
      {
         super();
      }
      
      public static function initSPT(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         SocketConnection.send(1022,86060871);
         if(BufferRecordManager.getMyState(BUFF_ID))
         {
            taskMc.gotoAndStop(5);
            MapListenerManager.add(taskMc,attackBossFunc,"加蒂安");
            return;
         }
         KTool.hideMapAllPlayerAndMonster();
         SocketConnection.send(1022,86060872);
         TaskDiaLogManager.single.playStory(getTaskArr(),function():void
         {
            SocketConnection.send(1022,86060873);
            BufferRecordManager.setMyState(BUFF_ID,true);
            KTool.showMapAllPlayerAndMonster();
            MapListenerManager.add(taskMc,attackBossFunc,"加蒂安");
         });
      }
      
      private static function attackBossFunc(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.JIADIAN,["竟然敢闯进神灵的净土，不过你休想闯过我神灵卫士的这一关！"],["我无意扰乱这里，但我愿意接受你的考验！","对不起，我马上就走！"],[function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            FightBossController.fightBoss("加蒂安",0);
         },null]);
      }
      
      private static function onFightFinish(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.JIADIAN,["想不到你有如此强大的实力！！！你已经通过神灵卫士对你的考验了！希望你不是来惹是生非的。"],["记得继续保持哦！"]);
         }
         else
         {
            NpcDialog.show(NPC.JIADIAN,["你没有战胜我，立刻离开这里，弱者不配进入神灵的净土！"],["继续挑战你！","不是我拿的！"],[function():void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
               FightBossController.fightBoss("加蒂安",0);
            }]);
         }
      }
      
      private static function getTaskArr() : Array
      {
         var _loc1_:Array = null;
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["冒牌货！今天我要让你知道，宇宙中只有一个战神，那就是我盖亚！"],["狂妄的家伙！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["你已经被这个世界的弱者惯坏了，现在我要让你明白什么是真正的强者！"],["敢跟我这么说话？"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["不要再多说废话了，拳头上见真章吧！战神的称号可不是靠嘴说出来的！"],["正合我心意！"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["刚刚是谁在说话？"],["害怕了吗胆小鬼？"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["是谁在装神弄鬼？快出来！"],["你们实在太吵了！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["神灵？净土？这个世界怎么会有这种东西？"],["你们太无知了！"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["什么神灵？不过是装神弄鬼，以为可以吓唬到我艾辛格吗？"],["真是狂妄无知！"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
         return [_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_];
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["taskMc"];
      }
   }
}
