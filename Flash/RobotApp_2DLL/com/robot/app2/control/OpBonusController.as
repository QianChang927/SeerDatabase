package com.robot.app2.control
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import org.taomee.events.SocketEvent;
   
   public class OpBonusController
   {
       
      
      public function OpBonusController()
      {
         super();
      }
      
      public static function initFor4() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap4);
         MapManager.changeMap(4);
      }
      
      private static function onSwitchMap4(param1:MapEvent) : void
      {
         var step1:TaskMod;
         var step2:TaskMod;
         var step3:TaskMod;
         var step4:TaskMod;
         var story:Array;
         var e:MapEvent = param1;
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap4);
         step1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["罗杰船长，新年好！"],["新年好啊，赛尔。"]);
         step2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["随着第六星系的发现，新的一年赛尔号将赢来全新的挑战，你准备好了吗？"],["时刻准备着，船长！"]);
         step3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["赛尔号将勇往直前，我们无所畏惧！"],["很好，赛尔。"]);
         step4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["有礼貌又有勇气的赛尔，我很喜欢，接下来去问候一下0xff0000贾斯汀站长0xffffff吧！"],["好的，船长！"]);
         story = [step1,step2,step3,step4];
         TaskDiaLogManager.single.playStory(story,function():void
         {
            SocketConnection.addCmdListener(CommandID.NEW_YEAR_OP_BONUS,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.NEW_YEAR_OP_BONUS,arguments.callee);
               ModuleManager.showModule(ClientConfig.getAppModule("OpBonusPanel"));
            });
            SocketConnection.send(CommandID.NEW_YEAR_OP_BONUS,1,1);
         });
      }
      
      public static function initFor102() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap102);
         MapManager.changeMap(102);
      }
      
      private static function onSwitchMap102(param1:MapEvent) : void
      {
         var step1:TaskMod;
         var step2:TaskMod;
         var step3:TaskMod;
         var step4:TaskMod;
         var story:Array;
         var e:MapEvent = param1;
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap102);
         step1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["贾斯汀站长，新年好！"],["哦，原来是你啊。"]);
         step2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["谢谢你的问候，也祝你新年快乐！不过，在节日里也不能放送警惕，我们可是有保卫赛尔号的重任！"],["我明白，贾斯汀站长！"]);
         step3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["有贾斯汀站长的守护，赛尔号一定会安然无恙！"],["说得不错，哈哈！"]);
         step4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["接下来去问候一下特瑞院长吧，好久没有赛尔去看望他了，节日里可不能忘记了他！"],["好的，站长！"]);
         story = [step1,step2,step3,step4];
         TaskDiaLogManager.single.playStory(story,function():void
         {
            SocketConnection.addCmdListener(CommandID.NEW_YEAR_OP_BONUS,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.NEW_YEAR_OP_BONUS,arguments.callee);
               ModuleManager.showModule(ClientConfig.getAppModule("OpBonusPanel"));
            });
            SocketConnection.send(CommandID.NEW_YEAR_OP_BONUS,1,2);
         });
      }
      
      public static function initFor485() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap485);
         MapManager.changeMap(485);
      }
      
      private static function onSwitchMap485(param1:MapEvent) : void
      {
         var step1:TaskMod;
         var step2:TaskMod;
         var step3:TaskMod;
         var step4:TaskMod;
         var story:Array;
         var e:MapEvent = param1;
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap485);
         step1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["特瑞院长，新年快乐！好久不见，看起来越来越威武了呢！"],["哦嚯嚯，那是当然的。"]);
         step2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TE_RUI,["可不要以为拍我马屁就可以放松训练了，最近进步怎么样？"],["嗯，那我就拭目以待了。"]);
         step3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["不过我们可没有放送，等到新年过了，再来检查我们的学习成功吧！"],["嗯，那我就拭目以待了。"]);
         step4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TE_RUI,["祝赛尔们度过一个美好的新年，我们准备了很多礼物呢，快去拿吧！"],["好的，特瑞院长！"]);
         story = [step1,step2,step3,step4];
         TaskDiaLogManager.single.playStory(story,function():void
         {
            SocketConnection.addCmdListener(CommandID.NEW_YEAR_OP_BONUS,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.NEW_YEAR_OP_BONUS,arguments.callee);
               ModuleManager.showModule(ClientConfig.getAppModule("OpBonusPanel"));
            });
            SocketConnection.send(CommandID.NEW_YEAR_OP_BONUS,1,3);
         });
      }
      
      public static function destroy() : void
      {
      }
   }
}
