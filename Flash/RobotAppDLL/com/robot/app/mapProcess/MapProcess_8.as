package com.robot.app.mapProcess
{
   import com.robot.app.buyCloth.BuyClothController;
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.games.waterGunGame.WaterGunGame;
   import com.robot.app.systems.HelpManager;
   import com.robot.app.task.pioneerTaskList.BatteryTestTask;
   import com.robot.app.task.pioneerTaskList.HOTestTask;
   import com.robot.app.task.taskUtils.taskDialog.NpcTipDialog;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_8 extends BaseMapProcess
   {
       
      
      private var _repairBtn:SimpleButton;
      
      private var _inID:uint;
      
      private var xixi:String;
      
      private var _doodlePanel:AppModel;
      
      private var repairPanel:AppModel;
      
      private var _machPanel:MovieClip;
      
      private var wbMc:MovieClip;
      
      public function MapProcess_8()
      {
         super();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86053256);
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         this._machPanel = MapManager.currentMap.libManager.getMovieClip("GetMachPanel");
         ToolTipManager.add(conLevel["itemBtn"],"领取挖矿钻头");
         this._repairBtn = conLevel["repairBtn"];
         this._repairBtn.addEventListener(MouseEvent.CLICK,this.openRepair);
         this.xixi = NpcTipDialog.CICI;
         ToolTipManager.add(conLevel["getMach_btn"],"特殊装置领取舱");
         ToolTipManager.add(conLevel["buyBtn2"],"赛尔工厂");
         ToolTipManager.add(conLevel["color_door"],"涂装室");
         ToolTipManager.add(conLevel["repairBtn"],"装备修复机");
         this.wbMc = conLevel["hitWbMC"];
         this.wbMc.addEventListener(MouseEvent.MOUSE_OVER,this.wbmcOverHandler);
         this.wbMc.addEventListener(Event.ENTER_FRAME,this.enterFrameHandler);
      }
      
      private function enterFrameHandler(param1:Event) : void
      {
         this.wbMc.removeEventListener(Event.ENTER_FRAME,this.enterFrameHandler);
      }
      
      public function showWBTask() : void
      {
         HelpManager.show(0);
      }
      
      private function openRepair(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86053879);
         SocketConnection.send(1022,86053259);
         if(!this.repairPanel)
         {
            this.repairPanel = new AppModel(ClientConfig.getAppModule("RepairItemPanel"),"正在打开修复装置....");
            this.repairPanel.setup();
         }
         this.repairPanel.show();
      }
      
      public function buyHandler(param1:MouseEvent = null) : void
      {
         SocketConnection.send(1022,86053258);
         BuyClothController.show();
      }
      
      public function onColor() : void
      {
         SocketConnection.send(1022,86053261);
         if(this._doodlePanel == null)
         {
            this._doodlePanel = new AppModel(ClientConfig.getAppModule("DoodlePanel"),"正在打开涂装面板....");
            this._doodlePanel.setup();
            this._doodlePanel.sharedEvents.addEventListener(Event.OPEN,this.onDoodleOpen);
            this._doodlePanel.sharedEvents.addEventListener(Event.CLOSE,this.onDoodleClose);
         }
         this._doodlePanel.show();
      }
      
      public function buyItem() : void
      {
         SocketConnection.send(1022,86053260);
         ItemAction.buyItem(100014,false);
      }
      
      public function onMachHandler() : void
      {
         SocketConnection.send(1022,86053257);
         LevelManager.appLevel.addChild(this._machPanel);
         DisplayUtil.align(this._machPanel,null,AlignType.MIDDLE_CENTER);
         this._machPanel["close_btn"].addEventListener(MouseEvent.CLICK,this.clickMachCloseHandler);
         this._machPanel["ship_btn"].addEventListener(MouseEvent.CLICK,this.onShipHandler);
         this._machPanel["fire_btn"].addEventListener(MouseEvent.CLICK,this.onFireHandler);
         this._machPanel["wateGameBtn"].addEventListener(MouseEvent.CLICK,this.showWaterGame);
      }
      
      public function onFireHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         this.clickMachCloseHandler();
         NpcTipDialog.show("喷火枪的燃料是高纯度的氢气和氧气，只有按照合适比例混合后点燃，才能爆出最大的火焰。你先试用下这个喷火装置，看看你能不能搞定这个危险大家伙！",function():void
         {
            var _loc1_:HOTestTask = new HOTestTask();
         },NpcTipDialog.DOCTOR,-60);
      }
      
      public function onShipHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         this.clickMachCloseHandler();
         NpcTipDialog.show("潜水套装可以让赛尔承受海底的巨大压力，潜入深水去寻找矿藏。潜水套装里面有个电路，正确连接电路就可以启动它。你先拿这个模型练练手！",function():void
         {
            var _loc1_:BatteryTestTask = new BatteryTestTask();
         },NpcTipDialog.CICI,-60);
      }
      
      private function clickMachCloseHandler(param1:MouseEvent = null) : void
      {
         DisplayUtil.removeForParent(this._machPanel);
      }
      
      public function showWaterGame(param1:MouseEvent) : void
      {
         this.clickMachCloseHandler();
         NpcTipDialog.show("喷水装备可以用于灭火，强力水柱还能够击破碎石。你在火山星任务中会用到它。考考你，同一支水枪如何打到最远。",this.startWaterGame,this.xixi,-60);
      }
      
      private function startWaterGame() : void
      {
         WaterGunGame.loadGame();
      }
      
      private function wbmcOverHandler(param1:MouseEvent) : void
      {
         if(this.guard.currentFrame == 1)
         {
            this.guard.gotoAndPlay(1);
         }
      }
      
      private function get guard() : MovieClip
      {
         return conLevel["guard"];
      }
      
      override public function destroy() : void
      {
         ItemAction.desBuyPanel();
         ToolTipManager.remove(conLevel["itemBtn"]);
         this.wbMc.removeEventListener(MouseEvent.MOUSE_OVER,this.wbmcOverHandler);
         this.wbMc = null;
         clearTimeout(this._inID);
         this.xixi = null;
         ToolTipManager.remove(conLevel["wateGameBtn"]);
         ToolTipManager.remove(conLevel["ship_btn"]);
         ToolTipManager.remove(conLevel["buyBtn2"]);
         ToolTipManager.remove(conLevel["color_door"]);
         ToolTipManager.remove(conLevel["repairBtn"]);
         if(this._doodlePanel)
         {
            this._doodlePanel.sharedEvents.removeEventListener(Event.OPEN,this.onDoodleOpen);
            this._doodlePanel.sharedEvents.removeEventListener(Event.CLOSE,this.onDoodleClose);
            this._doodlePanel.destroy();
            this._doodlePanel = null;
         }
         if(this.repairPanel)
         {
            this.repairPanel.destroy();
            this.repairPanel = null;
         }
         BuyClothController.destroy();
      }
      
      private function onDoodleOpen(param1:Event) : void
      {
         var e:Event = param1;
         this._inID = setTimeout(function():void
         {
            MainManager.actorModel.sprite.x = 225;
            MainManager.actorModel.sprite.y = 90;
            clearTimeout(_inID);
         },500);
      }
      
      private function onDoodleClose(param1:Event) : void
      {
         var e:Event = param1;
         this._inID = setTimeout(function():void
         {
            MainManager.actorModel.sprite.x = 332;
            MainManager.actorModel.sprite.y = 115;
            clearTimeout(_inID);
         },1000);
      }
   }
}
