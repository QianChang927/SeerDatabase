package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import gs.TweenLite;
   
   public class EnergyFromGroundGame extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var _isInClaw:Boolean = false;
      
      private var selectArr:Array;
      
      private var ToolCntArr:Array;
      
      private var BlockMap:Array = null;
      
      private var ColorCntArr:Array;
      
      private var ActionTime:int;
      
      private var TaskArr:Array;
      
      private var increasedBlock:Array;
      
      private var lostBlock:Array;
      
      private var isOneKeyShow:Boolean = false;
      
      private var showOnce:Boolean = true;
      
      private var isInAnim:Boolean = false;
      
      private var taskInfo:Array;
      
      private var taskNameInfo:Array;
      
      public function EnergyFromGroundGame()
      {
         this.selectArr = [];
         this.increasedBlock = [];
         this.lostBlock = [];
         this.taskInfo = [[2,2,0,1,0,2,0,25],[0,1,3,3,1,0,0,30],[0,3,3,0,2,0,0,30],[1,0,2,3,2,0,0,25],[0,2,1,3,0,1,0,25],[2,2,2,2,0,0,4,40],[2,4,2,0,0,2,0,50],[0,2,3,8,0,2,0,55],[3,1,0,6,0,1,0,55],[3,3,3,0,0,0,2,60],[0,2,3,6,2,0,0,50],[0,2,6,4,4,0,0,50],[3,0,3,4,0,0,2,55],[2,3,4,5,0,4,0,65],[5,0,0,0,1,0,0,45],[0,5,0,0,1,0,0,35],[0,0,5,0,1,0,0,20],[0,0,0,5,1,0,0,15],[0,0,7,7,0,1,0,60],[3,3,0,0,0,2,0,40]];
         this.taskNameInfo = ["皮皮的委托","仙人球的委托","小豆芽的委托","依依的委托","小蘑菇的委托","鳄兰的委托","黄晶矿开采","金刚石开采","平原区调查","沼泽区调查","林间区调查","藤蔓区调查","地心区调查","医生布布寻访","红色精华搜集","黄色精华搜集","绿色精华搜集","蓝色精华搜集","普通精华开采","稀有精华搜集"];
         super();
         resUrl = "2024/1115/EnergyFromGroundGame";
         configUrl = "2024/1115/EnergyFromGroundConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         var j:int = 0;
         super.show();
         for(var i:int = 1; i <= 5; i++)
         {
            for(j = 1; j <= 5; j++)
            {
               ui["block_" + (i * 10 + j)].select.visible = false;
               ui["block_" + (i * 10 + j)].gotoAndStop(1);
            }
         }
         ui.aniTask_1.visible = false;
         ui.aniTask_2.visible = false;
         ui.aniTask_3.visible = false;
         ui["mcUseTool_1"].gotoAndStop(1);
         ui["mcUseTool_2"].gotoAndStop(1);
         ui["mcUseTool_3"].gotoAndStop(1);
      }
      
      private function onStart() : void
      {
         var buffId:int = 0;
         if(!this.isStart)
         {
            this.isStart = true;
            buffId = 24519;
            if(BitBuffSetClass.getState(buffId) == 0)
            {
               DialogControl.showAllDilogs(166,1).then(function():void
               {
                  BitBuffSetClass.setState(buffId,1);
               });
               return;
            }
         }
      }
      
      override protected function updatePanel() : void
      {
         this.updateData();
         this.onStart();
         this.updateDisplay();
      }
      
      private function set isInClaw(value:Boolean) : void
      {
         var i:int = 0;
         var j:int = 0;
         if(this._isInClaw != value)
         {
            this.clearSelectView();
         }
         this._isInClaw = value;
         if(this._isInClaw)
         {
            ui.mcUseTool_1.gotoAndStop(2);
         }
         else
         {
            ui.mcUseTool_1.gotoAndStop(1);
         }
         CommonUI.setEnabled(ui.btnOneKey,!this._isInClaw);
         CommonUI.setEnabled(ui.btnCollect,!this._isInClaw);
         CommonUI.setEnabled(ui.btnClearMap,!this._isInClaw);
         CommonUI.setEnabled(ui.mcUseTool_2,!this._isInClaw);
         CommonUI.setEnabled(ui.mcUseTool_3,!this._isInClaw);
         CommonUI.setEnabled(ui.close,!this._isInClaw);
         if(this._isInClaw == false)
         {
            for(i = 1; i <= 3; i++)
            {
               CommonUI.setEnabled(ui["task_" + i]["btnCommit"],this.checkPassTask(this.TaskArr[i - 1] - 1));
            }
            for(i = 1; i <= 5; i++)
            {
               for(j = 1; j <= 5; j++)
               {
                  ui["block_" + (i * 10 + j)].select.visible = false;
               }
            }
            CommonUI.setEnabled(ui.btnBuyTime,this.ActionTime < 2);
         }
         else
         {
            for(i = 1; i <= 3; i++)
            {
               CommonUI.setEnabled(ui["task_" + i]["btnCommit"],false);
            }
            for(i = 1; i <= 5; i++)
            {
               for(j = 1; j <= 5; j++)
               {
                  ui["block_" + (i * 10 + j)].select.visible = true;
               }
            }
            CommonUI.setEnabled(ui.btnBuyTime,false);
         }
      }
      
      private function get isInClaw() : Boolean
      {
         return this._isInClaw;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String;
         var index:int;
         var pbtnName:String = null;
         var pindex:int = 0;
         var isHor:int = 0;
         var offset:int = 0;
         var minPos:int = 0;
         if(this.isInAnim)
         {
            return;
         }
         if(!this.isStart)
         {
            return;
         }
         btnName = e.target.name;
         index = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               ModuleManager.showAppModule("EnergyFromGroundEnter");
               this.hide();
               break;
            case "btnSelect":
               pbtnName = e.target.parent.parent.name;
               pindex = int(pbtnName.split("_")[1]);
               if(!this.isInClaw)
               {
                  ui["block_" + pindex].select.visible = true;
                  this.selectArr.push(pindex);
               }
               else
               {
                  SocketConnection.sendWithPromise(41950,[64,300 + pindex]).then(function():void
                  {
                     refresh();
                  });
                  this.isInClaw = false;
               }
               break;
            case "select":
               pbtnName = e.target.parent.name;
               pindex = int(pbtnName.split("_")[1]);
               if(!this.isInClaw)
               {
                  ui["block_" + pindex].select.visible = false;
                  this.selectArr.splice(this.selectArr.indexOf(pindex),1);
               }
               else
               {
                  SocketConnection.sendWithPromise(41950,[64,300 + pindex]).then(function():void
                  {
                     refresh();
                  });
                  this.isInClaw = false;
               }
               break;
            case "btnCommit":
               pbtnName = e.target.parent.name;
               pindex = int(pbtnName.split("_")[1]);
               if(this.checkPassTask(this.TaskArr[pindex - 1] - 1))
               {
                  SocketConnection.sendWithPromise(41950,[64,60 + pindex]).then(function():void
                  {
                     refresh().then(function():void
                     {
                        playTaskAnim(pindex);
                     });
                  });
                  Alarm2.show("任务完成！");
               }
               else
               {
                  Alarm2.show("资源不足!!");
               }
               break;
            case "btnUseTool_Cancel":
               this.isInClaw = false;
               break;
            case "btnUseTool":
               pbtnName = e.target.parent.name;
               pindex = int(pbtnName.split("_")[1]);
               if(this.ToolCntArr[pindex - 1] <= 0)
               {
                  Alarm2.show("数量不足！！");
                  return;
               }
               if(pindex == 1)
               {
                  this.isInClaw = true;
                  Alarm2.show("请选择要抓取的能量精华。");
               }
               else if(pindex == 2)
               {
                  if(this.getValidCnt() > 20)
                  {
                     Alert.show("能量池中还有许多能量精华，确定要现在进行补给吗？",function():void
                     {
                        clearSelectView();
                        SocketConnection.sendWithPromise(41950,[64,62 + pindex]).then(function():void
                        {
                           refresh();
                        });
                     });
                  }
                  else
                  {
                     this.clearSelectView();
                     SocketConnection.sendWithPromise(41950,[64,62 + pindex]).then(function():void
                     {
                        refresh();
                     });
                  }
               }
               else
               {
                  Alert.show("是否要刷新当前任务？",function():void
                  {
                     clearSelectView();
                     SocketConnection.sendWithPromise(41950,[64,62 + pindex]).then(function():void
                     {
                        refresh().then(function():void
                        {
                           playTaskAnim(1);
                           playTaskAnim(2);
                           playTaskAnim(3);
                        });
                     });
                  });
               }
               break;
            case "btnOneKey":
               doAction("BuyOneKey").then(function():void
               {
                  var i:int;
                  var j:int = 0;
                  clearSelectView();
                  for(i = 1; i <= 5; i++)
                  {
                     for(j = 1; j <= 5; j++)
                     {
                        if(i == 5 && j == 5)
                        {
                           hideBlockAnim(ui["block_" + (i * 10 + j)].mc,(i + j) * 0.05,function():void
                           {
                              isOneKeyShow = true;
                              SocketConnection.sendWithPromise(41950,[64,66]).then(function():void
                              {
                                 refresh();
                              });
                           });
                        }
                        else
                        {
                           hideBlockAnim(ui["block_" + (i * 10 + j)].mc,(i + j) * 0.05);
                        }
                     }
                  }
               });
               break;
            case "btnCollect":
               if(this.ActionTime < 1)
               {
                  Alarm2.show("剩余行动次数不足！");
                  return;
               }
               this.selectArr = this.selectArr.sort();
               if(this.selectArr.length != 3)
               {
                  Alarm2.show("请先选择直线上连续的三个能量精华！");
                  this.clearSelectView();
                  return;
               }
               if(this.selectArr[2] - this.selectArr[1] != this.selectArr[1] - this.selectArr[0])
               {
                  Alarm2.show("请先选择直线上连续的三个能量精华！");
                  this.clearSelectView();
                  return;
               }
               if(this.selectArr[2] - this.selectArr[1] != 10 && this.selectArr[2] - this.selectArr[1] != 1 && this.selectArr[2] - this.selectArr[1] != 9 && this.selectArr[2] - this.selectArr[1] != 11)
               {
                  Alarm2.show("请先选择直线上连续的三个能量精华！");
                  this.clearSelectView();
                  return;
               }
               isHor = 0;
               offset = this.selectArr[2] - this.selectArr[1];
               if(offset == 1)
               {
                  isHor = 100;
               }
               else if(offset == 10)
               {
                  isHor = 200;
               }
               else if(offset == 11)
               {
                  isHor = 400;
               }
               else if(offset == 9)
               {
                  isHor = 500;
               }
               minPos = Math.min(this.selectArr[0],this.selectArr[1],this.selectArr[2]);
               SocketConnection.sendWithPromise(41950,[64,isHor + minPos]).then(function():void
               {
                  refresh();
               });
               this.clearSelectView();
               break;
            case "btnClearMap":
               if(this.ActionTime < 2)
               {
                  Alarm2.show("剩余行动次数不足！");
                  return;
               }
               if(this.getValidCnt() > 16)
               {
                  Alert.show("能量池中还有许多能量精华，确定要现在进行补给吗？",function():void
                  {
                     clearSelectView();
                     SocketConnection.sendWithPromise(41950,[64,60]).then(function():void
                     {
                        isOneKeyShow = true;
                        refresh();
                     });
                  });
               }
               else
               {
                  this.clearSelectView();
                  SocketConnection.sendWithPromise(41950,[64,60]).then(function():void
                  {
                     isOneKeyShow = true;
                     refresh();
                  });
               }
               break;
            case "btnBuyTime":
               KTool.buyProductByCallback(261090,1,function():void
               {
                  KTool.doExchange(14431,function():void
                  {
                     refresh();
                  });
               },ui);
         }
      }
      
      override public function hide() : void
      {
         this.taskInfo = null;
         this.selectArr = null;
         this.ToolCntArr = null;
         this.BlockMap = null;
         this.ColorCntArr = null;
         this.TaskArr = null;
         this.taskNameInfo = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         var i:int = 0;
         this.ToolCntArr = getValue("ToolCntArr");
         var bb:* = getValue("BlockMap");
         this.ColorCntArr = getValue("ColorCntArr");
         this.ActionTime = getValue("ActionTime");
         this.TaskArr = getValue("TaskArr");
         if(this.BlockMap != null)
         {
            this.increasedBlock = [];
            for(i = 0; i < this.BlockMap.length; i++)
            {
               if(this.BlockMap[i] == 0 && bb[i] > 0 || this.isOneKeyShow)
               {
                  this.increasedBlock.push(i);
               }
               else if(this.BlockMap[i] > 0 && bb[i] == 0)
               {
                  this.lostBlock.push(i);
               }
               this.BlockMap[i] = bb[i];
            }
         }
         else
         {
            this.BlockMap = bb;
         }
         this.isOneKeyShow = false;
      }
      
      private function getValidCnt() : int
      {
         var result:int = 0;
         for(var i:int = 0; i < this.BlockMap.length; i++)
         {
            result += this.BlockMap[i] > 0 ? 1 : 0;
         }
         return result;
      }
      
      private function updateDisplay() : void
      {
         var i:int = 0;
         var j:int = 0;
         var mapVa:int = 0;
         if(this.showOnce)
         {
            this.updateTask(ui["task_1"],this.TaskArr[0]);
            this.updateTask(ui["task_2"],this.TaskArr[1]);
            this.updateTask(ui["task_3"],this.TaskArr[2]);
            this.showOnce = false;
         }
         ui.txtTime.text = this.ActionTime;
         for(i = 1; i <= 4; i++)
         {
            ui["txtColor_" + i].text = "x" + this.ColorCntArr[i - 1];
         }
         for(i = 1; i <= 3; i++)
         {
            ui["txtTool_" + i].text = this.ToolCntArr[i - 1];
         }
         var mapIdx:int = 0;
         var ss:int = 0;
         for(i = 1; i <= 5; i++)
         {
            for(j = 1; j <= 5; j++)
            {
               mapVa = int(this.BlockMap[mapIdx]);
               if(this.lostBlock.indexOf(mapIdx) >= 0)
               {
                  this.hideBlockAnim(ui["block_" + (i * 10 + j)].mc);
                  ss++;
               }
               else if(this.increasedBlock.indexOf(mapIdx) >= 0)
               {
                  ui["block_" + (i * 10 + j)].gotoAndStop(mapVa);
                  this.showBlockAnim(ui["block_" + (i * 10 + j)].mc);
               }
               else
               {
                  ui["block_" + (i * 10 + j)].gotoAndStop(mapVa);
                  ui["block_" + (i * 10 + j)].visible = mapVa > 0;
                  ui["block_" + (i * 10 + j)].mc.gotoAndStop(1);
               }
               mapIdx++;
            }
         }
         this.lostBlock = [];
         this.increasedBlock = [];
         CommonUI.setEnabled(ui.btnBuyTime,this.ActionTime < 2);
         for(i = 1; i <= 3; i++)
         {
            CommonUI.setEnabled(ui["task_" + i]["btnCommit"],this.checkPassTask(this.TaskArr[i - 1] - 1));
         }
      }
      
      private function clearSelectView() : void
      {
         var j:int = 0;
         for(var i:int = 1; i <= 5; i++)
         {
            for(j = 1; j <= 5; j++)
            {
               ui["block_" + (i * 10 + j)].select.visible = false;
            }
         }
         this.selectArr = [];
      }
      
      private function checkPassTask(taskInfoIdx:int) : Boolean
      {
         var info:Array = this.taskInfo[taskInfoIdx];
         return this.ColorCntArr[0] >= info[0] && this.ColorCntArr[1] >= info[1] && this.ColorCntArr[2] >= info[2] && this.ColorCntArr[3] >= info[3];
      }
      
      private function updateTask(taskMc:MovieClip, taskInfoIdx:int) : void
      {
         var color:int = 0;
         taskInfoIdx -= 1;
         taskMc.txtTitle.text = this.taskNameInfo[taskInfoIdx];
         var info:Array = this.taskInfo[taskInfoIdx];
         var colorIdx:int = -1;
         for(var i:int = 1; i <= 4; i++)
         {
            color = -1;
            if(color <= 0 && colorIdx < 3)
            {
               colorIdx++;
               color = int(info[colorIdx]);
               if(color <= 0 && colorIdx < 3)
               {
                  colorIdx++;
                  color = int(info[colorIdx]);
                  if(color <= 0 && colorIdx < 3)
                  {
                     colorIdx++;
                     color = int(info[colorIdx]);
                     if(color <= 0 && colorIdx < 3)
                     {
                        colorIdx++;
                        color = int(info[colorIdx]);
                     }
                  }
               }
            }
            if(color > 0)
            {
               taskMc["req_" + i].visible = true;
               taskMc["txtReq_" + i].visible = true;
               taskMc["req_" + i].gotoAndStop(colorIdx + 1);
               taskMc["txtReq_" + i].text = color;
            }
            else
            {
               taskMc["req_" + i].visible = false;
               taskMc["txtReq_" + i].visible = false;
            }
         }
         var toolType:int = 1;
         var toolCnt:int = int(info[4]);
         if(toolCnt == 0)
         {
            toolCnt = int(info[5]);
            toolType++;
         }
         if(toolCnt == 0)
         {
            toolCnt = int(info[6]);
            toolType++;
         }
         taskMc.mcTool.gotoAndStop(toolType);
         taskMc.txtTool.text = toolCnt;
         taskMc.txtScore.text = info[7];
      }
      
      private function playTaskAnim(pindex:int) : void
      {
         var taskName:String = null;
         this.isInAnim = true;
         try
         {
            taskName = "aniTask_" + pindex;
            ui[taskName].addFrameScript(8,function():void
            {
               ui[taskName].addFrameScript(8,null);
               updateTask(ui["task_" + pindex],TaskArr[pindex - 1]);
            });
            ui[taskName].visible = true;
            ui[taskName].gotoAndStop(1);
            AnimateManager.playMcAnimate(ui[taskName],0,"",function():void
            {
               ui[taskName].visible = false;
               isInAnim = false;
            });
         }
         catch(e:*)
         {
            updateTask(ui["task_" + pindex],TaskArr[pindex - 1]);
            isInAnim = false;
         }
      }
      
      private function showBlockAnim(mc:MovieClip) : void
      {
         this.isInAnim = true;
         mc.parent.visible = true;
         mc.gotoAndStop(3);
         AnimateManager.playMcAnimate(mc.ani,0,"",function():void
         {
            isInAnim = false;
            mc.gotoAndStop(1);
         });
      }
      
      private function hideBlockAnim(mc:MovieClip, delayTime:Number = -1, callback:Function = null) : void
      {
         this.isInAnim = true;
         mc.gotoAndStop(1);
         if(delayTime <= 0)
         {
            mc.gotoAndStop(2);
            AnimateManager.playMcAnimate(mc.ani,0,"",function():void
            {
               mc.parent.visible = false;
               isInAnim = false;
               if(callback != null)
               {
                  callback();
               }
            });
         }
         else
         {
            TweenLite.to(_ui.block_11,1,{
               "alpha":1,
               "onComplete":function():void
               {
                  mc.gotoAndStop(2);
                  AnimateManager.playMcAnimate(mc.ani,0,"",function():void
                  {
                     mc.parent.visible = false;
                     isInAnim = false;
                     if(callback != null)
                     {
                        callback();
                     }
                  });
               },
               "delay":delayTime
            });
         }
      }
   }
}

