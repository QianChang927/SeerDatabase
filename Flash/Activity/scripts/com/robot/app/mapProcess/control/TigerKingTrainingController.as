package com.robot.app.mapProcess.control
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class TigerKingTrainingController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function TigerKingTrainingController()
      {
         super();
      }
      
      public static function tigerKing(param1:BaseMapProcess) : void
      {
         var t:uint = 0;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.depthLevel["broad"].buttonMode = true;
         _map.depthLevel["broad"].addEventListener(MouseEvent.CLICK,onBroadClick);
         CommonUI.addYellowExcal(_map.depthLevel["tiger"]);
         ToolTipManager.add(_map.depthLevel["tiger"],"猛虎王");
         ToolTipManager.add(_map.depthLevel["broad"],"猛虎王的历练");
         if(!BufferRecordManager.getState(MainManager.actorInfo,228))
         {
            t = setTimeout(function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("menhuwang"),function():void
               {
                  NpcDialog.show(NPC.SEER,["咦~这不是猛虎王吗？它怎么会出现在这里，真兴奋！"],["（点击猛虎王）"],[function():void
                  {
                     _map.depthLevel["tiger"].buttonMode = true;
                     _map.depthLevel["tiger"].addEventListener(MouseEvent.CLICK,onStoryTigerClick);
                     BufferRecordManager.setState(MainManager.actorInfo,228,true);
                  }]);
               });
            },2000);
         }
         else
         {
            _map.depthLevel["tiger"].buttonMode = true;
            _map.depthLevel["tiger"].addEventListener(MouseEvent.CLICK,onTigerClick);
         }
      }
      
      private static function onBroadClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TigerKingTrainingPanel"),"正在打开....");
      }
      
      private static function onStoryTigerClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         _map.depthLevel["tiger"].buttonMode = false;
         _map.depthLevel["tiger"].removeEventListener(MouseEvent.CLICK,onStoryTigerClick);
         NpcDialog.show(NPC.MENGHUWANG,["好久不见，小赛尔！一年过去了，你的实力有提升吗？我可是今非昔比了呢！想要战胜我的话，可没想象中那么容易了哦！"],["我绝对有信心战胜你！"],[function():void
         {
            NpcDialog.show(NPC.MENGHUWANG,["春节期间，期待你展现让我刮目相看的实力！只要从我这里收集足够的虎之碎片，我就将猛虎王精元送给你，加油吧！"],["对我来说轻而易举，走着瞧吧！"],[function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,228,true,function():void
               {
                  _map.depthLevel["tiger"].buttonMode = true;
                  _map.depthLevel["tiger"].addEventListener(MouseEvent.CLICK,onTigerClick);
               });
            }]);
         }]);
      }
      
      private static function onTigerClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.MENGHUWANG,["实力与勇气的试炼！我会随时等待你的挑战，准备好了吗？0xff0000(单精灵对战)0xffffff"],["免费挑战","付费挑战","查看活动规则","我只是来围观的"],[function():void
         {
            checkFree();
         },function():void
         {
            checkBuy();
         },function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TigerKingTrainingPanel"),"正在打开....");
         }]);
      }
      
      private static function checkBuy() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemList);
         SocketConnection.send(CommandID.ITEM_LIST,400932,400932,2);
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
            ProductAction.buyMoneyProduct(200443);
         }
      }
      
      private static function checkFree() : void
      {
         var _listData:Array = null;
         var canFight:Boolean = false;
         var i:uint = 0;
         var petinfo:PetInfo = null;
         if(TasksManager.getTaskStatus(440) == TasksManager.COMPLETE)
         {
            NpcDialog.show(NPC.MENGHUWANG,["今天的免费挑战机会已经用过了哦！你可以选择支付10钻石获得额外的挑战机会。"],["付费挑战","我只是来围观的"],[function():void
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
         SocketConnection.addCmdListener(CommandID.MENHUWANG_FIGHT_TYPE,function():void
         {
            SocketConnection.removeCmdListener(CommandID.MENHUWANG_FIGHT_TYPE,arguments.callee);
            FightManager.fightWithBoss("猛虎王",1);
         });
         SocketConnection.send(CommandID.MENHUWANG_FIGHT_TYPE,type);
      }
      
      public static function destroy() : void
      {
         EventManager.removeEventListener(RobotEvent.MONEY_BUY,onBuy);
         if(_map)
         {
            if(_map.depthLevel["tiger"])
            {
               ToolTipManager.remove(_map.depthLevel["tiger"]);
               _map.depthLevel["tiger"].removeEventListener(MouseEvent.CLICK,onStoryTigerClick);
               _map.depthLevel["tiger"].removeEventListener(MouseEvent.CLICK,onTigerClick);
            }
            if(_map.depthLevel["broad"])
            {
               _map.depthLevel["broad"].removeEventListener(MouseEvent.CLICK,onBroadClick);
               ToolTipManager.remove(_map.depthLevel["broad"]);
            }
            _map = null;
         }
      }
   }
}
