package com.robot.app2.control.SeerBox
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   
   public class MiniItem4Panel implements IItemPanel
   {
       
      
      public function MiniItem4Panel()
      {
         super();
      }
      
      public function destory() : void
      {
      }
      
      public function init(param1:MovieClip) : void
      {
         var ui:MovieClip = param1;
         KTool.getBitSet([1000161],function(param1:Array):void
         {
            if(param1[0] == 1)
            {
               ui["txt"].text = "1/1";
               ui["flag"].visible = true;
               CommonUI.setEnabled(ui["btn"],false,false);
            }
            else
            {
               ui["txt"].text = "0/1";
               ui["flag"].visible = false;
               CommonUI.setEnabled(ui["btn"],true,false);
            }
         });
      }
   }
}
