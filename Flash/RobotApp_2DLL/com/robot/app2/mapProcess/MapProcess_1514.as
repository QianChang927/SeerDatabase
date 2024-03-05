package com.robot.app2.mapProcess
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class MapProcess_1514 extends BaseMapProcess
   {
       
      
      public function MapProcess_1514()
      {
         super();
      }
      
      override protected function init() : void
      {
         btnLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         btnLevel.addEventListener(MouseEvent.MOUSE_OVER,this.onOver);
         btnLevel.addEventListener(MouseEvent.MOUSE_OUT,this.onOut);
         var _loc1_:MovieClip = conLevel as MovieClip;
         _loc1_.gotoAndStop(1);
      }
      
      public function onClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         switch(_loc2_)
         {
            case "btn":
               ModuleManager.showAppModule("MainLineTask_3423_MapDecoration");
         }
      }
      
      public function onOver(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = conLevel as MovieClip;
         _loc2_.gotoAndStop(2);
      }
      
      public function onOut(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = conLevel as MovieClip;
         _loc2_.gotoAndStop(1);
      }
      
      override public function destroy() : void
      {
         btnLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         btnLevel.removeEventListener(MouseEvent.MOUSE_OVER,this.onOver);
         btnLevel.removeEventListener(MouseEvent.MOUSE_OUT,this.onOut);
         super.destroy();
      }
   }
}
