package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1411 extends BaseMapProcess
   {
       
      
      public function MapProcess_1411()
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
         conLevel["ani"]["ani_1"].visible = false;
         conLevel["ani"]["ani_2"].visible = false;
         btnLevel["tips"].visible = false;
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_" + index:
               if(index == 1)
               {
                  btnLevel["btn_1"].visible = false;
                  btnLevel["btnTip"].visible = false;
                  conLevel["ani"]["ani_1"].visible = true;
                  AnimateManager.playMcAnimate(conLevel["ani"],1,"ani_1",function():void
                  {
                     conLevel["ani"]["ani_1"].gotoAndStop(conLevel["ani"]["ani_1"].totalFrames);
                  },false,true);
               }
               else
               {
                  btnLevel["btn_2"].visible = false;
                  conLevel["ani"]["ani_2"].visible = true;
                  AnimateManager.playMcAnimate(conLevel["ani"],1,"ani_2",function():void
                  {
                     conLevel["ani"]["ani_2"].gotoAndStop(conLevel["ani"]["ani_2"].totalFrames);
                  },false,true);
               }
         }
      }
      
      override public function destroy() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
