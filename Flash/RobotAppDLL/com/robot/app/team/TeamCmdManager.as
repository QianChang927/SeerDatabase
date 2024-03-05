package com.robot.app.team
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.core.CommandID;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.team.TeamMemberInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.teamInstallation.TeamInfoManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class TeamCmdManager
   {
      
      private static var ins:com.robot.app.team.TeamCmdManager;
       
      
      private var todayCoins:int;
      
      private var updateLv:Array;
      
      public function TeamCmdManager()
      {
         this.updateLv = ["战队","科技中心","物资中心"];
         super();
      }
      
      public static function get instance() : com.robot.app.team.TeamCmdManager
      {
         if(!ins)
         {
            ins = new com.robot.app.team.TeamCmdManager();
         }
         return ins;
      }
      
      public function checkRemainItems() : void
      {
         var itemID:int = 0;
         var onCheck:Function = null;
         onCheck = function(param1:ItemEvent):void
         {
            var _loc2_:int = 0;
            ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCheck);
            if(ItemManager.getCollectionInfo(itemID))
            {
               _loc2_ = int(ItemManager.getCollectionInfo(itemID).itemNum);
               doContri(1,_loc2_);
            }
         };
         itemID = 1200536;
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCheck);
         ItemManager.upDateCollection(itemID);
      }
      
      public function contributeCoin(param1:int, param2:int = 0, param3:Function = null) : void
      {
         var itemID:int = 0;
         var onCheck:Function = null;
         var type:int = param1;
         var num:int = param2;
         var fun:Function = param3;
         if(type == 0 && num > this.todayCoins)
         {
            Alarm.show("今天最多只能再贡献" + this.todayCoins + "个赛尔豆！");
            if(fun != null)
            {
               fun(this.todayCoins);
            }
         }
         else if(type == 1)
         {
            onCheck = function(param1:ItemEvent):void
            {
               var itemNum:int = 0;
               var e:ItemEvent = param1;
               ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCheck);
               if(ItemManager.getCollectionInfo(itemID))
               {
                  itemNum = int(ItemManager.getCollectionInfo(itemID).itemNum);
               }
               if(itemNum >= num)
               {
                  doContri(type,num,fun);
               }
               else
               {
                  if(fun != null)
                  {
                     setTimeout(function():void
                     {
                        fun(todayCoins);
                     },1500);
                  }
                  ProductAction.buyGoldProduct(240131,num);
                  EventManager.addEventListener(RobotEvent.GOLD_BUY,function(param1:Event):void
                  {
                     EventManager.removeEventListener(RobotEvent.GOLD_BUY,arguments.callee);
                     param1.stopImmediatePropagation();
                     doContri(type,num,fun);
                  });
               }
            };
            itemID = 1200536;
            ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCheck);
            ItemManager.upDateCollection(itemID);
         }
         else
         {
            this.doContri(type,num,fun);
         }
      }
      
      private function doContri(param1:int, param2:int = 0, param3:Function = null) : void
      {
         var type:int = param1;
         var num:int = param2;
         var fun:Function = param3;
         SocketConnection.addCmdListener(CommandID.NEW_TEAM_COIN_EXCHANGE,function(param1:SocketEvent):void
         {
            var _loc7_:TeamMemberInfo = null;
            param1.stopImmediatePropagation();
            SocketConnection.removeCmdListener(CommandID.NEW_TEAM_COIN_EXCHANGE,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            todayCoins = 20000 - _loc3_.readUnsignedInt();
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            var _loc5_:int = int(_loc3_.readUnsignedInt());
            var _loc6_:int = int(_loc3_.readUnsignedInt());
            if(_loc4_)
            {
               (_loc7_ = TeamMemberInfoManager.instance.teamInfoHash.getValue(MainManager.actorInfo.userID)).todayContri = _loc4_;
               _loc7_.contribute = _loc5_;
               TeamMemberInfoManager.instance.myInfo = _loc7_;
               TeamInfoManager.myTeamInfo.score = _loc6_;
            }
            if(num != 0)
            {
               if(type == 0)
               {
                  MainManager.actorInfo.coins -= num;
                  Alarm.show("成功贡献" + num + "个赛尔豆！获得" + num / 1000 + "个战队积分和个人贡献值！");
               }
               else
               {
                  Alarm.show("成功贡献" + num + "个钻石！获得" + num + "个战队积分和个人贡献值！");
               }
            }
            if(fun != null)
            {
               fun(todayCoins);
            }
         });
         SocketConnection.send(CommandID.NEW_TEAM_COIN_EXCHANGE,type,num);
      }
      
      public function updateTeamLv(param1:int, param2:Function = null) : void
      {
         var i:int = param1;
         var fun:Function = param2;
         SocketConnection.addCmdListener(CommandID.NEW_TEAM_UPDATE,function():void
         {
            SocketConnection.removeCmdListener(CommandID.NEW_TEAM_UPDATE,arguments.callee);
            var _loc2_:String = String(updateLv[i]);
            Alarm.show(_loc2_ + "等级升级成功！");
            if(fun != null)
            {
               fun();
            }
         });
         SocketConnection.send(CommandID.NEW_TEAM_UPDATE,i);
      }
      
      public function refreshTeamInfo() : void
      {
         SocketConnection.send(CommandID.NEW_TEAM_REFRESH_INFO);
      }
      
      public function buyJoinCD() : void
      {
         var itemID:int = 0;
         var onCheck:Function = null;
         onCheck = function(param1:ItemEvent):void
         {
            var e:ItemEvent = param1;
            ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCheck);
            if(ItemManager.getCollectionInfo(itemID))
            {
               buyCd();
            }
            else
            {
               ProductAction.buyMoneyProduct(200696);
               EventManager.addEventListener(RobotEvent.MONEY_BUY,function(param1:Event):void
               {
                  EventManager.removeEventListener(RobotEvent.MONEY_BUY,arguments.callee);
                  param1.stopImmediatePropagation();
                  buyCd();
               });
            }
         };
         itemID = 1200531;
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCheck);
         ItemManager.upDateCollection(itemID);
      }
      
      private function buyCd() : void
      {
         SocketConnection.addCmdListener(CommandID.NEW_TEAM_BUY_CD,function():void
         {
            SocketConnection.removeCmdListener(CommandID.NEW_TEAM_BUY_CD,arguments.callee);
            Alarm.show("恭喜你成功解除加入战队冷却时间！");
         });
         SocketConnection.send(CommandID.NEW_TEAM_BUY_CD);
      }
      
      public function setManager(param1:int, param2:Function = null) : void
      {
         var uid:int = param1;
         var fun:Function = param2;
         SocketConnection.addCmdListener(CommandID.NEW_TEAM_SET_MANAGER,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.NEW_TEAM_SET_MANAGER,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:int;
            if((_loc4_ = int(_loc3_.readUnsignedInt())) == 0)
            {
               Alarm.show("设置管理员成功！");
               if(fun != null)
               {
                  fun(uid,1);
               }
            }
            else if(_loc4_ == 1)
            {
               if(fun != null)
               {
                  fun(uid,2);
               }
               Alarm.show("最多只能有3个管理员！");
            }
            else
            {
               if(fun != null)
               {
                  fun(uid,2);
               }
               Alarm.show("系统错误！");
            }
         });
         SocketConnection.send(CommandID.NEW_TEAM_SET_MANAGER,uid);
      }
   }
}
