package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   
   public class MapProcess_1430 extends BaseMapProcess
   {
       
      
      public function MapProcess_1430()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         conLevel["mc"].visible = false;
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn":
               KTool.getBitSet([1000574],function(param1:Array):void
               {
                  var va:Array = param1;
                  if(va[0] > 0)
                  {
                     Alarm.show("今天已经开采过闪晶矿了，请明天再来！");
                  }
                  else
                  {
                     conLevel["mc"].visible = true;
                     btnLevel["btn"].visible = false;
                     AnimateManager.playMcAnimate(conLevel["mc"],1,"mcc",function():void
                     {
                        SocketConnection.sendByQueue(41273,[15,1],function(param1:*):void
                        {
                           update();
                           conLevel["mc"].visible = false;
                           btnLevel["btn"].visible = true;
                        });
                     },false,true);
                  }
               });
         }
      }
      
      override public function destroy() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
