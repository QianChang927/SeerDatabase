package com.robot.app.ac
{
   import com.robot.core.CommandID;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LeftToolBarManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class StudyUpManager
   {
      
      private static var leftTime:uint;
      
      private static var icon:MovieClip;
      
      private static var txt:TextField;
      
      private static var _callFun:Function;
       
      
      public function StudyUpManager()
      {
         super();
      }
      
      public static function setup() : void
      {
         EventManager.addEventListener(RobotEvent.STUDY_TIMES_CHANGE,onTimesChange);
         leftTime = MainManager.actorInfo.learnTimes;
         checkTime();
      }
      
      private static function onTimesChange(param1:Event) : void
      {
         leftTime = MainManager.actorInfo.learnTimes;
         checkTime();
      }
      
      public static function useItem(param1:uint, param2:Function = null) : void
      {
         _callFun = param2;
         SocketConnection.addCmdListener(CommandID.USE_STUDY_ITEM,onUseItem);
         SocketConnection.send(CommandID.USE_STUDY_ITEM,param1);
      }
      
      private static function onUseItem(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.USE_STUDY_ITEM,onUseItem);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         leftTime = _loc3_;
         MainManager.actorInfo.learnTimes = _loc3_;
         checkTime();
         if(_callFun != null)
         {
            _callFun();
         }
      }
      
      private static function checkTime() : void
      {
         if(!icon)
         {
            icon = UIManager.getMovieClip("study_icon");
            txt = icon["txt"];
         }
         if(leftTime > 0)
         {
            txt.text = leftTime.toString();
            ToolTipManager.add(icon,"精灵学习机");
            LeftToolBarManager.addIcon(icon);
         }
         else
         {
            LeftToolBarManager.delIcon(icon);
         }
      }
   }
}
