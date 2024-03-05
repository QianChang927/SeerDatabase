package com.robot.app2.control.DiamondTask.view
{
   import com.robot.app2.control.DiamondTask.data.IDiamondTask;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class WeeklyDiamondTaskUI extends DiamondTaskUI
   {
       
      
      public function WeeklyDiamondTaskUI(param1:IDiamondTask)
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
               _ui.btnContainer.gotoAndStop(_diamondTask.hasComplete ? (_diamondTask.hasAward ? 3 : 2) : 1);
               _ui.mc.gotoAndStop(_diamondTask.id - 15);
            }
         });
      }
      
      override public function getUI() : void
      {
         var str:String = null;
         var sysdate:Date = null;
         if(_diamondTask != null)
         {
            sysdate = SystemTimerManager.sysBJDate;
            str = "update/diamondTask/WeeklyDiamondTaskUI";
            ResourceManager.getResource(ClientConfig.getAppResource(str),function(param1:MovieClip):void
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
