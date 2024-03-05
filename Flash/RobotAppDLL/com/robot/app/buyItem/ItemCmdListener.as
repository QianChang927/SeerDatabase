package com.robot.app.buyItem
{
   import com.robot.app.info.item.BuyItemInfo;
   import com.robot.app.info.item.BuyMultiItemInfo;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatGridPanel;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.GoldProductXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.MoneyProductXMLInfo;
   import com.robot.core.config.xmlInfo.LimitItemInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.moneyAndGold.GoldBuyProductInfo;
   import com.robot.core.info.moneyAndGold.MoneyBuyProductInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.IconAlert;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.ui.alert.SaierdouChangeAltert;
   import com.robot.core.utils.RectangleMask;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class ItemCmdListener extends BaseBean
   {
      
      public static var ITEM_NAME:String;
      
      private static var THROW_THING:uint = 6;
      
      private static var isClose:Boolean = false;
       
      
      private var str:String;
      
      private var buyItemList:Array;
      
      public function ItemCmdListener()
      {
         this.buyItemList = [];
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_BUY,this.onItemBuy);
         SocketConnection.addCmdListener(CommandID.MULTI_ITEM_BUY,this.onMultiItemBuy);
         SocketConnection.addCmdListener(CommandID.GOLD_BUY_PRODUCT,this.onBuyGoldProduct);
         SocketConnection.addCmdListener(CommandID.MONEY_BUY_PRODUCT,this.onBuyMoneyProduct);
         SocketConnection.addCmdListener(CommandID.SHOP_CART_BUY,this.onShopBuy);
         SocketConnection.mainSocket.addErrorListener(CommandID.GOLD_BUY_PRODUCT,this.errorFun);
         SocketConnection.mainSocket.addErrorListener(CommandID.MONEY_BUY_PRODUCT,this.errorFun);
         EventManager.addEventListener(RobotEvent.CLOSE_BUY_ITEM_SHOW,this.onCloseItemShow);
         EventManager.addEventListener(RobotEvent.OPEN_BUY_ITEM_SHOW,this.onOpenBuyItemShow);
         EventManager.addEventListener(RobotEvent.CLEAR_BUY_ITEM_SHOW,this.onClearBuyItemShow);
         ItemManager.updateLimititem();
         SocketConnection.addCmdListener(CommandID.LIMIT_TIME_ITEM_LIST_UPDATE,this.onlimitTimeItemHandle);
         finish();
      }
      
      private function onlimitTimeItemHandle(param1:SocketEvent) : void
      {
         var _loc5_:LimitItemInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = new LimitItemInfo(_loc2_);
            ItemManager.changeLimitItem(_loc5_);
            _loc4_++;
         }
      }
      
      private function errorFun(param1:*) : void
      {
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.CANCEL_MONEY_BUY));
      }
      
      private function onItemBuy(param1:SocketEvent) : void
      {
         var _loc2_:BuyItemInfo = param1.data as BuyItemInfo;
         var _loc3_:String = String(ItemXMLInfo.getName(_loc2_.itemID));
         this.buyItemList.push({
            "v":_loc2_,
            "n":_loc3_,
            "t":CommandID.ITEM_BUY
         });
         if(!MainManager.isFighting)
         {
            this.show();
         }
         else
         {
            LevelManager.stage.addEventListener(Event.ENTER_FRAME,this.onEnterHandler);
         }
      }
      
      private function onEnterHandler(param1:Event) : void
      {
         if(!MainManager.isFighting)
         {
            LevelManager.stage.removeEventListener(Event.ENTER_FRAME,this.onEnterHandler);
            this.show();
         }
      }
      
      private function parseItemBuy(param1:Object) : void
      {
         var exchange:Number;
         var data:BuyItemInfo = null;
         var index:int = 0;
         var numStr:String = null;
         var num:int = 0;
         var item:Object = param1;
         data = item.v as BuyItemInfo;
         var name:String = String(item.n);
         if(ItemXMLInfo.getIsMidleItem(data.itemID))
         {
            return;
         }
         exchange = data.cash - MainManager.actorInfo.coins;
         MainManager.actorInfo.coins = data.cash;
         EventManager.dispatchEvent(new DynamicEvent(SaierdouChangeAltert.SAIERDOU_CHANGE,exchange));
         if(ItemXMLInfo.getCatID(data.itemID) == 14 && data.itemID != 1400152 && data.itemID != 1400153)
         {
            if(data.itemID == 1400352 || ItemInBagAlert.SPECIAL_ALERT_ITEM_IDS.indexOf(data.itemID) != -1)
            {
               ItemInBagAlert.show(data.itemID,data.itemNum + "个" + TextFormatUtil.getRedTxt(name) + "已经放入了你的储存箱！");
            }
            else
            {
               ItemInBagMsgManager.showMsg(data.itemID,data.itemNum);
            }
            return;
         }
         if(ItemXMLInfo.getCatID(data.itemID) == THROW_THING)
         {
            AimatGridPanel.setItemForward(data.itemID);
            this.str = data.itemNum + "个<font color=\'#FF0000\'>" + name + "</font>已经放入你的投掷道具箱中。";
            Alarm.show(this.str,function():void
            {
               EventManager.dispatchEvent(new DynamicEvent(ItemAction.BUY_ONE,data.itemID));
            });
         }
         else
         {
            this.str = data.itemNum + "个<font color=\'#FF0000\'>" + name + "</font>已经放入你的储存箱。";
            if(data.itemID == 400889)
            {
               if(TasksManager.getTaskStatus(747) == TasksManager.ALR_ACCEPT)
               {
                  TasksManager.getProStatusList(747,function(param1:Array):void
                  {
                     var a:Array = param1;
                     if(Boolean(a[0]) && Boolean(a[1]) && !a[2])
                     {
                        ItemInBagAlert.show(data.itemID,str,function():void
                        {
                           EventManager.dispatchEvent(new DynamicEvent(ItemAction.BUY_ONE,data.itemID));
                        });
                     }
                  });
               }
            }
            else
            {
               index = this.str.indexOf("个");
               if(index != -1)
               {
                  numStr = this.str.substr(0,index);
                  num = int(numStr);
                  if(num <= 0)
                  {
                     return;
                  }
               }
               ItemInBagAlert.show(data.itemID,this.str,function():void
               {
                  if(TasksManager.getTaskStatus(87) != TasksManager.COMPLETE)
                  {
                     RectangleMask.dispatchEvent(new Event(RectangleMask.GOTO_NEXT));
                  }
                  EventManager.dispatchEvent(new DynamicEvent(ItemAction.BUY_ONE,data.itemID));
               });
            }
         }
      }
      
      private function show() : void
      {
         var _loc1_:Object = null;
         var _loc2_:int = 0;
         if(isClose)
         {
            return;
         }
         while(this.buyItemList.length)
         {
            _loc1_ = this.buyItemList.pop();
            _loc2_ = int(_loc1_.t);
            switch(_loc2_)
            {
               case CommandID.ITEM_BUY:
                  this.parseItemBuy(_loc1_);
                  break;
               case CommandID.MONEY_BUY_PRODUCT:
               case CommandID.GOLD_BUY_PRODUCT:
               case CommandID.SHOP_CART_BUY:
                  this.parseBuyMoneyProduct(_loc1_);
                  break;
            }
         }
      }
      
      private function onMultiItemBuy(param1:SocketEvent) : void
      {
         var event:SocketEvent = param1;
         var data:BuyMultiItemInfo = event.data as BuyMultiItemInfo;
         Alarm.show("<font color=\'#FF0000\'>" + ITEM_NAME + "</font>已经放入你的储存箱。",function():void
         {
            EventManager.dispatchEvent(new Event(ItemAction.BUY_MUILTY));
         });
      }
      
      private function onBuyGoldProduct(param1:SocketEvent) : void
      {
         var _loc2_:GoldBuyProductInfo = param1.data as GoldBuyProductInfo;
         var _loc3_:Array = GoldProductXMLInfo.getItemIDs(ProductAction.productID);
         var _loc4_:int = int(ProductAction.productNum);
         this.buyItemList.push({
            "v":_loc2_,
            "p":_loc3_,
            "n":_loc4_,
            "t":CommandID.GOLD_BUY_PRODUCT
         });
         EventManager.dispatchEvent(new DynamicEvent(RobotEvent.GOLD_BUY,_loc2_));
         EventManager.dispatchEvent(new DynamicEvent(RobotEvent.MONEY_BUY,_loc2_));
         this.show();
      }
      
      private function onShopBuy(param1:SocketEvent) : void
      {
         var _loc3_:Array = null;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc2_:GoldBuyProductInfo = param1.data as GoldBuyProductInfo;
         for each(_loc3_ in ProductAction.shopCartProducts)
         {
            _loc4_ = GoldProductXMLInfo.getItemIDs(_loc3_[0]);
            _loc5_ = int(_loc3_[1]);
            this.buyItemList.push({
               "v":_loc2_,
               "p":_loc4_,
               "n":_loc5_,
               "t":CommandID.SHOP_CART_BUY
            });
         }
         EventManager.dispatchEvent(new DynamicEvent(RobotEvent.GOLD_BUY,_loc2_));
         EventManager.dispatchEvent(new DynamicEvent(RobotEvent.MONEY_BUY,_loc2_));
         this.show();
      }
      
      private function onBuyMoneyProduct(param1:SocketEvent) : void
      {
         var _loc2_:MoneyBuyProductInfo = param1.data as MoneyBuyProductInfo;
         var _loc3_:Array = MoneyProductXMLInfo.getItemIDs(ProductAction.productID);
         var _loc4_:int = int(ProductAction.productNum);
         this.buyItemList.push({
            "v":_loc2_,
            "p":_loc3_,
            "n":_loc4_,
            "t":CommandID.MONEY_BUY_PRODUCT
         });
         EventManager.dispatchEvent(new DynamicEvent(RobotEvent.DIAMOND_BUY,_loc2_));
         this.show();
      }
      
      private function parseBuyMoneyProduct(param1:Object) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:Object = null;
         var _loc6_:String = null;
         var _loc7_:Sprite = null;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         var _loc2_:Array = param1.p;
         var _loc3_:Array = [];
         for each(_loc4_ in _loc2_)
         {
            if((_loc5_ = ItemXMLInfo.getItemObj(_loc4_)) != null)
            {
               if((_loc8_ = int(_loc5_["SkinId"])) > 0)
               {
                  SocketConnection.send(47315,_loc4_);
                  return;
               }
            }
            if(ItemXMLInfo.getIsMidleItem(_loc4_))
            {
               _loc9_ = int(ItemXMLInfo.getTargetItemId(_loc4_));
               if((_loc10_ = int(ItemXMLInfo.getExchangeId(_loc4_))) > 0)
               {
                  if(param1.n == 1)
                  {
                     KTool.doExchange(_loc10_);
                  }
                  else
                  {
                     KTool.doMultiExchange(_loc10_,param1.n);
                  }
               }
               else
               {
                  DebugTrace.show("这个中间物品无兑换id");
               }
               return;
            }
            if(CountermarkXMLInfo.isminMark(_loc4_))
            {
               _loc6_ = String(CountermarkXMLInfo.getDes(_loc4_));
            }
            else
            {
               _loc6_ = String(ItemXMLInfo.getName(_loc4_));
            }
            if(_loc4_ == 5)
            {
               _loc6_ = String(MoneyProductXMLInfo.getNameByProID(ProductAction.productID));
               IconAlert.show("你获得了" + TextFormatUtil.getRedTxt(_loc6_) + "，快去<font color=\'#ff0000\'>购买商城中的各种折扣道具吧！^_^",_loc4_,null,null,false);
            }
            else if(_loc4_ == 400072)
            {
               SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,79);
            }
            else if(_loc4_ > 500000 && _loc4_ < 600000)
            {
               _loc7_ = IconAlert.show("恭喜你购买成功，" + TextFormatUtil.getRedTxt(_loc6_) + "已经放入你的基地仓库中。",_loc4_,null,null,false);
            }
            else
            {
               _loc7_ = ItemInBagAlert.show(_loc4_,"恭喜你购买成功，" + TextFormatUtil.getRedTxt(_loc6_) + "已经放入你的储存箱中。");
            }
            _loc3_.push(_loc7_);
         }
         EventManager.dispatchEvent(new DynamicEvent(RobotEvent.BUY_ITEM_PANEL,_loc3_));
      }
      
      private function onCloseItemShow(param1:DynamicEvent) : void
      {
         isClose = true;
      }
      
      private function onOpenBuyItemShow(param1:DynamicEvent) : void
      {
         isClose = false;
         this.show();
      }
      
      private function onClearBuyItemShow(param1:DynamicEvent) : void
      {
         isClose = false;
         this.buyItemList.splice(0);
      }
   }
}
