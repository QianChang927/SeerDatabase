package com.robot.app2.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1450 extends BaseMapProcess
   {
       
      
      protected var _isOpen:Boolean = false;
      
      public function MapProcess_1450()
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
         var _loc2_:int = 1;
         while(_loc2_ <= 4)
         {
            btnLevel["mc" + _loc2_].visible = false;
            _loc2_++;
         }
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var _loc3_:int = 0;
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "btn":
               if(this._isOpen == false)
               {
                  this._isOpen = true;
                  _loc3_ = 1;
                  while(_loc3_ <= 4)
                  {
                     btnLevel["mc" + _loc3_].visible = true;
                     _loc3_++;
                  }
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
