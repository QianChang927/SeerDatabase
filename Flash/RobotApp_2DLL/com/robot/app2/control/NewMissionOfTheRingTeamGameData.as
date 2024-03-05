package com.robot.app2.control
{
   public class NewMissionOfTheRingTeamGameData
   {
      
      private static var _mapArr:Array = [0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0];
      
      public static var _gridArr:Array;
      
      public static var _curInfo:com.robot.app2.control.NewMissionOfTheRingTeamGameGridInfo;
      
      public static var _isFightIng:Boolean = false;
      
      public static var _randomBossIndexArr:Array;
      
      public static var _curBossIndex:int;
       
      
      public function NewMissionOfTheRingTeamGameData()
      {
         super();
      }
      
      public static function initData() : void
      {
         var _loc1_:int = 0;
         var _loc2_:com.robot.app2.control.NewMissionOfTheRingTeamGameGridInfo = null;
         if(_gridArr == null)
         {
            _gridArr = [];
            _loc1_ = 0;
            while(_loc1_ < 36)
            {
               _loc2_ = new com.robot.app2.control.NewMissionOfTheRingTeamGameGridInfo();
               _loc2_.index = _loc1_;
               _loc2_.type = _mapArr[_loc1_];
               _loc2_.frame = int(Math.random() * 3 + 1);
               _loc2_.num = int(Math.random() * 3 + 1);
               if(_loc1_ == 27)
               {
                  _curInfo = _loc2_;
               }
               _gridArr.push(_loc2_);
               _loc1_++;
            }
         }
      }
      
      public static function randomBossIndex() : void
      {
         var _loc2_:int = 0;
         _randomBossIndexArr = [];
         var _loc1_:int = 0;
         while(_loc1_ < 2)
         {
            _loc2_ = getRandomIndex();
            while(_randomBossIndexArr.indexOf(_loc2_) >= 0)
            {
               _loc2_ = getRandomIndex();
            }
            _randomBossIndexArr.push(_loc2_);
            _loc1_++;
         }
      }
      
      private static function getRandomIndex() : int
      {
         var _loc1_:int = 0;
         var _loc2_:int = int(Math.random() * 9 + 1);
         if(_loc2_ <= 5)
         {
            _loc1_ = shaxuan(6,1);
         }
         else if(_loc2_ > 5 && _loc2_ <= 8)
         {
            _loc1_ = shaxuan(3,7);
         }
         else
         {
            _loc1_ = shaxuan(3,10);
         }
         return _loc1_;
      }
      
      private static function shaxuan(param1:int, param2:int) : int
      {
         var _loc3_:int = 0;
         _loc3_ = int(Math.random() * param1 + param2);
         while(_loc3_ == _curInfo.num || _loc3_ - 3 == _curInfo.frame)
         {
            _loc3_ = int(Math.random() * param1 + param2);
         }
         return _loc3_;
      }
      
      public static function afterFightWinRandom() : void
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:com.robot.app2.control.NewMissionOfTheRingTeamGameGridInfo = null;
         var _loc7_:int = 0;
         var _loc8_:com.robot.app2.control.NewMissionOfTheRingTeamGameGridInfo = null;
         var _loc9_:Array = null;
         var _loc10_:Array = null;
         var _loc11_:int = 0;
         var _loc12_:com.robot.app2.control.NewMissionOfTheRingTeamGameGridInfo = null;
         var _loc13_:int = 0;
         if(_curBossIndex == 1)
         {
            _curInfo.num = 1;
         }
         else if(_curBossIndex == 2)
         {
            _curInfo.num = 2;
         }
         else if(_curBossIndex == 3)
         {
            _curInfo.num = 3;
         }
         else if(_curBossIndex == 4)
         {
            _curInfo.frame = 1;
         }
         else if(_curBossIndex == 5)
         {
            _curInfo.frame = 2;
         }
         else if(_curBossIndex == 6)
         {
            _curInfo.frame = 3;
         }
         else if(_curBossIndex == 7)
         {
            _loc1_ = int(Math.random() * 3 + 1);
            while(_curInfo.frame == _loc1_)
            {
               _loc1_ = int(Math.random() * 3 + 1);
            }
            _curInfo.frame = _loc1_;
         }
         else if(_curBossIndex == 8)
         {
            _loc2_ = int(Math.random() * 3 + 1);
            while(_curInfo.num == _loc2_)
            {
               _loc2_ = int(Math.random() * 3 + 1);
            }
            _curInfo.num = _loc2_;
         }
         else if(_curBossIndex == 9)
         {
            _loc3_ = int(Math.random() * 3 + 1);
            while(_curInfo.frame == _loc3_)
            {
               _loc3_ = int(Math.random() * 3 + 1);
            }
            _curInfo.frame = _loc3_;
            _loc4_ = int(Math.random() * 3 + 1);
            while(_curInfo.num == _loc4_)
            {
               _loc4_ = int(Math.random() * 3 + 1);
            }
            _curInfo.num = _loc4_;
         }
         else if(_curBossIndex == 10)
         {
            _loc5_ = 0;
            while(_loc5_ < 36)
            {
               if(_loc5_ != _curInfo.index)
               {
                  (_loc6_ = _gridArr[_loc5_] as com.robot.app2.control.NewMissionOfTheRingTeamGameGridInfo).index = _loc5_;
                  _loc6_.type = _mapArr[_loc5_];
                  _loc6_.frame = int(Math.random() * 3 + 1);
                  _loc6_.num = int(Math.random() * 3 + 1);
               }
               _loc5_++;
            }
         }
         else if(_curBossIndex == 11)
         {
            _loc7_ = 0;
            while(_loc7_ < 36)
            {
               if((_loc8_ = _gridArr[_loc7_] as com.robot.app2.control.NewMissionOfTheRingTeamGameGridInfo).num == 3)
               {
                  _loc8_.num = 1;
               }
               _loc7_++;
            }
         }
         else if(_curBossIndex == 12)
         {
            _loc9_ = [];
            _loc11_ = (_loc10_ = getNotBuleArr()).length >= 3 ? 3 : int(_loc10_.length);
            while(_loc9_.length < _loc11_)
            {
               _loc13_ = int(_loc10_[int(Math.random() * _loc10_.length)]);
               if((_loc12_ = _gridArr[_loc13_] as com.robot.app2.control.NewMissionOfTheRingTeamGameGridInfo).type > 0 && _loc12_.frame != 3 && _loc9_.indexOf(_loc12_.index) < 0)
               {
                  _loc9_.push(_loc12_.index);
                  _loc12_.frame = 3;
               }
            }
         }
      }
      
      private static function getNotBuleArr() : Array
      {
         var _loc3_:com.robot.app2.control.NewMissionOfTheRingTeamGameGridInfo = null;
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         while(_loc2_ < 36)
         {
            _loc3_ = _gridArr[_loc2_] as com.robot.app2.control.NewMissionOfTheRingTeamGameGridInfo;
            if(_loc3_.type > 0 && _loc3_.frame != 3)
            {
               _loc1_.push(_loc3_.index);
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      public static function destroy() : void
      {
         _gridArr = null;
         _curInfo = null;
         _isFightIng = false;
         _curBossIndex = 0;
         _randomBossIndexArr = null;
      }
   }
}
