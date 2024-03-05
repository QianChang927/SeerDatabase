package com.robot.app2.alert
{
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.BaseAppAlert;
   import flash.events.MouseEvent;
   
   public class BreakSkyMarksmanEzelAlert extends BaseAppAlert
   {
       
      
      private var _applyFun:Function;
      
      private var _cancelFun:Function;
      
      public function BreakSkyMarksmanEzelAlert()
      {
         super("breakSkyMarksmanEzelAlert",true,true);
      }
      
      public function show(param1:String, param2:Function = null, param3:Function = null) : void
      {
         this._applyFun = param2;
         this._cancelFun = param3;
         super.setup(param1);
      }
      
      override protected function addContent() : void
      {
         super.addContent();
         if(SystemTimerManager.sysDate.month == 5 && SystemTimerManager.sysDate.date >= 21 || SystemTimerManager.sysDate.month == 6 && SystemTimerManager.sysDate.date <= 4)
         {
            this._panel["moneyBackTxt"].visible = true;
         }
         else
         {
            this._panel["moneyBackTxt"].visible = false;
         }
      }
      
      override protected function addEvent() : void
      {
         this._panel["apply"].addEventListener(MouseEvent.CLICK,this.onApply);
         this._panel["cancel"].addEventListener(MouseEvent.CLICK,this.onCancel);
         this._panel["close"].addEventListener(MouseEvent.CLICK,this.onClose);
      }
      
      override protected function removeEvent() : void
      {
         this._panel["apply"].removeEventListener(MouseEvent.CLICK,this.onApply);
         this._panel["cancel"].removeEventListener(MouseEvent.CLICK,this.onCancel);
         this._panel["close"].removeEventListener(MouseEvent.CLICK,this.onClose);
      }
      
      private function onApply(param1:MouseEvent) : void
      {
         if(this._applyFun != null)
         {
            this._applyFun();
         }
         super.destroy();
      }
      
      private function onCancel(param1:MouseEvent) : void
      {
         if(this._cancelFun != null)
         {
            this._cancelFun();
         }
         super.destroy();
      }
      
      private function onClose(param1:MouseEvent) : void
      {
         if(this._cancelFun != null)
         {
            this._cancelFun();
         }
         super.destroy();
      }
   }
}
