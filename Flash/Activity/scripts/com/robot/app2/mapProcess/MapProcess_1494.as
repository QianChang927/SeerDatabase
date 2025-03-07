package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1494 extends BaseMapProcess
   {
       
      
      public function MapProcess_1494()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         conLevel["ani"].visible = false;
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn":
               conLevel["ani"].visible = true;
               AnimateManager.playMcAnimate(conLevel["ani"],1,"mc",function():void
               {
                  conLevel["ani"].visible = false;
               },false,true);
         }
      }
   }
}
