package com.robot.app.task.control
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.core.CommandID;
   import com.robot.core.behavior.ChangeClothBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   
   public class TaskController_93
   {
      
      private static var panel:AppModel = null;
       
      
      public function TaskController_93()
      {
         super();
      }
      
      public static function taskSpeak() : void
      {
         NpcDialog.show(NPC.MAOMAO,["#3SOS！SOS！云霄星似乎来了个不速之客！我听我哥们幽浮说，提亚斯和它们正在准备开战呢！怎么办？怎么办？十万火急！"],["别急！我这就去看看！","你先让我好好想想，我一会再来找你吧！"],[function():void
         {
            NpcDialog.show(NPC.MAOMAO,["哎呀！差点忘记问你了！你有0xff0000飞行装0xffffff吗？#7要知道云霄星可是很特别的，没有飞行装和超能NoNo的帮助你可没办法上去！"],["我没有飞行装……"],[function():void
            {
               NpcDialog.show(NPC.MAOMAO,["不要着急，既然你是来帮助我的，我就送你一套飞行装吧。"],["太好了，谢谢你，毛毛。"],[function():void
               {
                  SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
                  SocketConnection.send(CommandID.ITEM_LIST,100048,100051,2);
               }]);
            },function():void
            {
               NpcDialog.show(NPC.MAOMAO,["0xff0000超能NoNo0xffffff可是赛尔号里最最了不起的发明哦！它可以帮助你上天入地，毫无阻碍！至于0xFF0000飞行装0xFFFFFF，云霄星上就可以领取，就在我身后，记得装备上哦"],["我这就去发明室开通超能NoNo！","我马上去领取飞行装！","我都知道了，谢谢你……"],[function():void
               {
                  MapManager.changeMap(107);
               },function():void
               {
                  MapManager.changeMap(8);
               }]);
            }]);
         }]);
      }
      
      private static function onItemCountHandler(param1:SocketEvent) : void
      {
         var stream:ByteArray;
         var typeCount:uint;
         var cloths:Array;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         stream = event.data as ByteArray;
         typeCount = stream.readUnsignedInt();
         cloths = [new PeopleItemInfo(100048),new PeopleItemInfo(100049),new PeopleItemInfo(100050),new PeopleItemInfo(100051)];
         if(typeCount != 0)
         {
            MainManager.actorModel.execBehavior(new ChangeClothBehavior(cloths));
            MainManager.actorInfo.clothes = cloths;
            DebugTrace.show("任务开始");
            TasksManager.accept(93,function():void
            {
               MapManager.changeMap(27);
            });
         }
         else
         {
            ItemAction.buyMultiItem(4,"飞行套装",100048,100049,100050,100051);
            MainManager.actorModel.execBehavior(new ChangeClothBehavior(cloths));
            MainManager.actorInfo.clothes = cloths;
            DebugTrace.show("任务开始");
            TasksManager.accept(93,function():void
            {
               MapManager.changeMap(27);
            });
         }
      }
      
      public static function highTask() : void
      {
         NpcDialog.show(NPC.TIYASI,["离我的蛋远一点！#5再不离开！我就开始进攻了！魔能风暴……"],["不好！那个精灵有危险！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["不行！那个精灵如果再受到提亚斯的攻击，它肯定会受伤的！我绝不允许精灵在我面前受伤！绝不！"],["不管了！我这就挡在那个精灵前面！"],[function():void
            {
               TasksManager.complete(93,0,null);
            }]);
         }]);
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_93"),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
         showPanel();
      }
      
      public static function showIcon() : void
      {
      }
      
      public static function delIcon() : void
      {
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
      }
   }
}
