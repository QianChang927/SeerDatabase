package com.robot.module.app.petBag.subModule.bagRightModule.petModules.petSubModules
{
   import com.codecatalyst.promise.Promise;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.NatureXMLInfo;
   import com.robot.core.config.xml.PetEffectXMLInfo;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.effectTips.EffectInfoTips;
   import com.robot.core.utils.CommonUI;
   import com.robot.module.app.petBag.DataKeys;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class CultureModule extends PetBagSubModule
   {
       
      
      private var TIPS:Array;
      
      private var showTips:uint = 0;
      
      public function CultureModule()
      {
         this.TIPS = ["基本属性，最高为100级。随着等级的提升，精灵的力量会逐渐变强，并解锁更多技能！","基本属性，最高为31点。在提升等级时，天赋越高的精灵力量增强的就越多。","基本属性，最高可提升精灵255点单项属性，510点总属性。由后天养成，通过学习力可以有选择地加强精灵的某种属性。","进阶属性，最多提升20点体力上限。体力是精灵最基础的生存能力，提升上限可以大大提升其生存率。","基本属性，在获得精灵时会自动拥有。性格会影响精灵的属性，让精灵拥有最合适的性格很关键。","进阶属性，需要在获得精灵后开启。特性会让精灵在战斗中产生多种多样的效果，甚至扭转战局。"];
         super();
         initUi("culture");
         for(var i:int = 0; i < this.TIPS.length; i++)
         {
            _toolTipCom.addTip(_ui["tip" + i],this.TIPS[i]);
         }
         this.update();
         SocketConnection.addCmdListener(CommandID.EAT_SPECIAL_MEDICINE,this.onCmdListener);
         SocketConnection.addCmdListener(CommandID.UP_GRADE_MEDICINE,this.onCmdListener);
         SocketConnection.addCmdListener(CommandID.PET_RESET_NATURE,this.onCmdListener);
         SocketConnection.addCmdListener(CommandID.EFFECT_STRENGTHEN,this.onCmdListener);
      }
      
      protected function onCmdListener(e:* = null) : void
      {
         PetManager.upDate(function():void
         {
            moduleData.setData(DataKeys.FOCUS_PET,PetManager.getPetInfo(focusPet.catchTime));
         });
      }
      
      override protected function onFocusPetChange() : void
      {
         this.update();
      }
      
      private function update() : void
      {
         var natureTxt:String;
         var j:uint;
         var normal:PetEffectInfo = null;
         var ability:PetEffectInfo = null;
         var eff:PetEffectInfo = null;
         var desc_str:String = null;
         var starLv:int = 0;
         var desc:String = null;
         var intro:String = null;
         setPanelEnable(_ui,focusPet != null);
         if(focusPet == null)
         {
            _ui["effectMc"].visible = false;
            return;
         }
         _ui["level"].text = focusPet.level + "/100";
         this.setBar(_ui["levelBar"],focusPet.level,100,_ui["levelUp"]);
         _ui["dv"].text = focusPet.dv + "/31";
         this.setBar(_ui["dvBar"],focusPet.dv,31,_ui["dvUp"]);
         _ui["ev"].text = focusPet.totalEv + "/510";
         this.setBar(_ui["evBar"],focusPet.totalEv,510,_ui["evUp"]);
         this.updatExHp();
         natureTxt = NatureXMLInfo.getName(focusPet.nature) + " (" + NatureXMLInfo.getDes2(focusPet.nature) + ")";
         _ui["nature"].text = natureTxt;
         _toolTipCom.addTip(_ui["nature"],NatureXMLInfo.getDes(focusPet.nature));
         for(j = 0; j < focusPet.effectList.length; j++)
         {
            eff = focusPet.effectList[j] as PetEffectInfo;
            if(!(eff.effectID == 177 || eff.effectID == 287))
            {
               if(eff.status == 1 || eff.status == 4)
               {
                  desc_str = String(PetEffectXMLInfo.getEffect(eff.effectID,eff.args));
                  if(desc_str.length <= "这四个字".length && desc_str.length > 0)
                  {
                     if(eff.effectID > 400 && eff.effectID <= 420)
                     {
                        ability = eff;
                     }
                     else
                     {
                        normal = eff;
                        PetManager.curViewEffectIdx = PetEffectXMLInfo.getEffectIdx(eff.effectID,eff.args);
                     }
                     break;
                  }
               }
            }
         }
         if(normal == null)
         {
            _ui["effectBtn"].gotoAndStop(1);
            _ui["effect"].visible = true;
            _ui["effectMc"].visible = false;
         }
         else
         {
            if(focusPet.catchTime == this.showTips)
            {
               this.showTips = 0;
               EventManager.dispatchEvent(new Event("PetNatureOpenAlarmShow"));
               Alarm.show("特性开启成功！",function():void
               {
                  EventManager.dispatchEvent(new Event("PetNatureOpenAlarmClick"));
               });
            }
            _ui["effect"].visible = false;
            _ui["effectMc"].visible = true;
            starLv = int(PetEffectXMLInfo.getStarLevel(normal.effectID,normal.args));
            desc = String(PetEffectXMLInfo.getEffect(normal.effectID,normal.args));
            intro = String(PetEffectXMLInfo.getIntros(desc).getValue(starLv));
            EffectInfoTips.setup(_ui["effectMc"],desc,starLv,intro);
            _ui["effectBtn"].gotoAndStop(2);
         }
      }
      
      private function updatExHp() : void
      {
         SocketConnection.sendWithPromise(CommandID.JAMES_ARMOR_QUERY_ABIBLITY,[focusPet.catchTime]).then(function(e:SocketEvent):void
         {
            var b:ByteArray = e.data as ByteArray;
            b.position = 0;
            var exHp:int = int(b.readUnsignedInt());
            _ui["exHp"].text = exHp + "/20";
            setBar(_ui["exHpBar"],exHp,20,_ui["exHpUp"]);
         });
      }
      
      override protected function onClick(e:MouseEvent) : void
      {
         var btnName:String;
         if(focusPet == null)
         {
            return;
         }
         btnName = String(e.target.name);
         switch(btnName)
         {
            case "levelUp":
               StatManager.sendStat2014("2019新背包","点击等级提升按钮",StatManager.SYSTEM);
               ModuleManager.showAppModule("PetLevelUpPanel",focusPet);
               break;
            case "dvUp":
               StatManager.sendStat2014("2019新背包","点击天赋提升按钮",StatManager.SYSTEM);
               ModuleManager.showAppModule("PetTalentUpPanel",focusPet);
               break;
            case "evUp":
               StatManager.sendStat2014("2019新背包","点击学习力提升按钮",StatManager.SYSTEM);
               ModuleManager.showAppModule("PetAbilityUpPanel",focusPet);
               break;
            case "exHpUp":
               StatManager.sendStat2014("2019新背包","点击体力上限提升按钮",StatManager.SYSTEM);
               ModuleManager.showAppModule("PetExHpUpPanel",focusPet);
               break;
            case "natureBtn":
               StatManager.sendStat2014("2019新背包","点击性格调整按钮",StatManager.SYSTEM);
               ModuleManager.showAppModule("PetNatureUpPanel",focusPet);
               break;
            case "openEffect":
               StatManager.sendStat2014("2019新背包","点击特性开启按钮",StatManager.SYSTEM);
               this.showTips = focusPet.catchTime;
               moduleData.useOnePetItem([300053,300063,300661,300729],focusPet);
               break;
            case "changeEffect":
               StatManager.sendStat2014("2019新背包","点击特性调整按钮",StatManager.SYSTEM);
               ModuleManager.showAppModule("PetEffectUpPanel",focusPet);
               break;
            case "resetBtn":
               StatManager.sendStat2014("2019新背包","点击精灵还原按钮",StatManager.SYSTEM);
               Alert.showWithPromise("你确定要将此精灵恢复为初始状态吗？当前的所有属性都不会被保留！").then(function():Promise
               {
                  return moduleData.useOnePetItem([300024,300075,300659,300727],focusPet);
               });
         }
      }
      
      private function GetEffect(petInfo:PetInfo) : String
      {
         var normal:PetEffectInfo = null;
         var eff:PetEffectInfo = null;
         for(var j:uint = 0; j < petInfo.effectList.length; j++)
         {
            eff = petInfo.effectList[j] as PetEffectInfo;
            if(eff.effectID != 177)
            {
               if(eff.status == 1 || eff.status == 4)
               {
                  if(!(eff.effectID > 400 && eff.effectID <= 420))
                  {
                     normal = eff;
                  }
               }
            }
         }
         var desc:String = "无";
         if(Boolean(normal))
         {
            desc = String(PetEffectXMLInfo.getEffect(normal.effectID,normal.args));
         }
         return desc;
      }
      
      private function setBar(bar:MovieClip, value:Number, totalValue:Number, btn:DisplayObject = null) : void
      {
         var frame:int = Math.floor(value / totalValue * bar.totalFrames);
         bar.gotoAndStop(frame);
         if(btn == null)
         {
            return;
         }
         var enable:Boolean = value < totalValue;
         if(btn is SimpleButton)
         {
            CommonUI.setEnabled(btn as InteractiveObject,enable,true);
         }
         else if(btn is MovieClip)
         {
            MovieClip(btn).gotoAndStop(enable ? 1 : 2);
         }
      }
      
      override public function destory() : void
      {
         SocketConnection.removeCmdListener(CommandID.EAT_SPECIAL_MEDICINE,this.onCmdListener);
         SocketConnection.removeCmdListener(CommandID.UP_GRADE_MEDICINE,this.onCmdListener);
         SocketConnection.removeCmdListener(CommandID.PET_RESET_NATURE,this.onCmdListener);
         SocketConnection.removeCmdListener(CommandID.EFFECT_STRENGTHEN,this.onCmdListener);
         this.TIPS = null;
         super.destory();
      }
   }
}
