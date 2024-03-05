package com.robot.app.homeToolBarPanel
{
   import com.robot.app.control.NewGreenHouseController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.components.EventComponent;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.ui.Mouse;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewGreenHousePlantBagPanel
   {
       
      
      private const MAX_SHOW_NUM:int = 8;
      
      private var _choiceBag:int = 1;
      
      private var _startIdx:int = 0;
      
      private var _curBagList:Array;
      
      private var _curShowList:Array;
      
      private var _mySeeds:Array;
      
      private var _myFruits:Array;
      
      private var _itemID:uint;
      
      private var _petSelectPanel;
      
      private var _control:NewGreenHouseController;
      
      private var _ui:MovieClip;
      
      private var _eventCom:EventComponent;
      
      public var itemIcon:MovieClip;
      
      public function NewGreenHousePlantBagPanel(param1:MovieClip)
      {
         this._curBagList = new Array();
         this._curShowList = new Array();
         this._mySeeds = new Array();
         this._myFruits = new Array();
         super();
         this._ui = param1;
      }
      
      public function show() : void
      {
         this._control = NewGreenHouseController.getInstance();
         this._ui.visible = true;
         this._startIdx = 0;
         this._ui.addEventListener(MouseEvent.CLICK,this.onClickPanle);
         var _loc1_:int = 0;
         while(_loc1_ < this.MAX_SHOW_NUM)
         {
            this._ui["mc_" + _loc1_]["loadMc"].addEventListener(MouseEvent.CLICK,this.onItemClick);
            _loc1_++;
         }
         this.choiceBag = 1;
         this.updatePanel();
      }
      
      public function updatePanel() : void
      {
         this._control.updateMyFruitsMap().then(this._control.updateMySeedsMap).then(this._control.updateUserInfo).then(function():void
         {
            _myFruits = _control.myFruits;
            _mySeeds = _control.mySeeds;
            choiceBag = choiceBag;
            startIdx = startIdx;
         });
      }
      
      protected function onClickPanle(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         var _loc3_:int = int(_loc2_.split("_")[1]);
         switch(_loc2_)
         {
            case "closeBtn":
               this.isShowPanel(false);
               break;
            case "showBagBtn_" + _loc3_:
               this.choiceBag = _loc3_;
               break;
            case "bagPrevBtn":
               --this.startIdx;
               break;
            case "bagNextBtn":
               ++this.startIdx;
               break;
            case "shop":
               EventManager.dispatchEvent(new Event("NewGreenHouseShopShow"));
         }
      }
      
      private function onItemClick(param1:Event) : void
      {
         var index:int = 0;
         var e:Event = param1;
         index = int(e.currentTarget.parent.name.split("_")[1]);
         var item:Object = this._curShowList[index];
         switch(this.choiceBag)
         {
            case 1:
               this._control.getPlantsNum().then(function(param1:int):void
               {
                  if(param1 >= _control.userInfo.newLand)
                  {
                     Alarm.show("没有空余的土地了！");
                     return;
                  }
                  onUseSeed(index);
               });
               break;
            case 2:
               this._itemID = item.ID;
               Alert.show("是否使用" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(this._itemID)) + "吗？",function():void
               {
                  var _loc1_:Object = ItemXMLInfo.getItemInfo(_itemID);
                  if(_loc1_["BonusId"])
                  {
                     _control.useEnegyFruit(_itemID,1);
                  }
                  else if(Boolean(_loc1_["Exp"]) || Boolean(_loc1_["ExpRangedRandom"]))
                  {
                     _control.useExpFruit(_itemID,1);
                  }
                  else if(Boolean(_loc1_["MonNatureReset"]) || Boolean(_loc1_["Nature"]))
                  {
                     if(!_petSelectPanel)
                     {
                        _petSelectPanel = ModuleManager.getModule(ClientConfig.getAppModule("CommonPetSelectPanel"),"正在打开精灵选择面板...");
                        _petSelectPanel.sharedEvents.addEventListener(Event.SELECT,onSelectPet);
                     }
                     _petSelectPanel.show();
                  }
               });
         }
      }
      
      private function onSelectPet(param1:DynamicEvent) : void
      {
         var info:PetInfo = null;
         var event:DynamicEvent = param1;
         info = event.paramObject as PetInfo;
         Alert.show("确定对" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(info.id)) + "使用" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(this._itemID)) + "吗？",function():void
         {
            _control.useNatureFruit(_itemID,info);
         });
      }
      
      private function onUseSeed(param1:int) : void
      {
         var itemId:int = 0;
         var index:int = param1;
         itemId = int(this._curShowList[index].ID);
         NewGreenHouseController.getInstance().dispatchEvent(NewGreenHouseController.getInstance().PREPARE_USE_SEED);
         if(this.itemIcon != null && this.itemIcon.itemId == itemId)
         {
            return;
         }
         ResourceManager.getResource(ItemXMLInfo.getSwfURL(itemId),function(param1:MovieClip):void
         {
            destroyIcon();
            Mouse.hide();
            itemIcon = param1;
            itemIcon.itemId = itemId;
            itemIcon.mouseChildren = itemIcon.mouseEnabled = false;
            LevelManager.stage.addEventListener(MouseEvent.MOUSE_MOVE,onMouseMoveByItem);
            LevelManager.stage.addChild(itemIcon);
            onMouseMoveByItem();
         });
      }
      
      public function destroyIcon() : void
      {
         if(this.itemIcon)
         {
            LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.onMouseMoveByItem);
            DisplayUtil.removeForParent(this.itemIcon);
            this.itemIcon = null;
            Mouse.show();
         }
      }
      
      public function isUseSeed() : Boolean
      {
         return this.itemIcon == null;
      }
      
      protected function onMouseMoveByItem(param1:MouseEvent = null) : void
      {
         this.itemIcon.x = LevelManager.root.mouseX - this.itemIcon.width / 2;
         this.itemIcon.y = LevelManager.root.mouseY - this.itemIcon.height / 2;
      }
      
      public function isOpend() : Boolean
      {
         return this._ui.visible;
      }
      
      public function isShowPanel(param1:Boolean) : void
      {
         this._ui.visible = param1;
         if(param1)
         {
            this.show();
         }
         else
         {
            this.destroyIcon();
         }
      }
      
      public function hide() : void
      {
         if(this.itemIcon != null)
         {
            this.destroyIcon();
         }
         if(this._ui != null)
         {
            this._ui.removeEventListener(MouseEvent.CLICK,this.onClickPanle);
            this._ui.visible = false;
            this._ui = null;
         }
         this.eventCom.destroy();
         this._eventCom = null;
         this._petSelectPanel = null;
         this._control = null;
         this._myFruits = null;
         this._mySeeds = null;
         this._curShowList = null;
         this._curBagList = null;
      }
      
      public function get choiceBag() : int
      {
         return this._choiceBag;
      }
      
      public function set choiceBag(param1:int) : void
      {
         this._choiceBag = param1;
         var _loc2_:int = 1;
         while(_loc2_ < 3)
         {
            this._ui["bagBtnMc_" + _loc2_].gotoAndStop(_loc2_ == this._choiceBag ? 2 : 1);
            _loc2_++;
         }
         switch(this._choiceBag)
         {
            case 1:
               this._curBagList = this._mySeeds;
               break;
            case 2:
               this.destroyIcon();
               this._curBagList = this._myFruits;
               break;
            default:
               this._curBagList = [];
         }
         this.startIdx = 0;
         if(this._ui["shopMc"])
         {
            this._ui["shopMc"].visible = this._curBagList == null || this._curBagList && this._curBagList.length < 1;
         }
      }
      
      public function get startIdx() : int
      {
         return this._startIdx;
      }
      
      public function set startIdx(param1:int) : void
      {
         var _loc4_:Object = null;
         this._startIdx = param1;
         var _loc2_:int = this._startIdx + this.MAX_SHOW_NUM;
         _loc2_ = _loc2_ > this._curBagList.length ? int(this._curBagList.length) : _loc2_;
         this._curShowList = this._curBagList.slice(this._startIdx,_loc2_);
         this._ui["bagPrevBtn"].visible = this._startIdx > 0;
         this._ui["bagNextBtn"].visible = this._startIdx + this._curShowList.length < this._curBagList.length;
         this.clearTip();
         var _loc3_:int = 0;
         while(_loc3_ < this.MAX_SHOW_NUM)
         {
            this._ui["mc_" + _loc3_].visible = _loc3_ < this._curShowList.length;
            if(this._ui["mc_" + _loc3_].visible)
            {
               this._ui["mc_" + _loc3_]["num"].text = this._curShowList[_loc3_].num;
               this.addItemTip(this._ui["mc_" + _loc3_]["loadMc"],this._curShowList[_loc3_].ID);
               _loc4_ = {
                  "parent":this._ui["mc_" + _loc3_]["loadMc"],
                  "path":ItemXMLInfo.getSwfURL(this._curShowList[_loc3_].ID)
               };
               this._control.loadResource(_loc4_);
            }
            _loc3_++;
         }
      }
      
      public function fruitUsed(param1:int) : void
      {
         var _loc2_:int = 0;
         if(this._curBagList)
         {
            _loc2_ = 0;
            while(_loc2_ < this._curBagList.length)
            {
               if(this._curBagList[_loc2_].ID == param1)
               {
                  --this._curBagList[_loc2_].num;
                  if(this._curBagList[_loc2_].num < 1)
                  {
                     this._curBagList.splice(_loc2_,1);
                     _loc2_--;
                  }
               }
               _loc2_++;
            }
            this.startIdx = this._startIdx;
         }
      }
      
      public function get eventCom() : EventComponent
      {
         if(null == this._eventCom)
         {
            this._eventCom = new EventComponent();
         }
         return this._eventCom;
      }
      
      public function set eventCom(param1:EventComponent) : void
      {
         this._eventCom = param1;
      }
      
      protected function addItemTip(param1:DisplayObject, param2:int) : void
      {
         var info:SingleItemInfo = null;
         var obj:DisplayObject = param1;
         var itemId:int = param2;
         info = ItemManager.getInfo(itemId);
         if(info == null)
         {
            info = new SingleItemInfo();
            info.itemID = itemId;
         }
         this.eventCom.addMouseOverEvent(obj as InteractiveObject,function():void
         {
            ItemInfoTip.show(info);
         });
         this.eventCom.addMouseOutEvent(obj as InteractiveObject,function():void
         {
            ItemInfoTip.hide();
         });
      }
      
      protected function clearTip() : void
      {
         var _loc1_:* = undefined;
         for each(_loc1_ in this.eventCom.eventDic)
         {
            _loc1_.target.removeEventListener(_loc1_.e,_loc1_.f);
         }
      }
   }
}
