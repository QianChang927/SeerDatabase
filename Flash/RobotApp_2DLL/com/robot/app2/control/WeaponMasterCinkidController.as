package com.robot.app2.control
{
   import com.robot.app2.alert.WeaponMasterCinkidAlert;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class WeaponMasterCinkidController
   {
      
      public static const ITEM_ID_ARR:Array = [1200816,1200817,1200818];
      
      public static const VISUAL_ITEM_ID_ARR:Array = [1400065,1400066,1400067];
      
      public static const RESTRICT_NUM_ARR:Array = [5,5,3];
      
      public static const SYS_NAME_ARR:Array = ["武器系统","装甲系统","动力系统"];
      
      public static const MAP_ID_ARR:Array = [424,750,49];
      
      private static var _itemNumArr:Array = [0,0,0];
      
      private static var _alarmPanel:MovieClip = null;
       
      
      public function WeaponMasterCinkidController()
      {
         super();
      }
      
      public static function setup() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCinkidItemGot);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onCinkidFightOver);
      }
      
      public static function onCinkidItemGot(param1:ItemEvent) : void
      {
         var _loc3_:SingleItemInfo = null;
         var _loc2_:int = 0;
         while(_loc2_ < VISUAL_ITEM_ID_ARR.length)
         {
            _loc3_ = ItemManager.getCollectionInfo(VISUAL_ITEM_ID_ARR[_loc2_]);
            if(_loc3_ != null)
            {
               _itemNumArr[_loc2_] = _loc3_.itemNum;
            }
            else
            {
               _itemNumArr[_loc2_] = 0;
            }
            _loc2_++;
         }
      }
      
      private static function onCinkidFightOver(param1:PetFightEvent) : void
      {
         if(MapManager.currentMap != null)
         {
            if(MAP_ID_ARR.indexOf(MapManager.currentMap.id) < 0)
            {
               return;
            }
            refreshItem();
         }
      }
      
      private static function refreshItem() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemGet);
         SocketConnection.send(CommandID.ITEM_LIST,VISUAL_ITEM_ID_ARR[0],VISUAL_ITEM_ID_ARR[VISUAL_ITEM_ID_ARR.length - 1],2);
      }
      
      private static function onItemGet(param1:SocketEvent) : void
      {
         var hashMap:HashMap;
         var dataArr:ByteArray;
         var len:uint;
         var i:uint;
         var info:SingleItemInfo = null;
         var temp:uint = 0;
         var wmcaAlert:WeaponMasterCinkidAlert = null;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemGet);
         hashMap = new HashMap();
         dataArr = e.data as ByteArray;
         dataArr.position = 0;
         len = dataArr.readUnsignedInt();
         i = 0;
         while(i < len)
         {
            info = new SingleItemInfo(dataArr);
            hashMap.add(info.itemID,info.itemNum);
            i++;
         }
         i = 0;
         while(i < VISUAL_ITEM_ID_ARR.length)
         {
            if(hashMap.containsKey(uint(VISUAL_ITEM_ID_ARR[i])))
            {
               temp = uint(_itemNumArr[i]);
               _itemNumArr[i] = uint(hashMap.getValue(VISUAL_ITEM_ID_ARR[i]));
               if(temp == uint(RESTRICT_NUM_ARR[i]) - 1 && _itemNumArr[i] == temp + 1)
               {
                  wmcaAlert = new WeaponMasterCinkidAlert();
                  wmcaAlert.show(1,i + 4,0,function():void
                  {
                     MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchOver);
                     MapManager.changeMap(91);
                  });
               }
            }
            i++;
         }
         hashMap.clear();
         hashMap = null;
      }
      
      private static function onMapSwitchOver(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchOver);
         ModuleManager.showModule(ClientConfig.getAppModule("WeaponMasterCinkidMainPanel"));
      }
      
      public static function initForMap() : void
      {
         if(!BufferRecordManager.getState(MainManager.actorInfo,658))
         {
            NpcDialog.show(NPC.SEER,["武器大师，你还坚持的住么？"],["我...我还好..."],[function():void
            {
               NpcDialog.show(NPC.XINJIDE,["你都已经把自己变成这样了！你是武器大师啊，你修复了那么多的机器，为什么不能修复你自己呢？"],["以我目前的状态，我已经没有能力修复我自己了！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["没有关系，我可以帮你啊！"],["至今还没有人能做到这件事情。"],[function():void
                  {
                     NpcDialog.show(NPC.XINJIDE,["要完成修复工作需要搜集0xff00003种稀有0xffffff的材料，分别是0xff0000合金弹头，能量块以及合金装甲0xffffff，搜集到这些材料我就可以尝试修复我自己了。"],["好，我这就去收集！"],[function():void
                     {
                        BufferRecordManager.setState(MainManager.actorInfo,658,true);
                        ModuleManager.showModule(ClientConfig.getAppModule("WeaponMasterCinkidMainPanel"));
                     }]);
                  }]);
               }]);
            }]);
         }
         else
         {
            if(BufferRecordManager.getState(MainManager.actorInfo,660))
            {
               MapManager.currentMap.controlLevel["cinkid"].gotoAndStop(2);
            }
            ModuleManager.showModule(ClientConfig.getAppModule("WeaponMasterCinkidMainPanel"));
         }
      }
      
      public static function playStory(param1:String) : void
      {
         var fulScreenUrl:String = param1;
         AnimateManager.playFullScreenAnimate(fulScreenUrl,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WeaponMasterCinkidMainPanel"));
         });
      }
      
      public static function playFinishAnimate(param1:String) : void
      {
         var fulScreenUrl:String = param1;
         AnimateManager.playFullScreenAnimate(fulScreenUrl,function():void
         {
            NpcDialog.show(NPC.XINJIDE,[MainManager.actorInfo.formatNick + "，非常感谢你的帮助，我现在感觉比之前好很多了！"],["哈哈...太棒了！武器大师再次崛起咯！"],[function():void
            {
               NpcDialog.show(NPC.XINJIDE,["为了感谢你的帮助，现在就让你见识一下武器大师的终极奥义吧！如果你能战胜我，你就会获得我武器大师-0xff0000辛基德的精元0xffffff。"],["真的吗？那我可要加油了！"],[function():void
               {
                  NpcDialog.show(NPC.XINJIDE,["别高兴的太早哦！我的专长可不止是修理机器那么简单，利用各种武器战斗也是我的强项，不然我也不叫武器大师了！"],["嗯...尊敬的武器大师，我一定会击败你的！"],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("WeaponMasterCinkidMainPanel"));
                  }]);
               }]);
            }]);
         });
      }
   }
}
