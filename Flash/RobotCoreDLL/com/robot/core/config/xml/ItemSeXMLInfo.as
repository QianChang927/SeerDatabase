package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class ItemSeXMLInfo
   {
      
      private static var xmlClass:Class = ItemSeXMLInfo_xmlClass;
      
      private static var _seDict:HashMap;
      
      private static var _seSuitDict:HashMap;
      
      {
         setup();
      }
      
      public function ItemSeXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc3_:XML = null;
         _seDict = new HashMap();
         _seSuitDict = new HashMap();
         var _loc1_:XML = XML(new xmlClass());
         var _loc2_:XMLList = _loc1_.elements("Equip");
         for each(_loc3_ in _loc2_)
         {
            _seDict.add(String(_loc3_.@ItemID),_loc3_);
            if(int(_loc3_.@SuitID) > 0)
            {
               _seSuitDict.add(String(_loc3_.@SuitID),_loc3_);
            }
         }
      }
      
      public static function getAttributesByLv(param1:int, param2:int) : Array
      {
         var _loc5_:XML = null;
         var _loc3_:Array = [0,0,0,0,0,0,0];
         var _loc4_:XML;
         if(_loc4_ = _seDict.getValue(param1.toString()))
         {
            for each(_loc5_ in _loc4_.elements("Item"))
            {
               if(String(_loc5_.@Lv) == param2.toString())
               {
                  if(_loc5_.hasOwnProperty("@Atk"))
                  {
                     _loc3_[0] = int(_loc5_.@Atk);
                  }
                  if(_loc5_.hasOwnProperty("@Def"))
                  {
                     _loc3_[1] = int(_loc5_.@Def);
                  }
                  if(_loc5_.hasOwnProperty("@SpAtk"))
                  {
                     _loc3_[2] = int(_loc5_.@SpAtk);
                  }
                  if(_loc5_.hasOwnProperty("@SpDef"))
                  {
                     _loc3_[3] = int(_loc5_.@SpDef);
                  }
                  if(_loc5_.hasOwnProperty("@Spd"))
                  {
                     _loc3_[4] = int(_loc5_.@Spd);
                  }
                  if(_loc5_.hasOwnProperty("@Hp"))
                  {
                     _loc3_[5] = int(_loc5_.@Hp);
                  }
                  break;
               }
            }
            if(_loc4_.hasOwnProperty("@Percent"))
            {
               _loc3_[6] = Math.abs(int(_loc5_.@Percent));
            }
         }
         return _loc3_;
      }
      
      public static function hasEffect(param1:int) : Boolean
      {
         var _loc2_:XML = _seDict.getValue(param1.toString()) as XML;
         return !!_loc2_;
      }
      
      public static function getQuality(param1:int) : int
      {
         var _loc2_:XML = _seDict.getValue(param1.toString()) as XML;
         if(_loc2_)
         {
            return int(_loc2_.@Quality);
         }
         return 0;
      }
      
      public static function getQualityStr(param1:int) : String
      {
         var _loc2_:XML = _seDict.getValue(param1.toString()) as XML;
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.@Quality);
         }
         var _loc4_:Array;
         return (_loc4_ = ["普通","优秀","精良","极品","史诗"])[_loc3_];
      }
      
      public static function getQualityHtmlStr(param1:int) : String
      {
         var _loc2_:XML = _seDict.getValue(param1.toString()) as XML;
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.@Quality);
         }
         var _loc4_:Array = ["#33FF00","#33FF00","#0066FF","#9900CC","#FF9900"];
         var _loc5_:Array = ["普通","优秀","精良","极品","史诗"];
         return "<font color=\'" + _loc4_[_loc3_] + "\'>" + _loc5_[_loc3_] + "</font>";
      }
      
      public static function getEquipPart(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:XML = _seDict.getValue(param1.toString()) as XML;
         if(_loc3_)
         {
            _loc2_ = int(_loc3_.@Part);
         }
         return _loc2_;
      }
      
      public static function getEquipPartName(param1:int) : String
      {
         var _loc2_:Array = ["头部","面部","腰部","手部","脚部"];
         return _loc2_[getEquipPart(param1)];
      }
      
      public static function getItemDes(param1:int, param2:int) : String
      {
         var _loc5_:XML = null;
         var _loc3_:String = "";
         var _loc4_:XML;
         if(_loc4_ = _seDict.getValue(param1.toString()) as XML)
         {
            for each(_loc5_ in _loc4_.elements("Rank"))
            {
               if(String(_loc5_.@Lv) == param2.toString())
               {
                  _loc3_ = _loc5_.@Desc;
                  break;
               }
            }
         }
         if(Boolean(_loc3_) && _loc3_.length > 0)
         {
            return _loc3_;
         }
         return "";
      }
      
      public static function getSuitId(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:XML = _seDict.getValue(param1.toString()) as XML;
         if(_loc3_)
         {
            _loc2_ = int(_loc3_.@SuitID);
         }
         return _loc2_;
      }
      
      public static function getSuitDes(param1:int) : String
      {
         var _loc2_:String = "";
         var _loc3_:XML = _seDict.getValue(param1.toString()) as XML;
         if(_loc3_)
         {
            _loc2_ = _loc3_.@Desc;
         }
         return _loc2_;
      }
      
      public static function getseSuitDes(param1:int) : String
      {
         var _loc2_:String = "";
         var _loc3_:XML = _seSuitDict.getValue(param1.toString()) as XML;
         if(_loc3_)
         {
            _loc2_ = _loc3_.@Desc;
         }
         return _loc2_;
      }
      
      public static function getSuitEffectAttr(param1:int, param2:int = 0) : Array
      {
         var tmpArr:Array = null;
         var eid:int = 0;
         var args:Array = null;
         var attr:Array = null;
         var sid:int = param1;
         var pid:int = param2;
         var xml:XML = _seSuitDict.getValue(sid.toString());
         var effects:Array = [0,0,0,0,0,0,0,0];
         if(xml)
         {
            tmpArr = String(xml.@MonID).split(" ");
            if(String(xml.@MonID) == "0" || tmpArr.indexOf("" + pid) >= 0)
            {
               eid = int(xml.@SuitEffectID);
               args = String(xml.@SuitEffectArgs).split(" ");
               if(xml.hasOwnProperty("@AddArgs"))
               {
                  args = String(xml.@AddArgs).split(" ");
               }
               else
               {
                  args = "1 0 0 0 0 0 0".split(" ");
               }
               attr = args.map(function(param1:Object, param2:int, param3:Array):Object
               {
                  return int(param1);
               });
               switch(eid)
               {
                  case 630:
                     attr.unshift(1);
                     break;
                  case 631:
                     attr.unshift(0);
               }
               attr.unshift(int(xml.@Occasion));
               effects = attr;
            }
         }
         return effects;
      }
      
      public static function getEquipEffectAttr(param1:int, param2:int) : Array
      {
         var _loc4_:XML = null;
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc7_:Array = null;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc3_:XML = _seDict.getValue(param1.toString()) as XML;
         if(_loc3_)
         {
            for each(_loc4_ in _loc3_.elements("Rank"))
            {
               if(String(_loc4_.@Lv) == param2.toString())
               {
                  _loc5_ = String(_loc4_.@Attribute).split(" ");
                  _loc6_ = int(_loc4_.@AddWay);
                  (_loc7_ = [int(_loc3_.@Occasion)]).push(_loc6_);
                  _loc8_ = int(_loc5_.shift());
                  _loc9_ = 0;
                  while(_loc9_ < _loc5_.length)
                  {
                     _loc7_.push(int(_loc5_[_loc9_]));
                     _loc9_++;
                  }
                  _loc7_.push(_loc8_);
                  return _loc7_;
               }
            }
         }
         return [0,0,0,0,0,0,0,0];
      }
      
      public static function getAllAbilitySuit() : Array
      {
         return _seSuitDict.getKeys();
      }
   }
}
