package com.robot.app2.mapProcess
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class MapProcess_1456 extends BaseMapProcess
   {
       
      
      public var _map:MapModel;
      
      private var _posArr:Array;
      
      private var _nameArr:Array;
      
      private var _appNameArr:Array;
      
      private var _curIndex:int;
      
      public function MapProcess_1456()
      {
         this._posArr = [new Point(125,424),new Point(304,395),new Point(488,384),new Point(661,328),new Point(742,454),new Point(930,446),new Point(1255,349),new Point(1516,401),new Point(1659,481)];
         this._nameArr = ["烧烤","火锅","自助餐","安保","签到","卫生中心","影院","KTV","游戏厅"];
         this._appNameArr = ["FoodPlazaMainPanel","FoodPlazaS2Panel","FoodPlazaS4Panel","SeerNeverSleepCityCenterSecurityPanel","SeerNeverSleepCitySignInMainPanel","SeerNeverSleepCityCenterHygienePanel","WuZeiCinemaMainPanel","AoWuKtvMainPanel","MaoZaiGameRoomMainPanel"];
         super();
      }
      
      override protected function init() : void
      {
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      private function setMouseClick(param1:Boolean) : void
      {
         conLevel.mouseChildren = param1;
         conLevel.mouseEnabled = param1;
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               Alert.show("你确定要离开不夜城吗？",function():void
               {
                  MapManager.changeMap(1);
               });
               break;
            case "goBtn_" + index:
               this._curIndex = index;
               if(Point.distance(MainManager.actorModel.pos,this._posArr[this._curIndex]) < 20)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule(this._appNameArr[this._curIndex]),"正在打开....");
               }
               else
               {
                  MainManager.actorModel.walkAction(this._posArr[index]);
                  MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter);
               }
         }
      }
      
      private function onEnter(param1:RobotEvent) : void
      {
         if(Point.distance(MainManager.actorModel.pos,this._posArr[this._curIndex]) < 20)
         {
            ModuleManager.showModule(ClientConfig.getAppModule(this._appNameArr[this._curIndex]),"正在打开....");
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter);
         }
      }
      
      public function update() : void
      {
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter);
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
