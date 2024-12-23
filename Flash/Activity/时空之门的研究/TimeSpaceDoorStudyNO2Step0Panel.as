package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.TimeSpaceDoorStudyControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   
   public class TimeSpaceDoorStudyNO2Step0Panel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _chooseTeam:Boolean = false;
      
      private var _curChooseIndex:int = -1;
      
      private var _curLv:int = 0;
      
      public function TimeSpaceDoorStudyNO2Step0Panel()
      {
         super();
         resUrl = "2024/1213/TimeSpaceDoorStudyNO2Step0Panel";
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
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("TimeSpaceDoorStudyNO1MainPanel");
               break;
            case "putBtn":
               this._curChooseIndex = index1;
               this.updatePanel();
               break;
            case "setBtn":
               TimeSpaceDoorStudyControl.curPutarr[index1] = this._curChooseIndex;
               this._curChooseIndex = -1;
               this.updatePanel();
               break;
            case "retrieveBtn":
               TimeSpaceDoorStudyControl.curPutarr[TimeSpaceDoorStudyControl.curPutarr.indexOf(index1)] = -1;
               this.updatePanel();
               break;
            case "getBtn":
               this.hide();
               ModuleManager.showAppModule("TimeSpaceDoorStudyNO2FightPanel",index1);
               break;
            case "startBtn":
               if(TimeSpaceDoorStudyControl.getCurIsFull())
               {
                  if(TimeSpaceDoorStudyControl.getCurIsAllright(this._curLv))
                  {
                     sendCmd(this._commdId,[69,7],function():void
                     {
                        refresh().then(function():void
                        {
                           if(_curLv < 3)
                           {
                              Alarm2.show("恭喜你，启动成功。");
                              TimeSpaceDoorStudyControl.intData(_curLv);
                              refresh();
                           }
                           else
                           {
                              Alarm2.show("恭喜你，已经完成启动时空之门的第一步。",function():void
                              {
                                 DialogControl.showAllDilogs(173,5).then(function():void
                                 {
                                    hide();
                                    ModuleManager.showAppModule("TimeSpaceDoorStudyNO1MainPanel");
                                 });
                              });
                           }
                        });
                     });
                  }
                  else
                  {
                     Alarm2.show("属性灵石放入位置不正确，请调整位置后重新尝试启动。");
                  }
               }
               else
               {
                  Alarm2.show("请先将属性灵石全部放入时空之门的对应位置");
               }
               break;
            case "typeBtn":
         }
      }
      
      override protected function updatePanel() : void
      {
         var i:int = 0;
         this._commdId = getValue("comId")[0];
         var forever_125183:int = int(getValue("forever_125183"));
         this._curLv = getValue("forever_125184");
         _mainUI.numTx.text = String(int(this._curLv) > 3 ? 3 : this._curLv) + "/3";
         var frame:int = int(this._curLv + 1) > 3 ? 3 : int(this._curLv + 1);
         _mainUI.jianTouMc.gotoAndStop(frame);
         for(i = 0; i < 5; i++)
         {
            _mainUI["btnMc_" + i].visible = true;
         }
         if(this._curLv == 0)
         {
            _mainUI["btnMc_" + 0].visible = false;
         }
         else if(this._curLv == 1)
         {
            _mainUI["btnMc_" + 2].visible = false;
         }
         else if(this._curLv == 2 || this._curLv == 3)
         {
            _mainUI["btnMc_" + 4].visible = false;
         }
         for(i = 0; i < 5; i++)
         {
            if(BitUtils.getBit(forever_125183,i) > 0)
            {
               CommonUI.setEnabled(_mainUI["btnMc_" + i],true,false);
               _mainUI["itemMc_" + i].gotoAndStop(1);
               if(TimeSpaceDoorStudyControl.curPutarr.indexOf(i) != -1)
               {
                  _mainUI["btnMc_" + i].gotoAndStop(2);
               }
               else
               {
                  _mainUI["btnMc_" + i].gotoAndStop(1);
               }
            }
            else
            {
               _mainUI["itemMc_" + i].gotoAndStop(2);
               CommonUI.setEnabled(_mainUI["btnMc_" + i],false,true);
               _mainUI["btnMc_" + i].gotoAndStop(1);
            }
            if(TimeSpaceDoorStudyControl.curPutarr[i] >= 0)
            {
               _mainUI["curMc_" + i].gotoAndStop(TimeSpaceDoorStudyControl.curPutarr[i] + 2);
            }
            else if(this._curChooseIndex >= 0)
            {
               _mainUI["itemMc_" + this._curChooseIndex].gotoAndStop(3);
               _mainUI["curMc_" + i].gotoAndStop(1);
            }
            else
            {
               _mainUI["curMc_" + i].gotoAndStop(7);
            }
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

