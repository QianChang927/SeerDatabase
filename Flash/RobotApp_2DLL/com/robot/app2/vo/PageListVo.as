package com.robot.app2.vo
{
   public class PageListVo
   {
       
      
      private var _pageSize:int;
      
      private var _currentPageIndex:int;
      
      private var _list:Array;
      
      public function PageListVo(param1:Array, param2:int)
      {
         super();
         this._list = param1;
         this._pageSize = param2;
      }
      
      public function gotoPre() : Boolean
      {
         if(this._currentPageIndex > 0)
         {
            --this._currentPageIndex;
            return true;
         }
         return false;
      }
      
      public function goToNext() : Boolean
      {
         if(this.hasNextPage)
         {
            ++this._currentPageIndex;
            return true;
         }
         return false;
      }
      
      public function get hasPre() : Boolean
      {
         return this._currentPageIndex > 0;
      }
      
      public function get currentPageList() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         while(_loc2_ < this._pageSize)
         {
            _loc1_.push(this._list[this.startIndex + _loc2_]);
            _loc2_++;
         }
         return _loc1_;
      }
      
      public function get startIndex() : int
      {
         return this._currentPageIndex * this._pageSize;
      }
      
      public function get hasNextPage() : Boolean
      {
         return this._currentPageIndex < this.maxPageIndex - 1;
      }
      
      public function get maxPageIndex() : int
      {
         var _loc1_:int = Math.ceil(this._list.length / this._pageSize);
         return 0 == _loc1_ ? 1 : _loc1_;
      }
      
      public function get currentPageIndex() : int
      {
         return this._currentPageIndex;
      }
      
      public function set currentPageIndex(param1:int) : void
      {
         if(param1 < 0)
         {
            this._currentPageIndex = 0;
            return;
         }
         if(param1 > this.maxPageIndex - 1)
         {
            this._currentPageIndex = this.maxPageIndex - 1;
            return;
         }
         this._currentPageIndex = param1;
      }
      
      public function destory() : void
      {
         var _loc1_:Object = null;
         for each(_loc1_ in this._list)
         {
            if(_loc1_.hasOwnProperty("destory"))
            {
               (_loc1_ as Object).destory();
            }
            if(_loc1_.hasOwnProperty("destroy"))
            {
               (_loc1_ as Object).destroy();
            }
         }
         this._list = null;
      }
      
      public function get list() : Array
      {
         return this._list;
      }
      
      public function get pageSize() : int
      {
         return this._pageSize;
      }
      
      public function set pageSize(param1:int) : void
      {
         this._pageSize = param1;
      }
   }
}
