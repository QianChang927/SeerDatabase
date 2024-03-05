package com.robot.app.magicPassword
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class MagicPasswordModel
   {
      
      private static var gift_a:Array;
      
      private static const MAX:int = 32;
      
      private static var _list:com.robot.app.magicPassword.GiftItemInfo;
       
      
      public function MagicPasswordModel()
      {
         super();
      }
      
      public static function send(param1:String) : void
      {
         SocketConnection.addCmdListener(CommandID.GET_GIFT_COMPLETE,onSendCompleteHandler);
         var _loc2_:ByteArray = new ByteArray();
         var _loc3_:int = param1.length;
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            if(_loc2_.length > MAX)
            {
               break;
            }
            _loc2_.writeUTFBytes(param1.charAt(_loc4_));
            _loc4_++;
         }
         SocketConnection.send(CommandID.GET_GIFT_COMPLETE,_loc2_);
      }
      
      private static function onSendCompleteHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_GIFT_COMPLETE,onSendCompleteHandler);
         _list = param1.data as com.robot.app.magicPassword.GiftItemInfo;
         gift_a = _list.giftList;
         if(gift_a.length > 0)
         {
            search(gift_a);
         }
      }
      
      public static function get list() : Array
      {
         return gift_a;
      }
      
      private static function search(param1:Array) : void
      {
         var _loc2_:int = 0;
         var _loc3_:String = null;
         _loc2_ = 0;
         while(_loc2_ < param1.length)
         {
            if(param1[_loc2_] == 1400261)
            {
               Alarm.show("激活码使用成功，已成功增加5次抽奖机会！");
            }
            else
            {
               if(param1[_loc2_] == 1)
               {
                  MainManager.actorInfo.coins += _list.getCound(param1[_loc2_]);
               }
               _loc3_ = String(TextFormatUtil.getRedTxt(ItemXMLInfo.getName(param1[_loc2_]) + "x" + _list.getCound(param1[_loc2_])));
               Alarm.show("兑换成功，" + _loc3_ + "已经放入你的储存箱，快去看看吧！");
            }
            _loc2_++;
         }
      }
   }
}
