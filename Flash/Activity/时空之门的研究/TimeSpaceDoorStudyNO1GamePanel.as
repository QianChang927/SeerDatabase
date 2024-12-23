package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   
   public class TimeSpaceDoorStudyNO1GamePanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _chooseTeam:Boolean = false;
      
      private var _unlockIndexArr:Array;
      
      private var _logArr:Array;
      
      private var _randomArr:Array;
      
      private var _curArr:Array;
      
      private var _isSuccse:Boolean = false;
      
      public function TimeSpaceDoorStudyNO1GamePanel()
      {
         this._logArr = [];
         this._randomArr = [];
         this._curArr = [1,2,3,4];
         super();
         resUrl = "2024/1213/TimeSpaceDoorStudyNO1GamePanel";
         configUrl = "2024/1213/timeSpaceDoorStudyNO1Config";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         this.initGame();
      }
      
      private function initGame() : void
      {
         var num:int = 0;
         this._curArr = [1,2,3,4];
         this._logArr = [];
         this._randomArr = [];
         while(this._randomArr.length < 4)
         {
            num = int(Math.random() * 9 + 1);
            if(this._randomArr.indexOf(num) == -1)
            {
               this._randomArr.push(num);
            }
         }
         _mainUI.rightTx.text = String(this._randomArr[0]) + String(this._randomArr[1]) + String(this._randomArr[2]) + String(this._randomArr[3]);
      }
      
      private function reSetGame() : void
      {
         var num:int = 0;
         this._curArr = [1,2,3,4];
         this._logArr = [];
         this._randomArr = [];
         while(this._randomArr.length < 4)
         {
            num = int(Math.random() * 9 + 1);
            if(this._randomArr.indexOf(num) == -1)
            {
               this._randomArr.push(num);
            }
         }
         CommonUI.setEnabled(_mainUI.playBtn,true,false);
         for(var i:int = 0; i < 4; i++)
         {
            CommonUI.setEnabled(_mainUI["addBtn_" + i],true,false);
            CommonUI.setEnabled(_mainUI["minusBtn_" + i],true,false);
         }
         this.updatePanel();
         _mainUI.rightTx.text = String(this._randomArr[0]) + String(this._randomArr[1]) + String(this._randomArr[2]) + String(this._randomArr[3]);
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var arr:Array = null;
         var i:int = 0;
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               if(this._logArr.length < 12 && !this._isSuccse)
               {
                  Alert.show("退出不会保存破译记录并且重新进入将重新随机密码答案，确认要退出吗？",function():void
                  {
                     hide();
                     ModuleManager.showAppModule("TimeSpaceDoorStudyNO1MainPanel");
                  });
               }
               else
               {
                  this.hide();
                  ModuleManager.showAppModule("TimeSpaceDoorStudyNO1MainPanel");
               }
               break;
            case "reStartBtn":
               Alert.show("是否确认清空记录并重新生成破译密码？",function():void
               {
                  reSetGame();
               });
               break;
            case "addBtn_" + index:
               if(this._curArr[index] + 1 <= 9)
               {
                  this._curArr[index] += 1;
               }
               else
               {
                  this._curArr[index] = 1;
               }
               this.updatePanel();
               break;
            case "minusBtn_" + index:
               if(this._curArr[index] - 1 >= 1)
               {
                  this._curArr[index] -= 1;
               }
               else
               {
                  this._curArr[index] = 9;
               }
               this.updatePanel();
               break;
            case "playBtn":
               if(this.checkDuplicate(this._curArr))
               {
                  Alarm2.show("当前数字中存在重复，请重新选择。");
                  return;
               }
               if(this.isArrayInArray(this._curArr,this._logArr))
               {
                  Alarm2.show("当前数字已经尝试过了，请重新选择。");
                  return;
               }
               arr = [];
               for(i = 0; i < 4; i++)
               {
                  arr.push(this._curArr[i]);
               }
               this._logArr.push(arr);
               if(this.checkSuccse())
               {
                  sendCmd(this._commdId,[69,0],function():void
                  {
                     Alarm2.show("恭喜你，成功破译密码！",function():void
                     {
                        hide();
                        ModuleManager.showAppModule("TimeSpaceDoorStudyNO1LogPanel",true);
                     });
                     _isSuccse = true;
                     updatePanel();
                  });
               }
               else if(this._logArr.length >= 12)
               {
                  Alarm2.show("密码错误，你已耗尽尝试次数，请重新开始破译。");
                  CommonUI.setEnabled(_mainUI.playBtn,false,true);
                  for(i = 0; i < 4; i++)
                  {
                     CommonUI.setEnabled(_mainUI["addBtn_" + i],false,true);
                     CommonUI.setEnabled(_mainUI["minusBtn_" + i],false,true);
                  }
                  this.updatePanel();
               }
               else
               {
                  Alarm2.show("密码错误，本次破译数字和时空之门的反馈已经记录，可根据破译记录的信息再次尝试破译。");
                  this.updatePanel();
               }
               break;
            case "aKeyPassBtn":
               KTool.buyProductByCallback(261164,1,function():void
               {
                  KTool.doExchange(14453,function():void
                  {
                     var arr:Array = null;
                     var i:int = 0;
                     Alarm2.show("恭喜你，成功破译密码！",function():void
                     {
                        hide();
                        ModuleManager.showAppModule("TimeSpaceDoorStudyNO1LogPanel",true);
                     });
                     _isSuccse = true;
                     if(_logArr.length < 12)
                     {
                        arr = [];
                        for(i = 0; i < 4; i++)
                        {
                           arr.push(_randomArr[i]);
                        }
                        _logArr.push(arr);
                     }
                     updatePanel();
                  });
               },_mainUI);
         }
      }
      
      private function checkSuccse() : Boolean
      {
         var isAllright:Boolean = true;
         for(var i:int = 0; i < 4; i++)
         {
            if(this._curArr[i] != this._randomArr[i])
            {
               isAllright = false;
            }
         }
         return isAllright;
      }
      
      public function checkDuplicate(arr:Array) : Boolean
      {
         var j:int = 0;
         if(arr.length != 4)
         {
            return false;
         }
         for(var i:int = 0; i < arr.length - 1; i++)
         {
            for(j = i + 1; j < arr.length; j++)
            {
               if(arr[i] == arr[j])
               {
                  return true;
               }
            }
         }
         return false;
      }
      
      private function checkRightNum(logArr:Array) : Array
      {
         var redNum:int = 0;
         var buleNum:int = 0;
         var arr:Array = [];
         for(var i:int = 0; i < 4; i++)
         {
            if(logArr[i] == this._randomArr[i])
            {
               redNum++;
            }
            else if(this._randomArr.indexOf(logArr[i]) >= 0)
            {
               buleNum++;
            }
         }
         arr.push(redNum);
         arr.push(buleNum);
         return arr;
      }
      
      public function isArrayInArray(arrayA:Array, arrayB:Array) : Boolean
      {
         var subArray:Array = null;
         for each(subArray in arrayB)
         {
            if(this.compareArrays(arrayA,subArray))
            {
               return true;
            }
         }
         return false;
      }
      
      private function compareArrays(arr1:Array, arr2:Array) : Boolean
      {
         if(arr1.length != arr2.length)
         {
            return false;
         }
         for(var i:int = 0; i < arr1.length; i++)
         {
            if(arr1[i] != arr2[i])
            {
               return false;
            }
         }
         return true;
      }
      
      override protected function updatePanel() : void
      {
         var i:int = 0;
         var logArr:Array = null;
         var redNum:int = 0;
         var buleNum:int = 0;
         var j:int = 0;
         this._commdId = getValue("comId")[0];
         var forever_125181:int = int(getValue("forever_125181"));
         var forever_125182:int = int(getValue("forever_125182"));
         for(i = 0; i < 12; i++)
         {
            if(i < this._logArr.length)
            {
               logArr = this._logArr[i];
               _mainUI["itemMc_" + i].visible = true;
               redNum = int(this.checkRightNum(logArr)[0]);
               buleNum = int(this.checkRightNum(logArr)[1]);
               for(j = 0; j < 4; j++)
               {
                  _mainUI["itemMc_" + i]["mc_" + j].gotoAndStop(logArr[j]);
                  if(j < redNum)
                  {
                     _mainUI["itemMc_" + i]["redMc_" + j].gotoAndStop(1);
                  }
                  else
                  {
                     _mainUI["itemMc_" + i]["redMc_" + j].gotoAndStop(2);
                  }
                  if(j < buleNum)
                  {
                     _mainUI["itemMc_" + i]["buleMc_" + j].gotoAndStop(1);
                  }
                  else
                  {
                     _mainUI["itemMc_" + i]["buleMc_" + j].gotoAndStop(2);
                  }
               }
            }
            else
            {
               _mainUI["itemMc_" + i].visible = false;
            }
         }
         for(i = 0; i < 4; i++)
         {
            _mainUI["mc_" + i].gotoAndStop(this._curArr[i]);
         }
         if(this._isSuccse)
         {
            CommonUI.setEnabled(_mainUI.reStartBtn,false,true);
            CommonUI.setEnabled(_mainUI.playBtn,false,true);
            CommonUI.setEnabled(_mainUI.aKeyPassBtn,false,true);
            for(i = 0; i < 4; i++)
            {
               CommonUI.setEnabled(_mainUI["addBtn_" + i],false,true);
               CommonUI.setEnabled(_mainUI["minusBtn_" + i],false,true);
               _mainUI["mc_" + i].gotoAndStop(this._randomArr[i]);
            }
         }
      }
      
      override public function hide() : void
      {
         this._randomArr = null;
         super.hide();
      }
   }
}

