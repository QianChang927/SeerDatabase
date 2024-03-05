package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class SActivityMainAndUpPanelXMLInfo
   {
      
      private static var xmlClass:Class = SActivityMainAndUpPanelXMLInfo_xmlClass;
      
      private static var UpPanel_XML:XML = XML(new xmlClass());
      
      private static var activityMap:HashMap;
      
      private static var probMap:HashMap;
      
      private static var roadMap:HashMap;
      
      {
         start();
      }
      
      public function SActivityMainAndUpPanelXMLInfo()
      {
         super();
      }
      
      private static function start() : void
      {
         var _loc1_:XML = null;
         var _loc3_:XMLList = null;
         var _loc4_:XMLList = null;
         activityMap = new HashMap();
         probMap = new HashMap();
         roadMap = new HashMap();
         var _loc2_:XMLList = UpPanel_XML.elements("Design");
         for each(_loc1_ in _loc2_)
         {
            activityMap.add(uint(_loc1_.@ID),_loc1_);
         }
         _loc3_ = UpPanel_XML.elements("Drop").elements("ProbID");
         for each(_loc1_ in _loc3_)
         {
            probMap.add(uint(_loc1_.@ID),_loc1_);
         }
         _loc4_ = UpPanel_XML.elements("MouldType").elements("Mould");
         for each(_loc1_ in _loc4_)
         {
            roadMap.add(uint(_loc1_.@ID),_loc1_);
         }
      }
      
      public static function getTaskRoadLine(param1:int, param2:int) : Array
      {
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:XMLList = null;
         var _loc8_:String = null;
         var _loc9_:XML = null;
         var _loc3_:XML = roadMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = _loc3_.elements("Routes");
            for each(_loc6_ in _loc5_)
            {
               if(_loc6_.@ID == param2)
               {
                  if((_loc7_ = _loc6_.elements("Route")) != null)
                  {
                     _loc4_ = new Array();
                     for each(_loc9_ in _loc7_)
                     {
                        _loc8_ = String(_loc9_.@Value);
                        while(_loc8_.indexOf(" ") != -1)
                        {
                           _loc8_ = _loc8_.replace(" ","_");
                        }
                        _loc4_[_loc9_.@ID] = _loc8_;
                     }
                  }
                  break;
               }
            }
         }
         return _loc4_;
      }
      
      public static function getTaskTalks(param1:int, param2:int) : Object
      {
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc3_:XML = roadMap.getValue(param1);
         var _loc4_:Object = null;
         if(_loc3_)
         {
            _loc5_ = _loc3_.Talk;
            for each(_loc6_ in _loc5_)
            {
               if(int(_loc6_.@ID) == param2)
               {
                  (_loc4_ = {})["id"] = int(_loc6_.@ID);
                  _loc4_["des"] = String(_loc6_.@Desc);
                  break;
               }
            }
         }
         return _loc4_;
      }
      
      public static function getTicketsBossPosition(param1:int, param2:int = 1) : Array
      {
         var _loc5_:Array = null;
         var _loc6_:Array = null;
         var _loc7_:Array = null;
         var _loc8_:Array = null;
         var _loc9_:Array = null;
         var _loc10_:String = null;
         var _loc11_:XML = null;
         var _loc12_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            if((_loc11_ = _loc3_.Tasks.NotPassMould[param2 - 1]).Cehua.@TaskExId == param2)
            {
               if((_loc10_ = String(_loc11_.Cehua.@BossPosX)) != null && _loc10_.length > 0)
               {
                  _loc6_ = _loc10_.split(" ");
               }
               if((_loc10_ = String(_loc11_.Cehua.@BossPosY)) != null && _loc10_.length > 0)
               {
                  _loc7_ = _loc10_.split(" ");
               }
               if((_loc10_ = String(_loc11_.Cehua.@BossScaleX)) != null && _loc10_.length > 0)
               {
                  _loc8_ = _loc10_.split(" ");
               }
               _loc8_ = _loc8_ == null ? new Array() : _loc8_;
               if((_loc10_ = String(_loc11_.Cehua.@BossScaleY)) != null && _loc10_.length > 0)
               {
                  _loc9_ = _loc10_.split(" ");
               }
               _loc9_ = _loc9_ == null ? new Array() : _loc9_;
               if(null == _loc4_)
               {
                  _loc4_ = new Array();
               }
               _loc12_ = 0;
               while(_loc12_ < _loc6_.length)
               {
                  _loc8_[_loc12_] = _loc8_[_loc12_] > 0 ? _loc8_[_loc12_] : 1;
                  _loc9_[_loc12_] = _loc9_[_loc12_] > 0 ? _loc9_[_loc12_] : 1;
                  _loc5_ = [Number(_loc6_[_loc12_]),Number(_loc7_[_loc12_]),Number(_loc8_[_loc12_]),Number(_loc9_[_loc12_])];
                  _loc4_.push(_loc5_);
                  _loc12_++;
               }
            }
         }
         return _loc4_;
      }
      
      public static function getTicketsPanelTips(param1:int, param2:int = 1) : String
      {
         var _loc5_:XML = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:String = "";
         if(_loc3_)
         {
            if((_loc5_ = _loc3_.Tasks.NotPassMould[param2 - 1]).Cehua.@TaskExId == param2)
            {
               _loc4_ = String(_loc5_.Cehua.@PanelTips);
            }
         }
         return _loc4_;
      }
      
      public static function getTicketsBossId(param1:int, param2:int = 1) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            if((_loc5_ = _loc3_.Tasks.NotPassMould[param2 - 1]).Cehua.@TaskExId == param2)
            {
               if((_loc6_ = String(_loc5_.Cehua.@BossId)) != null && _loc6_.length > 0)
               {
                  _loc4_ = _loc6_.split(" ");
               }
            }
         }
         return _loc4_;
      }
      
      public static function getTicketsBossIsBitmap(param1:int, param2:int = 1) : Array
      {
         var _loc6_:int = 0;
         var _loc7_:XML = null;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         var _loc5_:Array = [];
         if(_loc3_)
         {
            if((_loc7_ = _loc3_.Tasks.NotPassMould[param2 - 1]).Cehua.@TaskExId == param2)
            {
               if((_loc8_ = String(_loc7_.Cehua.@BossIsBitmap)) != null && _loc8_.length > 0)
               {
                  _loc4_ = _loc8_.split(" ");
                  _loc6_ = 0;
                  while(_loc6_ < _loc4_.length)
                  {
                     _loc5_[_loc6_] = int(_loc4_[_loc6_]) == 1;
                     _loc6_++;
                  }
               }
            }
            else
            {
               _loc4_ = getTicketsBossId(param1,param2);
               _loc6_ = 0;
               while(_loc6_ < _loc4_.length)
               {
                  _loc5_[_loc6_] = true;
                  _loc6_++;
               }
            }
         }
         return _loc5_;
      }
      
      public static function getTicketsDaily(param1:int, param2:int = 1) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            if((_loc5_ = _loc3_.Tasks.NotPassMould[param2 - 1]).Cehua.@TaskExId == param2)
            {
               if((_loc6_ = String(_loc5_.Houtai.@Daily)) != null && _loc6_.length > 0)
               {
                  _loc4_ = _loc6_.split(" ");
               }
            }
         }
         return _loc4_;
      }
      
      public static function getTicketsForever(param1:int, param2:int = 1) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            if((_loc5_ = _loc3_.Tasks.NotPassMould[param2 - 1]).Cehua.@TaskExId == param2)
            {
               if((_loc6_ = String(_loc5_.Houtai.@Forever)) != null && _loc6_.length > 0)
               {
                  _loc4_ = _loc6_.split(" ");
               }
            }
         }
         return _loc4_;
      }
      
      public static function getTicketsMidItemsId(param1:int, param2:int = 1) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            if((_loc5_ = _loc3_.Tasks.NotPassMould[param2 - 1]).Cehua.@TaskExId == param2)
            {
               if((_loc6_ = String(_loc5_.Cehua.@MidItems)) != null && _loc6_.length > 0)
               {
                  _loc4_ = _loc6_.split(" ");
               }
            }
         }
         return _loc4_;
      }
      
      public static function getTicketsItemsId(param1:int, param2:int = 1) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            if((_loc5_ = _loc3_.Tasks.NotPassMould[param2 - 1]).Cehua.@TaskExId == param2)
            {
               if((_loc6_ = String(_loc5_.Cehua.@Items)) != null && _loc6_.length > 0)
               {
                  _loc4_ = _loc6_.split(" ");
               }
            }
         }
         return _loc4_;
      }
      
      public static function getTicketsQDArgs(param1:int, param2:int = 1) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            if((_loc5_ = _loc3_.Tasks.NotPassMould[param2 - 1]).Cehua.@TaskExId == param2)
            {
               if((_loc6_ = String(_loc5_.Qianduan.@Args)) != null && _loc6_.length > 0)
               {
                  _loc4_ = _loc6_.split(" ");
               }
            }
         }
         return _loc4_;
      }
      
      public static function getTicketsArgs(param1:int, param2:int = 1) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            if((_loc5_ = _loc3_.Tasks.NotPassMould[param2 - 1]).Cehua.@TaskExId == param2)
            {
               if((_loc6_ = String(_loc5_.Cehua.@Args)) != null && _loc6_.length > 0)
               {
                  _loc4_ = _loc6_.split(" ");
               }
            }
         }
         return _loc4_;
      }
      
      public static function getTicketsMoudle(param1:int, param2:int = 1) : int
      {
         var _loc5_:XML = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:int = 0;
         if(_loc3_)
         {
            if((_loc5_ = _loc3_.Tasks.NotPassMould[param2 - 1]).Cehua.@TaskExId == param2)
            {
               _loc4_ = int(_loc5_.Cehua.@MouldId);
            }
         }
         return _loc4_;
      }
      
      public static function getTaskAlarmAndAlert(param1:int, param2:int) : HashMap
      {
         var _loc7_:int = 0;
         var _loc8_:XML = null;
         var _loc9_:int = 0;
         var _loc10_:String = null;
         var _loc11_:Array = null;
         var _loc12_:Array = null;
         var _loc13_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:HashMap = new HashMap();
         var _loc5_:HashMap = new HashMap();
         var _loc6_:HashMap = new HashMap();
         if(_loc3_)
         {
            _loc7_ = int(_loc3_.Tasks.@TaskCount);
            _loc9_ = 0;
            while(_loc9_ < _loc7_)
            {
               if((_loc8_ = _loc3_.Tasks.Mould[_loc9_]).Cehua.@TaskId == param2)
               {
                  _loc11_ = (_loc10_ = String(_loc8_.Qianduan.@AlarmAndAlert)).split("|");
                  _loc13_ = 0;
                  while(_loc13_ < _loc11_.length)
                  {
                     _loc12_ = _loc11_[_loc13_].split("_");
                     switch(int(_loc12_[0]))
                     {
                        case 1:
                           _loc5_.add(int(_loc12_[1]),_loc12_[2]);
                           break;
                        case 2:
                           _loc6_.add(int(_loc12_[1]),_loc12_[2]);
                           break;
                     }
                     _loc13_++;
                  }
                  break;
               }
               _loc9_++;
            }
         }
         _loc4_.add("alarm",_loc5_);
         _loc4_.add("alert",_loc6_);
         return _loc4_;
      }
      
      public static function getTaskIconPos(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:Array = null;
         var _loc9_:String = null;
         var _loc10_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = [];
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  _loc8_ = (_loc9_ = String(_loc6_.Cehua.@RuleTips)).split("|");
                  _loc10_ = 0;
                  while(_loc10_ < _loc8_.length)
                  {
                     _loc4_.push(_loc8_[_loc10_].split("_"));
                     _loc10_++;
                  }
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskRuleTips(param1:int, param2:int) : String
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:String = "";
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  _loc4_ = String(_loc6_.Cehua.@RuleTips);
                  while(_loc4_.indexOf("\\n") != -1)
                  {
                     _loc4_ = _loc4_.replace("\\n","\n");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskPanelTips(param1:int, param2:int) : String
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:String = "";
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  _loc4_ = String(_loc6_.Cehua.@PanelTips);
                  while(_loc4_.indexOf("\\n") != -1)
                  {
                     _loc4_ = _loc4_.replace("\\n","\n");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getChallengeTips(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Cehua.@ChallengeTips)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getDropPanelTips(param1:int, param2:int) : String
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:String = "";
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  _loc4_ = String(_loc6_.Qianduan.@DropPanelTips);
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getDropBossId(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Qianduan.@DropBossId)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getDropDaily(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Qianduan.@DropDaily)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getDropForever(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Qianduan.@DropForever)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getDropMidItemsId(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Qianduan.@DropMidItems)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskBossId(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Cehua.@BossId)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getModules(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Cehua.@url)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskPlayerInfo(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Houtai.@PlayerInfo)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskDaily(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Houtai.@Daily)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskForever(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Houtai.@Forever)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskItemsId(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Cehua.@Items)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskMidItems(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Cehua.@MidItems)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskQDArgs(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Qianduan.@Args)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskArgs(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Cehua.@Args)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskBossPath(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc9_:Array = null;
         var _loc10_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Cehua.@BossPath)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         if(_loc4_ == null)
         {
            _loc4_ = new Array();
            _loc9_ = getTaskBossId(param1,param2);
            _loc10_ = 0;
            while(_loc10_ < _loc9_.length)
            {
               _loc4_[_loc10_] = 0;
               _loc10_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskBossIsBitmap(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc9_:Array = null;
         var _loc10_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Cehua.@BossIsBitmap)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         if(_loc4_ == null)
         {
            _loc4_ = new Array();
            _loc9_ = getTaskBossId(param1,param2);
            _loc10_ = 0;
            while(_loc10_ < _loc9_.length)
            {
               _loc4_[_loc10_] = 0;
               _loc10_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskBossIsFlip(param1:int, param2:int) : Array
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc9_:Array = null;
         var _loc10_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
               {
                  if((_loc8_ = String(_loc6_.Cehua.@BossFlip)) != null && _loc8_.length > 0)
                  {
                     _loc4_ = _loc8_.split(" ");
                  }
                  break;
               }
               _loc7_++;
            }
         }
         if(_loc4_ == null)
         {
            _loc4_ = new Array();
            _loc9_ = getTaskBossId(param1,param2);
            _loc10_ = 0;
            while(_loc10_ < _loc9_.length)
            {
               _loc4_[_loc10_] = 0;
               _loc10_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskBossPosition(param1:int, param2:int) : Array
      {
         var _loc5_:Array = null;
         var _loc10_:String = null;
         var _loc11_:int = 0;
         var _loc12_:XML = null;
         var _loc13_:int = 0;
         var _loc14_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:Array = null;
         var _loc6_:Array = [];
         var _loc7_:Array = [];
         var _loc8_:Array = [];
         var _loc9_:Array = [];
         if(_loc3_)
         {
            _loc11_ = int(_loc3_.Tasks.@TaskCount);
            _loc13_ = 0;
            while(_loc13_ < _loc11_)
            {
               if((_loc12_ = _loc3_.Tasks.Mould[_loc13_]).Cehua.@TaskId == param2)
               {
                  if((_loc10_ = String(_loc12_.Qianduan.@BossPosX)) != null && _loc10_.length > 0)
                  {
                     _loc6_ = _loc10_.split(" ");
                  }
                  if((_loc10_ = String(_loc12_.Qianduan.@BossPosY)) != null && _loc10_.length > 0)
                  {
                     _loc7_ = _loc10_.split(" ");
                  }
                  if((_loc10_ = String(_loc12_.Qianduan.@BossScaleX)) != null && _loc10_.length > 0)
                  {
                     _loc8_ = _loc10_.split(" ");
                  }
                  _loc8_ = _loc8_ == null ? new Array() : _loc8_;
                  if((_loc10_ = String(_loc12_.Qianduan.@BossScaleY)) != null && _loc10_.length > 0)
                  {
                     _loc9_ = _loc10_.split(" ");
                  }
                  _loc9_ = _loc9_ == null ? new Array() : _loc9_;
                  if(null == _loc4_)
                  {
                     _loc4_ = new Array();
                  }
                  _loc14_ = 0;
                  while(_loc14_ < _loc6_.length)
                  {
                     _loc8_[_loc14_] = _loc8_[_loc14_] > 0 ? _loc8_[_loc14_] : 1;
                     _loc9_[_loc14_] = _loc9_[_loc14_] > 0 ? _loc9_[_loc14_] : 1;
                     _loc5_ = [Number(_loc6_[_loc14_]),Number(_loc7_[_loc14_]),Number(_loc8_[_loc14_]),Number(_loc9_[_loc14_])];
                     _loc4_.push(_loc5_);
                     _loc14_++;
                  }
                  break;
               }
               _loc13_++;
            }
         }
         return _loc4_;
      }
      
      public static function getTaskResType(param1:int, param2:int) : int
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:int = 0;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            if(param2 <= _loc5_)
            {
               _loc7_ = 0;
               while(_loc7_ < _loc5_)
               {
                  _loc6_ = _loc3_.Tasks.Mould[_loc7_];
                  if(int(_loc6_.Cehua.@TaskId) == param2)
                  {
                     _loc4_ = int(_loc6_.Cehua.@ResType);
                     break;
                  }
                  _loc7_++;
               }
            }
         }
         return _loc4_;
      }
      
      public static function getUpPanelInfo(param1:int) : Object
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:Object = new Object();
         _loc3_.loadType = _loc2_.Power.Cehua.@LoadType == null ? 0 : int(_loc2_.Power.Cehua.@LoadType);
         _loc3_.vipTime = int(_loc2_.Power.Cehua.@VipTimes);
         _loc3_.normalTime = int(_loc2_.Power.Cehua.@NotVipTimes);
         _loc3_.style = _loc2_.Power.Cehua.@PowerID != null ? int(_loc2_.Power.Cehua.@PowerID) : 0;
         _loc3_.petId = int(_loc2_.Power.Cehua.@MonsterID);
         _loc3_.markId = int(_loc2_.Power.Cehua.@MintmarkID);
         _loc3_.effectId = int(_loc2_.Power.Cehua.@NewSeIconId);
         if(0 == _loc3_.style)
         {
            _loc3_.itemsId = _loc2_.Power.Cehua.@ItemID == null ? [] : [int(_loc2_.Power.Cehua.@ItemID)];
            _loc3_.midItemsId = _loc2_.Power.Cehua.@MidItemID == null ? [] : [int(_loc2_.Power.Cehua.@MidItemID)];
            _loc3_.daily = _loc2_.Power.Houtai.@TimesValue == null ? [] : [int(_loc2_.Power.Houtai.@TimesValue)];
         }
         else
         {
            _loc3_.daily = _loc2_.Power.Houtai.@Daily != null ? String(_loc2_.Power.Houtai.@Daily).split(" ") : [];
            _loc3_.itemsId = _loc2_.Power.Cehua.@Items != null ? String(_loc2_.Power.Cehua.@Items).split(" ") : [];
            _loc3_.midItemsId = _loc2_.Power.Cehua.@MidItems != null ? String(_loc2_.Power.Cehua.@MidItems).split(" ") : [];
         }
         _loc3_.count = _loc2_.Power.Cehua.@ItemCount != null ? String(_loc2_.Power.Cehua.@ItemCount).split(" ") : [];
         _loc3_.args = _loc2_.Power.Cehua.@Args != null ? String(_loc2_.Power.Cehua.@Args).split(" ") : [];
         _loc3_.global = _loc2_.Power.Houtai.@Global != null ? String(_loc2_.Power.Houtai.@Global).split(" ") : [];
         _loc3_.palyerinfo = _loc2_.Power.Houtai.@PlayerInfo != null ? String(_loc2_.Power.Houtai.@PlayerInfo).split(" ") : [];
         _loc3_.tips = _loc2_.Power.Cehua.@PanelTips;
         _loc3_.forever = [int(_loc2_.Power.Houtai.@GainValue)];
         if(_loc2_.Power.Houtai.@Forever != null)
         {
            _loc3_.forever = _loc3_.forever.concat(String(_loc2_.Power.Houtai.@Forever).split(" "));
         }
         _loc3_.bitbuf = _loc2_.Power.Houtai.@BitBuf != null ? String(_loc2_.Houtai.@BitBuf).split(" ") : [];
         if(_loc2_.Power.Houtai.@Daily_BitBuf != null)
         {
            _loc3_.bitbuf = _loc3_.bitbuf.concat(String(_loc2_.Power.Houtai.@Daily_BitBuf).split(" "));
         }
         _loc3_.cardStyle = _loc2_.Power.Cehua.@CardStyle != null ? String(_loc2_.Power.Cehua.@CardStyle).split(" ") : [1,1,1,1,1];
         return _loc3_;
      }
      
      public static function getUpPanelStyle(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         return _loc2_.Power.Cehua.@PowerID != null ? int(_loc2_.Power.Cehua.@PowerID) : 0;
      }
      
      public static function getProbNum(param1:int) : Array
      {
         var _loc4_:int = 0;
         var _loc5_:XML = null;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:Array = null;
         if(_loc2_)
         {
            _loc4_ = int(_loc2_.Power.Cehua.@ProbID);
            if(_loc5_ = probMap.getValue(_loc4_))
            {
               _loc3_ = String(_loc5_.@ProbNum).split(" ");
            }
         }
         return _loc3_;
      }
      
      public static function getTimesValue(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Power.Houtai.@TimesValue);
         }
         return _loc3_;
      }
      
      public static function getGainValue(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Power.Houtai.@GainValue);
         }
         return _loc3_;
      }
      
      public static function getVipTimes(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Power.Cehua.@VipTimes);
         }
         return _loc3_;
      }
      
      public static function getNormalTimes(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Power.Cehua.@NotVipTimes);
         }
         return _loc3_;
      }
      
      public static function getUpItemId(param1:int) : int
      {
         var _loc4_:int = 0;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            if((_loc4_ = int(_loc2_.Power.Cehua.@ItemID)) > 0)
            {
               _loc3_ = _loc4_;
            }
         }
         return _loc3_;
      }
      
      public static function getItemCount(param1:int) : Array
      {
         var _loc4_:String = null;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:Array = null;
         if(_loc2_)
         {
            if((_loc4_ = String(_loc2_.Power.Cehua.@ItemCount)).length > 0)
            {
               _loc3_ = _loc4_.split(" ");
            }
         }
         return _loc3_;
      }
      
      public static function getUpItemMidId(param1:int) : int
      {
         var _loc4_:int = 0;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            if((_loc4_ = int(_loc2_.Power.Cehua.@MidItemID)) > 0)
            {
               _loc3_ = _loc4_;
            }
         }
         return _loc3_;
      }
      
      public static function getUpLeftMidId(param1:int) : int
      {
         var _loc4_:int = 0;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            if((_loc4_ = int(_loc2_.Power.Cehua.@TimesItemID)) > 0)
            {
               _loc3_ = _loc4_;
            }
         }
         return _loc3_;
      }
      
      public static function getSkillID(param1:int) : int
      {
         var _loc2_:int = -1;
         var _loc3_:int = getPetID(param1);
         if(SkillXMLInfo.hideMovesMap[_loc3_] != null)
         {
            _loc2_ = SkillXMLInfo.getHideSkillId(_loc3_);
         }
         return _loc2_;
      }
      
      public static function getMintmarkID(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Power.Cehua.@MintmarkID);
         }
         return _loc3_;
      }
      
      public static function getNewSeID(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Power.Cehua.@NewSeIconId);
         }
         return _loc3_;
      }
      
      public static function getUpPanelLoadType(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         if(_loc3_ != null && _loc3_.Power.Cehua.@LoadType != null)
         {
            _loc2_ = int(_loc3_.Power.Cehua.@LoadType);
         }
         return _loc2_;
      }
      
      public static function getUpPetPosition(param1:int) : Array
      {
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc7_:Number = NaN;
         var _loc8_:XMLList = null;
         var _loc9_:XMLList = null;
         var _loc10_:XMLList = null;
         var _loc11_:XMLList = null;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:Array = null;
         if(_loc2_)
         {
            _loc8_ = _loc2_.Power.Cehua.@UpPosX;
            _loc9_ = _loc2_.Power.Cehua.@UpPosY;
            _loc10_ = _loc2_.Power.Cehua.@UpScaleX;
            _loc11_ = _loc2_.Power.Cehua.@UpScaleY;
            _loc4_ = _loc8_ != null ? Number(_loc8_) : 0;
            _loc5_ = _loc9_ != null ? Number(_loc9_) : 0;
            _loc6_ = _loc10_ != null ? Number(_loc10_) : 1;
            _loc7_ = _loc11_ != null ? Number(_loc11_) : 1;
            _loc3_ = [_loc4_,_loc5_,_loc6_,_loc7_];
         }
         return _loc3_;
      }
      
      public static function getMouldId(param1:int, param2:int) : int
      {
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc3_:XML = activityMap.getValue(param1);
         var _loc4_:int = 0;
         if(_loc3_)
         {
            _loc5_ = int(_loc3_.Tasks.@TaskCount);
            if(param2 <= _loc5_)
            {
               _loc7_ = 0;
               while(_loc7_ < _loc5_)
               {
                  if((_loc6_ = _loc3_.Tasks.Mould[_loc7_]).Cehua.@TaskId == param2)
                  {
                     _loc4_ = int(_loc6_.Cehua.@MouldId);
                     break;
                  }
                  _loc7_++;
               }
            }
         }
         return _loc4_;
      }
      
      public static function getMainTips(param1:int) : Array
      {
         var _loc4_:String = null;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:Array = null;
         if(_loc2_)
         {
            if((_loc4_ = String(_loc2_.Cover.Cehua.@PanelTips)) != null && _loc4_.length > 0)
            {
               _loc3_ = _loc4_.split(" ");
            }
         }
         return _loc3_;
      }
      
      public static function getMainItemMidId(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Cover.Cehua.@MainMidItemID);
         }
         return _loc3_;
      }
      
      public static function getMainItemId(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Cover.Cehua.@MainItemId);
         }
         return _loc3_;
      }
      
      public static function getTaskCount(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Tasks.@TaskCount);
         }
         return _loc3_;
      }
      
      public static function getTaskNames(param1:int) : Array
      {
         var _loc4_:String = null;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:Array = null;
         if(_loc2_)
         {
            if((_loc4_ = String(_loc2_.Cover.Cehua.@TaskNames)) != null && _loc4_.length > 0)
            {
               _loc3_ = _loc4_.split(" ");
            }
         }
         return _loc3_;
      }
      
      public static function getMonCount(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Tasks.@MonCount);
         }
         return _loc3_;
      }
      
      public static function getCoverArgs(param1:int) : Array
      {
         var _loc4_:String = null;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:Array = null;
         if(_loc2_)
         {
            _loc3_ = (_loc4_ = String(_loc2_.Cover.Cehua.@Args)).split(" ");
         }
         return _loc3_;
      }
      
      public static function getOriginReceiveStyle(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 1;
         if(_loc2_)
         {
            _loc3_ = _loc2_.Cover.Cehua.@OriginReceiveStyle == null ? 1 : int(_loc2_.Cover.Cehua.@OriginReceiveStyle);
         }
         return _loc3_;
      }
      
      public static function getOriginPanelName(param1:int) : String
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:String = "";
         if(_loc2_)
         {
            _loc3_ = String(_loc2_.Cover.Cehua.@OriginPanelName);
         }
         return _loc3_;
      }
      
      public static function getSkillPanelName(param1:int) : String
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:String = "";
         if(_loc2_)
         {
            _loc3_ = String(_loc2_.Cover.Cehua.@SkillPanelName);
         }
         return _loc3_;
      }
      
      public static function getOriginPetId(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Cover.Cehua.@OriginMonsterID);
         }
         return _loc3_;
      }
      
      public static function getCoverStyle(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Tasks.@Style);
         }
         return _loc3_;
      }
      
      public static function getPetID(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Power.Cehua.@MonsterID);
         }
         return _loc3_;
      }
      
      public static function getMainPanelStyle(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Cover.Cehua.@PanelStyle);
         }
         return _loc3_;
      }
      
      public static function getMainTitlePosition(param1:int) : Array
      {
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc7_:Number = NaN;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:Array = null;
         var _loc8_:Boolean = _loc2_.Cover.Cehua.@ChangeTitlePos == null ? false : int(_loc2_.Cover.Cehua.@ChangeTitlePos) == 1;
         if(_loc2_ != null && _loc8_)
         {
            _loc4_ = _loc2_.Cover.Cehua.@MainTitlePosX == null ? 0 : Number(_loc2_.Cover.Cehua.@MainTitlePosX);
            _loc5_ = _loc2_.Cover.Cehua.@MainTitlePosY == null ? 0 : Number(_loc2_.Cover.Cehua.@MainTitlePosY);
            _loc6_ = _loc2_.Cover.Cehua.@MainTitleScaleX == null ? 0 : Number(_loc2_.Cover.Cehua.@MainTitleScaleX);
            _loc7_ = _loc2_.Cover.Cehua.@MainTitleScaleY == null ? 0 : Number(_loc2_.Cover.Cehua.@MainTitleScaleY);
            _loc3_ = [_loc4_,_loc5_,_loc6_,_loc7_];
         }
         return _loc3_;
      }
      
      public static function getMainPetPosition(param1:int) : Array
      {
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc7_:Number = NaN;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:Array = null;
         if(_loc2_)
         {
            _loc4_ = Number(_loc2_.Cover.Cehua.@MainPosX);
            _loc5_ = Number(_loc2_.Cover.Cehua.@MainPosY);
            _loc6_ = (_loc6_ = Number(_loc2_.Cover.Cehua.@MainScaleX)) > 0 ? _loc6_ : 1;
            _loc7_ = (_loc7_ = Number(_loc2_.Cover.Cehua.@MainScaleY)) > 0 ? _loc7_ : 1;
            _loc3_ = [_loc4_,_loc5_,_loc6_,_loc7_];
         }
         return _loc3_;
      }
      
      public static function getPetInfoPosition(param1:int) : Array
      {
         var _loc4_:Number = NaN;
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc7_:Number = NaN;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:Array = null;
         if(_loc2_)
         {
            _loc4_ = Number(_loc2_.Cover.Cehua.@PetInfoPosX);
            _loc5_ = Number(_loc2_.Cover.Cehua.@PetInfoPosY);
            _loc6_ = (_loc6_ = Number(_loc2_.Cover.Cehua.@PetInfoScaleX)) > 0 ? _loc6_ : 1;
            _loc7_ = (_loc7_ = Number(_loc2_.Cover.Cehua.@PetInfoScaleY)) > 0 ? _loc7_ : 1;
            _loc3_ = [_loc4_,_loc5_,_loc6_,_loc7_];
         }
         return _loc3_;
      }
      
      public static function getSuperEvolveID(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Cover.Houtai.@SuperEvolveID);
         }
         return _loc3_;
      }
      
      public static function getTaskValue(param1:int) : int
      {
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            _loc3_ = int(_loc2_.Tasks.@TaskValue);
         }
         return _loc3_;
      }
      
      public static function getZhizunMidId(param1:int) : int
      {
         var _loc4_:int = 0;
         var _loc2_:XML = activityMap.getValue(param1);
         var _loc3_:int = 0;
         if(_loc2_)
         {
            if((_loc4_ = int(_loc2_.Cover.Cehua.@ZhizunItemID)) > 0)
            {
               _loc3_ = _loc4_;
            }
         }
         return _loc3_;
      }
   }
}
