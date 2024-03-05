package com.robot.app2.control
{
   public class DefendMoonGameController
   {
      
      private static const cooltime:int = 60;
      
      private static var _hp:int;
      
      private static var _coolDowns:Array;
      
      private static const _attack:Array = [1,1,2,1,1];
      
      private static var _isStart:Boolean;
      
      private static var _startTime:Number;
       
      
      public function DefendMoonGameController()
      {
         super();
      }
      
      public static function GameStart(param1:int = 0) : void
      {
         var _loc2_:Date = null;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         if(_isStart)
         {
            _loc2_ = new Date();
            _loc3_ = int((_loc2_.time - _startTime) / 1000);
            _loc4_ = 0;
            _loc5_ = 0;
            while(_loc5_ < _coolDowns.length)
            {
               if(_loc5_ == 0)
               {
                  _coolDowns[_loc5_] -= _loc3_;
               }
               else if(_coolDowns[_loc5_] > 0)
               {
                  _coolDowns[_loc5_] -= _loc3_;
                  if(_coolDowns[_loc5_] < 0)
                  {
                     _loc4_ += _attack[_loc5_ - 1] * _coolDowns[_loc5_];
                  }
               }
               else
               {
                  _loc4_ -= _attack[_loc5_ - 1] * _loc3_;
               }
               _loc5_++;
            }
            _hp += _loc4_ / 2;
            if(param1 > 0)
            {
               _coolDowns[param1] = cooltime;
            }
         }
         else
         {
            _isStart = true;
            _hp = 300;
            _coolDowns = [180,0,20,40,60,80];
         }
      }
      
      public static function updatePetCoolDown(param1:int) : void
      {
         _coolDowns[param1] = cooltime;
      }
      
      public static function get hp() : int
      {
         return _hp;
      }
      
      public static function set hp(param1:int) : void
      {
         _hp = param1;
      }
      
      public static function panelClose() : void
      {
         _startTime = new Date().time;
      }
      
      public static function get attack() : Array
      {
         return _attack;
      }
      
      public static function get coolDowns() : Array
      {
         return _coolDowns;
      }
      
      public static function get isStart() : Boolean
      {
         return _isStart;
      }
      
      public static function gameOver() : void
      {
         _isStart = false;
      }
   }
}
