package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.FortressItemXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.FitmentInfo;
   import com.robot.core.info.team.ArmInfo;
   import com.robot.core.info.team.HeadquarterInfo;
   import com.robot.core.manager.ArmManager;
   import com.robot.core.manager.FitmentManager;
   import com.robot.core.manager.HeadquarterManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class BuyCmdListener extends BaseBean
   {
       
      
      private var _noshowList:Array;
      
      public function BuyCmdListener()
      {
         this._noshowList = [500501,500502,500503,500514,500740,500854];
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.ARM_UP_BUY,this.onArmUpBuy);
         SocketConnection.addCmdListener(CommandID.BUY_FITMENT,this.onFitmentBuy);
         SocketConnection.addCmdListener(CommandID.HEAD_BUY,this.onHeadBuy);
         finish();
      }
      
      private function onArmUpBuy(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:uint = _loc2_.readUnsignedInt();
         MainManager.actorInfo.coins = _loc3_;
         var _loc7_:ArmInfo;
         (_loc7_ = new ArmInfo()).id = _loc4_;
         _loc7_.form = _loc5_;
         _loc7_.buyTime = _loc6_;
         ArmManager.addInStorage(_loc7_);
         if(this._noshowList.indexOf(_loc4_) != -1)
         {
            return;
         }
         Alarm.show("1个" + TextFormatUtil.getRedTxt(FortressItemXMLInfo.getName(_loc4_)) + "已经放入你的仓库，你还剩下" + _loc3_ + "赛尔豆！");
      }
      
      private function onFitmentBuy(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         MainManager.actorInfo.coins = _loc3_;
         var _loc6_:FitmentInfo;
         (_loc6_ = new FitmentInfo()).id = _loc4_;
         FitmentManager.addInStorage(_loc6_);
         if(this._noshowList.indexOf(_loc4_) != -1)
         {
            return;
         }
         if(ItemXMLInfo.getPrice(_loc4_) > 0)
         {
            Alarm.show("1个<font color=\'#FF0000\'>" + ItemXMLInfo.getName(_loc4_) + "</font>已经放入你的仓库，你还剩下" + _loc3_ + "赛尔豆！");
         }
         else
         {
            Alarm.show("1个<font color=\'#FF0000\'>" + ItemXMLInfo.getName(_loc4_) + "</font>已经放入你的仓库！");
         }
      }
      
      private function onHeadBuy(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         MainManager.actorInfo.coins = _loc3_;
         var _loc6_:HeadquarterInfo;
         (_loc6_ = new HeadquarterInfo()).id = _loc4_;
         HeadquarterManager.addInStorage(_loc6_);
         if(this._noshowList.indexOf(_loc4_) != -1)
         {
            return;
         }
         Alarm.show("1个<font color=\'#FF0000\'>" + ItemXMLInfo.getName(_loc4_) + "</font>已经放入你的仓库，你还剩下" + _loc3_ + "赛尔豆！");
      }
   }
}
