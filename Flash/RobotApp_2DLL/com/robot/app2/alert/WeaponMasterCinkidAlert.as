package com.robot.app2.alert
{
   import com.robot.core.ui.alert.BaseAppAlert;
   import flash.events.MouseEvent;
   
   public class WeaponMasterCinkidAlert extends BaseAppAlert
   {
       
      
      private var _applyFun:Function;
      
      private var _fst_frame:uint;
      
      private var _sec_frame:uint;
      
      private var _count:uint;
      
      public function WeaponMasterCinkidAlert()
      {
         super("weaponMasterCinkidAlert",true,true);
      }
      
      public function show(param1:uint, param2:uint = 1, param3:uint = 1, param4:Function = null) : void
      {
         this._fst_frame = param1;
         this._sec_frame = param2;
         this._count = param3;
         this._applyFun = param4;
         super.setup();
      }
      
      override protected function addContent() : void
      {
         if(this._fst_frame == 1)
         {
            this._panel.gotoAndStop(this._fst_frame);
            this._panel["content"].gotoAndStop(this._sec_frame);
            if(this._sec_frame <= 3)
            {
               this._panel["content"]["count"].gotoAndStop(this._count);
            }
         }
         else
         {
            this._panel.gotoAndStop(this._fst_frame);
            this._panel["content"].gotoAndStop(this._sec_frame);
         }
      }
      
      override protected function addEvent() : void
      {
         if(this._panel["go"])
         {
            this._panel["go"].addEventListener(MouseEvent.CLICK,this.onGo);
         }
         if(this._panel["ok"])
         {
            this._panel["ok"].addEventListener(MouseEvent.CLICK,this.onOk);
         }
      }
      
      override protected function removeEvent() : void
      {
         if(this._panel["go"])
         {
            this._panel["go"].removeEventListener(MouseEvent.CLICK,this.onGo);
         }
         if(this._panel["ok"])
         {
            this._panel["ok"].removeEventListener(MouseEvent.CLICK,this.onOk);
         }
      }
      
      private function onGo(param1:MouseEvent) : void
      {
         if(this._applyFun != null)
         {
            this._applyFun();
         }
         super.destroy();
      }
      
      private function onOk(param1:MouseEvent) : void
      {
         if(this._applyFun != null)
         {
            this._applyFun();
         }
         super.destroy();
      }
   }
}
