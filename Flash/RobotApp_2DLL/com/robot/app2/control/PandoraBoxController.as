package com.robot.app2.control
{
   import flash.utils.Dictionary;
   import org.taomee.utils.DictionaryUtil;
   
   public class PandoraBoxController
   {
      
      private static var _xmlClass:Class = PandoraBoxController__xmlClass;
      
      private static var _xml:XML = XML(new _xmlClass());
      
      private static var _awards:Dictionary = new Dictionary();
      
      private static var _inited:Boolean = false;
       
      
      public function PandoraBoxController()
      {
         super();
      }
      
      private static function init() : void
      {
         var _loc1_:XMLList = null;
         var _loc2_:XML = null;
         var _loc3_:XMLList = null;
         var _loc4_:XML = null;
         if(!_inited)
         {
            _loc1_ = _xml.elements("awards");
            for each(_loc2_ in _loc1_)
            {
               _awards[int(_loc2_.@ID)] = new Dictionary();
               _loc3_ = _loc2_.elements("Item");
               for each(_loc4_ in _loc3_)
               {
                  _awards[int(_loc2_.@ID)][int(_loc4_.@ID)] = _loc4_;
               }
            }
            _inited = true;
         }
      }
      
      public static function getAwardByIndex(param1:int, param2:int) : XML
      {
         init();
         return _awards[param1][param2];
      }
      
      public static function getAwards(param1:int) : Array
      {
         init();
         return DictionaryUtil.getValues(_awards[param1]);
      }
      
      public static function getCanShowAwards(param1:int) : Array
      {
         var _loc5_:XML = null;
         init();
         var _loc2_:Array = [];
         var _loc3_:Array = DictionaryUtil.getValues(_awards[param1]);
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            _loc5_ = _loc3_[_loc4_];
            if(int(_loc5_.@Type) > 0 && int(_loc5_.@Type) < 4)
            {
               _loc2_.push(_loc5_);
            }
            _loc4_++;
         }
         return _loc2_;
      }
      
      public static function getAwardsByType(param1:int, param2:int) : Array
      {
         var _loc6_:XML = null;
         init();
         var _loc3_:Array = [];
         var _loc4_:Array = DictionaryUtil.getValues(_awards[param1]);
         var _loc5_:int = 0;
         while(_loc5_ < _loc4_.length)
         {
            _loc6_ = _loc4_[_loc5_];
            if(int(_loc6_.@Type) == param2)
            {
               _loc3_.push(_loc6_);
            }
            _loc5_++;
         }
         return _loc3_;
      }
   }
}
