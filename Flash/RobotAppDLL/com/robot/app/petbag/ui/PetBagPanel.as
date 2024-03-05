package com.robot.app.petbag.ui
{
   import com.robot.app.petbag.PetBagController;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.petbag.petPropsBag.PetBagModel;
   import com.robot.app.petbag.petPropsBag.ui.PetPropsPanel;
   import com.robot.app.picturebook.PictureBookController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.uic.UIPanel;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class PetBagPanel extends UIPanel
   {
      
      private static const LIST_LENGTH:int = 6;
       
      
      private var _listCon:Sprite;
      
      private var _followBtn:MovieClip;
      
      private var _defaultBtn:SimpleButton;
      
      private var _storageBtn:SimpleButton;
      
      private var _pictureBookBtn:SimpleButton;
      
      private var _cureBtn:SimpleButton;
      
      private var _itemBtn:SimpleButton;
      
      private var _petStorageBtn:SimpleButton;
      
      private var _countermarkBtn:SimpleButton;
      
      private var _skillStoneBtn:SimpleButton;
      
      private var _infoMc:com.robot.app.petbag.ui.PetDataPanel;
      
      private var _petPropsPanel:PetPropsPanel;
      
      public var petBagModel:PetBagModel;
      
      private var _listData:Array;
      
      private var _curretItem:com.robot.app.petbag.ui.PetBagListItem;
      
      private var _arrowMc:MovieClip;
      
      private var _maskMc:Sprite;
      
      public function PetBagPanel()
      {
         var _loc3_:com.robot.app.petbag.ui.PetBagListItem = null;
         super(UIManager.getSprite("PetBagMc"));
         _canDrag = false;
         this._followBtn = _mainUI["followBtn"];
         this._defaultBtn = _mainUI["defaultBtn"];
         this._storageBtn = _mainUI["storageBtn"];
         this._pictureBookBtn = _mainUI["pictureBookBtn"];
         this._cureBtn = _mainUI["cureBtn"];
         this._itemBtn = _mainUI["itemBtn"];
         this._petStorageBtn = _mainUI["petStorageBtn"];
         this._countermarkBtn = _mainUI["cmBtn"];
         this._skillStoneBtn = _mainUI["skillStoneBtn"];
         addChild(_mainUI);
         this._followBtn.gotoAndStop(1);
         this._listCon = new Sprite();
         this._listCon.x = 220;
         this._listCon.y = 185;
         addChild(this._listCon);
         var _loc1_:int = 0;
         while(_loc1_ < LIST_LENGTH)
         {
            _loc3_ = new com.robot.app.petbag.ui.PetBagListItem();
            _loc3_.y = (_loc3_.height + 6) * int(_loc1_ / 2);
            _loc3_.x = (_loc3_.width + 6) * (_loc1_ % 2);
            this._listCon.addChild(_loc3_);
            _loc1_++;
         }
         this._infoMc = new com.robot.app.petbag.ui.PetDataPanel(_mainUI["infoMc"]);
         this._petPropsPanel = new PetPropsPanel(_mainUI["itemMC"]);
         var _loc2_:SimpleButton = _mainUI["itemMC"]["closeBtn"];
         _loc2_.addEventListener(MouseEvent.CLICK,this.showInfoPanel);
      }
      
      public function show() : void
      {
         LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
         this.showInfoPanel(null);
         _show();
         DisplayUtil.align(this,null,AlignType.MIDDLE_CENTER);
         PetManager.upDate();
      }
      
      override public function hide() : void
      {
         LevelManager.showOrRemoveMapLevelandToolslevel(true,false);
         super.hide();
         this.openEvent();
         this._infoMc.hide();
         this._curretItem = null;
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
      
      override protected function addEvent() : void
      {
         super.addEvent();
         this._followBtn.addEventListener(MouseEvent.CLICK,this.onFollow);
         this._defaultBtn.addEventListener(MouseEvent.CLICK,this.onDefault);
         this._storageBtn.addEventListener(MouseEvent.CLICK,this.onStorage);
         this._pictureBookBtn.addEventListener(MouseEvent.CLICK,this.onBook);
         this._cureBtn.addEventListener(MouseEvent.CLICK,this.onCure);
         this._itemBtn.addEventListener(MouseEvent.CLICK,this.onItemBag);
         this._petStorageBtn.addEventListener(MouseEvent.CLICK,this.onPetStorageBtn);
         this._countermarkBtn.addEventListener(MouseEvent.CLICK,this.onShowCountermark);
         this._skillStoneBtn.addEventListener(MouseEvent.CLICK,this.onShowSkillStone);
         _mainUI["change"].addEventListener(MouseEvent.CLICK,this.onChangePetBag);
         PetManager.addEventListener(PetEvent.SET_DEFAULT,this.onUpDate);
         PetManager.addEventListener(PetEvent.UPDATE_INFO,this.onUpDate);
         PetManager.addEventListener(PetEvent.ADDED,this.onUpDate);
         PetManager.addEventListener(PetEvent.REMOVED,this.onUpDate);
         PetManager.addEventListener(PetEvent.CURE_ONE_COMPLETE,this.onUpDate);
         ToolTipManager.add(this._followBtn,"身边跟随");
         ToolTipManager.add(this._storageBtn,"放回仓库");
         ToolTipManager.add(this._pictureBookBtn,"精灵图鉴");
         ToolTipManager.add(this._cureBtn,"精灵恢复");
         ToolTipManager.add(this._itemBtn,"道具");
         ToolTipManager.add(this._petStorageBtn,"精灵仓库");
         ToolTipManager.add(this._countermarkBtn,"精灵刻印");
         ToolTipManager.add(this._skillStoneBtn,"技能石背包");
      }
      
      override protected function removeEvent() : void
      {
         super.removeEvent();
         this._followBtn.removeEventListener(MouseEvent.CLICK,this.onFollow);
         this._defaultBtn.removeEventListener(MouseEvent.CLICK,this.onDefault);
         this._storageBtn.removeEventListener(MouseEvent.CLICK,this.onStorage);
         this._pictureBookBtn.removeEventListener(MouseEvent.CLICK,this.onBook);
         this._cureBtn.removeEventListener(MouseEvent.CLICK,this.onCure);
         this._itemBtn.removeEventListener(MouseEvent.CLICK,this.onItemBag);
         this._petStorageBtn.removeEventListener(MouseEvent.CLICK,this.onPetStorageBtn);
         this._countermarkBtn.removeEventListener(MouseEvent.CLICK,this.onShowCountermark);
         this._skillStoneBtn.removeEventListener(MouseEvent.CLICK,this.onShowSkillStone);
         _mainUI["change"].removeEventListener(MouseEvent.CLICK,this.onChangePetBag);
         PetManager.removeEventListener(PetEvent.SET_DEFAULT,this.onUpDate);
         PetManager.removeEventListener(PetEvent.UPDATE_INFO,this.onUpDate);
         PetManager.removeEventListener(PetEvent.ADDED,this.onUpDate);
         PetManager.removeEventListener(PetEvent.REMOVED,this.onUpDate);
         PetManager.removeEventListener(PetEvent.CURE_ONE_COMPLETE,this.onUpDate);
         ToolTipManager.remove(this._followBtn);
         ToolTipManager.remove(this._storageBtn);
         ToolTipManager.remove(this._defaultBtn);
         ToolTipManager.remove(this._pictureBookBtn);
         ToolTipManager.remove(this._cureBtn);
         ToolTipManager.remove(this._itemBtn);
         ToolTipManager.remove(this._petStorageBtn);
         ToolTipManager.remove(this._countermarkBtn);
         ToolTipManager.remove(this._skillStoneBtn);
      }
      
      private function onChangePetBag(param1:Event) : void
      {
         var e:Event = param1;
         var mimiNum:uint = uint(MainManager.actorID);
         if(int(String(mimiNum).slice(-1)) == 1)
         {
            SocketConnection.send(1022,86073903);
         }
         BufferRecordManager.setState(MainManager.actorInfo,245,false,function():void
         {
            BufferRecordManager.setState(MainManager.actorInfo,1307,false,function():void
            {
               hide();
               PetBagControllerNew.showByBuffer();
            });
         });
      }
      
      public function refreshItem() : void
      {
         var _loc5_:com.robot.app.petbag.ui.PetBagListItem = null;
         var _loc6_:PetInfo = null;
         var _loc7_:com.robot.app.petbag.ui.PetBagListItem = null;
         var _loc1_:int = 0;
         while(_loc1_ < LIST_LENGTH)
         {
            (_loc5_ = this._listCon.getChildAt(_loc1_) as com.robot.app.petbag.ui.PetBagListItem).mouseEnabled = false;
            _loc5_.hide();
            _loc5_.removeEventListener(MouseEvent.CLICK,this.onItemClick);
            _loc1_++;
         }
         var _loc2_:Array = PetManager.infos;
         _loc2_.sortOn("isDefault",Array.DESCENDING);
         var _loc3_:int = Math.min(LIST_LENGTH,PetManager.length);
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc6_ = _loc2_[_loc4_] as PetInfo;
            (_loc7_ = this._listCon.getChildAt(_loc4_) as com.robot.app.petbag.ui.PetBagListItem).show(_loc6_);
            _loc7_.name = _loc6_.id.toString();
            _loc7_.mouseEnabled = true;
            _loc7_.addEventListener(MouseEvent.CLICK,this.onItemClick);
            _loc4_++;
         }
         if(_loc3_ == 0)
         {
            this._followBtn.alpha = 0.4;
            this._followBtn.mouseEnabled = false;
            this._defaultBtn.alpha = 0.4;
            this._defaultBtn.mouseEnabled = false;
            this._storageBtn.alpha = 0.4;
            this._storageBtn.mouseEnabled = false;
            this._cureBtn.alpha = 0.4;
            this._cureBtn.mouseEnabled = false;
            this._itemBtn.alpha = 0.4;
            this._itemBtn.mouseEnabled = false;
            this._infoMc.clearInfo();
            return;
         }
         this._followBtn.alpha = 1;
         this._followBtn.mouseEnabled = true;
         this._defaultBtn.alpha = 1;
         this._defaultBtn.mouseEnabled = true;
         this._storageBtn.alpha = 1;
         this._storageBtn.mouseEnabled = true;
         this._cureBtn.alpha = 1;
         this._cureBtn.mouseEnabled = true;
         this._itemBtn.alpha = 1;
         this._itemBtn.mouseEnabled = true;
         if(!this._curretItem)
         {
            this._curretItem = this._listCon.getChildAt(0) as com.robot.app.petbag.ui.PetBagListItem;
            this._curretItem.setDefault(true);
         }
         else
         {
            (this._listCon.getChildAt(0) as com.robot.app.petbag.ui.PetBagListItem).setDefault(true);
         }
         this.setSelect(this._curretItem);
      }
      
      private function setSelect(param1:com.robot.app.petbag.ui.PetBagListItem) : void
      {
         if(param1.info == null)
         {
            return;
         }
         if(param1.info.catchTime == PetManager.defaultTime)
         {
            this._defaultBtn.alpha = 0.4;
            ToolTipManager.remove(this._defaultBtn);
            this._defaultBtn.removeEventListener(MouseEvent.CLICK,this.onDefault);
         }
         else
         {
            this._defaultBtn.alpha = 1;
            ToolTipManager.add(this._defaultBtn,"设为首选");
            this._defaultBtn.addEventListener(MouseEvent.CLICK,this.onDefault);
         }
         if(this._curretItem)
         {
            this._curretItem.isSelect = false;
         }
         this._curretItem = param1;
         this._curretItem.isSelect = true;
         this._infoMc.show(this._curretItem.info);
         this._petPropsPanel.getPetInfo(this._curretItem.info);
         this.upDateBtnState();
      }
      
      private function upDateBtnState() : void
      {
         if(PetManager.showInfo)
         {
            if(this._curretItem.info.catchTime == PetManager.showInfo.catchTime)
            {
               this._followBtn.gotoAndStop(2);
               ToolTipManager.add(this._followBtn,"放入包内");
            }
            else
            {
               this._followBtn.gotoAndStop(1);
               ToolTipManager.add(this._followBtn,"身边跟随");
            }
         }
         else
         {
            this._followBtn.gotoAndStop(1);
            ToolTipManager.add(this._followBtn,"身边跟随");
         }
      }
      
      public function changeStatus() : void
      {
         if(this._followBtn)
         {
            this._followBtn.gotoAndStop(1);
            ToolTipManager.add(this._followBtn,"身边跟随");
         }
      }
      
      private function onItemClick(param1:MouseEvent) : void
      {
         var _loc2_:com.robot.app.petbag.ui.PetBagListItem = param1.currentTarget as com.robot.app.petbag.ui.PetBagListItem;
         this.setSelect(_loc2_);
      }
      
      private function onFollow(param1:MouseEvent) : void
      {
         if(PetManager.length == 0)
         {
            Alarm.show("你还没有赛尔精灵！");
            return;
         }
         PetManager.showPet(this._curretItem.info.catchTime);
         if(this._followBtn.currentFrame == 1)
         {
            this._followBtn.gotoAndStop(2);
            ToolTipManager.add(this._followBtn,"放入包内");
            this.hide();
         }
         else
         {
            this._followBtn.gotoAndStop(1);
            ToolTipManager.add(this._followBtn,"身边跟随");
         }
      }
      
      private function onDefault(param1:MouseEvent) : void
      {
         PetManager.setDefault(this._curretItem.info.catchTime);
      }
      
      private function onStorage(param1:MouseEvent) : void
      {
         if(this._curretItem)
         {
            if(this._curretItem.info == null)
            {
               return;
            }
            PetManager.bagToInStorage(this._curretItem.info.catchTime);
         }
      }
      
      private function onBook(param1:MouseEvent) : void
      {
         PictureBookController.show();
         SocketConnection.send(1022,86053203);
      }
      
      private function onItemBag(param1:MouseEvent) : void
      {
         this._infoMc.hide();
         this._petPropsPanel = new PetPropsPanel(_mainUI["itemMC"]);
         this.petBagModel = new PetBagModel(this._petPropsPanel);
         (_mainUI["itemMC"] as MovieClip).visible = true;
         this.setSelect(this._curretItem);
      }
      
      public function get infoMc() : com.robot.app.petbag.ui.PetDataPanel
      {
         return this._infoMc;
      }
      
      private function onPetStorageBtn(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PetStorage"),"正在打开精灵仓库....");
      }
      
      private function onShowCountermark(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _mainUI.mouseChildren = _mainUI.mouseEnabled = false;
         Alert.show("新刻印系统只有在新背包才能使用，是否切换到新精灵背包？",function():void
         {
            _mainUI.mouseChildren = _mainUI.mouseEnabled = true;
            PetBagControllerNew.show();
            ModuleManager.showModule(ClientConfig.getAppModule("ADPetBagPanelNew"));
         },function():void
         {
            _mainUI.mouseChildren = _mainUI.mouseEnabled = true;
         });
      }
      
      private function onShowSkillStone(param1:MouseEvent) : void
      {
         if(Boolean(this._curretItem) && Boolean(this._curretItem.info))
         {
            PetBagController._fromThis = true;
            ModuleManager.showModule(ClientConfig.getAppModule("SkillStoneBagPanel"),"正在打开技能石背包....",this._curretItem.info);
            this.hide();
         }
      }
      
      private function showInfoPanel(param1:MouseEvent) : void
      {
         (_mainUI["infoMc"] as MovieClip).visible = true;
         (_mainUI["itemMC"] as MovieClip).visible = false;
      }
      
      private function onCure(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(Boolean(this._curretItem) && Boolean(this._curretItem.info))
         {
            if(MainManager.actorInfo.superNono != 1)
            {
               Alert.show("单个精灵体力恢复要花费20赛尔豆\r你是否要给<font color=\'#ff0000\'>" + PetXMLInfo.getName(this._curretItem.info.id) + "</font>恢复体力？",function():void
               {
                  PetManager.cure(_curretItem.info.catchTime);
               });
            }
            else
            {
               PetManager.cure(this._curretItem.info.catchTime);
            }
         }
      }
      
      private function onUpDate(param1:PetEvent) : void
      {
         this.refreshItem();
      }
      
      public function closeEvent() : void
      {
         this._maskMc = new Sprite();
         this._maskMc.alpha = 0;
         this._maskMc.graphics.lineStyle(1,0);
         this._maskMc.graphics.beginFill(0);
         this._maskMc.graphics.drawRect(0,0,this.width,this.height);
         this._maskMc.graphics.endFill();
         this.addChild(this._maskMc);
         this.addChild(closeBtn);
         this._arrowMc = UIManager.getMovieClip("Arrows_UI");
         this.addChild(this._arrowMc);
         this._arrowMc.x = closeBtn.x + closeBtn.width / 2;
         this._arrowMc.y = closeBtn.y - 10;
         MovieClip(this._arrowMc["mc"]).play();
      }
      
      public function openEvent() : void
      {
         if(this._maskMc)
         {
            DisplayUtil.removeForParent(this._maskMc);
            this._maskMc = null;
         }
         if(this._arrowMc)
         {
            DisplayUtil.removeForParent(this._arrowMc);
         }
      }
      
      public function get curretItem() : com.robot.app.petbag.ui.PetBagListItem
      {
         return this._curretItem;
      }
   }
}
