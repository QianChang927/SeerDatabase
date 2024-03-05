package com.robot.app2.control.DiamondTask.view
{
   import com.robot.app2.control.DiamondTask.data.IDiamondTask;
   import com.robot.core.config.ClientConfig;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class DiamondTaskUI201806 extends DiamondTaskUI
   {
       
      
      public function DiamondTaskUI201806(param1:IDiamondTask)
      {
         super(param1);
      }
      
      override public function getUI() : void
      {
         if(_diamondTask != null)
         {
            ResourceManager.getResource(ClientConfig.getAppResource("update/diamondTask/DiamondTaskUI201806"),function(param1:MovieClip):void
            {
               _ui = param1;
               _ui.btnContainer.gotoAndStop(1);
               addChild(_ui);
               _ui.addEventListener(MouseEvent.CLICK,onUIClick);
               updateUI();
            });
         }
      }
      
      override public function updateUI() : void
      {
         _diamondTask.updateTaskInfo(function():void
         {
            if(_ui != null)
            {
               _ui.txt.text = _diamondTask.taskCompleteDetail;
               _ui.btnContainer.gotoAndStop(_diamondTask.hasAward ? 3 : (_diamondTask.hasComplete ? 2 : 1));
               _ui.gotoAndStop(_diamondTask.id);
               _ui.mc1.gotoAndStop(_diamondTask.taskType);
            }
            dispatchEvent(new Event(DiamondTaskUI.UPDATE,false,false));
         });
      }
   }
}
