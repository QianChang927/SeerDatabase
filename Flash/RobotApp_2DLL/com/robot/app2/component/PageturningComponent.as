package com.robot.app2.component
{
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class PageturningComponent
   {
       
      
      private var perpage:int = 6;
      
      private var _ui:MovieClip;
      
      private var _curList:Array;
      
      private var _curType:int;
      
      private var _curPage:int = 1;
      
      private var totalPage:int;
      
      private var itemString:String;
      
      private var func:Function;
      
      private var clickFunc:Function;
      
      private var outFun:Function;
      
      private var overFun:Function;
      
      private var _changePageFun:Function;
      
      private var showList:Array;
      
      public function PageturningComponent(param1:MovieClip, param2:int)
      {
         this.showList = [];
         super();
         this._ui = param1;
         this.perpage = param2;
         this._ui["pre"].addEventListener(MouseEvent.CLICK,this.pclickHandle);
         this._ui["next"].addEventListener(MouseEvent.CLICK,this.pclickHandle);
      }
      
      private function pclickHandle(param1:MouseEvent) : void
      {
         param1.stopImmediatePropagation();
         var _loc2_:String = String(param1.currentTarget.name);
         switch(_loc2_)
         {
            case "pre":
               this.showPage(-1);
               break;
            case "next":
               this.showPage(1);
         }
      }
      
      public function update(param1:Array, param2:String = "mc_", param3:Function = null, param4:Function = null, param5:Function = null, param6:Function = null, param7:Function = null) : void
      {
         this.curPage = 1;
         this.totalPage = Math.ceil(param1.length / this.perpage);
         this._curList = param1;
         this.itemString = param2;
         this.func = param3;
         this.clickFunc = param4;
         this.overFun = param5;
         this.outFun = param6;
         this._changePageFun = param7;
         var _loc8_:int = 0;
         while(_loc8_ < this.perpage)
         {
            if(!this._ui[this.itemString + _loc8_.toString()].hasEventListener(MouseEvent.CLICK))
            {
               this._ui[this.itemString + _loc8_.toString()].addEventListener(MouseEvent.CLICK,this.itemClick);
            }
            if(!this._ui[this.itemString + _loc8_.toString()].hasEventListener(MouseEvent.ROLL_OVER))
            {
               this._ui[this.itemString + _loc8_.toString()].addEventListener(MouseEvent.ROLL_OVER,this.itemOverHandle);
            }
            if(!this._ui[this.itemString + _loc8_.toString()].hasEventListener(MouseEvent.ROLL_OUT))
            {
               this._ui[this.itemString + _loc8_.toString()].addEventListener(MouseEvent.ROLL_OUT,this.itemOutHandle);
            }
            _loc8_++;
         }
         this.showPage();
      }
      
      private function itemOutHandle(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.currentTarget.name);
         var _loc3_:int = parseInt(_loc2_.split("_")[1]);
         if(this.outFun != null)
         {
            this.outFun(param1,this.showList[_loc3_]);
         }
      }
      
      private function itemOverHandle(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.currentTarget.name);
         var _loc3_:int = parseInt(_loc2_.split("_")[1]);
         if(this.overFun != null)
         {
            this.overFun(param1,this.showList[_loc3_]);
         }
      }
      
      private function itemClick(param1:MouseEvent) : void
      {
         param1.stopImmediatePropagation();
         var _loc2_:int = 0;
         while(_loc2_ < this.perpage)
         {
            this._ui[this.itemString + _loc2_.toString()].gotoAndStop(1);
            _loc2_++;
         }
         var _loc3_:String = String(param1.currentTarget.name);
         var _loc4_:int = parseInt(_loc3_.split("_")[1]);
         this._ui[this.itemString + _loc4_.toString()].gotoAndStop(2);
         if(this.clickFunc != null)
         {
            this.clickFunc(param1,this.showList[_loc4_]);
         }
      }
      
      public function gotoPage(param1:int) : void
      {
         this.showPage(0,param1);
      }
      
      public function showPage(param1:int = 0, param2:int = -1) : void
      {
         if(param2 != -1)
         {
            this.curPage = param2;
         }
         else
         {
            this.curPage += param1;
         }
         if(this.totalPage < 1)
         {
            this.totalPage = 1;
         }
         if(this.curPage > this.totalPage)
         {
            this.curPage = this.totalPage;
         }
         if(this.curPage < 1)
         {
            this.curPage = 1;
         }
         if(this._ui["page"])
         {
            this._ui["page"].text = this.curPage + "/" + this.totalPage;
         }
         if(this._ui["cur"])
         {
            this._ui["cur"].text = this.curPage;
         }
         if(this._ui["total"])
         {
            this._ui["total"].text = this.totalPage;
         }
         if(this._changePageFun != null)
         {
            this._changePageFun();
         }
         CommonUI.setEnabled(this._ui["pre"],this.curPage > 1);
         this._ui["pre"].visible = this.curPage > 1;
         CommonUI.setEnabled(this._ui["next"],this.curPage < this.totalPage);
         this._ui["next"].visible = this.curPage < this.totalPage;
         var _loc3_:int = (this.curPage - 1) * this.perpage;
         var _loc4_:int = Math.min(this.curPage * this.perpage,this._curList.length);
         this.showList = [];
         var _loc5_:int = _loc3_;
         while(_loc5_ < _loc4_)
         {
            this.showList.push(this._curList[_loc5_]);
            _loc5_++;
         }
         var _loc6_:int = 0;
         while(_loc6_ < this.perpage)
         {
            if(_loc6_ < this.showList.length)
            {
               this._ui[this.itemString + _loc6_].visible = true;
               if(this.func != null)
               {
                  this.func(this._ui[this.itemString + _loc6_],this.showList[_loc6_]);
               }
            }
            else
            {
               this._ui[this.itemString + _loc6_].visible = false;
            }
            _loc6_++;
         }
      }
      
      public function destroy() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < this.perpage)
         {
            if(this._ui[this.itemString + _loc1_.toString()])
            {
               this._ui[this.itemString + _loc1_.toString()].removeEventListener(MouseEvent.CLICK,this.itemClick);
               this._ui[this.itemString + _loc1_.toString()].removeEventListener(MouseEvent.ROLL_OVER,this.itemOverHandle);
               this._ui[this.itemString + _loc1_.toString()].removeEventListener(MouseEvent.ROLL_OUT,this.itemOutHandle);
            }
            _loc1_++;
         }
         this._changePageFun = null;
         this.func = null;
         this.clickFunc = null;
         this.overFun = null;
         this.outFun = null;
         this._ui["pre"].removeEventListener(MouseEvent.CLICK,this.pclickHandle);
         this._ui["next"].removeEventListener(MouseEvent.CLICK,this.pclickHandle);
         this._ui = null;
         this.showList = null;
         this._curList = null;
      }
      
      public function get curPage() : int
      {
         return this._curPage;
      }
      
      public function set curPage(param1:int) : void
      {
         this._curPage = param1;
      }
   }
}
