package com.robot.app.homeToolBarPanel
{
   import com.robot.app.control.GreenHouseController;
   import com.robot.app.info.greenHouse.GreenHousePlantInfo;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.events.DynamicEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class HomeToolBarSeedPanel extends Sprite
   {
       
      
      private var _panel:MovieClip;
      
      private var limit_seed:Array;
      
      private var limit_fruit:Array;
      
      private var limit_fruit2:Array;
      
      private var array:Array;
      
      private var itemArr:Array;
      
      private var MAX_ITEM:uint = 8;
      
      private var dataIndex:uint;
      
      private var currentDataIndex:int = -1;
      
      private var _itemID:uint;
      
      private var _petSelectPanel:AppModel;
      
      public function HomeToolBarSeedPanel()
      {
         var _loc2_:GreenHouseConItem = null;
         this.limit_seed = [400900,400919];
         this.limit_fruit = [300201,300220];
         this.limit_fruit2 = [400950,400951,400952,400953,400954];
         this.itemArr = [];
         super();
         this._panel = UIManager.getMovieClip("ui_Home_toolBar_seed");
         this._panel["tab_0"].buttonMode = true;
         this._panel["tab_0"].gotoAndStop(1);
         this._panel["tab_0"].addEventListener(MouseEvent.CLICK,this.onTabClick);
         this._panel["tab_1"].buttonMode = true;
         this._panel["tab_1"].gotoAndStop(1);
         this._panel["tab_1"].addEventListener(MouseEvent.CLICK,this.onTabClick);
         this._panel["prevBtn"].addEventListener(MouseEvent.CLICK,this.prevHandler);
         this._panel["pageUpBtn"].addEventListener(MouseEvent.CLICK,this.prevHandler);
         this._panel["nextBtn"].addEventListener(MouseEvent.CLICK,this.nextHandler);
         this._panel["pageDownBtn"].addEventListener(MouseEvent.CLICK,this.nextHandler);
         this._panel["close"].addEventListener(MouseEvent.CLICK,this.closeHandler);
         GreenHouseController.getInstance().addEventListener(GreenHouseController.PLANTING,this.updateSeed);
         GreenHouseController.getInstance().addEventListener(GreenHouseController.USE_FRUIT,this.updateFruit);
         var _loc1_:uint = 0;
         while(_loc1_ < this.MAX_ITEM)
         {
            _loc2_ = new GreenHouseConItem();
            _loc2_.x = 226 + 80 * _loc1_;
            _loc2_.y = 58;
            _loc2_.addEventListener("itemClick",this.onItemClick);
            this._panel.addChild(_loc2_);
            this.itemArr.push(_loc2_);
            _loc1_++;
         }
      }
      
      public function show() : void
      {
         addChild(this._panel);
         this.changePage(0);
      }
      
      private function changePage(param1:uint) : void
      {
         this.currentDataIndex = -1;
         this.dataIndex = 0;
         this._panel["tab_0"].gotoAndStop(1);
         this._panel["tab_1"].gotoAndStop(1);
         this._panel["tab_" + param1].gotoAndStop(2);
         this.getItems(param1);
      }
      
      private function getItems(param1:uint) : void
      {
         var i:uint = param1;
         this.array = [];
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,function():void
         {
            var _loc2_:Array = null;
            var _loc4_:SingleItemInfo = null;
            ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,arguments.callee);
            var _loc3_:Array = ItemManager.getCollectionInfos();
            if(i == 0)
            {
               _loc2_ = limit_seed;
            }
            else if(i == 1)
            {
               _loc2_ = limit_fruit;
            }
            for each(_loc4_ in _loc3_)
            {
               if(_loc4_.itemID >= _loc2_[0] && _loc4_.itemID <= _loc2_[1])
               {
                  array.push(_loc4_);
               }
               else if(i == 1)
               {
                  if(limit_fruit2.indexOf(_loc4_.itemID) != -1)
                  {
                     array.push(_loc4_);
                  }
               }
            }
            setInfo();
         });
         ItemManager.getCollection();
      }
      
      private function setInfo() : void
      {
         var _loc2_:GreenHouseConItem = null;
         var _loc3_:SingleItemInfo = null;
         this.currentDataIndex = this.dataIndex;
         var _loc1_:uint = 0;
         while(_loc1_ < this.MAX_ITEM)
         {
            _loc2_ = this.itemArr[_loc1_] as GreenHouseConItem;
            if(this.currentDataIndex + _loc1_ < this.array.length)
            {
               _loc3_ = this.array[this.currentDataIndex + _loc1_] as SingleItemInfo;
               _loc2_.setInfo(_loc3_.itemID,_loc3_.itemNum);
            }
            else
            {
               _loc2_.setInfo(0,0);
            }
            _loc1_++;
         }
      }
      
      private function updateSeed(param1:DynamicEvent) : void
      {
         var _loc4_:SingleItemInfo = null;
         var _loc2_:GreenHousePlantInfo = param1.paramObject as GreenHousePlantInfo;
         var _loc3_:Array = [];
         for each(_loc4_ in this.array)
         {
            if(_loc2_.id == _loc4_.itemID)
            {
               --_loc4_.itemNum;
               if(_loc4_.itemNum > 0)
               {
                  _loc3_.push(_loc4_);
               }
            }
            else
            {
               _loc3_.push(_loc4_);
            }
         }
         this.array = _loc3_;
         this.setInfo();
      }
      
      private function updateFruit(param1:DynamicEvent) : void
      {
         var _loc4_:SingleItemInfo = null;
         var _loc2_:uint = param1.paramObject as uint;
         var _loc3_:Array = [];
         for each(_loc4_ in this.array)
         {
            if(_loc2_ == _loc4_.itemID)
            {
               --_loc4_.itemNum;
               if(_loc4_.itemNum > 0)
               {
                  _loc3_.push(_loc4_);
               }
            }
            else
            {
               _loc3_.push(_loc4_);
            }
         }
         this.array = _loc3_;
         this.setInfo();
      }
      
      private function onTabClick(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:uint = uint(int(_loc2_.name.split("_")[1]));
         this.changePage(_loc3_);
      }
      
      private function prevHandler(param1:MouseEvent) : void
      {
         var _loc2_:SimpleButton = param1.currentTarget as SimpleButton;
         if(_loc2_.name == "prevBtn")
         {
            if(this.dataIndex > 0)
            {
               --this.dataIndex;
            }
         }
         else
         {
            this.dataIndex = 0;
         }
         this.setInfo();
      }
      
      private function nextHandler(param1:MouseEvent) : void
      {
         var _loc2_:SimpleButton = param1.currentTarget as SimpleButton;
         if(_loc2_.name == "nextBtn")
         {
            if(this.dataIndex < this.array.length - this.MAX_ITEM)
            {
               ++this.dataIndex;
            }
         }
         else if(this.array.length > this.MAX_ITEM)
         {
            this.dataIndex = this.array.length - this.MAX_ITEM;
         }
         else
         {
            this.dataIndex = 0;
         }
         this.setInfo();
      }
      
      private function closeHandler(param1:MouseEvent) : void
      {
         HomeToolBarContoller.show(HomeToolBarContoller.PANEL_PLANT,HomeToolBarContoller.PANEL_FRIEND);
         GreenHouseController.getInstance().dispatchEvent(new Event("gotoNext"));
      }
      
      private function onItemClick(param1:Event) : void
      {
         var _loc2_:GreenHouseConItem = param1.currentTarget as GreenHouseConItem;
         if(_loc2_._id >= this.limit_seed[0] && _loc2_._id <= this.limit_seed[1])
         {
            GreenHouseController.getInstance().dispatchEvent(new DynamicEvent("itemClick",_loc2_._id));
         }
         if(_loc2_._id >= this.limit_fruit[0] && _loc2_._id <= this.limit_fruit[1] || this.limit_fruit2.indexOf(_loc2_._id) != -1)
         {
            if(_loc2_._id == 400950 || _loc2_._id == 400952 || _loc2_._id == 400953 || _loc2_._id == 400954)
            {
               GreenHouseController.getInstance().useExpFruit(_loc2_._id,1);
               return;
            }
            this._itemID = _loc2_._id;
            if(!this._petSelectPanel)
            {
               this._petSelectPanel = ModuleManager.getModule(ClientConfig.getAppModule("CommonPetSelectPanel"),"正在打开精灵选择面板...");
               this._petSelectPanel.sharedEvents.addEventListener(Event.SELECT,this.onSelectPet);
            }
            this._petSelectPanel.show();
         }
      }
      
      private function onSelectPet(param1:DynamicEvent) : void
      {
         var info:PetInfo = null;
         var event:DynamicEvent = param1;
         info = event.paramObject as PetInfo;
         Alert.show("确定对" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(info.id)) + "使用" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(this._itemID)) + "吗？",function():void
         {
            GreenHouseController.getInstance().useFruit(_itemID,info);
         });
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this._panel);
      }
      
      public function destroy() : void
      {
         this.hide();
         this.itemArr.forEach(function(param1:GreenHouseConItem, param2:uint, param3:Array):void
         {
            param1.removeEventListener(MouseEvent.CLICK,onItemClick);
            param1.destroy();
            DisplayUtil.removeForParent(param1);
         });
         this._panel["tab_0"].removeEventListener(MouseEvent.CLICK,this.onTabClick);
         this._panel["tab_1"].removeEventListener(MouseEvent.CLICK,this.onTabClick);
         this._panel["prevBtn"].removeEventListener(MouseEvent.CLICK,this.prevHandler);
         this._panel["pageUpBtn"].removeEventListener(MouseEvent.CLICK,this.prevHandler);
         this._panel["nextBtn"].removeEventListener(MouseEvent.CLICK,this.nextHandler);
         this._panel["pageDownBtn"].removeEventListener(MouseEvent.CLICK,this.nextHandler);
         this._panel["close"].removeEventListener(MouseEvent.CLICK,this.closeHandler);
         GreenHouseController.getInstance().removeEventListener(GreenHouseController.PLANTING,this.updateSeed);
         GreenHouseController.getInstance().removeEventListener(GreenHouseController.USE_FRUIT,this.updateFruit);
         if(this._petSelectPanel)
         {
            this._petSelectPanel.sharedEvents.removeEventListener(Event.SELECT,this.onSelectPet);
            ModuleManager.destroy(ClientConfig.getAppModule("CommonPetSelectPanel"));
         }
         this._panel = null;
      }
   }
}
