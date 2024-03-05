package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
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
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   
   public class MapProcess_11309 extends BaseMapProcess
   {
       
      
      private var _index:int;
      
      private var _countDownCmp:TimeCountdownComponent;
      
      private var _endTime:uint;
      
      private var _giftNum:int;
      
      public function MapProcess_11309()
      {
         super();
      }
      
      override public function destroy() : void
      {
         if(this._countDownCmp)
         {
            this._countDownCmp.destroy();
            this._countDownCmp = null;
         }
         this.removeEvent();
         this.lockMap(false);
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
         super.destroy();
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         this.refreshData();
         super.init();
      }
      
      private function refreshData() : void
      {
         this.addEvent();
         this.refreshState(function():void
         {
            _countDownCmp = new TimeCountdownComponent(topLevel["timeTxt"]);
            _countDownCmp.initialSeconds = _endTime - SystemTimerManager.time;
            _countDownCmp.start(function():void
            {
               leftMap(false);
            });
         });
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
                  "bossNum":_index,
                  "overTime":_endTime - SystemTimerManager.time,
                  "giftNum":_giftNum,
                  "levelIndex":1
               });
            }
         });
      }
      
      private function removeEvent() : void
      {
         this.topLevel.removeEventListener(MouseEvent.CLICK,this.onTopClick);
         this.depthLevel.removeEventListener(MouseEvent.CLICK,this.onDepthClick);
      }
      
      private function addEvent() : void
      {
         this.topLevel.addEventListener(MouseEvent.CLICK,this.onTopClick);
         this.depthLevel.addEventListener(MouseEvent.CLICK,this.onDepthClick);
      }
      
      private function onDepthClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var str:String = String(e.target.name);
         switch(str)
         {
            case "fightBtn":
               FightManager.fightNoMapBoss("",7783 + this._index);
               break;
            case "oneClickBtn":
               KTool.buyProductByCallback(248476,1,function():void
               {
                  SocketConnection.sendByQueue(45681,[5,1],function(param1:SocketEvent):void
                  {
                     refreshState();
                  });
               });
               break;
            case "nextDoor":
               this.gotoDoor();
         }
      }
      
      private function refreshState(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([102102,102106,102107],function(param1:Array):void
         {
            var _loc2_:int = getStaticObj();
            _index = param1[0];
            StatManager.sendStat2014("0819缪斯精灵王输出","进入希望之门boss" + (_index + 1) + "挑战","2016运营活动");
            showOrHideDoor(false);
            setStaticObj(_index);
            topLevel["proccessMc"].mc.gotoAndStop(10 * _index);
            depthLevel["bossMc"].gotoAndStop(_index + 1);
            _endTime = param1[1];
            _giftNum = param1[2];
            topLevel["numTxt"].text = _giftNum;
            if(_index == 8)
            {
               leftMap(false);
            }
            if(_giftNum > getStaticGotNum())
            {
               Alarm.show("恭喜你获得了" + (_giftNum - getStaticGotNum()) + "个超能微光！");
            }
            setStaticGotNum(_giftNum);
            if(func != null)
            {
               func();
            }
         });
      }
      
      private function showOrHideDoor(param1:Boolean) : void
      {
         this.depthLevel["nextDoor"].visible = param1;
         this.topLevel["arrowMc"].visible = param1;
         if(param1)
         {
            this.depthLevel["bossMc"].y = 234 + 560;
         }
         else
         {
            this.depthLevel["bossMc"].y = 234;
         }
      }
      
      private function gotoDoor() : void
      {
         MainManager.actorModel.moveAndAction(new Point(909,150),this.walkToNextLevel);
      }
      
      private function walkToNextLevel() : void
      {
         this.depthLevel["nextDoor"].visible = false;
         this.topLevel["arrowMc"].visible = false;
         MapManager.currentMap.hideUser(MainManager.actorModel);
         this.lockMap(true);
         if(LevelManager.mapLevel.y <= -200)
         {
            LevelManager.mapLevel.y = 0;
         }
         TweenLite.to(LevelManager.mapLevel,5,{"y":-560});
         TweenLite.to(this.depthLevel["bossMc"],5,{
            "y":234,
            "onComplete":this.onTweenComp
         });
      }
      
      private function lockMap(param1:Boolean) : void
      {
         MainManager.actorModel.walkEnabled = !param1;
         if(param1)
         {
            LevelManager.closeMouseEvent();
         }
         else
         {
            LevelManager.openMouseEvent();
         }
      }
      
      private function onTweenComp() : void
      {
         MapManager.currentMap.showUser(MainManager.actorModel);
         this.lockMap(false);
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
      
      private function getStaticObj() : int
      {
         var _loc1_:Object = StaticObjectControll.getObjectByKey("OnlineToGetWinsPostiga_Forever");
         return _loc1_ == null ? -1 : int(_loc1_);
      }
      
      private function setStaticObj(param1:int) : void
      {
         StaticObjectControll.setObjectByKey("OnlineToGetWinsPostiga_Forever",param1);
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
                  setStaticObj(-1);
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
   }
}
