package com.robot.app.control
{
   import com.robot.app.mapProcess.control.ColorfulPrivilegeWishController;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.task.CateInfo;
   import com.robot.core.info.task.DayTalkInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.events.Event;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class GiftController
   {
      
      public static var weekFift:Boolean;
      
      public static var weekFiftSuper:Boolean;
      
      public static var monthFift:Boolean;
      
      public static var monthFiftSuper:Boolean;
      
      private static var _curType:uint;
      
      private static var _giftApp:AppModel;
      
      private static var _expList:Array = [null,20000,30000,40000,50000,60000];
      
      private static var _coinList:Array = [null,5000,6000,8000,11000,15000];
      
      public static const GET_GIFT_COMPLETE:String = "get_gift_complete";
      
      private static const a:Array = [5000,5500,6000,6500,7000,7500,8000,8500,9000,10000,11000,12000,13000,14000,15000];
      
      public static var weekGift:Boolean;
      
      public static var isGet:Boolean;
      
      public static var isGetS:Boolean;
      
      public static var tabIndex:uint;
      
      public static var pageIndex:uint;
       
      
      public function GiftController()
      {
         super();
      }
      
      public static function show() : void
      {
      }
      
      public static function getSuperNonoWeekFift(param1:uint) : void
      {
         if(param1 == 0)
         {
            EventManager.addEventListener("Error_10028",onErrorHandler);
         }
         _curType = param1;
         SocketConnection.addCmdListener(CommandID.REGULAR_NONO_GIFT,onGetSuperHandler);
         SocketConnection.send(CommandID.REGULAR_NONO_GIFT,param1);
      }
      
      private static function onGetSuperHandler(param1:SocketEvent) : void
      {
         var _loc2_:uint = 0;
         if(_curType == 0)
         {
            if(NonoManager.info.superLevel >= 10)
            {
               Alarm.show("恭喜你获得了" + TextFormatUtil.getRedTxt(22000 + (NonoManager.info.superLevel - 1) * 2000 + "积累经验！"));
            }
            else
            {
               Alarm.show("恭喜你获得了" + TextFormatUtil.getRedTxt(20000 + (NonoManager.info.superLevel - 1) * 2000 + "积累经验！"));
            }
            getSuperNonoWeekFift(1);
         }
         else
         {
            _loc2_ = uint(a[NonoManager.info.superLevel - 1]);
            Alarm.show("恭喜你获得了" + TextFormatUtil.getRedTxt(_loc2_.toString()) + "赛尔豆！");
            MainManager.actorInfo.coins += _loc2_;
            SocketConnection.removeCmdListener(CommandID.REGULAR_NONO_GIFT,onGetSuperHandler);
         }
      }
      
      private static function onErrorHandler(param1:Event) : void
      {
         EventManager.removeEventListener("Error_10028",onErrorHandler);
         getSuperNonoWeekFift(1);
      }
      
      public static function getNormalWeekGift() : void
      {
         weekGift = true;
         SocketConnection.addCmdListener(CommandID.TALK_CATE,onGetNormalWeekGift);
         SocketConnection.send(CommandID.TALK_CATE,1004);
      }
      
      private static function onGetNormalWeekGift(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TALK_CATE,onGetNormalWeekGift);
         Alarm.show("恭喜你获得了" + TextFormatUtil.getRedTxt("5000积累经验！"));
         EventManager.dispatchEvent(new Event(GiftController.GET_GIFT_COMPLETE));
      }
      
      public static function getMonthGiftNew() : void
      {
         isGetS = true;
         SocketConnection.addCmdListener(CommandID.TALK_CATE,onGetMonth);
         if(MainManager.actorInfo.isVip == false && ColorfulPrivilegeWishController._status == 2)
         {
            SocketConnection.send(CommandID.TALK_CATE,2111);
         }
         else
         {
            SocketConnection.send(CommandID.TALK_CATE,2110 + MainManager.actorInfo.vipLevel);
         }
      }
      
      private static function onGetMonth(param1:SocketEvent) : void
      {
         var _loc3_:int = 0;
         var _loc4_:CateInfo = null;
         SocketConnection.removeCmdListener(CommandID.TALK_CATE,onGetMonth);
         ItemInBagAlert.openMouse = false;
         SocketConnection.removeCmdListener(CommandID.TALK_CATE,onGetMonth);
         var _loc2_:DayTalkInfo = param1.data as DayTalkInfo;
         _loc3_ = 0;
         while(_loc3_ < _loc2_.outCount)
         {
            _loc4_ = _loc2_.outList[_loc3_] as CateInfo;
            ItemInBagAlert.show(_loc4_.id,TextFormatUtil.getRedTxt(_loc4_.count + "个" + ItemXMLInfo.getName(_loc4_.id)) + "已经放入你的储存箱！");
            _loc3_++;
         }
         ItemInBagAlert.openMouse = true;
         EventManager.dispatchEvent(new Event(GiftController.GET_GIFT_COMPLETE));
      }
      
      public static function getDayGift() : void
      {
         SocketConnection.addCmdListener(CommandID.TALK_CATE,onGetDay);
         if(MainManager.actorInfo.isVip)
         {
            SocketConnection.send(CommandID.TALK_CATE,2116);
         }
         else
         {
            SocketConnection.send(CommandID.TALK_CATE,1006);
         }
      }
      
      private static function onGetDay(param1:SocketEvent) : void
      {
         var _loc3_:int = 0;
         var _loc4_:CateInfo = null;
         SocketConnection.removeCmdListener(CommandID.TALK_CATE,onGetDay);
         ItemInBagAlert.openMouse = false;
         SocketConnection.removeCmdListener(CommandID.TALK_CATE,onGetMonth);
         var _loc2_:DayTalkInfo = param1.data as DayTalkInfo;
         _loc3_ = 0;
         while(_loc3_ < _loc2_.outCount)
         {
            _loc4_ = _loc2_.outList[_loc3_] as CateInfo;
            ItemInBagAlert.show(_loc4_.id,TextFormatUtil.getRedTxt(_loc4_.count + "个" + ItemXMLInfo.getName(_loc4_.id)) + "已经放入你的储存箱！");
            _loc3_++;
         }
         ItemInBagAlert.openMouse = true;
         EventManager.dispatchEvent(new Event(GiftController.GET_GIFT_COMPLETE));
      }
      
      public static function getWeekGiftNew() : void
      {
         weekGift = true;
         SocketConnection.addCmdListener(CommandID.REGULAR_NONO_GIFT,onGetWeek1);
         SocketConnection.send(CommandID.REGULAR_NONO_GIFT,0);
      }
      
      private static function onGetWeek1(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.REGULAR_NONO_GIFT,onGetWeek1);
         SocketConnection.addCmdListener(CommandID.REGULAR_NONO_GIFT,onGetWeek2);
         SocketConnection.send(CommandID.REGULAR_NONO_GIFT,1);
      }
      
      private static function onGetWeek2(param1:SocketEvent) : void
      {
         var _loc2_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.REGULAR_NONO_GIFT,onGetWeek2);
         ItemInBagAlert.openMouse = false;
         if(ColorfulPrivilegeWishController.bonusType == 2)
         {
            _loc2_ = 1;
         }
         else
         {
            _loc2_ = uint(MainManager.actorInfo.vipLevel);
         }
         if(_loc2_ == 1)
         {
            ItemInBagAlert.show(300075,TextFormatUtil.getRedTxt("1个" + ItemXMLInfo.getName(300075)) + "已经放入你的储存箱！");
         }
         else if(_loc2_ == 2)
         {
            ItemInBagAlert.show(300157,TextFormatUtil.getRedTxt("3个" + ItemXMLInfo.getName(300157)) + "已经放入你的储存箱！");
            ItemInBagAlert.show(300075,TextFormatUtil.getRedTxt("1个" + ItemXMLInfo.getName(300075)) + "已经放入你的储存箱！");
         }
         else if(_loc2_ == 3)
         {
            ItemInBagAlert.show(300157,TextFormatUtil.getRedTxt("6个" + ItemXMLInfo.getName(300157)) + "已经放入你的储存箱！");
            ItemInBagAlert.show(300075,TextFormatUtil.getRedTxt("1个" + ItemXMLInfo.getName(300075)) + "已经放入你的储存箱！");
         }
         else if(_loc2_ == 4)
         {
            ItemInBagAlert.show(300157,TextFormatUtil.getRedTxt("6个" + ItemXMLInfo.getName(300157)) + "已经放入你的储存箱！");
            ItemInBagAlert.show(300075,TextFormatUtil.getRedTxt("1个" + ItemXMLInfo.getName(300075)) + "已经放入你的储存箱！");
            ItemInBagAlert.show(300018,TextFormatUtil.getRedTxt("3个" + ItemXMLInfo.getName(300018)) + "已经放入你的储存箱！");
         }
         else
         {
            ItemInBagAlert.show(300157,TextFormatUtil.getRedTxt("6个" + ItemXMLInfo.getName(300157)) + "已经放入你的储存箱！");
            ItemInBagAlert.show(300075,TextFormatUtil.getRedTxt("1个" + ItemXMLInfo.getName(300075)) + "已经放入你的储存箱！");
            ItemInBagAlert.show(300018,TextFormatUtil.getRedTxt("6个" + ItemXMLInfo.getName(300018)) + "已经放入你的储存箱！");
         }
         EventManager.dispatchEvent(new Event(GiftController.GET_GIFT_COMPLETE));
      }
      
      public static function removeSocketEvents() : void
      {
         SocketConnection.removeCmdListener(CommandID.REGULAR_NONO_GIFT,onGetWeek1);
         SocketConnection.removeCmdListener(CommandID.REGULAR_NONO_GIFT,onGetWeek2);
         SocketConnection.removeCmdListener(CommandID.REGULAR_NONO_GIFT,onGetMonth);
      }
      
      public static function getMonthGift() : void
      {
      }
      
      public static function getMonthNormalGift() : void
      {
         isGet = true;
         SocketConnection.addCmdListener(CommandID.TALK_CATE,onGetMHandler);
         SocketConnection.send(CommandID.TALK_CATE,1501);
      }
      
      private static function onGetSMHandler(param1:SocketEvent) : void
      {
         remove();
         var _loc2_:uint = uint(MainManager.actorInfo.vipLevel);
         ItemInBagAlert.show(300136,TextFormatUtil.getRedTxt(_loc2_ + "个" + ItemXMLInfo.getName(300136)) + "已经放入你的储存箱！");
         if(_loc2_ == 1)
         {
            ItemInBagAlert.show(300007,TextFormatUtil.getRedTxt("1个" + ItemXMLInfo.getName(300007)) + "已经放入你的储存箱！");
         }
         else if(_loc2_ == 2)
         {
            ItemInBagAlert.show(300007,TextFormatUtil.getRedTxt("1个" + ItemXMLInfo.getName(300007)) + "已经放入你的储存箱！");
            ItemInBagAlert.show(300032,TextFormatUtil.getRedTxt("3个" + ItemXMLInfo.getName(300032)) + "已经放入你的储存箱！");
         }
         else if(_loc2_ == 3)
         {
            ItemInBagAlert.show(300007,TextFormatUtil.getRedTxt("1个" + ItemXMLInfo.getName(300007)) + "已经放入你的储存箱！");
            ItemInBagAlert.show(300032,TextFormatUtil.getRedTxt("6个" + ItemXMLInfo.getName(300032)) + "已经放入你的储存箱！");
         }
         else if(_loc2_ == 4)
         {
            ItemInBagAlert.show(300007,TextFormatUtil.getRedTxt("1个" + ItemXMLInfo.getName(300007)) + "已经放入你的储存箱！");
            ItemInBagAlert.show(300102,TextFormatUtil.getRedTxt("3个" + ItemXMLInfo.getName(300102)) + "已经放入你的储存箱！");
         }
         else
         {
            ItemInBagAlert.show(300007,TextFormatUtil.getRedTxt("1个" + ItemXMLInfo.getName(300007)) + "已经放入你的储存箱！");
            ItemInBagAlert.show(300102,TextFormatUtil.getRedTxt("6个" + ItemXMLInfo.getName(300102)) + "已经放入你的储存箱！");
            ItemInBagAlert.show(300102,TextFormatUtil.getRedTxt("3个" + ItemXMLInfo.getName(300405)) + "已经放入你的储存箱！");
         }
         EventManager.dispatchEvent(new Event(GiftController.GET_GIFT_COMPLETE));
      }
      
      public static function remove() : void
      {
         SocketConnection.removeCmdListener(CommandID.TALK_CATE,onGetSMHandler);
      }
      
      private static function onGetMHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TALK_CATE,onGetMHandler);
         Alarm.show("恭喜你获得了" + TextFormatUtil.getRedTxt("一个高级精灵胶囊！"));
         EventManager.dispatchEvent(new Event(GiftController.GET_GIFT_COMPLETE));
      }
      
      public static function destroy() : void
      {
         removeEvent();
         if(_giftApp)
         {
            _giftApp.destroy();
            _giftApp = null;
         }
      }
      
      public static function removeEvent() : void
      {
         SocketConnection.removeCmdListener(CommandID.REGULAR_NONO_GIFT,onGetSMHandler);
         SocketConnection.removeCmdListener(CommandID.TALK_CATE,onGetMHandler);
         SocketConnection.removeCmdListener(CommandID.TALK_CATE,onGetNormalWeekGift);
         EventManager.removeEventListener("Error_10028",onErrorHandler);
         SocketConnection.removeCmdListener(CommandID.REGULAR_NONO_GIFT,onGetSuperHandler);
      }
   }
}
