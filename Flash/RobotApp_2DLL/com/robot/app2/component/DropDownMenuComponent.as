package com.robot.app2.component
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.uic.UIScrollBar;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   
   public class DropDownMenuComponent
   {
       
      
      private var _scrollBar:UIScrollBar;
      
      private var _listTxArr:Array;
      
      private var _mainUI:MovieClip;
      
      private var _fun:Function;
      
      private var _listIsShow:Boolean = false;
      
      public function DropDownMenuComponent(param1:MovieClip, param2:Array, param3:Function = null)
      {
         super();
         this._mainUI = param1;
         this._listTxArr = param2;
         this._fun = param3;
         if(this._listTxArr.length > 5)
         {
            this._scrollBar = new UIScrollBar(this._mainUI["listMc"].barMc.slider,this._mainUI["listMc"].barMc.track,2,this._mainUI["listMc"].barMc.upArrow,this._mainUI["listMc"].barMc.downArrow,false);
            this._scrollBar.wheelObject = this._mainUI["listMc"];
            this._scrollBar.addEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
            this._scrollBar.totalLength = param2.length;
         }
         else
         {
            this._mainUI["listMc"].barMc.visible = false;
            this._mainUI["listMc"].listBg.scaleY = this._listTxArr.length / 5;
            this.updateListView();
         }
         this.listMc = false;
         this._mainUI.downMc.mouseEnabled = false;
         this._mainUI.showTx.mouseEnabled = false;
         this._mainUI.addEventListener(MouseEvent.CLICK,this.onMainUIClick);
      }
      
      private function onMainUIClick(param1:*) : void
      {
         var _loc4_:int = 0;
         var _loc5_:String = null;
         var _loc2_:String = String(param1.target.name);
         var _loc3_:int = int(KTool.getIndex(param1.target));
         _loc4_ = int(KTool.getIndex(param1.target.parent));
         switch(_loc2_)
         {
            case "clickBtn":
               if(!this.listMc)
               {
                  if(this._scrollBar != null)
                  {
                     this._scrollBar.index = 0;
                  }
                  this.setListByTween(true);
               }
               else
               {
                  this.setListByTween(false);
               }
               break;
            case "chooseBtn":
               _loc5_ = String(this._mainUI["listMc"]["item_" + _loc4_].adname);
               this._mainUI.showTx.text = _loc5_;
               this.setListByTween(false);
               if(this._fun != null)
               {
                  if(this._scrollBar != null)
                  {
                     this._fun(this._scrollBar.index + _loc4_);
                  }
                  else
                  {
                     this._fun(_loc4_);
                  }
               }
         }
      }
      
      private function onScrollMove(param1:Event) : void
      {
         this.updateListView(this._scrollBar.index);
      }
      
      private function updateListView(param1:int = 0) : void
      {
         var _loc3_:String = null;
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            if(param1 + _loc2_ < this._listTxArr.length)
            {
               _loc3_ = this._listTxArr[param1 + _loc2_] as String;
               this._mainUI["listMc"]["item_" + _loc2_].adNameTx.text = _loc3_;
               this._mainUI["listMc"]["item_" + _loc2_].adname = _loc3_;
               this._mainUI["listMc"]["item_" + _loc2_].visible = true;
               this._mainUI["listMc"]["item_" + _loc2_].adNameTx.mouseEnabled = false;
            }
            else
            {
               this._mainUI["listMc"]["item_" + _loc2_].adname = null;
               this._mainUI["listMc"]["item_" + _loc2_].visible = false;
            }
            _loc2_++;
         }
      }
      
      private function setListByTween(param1:Boolean) : void
      {
         var show:Boolean = param1;
         this._mainUI.downMc.gotoAndStop(show ? 2 : 1);
         CommonUI.setEnabled(this._mainUI,false,false);
         TweenLite.to(this._mainUI["listMc"],0.5,{
            "alpha":(show ? 1 : 0),
            "scaleY":(show ? 1 : 0.1),
            "onComplete":function():void
            {
               listMc = show;
               if(_mainUI != null)
               {
                  CommonUI.setEnabled(_mainUI,true,false);
               }
            }
         });
      }
      
      private function set listMc(param1:Boolean) : void
      {
         this._listIsShow = param1;
         this._mainUI.downMc.gotoAndStop(param1 ? 2 : 1);
         this._mainUI["listMc"].alpha = param1 ? 1 : 0;
         this._mainUI["listMc"].scaleY = param1 ? 1 : 0;
      }
      
      private function get listMc() : Boolean
      {
         return this._listIsShow;
      }
      
      public function destroy() : void
      {
         this._listTxArr = null;
         this._fun = null;
         if(this._scrollBar != null)
         {
            this._scrollBar.removeEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         }
         this._scrollBar = null;
         this._mainUI.removeEventListener(MouseEvent.CLICK,this.onMainUIClick);
         this._mainUI = null;
      }
   }
}
