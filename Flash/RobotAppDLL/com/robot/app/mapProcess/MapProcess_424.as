package com.robot.app.mapProcess
{
   import com.robot.app.control.YiShenTeController;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class MapProcess_424 extends BaseMapProcess
   {
       
      
      private var _amc01:MovieClip;
      
      private var _goToBtn:MovieClip;
      
      public function MapProcess_424()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._amc01 = this.conLevel["amc01"];
         this._amc01.gotoAndStop(1);
         this._amc01.buttonMode = true;
         this._amc01.addEventListener(MouseEvent.CLICK,this.onChangeHandler);
         this._goToBtn = this.conLevel["goToBtn"];
         this._goToBtn.buttonMode = true;
         this._goToBtn.addEventListener(MouseEvent.CLICK,this.onGoToBtnHandler);
         YiShenTeController.instance.start();
      }
      
      private function onGoToBtnHandler(param1:MouseEvent) : void
      {
         MapManager.changeMap(427);
      }
      
      public function onChangeHandler(param1:MouseEvent) : void
      {
         if(this._amc01.currentFrame == this._amc01.totalFrames)
         {
            this._amc01.gotoAndStop(1);
         }
         else
         {
            this._amc01.nextFrame();
         }
      }
      
      override public function destroy() : void
      {
         this._amc01.removeEventListener(MouseEvent.CLICK,this.onChangeHandler);
         this._goToBtn.removeEventListener(MouseEvent.CLICK,this.onGoToBtnHandler);
      }
   }
}
