package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1488 extends BaseMapProcess
   {
       
      
      public function MapProcess_1488()
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
         conLevel["mc1"].visible = false;
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn":
               conLevel["mc1"].visible = true;
               btnLevel["btn"].visible = false;
               AnimateManager.playMcAnimate(conLevel["mc1"],1,"mc2",function():void
               {
                  btnLevel["btn"].visible = true;
               },false,true);
         }
      }
   }
}
