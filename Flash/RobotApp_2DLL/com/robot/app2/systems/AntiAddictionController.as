package com.robot.app2.systems
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class AntiAddictionController
   {
      
      private static var list:Array = [["您的累计在线时间已满1小时"],["您的累计在线时间已满2小时"],["您的累计在线时间已满3小时，已经进入疲劳游戏时间，您的游戏收益将降为正常值的50%，为了您的健康，请尽快下线休息，做适当身体活动，合理安排学习生活。"],["您已经进入疲劳游戏时间，您的游戏收益将降为正常值的50%，为了您的健康，请尽快下线休息，做适当身体活动，合理安排学习生活。"],["您已经进入疲劳游戏时间，您的游戏收益将降为正常值的50%，为了您的健康，请尽快下线休息，做适当身体活动，合理安排学习生活。"],["您已经进入疲劳游戏时间，您的游戏收益将降为正常值的50%，为了您的健康，请尽快下线休息，做适当身体活动，合理安排学习生活。"],["您已经进入不健康游戏时间，为了您的健康，请您立即下线休息。如不下线，您的身体将受到损害，您的收益已降为零，直到您的累计下线时间满5小时后，才能恢复正常。"]];
       
      
      public function AntiAddictionController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.ANTI_ADDICTION_INFORM,onInform);
         SocketConnection.addCmdListener(45710,onItemLose);
      }
      
      private static function onInform(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         Alarm.show(list[_loc3_],null,false,true);
      }
      
      private static function onItemLose(param1:SocketEvent) : void
      {
         var _loc4_:* = null;
         var _loc5_:uint = 0;
         var _loc6_:* = null;
         var _loc7_:int = 0;
         var _loc8_:uint = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 1965029 || _loc3_ == 1965030)
         {
            if(_loc3_ == 1965029)
            {
               _loc4_ = "由于你的在线时间已经达到3小时，你获得的精灵经验收益减半了，离线5小时后收益会恢复正常。";
            }
            else
            {
               _loc4_ = "由于你的在线时间已经达到5小时，无法获得经验,离线5小时后收益会恢复正常。";
            }
         }
         else
         {
            _loc5_ = _loc2_.readUnsignedInt();
            _loc6_ = "";
            _loc7_ = 0;
            while(_loc7_ < _loc5_)
            {
               _loc8_ = _loc2_.readUnsignedInt();
               _loc6_ += ItemXMLInfo.getName(_loc8_);
               if(_loc7_ != _loc5_ - 1)
               {
                  _loc6_ += ",";
               }
               _loc7_++;
            }
            _loc4_ = "由于你的在线时间已经达到3小时，你获得的" + _loc6_ + "收益减半了，离线5小时后收益会恢复正常。";
            if(_loc3_ == 1965028)
            {
               _loc4_ = "由于你的在线时间已经超过5小时，你将无法获得" + _loc6_ + "收益，离线5小时后收益会恢复正常。";
            }
         }
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         Alarm.show(_loc4_,null,false,true);
      }
   }
}
