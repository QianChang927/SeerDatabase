package com.robot.app.buyItem
{
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.utils.Dictionary;
   import org.taomee.bean.BaseBean;
   import org.taomee.ds.HashMap;
   
   public class ItemInBagMsgManager extends BaseBean
   {
      
      private static var mCommItems:Array;
      
      private static var mCommMsg:String;
      
      private static var mColors:HashMap = new HashMap();
      
      private static var mMsgs:HashMap = new HashMap();
      
      public static var configXml:XML;
      
      private static var _authDic:Dictionary = new Dictionary();
       
      
      public function ItemInBagMsgManager()
      {
         super();
      }
      
      public static function setUp() : void
      {
         var _loc1_:XML = configXml.elements("colors")[0];
         var _loc2_:XML = configXml.elements("comm_items")[0];
         var _loc3_:XML = configXml.elements("special_items")[0];
         var _loc4_:XMLList = _loc1_.elements("color");
         parseColor(_loc4_);
         var _loc5_:String = String(_loc2_.elements("items")[0]);
         mCommItems = _loc5_.split(",");
         mCommMsg = String(_loc2_.elements("msg")[0]);
         var _loc6_:XMLList = _loc3_.elements("item");
         parseSpecialItems(_loc6_);
      }
      
      private static function parseColor(param1:XMLList) : void
      {
         var _loc2_:XML = null;
         var _loc3_:String = null;
         var _loc4_:String = null;
         for each(_loc2_ in param1)
         {
            _loc3_ = _loc2_.@name;
            _loc4_ = _loc2_.@code;
            mColors.add(_loc3_,_loc4_);
         }
      }
      
      private static function parseSpecialItems(param1:XMLList) : void
      {
         var _loc2_:XML = null;
         var _loc3_:int = 0;
         var _loc4_:String = null;
         for each(_loc2_ in param1)
         {
            _loc3_ = int(_loc2_.@id);
            _loc4_ = _loc2_.@msg;
            mColors.add(_loc3_,_loc4_);
         }
      }
      
      public static function hasMsg(param1:int) : Boolean
      {
         var _loc2_:Boolean = false;
         if(mCommItems.indexOf(param1.toString()) >= 0)
         {
            _loc2_ = true;
         }
         if(mMsgs.containsKey(param1.toString()))
         {
            _loc2_ = true;
         }
         return _loc2_;
      }
      
      private static function getItemName(param1:int) : String
      {
         return ItemXMLInfo.getName(param1);
      }
      
      public static function getMsg(param1:int, param2:int) : String
      {
         var _loc4_:String = null;
         var _loc3_:String = null;
         if(mCommItems.indexOf(param1.toString()) >= 0)
         {
            _loc3_ = mCommMsg;
         }
         if(_loc3_)
         {
            _loc4_ = getItemName(param1);
            _loc3_ = _loc3_.replace("{$num}",param2);
            _loc3_ = _loc3_.replace("{$name}",_loc4_);
         }
         return replaceColor(_loc3_);
      }
      
      public static function showMsg(param1:int, param2:int) : void
      {
         var msg:String = null;
         var itemId:int = param1;
         var num:int = param2;
         msg = getMsg(itemId,num);
         if(msg)
         {
            if(msg.indexOf("{$myCount}") >= 0)
            {
               ItemManager.upDateCollection(itemId,function():void
               {
                  var _loc1_:uint = uint(ItemManager.getNumByID(itemId));
                  msg = msg.replace("{$myCount}",_loc1_);
                  SimpleAlarm.show(msg);
               });
            }
            else
            {
               Alarm.show(msg);
            }
         }
      }
      
      private static function replaceColor(param1:String) : String
      {
         var _loc2_:Array = null;
         var _loc3_:int = 0;
         var _loc4_:String = null;
         if(param1)
         {
            _loc2_ = mColors.getKeys();
            _loc3_ = 0;
            while(_loc3_ < _loc2_.length)
            {
               _loc4_ = String(_loc2_[_loc3_]);
               if(param1.indexOf("{$" + _loc4_ + "}") >= 0)
               {
                  param1 = param1.replace("{$" + _loc4_ + "}","<font color=\'#" + mColors.getValue(_loc4_) + "\'>");
                  param1 = param1.replace("{$/" + _loc4_ + "}","</font>");
                  break;
               }
               _loc3_++;
            }
         }
         return param1;
      }
      
      override public function start() : void
      {
         var loader:SeerUrlLoader = new SeerUrlLoader("加载物品配置文件");
         PreloadZipXMLController.getXML("item_msg_config.xml",function(param1:*):void
         {
            configXml = new XML(param1);
            setUp();
            finish();
         });
      }
   }
}
