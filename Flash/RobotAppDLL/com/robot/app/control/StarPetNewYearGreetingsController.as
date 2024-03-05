package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.INpcModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class StarPetNewYearGreetingsController
   {
      
      public static var npcMap:HashMap = new HashMap();
      
      private static var index:int;
      
      private static var npcId:uint;
      
      private static var npcObj;
      
      {
         setup();
      }
      
      public function StarPetNewYearGreetingsController()
      {
         super();
      }
      
      private static function setup() : void
      {
         npcMap.add(1,{
            "npc":NPC.SHIPER,
            "map":4,
            "cntId":86068520
         });
         npcMap.add(3,{
            "npc":NPC.DOCTOR,
            "map":5,
            "cntId":86068521
         });
         npcMap.add(103,{
            "npc":NPC.KELUO,
            "map":332,
            "cntId":86068522
         });
         npcMap.add(6,{
            "npc":NPC.SHAWN,
            "map":107,
            "cntId":86068523
         });
         npcMap.add(2,{
            "npc":NPC.CICI,
            "map":8,
            "cntId":86068524
         });
         npcMap.add(101,{
            "npc":NPC.JUSTIN,
            "map":102,
            "cntId":86068525
         });
      }
      
      public static function onGetReward() : void
      {
         KTool.getMultiValue([3065 + index,13038 + index],function(param1:Array):void
         {
            var a:Array = param1;
            var time:uint = uint(a[0]);
            var count:uint = uint(a[1]);
            npcObj = npcMap.getValue(npcId);
            if(count >= 3)
            {
               NpcDialog.show(npcObj.npc,[MainManager.actorInfo.formatNick + "，不要太贪心哦！记得明天再来领取红包吧！可以兑换超多奖励的！ "],["我要兑换奖励！","一会再来领红包！"],[onExchange]);
            }
            else if(SystemTimerManager.time < time)
            {
               NpcDialog.show(npcObj.npc,[MainManager.actorInfo.formatNick + "，不要太贪心哦！记得0xFF000030分钟之后0xFFFFFF再来领取红包吧！可以兑换超多奖励的！ "],["我要兑换奖励！","明天再来领红包！"],[onExchange]);
            }
            else
            {
               SocketConnection.sendWithCallback(CommandID.STARPET_NEWYEARGREETINGS_GET_REWARD,function(param1:SocketEvent):void
               {
                  NpcDialog.show(npcObj.npc,["送你0xFF00005个福马红包，0xFFFFFF记得0xFF000030分钟之后0xFFFFFF再来领取红包哦！可以兑换超多奖励的！ "],["我要兑换奖励！","一会再来领红包！"],[onExchange]);
               },index + 1);
            }
         });
      }
      
      public static function onExchange() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("StarPetNewYearGreetingsPanel"));
      }
      
      public static function onClickNpc(param1:INpcModel, param2:Function) : void
      {
         var onAcceptTask:Function = null;
         var cls:* = undefined;
         var npc:INpcModel = param1;
         var callback:Function = param2;
         onAcceptTask = function():void
         {
            var _loc1_:* = getDefinitionByName("com.robot.app.npc.taskPanel.NpcTaskPanel");
            _loc1_.show(npc.tasks,npc.npcInfo);
         };
         npcId = npc.npcInfo.npcId;
         index = npcMap.getKeys().indexOf(npcId);
         npcObj = npcMap.getValue(npcId);
         if(npcObj != null && uint(npcObj.cntId) > 0)
         {
            SocketConnection.send(1022,npcObj.cntId);
         }
         if(index != -1)
         {
            if(npcId == 1 || npcId == 3)
            {
               NpcDialog.show(npcObj.npc,["新年新气象！" + MainManager.actorInfo.formatNick + "，过年好啊！找我有什么事吗？"],["我来领取" + (npcId == 1 ? "主线" : "") + "任务！","新年领红包！"],[onAcceptTask,onGetReward]);
            }
            else
            {
               cls = getDefinitionByName("com.robot.app.npc.npcClass.NpcClass_" + npc.npcInfo.npcId);
               cls.start("新年领红包！");
            }
         }
         else
         {
            callback();
         }
      }
   }
}
