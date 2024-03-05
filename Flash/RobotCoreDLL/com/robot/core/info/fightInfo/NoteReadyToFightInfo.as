package com.robot.core.info.fightInfo
{
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetSkillInfo;
   import com.robot.core.manager.MainManager;
   import flash.utils.IDataInput;
   import flash.utils.getDefinitionByName;
   
   public class NoteReadyToFightInfo
   {
       
      
      private var _userInfos:com.robot.core.info.fightInfo.FighterUserInfos;
      
      private var _mode:uint;
      
      private var _efFightType:uint;
      
      private var type:Array;
      
      private var _isSpecial:Boolean;
      
      public function NoteReadyToFightInfo(param1:IDataInput)
      {
         var _loc2_:int = 0;
         var _loc7_:FighterUserInfo = null;
         var _loc8_:Array = null;
         var _loc9_:uint = 0;
         var _loc10_:PetInfo = null;
         var _loc11_:int = 0;
         var _loc12_:uint = 0;
         var _loc13_:uint = 0;
         var _loc14_:uint = 0;
         var _loc15_:uint = 0;
         var _loc16_:int = 0;
         var _loc17_:uint = 0;
         var _loc18_:int = 0;
         var _loc19_:uint = 0;
         var _loc20_:int = 0;
         var _loc21_:Array = null;
         var _loc22_:int = 0;
         var _loc23_:uint = 0;
         var _loc24_:uint = 0;
         var _loc25_:PetSkillInfo = null;
         var _loc26_:uint = 0;
         var _loc27_:uint = 0;
         var _loc28_:Array = null;
         var _loc29_:Array = null;
         this.type = [14,36,37,44,45,46,47,48,49,50,51,60,66,74,75,77,78,79,80,81,82,83,88,89,100,101,102,103,104,105];
         super();
         this._mode = param1.readUnsignedInt();
         this._efFightType = param1.readUnsignedInt();
         this._userInfos = new com.robot.core.info.fightInfo.FighterUserInfos();
         var _loc3_:Array = [];
         var _loc4_:Array = [];
         var _loc5_:* = getDefinitionByName("com.robot.app.fight.FightManager") as Class;
         var _loc6_:* = getDefinitionByName("com.robot.app.fight.ReplayFightManager") as Class;
         _loc2_ = 0;
         while(_loc2_ < 2)
         {
            _loc7_ = new FighterUserInfo(param1);
            _loc8_ = [];
            _loc9_ = uint(param1.readUnsignedInt());
            _loc7_.petNum = _loc9_;
            _loc7_.petInfoArr = [];
            _loc11_ = 0;
            while(_loc11_ < _loc9_)
            {
               if(this.type.indexOf(this._mode) != -1)
               {
                  _loc10_ = new PetInfo(param1,false,false,false);
                  _loc8_.push(_loc10_);
               }
               else
               {
                  if(_loc5_.isReplay == false || _loc5_.isReplay && (_loc6_.version == 20130830 || _loc6_.version == 20131129))
                  {
                     _loc14_ = uint(param1.readUnsignedInt());
                     _loc15_ = uint(param1.readUnsignedInt());
                     _loc16_ = int(param1.readUnsignedInt());
                     _loc17_ = uint(param1.readUnsignedInt());
                  }
                  else
                  {
                     _loc14_ = uint(param1.readUnsignedInt());
                     _loc15_ = uint(param1.readUnsignedInt());
                     _loc17_ = uint(param1.readUnsignedInt());
                  }
                  _loc19_ = 0;
                  while(_loc19_ < _loc17_)
                  {
                     if((_loc24_ = uint(param1.readUnsignedInt())) != 0 && _loc3_.indexOf(_loc24_) == -1 && _loc24_ != SkillXMLInfo.getHideSkillId(_loc15_))
                     {
                        if(_loc24_ != 16839)
                        {
                           _loc3_.push(_loc24_);
                        }
                     }
                     if(_loc24_ != 0 && (_loc24_ == SkillXMLInfo.getHideSkillId(_loc15_) || _loc24_ == 16839))
                     {
                        _loc18_ = int(_loc24_);
                     }
                     _loc19_++;
                  }
                  _loc20_ = int(param1.readUnsignedShort());
                  _loc21_ = [];
                  _loc22_ = 0;
                  while(_loc22_ < _loc20_)
                  {
                     _loc21_.push(new PetEffectInfo(param1));
                     _loc22_++;
                  }
                  _loc23_ = uint(param1.readUnsignedInt());
                  (_loc10_ = new PetInfo()).catchTime = _loc14_;
                  _loc10_.id = _loc15_;
                  _loc10_.hp = _loc16_;
                  _loc10_.skinId = _loc23_;
                  _loc10_.skillNum = _loc17_;
                  _loc10_.skillArray = _loc3_;
                  if(_loc18_ != 0)
                  {
                     (_loc25_ = new PetSkillInfo()).id = _loc18_;
                     _loc10_.hideSKill = _loc25_;
                  }
                  _loc10_.effectCount = _loc20_;
                  _loc10_.effectList = _loc21_;
                  _loc8_.push(_loc10_);
               }
               _loc11_++;
            }
            _loc7_.petInfoArr = _loc8_.slice();
            _loc12_ = uint(param1.readUnsignedInt());
            _loc7_.clothNum = _loc12_;
            _loc7_.clothArr = [];
            _loc13_ = 0;
            while(_loc13_ < _loc12_)
            {
               _loc26_ = uint(param1.readUnsignedInt());
               _loc27_ = uint(param1.readUnsignedInt());
               if(_loc4_.indexOf(_loc26_) == -1)
               {
                  _loc4_.push(_loc26_);
               }
               _loc7_.clothArr = _loc4_.slice();
               _loc13_++;
            }
            param1.readUnsignedInt();
            if(_loc7_.id != MainManager.actorID)
            {
               this._userInfos.otherInfo = _loc7_;
            }
            else
            {
               this._userInfos.myInfo = _loc7_;
            }
            _loc2_++;
         }
         if(this._mode == 39 || this._mode == 40)
         {
            _loc28_ = [param1.readUnsignedInt(),param1.readUnsignedInt(),param1.readUnsignedInt()];
            _loc29_ = [param1.readUnsignedInt(),param1.readUnsignedInt(),param1.readUnsignedInt()];
            if(_loc28_[0] == MainManager.actorID)
            {
               this._userInfos.myInfo.petLevel = _loc28_[1];
               if(_loc28_[2] == 1)
               {
                  this._userInfos.myInfo.isLevelUp = true;
               }
               else
               {
                  this._userInfos.myInfo.isLevelUp = false;
               }
               this._userInfos.otherInfo.petLevel = _loc29_[1];
               if(_loc29_[2] == 1)
               {
                  this._userInfos.otherInfo.isLevelUp = true;
               }
               else
               {
                  this._userInfos.otherInfo.isLevelUp = false;
               }
            }
            else
            {
               this._userInfos.myInfo.petLevel = _loc29_[1];
               if(_loc29_[2] == 1)
               {
                  this._userInfos.myInfo.isLevelUp = true;
               }
               else
               {
                  this._userInfos.myInfo.isLevelUp = false;
               }
               this._userInfos.otherInfo.petLevel = _loc28_[1];
               if(_loc28_[2] == 1)
               {
                  this._userInfos.otherInfo.isLevelUp = true;
               }
               else
               {
                  this._userInfos.otherInfo.isLevelUp = false;
               }
            }
         }
      }
      
      public function get efFightType() : uint
      {
         return this._efFightType;
      }
      
      public function get model() : uint
      {
         return this._mode;
      }
      
      public function get userInfos() : com.robot.core.info.fightInfo.FighterUserInfos
      {
         return this._userInfos;
      }
      
      public function get isSpecial() : Boolean
      {
         if(this.type.indexOf(this._mode) != -1)
         {
            this._isSpecial = true;
         }
         else
         {
            this._isSpecial = false;
         }
         return this._isSpecial;
      }
   }
}
