package com.robot.app.ninthdragon
{
   import com.robot.app.ManagerBase;
   import com.robot.app.ninthdragon.model.NinthDragonShopItem;
   import org.taomee.ds.HashMap;
   
   public class NinthDragonManager extends ManagerBase
   {
      
      private static var _instance:com.robot.app.ninthdragon.NinthDragonManager;
       
      
      private var _items:Array;
      
      private var _commonProbability:HashMap;
      
      private var _advancedProbability:HashMap;
      
      public var fulMovie:String;
      
      public var fightNum:int;
      
      public var fightEight:int;
      
      public var compoundNum:int;
      
      public var bossId:int;
      
      public var sceneMap:uint;
      
      public var movieMap:uint;
      
      public var totalFreeSummon:int;
      
      public var damageRequire:int;
      
      public var totalHp:int;
      
      public var gameCdTime:int;
      
      public var gameTime:int;
      
      private var _signReq:HashMap;
      
      private var _upgrade:HashMap;
      
      public function NinthDragonManager()
      {
         super();
         if(_instance)
         {
            throw new Error("请使用 NinthDragonManager.getInstance() 调用该实例对象！\t");
         }
      }
      
      public static function getInstance() : com.robot.app.ninthdragon.NinthDragonManager
      {
         if(null == _instance)
         {
            _instance = new com.robot.app.ninthdragon.NinthDragonManager();
         }
         return _instance;
      }
      
      public function loadXml(param1:Function) : void
      {
         myLoadXml(NinthDragonConst.XML_PATH,param1);
      }
      
      override protected function parseXml(param1:XML) : void
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc5_:XML = null;
         var _loc6_:XML = null;
         var _loc7_:XML = null;
         var _loc8_:int = 0;
         var _loc9_:* = param1.child("const");
         for each(_loc2_ in _loc9_)
         {
            this.fulMovie = _loc2_.attribute("fulmovie");
            this.fightNum = _loc2_.attribute("fightnum");
            this.fightEight = _loc2_.attribute("fighteight");
            this.bossId = _loc2_.attribute("bossid");
            this.compoundNum = _loc2_.attribute("compoundneed");
            this.sceneMap = _loc2_.attribute("scenemap");
            this.movieMap = _loc2_.attribute("moviemap");
            this.totalFreeSummon = _loc2_.attribute("freesummon");
            this.damageRequire = _loc2_.attribute("damagerequire");
            this.totalHp = _loc2_.attribute("totalhp");
            this.gameCdTime = _loc2_.attribute("gamecd");
            this.gameTime = _loc2_.attribute("gametime");
         }
         this._items = new Array();
         for each(_loc3_ in param1.child("buyitem"))
         {
            this._items.push(NinthDragonShopItem.ReadXml(_loc3_));
         }
         this._commonProbability = new HashMap();
         for each(_loc4_ in param1.child("commonpro"))
         {
            this._commonProbability.add(int(_loc4_.attribute("id")),int(_loc4_.attribute("probalility")));
         }
         this._advancedProbability = new HashMap();
         for each(_loc5_ in param1.child("advancedpro"))
         {
            this._advancedProbability.add(int(_loc5_.attribute("id")),int(_loc5_.attribute("probalility")));
         }
         this._signReq = new HashMap();
         for each(_loc6_ in param1.child("sign"))
         {
            this._signReq.add(int(_loc6_.attribute("id")),int(_loc6_.attribute("require")));
         }
         this._upgrade = new HashMap();
         for each(_loc7_ in param1.child("upgrade"))
         {
            this._upgrade.add(int(_loc7_.attribute("id")),int(_loc7_.attribute("require")));
         }
      }
      
      public function getBuyItem(param1:int) : NinthDragonShopItem
      {
         var _loc2_:NinthDragonShopItem = null;
         for each(_loc2_ in this._items)
         {
            if(_loc2_.id == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function getTipsOfComSummon(param1:int) : int
      {
         return this._commonProbability.getValue(param1);
      }
      
      public function getTipsOfAdvSummon(param1:int) : int
      {
         return this._advancedProbability.getValue(param1);
      }
      
      public function getNextRequire(param1:int) : int
      {
         return this._upgrade.getValue(param1);
      }
      
      public function getSignRequire(param1:int) : int
      {
         return this._signReq.getValue(param1);
      }
   }
}
