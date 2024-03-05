package com.robot.app.oldPaper
{
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class FirstPageView
   {
       
      
      private var _mc:MovieClip;
      
      private var totalPage:int;
      
      private var _showidx:int;
      
      private var changenum:int;
      
      private var _pagexml:XML;
      
      public function FirstPageView(param1:MovieClip, param2:XML)
      {
         super();
         this._mc = param1;
         this._pagexml = param2;
         SystemTimerManager.addTickFun(this.timerHandle);
         this.totalPage = this._mc["mc"].totalFrames;
         var _loc3_:int = 0;
         while(_loc3_ < 5)
         {
            this._mc["p_" + _loc3_].visible = _loc3_ < this.totalPage;
            this._mc["p_" + _loc3_].buttonMode = true;
            this._mc["p_" + _loc3_].addEventListener(MouseEvent.CLICK,this.clickHandle);
            _loc3_++;
         }
         this.showidx = 0;
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.currentTarget.name);
         this.showidx = parseInt(_loc2_.split("_")[1]);
      }
      
      private function timerHandle() : void
      {
         ++this.changenum;
         if(this.changenum >= 4)
         {
            this.changenum = 0;
            ++this.showidx;
            if(this.showidx >= this.totalPage)
            {
               this.showidx = 0;
            }
         }
      }
      
      public function destroy() : void
      {
         this._pagexml = null;
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            this._mc["p_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.clickHandle);
            _loc1_++;
         }
         SystemTimerManager.removeTickFun(this.timerHandle);
         this._mc = null;
      }
      
      public function get showidx() : int
      {
         return this._showidx;
      }
      
      public function set showidx(param1:int) : void
      {
         this._showidx = param1;
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            this._mc["p_" + _loc2_].gotoAndStop(_loc2_ == this.showidx ? 2 : 1);
            _loc2_++;
         }
         this._mc["mc"].gotoAndStop(this.showidx + 1);
      }
   }
}
