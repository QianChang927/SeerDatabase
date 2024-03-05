package com.robot.app.buyItem
{
   import com.adobe.crypto.MD5;
   import com.robot.app.ParseSocketError;
   import com.robot.app.bag.BagClothPreview;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.GoldProductXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.MoneyProductXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.ClothPreview;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.component.control.MLoadPane;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class ProductAction
   {
      
      public static var showAlert:Boolean = true;
      
      private static var _id:uint;
      
      private static var _cnt:uint;
      
      private static var _isBuy:Boolean = false;
      
      private static var _hasPSW:Boolean = false;
      
      private static var _moneySession:Boolean = false;
      
      private static var _moneyUI:MovieClip;
      
      private static var _loadPanel:MLoadPane;
      
      public static var isNeedPaymentCode:Boolean = false;
      
      private static var _alertFun:Function = null;
      
      private static var _skipAlert:Boolean;
      
      private static var _withTag:Boolean;
      
      private static var _alertResult:Boolean;
      
      private static var _resultFun:Function;
      
      private static var result:int;
      
      public static var LAST_MIBI_NUM:int;
      
      private static var _shopCartProducts:Array = [];
      
      private static var _shopCartAmount:int;
      
      private static var _isShopCartBuy:Boolean = false;
      
      {
         setup();
      }
      
      public function ProductAction()
      {
         super();
      }
      
      public static function get productID() : uint
      {
         return _id;
      }
      
      public static function get shopCartProducts() : Array
      {
         return _shopCartProducts;
      }
      
      public static function get productNum() : uint
      {
         return _cnt;
      }
      
      public static function getPaymentStatus() : void
      {
         SocketConnection.addCmdListener(CommandID.PAYMENT_CODE_AUTH_GET_STATUS,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.PAYMENT_CODE_AUTH_GET_STATUS,arguments.callee);
            isNeedPaymentCode = Boolean((param1.data as ByteArray).readUnsignedInt());
         });
         SocketConnection.send(CommandID.PAYMENT_CODE_AUTH_GET_STATUS);
      }
      
      private static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.GOLD_CHECK_REMAIN,onCheckGold);
         SocketConnection.addCmdListener(CommandID.MONEY_CHECK_REMAIN,onCheckMoney);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMap);
         ParseSocketError.addErrorListener(214331,onSessionError);
         SocketConnection.addCmdListener(CommandID.MONEY_BUY_PRODUCT,onBuyMoney);
      }
      
      public static function buyGoldProduct(param1:uint, param2:uint = 1) : void
      {
         _id = param1;
         _cnt = param2;
         _isBuy = true;
         _isShopCartBuy = false;
         SocketConnection.send(CommandID.GOLD_CHECK_REMAIN);
      }
      
      public static function buyShopCart(param1:Array, param2:int) : void
      {
         _shopCartProducts = param1;
         _shopCartAmount = param2;
         _isBuy = true;
         _isShopCartBuy = true;
         SocketConnection.send(CommandID.GOLD_CHECK_REMAIN);
      }
      
      private static function onCheckGold(param1:SocketEvent) : void
      {
         var by:ByteArray;
         var num:Number = NaN;
         var name:String = null;
         var priceTotal:Number = NaN;
         var price:Number = NaN;
         var byby:ByteArray = null;
         var event:SocketEvent = param1;
         if(_isBuy == false)
         {
            return;
         }
         _isBuy = false;
         closeMouseEnabled();
         by = event.data as ByteArray;
         num = by.readUnsignedInt() / 100;
         if(_isShopCartBuy)
         {
            name = "购物车全部商品";
            priceTotal = _shopCartAmount;
         }
         else
         {
            name = GoldProductXMLInfo.getNameByProID(_id) + "*" + _cnt.toString();
            price = Number(GoldProductXMLInfo.getPriceByProID(_id));
            if(MainManager.actorInfo.vip)
            {
               priceTotal = price * GoldProductXMLInfo.getVipByProID(_id) * _cnt;
            }
            else
            {
               priceTotal = price * _cnt;
            }
         }
         if(num >= priceTotal)
         {
            if(showAlert)
            {
               Alert.show(TextFormatUtil.getRedTxt(name) + "需要花费" + TextFormatUtil.getRedTxt(priceTotal.toString()) + "钻石，你的钻石余额为" + TextFormatUtil.getRedTxt(num.toString()) + "，确认购买此物品吗？",function():void
               {
                  var _loc1_:ByteArray = null;
                  if(_isShopCartBuy)
                  {
                     SocketConnection.send(CommandID.SHOP_CART_BUY);
                  }
                  else
                  {
                     _loc1_ = new ByteArray();
                     _loc1_.writeShort(_cnt);
                     SocketConnection.send(CommandID.GOLD_BUY_PRODUCT,_id,_loc1_);
                  }
                  openMouseEnabled();
               },function():void
               {
                  EventManager.dispatchEvent(new RobotEvent(RobotEvent.CANCEL_MONEY_BUY));
               });
            }
            else
            {
               if(_isShopCartBuy)
               {
                  SocketConnection.send(CommandID.SHOP_CART_BUY);
               }
               else
               {
                  byby = new ByteArray();
                  byby.writeShort(_cnt);
                  SocketConnection.send(CommandID.GOLD_BUY_PRODUCT,_id,byby);
               }
               openMouseEnabled();
            }
         }
         else
         {
            SocketConnection.send(1022,86054885);
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.CANCEL_MONEY_BUY));
            Alert.show(TextFormatUtil.getRedTxt(name) + "需要花费" + TextFormatUtil.getRedTxt(priceTotal.toString()) + "钻石，你的钻石余额为" + TextFormatUtil.getRedTxt(num.toString()) + "，不足以购买此物品！是否立即换取钻石？",function():void
            {
               if(priceTotal - num >= 100)
               {
                  buyMoneyProduct(200003,priceTotal - num);
                  SocketConnection.send(1022,86054886);
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("GoldBuyPanel"));
               }
            },function():void
            {
               SocketConnection.send(1022,86054887);
            });
         }
      }
      
      public static function buyMoneyProduct(param1:uint, param2:uint = 1, param3:Function = null, param4:Boolean = false, param5:Boolean = false, param6:Function = null) : void
      {
         var id:uint = param1;
         var cnt:uint = param2;
         var alertFun:Function = param3;
         var skipAlert:Boolean = param4;
         var withTag:Boolean = param5;
         var resultFun:Function = param6;
         if(MoneyProductXMLInfo.containsPid(id))
         {
            _id = id;
            _cnt = cnt;
            _alertFun = alertFun;
            _skipAlert = skipAlert;
            _withTag = withTag;
            _resultFun = resultFun;
            if(_hasPSW || !isNeedPaymentCode)
            {
               SocketConnection.sendByQueue(42386,[8],function(param1:SocketEvent):void
               {
                  result = ByteArray(param1.data).readInt();
                  if(result == 0)
                  {
                     ModuleManager.showAppModule("BindingPhonePanel",[id,cnt]);
                  }
                  else
                  {
                     _isBuy = true;
                     SocketConnection.send(CommandID.MONEY_CHECK_REMAIN);
                  }
               });
            }
            else
            {
               SocketConnection.addCmdListener(CommandID.MONEY_CHECK_PSW,onCheckPSW);
               SocketConnection.send(CommandID.MONEY_CHECK_PSW);
            }
         }
         else
         {
            buyGoldProduct(id,cnt);
         }
      }
      
      public static function checkbuyMoneyProduct(param1:uint, param2:uint = 1, param3:Function = null, param4:Boolean = false, param5:Boolean = false, param6:Function = null) : void
      {
         if(MoneyProductXMLInfo.containsPid(param1))
         {
            _id = param1;
            _cnt = param2;
            _alertFun = param3;
            _skipAlert = param4;
            _withTag = param5;
            _resultFun = param6;
            if(_hasPSW || !isNeedPaymentCode)
            {
               _isBuy = true;
               SocketConnection.send(CommandID.MONEY_CHECK_REMAIN);
            }
            else
            {
               SocketConnection.addCmdListener(CommandID.MONEY_CHECK_PSW,onCheckPSW);
               SocketConnection.send(CommandID.MONEY_CHECK_PSW);
            }
         }
         else
         {
            buyGoldProduct(param1,param2);
         }
      }
      
      public static function onCheckPanel() : void
      {
         SocketConnection.addCmdListener(CommandID.MONEY_CHECK_PSW,onCheckPSW);
      }
      
      private static function onCheckPSW(param1:SocketEvent) : void
      {
         var by:ByteArray;
         var flag:uint;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.MONEY_CHECK_PSW,onCheckPSW);
         by = event.data as ByteArray;
         flag = by.readUnsignedInt();
         if(flag == 1)
         {
            _hasPSW = true;
         }
         else
         {
            _hasPSW = false;
         }
         if(_hasPSW)
         {
            _isBuy = true;
            SocketConnection.send(CommandID.MONEY_CHECK_REMAIN);
         }
         else
         {
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.CANCEL_MONEY_BUY));
            if(_alertFun == null)
            {
               Alert.show("你还没有完成米币账户设置，购买米币商品必须输入" + TextFormatUtil.getRedTxt("米币账户支付密码") + "，确认现在去设置" + TextFormatUtil.getRedTxt("米币账户支付密码") + "吗？",function():void
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_1);
               });
            }
            else
            {
               _alertFun("你还没有完成米币账户设置，购买米币商品必须输入" + TextFormatUtil.getRedTxt("米币账户支付密码") + "，确认现在去设置" + TextFormatUtil.getRedTxt("米币账户支付密码") + "吗？",function():void
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_1);
               });
            }
         }
      }
      
      private static function onCheckMoney(param1:SocketEvent) : void
      {
         var _loc6_:ByteArray = null;
         var _loc7_:ByteArray = null;
         var _loc8_:* = null;
         if(_isBuy == false)
         {
            return;
         }
         _isBuy = false;
         closeMouseEnabled();
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:Number = _loc2_.readUnsignedInt() / 100;
         LAST_MIBI_NUM = _loc3_;
         var _loc4_:String = String(MoneyProductXMLInfo.getNameByProID(_id));
         var _loc5_:Number = getTotalPrice();
         if(_loc3_ >= _loc5_)
         {
            buyCoinStatistics(_id);
            if(!isNeedPaymentCode || _moneySession)
            {
               (_loc6_ = new ByteArray()).writeShort(_cnt);
               (_loc7_ = new ByteArray()).writeUTFBytes("");
               _loc7_.length = 32;
               _loc8_ = _cnt * MoneyProductXMLInfo.getGoldByProID(_id) + "个" + TextFormatUtil.getRedTxt(_loc4_) + "需要花费" + TextFormatUtil.getRedTxt(_loc5_.toString()) + "米币，你的米币余额为" + TextFormatUtil.getRedTxt(_loc3_.toString()) + "，确认购买此物品吗？";
               if(_alertFun == null)
               {
                  if(_skipAlert)
                  {
                     SocketConnection.send(CommandID.MONEY_BUY_PRODUCT,_id,_loc6_,_loc7_);
                  }
                  else
                  {
                     showAlertMsg(_loc8_,_loc6_,_loc7_);
                  }
               }
               else
               {
                  showCallbackAlertFun(_loc8_,_loc6_,_loc7_);
               }
            }
            else
            {
               showMoneyPasswordUI(_loc4_,_loc3_,_loc5_);
            }
         }
         else
         {
            moneyNotEnough(_loc4_,_loc3_,_loc5_);
         }
      }
      
      private static function showAlertMsg(param1:String, param2:ByteArray, param3:ByteArray) : void
      {
         var msg:String = param1;
         var by1:ByteArray = param2;
         var psw1:ByteArray = param3;
         Alert.show(msg,function(param1:Boolean = false):void
         {
            SocketConnection.send(CommandID.MONEY_BUY_PRODUCT,_id,by1,psw1);
            comfirmBuyCoinStatistics(_id);
            if(_withTag && _resultFun != null)
            {
               _resultFun(param1);
            }
         },function():void
         {
            openMouseEnabled();
            cancelBuyCoinStatistics(_id);
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.CANCEL_MONEY_BUY));
         },_withTag);
      }
      
      private static function showCallbackAlertFun(param1:String, param2:ByteArray, param3:ByteArray) : void
      {
         var msg:String = param1;
         var by1:ByteArray = param2;
         var psw1:ByteArray = param3;
         _alertFun(msg,function():void
         {
            SocketConnection.send(CommandID.MONEY_BUY_PRODUCT,_id,by1,psw1);
            openMouseEnabled();
            comfirmBuyCoinStatistics(_id);
         },function():void
         {
            openMouseEnabled();
            cancelBuyCoinStatistics(_id);
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.CANCEL_MONEY_BUY));
         });
         _alertFun = null;
      }
      
      private static function getTotalPrice() : Number
      {
         var _loc1_:Number = NaN;
         var _loc2_:Number = Number(MoneyProductXMLInfo.getPriceByProID(_id));
         if(MainManager.actorInfo.vip)
         {
            _loc1_ = _loc2_ * MoneyProductXMLInfo.getVipByProID(_id) * _cnt;
         }
         else
         {
            _loc1_ = _loc2_ * _cnt;
         }
         return Number(_loc1_.toFixed(2));
      }
      
      private static function showMoneyPasswordUI(param1:String, param2:int, param3:Number) : void
      {
         var _loc6_:Array = null;
         var _loc7_:uint = 0;
         var _loc8_:Sprite = null;
         var _loc9_:BagClothPreview = null;
         getMoneyUi();
         var _loc4_:Array = MoneyProductXMLInfo.getItemIDs(_id);
         var _loc5_:String;
         if((_loc5_ = String(MoneyProductXMLInfo.getIcon(_id))) != "")
         {
            _loadPanel.setIcon(ClientConfig.getResPath(_loc5_ + _id + ".swf"));
         }
         else if(_loc4_.length == 1)
         {
            if(CountermarkXMLInfo.isminMark(_loc4_[0]))
            {
               _loadPanel.setIcon(CountermarkXMLInfo.getIconURL(_loc4_[0]));
            }
            else
            {
               _loadPanel.setIcon(ItemXMLInfo.getIconURL(_loc4_[0]));
            }
         }
         else if(_id != 201092)
         {
            _loc6_ = [];
            for each(_loc7_ in _loc4_)
            {
               _loc6_.push(new PeopleItemInfo(_loc7_));
            }
            _loc8_ = UIManager.getSprite("ComposeMC");
            (_loc9_ = new BagClothPreview(_loc8_,null,ClothPreview.MODEL_SHOW)).changeCloth(_loc6_);
            _loadPanel.setIcon(_loc8_);
         }
         _moneyUI["txt"].text = "";
         _moneyUI["info"].htmlText = TextFormatUtil.getRedTxt(param1) + "需要花费" + TextFormatUtil.getRedTxt(param3.toString()) + "米币，你的米币余额为" + TextFormatUtil.getRedTxt(param2.toString()) + "，若确认购买此物品，请输入你的" + TextFormatUtil.getRedTxt("米币账户支付密码") + "：";
         _moneyUI.addEventListener(Event.REMOVED_FROM_STAGE,onRemoveFormStage);
         MainManager.getStage().addChild(_moneyUI);
         MainManager.getStage().focus = _moneyUI["txt"];
         DisplayUtil.align(_moneyUI,null,AlignType.MIDDLE_CENTER);
      }
      
      private static function buyCoinStatistics(param1:int) : void
      {
         if(param1 >= 200000 && param1 <= 200002)
         {
            SocketConnection.send(1022,86054870 + param1 - 200000);
         }
      }
      
      private static function comfirmBuyCoinStatistics(param1:int) : void
      {
         if(param1 == 200000 || param1 == 200001 || param1 == 200002)
         {
            SocketConnection.send(1022,86054873);
         }
      }
      
      private static function cancelBuyCoinStatistics(param1:int) : void
      {
         if(param1 == 200000 || param1 == 200001 || param1 == 200002)
         {
            SocketConnection.send(1022,86054874);
         }
      }
      
      private static function moneyNotEnough(param1:String, param2:int, param3:Number) : void
      {
         var txt:String = null;
         var name:String = param1;
         var num:int = param2;
         var priceTotal:Number = param3;
         SocketConnection.send(1022,86054882);
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.CANCEL_MONEY_BUY));
         if(_alertFun == null)
         {
            txt = TextFormatUtil.getRedTxt(name) + "需要花费" + TextFormatUtil.getRedTxt(priceTotal.toString()) + "米币，你的米币余额为" + TextFormatUtil.getRedTxt(num.toString()) + "，不足以购买此物品！是否立即充值米币？";
            ModuleManager.showModule(ClientConfig.getAppModule("NotEnoughMoneyTipPanel"),"......",txt);
            openMouseEnabled();
         }
         else
         {
            _alertFun(TextFormatUtil.getRedTxt(name) + "需要花费" + TextFormatUtil.getRedTxt(priceTotal.toString()) + "米币，你的米币余额为" + TextFormatUtil.getRedTxt(num.toString()) + "，不足以购买此物品！是否立即充值米币？",function():void
            {
               checkPhoneBinding();
               SocketConnection.send(1022,86054883);
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_2);
            },function():void
            {
               SocketConnection.send(1022,86054884);
            });
         }
      }
      
      private static function getMoneyUi() : void
      {
         if(_moneyUI == null)
         {
            _moneyUI = UIManager.getMovieClip("ui_moneyBuyPanel");
            _moneyUI["close"].addEventListener(MouseEvent.CLICK,onMoneyClose);
            _moneyUI["ok"].addEventListener(MouseEvent.CLICK,onMoneyOk);
            _moneyUI["cancel"].addEventListener(MouseEvent.CLICK,onMoneyClose);
            _loadPanel = new MLoadPane(null,MLoadPane.FIT_HEIGHT);
            _loadPanel.x = 56;
            _loadPanel.y = 104;
            _loadPanel.isMask = false;
            _loadPanel.setSizeWH(84,84);
            _moneyUI.addChild(_loadPanel);
         }
      }
      
      private static function onMoneyClose(param1:MouseEvent) : void
      {
         openMouseEnabled();
         DisplayUtil.removeForParent(_moneyUI,false);
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.CANCEL_MONEY_BUY));
         if(_id == 200000 || _id == 200001 || _id == 200002)
         {
            SocketConnection.send(1022,86054874);
         }
      }
      
      private static function onRemoveFormStage(param1:Event) : void
      {
         _moneyUI.removeEventListener(Event.REMOVED_FROM_STAGE,onRemoveFormStage);
         EventManager.dispatchEvent(new Event(Event.CLOSE));
      }
      
      private static function onMoneyOk(param1:MouseEvent) : void
      {
         if(_moneyUI["txt"].text == "")
         {
            Alarm.show("请输入你的米币账户支付密码！");
            return;
         }
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeShort(_cnt);
         var _loc3_:ByteArray = new ByteArray();
         _loc3_.writeUTFBytes(MD5.hash(_moneyUI["txt"].text));
         _loc3_.length = 32;
         SocketConnection.send(CommandID.MONEY_BUY_PRODUCT,_id,_loc2_,_loc3_);
         openMouseEnabled();
         DisplayUtil.removeForParent(_moneyUI,false);
         if(_id == 200000 || _id == 200001 || _id == 200002)
         {
            SocketConnection.send(1022,86054873);
         }
      }
      
      private static function onMap(param1:MapEvent) : void
      {
         if(MapManager.currentMap)
         {
            if(MapManager.currentMap.id > 50000)
            {
               _moneySession = false;
            }
         }
      }
      
      private static function onSessionError(param1:Event) : void
      {
         _moneySession = false;
         buyMoneyProduct(_id,_cnt);
      }
      
      private static function onBuyMoney(param1:SocketEvent) : void
      {
         _moneySession = true;
         openMouseEnabled();
      }
      
      public static function buyCoinsProduct2(param1:uint, param2:uint = 1) : void
      {
         var name:String;
         var price:int;
         var id:uint = param1;
         var cnt:uint = param2;
         _id = id;
         _cnt = cnt;
         closeMouseEnabled();
         name = String(ItemXMLInfo.getName(id));
         price = int(ItemXMLInfo.getPrice(id));
         if(MainManager.actorInfo.coins >= price)
         {
            Alert.show(TextFormatUtil.getRedTxt(name) + "需要花费" + TextFormatUtil.getRedTxt((price * _cnt).toString()) + "赛尔豆，" + "你目前拥有" + TextFormatUtil.getRedTxt(MainManager.actorInfo.coins.toString()) + "赛尔豆，确认购买此物品吗？",function():void
            {
               SocketConnection.send(CommandID.ITEM_BUY,_id,cnt);
               openMouseEnabled();
            });
         }
         else
         {
            Alarm.show("赛尔豆不够，无法购买！");
            openMouseEnabled();
         }
      }
      
      public static function checkPhoneBinding() : void
      {
         SocketConnection.sendByQueue(42386,[8],function(param1:SocketEvent):void
         {
            result = ByteArray(param1.data).readInt();
            if(result == 0)
            {
               ModuleManager.showAppModule("BindingPhonePanel");
            }
         });
      }
      
      private static function openMouseEnabled() : void
      {
         LevelManager.openMouseEvent();
         LevelManager.appLevel.mouseEnabled = true;
         LevelManager.appLevel.mouseChildren = true;
      }
      
      private static function closeMouseEnabled() : void
      {
         LevelManager.closeMouseEvent();
         LevelManager.appLevel.mouseEnabled = false;
         LevelManager.appLevel.mouseChildren = false;
      }
   }
}
