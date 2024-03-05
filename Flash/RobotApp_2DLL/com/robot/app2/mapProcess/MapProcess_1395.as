package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1395 extends BaseMapProcess
   {
       
      
      public function MapProcess_1395()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel.addEventListener(MouseEvent.CLICK,this.onConClick1);
         conLevel["mc1"].gotoAndStop(1);
         conLevel["mc2"].gotoAndStop(1);
         conLevel["mc3"].visible = false;
      }
      
      public function update(param1:* = null) : void
      {
      }
      
      public function onConClick1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_1":
               conLevel["mc1"].gotoAndStop(3);
               AnimateManager.playMcAnimate(conLevel["mc1"],3,"ani_1",function():void
               {
                  conLevel["mc1"]["ani_1"].gotoAndStop(conLevel["mc1"]["ani_1"].totalFrames);
               },false,true);
               break;
            case "btn_2":
               conLevel["mc2"].gotoAndStop(4);
               break;
            case "btn_3":
               conLevel["mc3"].visible = true;
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConClick1);
         super.destroy();
      }
   }
}
