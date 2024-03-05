package com.robot.app.petUpdate.updatePanel
{
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetSkillInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MoreSkillLabelController extends EventDispatcher
   {
      
      public static const EXCHANGE_SKILL:String = "exchange_skill";
       
      
      private var ui:MovieClip;
      
      private var skillLabelArray:Array;
      
      private var _info:PetInfo;
      
      private var _page:int;
      
      private var _newSkill:Array;
      
      private var isShow:Boolean;
      
      public var crtLabel:com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel;
      
      public function MoreSkillLabelController(param1:MovieClip)
      {
         var _loc3_:com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel = null;
         this.skillLabelArray = [];
         super();
         this.ui = param1;
         this.ui.addEventListener(MouseEvent.CLICK,this.onClicked);
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            _loc3_ = new com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel(this.ui["skill_" + _loc2_]);
            this.skillLabelArray.push(_loc3_);
            _loc3_.addEventListener(com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel.LABEL_SELECTED,this.onSelected);
            _loc2_++;
         }
         this.ui["show_or_hide"].mouseChildren = false;
         this.ui["show_or_hide"].buttonMode = true;
         ToolTipManager.add(this.ui["tip_btn"],"每次替换技能只要花费100赛尔豆！");
      }
      
      private function onSelected(param1:Event) : void
      {
         if(this.crtLabel)
         {
            this.crtLabel.reset();
         }
         this.crtLabel = param1.target as com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel;
      }
      
      private function getLabel(param1:int) : com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel
      {
         return this.skillLabelArray[param1];
      }
      
      private function onClicked(param1:MouseEvent) : void
      {
         switch(param1.target)
         {
            case this.ui["show_or_hide"]:
               if(this.isShow)
               {
                  this.hide();
               }
               else
               {
                  this.show();
               }
               break;
            case this.ui["exchange_btn"]:
               if(this.crtLabel)
               {
                  dispatchEvent(new Event(EXCHANGE_SKILL));
               }
               else
               {
                  Alarm.show("选择需要替换的技能！");
               }
               break;
            case this.ui["left_btn"]:
               if(this._page > 1)
               {
                  --this._page;
                  this.refreshPage();
               }
               break;
            case this.ui["right_btn"]:
               if(this._page < this.totalPage)
               {
                  ++this._page;
                  this.refreshPage();
               }
         }
      }
      
      public function initPanel(param1:PetInfo) : void
      {
         this.crtLabel = null;
         this._page = 1;
         this._info = param1;
         this._newSkill = PetXMLInfo.getSkillListForLv(this._info.id,this._info.level);
         if(this._info.id == 650 || this._info.id == 651 || this._info.id == 652)
         {
            PetManager.getBlackCanStudySkill(this._info.catchTime,this.onGetSkill);
         }
         else
         {
            PetManager.getCanStudySkill(this._info.catchTime,this.onGetSkill);
         }
      }
      
      private function onGetSkill(param1:Array) : void
      {
         var _loc2_:PetSkillInfo = null;
         if(this._info.id == 650 || this._info.id == 651 || this._info.id == 652)
         {
            this._newSkill = param1;
         }
         else
         {
            this._newSkill = this._newSkill.concat(param1);
         }
         for each(_loc2_ in this._info.skillArray)
         {
            if(this._newSkill.indexOf(_loc2_.id) != -1)
            {
               this._newSkill.splice(this._newSkill.indexOf(_loc2_.id),1);
            }
         }
         this._newSkill.reverse();
         this.refreshPage();
      }
      
      public function show() : void
      {
         this.isShow = true;
         this.ui.maskMC.visible = false;
         this.ui.x = 740;
      }
      
      public function hide() : void
      {
         this.isShow = false;
         this.ui.maskMC.visible = true;
         this.ui.x = 570;
      }
      
      private function refreshPage() : void
      {
         var _loc2_:int = 0;
         if(this.totalPage == 0)
         {
            this._page = 0;
         }
         this.ui["page_text"].text = this._page + "/" + this.totalPage;
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            _loc2_ = int(this._newSkill[this._page * 4 - 4 + _loc1_]);
            this.getLabel(_loc1_).show(this._info,_loc2_);
            _loc1_++;
         }
         this.crtLabel = null;
      }
      
      private function get totalPage() : int
      {
         var _loc1_:int = int(this._newSkill.length);
         if(_loc1_ % 4 == 0)
         {
            _loc1_ /= 4;
         }
         else
         {
            _loc1_ /= 4;
            _loc1_++;
         }
         return _loc1_;
      }
   }
}
