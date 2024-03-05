package com.robot.core.info.sBreakthrouthInfo
{
   import com.robot.core.config.xml.GoldProductXMLInfo;
   
   public class PetBreakthrouthInfo
   {
       
      
      private var _pid:int;
      
      private var _cardId:int;
      
      private var _cardNum:int;
      
      private var _middleItem:int;
      
      private var _type:int;
      
      private var _star:int;
      
      public function PetBreakthrouthInfo()
      {
         super();
      }
      
      public function get pid() : int
      {
         return this._pid;
      }
      
      public function set pid(param1:int) : void
      {
         this._pid = param1;
      }
      
      public function get cardId() : int
      {
         return this._cardId;
      }
      
      public function set cardId(param1:int) : void
      {
         this._cardId = param1;
      }
      
      public function get cardNum() : int
      {
         return this._cardNum;
      }
      
      public function set cardNum(param1:int) : void
      {
         this._cardNum = param1;
      }
      
      public function get middleItem() : int
      {
         return this._middleItem;
      }
      
      public function set middleItem(param1:int) : void
      {
         this._middleItem = param1;
      }
      
      public function get buyId() : int
      {
         return GoldProductXMLInfo.getProductByItemId(this.middleItem);
      }
      
      public function get star() : int
      {
         return this._star;
      }
      
      public function set star(param1:int) : void
      {
         this._star = param1;
      }
      
      public function get type() : int
      {
         return this._type;
      }
      
      public function set type(param1:int) : void
      {
         this._type = param1;
      }
   }
}
