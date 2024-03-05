package com.robot.app2.utilClass
{
   import com.robot.app.task.petstory.util.KTool;
   
   public class EncrySmallGame
   {
       
      
      private var _rand:int;
      
      public var sendValue:int;
      
      public function EncrySmallGame()
      {
         super();
      }
      
      public function set rand(param1:int) : void
      {
         var r:int = param1;
         KTool.getPlayerInfo([r],function(param1:Array):void
         {
            _rand = param1[0];
            score = score;
         });
      }
      
      public function set rand2(param1:int) : void
      {
         var r:int = param1;
         KTool.getMultiValue([r],function(param1:Array):void
         {
            _rand = param1[0];
            score = score;
         });
      }
      
      public function get score() : uint
      {
         var _loc1_:uint = 0;
         var _loc2_:int = 1;
         while(_loc2_ <= 4)
         {
            _loc1_ += this.sendValue >> _loc2_ * 4 & 15 << (_loc2_ - 1) * 4;
            _loc2_++;
         }
         return _loc1_;
      }
      
      public function set score(param1:uint) : void
      {
         var _loc2_:uint = 0;
         var _loc3_:int = 1;
         while(_loc3_ <= 4)
         {
            _loc2_ += (param1 << _loc3_ * 4 & 15 << (_loc3_ * 2 - 1) * 4) + (this._rand << (_loc3_ - 1) * 4 & 15 << (_loc3_ * 2 - 2) * 4);
            _loc3_++;
         }
         this.sendValue = _loc2_;
      }
   }
}
