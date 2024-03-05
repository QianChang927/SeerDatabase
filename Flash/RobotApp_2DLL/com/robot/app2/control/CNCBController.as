package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class CNCBController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function CNCBController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["npc"].buttonMode = true;
         _map.conLevel["npc"].addEventListener(MouseEvent.CLICK,clickNPC);
      }
      
      public static function clickNPC(param1:Event) : void
      {
         var e:Event = param1;
         MainManager.actorModel.moveAndAction(new Point(250,400),function():void
         {
            NpcDialog.show(NPC.BAOLUOHANGZHANG,["中信星际银行开业啦，凡是办理了“0xff0000中信银行信用卡0xffffff”的小赛尔可以凭借此卡每周到银行来领取3万赛尔豆和5张一万经验券哦！"],["我要免费办理“中信银行信用卡”！","领取每周奖励！","我还是不办了••••••"],[function():void
            {
               click1();
            },function():void
            {
               click2();
            }]);
         });
      }
      
      private static function click1() : void
      {
         if(TasksManager.getTaskStatus(1781) == TasksManager.COMPLETE)
         {
            Alarm.show("您已经拥有了“中信银行信用卡”快去领取每周奖励吧！");
         }
         else
         {
            TasksManager.accept(1781,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               TasksManager.complete(1781,0,function(param1:Boolean):void
               {
                  if(!param1)
                  {
                     return;
                  }
                  SocketConnection.send(1022,86062889);
                  Alarm.show("您已经办理了中信银行信用卡，再次点击包罗行长领取奖励吧！");
               });
            });
         }
      }
      
      private static function click2() : void
      {
         ItemManager.upDateCollection(1700259,function():void
         {
            if(ItemManager.getNumByID(1700259) > 0)
            {
               SocketConnection.sendByQueue(CommandID.FUCK_SHINEHOO_TIMES,[20012],function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  var data:ByteArray = e.data as ByteArray;
                  var value:uint = data.readUnsignedInt();
                  if(value > 0)
                  {
                     NpcDialog.show(NPC.BAOLUOHANGZHANG,["本周您已经领取过你的奖励了，记得下周再来哦！"],["下周再来！"],[]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.BAOLUOHANGZHANG,["检查身份中••••••检查身份完成！你是已经拥有“0xff0000中信银行信用卡0xffffff”的小赛尔，领好你的奖励！记得下周再来哦！"],["下周再来！"],[function():void
                     {
                        SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,function(param1:SocketEvent):void
                        {
                           SocketConnection.removeCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,arguments.callee);
                           ItemInBagAlert.show(1,"30000个" + TextFormatUtil.getRedTxt("赛尔豆") + "已经放入了您的储存箱！");
                           ItemInBagAlert.show(400065,"5个" + TextFormatUtil.getRedTxt("一万经验券") + "已经放入了您的储存箱！");
                        });
                        SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,1501);
                     }]);
                  }
               });
            }
            else
            {
               NpcDialog.show(NPC.BAOLUOHANGZHANG,["检查身份中••••••检查身份完成！你尚未拥有“0xff0000中信银行信用卡0xffffff”哦！请办理了“中信银行信用卡”再来领取吧！"],["这就去办理“中信银行信用卡”！"],[]);
            }
         });
      }
      
      public static function destroy() : void
      {
         if(_map.conLevel["npc"])
         {
            _map.conLevel["npc"].removeEventListener(MouseEvent.CLICK,clickNPC);
         }
         _map = null;
      }
   }
}
