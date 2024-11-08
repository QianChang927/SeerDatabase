package com.robot.module.app
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.BaseModule;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class TrackRareSpiritsGuideMainPanel extends BaseModule
   {
      private var _mainUI:MovieClip;
      
      public function TrackRareSpiritsGuideMainPanel()
      {
         super();
         resUrl = "2018/0608/TrackRareSpiritsGuideMainPanel";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         this._mainUI = _ui;
         this.update(this.superShow);
         StatManager.sendStat2014("外部内容","点击引导面板GO","精灵捕猎场");
      }
      
      private function superShow() : void
      {
         eventCom.addClickEvent(this._mainUI,this.onClick);
         for(var i:int = 0; i < 4; i++)
         {
         }
         super.show();
      }
      
      private function onGoBtnClick(event:MouseEvent) : void
      {
         var index:int = int(event.currentTarget.name.split("_")[1]);
         switch(index)
         {
            case 0:
               this.hide();
               ModuleManager.showModule(ClientConfig.getAppModule("XXXXXX"),"正在打开....");
         }
      }
      
      private function onClick(event:MouseEvent) : void
      {
         var index:int = int(event.target.name.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(event.target.name)
         {
            case "closeBtn":
               this.hide();
               break;
            case "goBtn":
               StatManager.sendStat2014("外部内容","点击引导面板GO","精灵捕猎场");
               this.hide();
               MapManager.changeMap(1301);
               break;
            case "getBtn":
               this.hide();
               ModuleManager.showModule(ClientConfig.getAppModule("TrackRareSpiritsCollectionRewardsPanel"),"正在打开....");
         }
      }
      
      private function update(fun:Function = null) : void
      {
         if(fun != null)
         {
            fun();
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

