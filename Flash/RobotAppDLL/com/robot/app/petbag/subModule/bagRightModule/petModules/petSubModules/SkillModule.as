package com.robot.module.app.petBag.subModule.bagRightModule.petModules.petSubModules
{
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.skillBtn.SkillInfoTip;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   
   public class SkillModule extends PetBagSubModule
   {
       
      
      private var ATTRIBUTE_NAMES:Array;
      
      private var EV_ATTRIBUTE_NAMES:Array;
      
      private var TYPE_NAMES:Array;
      
      private var ATTRIBUTE_VALUE_NAMES:Array;
      
      private var _skillButtons:Array;
      
      private var _type:int;
      
      public function SkillModule()
      {
         var skillButon:SkillButton = null;
         this.ATTRIBUTE_NAMES = ["attack","defence","sa","sd","speed","hp"];
         this.EV_ATTRIBUTE_NAMES = ["ev_attack","ev_defence","ev_sa","ev_sd","ev_sp","ev_hp"];
         this.TYPE_NAMES = ["base","pve","pvp"];
         this.ATTRIBUTE_VALUE_NAMES = ["attack","defence","s_a","s_d","speed","hp"];
         this._skillButtons = [];
         super();
         initUi("skill");
         for(var j:int = 0; j < 4; j++)
         {
            skillButon = new SkillButton(_ui["skillMc" + j],j);
            this._skillButtons.push(skillButon);
         }
         this.onFocusPetChange();
         _eventCom.addMouseOverEvent(_ui["hideMove"],this.onHdideSkillMouseOver);
         _eventCom.addMouseOverEvent(_ui["hideMove"],this.onHdideSkillMouseOverOut);
      }
      
      override protected function onFocusPetChange() : void
      {
         this.updateSkills();
         this.type = 0;
         if(focusPet != null && Boolean(PetXMLInfo.getCanChangeAbility(focusPet.id)))
         {
            if(ActivityTimeControl.getIsinTime(403))
            {
               _ui["skillBtn"].gotoAndStop(1);
               if(SkillXMLInfo.getSPHideMoves(focusPet.id).length > 0)
               {
                  _ui["skillBtn"].gotoAndStop(3);
               }
            }
            else
            {
               _ui["skillBtn"].gotoAndStop(2);
               if(SkillXMLInfo.getSPHideMoves(focusPet.id).length > 0)
               {
                  _ui["skillBtn"].gotoAndStop(4);
               }
            }
         }
         else if(focusPet != null)
         {
            if(SkillXMLInfo.getSPHideMoves(focusPet.id).length > 0)
            {
               _ui["skillBtn"].gotoAndStop(3);
            }
            else
            {
               _ui["skillBtn"].gotoAndStop(1);
            }
         }
         setPanelEnable(_ui,focusPet != null);
      }
      
      private function updateAttributes() : void
      {
         var attributeName:String = null;
         var evAttributeName:String = null;
         for(var i:int = 0; i < this.ATTRIBUTE_NAMES.length; i++)
         {
            attributeName = String(this.ATTRIBUTE_NAMES[i]);
            evAttributeName = String(this.EV_ATTRIBUTE_NAMES[i]);
            if(focusPet == null)
            {
               _ui[evAttributeName].text = "";
            }
            else
            {
               _ui[evAttributeName].text = focusPet[evAttributeName] + "";
               _ui[attributeName].text = focusPet[this.TYPE_NAMES[this.type] + "_" + this.ATTRIBUTE_VALUE_NAMES[i] + "_total"] + "";
            }
         }
      }
      
      private function updateSkills() : void
      {
         var hideSkillId:int = 0;
         _ui["hideMove"].gotoAndStop(1);
         _ui["hideMove"]["notOpenTip"].visible = false;
         _ui["hideMove"]["noTip"].visible = false;
         _ui["hideMove"]["container"].visible = false;
         if(focusPet != null && SkillXMLInfo.hideMovesMap[focusPet.id] != null)
         {
            if(focusPet.hideSKill != null)
            {
               hideSkillId = int(focusPet.hideSKill.id);
               _ui["hideMove"]["container"].visible = true;
               _ui["hideMove"]["container"]["txt"].text = SkillXMLInfo.getName(hideSkillId);
            }
            else
            {
               _ui["hideMove"]["notOpenTip"].visible = true;
            }
         }
         else if(focusPet != null && SkillXMLInfo.hideMovesMap[focusPet.id] == null)
         {
            _ui["hideMove"]["noTip"].visible = true;
         }
         for(var i:int = 0; i < 4; i++)
         {
            (this._skillButtons[i] as SkillButton).update(focusPet);
         }
      }
      
      override protected function onClick(e:MouseEvent) : void
      {
         var btnName:String = String(e.target.name);
         var obj:* = {};
         obj.info = focusPet;
         switch(btnName)
         {
            case "skillBtn":
               StatManager.sendStat2014("2019新背包","点击更换技能按钮",StatManager.SYSTEM);
               EventManager.dispatchEvent(new Event("newseerChangeSkillBtnClick"));
               ModuleManager.showAppModule("PetSkillPanel",focusPet);
               break;
            case "changeAbilytyValuesBtn":
               ModuleManager.showAppModule("ChangeAbilityPanel",focusPet);
               break;
            case "additionalSkillBtn":
               ModuleManager.showAppModule("PetAdditionalSkillPanel",focusPet);
               break;
            case "detailInfo":
               ModuleManager.showAppModule("PetBagAbilityInfoPanel",{
                  "type":this.type,
                  "info":focusPet
               });
               break;
            case "changeType":
               ++this.type;
         }
      }
      
      private function onHdideSkillMouseOver(e:* = null) : void
      {
         if(focusPet == null || focusPet.hideSKill == null)
         {
            return;
         }
         SkillInfoTip.showPetInfoTip(focusPet,focusPet.hideSKill.id);
      }
      
      private function onHdideSkillMouseOverOut(e:* = null) : void
      {
         SkillInfoTip.hide();
      }
      
      override public function destory() : void
      {
         for(var i:int = 0; i < this._skillButtons.length; i++)
         {
            (this._skillButtons[i] as SkillButton).destory();
         }
         SkillInfoTip.hide();
         this._skillButtons = null;
         this.ATTRIBUTE_NAMES = null;
         this.EV_ATTRIBUTE_NAMES = null;
         this.TYPE_NAMES = null;
         this.ATTRIBUTE_VALUE_NAMES = null;
         super.destory();
      }
      
      public function get type() : int
      {
         return this._type;
      }
      
      public function set type(value:int) : void
      {
         this._type = value;
         if(this.type > 2)
         {
            this.type = 0;
         }
         _ui["typeMc"].gotoAndStop(this.type + 1);
         this.updateAttributes();
      }
   }
}

import com.robot.core.config.xml.CountermarkXMLInfo;
import com.robot.core.config.xml.PetXMLInfo;
import com.robot.core.config.xml.SkillXMLInfo;
import com.robot.core.info.pet.PetInfo;
import com.robot.core.manager.ItemManager;
import com.robot.core.manager.UIManager;
import com.robot.core.ui.skillBtn.SkillInfoTip;
import com.robot.core.utils.CommonUI;
import flash.display.MovieClip;
import flash.display.SimpleButton;
import flash.display.Sprite;
import flash.events.MouseEvent;
import flash.filters.GlowFilter;
import flash.geom.Point;
import org.taomee.utils.DisplayUtil;

class SkillButton
{
    
   
   private var _ui:MovieClip;
   
   private var _petInfo:PetInfo;
   
   private var _hasMarkEffect:Boolean;
   
   private var _skillID:int;
   
   private var _index:int;
   
   private var _pp:int;
   
   public function SkillButton(ui:MovieClip, index:int)
   {
      super();
      this._ui = ui;
      this._index = index;
      this._ui.addEventListener(MouseEvent.ROLL_OVER,this.overHandler);
      this._ui.addEventListener(MouseEvent.ROLL_OUT,this.outHandler);
   }
   
   public function update(petInfo:PetInfo) : void
   {
      this._petInfo = petInfo;
      this._ui.filters = [];
      this._skillID = 0;
      if(Boolean(this._petInfo) && this._index < this._petInfo.skillArray.length)
      {
         this._ui.gotoAndStop(1);
         this._ui.mouseEnabled = true;
         this._skillID = this._petInfo.skillArray[this._index].id;
         this._pp = this._petInfo.skillArray[this._index].pp;
         this._hasMarkEffect = this.isHaveSkillEffect(this._petInfo.abilityMark,this._skillID);
         if(!this._hasMarkEffect)
         {
            this._hasMarkEffect = this.isHaveSkillEffect(this._petInfo.skillMark,this._skillID);
         }
         if(!this._hasMarkEffect && Boolean(this._petInfo.commonMarkActived))
         {
            this._hasMarkEffect = this.isHaveSkillEffect(this._petInfo.commonMark,this._skillID);
         }
         if(this._hasMarkEffect)
         {
            this._ui.filters = [new GlowFilter(16711680)];
         }
         else
         {
            this._ui.filters = [];
         }
         this.updateInfo();
         this._ui.visible = true;
         this._ui.mouseChildren = this._ui.mouseEnabled = true;
      }
      else
      {
         this._ui.gotoAndStop(2);
         this._ui.mouseChildren = this._ui.mouseEnabled = false;
      }
   }
   
   private function updateInfo() : void
   {
      if(!this._petInfo || this._skillID == 0)
      {
         return;
      }
      this._ui["nameTxt"].text = SkillXMLInfo.getName(this._skillID);
      var typeID:uint = uint(SkillXMLInfo.getTypeID(this._skillID));
      var skillIcon:SimpleButton = UIManager.getButton("Icon_PetType_" + typeID);
      if(SkillXMLInfo.getCategory(this._skillID) == 4)
      {
         skillIcon = UIManager.getButton("Icon_PetType_prop");
      }
      DisplayUtil.removeAllChild(this._ui["iconMC"]);
      if(Boolean(skillIcon))
      {
         this._ui["iconMC"].addChild(skillIcon);
         skillIcon.scaleX = skillIcon.scaleY = 1.5;
         CommonUI.centerAlign(skillIcon,skillIcon.parent as Sprite,new Point(0,0));
      }
      this._ui["migTxt"].text = SkillXMLInfo.getDamage(this._skillID).toString();
      var maxPP:String = String(SkillXMLInfo.getPP(this._skillID).toString());
      if(this._pp == -1)
      {
         this._ui["ppTxt"].text = maxPP + "/" + maxPP;
      }
      else
      {
         this._ui["ppTxt"].text = this._pp.toString() + "/" + maxPP;
      }
   }
   
   private function isHaveSkillEffect(markID:int, skillID:int) : Boolean
   {
      var info:* = undefined;
      if(CountermarkXMLInfo.isUniversalMark(markID))
      {
         info = ItemManager.getUniversalMarkInfo(markID);
         if(info && info.bindMonID == this._petInfo.id && info.bindMoveID == skillID)
         {
            return true;
         }
      }
      if(CountermarkXMLInfo.isQuanxiaoMark(markID))
      {
         if(CountermarkXMLInfo.getSkillArr(CountermarkXMLInfo.getQuanxiaoSkillID(markID)).indexOf(skillID) > -1)
         {
            return true;
         }
      }
      if(CountermarkXMLInfo.isSkillMark(markID))
      {
         if(CountermarkXMLInfo.getSkillArr(markID).indexOf(skillID) > -1)
         {
            return true;
         }
      }
      return false;
   }
   
   private function overHandler(event:MouseEvent) : void
   {
      if(this._petInfo && this._hasMarkEffect && this._skillID > 0)
      {
         SkillInfoTip.showPetInfoTip(this._petInfo,this._skillID);
      }
      else if(this._skillID > 0)
      {
         if(Boolean(this._petInfo))
         {
            if(PetXMLInfo.isCombinationBonusPet(this._petInfo.id))
            {
               SkillInfoTip.showAdditionInfo(this._petInfo,this._skillID);
            }
            SkillInfoTip.showPetInfoTip(this._petInfo,this._skillID);
         }
         else
         {
            SkillInfoTip.show(this._skillID);
         }
      }
   }
   
   private function outHandler(event:MouseEvent) : void
   {
      SkillInfoTip.hide();
   }
   
   public function destory() : void
   {
      if(Boolean(this._ui["iconMC"]))
      {
         DisplayUtil.removeAllChild(this._ui["iconMC"]);
      }
      this._ui.removeEventListener(MouseEvent.ROLL_OVER,this.overHandler);
      this._ui.removeEventListener(MouseEvent.ROLL_OUT,this.outHandler);
      this._petInfo = null;
      this._ui = null;
   }
}
