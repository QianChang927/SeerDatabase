package com.robot.app.task.petstory.app.ship
{
   import com.robot.app.buyItem.BuyMoneyItemManager;
   import com.robot.app.task.detectShip.DetectShipCtrl;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class ShipWordPanel
   {
       
      
      private const PATH:String = "resource/module/ext/app/stoveWorldMap.swf";
      
      private var _closeBtn:SimpleButton;
      
      private var _app:ApplicationDomain;
      
      private var _mainUI:MovieClip;
      
      private var _loader:MCLoader;
      
      private var _shipType:uint;
      
      private var _shipMC_1:MovieClip;
      
      private var _shipMC_2:MovieClip;
      
      private var _moneyNum:uint;
      
      public function ShipWordPanel(param1:uint, param2:uint = 0)
      {
         super();
         this._shipType = param1;
         this._moneyNum = param2;
         this.loadPanel();
      }
      
      private function loadPanel() : void
      {
         if(!this._app)
         {
            this._loader = new MCLoader(this.PATH,LevelManager.appLevel,1,"正在加载星系选择");
            this._loader.addEventListener(MCLoadEvent.SUCCESS,this.onComplete);
            this._loader.doLoad();
         }
      }
      
      private function onComplete(param1:MCLoadEvent) : void
      {
         this._app = param1.getApplicationDomain();
         this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onComplete);
         this._mainUI = new (this._app.getDefinition("StoveWordUI") as Class)() as MovieClip;
         this._closeBtn = this._mainUI["closeBtn"];
         this._closeBtn.addEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this.show();
      }
      
      private function show() : void
      {
         DisplayUtil.align(this._mainUI,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(this._mainUI);
         LevelManager.closeMouseEvent();
         this.initMC();
      }
      
      private function initMC() : void
      {
         var _loc1_:uint = 1;
         while(_loc1_ <= 4)
         {
            (this._mainUI["btn_" + _loc1_] as SimpleButton).addEventListener(MouseEvent.CLICK,this.onMouseBtn);
            _loc1_++;
         }
      }
      
      private function onMouseBtn(param1:MouseEvent) : void
      {
         var num:uint = 0;
         var e:MouseEvent = param1;
         num = uint((e.currentTarget as SimpleButton).name.slice(4));
         if(num == 4 && this._shipType == 1)
         {
            Alarm.show("由于地理环境恶劣，轻型飞船不能进入。");
            return;
         }
         if(num == 1)
         {
            SocketConnection.send(1022,86057303);
         }
         if(num == 2)
         {
            SocketConnection.send(1022,86057304);
         }
         if(num == 3)
         {
            SocketConnection.send(1022,86057305);
         }
         if(num == 4)
         {
            SocketConnection.send(1022,86057306);
         }
         if(this._moneyNum > 0)
         {
            BuyMoneyItemManager.buyItem(this._moneyNum,function():void
            {
               DetectShipCtrl.startSea(_shipType,num);
               if(DisplayUtil.hasParent(_mainUI))
               {
                  onCloseBtn(new MouseEvent(MouseEvent.CLICK));
               }
            },true,false);
         }
         else
         {
            DetectShipCtrl.startSea(this._shipType,num);
            if(DisplayUtil.hasParent(this._mainUI))
            {
               this.onCloseBtn(new MouseEvent(MouseEvent.CLICK));
            }
         }
      }
      
      private function onCloseBtn(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._mainUI,false);
         LevelManager.openMouseEvent();
         this.destory();
      }
      
      private function destory() : void
      {
         this._closeBtn.removeEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this._closeBtn = null;
         this._app = null;
         this._loader = null;
         this._mainUI = null;
      }
   }
}
