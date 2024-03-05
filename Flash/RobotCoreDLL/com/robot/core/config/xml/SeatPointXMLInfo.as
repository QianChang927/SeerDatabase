package com.robot.core.config.xml
{
   import com.robot.core.manager.MapManager;
   import flash.display.MovieClip;
   import org.taomee.ds.HashMap;
   
   public class SeatPointXMLInfo
   {
      
      private static var xmlClass:Class = SeatPointXMLInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _xmllist:XMLList;
      
      private static var _hashMap:HashMap;
      
      {
         setup();
      }
      
      public function SeatPointXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _hashMap = new HashMap();
         _xmllist = _xml.seat;
         for each(_loc1_ in _xmllist)
         {
            _hashMap.add(uint(_loc1_.@mapID),_loc1_);
         }
      }
      
      public static function getGroupBtn(param1:uint) : MovieClip
      {
         var _loc3_:String = null;
         var _loc4_:MovieClip = null;
         var _loc2_:XML = _hashMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@btn"))
         {
            _loc3_ = _loc2_.@btn;
            if(_loc4_ = MapManager.currentMap.controlLevel[_loc3_])
            {
               return _loc4_;
            }
            throw new Error("元件【" + _loc3_ + "】功能层没有找到");
         }
         return null;
      }
      
      public static function getSeatPointMC(param1:uint, param2:uint, param3:uint) : MovieClip
      {
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:uint = 0;
         var _loc8_:XMLList = null;
         var _loc9_:XML = null;
         var _loc10_:String = null;
         var _loc11_:MovieClip = null;
         var _loc4_:XML;
         if((Boolean(_loc4_ = _hashMap.getValue(param1))) && _loc4_.hasOwnProperty("sct"))
         {
            if(_loc5_ = _loc4_.sct)
            {
               for each(_loc6_ in _loc5_)
               {
                  if((_loc7_ = uint(_loc6_.@id)) == param2)
                  {
                     _loc8_ = _loc6_.point;
                     for each(_loc9_ in _loc8_)
                     {
                        if(_loc9_.@id == param3)
                        {
                           _loc10_ = _loc9_.@mc;
                           if(_loc11_ = MapManager.currentMap.controlLevel[_loc10_])
                           {
                              return _loc11_;
                           }
                        }
                     }
                  }
               }
            }
         }
         return null;
      }
      
      public static function getSctMaxPoint(param1:uint, param2:uint) : uint
      {
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc6_:uint = 0;
         var _loc3_:XML = _hashMap.getValue(param1);
         if(Boolean(_loc3_) && _loc3_.hasOwnProperty("sct"))
         {
            if(_loc4_ = _loc3_.sct)
            {
               for each(_loc5_ in _loc4_)
               {
                  if((_loc6_ = uint(_loc5_.@id)) == param2)
                  {
                     return (_loc5_.point as XMLList).length();
                  }
               }
            }
         }
         return 0;
      }
   }
}
