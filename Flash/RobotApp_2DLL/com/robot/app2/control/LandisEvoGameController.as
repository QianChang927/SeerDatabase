package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LandisEvoGameController
   {
      
      public static var mapArr:Array = [];
      
      public static var bossArr:Array = [];
      
      public static var awardArr:Array = [];
      
      public static var curIndex:Array = [10,10];
      
      public static var pointArr:Array = [-960,-1091];
       
      
      public function LandisEvoGameController()
      {
         super();
      }
      
      public static function playAnmiate() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("LandisEvoMapAnmate"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            MapManager.currentMap.topLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,2,"mc",function():void
            {
               BitBuffSetClass.setState(22766,1);
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               LevelManager.iconLevel.visible = true;
               DisplayUtil.removeForParent(mc);
               ModuleManager.showModule(ClientConfig.getAppModule("LandisEvoPartThreePanel"));
            });
         });
      }
   }
}
