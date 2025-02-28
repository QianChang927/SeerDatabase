package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.DialogControl;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11918 extends BaseMapProcess
   {
       
      
      private var _commdId:int = 41900;
      
      public var _map:MapModel;
      
      private var _step:int;
      
      public function MapProcess_11918()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this._map = MapManager.currentMap;
         this._map.depthLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this._map.depthLevel["npcMc"].visible = false;
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
         var cls:* = undefined;
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "doorBtn":
               MainManager.actorModel.walkAction(new Point(this._map.depthLevel["doorMc"].x,this._map.depthLevel["doorMc"].y));
               MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
               break;
            case "npcBtn":
               MainManager.actorModel.walkAction(new Point(this._map.depthLevel["npcMc"].x,this._map.depthLevel["npcMc"].y));
               MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter1);
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(cls.bonusType == 1)
                  {
                     PetManager.cureAll();
                  }
                  else
                  {
                     SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
                     {
                        PetManager.cureAll();
                     });
                  }
               }
         }
      }
      
      private function onEnter0(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         if(Point.distance(MainManager.actorModel.pos,new Point(this._map.depthLevel["doorMc"].x,this._map.depthLevel["doorMc"].y)) < 20)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter0);
            if(this._step == 6 || this._step == 11)
            {
               if(this._step == 6)
               {
                  KTool.socketSendCallBack(this._commdId,function():void
                  {
                     MapManager.changeMap(11919);
                  },[29,7]);
               }
               else
               {
                  MapManager.changeMap(11919);
               }
            }
            else
            {
               Alarm2.show("终端过载！请先处理异常数据！");
            }
         }
      }
      
      private function onEnter1(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         if(Point.distance(MainManager.actorModel.pos,new Point(this._map.depthLevel["npcMc"].x,this._map.depthLevel["npcMc"].y)) < 20)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter1);
            KTool.socketSendCallBack(this._commdId,function():void
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
            },[29,5]);
         }
      }
      
      private function fightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.fightOverHandler);
         if(!FightManager.isWin)
         {
            if(!BufferRecordManager.getMyState(1563))
            {
               BufferRecordManager.setMyState(1563,true,function():void
               {
                  DialogControl.showAllDilogs(67,8);
               });
            }
            else
            {
               DialogControl.showAllDilogs(67,9);
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
               MapManager.changeMap(11917);
            }
            else if(_step == 3)
            {
               _map.depthLevel["npcMc"].visible = false;
               _map.depthLevel["doorMc"].gotoAndStop(2);
               DialogControl.showAllDilogs(67,4).then(function():void
               {
                  _map.depthLevel["doorMc"].gotoAndStop(3);
                  DialogControl.showAllDilogs(67,6).then(function():void
                  {
                     KTool.socketSendCallBack(_commdId,function():void
                     {
                        update();
                     },[29,4]);
                  });
               });
            }
            else if(_step == 4)
            {
               _map.depthLevel["npcMc"].visible = true;
               _map.depthLevel["doorMc"].gotoAndStop(3);
               if(!BufferRecordManager.getMyState(1564))
               {
                  BufferRecordManager.setMyState(1564,true,function():void
                  {
                     DialogControl.showAllDilogs(67,7).then(function():void
                     {
                        KTool.socketSendCallBack(_commdId,function():void
                        {
                           FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
                        },[29,5]);
                     });
                  });
               }
            }
            else if(_step == 5)
            {
               _map.depthLevel["npcMc"].visible = true;
               _map.depthLevel["npcMc"].gotoAndStop(2);
               _map.depthLevel["doorMc"].gotoAndStop(2);
               DialogControl.showAllDilogs(67,10).then(function():void
               {
                  KTool.socketSendCallBack(_commdId,function():void
                  {
                     update();
                  },[29,6]);
               });
            }
            else if(_step == 6)
            {
               _map.depthLevel["npcMc"].visible = true;
               _map.depthLevel["npcMc"].gotoAndStop(2);
               _map.depthLevel["doorMc"].gotoAndStop(2);
               _map.depthLevel["doorMc"].visible = true;
               yy = _map.depthLevel["doorMc"].y - _map.depthLevel["doorMc"].height / 2;
               CommonUI.addYellowArrow(MapManager.currentMap.depthLevel,_map.depthLevel["doorMc"].x,yy,0);
            }
            else if(_step == 7)
            {
               MapManager.changeMap(11919);
            }
            else if(_step == 11)
            {
               _map.depthLevel["npcMc"].visible = true;
               _map.depthLevel["npcMc"].gotoAndStop(2);
               _map.depthLevel["doorMc"].gotoAndStop(2);
               _map.depthLevel["doorMc"].visible = true;
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
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter1);
         super.destroy();
      }
   }
}
