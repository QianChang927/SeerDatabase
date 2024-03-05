package com.robot.app.task.SeerInstructor
{
   import com.robot.app.spt.SptXmlInfo;
   import com.robot.core.CommandID;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class NewInstructorController
   {
       
      
      public function NewInstructorController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.INSTRUCTOR_SPTMESSAGE,onShowInfo);
         SocketConnection.addCmdListener(CommandID.INSTRUCTOR_ASKSPTINFO,onHelpSpt);
         SocketConnection.addCmdListener(CommandID.INSTRUCTOR_ANSWERSPTINFO,onSptBack);
         SocketConnection.addCmdListener(CommandID.INSTRUCTOR_TOBESTUDENT,function():void
         {
            Alarm.show("申请已经发出，请耐心等待回复！");
         });
         SocketConnection.addCmdListener(CommandID.INSTRUCTOR_TOBEINS,function():void
         {
            Alarm.show("申请已经发出，请耐心等待回复！");
         });
      }
      
      private static function onShowInfo(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            Alert.show("很遗憾挑战失败咯，需要邀请你的教官帮你完成挑战吗？",function():void
            {
               askForSptHelp();
            });
         });
      }
      
      private static function onHelpSpt(param1:SocketEvent) : void
      {
         var id:int = 0;
         var sptId:int = 0;
         var e:SocketEvent = param1;
         var b:ByteArray = e.data as ByteArray;
         id = int(b.readUnsignedInt());
         sptId = int(b.readUnsignedInt());
         var nick:String = b.readUTFBytes(16);
         Alert.show("你的学员" + nick + "(" + id + ")请求你帮助打败" + SptXmlInfo.getTitleByID(sptId) + ", 确认去帮他/她吗？",function():void
         {
            answerForSptHelp(id,true);
            MapManager.changeMap(SptXmlInfo.getMapByID(sptId));
         },function():void
         {
            answerForSptHelp(id,false);
         });
      }
      
      private static function onSptBack(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         if(_loc3_)
         {
            Alarm.show("你的教官同意帮助你击败SPT!");
         }
         else
         {
            Alarm.show("你的教官拒绝帮助你击败SPT!");
         }
      }
      
      public static function sendToBeStudent(param1:int) : void
      {
         SocketConnection.send(CommandID.INSTRUCTOR_TOBESTUDENT,param1);
      }
      
      public static function answerStudent(param1:int, param2:Boolean) : void
      {
         var _loc3_:int = 0;
         if(param2)
         {
            _loc3_ = 1;
         }
         SocketConnection.send(CommandID.INSTRUCTOR_ANSWERSTUDENT,param1,_loc3_);
      }
      
      public static function sendToBeInstructor(param1:int) : void
      {
         if(MainManager.actorInfo.petMaxLev < 100)
         {
            Alarm.show("你没有满级精灵，不能当玩家的教官噢！");
            return;
         }
         SocketConnection.send(CommandID.INSTRUCTOR_TOBEINS,param1);
      }
      
      public static function answerInstructor(param1:int, param2:Boolean) : void
      {
         var _loc3_:int = 0;
         if(param2)
         {
            _loc3_ = 1;
         }
         SocketConnection.send(CommandID.INSTRUCTOR_ANSWERINS,param1,_loc3_);
      }
      
      public static function askForSptHelp() : void
      {
         SocketConnection.send(CommandID.INSTRUCTOR_ASKSPT);
      }
      
      public static function answerForSptHelp(param1:int, param2:Boolean) : void
      {
         var _loc3_:int = 0;
         if(param2)
         {
            _loc3_ = 1;
         }
         SocketConnection.send(CommandID.INSTRUCTOR_ANSWERSPT,param1,_loc3_);
      }
   }
}
