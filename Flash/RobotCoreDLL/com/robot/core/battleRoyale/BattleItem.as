package com.robot.core.battleRoyale
{
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import flash.text.TextFormat;
   import flash.utils.Timer;
   
   public class BattleItem
   {
      
      private static const ITEM_ID_ARR:Array = [400761,400762,400753,400766,400767,400768,400769];
       
      
      private var _mc:MovieClip;
      
      private var _numTxt:TextField;
      
      private var _timer:Timer;
      
      private var _timerTxt:TextField;
      
      private var _count:int;
      
      private var _infoArr:Array;
      
      private var _curIndex:int;
      
      private var _index:int;
      
      public function BattleItem(param1:MovieClip, param2:int)
      {
         super();
         this._mc = param1;
         this._index = param2;
         this._timerTxt = new TextField();
         this._numTxt = new TextField();
         this._timerTxt.autoSize = TextFieldAutoSize.CENTER;
         this._timerTxt.x = this._mc.x + this._mc.width / 2;
         this._timerTxt.y = this._mc.y + param1.height / 2 - 25;
         this._numTxt.autoSize = TextFieldAutoSize.RIGHT;
         this._numTxt.x = this._mc.x + this._mc.width - 10;
         this._numTxt.y = this._mc.y + this._mc.height - 25;
         this._timerTxt.mouseEnabled = false;
         this._numTxt.mouseEnabled = false;
         this._mc.parent.addChild(this._timerTxt);
         this._mc.parent.addChild(this._numTxt);
         this._timer = new Timer(1000);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         var _loc3_:TextFormat = new TextFormat();
         _loc3_.color = 16776960;
         _loc3_.size = 40;
         this._timerTxt.defaultTextFormat = _loc3_;
         _loc3_.color = 16777215;
         _loc3_.size = 14;
         this._numTxt.defaultTextFormat = _loc3_;
      }
      
      public function setInfo(param1:Array = null) : void
      {
         var _loc2_:SingleItemInfo = null;
         if(param1 == null)
         {
            this._numTxt.text = "0";
            this._mc.num = 0;
            this.unableItem();
            _loc2_ = new SingleItemInfo();
            _loc2_.itemID = ITEM_ID_ARR[this._index];
            this._mc.gotoAndStop(2);
            this._infoArr = [_loc2_];
         }
         else
         {
            this._infoArr = param1;
            _loc2_ = this._infoArr[0];
            this._mc.num = _loc2_.itemNum;
            this._mc.itemID = _loc2_.itemID;
            this._numTxt.text = String(_loc2_.itemNum);
            this._mc.gotoAndStop(BattleToolBar.btArr[this._index].indexOf(this._mc.itemID) + 1);
            this.enableItem();
         }
         this._curIndex = 0;
         this._mc.addEventListener(MouseEvent.ROLL_OVER,this.onRollOver);
         this._mc.addEventListener(MouseEvent.ROLL_OUT,this.onRollOut);
      }
      
      private function onRollOver(param1:MouseEvent) : void
      {
         ItemInfoTip.show(this._infoArr[this._curIndex],false);
      }
      
      private function onRollOut(param1:MouseEvent) : void
      {
         ItemInfoTip.hide();
      }
      
      public function get info() : SingleItemInfo
      {
         return this._infoArr[this._curIndex];
      }
      
      private function enableItem() : void
      {
         this._mc.alpha = 1;
         this._mc.buttonMode = true;
         this._mc.mc.visible = false;
      }
      
      private function unableItem() : void
      {
         this._mc.alpha = 0.4;
         this._mc.buttonMode = false;
      }
      
      public function afterUse() : void
      {
         if(this._infoArr[this._curIndex].itemNum > 0)
         {
            --this._infoArr[this._curIndex].itemNum;
            this._mc.num = this._infoArr[this._curIndex].itemNum;
         }
         if(this._infoArr[this._curIndex].itemNum <= 0)
         {
            if(this._curIndex < this._infoArr.length - 1)
            {
               ++this._curIndex;
               this._mc.num = this._infoArr[this._curIndex].itemNum;
               this._mc.itemID = this._infoArr[this._curIndex].itemID;
               this._mc.gotoAndStop(BattleToolBar.btArr[this._index].indexOf(this._mc.itemID) + 1);
               this.unableItem();
               this._count = 4;
               this._numTxt.text = String(this._infoArr[this._curIndex].itemNum);
               this._timerTxt.text = String(this._count);
               this._timer.start();
            }
            else
            {
               this.unableItem();
               this._mc.num = 0;
               this._timerTxt.text = "";
               this._numTxt.text = "0";
            }
         }
         else
         {
            this.unableItem();
            this._count = 4;
            this._numTxt.text = String(this._infoArr[this._curIndex].itemNum);
            this._timerTxt.text = String(this._count);
            this._timer.start();
         }
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         --this._count;
         if(this._count <= 0)
         {
            this._timerTxt.text = "";
            this._timer.stop();
            this.enableItem();
         }
         else
         {
            this._timerTxt.text = String(this._count);
         }
      }
      
      public function destroy() : void
      {
         this._timer.stop();
         this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         this._timer = null;
         this._mc.removeEventListener(MouseEvent.ROLL_OVER,this.onRollOver);
         this._mc.removeEventListener(MouseEvent.ROLL_OUT,this.onRollOut);
      }
   }
}
