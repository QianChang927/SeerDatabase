package com.robot.core.manager.map.config
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.AcrossNpcController;
   import flash.display.DisplayObjectContainer;
   
   public class BaseMapProcess
   {
       
      
      public var conLevel:DisplayObjectContainer;
      
      public var btnLevel:DisplayObjectContainer;
      
      public var topLevel:DisplayObjectContainer;
      
      public var depthLevel:DisplayObjectContainer;
      
      public var typeLevel:DisplayObjectContainer;
      
      public var animatorLevel:DisplayObjectContainer;
      
      public function BaseMapProcess()
      {
         super();
         this.conLevel = MapManager.currentMap.controlLevel;
         this.btnLevel = MapManager.currentMap.btnLevel;
         this.topLevel = MapManager.currentMap.topLevel;
         this.depthLevel = MapManager.currentMap.depthLevel;
         this.typeLevel = MapManager.currentMap.typeLevel;
         this.animatorLevel = MapManager.currentMap.animatorLevel;
         LevelManager.showMapLevel();
         MainManager.actorModel.hideRadius();
         MainManager.actorModel.visible = true;
      }
      
      public function setup() : void
      {
         this.init();
         this.initInterstellarCorrespondents();
      }
      
      protected function init() : void
      {
      }
      
      private function initInterstellarCorrespondents() : void
      {
         if(MapManager.currentMap.id == AcrossNpcController.mapId)
         {
            if(AcrossNpcController.isFresh)
            {
               if(!AcrossNpcController.isComplete)
               {
                  AcrossNpcController.showNpc(this);
               }
            }
         }
      }
      
      public function destroy() : void
      {
         this.conLevel = null;
         this.btnLevel = null;
         this.topLevel = null;
         this.depthLevel = null;
         this.typeLevel = null;
         this.animatorLevel = null;
      }
   }
}
