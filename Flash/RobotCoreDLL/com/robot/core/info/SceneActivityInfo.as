package com.robot.core.info
{
   import com.robot.core.controller.NewSceneActivityController;
   import com.robot.core.manager.SystemTimerManager;
   
   public class SceneActivityInfo
   {
       
      
      public var id:int;
      
      public var name:String;
      
      public var title:String;
      
      public var type:int;
      
      public var start:Date;
      
      public var end:Date;
      
      public var isClassic:int;
      
      public var redirect:String;
      
      public var mapid:int;
      
      public var infotype:int;
      
      public var hot:Boolean;
      
      public var redirectValue:String;
      
      public var startstr:String;
      
      public var endstr:String;
      
      public var details:XML;
      
      public var mctype:int;
      
      public var icon:int;
      
      public var monsterid:int;
      
      public var des:String;
      
      public var prize:String;
      
      public var hotrank:int;
      
      public var setTop:int;
      
      public var picType:int;
      
      public var desc:String;
      
      public var isNew:Boolean;
      
      public function SceneActivityInfo(param1:XML)
      {
         super();
         this.id = param1.@ID;
         this.isClassic = param1.@IsClassic;
         this.name = String(param1.@Name);
         this.title = String(param1.@Title);
         this.type = param1.@Type;
         this.startstr = String(param1.@Start);
         this.endstr = String(param1.@End);
         this.start = SystemTimerManager.get0DateByStr(String(param1.@Start));
         this.end = SystemTimerManager.get0DateByStr(String(param1.@End));
         if(String(param1.@End) == "*" || String(param1.@End) == "" || String(param1.@End) == null)
         {
            this.end = null;
         }
         this.mapid = int(param1.@Map);
         this.redirect = String(param1.@Redirect);
         this.hot = int(param1.@Hot) == 1;
         this.redirectValue = String(param1.@Go);
         this.details = param1.Details[0];
         this.mctype = int(this.details.@mc);
         this.icon = int(this.details.@icon);
         this.monsterid = int(this.details.@monID);
         this.des = String(this.details.@Des);
         this.prize = String(this.details.@Prize);
         this.setTop = int(param1.@Settop);
         this.picType = int(param1.@kinds);
         this.isNew = int(param1.@isNew) == 1;
         this.desc = String(param1.describe).split("\r\n").join("\r");
      }
      
      public function get important() : Boolean
      {
         var _loc1_:Array = NewSceneActivityController.getinstance().getimprotantArr();
         return _loc1_.indexOf(this.id.toString()) != -1;
      }
      
      public function get inActivity() : Boolean
      {
         var _loc1_:Boolean = false;
         if(this.end == null)
         {
            if(SystemTimerManager.sysBJDate.time >= this.start.time)
            {
               _loc1_ = true;
            }
         }
         else if(SystemTimerManager.sysBJDate.time >= this.start.time && SystemTimerManager.sysBJDate.time < this.end.time)
         {
            _loc1_ = true;
         }
         return _loc1_;
      }
      
      public function get isLastWeek() : Boolean
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc1_:Boolean = false;
         if(this.end != null)
         {
            _loc2_ = (this.end.time - this.start.time) / (3600 * 1000 * 24);
            _loc3_ = Math.ceil((this.end.time - SystemTimerManager.sysBJDate.time) / (3600 * 1000 * 24));
            if(_loc2_ > 7 && _loc3_ <= 7)
            {
               _loc1_ = true;
            }
         }
         return _loc1_;
      }
      
      public function get onlyoneweek() : Boolean
      {
         var _loc2_:int = 0;
         var _loc1_:Boolean = false;
         if(this.end != null)
         {
            _loc2_ = (this.end.time - this.start.time) / (3600 * 1000 * 24);
            if(_loc2_ == 7)
            {
               _loc1_ = true;
            }
         }
         return _loc1_;
      }
   }
}
