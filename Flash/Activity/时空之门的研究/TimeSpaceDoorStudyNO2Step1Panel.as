package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.TimeSpaceDoorStudyControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   
   public class TimeSpaceDoorStudyNO2Step1Panel extends ActivityModel
   {
      public static var _curArr:Array = [[0,1,2,3,4],[2,3,0,4,1],[4,2,1,3,0]];
      
      public static var _rightArr:Array = [[4,0,1,2,3],[1,2,3,0,4],[3,0,4,2,1]];
      
      private var _commdId:int;
      
      private var _curLv:int = 0;
      
      public function TimeSpaceDoorStudyNO2Step1Panel()
      {
         super();
         resUrl = "2024/1213/TimeSpaceDoorStudyNO2Step1Panel";
         configUrl = "2024/1213/timeSpaceDoorStudyNO1Config";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var index:int = 0;
         var frameArr:Array = null;
         var btnName:String = e.target.name;
         index = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("TimeSpaceDoorStudyNO1MainPanel");
               break;
            case "turnBtn_" + index:
               _mainUI.playMc.visible = true;
               closeEvent();
               frameArr = [3,2,1];
               AnimateManager.playMcAnimate(_mainUI.playMc,frameArr[index],"mc" + frameArr[index],function():void
               {
                  _mainUI.playMc.visible = false;
                  openEvent();
                  rotateArray(_curArr[index]);
                  updatePanel();
               },false,true);
               break;
            case "startBtn":
               if(Boolean(TimeSpaceDoorStudyControl.arraysAreEqual(_curArr[0],_rightArr[0])) && Boolean(TimeSpaceDoorStudyControl.arraysAreEqual(_curArr[1],_rightArr[1])) && Boolean(TimeSpaceDoorStudyControl.arraysAreEqual(_curArr[2],_rightArr[2])))
               {
                  sendCmd(this._commdId,[69,8],function():void
                  {
                     Alarm2.show("恭喜你，成功启动了时空之门！ ",function():void
                     {
                        DialogControl.showAllDilogs(173,6).then(function():void
                        {
                           hide();
                           ModuleManager.showAppModule("TimeSpaceDoorStudyNO1MainPanel");
                        });
                     });
                  });
               }
               else
               {
                  Alarm2.show("时空之门还没有转动到正确位置。");
               }
               break;
            case "typeBtn":
         }
      }
      
      internal function rotateArray(arr:Array) : void
      {
         if(arr.length == 0)
         {
            return;
         }
         var lastElement:* = arr[arr.length - 1];
         for(var i:int = arr.length - 1; i > 0; i--)
         {
            arr[i] = arr[i - 1];
         }
         arr[0] = lastElement;
      }
      
      override protected function updatePanel() : void
      {
         var arr:Array = null;
         var j:int = 0;
         this._commdId = getValue("comId")[0];
         var forever_125183:int = int(getValue("forever_125183"));
         this._curLv = getValue("forever_125184");
         for(var i:int = 0; i < 3; i++)
         {
            arr = _curArr[i];
            for(j = 0; j < 5; j++)
            {
               if(i == 0)
               {
                  _mainUI["withinMc_" + j].gotoAndStop(arr[j] + 1);
               }
               else if(i == 1)
               {
                  _mainUI["midMc_" + j].gotoAndStop(arr[j] + 1);
               }
               else if(i == 2)
               {
                  _mainUI["outsideMc_" + j].gotoAndStop(arr[j] + 1);
               }
            }
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

