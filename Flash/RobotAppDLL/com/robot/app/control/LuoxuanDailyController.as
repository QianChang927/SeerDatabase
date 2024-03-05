package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class LuoxuanDailyController
   {
       
      
      public function LuoxuanDailyController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.CRACKSPACE_QUERY_SIGNIN,onCheck);
         SocketConnection.send(CommandID.CRACKSPACE_QUERY_SIGNIN);
      }
      
      private static function onCheck(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var value:uint = 0;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.CRACKSPACE_QUERY_SIGNIN,onCheck);
         data = e.data as ByteArray;
         value = data.readUnsignedInt();
         if(MainManager.actorInfo.crackCupTeamId == 0)
         {
            NpcDialog.show(NPC.DIYAGE,["啊，你还没有队伍呢，先去加入队伍然后再来领取变身球吧！"],["我要去加入队伍！","我只是路过而已！"],[function():void
            {
               MapManager.changeMap(332);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.DIYAGE,["你好呀赛尔！我看好你的队伍哦！今天打算帮自己的队伍干点什么呀！"],["我是来签到的！（每天一次）","我要为我的队伍加油！","我要帮我的队伍宣传！","我先四处看看！"],[function():void
            {
               if(value == 5)
               {
                  Alarm.show("你已经领取过奖励了，不要贪心哦！");
               }
               else if(TasksManager.getTaskStatus(460) == TasksManager.COMPLETE)
               {
                  Alarm.show("你已经签到过了，记得明天继续哦！");
               }
               else
               {
                  TasksManager.accept(460,function(param1:Boolean):void
                  {
                     var b:Boolean = param1;
                     TasksManager.complete(460,0,function(param1:Boolean):void
                     {
                        if(!param1)
                        {
                           return;
                        }
                        if(value != 4)
                        {
                           Alarm.show("这是你第" + (value + 1) + "次签到，累计签到5次将获得小型升级秘药、10万经验券。");
                        }
                     });
                  });
               }
            },function():void
            {
               if(MainManager.actorInfo.dailyResArr[250] == 1)
               {
                  Alarm.show("今天你已经加过油了，明天记得继续哦！");
               }
               else
               {
                  SocketConnection.send(CommandID.CRACKSPACE_CHEER);
                  MainManager.actorInfo.coins += 500;
                  MainManager.actorInfo.dailyResArr[250] = 1;
                  ItemInBagAlert.show(1,"500" + TextFormatUtil.getRedTxt("赛尔豆") + "已经让入了您的储存箱中！");
               }
            },function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("LuoxuanBallPanel"));
            }]);
         }
      }
   }
}
