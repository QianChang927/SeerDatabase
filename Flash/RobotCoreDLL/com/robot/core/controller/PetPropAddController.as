package com.robot.core.controller
{
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemSeXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.userItem.CountermarkInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.ui.BlackBgTip;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   
   public class PetPropAddController
   {
      
      private static var _widthFlag:Boolean = false;
      
      private static var naturesNumber:Array = [[1.1,0.9,1,1,1],[1.1,1,0.9,1,1],[1.1,1,1,0.9,1],[1.1,1,1,1,0.9],[0.9,1.1,1,1,1],[1,1.1,0.9,1,1],[1,1.1,1,0.9,1],[1,1.1,1,1,0.9],[0.9,1,1.1,1,1],[1,0.9,1.1,1,1],[1,1,1.1,0.9,1],[1,1,1.1,1,0.9],[0.9,1,1,1.1,1],[1,0.9,1,1.1,1],[1,1,0.9,1.1,1],[1,1,1,1.1,0.9],[0.9,1,1,1,1.1],[1,0.9,1,1,1.1],[1,1,0.9,1,1.1],[1,1,1,0.9,1.1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]];
      
      private static var typeList:Array = ["waist","eye"];
      
      private static var tipMap:HashMap = new HashMap();
       
      
      public function PetPropAddController()
      {
         super();
      }
      
      public static function getSuperAdd(param1:PetInfo) : Array
      {
         var _loc2_:uint = 0;
         var _loc3_:Array = [0,0,0,0,0,0];
         if(Boolean(MainManager.actorInfo.vip) && PetXMLInfo.getIsPropRaise(param1.id))
         {
            if(PetXMLInfo.isDarkPet(param1.id))
            {
               _loc2_ = Math.round(10 * NonoManager.getSLBySE(NonoManager.info.superEnergy) / 5 + 10);
               _loc3_ = [_loc2_,Math.floor(_loc2_ / 2),_loc2_,Math.floor(_loc2_ / 2),Math.floor(_loc2_ / 4),0];
            }
            else
            {
               _loc2_ = Math.round(7 * NonoManager.getSLBySE(NonoManager.info.superEnergy) / 5 + 9);
               _loc3_ = [_loc2_,_loc2_,_loc2_,_loc2_,Math.floor(_loc2_ / 2),0];
            }
         }
         return _loc3_;
      }
      
      public static function getBurstAdd(param1:PetInfo) : Array
      {
         var _loc4_:PetEffectInfo = null;
         var _loc5_:uint = 0;
         var _loc2_:Array = [0,0,0,0,0,0];
         var _loc3_:uint = 0;
         for each(_loc4_ in param1.effectList)
         {
            if(_loc4_.status == 3)
            {
               _loc5_ = 1;
               while(_loc5_ < 7)
               {
                  if(_loc5_ == 6)
                  {
                     _loc3_ = uint(_loc4_.args_all.getValue(0));
                  }
                  else
                  {
                     _loc3_ = uint(_loc4_.args_all.getValue(_loc5_));
                  }
                  _loc2_[_loc5_ - 1] = _loc3_;
                  _loc5_++;
               }
            }
         }
         return _loc2_;
      }
      
      public static function getMarkAdd(param1:PetInfo) : Array
      {
         var _loc2_:Array = [0,0,0,0,0,0];
         var _loc3_:Array = [];
         _loc3_.push(param1.abilityMark);
         _loc3_.push(param1.skillMark);
         if(param1.commonMarkActived)
         {
            _loc3_.push(param1.commonMark);
         }
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            arrAdd(_loc2_,getMarkAddArrByMark(_loc3_[_loc4_]));
            _loc4_++;
         }
         return _loc2_;
      }
      
      private static function getMarkAddArrByMark(param1:int) : Array
      {
         var _loc2_:CountermarkInfo = null;
         var _loc3_:Array = null;
         if(CountermarkXMLInfo.isUniversalMark(param1))
         {
            _loc2_ = ItemManager.getUniversalMarkInfo(param1);
            if(_loc2_)
            {
               if(_loc2_.level >= 5 && _loc2_.hasExtraAttri)
               {
                  _loc3_ = [0,0,0,0,0,0];
                  arrAdd(_loc3_,_loc2_.adjArray);
                  arrAdd(_loc3_,_loc2_.extraAttri);
                  return _loc3_;
               }
               return _loc2_.adjArray;
            }
         }
         if(CountermarkXMLInfo.isQuanxiaoMark(param1))
         {
            param1 = int(CountermarkXMLInfo.getQuanxiaoAbilityID(param1));
         }
         if(CountermarkXMLInfo.isAbilityMark(param1))
         {
            return CountermarkXMLInfo.getArg(param1);
         }
         return [0,0,0,0,0,0];
      }
      
      private static function arrAdd(param1:Array, param2:Array) : void
      {
         var _loc3_:int = 0;
         while(_loc3_ < param1.length)
         {
            param1[_loc3_] += int(param2[_loc3_]);
            _loc3_++;
         }
      }
      
      public static function getXteamAdd(param1:PetInfo) : Array
      {
         var _loc3_:int = 0;
         var _loc5_:Array = null;
         var _loc6_:Array = null;
         var _loc2_:Array = [0,0,0,0,0,0];
         var _loc4_:*;
         if((_loc4_ = getDefinitionByName("com.robot.app.petbag.PetBagControllerNew")).xteamPetArr.indexOf(param1.id) != -1)
         {
            _loc5_ = [10,20,10,20,10,20];
            _loc6_ = [[1394,1395],[1688,1689],[1587,1588],[1483,1484],[1446,1447],[1755,1756]];
            _loc3_ = 0;
            while(_loc3_ < 6)
            {
               if(isInBag(_loc6_[_loc3_]) && Boolean(_loc4_.isHasXteamEffect))
               {
                  _loc2_[_loc3_] += _loc5_[_loc3_];
               }
               _loc3_++;
            }
         }
         return _loc2_;
      }
      
      public static function getGodXteamAdd(param1:PetInfo) : Array
      {
         var _loc3_:int = 0;
         var _loc5_:Array = null;
         var _loc6_:Array = null;
         var _loc2_:Array = [0,0,0,0,0,0];
         var _loc4_:*;
         if((_loc4_ = getDefinitionByName("com.robot.app2.control.XTeamController")).petList.indexOf(param1.id) != -1)
         {
            _loc5_ = [16,26,16,26,18,35];
            _loc6_ = [[2356],[2400],[2393],[2415],[2388],[2420]];
            _loc3_ = 0;
            while(_loc3_ < 6)
            {
               if(isInBag(_loc6_[_loc3_]) && Boolean(_loc4_.isHasXteamEffect))
               {
                  if(isInBag(_loc6_[_loc3_]) && Boolean(_loc4_.isXTeamActive))
                  {
                     _loc2_[_loc3_] += _loc5_[_loc3_];
                     _widthFlag = true;
                  }
               }
               _loc3_++;
            }
         }
         return _loc2_;
      }
      
      public static function getWolfAdd(param1:PetInfo) : Array
      {
         var _loc2_:Array = [0,0,0,0,0,0];
         var _loc3_:Array = [1114,1115,1155,1156,1956];
         if(_loc3_.indexOf(param1.id) != -1)
         {
            if(isInBag([_loc3_[0],_loc3_[1]]) && isInBag([_loc3_[2],_loc3_[3]]) && PetManager.containsBagForID(_loc3_[4]))
            {
               _loc2_ = [20,0,0,0,0,20];
            }
         }
         return _loc2_;
      }
      
      public static function getChuangshiAdd(param1:PetInfo) : Array
      {
         var _loc2_:Array = [0,0,0,0,0,0];
         var _loc3_:Array = [2125,2126,2052,2053,2012,2013,1948,1949,2034,2035,2099,2100];
         if(_loc3_.indexOf(param1.id) != -1 && param1.effectList.length > 0 && haveChuangshiEffect(param1.effectList))
         {
            _loc2_ = [5,5,5,5,5,5];
         }
         return _loc2_;
      }
      
      public static function getGodPetCombinationAdd(param1:PetInfo) : Array
      {
         var _loc2_:PetEffectInfo = null;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc3_:Array = [0,0,0,0,0,0];
         if(PetXMLInfo.isCombinationBonusPet(param1.id))
         {
            _loc4_ = 0;
            while(_loc4_ < 6)
            {
               _loc5_ = 0;
               while(_loc5_ < param1.effectList.length)
               {
                  _loc2_ = param1.effectList[_loc5_];
                  if(PetEffectXMLInfo.getEffectType(_loc2_.effectID,_loc2_.args) == PetEffectXMLInfo.RACIAl_VALUE_ADDITION)
                  {
                     _loc3_[_loc4_] = getAdditionNum(param1,_loc2_,_loc4_);
                  }
                  _loc5_++;
               }
               _loc4_++;
            }
         }
         return _loc3_;
      }
      
      public static function getEffectAdd(param1:PetInfo) : Array
      {
         var _loc3_:PetEffectInfo = null;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc2_:int = 0;
         while(_loc2_ < param1.effectList.length)
         {
            _loc3_ = param1.effectList[_loc2_];
            if(_loc3_.effectID == 247)
            {
               _loc4_ = _loc3_.args_6.split(" ");
               _loc5_ = 0;
               while(_loc5_ < 6)
               {
                  _loc4_[_loc5_] = parseInt(_loc4_[_loc5_]);
                  _loc5_++;
               }
               return _loc4_;
            }
            _loc2_++;
         }
         return [0,0,0,0,0,0];
      }
      
      public static function getEquipAdd(param1:PetInfo) : Array
      {
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:Array = null;
         var _loc6_:Array = null;
         var _loc7_:Array = null;
         var _loc8_:Array = null;
         var _loc9_:int = 0;
         var _loc10_:Array = null;
         var _loc11_:Array = null;
         var _loc12_:int = 0;
         var _loc13_:Array = null;
         var _loc2_:Array = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
         if(PetManager.getPetInfo(param1.catchTime))
         {
            _loc3_ = 0;
            while(_loc3_ < 6)
            {
               _loc4_ = 0;
               _loc5_ = MainManager.actorInfo.clothes;
               _loc6_ = MainManager.actorInfo.clothIDs;
               _loc7_ = [0,0,0];
               _loc8_ = [0,0,0];
               _loc9_ = 0;
               _loc11_ = [];
               _loc9_ = 0;
               while(_loc9_ < _loc5_.length)
               {
                  if(typeList.indexOf(ItemXMLInfo.getType(_loc5_[_loc9_].id)) > 0)
                  {
                     if((_loc10_ = ItemSeXMLInfo.getEquipEffectAttr(_loc5_[_loc9_].id,_loc5_[_loc9_].level))[1] == 0)
                     {
                        _loc7_[2] += _loc10_[_loc3_ + 2];
                        _loc7_[0] = _loc10_[0];
                        _loc7_[1] = _loc10_[1];
                     }
                     else
                     {
                        _loc8_[2] += _loc10_[_loc3_ + 2];
                        _loc8_[0] = _loc10_[0];
                        _loc8_[1] = _loc10_[1];
                     }
                     if(ItemSeXMLInfo.getSuitId(_loc5_[_loc9_].id) > 0)
                     {
                        _loc4_ = ItemSeXMLInfo.getSuitId(_loc5_[_loc9_].id);
                     }
                  }
                  else if(ItemSeXMLInfo.getSuitId(_loc5_[_loc9_].id) > 0)
                  {
                     _loc4_ = ItemSeXMLInfo.getSuitId(_loc5_[_loc9_].id);
                  }
                  if(_loc11_.indexOf(_loc4_) == -1)
                  {
                     _loc11_.push(_loc4_);
                  }
                  _loc9_++;
               }
               _loc12_ = 0;
               while(_loc12_ < _loc11_.length)
               {
                  if((_loc4_ = int(_loc11_[_loc12_])) > 0)
                  {
                     _loc13_ = SuitXMLInfo.getCloths(_loc4_);
                     _loc9_ = 0;
                     while(_loc9_ < _loc13_.length)
                     {
                        if(_loc6_.indexOf(int(_loc13_[_loc9_])) < 0)
                        {
                           _loc4_ = 0;
                           break;
                        }
                        _loc9_++;
                     }
                     if(_loc4_ > 0 && _loc4_ != 360)
                     {
                        if((_loc10_ = ItemSeXMLInfo.getSuitEffectAttr(_loc4_,param1.id))[1] == 0)
                        {
                           _loc7_[2] += _loc10_[_loc3_ + 2];
                           _loc7_[0] = _loc10_[0];
                           _loc7_[1] = _loc10_[1];
                        }
                        else
                        {
                           _loc8_[2] += _loc10_[_loc3_ + 2];
                           _loc8_[0] = _loc10_[0];
                           _loc8_[1] = _loc10_[1];
                        }
                     }
                  }
                  _loc12_++;
               }
               _loc2_[_loc3_] = _loc7_;
               _loc2_[_loc3_ + 6] = _loc8_;
               _loc3_++;
            }
         }
         return _loc2_;
      }
      
      private static function haveChuangshiEffect(param1:Array) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            if((param1[_loc3_] as PetEffectInfo).effectID == 137)
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function checkHasAdd(param1:Array) : Boolean
      {
         var _loc2_:uint = 0;
         for each(_loc2_ in param1)
         {
            if(_loc2_)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function getAllAddList(param1:PetInfo) : Array
      {
         var _loc4_:Array = null;
         var _loc5_:Array = null;
         var _loc6_:Array = null;
         var _loc7_:int = 0;
         var _loc8_:PetEffectInfo = null;
         var _loc9_:String = null;
         var _loc10_:Array = null;
         var _loc11_:int = 0;
         var _loc2_:Array = [];
         var _loc3_:uint = 0;
         while(_loc3_ < 6)
         {
            _loc2_[_loc3_] = getSuperAdd(param1)[_loc3_] + getBurstAdd(param1)[_loc3_] + getMarkAdd(param1)[_loc3_] + getXteamAdd(param1)[_loc3_] + getWolfAdd(param1)[_loc3_] + getChuangshiAdd(param1)[_loc3_] + getEffectAdd(param1)[_loc3_] + getGodPetCombinationAdd(param1)[_loc3_] + getYearVipAdd(param1)[_loc3_];
            _loc4_ = [0,0,0];
            _loc4_ = getEquipAdd(param1)[_loc3_];
            _loc5_ = [0,0,0];
            _loc5_ = getEquipAdd(param1)[_loc3_ + 6];
            _loc6_ = [param1.attack,param1.defence,param1.s_a,param1.s_d,param1.speed,param1.maxHp];
            _loc7_ = int(_loc2_[_loc3_]);
            if(_loc4_[1] == 0)
            {
               _loc2_[_loc3_] = _loc7_ + _loc4_[2];
            }
            else if(_loc4_[1] == 1)
            {
               _loc2_[_loc3_] = int((_loc7_ + _loc6_[_loc3_]) * 0.01 * _loc4_[2] + _loc7_);
            }
            _loc7_ = int(_loc2_[_loc3_]);
            if(_loc5_[1] == 0)
            {
               _loc2_[_loc3_] = _loc7_ + _loc5_[2];
            }
            else if(_loc5_[1] == 1)
            {
               _loc2_[_loc3_] = int((_loc7_ + _loc6_[_loc3_]) * 0.01 * _loc5_[2] + _loc7_);
            }
            if(_loc3_ == 5)
            {
               _loc11_ = 0;
               while(_loc11_ < param1.effectList.length)
               {
                  if((_loc8_ = param1.effectList[_loc11_]).effectID == 697)
                  {
                     _loc2_[_loc3_] += getEvEffect(param1,4);
                     _loc2_[_loc3_] += getMarkAdd(param1)[4];
                  }
                  _loc11_++;
               }
               _loc2_[_loc3_] += getPartnerEffect(param1,_loc3_,_loc2_[_loc3_] + param1.maxHp);
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private static function getPartnerEffect(param1:PetInfo, param2:int, param3:int) : int
      {
         var _loc5_:PetEffectInfo = null;
         var _loc6_:String = null;
         var _loc7_:Array = null;
         var _loc8_:int = 0;
         var _loc4_:int = 0;
         if(param2 == 5)
         {
            _loc8_ = 0;
            while(_loc8_ < param1.effectList.length)
            {
               _loc7_ = (_loc5_ = param1.effectList[_loc8_]).args_6.split(" ");
               if(_loc5_.effectID == 720 && param1.id == 3036)
               {
                  if(_loc7_.length > 5)
                  {
                     _loc4_ = parseInt(_loc7_[4]);
                  }
               }
               else if(_loc5_.effectID == 715 && param1.id == 3022)
               {
                  if(_loc7_.length > 5)
                  {
                     _loc4_ = parseInt(_loc7_[4]);
                  }
               }
               _loc8_++;
            }
         }
         return _loc4_ * param3 * 0.01;
      }
      
      public static function showAddTxtTip(param1:TextField, param2:PetInfo, param3:uint, param4:Boolean = true) : void
      {
         var _loc5_:Array = null;
         var _loc6_:uint = 0;
         var _loc7_:* = null;
         var _loc8_:Array = null;
         var _loc9_:uint = 0;
         var _loc10_:* = null;
         var _loc11_:String = null;
         var _loc12_:String = null;
         var _loc13_:String = null;
         var _loc14_:* = undefined;
         var _loc15_:Array = null;
         var _loc16_:Array = null;
         var _loc17_:Array = null;
         var _loc18_:Array = null;
         var _loc19_:Array = null;
         var _loc20_:Array = null;
         var _loc21_:Array = null;
         if(Boolean(param1) && Boolean(param2))
         {
            _loc5_ = ["攻击","防御","特攻","特防","速度","体力"];
            if(param2.id == 70 && TasksManager.getTaskStatus(1241) == TasksManager.COMPLETE)
            {
               switch(param3)
               {
                  case 0:
                     _loc6_ = 4;
                     break;
                  case 1:
                     _loc6_ = 2;
                     break;
                  case 2:
                     _loc6_ = 4;
                     break;
                  case 3:
                     _loc6_ = 2;
                     break;
                  case 4:
                     _loc6_ = 1;
                     break;
                  case 5:
                     _loc6_ = 20;
               }
               _loc7_ = (_loc7_ = "<font color=\'#ffff00\'>" + "雷光之翼加成：" + _loc6_.toString() + "</font>") + ("\r<font color = \'#ffff00\'>刻印加成:" + getMarkAdd(param2)[param3] + "</font>");
               _loc8_ = [param2.attack + 4,param2.defence + 2,param2.s_a + 4,param2.s_d + 2,param2.speed + 1,param2.maxHp + 20];
               param1.htmlText = _loc5_[param3] + ":<font color=\'#ff0000\'>" + uint(_loc8_[param3] + getMarkAdd(param2)[param3]) + "</font>";
               param1.selectable = false;
               _loc7_ = checkStr(_loc7_,param3);
               _loc7_ = checkHoyAddStr(_loc7_,param3);
               _loc7_ = addTeamEffect(_loc7_,param3,param2);
               tipMap.add(param1,_loc7_);
               _widthFlag = true;
            }
            else
            {
               _loc10_ = "";
               _loc11_ = "超能加成: " + getSuperAdd(param2)[param3];
               _loc9_ += getSuperAdd(param2)[param3];
               _loc10_ += "<font color=\'#00ffff\'>" + _loc11_ + "</font>";
               _loc12_ = "爆发加成: " + getBurstAdd(param2)[param3];
               _loc9_ += getBurstAdd(param2)[param3];
               _loc10_ += "\r<font color=\'#66cc00\'>" + _loc12_ + "</font>";
               _loc13_ = "刻印加成: " + getMarkAdd(param2)[param3];
               _loc9_ += getMarkAdd(param2)[param3];
               _loc10_ += "\r<font color=\'#ffff00\'>" + _loc13_ + "</font>";
               _loc10_ = checkStr(_loc10_,param3);
               _loc10_ = checkHoyAddStr(_loc10_,param3);
               _loc10_ = addTeamEffect(_loc10_,param3,param2);
               if((_loc14_ = getDefinitionByName("com.robot.app.petbag.PetBagControllerNew")).xteamPetArr.indexOf(param2.id) != -1)
               {
                  _loc16_ = [10,20,10,20,10,20];
                  _loc17_ = [[1394,1395],[1688,1689],[1587,1588],[1483,1484],[1446,1447],[1755,1756]];
                  if(isInBag(_loc17_[param3]) && Boolean(_loc14_.isHasXteamEffect))
                  {
                     _loc10_ += "\r<font color=\'#ff2222\'>X战队独有加成:" + _loc16_[param3] + "</font>";
                     _loc9_ += _loc16_[param3];
                  }
               }
               if((_loc14_ = getDefinitionByName("com.robot.app2.control.XTeamController")).petList.indexOf(param2.id) != -1)
               {
                  _loc18_ = [16,26,16,26,18,35];
                  _loc19_ = [[2356],[2400],[2393],[2415],[2388],[2420]];
                  if(isInBag(_loc19_[param3]) && Boolean(_loc14_.isXTeamActive))
                  {
                     _loc10_ += "\r<font color=\'#ff2222\'>圣化X战队独有加成:" + _loc18_[param3] + "</font>";
                     _loc9_ += _loc18_[param3];
                  }
               }
               if(param3 == 0 || param3 == 5)
               {
                  if((_loc20_ = [1114,1115,1155,1156,1956]).indexOf(param2.id) != -1)
                  {
                     if(isInBag([_loc20_[0],_loc20_[1]]) && isInBag([_loc20_[2],_loc20_[3]]) && PetManager.containsBagForID(_loc20_[4]))
                     {
                        _loc10_ += "\r<font color=\'#ff2222\'>血狼军团加成:20</font>";
                        _loc9_ += 20;
                     }
                  }
               }
               if(param2.effectList.length > 0 && haveChuangshiEffect(param2.effectList))
               {
                  if((_loc21_ = [2125,2126,2052,2053,2012,2013,1948,1949,2034,2035,2099,2100]).indexOf(param2.id) != -1)
                  {
                     _loc10_ += "\r<font color=\'#ff2222\'>神兵加成:5</font>";
                     _loc9_ += 5;
                  }
               }
               param1.selectable = false;
               _loc15_ = [param2.attack,param2.defence,param2.s_a,param2.s_d,param2.speed,param2.maxHp];
               param1.htmlText = _loc5_[param3] + ":<font color=\'#ffff00\'>" + _loc15_[param3] + "</font>";
               if(_loc9_ != 0)
               {
                  param1.htmlText = _loc5_[param3] + ":<font color=\'#ff0000\'>" + uint(_loc15_[param3] + _loc9_) + "</font>";
               }
               tipMap.add(param1,_loc10_);
               _widthFlag = false;
            }
            if(param4)
            {
               param1.addEventListener(MouseEvent.MOUSE_OVER,onMosOver);
               param1.addEventListener(MouseEvent.MOUSE_OUT,onMosOut);
            }
         }
      }
      
      public static function showAddTxtTip2(param1:TextField, param2:PetInfo, param3:uint, param4:Boolean = true, param5:DisplayObject = null) : String
      {
         var _loc7_:uint = 0;
         var _loc8_:* = null;
         var _loc9_:Array = null;
         var _loc10_:uint = 0;
         var _loc11_:String = null;
         var _loc12_:* = null;
         var _loc13_:* = null;
         var _loc14_:* = null;
         var _loc15_:* = null;
         var _loc16_:* = null;
         var _loc17_:* = null;
         var _loc18_:String = null;
         var _loc19_:* = null;
         var _loc20_:int = 0;
         var _loc21_:int = 0;
         var _loc22_:int = 0;
         var _loc23_:int = 0;
         var _loc24_:int = 0;
         var _loc25_:int = 0;
         var _loc26_:int = 0;
         var _loc27_:int = 0;
         var _loc28_:int = 0;
         var _loc29_:Array = null;
         var _loc30_:Array = null;
         var _loc31_:int = 0;
         var _loc32_:int = 0;
         var _loc33_:Array = null;
         var _loc34_:Array = null;
         var _loc35_:Array = null;
         var _loc36_:Array = null;
         var _loc37_:PetEffectInfo = null;
         var _loc38_:String = null;
         var _loc39_:Array = null;
         var _loc40_:int = 0;
         var _loc41_:Array = null;
         var _loc42_:Array = null;
         var _loc43_:String = null;
         var _loc6_:String = "";
         if(param4 && param5 == null)
         {
            param5 = param1;
         }
         if(Boolean(param1) && Boolean(param2))
         {
            if(param2.id == 70 && TasksManager.getTaskStatus(1241) == TasksManager.COMPLETE)
            {
               switch(param3)
               {
                  case 0:
                     _loc7_ = 4;
                     break;
                  case 1:
                     _loc7_ = 2;
                     break;
                  case 2:
                     _loc7_ = 4;
                     break;
                  case 3:
                     _loc7_ = 2;
                     break;
                  case 4:
                     _loc7_ = 1;
                     break;
                  case 5:
                     _loc7_ = 20;
               }
               _loc8_ = (_loc8_ = "<font color=\'#ffff00\'>" + "雷光之翼加成：" + _loc7_.toString() + "</font>") + ("\r<font color = \'#ffff00\'>刻印加成:" + getMarkAdd(param2)[param3] + "</font>");
               _loc9_ = [param2.attack + 4,param2.defence + 2,param2.s_a + 4,param2.s_d + 2,param2.speed + 1,param2.maxHp + 20];
               param1.htmlText = "<font color=\'#ff0000\'>" + uint(_loc9_[param3] + getMarkAdd(param2)[param3]) + "</font>";
               param1.selectable = false;
               _loc8_ = checkStr(_loc8_,param3);
               _loc8_ = checkHoyAddStr(_loc8_,param3);
               _loc8_ = addTeamEffect(_loc8_,param3,param2);
               if(param4)
               {
                  tipMap.add(param5,_loc8_);
               }
               _loc6_ = _loc8_;
               _widthFlag = true;
            }
            else
            {
               _loc11_ = "";
               _loc12_ = "";
               _loc13_ = "";
               _loc14_ = "";
               _loc15_ = "";
               _loc16_ = "";
               _loc17_ = "";
               _loc18_ = "";
               _loc19_ = "";
               _loc20_ = 0;
               _loc21_ = 0;
               _loc22_ = 0;
               _loc23_ = 0;
               _loc24_ = 0;
               _loc25_ = 0;
               _loc26_ = 0;
               _loc27_ = 0;
               _loc28_ = 0;
               _widthFlag = false;
               _loc21_ = getEvEffect(param2,param3);
               if((_loc22_ = otherAdditionAttr(param2,param3)) <= 0)
               {
                  _loc22_ = additionAttr(param2,param3);
               }
               _loc13_ = "\r<font color=\'#ff0000\'>特性加成:" + _loc22_ + "</font>";
               _loc29_ = [1,2,3,4,5,0];
               _loc23_ = int((_loc30_ = param2.getTeamTechAdd(_loc29_[param3]))[0]);
               _loc14_ = "\r<font color=\'#DD00DD\'>" + "战队加成: " + _loc30_[0] + "</font>";
               _loc24_ = int(getMarkAdd(param2)[param3]);
               _loc25_ = int(getSuperAdd(param2)[param3]);
               _loc16_ = "\r<font color=\'#00ffff\'>超能加成: " + _loc25_ + "</font>";
               _loc26_ = int(getBurstAdd(param2)[param3]);
               _loc17_ = "\r<font color=\'#66cc00\'>爆发加成: " + _loc26_ + "</font>";
               _loc31_ = 0;
               _loc32_ = 0;
               if(param3 == 5)
               {
                  _loc40_ = 0;
                  while(_loc40_ < param2.effectList.length)
                  {
                     if((_loc37_ = param2.effectList[_loc40_]).effectID == 697)
                     {
                        _loc32_ += getEvEffect(param2,4);
                        _loc10_ += _loc32_;
                        _loc31_ = int(getMarkAdd(param2)[4]);
                        _loc10_ += _loc31_;
                     }
                     _loc40_++;
                  }
               }
               _loc12_ = "\r<font color=\'#66cc00\'>学习力加成:" + (_loc21_ + _loc32_) + "</font>";
               _loc15_ = "\r<font color=\'#ffff00\'>刻印加成: " + (_loc24_ + _loc31_) + "</font>";
               if((_loc20_ = int(getXteamAdd(param2)[param3])) > 0)
               {
                  _loc19_ += "\r<font color=\'#ff2222\'>X战队独有加成:" + _loc20_ + "</font>";
                  _loc28_ += _loc20_;
               }
               if((_loc20_ = int(getGodXteamAdd(param2)[param3])) > 0)
               {
                  _loc19_ += "\r<font color=\'#ff2222\'>圣化X战队独有加成:" + _loc20_ + "</font>";
                  _loc28_ += _loc20_;
               }
               if((_loc20_ = int(getWolfAdd(param2)[param3])) > 0)
               {
                  _loc19_ += "\r<font color=\'#ff2222\'>血狼军团加成:" + _loc20_ + "</font>";
                  _loc28_ += _loc20_;
               }
               if((_loc20_ = int(getChuangshiAdd(param2)[param3])) > 0)
               {
                  _loc19_ += "\r<font color=\'#ff2222\'>神兵加成:" + _loc20_ + "</font>";
                  _loc28_ += _loc20_;
               }
               if((_loc20_ = int(getGodPetCombinationAdd(param2)[param3])) > 0)
               {
                  _loc19_ += "\r<font color=\'#ff2222\'>组合加成:" + _loc20_ + "</font>";
                  _loc28_ += _loc20_;
               }
               if(getDefinitionByName("com.robot.app.control.YearVip2016Controller").isYearVip)
               {
                  _loc19_ += "\r<font color=\'#ff2222\'>年费加成:10</font>";
                  _loc28_ += getYearVipAdd(param2)[param3];
               }
               _loc33_ = [0,0,0];
               _loc33_ = getEquipAdd(param2)[param3];
               _loc34_ = [0,0,0];
               _loc34_ = getEquipAdd(param2)[param3 + 6];
               if(_loc21_ > 0)
               {
                  _loc11_ += _loc12_;
                  _widthFlag = true;
               }
               if(_loc22_ > 0)
               {
                  _loc11_ += _loc13_;
               }
               if(_loc23_ > 0)
               {
                  _loc11_ += _loc14_;
               }
               if(_loc24_ > 0)
               {
                  _loc10_ += _loc24_;
                  _loc11_ += _loc15_;
               }
               if(_loc25_ > 0)
               {
                  _loc10_ += _loc25_;
                  _loc11_ += _loc16_;
               }
               if(_loc26_ > 0)
               {
                  _loc10_ += _loc26_;
                  _loc11_ += _loc17_;
               }
               if(_loc28_ > 0)
               {
                  _loc10_ += _loc28_;
                  _loc11_ += _loc19_;
               }
               _loc20_ = 0;
               if(_loc33_[1] == 0)
               {
                  _loc20_ = int(_loc33_[2]);
               }
               else if(_loc33_[1] == 1)
               {
                  _loc20_ = ((_loc41_ = [param2.attack,param2.defence,param2.s_a,param2.s_d,param2.speed,param2.maxHp])[param3] + _loc10_) * 0.01 * _loc33_[2];
               }
               if(_loc34_[1] == 0)
               {
                  _loc20_ += _loc34_[2];
               }
               else if(_loc34_[1] == 1)
               {
                  _loc42_ = [param2.attack,param2.defence,param2.s_a,param2.s_d,param2.speed,param2.maxHp];
                  _loc20_ += (_loc42_[param3] + _loc10_) * 0.01 * _loc34_[2];
               }
               if(_loc20_ > 0)
               {
                  _loc43_ = "";
                  if(_loc33_[0] == 1)
                  {
                     _loc43_ = "(pvp生效)";
                     _widthFlag = true;
                  }
                  else if(_loc33_[0] == 2)
                  {
                     _loc43_ = "(pve生效)";
                     _widthFlag = true;
                  }
                  _loc11_ = "<font color=\'#BEAB35\'>装扮加成" + _loc43_ + ":" + _loc20_ + "</font>" + _loc11_;
               }
               else
               {
                  _loc11_ = _loc11_.substring(1);
               }
               _loc10_ += _loc20_;
               param1.selectable = false;
               _loc35_ = getAllAddList(param2);
               _loc36_ = [param2.attack,param2.defence,param2.s_a,param2.s_d,param2.speed,param2.maxHp];
               param1.htmlText = "<font color=\'#ffff00\'>" + _loc36_[param3] + "</font>";
               if(_loc35_[param3] != 0)
               {
                  param1.htmlText = "<font color=\'#ff0000\'>" + (_loc36_[param3] + _loc35_[param3]) + "</font>";
               }
               if(param4)
               {
                  tipMap.add(param5,_loc11_);
               }
               _loc6_ = _loc11_;
            }
            if(param4)
            {
               param5.addEventListener(MouseEvent.MOUSE_OVER,onMosOver);
               param5.addEventListener(MouseEvent.MOUSE_OUT,onMosOut);
            }
         }
         return _loc6_;
      }
      
      public static function removeTip(param1:DisplayObject) : void
      {
         if(param1 != null)
         {
            tipMap.remove(param1);
         }
         param1.removeEventListener(MouseEvent.MOUSE_OVER,onMosOver);
         param1.removeEventListener(MouseEvent.MOUSE_OUT,onMosOut);
      }
      
      private static function add4399eye(param1:int) : int
      {
         var _loc2_:Array = [0,20,0,20,10,0];
         var _loc3_:Array = MainManager.actorInfo.clothIDs;
         if(_loc3_.indexOf(1300698) == -1)
         {
            _loc2_ = [0,0,0,0,0,0];
         }
         return _loc2_[param1];
      }
      
      private static function adddianfengeye(param1:int) : int
      {
         var _loc2_:Array = [20,0,20,0,10,0];
         var _loc3_:Array = MainManager.actorInfo.clothIDs;
         if(_loc3_.indexOf(1300715) == -1)
         {
            _loc2_ = [0,0,0,0,0,0];
         }
         return _loc2_[param1];
      }
      
      private static function getEvEffect(param1:PetInfo, param2:int) : int
      {
         var _loc3_:Array = [];
         _loc3_[0] = naturesNumber[param1.nature][0] * 0.01 * param1.level * param1.ev_attack / 4;
         _loc3_[1] = naturesNumber[param1.nature][1] * 0.01 * param1.level * param1.ev_defence / 4;
         _loc3_[2] = naturesNumber[param1.nature][2] * 0.01 * param1.level * param1.ev_sa / 4;
         _loc3_[3] = naturesNumber[param1.nature][3] * 0.01 * param1.level * param1.ev_sd / 4;
         _loc3_[4] = naturesNumber[param1.nature][4] * 0.01 * param1.level * param1.ev_sp / 4;
         _loc3_[5] = 0.01 * param1.level * param1.ev_hp / 4;
         return int(_loc3_[param2]);
      }
      
      private static function otherAdditionAttr(param1:PetInfo, param2:int) : int
      {
         var _loc5_:PetEffectInfo = null;
         var _loc6_:String = null;
         var _loc7_:Array = null;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc8_:int = 0;
         if(PetXMLInfo.isLordOfWarPet(param1.id) || (param1.id == 2384 || param1.id == 2383))
         {
            _loc3_ = 0;
            while(_loc3_ < param1.effectList.length)
            {
               if((_loc5_ = param1.effectList[_loc3_]).effectID == 247)
               {
                  _loc7_ = _loc5_.args_6.split(" ");
                  _loc4_ = 0;
                  while(_loc4_ < 6)
                  {
                     _loc7_[_loc4_] = parseInt(_loc7_[_loc4_]);
                     _loc4_++;
                  }
                  _loc8_ += _loc7_[param2];
               }
               _loc3_++;
            }
         }
         else if(param1.id == 2465)
         {
            _loc3_ = 0;
            while(_loc3_ < param1.effectList.length)
            {
               if((_loc5_ = param1.effectList[_loc3_]).effectID == 269)
               {
                  _loc7_ = _loc5_.args_6.split(" ");
                  _loc4_ = 0;
                  while(_loc4_ < 6)
                  {
                     _loc7_[_loc4_] = parseInt(_loc7_[_loc4_]);
                     _loc4_++;
                  }
                  _loc8_ += _loc7_[param2];
               }
               _loc3_++;
            }
         }
         return _loc8_;
      }
      
      private static function additionAttr(param1:PetInfo, param2:int) : int
      {
         var _loc3_:PetEffectInfo = null;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc7_:int = 0;
         var _loc6_:int = 0;
         while(_loc6_ < param1.effectList.length)
         {
            _loc3_ = param1.effectList[_loc6_];
            if(_loc3_.effectID == 137)
            {
               _loc5_ = _loc3_.args_6.split(" ");
               _loc7_ = 0;
               while(_loc7_ < 6)
               {
                  _loc5_[_loc7_] = parseInt(_loc5_[_loc7_]);
                  _loc7_++;
               }
               return _loc5_[param2];
            }
            _loc6_++;
         }
         return 0;
      }
      
      public static function showAddMcTips(param1:MovieClip, param2:PetInfo, param3:uint, param4:Boolean = true) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:* = null;
         var _loc7_:Array = null;
         var _loc8_:uint = 0;
         var _loc9_:* = null;
         var _loc10_:String = null;
         var _loc11_:String = null;
         var _loc12_:String = null;
         var _loc13_:* = null;
         var _loc14_:int = 0;
         var _loc15_:PetEffectInfo = null;
         var _loc16_:* = undefined;
         var _loc17_:Array = null;
         var _loc18_:Number = NaN;
         var _loc19_:* = null;
         var _loc20_:Array = null;
         var _loc21_:int = 0;
         var _loc22_:Number = NaN;
         var _loc23_:Array = null;
         var _loc24_:Array = null;
         var _loc25_:Array = null;
         var _loc26_:Array = null;
         if(!param1 || !param2)
         {
            return;
         }
         if(param2.id == 70 && TasksManager.getTaskStatus(1241) == TasksManager.COMPLETE)
         {
            switch(param3)
            {
               case 0:
                  _loc5_ = 4;
                  break;
               case 1:
                  _loc5_ = 2;
                  break;
               case 2:
                  _loc5_ = 4;
                  break;
               case 3:
                  _loc5_ = 2;
                  break;
               case 4:
                  _loc5_ = 1;
                  break;
               case 5:
                  _loc5_ = 20;
            }
            _loc6_ = (_loc6_ = "<font color=\'#ffff00\'>" + "雷光之翼加成：" + _loc5_.toString() + "</font>") + ("\r<font color = \'#ffff00\'>刻印加成:" + getMarkAdd(param2)[param3] + "</font>");
            _loc7_ = [param2.attack + 4,param2.defence + 2,param2.s_a + 4,param2.s_d + 2,param2.speed + 1,param2.maxHp + 20];
            showScore(param1,_loc7_[param3] + getMarkAdd(param2)[param3],_loc5_ == 0 ? 0 : 1);
            _loc6_ = checkStr(_loc6_,param3);
            _loc6_ = checkHoyAddStr(_loc6_,param3);
            _loc6_ = addTeamEffect(_loc6_,param3,param2);
            tipMap.add(param1,_loc6_);
            _widthFlag = true;
         }
         else
         {
            _loc9_ = "";
            _loc13_ = "";
            _loc10_ = "超能加成: " + getSuperAdd(param2)[param3];
            _loc8_ += getSuperAdd(param2)[param3];
            _loc9_ += "<font color=\'#00ffff\'>" + _loc10_ + "</font>";
            _loc11_ = "爆发加成: " + getBurstAdd(param2)[param3];
            _loc8_ += getBurstAdd(param2)[param3];
            _loc9_ += "\r<font color=\'#66cc00\'>" + _loc11_ + "</font>";
            _loc12_ = "刻印加成: " + getMarkAdd(param2)[param3];
            _loc8_ += getMarkAdd(param2)[param3];
            _loc9_ += "\r<font color=\'#ffff00\'>" + _loc12_ + "</font>";
            _loc14_ = 0;
            if(PetXMLInfo.isCombinationBonusPet(param2.id))
            {
               _loc13_ = "组合加成:无";
               _loc14_ = 0;
               while(_loc14_ < param2.effectList.length)
               {
                  _loc15_ = param2.effectList[_loc14_];
                  if(PetEffectXMLInfo.getEffectType(_loc15_.effectID,_loc15_.args) == PetEffectXMLInfo.RACIAl_VALUE_ADDITION)
                  {
                     _loc18_ = getAdditionNum(param2,_loc15_,param3);
                     _loc13_ = "组合加成:" + _loc18_ + "\r";
                  }
                  _loc14_++;
               }
               _loc9_ += "\r<font color=\'#ffff00\'>" + _loc13_ + "</font>";
            }
            if(PetXMLInfo.isLordOfWarPet(param2.id))
            {
               _loc14_ = 0;
               while(_loc14_ < param2.effectList.length)
               {
                  if((_loc15_ = param2.effectList[_loc14_]).effectID == 247)
                  {
                     _loc20_ = _loc15_.args_6.split(" ");
                     _loc21_ = 0;
                     while(_loc21_ < 6)
                     {
                        _loc20_[_loc21_] = parseInt(_loc20_[_loc21_]);
                        _loc21_++;
                     }
                     _loc22_ = Number(_loc20_[param3]);
                     _loc8_ += _loc22_;
                     if(_loc22_ > 0)
                     {
                        _loc19_ = "特性加成:" + _loc22_ + "\r";
                     }
                  }
                  _loc14_++;
               }
               if(_loc19_ != null)
               {
                  _loc9_ += "\r<font color=\'#ff0000\'>" + _loc19_ + "</font>";
               }
            }
            _loc9_ = checkStr(_loc9_,param3);
            _loc9_ = checkHoyAddStr(_loc9_,param3);
            _loc9_ = addTeamEffect(_loc9_,param3,param2);
            if((_loc16_ = getDefinitionByName("com.robot.app.petbag.PetBagControllerNew")).xteamPetArr.indexOf(param2.id) != -1)
            {
               _loc23_ = [10,20,10,20,10,20];
               _loc24_ = [[1394,1395],[1688,1689],[1587,1588],[1483,1484],[1446,1447],[1755,1756]];
               if(isInBag(_loc24_[param3]) && Boolean(_loc16_.isHasXteamEffect))
               {
                  _loc9_ += "\r<font color=\'#ff2222\'>X战队独有加成:" + _loc23_[param3] + "</font>";
                  _loc8_ += _loc23_[param3];
               }
            }
            if(param3 == 0 || param3 == 5)
            {
               if((_loc25_ = [1114,1115,1155,1156,1956]).indexOf(param2.id) != -1)
               {
                  if(isInBag([_loc25_[0],_loc25_[1]]) && isInBag([_loc25_[2],_loc25_[3]]) && PetManager.containsBagForID(_loc25_[4]))
                  {
                     _loc9_ += "\r<font color=\'#ff2222\'>血狼军团加成:20</font>";
                     _loc8_ += 20;
                  }
               }
            }
            if(param2.effectList.length > 0 && haveChuangshiEffect(param2.effectList))
            {
               if((_loc26_ = [2125,2126,2052,2053,2012,2013,1948,1949,2034,2035,2099,2100]).indexOf(param2.id) != -1)
               {
                  _loc9_ += "\r<font color=\'#ff2222\'>神兵加成: 5</font>";
                  _loc8_ += 5;
               }
            }
            _loc17_ = [param2.attack,param2.defence,param2.s_a,param2.s_d,param2.speed,param2.maxHp];
            showScore(param1,_loc17_[param3] + _loc8_,_loc8_ == 0 ? 0 : 1);
            tipMap.add(param1,_loc9_);
            _widthFlag = false;
         }
         if(param4)
         {
            param1.addEventListener(MouseEvent.MOUSE_OVER,onMosOverMc);
            param1.addEventListener(MouseEvent.MOUSE_OUT,onMosOut);
         }
      }
      
      private static function getAdditionNum(param1:PetInfo, param2:PetEffectInfo, param3:int) : int
      {
         var _loc4_:int = 0;
         var _loc5_:Array = param2.args.split(" ");
         var _loc6_:Array = PetXMLInfo.getAllEvById(param1.id);
         var _loc7_:int = 0;
         while(_loc7_ < 6)
         {
            _loc5_[_loc7_] = parseInt(_loc5_[_loc7_]);
            _loc7_++;
         }
         var _loc8_:Array;
         (_loc8_ = [])[0] = (param1.dv + 2 * _loc6_[1] + param1.ev_attack / 4 + 5) * naturesNumber[param1.nature][0] - (param1.dv + 2 * _loc5_[1] + param1.ev_attack / 4 + 5) * naturesNumber[param1.nature][0];
         _loc8_[1] = (param1.dv + 2 * _loc6_[2] + param1.ev_defence / 4 + 5) * naturesNumber[param1.nature][1] - (param1.dv + 2 * _loc5_[2] + param1.ev_defence / 4 + 5) * naturesNumber[param1.nature][1];
         _loc8_[2] = (param1.dv + 2 * _loc6_[3] + param1.ev_sa / 4 + 5) * naturesNumber[param1.nature][2] - (param1.dv + 2 * _loc5_[3] + param1.ev_sa / 4 + 5) * naturesNumber[param1.nature][2];
         _loc8_[3] = (param1.dv + 2 * _loc6_[4] + param1.ev_sd / 4 + 5) * naturesNumber[param1.nature][3] - (param1.dv + 2 * _loc5_[4] + param1.ev_sd / 4 + 5) * naturesNumber[param1.nature][3];
         _loc8_[4] = (param1.dv + 2 * _loc6_[5] + param1.ev_sp / 4 + 5) * naturesNumber[param1.nature][4] - (param1.dv + 2 * _loc5_[5] + param1.ev_sp / 4 + 5) * naturesNumber[param1.nature][4];
         _loc8_[5] = param1.dv + 2 * _loc6_[0] + param1.ev_hp / 4 - (param1.dv + 2 * _loc5_[0] + param1.ev_hp / 4);
         return Math.abs(_loc8_[param3]);
      }
      
      private static function addTeamEffect(param1:String, param2:int, param3:PetInfo) : String
      {
         var _loc4_:Array = [1,2,3,4,5,0];
         var _loc5_:Array;
         if((_loc5_ = param3.getTeamTechAdd(_loc4_[param2]))[0])
         {
            param1 += "\r<font color=\'#DD00DD\'>" + "战队加成: " + _loc5_[0] + "</font>";
         }
         return param1;
      }
      
      private static function getYearVipAdd(param1:PetInfo) : Array
      {
         if(getDefinitionByName("com.robot.app.control.YearVip2016Controller").isYearVip)
         {
            return [10,10,10,10,10,10];
         }
         return [0,0,0,0,0,0];
      }
      
      private static function checkStr(param1:String, param2:int) : String
      {
         if(param2 == 1)
         {
            if(MainManager.actorInfo.clothIDs.indexOf(100525) != -1)
            {
               return param1 + ("\r<font color=\'#ff2222\'>" + "腰带加成5%（战斗中可见）" + "</font>");
            }
         }
         if(param2 == 3)
         {
            if(MainManager.actorInfo.clothIDs.indexOf(100526) != -1)
            {
               return param1 + ("\r<font color=\'#ff2222\'>" + "腰带加成5%（战斗中可见）" + "</font>");
            }
         }
         if(param2 == 5)
         {
            if(MainManager.actorInfo.clothIDs.indexOf(100524) != -1)
            {
               return param1 + ("\r<font color=\'#ff2222\'>" + "腰带加成5%（战斗中可见）" + "</font>");
            }
         }
         return param1;
      }
      
      private static function checkHoyAddStr(param1:String, param2:int) : String
      {
         if(param2 == 0)
         {
            if(MainManager.actorModel.ClothHoyPartCount > 0)
            {
               return param1 + ("\r<font color=\'#ff2222\'>" + "后羿战甲加成" + (MainManager.actorModel.ClothHoyPartCount * 5).toString() + "（战斗中可见）" + "</font>");
            }
         }
         return param1;
      }
      
      private static function isInBag(param1:Array) : Boolean
      {
         var _loc2_:uint = param1.length;
         var _loc3_:Boolean = false;
         var _loc4_:uint = 0;
         while(_loc4_ < _loc2_)
         {
            if(PetManager.containsBagForID(param1[_loc4_]))
            {
               _loc3_ = true;
               break;
            }
            _loc4_++;
         }
         return _loc3_;
      }
      
      private static function onMosOverMc(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:String = String(tipMap.getValue(_loc2_));
         if(Boolean(_loc3_) && _loc3_ != "")
         {
            if(_loc3_.indexOf("战斗中可见") != -1)
            {
               BlackBgTip.show(_loc3_,null,null,160);
            }
            else if(_widthFlag)
            {
               BlackBgTip.show(_loc3_,null,null,120);
            }
            else
            {
               BlackBgTip.show(_loc3_,null,null,90);
            }
         }
      }
      
      private static function onMosOver(param1:MouseEvent) : void
      {
         var _loc2_:* = param1.currentTarget;
         var _loc3_:String = String(tipMap.getValue(_loc2_));
         if(Boolean(_loc3_) && _loc3_ != "")
         {
            if(_loc3_.indexOf("战斗中可见") != -1)
            {
               BlackBgTip.show(_loc3_,null,null,160);
            }
            else if(_widthFlag)
            {
               BlackBgTip.show(_loc3_,null,null,120);
            }
            else
            {
               BlackBgTip.show(_loc3_,null,null,90);
            }
         }
      }
      
      private static function onMosOut(param1:MouseEvent) : void
      {
         BlackBgTip.hide();
      }
      
      public static function showScore(param1:MovieClip, param2:uint, param3:uint = 0, param4:Boolean = false) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:uint = param3 * 10;
         if(!param4)
         {
            _loc5_ = 0;
            while(param1["num_" + _loc5_] != null)
            {
               param1["num_" + _loc5_].gotoAndStop(1 + _loc6_);
               param1["num_" + _loc5_].visible = false;
               _loc5_++;
            }
         }
         else
         {
            _loc5_ = 0;
            while(param1["num_" + _loc5_] != null)
            {
               param1["num_" + _loc5_].gotoAndStop(1 + _loc6_);
               param1["num_" + _loc5_].visible = true;
               _loc5_++;
            }
         }
         var _loc7_:Array = param2.toString().split("").reverse();
         _loc5_ = 0;
         while(_loc5_ < _loc7_.length)
         {
            if(_loc7_[_loc5_] != undefined)
            {
               if(param1["num_" + _loc5_])
               {
                  param1["num_" + _loc5_].visible = true;
                  param1["num_" + _loc5_].gotoAndStop(uint(_loc7_[_loc5_]) + 1 + _loc6_);
               }
            }
            _loc5_++;
         }
      }
   }
}
