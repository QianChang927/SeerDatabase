package com.robot.app.petbag.petPropsBag
{
   import com.robot.app.petbag.petPropsBag.ui.PetPropsPanel;
   import com.robot.app.petbag.petPropsBag.ui.PetPropsPanelNew;
   import com.robot.app.petbag.ui.PetBagPanelNew;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.utils.ItemType;
   import flash.display.Sprite;
   import flash.events.DataEvent;
   import flash.events.Event;
   
   public class PetBagModelNew
   {
       
      
      public var view:PetPropsPanelNew;
      
      private var idArray:Array;
      
      public var currentPage:uint = 1;
      
      private var PET_NUM:uint = 8;
      
      private var doodleAry:Array;
      
      private var _currentPageType:int = -1;
      
      public function PetBagModelNew(param1:Sprite, param2:uint)
      {
         super();
         this.view = param1 as PetPropsPanelNew;
         this.addEvent();
         this.onShowCollection(param2);
      }
      
      public function addEvent() : void
      {
         this.view.addEventListener(Event.CLOSE,this.onPanelClose);
         this.view.addEventListener(PetPropsPanel.NEXT_PAGE,this.nextHandler);
         this.view.addEventListener(PetPropsPanel.PREV_PAGE,this.prevHandler);
         this.view.addEventListener(PetPropsPanelNew.CHANGE_TYPE,this.onChangeType);
      }
      
      private function onChangeType(param1:DataEvent) : void
      {
         var _loc2_:int = parseInt(param1.data);
         this.currentPageType = _loc2_;
      }
      
      public function removeEvent() : void
      {
         this.view.removeEventListener(Event.CLOSE,this.onPanelClose);
         this.view.removeEventListener(PetPropsPanel.NEXT_PAGE,this.nextHandler);
         this.view.removeEventListener(PetPropsPanel.PREV_PAGE,this.prevHandler);
      }
      
      private function onPanelClose(param1:Event) : void
      {
         this.currentPage = 1;
         this.clear();
      }
      
      public function clear() : void
      {
         ItemManager.removeEventListener(ItemEvent.PET_ITEM_LIST,this.onPetItemList);
      }
      
      public function onShowCollection(param1:uint) : void
      {
         this.currentPage = param1;
         ItemManager.addEventListener(ItemEvent.PET_ITEM_LIST,this.onPetItemList);
         ItemManager.getPetItem();
      }
      
      private function getArray(param1:Boolean = true, param2:uint = 1, param3:uint = 8) : Array
      {
         var _loc4_:uint = (param2 - 1) * param3;
         var _loc5_:uint = param2 * param3;
         return this.currentTypeList.slice(_loc4_,_loc5_);
      }
      
      private function get currentTypeList() : Array
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc1_:Array = [];
         if(this._currentPageType == ItemType.TYPE_ALL)
         {
            return this.doodleAry;
         }
         if(this._currentPageType != -1)
         {
            _loc2_ = 0;
            while(_loc2_ < this.doodleAry.length)
            {
               _loc3_ = int(this.doodleAry[_loc2_]);
               if(ItemXMLInfo.getItemIsType(_loc3_,this._currentPageType))
               {
                  _loc1_.push(_loc3_);
               }
               _loc2_++;
            }
         }
         return _loc1_;
      }
      
      private function onPetItemList(param1:ItemEvent) : void
      {
         ItemManager.removeEventListener(ItemEvent.PET_ITEM_LIST,this.onPetItemList);
         this.showItem(ItemManager.getPetItemIDs());
      }
      
      private function showItem(param1:Array) : void
      {
         var _loc2_:uint = 0;
         this.doodleAry = [];
         for each(_loc2_ in param1)
         {
            if(ItemXMLInfo.getIsShowInPetBag(_loc2_))
            {
               this.doodleAry.push(_loc2_);
            }
         }
         this.doodleAry.sort(this.sortFun);
         this.view.setPageNum(this.currentPage,this.totalPage);
         this.view.showItem(this.getArray(false,this.currentPage));
      }
      
      public function sortFun(param1:int, param2:int) : int
      {
         if(ItemXMLInfo.getCatID(param1) == 16)
         {
            return -1;
         }
         return 1;
      }
      
      private function prevHandler(param1:Event) : void
      {
         if(this.currentPage > 1)
         {
            --this.currentPage;
            this.view.showItem(this.getArray(false,this.currentPage));
            this.view.setPageNum(this.currentPage,this.totalPage);
            PetBagPanelNew._page = this.currentPage;
         }
      }
      
      private function nextHandler(param1:Event) : void
      {
         if(this.currentPage < this.totalPage)
         {
            ++this.currentPage;
            this.view.showItem(this.getArray(false,this.currentPage));
            this.view.setPageNum(this.currentPage,this.totalPage);
            PetBagPanelNew._page = this.currentPage;
         }
      }
      
      public function set currentPageType(param1:int) : void
      {
         this._currentPageType = param1;
         this.currentPage = 1;
         this.view.showItem(this.getArray(false,this.currentPage));
         this.view.setPageNum(this.currentPage,this.totalPage);
         PetBagPanelNew._page = this.currentPage;
      }
      
      public function get totalPage() : int
      {
         var _loc1_:Number = Math.ceil(this.currentTypeList.length / this.PET_NUM);
         if(_loc1_ == 0)
         {
            _loc1_ = 1;
         }
         return _loc1_;
      }
   }
}
