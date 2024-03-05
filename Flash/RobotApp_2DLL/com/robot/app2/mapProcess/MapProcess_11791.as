package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   
   public class MapProcess_11791 extends BaseMapProcess
   {
       
      
      protected var _map:MapModel;
      
      protected var _step:int;
      
      private var _surplusTime:int;
      
      private var _ctachNumArr:Array;
      
      private var _curNum:int;
      
      private var _maxNumArr:Array;
      
      protected var _isDone:Boolean;
      
      public function MapProcess_11791()
      {
         this._maxNumArr = [3,5,3];
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
         StatManager.sendStat2014("0104温泉旅馆","进入温泉场景","2019运营活动");
         this._map.topLevel.mouseEnabled = this._map.topLevel.mouseChildren = false;
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         index = int(str.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               MapManager.changeMapWithCallback(11897,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("HotSpringHotelMainPanel"),"正在打开....");
               });
               break;
            case "btn_" + index:
               StatManager.sendStat2014("0104温泉旅馆","点击" + index + "木牌","2019运营活动");
               KTool.getMultiValue([104674],function(param1:Array):void
               {
                  if(param1[0] > 0)
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("HotSpringHoteBathPanel"),"正在打开....");
                  }
                  else
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("HotSpringHotelIntroductionPanel"),"正在打开....",index);
                  }
               });
               break;
            case "npcBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("HotSpringHotelExchangePanel"),"正在打开....");
         }
      }
      
      protected function update() : void
      {
      }
      
      private function onTimer() : void
      {
         --this._surplusTime;
         if(this._surplusTime <= 0)
         {
            this.update();
         }
         else
         {
            this.getTimeClockString(this._surplusTime);
         }
      }
      
      private function getTimeClockString(param1:int) : void
      {
         this._map.controlLevel["showInfoMc"].timeTx.text = SystemTimerManager.getTimeClockString(param1,false);
      }
      
      override public function destroy() : void
      {
         SystemTimerManager.removeTickFun(this.onTimer);
         NpcDialog.hide();
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
