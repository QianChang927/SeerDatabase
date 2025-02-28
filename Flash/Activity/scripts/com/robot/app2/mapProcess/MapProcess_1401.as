package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1401 extends BaseMapProcess
   {
       
      
      public function MapProcess_1401()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         conLevel["mc1"].visible = false;
         conLevel["mc2"].gotoAndStop(1);
         conLevel["mc3"].visible = true;
      }
      
      public function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_2":
               conLevel["mc2"].gotoAndStop(2);
               conLevel["btn_2"].visible = false;
               AnimateManager.playMcAnimate(conLevel["mc2"],2,"ani_2",function():void
               {
                  conLevel["mc2"]["ani_2"].gotoAndStop(conLevel["mc2"]["ani_2"].totalFrames);
                  conLevel["mc1"].visible = true;
                  conLevel["mc1"].gotoAndStop(1);
                  conLevel["mc3"].visible = false;
               },false,true);
               break;
            case "btn_1":
               conLevel["mc1"].gotoAndStop(2);
               AnimateManager.playMcAnimate(conLevel["mc1"],2,"ani_1",function():void
               {
                  conLevel["mc1"].visible = false;
                  conLevel["mc3"].visible = true;
                  conLevel["mc2"].gotoAndStop(1);
                  conLevel["btn_2"].visible = true;
               },false,true);
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         super.destroy();
      }
   }
}
