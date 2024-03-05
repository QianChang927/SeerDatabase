package com.robot.app2.systems
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.config.xml.PetFriendsXMLInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.utils.Dictionary;
   import org.taomee.bean.BaseBean;
   import org.taomee.ds.HashMap;
   
   public class EffectIconControl extends BaseBean
   {
      
      private static var allEffects:Dictionary = new Dictionary();
      
      private static var petEffects:Dictionary = new Dictionary();
      
      private static var otherPetEffecrs:Dictionary = new Dictionary();
      
      private static var petidArr:Array = new Array();
      
      private static var peteffects:HashMap;
      
      private static var petEffectIds:HashMap;
      
      private static var _advancedPetEffects:Array = [];
       
      
      private var configXml:XML;
      
      public function EffectIconControl()
      {
         super();
      }
      
      public static function getEffectObj(param1:int, param2:int = 0, param3:String = "") : Object
      {
         var _loc4_:* = param1 + "";
         if(param2 > 0)
         {
            _loc4_ += "_" + param2;
         }
         if(param3 != "")
         {
            _loc4_ += "_" + param3;
         }
         return allEffects[_loc4_];
      }
      
      public static function getEffectInfoById(param1:int) : XML
      {
         return petEffectIds.getValue(param1);
      }
      
      public static function getAllEffctByPetId(param1:int) : Array
      {
         var pid:int = param1;
         var arr:Array = peteffects.getValue(pid);
         if(arr != null)
         {
            arr.sort(function(param1:XML, param2:XML):int
            {
               var _loc3_:int = 0;
               var _loc4_:int = 0;
               if(!param1.hasOwnProperty("intensify"))
               {
                  _loc3_ = 0;
               }
               else
               {
                  _loc3_ = int(param1.@intensify);
               }
               if(!param2.hasOwnProperty("intensify"))
               {
                  _loc4_ = 0;
               }
               else
               {
                  _loc4_ = int(param2.@intensify);
               }
               if(_loc3_ > _loc4_)
               {
                  return 1;
               }
               if(_loc3_ < _loc4_)
               {
                  return -1;
               }
               return 0;
            });
         }
         return arr;
      }
      
      public static function getpetidArr() : Array
      {
         return petidArr;
      }
      
      public static function getIconId(param1:int, param2:int = 0, param3:String = "") : int
      {
         var _loc4_:* = param1 + "";
         if(param2 > 0)
         {
            _loc4_ += "_" + param2;
         }
         if(param3 != "")
         {
            _loc4_ += "_" + param3;
         }
         var _loc5_:Object = allEffects[_loc4_];
         if(null != _loc5_)
         {
            return _loc5_["iconId"];
         }
         return -1;
      }
      
      public static function getLabel(param1:int, param2:int = 0, param3:String = "") : int
      {
         var _loc4_:* = param1 + "";
         if(param2 > 0)
         {
            _loc4_ += "_" + param2;
         }
         if(param3 != "")
         {
            _loc4_ += "_" + param3;
         }
         var _loc5_:Object = allEffects[_loc4_];
         if(null != _loc5_)
         {
            if(_loc5_["label"] != null)
            {
               return _loc5_["label"];
            }
            return -1;
         }
         return -1;
      }
      
      public static function getTag(param1:int, param2:int = 0, param3:String = "") : Array
      {
         var _loc4_:* = param1 + "";
         if(param2 > 0)
         {
            _loc4_ += "_" + param2;
         }
         if(param3 != "")
         {
            _loc4_ += "_" + param3;
         }
         var _loc5_:Object = allEffects[_loc4_];
         if(null != _loc5_)
         {
            return _loc5_["tag"];
         }
         return null;
      }
      
      public static function getDes(param1:int, param2:int = 0, param3:String = "") : Array
      {
         var _loc4_:* = param1 + "";
         if(param2 > 0)
         {
            _loc4_ += "_" + param2;
         }
         if(param3 != "")
         {
            _loc4_ += "_" + param3;
         }
         var _loc5_:Object = allEffects[_loc4_];
         if(null != _loc5_)
         {
            return _loc5_["des"];
         }
         return null;
      }
      
      public static function getIconByPet(param1:int) : int
      {
         var _loc3_:String = null;
         var _loc2_:String = param1.toString();
         for(_loc3_ in allEffects)
         {
            if(_loc3_.indexOf(_loc2_) != -1)
            {
               return allEffects[_loc3_]["iconId"];
            }
         }
         return 0;
      }
      
      public static function getTipByPet(param1:int) : String
      {
         var _loc3_:String = null;
         var _loc2_:String = param1.toString();
         for(_loc3_ in allEffects)
         {
            if(_loc3_.indexOf(_loc2_) != -1)
            {
               return allEffects[_loc3_]["tips"];
            }
         }
         return "";
      }
      
      public static function getFriendEffectDesc(param1:int, param2:String = "") : String
      {
         var _loc4_:PetListInfo = null;
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc3_:Array = [];
         for each(_loc4_ in PetManager.getBagMap(true))
         {
            if(PetFriendsXMLInfo.isFriendPet(param1,_loc4_.id))
            {
               _loc5_ = PetFriendsXMLInfo.getAffectedEffects(param1,_loc4_.id);
               for each(_loc6_ in _loc5_)
               {
                  _loc3_.push(PetEffectXMLInfo.getDescByIdx(_loc6_));
               }
               return _loc3_.join("\r");
            }
         }
         return param2;
      }
      
      public static function getTips(param1:int, param2:int = 0, param3:String = "") : String
      {
         var _loc4_:String;
         if(_loc4_ = getFriendEffectDesc(param1))
         {
            return _loc4_;
         }
         var _loc5_:* = param1 + "";
         if(param2 > 0)
         {
            _loc5_ += "_" + param2;
         }
         if(param3 != "")
         {
            _loc5_ += "_" + param3;
         }
         var _loc6_:Object = allEffects[_loc5_];
         if(null != _loc6_)
         {
            return (_loc6_["tips"] as String).split("|").join("\r").split("[").join("").split("]").join("").split("{").join("").split("}").join("");
         }
         return "";
      }
      
      public static function getLimitedType(param1:int, param2:int = 0, param3:String = "") : int
      {
         var _loc4_:* = param1 + "";
         if(param2 > 0)
         {
            _loc4_ += "_" + param2;
         }
         if(param3 != "")
         {
            _loc4_ += "_" + param3;
         }
         var _loc5_:Object = allEffects[_loc4_];
         if(null != _loc5_)
         {
            return _loc5_["limitedType"];
         }
         return 0;
      }
      
      public static function getSpecificIdArr(param1:int, param2:int = 0, param3:String = "") : Array
      {
         var _loc4_:* = param1 + "";
         if(param2 > 0)
         {
            _loc4_ += "_" + param2;
         }
         if(param3 != "")
         {
            _loc4_ += "_" + param3;
         }
         var _loc5_:Object = allEffects[_loc4_];
         if(null != _loc5_)
         {
            return _loc5_["specificIdArr"];
         }
         return null;
      }
      
      public static function getCompetlelimited(param1:int, param2:Array, param3:Function) : void
      {
         var c:uint = 0;
         var petId:int = 0;
         var limitedType:int = param1;
         var specificIdArr:Array = param2;
         var fun:Function = param3;
         if(fun == null)
         {
            Alarm2.show("回调函数不能为空");
            return;
         }
         switch(limitedType)
         {
            case 4:
               KTool.getMultiValue([specificIdArr[0]],function(param1:Array):void
               {
                  if(param1[0] > 0)
                  {
                     fun();
                  }
               });
               break;
            case 5:
               KTool.getBitSet([specificIdArr[0]],function(param1:Array):void
               {
                  if(param1[0] > 0)
                  {
                     fun();
                  }
               });
               break;
            case 6:
               for each(c in MainManager.actorInfo.clothIDs)
               {
                  if(c == specificIdArr[0] || c == specificIdArr[1] || c == specificIdArr[2] || c == specificIdArr[3])
                  {
                     fun();
                     return;
                  }
               }
               break;
            case 7:
               for each(petId in specificIdArr)
               {
                  if(KTool.checkPetInBag(petId))
                  {
                     fun();
                     return;
                  }
               }
               break;
            case 8:
               PetManager.upDate(function():void
               {
                  var _loc1_:int = 0;
                  for each(_loc1_ in specificIdArr)
                  {
                     if(Boolean(PetManager.containsBagForID(_loc1_)) || Boolean(PetManager.containsSecondBagForID(_loc1_)) || Boolean(PetManager.containsStorageForID(_loc1_)))
                     {
                        fun();
                        return;
                     }
                  }
               });
         }
      }
      
      public static function getPetEffectInfo(param1:int) : Object
      {
         return petEffects[param1];
      }
      
      public static function getPetIntensify(param1:int, param2:int = 0, param3:String = "") : int
      {
         var _loc4_:* = param1 + "";
         if(param2 > 0)
         {
            _loc4_ += "_" + param2;
         }
         if(param3 != "")
         {
            _loc4_ += "_" + param3;
         }
         var _loc5_:Object = allEffects[_loc4_];
         if(null != _loc5_)
         {
            return _loc5_["intensify"];
         }
         return 0;
      }
      
      public static function checkHasAdvancedByPetInfo(param1:*) : Boolean
      {
         var _loc2_:Array = null;
         var _loc3_:int = 0;
         var _loc4_:* = undefined;
         if(param1 && Boolean(param1.effectList))
         {
            _loc2_ = param1.effectList;
            _loc3_ = 0;
            while(_loc3_ < _loc2_.length)
            {
               _loc4_ = _loc2_[_loc3_];
               if(_advancedPetEffects.indexOf(_loc4_.effectID) >= 0)
               {
                  return true;
               }
               _loc3_++;
            }
         }
         return false;
      }
      
      override public function start() : void
      {
         var loader:SeerUrlLoader = new SeerUrlLoader("加载场景配置文件");
         var url:String = "xml/effectIcon.xml";
         PreloadZipXMLController.getXML("effectIcon.xml",function(param1:*):void
         {
            configXml = new XML(param1);
            setUp();
         });
         finish();
      }
      
      public function setUp() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc5_:String = null;
         var _loc6_:int = 0;
         var _loc7_:String = null;
         var _loc8_:int = 0;
         var _loc9_:Array = null;
         var _loc10_:Array = null;
         var _loc11_:int = 0;
         var _loc12_:int = 0;
         var _loc13_:int = 0;
         var _loc14_:String = null;
         var _loc15_:String = null;
         var _loc16_:String = null;
         var _loc17_:Array = null;
         var _loc18_:String = null;
         var _loc19_:int = 0;
         var _loc20_:int = 0;
         var _loc21_:Array = null;
         var _loc22_:* = null;
         var _loc23_:Object = null;
         var _loc1_:XMLList = this.configXml.elements("effect");
         peteffects = new HashMap();
         petEffectIds = new HashMap();
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = String(_loc2_.@petId).split("/");
            _loc4_ = int(_loc2_.@iconId);
            _loc5_ = String(_loc2_.@tips);
            _loc6_ = int(_loc2_.@effectId);
            _loc7_ = String(_loc2_.@args);
            _loc8_ = int(_loc2_.@label);
            _loc9_ = String(_loc2_.@tag).split("#");
            _loc10_ = String(_loc2_.@des).split("#");
            _loc11_ = int(_loc2_.@Id);
            _loc12_ = int(_loc2_.@from);
            _loc13_ = int(_loc2_.@to);
            _loc14_ = String(_loc2_.@come);
            _loc15_ = String(_loc2_.@url);
            _loc16_ = String(_loc2_.@kind);
            petEffectIds.add(_loc11_,_loc2_);
            if(_loc2_.@limitedType != null)
            {
               _loc20_ = int(_loc2_.@limitedType);
               _loc21_ = String(_loc2_.@specificId).split("/");
            }
            _loc17_ = [];
            for each(_loc18_ in _loc3_)
            {
               _loc22_ = _loc18_ + "";
               if(_loc6_ > 0)
               {
                  _loc22_ += "_" + _loc6_;
               }
               if(_loc7_ != "")
               {
                  _loc22_ += "_" + _loc7_;
               }
               if(_loc20_ != 0)
               {
                  _loc23_ = {
                     "id":_loc11_,
                     "iconId":_loc4_,
                     "label":_loc8_,
                     "tag":_loc9_,
                     "des":_loc10_,
                     "tips":_loc5_,
                     "limitedType":_loc20_,
                     "specificIdArr":_loc21_,
                     "to":_loc13_,
                     "form":_loc12_,
                     "com":_loc14_,
                     "kind":_loc16_
                  };
               }
               else
               {
                  _loc23_ = {
                     "id":_loc11_,
                     "iconId":_loc4_,
                     "label":_loc8_,
                     "tag":_loc9_,
                     "des":_loc10_,
                     "tips":_loc5_,
                     "to":_loc13_,
                     "form":_loc12_,
                     "com":_loc14_,
                     "kind":_loc16_
                  };
               }
               if(petEffects[_loc18_] != null)
               {
                  otherPetEffecrs[_loc18_] = _loc23_;
                  petidArr.push(_loc18_);
               }
               petEffects[_loc18_] = _loc23_;
               allEffects[_loc22_] = _loc23_;
               if(peteffects.getValue(_loc18_) == null)
               {
                  peteffects.add(_loc18_,[]);
               }
               (peteffects.getValue(_loc18_) as Array).push(_loc2_);
            }
            if((_loc19_ = int(_loc2_.@isAdv)) != 0)
            {
               _advancedPetEffects.push(_loc6_);
            }
         }
      }
   }
}
