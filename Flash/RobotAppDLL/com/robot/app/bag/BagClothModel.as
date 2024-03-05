package com.robot.app.bag
{
   import com.robot.core.config.xml.ClothXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.utils.ItemType;
   import flash.events.Event;
   import org.taomee.events.DynamicEvent;
   
   public class BagClothModel
   {
       
      
      private var _view:com.robot.app.bag.BagPanel;
      
      private var _itemList:Array;
      
      private var _filterList:Array;
      
      private var totalPage:uint;
      
      private var currentPage:uint = 1;
      
      private var PET_NUM:uint = 12;
      
      private var filterItemList:Array;
      
      public function BagClothModel(param1:com.robot.app.bag.BagPanel)
      {
         this.filterItemList = [400852];
         super();
         this._view = param1;
         this._view.addEventListener(Event.CLOSE,this.onPanelClose);
         this._view.addEventListener(Event.COMPLETE,this.onPanelComplete);
         this._view.addEventListener(com.robot.app.bag.BagPanel.NEXT_PAGE,this.nextHandler);
         this._view.addEventListener(com.robot.app.bag.BagPanel.PREV_PAGE,this.prevHandler);
         this._view.addEventListener(com.robot.app.bag.BagPanel.SHOW_CLOTH,this.onShowTab);
         this._view.addEventListener(com.robot.app.bag.BagPanel.SHOW_COLLECTION,this.onShowTab);
         this._view.addEventListener(com.robot.app.bag.BagPanel.SHOW_NONO,this.onShowTab);
         this._view.addEventListener(com.robot.app.bag.BagPanel.SHOW_SOULBEAD,this.onShowTab);
         this._view.addEventListener(BagTypeEvent.SELECT,this.onTypeSelect);
         this._view.addEventListener(BagCollectTypeEvent.SELECT,this.onCollectTypeSelect);
      }
      
      private function onPanelComplete(param1:Event) : void
      {
         this.currentPage = 1;
         this.init();
      }
      
      private function onPanelClose(param1:Event) : void
      {
         this.currentPage = 1;
         this.clear();
      }
      
      private function init() : void
      {
         MainManager.actorModel.addEventListener(BagChangeClothAction.TAKE_OFF_CLOTH,this.actEventHandler);
         MainManager.actorModel.addEventListener(BagChangeClothAction.REPLACE_CLOTH,this.actEventHandler);
         MainManager.actorModel.addEventListener(BagChangeClothAction.USE_CLOTH,this.actEventHandler);
         MainManager.actorModel.addEventListener(BagChangeClothAction.CLOTH_CHANGE,this.onClothChange);
      }
      
      private function onShowTab(param1:Event) : void
      {
         this._itemList = [];
         this._filterList = [];
         ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,this.onClothList);
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,this.onCollectonList);
         ItemManager.removeEventListener(ItemEvent.SUPER_ITEM_LIST,this.onNoNoList);
         ItemManager.removeEventListener(ItemEvent.SOULBEAD_ITEM_LIST,this.onSoulBeadList);
         switch(param1.type)
         {
            case com.robot.app.bag.BagPanel.SHOW_CLOTH:
               ItemManager.addEventListener(ItemEvent.CLOTH_LIST,this.onClothList);
               ItemManager.getCloth();
               break;
            case com.robot.app.bag.BagPanel.SHOW_COLLECTION:
               ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,this.onCollectonList);
               ItemManager.getCollection();
               break;
            case com.robot.app.bag.BagPanel.SHOW_NONO:
               ItemManager.addEventListener(ItemEvent.SUPER_ITEM_LIST,this.onNoNoList);
               ItemManager.getSuper();
               break;
            case com.robot.app.bag.BagPanel.SHOW_SOULBEAD:
               ItemManager.addEventListener(ItemEvent.SOULBEAD_ITEM_LIST,this.onSoulBeadList);
               ItemManager.getSoulBead();
         }
      }
      
      public function getArray(param1:Array, param2:uint = 1, param3:uint = 12) : Array
      {
         return param1.slice((param2 - 1) * param3,param2 * param3);
      }
      
      public function clear() : void
      {
         ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,this.onClothList);
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,this.onCollectonList);
         ItemManager.removeEventListener(ItemEvent.SUPER_ITEM_LIST,this.onNoNoList);
         ItemManager.removeEventListener(ItemEvent.SOULBEAD_ITEM_LIST,this.onSoulBeadList);
         MainManager.actorModel.removeEventListener(BagChangeClothAction.TAKE_OFF_CLOTH,this.actEventHandler);
         MainManager.actorModel.removeEventListener(BagChangeClothAction.REPLACE_CLOTH,this.actEventHandler);
         MainManager.actorModel.removeEventListener(BagChangeClothAction.USE_CLOTH,this.actEventHandler);
         MainManager.actorModel.removeEventListener(BagChangeClothAction.CLOTH_CHANGE,this.onClothChange);
      }
      
      private function onClothList(param1:Event) : void
      {
         var e:Event = param1;
         ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,this.onClothList);
         this._itemList = ItemManager.getClothInfos();
         this._itemList = this._itemList.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
         {
            if(ItemXMLInfo.getIsSuper(param1.itemID) == false && filterItemList.indexOf(param1.itemID) == -1)
            {
               return true;
            }
            return false;
         });
         this._filterList = this._itemList.concat();
         this.showItem();
      }
      
      private function onCollectonList(param1:Event = null) : void
      {
         var e:Event = param1;
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,this.onCollectonList);
         this._itemList = ItemManager.getCollectionInfos();
         this._itemList = this._itemList.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
         {
            if(param1.itemID >= 1400000 && param1.itemID < 1500000)
            {
               return false;
            }
            if(ItemXMLInfo.getIsMidleItem(param1.itemID))
            {
               return false;
            }
            if(ItemXMLInfo.getIsSuper(param1.itemID) == false && filterItemList.indexOf(param1.itemID) == -1)
            {
               return true;
            }
            return false;
         });
         this._filterList = this._itemList.concat();
         this.showItem();
      }
      
      private function onNoNoList(param1:Event) : void
      {
         var e:Event = param1;
         ItemManager.removeEventListener(ItemEvent.SUPER_ITEM_LIST,this.onNoNoList);
         this._itemList = ItemManager.getSuperInfos();
         this._itemList = this._itemList.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
         {
            if(Boolean(ItemXMLInfo.getIsSuper(param1.itemID)) && filterItemList.indexOf(param1.itemID) == -1)
            {
               return true;
            }
            return false;
         });
         this._filterList = this._itemList.concat();
         this.showItem();
      }
      
      private function onSoulBeadList(param1:Event) : void
      {
         var _loc3_:SingleItemInfo = null;
         ItemManager.removeEventListener(ItemEvent.SOULBEAD_ITEM_LIST,this.onSoulBeadList);
         this._itemList = ItemManager.getSoulBeadInfos();
         var _loc2_:uint = 0;
         while(_loc2_ < this._itemList.length)
         {
            _loc3_ = new SingleItemInfo();
            _loc3_.itemID = this._itemList[_loc2_].itemID;
            _loc3_.itemNum = 1;
            _loc3_.leftTime = 365 * 24 * 60 * 60;
            this._filterList.push(_loc3_);
            _loc2_++;
         }
         this.showItem();
      }
      
      public function showItem() : void
      {
         this.currentPage = 1;
         switch(com.robot.app.bag.BagPanel.currTab)
         {
            case BagTabType.CLOTH:
            case BagTabType.NONO:
               if(BagShowType.currType != BagShowType.ALL && BagShowType.currType != BagShowType.SUIT)
               {
                  this._filterList = this._itemList.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
                  {
                     var _loc4_:* = undefined;
                     if(param1.type == ItemType.CLOTH)
                     {
                        if(ClothXMLInfo.getItemInfo(param1.itemID).type == BagShowType.typeNameListEn[BagShowType.currType])
                        {
                           param2 = -1;
                           if(com.robot.app.bag.BagPanel.justOpen)
                           {
                              com.robot.app.bag.BagPanel.justOpen = false;
                              param2 = int(MainManager.actorInfo.clothIDs.indexOf(param1.itemID));
                           }
                           _loc4_ = _view.clothPrev.getClothArray().indexOf(param1.itemID);
                           if(param2 == -1 && _loc4_ == -1 && MainManager.actorInfo.mountId != param1.itemID)
                           {
                              return true;
                           }
                        }
                     }
                     return false;
                  });
               }
               else
               {
                  this._filterList = this._itemList.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
                  {
                     var _loc4_:* = undefined;
                     if(param1.type == ItemType.CLOTH)
                     {
                        param2 = -1;
                        if(com.robot.app.bag.BagPanel.justOpen)
                        {
                           com.robot.app.bag.BagPanel.justOpen = false;
                           param2 = int(MainManager.actorInfo.clothIDs.indexOf(param1.itemID));
                        }
                        _loc4_ = _view.clothPrev.getClothIDs().indexOf(param1.itemID);
                        if(param2 == -1 && _loc4_ == -1 && MainManager.actorInfo.mountId != param1.itemID)
                        {
                           return true;
                        }
                        return false;
                     }
                     return true;
                  });
               }
               break;
            case BagTabType.COLLECTION:
               if(BagCollectType.currType != BagCollectType.ALL)
               {
                  this._filterList = this._itemList.filter(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
                  {
                     if(checkCollectType(param1.itemID) == BagCollectType.currType)
                     {
                        return true;
                     }
                     return false;
                  });
               }
               else
               {
                  this._filterList = this._itemList.concat();
               }
               break;
            case BagTabType.SOULBEAD:
               break;
            default:
               this._filterList = this._itemList.concat();
         }
         this.totalPage = Math.ceil(this._filterList.length / this.PET_NUM);
         if(this.totalPage == 0)
         {
            this.totalPage = 1;
         }
         this._filterList.sort(this.sortFun);
         this._view.setPageNum(1,this.totalPage);
         this._view.showItem(this.getArray(this._filterList));
      }
      
      private function showSuit(param1:Array) : void
      {
         var cloth:Array = param1;
         ItemManager.addEventListener(ItemEvent.CLOTH_LIST,function(param1:ItemEvent):void
         {
            ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,arguments.callee);
            var _loc3_:Array = [];
            var _loc4_:int = 0;
            while(_loc4_ < cloth.length)
            {
               if(ItemManager.containsCloth(cloth[_loc4_]))
               {
                  _loc3_.push(ItemManager.getClothInfo(cloth[_loc4_]));
               }
               _loc4_++;
            }
            currentPage = 1;
            totalPage = Math.ceil(_loc3_.length / PET_NUM);
            if(totalPage == 0)
            {
               totalPage = 1;
            }
            _view.setPageNum(1,totalPage);
            _view.showItem(_loc3_);
         });
         ItemManager.getCloth();
      }
      
      private function nextHandler(param1:Event) : void
      {
         if(this.currentPage < this.totalPage)
         {
            ++this.currentPage;
            this._view.setPageNum(this.currentPage,this.totalPage);
            this._view.showItem(this.getArray(this._filterList,this.currentPage));
         }
      }
      
      private function prevHandler(param1:Event) : void
      {
         if(this.currentPage > 1)
         {
            --this.currentPage;
            this._view.setPageNum(this.currentPage,this.totalPage);
            this._view.showItem(this.getArray(this._filterList,this.currentPage));
         }
      }
      
      private function actEventHandler(param1:DynamicEvent) : void
      {
         var id:uint = 0;
         var info:SingleItemInfo = null;
         var i:int = 0;
         var event:DynamicEvent = param1;
         if(this._filterList == null)
         {
            return;
         }
         if(BagShowType.currType == BagShowType.ALL)
         {
            id = uint(event.paramObject);
            this._itemList.some(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
            {
               if(param1.itemID == id)
               {
                  info = param1;
                  return true;
               }
               return false;
            });
            i = -1;
            this._filterList.some(function(param1:SingleItemInfo, param2:int, param3:Array):Boolean
            {
               if(param1.itemID == _view.clickItemID)
               {
                  i = param2;
                  return true;
               }
               return false;
            });
            switch(event.type)
            {
               case BagChangeClothAction.USE_CLOTH:
                  if(i != -1)
                  {
                     this._filterList.splice(i,1);
                  }
                  break;
               case BagChangeClothAction.REPLACE_CLOTH:
                  if(i != -1)
                  {
                     this._filterList.splice(i,1);
                     if(info)
                     {
                        this._filterList.unshift(info);
                     }
                  }
                  break;
               case BagChangeClothAction.TAKE_OFF_CLOTH:
                  if(info)
                  {
                     this._filterList.unshift(info);
                  }
            }
            this.totalPage = Math.ceil(this._filterList.length / this.PET_NUM);
            if(this.totalPage == 0)
            {
               this.totalPage = 1;
            }
            if(this.currentPage > this.totalPage)
            {
               this.currentPage = this.totalPage;
            }
            if(com.robot.app.bag.BagPanel.currTab == BagTabType.COLLECTION)
            {
               this._view.goToCloth();
            }
            this._view.setPageNum(this.currentPage,this.totalPage);
            this._view.showItem(this.getArray(this._filterList,this.currentPage));
         }
      }
      
      private function onClothChange(param1:Event) : void
      {
         if(BagShowType.currType == BagShowType.SUIT)
         {
            this.showSuit(SuitXMLInfo.getClothsForItem(this._view.clickItemID));
         }
      }
      
      private function onTypeSelect(param1:BagTypeEvent) : void
      {
         if(param1.showType == BagShowType.SUIT)
         {
            this.showSuit(SuitXMLInfo.getCloths(param1.suitID));
         }
         else
         {
            this.showItem();
         }
      }
      
      private function onCollectTypeSelect(param1:BagCollectTypeEvent) : void
      {
         this.showItem();
      }
      
      private function checkCollectType(param1:uint) : uint
      {
         var _loc4_:uint = 0;
         var _loc2_:Array = [BagCollectType.MINERAL_RAG,BagCollectType.JINGYUAN_RAG];
         var _loc3_:uint = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc4_ = 0;
            while(_loc4_ < _loc2_[_loc3_].length)
            {
               if(param1 >= _loc2_[_loc3_][_loc4_][0] && param1 <= _loc2_[_loc3_][_loc4_][1])
               {
                  return _loc3_ + 1;
               }
               _loc4_++;
            }
            _loc3_++;
         }
         return 0;
      }
      
      public function sortList() : void
      {
         this._filterList.sort(this.sortFun);
      }
      
      public function sortFun(param1:SingleItemInfo, param2:SingleItemInfo) : int
      {
         if(ItemXMLInfo.getCatID(param1.itemID) == 16)
         {
            return -1;
         }
         if(param1.itemID > param2.itemID)
         {
            return 1;
         }
         if(param1.itemID < param2.itemID)
         {
            return -1;
         }
         return 0;
      }
      
      public function get pageArray() : Array
      {
         return this.getArray(this._filterList,this.currentPage);
      }
   }
}
