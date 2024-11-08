package com.robot.module.app
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.BaseModule;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class TrackRareSpiritsCaptureclockPanel extends BaseModule
   {
      private var _mainUI:MovieClip;
      
      private var _timeArr:Array;
      
      private var _curIndex:int = 9999;
      
      public function TrackRareSpiritsCaptureclockPanel()
      {
         this._timeArr = [[21,22,23],[6,7,8],[9,10,11],[12,13,14],[15,16,17],[18,19,20]];
         super();
         resUrl = "2018/0608/TrackRareSpiritsCaptureclockPanel";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         this._mainUI = _ui;
         this.update(this.superShow);
         StatManager.sendStat2014("外部内容","打开捕捉时钟面板","精灵捕猎场");
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
         }
      }
      
      private function update(fun:Function = null) : void
      {
         this.updateView();
         SystemTimerManager.addTickFun(this.updateView);
         if(fun != null)
         {
            fun();
         }
      }
      
      private function updateView() : void
      {
         var arr:Array = null;
         var hour:int = int(SystemTimerManager.sysBJDate.hours);
         var index:int = -1;
         for(var i:int = 0; i < this._timeArr.length; i++)
         {
            arr = this._timeArr[i];
            if(arr.indexOf(hour) >= 0)
            {
               index = i;
            }
         }
         if(this._curIndex != index)
         {
            this._curIndex = index;
            this._mainUI.mc.gotoAndStop(this._curIndex + 2);
         }
         if(index < 0)
         {
            this._mainUI.mc.gotoAndStop(1);
         }
      }
      
      override public function hide() : void
      {
         SystemTimerManager.removeTickFun(this.updateView);
         super.hide();
      }
   }
}

