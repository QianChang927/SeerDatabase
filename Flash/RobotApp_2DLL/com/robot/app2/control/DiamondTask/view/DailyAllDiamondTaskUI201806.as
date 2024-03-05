package com.robot.app2.control.DiamondTask.view
{
   import com.robot.app2.control.DiamondTask.data.IDiamondTask;
   import com.robot.core.config.ClientConfig;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class DailyAllDiamondTaskUI201806 extends DiamondTaskUI
   {
       
      
      public function DailyAllDiamondTaskUI201806(param1:IDiamondTask)
      {
         super(param1);
      }
      
      override public function updateUI() : void
      {
         _diamondTask.updateTaskInfo(function():void
         {
            if(_ui != null)
            {
               _ui.txt.text = _diamondTask.taskCompleteDetail;
               _ui.btnContainer.gotoAndStop(_diamondTask.hasAward ? 3 : (_diamondTask.hasComplete ? 2 : 1));
               if(!_diamondTask.hasComplete)
               {
                  _ui.btnContainer.txt.text = _diamondTask.taskProgress + "/" + _diamondTask.taskTotalStep;
               }
            }
         });
      }
      
      override public function getUI() : void
      {
         if(_diamondTask != null)
         {
            ResourceManager.getResource(ClientConfig.getAppResource("update/diamondTask/DailyAllDiamondTaskUI201806"),function(param1:MovieClip):void
            {
               _ui = param1;
               addChild(_ui);
               _ui.addEventListener(MouseEvent.CLICK,onUIClick);
               updateUI();
            });
         }
      }
   }
}
