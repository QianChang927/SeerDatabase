package com.robot.core.config.xml
{
   import flash.utils.Dictionary;
   import org.taomee.ds.HashMap;
   
   public class NewSeerGuideXmlInfo
   {
      
      private static var xmlClass:Class = NewSeerGuideXmlInfo_xmlClass;
      
      private static var xmlClass1:Class = NewSeerGuideXmlInfo_xmlClass1;
      
      private static var _steps:Dictionary;
      
      private static var xml:XML;
      
      private static var xml1:XML;
      
      private static var _tips:HashMap;
      
      private static var _dialogs:HashMap;
      
      {
         setup();
      }
      
      public function NewSeerGuideXmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         _steps = new Dictionary();
         xml = XML(new xmlClass());
         xml1 = XML(new xmlClass1());
         parsexml();
         parsexml1();
      }
      
      private static function parsexml1() : void
      {
         var _loc2_:XMLList = null;
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc1_:XMLList = (xml1.tips[0] as XML).tip;
         _tips = new HashMap();
         for each(_loc3_ in _loc1_)
         {
            _tips.add(int(_loc3_.@id),{
               "title":_loc3_.@title,
               "tip":_loc3_.@tip
            });
         }
         _loc4_ = (xml1.dialogs[0] as XML).dialog;
         _dialogs = new HashMap();
         for each(_loc5_ in _loc4_)
         {
            _dialogs.add(int(_loc5_.@id),{
               "head":int(_loc5_.@head),
               "side":int(_loc5_.@side),
               "question":_loc5_.@question,
               "answer":_loc5_.@answer
            });
         }
      }
      
      private static function parsexml() : void
      {
         var _loc2_:Object = null;
         var _loc3_:XMLList = null;
         var _loc4_:XML = null;
         var _loc5_:Array = null;
         var _loc6_:String = null;
         var _loc7_:String = null;
         var _loc8_:String = null;
         var _loc9_:String = null;
         var _loc10_:int = 0;
         var _loc11_:XML = null;
         var _loc12_:String = null;
         var _loc1_:XMLList = xml.steps;
         _steps = new Dictionary();
         for each(_loc4_ in _loc1_)
         {
            _loc5_ = [];
            _loc3_ = _loc4_.substep;
            _loc6_ = String(_loc4_.@showbtn);
            _loc7_ = String(_loc4_.@sendover);
            _loc8_ = String(_loc4_.@tool);
            _loc9_ = String(_loc4_.@npcs);
            _loc10_ = int(_loc4_.@auto);
            for each(_loc11_ in _loc3_)
            {
               _loc2_ = new Object();
               _loc2_.step = int(_loc11_.@step);
               _loc2_.type = int(_loc11_.@type);
               _loc2_.parm = String(_loc11_.@parm);
               _loc2_.auto = int(_loc11_.@auto);
               _loc2_.skillId = int(_loc11_.@skillId);
               _loc2_.skip = String(_loc11_.@skip);
               _loc2_.donext = int(_loc11_.@donext);
               _loc2_.closeother = int(_loc11_.@closeother);
               _loc2_.clickfun = String(_loc11_.@clickfun);
               _loc2_.stopframe = String(_loc11_.@stopframe);
               _loc2_.shownoskip = int(_loc11_.@shownoskip);
               _loc2_.notdonext = int(_loc11_.@notdonext);
               _loc2_.skillId = int(_loc11_.@skillId);
               _loc2_.teach = int(_loc11_.@teach);
               _loc12_ = String(_loc11_.@pid);
               _loc2_.pid = int(_loc12_.split(",")[0]);
               _loc2_.index = int(_loc12_.split(",")[1]);
               _loc2_.playEff = String(_loc11_.@playEff);
               _loc2_.waitPanel = String(_loc11_.@waitPanel);
               _loc2_.cltMonitoringDataa = String(_loc11_.@cltMonitoringDataa);
               _loc2_.cltMonitoringDatab = String(_loc11_.@cltMonitoringDatab);
               _loc2_.cltMonitoringDatac = String(_loc11_.@cltMonitoringDatac);
               _loc5_.push(_loc2_);
            }
            _steps[int(_loc4_.@step)] = {
               "arr":_loc5_,
               "showbtn":_loc6_,
               "sendover":_loc7_,
               "tool":_loc8_,
               "npcs":_loc9_,
               "auto":_loc10_
            };
         }
      }
      
      public static function getTip(param1:int) : Object
      {
         return _tips.getValue(param1);
      }
      
      public static function getBigStep(param1:int) : Object
      {
         return _steps[param1];
      }
      
      public static function getDialog(param1:int) : Object
      {
         return _dialogs.getValue(param1);
      }
   }
}
