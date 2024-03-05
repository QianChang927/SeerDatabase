package com.robot.core.config.xmlInfo
{
   public class AdventureStoryInfo
   {
       
      
      public var npcName:String;
      
      public var ani:int;
      
      public var aniArg:String;
      
      public var dialogWord:String;
      
      public var replyWord:Array;
      
      public var param:Array;
      
      public var jumpTo:Array;
      
      public var changeBGM:String;
      
      public function AdventureStoryInfo(param1:XML)
      {
         super();
         this.npcName = param1.@npcName;
         this.ani = int(param1.@ani);
         this.aniArg = param1.@aniArg.toString();
         this.dialogWord = param1.@dialogArr;
         var _loc2_:String = param1.@param;
         if(_loc2_ != "")
         {
            this.param = _loc2_.split("|");
         }
         else
         {
            this.param = [];
         }
         _loc2_ = param1.@questionArr;
         if(_loc2_ != "")
         {
            this.replyWord = _loc2_.split("|");
         }
         else
         {
            this.replyWord = [];
         }
         _loc2_ = param1.@jumpTo;
         if(_loc2_ != "")
         {
            this.jumpTo = _loc2_.split("|");
         }
         else
         {
            this.jumpTo = [];
         }
         if(param1.@changeBGM)
         {
            this.changeBGM = param1.@changeBGM.toString();
         }
         else
         {
            this.changeBGM = "";
         }
      }
   }
}
