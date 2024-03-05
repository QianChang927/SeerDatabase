package com.robot.app2.control
{
   import com.robot.app2.email.EmailLinkInfo;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   
   public class QingmingfuliController
   {
      
      public static var lefttime:int;
      
      public static var isInactivity:Boolean;
      
      private static var _instance:com.robot.app2.control.QingmingfuliController;
       
      
      public function QingmingfuliController()
      {
         super();
         this.timerHandle();
         SystemTimerManager.addTickFun(this.timerHandle);
      }
      
      public static function get instance() : com.robot.app2.control.QingmingfuliController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.QingmingfuliController();
         }
         return _instance;
      }
      
      public static function setup() : void
      {
         instance;
      }
      
      public static function agreeRecruit(param1:EmailLinkInfo) : void
      {
         var linkInfo:EmailLinkInfo = param1;
         SocketConnection.sendByQueue(46324,[4,int(linkInfo.sender)],function(param1:*):void
         {
         });
      }
      
      public function timerHandle() : void
      {
         var _loc2_:Date = null;
         var _loc3_:Date = null;
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(_loc1_.fullYear == 2017 && (_loc1_.month == 2 && _loc1_.date >= 31 || _loc1_.month == 3 && _loc1_.date <= 13))
         {
            isInactivity = true;
         }
         else
         {
            isInactivity = false;
         }
      }
   }
}
