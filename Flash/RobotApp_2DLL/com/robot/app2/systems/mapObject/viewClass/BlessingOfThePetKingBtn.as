package com.robot.app2.systems.mapObject.viewClass
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObject;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class BlessingOfThePetKingBtn extends MapObject
   {
       
      
      private var _endDate:Date;
      
      private var _mc:MovieClip;
      
      public function BlessingOfThePetKingBtn(param1:String, param2:Number, param3:Number, param4:String = "", param5:Number = 1, param6:Boolean = false)
      {
         this._endDate = new Date(2016,6 - 1,24);
         super(param1,param2,param3,param4,param5,param6);
      }
      
      override protected function onMouseOver(param1:Event) : void
      {
         super.onMouseOver(param1);
         this.updateDayTxt(this._mc.dayTxt);
      }
      
      override protected function onMouseOut(param1:Event) : void
      {
         super.onMouseOver(param1);
         this.updateDayTxt(this._mc.dayTxt);
      }
      
      override protected function onLoadView(param1:MovieClip) : void
      {
         this._mc = param1;
         this.updateDayTxt(this._mc.dayTxt);
         super.onLoadView(param1);
      }
      
      private function updateDayTxt(param1:MovieClip) : void
      {
         var _loc2_:int = Math.ceil((this._endDate.time / 1000 - SystemTimerManager.time) / (24 * 3600));
         if(_loc2_ < 0)
         {
            _loc2_ = 0;
         }
         KTool.showScore(param1,_loc2_);
      }
      
      override public function destory() : void
      {
         this._mc = null;
         this._endDate = null;
      }
   }
}
