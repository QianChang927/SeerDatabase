package com.robot.core.npc
{
   import org.taomee.ds.HashMap;
   
   public class ParseDialogStr
   {
      
      public static const SPLIT:String = "$$";
       
      
      private var array:Array;
      
      public var emotionMap:HashMap;
      
      private var tempStr:String;
      
      private var colorMap:HashMap;
      
      public function ParseDialogStr(param1:String)
      {
         this.array = [];
         this.emotionMap = new HashMap();
         this.colorMap = new HashMap();
         super();
         this.spliceStr(param1);
      }
      
      private function spliceStr(param1:String) : void
      {
         var _loc3_:String = null;
         var _loc4_:String = null;
         var _loc5_:String = null;
         var _loc6_:String = null;
         var _loc7_:uint = 0;
         var _loc8_:String = null;
         var _loc9_:RegExp = null;
         var _loc10_:uint = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < param1.length)
         {
            _loc3_ = param1.charAt(_loc2_);
            if(_loc3_ == "#")
            {
               _loc5_ = param1.charAt(_loc2_ - 1);
               _loc6_ = param1.charAt(_loc2_ + 1);
               _loc7_ = 0;
               if(_loc5_ != "$" && uint(_loc6_).toString() == _loc6_)
               {
                  this.array.push(param1.slice(0,_loc2_));
                  _loc8_ = param1.substr(_loc2_ + 1,1 + _loc7_);
                  while(uint(_loc8_) < 100 && uint(_loc8_).toString() == _loc8_ && _loc7_ < param1.length)
                  {
                     _loc7_++;
                     _loc8_ = param1.substr(_loc2_ + 1,1 + _loc7_);
                  }
                  this.tempStr = param1.substring(_loc2_ + 1 + _loc7_,param1.length);
                  this.emotionMap.add(this.array.length,uint(param1.slice(_loc2_ + 1,_loc2_ + 1 + _loc7_)));
                  this.spliceStr(this.tempStr);
                  return;
               }
            }
            if((_loc4_ = param1.substr(_loc2_,2)) == "0x")
            {
               this.array.push(param1.slice(0,_loc2_));
               _loc9_ = /[a-z0-9A-Z]/;
               _loc10_ = 0;
               while(_loc9_.test(param1.substr(_loc2_ + 2 + _loc10_,1)) && _loc10_ < 6)
               {
                  _loc10_++;
               }
               if(_loc10_ > 0)
               {
                  this.colorMap.add(this.array.length,param1.substr(_loc2_ + 2,_loc10_));
                  this.tempStr = param1.substring(_loc2_ + 2 + _loc10_,param1.length);
                  this.spliceStr(this.tempStr);
               }
               else
               {
                  this.array.push(_loc4_);
                  this.tempStr = param1.substring(_loc2_ + 2,param1.length);
                  this.spliceStr(this.tempStr);
               }
               return;
            }
            if(_loc2_ == param1.length - 1)
            {
               this.array.push(param1.slice());
               return;
            }
            _loc2_++;
         }
      }
      
      public function getColor(param1:uint) : String
      {
         if(!this.colorMap.containsKey(param1))
         {
            return "ffffff";
         }
         return this.colorMap.getValue(param1);
      }
      
      public function get strArray() : Array
      {
         return this.array;
      }
      
      public function get str() : String
      {
         return this.array.join(SPLIT);
      }
      
      public function getEmotionNum(param1:uint) : int
      {
         if(!this.emotionMap.containsKey(param1))
         {
            return -1;
         }
         return this.emotionMap.getValue(param1);
      }
   }
}
