package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.DialogControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class MapProcess_11919 extends BaseMapProcess
   {
       
      
      private var _commdId:int = 41900;
      
      public var _map:MapModel;
      
      private var _step:int;
      
      private var _itemNum:int;
      
      private var _isfristQita:Boolean = true;
      
      private var _isfristXita:Boolean = true;
      
      private var _clickHandsNum:int;
      
      private var _clickDoorNum:int;
      
      private var _isGetItem1:Boolean;
      
      private var _isGetItem2:Boolean;
      
      public function MapProcess_11919()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this._map.depthLevel.addEventListener(MouseEvent.CLICK,this.onDepthMouseClick);
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
      
      private function onDepthMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(KTool.getIndex(e.target));
         switch(e.target.name)
         {
            case "npcBtn":
               if(this._isfristQita)
               {
                  KTool.socketSendCallBack(this._commdId,function():void
                  {
                     DialogControl.showAllDilogs(67,12).then(function():void
                     {
                        update();
                     });
                  },[29,8]);
               }
               else if(this._isGetItem1)
               {
                  KTool.socketSendCallBack(this._commdId,function():void
                  {
                     DialogControl.showAllDilogs(67,14).then(function():void
                     {
                        update();
                     });
                  },[29,8]);
               }
               else
               {
                  KTool.socketSendCallBack(this._commdId,function():void
                  {
                     DialogControl.showAllDilogs(67,13);
                  },[29,8]);
               }
               break;
            case "npcBtn_1":
               DialogControl.showAllDilogs(67,15);
               break;
            case "npc2Btn":
               if(this._isfristXita)
               {
                  KTool.socketSendCallBack(this._commdId,function():void
                  {
                     DialogControl.showAllDilogs(67,16).then(function():void
                     {
                        update();
                     });
                  },[29,9]);
               }
               else if(this._isGetItem2)
               {
                  KTool.socketSendCallBack(this._commdId,function():void
                  {
                     DialogControl.showAllDilogs(67,18).then(function():void
                     {
                        update();
                     });
                  },[29,9]);
               }
               else
               {
                  KTool.socketSendCallBack(this._commdId,function():void
                  {
                     DialogControl.showAllDilogs(67,17);
                  },[29,9]);
               }
               break;
            case "npc2Btn_1":
               DialogControl.showAllDilogs(67,19);
               break;
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
            if(this._step == 9 || this._step == 11)
            {
               if(this._step == 9)
               {
                  DialogControl.showAllDilogs(67,22).then(function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("WonderfulOfSummerB0"),function():void
                     {
                        KTool.socketSendCallBack(_commdId,function():void
                        {
                           update();
                        },[29,15]);
                     });
                  });
               }
               else if(MapManager.currentMap.id == 1)
               {
                  MapManager.changeMapWithCallback(320,function():void
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                     });
                  });
               }
               else
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                  });
               }
            }
            else
            {
               Alarm2.show("终端过载！请先处理异常数据！");
            }
         }
      }
      
      private function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(KTool.getIndex(e.target));
         switch(e.target.name)
         {
            case "handsBtn":
               KTool.socketSendCallBack(this._commdId,function():void
               {
                  if(_clickHandsNum == 1)
                  {
                     _map.controlLevel["handMc"]["playMc"].visible = true;
                     AnimateManager.playMcAnimate(_map.controlLevel["handMc"],3,"playMc",function():void
                     {
                        _map.controlLevel["handMc"]["playMc"].visible = false;
                        update();
                     });
                  }
                  else
                  {
                     update();
                  }
               },[29,10]);
               break;
            case "smallDoorBtn":
               KTool.socketSendCallBack(this._commdId,function():void
               {
                  if(_clickDoorNum == 4)
                  {
                     _map.controlLevel["smallDoorMc"]["playMc"].visible = true;
                     AnimateManager.playMcAnimate(_map.controlLevel["smallDoorMc"],2,"playMc",function():void
                     {
                        _map.controlLevel["smallDoorMc"]["playMc"].visible = false;
                        update();
                     });
                  }
                  else
                  {
                     update();
                  }
               },[29,11]);
               break;
            case "itemBtn_" + index:
               KTool.socketSendCallBack(this._commdId,function():void
               {
                  update();
               },[29,12 + index]);
         }
      }
      
      private function playBallMoive() : void
      {
         KTool.getMultiValue([124068,124069],function(param1:Array):void
         {
            if(BitUtils.getBit(param1[1],22) > 0 && BitUtils.getBit(param1[1],23) > 0)
            {
               DialogControl.showAllDilogs(67,17);
            }
         });
      }
      
      private function update() : void
      {
         ItemManager.updateItems([9999],function():void
         {
            _itemNum = ItemManager.getNumByID(9999);
         });
         KTool.getMultiValue([124068,124069],function(param1:Array):void
         {
            var yy:Number = NaN;
            var va:Array = param1;
            _isfristQita = BitUtils.getBit(va[1],20) > 0 ? false : true;
            CommonUI.setEnabled(_map.controlLevel["handMc"],!_isfristQita,false);
            _clickHandsNum = KTool.subByte(va[1],0,8);
            _map.controlLevel["handMc"].gotoAndStop(_clickHandsNum + 1);
            _map.depthLevel["qitaMc"].gotoAndStop(BitUtils.getBit(va[1],24) > 0 ? 2 : 1);
            _isGetItem1 = BitUtils.getBit(va[1],22) > 0 ? true : false;
            _map.controlLevel["handMc"]["playMc"].visible = false;
            if(_clickHandsNum >= 2 && !_isGetItem1)
            {
               _map.controlLevel["handMc"]["itemBtn_0"].visible = true;
            }
            else
            {
               _map.controlLevel["handMc"]["itemBtn_0"].visible = false;
            }
            if(_isfristQita)
            {
               _map.depthLevel["qitaMc"]["mc"].gotoAndStop(1);
               _map.depthLevel["qitaMc"]["mc"].visible = true;
            }
            else
            {
               _map.depthLevel["qitaMc"]["mc"].visible = false;
               if(_isGetItem1)
               {
                  if(BitUtils.getBit(va[1],24) > 0)
                  {
                     _map.depthLevel["qitaMc"]["mc"].visible = false;
                  }
                  else
                  {
                     _map.depthLevel["qitaMc"]["mc"].visible = true;
                     _map.depthLevel["qitaMc"]["mc"].gotoAndStop(2);
                  }
               }
            }
            _isfristXita = BitUtils.getBit(va[1],21) > 0 ? false : true;
            CommonUI.setEnabled(_map.controlLevel["smallDoorMc"],!_isfristXita,false);
            _clickDoorNum = KTool.subByte(va[1],8,8);
            _map.controlLevel["doorjinduMc"].gotoAndStop(_clickDoorNum + 1);
            _map.controlLevel["smallDoorMc"].gotoAndStop(_clickDoorNum >= 5 ? 2 : 1);
            _map.depthLevel["xitaMc"].gotoAndStop(BitUtils.getBit(va[1],25) > 0 ? 2 : 1);
            _isGetItem2 = BitUtils.getBit(va[1],23) > 0 ? true : false;
            _map.controlLevel["smallDoorMc"]["playMc"].visible = false;
            if(_clickDoorNum >= 5 && !_isGetItem2)
            {
               _map.controlLevel["smallDoorMc"]["itemBtn_1"].visible = true;
            }
            else
            {
               _map.controlLevel["smallDoorMc"]["itemBtn_1"].visible = false;
            }
            if(_isfristXita)
            {
               _map.depthLevel["xitaMc"]["mc"].gotoAndStop(1);
               _map.depthLevel["xitaMc"]["mc"].visible = true;
            }
            else
            {
               _map.depthLevel["xitaMc"]["mc"].visible = false;
               if(_isGetItem2)
               {
                  if(BitUtils.getBit(va[1],25) > 0)
                  {
                     _map.depthLevel["xitaMc"]["mc"].visible = false;
                  }
                  else
                  {
                     _map.depthLevel["xitaMc"]["mc"].visible = true;
                     _map.depthLevel["xitaMc"]["mc"].gotoAndStop(2);
                  }
               }
            }
            _step = KTool.subByte(va[0],0,8);
            if(_step < 3)
            {
               MapManager.changeMap(11917);
            }
            if(_step >= 3 && _step < 7)
            {
               MapManager.changeMap(11918);
            }
            else if(_step == 7)
            {
               _map.depthLevel["doorMc"].gotoAndStop(3);
               if(_isfristQita && _isfristXita)
               {
                  DialogControl.showAllDilogs(67,11).then(function():void
                  {
                  });
               }
            }
            else if(_step == 8)
            {
               _map.depthLevel["doorMc"].gotoAndStop(2);
               DialogControl.showAllDilogs(67,21).then(function():void
               {
                  KTool.socketSendCallBack(_commdId,function():void
                  {
                     update();
                  },[29,14]);
               });
            }
            else if(_step == 9)
            {
               _map.depthLevel["doorMc"].gotoAndStop(2);
               yy = _map.depthLevel["doorMc"].y - _map.depthLevel["doorMc"].height / 2;
               CommonUI.addYellowArrow(MapManager.currentMap.depthLevel,_map.depthLevel["doorMc"].x,yy,0);
            }
            else if(_step == 10)
            {
               MapManager.changeMapWithCallback(11917,function():void
               {
               });
            }
            else if(_step == 11)
            {
               _map.depthLevel["doorMc"].gotoAndStop(2);
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
         super.destroy();
      }
   }
}
