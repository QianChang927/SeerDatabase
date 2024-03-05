package com.robot.core.config.xml
{
   import com.robot.core.manager.MapManager;
   import org.taomee.ds.HashMap;
   
   public class MovesLangXMLInfo
   {
      
      private static var xmlClass:Class = MovesLangXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      {
         setup();
      }
      
      public function MovesLangXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         _dataMap = new HashMap();
         var _loc1_:XMLList = XML(new xmlClass()).elements("moves");
         for each(_loc2_ in _loc1_)
         {
            _dataMap.add(uint(_loc2_.@id),_loc2_.elements("lang"));
         }
      }
      
      public static function getRandomLang(param1:uint) : String
      {
         var _loc4_:Array = null;
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc7_:XML = null;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc2_:XMLList = _dataMap.getValue(param1);
         var _loc3_:String = "";
         if(_loc2_)
         {
            _loc4_ = [];
            _loc5_ = [];
            _loc6_ = _loc2_.length();
            _loc8_ = 0;
            _loc9_ = 0;
            while(_loc9_ < _loc6_)
            {
               _loc7_ = _loc2_[_loc9_];
               if(int(_loc7_.@map) > 0)
               {
                  if(MapManager.currentMap)
                  {
                     if(int(_loc7_.@map) == MapManager.currentMap.id)
                     {
                        _loc5_.push(_loc7_);
                     }
                  }
               }
               else
               {
                  _loc4_.push(_loc7_);
               }
               _loc9_++;
            }
            if(_loc5_.length > 0)
            {
               _loc8_ = int(_loc5_.length * Math.random());
               _loc3_ = (_loc7_ = _loc5_[_loc8_]).toString();
            }
            else if(_loc4_.length > 0)
            {
               _loc8_ = int(_loc4_.length * Math.random());
               _loc3_ = (_loc7_ = _loc4_[_loc8_]).toString();
            }
         }
         return _loc3_;
      }
   }
}
