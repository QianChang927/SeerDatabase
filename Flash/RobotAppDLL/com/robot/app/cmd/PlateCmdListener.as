package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.GetPlateInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class PlateCmdListener extends BaseBean
   {
       
      
      private var cnt:uint;
      
      private var typeDes:String;
      
      public function PlateCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.MEDAL_GET_COUNT,this.onPlateGet);
         finish();
      }
      
      private function onPlateGet(param1:SocketEvent) : void
      {
         var _loc3_:String = null;
         var _loc2_:GetPlateInfo = param1.data as GetPlateInfo;
         switch(_loc2_.type)
         {
            case 1:
               _loc3_ = "草系";
               break;
            case 2:
               _loc3_ = "水系";
               break;
            case 3:
               _loc3_ = "火系";
               break;
            case 5:
               _loc3_ = "电系";
               break;
            case 11:
               _loc3_ = "战斗系";
               break;
            case 4:
               _loc3_ = "飞行系";
               break;
            case 6:
               _loc3_ = "机械系";
               break;
            case 7:
               _loc3_ = "地面系";
               break;
            case 9:
               _loc3_ = "冰系";
         }
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onClick);
         this.cnt = _loc2_.count;
         this.typeDes = _loc3_;
      }
      
      private function onClick(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onClick);
         Alarm.show("恭喜你获得了" + this.cnt + "枚<font color=\'#FF0000\'>" + this.typeDes + "奖牌</font>。");
      }
   }
}
