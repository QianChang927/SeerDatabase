package com.robot.app.summergift
{
   import com.robot.app.summergift.model.SummerGiftModelAction;
   import com.robot.app.summergift.model.SummerGiftModelAlarm;
   import com.robot.app.summergift.model.SummerGiftModelGame;
   import com.robot.app.summergift.model.SummerGiftModelGift;
   import com.robot.app.summergift.model.SummerGiftModelShopItem;
   import com.robot.core.event.XMLEvent;
   import com.robot.core.net.XMLLoader;
   
   public class SummerGiftManager
   {
      
      public static const XML_URL:String = "resource/xml/summer_gift.xml";
      
      private static var _instance:com.robot.app.summergift.SummerGiftManager;
       
      
      private var _xmlLoader:XMLLoader;
      
      private var _callBack:Function;
      
      private var _isXmlLoaded:Boolean;
      
      private var _aryGifts:Array;
      
      private var _aryShopItms:Array;
      
      private var _aryActions:Array;
      
      private var _aryAlarms:Array;
      
      private var _nProcess:int;
      
      private var _nCdTime:int;
      
      public function SummerGiftManager()
      {
         super();
         if(!_instance)
         {
         }
      }
      
      public static function getInstance() : com.robot.app.summergift.SummerGiftManager
      {
         if(!_instance)
         {
            _instance = new com.robot.app.summergift.SummerGiftManager();
         }
         return _instance;
      }
      
      public function set process(param1:int) : void
      {
         this._nProcess = param1;
      }
      
      public function set cdTime(param1:int) : void
      {
         this._nCdTime = param1;
      }
      
      public function loadXml(param1:Function) : void
      {
         this._callBack = param1;
         this._xmlLoader = new XMLLoader();
         this._xmlLoader.addEventListener(XMLEvent.COMPLETE,this.onXMLLoadCompleted);
         this._xmlLoader.load(XML_URL);
      }
      
      public function get isXmlLoaded() : Boolean
      {
         return this._isXmlLoaded;
      }
      
      public function getPanelName(param1:int) : String
      {
         var _loc2_:SummerGiftModelGift = this.getCurrentGiftData(param1);
         if(null != _loc2_)
         {
            return _loc2_.name;
         }
         return null;
      }
      
      public function getCurrentGiftData(param1:int) : SummerGiftModelGift
      {
         var _loc2_:SummerGiftModelGift = null;
         if(null == this._aryGifts)
         {
            return null;
         }
         for each(_loc2_ in this._aryGifts)
         {
            if(_loc2_.id == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getGames(param1:int) : Array
      {
         var _loc2_:SummerGiftModelGift = this.getCurrentGiftData(param1);
         return null == _loc2_ ? null : _loc2_.games;
      }
      
      public function getGameInfoByButton(param1:int, param2:String) : SummerGiftModelGame
      {
         var _loc4_:SummerGiftModelGame = null;
         var _loc3_:SummerGiftModelGift = this.getCurrentGiftData(param1);
         if(null == _loc3_)
         {
            return null;
         }
         for each(_loc4_ in _loc3_.games)
         {
            if(_loc4_.mcName == param2)
            {
               return _loc4_;
            }
         }
         return null;
      }
      
      public function getGameInfoById(param1:int, param2:int) : SummerGiftModelGame
      {
         var _loc4_:SummerGiftModelGame = null;
         var _loc3_:SummerGiftModelGift = this.getCurrentGiftData(param1);
         if(null == _loc3_)
         {
            return null;
         }
         for each(_loc4_ in _loc3_.games)
         {
            if(_loc4_.gameId == param2)
            {
               return _loc4_;
            }
         }
         return null;
      }
      
      public function getRewardStatus(param1:int, param2:int) : Boolean
      {
         return (param1 & 1 << param2 - 1) > 0;
      }
      
      public function isCanGetReward(param1:int) : Boolean
      {
         return this._nProcess >= param1;
      }
      
      public function getShopItemInfo(param1:int) : SummerGiftModelShopItem
      {
         var _loc2_:SummerGiftModelShopItem = null;
         if(!this._aryShopItms || this._aryShopItms.length <= 0)
         {
            return null;
         }
         for each(_loc2_ in this._aryShopItms)
         {
            if(_loc2_.itemId == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getActionById(param1:int) : SummerGiftModelAction
      {
         var _loc2_:SummerGiftModelAction = null;
         for each(_loc2_ in this._aryActions)
         {
            if(_loc2_.actId == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getArmIdByStatus(param1:int, param2:int) : int
      {
         var _loc3_:int = 8 * (param2 - 1);
         if(_loc3_ >= 32)
         {
            return -1;
         }
         return param1 >> _loc3_ & 255;
      }
      
      public function getAlarmById(param1:int) : SummerGiftModelAlarm
      {
         var _loc2_:SummerGiftModelAlarm = null;
         for each(_loc2_ in this._aryAlarms)
         {
            if(_loc2_.armId == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      private function onXMLLoadCompleted(param1:XMLEvent) : void
      {
         if(!param1 || !param1.data)
         {
            return;
         }
         this.parseXml(param1.data);
         this._isXmlLoaded = true;
         if(null != this._callBack)
         {
            this._callBack.apply(this);
            this._callBack = null;
         }
      }
      
      private function parseXml(param1:XML) : void
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc5_:XML = null;
         if(!param1)
         {
            return;
         }
         this._aryGifts = new Array();
         for each(_loc2_ in param1.child("gift"))
         {
            this._aryGifts.push(SummerGiftModelGift.ReadXml(_loc2_));
         }
         this._aryShopItms = new Array();
         for each(_loc3_ in param1.child("shopitem"))
         {
            this._aryShopItms.push(SummerGiftModelShopItem.ReadXml(_loc3_));
         }
         this._aryActions = new Array();
         for each(_loc4_ in param1.child("action"))
         {
            this._aryActions.push(SummerGiftModelAction.ReadXml(_loc4_));
         }
         this._aryAlarms = new Array();
         for each(_loc5_ in param1.child("alarm"))
         {
            this._aryAlarms.push(SummerGiftModelAlarm.ReadXml(_loc5_));
         }
      }
   }
}
