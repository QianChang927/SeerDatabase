package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class ItemReachDailyLimitCmdListener extends BaseBean
   {
       
      
      public function ItemReachDailyLimitCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.NOTI_ITEM_REACH_DAILY_LIMIT,this.onReach);
         finish();
      }
      
      private function onReach(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:uint = _loc2_.readUnsignedInt();
         Alarm.show("为保证游戏公平健康运营，" + ItemXMLInfo.getName(_loc4_) + "每人" + (_loc3_ == 1 ? "每天" : "每周") + "最多可以获得的数量为：" + (_loc3_ == 1 ? ItemXMLInfo.getDailyOutMaxNum(_loc4_) : ItemXMLInfo.getWeeklyOutMaxNum(_loc4_)) + "！你" + (_loc3_ == 1 ? "今日" : "本周") + "免费获取已达到上限，请" + (_loc3_ == 1 ? "明天" : "下周") + "再来继续参与！如有疑问，可联系赛尔号客服人员！");
      }
   }
}
