package com.robot.app.mapProcess
{
   import com.robot.app.exchangeCloth.ExchangeClothModel;
   import com.robot.app.systems.HelpManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.energyExchange.ExchangeOreModel;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.mode.PetModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   import flash.events.Event;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_6 extends BaseMapProcess
   {
       
      
      private var _isShow:Boolean = false;
      
      private var _bombGameMc:AppModel;
      
      private var _exchangeApp:AppModel;
      
      private var _excClothModel:ExchangeClothModel;
      
      public function MapProcess_6()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._isShow = false;
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
      }
      
      public function onGuard() : void
      {
         HelpManager.show(0);
      }
      
      public function aeroLiteGame() : void
      {
         SocketConnection.send(1022,86053877);
         MapManager.removeAppArrow();
         getDefinitionByName("com.robot.app2.control.ThruAeroliteGameController").setup();
      }
      
      public function showExChange() : void
      {
         if(!this._isShow)
         {
            ExchangeOreModel.getData(this.onGetComHandler);
         }
      }
      
      public function onGetComHandler(param1:Object) : void
      {
         if(param1)
         {
            this._isShow = true;
            if(this._exchangeApp == null)
            {
               this._exchangeApp = new AppModel(ClientConfig.getAppModule("ExchangeOrePanel"),"正在进入能源兑换....");
               this._exchangeApp.setup();
               this._exchangeApp.sharedEvents.addEventListener(Event.CLOSE,this.onCloseHandler);
            }
            this._exchangeApp.init(param1);
         }
         else
         {
            Alarm.show("你目前还没有可以兑换的材料！");
         }
      }
      
      private function onCloseHandler(param1:Event) : void
      {
         this._isShow = false;
         this._exchangeApp.sharedEvents.removeEventListener(Event.CLOSE,this.onCloseHandler);
         this._exchangeApp.destroy();
         this._exchangeApp = null;
      }
      
      public function onExchangeClothHandler() : void
      {
         this._excClothModel = new ExchangeClothModel();
      }
      
      public function gameFun() : void
      {
         var _loc1_:* = null;
         var _loc2_:PetModel = null;
         var _loc3_:uint = 0;
         if(TasksManager.getTaskStatus(405) == TasksManager.COMPLETE)
         {
            Alarm.show("比比鼠看起来已经很疲劳咯，让小家伙好好休息一下吧！");
            return;
         }
         if(TasksManager.getTaskStatus(405) == TasksManager.UN_ACCEPT)
         {
            _loc1_ = "你还没有获取" + TextFormatUtil.getRedTxt("比比鼠发电能源") + "的每日任务呢！";
            Alarm.show(_loc1_);
         }
         else
         {
            _loc2_ = MainManager.actorModel.pet;
            if(_loc2_)
            {
               _loc3_ = uint(_loc2_.info.petID);
               if(_loc3_ == 13 || _loc3_ == 14 || _loc3_ == 15)
               {
                  this.gameStart();
               }
               else
               {
                  Alarm.show("只有带上你的<font color=\'#ff0000\'>比比鼠</font>才可以来启动发电能源设施哦。");
               }
            }
            else
            {
               Alarm.show("只有带上你的<font color=\'#ff0000\'>比比鼠</font>才可以来启动发电能源设施哦。");
            }
         }
      }
      
      private function gameStart() : void
      {
         if(this._bombGameMc == null)
         {
            this._bombGameMc = new AppModel(ClientConfig.getGameModule("ElectricGame"),"正在打开发电游戏....");
            this._bombGameMc.setup();
         }
         this._bombGameMc.show();
      }
      
      override public function destroy() : void
      {
         if(this._excClothModel)
         {
            this._excClothModel.destroy();
            this._excClothModel = null;
         }
         if(this._exchangeApp)
         {
            this._exchangeApp.sharedEvents.removeEventListener(Event.CLOSE,this.onCloseHandler);
            this._exchangeApp.destroy();
            this._exchangeApp = null;
         }
      }
   }
}
