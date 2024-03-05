package com.robot.core.config.xml
{
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.utils.CommonUI;
   
   public class FightingXMLInfo
   {
      
      private static var _xmlClass:Class = FightingXMLInfo__xmlClass;
      
      private static var _xml:XML = XML(new _xmlClass());
       
      
      public function FightingXMLInfo()
      {
         super();
      }
      
      public static function getMinFighting() : String
      {
         if(MainManager.actorInfo.petMaxLev < 30)
         {
            return "";
         }
         var _loc1_:XML = getMinXml();
         if(_loc1_)
         {
            return "[玩法]" + _loc1_.@name;
         }
         return "";
      }
      
      public static function changeMap() : void
      {
         var xml:XML = null;
         if(MainManager.actorInfo.petMaxLev < 30)
         {
            return;
         }
         xml = getMinXml();
         if(xml)
         {
            if(MapManager.currentMap)
            {
               if(MapManager.currentMap.id == uint(xml.@map))
               {
                  CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
                  CommonUI.addYellowArrow(MapManager.currentMap.topLevel,uint(xml.@posX),uint(xml.@posY),uint(xml.@rotation));
                  return;
               }
            }
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               if(MapManager.currentMap.id == uint(xml.@map))
               {
                  CommonUI.addYellowArrow(MapManager.currentMap.topLevel,uint(xml.@posX),uint(xml.@posY),uint(xml.@rotation));
               }
            });
            MapManager.changeMap(uint(xml.@map));
         }
      }
      
      private static function getMinXml() : XML
      {
         var _loc4_:XML = null;
         var _loc5_:XML = null;
         var _loc1_:XMLList = _xml.children();
         var _loc2_:uint = uint(_loc1_.length());
         var _loc3_:uint = 0;
         while(_loc3_ < _loc2_)
         {
            _loc4_ = _loc1_[_loc3_];
            if((_loc5_ = _loc1_[_loc3_ + 1]) == null)
            {
               return _loc4_;
            }
            if(MainManager.actorInfo.petMaxLev >= uint(_loc4_.@lv) && MainManager.actorInfo.petMaxLev < uint(_loc5_.@lv))
            {
               return _loc4_;
            }
            _loc3_++;
         }
         return null;
      }
   }
}
