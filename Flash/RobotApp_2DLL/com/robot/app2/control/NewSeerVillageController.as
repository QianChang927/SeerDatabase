package com.robot.app2.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerVillageController
   {
      
      private static var _taskMc:MovieClip;
      
      private static const _mapAnimate:String = "SeerVillageAnmiate";
       
      
      public function NewSeerVillageController()
      {
         super();
      }
      
      public static function checkIsNeedPlay() : void
      {
         if(BitBuffSetClass.getState(23402) == 0)
         {
            readyToPlay();
         }
      }
      
      private static function loadTaskMc(param1:Function) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
         {
            _taskMc = param1;
            LevelManager.stage.addChild(_taskMc);
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function readyToPlay() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         MapNamePanel.hide();
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
         LevelManager.closeMouseEvent();
         LevelManager.appLevel.mouseChildren = LevelManager.appLevel.mouseEnabled = false;
         loadTaskMc(function():void
         {
            startToPlay();
         });
      }
      
      private static function startToPlay() : void
      {
         AnimateManager.playMcAnimateWithPromis(_taskMc,1,"mc").then(function():void
         {
            endPlay();
         });
      }
      
      private static function endPlay() : void
      {
         BitBuffSetClass.setState(23402,1);
         destroy();
         KTool.showMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(true);
         LevelManager.openMouseEvent();
         LevelManager.iconLevel.visible = true;
         LevelManager.appLevel.mouseChildren = LevelManager.appLevel.mouseEnabled = true;
         ToolBarController.panel.show();
         MapNamePanel.show();
      }
      
      private static function destroy() : void
      {
         DisplayUtil.removeForParent(_taskMc);
         _taskMc = null;
      }
   }
}
