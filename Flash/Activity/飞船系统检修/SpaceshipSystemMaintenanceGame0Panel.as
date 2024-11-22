package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   
   public class SpaceshipSystemMaintenanceGame0Panel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _gameDataArr:Array;
      
      private var _curOpenArr:Array;
      
      private var _preIndex:int = -1;
      
      private var _curIndex:int = -1;
      
      private var _timer:int;
      
      private var _leftNum:int = 20;
      
      public function SpaceshipSystemMaintenanceGame0Panel()
      {
         this._gameDataArr = [];
         this._curOpenArr = [];
         super();
         resUrl = "2024/1122/SpaceshipSystemMaintenanceGame0Panel";
         configUrl = "2024/1122/spaceshipSystemMaintenanceConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         _mainUI.btnMc.gotoAndStop(1);
         this._gameDataArr = this.getRandomNumbers();
      }
      
      private function getRandomNumbers() : Array
      {
         var i:int;
         var randomNum:int = 0;
         var result:Array = [1,2,3,4,1,2,3,4];
         for(i = 0; i < 2; i++)
         {
            randomNum = Math.floor(Math.random() * 4) + 1;
            result.push(randomNum);
            result.push(randomNum);
         }
         result.sort(function(a:*, b:*):Number
         {
            return Math.random() > 0.5 ? 1 : -1;
         });
         return result;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var index1:int = 0;
         var curFrame:int = 0;
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         index1 = int(KTool.getIndex(e.target.parent));
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
               _mainUI.gameMc.gotoAndStop(1);
               closeEvent();
               AnimateManager.playMcAnimate(_mainUI.gameMc,1,"playMc",function():void
               {
                  openEvent();
                  _mainUI.btnMc.gotoAndStop(2);
                  refresh();
               },false,true);
               break;
            case "fanPaiBtn":
               if(this._leftNum <= 0)
               {
                  Alarm2.show("剩余翻牌次数不足！");
                  return;
               }
               --this._leftNum;
               _mainUI.btnMc.numTx.text = String(this._leftNum);
               curFrame = int(this._gameDataArr[index1]);
               _mainUI.gameMc["itemMc_" + index1].gotoAndStop(curFrame + 1);
               _mainUI.gameMc["itemMc_" + index1]["card" + curFrame].visible = false;
               _mainUI.gameMc["itemMc_" + index1]["xiaoshiMc" + curFrame].visible = false;
               closeEvent();
               _mainUI.gameMc["itemMc_" + index1]["fanzhuanMc" + curFrame].visible = true;
               AnimateManager.playMcAnimate(_mainUI.gameMc["itemMc_" + index1],curFrame + 1,"fanzhuanMc" + curFrame,function():void
               {
                  _mainUI.gameMc["itemMc_" + index1].gotoAndStop(curFrame + 1);
                  _mainUI.gameMc["itemMc_" + index1]["fanzhuanMc" + curFrame].visible = false;
                  _mainUI.gameMc["itemMc_" + index1]["xiaoshiMc" + curFrame].visible = false;
                  _mainUI.gameMc["itemMc_" + index1]["card" + curFrame].visible = true;
                  openEvent();
                  if(_curIndex != -1)
                  {
                     _preIndex = _curIndex;
                  }
                  _curIndex = index1;
                  panduan();
               },false,true);
               break;
         }
      }
      
      private function panduan() : void
      {
         var preFrame1:int = 0;
         var curFrame2:int = 0;
         if(this._curIndex != -1 && this._preIndex != -1)
         {
            if(this._gameDataArr[this._preIndex] == this._gameDataArr[this._curIndex])
            {
               this._curOpenArr.push(this._preIndex);
               this._curOpenArr.push(this._curIndex);
               closeEvent();
               preFrame1 = int(this._gameDataArr[this._preIndex]);
               _mainUI.gameMc["itemMc_" + this._preIndex]["fanzhuanMc" + preFrame1].visible = false;
               _mainUI.gameMc["itemMc_" + this._preIndex]["xiaoshiMc" + preFrame1].visible = true;
               AnimateManager.playMcAnimate(_mainUI.gameMc["itemMc_" + this._preIndex],preFrame1 + 1,"xiaoshiMc" + preFrame1,function():void
               {
                  _mainUI.gameMc["itemMc_" + _preIndex]["xiaoshiMc" + preFrame1].visible = false;
                  _preIndex = -1;
               },false,true);
               curFrame2 = int(this._gameDataArr[this._curIndex]);
               _mainUI.gameMc["itemMc_" + this._curIndex]["fanzhuanMc" + curFrame2].visible = false;
               _mainUI.gameMc["itemMc_" + this._curIndex]["xiaoshiMc" + curFrame2].visible = true;
               AnimateManager.playMcAnimate(_mainUI.gameMc["itemMc_" + this._curIndex],curFrame2 + 1,"xiaoshiMc" + curFrame2,function():void
               {
                  _mainUI.gameMc["itemMc_" + _curIndex]["xiaoshiMc" + curFrame2].visible = false;
                  _curIndex = -1;
                  _timer = setTimeout(function():void
                  {
                     openEvent();
                     updatePanel();
                  },300);
               },false,true);
            }
            else
            {
               closeEvent();
               this._timer = setTimeout(function():void
               {
                  openEvent();
                  updatePanel();
                  _curIndex = -1;
                  _preIndex = -1;
               },500);
            }
         }
      }
      
      override protected function updatePanel() : void
      {
         var daily_11903:int = 0;
         var i:int = 0;
         this._commdId = getValue("comId")[0];
         daily_11903 = int(getValue("daily_11903"));
         if(_mainUI.btnMc.currentFrame == 2)
         {
            _mainUI.btnMc.gotoAndStop(2);
            _mainUI.btnMc.numTx.text = String(this._leftNum);
            _mainUI.gameMc.gotoAndStop(2);
            for(i = 0; i < 12; i++)
            {
               if(this._curOpenArr.indexOf(i) != -1)
               {
                  _mainUI.gameMc["itemMc_" + i].gotoAndStop(this._gameDataArr[i] + 1);
                  _mainUI.gameMc["itemMc_" + i].visible = false;
               }
               else
               {
                  _mainUI.gameMc["itemMc_" + i].visible = true;
                  _mainUI.gameMc["itemMc_" + i].gotoAndStop(1);
               }
            }
            if(this._curOpenArr.length >= 12)
            {
               sendCmd(this._commdId,[27,1],function():void
               {
                  var str:String = BitUtils.getBit(daily_11903,0) == 0 ? "能源匹配成功，检修进度提升" : "能源匹配成功。";
                  Alarm2.show(str,function():void
                  {
                     hide();
                     ModuleManager.showAppModule("SpaceshipSystemMaintenanceMainPanel");
                  });
               });
            }
            else if(this._leftNum <= 0)
            {
               Alarm2.show("翻牌次数已耗尽，能源匹配失败 ",function():void
               {
                  hide();
                  ModuleManager.showAppModule("SpaceshipSystemMaintenanceMainPanel");
               });
            }
         }
         else
         {
            _mainUI.gameMc.gotoAndStop(1);
            _mainUI.btnMc.gotoAndStop(1);
         }
      }
      
      override public function hide() : void
      {
         this._gameDataArr = null;
         this._curOpenArr = null;
         clearTimeout(this._timer);
         super.hide();
      }
   }
}

