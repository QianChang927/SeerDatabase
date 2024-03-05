package com.robot.core.info.skillEffectInfo
{
   import flash.utils.Dictionary;
   
   public class AbstractEffectInfo
   {
       
      
      protected var _argsNum:uint = 0;
      
      protected var propDict:Dictionary;
      
      protected var statusDict:Dictionary;
      
      public function AbstractEffectInfo()
      {
         this.propDict = new Dictionary();
         this.statusDict = new Dictionary();
         super();
         this.propDict["0"] = "攻击";
         this.propDict["1"] = "防御";
         this.propDict["2"] = "特攻";
         this.propDict["3"] = "特防";
         this.propDict["4"] = "速度";
         this.propDict["5"] = "命中";
         this.statusDict["0"] = "麻痹";
         this.statusDict["1"] = "中毒";
         this.statusDict["2"] = "烧伤";
         this.statusDict["3"] = "吸取对方的体力";
         this.statusDict["4"] = "被对方吸取体力";
         this.statusDict["5"] = "冻伤";
         this.statusDict["6"] = "害怕";
         this.statusDict["7"] = "疲惫";
         this.statusDict["8"] = "睡眠";
         this.statusDict["9"] = "石化";
         this.statusDict["10"] = "混乱";
         this.statusDict["11"] = "衰弱";
         this.statusDict["12"] = "山神守护";
         this.statusDict["13"] = "易燃";
         this.statusDict["14"] = "狂暴";
         this.statusDict["15"] = "冰封";
         this.statusDict["16"] = "流血";
         this.statusDict["17"] = "免疫能力下降";
         this.statusDict["18"] = "免疫异常状态";
         this.statusDict["19"] = "瘫痪";
         this.statusDict["20"] = "失明";
         this.statusDict["21"] = "抵抗异常";
         this.statusDict["22"] = "焚烬";
         this.statusDict["23"] = "诅咒";
         this.statusDict["27"] = "感染";
         this.statusDict["28"] = "束缚";
         this.statusDict["29"] = "失神";
         this.statusDict["30"] = "沉默";
      }
      
      public function get argsNum() : uint
      {
         return this._argsNum;
      }
      
      public function getInfo(param1:Array = null) : String
      {
         return "";
      }
      
      public function getPropertyStr(param1:Array) : String
      {
         var _loc3_:* = null;
         var _loc4_:String = null;
         var _loc5_:String = null;
         var _loc2_:String = "";
         var _loc6_:int = 0;
         while(_loc6_ < 6)
         {
            if(param1[_loc6_] != 0)
            {
               if(param1[_loc6_] > 0)
               {
                  _loc5_ = "+";
               }
               else
               {
                  _loc5_ = "";
               }
               _loc3_ = this.propDict[_loc6_] + _loc5_ + param1[_loc6_] + "，";
               _loc2_ += _loc3_;
            }
            _loc6_++;
         }
         return _loc2_.slice(0,_loc2_.length - 1);
      }
   }
}
