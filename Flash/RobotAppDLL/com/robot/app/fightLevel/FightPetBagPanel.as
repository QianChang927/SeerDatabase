package com.robot.app.fightLevel
{
   import com.robot.app.petbag.petPropsBag.PetBagModel;
   import com.robot.app.petbag.petPropsBag.ui.PetPropsPanel;
   import com.robot.app.petbag.ui.PetBagListItem;
   import com.robot.app.petbag.ui.PetDataPanel;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.uic.UIPanel;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class FightPetBagPanel extends UIPanel
   {
      
      private static const LIST_LENGTH:int = 6;
       
      
      private var _listCon:Sprite;
      
      private var _defaultBtn:SimpleButton;
      
      private var _cureBtn:SimpleButton;
      
      private var _itemBtn:SimpleButton;
      
      private var _infoMc:PetDataPanel;
      
      private var _petPropsPanel:PetPropsPanel;
      
      public var petBagModel:PetBagModel;
      
      private var _listData:Array;
      
      private var _curretItem:PetBagListItem;
      
      private var _noSelect:Boolean;
      
      public function FightPetBagPanel()
      {
         var _loc3_:PetBagListItem = null;
         super(UIManager.getSprite("PetBagMc"));
         _canDrag = false;
         this._defaultBtn = _mainUI["defaultBtn"];
         this._cureBtn = _mainUI["cureBtn"];
         _mainUI["itemBtn"].visible = false;
         this._itemBtn = _mainUI["itemBtn"];
         this._itemBtn.x -= 50;
         _mainUI["followBtn"].visible = false;
         _mainUI["storageBtn"].visible = false;
         _mainUI["pictureBookBtn"].visible = false;
         _mainUI["itemMC"].visible = false;
         _mainUI["cmBtn"].visible = false;
         _mainUI["petStorageBtn"].visible = false;
         _mainUI["skillStoneBtn"].visible = false;
         this._noSelect = false;
         this._defaultBtn.x += 20;
         this._cureBtn.x -= 20;
         addChild(_mainUI);
         this._listCon = new Sprite();
         this._listCon.x = 220;
         this._listCon.y = 185;
         addChild(this._listCon);
         var _loc1_:int = 0;
         while(_loc1_ < LIST_LENGTH)
         {
            _loc3_ = new PetBagListItem();
            _loc3_.y = (_loc3_.height + 6) * int(_loc1_ / 2);
            _loc3_.x = (_loc3_.width + 6) * (_loc1_ % 2);
            this._listCon.addChild(_loc3_);
            _loc1_++;
         }
         this._infoMc = new PetDataPanel(_mainUI["infoMc"]);
         this._petPropsPanel = new PetPropsPanel(_mainUI["itemMC"]);
         var _loc2_:SimpleButton = _mainUI["itemMC"]["closeBtn"];
         _loc2_.addEventListener(MouseEvent.CLICK,this.showInfoPanel);
      }
      
      private function showInfoPanel(param1:MouseEvent) : void
      {
         (_mainUI["infoMc"] as MovieClip).visible = true;
         (_mainUI["itemMC"] as MovieClip).visible = false;
      }
      
      public function show(param1:Boolean = false, param2:Boolean = false, param3:Boolean = true) : void
      {
         var _loc4_:int = 0;
         var _loc5_:PetBagListItem = null;
         this._noSelect = param1;
         if(this._noSelect)
         {
            _loc4_ = 0;
            while(_loc4_ < LIST_LENGTH)
            {
               (_loc5_ = this._listCon.getChildAt(_loc4_) as PetBagListItem).mouseChildren = false;
               _loc5_.mouseEnabled = false;
               _loc5_.removeEventListener(MouseEvent.CLICK,this.onItemClick);
               _loc4_++;
            }
         }
         if(param2)
         {
            this._cureBtn.visible = false;
         }
         else
         {
            this._cureBtn.visible = true;
         }
         if(param3)
         {
            this._itemBtn.visible = false;
         }
         else
         {
            this._itemBtn.visible = true;
         }
         _mainUI["change"].visible = false;
         _show();
         DisplayUtil.align(this,null,AlignType.MIDDLE_CENTER);
         PetManager.upDate();
      }
      
      override public function hide() : void
      {
         super.hide();
         this._infoMc.hide();
      }
      
      override public function destroy() : void
      {
         super.destroy();
         this._infoMc = null;
         this._listCon = null;
         this._curretItem = null;
         this._defaultBtn = null;
         this._cureBtn = null;
      }
      
      override protected function addEvent() : void
      {
         super.addEvent();
         this._defaultBtn.addEventListener(MouseEvent.CLICK,this.onDefault);
         PetManager.addEventListener(PetEvent.SET_DEFAULT,this.onUpDate);
         PetManager.addEventListener(PetEvent.ADDED,this.onUpDate);
         PetManager.addEventListener(PetEvent.REMOVED,this.onUpDate);
         PetManager.addEventListener(PetEvent.UPDATE_INFO,this.onUpDate);
         PetManager.addEventListener(PetEvent.CURE_ONE_COMPLETE,this.onUpDate);
         this._cureBtn.addEventListener(MouseEvent.CLICK,this.onCure);
         this._itemBtn.addEventListener(MouseEvent.CLICK,this.onItemBag);
         ToolTipManager.add(this._cureBtn,"精灵恢复");
         ToolTipManager.add(this._itemBtn,"道具");
      }
      
      override protected function removeEvent() : void
      {
         super.removeEvent();
         this._defaultBtn.removeEventListener(MouseEvent.CLICK,this.onDefault);
         PetManager.removeEventListener(PetEvent.SET_DEFAULT,this.onUpDate);
         PetManager.removeEventListener(PetEvent.UPDATE_INFO,this.onUpDate);
         PetManager.removeEventListener(PetEvent.ADDED,this.onUpDate);
         PetManager.removeEventListener(PetEvent.REMOVED,this.onUpDate);
         PetManager.removeEventListener(PetEvent.CURE_ONE_COMPLETE,this.onUpDate);
         this._itemBtn.removeEventListener(MouseEvent.CLICK,this.onItemBag);
         this._cureBtn.removeEventListener(MouseEvent.CLICK,this.onCure);
         ToolTipManager.remove(this._defaultBtn);
         ToolTipManager.remove(this._cureBtn);
         ToolTipManager.remove(this._itemBtn);
         var _loc1_:SimpleButton = _mainUI["itemMC"]["closeBtn"];
         _loc1_.removeEventListener(MouseEvent.CLICK,this.showInfoPanel);
      }
      
      private function onItemBag(param1:MouseEvent) : void
      {
         this._infoMc.hide();
         this._petPropsPanel = new PetPropsPanel(_mainUI["itemMC"]);
         this.petBagModel = new PetBagModel(this._petPropsPanel);
         (_mainUI["itemMC"] as MovieClip).visible = true;
         this.setSelect(this._curretItem);
      }
      
      private function refreshItem() : void
      {
         var _loc5_:PetBagListItem = null;
         var _loc6_:PetInfo = null;
         var _loc7_:PetBagListItem = null;
         this._curretItem = null;
         var _loc1_:int = 0;
         while(_loc1_ < LIST_LENGTH)
         {
            (_loc5_ = this._listCon.getChildAt(_loc1_) as PetBagListItem).mouseEnabled = false;
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
            (_loc7_ = this._listCon.getChildAt(_loc4_) as PetBagListItem).show(_loc6_);
            _loc7_.name = _loc6_.id.toString();
            if(this._noSelect)
            {
               if(_loc4_ > 0)
               {
                  _loc7_.setUnVisible();
               }
               _loc7_.mouseEnabled = false;
            }
            else
            {
               _loc7_.mouseEnabled = true;
               _loc7_.addEventListener(MouseEvent.CLICK,this.onItemClick);
            }
            _loc4_++;
         }
         if(_loc3_ == 0)
         {
            this._defaultBtn.alpha = 0.4;
            this._defaultBtn.mouseEnabled = false;
            this._cureBtn.alpha = 0.4;
            this._cureBtn.mouseEnabled = false;
            return;
         }
         this._defaultBtn.alpha = 1;
         this._defaultBtn.mouseEnabled = true;
         this._cureBtn.alpha = 1;
         this._cureBtn.mouseEnabled = true;
         this._curretItem = this._listCon.getChildAt(0) as PetBagListItem;
         this._curretItem.setDefault(true);
         this.setSelect(this._curretItem);
      }
      
      private function setSelect(param1:PetBagListItem) : void
      {
         if(this._curretItem)
         {
            this._curretItem.isSelect = false;
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
         this._curretItem = param1;
         this._curretItem.isSelect = true;
         this._infoMc.show(this._curretItem.info);
         this._petPropsPanel.getPetInfo(this._curretItem.info);
      }
      
      private function onItemClick(param1:MouseEvent) : void
      {
         var _loc2_:PetBagListItem = param1.currentTarget as PetBagListItem;
         this.setSelect(_loc2_);
      }
      
      private function onDefault(param1:MouseEvent) : void
      {
         PetManager.setDefault(this._curretItem.info.catchTime);
      }
      
      private function onCure(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(this._curretItem)
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
   }
}
