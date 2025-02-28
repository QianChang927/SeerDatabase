package com.robot.app.mapProcess.control
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class GhostTigerKingTrainingController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function GhostTigerKingTrainingController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.depthLevel["tiger2"].buttonMode = true;
         _map.depthLevel["tiger2"].addEventListener(MouseEvent.CLICK,onTigerClick);
         ToolTipManager.add(_map.depthLevel["tiger2"],"幽灵猛虎王");
         if(MapManager.currentMap.id == 670)
         {
            _map.depthLevel["broad2"].addEventListener(MouseEvent.CLICK,onBroadClick);
            ToolTipManager.add(_map.depthLevel["broad2"],"幽灵猛虎王的历练");
         }
      }
      
      private static function onBroadClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GhostTigerKingTrainingPanel"),"正在打开....");
      }
      
      private static function onTigerClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(MapManager.currentMap.id == 670)
         {
            SocketConnection.send(1022,84806704);
         }
         else if(MapManager.currentMap.id == 103)
         {
            SocketConnection.send(1022,84806705);
         }
         NpcDialog.show(NPC.YOULINGMENGHUWANG,["我和猛虎王不一样,你实在弱爆了！我们的实力天差地别，不信尽管来试试吧！ 0xff0000(单精灵对战)0xffffff"],["免费挑战","付费挑战","我只是来围观的"],[function():void
         {
            checkFree();
         },function():void
         {
            checkBuy();
         }]);
      }
      
      private static function checkBuy() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemList);
         SocketConnection.send(CommandID.ITEM_LIST,1200144,1200144,2);
      }
      
      private static function onItemList(param1:SocketEvent) : void
      {
         var _loc7_:Array = null;
         var _loc8_:Boolean = false;
         var _loc9_:uint = 0;
         var _loc10_:PetInfo = null;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemList);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         while(_loc6_ < _loc3_)
         {
            _loc4_ = _loc2_.readUnsignedInt();
            _loc5_ = _loc2_.readUnsignedInt();
            _loc6_++;
         }
         if(_loc5_ > 0)
         {
            fightWithTiger(1);
         }
         else if(PetManager.length == 0)
         {
            Alarm.show("你的背包里还没有一只精灵哦！");
         }
         else
         {
            _loc7_ = PetManager.infos;
            _loc8_ = false;
            _loc9_ = 0;
            while(_loc9_ < _loc7_.length)
            {
               if((_loc10_ = _loc7_[_loc9_] as PetInfo).isDefault)
               {
                  if(_loc10_.hp > 0)
                  {
                     _loc8_ = true;
                  }
                  break;
               }
               _loc9_++;
            }
            if(!_loc8_)
            {
               Alarm.show("你背包里面的首发精灵体力都不够了哦！赶紧给它们补充体力吧！");
               return;
            }
            EventManager.addEventListener(RobotEvent.MONEY_BUY,onBuy);
            ProductAction.buyMoneyProduct(200526);
         }
      }
      
      private static function checkFree() : void
      {
         var _listData:Array = null;
         var canFight:Boolean = false;
         var i:uint = 0;
         var petinfo:PetInfo = null;
         if(TasksManager.getTaskStatus(458) == TasksManager.COMPLETE)
         {
            NpcDialog.show(NPC.YOULINGMENGHUWANG,["今天的免费挑战机会已经用过了哦！你可以选择支付1钻石获得额外的挑战机会。"],["付费挑战","我只是来围观的"],[function():void
            {
               checkBuy();
            }]);
         }
         else if(PetManager.length == 0)
         {
            Alarm.show("你的背包里还没有一只精灵哦！");
         }
         else
         {
            _listData = PetManager.infos;
            canFight = false;
            i = 0;
            while(i < _listData.length)
            {
               petinfo = _listData[i] as PetInfo;
               if(petinfo.isDefault)
               {
                  if(petinfo.hp > 0)
                  {
                     canFight = true;
                  }
                  break;
               }
               i++;
            }
            if(!canFight)
            {
               Alarm.show("你背包里面的首发精灵体力都不够了哦！赶紧给它们补充体力吧！");
               return;
            }
            fightWithTiger(0);
         }
      }
      
      private static function onBuy(param1:DynamicEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.MONEY_BUY,onBuy);
         fightWithTiger(1);
      }
      
      private static function fightWithTiger(param1:uint) : void
      {
         var type:uint = param1;
         SocketConnection.addCmdListener(CommandID.FRIEND_REGRESSION_MENHUWANG_FIGHT_TYPE,function():void
         {
            SocketConnection.removeCmdListener(CommandID.FRIEND_REGRESSION_MENHUWANG_FIGHT_TYPE,arguments.callee);
            if(MapManager.currentMap.id == 670)
            {
               FightManager.fightWithBoss("幽灵猛虎王",2);
            }
            else if(MapManager.currentMap.id == 103)
            {
               FightManager.fightWithBoss("幽灵猛虎王",0);
            }
         });
         SocketConnection.send(CommandID.FRIEND_REGRESSION_MENHUWANG_FIGHT_TYPE,type);
      }
      
      public static function destroy() : void
      {
         EventManager.removeEventListener(RobotEvent.MONEY_BUY,onBuy);
         if(_map)
         {
            ToolTipManager.remove(_map.depthLevel["tiger2"]);
            _map.depthLevel["tiger2"].removeEventListener(MouseEvent.CLICK,onTigerClick);
            if(MapManager.currentMap.id == 670)
            {
               _map.depthLevel["broad2"].removeEventListener(MouseEvent.CLICK,onBroadClick);
               ToolTipManager.remove(_map.depthLevel["broad2"]);
            }
            _map = null;
         }
      }
   }
}
