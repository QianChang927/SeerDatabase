package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class SuperFusionSoldierRefitS1Panel extends ActivityModel
   {
      private var getArr:Array;
      
      private var daily_11923:int;
      
      private var forever_105816:int;
      
      private var curIndex:int = 0;
      
      private var result:int = 0;
      
      public function SuperFusionSoldierRefitS1Panel()
      {
         this.getArr = [];
         super();
         resUrl = "2024/1227/SuperFusionSoldierRefitS1Panel";
         configUrl = "2024/1227/SuperFusionSoldierRefit";
      }
      
      override public function show() : void
      {
         super.show();
         _ui["page"].visible = false;
      }
      
      override protected function updatePanel() : void
      {
         this.getArr = getValue("getArr");
         this.daily_11923 = getValue("daily_11923");
         this.forever_105816 = getValue("forever_105816");
         this.updateDisplay();
      }
      
      private function updateDisplay() : void
      {
         var i:int = 0;
         var k:int = 0;
         var j:int = 0;
         if(this.result == 0)
         {
            _ui["mc"].gotoAndStop(1);
            _ui["okayMc"].visible = false;
            _ui["mccc"].visible = false;
            if(KTool.getBit(this.daily_11923,26) == 1)
            {
               CommonUI.setEnabled(_ui["fusionBtn"],false);
               CommonUI.setEnabled(_ui["fightBtn"],true);
               for(i = 1; i <= 6; i++)
               {
                  _ui["cancelBtn_" + i].visible = false;
                  _ui["mc_" + i].gotoAndStop(1);
               }
            }
            else
            {
               CommonUI.setEnabled(_ui["fightBtn"],false);
               CommonUI.setEnabled(_ui["fusionBtn"],true);
               for(k = 1; k <= 6; k++)
               {
                  _ui["mc_" + k].gotoAndStop(2 + this.getArr[k - 1]);
                  if(this.curIndex == k)
                  {
                     _ui["cancelBtn_" + k].visible = true;
                     _ui["mc_" + k]["mc"].gotoAndStop(2);
                  }
                  else
                  {
                     _ui["mc_" + k]["mc"].gotoAndStop(1);
                     _ui["cancelBtn_" + k].visible = false;
                  }
               }
            }
         }
         else
         {
            _ui["mc"].gotoAndStop(2);
            _ui["mccc"].visible = true;
            _ui["okayMc"].visible = true;
            _ui["okayMc"].gotoAndStop(this.result - 1);
            CommonUI.setEnabled(_ui["fusionBtn"],false);
            CommonUI.setEnabled(_ui["fightBtn"],false);
            for(j = 1; j <= 6; j++)
            {
               _ui["mc_" + j].gotoAndStop(1);
               _ui["cancelBtn_" + j].visible = false;
            }
            if(this.result == 2)
            {
               if(BitBuffSetClass.getState(24556) == 0)
               {
                  DialogControl.showAllDilogs(175,2).then(function():void
                  {
                     BitBuffSetClass.setState(24556,1);
                  });
               }
            }
            else if(this.result == 3)
            {
               if(BitBuffSetClass.getState(24557) == 0)
               {
                  DialogControl.showAllDilogs(175,3).then(function():void
                  {
                     BitBuffSetClass.setState(24557,1);
                  });
               }
            }
            else if(BitBuffSetClass.getState(24558) == 0)
            {
               DialogControl.showAllDilogs(175,4).then(function():void
               {
                  BitBuffSetClass.setState(24558,1);
               });
            }
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("SuperFusionSoldierRefitMainPanel");
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "fightBtn":
               hide();
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  if(!FightManager.isWin)
                  {
                     Alarm2.show("很遗憾挑战失败，请再接再厉！");
                  }
                  else
                  {
                     Alarm2.show("恭喜你，完成了数据意识的提取，快将数据意识按照正确顺序进行融合吧。");
                  }
                  ModuleManager.showAppModule("SuperFusionSoldierRefitS1Panel");
               });
               FightManager.fightNoMapBoss("",18710);
               break;
            case "select":
               index = int(e.target.parent.parent.name.split("_")[1]);
               if(this.curIndex == 0)
               {
                  this.curIndex = index;
                  refresh();
               }
               else if(this.curIndex != 6 && index != 6)
               {
                  if(this.curIndex + 1 == index || index + 1 == this.curIndex)
                  {
                     if(this.getArr[this.curIndex - 1] == 0 || this.getArr[index - 1] == 0)
                     {
                        if(this.getArr[this.curIndex - 1] == 0)
                        {
                           if(this.curIndex <= index)
                           {
                              doAction("FlgeReq1",10 + index).then(function():void
                              {
                                 curIndex = 0;
                                 refresh();
                              });
                           }
                           else
                           {
                              doAction("FlgeReq1",20 + index).then(function():void
                              {
                                 curIndex = 0;
                                 refresh();
                              });
                           }
                        }
                        else if(this.curIndex <= index)
                        {
                           doAction("FlgeReq1",20 + this.curIndex).then(function():void
                           {
                              curIndex = 0;
                              refresh();
                           });
                        }
                        else
                        {
                           doAction("FlgeReq1",10 + this.curIndex).then(function():void
                           {
                              curIndex = 0;
                              refresh();
                           });
                        }
                     }
                     else
                     {
                        Alarm2.show("目标位置已存在数据意识，无法传输。  ");
                     }
                  }
                  else
                  {
                     Alarm2.show("目前位置未与当前位置相连，无法传输。");
                  }
               }
               else if(this.getArr[this.curIndex - 1] == 0 || this.getArr[index - 1] == 0)
               {
                  if(this.getArr[5] == 0)
                  {
                     if(this.curIndex != 6)
                     {
                        doAction("FlgeReq1",1 + this.curIndex).then(function():void
                        {
                           curIndex = 0;
                           refresh();
                        });
                     }
                     else
                     {
                        doAction("FlgeReq1",1 + index).then(function():void
                        {
                           curIndex = 0;
                           refresh();
                        });
                     }
                  }
                  else
                  {
                     doAction("FlgeReq1",26).then(function():void
                     {
                        curIndex = 0;
                        refresh();
                     });
                  }
               }
               else
               {
                  Alarm2.show("目标位置已存在数据意识，无法传输。  ");
               }
               break;
            case "fusionBtn":
               if(this.getArr[0] == 1 && this.getArr[1] == 2 && this.getArr[2] == 3 && this.getArr[3] == 4 && this.getArr[4] == 5)
               {
                  _ui["page"].visible = true;
                  closeEvent();
                  doAction("FlgeReq1",27).then(function(e:SocketEvent):void
                  {
                     result = ByteArray(e.data).readInt();
                     if(result == 2)
                     {
                        _ui["page"].gotoAndStop(1);
                     }
                     else if(result == 3)
                     {
                        _ui["page"].gotoAndStop(2);
                     }
                     else
                     {
                        _ui["page"].gotoAndStop(3);
                     }
                     _ui["page"]["okayBtn"].visible = false;
                     AnimateManager.playMcAnimate(_ui["page"],result - 1,"aniMc",function():void
                     {
                        openEvent();
                        _ui["page"]["okayBtn"].visible = true;
                     },false,true);
                  });
               }
               else
               {
                  Alarm2.show("融合区域的数据意识未按照正确顺序排列，无法融合。 ");
               }
               break;
            case "okayBtn":
               _ui["page"].visible = false;
               this.curIndex = 0;
               refresh();
               Alarm2.show("恭喜你，完成了意识融合。");
               break;
            case "cancelBtn_" + index:
               this.curIndex = 0;
               refresh();
         }
      }
   }
}

