package com.robot.app.sumfire
{
   public class SumGiftFireData
   {
      
      private static var _instance:com.robot.app.sumfire.SumGiftFireData;
       
      
      private var _hasInitialized:Boolean;
      
      public var injectionsForAwaken:int;
      
      public var injectionsForRescue:int;
      
      public var fightProcFire:int;
      
      public var hasWeakened:Boolean;
      
      public var hasGottenFire:Boolean;
      
      public var fightForFire:int;
      
      public var fightForAwaken:int;
      
      public var fightForRescue:int;
      
      public var fightProcRescue:int;
      
      public var leftWater:int;
      
      public function SumGiftFireData()
      {
         super();
         if(null != _instance)
         {
            throw new Error("该实例需要通过 SumGiftFireData.getInstance() 方法调用");
         }
      }
      
      public static function getInstance() : com.robot.app.sumfire.SumGiftFireData
      {
         if(null == _instance)
         {
            _instance = new com.robot.app.sumfire.SumGiftFireData();
         }
         return _instance;
      }
      
      public function set initStep(param1:Boolean) : void
      {
         this._hasInitialized = param1;
      }
      
      public function getInitializeStep() : Boolean
      {
         return this._hasInitialized;
      }
   }
}
