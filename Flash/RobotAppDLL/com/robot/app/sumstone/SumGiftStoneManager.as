package com.robot.app.sumstone
{
   import com.robot.app.sumstone.model.SumGiftModelAlarm;
   import com.robot.app.sumstone.model.SumGiftModelConst;
   import com.robot.app.sumstone.model.SumGiftModelMovie;
   import com.robot.app.sumstone.model.SumGiftModelReward;
   import com.robot.app.sumstone.model.SumGiftModelSign;
   import com.robot.app.sumstone.model.SumGiftModelStep;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.event.XMLEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.XMLLoader;
   import flash.display.MovieClip;
   import flash.net.SharedObject;
   
   public class SumGiftStoneManager
   {
      
      private static var _instance:com.robot.app.sumstone.SumGiftStoneManager;
       
      
      private var _xmlLoader:XMLLoader;
      
      private var _callBack:Function;
      
      private var _constXml:SumGiftModelConst;
      
      private var _arySteps:Array;
      
      private var _aryStories:Array;
      
      private var _arySigns:Array;
      
      private var _aryRewards:Array;
      
      private var _aryAlarms:Array;
      
      public function SumGiftStoneManager()
      {
         super();
         if(null != _instance)
         {
            throw new Error("该实例需要通过 SumGiftStoneManager.getInstance() 方法调用");
         }
      }
      
      public static function getInstance() : com.robot.app.sumstone.SumGiftStoneManager
      {
         if(null == _instance)
         {
            _instance = new com.robot.app.sumstone.SumGiftStoneManager();
         }
         return _instance;
      }
      
      public function loadXml(param1:Function) : void
      {
         this._callBack = param1;
         this._xmlLoader = new XMLLoader();
         this._xmlLoader.addEventListener(XMLEvent.COMPLETE,this.onXMLLoadCompleted);
         this._xmlLoader.load(SumGiftStoneConst.XML_URL);
      }
      
      private function onXMLLoadCompleted(param1:XMLEvent) : void
      {
         this._xmlLoader.removeEventListener(XMLEvent.COMPLETE,this.onXMLLoadCompleted);
         this._xmlLoader = null;
         this.parseXml(param1.data);
      }
      
      private function parseXml(param1:XML) : void
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc5_:XML = null;
         var _loc6_:XML = null;
         var _loc7_:XML = null;
         for each(_loc2_ in param1.child("const"))
         {
            this._constXml = SumGiftModelConst.readXmlData(_loc2_);
         }
         this._arySteps = new Array();
         for each(_loc3_ in param1.child("step"))
         {
            this._arySteps.push(SumGiftModelStep.readXmlData(_loc3_));
         }
         this._aryStories = new Array();
         for each(_loc4_ in param1.child("movie"))
         {
            this._aryStories.push(SumGiftModelMovie.readXmlData(_loc4_));
         }
         this._arySigns = new Array();
         for each(_loc5_ in param1.child("sign"))
         {
            this._arySigns.push(SumGiftModelSign.readXmlData(_loc5_));
         }
         this._aryRewards = new Array();
         for each(_loc6_ in param1.child("reward"))
         {
            this._aryRewards.push(SumGiftModelReward.readXmlData(_loc6_));
         }
         this._aryAlarms = new Array();
         for each(_loc7_ in param1.child("alarm"))
         {
            this._aryAlarms.push(SumGiftModelAlarm.readXmlData(_loc7_));
         }
         if(null != this._callBack)
         {
            this._callBack.apply();
         }
      }
      
      public function getLocalData(param1:uint) : int
      {
         var _loc2_:SharedObject = SharedObject.getLocal(SumGiftStoneConst.LOCAL_DATA_NAME);
         if(null != _loc2_)
         {
            return _loc2_.data[param1];
         }
         return 0;
      }
      
      public function getConstData() : SumGiftModelConst
      {
         return this._constXml;
      }
      
      public function getStories() : Array
      {
         var _loc2_:SumGiftModelMovie = null;
         var _loc3_:TaskMod = null;
         var _loc4_:int = 0;
         var _loc5_:String = null;
         var _loc1_:Array = new Array();
         for each(_loc2_ in this._aryStories)
         {
            _loc4_ = _loc2_.type;
            switch(_loc4_)
            {
               case TaskDiaLogManager.DIALOG:
                  _loc5_ = _loc2_.answer;
                  _loc3_ = new TaskMod(_loc4_,_loc2_.npcId,[_loc2_.dialog],_loc5_ == null || _loc5_.length <= 0 ? null : [_loc5_]);
                  break;
               case TaskDiaLogManager.MAP_MOVIE:
                  _loc3_ = new TaskMod(_loc4_,0,null,null,[this.taskMc,_loc2_.frame,_loc2_.mcName]);
                  break;
               case TaskDiaLogManager.FUL_MOVIE:
                  _loc3_ = new TaskMod(_loc4_,0,null,null,[_loc2_.swfName,true]);
                  break;
            }
            _loc1_.push(_loc3_);
         }
         return _loc1_;
      }
      
      public function getStepById(param1:int) : SumGiftModelStep
      {
         var _loc2_:SumGiftModelStep = null;
         for each(_loc2_ in this._arySteps)
         {
            if(_loc2_.stepId == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getSignInfoById(param1:int) : SumGiftModelSign
      {
         var _loc2_:SumGiftModelSign = null;
         for each(_loc2_ in this._arySigns)
         {
            if(_loc2_.signId == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getRewardById(param1:int) : SumGiftModelReward
      {
         var _loc2_:SumGiftModelReward = null;
         for each(_loc2_ in this._aryRewards)
         {
            if(_loc2_.rwdId == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getAlarmInfoById(param1:int) : SumGiftModelAlarm
      {
         var _loc2_:SumGiftModelAlarm = null;
         for each(_loc2_ in this._aryAlarms)
         {
            if(_loc2_.alarmId == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      private function get taskMc() : MovieClip
      {
         return MapManager.currentMap.controlLevel["animationContainer"];
      }
   }
}
