package com.robot.core.info.skillEffectInfo
{
   import com.robot.core.config.xml.SkillXMLInfo;
   import flash.utils.Dictionary;
   
   public class EffectInfo extends AbstractEffectInfo
   {
       
      
      private var _msg:String;
      
      private var _param:String;
      
      private var _fightTypeDic:Dictionary;
      
      public function EffectInfo(param1:int, param2:String, param3:String)
      {
         this._fightTypeDic = new Dictionary();
         super();
         _argsNum = param1;
         this._msg = param2;
         this._param = param3;
         this._fightTypeDic["0"] = "物理攻击";
         this._fightTypeDic["1"] = "特殊攻击";
         this._fightTypeDic["2"] = "物理攻击和特殊攻击";
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         var _loc5_:Array = null;
         var _loc6_:String = null;
         var _loc7_:Array = null;
         var _loc8_:String = null;
         var _loc9_:int = 0;
         var _loc10_:String = null;
         var _loc11_:String = null;
         var _loc12_:Array = null;
         var _loc13_:Array = null;
         var _loc14_:* = null;
         var _loc15_:int = 0;
         var _loc2_:Array = param1.slice();
         var _loc3_:String = this._msg;
         var _loc4_:int = 0;
         if(Boolean(this._param) && this._param.length > 0)
         {
            _loc5_ = this._param.split("|");
            _loc4_ = 0;
            while(_loc4_ < _loc5_.length)
            {
               if((Boolean(_loc6_ = String(_loc5_[_loc4_]))) && _loc6_.length > 0)
               {
                  if((Boolean(_loc7_ = _loc6_.split(","))) && _loc7_.length > 0)
                  {
                     _loc8_ = String(_loc7_[0]);
                     _loc9_ = int(_loc7_[1]);
                     _loc10_ = String(_loc7_[2]);
                     _loc11_ = "";
                     if(_loc8_ == "0")
                     {
                        _loc12_ = _loc10_.split("-");
                        _loc13_ = param1.slice(_loc9_,int(_loc9_) + 7);
                        _loc11_ = getPropertyStr(_loc13_);
                        _loc2_[_loc9_] = _loc11_;
                     }
                     else if(_loc8_ == "14")
                     {
                        if(int(param1[int(_loc9_)]) >= 0)
                        {
                           _loc2_[_loc9_] = "+" + param1[int(_loc9_)];
                        }
                     }
                     else if(_loc8_ == "16")
                     {
                        _loc14_ = "";
                        _loc15_ = 0;
                        while(_loc15_ < 6)
                        {
                           if(int(param1[_loc9_ + _loc15_]) > 0)
                           {
                              if(_loc14_.length > 0)
                              {
                                 _loc14_ += "、";
                              }
                              _loc14_ += this.getCommParamStr(int(_loc8_),_loc15_);
                           }
                           _loc15_++;
                        }
                        _loc2_[_loc9_] = _loc11_ + _loc14_;
                     }
                     else if(_loc8_ != "19")
                     {
                        if(_loc8_ == "22")
                        {
                           _loc2_[_loc9_] = SkillXMLInfo.petTypeNameCN(param1[int(_loc9_)]);
                        }
                        else
                        {
                           _loc11_ = this.getCommParamStr(int(_loc8_),param1[int(_loc9_)]);
                           _loc2_[_loc9_] = _loc11_;
                        }
                     }
                  }
               }
               _loc4_++;
            }
         }
         if(param1)
         {
            _loc4_ = 0;
            while(_loc4_ < param1.length)
            {
               _loc3_ = _loc3_.split("{" + _loc4_ + "}").join(_loc2_[_loc4_]);
               _loc4_++;
            }
         }
         return _loc3_;
      }
      
      private function getCommParamStr(param1:int, param2:int) : String
      {
         var _loc3_:String = "";
         var _loc4_:Array = EffectInfoManager.getEffectParamType(param1);
         return _loc3_ + _loc4_[param2];
      }
   }
}
