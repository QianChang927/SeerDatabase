package com.robot.core.battleRoyale
{
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   
   public class BillBoardPanel
   {
      
      private static const START_X:int = 43.55;
      
      private static const END_X:int = 43.55;
      
      private static const TOP_MARGIN:uint = 32;
      
      private static const LEFT_MARGIN:uint = 21;
      
      private static const PADDING:uint = 23;
       
      
      private var _stutas:int = 0;
      
      private var _mc1:MovieClip;
      
      private var _mc2:MovieClip;
      
      private var _itemClass:Class;
      
      public function BillBoardPanel(param1:MovieClip, param2:MovieClip, param3:Class)
      {
         super();
         this._mc2 = param2;
         this._itemClass = param3;
      }
      
      private function onMC1Click(param1:MouseEvent) : void
      {
         if(this._stutas == 0)
         {
            TweenLite.to(this._mc2,0.5,{"x":END_X});
            this._stutas = 1;
         }
         else
         {
            TweenLite.to(this._mc2,0.5,{"x":START_X});
            this._stutas = 0;
         }
      }
      
      public function updateUI(param1:Array) : void
      {
         var _loc2_:MovieClip = null;
         while(this._mc2.numChildren > 1)
         {
            this._mc2.removeChildAt(1);
         }
         param1.sortOn("score",Array.NUMERIC | Array.DESCENDING);
         var _loc3_:int = 0;
         while(_loc3_ < param1.length)
         {
            _loc2_ = new this._itemClass() as MovieClip;
            _loc2_["rank"].text = String(_loc3_ + 1);
            _loc2_["nick"].text = param1[_loc3_]["nick"];
            _loc2_["num"].text = String(param1[_loc3_]["score"]);
            _loc2_.x = LEFT_MARGIN;
            _loc2_.y = TOP_MARGIN + PADDING * _loc3_;
            this._mc2.addChild(_loc2_);
            _loc3_++;
         }
      }
      
      public function destroy() : void
      {
      }
   }
}
