package com.robot.app2.control
{
   import com.robot.app.control.SetupsController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.petUpdate.updatePanel.LevelUpAndNewSkillController;
   import com.robot.app.task.control.TaskRoadOfDevildom;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.newSeer2020.NewSeerMaskUi;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.app2.systems.iconLevel.IconView;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.cmd.MailCmdListener;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.NewSeerGuideXmlInfo;
   import com.robot.core.controller.NewIconMovieController;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.CountermarkEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.MapProcessConfig;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.events.DataEvent;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.system.ApplicationDomain;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import flash.utils.clearInterval;
   import flash.utils.clearTimeout;
   import flash.utils.setInterval;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.module.IModule;
   
   public class NewSeerController2020
   {
      
      private static var _instance:com.robot.app2.control.NewSeerController2020;
      
      public static const NEWSEER_TASKD_PRO:String = "newseertaskdpro";
      
      public static const NEWSEER_JSD_CLICKED:String = "newseerjsdclicked";
      
      public static const SEER_FIGHT_ROUND:String = "seer_fight_round";
      
      public static const SEER_FIGHT_SKILLUSED:String = "seer_fight_skillused";
      
      public static var fightTeach:Boolean;
       
      
      public var nowStep:int = 0;
      
      private var dialogmc:MovieClip;
      
      private var _domain:ApplicationDomain;
      
      private var curobj:Object;
      
      private var curbigStep:Array;
      
      public var nowsmallStep:int;
      
      private var curbigStepObj:Object;
      
      private var lastStep:int = -1;
      
      private var maskSp:NewSeerMaskUi;
      
      private var guideMc:MovieClip;
      
      private var tipUi:MovieClip;
      
      private var isLoginRequest:Boolean;
      
      private var guideMovie:MovieClip;
      
      private var ui:MovieClip;
      
      private var curuiName:String;
      
      private var uis:Array;
      
      private var curNamses:Array;
      
      private var panelarr:Array;
      
      private var max0Clicked:Boolean;
      
      private var max2Clicked:Boolean;
      
      private var mcload:Loader;
      
      private var setTimeOutId:uint;
      
      private var arrowGuideMcS:Array;
      
      private var needWaitePanel:String = "";
      
      private var setIntervalId:int;
      
      public function NewSeerController2020()
      {
         this.panelarr = ["PetBag2017","CountermarkCenterNewPanel_2016","PetLevelUpPanel","PetAbilityUpPanel","PetAbilityUpNewPanel","PetTalentUpPanel","PetNatureUpPanel","EvHpUpPanel","PetExHpUpPanel","PetSkillPanel","CountermarkEquipPanel","NewItemBagMainPanel","PetStorage"];
         super();
         this.loadsourece();
      }
      
      public static function getinstance() : com.robot.app2.control.NewSeerController2020
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.NewSeerController2020();
         }
         return _instance;
      }
      
      private function addEvent() : void
      {
         LevelManager.stage.addEventListener(Event.ENTER_FRAME,this.enterFrameHandle);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.petFightHandle);
         EventManager.addEventListener(SEER_FIGHT_ROUND,this.fightRoundHandle);
         ModuleManager.addEventListener(ModuleManager.MODEL_SHOW,this.onModuleLoad);
         ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,this.onClosePanel);
         SocketConnection.addCmdListener(41392,this.itemOutHandle);
         EventManager.addEventListener("countermarkCenter_minGrid_Click",this.counterCenterGridClickHandle);
         EventManager.addEventListener("countermarkCenter_minGrid_up_Click",this.counterCenterGridupClickHandle);
         EventManager.addEventListener("countermarkCenter_minGrid_up_Suc",this.counterCenterGridupSucHandle);
         EventManager.addEventListener("newseer2020_pet_focus",this.newseerPetFocusHandle);
         EventManager.addEventListener("newseerBagModuleDateInited",this.newseerBagModuleDateInitedHandle);
         EventManager.addEventListener("newseer_petLevelUp_Alert",this.newseerpetLevelUpAlerthandle);
         EventManager.addEventListener("newseer_petLevelUp_Alert_Click",this.newseerpetLevelUpAlertClickhandle);
         EventManager.addEventListener("PetAbilityUp_Alarm_Show",this.PetAbilityUpAlarmShowHandle);
         EventManager.addEventListener("PetAbilityUp_Alarm_Click",this.PetAbilityUpAlarmClickHandle);
         EventManager.addEventListener("PetTalentUpAlertShow",this.PetTalentUpAlertShowHandle);
         EventManager.addEventListener("PetTalentUpAlertClick",this.PetTalentUpAlertClickHandle);
         EventManager.addEventListener("PetNatureOpenAlarmShow",this.PetNatureOpenAlarmShowHandle);
         EventManager.addEventListener("PetNatureOpenAlarmClick",this.PetNatureOpenAlarmClickHandle);
         EventManager.addEventListener("newseer_petFight_use_skill",this.newseerPetFightUseSkillHandle);
         EventManager.addEventListener("newSeer_fight_petBtn_click",this.newSeerfightpetBtnclickHandle);
         EventManager.addEventListener("newseer_fight_pet_select",this.newSeerfightpetSelectHandle);
         EventManager.addEventListener("newseer_fight_pet_change",this.newseerfightpetchangeHandle);
         EventManager.addEventListener("newSeer_fight_item_btn_click",this.newseerfightItemBtnHandle);
         EventManager.addEventListener("newseer_fight_item_use",this.newseerfightItemUseHandle);
         EventManager.addEventListener("newseer_petBag_checkDefaultPet",this.newseerpetBagcheckDefaultPetHandle);
         EventManager.addEventListener("newseerChangeSkillBtnClick",this.newseerChangeSkillBtnClickHandle);
         EventManager.addEventListener("changeskillSuccess",this.changeskillSuccessHandle);
         EventManager.addEventListener("abilityMarkHoleClick",this.abilityMarkHoleClickHandle);
         EventManager.addEventListener(CountermarkEvent.GRID_CLICK,this.mintGridClick);
         EventManager.addEventListener("newseerBindMarkAlertShow",this.newseerBindMarkAlertShowHandle);
         EventManager.addEventListener("newseerBindMarkAlertClick",this.newseerBindMarkAlertClickHandle);
         EventManager.addEventListener("newseerToolBarBagClick",this.newseerToolBarBagClickHandle);
         EventManager.addEventListener("newseerRoonViewClick",this.newseerRoonViewClickHandle);
         EventManager.addEventListener("newseerfittingRoomItemClick",this.newseerfittingRoomItemClick);
         EventManager.addEventListener("newseerFittingRoomSaveClick",this.newseerFittingRoomSaveClickHandle);
         EventManager.addEventListener("newseerFittingRoomAlarmClick",this.newseerFittingRoomAlarmClickHandle);
         EventManager.addEventListener("newseerpetStorageBtnClick",this.newseerpetStorageBtnClickHandle);
         EventManager.addEventListener("newseerPetStorageSearchAll",this.newseerPetStorageSearchAllHandle);
         EventManager.addEventListener("newseerSelectStoregePet",this.newseerSelectStoregePetHandle);
         EventManager.addEventListener("newseerStoragePetToBag",this.newseerStoragePetToBagHandle);
         EventManager.addEventListener("newseerPetStoragePetChoose",this.newseerPetStoragePetChooseHandle);
         EventManager.addEventListener("newseerStorageToInBag",this.newseerStorageToInBagHandle);
         FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,this.onStartFight);
      }
      
      private function enterFrameHandle(param1:Event) : void
      {
         var _loc2_:Array = null;
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc5_:MovieClip = null;
         if(Boolean(this.maskSp) && Boolean(this.maskSp.parent))
         {
            this.maskSp.parent.setChildIndex(this.maskSp,this.maskSp.parent.numChildren - 1);
         }
         if(Boolean(this.tipUi) && Boolean(this.tipUi.parent))
         {
            this.tipUi.parent.setChildIndex(this.tipUi,this.tipUi.parent.numChildren - 1);
         }
         if(Boolean(this.guideMc) && Boolean(this.guideMc.parent))
         {
            this.guideMc.parent.setChildIndex(this.guideMc,this.guideMc.parent.numChildren - 1);
            if(this.guideMc.currentFrame == 2)
            {
               if(this.guideMc["mc"].currentFrame == this.guideMc["mc"].totalFrames)
               {
                  this.guideMc.gotoAndStop(1);
                  _loc2_ = this.curobj.parm.split("|");
                  _loc3_ = _loc2_[0].split("_");
                  this.maskSp.drawMask(_loc3_);
               }
            }
         }
         if(this.arrowGuideMcS)
         {
            _loc4_ = 0;
            while(_loc4_ < this.arrowGuideMcS.length)
            {
               if((Boolean(_loc5_ = this.arrowGuideMcS[_loc4_])) && Boolean(_loc5_.parent))
               {
                  _loc5_.parent.setChildIndex(_loc5_,_loc5_.parent.numChildren - 1);
               }
               _loc4_++;
            }
         }
      }
      
      private function removeEvent() : void
      {
         LevelManager.stage.removeEventListener(Event.ENTER_FRAME,this.enterFrameHandle);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.petFightHandle);
         EventManager.removeEventListener(SEER_FIGHT_ROUND,this.fightRoundHandle);
         ModuleManager.removeListener(ModuleManager.MODEL_SHOW,this.onModuleLoad);
         ModuleManager.removeListener(ModuleManager.MODEL_CLOSE,this.onClosePanel);
         SocketConnection.removeCmdListener(1,this.itemOutHandle);
         EventManager.removeEventListener("countermarkCenter_minGrid_Click",this.counterCenterGridClickHandle);
         EventManager.removeEventListener("countermarkCenter_minGrid_up_Click",this.counterCenterGridupClickHandle);
         EventManager.removeEventListener("countermarkCenter_minGrid_up_Suc",this.counterCenterGridupSucHandle);
         EventManager.removeEventListener("newseer2020_pet_focus",this.newseerPetFocusHandle);
         EventManager.removeEventListener("newseerBagModuleDateInited",this.newseerBagModuleDateInitedHandle);
         EventManager.removeEventListener("newseer_petLevelUp_Alert",this.newseerpetLevelUpAlerthandle);
         EventManager.removeEventListener("newseer_petLevelUp_Alert_Click",this.newseerpetLevelUpAlertClickhandle);
         EventManager.removeEventListener("PetAbilityUp_Alarm_Show",this.PetAbilityUpAlarmShowHandle);
         EventManager.removeEventListener("PetAbilityUp_Alarm_Click",this.PetAbilityUpAlarmClickHandle);
         EventManager.removeEventListener("PetTalentUpAlertShow",this.PetTalentUpAlertShowHandle);
         EventManager.removeEventListener("PetTalentUpAlertClick",this.PetTalentUpAlertClickHandle);
         EventManager.removeEventListener("PetNatureOpenAlarmShow",this.PetNatureOpenAlarmShowHandle);
         EventManager.removeEventListener("PetNatureOpenAlarmClick",this.PetNatureOpenAlarmClickHandle);
         EventManager.removeEventListener("newseer_petFight_use_skill",this.newseerPetFightUseSkillHandle);
         EventManager.removeEventListener("newSeer_fight_petBtn_click",this.newSeerfightpetBtnclickHandle);
         EventManager.removeEventListener("newseer_fight_pet_select",this.newSeerfightpetSelectHandle);
         EventManager.removeEventListener("newseer_fight_pet_change",this.newseerfightpetchangeHandle);
         EventManager.removeEventListener("newSeer_fight_item_btn_click",this.newseerfightItemBtnHandle);
         EventManager.removeEventListener("newseer_fight_item_use",this.newseerfightItemUseHandle);
         EventManager.removeEventListener("newseerChangeSkillBtnClick",this.newseerChangeSkillBtnClickHandle);
         EventManager.removeEventListener("newseer_petBag_checkDefaultPet",this.newseerpetBagcheckDefaultPetHandle);
         EventManager.removeEventListener("changeskillSuccess",this.changeskillSuccessHandle);
         EventManager.removeEventListener("abilityMarkHoleClick",this.abilityMarkHoleClickHandle);
         EventManager.removeEventListener(CountermarkEvent.GRID_CLICK,this.mintGridClick);
         EventManager.removeEventListener("newseerBindMarkAlertShow",this.newseerBindMarkAlertShowHandle);
         EventManager.removeEventListener("newseerBindMarkAlertClick",this.newseerBindMarkAlertClickHandle);
         EventManager.removeEventListener("newseerToolBarBagClick",this.newseerToolBarBagClickHandle);
         EventManager.removeEventListener("newseerRoonViewClick",this.newseerRoonViewClickHandle);
         EventManager.removeEventListener("newseerfittingRoomItemClick",this.newseerfittingRoomItemClick);
         EventManager.removeEventListener("newseerFittingRoomSaveClick",this.newseerFittingRoomSaveClickHandle);
         EventManager.removeEventListener("newseerFittingRoomAlarmClick",this.newseerFittingRoomAlarmClickHandle);
         EventManager.removeEventListener("newseerpetStorageBtnClick",this.newseerpetStorageBtnClickHandle);
         EventManager.removeEventListener("newseerPetStorageSearchAll",this.newseerPetStorageSearchAllHandle);
         EventManager.removeEventListener("newseerSelectStoregePet",this.newseerSelectStoregePetHandle);
         EventManager.removeEventListener("newseerStoragePetToBag",this.newseerStoragePetToBagHandle);
         EventManager.removeEventListener("newseerPetStoragePetChoose",this.newseerPetStoragePetChooseHandle);
         EventManager.removeEventListener("newseerStorageToInBag",this.newseerStorageToInBagHandle);
         FightDispatcher.removeEventListener(PetFightEvent.START_FIGHT,this.onStartFight);
         LevelManager.appLevel.removeEventListener(MouseEvent.CLICK,this.uiclickHandle);
      }
      
      private function onStartFight(param1:*) : void
      {
         if(fightTeach)
         {
            this.donext(true);
         }
      }
      
      private function newseerStorageToInBagHandle(param1:DynamicEvent) : void
      {
         this.donext(true);
      }
      
      private function newseerPetStoragePetChooseHandle(param1:DynamicEvent) : void
      {
         var _loc2_:PetInfo = param1.paramObject as PetInfo;
         if(_loc2_.id == this.curobj.pid)
         {
            this.donext(true);
         }
      }
      
      private function newseerStoragePetToBagHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerSelectStoregePetHandle(param1:DynamicEvent) : void
      {
         if(param1.paramObject.id == this.curobj.pid)
         {
            this.donext(true);
         }
      }
      
      private function newseerPetStorageSearchAllHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerpetStorageBtnClickHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerFittingRoomAlarmClickHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerFittingRoomSaveClickHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerfittingRoomItemClick(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerRoonViewClickHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerToolBarBagClickHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerBindMarkAlertClickHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerBindMarkAlertShowHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function mintGridClick(param1:CountermarkEvent) : void
      {
      }
      
      private function abilityMarkHoleClickHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function changeskillSuccessHandle(param1:DynamicEvent) : void
      {
         this.donext(true);
      }
      
      private function newseerpetBagcheckDefaultPetHandle(param1:DynamicEvent) : void
      {
         var _loc2_:PetInfo = param1.paramObject as PetInfo;
         if(this.curbigStepObj)
         {
            if(this.curobj)
            {
               if(_loc2_.id == this.curobj.pid)
               {
                  this.donext(true);
               }
            }
         }
      }
      
      private function newseerChangeSkillBtnClickHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerfightItemUseHandle(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         this.removeMasks();
      }
      
      private function newseerfightItemBtnHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerfightpetchangeHandle(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         if(fightTeach)
         {
            this.removeMasks();
         }
      }
      
      private function newSeerfightpetSelectHandle(param1:Event) : void
      {
         if(fightTeach)
         {
            this.donext(true);
         }
      }
      
      private function newSeerfightpetBtnclickHandle(param1:Event) : void
      {
         if(fightTeach)
         {
            this.donext(true);
         }
      }
      
      private function newseerPetFightUseSkillHandle(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         if(this.curbigStepObj)
         {
            if(this.curobj)
            {
               if(this.curobj.skillId == _loc2_)
               {
                  this.removeMasks();
               }
            }
         }
      }
      
      private function PetNatureOpenAlarmShowHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function PetNatureOpenAlarmClickHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function PetTalentUpAlertShowHandle(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         if(_loc2_ != 300791)
         {
            if(_loc2_ != 300082)
            {
               if(_loc2_ == 300021)
               {
               }
            }
         }
         this.donext(true);
      }
      
      private function PetTalentUpAlertClickHandle(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         if(_loc2_ != 300791)
         {
            if(_loc2_ != 300082)
            {
               if(_loc2_ == 300021)
               {
               }
            }
         }
         this.donext(true);
      }
      
      private function PetAbilityUpAlarmClickHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function PetAbilityUpAlarmShowHandle(param1:Event) : void
      {
         this.donext(true);
      }
      
      private function newseerpetLevelUpAlertClickhandle(param1:DynamicEvent) : void
      {
         this.donext(true);
      }
      
      private function newseerpetLevelUpAlerthandle(param1:DynamicEvent) : void
      {
         var _loc2_:PetInfo = param1.paramObject as PetInfo;
         this.donext(true);
      }
      
      private function newseerBagModuleDateInitedHandle(param1:Event) : void
      {
         var appmodule:IModule = null;
         var result:int = 0;
         var infos:Array = null;
         var petsArr:Array = null;
         var e:Event = param1;
         if(this.curbigStepObj)
         {
            if(this.curobj)
            {
               this.donext(true);
               if(ModuleManager.hasModule(ClientConfig.getAppModule("PetBag2017")))
               {
                  appmodule = ModuleManager.getModule(ClientConfig.getAppModule("PetBag2017")).content;
                  if(this.curobj.pid > 0)
                  {
                     infos = PetManager.infos;
                     if(infos[this.curobj.index].id != this.curobj.pid)
                     {
                        petsArr = PetManager.getBagPetsById(this.curobj.pid);
                        PetManager.exchangePetPosition(infos[this.curobj.index].catchTime,petsArr[0].catchTime,1).then(function(param1:SocketEvent):void
                        {
                           var _loc2_:int = param1.data as int;
                           if(_loc2_ != 0)
                           {
                              Alarm2.show("操作失败！");
                           }
                        });
                     }
                  }
                  result = int(appmodule["moduleData"].sortPettoIndex(this.curobj.pid,this.curobj.index));
                  if(result == 1)
                  {
                  }
               }
            }
         }
      }
      
      private function newseerPetFocusHandle(param1:DynamicEvent) : void
      {
         var _loc2_:PetInfo = param1.paramObject as PetInfo;
         if(this.curbigStepObj)
         {
            if(this.curobj)
            {
               if(_loc2_.id != this.curobj.pid)
               {
                  this.maskSpClick(null);
               }
               else if(this.curobj.playEff == "" || this.curobj.playEff == "undefined")
               {
                  this.donext(true);
               }
            }
         }
      }
      
      private function counterCenterGridupSucHandle(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         if(_loc2_ < 5)
         {
            this.nowsmallStep -= 3;
            this.donext(true);
         }
         else
         {
            this.donext(true);
         }
      }
      
      private function counterCenterGridupClickHandle(param1:DynamicEvent) : void
      {
         this.donext(true);
      }
      
      private function counterCenterGridClickHandle(param1:DynamicEvent) : void
      {
         this.donext(true);
      }
      
      private function clearuis() : void
      {
         this.uis = null;
         this.curNamses = null;
      }
      
      private function onModuleLoad(param1:DataEvent) : void
      {
         LevelManager.appLevel.removeEventListener(MouseEvent.CLICK,this.uiclickHandle);
         this.clearuis();
         this.uis = [];
         this.curNamses = [];
         var _loc2_:String = param1.data;
         if(_loc2_.indexOf("PetAbilityUpNewPanel") != -1)
         {
            this.max0Clicked = false;
            this.max2Clicked = false;
         }
         else if(_loc2_.indexOf("NewSeerGetItems") != -1)
         {
            LevelManager.openMouseEvent();
         }
         if(this.needWaitePanel != "" && _loc2_.indexOf(this.needWaitePanel) != -1)
         {
            this.donext(true);
         }
         var _loc3_:int = 0;
         while(_loc3_ < this.panelarr.length)
         {
            if(ModuleManager.hasModule(ClientConfig.getAppModule(this.panelarr[_loc3_])))
            {
               this.ui = ModuleManager.getModule(ClientConfig.getAppModule(this.panelarr[_loc3_])).content["ui"];
               this.curuiName = this.panelarr[_loc3_];
               this.uis.push(this.ui);
               this.curNamses.push(this.curuiName);
            }
            _loc3_++;
         }
         if(this.uis.length)
         {
            LevelManager.appLevel.addEventListener(MouseEvent.CLICK,this.uiclickHandle);
         }
      }
      
      private function uiclickHandle(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         if(_loc2_ == "countermark" && this.curNamses.indexOf("PetBag2017") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "upBtn" && this.curNamses.indexOf("CountermarkCenterNewPanel_2016") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "close" && this.curNamses.indexOf("CountermarkCenterNewPanel_2016") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "levelUp" && this.curNamses.indexOf("PetBag2017") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "closeBtn" && this.curNamses.indexOf("PetLevelUpPanel") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "closeBtn" && this.curNamses.indexOf("PetBag2017") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "evUp" && this.curNamses.indexOf("PetBag2017") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "go" && this.curNamses.indexOf("PetAbilityUpPanel") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "max_0" && this.curNamses.indexOf("PetAbilityUpNewPanel") != -1)
         {
            this.max0Clicked = true;
            if(this.max2Clicked)
            {
               this.donext(true);
            }
         }
         else if(_loc2_ == "max_2" && this.curNamses.indexOf("PetAbilityUpNewPanel") != -1)
         {
            this.max2Clicked = true;
            if(this.max0Clicked)
            {
               this.donext(true);
            }
         }
         else if(_loc2_ == "close" && this.curNamses.indexOf("PetAbilityUpNewPanel") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "dvUp" && this.curNamses.indexOf("PetBag2017") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "closeBtn" && this.curNamses.indexOf("PetTalentUpPanel") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "natureBtn" && this.curNamses.indexOf("PetBag2017") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "closeBtn" && this.curNamses.indexOf("PetNatureUpPanel") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "exHpUp" && this.curNamses.indexOf("PetBag2017") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "closeBtn" && this.curNamses.indexOf("EvHpUpPanel") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "closeBtn" && this.curNamses.indexOf("PetExHpUpPanel") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "prev" && this.curNamses.indexOf("PetSkillPanel") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "close" && this.curNamses.indexOf("PetSkillPanel") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "close" && this.curNamses.indexOf("CountermarkEquipPanel") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "close" && this.curNamses.indexOf("NewItemBagMainPanel") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "closeBtn" && this.curNamses.indexOf("PetStorage") != -1)
         {
            this.donext(true);
         }
         else if(_loc2_ == "closeBtn" && this.curNamses.indexOf("PetStorage") != -1)
         {
            this.donext(true);
         }
      }
      
      private function onClosePanel(param1:DataEvent) : void
      {
         var _loc3_:int = 0;
         var _loc2_:String = param1.data as String;
         if(_loc2_.indexOf("NewSeerGetItems") != -1)
         {
            this.updatestate();
         }
         if(Boolean(this.curuiName) && _loc2_.indexOf(this.curuiName) == -1)
         {
            if(Boolean(this.curNamses) && Boolean(this.uis))
            {
               _loc3_ = this.curNamses.indexOf(this.curuiName);
               if(_loc3_ != -1)
               {
                  this.uis.splice(_loc3_,1);
                  this.curNamses.splice(_loc3_,1);
               }
            }
            return;
         }
      }
      
      private function itemOutHandle(param1:SocketEvent) : void
      {
         var type:int = 0;
         var arr:Array = null;
         var realType:Array = null;
         var len:int = 0;
         var i:int = 0;
         var obj:Object = null;
         var e:SocketEvent = param1;
         var byte:ByteArray = e.data as ByteArray;
         byte.position = 0;
         type = int(byte.readUnsignedInt());
         arr = [];
         if(type == 1)
         {
            len = int(byte.readUnsignedInt());
            i = 0;
            while(i < len)
            {
               obj = {};
               obj.id = byte.readUnsignedInt();
               obj.num = byte.readUnsignedInt();
               arr.push(obj);
               i++;
            }
         }
         realType = [1,3,2,5,6,4];
         PetManager.upDate().then(function():void
         {
            ModuleManager.showAppModule("NewSeerGetItems" + realType[type - 1] + "Panel",type == 1 ? arr : null);
         });
      }
      
      private function petFightHandle(param1:*) : void
      {
         var e:* = param1;
         fightTeach = false;
         this.updatestate(false,function():void
         {
         });
      }
      
      private function fightRoundHandle(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         if(MainManager.isDebug)
         {
            if(this.nowStep == 1 && this.nowsmallStep == this.curbigStep.length && _loc2_ > 1)
            {
               this.nowsmallStep = this.curbigStep.length - 1;
               this.donext(true);
            }
            else if(this.nowStep == 6 && this.nowsmallStep == this.curbigStep.length && _loc2_ > 1)
            {
               this.nowsmallStep = this.curbigStep.length - 1;
               this.donext(true);
            }
            else if(fightTeach && _loc2_ > 1)
            {
               this.donext(true);
            }
         }
         else if(this.nowStep == 1 && this.nowsmallStep == this.curbigStep.length && _loc2_ > 0)
         {
            this.nowsmallStep = this.curbigStep.length - 1;
            this.donext(true);
         }
         else if(this.nowStep == 6 && this.nowsmallStep == this.curbigStep.length && _loc2_ > 0)
         {
            this.nowsmallStep = this.curbigStep.length - 1;
            this.donext(true);
         }
         else if(fightTeach && _loc2_ > 0)
         {
            this.donext(true);
         }
      }
      
      private function loadsourece() : void
      {
         this.mcload = new Loader();
         this.mcload.contentLoaderInfo.addEventListener(Event.COMPLETE,this.onLoad);
         this.mcload.load(new URLRequest(ClientConfig.getAppResource("update/newGuide2020Mc")));
      }
      
      private function onLoad(param1:Event) : void
      {
         this.mcload.contentLoaderInfo.removeEventListener(Event.COMPLETE,this.onLoad);
         this._domain = this.mcload.contentLoaderInfo.applicationDomain;
         this.guideMovie = this.getSymbolFromLib("guideMovie");
         this.dialogmc = this.getSymbolFromLib("dialogleft");
         this.guideMc = this.getSymbolFromLib("guideMc");
         this.tipUi = this.getSymbolFromLib("tipUi");
         this.addEvent();
         this.updatestate(true);
      }
      
      public function getSymbolFromLib(param1:String) : *
      {
         var _loc2_:Object = null;
         var _loc3_:Class = this._domain.getDefinition(param1) as Class;
         if(_loc3_)
         {
            _loc2_ = new _loc3_();
         }
         return _loc2_;
      }
      
      public function addDrawMaskSp(param1:Object) : void
      {
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc6_:IModule = null;
         var _loc7_:IModule = null;
         var _loc2_:Array = param1.parm.split("|");
         var _loc3_:Array = _loc2_[0].split("_");
         if(this.maskSp == null)
         {
            this.maskSp = new NewSeerMaskUi();
         }
         this.maskSp.drawMask(_loc3_);
         this.maskSp.addEventListener(MouseEvent.CLICK,this.maskSpClick);
         this.maskSp.x = 0;
         this.maskSp.y = 0;
         LevelManager.stage.addChild(this.maskSp);
         this.showTipUi(_loc2_[1]);
         this.showGuideMcArrow(_loc2_[2]);
         this.showGuideMc(_loc2_[3]);
         if(this.curobj.playEff != "" && this.curobj.playEff != "undefined")
         {
            if((_loc5_ = (_loc4_ = String(this.curobj.playEff)).split(":"))[0] == "pet")
            {
               if(ModuleManager.hasModule(ClientConfig.getAppModule("PetBag2017")))
               {
                  (_loc6_ = ModuleManager.getModule(ClientConfig.getAppModule("PetBag2017")).content)["playMoveEffectMovie"](_loc5_[1],_loc5_[2],this.getSymbolFromLib("mouseMc"));
               }
            }
            else if(_loc5_[0] == "skill")
            {
               if(ModuleManager.hasModule(ClientConfig.getAppModule("PetSkillPanel")))
               {
                  (_loc7_ = ModuleManager.getModule(ClientConfig.getAppModule("PetSkillPanel")).content)["playMoveEffectMovie"](_loc5_[1],_loc5_[2],this.getSymbolFromLib("mouseMc"));
               }
            }
         }
      }
      
      private function removeEffect() : void
      {
         var _loc1_:IModule = null;
         if(ModuleManager.hasModule(ClientConfig.getAppModule("PetBag2017")))
         {
            _loc1_ = ModuleManager.getModule(ClientConfig.getAppModule("PetBag2017")).content;
            _loc1_["removeMoveEffectMovie"]();
         }
      }
      
      private function maskSpClick(param1:MouseEvent) : void
      {
         var _loc2_:Array = null;
         var _loc3_:Array = null;
         if(Boolean(this.guideMc) && Boolean(this.guideMc.parent))
         {
            if(this.guideMc.currentFrame == 1)
            {
               this.guideMc.gotoAndStop(2);
               this.guideMc["mc"].gotoAndPlay(1);
               _loc2_ = this.curobj.parm.split("|");
               _loc3_ = _loc2_[0].split("_");
               this.maskSp.drawMask(_loc3_,0.4);
            }
         }
      }
      
      private function removeDrawMaskSp() : void
      {
         if(this.maskSp)
         {
            this.maskSp.removeEventListener(MouseEvent.CLICK,this.maskSpClick);
            if(this.maskSp.parent)
            {
               this.maskSp.parent.removeChild(this.maskSp);
            }
         }
      }
      
      private function clearTimeOutHandle() : void
      {
         clearTimeout(this.setTimeOutId);
      }
      
      private function showGuideMc(param1:String) : void
      {
         var par:Array = null;
         var str:String = param1;
         par = str.split(",");
         if(int(par[0]) == 0)
         {
            return;
         }
         this.setTimeOutId = setTimeout(function():void
         {
            if(int(par[1]) == 1)
            {
               guideMc = getSymbolFromLib("guideMc");
            }
            else
            {
               guideMc = getSymbolFromLib("guideMc1");
            }
            if(guideMc)
            {
               guideMc.gotoAndStop(1);
               guideMc.mouseChildren = guideMc.mouseEnabled = false;
               if(!guideMc.parent)
               {
                  LevelManager.stage.addChild(guideMc);
               }
               guideMc.x = int(par[2]);
               guideMc.y = int(par[3]);
               guideMc.scaleX = guideMc.scaleY = Number(par[4]);
            }
         },int(par[0]));
      }
      
      private function removeGuideMc() : void
      {
         this.clearTimeOutHandle();
         if(this.guideMc)
         {
            if(this.guideMc.parent)
            {
               this.guideMc.parent.removeChild(this.guideMc);
            }
         }
      }
      
      private function showGuideMcArrow(param1:String) : void
      {
         var _loc4_:Array = null;
         var _loc5_:MovieClip = null;
         var _loc2_:Array = param1.split("_");
         if(_loc2_[0] == "0")
         {
            return;
         }
         this.removeGuideMcArrow();
         this.arrowGuideMcS = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc4_ = _loc2_[_loc3_].split(",");
            _loc5_ = this.getSymbolFromLib("guideMc2");
            _loc5_.mouseChildren = _loc5_.mouseEnabled = false;
            if(!_loc5_.parent)
            {
               LevelManager.stage.addChild(_loc5_);
            }
            _loc5_.x = int(_loc4_[0]);
            _loc5_.y = int(_loc4_[1]);
            _loc5_.rotation = int(_loc4_[2]);
            this.arrowGuideMcS.push(_loc5_);
            _loc3_++;
         }
      }
      
      private function removeGuideMcArrow() : void
      {
         var _loc1_:int = 0;
         var _loc2_:MovieClip = null;
         if(this.arrowGuideMcS)
         {
            _loc1_ = 0;
            while(_loc1_ < this.arrowGuideMcS.length)
            {
               _loc2_ = this.arrowGuideMcS[_loc1_];
               if(_loc2_)
               {
                  if(_loc2_.parent)
                  {
                     _loc2_.parent.removeChild(_loc2_);
                  }
               }
               _loc2_ = null;
               _loc1_++;
            }
            this.arrowGuideMcS = null;
         }
      }
      
      private function showTipUi(param1:String) : void
      {
         var _loc2_:Array = null;
         var _loc3_:Object = null;
         if(this.tipUi)
         {
            _loc2_ = param1.split(",");
            if(int(_loc2_[0]) == 0)
            {
               return;
            }
            _loc3_ = NewSeerGuideXmlInfo.getTip(int(_loc2_[0]));
            this.tipUi.mouseChildren = this.tipUi.mouseEnabled = false;
            if(_loc3_)
            {
               if(!this.tipUi.parent)
               {
                  LevelManager.stage.addChild(this.tipUi);
               }
               this.tipUi["title"].text = _loc3_.title;
               this.tipUi["txt"].text = _loc3_.tip;
               this.tipUi.x = int(_loc2_[1]);
               this.tipUi.y = int(_loc2_[2]);
            }
         }
      }
      
      private function removeTipUi() : void
      {
         if(this.tipUi)
         {
            if(this.tipUi.parent)
            {
               this.tipUi.parent.removeChild(this.tipUi);
            }
         }
      }
      
      private function playAnimateMovie(param1:Object) : void
      {
         var obj:Object = param1;
         LevelManager.closeAllMouseEvent();
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(obj.parm),function():void
         {
            fullMovieOver();
         });
      }
      
      private function fullMovieOver(param1:Boolean = false) : void
      {
         LevelManager.openMouseEvent();
         if(param1)
         {
            if(AnimateManager.AnimatePlaying)
            {
               AnimateManager.destoryFullAnimate();
            }
            return;
         }
         this.donext();
      }
      
      public function donext(param1:Boolean = false) : void
      {
         if(this.curbigStep == null)
         {
            return;
         }
         var _loc2_:int = this.nowsmallStep + 1;
         if(_loc2_ > this.curbigStep.length)
         {
            this.removeMasks();
            if(this.curbigStepObj.auto == 1)
            {
               this.updatestate(false);
            }
         }
         else if(Boolean(this.curbigStep[_loc2_ - 1].auto) || param1)
         {
            this.dealnewseerTask(this.nowStep,_loc2_,param1);
         }
      }
      
      private function removeMasks() : void
      {
         this.needWaitePanel = "";
         this.removeDrawMaskSp();
         this.removeGuideMc();
         this.removeGuideMcArrow();
         this.removeTipUi();
         this.removeDialogMc();
         this.removeEffect();
      }
      
      public function dealnewseerTask(param1:int, param2:int, param3:Boolean = false) : void
      {
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc7_:Object = null;
         var _loc9_:Array = null;
         var _loc10_:Array = null;
         var _loc11_:Object = null;
         var _loc12_:String = null;
         var _loc13_:String = null;
         if(this.nowStep != param1 || this.nowStep == param1 && param2 != this.nowsmallStep + 1)
         {
            return;
         }
         var _loc4_:Object;
         if((_loc4_ = this.curbigStep[param2 - 1]).waitPanel != "" && _loc4_.waitPanel != "undefined")
         {
            this.needWaitePanel = _loc4_.waitPanel;
            if(!(ModuleManager.hasModule(ClientConfig.getAppModule(this.needWaitePanel)) && ModuleManager.getModule(ClientConfig.getAppModule(this.needWaitePanel)).content))
            {
               return;
            }
         }
         this.removeMasks();
         this.nowsmallStep = param2;
         this.curobj = this.curbigStep[this.nowsmallStep - 1];
         var _loc8_:Boolean = true;
         if(this.nowsmallStep == 1)
         {
            if(param1 == 1)
            {
               _loc8_ = false;
            }
            else
            {
               _loc5_ = param1 - 1;
               _loc6_ = int((_loc9_ = (_loc7_ = NewSeerGuideXmlInfo.getBigStep(_loc5_)).arr).length);
            }
         }
         else
         {
            _loc5_ = param1;
            _loc6_ = this.nowsmallStep - 1;
         }
         if(_loc8_)
         {
            if((_loc11_ = (_loc10_ = (_loc7_ = NewSeerGuideXmlInfo.getBigStep(_loc5_)).arr)[_loc6_ - 1]).cltMonitoringDatac != "" && _loc11_.cltMonitoringDatac != "undefined")
            {
               _loc12_ = _loc11_.cltMonitoringDataa != "" && _loc11_.cltMonitoringDataa != "undefined" ? String(_loc11_.cltMonitoringDataa) : "新手任务2021版";
               _loc13_ = _loc11_.cltMonitoringDatab != "" && _loc11_.cltMonitoringDatab != "undefined" ? String(_loc11_.cltMonitoringDatab) : "20210326";
               StatManager.sendStat2014(_loc13_,_loc11_.cltMonitoringDatac,_loc12_);
            }
         }
         if(this.curobj.skip == "1" && this.lastStep != -1)
         {
            this.donext(true);
            return;
         }
         switch(this.curobj.type)
         {
            case 1:
               this.playAnimateMovie(this.curobj);
               break;
            case 2:
               if(this.curobj.closeother == 1)
               {
                  LevelUpAndNewSkillController.instance.closePanel();
                  ModuleManager.hideAllModule();
                  ModuleManager.destroyAll();
               }
               ModuleManager.showAppModule(this.curobj.parm);
               if(this.curobj.donext == 1)
               {
                  this.donext();
               }
               break;
            case 3:
               this.showDialog(this.curobj);
               break;
            case 4:
               this.sendSocket(this.curobj);
               break;
            case 5:
               this.addDrawMaskSp(this.curobj);
               if(this.curobj.auto == 1)
               {
                  this.donext();
               }
               break;
            case 6:
               fightTeach = this.curobj.teach == 1;
               this.tryFight(this.curobj);
               break;
            case 7:
               fightTeach = this.curobj.teach == 1;
               this.bossFight(this.curobj);
               break;
            case 8:
               this.dealNpc(this.curobj.parm);
               this.donext();
         }
      }
      
      private function sendSocket(param1:Object) : void
      {
         var par:String;
         var parArr:Array;
         var sParm:Array;
         var j:int;
         var obj:Object = param1;
         LevelManager.closeAllMouseEvent();
         par = String(obj.parm);
         parArr = par.split(":");
         sParm = [];
         j = 1;
         while(j < parArr.length)
         {
            sParm.push(int(parArr[j]));
            j++;
         }
         SocketConnection.sendByQueue(int(parArr[0]),sParm,function(param1:SocketEvent):void
         {
         },function(param1:*):void
         {
         });
      }
      
      private function showDialog(param1:Object) : void
      {
         var _loc3_:String = null;
         var _loc4_:String = null;
         var _loc2_:Object = NewSeerGuideXmlInfo.getDialog(int(param1.parm));
         if(_loc2_.side == 1)
         {
            this.dialogmc = this.getSymbolFromLib("dialogleft");
         }
         else
         {
            this.dialogmc = this.getSymbolFromLib("dialogright");
         }
         if(this.dialogmc)
         {
            if(!this.dialogmc.parent)
            {
               LevelManager.stage.addChild(this.dialogmc);
            }
            this.dialogmc["head"].gotoAndStop(_loc2_.head);
            this.dialogmc["nameMc"].gotoAndStop(_loc2_.head);
            _loc3_ = String(_loc2_.question);
            _loc3_ = _loc3_.replace("$",MainManager.actorInfo.nick);
            this.dialogmc["txt"].text = _loc3_;
            if((_loc4_ = (_loc4_ = String(_loc2_.answer)).replace("$",MainManager.actorInfo.nick)) == "undefind" || _loc4_ == "")
            {
               this.dialogmc["txt1"].text = "";
               this.dialogmc["next"].visible = true;
               this.dialogmc["line"].visible = false;
            }
            else
            {
               this.dialogmc["txt1"].text = _loc4_;
               this.dialogmc["next"].visible = false;
               this.dialogmc["line"].visible = true;
            }
            this.dialogmc["line"].width = (this.dialogmc["txt1"] as TextField).textWidth + 5;
            if(!this.dialogmc.hasEventListener(MouseEvent.CLICK))
            {
               this.dialogmc.addEventListener(MouseEvent.CLICK,this.diaLogClickHandle);
            }
         }
      }
      
      private function diaLogClickHandle(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "go":
            case "next":
               this.removeDialogMc();
               this.donext();
         }
      }
      
      private function removeDialogMc() : void
      {
         if(this.dialogmc)
         {
            if(this.dialogmc.parent)
            {
               this.dialogmc.parent.removeChild(this.dialogmc);
            }
            this.dialogmc.removeEventListener(MouseEvent.CLICK,this.diaLogClickHandle);
         }
      }
      
      private function tryFight(param1:Object) : void
      {
         FightManager.tryFight(int(param1.parm),[0,0,0,0,0]);
      }
      
      private function bossFight(param1:Object) : void
      {
         FightManager.fightNoMapBoss("",int(param1.parm));
      }
      
      private function dealToolbar(param1:String) : void
      {
         var _loc2_:Array = [];
         if(param1 != null && param1 != "")
         {
            ToolBarController.panel.hidebtnByNames(param1.split(":"));
         }
         else
         {
            ToolBarController.panel.hidebtnByNames(_loc2_);
         }
      }
      
      private function dealNpc(param1:String) : void
      {
         var _loc2_:Array = [];
         if(param1 != null && param1 != "")
         {
            _loc2_ = param1.split(",");
         }
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == 11909)
         {
            if(MapProcessConfig.currentProcessInstance)
            {
               MapProcessConfig.currentProcessInstance["showNpc"](_loc2_);
            }
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
         }
      }
      
      private function showGuideMovie() : void
      {
         if(this.guideMovie)
         {
            LevelManager.stage.addChild(this.guideMovie);
            this.guideMovie.gotoAndStop(1);
            this.setIntervalId = setInterval(this.guideMovieFrameHandle,5000);
         }
      }
      
      private function hideGuideMovie() : void
      {
         clearInterval(this.setIntervalId);
         if(this.guideMovie)
         {
            if(this.guideMovie.parent)
            {
               this.guideMovie.parent.removeChild(this.guideMovie);
            }
            this.guideMovie = null;
            NewIconMovieController.getinstance().showGuideMovie(1);
         }
      }
      
      private function guideMovieFrameHandle() : void
      {
         var _loc1_:int = this.guideMovie.currentFrame;
         var _loc2_:int = this.guideMovie.totalFrames;
         _loc1_++;
         this.guideMovie.gotoAndStop(_loc1_);
         if(_loc1_ > _loc2_)
         {
            this.hideGuideMovie();
         }
      }
      
      private function updatestate(param1:Boolean = false, param2:Function = null) : void
      {
         var boo:Boolean = param1;
         var func:Function = param2;
         this.isLoginRequest = boo;
         LevelManager.closeAllMouseEvent();
         KTool.getMultiValue([120200,120201],function(param1:Array):void
         {
            var arr:Array = param1;
            NewSeerTaskController.newseer2020Forever = arr[0];
            if(newseerTaskIsOver(arr[0],arr[1]))
            {
               getNono();
               TaskRoadOfDevildom.getInstance().checkMainTask();
               MailCmdListener.isShowTip = false;
               LevelManager.openMouseEvent();
               LevelManager.iconLevel.y = 0;
               SetupsController.newseerover();
               dealToolbar("");
               IconController.eachIcon(function(param1:IconView):void
               {
                  IconController.hideIcon(param1.url);
                  IconController.showIcon(param1.url);
               });
               ToolBarController.panel.hidevipLock();
               ToolBarController.panel.hidesetLock();
               ToolBarController.panel.hideMapLock();
               removeMasks();
               destroy();
               MapManager.changeMapWithCallback(1,function():void
               {
                  showGuideMovie();
               });
            }
            else
            {
               KTool.changeMapWithCallBack(11909,function():void
               {
                  dealNpc("");
                  nowStep = arr[0] + 1;
                  nowsmallStep = 0;
                  if(!isLoginRequest)
                  {
                     lastStep = nowStep - 1;
                  }
                  curbigStepObj = NewSeerGuideXmlInfo.getBigStep(nowStep);
                  curbigStep = curbigStepObj.arr;
                  dealNpc(curbigStepObj.npcs);
                  dealToolbar(curbigStepObj.tool);
                  if(isLoginRequest)
                  {
                     donext(true);
                  }
                  else
                  {
                     donext();
                  }
                  LevelManager.openMouseEvent();
               });
            }
            if(func != null)
            {
               func();
            }
         });
      }
      
      private function getNono() : void
      {
         if(MainManager.actorInfo.hasNono == false)
         {
            SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_GET_NONO,null,function(param1:*):void
            {
               MainManager.actorInfo.hasNono = true;
               NonoManager.isBeckon = true;
               SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,1);
               NonoManager.getInfo();
            });
         }
      }
      
      public function newseerTaskIsOver(param1:int, param2:int) : Boolean
      {
         var _loc3_:Boolean = false;
         if(param1 >= 28)
         {
            _loc3_ = true;
         }
         return _loc3_;
      }
      
      public function destroy() : void
      {
         this.clearuis();
         this.panelarr = null;
         this.ui = null;
         this.removeEvent();
         if(this.dialogmc)
         {
            this.dialogmc.removeEventListener(MouseEvent.CLICK,this.diaLogClickHandle);
            this.dialogmc = null;
         }
         this._domain = null;
      }
   }
}
