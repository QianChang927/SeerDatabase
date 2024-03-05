package com.robot.core.teamPK
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.newloader.MCLoader;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class TeamPKMessPanel extends Sprite
   {
      
      private static var swfLoad:MCLoader;
       
      
      private var _infoPanel:InteractiveObject;
      
      private var _ok_btn:SimpleButton;
      
      private var _wait_btn:SimpleButton;
      
      public function TeamPKMessPanel()
      {
         super();
      }
      
      public function setup() : void
      {
         this.loadSWF();
      }
      
      private function loadSWF() : void
      {
         swfLoad = new MCLoader(ClientConfig.getResPath("module/panel/teampk.swf"),LevelManager.topLevel,1,"正在加载资源....");
         swfLoad.addEventListener(MCLoadEvent.SUCCESS,this.onLoadSWFComplete);
         swfLoad.doLoad();
      }
      
      private function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         swfLoad.removeEventListener(MCLoadEvent.SUCCESS,this.onLoadSWFComplete);
         this._infoPanel = new (param1.getApplicationDomain().getDefinition("TeamPK_panel") as Class)() as MovieClip;
         this._ok_btn = this._infoPanel["ok_btn"];
         this._wait_btn = this._infoPanel["wait_btn"];
         this._infoPanel.x = (MainManager.getStageWidth() - this._infoPanel.width) / 2;
         this._infoPanel.y = (MainManager.getStageHeight() - this._infoPanel.height) / 2;
         LevelManager.topLevel.addChild(this._infoPanel);
         this._wait_btn.addEventListener(MouseEvent.CLICK,this.clickWaitHandler);
         this._ok_btn.addEventListener(MouseEvent.CLICK,this.clickOKHandler);
      }
      
      private function clickOKHandler(param1:MouseEvent) : void
      {
         TeamPKManager.joinPK();
         TeamPKManager.removeIcon();
         this.destroy();
      }
      
      private function clickWaitHandler(param1:MouseEvent) : void
      {
         this.destroy();
      }
      
      public function destroy() : void
      {
         if(this._wait_btn)
         {
            this._wait_btn.removeEventListener(MouseEvent.CLICK,this.clickWaitHandler);
            this._ok_btn.removeEventListener(MouseEvent.CLICK,this.clickOKHandler);
            LevelManager.topLevel.removeChild(this._infoPanel);
            this._wait_btn = null;
            this._ok_btn = null;
            this._infoPanel = null;
         }
      }
   }
}
