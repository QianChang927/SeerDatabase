package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   
   public class QiyaGiftController
   {
      
      private static var _instance:com.robot.app2.control.QiyaGiftController;
       
      
      public var time:int;
      
      public var take:Boolean = false;
      
      public function QiyaGiftController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.QiyaGiftController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app2.control.QiyaGiftController();
         }
         return _instance;
      }
      
      public function addQiya() : void
      {
         this.take = true;
         MainManager.actorModel.showQiya();
         SystemTimerManager.removeTickFun(this.timehandle);
         this.gettime(function():void
         {
            SystemTimerManager.addTickFun(timehandle);
         });
      }
      
      private function gettime(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getPlayerInfo([698],function(param1:Array):void
         {
            time = 60 - (SystemTimerManager.time - param1[0]);
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private function timehandle() : void
      {
         if(this.time > 0)
         {
            --this.time;
            if(this.time <= 0)
            {
               this.getitem();
            }
         }
         else
         {
            this.getitem();
         }
      }
      
      private function getitem() : void
      {
         SocketConnection.sendByQueue(43195,[2,0],function(param1:*):void
         {
            gettime();
         });
      }
      
      public function removeQiya() : void
      {
         MainManager.actorModel.removeQiya();
         this.take = false;
         SystemTimerManager.removeTickFun(this.timehandle);
      }
   }
}
