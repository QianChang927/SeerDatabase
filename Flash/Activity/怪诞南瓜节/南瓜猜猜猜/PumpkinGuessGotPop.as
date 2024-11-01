package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.BaseModule;
   
   public class PumpkinGuessGotPop extends BaseModule
   {
      private var lastCnt:*;
      
      private var gotoType:int = 0;
      
      private var hasLoaded:Boolean = false;
      
      public function PumpkinGuessGotPop()
      {
         super();
         resUrl = "2024/1101/PumpkinGuessGotPop";
      }
      
      override public function init(data:Object = null) : void
      {
         this.lastCnt = data[0];
         this.gotoType = data[1];
      }
      
      override public function show() : void
      {
         super.show();
         ui.txtShow.text = "";
         KTool.getMultiValue([108524],function(va:*):void
         {
            var curCnt:int = int(va[0]);
            ui.txtShow.text = curCnt - lastCnt;
            hasLoaded = true;
         });
         eventCom.addClickEvent(ui.btnClose,function(e:*):void
         {
            if(hasLoaded)
            {
               if(gotoType == 1)
               {
                  hide();
               }
               else
               {
                  ModuleManager.hideAllModule();
                  ModuleManager.showAppModule("PumpkinGuessLevel");
               }
            }
         });
      }
   }
}

