package com.robot.app.petUpdate.updatePanel
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetSkillInfo;
   import com.robot.core.info.pet.update.UpdatePropInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LevelUpAndNewSkillPanel extends EventDispatcher
   {
      
      public static const CLOSE_PANEL:String = "close_lvup_panel";
       
      
      private var ui:MovieClip;
      
      private var oldPetMC:MovieClip;
      
      private var newPetMC:MovieClip;
      
      private var petIdUp:Boolean = false;
      
      private var skillLabelArray:Array;
      
      private var moreSkill:com.robot.app.petUpdate.updatePanel.MoreSkillLabelController;
      
      public var crtLabel:com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel;
      
      private var _info:PetInfo;
      
      public function LevelUpAndNewSkillPanel(param1:Function = null)
      {
         var fun:Function = param1;
         this.skillLabelArray = [];
         super();
         ResourceManager.getResource(ClientConfig.getActiveUrl("pet_level_up"),function(param1:DisplayObject):void
         {
            var _loc3_:com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel = null;
            ui = param1 as MovieClip;
            ui.addEventListener(MouseEvent.CLICK,onClicked);
            var _loc2_:int = 0;
            while(_loc2_ < 4)
            {
               _loc3_ = new com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel(ui["skill_" + _loc2_]);
               skillLabelArray.push(_loc3_);
               _loc3_.addEventListener(com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel.LABEL_SELECTED,onSelected);
               _loc2_++;
            }
            moreSkill = new com.robot.app.petUpdate.updatePanel.MoreSkillLabelController(ui["more_skill_mc"]);
            moreSkill.addEventListener(com.robot.app.petUpdate.updatePanel.MoreSkillLabelController.EXCHANGE_SKILL,onExchange);
            if(fun != null)
            {
               fun();
            }
         },"new_pet_lvup_getskill_ui");
      }
      
      private function onSelected(param1:Event) : void
      {
         if(this.crtLabel)
         {
            this.crtLabel.reset();
         }
         this.crtLabel = param1.target as com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel;
      }
      
      private function onExchange(param1:Event) : void
      {
         var e:Event = param1;
         if(this.crtLabel)
         {
            if(this.crtLabel.skillID > 100000)
            {
               Alert.show("更换此技能时，当前技能石会被摧毁，确定要更换这个技能吗？",function():void
               {
                  execute();
               });
            }
            else
            {
               this.execute();
            }
         }
         else
         {
            Alarm.show("选择需要被替换的技能！");
         }
      }
      
      private function execute() : void
      {
         if(this._info.id == 650 || this._info.id == 651 || this._info.id == 652)
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_BLACKPET_SKILL,this.onReplace);
            SocketConnection.send(CommandID.EXCHANGE_BLACKPET_SKILL,this._info.catchTime,this.crtLabel.skillID,this.moreSkill.crtLabel.skillID,1);
         }
         else
         {
            SocketConnection.addCmdListener(CommandID.PET_SKILL_SWICTH,this.onReplace);
            SocketConnection.send(CommandID.PET_SKILL_SWICTH,this._info.catchTime,1,1,this.crtLabel.skillID,this.moreSkill.crtLabel.skillID);
         }
      }
      
      private function onReplace(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.EXCHANGE_BLACKPET_SKILL,this.onReplace);
         SocketConnection.removeCmdListener(CommandID.PET_SKILL_SWICTH,this.onReplace);
         this.crtLabel = null;
         this.moreSkill.crtLabel = null;
         PetManager.storageUpDate(this._info.catchTime,function(param1:PetInfo):void
         {
            _info = param1;
            refreshSkills();
         });
      }
      
      private function getLabel(param1:int) : com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillLabel
      {
         return this.skillLabelArray[param1];
      }
      
      private function onClicked(param1:MouseEvent) : void
      {
         switch(param1.target)
         {
            case this.ui["ok_btn"]:
               DisplayUtil.removeAllChild(this.ui["pet_container"]);
               this.ui.parent.removeChild(this.ui);
               dispatchEvent(new Event(CLOSE_PANEL));
         }
      }
      
      public function closePanel() : void
      {
         if(this.ui)
         {
            DisplayUtil.removeAllChild(this.ui["pet_container"]);
            this.ui.parent.removeChild(this.ui);
            dispatchEvent(new Event(CLOSE_PANEL));
         }
      }
      
      public function show(param1:Array) : void
      {
         this.crtLabel = null;
         LevelManager.appLevel.addChild(this.ui);
         var _loc2_:UpdatePropInfo = param1[0];
         var _loc3_:PetInfo = param1[1];
         this._info = _loc3_;
         this.ui["id_text"].text = _loc2_.id;
         this.ui["name_text"].text = PetXMLInfo.getName(_loc2_.id);
         this.ui["lv_text"].text = _loc2_.level;
         this.ui["exp_text"].text = _loc2_.nextLvExp - _loc2_.exp;
         this.ui["hp_text"].text = _loc3_.maxHp;
         this.ui["atk_text"].text = _loc3_.attack;
         this.ui["def_text"].text = _loc3_.defence;
         this.ui["satk_text"].text = _loc3_.s_a;
         this.ui["sdef_text"].text = _loc3_.s_d;
         this.ui["spd_text"].text = _loc3_.speed;
         this.ui["hp_add_text"].text = "+" + (_loc2_.maxHp - _loc3_.maxHp);
         this.ui["atk_add_text"].text = "+" + (_loc2_.attack - _loc3_.attack);
         this.ui["def_add_text"].text = "+" + (_loc2_.defence - _loc3_.defence);
         this.ui["satk_add_text"].text = "+" + (_loc2_.sa - _loc3_.s_a);
         this.ui["sdef_add_text"].text = "+" + (_loc2_.sd - _loc3_.s_d);
         this.ui["spd_add_text"].text = "+" + (_loc2_.sp - _loc3_.speed);
         KTool.showScore(this.ui["crt_hp"],_loc2_.maxHp);
         KTool.showScore(this.ui["crt_atk"],_loc2_.attack);
         KTool.showScore(this.ui["crt_def"],_loc2_.defence);
         KTool.showScore(this.ui["crt_satk"],_loc2_.sa);
         KTool.showScore(this.ui["crt_sdef"],_loc2_.sd);
         KTool.showScore(this.ui["crt_spd"],_loc2_.sp);
         DisplayUtil.removeAllChild(this.ui["pet_container"]);
         ResourceManager.getResource(ClientConfig.getPetSwfPath(_loc3_.id,_loc3_.catchTime),this.onLoadOld,"pet");
         this.petIdUp = false;
         if(_loc2_.id != _loc3_.id)
         {
            this.petIdUp = true;
            ResourceManager.getResource(ClientConfig.getPetSwfPath(_loc2_.id,_loc2_.catchTime),this.onLoadNew,"pet");
         }
         this.refreshSkills();
      }
      
      private function refreshSkills() : void
      {
         PetManager.storageUpDate(this._info.catchTime,function(param1:PetInfo):void
         {
            var _loc4_:PetSkillInfo = null;
            moreSkill.initPanel(param1);
            _info = param1;
            var _loc2_:Array = _info.skillArray;
            var _loc3_:int = 0;
            while(_loc3_ < 4)
            {
               if(_loc3_ < _info.skillNum)
               {
                  _loc4_ = _loc2_[_loc3_];
                  getLabel(_loc3_).show(_info,_loc4_.id,_loc4_.pp);
               }
               else
               {
                  getLabel(_loc3_).show(_info,0);
               }
               _loc3_++;
            }
         });
      }
      
      private function onLoadOld(param1:DisplayObject) : void
      {
         this.oldPetMC = param1 as MovieClip;
         this.oldPetMC.gotoAndStop("down");
         this.ui["pet_container"].addChild(this.oldPetMC);
         if(!this.petIdUp)
         {
            this.ui["lvupmc"].play();
         }
      }
      
      private function onLoadNew(param1:DisplayObject) : void
      {
         var o:DisplayObject = param1;
         this.newPetMC = o as MovieClip;
         this.newPetMC.gotoAndStop("down");
         this.ui["lvupmc"].play();
         setTimeout(function():void
         {
            DisplayUtil.removeAllChild(ui["pet_container"]);
            ui["pet_container"].addChild(newPetMC);
         },1000);
      }
      
      public function get isShow() : Boolean
      {
         if(this.ui != null)
         {
            return Boolean(this.ui.parent);
         }
         return false;
      }
      
      public function showNewSkill(param1:Array, param2:Array) : void
      {
         var _loc3_:int = 0;
         while(_loc3_ < 4)
         {
            if(param1.indexOf(this.getLabel(_loc3_).skillID) != -1)
            {
               this.getLabel(_loc3_).showNew();
            }
            _loc3_++;
         }
         if(param2.length > 0)
         {
            this.moreSkill.show();
         }
      }
   }
}
