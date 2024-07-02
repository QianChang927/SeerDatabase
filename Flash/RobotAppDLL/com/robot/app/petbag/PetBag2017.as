package com.robot.module.app
{
   import com.robot.app.control.SpriteCountermarkController;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.control.PeakJihadController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.BaseModule;
   import com.robot.core.module.SubModuleController;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.module.app.petBag.BagModuleData;
   import com.robot.module.app.petBag.DataKeys;
   import com.robot.module.app.petBag.controller.PetIconDragController;
   import com.robot.module.app.petBag.subModule.bagRightModule.CultureResistanceModule;
   import com.robot.module.app.petBag.subModule.bagRightModule.ItemMainModule;
   import com.robot.module.app.petBag.subModule.bagRightModule.petModules.petSubModules.SkillModule;
   import com.robot.module.app.petBag.subModule.petBagChoose.PetBagChooseModule;
   import com.robot.module.app.petBag.subModule.petH5battleArray.PetH5battleArrayModule;
   import com.robot.module.app.petBag.subModule.petInfo.PetInfoModule;
   import com.robot.module.app.petBag.subModule.petList.firstBag.FirstBagModule;
   import com.robot.module.app.petBag.subModule.petList.secondBag.SecondBagModule;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class PetBag2017 extends BaseModule
   {
      
      private static var _instance:com.robot.module.app.PetBag2017;
       
      
      private var _subModuleController:SubModuleController;
      
      private var _dragController:PetIconDragController;
      
      private var _moduleData:BagModuleData;
      
      private var itemMainModule:ItemMainModule;
      
      private var _cureDialog:com.robot.module.app.PetCurePanel;
      
      private var _petH5battleArrayModule:PetH5battleArrayModule;
      
      private var introMc:MovieClip;
      
      private var onIntro:uint = 0;
      
      private var setIntervalValue:uint;
      
      public function PetBag2017()
      {
         _instance = this;
         super();
         resUrl = "system/petBag/petBag";
         StatManager.sendStat2014("2019新背包","打开背包",StatManager.SYSTEM);
      }
      
      public static function get instance() : com.robot.module.app.PetBag2017
      {
         return _instance;
      }
      
      override public function show() : void
      {
         super.show();
         eventCom.addClickEvent(_ui,this.onPanelClick);
         eventCom.addRollOverEvent(_ui["closeMc"],this.onCloseOver);
         eventCom.addRollOutEvent(_ui["closeMc"],this.onCloseOut);
         SocketConnection.addCmdListener(47346,this.updateBagPet);
      }
      
      public function onOPenMouse(e:Event) : void
      {
         if(_ui != null)
         {
            _ui.mouseChildren = _ui.mouseEnabled = true;
         }
      }
      
      public function onCloseMouse(e:Event) : void
      {
         if(_ui != null)
         {
            _ui.mouseChildren = _ui.mouseEnabled = false;
         }
      }
      
      private function updateBagPet(e:SocketEvent) : void
      {
         var petl:Array = PetManager.getBagMap();
         for(var i:int = 0; i < petl.length; i++)
         {
            PetManager.upDateBagPetInfo((petl[i] as PetListInfo).catchTime);
         }
      }
      
      override public function setup() : void
      {
         PetManager.upDateByOnce(function():void
         {
            _subModuleController = new SubModuleController(_ui);
            _moduleData = new BagModuleData(null);
            EventManager.dispatchEvent(new Event("newseerBagModuleDateInited"));
            _moduleData.listenTo(DataKeys.FOCUS_PET,onFocusPetChange);
            SpriteCountermarkController.checkPetBag(initSubModules);
         });
      }
      
      protected function onFocusPetChange() : void
      {
         _ui["intro"].visible = this.moduleData.firstBagInfos.length != 0;
      }
      
      private function initSubModules() : void
      {
         var firstBag:FirstBagModule;
         var secondBag:SecondBagModule;
         var petBagChoose:PetBagChooseModule;
         var petBagPanel:com.robot.module.app.PetBag2017 = this;
         this._subModuleController.addSubModule("petInfo",new PetInfoModule());
         firstBag = new FirstBagModule();
         this._subModuleController.addSubModule("firstBag",firstBag);
         secondBag = new SecondBagModule();
         this._subModuleController.addSubModule("secondBag",secondBag);
         this._subModuleController.addSubModule("skill",new SkillModule());
         this._subModuleController.addSubModule("cultureResistance",new CultureResistanceModule());
         this._dragController = new PetIconDragController(firstBag.iconList,secondBag.iconList);
         petBagChoose = new PetBagChooseModule();
         this._subModuleController.addSubModule("petBagChoose",petBagChoose);
         _ui.addChild(_ui["closeMc"]);
         BitBuffSetClass.getBitSet([23716],function(arr:Array):void
         {
            if(arr[0] == 0)
            {
               BitBuffSetClass.setState(23716,1,startIntro);
            }
         });
      }
      
      public function playMoveEffectMovie(index1:int, index2:int, mouseMc:MovieClip = null) : void
      {
         if(Boolean(this._dragController))
         {
            this._dragController.playMoveEffectMovie(index1,index2,mouseMc);
         }
      }
      
      public function removeMoveEffectMovie() : void
      {
         if(Boolean(this._dragController))
         {
            this._dragController.removeMoveEffectMovie();
         }
      }
      
      private function onPanelClick(e:MouseEvent) : void
      {
         var petInfo:PetInfo = null;
         var allBagInfos:Array = null;
         var focusIdx:int = 0;
         var i:int = 0;
         var btnName:String = String(e.target.name);
         var index:int = int(e.target.name.split("_")[1]);
         if(this._dragController.isPlayingEff)
         {
            this._dragController.removeMoveEffectMovie();
         }
         switch(btnName)
         {
            case "closeBtn":
               hide();
               break;
            case "change":
               StatManager.sendStat2014("2019新背包","切换至经典背包",StatManager.SYSTEM);
               BufferRecordManager.setState(MainManager.actorInfo,1307,true,function():void
               {
                  hide();
                  PetBagControllerNew.showByBuffer();
               });
               break;
            case "change_1":
               StatManager.sendStat2014("2019新背包","切换至怀旧背包",StatManager.SYSTEM);
               BufferRecordManager.setState(MainManager.actorInfo,1307,true,function():void
               {
                  BufferRecordManager.setState(MainManager.actorInfo,245,true,function():void
                  {
                     hide();
                     PetBagControllerNew.showByBuffer();
                  });
               });
               break;
            case "cureBtn":
               StatManager.sendStat2014("2019新背包","点击精灵恢复",StatManager.SYSTEM);
               if(null == this._cureDialog)
               {
                  this._cureDialog = new com.robot.module.app.PetCurePanel(_ui,getSymbolFromLib("PetCureUI"));
               }
               this._cureDialog.show();
               break;
            case "petStorageBtn":
               EventManager.dispatchEvent(new Event("newseerpetStorageBtnClick"));
               hide();
               ModuleManager.showModule(ClientConfig.getAppModule("PetStorage"),"正在打开精灵仓库....",function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("PetBag2017"));
               });
               break;
            case "countermark":
               StatManager.sendStat2014("2019新背包","点击刻印中心",StatManager.SYSTEM);
               hide();
               ModuleManager.showAppModule("CountermarkCenterNewPanel_2016");
               break;
            case "showItem":
               StatManager.sendStat2014("2019新背包","点击道具总览",StatManager.SYSTEM);
               if(this.itemMainModule == null)
               {
                  this.itemMainModule = new ItemMainModule();
                  this._subModuleController.addSubModule("itemBag",this.itemMainModule);
               }
               else
               {
                  this.itemMainModule.visible = true;
               }
               break;
            case "closeItem":
               this.itemMainModule.visible = false;
               break;
            case "followBtn":
               if(Boolean(e.target.parent) && e.target.parent.currentFrame == 1)
               {
                  hide();
               }
               break;
            case "intro":
               this.startIntro();
               break;
            case "oneKey":
               StatManager.sendStat2014("2019新背包","点击一键极品按钮",StatManager.SYSTEM);
               petInfo = this.moduleData.focusPet;
               hide();
               ModuleManager.showAppModule("PetOneKeyPanel_201410",petInfo);
               break;
            case "peiyangBtn":
               allBagInfos = this.moduleData.getData(DataKeys.FIRST_BAG_PETS);
               allBagInfos = allBagInfos.concat(this.moduleData.getData(DataKeys.SECOND_BAG_PETS));
               focusIdx = 0;
               for(i = 0; i < allBagInfos.length; i++)
               {
                  if(allBagInfos[i].catchTime == this.moduleData.focusPet.catchTime)
                  {
                     focusIdx = i;
                     break;
                  }
               }
               hide();
               ModuleManager.showAppModule("PetFavorabilityDevelopPanel",{
                  "p":allBagInfos,
                  "fIdx":focusIdx,
                  "func":function():void
                  {
                     ModuleManager.showAppModule("PetBag2017");
                  }
               });
               break;
            case "petFirst_1":
               this._dragController.firstPet(this._moduleData.focusPet);
               break;
            case "petFirst_2":
               this._dragController.firstPet(this._moduleData.focusPet);
               break;
            case "uploadBtn":
               if(this._petH5battleArrayModule == null)
               {
                  this._petH5battleArrayModule = new PetH5battleArrayModule();
                  this._subModuleController.addSubModule("petH5battleArray",this._petH5battleArrayModule);
               }
               else
               {
                  this._petH5battleArrayModule.update();
                  this._petH5battleArrayModule.visible = true;
               }
               break;
            case "closeH5Btn":
               this._petH5battleArrayModule.visible = false;
               break;
            case "blackbyH5Btn":
               Alert.show("现在你将回到精灵背包调整阵容，调整完毕后点击【上传】按钮重新保存移动端巅峰圣战阵容。",function():void
               {
                  _petH5battleArrayModule.visible = false;
               });
               break;
            case "saveH5Btn_" + index:
               if(index == 0)
               {
                  if(PeakJihadController.getAllBagALLPetLvIsFull())
                  {
                     SocketConnection.sendByQueue(42382,[5,1],function(e:*):void
                     {
                        Alarm2.show("你的移动端狂野模式阵容上传成功！",function():void
                        {
                           _petH5battleArrayModule.visible = false;
                        });
                     });
                  }
                  else
                  {
                     Alarm2.show("你阵容中有不符合条件的精灵，请调整阵容后再保存。");
                  }
               }
               else if(PeakJihadController.getBagALLPetLvIsFullAndNotSame())
               {
                  SocketConnection.sendByQueue(42382,[5,2],function(e:*):void
                  {
                     Alarm2.show("你的移动端竞技模式阵容上传成功！",function():void
                     {
                        _petH5battleArrayModule.visible = false;
                     });
                  });
               }
               else
               {
                  Alarm2.show("你阵容中有不符合条件的精灵，请调整阵容后再保存。");
               }
         }
      }
      
      private function startIntro() : void
      {
         if(PetManager.defaultTime <= 0 || this.moduleData.firstBagInfos.length == 0)
         {
            return;
         }
         if(this.introMc == null)
         {
            this.introMc = getSymbolFromLib("IntroMc");
         }
         this.introMc.visible = true;
         this.introMc.gotoAndStop(1);
         _ui.addChild(this.introMc);
         this.onIntro = 3;
         this.introMc["txt"].text = "(" + this.onIntro + ")";
         this.setIntervalValue = setInterval(function():void
         {
            --onIntro;
            introMc["txt"].text = "(" + onIntro + ")";
            if(onIntro <= 0)
            {
               introMc["txt"].text = "点击任意位置继续";
               clearInterval(setIntervalValue);
               eventCom.addClickEvent(introMc,onIntroClick);
            }
         },1000);
      }
      
      private function onIntroClick(e:MouseEvent) : void
      {
         eventCom.removeEvent(this.introMc,MouseEvent.CLICK,this.onIntroClick);
         this.introMc.gotoAndStop(2);
         this.onIntro = this._moduleData.focusPet.catchTime;
         e.stopImmediatePropagation();
         this._dragController.completeIntro = this.onIntroSuccess;
      }
      
      private function onIntroSuccess() : void
      {
         this._dragController.completeIntro = null;
         this.introMc.visible = false;
         if(this.introMc.parent != null)
         {
            this.introMc.parent.removeChild(this.introMc);
         }
      }
      
      private function onUIMove(e:MouseEvent) : void
      {
         if(this.onIntro > 0)
         {
            if(this._moduleData.focusPet.catchTime != this.onIntro)
            {
               this.introMc.visible = false;
               if(this.introMc.parent != null)
               {
                  this.introMc.parent.removeChild(this.introMc);
               }
               this.onIntro = 0;
               eventCom.removeEvent(_ui,MouseEvent.MOUSE_OUT,this.onUIMove);
               if(!BufferRecordManager.getMyState(1306))
               {
                  BufferRecordManager.setMyState(1306,true);
               }
            }
         }
      }
      
      private function onCloseOver(e:MouseEvent) : void
      {
         if(MainManager.newSeerProgress >= 0 && MainManager.newSeerProgress < 15 || Boolean(NewSeerTaskController.isNewSeer))
         {
            return;
         }
         _ui["closeMc"].gotoAndStop(2);
      }
      
      private function onCloseOut(e:MouseEvent) : void
      {
         _ui["closeMc"].gotoAndStop(1);
      }
      
      public function get moduleData() : BagModuleData
      {
         return this._moduleData;
      }
      
      override public function destroy() : void
      {
         clearInterval(this.setIntervalValue);
         SocketConnection.removeCmdListener(47346,this.updateBagPet);
         if(Boolean(this._dragController))
         {
            this._dragController.completeIntro = null;
            this._dragController.destory();
            this._dragController = null;
         }
         if(Boolean(this._cureDialog))
         {
            this._cureDialog.destroy();
            this._cureDialog = null;
         }
         if(Boolean(this._moduleData))
         {
            this._moduleData.destory();
            this._moduleData = null;
         }
         if(Boolean(this._cureDialog))
         {
            this._cureDialog.destroy();
         }
         this._cureDialog = null;
         if(Boolean(this._subModuleController))
         {
            this._subModuleController.destory();
         }
         this.itemMainModule = null;
         _instance = null;
         this._subModuleController = null;
         super.destroy();
         this.introMc = null;
         this._petH5battleArrayModule = null;
      }
   }
}
