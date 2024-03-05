package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1441 extends BaseMapProcess
   {
       
      
      public function MapProcess_1441()
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
         btnLevel["player_1"].visible = false;
         btnLevel["player_2"].visible = false;
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_1":
               AnimateManager.playMcAnimate(conLevel["mc"],1,"ani_1",function():void
               {
               },false,true);
               break;
            case "btn_2":
               btnLevel["btn_2"].visible = false;
               AnimateManager.playMcAnimate(conLevel["mc"],2,"ani_2",function():void
               {
                  btnLevel["player_1"].visible = true;
                  btnLevel["player_2"].visible = true;
               },false,true);
         }
      }
      
      override public function destroy() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
