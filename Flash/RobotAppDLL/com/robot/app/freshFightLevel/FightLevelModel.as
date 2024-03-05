package com.robot.app.freshFightLevel
{
   import com.robot.app.sys.SysSOManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.debug.DebugTrace;
   
   public class FightLevelModel
   {
      
      private static var xmlClass:Class = FightLevelModel_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var info:Array;
      
      private static const _maxLevel:uint = 9;
      
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
         SysSOManager.freshLastSys(11001);
         SocketConnection.send(1022,86053865);
      }
      
      private static function upDatahandler() : void
      {
         var _loc2_:Object = null;
         var _loc3_:uint = 0;
         DebugTrace.show("max\t" + MainManager.actorInfo.maxFreshStage);
         DebugTrace.show("cur\t" + MainManager.actorInfo.curFreshStage);
         var _loc1_:int = 0;
         while(_loc1_ < xml.level.length())
         {
            _loc2_ = new Object();
            _loc2_.id = xml.level[_loc1_].@id;
            _loc2_.itemId = xml.level[_loc1_].@itemId;
            if(MainManager.actorInfo.maxFreshStage == 0)
            {
               _loc2_.isOpen = false;
            }
            else
            {
               if(MainManager.actorInfo.maxFreshStage <= 10)
               {
                  _loc3_ = 1;
               }
               else if(MainManager.actorInfo.maxFreshStage == _maxLevel)
               {
                  _loc3_ = uint(_maxLevel / 10);
               }
               else if(MainManager.actorInfo.maxFreshStage % 10 == 0)
               {
                  _loc3_ = uint(MainManager.actorInfo.maxFreshStage / 10);
               }
               else
               {
                  _loc3_ = uint(uint(MainManager.actorInfo.maxFreshStage / 10) + 1);
               }
               if(uint(_loc2_.id) <= _loc3_)
               {
                  _loc2_.isOpen = true;
               }
               else
               {
                  _loc2_.isOpen = false;
               }
            }
            info.push(_loc2_);
            _loc1_++;
         }
         FightChoiceController.show();
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
