package com.robot.core.controller
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.SceneActivityInfo;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.utils.Dictionary;
   
   public class NewSceneActivityController
   {
      
      private static var _instance:com.robot.core.controller.NewSceneActivityController;
       
      
      private var activitys:Dictionary;
      
      private var important:String;
      
      private var important1:String;
      
      private var spliteTime:Date;
      
      public function NewSceneActivityController()
      {
         super();
         this.setup();
      }
      
      public static function getinstance() : com.robot.core.controller.NewSceneActivityController
      {
         _instance = _instance || new com.robot.core.controller.NewSceneActivityController();
         return _instance;
      }
      
      private function setup() : void
      {
         var xml:XML = null;
         var url:String = "xml/activities.xml";
         PreloadZipXMLController.getXML("activities" + SystemTimerManager.splitVersionStr(true) + ".xml",function(param1:*):void
         {
            xml = new XML(param1);
            parsexml(xml);
         });
      }
      
      private function parsexml(param1:XML) : void
      {
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc5_:String = null;
         var _loc6_:XML = null;
         var _loc7_:SceneActivityInfo = null;
         var _loc8_:SceneActivityInfo = null;
         var _loc9_:SceneActivityInfo = null;
         this.activitys = new Dictionary();
         var _loc2_:XMLList = param1.Online[0].Activity;
         for each(_loc3_ in _loc2_)
         {
            (_loc7_ = new SceneActivityInfo(_loc3_)).infotype = 0;
            this.activitys[_loc7_.id] = _loc7_;
         }
         _loc2_ = param1["Offline"][0].Activity;
         for each(_loc4_ in _loc2_)
         {
            (_loc8_ = new SceneActivityInfo(_loc4_)).infotype = 1;
            this.activitys[_loc8_.id] = _loc8_;
         }
         _loc2_ = param1["New"][0].Activity;
         this.important = String(param1["New"][0].@Important);
         this.important1 = String(param1["New"][0].@Important1);
         if((_loc5_ = String(param1["New"][0].@Time)) != "" && _loc5_ != "undefined" && _loc5_ != null)
         {
            this.spliteTime = SystemTimerManager.get0DateByStr(_loc5_);
         }
         for each(_loc6_ in _loc2_)
         {
            (_loc9_ = new SceneActivityInfo(_loc6_)).infotype = 2;
            this.activitys[_loc9_.id] = _loc9_;
         }
      }
      
      public function getactivitysByType(param1:int = -1, param2:int = -1, param3:int = -1, param4:int = -1, param5:Boolean = true) : Array
      {
         var _loc7_:SceneActivityInfo = null;
         var _loc8_:Boolean = false;
         var _loc6_:Array = [];
         for each(_loc7_ in this.activitys)
         {
            if((_loc7_.type == param1 || param1 == -1) && (_loc7_.infotype == param2 || param2 == -1) && (_loc7_.isClassic == param3 || param3 == -1) && (_loc7_.mapid == param4 || param4 == -1))
            {
               _loc8_ = false;
               if(_loc7_.end == null)
               {
                  if(SystemTimerManager.sysBJDate.time >= _loc7_.start.time)
                  {
                     _loc8_ = true;
                  }
               }
               else if(SystemTimerManager.sysBJDate.time >= _loc7_.start.time && SystemTimerManager.sysBJDate.time < _loc7_.end.time)
               {
                  _loc8_ = true;
               }
               if(param5 && _loc8_ || !param5)
               {
                  _loc6_.push(_loc7_);
               }
            }
         }
         return _loc6_;
      }
      
      public function getactivityById(param1:int) : SceneActivityInfo
      {
         return this.activitys[param1];
      }
      
      public function getactivityBystarttime(param1:String) : Array
      {
         var _loc3_:SceneActivityInfo = null;
         var _loc2_:Array = [];
         for each(_loc3_ in this.activitys)
         {
            if(_loc3_.startstr == param1)
            {
               _loc2_.push(_loc3_);
            }
         }
         return _loc2_;
      }
      
      public function getimprotantArr() : Array
      {
         var _loc1_:Array = [];
         if(this.spliteTime != null)
         {
            if(SystemTimerManager.sysBJDate.time >= this.spliteTime.time)
            {
               if(this.important1 != null)
               {
                  _loc1_ = this.important1.split(",");
               }
            }
            else if(this.important != null)
            {
               _loc1_ = this.important.split(",");
            }
         }
         else if(this.important != null)
         {
            _loc1_ = this.important.split(",");
         }
         return _loc1_;
      }
      
      public function getactivitysBystr(param1:String) : Array
      {
         var _loc3_:SceneActivityInfo = null;
         var _loc4_:Boolean = false;
         var _loc2_:Array = [];
         for each(_loc3_ in this.activitys)
         {
            if((_loc3_.des.indexOf(param1) != -1 || _loc3_.title.indexOf(param1) != -1 || _loc3_.prize.indexOf(param1) != -1 || _loc3_.name.indexOf(param1) != -1) && _loc3_.infotype != 1)
            {
               _loc4_ = false;
               if(_loc3_.end == null)
               {
                  if(SystemTimerManager.sysBJDate.time >= _loc3_.start.time)
                  {
                     _loc4_ = true;
                  }
               }
               else if(SystemTimerManager.sysBJDate.time >= _loc3_.start.time && SystemTimerManager.sysBJDate.time < _loc3_.end.time)
               {
                  _loc4_ = true;
               }
               if(_loc4_)
               {
                  _loc2_.push(_loc3_);
               }
            }
         }
         return _loc2_;
      }
      
      public function getactivityInTimeRange(param1:int, param2:int) : Array
      {
         var _loc4_:SceneActivityInfo = null;
         var _loc5_:Boolean = false;
         var _loc6_:Date = null;
         var _loc7_:int = 0;
         var _loc8_:Boolean = false;
         var _loc3_:Array = [];
         for each(_loc4_ in this.activitys)
         {
            if(_loc4_.infotype != 1)
            {
               _loc5_ = false;
               _loc6_ = ClientConfig.versonTimeDate;
               _loc7_ = Math.ceil((_loc6_.time - _loc4_.start.time) / (1000 * 3600 * 24));
               _loc8_ = _loc4_.end == null ? SystemTimerManager.sysBJDate.time >= _loc4_.start.time : SystemTimerManager.sysBJDate.time >= _loc4_.start.time && SystemTimerManager.sysBJDate.time < _loc4_.end.time;
               if(_loc7_ >= param1 && _loc7_ <= param2 && _loc8_)
               {
                  _loc5_ = true;
               }
               if(_loc5_)
               {
                  _loc3_.push(_loc4_);
               }
            }
         }
         return _loc3_;
      }
   }
}
