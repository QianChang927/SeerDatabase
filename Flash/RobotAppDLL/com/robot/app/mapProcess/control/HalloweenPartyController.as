package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class HalloweenPartyController
   {
      
      private static var _map:BaseMapProcess;
       
      
      private const maskArr:Array = [1200355,1200356,1200357,1200358];
      
      public function HalloweenPartyController()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["taskmc"];
      }
      
      public static function setup() : void
      {
      }
      
      public static function initForMap787(param1:BaseMapProcess) : void
      {
         _map = param1;
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onStart);
         (_map.depthLevel["prize"] as MovieClip).buttonMode = true;
         (_map.depthLevel["info"] as MovieClip).buttonMode = true;
         (_map.depthLevel["prize"] as MovieClip).addEventListener(MouseEvent.CLICK,onOpenPrize);
         (_map.depthLevel["info"] as MovieClip).addEventListener(MouseEvent.CLICK,onOpenInfo);
      }
      
      private static function onOpenInfo(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("HalloweenPanel/HalloweenPanel2"));
      }
      
      private static function onOpenPrize(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("HalloweenPanel/HalloweenPanel3"));
      }
      
      private static function onStart(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.HALUOWEI,["Hi！赛尔！欢迎你来到哈罗威的南瓜墓场！全新的万圣节化妆舞会正在隆重开幕！快来参加吧！"],["哈？变身舞会！？"],[function():void
         {
            NpcDialog.show(NPC.HALUOWEI,["对呀，别磨蹭啦！简单的说，舞会就是积累万圣鬼脸糖！绝版精灵和礼物还有钻石道具都等着你呢！马上参加吧！记得先领取一个属于你的南瓜面具哦！"],["我要领取南瓜面具","我要查看舞会奖励","怎么得万圣鬼脸糖","我要挑战你"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HalloweenPanel/HalloweenPanel1"));
            },function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HalloweenPanel/HalloweenPanel3"));
            },function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HalloweenPanel/HalloweenPanel2"));
            },function():void
            {
               ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCheckMask);
               ItemManager.getCollection();
            }]);
         }]);
      }
      
      private static function onCheckMask(param1:ItemEvent) : void
      {
         var e:ItemEvent = param1;
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCheckMask);
         if(!ItemManager.getCollectionInfo(1200355) && !ItemManager.getCollectionInfo(1200356) && !ItemManager.getCollectionInfo(1200357) && !ItemManager.getCollectionInfo(1200358))
         {
            Alarm.show("你没领面具哦！快领一个吧！",function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HalloweenPanel/HalloweenPanel1"));
            });
         }
         else
         {
            FightManager.fightWithBoss("哈罗威",0);
         }
      }
      
      private static function onItemCountHandler(param1:SocketEvent) : void
      {
         var stream:ByteArray;
         var typeCount:uint;
         var info:SingleItemInfo = null;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         stream = event.data as ByteArray;
         typeCount = stream.readUnsignedInt();
         if(typeCount != 0)
         {
            info = new SingleItemInfo(stream);
            if(info.itemNum > 10)
            {
            }
            if(MainManager.actorInfo.clothIDs.indexOf(0))
            {
               FightManager.fightWithBoss("哈罗威",0);
            }
            else
            {
               Alarm.show("你没带面具哦！");
            }
         }
         else
         {
            Alarm.show("你没领面具哦！快领一个吧！",function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HalloweenPanel/HalloweenPanel1"));
            });
         }
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            (_map.depthLevel["prize"] as MovieClip).removeEventListener(MouseEvent.CLICK,onOpenPrize);
            (_map.depthLevel["info"] as MovieClip).removeEventListener(MouseEvent.CLICK,onOpenInfo);
            taskMC.removeEventListener(MouseEvent.CLICK,onStart);
            DisplayUtil.removeForParent(taskMC);
            _map = null;
         }
      }
   }
}
