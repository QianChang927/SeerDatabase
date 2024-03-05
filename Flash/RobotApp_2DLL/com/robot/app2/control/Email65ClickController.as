package com.robot.app2.control
{
   import com.robot.core.manager.MainManager;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   
   public class Email65ClickController
   {
       
      
      public function Email65ClickController()
      {
         super();
      }
      
      public static function clickEmail65() : void
      {
         var _loc1_:String = "http://dc.61.com/Question/preView?qn_id=89";
         _loc1_ += "&userid=" + MainManager.actorID + "&gameid=" + 65 + "&session=" + MainManager.sessionKey;
         navigateToURL(new URLRequest(_loc1_));
      }
   }
}
