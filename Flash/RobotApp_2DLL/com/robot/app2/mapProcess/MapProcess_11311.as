package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.app2.control.StaticObjectControll;
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
   import com.robot.core.utils.Direction;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   
   public class MapProcess_11311 extends BaseMapProcess
   {
      
      private static var bossmov:MovieClip;
      
      private static var road:MovieClip;
      
      private static var bag:SimpleButton;
      
      private static var leave:SimpleButton;
      
      private static var iswin:Boolean = false;
      
      private static var bossindex:int;
       
      
      private const Bossids:Array = [7799,7800,7801,7802];
      
      private const Petids:Array = [2625,2631,2637,2336];
      
      private var _endTime:uint;
      
      private var _giftNum:int;
      
      private var _countDownCmp:TimeCountdownComponent;
      
      public function MapProcess_11311()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         bossmov = MapManager.currentMap.controlLevel["BossMov"];
         road = MapManager.currentMap.controlLevel["Road"];
         MainManager.actorModel.x = 200;
         MainManager.actorModel.y = 150;
         bag = MapManager.currentMap.controlLevel["bag"];
         leave = MapManager.currentMap.controlLevel["leave"];
         bossmov.addEventListener(MouseEvent.CLICK,this.onBattleHandle);
         MapManager.currentMap.topLevel.addEventListener(MouseEvent.CLICK,this.onTopClick);
         this.requestUpdata(function():void
         {
            _countDownCmp = new TimeCountdownComponent(topLevel["timeTxt"]);
            _countDownCmp.initialSeconds = _endTime - SystemTimerManager.time;
            _countDownCmp.start(function():void
            {
               leftMap(false);
            });
         });
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
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
                  "bossNum":bossindex,
                  "overTime":_endTime - SystemTimerManager.time,
                  "giftNum":_giftNum,
                  "levelIndex":3
               });
            }
         });
      }
      
      private function onBattleHandle(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         switch(evt.target.name)
         {
            case "fightBtn":
               FightManager.fightNoMapBoss("",this.Bossids[bossindex]);
               break;
            case "oneClickBtn":
               KTool.buyProductByCallback(248478,1,function():void
               {
                  SocketConnection.sendByQueue(45681,[5,3],function(param1:SocketEvent):void
                  {
                     requestUpdata();
                  });
               });
         }
      }
      
      private function moveRoad() : void
      {
         bossmov.visible = false;
         MainManager.actorModel.direction = Direction.RIGHT_DOWN;
         MainManager.actorModel.skeleton.play();
         road.x = 0;
         road.y = 0;
         TweenLite.to(road,5,{
            "x":-1373,
            "y":-290,
            "onComplete":function():void
            {
               bossmov.visible = true;
               MainManager.actorModel.skeleton.stop();
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
      
      public function requestUpdata(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([102104,102105,102106,102107],function(param1:Array):void
         {
            bossindex = param1[0];
            StatManager.sendStat2014("0819缪斯精灵王输出","进入梦魇之门boss" + (bossindex + 1) + "挑战","2016运营活动");
            bossmov.gotoAndStop(bossindex + 1);
            var _loc2_:int = 6 - param1[1];
            var _loc3_:int = 0;
            while(_loc3_ < 6)
            {
               bossmov["fireMc_" + _loc3_].visible = _loc3_ < _loc2_;
               _loc3_++;
            }
            bossmov["hurtNum"].text = int(_loc2_ / 6 * 100);
            _endTime = param1[2];
            _giftNum = param1[3];
            topLevel["numTxt"].text = _giftNum;
            if(_giftNum > getStaticGotNum())
            {
               Alarm.show("恭喜你获得了" + (_giftNum - getStaticGotNum()) + "个超能圣光！");
            }
            setStaticGotNum(_giftNum);
            if(bossindex < 4)
            {
               if(param1[1] == 0 && bossindex > 0)
               {
                  moveRoad();
               }
            }
            else
            {
               leftMap(false);
               Alarm.show("恭喜你通关了!");
            }
            if(func != null)
            {
               func();
            }
         });
      }
      
      override public function destroy() : void
      {
         if(this._countDownCmp)
         {
            this._countDownCmp.destroy();
            this._countDownCmp = null;
         }
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         bossmov.removeEventListener(MouseEvent.CLICK,this.onBattleHandle);
         MapManager.currentMap.topLevel.removeEventListener(MouseEvent.CLICK,this.onTopClick);
         super.destroy();
      }
   }
}
