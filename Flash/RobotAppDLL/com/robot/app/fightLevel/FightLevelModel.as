package com.robot.app.fightLevel
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UserInfoManager;
   
   public class FightLevelModel
   {
      
      private static var xmlClass:Class = FightLevelModel_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var info:Array;
      
      private static const _maxLevel:uint = 79;
      
      private static var currentBossId:Array;
      
      private static var b1:Boolean = false;
      
      private static var curLevel:uint;
      
      private static var nextBossId:Array;
       
      
      public function FightLevelModel()
      {
         super();
      }
      
      public static function setUp() : void
      {
         info = new Array();
         UserInfoManager.upDateMoreInfo(MainManager.actorInfo,upDatahandler);
      }
      
      private static function upDatahandler() : void
      {
         var obj:Object = null;
         var stage:uint = 0;
         var i1:int = 0;
         while(i1 < xml.level.length())
         {
            obj = new Object();
            obj.id = xml.level[i1].@id;
            obj.itemId = xml.level[i1].@itemId;
            if(MainManager.actorInfo.maxStage == 0)
            {
               obj.isOpen = false;
            }
            else
            {
               if(MainManager.actorInfo.maxStage <= 10)
               {
                  stage = 1;
               }
               else if(MainManager.actorInfo.maxStage == _maxLevel)
               {
                  stage = uint(_maxLevel / 10);
               }
               else if(MainManager.actorInfo.maxStage % 10 == 0)
               {
                  stage = uint(MainManager.actorInfo.maxStage / 10);
               }
               else
               {
                  stage = uint(uint(MainManager.actorInfo.maxStage / 10) + 1);
               }
               if(uint(obj.id) <= stage)
               {
                  obj.isOpen = true;
               }
               else
               {
                  obj.isOpen = false;
               }
            }
            info.push(obj);
            i1++;
         }
         MapManager.changeMapWithCallback(1153,function():void
         {
            ModuleManager.showAppModule("BraveTowerPanel");
         });
      }
      
      public static function get list() : Array
      {
         return info;
      }
      
      public static function set setBossId(param1:Array) : void
      {
         currentBossId = param1;
      }
      
      public static function get getBossId() : Array
      {
         return currentBossId;
      }
      
      public static function set setCurLevel(param1:uint) : void
      {
         curLevel = param1;
      }
      
      public static function get getCurLevel() : uint
      {
         return curLevel;
      }
      
      public static function set setNextBossId(param1:Array) : void
      {
         nextBossId = param1;
      }
      
      public static function get getNextBossId() : Array
      {
         return nextBossId;
      }
      
      public static function get maxLevel() : uint
      {
         return _maxLevel;
      }
   }
}
