package com.robot.core.config.xmlInfo
{
   public class AdventureChapterInfo
   {
       
      
      public var id:int;
      
      public var title:String;
      
      public var redID:int;
      
      public var readyOff:String;
      
      public var showMonId:int;
      
      public var desString:String;
      
      public var positionInfo:String;
      
      public var lineInfo:String;
      
      public var ChapterRewardFlagID:int;
      
      public var StoryRewardFlagID:int;
      
      public var chapterRewardCnt:int = 0;
      
      public var chapterRewardArr:Array;
      
      public var storyRewardArr:Array;
      
      public var LatestStat:String;
      
      public function AdventureChapterInfo(param1:XML)
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc6_:Object = null;
         var _loc7_:Object = null;
         var _loc8_:String = null;
         super();
         this.id = int(param1.@ID);
         this.title = param1.@Title;
         this.redID = int(param1.@redID);
         this.readyOff = String(param1.@readyOff);
         this.showMonId = int(param1.@showMonId);
         this.desString = param1.@Des;
         this.positionInfo = param1.@positionInfo;
         this.lineInfo = param1.@lineInfo;
         this.ChapterRewardFlagID = int(param1.@ChapterRewardFlagID);
         this.StoryRewardFlagID = int(param1.@StoryRewardFlagID);
         this.LatestStat = param1.@statlogId.toString();
         this.chapterRewardArr = [];
         var _loc2_:XMLList = param1.elements("ChapterRewardInfo")[0].elements("PassChapterReward");
         for each(_loc3_ in _loc2_)
         {
            ++this.chapterRewardCnt;
            (_loc6_ = new Object()).needPassStoryNum = _loc3_.@NeedPassStoryNum;
            _loc6_.rewardInfo = _loc3_.@rewardinfo.split(";");
            _loc6_.isMore = int(_loc3_.@isMore);
            this.chapterRewardArr.push(_loc6_);
         }
         this.storyRewardArr = [];
         _loc4_ = param1.elements("StoryRewardInfo")[0].elements("PassStoryReward");
         for each(_loc5_ in _loc4_)
         {
            (_loc7_ = new Object()).id = int(_loc5_.@ID);
            _loc7_.preUnlockStoryID = int(_loc5_.@PreUnlockStoryID);
            _loc7_.rewardInfo = _loc5_.@rewardinfo.split(";");
            _loc8_ = _loc5_.@statlogId.toString();
            _loc7_.stat = _loc8_;
            this.storyRewardArr.push(_loc7_);
         }
      }
   }
}
