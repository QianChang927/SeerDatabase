package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import flash.geom.Point;
   import gs.TweenLite;
   
   public class SpaceshipSystemMaintenanceGame1Panel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _isInitGame:Boolean = false;
      
      private var _pointArr:Array;
      
      private var _randomArr:Array;
      
      private var _cardInfosArr:Array;
      
      private var _curCheckArr:Array;
      
      private var _isAllRight:Boolean = false;
      
      private var _curIndex:int = 1;
      
      private var _time:int = 60;
      
      private var _fixedPositions:Array;
      
      public function SpaceshipSystemMaintenanceGame1Panel()
      {
         this._pointArr = [];
         this._randomArr = [];
         this._cardInfosArr = [];
         this._curCheckArr = [];
         this._fixedPositions = [];
         super();
         resUrl = "2024/1122/SpaceshipSystemMaintenanceGame1Panel";
         configUrl = "2024/1122/spaceshipSystemMaintenanceConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         _mainUI.btnMc.gotoAndStop(1);
         this._curIndex = int(Math.random() * 3 + 1);
      }
      
      public function generateRandomNumbers() : Array
      {
         var i:int;
         var numbers:Array = [];
         for(i = 0; i < 20; i++)
         {
            numbers.push(i);
         }
         numbers.sort(function(a:*, b:*):Number
         {
            return Math.random() > 0.5 ? 1 : -1;
         });
         return numbers;
      }
      
      private function initGame() : void
      {
         var i:int = 0;
         var point:Point = null;
         var cradInfo:CradInfo = null;
         this._randomArr = this.generateRandomNumbers();
         for(i = 0; i < 20; i++)
         {
            point = new Point();
            point.x = _mainUI.gameMc["mc2"]["itemMc_" + i].x;
            point.y = _mainUI.gameMc["mc2"]["itemMc_" + i].y;
            this._pointArr.push(point);
         }
         for(i = 0; i < 20; i++)
         {
            cradInfo = new CradInfo();
            cradInfo.posIndex = this._randomArr[i];
            cradInfo.point = this._pointArr[cradInfo.posIndex];
            cradInfo.cardName = "itemMc_" + cradInfo.posIndex;
            this._cardInfosArr.push(cradInfo);
            _mainUI.gameMc["mc2"]["itemMc_" + i].info = cradInfo;
            _mainUI.gameMc["mc2"]["itemMc_" + i].gotoAndStop(1);
         }
         this._isInitGame = true;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               if(_mainUI.btnMc.currentFrame == 2)
               {
                  Alert.show("此时退出游戏进度将不会保存，是否确认要退出游戏？",function():void
                  {
                     hide();
                     ModuleManager.showAppModule("SpaceshipSystemMaintenanceMainPanel");
                  });
               }
               else
               {
                  this.hide();
                  ModuleManager.showAppModule("SpaceshipSystemMaintenanceMainPanel");
               }
               break;
            case "startBtn":
               SystemTimerManager.addTickFun(this.onTimer);
               _mainUI.btnMc.gotoAndStop(2);
               refresh();
               break;
            case "checkBtn":
               if(this._curCheckArr.indexOf(index1) != -1)
               {
                  this._curCheckArr.splice(this._curCheckArr.indexOf(index1),1);
                  refresh();
               }
               else
               {
                  this._curCheckArr.push(index1);
                  refresh().then(function():void
                  {
                     var info1:CradInfo = null;
                     var info2:CradInfo = null;
                     if(_curCheckArr.length >= 2)
                     {
                        info1 = _mainUI.gameMc["mc2"]["itemMc_" + _curCheckArr[0]].info;
                        info2 = _mainUI.gameMc["mc2"]["itemMc_" + _curCheckArr[1]].info;
                        closeEvent();
                        _mainUI.gameMc["mc2"].setChildIndex(_mainUI.gameMc["mc2"]["itemMc_" + _curCheckArr[0]],_mainUI.gameMc["mc2"].numChildren - 1);
                        _mainUI.gameMc["mc2"].setChildIndex(_mainUI.gameMc["mc2"]["itemMc_" + _curCheckArr[1]],_mainUI.gameMc["mc2"].numChildren - 1);
                        TweenLite.to(_mainUI.gameMc["mc2"]["itemMc_" + _curCheckArr[0]],0.5,{
                           "x":info2.point.x,
                           "y":info2.point.y,
                           "onComplete":function():void
                           {
                           }
                        });
                        TweenLite.to(_mainUI.gameMc["mc2"]["itemMc_" + _curCheckArr[1]],0.5,{
                           "x":info1.point.x,
                           "y":info1.point.y,
                           "onComplete":function():void
                           {
                              _mainUI.gameMc["mc2"]["itemMc_" + _curCheckArr[0]].info = info2;
                              _mainUI.gameMc["mc2"]["itemMc_" + _curCheckArr[1]].info = info1;
                              _curCheckArr = [];
                              refresh();
                              openEvent();
                           }
                        });
                     }
                  });
               }
         }
      }
      
      private function onTimer() : void
      {
         if(this._time == 0)
         {
            if(!this._isAllRight)
            {
               Alarm2.show("时间已耗尽，请再次尝试",function():void
               {
                  hide();
                  ModuleManager.showAppModule("SpaceshipSystemMaintenanceMainPanel");
               });
            }
            SystemTimerManager.removeTickFun(this.onTimer);
            return;
         }
         --this._time;
         _mainUI.btnMc.timeTx.text = String(this._time) + "s";
      }
      
      override protected function updatePanel() : void
      {
         var daily_11903:int = 0;
         var i:int = 0;
         this._commdId = getValue("comId")[0];
         daily_11903 = int(getValue("daily_11903"));
         if(_mainUI.btnMc.currentFrame == 2)
         {
            _mainUI.gameMc.gotoAndStop(2);
            _mainUI.gameMc["mc2"].gotoAndStop(this._curIndex);
            if(!this._isInitGame)
            {
               this.initGame();
            }
            this._isAllRight = true;
            for(i = 0; i < 20; i++)
            {
               _mainUI.gameMc["mc2"]["itemMc_" + i].x = _mainUI.gameMc["mc2"]["itemMc_" + i].info.point.x;
               _mainUI.gameMc["mc2"]["itemMc_" + i].y = _mainUI.gameMc["mc2"]["itemMc_" + i].info.point.y;
               if(this._fixedPositions.indexOf(i) != -1)
               {
                  _mainUI.gameMc["mc2"]["itemMc_" + i].gotoAndStop(3);
               }
               else
               {
                  if(this._curCheckArr.indexOf(i) != -1)
                  {
                     _mainUI.gameMc["mc2"]["itemMc_" + i].gotoAndStop(2);
                  }
                  else
                  {
                     _mainUI.gameMc["mc2"]["itemMc_" + i].gotoAndStop(1);
                  }
                  if(_mainUI.gameMc["mc2"]["itemMc_" + i].info.posIndex != i)
                  {
                     this._isAllRight = false;
                  }
                  else
                  {
                     _mainUI.gameMc["mc2"]["itemMc_" + i].gotoAndStop(3);
                  }
               }
            }
            if(this._isAllRight)
            {
               SystemTimerManager.removeTickFun(this.onTimer);
               sendCmd(this._commdId,[27,2],function():void
               {
                  var str:String = BitUtils.getBit(daily_11903,1) == 0 ? "勘察系统调试完成，检修进度提升。" : "勘察系统调试完成。";
                  Alarm2.show(str,function():void
                  {
                     hide();
                     ModuleManager.showAppModule("SpaceshipSystemMaintenanceMainPanel");
                  });
               });
            }
         }
         else
         {
            _mainUI.gameMc.gotoAndStop(1);
            _mainUI.gameMc["mc1"].gotoAndStop(this._curIndex);
         }
      }
      
      override public function hide() : void
      {
         this._pointArr = null;
         this._curCheckArr = null;
         this._cardInfosArr = null;
         this._randomArr = null;
         SystemTimerManager.removeTickFun(this.onTimer);
         super.hide();
      }
   }
}

import flash.geom.Point;

class CradInfo
{
   public var cardName:String;
   
   public var point:Point;
   
   public var posIndex:int;
   
   public function CradInfo()
   {
      super();
   }
}

