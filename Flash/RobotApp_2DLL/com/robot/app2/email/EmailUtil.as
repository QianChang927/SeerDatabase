package com.robot.app2.email
{
   public class EmailUtil
   {
      
      private static const SOURCE:String = "<font color=\'#FF0000\'><u><a href=\'event:{#event}\'>{#content}</a></u></font>";
       
      
      public function EmailUtil()
      {
         super();
      }
      
      public static function text2Html(param1:String) : String
      {
         var _loc5_:Array = null;
         var _loc6_:String = null;
         var _loc7_:String = null;
         var _loc2_:RegExp = /{\s*\d+\[*.*?\]*\s*,\s*.*?\s*}/g;
         var _loc3_:Array = param1.match(_loc2_);
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            if((_loc5_ = splitContent(String(_loc3_[_loc4_]).replace(/[{}]/g,""))).length == 2 && _loc5_[0] != "" && _loc5_[1] != "")
            {
               _loc6_ = "";
               if(_loc5_[0] == "0")
               {
                  _loc6_ = (_loc7_ = "<font color=\'#FF0000\'>{#content}</font>").replace("",_loc5_[1]);
               }
               else
               {
                  _loc6_ = SOURCE.replace("",_loc5_[0]).replace("",_loc5_[1]);
               }
               param1 = param1.replace(_loc3_[_loc4_],"");
            }
            _loc4_++;
         }
         return param1;
      }
      
      public static function GetGotoStr(param1:String) : String
      {
         var _loc5_:Array = null;
         var _loc6_:String = null;
         var _loc2_:RegExp = /{\s*\d+\[*.*?\]*\s*,\s*.*?\s*}/g;
         var _loc3_:Array = param1.match(_loc2_);
         var _loc4_:int = 0;
         if(_loc4_ >= _loc3_.length)
         {
            return "0";
         }
         if((_loc5_ = splitContent(String(_loc3_[_loc4_]).replace(/[{}]/g,""))).length == 2 && _loc5_[0] != "" && _loc5_[1] != "")
         {
            _loc6_ = "";
            if(_loc5_[0] == "0")
            {
               return "0";
            }
            return _loc5_[0];
         }
         return "0";
      }
      
      public static function fetchBraceContent(param1:String) : Array
      {
         var _loc2_:Array = [];
         var _loc3_:RegExp = /(\d+)\[(.*?)\]/g;
         var _loc4_:Object;
         if((_loc4_ = _loc3_.exec(param1)) == null)
         {
            _loc2_.push(param1);
            _loc2_.push(null);
         }
         else
         {
            _loc2_.push(_loc4_[1]);
            _loc2_.push(_loc4_[2]);
         }
         return _loc2_;
      }
      
      private static function splitContent(param1:String) : Array
      {
         var _loc2_:Array = [];
         if(param1 != "" || param1 != null)
         {
            _loc2_ = param1.split(",");
         }
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc2_[_loc3_] = String(_loc2_[_loc3_]).replace(/(^\s*)|(\s*$)/g,"");
            _loc3_++;
         }
         return _loc2_;
      }
   }
}
