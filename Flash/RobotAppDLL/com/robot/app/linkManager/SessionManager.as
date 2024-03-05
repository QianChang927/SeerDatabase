package com.robot.app.linkManager
{
   import com.robot.app.systems.VipSession;
   import com.robot.core.manager.MainManager;
   import flash.events.Event;
   import flash.events.TimerEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.Timer;
   import org.taomee.bean.BaseBean;
   
   public class SessionManager extends BaseBean
   {
       
      
      private var _timer:Timer;
      
      private const DELAY:uint = 300000;
      
      private var _session:VipSession;
      
      public function SessionManager()
      {
         super();
      }
      
      public static function loginBySessionToH5() : void
      {
         var vips:VipSession = null;
         vips = new VipSession();
         vips.getSession(2,function():void
         {
            var _loc4_:* = null;
            var _loc5_:int = 0;
            var _loc1_:uint = uint(MainManager.actorInfo.userID);
            var _loc2_:String = _loc1_.toString(16);
            if(_loc2_.length < 8)
            {
               _loc4_ = "";
               _loc5_ = 0;
               while(_loc5_ < 8 - _loc2_.length)
               {
                  _loc4_ += "0";
                  _loc5_++;
               }
               _loc2_ = _loc4_ + _loc2_;
            }
            var _loc3_:String = "http://seerh5.61.com/?sid=" + _loc2_ + vips.key;
            navigateToURL(new URLRequest(_loc3_),"_blank");
         });
      }
      
      override public function start() : void
      {
         this._timer = new Timer(this.DELAY);
         this._timer.addEventListener(TimerEvent.TIMER,this.getSession);
         this._timer.start();
         this._session = new VipSession();
         this.getSession();
         finish();
      }
      
      private function getSession(param1:Event = null) : void
      {
         this._session.addEventListener(VipSession.GET_SESSION,this.onGetSession);
         this._session.getSession();
      }
      
      private function onGetSession(param1:Event) : void
      {
         this._session.removeEventListener(VipSession.GET_SESSION,this.onGetSession);
         MainManager.sessionKey = this._session.key;
      }
   }
}
