package com.robot.core.info.item
{
   public class ClothData
   {
       
      
      private var _itemObj:Object;
      
      public function ClothData(param1:Object)
      {
         super();
         this._itemObj = param1;
      }
      
      public function get price() : uint
      {
         return this._itemObj["Price"];
      }
      
      public function get type() : String
      {
         return this._itemObj["type"];
      }
      
      public function get id() : int
      {
         return int(this._itemObj["ID"]);
      }
      
      public function get name() : String
      {
         return this._itemObj["Name"];
      }
      
      public function get actionDir() : int
      {
         return this._itemObj.hasOwnProperty("actionDir") == "" ? int(this._itemObj["actionDir"]) : -1;
      }
      
      public function get repairPrice() : uint
      {
         return uint(this._itemObj["RepairPrice"]);
      }
   }
}
