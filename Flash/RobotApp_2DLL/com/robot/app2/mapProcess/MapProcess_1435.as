package com.robot.app2.mapProcess
{
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.events.MouseEvent;
   
   public class MapProcess_1435 extends BaseMapProcess
   {
       
      
      protected var curTime:Date;
      
      public function MapProcess_1435()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
      }
      
      public function update(param1:* = null) : void
      {
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "btn_1":
               this.curTime = SystemTimerManager.sysBJDate;
               if(this.curTime.getHours() == 12 && this.curTime.minutes <= 5)
               {
                  SocketConnection.sendByQueue(2411,[0,0]);
               }
               else
               {
                  Alarm2.show("露姆还未出现，等正午时候再来看看吧！");
               }
         }
      }
      
      override public function destroy() : void
      {
         this.conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
