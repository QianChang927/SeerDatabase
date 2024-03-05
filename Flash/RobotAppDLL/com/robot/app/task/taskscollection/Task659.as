package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_659;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.debug.DebugTrace;
   
   public class Task659
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task659()
      {
         super();
      }
      
      public static function destory() : void
      {
         _map = null;
      }
      
      public static function initTask_5(param1:BaseMapProcess) : void
      {
         var checkTaskProgress:Function = null;
         var m:BaseMapProcess = param1;
         checkTaskProgress = function(param1:Array):void
         {
            if(!param1[0])
            {
               startProgress_0();
            }
            else if(Boolean(param1[0]) && !param1[1])
            {
               MapManager.changeMap(442);
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               startProgress_2();
            }
         };
         var taskStatus:uint = uint(TasksManager.getTaskStatus(TaskController_659.TASK_ID));
         if(taskStatus == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_659.TASK_ID,checkTaskProgress);
         }
      }
      
      public static function initTask_442(param1:BaseMapProcess) : void
      {
         var checkTaskProgress:Function = null;
         var m:BaseMapProcess = param1;
         checkTaskProgress = function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               startProgress_1();
            }
            else
            {
               removeResouse_442();
            }
         };
         _map = m;
         var ylwMC:MovieClip = _map.conLevel["CallYLWInstance"] as MovieClip;
         ylwMC.visible = false;
         if(TasksManager.getTaskStatus(TaskController_659.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_659.TASK_ID,checkTaskProgress);
         }
         else
         {
            removeResouse_442();
         }
      }
      
      private static function startProgress_0() : void
      {
         var content_3:String = null;
         var content_4:String = null;
         var content_5:String = null;
         var content_6:String = null;
         var dialogue_1:Function = null;
         var dialogue_2:Function = null;
         var dialogue_3:Function = null;
         var taskCompleteEventFunction:Function = null;
         dialogue_1 = function():void
         {
            NpcDialog.show(NPC.DOCTOR,[content_3],[content_4],[dialogue_2]);
         };
         dialogue_2 = function():void
         {
            NpcDialog.show(NPC.DOCTOR,[content_5],[content_6],[dialogue_3]);
         };
         dialogue_3 = function():void
         {
            TasksManager.complete(TaskController_659.TASK_ID,0,taskCompleteEventFunction);
            MapManager.changeMap(442);
         };
         taskCompleteEventFunction = function(param1:Boolean):void
         {
            if(!param1)
            {
               DebugTrace.show("复苏吧！草系之王！第一阶段任务提交失败！");
            }
         };
         var content_1:String = "据说在万年前有过一次圣战，事关谁是三系灵兽最强者的较量，但结果如何却无人知晓！";
         var content_2:String = "啊！三系灵兽！！！";
         content_3 = "是啊！曾经的远古鱼龙、上古炎兽、再加上草系之王被称为精灵世界的三系灵兽！受到万千精灵的敬仰。";
         content_4 = "哇！！好厉害啊！";
         content_5 = "不过关于那次圣战的情况，也只有它们三个才知道最后的结果，不如你先去尼古尔星找鱼龙王吧！相信性格随和的它会告诉你的！";
         content_6 = "恩，我这就去，终于可以和灵兽零距离接触咯！";
         NpcDialog.show(NPC.DOCTOR,[content_1],[content_2],[dialogue_1]);
      }
      
      private static function startProgress_1() : void
      {
         var content_1:String = null;
         var content_2:String = null;
         var content_3:String = null;
         var content_4:String = null;
         var content_5:String = null;
         var content_6:String = null;
         var content_7:String = null;
         var content_8:String = null;
         var content_9:String = null;
         var content_10:String = null;
         var content_11:String = null;
         var ylwMC:MovieClip = null;
         var dialogue_0:Function = null;
         var animate_0:Function = null;
         var dialogue_1:Function = null;
         var dialogue_2:Function = null;
         var dialogue_3:Function = null;
         var dialogue_4:Function = null;
         var dialogue_5:Function = null;
         var dialogue_6:Function = null;
         var dialogue_7:Function = null;
         var taskCompleteEventFunction:Function = null;
         dialogue_0 = function():void
         {
            ylwMC.visible = true;
            AnimateManager.playMcAnimate(ylwMC,0,"",animate_0);
         };
         animate_0 = function():void
         {
            NpcDialog.show(NPC.YULONGWANG,[content_1],[content_2],[dialogue_1]);
         };
         dialogue_1 = function():void
         {
            NpcDialog.show(NPC.YULONGWANG,[content_3],[content_4],[dialogue_2]);
         };
         dialogue_2 = function():void
         {
            NpcDialog.show(NPC.YULONGWANG,[content_5],[content_6],[dialogue_3]);
         };
         dialogue_3 = function():void
         {
            NpcDialog.show(NPC.YULONGWANG,[content_7],null,null,false,dialogue_4);
         };
         dialogue_4 = function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("caoxizhiwangFight"),dialogue_5);
         };
         dialogue_5 = function():void
         {
            NpcDialog.show(NPC.YULONGWANG,[content_8],[content_9],[dialogue_6]);
         };
         dialogue_6 = function():void
         {
            NpcDialog.show(NPC.YULONGWANG,[content_10],[content_11],[dialogue_7]);
         };
         dialogue_7 = function():void
         {
            TasksManager.complete(TaskController_659.TASK_ID,1,taskCompleteEventFunction);
            ylwMC.visible = false;
            MapManager.changeMap(5);
         };
         taskCompleteEventFunction = function(param1:Boolean):void
         {
            if(!param1)
            {
               DebugTrace.show("复苏吧！草系之王！第一阶段任务提交失败！");
            }
         };
         var content_0:String = "终于到了，这里就是鱼龙王生活的尼古尔星海底，不知道能不能遇到它呢！";
         var content_00:String = "鱼龙王….鱼龙王！";
         content_1 = "小赛尔！是你在呼唤我吗？难道发生什么事了吗？";
         content_2 = "恩！博士说草系之王已经苏醒！";
         content_3 = "什么！草系之王！！它醒了？";
         content_4 = "鱼龙王，你能告诉我关于圣战的事吗？";
         content_5 = "圣战！！那是多久之前的事啊！还记当时我们三个还未进化，上古炎兽、远古鱼龙与草系之王的战役！";
         content_6 = "快告诉我吧！究竟当时发生了什么！";
         content_7 = "好吧！回想当初....";
         content_8 = "事情就是这样的，当初要不是它的眼泪，估计谁都救不了我了！是它让我有了第二次生命！";
         content_9 = "原来是这样啊！";
         content_10 = "恩，如果你遇到了它，记得带上我对它的感激之情！好了，快走吧！否则等到暗流来袭可就晚了！";
         content_11 = "恩恩，我这就去和博士汇报！";
         ylwMC = _map.conLevel["CallYLWInstance"] as MovieClip;
         var shenzhanMC:MovieClip = _map.conLevel["CallYLWInstance"];
         NpcDialog.show(NPC.SEER,[content_0],[content_00],[dialogue_0]);
      }
      
      private static function startProgress_2() : void
      {
         var content_2:String = null;
         var content_3:String = null;
         var seerDialogExitHandler:Function = null;
         var doctorDialogQueHandler:Function = null;
         var taskCompleteEventFunction:Function = null;
         seerDialogExitHandler = function():void
         {
            NpcDialog.show(NPC.DOCTOR,[content_2],[content_3],[doctorDialogQueHandler]);
         };
         doctorDialogQueHandler = function():void
         {
            TasksManager.complete(TaskController_659.TASK_ID,2,taskCompleteEventFunction);
         };
         taskCompleteEventFunction = function(param1:Boolean):void
         {
            if(!param1)
            {
               DebugTrace.show("复苏吧！草系之王！第三阶段任务提交失败！");
            }
         };
         var content_1:String = "博士，我回来啦！我终于知道圣战的内幕了！简直太震撼了！";
         content_2 = "原来是这样，看来草系之王的能力在我预料之上啊！让我再好好研究一下！有事我会通知你的！";
         content_3 = "嗯，草系之王，精灵世界还有多少这样的灵兽？！";
         NpcDialog.show(NPC.SEER,[content_1],null,null,false,seerDialogExitHandler);
      }
      
      private static function removeResouse_442() : void
      {
      }
   }
}
