package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   
   public class ChrisSpecialActionAlarm extends AlarmItem
   {
       
      
      private var _exchangeItems:Array;
      
      public function ChrisSpecialActionAlarm()
      {
         this._exchangeItems = [{
            "itemId":1700340,
            "map":30,
            "reqNum":2
         },{
            "itemId":1700341,
            "map":423,
            "reqNum":2
         },{
            "itemId":1700342,
            "map":102,
            "reqNum":2
         },{
            "itemId":1700343,
            "map":964,
            "reqNum":2
         },{
            "itemId":1700344,
            "map":966,
            "reqNum":2
         }];
         super();
         this.checkStatu();
      }
      
      override public function get showText() : String
      {
         return "失踪的圣诞礼物";
      }
      
      override public function checkStatu() : void
      {
         this.refreshItemsHandler();
      }
      
      private function refreshItems() : void
      {
         var _loc2_:Object = null;
         var _loc1_:Array = [];
         for each(_loc2_ in this._exchangeItems)
         {
            _loc1_.push(_loc2_.itemId);
         }
         ItemManager.updateItems(_loc1_,this.refreshItemsHandler);
      }
      
      private function refreshItemsHandler() : void
      {
         var _loc2_:Object = null;
         var _loc3_:SingleItemInfo = null;
         var _loc1_:Boolean = false;
         for each(_loc2_ in this._exchangeItems)
         {
            _loc3_ = ItemManager.getInfo(_loc2_.itemId);
            if(!_loc3_ || _loc3_.itemNum < _loc2_.reqNum)
            {
               _loc1_ = true;
               break;
            }
         }
         if(_loc1_)
         {
            NoNoAlarmControl.removeAlarm(this);
         }
         else
         {
            NoNoAlarmControl.addAlarm(this);
         }
      }
   }
}
