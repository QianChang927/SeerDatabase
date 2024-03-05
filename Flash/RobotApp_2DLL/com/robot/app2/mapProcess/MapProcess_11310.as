package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.app2.control.StaticObjectControll;
   import com.robot.core.controller.CameraController;
   import com.robot.core.controller.CameraMode;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.events.SocketEvent;
   
   public class MapProcess_11310 extends BaseMapProcess
   {
       
      
      private var _state:int;
      
      private var _countDownCmp:TimeCountdownComponent;
      
      private var _endTime:uint;
      
      private var _giftNum:int;
      
      public function MapProcess_11310()
      {
         super();
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
         this.removeEvent();
         if(this._countDownCmp)
         {
            this._countDownCmp.destroy();
            this._countDownCmp = null;
         }
         super.destroy();
      }
      
      override protected function init() : void
      {
         MapManager.currentMap.topLevel["arrowMc"].visible = false;
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         this.addEvent();
         this.refreshState(function():void
         {
            _countDownCmp = new TimeCountdownComponent(btnLevel["timeTxt"]);
            _countDownCmp.initialSeconds = _endTime - SystemTimerManager.time;
            _countDownCmp.start(function():void
            {
               leftMap(false);
            });
         });
         super.init();
         MainManager.actorModel.addEventListener(Event.ENTER_FRAME,this.onWalk1);
      }
      
      private function removeEvent() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onTopClick);
         LevelManager.mapScroll = false;
         var _loc1_:int = 0;
         while(_loc1_ < 8)
         {
            MapManager.currentMap.controlLevel["bossMc_" + _loc1_].removeEventListener(MouseEvent.MOUSE_OVER,this.onOverBoss);
            MapManager.currentMap.controlLevel["bossMc_" + _loc1_].removeEventListener(MouseEvent.MOUSE_OUT,this.onOutBoss);
            MapManager.currentMap.controlLevel["bossMc_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.onClickBoss);
            _loc1_++;
         }
         MainManager.actorModel.removeEventListener(Event.ENTER_FRAME,this.onWalk1);
      }
      
      private function addEvent() : void
      {
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onTopClick);
      }
      
      private function checkWalk() : void
      {
         var _loc1_:Point = new Point(MapManager.currentMap.controlLevel["bossMc_" + this._state].x - 190,385);
         var _loc2_:Point = MainManager.actorModel.pos;
         if(Point.distance(_loc2_,_loc1_) < 30)
         {
            CameraController.closeScroll = true;
         }
         else
         {
            MainManager.actorModel.walkEnabled = true;
            MainManager.actorModel.moveAndAction(_loc1_,this.walkOver);
            MainManager.actorModel.walkEnabled = false;
            CameraController.closeScroll = false;
            CameraController.cameraMode = CameraMode.FOLLOW;
         }
      }
      
      private function walkOver() : void
      {
      }
      
      private function onWalk1(param1:Event) : void
      {
         btnLevel.x = btnLevel.parent.globalToLocal(MainManager.getStageCenterPoint()).x - 510;
      }
      
      private function onOverBoss(param1:MouseEvent) : void
      {
         param1.target.gotoAndStop(2);
      }
      
      private function onOutBoss(param1:MouseEvent) : void
      {
         param1.target.gotoAndStop(1);
      }
      
      private function onClickBoss(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "fightBtn":
               FightManager.fightNoMapBoss("",7791 + this._state,false,true,function():void
               {
                  MapManager.currentMap.topLevel["arrowMc"].visible = FightManager.isWin;
                  MapManager.currentMap.topLevel["arrowMc"].x = MapManager.currentMap.topLevel.parent.globalToLocal(MainManager.getStageCenterPoint()).x + 100;
               });
               break;
            case "oneClickBtn":
               KTool.buyProductByCallback(248477,1,function():void
               {
                  SocketConnection.sendByQueue(45681,[5,2],function(param1:SocketEvent):void
                  {
                     topLevel["arrowMc"].x = btnLevel.parent.globalToLocal(MainManager.getStageCenterPoint()).x + 100;
                     topLevel["arrowMc"].visible = true;
                     refreshState();
                  });
               });
         }
      }
      
      private function onTopClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var str:String = String(e.target.name);
         switch(str)
         {
            case "leftBtn":
               Alert.show("确定离开吗？现在离开无法获得任何奖励!",function():void
               {
                  SocketConnection.sendByQueue(45681,[7,0]);
                  leftMap(true);
               });
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               PetManager.cureAll();
         }
      }
      
      private function leftMap(param1:Boolean) : void
      {
         var b:Boolean = param1;
         MapManager.changeMapWithCallback(1,function():void
         {
            setStaticGotNum(0);
            if(b)
            {
               ModuleManager.showAppModule("MiusiBecomeAKingTaskPanel");
            }
            else
            {
               ModuleManager.showAppModule("MiusiBecomeAKingJieSuanPanel",{
                  "bossNum":_state,
                  "overTime":_endTime - SystemTimerManager.time,
                  "giftNum":_giftNum,
                  "levelIndex":2
               });
            }
         });
      }
      
      private function getStaticGotNum() : int
      {
         var _loc1_:Object = StaticObjectControll.getObjectByKey("OnlineToGetWinsPostiga_GotNum");
         return _loc1_ == null ? 0 : int(_loc1_);
      }
      
      private function setStaticGotNum(param1:int) : void
      {
         StaticObjectControll.setObjectByKey("OnlineToGetWinsPostiga_GotNum",param1);
      }
      
      private function refreshState(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([102103,102106,102107],function(param1:Array):void
         {
            var _loc2_:* = false;
            _state = param1[0];
            StatManager.sendStat2014("0819缪斯精灵王输出","进入史诗之门boss" + (_state + 1) + "挑战","2016运营活动");
            btnLevel["proccessMc"].mc.gotoAndStop(10 * _state);
            _endTime = param1[1];
            _giftNum = param1[2];
            btnLevel["numTxt"].text = _giftNum;
            var _loc3_:int = 0;
            while(_loc3_ < 8)
            {
               _loc2_ = _state == _loc3_;
               MapManager.currentMap.controlLevel["bossMc_" + _loc3_].gotoAndStop(1);
               MapManager.currentMap.controlLevel["bossMc_" + _loc3_].visible = _loc2_;
               if(_loc2_)
               {
                  MapManager.currentMap.controlLevel["bossMc_" + _loc3_].gotoAndStop(2);
                  MapManager.currentMap.controlLevel["bossMc_" + _loc3_].addEventListener(MouseEvent.CLICK,onClickBoss);
               }
               else
               {
                  MapManager.currentMap.controlLevel["bossMc_" + _loc3_].visible = false;
               }
               _loc3_++;
            }
            if(_giftNum > getStaticGotNum())
            {
               Alarm.show("恭喜你获得了" + (_giftNum - getStaticGotNum()) + "个超能幽光！");
            }
            setStaticGotNum(_giftNum);
            if(_state == 8)
            {
               leftMap(false);
            }
            else
            {
               checkWalk();
            }
            if(func != null)
            {
               func();
            }
         });
      }
   }
}
