package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   
   public class MapProcess_1390 extends BaseMapProcess
   {
       
      
      protected var hasNum:int;
      
      protected var _map:MapModel;
      
      public function MapProcess_1390()
      {
         super();
      }
      
      override protected function init() : void
      {
         depthLevel.addEventListener(MouseEvent.CLICK,this.onConClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         depthLevel["mc"].visible = false;
         depthLevel["mcc1"].visible = false;
         depthLevel["mcc2"].visible = false;
         KTool.getMultiValue([104885],function(param1:Array):void
         {
            hasNum = param1[0];
         });
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var temp:int = 0;
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "grass":
               KTool.getBitSet([1000448],function(param1:Array):void
               {
                  var va:Array = param1;
                  if(va[0] > 0)
                  {
                     Alarm.show("今天已经采集过这里的魔勒草了，不能再采集了！");
                  }
                  else if(hasNum >= 999)
                  {
                     Alarm.show("你已经是魔界数一数二的富豪了，不能获得更多的魔勒草了！");
                  }
                  else
                  {
                     depthLevel["mcc1"].visible = true;
                     AnimateManager.playMcAnimate(depthLevel["mcc1"],1,"ani1",function():void
                     {
                        SocketConnection.sendByQueue(43312,[12,1],function(param1:*):void
                        {
                           update();
                        });
                     },false,true);
                  }
               });
               break;
            case "water":
               depthLevel["mcc2"].visible = true;
               AnimateManager.playMcAnimate(depthLevel["mcc2"],1,"ani2",function():void
               {
                  update();
               },false,true);
               break;
            case "wood":
               temp = Math.ceil(Math.random() * 3);
               depthLevel["mc"].visible = true;
               if(temp == 1)
               {
                  depthLevel["mc"].gotoAndStop(1);
                  setTimeout(function():void
                  {
                     update();
                  },3000);
               }
               else if(temp == 2)
               {
                  depthLevel["mc"].gotoAndStop(2);
                  setTimeout(function():void
                  {
                     update();
                  },3000);
               }
               else
               {
                  depthLevel["mc"].gotoAndStop(3);
                  setTimeout(function():void
                  {
                     update();
                  },3000);
               }
         }
      }
      
      override public function destroy() : void
      {
         depthLevel.removeEventListener(MouseEvent.CLICK,this.onConClick);
         super.destroy();
      }
   }
}
