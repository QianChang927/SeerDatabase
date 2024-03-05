package com.robot.app.ac
{
   import com.robot.app.cmd.SysMsgCmdListener;
   import com.robot.app.control.OldSeerIconController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.controller.GetPetController;
   import com.robot.core.info.SystemMsgInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class OldSeerSecondController
   {
      
      private static var instance:com.robot.app.ac.OldSeerSecondController;
       
      
      private var _map:BaseMapProcess;
      
      public const ID_S:Array = [815,931,511,788];
      
      public function OldSeerSecondController()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.ac.OldSeerSecondController
      {
         if(instance == null)
         {
            instance = new com.robot.app.ac.OldSeerSecondController();
         }
         return instance;
      }
      
      public static function onAcSucHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.OLD_SEER_ACTIVE_PET,onAcSucHandler);
         MainManager.actorInfo.isActive = true;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         GetPetController.getPet(_loc3_,_loc4_);
      }
      
      public function get isOldSeer() : Boolean
      {
         if(MainManager.actorInfo.regTime < SystemTimerManager.getTimeByDate(2012,1,1,0,0,0))
         {
            return true;
         }
         return false;
      }
      
      public function setup() : void
      {
         if(MainManager.actorInfo.regTime < SystemTimerManager.getTimeByDate(2012,5,1,0,0,0))
         {
            if(MainManager.actorInfo.oldlast <= SystemTimerManager.getTimeByDate(2012,5,1,0,0,0))
            {
               BufferRecordManager.setState(MainManager.actorInfo,309,true);
               this.showSysInfo();
            }
            else if(BufferRecordManager.getState(MainManager.actorInfo,309))
            {
               this.showSysInfo();
            }
         }
      }
      
      private function showSysInfo() : void
      {
         var _loc2_:SystemMsgInfo = null;
         var _loc1_:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
         if(_loc1_.data["backflow_20120501"] == undefined || _loc1_.data["backflow_20120501"] == false)
         {
            _loc2_ = new SystemMsgInfo();
            SysMsgCmdListener.getInstance().addInfo(_loc2_);
         }
      }
      
      public function init(param1:BaseMapProcess) : void
      {
         if(OldSeerIconController.isOld)
         {
            this._map = param1;
            this._map.depthLevel["laobing"].addEventListener(MouseEvent.CLICK,this.onLaobing);
            CommonUI.addYellowExcal(this._map.depthLevel["laobing"]);
         }
         else
         {
            DisplayUtil.removeForParent(param1.depthLevel["laobing"]);
         }
      }
      
      public function onLaobing(param1:MouseEvent) : void
      {
         if(this.isOldSeer)
         {
            if(MainManager.actorInfo.isActive)
            {
               this.showSeerPanel(1);
            }
            else
            {
               this.showSeerPanel(0);
            }
         }
         else
         {
            this.showSeerPanel(1);
         }
      }
      
      private function showSeerPanel(param1:uint) : void
      {
         if(param1 == 0)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("OldSeerGiftPanel"),"正在加载老兵面板....");
         }
         else if(param1 == 1)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NewSeerGiftPanel"),"正在加载老兵面板....");
         }
      }
      
      public function activePet(param1:uint) : void
      {
         SocketConnection.addCmdListener(CommandID.OLD_SEER_ACTIVE_PET,onAcSucHandler);
         SocketConnection.send(CommandID.OLD_SEER_ACTIVE_PET,param1);
      }
      
      public function getGift() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_ACTIVE_PET,this.onGetSucHandler);
         SocketConnection.send(CommandID.GET_ACTIVE_PET);
      }
      
      public function onGetSucHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_ACTIVE_PET,this.onGetSucHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            ItemInBagAlert.show(3,_loc4_ + "点积累经验已经放入你的经验累积器！");
         }
         else if(_loc3_ < 10000)
         {
            GetPetController.getPet(_loc3_,_loc4_);
         }
         else
         {
            ItemInBagAlert.show(_loc3_,ItemXMLInfo.getName(_loc3_) + "已经放入你的储物箱！");
         }
         ++MainManager.actorInfo.totalGiftCount;
         MainManager.actorInfo.toDayGetGiftCount = 1;
         OldSeerIconController.hideIcon();
         MapManager.removeAppArrow();
      }
      
      public function shared(param1:uint) : void
      {
         SocketConnection.addCmdListener(CommandID.AEER_ACCREDIT,this.onSharedHandler);
         SocketConnection.send(CommandID.AEER_ACCREDIT,param1);
      }
      
      private function onSharedHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.AEER_ACCREDIT,this.onSharedHandler);
         Alarm.show("分享成功！");
      }
      
      public function check() : Boolean
      {
         if(MainManager.actorInfo.getGiftDate == 0)
         {
            return true;
         }
         var _loc1_:Date = new Date(MainManager.actorInfo.getGiftDate * 1000);
         var _loc2_:Date = new Date(SystemTimerManager.time * 1000);
         if(_loc1_.getFullYear() == _loc2_.getFullYear() && _loc1_.getMonth() == _loc2_.getMonth() && _loc1_.getDate() == _loc2_.getDate())
         {
            return false;
         }
         return true;
      }
      
      public function showSePanel(param1:uint) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("OldSeerSecondPanel"),"正在打开老兵面板",param1);
      }
      
      public function destroy() : void
      {
         if(this._map)
         {
            this._map.depthLevel["laobing"].removeEventListener(MouseEvent.CLICK,this.onLaobing);
            this._map = null;
         }
         ModuleManager.destroy(ClientConfig.getAppModule("OldSeerGiftPanel"));
         ModuleManager.destroy(ClientConfig.getAppModule("NewSeerGiftPanel"));
      }
   }
}
