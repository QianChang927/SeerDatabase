package com.robot.core.info.fightInfo
{
   import com.robot.core.config.xml.PetFightSkinSkillReplaceXMLInfo;
   import com.robot.core.config.xml.PetSkinXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetSkillInfo;
   import com.robot.core.pet.PetIdTransform;
   import flash.utils.IDataInput;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   
   public class FighterUserInfo
   {
       
      
      private var _id:uint;
      
      private var _nickName:String;
      
      private var _topLevel:uint;
      
      private var _petNum:int;
      
      private var _petInfoArr:Array;
      
      private var _petIDArr:Array;
      
      private var _petCatchArr:Array;
      
      private var _petSkillIDArr:Array;
      
      private var _clothNum:int;
      
      private var _clothArr:Array;
      
      private var _petLevel:int;
      
      private var _isLevelUp:Boolean;
      
      private var _aliveNum:int;
      
      public function FighterUserInfo(param1:IDataInput)
      {
         super();
         this._id = param1.readUnsignedInt();
         this._nickName = param1.readUTFBytes(16);
         this._topLevel = param1.readUnsignedInt();
         DebugTrace.show("_topLevel:--" + this._topLevel);
      }
      
      public function get id() : uint
      {
         return this._id;
      }
      
      public function get nickName() : String
      {
         return this._nickName;
      }
      
      public function get topLevel() : uint
      {
         return this._topLevel;
      }
      
      public function get petNum() : int
      {
         return this._petNum;
      }
      
      public function set petNum(param1:int) : void
      {
         this._petNum = param1;
      }
      
      public function get petInfoArr() : Array
      {
         return this._petInfoArr;
      }
      
      public function set petInfoArr(param1:Array) : void
      {
         var _loc2_:PetInfo = null;
         var _loc3_:int = 0;
         var _loc4_:Boolean = false;
         var _loc5_:HashMap = null;
         var _loc6_:Array = null;
         var _loc7_:* = undefined;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         var _loc11_:int = 0;
         this._petInfoArr = param1;
         this._petIDArr = [];
         this._petCatchArr = [];
         this._petSkillIDArr = [];
         this._aliveNum = 0;
         for each(_loc2_ in this._petInfoArr)
         {
            _loc3_ = int(_loc2_.id);
            _loc3_ = int(PetIdTransform.getPetId(_loc3_,_loc2_.catchTime,true));
            if(_loc2_.skinId != 0)
            {
               _loc3_ = PetSkinXMLInfo.getSkinPetId(_loc2_.skinId,_loc2_.id);
            }
            this._petIDArr.push(_loc3_);
            this._petCatchArr.push(_loc2_.catchTime);
            _loc4_ = false;
            if(_loc4_ = PetFightSkinSkillReplaceXMLInfo.needReplace(_loc2_.skinId,_loc2_.id))
            {
               _loc6_ = (_loc5_ = PetFightSkinSkillReplaceXMLInfo.getSkinSkills(_loc2_.skinId,_loc2_.id)).getKeys();
            }
            for each(_loc7_ in _loc2_.skillArray)
            {
               if(_loc7_ is PetSkillInfo)
               {
                  if(this._petSkillIDArr.indexOf((_loc7_ as PetSkillInfo).id) == -1 && (_loc7_ as PetSkillInfo).id != 0 || _loc6_ && _loc6_.indexOf((_loc7_ as PetSkillInfo).id) != -1)
                  {
                     this._petSkillIDArr.push((_loc7_ as PetSkillInfo).id);
                  }
               }
               else if(_loc7_ != 0 && this._petSkillIDArr.indexOf(_loc7_) == -1 || _loc6_ && _loc6_.indexOf(_loc7_) != -1)
               {
                  this._petSkillIDArr.push(_loc7_);
               }
            }
            if(_loc2_.hideSKill)
            {
               _loc8_ = int(_loc2_.hideSKill.id);
               if(this._petSkillIDArr.indexOf(_loc8_) == -1 && _loc8_ != 0 || _loc6_ && _loc6_.indexOf(_loc8_) != -1)
               {
                  this._petSkillIDArr.push(_loc8_);
               }
            }
            if(_loc4_)
            {
               if(_loc5_)
               {
                  _loc10_ = 0;
                  while(_loc10_ < _loc6_.length)
                  {
                     _loc9_ = int(_loc5_.getValue(_loc6_[_loc10_]));
                     if((_loc11_ = this._petSkillIDArr.indexOf(_loc6_[_loc10_])) != -1)
                     {
                        this._petSkillIDArr.splice(_loc11_,1);
                        this._petSkillIDArr.push(_loc9_);
                     }
                     _loc10_++;
                  }
               }
            }
            if(_loc2_.hp > 0)
            {
               ++this._aliveNum;
            }
         }
      }
      
      public function get petIDArr() : Array
      {
         return this._petIDArr;
      }
      
      public function get petCatchArr() : Array
      {
         return this._petCatchArr;
      }
      
      public function get petSkillIDArr() : Array
      {
         return this._petSkillIDArr;
      }
      
      public function get clothNum() : int
      {
         return this._clothNum;
      }
      
      public function set clothNum(param1:int) : void
      {
         this._clothNum = param1;
      }
      
      public function get clothArr() : Array
      {
         return this._clothArr;
      }
      
      public function set clothArr(param1:Array) : void
      {
         this._clothArr = param1;
      }
      
      public function get petLevel() : int
      {
         return this._petLevel;
      }
      
      public function set petLevel(param1:int) : void
      {
         this._petLevel = param1;
      }
      
      public function get isLevelUp() : Boolean
      {
         return this._isLevelUp;
      }
      
      public function set isLevelUp(param1:Boolean) : void
      {
         this._isLevelUp = param1;
      }
      
      public function getPetInfo(param1:uint) : PetInfo
      {
         var _loc2_:PetInfo = null;
         for each(_loc2_ in this._petInfoArr)
         {
            if(_loc2_.catchTime == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public function get aliveNum() : int
      {
         return this._aliveNum;
      }
      
      public function set aliveNum(param1:int) : void
      {
         this._aliveNum = param1;
      }
   }
}
