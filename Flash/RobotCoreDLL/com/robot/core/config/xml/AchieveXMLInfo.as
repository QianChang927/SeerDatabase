package com.robot.core.config.xml
{
   import com.robot.core.ui.alert.Alarm;
   
   public class AchieveXMLInfo
   {
      
      private static var xmlClass:Class = AchieveXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
       
      
      public function AchieveXMLInfo()
      {
         super();
      }
      
      public static function showTotal() : void
      {
         var _loc3_:XML = null;
         var _loc1_:XMLList = xml.type.Branches.Branch.Rule;
         var _loc2_:int = 0;
         for each(_loc3_ in _loc1_)
         {
            _loc2_ += int(_loc3_.@AchievementPoint);
         }
         Alarm.show("总的成就点数为：" + _loc2_);
      }
      
      public static function getTypeName(param1:uint) : String
      {
         var _loc3_:String = null;
         var _loc4_:XML = null;
         var _loc2_:XMLList = xml.descendants("type");
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@ID == param1.toString())
            {
               _loc3_ = _loc4_.@Desc;
               break;
            }
         }
         return _loc3_;
      }
      
      public static function getBranchIDs(param1:uint) : Array
      {
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:uint = 0;
         var _loc2_:uint = uint(xml.type[param1].Branches.length());
         var _loc3_:Array = [];
         _loc4_ = 0;
         while(_loc4_ < _loc2_)
         {
            _loc6_ = uint(xml.type[param1].Branches[_loc4_].Branch.length());
            _loc5_ = 0;
            while(_loc5_ < _loc6_)
            {
               _loc3_.push(uint(xml.type[param1].Branches[_loc4_].Branch[_loc5_].@ID));
               _loc5_++;
            }
            _loc4_++;
         }
         return _loc3_;
      }
      
      public static function getBranchByID(param1:uint) : XML
      {
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc2_:XMLList = xml.descendants("Branch");
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@ID == param1.toString())
            {
               _loc3_ = _loc4_;
               break;
            }
         }
         return setIconID(_loc3_);
      }
      
      public static function getIsShowPro(param1:uint) : uint
      {
         var _loc4_:XML = null;
         var _loc2_:XMLList = xml.descendants("Branch");
         var _loc3_:uint = 0;
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@ID == param1.toString())
            {
               if(_loc4_.@isShowPro == "1")
               {
                  _loc3_ = 1;
                  break;
               }
            }
         }
         return _loc3_;
      }
      
      public static function getRule(param1:uint, param2:uint) : XML
      {
         var _loc5_:XML = null;
         var _loc6_:XML = null;
         var _loc3_:XML = getBranchByID(param1);
         if(null == _loc3_)
         {
            return null;
         }
         var _loc4_:XMLList = _loc3_.descendants("Rule");
         for each(_loc6_ in _loc4_)
         {
            if(_loc6_.@ID == param2.toString())
            {
               _loc5_ = _loc6_;
               break;
            }
         }
         return setIconID(_loc5_);
      }
      
      public static function getOriginalTitle(param1:uint) : String
      {
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc2_:XMLList = xml.descendants("Rule");
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@SpeNameBonus == param1.toString())
            {
               _loc3_ = _loc4_;
               break;
            }
         }
         if(_loc3_ == null)
         {
            return "无称号";
         }
         return _loc3_.@title;
      }
      
      public static function getTitle(param1:uint) : String
      {
         var _loc2_:String = null;
         _loc2_ = getOriginalTitle(param1);
         return _loc2_.replace("|","");
      }
      
      public static function getTitleIconId(param1:uint) : int
      {
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc2_:XMLList = xml.descendants("Rule");
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@SpeNameBonus == param1.toString())
            {
               _loc3_ = _loc4_;
               break;
            }
         }
         if(_loc3_ == null || !_loc3_.hasOwnProperty("@proicon"))
         {
            return 0;
         }
         return int(_loc3_.@proicon);
      }
      
      public static function getTitleColor(param1:uint) : int
      {
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc2_:XMLList = xml.descendants("Rule");
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@SpeNameBonus == param1.toString())
            {
               _loc3_ = _loc4_;
               break;
            }
         }
         if(_loc3_ == null || !_loc3_.hasOwnProperty("@titleColor"))
         {
            return 0;
         }
         return _loc3_.@titleColor;
      }
      
      public static function isAbilityTitle(param1:uint) : Boolean
      {
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc2_:XMLList = xml.descendants("Rule");
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@SpeNameBonus == param1.toString() && int(_loc4_.@AbilityTitle) > 0)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function getAbilityTitles() : Array
      {
         var _loc2_:XML = null;
         var _loc4_:XML = null;
         var _loc1_:XMLList = xml.descendants("Rule");
         var _loc3_:Array = [];
         for each(_loc4_ in _loc1_)
         {
            if(int(_loc4_.@SpeNameBonus) > 0 && int(_loc4_.@AbilityTitle) > 0)
            {
               _loc3_.push(int(_loc4_.@SpeNameBonus));
            }
         }
         return _loc3_;
      }
      
      private static function setIconID(param1:XML) : XML
      {
         var _loc2_:String = null;
         if(param1 == null)
         {
            return param1;
         }
         var _loc3_:String = param1.@AchievementPoint;
         switch(_loc3_)
         {
            case "0":
               _loc2_ = "10";
               break;
            case "5":
               _loc2_ = "8";
               break;
            case "10":
               _loc2_ = "1";
               break;
            case "15":
               _loc2_ = "2";
               break;
            case "30":
               _loc2_ = "3";
               break;
            case "20":
               _loc2_ = "4";
               break;
            case "25":
               _loc2_ = "7";
               break;
            case "40":
               _loc2_ = "5";
               break;
            case "50":
               _loc2_ = "6";
               break;
            case "35":
               _loc2_ = "9";
         }
         param1.@icon = _loc2_;
         return param1;
      }
   }
}
