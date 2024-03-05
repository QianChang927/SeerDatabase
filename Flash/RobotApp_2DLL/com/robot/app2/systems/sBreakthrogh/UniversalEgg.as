package com.robot.app2.systems.sBreakthrogh
{
   import com.robot.core.config.xml.SBreakthroughXmlnfo;
   import com.robot.core.info.sBreakthrouthInfo.UniversalEggBreakthrouthInfo;
   
   public class UniversalEgg
   {
       
      
      private var _itemId:int;
      
      private var _getTime:int;
      
      private var _energy:int;
      
      public function UniversalEgg()
      {
         super();
      }
      
      public function get eggBreakthroughInfo() : UniversalEggBreakthrouthInfo
      {
         return SBreakthroughXmlnfo.getEggBreakthrouthInfoByItemId(this._itemId);
      }
      
      public function get level() : int
      {
         return this.eggBreakthroughInfo.level;
      }
      
      public function get type() : int
      {
         return this.eggBreakthroughInfo.type;
      }
      
      public function get getTime() : int
      {
         return this._getTime;
      }
      
      public function set getTime(param1:int) : void
      {
         this._getTime = param1;
      }
      
      public function get itemId() : int
      {
         return this._itemId;
      }
      
      public function set itemId(param1:int) : void
      {
         this._itemId = param1;
      }
      
      public function get energy() : int
      {
         return this._energy;
      }
      
      public function set energy(param1:int) : void
      {
         this._energy = param1;
      }
   }
}
