package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class RedSysXmlInfo
   {
      
      private static var xmlClass:Class = RedSysXmlInfo_xmlClass;
      
      private static var xmlClass1:Class = RedSysXmlInfo_xmlClass1;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _reds:HashMap;
      
      {
         setup();
      }
      
      public function RedSysXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         _xml = XML(new xmlClass());
         if(SystemTimerManager.splitVersion2022(true) == 1)
         {
            _xml = XML(new xmlClass1());
         }
         _reds = new HashMap();
         var _loc1_:XMLList = _xml.Red;
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = {};
            _loc3_.id = int(_loc2_.@ID);
            _loc3_.type = int(_loc2_.@type);
            _loc3_.tips = String(_loc2_.@tips);
            _loc3_.value = String(_loc2_.@From);
            _loc3_.isClick = int(_loc2_.@IsClick);
            _loc3_.forwhat = int(_loc2_.@forwhat);
            if(_loc3_.forwhat == 1 || _loc3_.forwhat == 3)
            {
               _reds.add(_loc3_.id,_loc3_);
            }
         }
      }
      
      public static function redIds() : Array
      {
         var _loc1_:Array = _reds.getValues();
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc2_.push(_loc1_[_loc3_].id);
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function getTypeById(param1:int) : int
      {
         var _loc2_:Object = _reds.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.type;
         }
         return 0;
      }
      
      public static function getIsClickById(param1:int, param2:int) : Boolean
      {
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc6_:String = null;
         var _loc3_:Object = _reds.getValue(param1);
         if(_loc3_)
         {
            _loc6_ = String((_loc5_ = (_loc4_ = String(_loc3_.value)).split("|"))[0]);
            if(_loc3_.isClick)
            {
               if(param2 == 1 && _loc6_.indexOf("icon:") != -1)
               {
                  return true;
               }
               if(param2 == 2 && _loc6_.indexOf("shopcenter:") != -1)
               {
                  return true;
               }
            }
         }
         return false;
      }
      
      public static function getIdByIcon(param1:String = "") : Array
      {
         var _loc5_:String = null;
         var _loc6_:Array = null;
         var _loc7_:int = 0;
         var _loc2_:Array = _reds.getValues();
         var _loc3_:Array = [];
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_.length)
         {
            _loc6_ = (_loc5_ = String(_loc2_[_loc4_].value)).split("|");
            _loc7_ = 0;
            while(_loc7_ < _loc6_.length)
            {
               if(_loc6_[_loc7_] == "icon:" + param1)
               {
                  _loc3_.push(_loc2_[_loc4_].id);
               }
               _loc7_++;
            }
            _loc4_++;
         }
         return _loc3_;
      }
      
      public static function getIdByNewGiftPackSys(param1:int) : int
      {
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc2_:Array = _reds.getValues();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc5_ = (_loc4_ = String(_loc2_[_loc3_].value)).split("|");
            _loc6_ = 0;
            while(_loc6_ < _loc5_.length)
            {
               if(_loc5_[_loc6_] == "shopcenter:" + param1)
               {
                  return _loc2_[_loc3_].id;
               }
               _loc6_++;
            }
            _loc3_++;
         }
         return 0;
      }
   }
}
