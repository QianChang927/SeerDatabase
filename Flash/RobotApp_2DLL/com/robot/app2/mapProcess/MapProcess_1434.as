package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1434 extends BaseMapProcess
   {
       
      
      private var btn_1:int = 0;
      
      private var btn_2:int = 0;
      
      public function MapProcess_1434()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
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
               this.btn_1 = 1;
               if(this.btn_1 == 1 && this.btn_2 == 1)
               {
                  btnLevel["btn_1"].visible = false;
                  btnLevel["btn_2"].visible = false;
                  conLevel["ani"].gotoAndStop(1);
                  AnimateManager.playMcAnimate(conLevel["ani"],1,"mc_1",function():void
                  {
                     conLevel["ani"].gotoAndStop(2);
                  },false,true);
               }
               break;
            case "btn_2":
               this.btn_2 = 1;
               if(this.btn_1 == 1 && this.btn_2 == 1)
               {
                  btnLevel["btn_1"].visible = false;
                  btnLevel["btn_2"].visible = false;
                  conLevel["ani"].gotoAndStop(1);
                  AnimateManager.playMcAnimate(conLevel["ani"],1,"mc_1",function():void
                  {
                     conLevel["ani"].gotoAndStop(2);
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
