package com.robot.core.ui.skillBtn
{
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.GemsXMLInfo;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.skillEffectInfo.EffectInfoManager;
   import com.robot.core.info.userItem.CountermarkInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.utils.Timer;
   import org.taomee.utils.DisplayUtil;
   
   public class SkillInfoTip
   {
      
      private static var markStr:String;
      
      private static var tipMC:MovieClip;
      
      private static var timer:Timer;
      
      private static var additionStr:String;
      
      private static var _tipTextList:Array = [];
      
      private static var _petinfo:PetInfo;
      
      {
         setup();
      }
      
      public function SkillInfoTip()
      {
         super();
      }
      
      private static function setup() : void
      {
         timer = new Timer(5000,1);
         timer.addEventListener(TimerEvent.TIMER,timerHandler);
      }
      
      private static function getPetInfoTip(param1:PetInfo, param2:uint) : String
      {
         var _loc4_:PetSkillTipData = null;
         var _loc3_:int = 0;
         while(_loc3_ < _tipTextList.length)
         {
            if((_loc4_ = _tipTextList[_loc3_]).petInfo == param1 && _loc4_.skillID == param2)
            {
               return _loc4_.tipText;
            }
            _loc3_++;
         }
         return "";
      }
      
      private static function setPetInfoTip(param1:PetInfo, param2:uint, param3:String) : void
      {
         var _loc4_:PetSkillTipData;
         (_loc4_ = new PetSkillTipData()).petInfo = param1;
         _loc4_.skillID = param2;
         _loc4_.tipText = param3;
         _tipTextList.push(_loc4_);
         while(_tipTextList.length > 50)
         {
            _tipTextList.shift();
         }
      }
      
      public static function showPetInfoTip(param1:PetInfo, param2:uint) : void
      {
         var _loc4_:Array = null;
         var _loc5_:String = null;
         _petinfo = param1;
         var _loc3_:String = getPetInfoTip(param1,param2);
         if(_loc3_)
         {
            show(param2,true,_loc3_);
         }
         else
         {
            markStr = "";
            if(param1)
            {
               _loc4_ = [];
               if((_loc5_ = getMarkTip(param1.abilityMark,param1,param2)) != "")
               {
                  _loc4_.push(_loc5_);
               }
               if((_loc5_ = getMarkTip(param1.skillMark,param1,param2)) != "")
               {
                  _loc4_.push(_loc5_);
               }
               if(param1.commonMarkActived)
               {
                  if((_loc5_ = getMarkTip(param1.commonMark,param1,param2)) != "")
                  {
                     _loc4_.push(_loc5_);
                  }
               }
               markStr = _loc4_.join("\r");
            }
            showAdditionInfo(param1,param2);
            _loc3_ = show(param2,true,"",param1.id);
            setPetInfoTip(param1,param2,_loc3_);
         }
      }
      
      private static function getMarkTip(param1:int, param2:PetInfo, param3:int) : String
      {
         var _loc4_:CountermarkInfo = null;
         var _loc5_:int = 0;
         if(CountermarkXMLInfo.isUniversalMark(param1))
         {
            if((_loc4_ = ItemManager.getUniversalMarkInfo(param1)) && _loc4_.bindMonID == param2.id && _loc4_.bindMoveID == param3)
            {
               return "全能刻印宝石加成:" + GemsXMLInfo.getEffect(_loc4_.gemID);
            }
         }
         if(CountermarkXMLInfo.isQuanxiaoMark(param1))
         {
            _loc5_ = int(CountermarkXMLInfo.getQuanxiaoSkillID(param1));
            if(CountermarkXMLInfo.getSkillArr(_loc5_).indexOf(param3) > -1)
            {
               return "刻印加成:" + CountermarkXMLInfo.getSkillEffectDes(_loc5_,param3);
            }
         }
         if(CountermarkXMLInfo.isSkillMark(param1))
         {
            if(CountermarkXMLInfo.getSkillArr(param1).indexOf(param3) > -1)
            {
               return "刻印加成:" + CountermarkXMLInfo.getEffectDes(param1);
            }
         }
         return "";
      }
      
      public static function showAdditionInfo(param1:PetInfo, param2:uint) : void
      {
         var _loc3_:int = 0;
         var _loc4_:PetEffectInfo = null;
         additionStr = "";
         if(PetXMLInfo.isCombinationBonusPet(param1.id))
         {
            additionStr = "组合加成: 未激活";
            _loc3_ = 0;
            while(_loc3_ < param1.effectList.length)
            {
               _loc4_ = param1.effectList[_loc3_];
               if(PetEffectXMLInfo.getEffectType(_loc4_.effectID,_loc4_.args) == PetEffectXMLInfo.SKILL_POWER_ADDITION)
               {
                  if(SkillXMLInfo.getDamage(param2) == 0)
                  {
                     additionStr = "组合加成:0\r";
                  }
                  else
                  {
                     additionStr = "组合加成:威力" + PetEffectXMLInfo.getEffectAdditonNum(_loc4_.effectID,_loc4_.args) + "\r";
                  }
               }
               _loc3_++;
            }
            additionStr = additionStr;
         }
      }
      
      public static function show(param1:uint, param2:Boolean = false, param3:String = "", param4:int = 0) : String
      {
         var _loc7_:String = null;
         var _loc8_:String = null;
         var _loc9_:uint = 0;
         var _loc10_:Array = null;
         var _loc11_:Array = null;
         var _loc12_:int = 0;
         var _loc13_:int = 0;
         var _loc14_:uint = 0;
         var _loc15_:uint = 0;
         var _loc16_:String = null;
         var _loc17_:uint = 0;
         var _loc18_:uint = 0;
         var _loc19_:String = null;
         if(!tipMC)
         {
            tipMC = UIManager.getMovieClip("ui_SkillTipPanel");
            tipMC.mouseChildren = false;
            tipMC.mouseEnabled = false;
         }
         timer.stop();
         timer.reset();
         var _loc5_:* = "";
         if(param3)
         {
            _loc5_ = param3;
         }
         else
         {
            _loc8_ = SkillXMLInfo.getName(param1);
            _loc9_ = uint(SkillXMLInfo.getCategory(param1));
            _loc12_ = 0;
            if(_petinfo)
            {
               _loc12_ = int(_petinfo.catchTime);
            }
            if(param4 != 0 && PetManager.isFriendSkillActivate(param4,param1,_loc12_))
            {
               _loc10_ = SkillXMLInfo.getFriendSideEffects(param1);
               _loc11_ = SkillXMLInfo.getFriendSideEffectArgs(param1);
            }
            else
            {
               _loc10_ = SkillXMLInfo.getSideEffects(param1);
               _loc11_ = SkillXMLInfo.getSideEffectArgs(param1);
            }
            if(param1 <= 100000)
            {
               _loc13_ = int(SkillXMLInfo.movesMap.getValue(param1)["Priority"]);
               _loc14_ = uint(SkillXMLInfo.movesMap.getValue(param1)["MustHit"]);
            }
            if(_loc9_ == 1)
            {
               _loc7_ = "#FF0000";
            }
            else if(_loc9_ == 2)
            {
               _loc7_ = "#FF99FF";
            }
            else
            {
               _loc7_ = "#99ff00";
            }
            _loc5_ = "<font color=\'#ffff00\'>" + _loc8_ + "</font>  " + "<font color=\'" + _loc7_ + "\'>(" + SkillXMLInfo.getCategoryName(param1) + ")</font>\r";
            if(_loc13_ > 0)
            {
               _loc5_ += "\r<font color=\'#ffffff\'>先制+" + _loc13_ + "</font>\r";
            }
            else if(_loc13_ < 0)
            {
               _loc5_ += "\r<font color=\'#ffffff\'>先制" + _loc13_ + "</font>\r";
            }
            if(_loc14_ > 0)
            {
               _loc5_ += "\r<font color=\'#ffffff\'>必中</font>\r";
            }
            if(additionStr != "" && additionStr != null)
            {
               _loc5_ += "\r<font color=\'#00ffff\'>" + additionStr + "</font>";
            }
            if(param2 && markStr && markStr != "")
            {
               _loc5_ += "\r<font color=\'#00ffff\'>" + markStr + "</font>";
            }
            else
            {
               markStr = "";
            }
            _loc15_ = 0;
            for each(_loc16_ in _loc10_)
            {
               if(_loc16_ != "")
               {
                  _loc17_ = uint(1000000 + uint(_loc16_));
                  _loc18_ = EffectInfoManager.getArgsNum(uint(_loc16_));
                  _loc19_ = EffectInfoManager.getInfo(uint(_loc16_),_loc11_.slice(_loc15_,_loc15_ + _loc18_));
                  _loc15_ += _loc18_;
                  _loc5_ += "\r" + _loc19_;
               }
            }
            if(SkillXMLInfo.getGpFtSkillType(param1) == 1)
            {
               _loc5_ += "\r<font color=\'#33ff00\'>组队时可以向己方任意目标使用</font>";
            }
            if(SkillXMLInfo.getGpFtSkillAtkNum(param1) > 1)
            {
               _loc5_ += "\r<font color=\'#33ff00\'>组队时可以影响" + SkillXMLInfo.getGpFtSkillAtkNum(param1) + "个目标</font>";
            }
         }
         var _loc6_:TextField;
         (_loc6_ = tipMC["info_txt"]).autoSize = TextFieldAutoSize.LEFT;
         _loc6_.wordWrap = true;
         _loc6_.htmlText = _loc5_;
         tipMC["bgMC"].height = _loc6_.height + 20;
         tipMC["bgMC"].width = _loc6_.width + 20;
         setPos();
         MainManager.getStage().addChild(tipMC);
         tipMC.addEventListener(Event.ENTER_FRAME,enterFrameHandler);
         timer.start();
         return _loc5_;
      }
      
      private static function timerHandler(param1:TimerEvent) : void
      {
         hide();
      }
      
      public static function hide() : void
      {
         if(tipMC)
         {
            if(tipMC.hasEventListener(Event.ENTER_FRAME))
            {
               tipMC.removeEventListener(Event.ENTER_FRAME,enterFrameHandler);
            }
            DisplayUtil.removeForParent(tipMC);
         }
      }
      
      private static function enterFrameHandler(param1:Event) : void
      {
         setPos();
      }
      
      public static function setFixedPos(param1:MovieClip) : void
      {
         if(tipMC.hasEventListener(Event.ENTER_FRAME))
         {
            tipMC.removeEventListener(Event.ENTER_FRAME,enterFrameHandler);
         }
         var _loc2_:Point = param1.parent.localToGlobal(new Point(param1.x,param1.y));
         var _loc3_:int = _loc2_.x + (param1.width - tipMC.width) / 2;
         var _loc4_:int = _loc2_.y - tipMC.height - 10;
         if(_loc3_ < 0)
         {
            _loc3_ = 0;
         }
         if(_loc4_ < 0)
         {
            _loc4_ = 0;
         }
         if(_loc3_ + tipMC.width + 20 >= MainManager.getStageWidth())
         {
            tipMC.x = MainManager.getStageWidth() - tipMC.width - 10;
         }
         else
         {
            tipMC.x = _loc3_;
         }
         if(_loc4_ + tipMC.height + 20 >= MainManager.getStageHeight())
         {
            tipMC.y = MainManager.getStageHeight() - tipMC.height - 10;
         }
         else
         {
            tipMC.y = _loc4_;
         }
      }
      
      private static function setPos() : void
      {
         if(MainManager.getStage().mouseX + tipMC.width + 20 >= MainManager.getStageWidth())
         {
            tipMC.x = MainManager.getStageWidth() - tipMC.width - 10;
         }
         else
         {
            tipMC.x = MainManager.getStage().mouseX + 10;
         }
         if(MainManager.getStage().mouseY + tipMC.height + 20 >= MainManager.getStageHeight())
         {
            tipMC.y = MainManager.getStageHeight() - tipMC.height - 10;
         }
         else
         {
            tipMC.y = MainManager.getStage().mouseY + 20;
         }
      }
   }
}

import com.robot.core.info.pet.PetInfo;

class PetSkillTipData
{
    
   
   public var petInfo:PetInfo;
   
   public var skillID:int;
   
   public var tipText:String;
   
   public function PetSkillTipData()
   {
      super();
   }
}
