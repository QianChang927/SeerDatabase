package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   
   public class MapProcess_11639 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      public function MapProcess_11639()
      {
         super();
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         LevelManager.toolsLevel.visible = false;
         KTool.getMultiValue([18502],function(param1:Array):void
         {
            conLevel["mc"].visible = param1[0] < 6000;
            conLevel["arrow"].visible = param1[0] < 6000;
            CommonUI.setEnabled(conLevel["btn_2"],param1[0] < 6000,false);
         });
         conLevel.addEventListener(MouseEvent.CLICK,this.onConClick);
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_" + index:
               ModuleManager.showAppModule(["RapalsChaosFogSub1Panel","RapalsChaosFogSub2Panel"][index - 1]);
               break;
            case "close":
               this.destroy();
               KTool.changeMapWithCallBack(1,function():void
               {
               });
         }
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         LevelManager.toolsLevel.visible = true;
         if(conLevel != null)
         {
            conLevel.removeEventListener(MouseEvent.CLICK,this.onConClick);
         }
         super.destroy();
      }
   }
}
