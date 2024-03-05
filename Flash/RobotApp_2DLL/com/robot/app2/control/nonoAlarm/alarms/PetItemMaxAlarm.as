package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.Sprite;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   
   public class PetItemMaxAlarm extends AlarmItem
   {
       
      
      private var _info:SingleItemInfo;
      
      private var _hasCheck:Boolean;
      
      private var _list:Array;
      
      public function PetItemMaxAlarm()
      {
         this._list = [];
         super();
         index = 100;
      }
      
      public function setInfo(param1:SingleItemInfo) : void
      {
         this._info = param1;
         showText = ItemXMLInfo.getName(this._info.itemID);
      }
      
      override public function checkStatu() : void
      {
         if(!this._hasCheck)
         {
            this.getItemsInfo();
            this._hasCheck = true;
         }
      }
      
      public function getItemsInfo() : void
      {
         var _loc2_:PetItemMaxAlarm = null;
         var _loc1_:int = 0;
         while(_loc1_ < this._list.length)
         {
            _loc2_ = this._list[_loc1_];
            if(_loc2_)
            {
               NoNoAlarmControl.removeAlarm(_loc2_);
            }
            _loc1_++;
         }
         this._list.splice(0);
         ItemManager.addEventListener(ItemEvent.PET_ITEM_LIST,this.onPetItemList);
         ItemManager.getPetItem();
      }
      
      private function onPetItemList(param1:ItemEvent) : void
      {
         var evt:ItemEvent = param1;
         ItemManager.removeEventListener(ItemEvent.PET_ITEM_LIST,this.onPetItemList);
         ItemManager.updateItems([400064,400065,400063],function():void
         {
            getMaxItemList();
         });
      }
      
      private function getMaxItemList() : void
      {
         var _loc2_:uint = 0;
         var _loc3_:SingleItemInfo = null;
         var _loc4_:PetItemMaxAlarm = null;
         var _loc1_:Array = ItemManager.getPetItemIDs();
         _loc1_ = _loc1_.concat(400064,400065,400063);
         for each(_loc2_ in _loc1_)
         {
            if(ItemXMLInfo.getIsShowInPetBag(_loc2_))
            {
               _loc3_ = ItemManager.getInfo(_loc2_);
               if(_loc3_)
               {
                  if(_loc3_.itemNum >= ItemXMLInfo.getMaxNum(_loc2_))
                  {
                     (_loc4_ = new PetItemMaxAlarm()).setInfo(_loc3_);
                     this._list.push(_loc4_);
                     NoNoAlarmControl.addAlarm(_loc4_);
                  }
               }
            }
         }
         if(this._list.length > 0)
         {
            SocketConnection.send(1022,86067675);
         }
      }
      
      override public function get icon() : Sprite
      {
         if(_icon == null)
         {
            _icon = new Sprite();
            if(this._info)
            {
               ResourceManager.getResource(ItemXMLInfo.getIconURL(this._info.itemID,this._info.itemLevel),function(param1:DisplayObject):void
               {
                  _icon.addChild(param1);
                  CommonUI.equalScale(param1,122 * 0.8,105 * 0.8);
                  CommonUI.centerAlign(param1,_icon,new Point(0,0));
               });
            }
         }
         return _icon;
      }
   }
}
