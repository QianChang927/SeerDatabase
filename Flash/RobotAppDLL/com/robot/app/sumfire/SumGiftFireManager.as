package com.robot.app.sumfire
{
   import com.robot.app.sumfire.model.SumGiftFireBaseInfo;
   import com.robot.app.summergift.model.SummerGiftModelShopItem;
   import com.robot.app.sumstone.model.SumGiftModelMovie;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.event.XMLEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.XMLLoader;
   import flash.display.MovieClip;
   import flash.net.SharedObject;
   import org.taomee.ds.HashMap;
   
   public class SumGiftFireManager
   {
      
      private static var _instance:com.robot.app.sumfire.SumGiftFireManager;
       
      
      private var _xmlLoader:XMLLoader;
      
      private var _callBack:Function;
      
      private var _aryBaseInfo:Array;
      
      private var _aryInjectForAwaken:Array;
      
      private var _aryInjectForRescue:Array;
      
      private var _aryStories:Array;
      
      private var _aryShopItms:Array;
      
      private var _movieMapId:int;
      
      private var _sceneMapId:int;
      
      private var _weaken:int;
      
      private var _totalAwakenInjections:int;
      
      private var _totalRescueInjections:int;
      
      private var _totalProcFight:int;
      
      private var _totalProcSun:int;
      
      private var _rewardMap:HashMap;
      
      private var _bossName:HashMap;
      
      public function SumGiftFireManager()
      {
         super();
         if(null != _instance)
         {
            throw new Error("该实例需要通过 SumGiftFireManager.getInstance() 方法调用");
         }
      }
      
      public static function getInstance() : com.robot.app.sumfire.SumGiftFireManager
      {
         if(null == _instance)
         {
            _instance = new com.robot.app.sumfire.SumGiftFireManager();
         }
         return _instance;
      }
      
      public function loadXml(param1:Function) : void
      {
         this._callBack = param1;
         this._xmlLoader = new XMLLoader();
         this._xmlLoader.addEventListener(XMLEvent.COMPLETE,this.onXMLLoadCompleted);
         this._xmlLoader.load(SumGiftFireConst.XML_PATH);
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
         var _loc8_:XML = null;
         var _loc9_:XML = null;
         this._aryBaseInfo = new Array();
         for each(_loc2_ in param1.child("baseinfo"))
         {
            this._aryBaseInfo.push(SumGiftFireBaseInfo.ReadXml(_loc2_));
         }
         this._aryInjectForAwaken = new Array();
         for each(_loc3_ in param1.child("injectforawaken"))
         {
            this._aryInjectForAwaken.push(int(_loc3_.attribute("num")));
         }
         this._aryInjectForRescue = new Array();
         for each(_loc4_ in param1.child("injectforrescue"))
         {
            this._aryInjectForRescue.push(int(_loc4_.attribute("num")));
         }
         for each(_loc5_ in param1.child("const"))
         {
            this._movieMapId = _loc5_.attribute("moviemap");
            this._sceneMapId = _loc5_.attribute("scenemap");
            this._weaken = _loc5_.attribute("weaken");
            this._totalAwakenInjections = _loc5_.attribute("totalawaken");
            this._totalRescueInjections = _loc5_.attribute("totalrescue");
            this._totalProcFight = _loc5_.attribute("totalfight");
            this._totalProcSun = _loc5_.attribute("fightsun");
         }
         this._aryStories = new Array();
         for each(_loc6_ in param1.child("movie"))
         {
            this._aryStories.push(SumGiftModelMovie.readXmlData(_loc6_));
         }
         this._aryShopItms = new Array();
         for each(_loc7_ in param1.child("shopitem"))
         {
            this._aryShopItms.push(SummerGiftModelShopItem.ReadXml(_loc7_));
         }
         this._rewardMap = new HashMap();
         for each(_loc8_ in param1.child("boss"))
         {
            this._rewardMap.add(int(_loc8_.attribute("bossid")),int(_loc8_.attribute("holywater")));
         }
         this._bossName = new HashMap();
         for each(_loc9_ in param1.child("boss"))
         {
            this._bossName.add(int(_loc8_.attribute("bossid")),String(_loc8_.attribute("name")));
         }
         if(null != this._callBack)
         {
            this._callBack.apply();
         }
      }
      
      public function getBaseInfo(param1:int) : SumGiftFireBaseInfo
      {
         var _loc2_:SumGiftFireBaseInfo = null;
         for each(_loc2_ in this._aryBaseInfo)
         {
            if(_loc2_.id == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getInjectionsForAwaken() : Array
      {
         return this._aryInjectForAwaken;
      }
      
      public function getInjectionForAwaken(param1:int) : int
      {
         return this._aryInjectForAwaken[param1];
      }
      
      public function getInjectionsForRescue() : Array
      {
         return this._aryInjectForRescue;
      }
      
      public function getInjectionForRescue(param1:int) : int
      {
         return this._aryInjectForRescue[param1];
      }
      
      public function getLocalData(param1:uint) : int
      {
         var _loc2_:SharedObject = SharedObject.getLocal(SumGiftFireConst.LOCAL_DATA_NAME);
         if(null != _loc2_)
         {
            return _loc2_.data[param1];
         }
         return 0;
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
      
      public function getMovieMapId() : int
      {
         return this._movieMapId;
      }
      
      public function getSceneMapId() : int
      {
         return this._sceneMapId;
      }
      
      public function getWeaken() : int
      {
         return this._weaken;
      }
      
      public function getShopItem(param1:int) : SummerGiftModelShopItem
      {
         var _loc2_:SummerGiftModelShopItem = null;
         for each(_loc2_ in this._aryShopItms)
         {
            if(_loc2_.itemId == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getTotalAwakenInjections() : int
      {
         return this._totalAwakenInjections;
      }
      
      public function getTotalRescueInjections() : int
      {
         return this._totalRescueInjections;
      }
      
      public function getTotalFightProc() : int
      {
         return this._totalProcFight;
      }
      
      public function getTotalSunProc() : int
      {
         return this._totalProcSun;
      }
      
      public function getRwdNumFromFightBoss(param1:int) : int
      {
         return this._rewardMap.getValue(param1);
      }
      
      public function getBossName(param1:int) : String
      {
         return this._bossName.getValue(param1);
      }
      
      private function get taskMc() : MovieClip
      {
         return MapManager.currentMap.controlLevel["animationContainer"];
      }
   }
}
