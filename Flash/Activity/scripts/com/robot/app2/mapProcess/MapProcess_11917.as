package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.DialogControl;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import gs.TweenLite;
   
   public class MapProcess_11917 extends BaseMapProcess
   {
       
      
      private var _commdId:int = 41900;
      
      public var _map:MapModel;
      
      private var _step:int;
      
      public function MapProcess_11917()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this._map = MapManager.currentMap;
         this._map.depthLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         KTool.showMapAllPlayerAndMonster(false);
         ToolBarController.showOrHideAllUser(false);
         KTool.getMultiValue([124068,124069],function(param1:Array):void
         {
            _step = KTool.subByte(param1[0],0,8);
            if(_step < 11)
            {
               ToolBarController.panel.hide();
               LevelManager.iconLevel.visible = false;
            }
         });
         this.update();
      }
      
      private function onMouseClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "doorBtn":
               MainManager.actorModel.walkAction(new Point(this._map.depthLevel["doorMc"].x,this._map.depthLevel["doorMc"].y));
               MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
         }
      }
      
      private function onEnter0(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         if(Point.distance(MainManager.actorModel.pos,new Point(this._map.depthLevel["doorMc"].x,this._map.depthLevel["doorMc"].y)) < 20)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
            if(this._step == 11)
            {
               MapManager.changeMap(11918);
            }
            else
            {
               KTool.socketSendCallBack(this._commdId,function():void
               {
                  MapManager.changeMap(11918);
               },[29,3]);
            }
         }
      }
      
      private function update() : void
      {
         KTool.getMultiValue([124068,124069],function(param1:Array):void
         {
            var yy:Number = NaN;
            var va:Array = param1;
            _step = KTool.subByte(va[0],0,8);
            if(_step < 3)
            {
               KTool.showMapAllPlayerAndMonster(true);
               ToolBarController.showOrHideAllUser(true);
               _map.depthLevel["zheMc"].visible = false;
            }
            else
            {
               KTool.showMapAllPlayerAndMonster(false);
               ToolBarController.showOrHideAllUser(false);
            }
            if(_step == 0)
            {
               _map.depthLevel["npcMc"].visible = false;
               _map.depthLevel["doorMc"].visible = false;
               DialogControl.showAllDilogs(67,1).then(function():void
               {
                  _map.depthLevel["npcMc"].alpha = 0;
                  _map.depthLevel["npcMc"].visible = true;
                  ToolBarController.panel.hide();
                  TweenLite.to(_map.depthLevel["npcMc"],0.5,{
                     "alpha":1,
                     "onComplete":function():void
                     {
                        DialogControl.showAllDilogs(67,2).then(function():void
                        {
                           KTool.socketSendCallBack(_commdId,function():void
                           {
                              update();
                           },[29,1]);
                        });
                     }
                  });
               });
            }
            else if(_step == 1)
            {
               _map.depthLevel["doorMc"].alpha = 0;
               _map.depthLevel["doorMc"].visible = true;
               TweenLite.to(_map.depthLevel["doorMc"],0.5,{
                  "alpha":1,
                  "onComplete":function():void
                  {
                     DialogControl.showAllDilogs(67,3).then(function():void
                     {
                        _map.depthLevel["doorMc"].gotoAndStop(2);
                        KTool.socketSendCallBack(_commdId,function():void
                        {
                           update();
                        },[29,2]);
                     });
                  }
               });
            }
            else if(_step == 2)
            {
               _map.depthLevel["doorMc"].alpha = 1;
               _map.depthLevel["doorMc"].gotoAndStop(2);
               _map.depthLevel["doorMc"].visible = true;
               yy = _map.depthLevel["doorMc"].y - _map.depthLevel["doorMc"].height / 2;
               CommonUI.addYellowArrow(MapManager.currentMap.depthLevel,_map.depthLevel["doorMc"].x,yy,0);
            }
            else if(_step >= 3 && _step < 7)
            {
               MapManager.changeMap(11918);
            }
            else if(_step >= 7 && _step < 10)
            {
               MapManager.changeMap(11919);
            }
            else if(_step == 10)
            {
               _map.depthLevel["doorMc"].gotoAndStop(2);
               _map.depthLevel["doorMc"].visible = true;
               _map.depthLevel["zheMc"].visible = false;
               DialogControl.showAllDilogs(67,23).then(function():void
               {
                  KTool.socketSendCallBack(_commdId,function():void
                  {
                     if(MapManager.currentMap.id == 1)
                     {
                        MapManager.changeMapWithCallback(320,function():void
                        {
                           MapManager.changeMapWithCallback(1,function():void
                           {
                              ModuleManager.showAppModule("WonderfulOfSummerAggregatePanel");
                           });
                        });
                     }
                     else
                     {
                        MapManager.changeMapWithCallback(1,function():void
                        {
                           ModuleManager.showAppModule("WonderfulOfSummerAggregatePanel");
                        });
                     }
                  },[29,16]);
               });
            }
            else if(_step == 11)
            {
               _map.depthLevel["doorMc"].gotoAndStop(2);
               _map.depthLevel["doorMc"].visible = true;
               KTool.showMapAllPlayerAndMonster(true);
               ToolBarController.showOrHideAllUser(true);
               _map.depthLevel["zheMc"].visible = false;
            }
         });
      }
      
      override public function destroy() : void
      {
         KTool.showMapAllPlayerAndMonster(true);
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         MainManager.selfVisible = true;
         CommonUI.removeYellowArrowForMapObject();
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
         super.destroy();
      }
   }
}
