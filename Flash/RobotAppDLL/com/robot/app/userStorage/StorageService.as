package com.robot.app.userStorage
{
   import com.robot.core.config.xml.ClothXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.utils.ItemType;
   import flash.events.Event;
   
   public class StorageService implements IStorageService
   {
       
      
      private var _status:Array;
      
      private var filterItemList:Array;
      
      public function StorageService()
      {
         this.filterItemList = [400852];
         super();
         this.reset();
      }
      
      public function reset() : void
      {
         this._status = [0,0,0,0,0,0,0,0];
      }
      
      public function getItems(param1:int, param2:Function) : void
      {
         if(this._status[param1] > 0)
         {
            switch(param1)
            {
               case TabItemType.COMMAN_ITEM:
                  param2(param1,this.getCommanItem());
                  break;
               case TabItemType.VIP_ITEM:
                  param2(param1,this.getVipItem());
                  break;
               case TabItemType.MOUNT_ITEM:
                  param2(param1,this.getMountItem());
                  break;
               case TabItemType.BG_ITEM:
                  param2(param1,this.getBGItem());
                  break;
               case TabItemType.MONSTER_SEED_ITEM:
                  param2(param1,this.getMonsterSeedItem());
                  break;
               case TabItemType.SOUL_BEAD_ITEM:
                  param2(param1,this.getSoulBeadItem());
                  break;
               case TabItemType.CLLECTION_ITEM:
                  param2(param1,this.getCollectItem());
            }
         }
         else
         {
            switch(param1)
            {
               case TabItemType.COMMAN_ITEM:
               case TabItemType.VIP_ITEM:
               case TabItemType.MOUNT_ITEM:
               case TabItemType.BG_ITEM:
                  this.onGetClothItems(param1,param2);
                  break;
               case TabItemType.MONSTER_SEED_ITEM:
               case TabItemType.CLLECTION_ITEM:
                  this.onGetCollecton(param1,param2);
                  break;
               case TabItemType.SOUL_BEAD_ITEM:
                  this.onGetSoulBead(param1,param2);
            }
         }
      }
      
      private function onGetClothItems(param1:int, param2:Function) : void
      {
         var onClothList:Function = null;
         var type:int = param1;
         var callback:Function = param2;
         onClothList = function(param1:Event):void
         {
            _status[0] = 1;
            _status[1] = 1;
            _status[2] = 1;
            _status[3] = 1;
            ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,onClothList);
            switch(type)
            {
               case TabItemType.COMMAN_ITEM:
                  callback(type,getCommanItem());
                  break;
               case TabItemType.VIP_ITEM:
                  callback(type,getVipItem());
                  break;
               case TabItemType.MOUNT_ITEM:
                  callback(type,getMountItem());
                  break;
               case TabItemType.BG_ITEM:
                  callback(type,getBGItem());
            }
         };
         ItemManager.addEventListener(ItemEvent.CLOTH_LIST,onClothList);
         ItemManager.getCloth();
      }
      
      private function onGetCollecton(param1:int, param2:Function) : void
      {
         var onCollectonList:Function = null;
         var type:int = param1;
         var callback:Function = param2;
         onCollectonList = function(param1:Event):void
         {
            ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCollectonList);
            _status[4] = 1;
            _status[6] = 1;
            if(type == TabItemType.CLLECTION_ITEM)
            {
               callback(type,getCollectItem());
            }
            else if(type == TabItemType.MONSTER_SEED_ITEM)
            {
               callback(type,getMonsterSeedItem());
            }
         };
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCollectonList);
         ItemManager.getCollection();
      }
      
      private function onGetSoulBead(param1:int, param2:Function) : void
      {
         var onSoulBeadList:Function = null;
         var type:int = param1;
         var callback:Function = param2;
         onSoulBeadList = function(param1:Event):void
         {
            ItemManager.removeEventListener(ItemEvent.SOULBEAD_ITEM_LIST,onSoulBeadList);
            _status[5] = 1;
            callback(type,getSoulBeadItem());
         };
         ItemManager.addEventListener(ItemEvent.SOULBEAD_ITEM_LIST,onSoulBeadList);
         ItemManager.getSoulBead();
      }
      
      private function getCommanItem() : Array
      {
         var list:Array = ItemManager.getClothInfos();
         var tempList:Array = list.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
         {
            if(ItemXMLInfo.getIsSuper(param1.itemID) == false && filterItemList.indexOf(param1.itemID) == -1)
            {
               if(param1.type == ItemType.CLOTH)
               {
                  return true;
               }
            }
            return false;
         });
         tempList = tempList.concat();
         tempList.sortOn("itemID",Array.DESCENDING | Array.NUMERIC);
         return tempList;
      }
      
      private function getVipItem() : Array
      {
         var list:Array = ItemManager.getClothInfos();
         var tempList:Array = list.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
         {
            if(ItemXMLInfo.getIsSuper(param1.itemID) == true && filterItemList.indexOf(param1.itemID) == -1)
            {
               if(param1.type == ItemType.CLOTH)
               {
                  if(TabItemType.ClothListTypes.indexOf(ClothXMLInfo.getItemInfo(param1.itemID).type) >= 0)
                  {
                     return true;
                  }
               }
            }
            return false;
         });
         tempList = tempList.concat();
         tempList.sortOn("itemID",Array.DESCENDING | Array.NUMERIC);
         return tempList;
      }
      
      private function getMountItem() : Array
      {
         var list:Array = ItemManager.getClothInfos();
         var tempList:Array = list.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
         {
            if(filterItemList.indexOf(param1.itemID) == -1)
            {
               if(param1.type == ItemType.CLOTH)
               {
                  if(ClothXMLInfo.getItemInfo(param1.itemID).type == TabItemType.MOUNT_STR)
                  {
                     return true;
                  }
               }
            }
            return false;
         });
         tempList = tempList.concat();
         tempList.sortOn("itemID",Array.DESCENDING | Array.NUMERIC);
         return tempList;
      }
      
      private function getBGItem() : Array
      {
         var list:Array = ItemManager.getClothInfos();
         var tempList:Array = list.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
         {
            if(filterItemList.indexOf(param1.itemID) == -1)
            {
               if(param1.type == ItemType.CLOTH)
               {
                  if(ClothXMLInfo.getItemInfo(param1.itemID).type == TabItemType.BG_STR)
                  {
                     return true;
                  }
               }
            }
            return false;
         });
         tempList.sortOn("itemID",Array.DESCENDING | Array.NUMERIC);
         return tempList;
      }
      
      private function getMonsterSeedItem() : Array
      {
         var list:Array = ItemManager.getCollectionInfos();
         var tempList:Array = list.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
         {
            if(param1.itemID == 400107)
            {
            }
            if(param1.itemID >= 1400000 && param1.itemID < 1500000)
            {
               return false;
            }
            if(ItemXMLInfo.getIsMidleItem(param1.itemID))
            {
               return false;
            }
            if(ItemXMLInfo.isJingYuan(param1.itemID))
            {
               return true;
            }
            return false;
         });
         tempList.sortOn("itemID",Array.DESCENDING | Array.NUMERIC);
         return tempList;
      }
      
      private function getSoulBeadItem() : Array
      {
         var _loc4_:SingleItemInfo = null;
         var _loc1_:Array = ItemManager.getSoulBeadInfos();
         var _loc2_:Array = [];
         var _loc3_:uint = 0;
         while(_loc3_ < _loc1_.length)
         {
            (_loc4_ = new SingleItemInfo()).itemID = _loc1_[_loc3_].itemID;
            _loc4_.itemNum = 1;
            _loc4_.leftTime = 365 * 24 * 60 * 60;
            _loc2_.push(_loc4_);
            _loc3_++;
         }
         _loc2_.sortOn("itemID",Array.DESCENDING | Array.NUMERIC);
         return _loc2_;
      }
      
      private function getCollectItem() : Array
      {
         var list:Array = ItemManager.getCollectionInfos();
         var tempList:Array = list.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
         {
            if(param1.itemID >= 1400000 && param1.itemID < 1500000)
            {
               return false;
            }
            if(ItemXMLInfo.getIsMidleItem(param1.itemID))
            {
               return false;
            }
            if(filterItemList.indexOf(param1.itemID) == -1)
            {
               if(param1.itemID >= TabItemType.MONSTER_SEED_RANK[0][0] && param1.itemID <= TabItemType.MONSTER_SEED_RANK[0][1])
               {
                  return false;
               }
               if(param1.itemID >= TabItemType.MONSTER_SEED_RANK[1][0] && param1.itemID <= TabItemType.MONSTER_SEED_RANK[1][1])
               {
                  return false;
               }
            }
            return true;
         });
         tempList.sortOn("itemID",Array.DESCENDING | Array.NUMERIC);
         return tempList.concat();
      }
      
      public function destroy() : void
      {
      }
   }
}
