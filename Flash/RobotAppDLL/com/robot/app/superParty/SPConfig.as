package com.robot.app.superParty
{
   public class SPConfig
   {
      
      private static var xmlClass:Class = SPConfig_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var _infoA:Array;
      
      public static var allIdA:Array = [];
       
      
      public function SPConfig()
      {
         super();
      }
      
      public static function makeInfo() : void
      {
         var _loc2_:XML = null;
         var _loc3_:SuperPartyInfo = null;
         _infoA = new Array();
         allIdA = new Array();
         var _loc1_:XMLList = xml.elements("SP");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new SuperPartyInfo();
            if(_loc2_.@games == "")
            {
               _loc3_.games = new Array();
            }
            else
            {
               _loc3_.games = String(_loc2_.@games).split("|");
            }
            _loc3_.mapID = uint(_loc2_.@mapID);
            allIdA.push(_loc3_.mapID);
            if(_loc2_.@oreIDs == "")
            {
               _loc3_.oreIDs = new Array();
            }
            else
            {
               _loc3_.oreIDs = String(_loc2_.@oreIDs).split("|");
            }
            if(_loc2_.@petIDs != "")
            {
               _loc3_.petIDs = String(_loc2_.@petIDs).split("|");
            }
            else
            {
               _loc3_.petIDs = new Array();
            }
            _infoA.push(_loc3_);
         }
      }
      
      public static function get infos() : Array
      {
         if(!_infoA)
         {
            makeInfo();
         }
         return _infoA;
      }
      
      public static function get title() : String
      {
         var _loc3_:XML = null;
         var _loc1_:XMLList = xml.elements("title");
         var _loc2_:String = "";
         for each(_loc3_ in _loc1_)
         {
            _loc2_ += _loc3_.@msg;
         }
         return _loc2_;
      }
   }
}
