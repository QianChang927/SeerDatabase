package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1394 extends BaseMapProcess
   {
       
      
      public function MapProcess_1394()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         conLevel.addEventListener(MouseEvent.CLICK,this.onConClick1);
         btnLevel["mc1"].gotoAndStop(2);
         conLevel["mc2"].gotoAndStop(1);
         conLevel["mc3"].gotoAndStop(1);
      }
      
      public function update(param1:* = null) : void
      {
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_1":
               btnLevel["mc1"].gotoAndStop(3);
               AnimateManager.playMcAnimate(btnLevel["mc1"],3,"mcc1",function():void
               {
                  btnLevel["mc1"]["mcc1"].gotoAndStop(btnLevel["mc1"]["mcc1"].totalFrames);
               },false,true);
               break;
            case "btn_2":
               btnLevel["mc2"].gotoAndStop(3);
               AnimateManager.playMcAnimate(btnLevel["mc2"],3,"mcc2",function():void
               {
                  btnLevel["mc2"].gotoAndStop(1);
               },false,true);
         }
      }
      
      public function onConClick1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_2":
               conLevel["mc2"].gotoAndStop(3);
               AnimateManager.playMcAnimate(conLevel["mc2"],3,"mcc2",function():void
               {
                  conLevel["mc2"].gotoAndStop(1);
               },false,true);
               break;
            case "btn_3":
               conLevel["mc3"].gotoAndStop(2);
               break;
            case "btn_4":
               conLevel["mc3"].gotoAndStop(3);
               break;
            case "btn_5":
               conLevel["mc3"].gotoAndStop(5);
               AnimateManager.playMcAnimate(conLevel["mc3"],5,"mcc3",function():void
               {
                  conLevel["mc3"].gotoAndStop(1);
               },false,true);
         }
      }
      
      override public function destroy() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConClick1);
         super.destroy();
      }
   }
}
