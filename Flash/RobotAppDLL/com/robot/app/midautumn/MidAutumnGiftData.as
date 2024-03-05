package com.robot.app.midautumn
{
   import com.robot.core.manager.ItemManager;
   
   public class MidAutumnGiftData
   {
      
      private static var _instance:com.robot.app.midautumn.MidAutumnGiftData;
      
      public static const INITIALIZED_STEP_NULL:int = 0;
      
      public static const INITIALIZED_STEP_XML:int = 1;
      
      public static const INITIALIZED_STEP_DATA:int = 2;
       
      
      public var initialized:int;
      
      public var onlineTime:int;
      
      public var playCookieCD:int;
      
      public var leftRewardTimes:int;
      
      public var haveGottenRewardTimes:int;
      
      public var haveGottenBigReward:Boolean;
      
      public var havePlayedTimes:int;
      
      public var leftTimesOfGetMaterial:int;
      
      public var haveGottenCookie:Boolean;
      
      private var _curGetReward:int;
      
      private var itmNumCrust:int;
      
      private var itmNumSweetened:int;
      
      private var itmNumMeatFloss:int;
      
      private var itmNumCoconut:int;
      
      private var itmNumFiveKernel:int;
      
      private var _logs:Array;
      
      public function MidAutumnGiftData()
      {
         super();
         if(_instance)
         {
            throw new Error("请使用 MidAutumnGiftData.getInstance() 调用该实例！");
         }
      }
      
      public static function getInstance() : com.robot.app.midautumn.MidAutumnGiftData
      {
         if(!_instance)
         {
            _instance = new com.robot.app.midautumn.MidAutumnGiftData();
         }
         return _instance;
      }
      
      public static function GetMultiIDs() : Array
      {
         return [MidAutumnGiftConst.FOREVER_PLAY_COOKIE_CD,MidAutumnGiftConst.FOREVER_LEFT_TIMES_OF_REWARD,MidAutumnGiftConst.DAILY_GET_REWARD_TIMES,MidAutumnGiftConst.DAILY_GET_MATERIAL_TIMES,MidAutumnGiftConst.DAILY_HAVE_PLAYED_COOKIES,MidAutumnGiftConst.DAILY_HAVE_GOTTEN_BIG_REWARD,MidAutumnGiftConst.FOREVER_HAVE_GOTTEN_COOKIE];
      }
      
      public function initData(param1:Array) : void
      {
         this.playCookieCD = param1[0];
         this.leftRewardTimes = param1[1];
         this.haveGottenRewardTimes = param1[2];
         this.leftTimesOfGetMaterial = param1[3];
         this.havePlayedTimes = param1[4];
         this.haveGottenBigReward = Boolean(param1[5]);
         this.haveGottenCookie = Boolean(param1[6]);
      }
      
      public function get curGetReward() : int
      {
         return this._curGetReward & 255;
      }
      
      public function get curGetMaterial() : int
      {
         return this._curGetReward >> 16;
      }
      
      public function set curGetReward(param1:int) : void
      {
         if(param1 > 65535)
         {
            this._curGetReward = this._curGetReward & 255 | param1;
         }
         else if(param1 <= 65535 && param1 > 255)
         {
            this._curGetReward = this._curGetReward & 16711935 | param1;
         }
         else if(param1 <= 255)
         {
            this._curGetReward = this._curGetReward & 16776960 | param1;
         }
      }
      
      public function set logs(param1:Array) : void
      {
         this._logs = param1;
      }
      
      public function get logs() : Array
      {
         return null == this._logs ? [] : this._logs;
      }
      
      public function initItemNum() : void
      {
         this.itmNumCrust = ItemManager.getNumByID(MidAutumnGiftConst.ITEM_ID_MATERIAL_CRUST);
         this.itmNumSweetened = ItemManager.getNumByID(MidAutumnGiftConst.ITEM_ID_MATERIAL_SWEETENED);
         this.itmNumMeatFloss = ItemManager.getNumByID(MidAutumnGiftConst.ITEM_ID_MATERIAL_MEAT_FLOSS);
         this.itmNumCoconut = ItemManager.getNumByID(MidAutumnGiftConst.ITEM_ID_MATERIAL_COCONUT);
         this.itmNumFiveKernel = ItemManager.getNumByID(MidAutumnGiftConst.ITEM_ID_MATERIAL_FIVE_KERNEL);
      }
      
      public function updateItmNum(param1:int, param2:Boolean) : void
      {
         var _loc3_:int = param2 ? 1 : -1;
         switch(param1)
         {
            case MidAutumnGiftConst.ITEM_ID_MATERIAL_CRUST:
               this.itmNumCrust += _loc3_;
               break;
            case MidAutumnGiftConst.ITEM_ID_MATERIAL_SWEETENED:
               this.itmNumSweetened += _loc3_;
               break;
            case MidAutumnGiftConst.ITEM_ID_MATERIAL_MEAT_FLOSS:
               this.itmNumMeatFloss += _loc3_;
               break;
            case MidAutumnGiftConst.ITEM_ID_MATERIAL_COCONUT:
               this.itmNumCoconut += _loc3_;
               break;
            case MidAutumnGiftConst.ITEM_ID_MATERIAL_FIVE_KERNEL:
               this.itmNumFiveKernel += _loc3_;
         }
      }
      
      public function getItmNum(param1:int) : int
      {
         switch(param1)
         {
            case MidAutumnGiftConst.ITEM_ID_MATERIAL_CRUST:
               return this.itmNumCrust;
            case MidAutumnGiftConst.ITEM_ID_MATERIAL_SWEETENED:
               return this.itmNumSweetened;
            case MidAutumnGiftConst.ITEM_ID_MATERIAL_MEAT_FLOSS:
               return this.itmNumMeatFloss;
            case MidAutumnGiftConst.ITEM_ID_MATERIAL_COCONUT:
               return this.itmNumCoconut;
            case MidAutumnGiftConst.ITEM_ID_MATERIAL_FIVE_KERNEL:
               return this.itmNumFiveKernel;
            default:
               return 0;
         }
      }
      
      public function addRewardLog(param1:String) : void
      {
         if(this._logs == null)
         {
            this._logs = new Array();
         }
         this._logs.push(param1);
      }
   }
}
