package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class SuperEvoXMLInfo
   {
      
      private static var _instance:com.robot.core.config.xml.SuperEvoXMLInfo;
       
      
      private var xmlCls:Class;
      
      private var _xmlData:XML;
      
      private var _dataMap:HashMap;
      
      public function SuperEvoXMLInfo()
      {
         var _loc2_:XML = null;
         var _loc3_:int = 0;
         this.xmlCls = SuperEvoXMLInfo_xmlCls;
         super();
         this._xmlData = XML(new this.xmlCls());
         this._dataMap = new HashMap();
         var _loc1_:XMLList = this._xmlData.elements("SuperEvolve");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = int(_loc2_.@ID);
            this._dataMap.add(_loc3_,_loc2_);
         }
      }
      
      private static function get instance() : com.robot.core.config.xml.SuperEvoXMLInfo
      {
         if(!_instance)
         {
            _instance = new com.robot.core.config.xml.SuperEvoXMLInfo();
         }
         return _instance;
      }
      
      public static function getOrigins(param1:int) : Array
      {
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc2_:Array = [];
         var _loc3_:XML = instance._dataMap.getValue(param1);
         if(_loc3_)
         {
            _loc4_ = String(_loc3_.@Origin).split(" ");
            _loc5_ = 0;
            while(_loc5_ < _loc4_.length)
            {
               _loc2_.push(int(_loc4_[_loc5_]));
               _loc5_++;
            }
         }
         return _loc2_;
      }
      
      public static function getTarget(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:XML = instance._dataMap.getValue(param1);
         if(_loc3_)
         {
            _loc2_ = int(_loc3_.@Target);
         }
         return _loc2_;
      }
      
      public static function getBitSet(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:XML = instance._dataMap.getValue(param1);
         if(_loc3_)
         {
            _loc2_ = int(_loc3_.@BitSetId);
         }
         return _loc2_;
      }
      
      public static function getDesc(param1:int) : String
      {
         var _loc2_:String = null;
         var _loc3_:XML = instance._dataMap.getValue(param1);
         if(_loc3_)
         {
            _loc2_ = _loc3_.@Desc;
         }
         return _loc2_;
      }
      
      public static function getInItemsId(param1:int) : Array
      {
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc2_:Array = [];
         var _loc3_:XML = instance._dataMap.getValue(param1);
         if(_loc3_)
         {
            _loc5_ = (_loc4_ = _loc3_.In[0]).elements("Item");
            for each(_loc6_ in _loc5_)
            {
               _loc7_ = int(_loc6_.@ID);
               _loc2_.push(_loc7_);
            }
         }
         return _loc2_;
      }
      
      public static function getInItems(param1:int) : Array
      {
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc9_:Object = null;
         var _loc2_:Array = [];
         var _loc3_:XML = instance._dataMap.getValue(param1);
         if(_loc3_)
         {
            _loc5_ = (_loc4_ = _loc3_.In[0]).elements("Item");
            for each(_loc6_ in _loc5_)
            {
               _loc7_ = int(_loc6_.@ID);
               _loc8_ = int(_loc6_.@Count);
               _loc9_ = {
                  "id":_loc7_,
                  "count":_loc8_
               };
               _loc2_.push(_loc9_);
            }
         }
         return _loc2_;
      }
   }
}
