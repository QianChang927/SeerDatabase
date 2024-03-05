package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PetHatchAlarm extends AlarmItem
   {
       
      
      private const partID:Array = [400101,400650,1500000,1500999];
      
      private var _petNum:int;
      
      public function PetHatchAlarm()
      {
         super();
         SocketConnection.addCmdListener(CommandID.PET_HATCH_GET,function(param1:SocketEvent):void
         {
            checkStatu();
         });
      }
      
      override public function checkStatu() : void
      {
         var onList:Function;
         var lastPetNum:int = 0;
         var alarmItem:AlarmItem = null;
         lastPetNum = this._petNum;
         alarmItem = this;
         this._petNum = 0;
         onList = function(param1:SocketEvent):void
         {
            var _loc5_:SingleItemInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _loc5_ = new SingleItemInfo(_loc2_,true);
               if(Boolean(ItemXMLInfo.isJingYuan(_loc5_.itemID)) && _loc5_.leftTime <= 0)
               {
                  ++_petNum;
               }
               _loc4_++;
            }
         };
         SocketConnection.sendByQueue(CommandID.ITEM_LIST_HAS_UPDATE_TIME,[this.partID[0],this.partID[1],2],onList);
         SocketConnection.sendByQueue(CommandID.ITEM_LIST_HAS_UPDATE_TIME,[this.partID[2],this.partID[3],2],function(param1:SocketEvent):void
         {
            onList(param1);
            if(_petNum != 0 && _petNum != lastPetNum)
            {
               NoNoAlarmControl.addAlarm(alarmItem);
            }
            if(_petNum == 0)
            {
               NoNoAlarmControl.removeAlarm(alarmItem);
            }
         });
      }
      
      override public function get showText() : String
      {
         return "你有 <font color=\'#3cfecc\'>" + this._petNum + "</font>只精灵孵化喽!";
      }
   }
}
