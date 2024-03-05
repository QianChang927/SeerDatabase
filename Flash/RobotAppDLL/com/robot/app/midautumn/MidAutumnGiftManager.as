package com.robot.app.midautumn
{
   import com.robot.app.ManagerBase;
   import com.robot.app.midautumn.model.ControllerModel;
   import com.robot.app.midautumn.model.MakeMoonCakeModel;
   import com.robot.app.midautumn.model.MidAutumnGiftConfig;
   import com.robot.app.summergift.model.SummerGiftModelShopItem;
   import org.taomee.ds.HashMap;
   
   public class MidAutumnGiftManager extends ManagerBase
   {
      
      private static var _instance:com.robot.app.midautumn.MidAutumnGiftManager;
       
      
      private var _uiMap:HashMap;
      
      private var _config:MidAutumnGiftConfig;
      
      private var _shopItms:Array;
      
      private var _moonCakesModels:Array;
      
      private var _rwdLogs:HashMap;
      
      public function MidAutumnGiftManager()
      {
         super();
         if(!_instance)
         {
         }
      }
      
      public static function getInstance() : com.robot.app.midautumn.MidAutumnGiftManager
      {
         if(!_instance)
         {
            _instance = new com.robot.app.midautumn.MidAutumnGiftManager();
         }
         return _instance;
      }
      
      public function loadXml(param1:Function) : void
      {
         if(MidAutumnGiftData.INITIALIZED_STEP_NULL & MidAutumnGiftData.getInstance().initialized)
         {
            param1.apply();
         }
         else
         {
            myLoadXml(MidAutumnGiftConst.XML_URL,param1);
         }
      }
      
      override protected function parseXml(param1:XML) : void
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc5_:XML = null;
         var _loc6_:XML = null;
         var _loc7_:Array = null;
         var _loc8_:XML = null;
         this._uiMap = new HashMap();
         for each(_loc2_ in param1.child("ui"))
         {
            _loc7_ = new Array();
            for each(_loc8_ in _loc2_.child("controller"))
            {
               _loc7_.push(ControllerModel.ReadXml(_loc8_));
            }
            this._uiMap.add(String(_loc2_.attribute("class")),_loc7_);
         }
         for each(_loc3_ in param1.child("const"))
         {
            this._config = MidAutumnGiftConfig.ReadXml(_loc3_);
         }
         this._shopItms = new Array();
         for each(_loc4_ in param1.child("shopitem"))
         {
            this._shopItms.push(SummerGiftModelShopItem.ReadXml(_loc4_));
         }
         this._moonCakesModels = new Array();
         for each(_loc5_ in param1.child("mooncake"))
         {
            this._moonCakesModels.push(MakeMoonCakeModel.ReadXml(_loc5_));
         }
         this._rwdLogs = new HashMap();
         for each(_loc6_ in param1.child("reward"))
         {
            this._rwdLogs.add(int(_loc6_.attribute("id")),String(_loc6_.attribute("desc")));
         }
      }
      
      public function getPanelControllers(param1:String) : Array
      {
         return this._uiMap.getValue(param1);
      }
      
      public function getConst() : MidAutumnGiftConfig
      {
         return this._config;
      }
      
      public function getItemInfo(param1:int) : SummerGiftModelShopItem
      {
         var _loc2_:SummerGiftModelShopItem = null;
         for each(_loc2_ in this._shopItms)
         {
            if(_loc2_.itemId == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getMidItem(param1:int) : SummerGiftModelShopItem
      {
         var _loc2_:SummerGiftModelShopItem = null;
         for each(_loc2_ in this._shopItms)
         {
            if(_loc2_.outItem == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getMoonCake(param1:int) : MakeMoonCakeModel
      {
         var _loc2_:MakeMoonCakeModel = null;
         for each(_loc2_ in this._moonCakesModels)
         {
            if(_loc2_.id == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getRewardLog(param1:int) : String
      {
         return this._rwdLogs.getValue(param1);
      }
   }
}
