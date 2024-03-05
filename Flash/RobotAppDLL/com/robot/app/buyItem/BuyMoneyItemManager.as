package com.robot.app.buyItem
{
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.MoneyProductXMLInfo;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.Sprite;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BuyMoneyItemManager
   {
      
      private static var _proID:uint;
      
      private static var _buyFun:Function;
      
      private static var _isSHowAlarm:Boolean;
      
      private static var _itemIDs:Array;
      
      private static var _checkItemFun:Function;
       
      
      public function BuyMoneyItemManager()
      {
         super();
      }
      
      public static function buyItem(param1:uint, param2:Function = null, param3:Boolean = true, param4:Boolean = true) : void
      {
         var arr:Array = null;
         var proID:uint = param1;
         var fun:Function = param2;
         var isChechHas:Boolean = param3;
         var isSHowAlarm:Boolean = param4;
         _proID = proID;
         _buyFun = fun;
         _isSHowAlarm = isSHowAlarm;
         if(isChechHas)
         {
            arr = MoneyProductXMLInfo.getItemIDs(proID);
            checkHasItem(arr,function(param1:Boolean):void
            {
               if(param1)
               {
                  if(fun != null)
                  {
                     fun();
                  }
               }
               else
               {
                  EventManager.addEventListener(RobotEvent.BUY_ITEM_PANEL,onBuySuc);
                  ProductAction.buyMoneyProduct(proID);
               }
            });
         }
         else
         {
            EventManager.addEventListener(RobotEvent.BUY_ITEM_PANEL,onBuySuc);
            ProductAction.buyMoneyProduct(proID);
         }
      }
      
      private static function checkHasItem(param1:Array, param2:Function) : void
      {
         _itemIDs = param1;
         _checkItemFun = param2;
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onGetColItemList);
         ItemManager.getCollection();
      }
      
      private static function onGetColItemList(param1:ItemEvent) : void
      {
         var _loc3_:uint = 0;
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onGetColItemList);
         var _loc2_:Array = ItemManager.getCollectionIDs();
         for each(_loc3_ in _itemIDs)
         {
            if(_loc2_.indexOf(_loc3_) == -1)
            {
               _checkItemFun(false);
               return;
            }
         }
         _checkItemFun(true);
      }
      
      private static function onBuySuc(param1:DynamicEvent) : void
      {
         var _loc3_:Sprite = null;
         EventManager.removeEventListener(RobotEvent.BUY_ITEM_PANEL,onBuySuc);
         var _loc2_:Array = param1.paramObject as Array;
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_)
            {
               DisplayUtil.removeForParent(_loc3_);
               _loc3_ = null;
            }
         }
         if(ProductAction.productID == _proID)
         {
            if(_isSHowAlarm)
            {
               SimpleAlarm.show("恭喜你购买成功，" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(MoneyProductXMLInfo.getItemIDs(_proID).shift())) + "已经放入你的储存箱中!");
            }
            if(_buyFun != null)
            {
               _buyFun();
            }
            LevelManager.openMouseEvent();
         }
      }
   }
}
