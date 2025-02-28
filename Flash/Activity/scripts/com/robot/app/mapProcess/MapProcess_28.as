package com.robot.app.mapProcess
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.userHoldParty.BirthdayPartyController;
   import com.robot.core.userHoldParty.FairyPartyController;
   import com.robot.core.userHoldParty.PartyMapManager;
   import com.robot.core.userHoldParty.PlantPartyController;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_28 extends BaseMapProcess
   {
       
      
      private var _remain:uint;
      
      private var _timer:Timer;
      
      public function MapProcess_28()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         if(PartyMapManager.partyType != 0)
         {
            if(TasksManager.getTaskStatus(477) != TasksManager.COMPLETE)
            {
               TasksManager.accept(477,function(param1:Boolean):void
               {
                  var b:Boolean = param1;
                  TasksManager.complete(477,0,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        DebugTrace.show("获得10个派对礼券！");
                     }
                  });
               });
            }
            ToolTipManager.add(depthLevel["lotteryDraw"] as SimpleButton,"抽奖机");
            (depthLevel["lotteryDraw"] as SimpleButton).addEventListener(MouseEvent.CLICK,this.onDraw);
            ToolTipManager.add(depthLevel["partyInfo"] as MovieClip,"派对介绍");
            (depthLevel["partyInfo"] as MovieClip).buttonMode = true;
            (depthLevel["partyInfo"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onPartyInfo);
            this.addIconEvents();
            switch(PartyMapManager.partyType)
            {
               case 1:
                  BirthdayPartyController.setup(this);
                  break;
               case 2:
                  FairyPartyController.setup(this);
                  break;
               case 3:
                  PlantPartyController.setup(this);
            }
         }
      }
      
      private function addIconEvents() : void
      {
         if(PartyMapManager.isHost)
         {
            btnLevel["alarm"].visible = true;
            ToolTipManager.add(btnLevel["alarm"],"发送系统邀请");
            btnLevel["ticket"].visible = true;
            ToolTipManager.add(btnLevel["ticket"],"派发派对礼券");
            this.checkExpTime();
         }
         else
         {
            btnLevel["alarm"].visible = false;
            btnLevel["ticket"].visible = false;
            btnLevel["exp"].visible = false;
         }
         btnLevel["users"].visible = true;
         ToolTipManager.add(btnLevel["users"],"邀请好友");
         btnLevel["ticket"].addEventListener(MouseEvent.CLICK,this.onClickTicket);
         btnLevel["alarm"].addEventListener(MouseEvent.CLICK,this.onClickAlarm);
         btnLevel["users"].addEventListener(MouseEvent.CLICK,this.onClickUsers);
      }
      
      private function checkExpTime() : void
      {
         SocketConnection.addCmdListener(CommandID.USER_PARTY_GET_EXP_TIME,this.onGetHandler);
         SocketConnection.send(CommandID.USER_PARTY_GET_EXP_TIME);
      }
      
      private function onGetHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.USER_PARTY_GET_EXP_TIME,this.onGetHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         this._remain = _loc2_.readUnsignedInt();
         DebugTrace.show("4373剩余时间：" + this._remain);
         btnLevel["exp"].visible = true;
         ToolTipManager.add(btnLevel["exp"],"领取派对经验");
         btnLevel["exp"].addEventListener(MouseEvent.CLICK,this.onClickExp);
         if(this._timer == null)
         {
            this._timer = new Timer(1000);
         }
         this._timer.start();
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         if(this._remain > 0)
         {
            --this._remain;
         }
         var _loc2_:String = String(uint(this._remain / 60));
         while(_loc2_.length < 2)
         {
            _loc2_ = "0" + _loc2_;
         }
         var _loc3_:String = String(this._remain % 60);
         while(_loc3_.length < 2)
         {
            _loc3_ = "0" + _loc3_;
         }
         btnLevel["exp"]["txt"].text = _loc2_ + ":" + _loc3_;
      }
      
      private function onClickExp(param1:Event) : void
      {
         SocketConnection.addCmdListener(CommandID.USER_PARTY_GET_EXP,this.onGetExp);
         SocketConnection.send(CommandID.USER_PARTY_GET_EXP);
      }
      
      private function onGetExp(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(this._timer)
         {
            this._timer.stop();
         }
         Alarm.show("恭喜你获得<font color=\'#ff0000\'>" + _loc3_ + "</font>经验值！参加派对的人数越多获取的经验也就越多哦！");
         this.checkExpTime();
      }
      
      private function onClickTicket(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getFestivalModule("userHoldParty/SendTicketPanel"),"正在打开面板...");
      }
      
      private function onClickAlarm(param1:Event) : void
      {
         var e:Event = param1;
         Alert.show("消耗50000赛尔豆可以向当前服务器所有玩家发送一次派对邀请哦！确定要发送吗？",function():void
         {
            SocketConnection.addCmdListener(CommandID.USER_PARTY_INVITE_ALL_USER,onInviteAllUser);
            SocketConnection.send(CommandID.USER_PARTY_INVITE_ALL_USER);
         });
      }
      
      private function onInviteAllUser(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.USER_PARTY_INVITE_ALL_USER,this.onInviteAllUser);
         Alarm.show("广播发送成功！");
      }
      
      private function onClickUsers(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getFestivalModule("userHoldParty/HoldParty_InvitePanel"),"正在打开面板...");
      }
      
      private function onDraw(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getFestivalModule("userHoldParty/UserHoldPartyLotteryDraw"),"正在打开面板……");
      }
      
      private function onPartyInfo(param1:MouseEvent) : void
      {
         switch(PartyMapManager.partyType)
         {
            case 1:
               ModuleManager.showModule(ClientConfig.getFestivalModule("userHoldParty/TerryBirthdayPartyInfo"),"正在打开面板……");
               break;
            case 2:
               ModuleManager.showModule(ClientConfig.getFestivalModule("userHoldParty/FairyPartyInfo"),"正在打开面板……");
               break;
            case 3:
               ModuleManager.showModule(ClientConfig.getFestivalModule("userHoldParty/PlantPartyInfo"),"正在打开面板……");
         }
      }
      
      override public function destroy() : void
      {
         if(PartyMapManager.partyType != 0)
         {
            SocketConnection.removeCmdListener(CommandID.USER_PARTY_GET_EXP,this.onGetExp);
            SocketConnection.removeCmdListener(CommandID.USER_PARTY_GET_EXP_TIME,this.onGetHandler);
            if(this._timer)
            {
               this._timer.stop();
               this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
               this._timer = null;
            }
            SocketConnection.removeCmdListener(CommandID.USER_PARTY_INVITE_ALL_USER,this.onInviteAllUser);
            btnLevel["alarm"].removeEventListener(MouseEvent.CLICK,this.onClickAlarm);
            btnLevel["ticket"].removeEventListener(MouseEvent.CLICK,this.onClickTicket);
            btnLevel["exp"].removeEventListener(MouseEvent.CLICK,this.onClickExp);
            btnLevel["users"].removeEventListener(MouseEvent.CLICK,this.onClickUsers);
            ToolTipManager.remove(btnLevel["alarm"]);
            ToolTipManager.remove(btnLevel["ticket"]);
            ToolTipManager.remove(btnLevel["exp"]);
            ToolTipManager.remove(btnLevel["users"]);
            ToolTipManager.remove(depthLevel["lotteryDraw"] as SimpleButton);
            (depthLevel["lotteryDraw"] as SimpleButton).removeEventListener(MouseEvent.CLICK,this.onDraw);
            ToolTipManager.remove(depthLevel["partyInfo"] as MovieClip);
            (depthLevel["partyInfo"] as MovieClip).buttonMode = false;
            (depthLevel["partyInfo"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onPartyInfo);
            switch(PartyMapManager.partyType)
            {
               case 1:
                  BirthdayPartyController.destroy();
                  break;
               case 2:
                  FairyPartyController.destroy();
                  break;
               case 3:
                  PlantPartyController.destroy();
            }
         }
      }
   }
}
