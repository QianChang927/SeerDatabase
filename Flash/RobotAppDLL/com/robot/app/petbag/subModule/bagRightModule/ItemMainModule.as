package com.robot.module.app.petBag.subModule.bagRightModule
{
   import com.robot.app.control.ItemUseManager;
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.vo.PageListVo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.ResistanceSpecifiedItemXMLInfo;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.TextFormatUtil;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.display.DisplayObject;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.EventManager;
   
   public class ItemMainModule extends PetBagSubModule
   {
       
      
      private const PAGE_SIZE:int = 40;
      
      private var _pageListVo:PageListVo;
      
      private var _itemIds:Array;
      
      private var _iconList:Array;
      
      private var _itemIconCatch:Object;
      
      private var curPage:int = 2;
      
      private var _noshowList:Array;
      
      public function ItemMainModule()
      {
         this._noshowList = [300136,300024,300025,300070,300075];
         super();
         initUi("itemModule");
         this.initIcons();
         this._itemIconCatch = new Object();
         ItemManager.getPetItem().then(this.updateItems);
         this.addUpdateEvent();
      }
      
      private function initIcons() : void
      {
         var itemIconView:BagItemIcon = null;
         this._iconList = [];
         for(var i:int = 0; i < this.PAGE_SIZE; i++)
         {
            itemIconView = new BagItemIcon(_ui["icon_" + i]);
            this._iconList.push(itemIconView);
            _eventCom.addClickEvent(_ui["icon_" + i],this.onPetPropsUsed);
         }
         _ui["page_" + this.curPage].gotoAndStop(2);
      }
      
      override protected function onClick(e:MouseEvent) : void
      {
         var btnName:String = String(e.target.name);
         switch(btnName)
         {
            case "next":
               if(Boolean(this._pageListVo) && Boolean(this._pageListVo.goToNext()))
               {
                  this.updateCurrentPage();
               }
               break;
            case "pre":
               if(Boolean(this._pageListVo) && Boolean(this._pageListVo.gotoPre()))
               {
                  this.updateCurrentPage();
               }
               break;
            case "page":
               _ui["page_" + this.curPage].gotoAndStop(1);
               this.curPage = e.target.parent.name.split("_")[1];
               _ui["page_" + this.curPage].gotoAndStop(2);
               this.updateItems();
         }
      }
      
      public function updateItems() : void
      {
         var ids:Array = null;
         if(this.curPage == 1)
         {
            ids = ItemManager.getPetItemIDs();
            ids = ids.filter(function(id:int, index:int, arr:Array):Boolean
            {
               return id < 400000;
            });
         }
         else
         {
            if(this.curPage != 2)
            {
               return;
            }
            ids = moduleData.getPetBagFightItemIds();
         }
         ItemManager.getPetItem().then(function():void
         {
            var arr:Array = [];
            for(var i:int = 0; i < ids.length; i++)
            {
               if(ItemManager.getNumByID(ids[i]) > 0)
               {
                  arr.push(ids[i]);
               }
            }
            _pageListVo = new PageListVo(arr,PAGE_SIZE);
            updateCurrentPage();
         });
      }
      
      private function updateCurrentPage() : void
      {
         var temp:int = 0;
         var iconView:BagItemIcon = null;
         var info:SingleItemInfo = null;
         var url:String = null;
         var icon:DisplayObject = null;
         for(var i:int = 0; i < this.PAGE_SIZE; i++)
         {
            temp = i + this._pageListVo.currentPageIndex * this.PAGE_SIZE;
            iconView = this._iconList[i];
            if(this._itemIconCatch[this._pageListVo.currentPageList[i]] == null && this._pageListVo.currentPageList[i] > 0)
            {
               info = ItemManager.getCollectionInfo(this._pageListVo.currentPageList[i]);
               url = String(ItemXMLInfo.getIconURL(info.itemID,info.itemLevel));
               icon = KTool.getIcon(url,36,new Point(0,0));
               this._itemIconCatch[this._pageListVo.currentPageList[i]] = icon;
            }
            iconView.setItemIcon(this._pageListVo.currentPageList[i],this._itemIconCatch[this._pageListVo.currentPageList[i]]);
         }
         _ui["next"].visible = this._pageListVo.hasNextPage;
         _ui["pre"].visible = this._pageListVo.hasPre;
         _ui["page"].text = this._pageListVo.currentPageIndex + 1 + "/" + this._pageListVo.maxPageIndex;
      }
      
      override public function destory() : void
      {
         var i:int = 0;
         this.removeUpdateEvent();
         if(this._iconList != null)
         {
            for(i = 0; i < this._iconList.length; i++)
            {
               (this._iconList[i] as BagItemIcon).destory();
            }
            this._iconList = null;
         }
         this._itemIconCatch = null;
         if(Boolean(this._pageListVo))
         {
            this._pageListVo.destory();
         }
         this._pageListVo = null;
         this._noshowList = null;
         super.destory();
      }
      
      private function sortFun(idA:int, idB:int) : int
      {
         if(idA == 300699)
         {
            return -1;
         }
         if(idB == 300699)
         {
            return 1;
         }
         if(ItemXMLInfo.getCatID(idA) == 16)
         {
            return -1;
         }
         if(ItemXMLInfo.getCatID(idB) == 16)
         {
            return 1;
         }
         return 1;
      }
      
      public function addUpdateEvent() : void
      {
         EventManager.addEventListener("UpdateExchangeResistance",this.onUpDate);
         EventManager.addEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL,this.onUpDate);
      }
      
      public function removeUpdateEvent() : void
      {
         EventManager.removeEventListener(ItemUseManager.EVENT_USE_ITEM_SUCCESSFUL,this.onUpDate);
         EventManager.removeEventListener("UpdateExchangeResistance",this.onUpDate);
      }
      
      public function onUpDate(evt:*) : void
      {
         this.updateItems();
         PetManager.upDateBagPetInfo(focusPet.catchTime);
         this.visible = false;
      }
      
      public function onPetPropsUsed(evt:MouseEvent) : void
      {
         var str:String;
         var _currentBagItem:BagItemIcon = null;
         var itemID:int = 0;
         var itemName:String = null;
         var _propInfo:PetPropInfo = null;
         if(focusPet == null)
         {
            Alarm.show("你要先选择一只精灵哦！");
            return;
         }
         itemID = int(evt.currentTarget.name.split("_")[1]);
         _currentBagItem = this._iconList[itemID];
         if(_currentBagItem == null || _currentBagItem.itemId == 0)
         {
            return;
         }
         itemID = _currentBagItem.itemId;
         itemName = String(ItemXMLInfo.getName(itemID));
         _propInfo = new PetPropInfo();
         _propInfo.petInfo = focusPet;
         _propInfo.itemId = itemID;
         _propInfo.itemName = itemName;
         str = "你确定要对你的<font color=\'#ff0000\'>" + PetXMLInfo.getName(focusPet.id) + "</font>使用" + TextFormatUtil.getRedTxt(itemName) + "吗？";
         if(Boolean(NewSeerTaskController.isNewSeer2016) && itemID != 300699)
         {
            Alarm.show("请选择雷小伊专属天赋改造药剂，不要选错了哦！",null,false,false,false,LevelManager.stage);
            return;
         }
         if(this._noshowList.indexOf(itemID) != -1)
         {
            this.onsureHandler(itemID,_propInfo);
         }
         else
         {
            Alert.show(str,function():void
            {
               onsureHandler(itemID,_propInfo);
            });
         }
      }
      
      private function onsureHandler(itemId:int, propInfo:PetPropInfo) : void
      {
         var _this:* = undefined;
         if(ResistanceSpecifiedItemXMLInfo.isResistanceSpecifiedItem(itemId))
         {
            if(focusPet.resistanceinfo.green_gem > 0)
            {
               _this = this;
               Alert.show("请先将异常状态重置为初始状态后再进行更换，是否前往重置？",function():void
               {
                  _this.visible = false;
                  ModuleManager.showAppModule("ResistanceStrengthenPanel2022",{
                     "p":focusPet,
                     "idx":1
                  });
               });
               return;
            }
            if(focusPet.resistanceinfo.resist_state != 2)
            {
               Alarm.show("需要先开启抗性才能使用！");
               return;
            }
            if(ResistanceSpecifiedItemXMLInfo.isMultSelect(itemId))
            {
               ModuleManager.showAppModule("ResistanceSettingPanel2022",{
                  "p":focusPet,
                  "idx":-1,
                  "itemID":itemId
               });
               this.visible = false;
            }
            else
            {
               SocketConnection.sendWithPromise(41450,[focusPet.catchTime,itemId,0,100,100,100,100,100,100]).then(this.onUpDate);
            }
            return;
         }
         ItemUseManager.getInstance().usePetItem(propInfo,itemId);
      }
   }
}

import com.robot.app.task.petstory.util.KTool;
import com.robot.core.config.xml.ItemXMLInfo;
import com.robot.core.info.userItem.SingleItemInfo;
import com.robot.core.manager.ItemManager;
import com.robot.core.manager.MainManager;
import com.robot.core.mode.components.EventComponent;
import com.robot.core.ui.itemTip.ItemInfoTip;
import flash.display.DisplayObject;
import flash.display.MovieClip;
import flash.events.MouseEvent;
import flash.geom.Point;
import org.taomee.utils.DisplayUtil;

class BagItemIcon
{
    
   
   private var _info:SingleItemInfo;
   
   private var _ui:MovieClip;
   
   private var _itemId:int;
   
   private var _eventCom:EventComponent;
   
   public function BagItemIcon(ui:MovieClip)
   {
      this._eventCom = new EventComponent();
      super();
      this._ui = ui;
      this._ui.visible = false;
      this._ui.mouseChildren = false;
      this._eventCom.addMouseOverEvent(this._ui,this.overHandler);
      this._eventCom.addMouseOutEvent(this._ui,this.outHandler);
   }
   
   public function setInfo(itemId:int) : void
   {
      this._itemId = itemId;
      if(itemId <= 0)
      {
         this._ui.visible = false;
         return;
      }
      this._ui.visible = true;
      DisplayUtil.removeAllChild(this._ui["iconContainer"]);
      var info:SingleItemInfo = ItemManager.getCollectionInfo(itemId);
      var url:String = String(ItemXMLInfo.getIconURL(info.itemID,info.itemLevel));
      var icon:DisplayObject = KTool.getIcon(url,36,new Point(0,0));
      this._ui["iconContainer"].addChild(icon);
      this._ui["numTxt"].text = ItemManager.getNumByID(itemId);
   }
   
   public function setItemIcon(itemId:int, mc:DisplayObject) : void
   {
      this._itemId = itemId;
      if(itemId <= 0 || mc == null)
      {
         this._ui.visible = false;
         return;
      }
      this._ui.visible = true;
      DisplayUtil.removeAllChild(this._ui["iconContainer"]);
      this._ui["iconContainer"].addChild(mc);
      this._ui["numTxt"].text = ItemManager.getNumByID(itemId);
   }
   
   private function overHandler(event:MouseEvent) : void
   {
      var info:SingleItemInfo = ItemManager.getCollectionInfo(this._itemId);
      if(info == null)
      {
         return;
      }
      ItemInfoTip.show(info,false,MainManager.getStage());
   }
   
   private function outHandler(event:MouseEvent) : void
   {
      ItemInfoTip.hide();
   }
   
   public function get itemId() : int
   {
      return this._itemId;
   }
   
   public function destory() : void
   {
      if(Boolean(this._eventCom))
      {
         this._eventCom.destroy();
         this._eventCom = null;
      }
      this._info = null;
      this._ui = null;
   }
}
