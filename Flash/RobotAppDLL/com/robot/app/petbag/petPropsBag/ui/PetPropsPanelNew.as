package com.robot.app.petbag.petPropsBag.ui
{
   import com.robot.app.bag.BagListItem;
   import com.robot.app.control.ItemUseManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import com.robot.core.utils.ItemType;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.DataEvent;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class PetPropsPanelNew extends Sprite
   {
      
      public static const PREV_PAGE:String = "prevPage";
      
      public static const NEXT_PAGE:String = "nextPage";
      
      public static const SHOW_COLLECTION:String = "showCollection";
      
      public static const CHANGE_TYPE:String = "changeType";
       
      
      private var _clickItemID:uint;
      
      private var petPropsPanel:Sprite;
      
      private var _listCon:Sprite;
      
      private var _itemArr:Array;
      
      public var _currentBagItem:BagListItem;
      
      private var _petInfo:PetInfo;
      
      private var itemID:uint;
      
      private var itemName:String;
      
      private var _propInfo:PetPropInfo;
      
      private var _noshowList:Array;
      
      public function PetPropsPanelNew(param1:Sprite)
      {
         this._itemArr = [];
         this._noshowList = [300024,300025,300070,300075];
         super();
         this.petPropsPanel = param1;
         this.show();
         this.addEvent();
      }
      
      public function hide() : void
      {
         this.petPropsPanel.visible = false;
         dispatchEvent(new Event(Event.CLOSE));
      }
      
      public function addEvent() : void
      {
         this.petPropsPanel.addEventListener(MouseEvent.CLICK,this.onTypeBtnClick);
      }
      
      public function showItem(param1:Array) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:BagListItem = null;
         var _loc6_:SingleItemInfo = null;
         var _loc7_:Boolean = false;
         this.clearItemPanel();
         var _loc2_:int = int(param1.length);
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_)
         {
            _loc4_ = uint(param1[_loc3_]);
            _loc5_ = this._listCon.getChildAt(_loc3_) as BagListItem;
            _loc6_ = ItemManager.getPetItemInfo(_loc4_);
            _loc7_ = false;
            _loc5_.buttonMode = true;
            _loc5_.setInfo(_loc6_,_loc7_);
            _loc5_.addEventListener(MouseEvent.ROLL_OVER,this.onShowItemInfo);
            _loc5_.addEventListener(MouseEvent.ROLL_OUT,this.onHideItemInfo);
            _loc5_.addEventListener(MouseEvent.CLICK,this.onPetPropsUsed);
            _loc3_++;
         }
      }
      
      public function show() : void
      {
         if(this.petPropsPanel.getChildByName("listCon") == null)
         {
            this._listCon = new Sprite();
            this._listCon.name = "listCon";
            this._listCon.x = 10;
            this._listCon.y = 50;
            this.petPropsPanel.addChild(this._listCon);
         }
         else
         {
            this._listCon = this.petPropsPanel.getChildByName("listCon") as Sprite;
         }
         this.createItemPanel();
         var _loc1_:SimpleButton = this.petPropsPanel["prev"];
         var _loc2_:SimpleButton = this.petPropsPanel["next"];
         _loc1_.addEventListener(MouseEvent.CLICK,this.prevHandler);
         _loc2_.addEventListener(MouseEvent.CLICK,this.nextHandler);
      }
      
      private function createItemPanel() : void
      {
         var _loc2_:BagListItem = null;
         DisplayUtil.removeAllChild(this._listCon);
         var _loc1_:int = 0;
         while(_loc1_ < 8)
         {
            _loc2_ = new BagListItem(UIManager.getSprite("itemPanelNew"));
            _loc2_.x = (_loc2_.width + 5) * int(_loc1_ % 4);
            _loc2_.y = _loc2_.height * int(_loc1_ / 4);
            this._listCon.addChild(_loc2_);
            _loc1_++;
         }
      }
      
      private function clearItemPanel() : void
      {
         var _loc3_:BagListItem = null;
         var _loc1_:int = this._listCon.numChildren;
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            _loc3_ = this._listCon.getChildAt(_loc2_) as BagListItem;
            _loc3_.clear();
            _loc3_.removeEventListener(MouseEvent.ROLL_OVER,this.onShowItemInfo);
            _loc3_.removeEventListener(MouseEvent.ROLL_OUT,this.onHideItemInfo);
            _loc3_.removeEventListener(MouseEvent.CLICK,this.onPetPropsUsed);
            _loc3_.buttonMode = false;
            _loc2_++;
         }
      }
      
      private function prevHandler(param1:MouseEvent) : void
      {
         dispatchEvent(new Event(PREV_PAGE));
      }
      
      private function onTypeBtnClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "levelUpBtn":
               dispatchEvent(new DataEvent(CHANGE_TYPE,false,false,ItemType.LEVEL_ITEM + ""));
               break;
            case "transformBtn":
               dispatchEvent(new DataEvent(CHANGE_TYPE,false,false,ItemType.TRANSFORM_ITEM + ""));
               break;
            case "fightBtn":
               dispatchEvent(new DataEvent(CHANGE_TYPE,false,false,ItemType.FIGHT_ITEM + ""));
               break;
            case "allBtn":
               dispatchEvent(new DataEvent(CHANGE_TYPE,false,false,ItemType.TYPE_ALL + ""));
         }
      }
      
      private function nextHandler(param1:MouseEvent) : void
      {
         dispatchEvent(new Event(NEXT_PAGE));
      }
      
      public function setPageNum(param1:uint, param2:uint) : void
      {
         this.petPropsPanel["page_txt"].text = param1 + "/" + param2;
      }
      
      public function onPetPropsUsed(param1:MouseEvent) : void
      {
         var str:String;
         var evt:MouseEvent = param1;
         if(this._petInfo == null)
         {
            Alarm.show("你要先选择一个精灵噢！");
            return;
         }
         this._currentBagItem = evt.currentTarget as BagListItem;
         if(this._currentBagItem.info == null)
         {
            return;
         }
         this.itemID = this._currentBagItem.info.itemID;
         this.itemName = ItemXMLInfo.getName(this.itemID);
         this._propInfo = new PetPropInfo();
         this._propInfo.petInfo = this._petInfo;
         this._propInfo.itemId = this.itemID;
         this._propInfo.itemName = this.itemName;
         str = "你确定要对你的<font color=\'#ff0000\'>" + PetXMLInfo.getName(this._petInfo.id) + "</font>使用" + TextFormatUtil.getRedTxt(this.itemName) + "吗？";
         if(this.itemID == 300136)
         {
            this.onsureHandler();
         }
         else if(this._noshowList.indexOf(this.itemID) != -1)
         {
            ItemUseManager.getInstance().usePetItem(this._propInfo,this.itemID);
         }
         else
         {
            PetBagControllerNew.panel.mouseEnabled = false;
            PetBagControllerNew.panel.mouseChildren = false;
            Alert.show(str,this.onsureHandler,function():void
            {
               PetBagControllerNew.panel.mouseEnabled = true;
               PetBagControllerNew.panel.mouseChildren = true;
            });
         }
      }
      
      private function onsureHandler() : void
      {
         var _loc1_:Object = null;
         PetBagControllerNew.panel.mouseEnabled = true;
         PetBagControllerNew.panel.mouseChildren = true;
         try
         {
            SocketConnection.addCmdListener(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,this.onUpDate);
            SocketConnection.addCmdListener(CommandID.USE_SPEEDUP_ITEM,this.onUpDate);
            SocketConnection.addCmdListener(CommandID.USE_AUTO_FIGHT_ITEM,this.onUpDate);
            SocketConnection.addCmdListener(CommandID.USE_FIGHT_HP_ITEM,this.onUpDate);
            SocketConnection.addCmdListener(CommandID.UP_GRADE_MEDICINE,this.onUpDate);
            SocketConnection.addCmdListener(CommandID.FIRE_EDGE_REBORN_USE_BREED_CONVERT_ITEM,this.onUpDate);
            SocketConnection.addCmdListener(CommandID.USE_PET_ITEM_FULL_ABILITY_OF_STUDY,this.onUpDate);
            SocketConnection.addCmdListener(CommandID.UP_STAR_GAME_SPIRIT,this.onUpDate);
            _loc1_ = getDefinitionByName("com.robot.app.petbag.petPropsBag.petPropClass.PetPropClass_" + this.itemID);
            if(_loc1_)
            {
               new _loc1_(this._propInfo);
            }
         }
         catch(e:Error)
         {
         }
      }
      
      private function onUpDate(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.USE_SPEEDUP_ITEM,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.USE_AUTO_FIGHT_ITEM,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.USE_FIGHT_HP_ITEM,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.UP_GRADE_MEDICINE,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.FIRE_EDGE_REBORN_USE_BREED_CONVERT_ITEM,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.USE_PET_ITEM_FULL_ABILITY_OF_STUDY,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.UP_STAR_GAME_SPIRIT,this.onUpDate);
         this.hide();
         PetManager.upDate();
         if(this._currentBagItem.info.itemNum > 0)
         {
            --this._currentBagItem.info.itemNum;
         }
         this._currentBagItem.setInfo(this._currentBagItem.info);
      }
      
      private function onShowItemInfo(param1:MouseEvent) : void
      {
         var _loc2_:BagListItem = param1.currentTarget as BagListItem;
         if(_loc2_.info == null)
         {
            return;
         }
         this._clickItemID = _loc2_.info.itemID;
         ItemInfoTip.show(_loc2_.info);
      }
      
      private function onHideItemInfo(param1:MouseEvent) : void
      {
         ItemInfoTip.hide();
      }
      
      public function getPetInfo(param1:PetInfo) : PetInfo
      {
         this._petInfo = param1;
         return this._petInfo;
      }
      
      public function destroy() : void
      {
         if(this.petPropsPanel["prev"])
         {
            this.petPropsPanel["prev"].removeEventListener(MouseEvent.CLICK,this.prevHandler);
         }
         if(this.petPropsPanel["prev"])
         {
            this.petPropsPanel["prev"].removeEventListener(MouseEvent.CLICK,this.nextHandler);
         }
         this.petPropsPanel.removeEventListener(MouseEvent.CLICK,this.onTypeBtnClick);
         SocketConnection.removeCmdListener(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.USE_SPEEDUP_ITEM,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.USE_AUTO_FIGHT_ITEM,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.USE_FIGHT_HP_ITEM,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.UP_GRADE_MEDICINE,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.FIRE_EDGE_REBORN_USE_BREED_CONVERT_ITEM,this.onUpDate);
         SocketConnection.removeCmdListener(CommandID.UP_STAR_GAME_SPIRIT,this.onUpDate);
      }
      
      public function get clickItemID() : uint
      {
         return this._clickItemID;
      }
   }
}
