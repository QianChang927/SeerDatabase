package com.robot.app.buyItem
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.mapProcess.control.ColorfulPrivilegeWishController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.IconAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   
   public class ItemAction
   {
      
      public static const FLAG_IN_BAG:uint = 0;
      
      public static const FLAG_ON_BODY:uint = 1;
      
      public static const FLAG_ALL:uint = 2;
      
      public static const BUY_ONE:String = "buyOne";
      
      public static const BUY_MUILTY:String = "buyMuilty";
      
      private static var _buyApp:AppModel;
       
      
      public function ItemAction()
      {
         super();
      }
      
      public static function listItem(param1:uint = 100001, param2:uint = 101001, param3:uint = 2) : void
      {
         SocketConnection.send(CommandID.ITEM_LIST,param1,param2,param3);
      }
      
      public static function showBuyPanel(param1:uint) : void
      {
         if(!_buyApp)
         {
            _buyApp = new AppModel(ClientConfig.getAppModule("BuyItemTipPanel"),"正在打开购买面板");
            _buyApp.setup();
         }
         _buyApp.init(param1);
         _buyApp.show();
      }
      
      public static function desBuyPanel() : void
      {
         if(_buyApp)
         {
            _buyApp.destroy();
            _buyApp = null;
         }
      }
      
      public static function buyItem(param1:uint, param2:Boolean = true, param3:uint = 1) : void
      {
         var price:uint;
         var name:String;
         var str:String;
         var id:uint = param1;
         var isTip:Boolean = param2;
         var count:uint = param3;
         if(id == 500593 || id == 500604)
         {
            FitmentAction.buyItem(id,isTip,count);
            return;
         }
         if(ItemXMLInfo.getVipOnly(id))
         {
            if(!MainManager.actorInfo.isVip)
            {
               if(ColorfulPrivilegeWishController.bonusType != 3)
               {
                  Alert.show("必须拥有" + TextFormatUtil.getRedTxt("超能NONO") + "才能购买茜茜倾力打造的尖端装扮！想立刻开通吗？",function():void
                  {
                     LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
                  });
                  return;
               }
            }
            else if(MainManager.actorInfo.vipLevel < ItemXMLInfo.getVipLevel(id))
            {
               Alarm.show("你的超能NoNo等级没有达到购买需求！");
               return;
            }
         }
         if(!isTip)
         {
            SocketConnection.send(CommandID.ITEM_BUY,id,count);
            return;
         }
         price = uint(ItemXMLInfo.getPrice(id));
         name = String(ItemXMLInfo.getName(id));
         str = "";
         if(count > 1)
         {
            str += count + "个";
         }
         if(price > 0)
         {
            if(MainManager.isClothHalfDay)
            {
               str += "<font color=\'#ff0000\'>" + name + "</font>需要花费" + price.toString() + "赛尔豆，<font color=\'#ff0000\'>（半价日只需要花费" + price / 2 + "赛尔豆）</font>，要确定购买吗？";
            }
            else
            {
               str += "<font color=\'#ff0000\'>" + name + "</font>需要花费" + price * count + "赛尔豆，" + "你现在拥有" + MainManager.actorInfo.coins + "赛尔豆，要确定购买吗？";
            }
         }
         else
         {
            str += "<font color=\'#ff0000\'>" + name + "</font>免费赠送，你确定现在就要领取吗？";
         }
         IconAlert.show(str,id,function():void
         {
            SocketConnection.send(CommandID.ITEM_BUY,id,count);
         });
      }
      
      public static function buyMultiItem(param1:uint, param2:String, ... rest) : void
      {
         var _loc5_:uint = 0;
         var _loc4_:ByteArray;
         (_loc4_ = new ByteArray()).writeUnsignedInt(param1);
         for each(_loc5_ in rest)
         {
            _loc4_.writeUnsignedInt(_loc5_);
         }
         ItemCmdListener.ITEM_NAME = param2;
         SocketConnection.send(CommandID.MULTI_ITEM_BUY,_loc4_);
      }
   }
}
