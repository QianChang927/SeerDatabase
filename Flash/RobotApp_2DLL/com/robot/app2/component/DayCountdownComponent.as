package com.robot.app2.component
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.components.IComponent;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.text.TextField;
   
   public class DayCountdownComponent implements IComponent
   {
       
      
      private var _endDate:Date;
      
      private var _disObj:DisplayObject;
      
      public function DayCountdownComponent(param1:Date, param2:DisplayObject)
      {
         super();
         this._endDate = param1;
         this._disObj = param2;
         this.update();
      }
      
      public function update() : void
      {
         var _loc1_:int = Math.ceil((this._endDate.time / 1000 - SystemTimerManager.time) / (24 * 3600));
         if(_loc1_ < 0)
         {
            _loc1_ = 0;
         }
         if(this._disObj is TextField)
         {
            (this._disObj as TextField).text = _loc1_.toString();
         }
         else if(this._disObj is MovieClip)
         {
            KTool.showScore(this._disObj as MovieClip,_loc1_);
         }
      }
      
      public function destroy() : void
      {
         this._endDate = null;
         this._disObj = null;
      }
   }
}
