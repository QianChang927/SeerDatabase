package com.robot.app2.mapProcess.control
{
   import com.robot.app2.mapProcess.MapProcess_11804;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ServerMapsXMLInfo;
   import com.robot.core.controller.MapController;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.loading.Loading;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   
   public class PlotUITask
   {
       
      
      protected var ui:DisplayObjectContainer;
      
      protected var state:int;
      
      private var loader:MCLoader;
      
      private var maps:Array;
      
      private var data:*;
      
      public function PlotUITask(param1:String)
      {
         this.maps = [78,75,68,45,805,810,708,710,716,722,39,928,725,739,762,759,812,81,704,960];
         super();
         this.loader = new MCLoader("",LevelManager.topLevel,Loading.TITLE_AND_PERCENT,"加载场景",false);
         this.loader.doLoad(ClientConfig.getAppResource(param1));
         this.loader.addEventListener(MCLoadEvent.SUCCESS,this.onMapComplete);
      }
      
      private function onMapComplete(param1:MCLoadEvent) : void
      {
         this.loader.removeEventListener(MCLoadEvent.SUCCESS,this.onMapComplete);
         this.ui = param1.getContent().root as DisplayObjectContainer;
         this.ui["depth_mc"].gotoAndStop(this.maps.indexOf(MapProcess_11804.mapId) + 1);
         if(Boolean(this.ui) && this.ui["btn_mc"] != null)
         {
            MapManager.currentMap.btnLevel.addChild(this.ui["btn_mc"]);
         }
         this.refreshDepthMc();
         MapManager.currentMap.btnLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         MapManager.currentMap.depthLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         this.loader.clear();
         this.init(this.data);
         this.loader = null;
      }
      
      protected function refreshDepthMc() : void
      {
         if(this.ui == null || this.ui["depth_mc"] == null)
         {
            return;
         }
         MapManager.currentMap.depthLevel.addChild(this.ui["depth_mc"]);
      }
      
      public function initData(param1:* = null) : void
      {
         this.data = param1;
      }
      
      public function init(param1:* = null) : void
      {
      }
      
      protected function closeEvent() : void
      {
         if(this.ui)
         {
            this.ui.mouseChildren = this.ui.mouseEnabled = false;
         }
      }
      
      protected function openEvent() : void
      {
         if(this.ui)
         {
            this.ui.mouseChildren = this.ui.mouseEnabled = true;
         }
      }
      
      protected function onNpcClick(param1:int) : void
      {
      }
      
      protected function onClick(param1:MouseEvent) : void
      {
      }
      
      protected function updateState() : void
      {
      }
      
      protected function closeMap() : void
      {
         MapController.forceChange = true;
         MapManager.changeMapWithCallback(ServerMapsXMLInfo.getLoginMapId(2),function():void
         {
            MapController.forceChange = false;
            ModuleManager.showAppModule("FinalBattleMainPanel");
         });
      }
      
      public function destroy() : void
      {
         MapManager.currentMap.btnLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         MapManager.currentMap.depthLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         this.ui = null;
      }
      
      public function resetPos(param1:DisplayObject) : Point
      {
         if(param1 is SimpleButton)
         {
            return new Point(param1.x + (param1 as SimpleButton).hitTestState.width / 2,param1.y + (param1 as SimpleButton).hitTestState.height);
         }
         return new Point(param1.x + param1.width / 2,param1.y + param1.height);
      }
      
      public function getBossSprite(param1:int, param2:MovieClip, param3:Number = 0.6) : void
      {
         var bossId:int = param1;
         var container:MovieClip = param2;
         var scale:Number = param3;
         ResourceManager.getResource(ClientConfig.getPetFightPath(bossId,0,0),function(param1:Sprite):void
         {
            if(!param1)
            {
               return;
            }
            container.removeChildren();
            param1.scaleX = param1.scaleY = scale;
            param1.x = 0;
            param1.y = 0;
            param1.y = -30;
            container.addChild(param1);
         },"pet");
      }
   }
}
