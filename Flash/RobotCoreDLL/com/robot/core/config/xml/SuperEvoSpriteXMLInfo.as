package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class SuperEvoSpriteXMLInfo
   {
      
      private static var _instance:com.robot.core.config.xml.SuperEvoSpriteXMLInfo;
       
      
      private var xmlCls:Class;
      
      private var _xmlData:XML;
      
      private var _dataMap:HashMap;
      
      public function SuperEvoSpriteXMLInfo()
      {
         var _loc3_:XML = null;
         this.xmlCls = SuperEvoSpriteXMLInfo_xmlCls;
         super();
         this._xmlData = XML(new this.xmlCls());
         this._dataMap = new HashMap();
         var _loc1_:XMLList = this._xmlData.elements("SuperEvolve");
         var _loc2_:uint = 0;
         for each(_loc3_ in _loc1_)
         {
            _loc2_++;
            this._dataMap.add(_loc2_,_loc3_);
         }
      }
      
      public static function get tool() : com.robot.core.config.xml.SuperEvoSpriteXMLInfo
      {
         return _instance = _instance || new com.robot.core.config.xml.SuperEvoSpriteXMLInfo();
      }
      
      public function get getTargtIdArr() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in this._dataMap.getValues())
         {
            _loc1_.push(uint(_loc2_.@Target));
         }
         return _loc1_;
      }
      
      public function get dataList() : Array
      {
         return this._dataMap.getValues();
      }
      
      public function get num() : int
      {
         return this._dataMap.getValues().length;
      }
      
      public function getID(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@ID.toString();
         }
         return "";
      }
      
      public function getName(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@Desc.toString();
         }
         return "";
      }
      
      public function getDetailSesc(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@DetailSesc.toString();
         }
         return "";
      }
      
      public function getTarget(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@Target.toString();
         }
         return "";
      }
      
      public function getExChangeId(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.In[0].Item.@Exchange.toString();
         }
         return "";
      }
      
      public function getCatchInfo(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@OriginSearch.toString();
         }
         return "";
      }
      
      public function getOriginPetDesc(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@OriginSearchDesc.toString();
         }
         return "";
      }
      
      public function getOriginPet(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@Origin.toString();
         }
         return "";
      }
      
      public function getOriginPetList(param1:uint) : Array
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         var _loc3_:String = _loc2_.@Origin.toString();
         return _loc3_.split(" ");
      }
      
      public function getItemsId(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.In[0].Item.@ID.toString();
         }
         return "";
      }
      
      public function getSuperPetBitID(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@BitSetId;
         }
         return "";
      }
      
      public function getSuperItemsBitID(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.In[0].Item.@IcomItemBit.toString();
         }
         return "";
      }
      
      public function getSuperItemsList(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.In[0].Item.@comItemList.toString();
         }
         return "";
      }
      
      public function comItemListSearch(param1:uint) : String
      {
         var _loc2_:XML = this._dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.In[0].Item.@comItemListSearch.toString();
         }
         return "";
      }
      
      public function isHaveOriginPet(param1:uint) : Boolean
      {
         var _loc3_:XML = null;
         var _loc4_:Boolean = false;
         var _loc5_:int = 0;
         var _loc6_:String = null;
         var _loc7_:Array = null;
         var _loc8_:uint = 0;
         var _loc2_:Vector.<int> = new Vector.<int>();
         for each(_loc3_ in this._dataMap.getValues())
         {
            _loc7_ = (_loc6_ = _loc3_.@Origin).split(" ");
            for each(_loc8_ in _loc7_)
            {
               _loc2_.push(_loc8_);
            }
         }
         for each(_loc5_ in _loc2_)
         {
            if(_loc5_ == param1)
            {
               return true;
            }
         }
         return false;
      }
   }
}
