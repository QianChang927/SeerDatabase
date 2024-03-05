package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   
   public class MapProcess_1526 extends BaseMapProcess
   {
       
      
      public var _map:MapModel;
      
      private var _clickNum:int = 0;
      
      public function MapProcess_1526()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         conLevel["playMc"].visible = false;
         this._clickNum = 0;
      }
      
      private function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "clickBtn":
               ++this._clickNum;
               if(this._clickNum < 4)
               {
                  this._map.controlLevel["playMc"].visible = true;
                  CommonUI.setEnabled(this._map.controlLevel,false,false);
                  this._map.controlLevel["clickBtn"].visible = false;
                  AnimateManager.playMcAnimate(this._map.controlLevel["playMc"],1,"mc1",function():void
                  {
                     _map.controlLevel["playMc"].visible = false;
                     _map.controlLevel["clickBtn"].visible = true;
                     CommonUI.setEnabled(_map.controlLevel,true,false);
                  },false,true);
               }
               else
               {
                  this._map.controlLevel["playMc"].visible = true;
                  CommonUI.setEnabled(this._map.controlLevel,false,false);
                  this._map.controlLevel["clickBtn"].visible = false;
                  AnimateManager.playMcAnimate(this._map.controlLevel["playMc"],2,"mc2",function():void
                  {
                     _map.controlLevel["playMc"].visible = false;
                     CommonUI.setEnabled(_map.controlLevel,true,false);
                  },false,true);
               }
         }
      }
      
      override public function destroy() : void
      {
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
