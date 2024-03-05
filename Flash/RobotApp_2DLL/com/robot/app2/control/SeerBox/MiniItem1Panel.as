package com.robot.app2.control.SeerBox
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   
   public class MiniItem1Panel implements IItemPanel
   {
       
      
      public function MiniItem1Panel()
      {
         super();
      }
      
      public function destory() : void
      {
      }
      
      public function init(param1:MovieClip) : void
      {
         var ui:MovieClip = param1;
         KTool.getMultiValue([15742],function(param1:Array):void
         {
            var _loc2_:int = 0;
            var _loc3_:int = 1;
            while(_loc3_ <= 7)
            {
               _loc2_ += KTool.getBit(param1[0],_loc3_);
               _loc3_++;
            }
            ui["txt"].text = _loc2_ + "/7";
            ui["flag"].visible = _loc2_ == 7;
            CommonUI.setEnabled(ui["btn"],_loc2_ != 7,false);
         });
      }
   }
}
