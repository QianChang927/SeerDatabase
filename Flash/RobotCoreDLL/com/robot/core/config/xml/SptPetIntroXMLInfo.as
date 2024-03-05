package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.XMLEvent;
   import com.robot.core.net.XMLLoader;
   import org.taomee.utils.StringUtil;
   
   public class SptPetIntroXMLInfo
   {
      
      private static var _hander:Function;
      
      private static var _loader:XMLLoader;
      
      private static var _xml:XML;
      
      private static var _xmlList:XMLList;
      
      private static var _weaken:Array;
      
      private static var _sptArr:Array;
      
      private static var _sptFightSkillAreaIds:Array;
       
      
      public function SptPetIntroXMLInfo()
      {
         super();
      }
      
      public static function setup(param1:Function = null) : void
      {
         var _loc2_:Date = null;
         var _loc3_:Date = null;
         _hander = param1;
         if(_xml != null && petXmlList.length() > 0)
         {
            if(_hander != null)
            {
               _hander();
            }
         }
         else
         {
            _loader = new XMLLoader();
            _loader.addEventListener(XMLEvent.COMPLETE,onLoadXMLComplete);
            _loc2_ = new Date();
            _loc3_ = new Date(2017,9,4);
            if(_loc2_.time < _loc3_.time)
            {
               _loader.load(ClientConfig.getResPath("xml/SptPetInfoOld.xml"));
            }
            else
            {
               _loader.load(ClientConfig.getResPath("xml/SptPetInfo.xml"));
            }
         }
      }
      
      public static function get FightSkillAreaSpts() : Array
      {
         var _loc1_:XML = null;
         var _loc2_:Array = null;
         var _loc3_:int = 0;
         if(null == _sptFightSkillAreaIds)
         {
            _sptFightSkillAreaIds = [];
            _loc1_ = _xml.descendants("FightSkillAreaSpts")[0];
            _loc2_ = _loc1_.toString().split(",");
            _loc3_ = 0;
            while(_loc3_ < _loc2_.length)
            {
               _sptFightSkillAreaIds.push(parseInt(StringUtil.trim(_loc2_[_loc3_])));
               _loc3_++;
            }
         }
         return _sptFightSkillAreaIds;
      }
      
      protected static function onLoadXMLComplete(param1:XMLEvent) : void
      {
         _xml = XML(param1.data);
         _xmlList = _xml.spts;
         _loader.removeEventListener(XMLEvent.COMPLETE,onLoadXMLComplete);
         _loader = null;
         if(_hander != null)
         {
            _hander();
         }
      }
      
      public static function isSLevel(param1:int) : Boolean
      {
         var id:int = param1;
         return _xml..spt.(@id == id).@sLevel == 1;
      }
      
      public static function getPetIdById(param1:int) : int
      {
         var _loc3_:* = undefined;
         var _loc2_:XMLList = _xml.descendants("spt");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == param1)
            {
               return int(_loc3_.@petID[0]);
            }
         }
         return 0;
      }
      
      public static function getPetMapById(param1:int) : int
      {
         var _loc3_:* = undefined;
         var _loc2_:XMLList = _xml.descendants("spt");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == param1)
            {
               return int(_loc3_.@mapId[0]);
            }
         }
         return 0;
      }
      
      public static function getPetSIdById(param1:int) : int
      {
         var _loc3_:* = undefined;
         var _loc2_:XMLList = _xml.descendants("spt");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@sLevel[0] == 0)
            {
               return 0;
            }
            if(_loc3_.@sId[0] != 0)
            {
               return _loc3_.@sId;
            }
            if(_loc3_.@sLevel[0] == 1)
            {
               return _loc3_.@id + 1700;
            }
         }
         return 0;
      }
      
      public static function getIntroById(param1:int) : Object
      {
         var _loc4_:* = undefined;
         var _loc2_:XMLList = _xml.descendants("spt");
         var _loc3_:Object = new Object();
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@id == param1)
            {
               _loc3_.name = String(_loc4_.@name[0]);
               _loc3_.petType = String(_loc4_.@petType[0]);
               _loc3_.height = int(_loc4_.@height[0]);
               _loc3_.weight = int(_loc4_.@weight[0]);
               _loc3_.habitat = String(_loc4_.@habitat[0]);
               _loc3_.des = String(_loc4_.@des[0]);
               return _loc3_;
            }
         }
         return 0;
      }
      
      public static function getAllIntroById(param1:int) : Object
      {
         var _loc4_:* = undefined;
         var _loc2_:XMLList = _xml.descendants("spt");
         var _loc3_:Object = new Object();
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@id == param1)
            {
               _loc3_.sptId = int(_loc4_.@id[0]);
               _loc3_.petID = int(_loc4_.@petID[0]);
               _loc3_.name = String(_loc4_.@name[0]);
               _loc3_.mapId = int(_loc4_.@mapId[0]);
               _loc3_.sLevel = int(_loc4_.@sLevel[0]);
               _loc3_.petType = String(_loc4_.@petType[0]);
               _loc3_.height = int(_loc4_.@height[0]);
               _loc3_.weight = int(_loc4_.@weight[0]);
               _loc3_.habitat = String(_loc4_.@habitat[0]);
               _loc3_.des = String(_loc4_.@des[0]);
               if(_loc4_.@sId[0] != 0 && _loc4_.@sLevel[0] == 1 && _loc4_.@sId[0] != null)
               {
                  _loc3_.sId = int(_loc4_.@sId[0]);
               }
               else if(_loc4_.@sLevel[0] == 1)
               {
                  _loc3_.sId = _loc3_.sptId + 1700;
               }
               return _loc3_;
            }
         }
         return 0;
      }
      
      public static function getNews() : String
      {
         var _loc1_:* = "";
         if(_xml.panel.news.@html != null && _xml.panel.news.@html != "")
         {
            _loc1_ = "<font color=\'#ff0000\'><u><a href=\'event:xxx\'>" + _xml.panel.news.@html + "</a></u></font>";
         }
         return _xml.panel.news.@dec + _loc1_;
      }
      
      public static function getItems() : Array
      {
         var _loc3_:Object = null;
         var _loc4_:* = undefined;
         var _loc1_:Array = [];
         var _loc2_:XMLList = _xml.panel.exchange;
         for each(_loc4_ in _loc2_)
         {
            _loc3_ = new Object();
            _loc3_.itemId = int(_loc4_.@itemId[0]);
            _loc3_.excNum = int(_loc4_.@excNum[0]);
            _loc3_.excId = int(_loc4_.@excId[0]);
            _loc1_.push(_loc3_);
         }
         return _loc1_;
      }
      
      public static function getExcPets() : Array
      {
         var _loc3_:Object = null;
         var _loc5_:* = undefined;
         var _loc1_:Array = [];
         var _loc2_:XMLList = _xml.panel.pet.exchange;
         var _loc4_:Array = [];
         for each(_loc5_ in _loc2_)
         {
            _loc3_ = new Object();
            _loc3_.petId = int(_loc5_.@petId[0]);
            _loc3_.childPet = String(_loc5_.@childPet[0]).split("|");
            _loc3_.excNum = int(_loc5_.@excNum[0]);
            _loc3_.evoId = int(_loc5_.@evoId[0]);
            _loc3_.bit = int(_loc5_.@bit);
            _loc1_.push(_loc3_);
         }
         return _loc1_;
      }
      
      public static function getSptInfoByIndex(param1:int, param2:int) : Object
      {
         var _loc3_:Object = new Object();
         var _loc4_:XML = petXmlList[param1].spt[param2];
         _loc3_.sptId = int(_loc4_.@id[0]);
         _loc3_.petID = int(_loc4_.@petID[0]);
         _loc3_.name = String(_loc4_.@name[0]);
         _loc3_.mapId = int(_loc4_.@mapId[0]);
         _loc3_.sLevel = int(_loc4_.@sLevel[0]);
         _loc3_.petType = String(_loc4_.@petType[0]);
         _loc3_.height = int(_loc4_.@height[0]);
         _loc3_.weight = int(_loc4_.@weight[0]);
         _loc3_.habitat = String(_loc4_.@habitat[0]);
         _loc3_.des = String(_loc4_.@des[0]);
         if(_loc4_.@sId[0] != 0 && _loc4_.@sLevel[0] == 1 && _loc4_.@sId[0] != null)
         {
            _loc3_.sId = int(_loc4_.@sId[0]);
         }
         else if(_loc4_.@sLevel[0] == 1)
         {
            _loc3_.sId = _loc3_.sptId + 1700;
         }
         return _loc3_;
      }
      
      public static function get petXmlList() : XMLList
      {
         return _xmlList;
      }
   }
}
