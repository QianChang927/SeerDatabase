package com.robot.core.info.sBreakthrouthInfo
{
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.SBreakthroughXmlnfo;
   import com.robot.core.config.xml.SkillXMLInfo;
   
   public class UniversalEggBreakthrouthInfo
   {
       
      
      private var _itemId:int;
      
      private var _targetStars:Array;
      
      private var _outputCardId:int;
      
      private var _outputCardNum:int;
      
      private var _needEnergyIds:Array;
      
      private var _needEnergyNums:Array;
      
      private var _type:int;
      
      private var _level:int;
      
      private var _outPutIds:Array;
      
      private var _rewardChance:int;
      
      public function UniversalEggBreakthrouthInfo()
      {
         super();
      }
      
      public function get itemId() : int
      {
         return this._itemId;
      }
      
      public function set itemId(param1:int) : void
      {
         this._itemId = param1;
      }
      
      public function get outputCardId() : int
      {
         return this._outputCardId;
      }
      
      public function set outputCardId(param1:int) : void
      {
         this._outputCardId = param1;
      }
      
      public function get outputCardNum() : int
      {
         return this._outputCardNum;
      }
      
      public function set outputCardNum(param1:int) : void
      {
         this._outputCardNum = param1;
      }
      
      public function get needEnergyIds() : Array
      {
         return this._needEnergyIds;
      }
      
      public function set needEnergyIds(param1:Array) : void
      {
         this._needEnergyIds = param1;
      }
      
      public function get needEnergyNums() : Array
      {
         return this._needEnergyNums;
      }
      
      public function set needEnergyNums(param1:Array) : void
      {
         this._needEnergyNums = param1;
      }
      
      public function get type() : int
      {
         return this._type;
      }
      
      public function set type(param1:int) : void
      {
         this._type = param1;
      }
      
      public function get typeName() : String
      {
         return SkillXMLInfo.petTypeNameCN(this.type);
      }
      
      public function get level() : int
      {
         return this._level;
      }
      
      public function set level(param1:int) : void
      {
         this._level = param1;
      }
      
      public function get needEnergy() : int
      {
         return parseInt(ItemXMLInfo.getItemInfo(this.itemId)["NeedEnergy"]);
      }
      
      public function get provideEnergy() : int
      {
         return parseInt(ItemXMLInfo.getItemInfo(this.itemId)["Energy"]);
      }
      
      public function get hasNextLevel() : Boolean
      {
         return parseInt(ItemXMLInfo.getItemInfo(this.itemId)["NextID"]) != 0;
      }
      
      public function get outPutIds() : Array
      {
         return this._outPutIds;
      }
      
      public function set outPutIds(param1:Array) : void
      {
         this._outPutIds = param1;
      }
      
      public function get nextLevelOutPutIds() : Array
      {
         var _loc1_:UniversalEggBreakthrouthInfo = SBreakthroughXmlnfo.getEggBreakthrouthInfoByTypeLeve(this.type,this.level + 1);
         if(null != _loc1_)
         {
            return _loc1_.outPutIds;
         }
         return [];
      }
      
      public function get rewardChance() : int
      {
         return this._rewardChance;
      }
      
      public function set rewardChance(param1:int) : void
      {
         this._rewardChance = param1;
      }
   }
}
