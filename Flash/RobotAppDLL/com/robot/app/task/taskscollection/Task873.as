package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_873;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task873
   {
      
      public static var _map:BaseMapProcess;
      
      private static var machineCount:int = 0;
       
      
      public function Task873()
      {
         super();
      }
      
      public static function initForMap701(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ToolBarController.showOrHideAllUser(false);
         TasksManager.getProStatusList(TaskController_873.TASK_ID,function(param1:Array):void
         {
            taskMC.buttonMode = true;
            if(Boolean(param1[1]) && !param1[2])
            {
               initStep2();
            }
            else if(Boolean(param1[2]) && !param1[3])
            {
               initStep3();
            }
            else if(Boolean(param1[3]) && !param1[4])
            {
               initStep4();
            }
            else if(Boolean(param1[4]) && !param1[5])
            {
               if(TasksManager.getTaskStatus(TaskController_873.TASK_ID) == TasksManager.ALR_ACCEPT)
               {
                  initStep5();
               }
               else
               {
                  destroy();
               }
            }
            else
            {
               destroy();
            }
         });
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(1);
         taskMC.addEventListener(MouseEvent.CLICK,onHerosClicked);
      }
      
      private static function onHerosClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SEER,["看！雷伊、盖亚、卡修斯和布莱克就在那边。"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["不对劲啊，周围都是激光射线，他们好像被困住了！"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  taskMC.gotoAndStop(3);
                  NpcDialog.show(NPC.SEER,["连战神联盟都已经被困住，情况太糟糕了！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["海盗肯定在诺可撒斯星动了手脚，才使得雷伊他们不能正常发挥！"],["嗯，我们找找，看看到底是什么东西在作怪。(点击场景中的发光装置）"],[function():void
                     {
                        TasksManager.complete(TaskController_873.TASK_ID,2,function():void
                        {
                           taskMC.removeEventListener(MouseEvent.CLICK,onHerosClicked);
                           initStep3();
                        });
                     }]);
                  });
               });
            });
         });
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(3);
         taskMC.buttonMode = false;
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            taskMC["machine" + _loc1_].addEventListener(MouseEvent.CLICK,onMachineClicked);
            taskMC["machine" + _loc1_].buttonMode = true;
            _loc1_++;
         }
         machineCount = 0;
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
         ToolBarController.noticeAimat(true);
      }
      
      private static function onMachineClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SEER,["\t咦？这个装置正在放射出电磁波，一定有蹊跷！"],["不管那么多了，先让它休息会。（用头部射击毁坏装置）"],[function():void
         {
         }]);
      }
      
      private static function onAimatEndHandler(param1:AimatEvent) : void
      {
         var machineMC:MovieClip = null;
         var evt:AimatEvent = param1;
         if(taskMC["machine1"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            machineMC = taskMC["machine1"];
         }
         else if(taskMC["machine2"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            machineMC = taskMC["machine2"];
         }
         else if(taskMC["machine0"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            machineMC = taskMC["machine0"];
         }
         if(machineMC != null)
         {
            if(machineMC.currentFrame == 1)
            {
               machineMC.gotoAndStop(2);
            }
            else if(machineMC.currentFrame == 2)
            {
               AnimateManager.playMcAnimate(machineMC,2,"mc",function():void
               {
                  machineMC.gotoAndStop(3);
                  machineMC.buttonMode = false;
                  machineMC.removeEventListener(MouseEvent.CLICK,onMachineClicked);
                  ++machineCount;
                  if(machineCount == 3)
                  {
                     AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
                     ToolBarController.noticeAimat(false);
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_873_4"),function():void
                     {
                        TasksManager.complete(TaskController_873.TASK_ID,3,function():void
                        {
                           initStep4();
                           NpcDialog.show(NPC.SAIXIAOXI,["米咔！你变身了？开始战斗吧！打飞海盗！"],["（点击纳迪科和丽萨克对战）"],[function():void
                           {
                           }]);
                        });
                     });
                  }
               });
            }
         }
      }
      
      private static function initStep4() : void
      {
         MainManager.actorModel.visible = false;
         taskMC.gotoAndStop(4);
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onDamiFight);
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            taskMC["machine" + _loc1_].gotoAndStop(3);
            _loc1_++;
         }
      }
      
      private static function onDamiFight(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onDamiFight);
         AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_873_5"),function():void
            {
               TasksManager.complete(TaskController_873.TASK_ID,4,function():void
               {
                  initStep5();
                  NpcDialog.show(NPC.SAIXIAOXI,["好好审问这个海盗，看看佐格、艾艾利逊到底在诺可撒斯星做了什么，竟然可以限制战神联盟的能量。"],["（点击海盗杂兵对话）"],[function():void
                  {
                  }]);
               });
            });
         });
      }
      
      private static function initStep5() : void
      {
         MainManager.actorModel.visible = false;
         taskMC.gotoAndStop(6);
         taskMC.addEventListener(MouseEvent.CLICK,onFinishTask);
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            taskMC["machine" + _loc1_].gotoAndStop(3);
            _loc1_++;
         }
      }
      
      private static function onFinishTask(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onFinishTask);
         NpcDialog.show(NPC.PIRATE_2,["事情是这个样子的……"],["（海盗开始讲述他们的计划……）"],[function():void
         {
            CartoonManager.play(ClientConfig.getFullMovie("task_873"),function():void
            {
               NpcDialog.show(NPC.LEIYI,["海盗真的太阴险了，为了控制我们，不惜一切手段！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.GAIYA,["哼！佐格、艾利逊，下次一定要你们尝尝我的厉害！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.KAXIUSI_WHITE,["多亏" + MainManager.actorInfo.formatNick + "、赛小息和米咔的帮助，我们才脱离险境！非常感谢。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.BULAIKE_NEW,["米咔不但和元素之星有感应，而且身体里还潜藏着如此强大的能量！这一切都太令人惊讶啦！"],null,null,false,function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_873_6"),function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_873_7"),function():void
                              {
                                 TasksManager.complete(TaskController_873.TASK_ID,5,function():void
                                 {
                                    destroy();
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["task873mc"];
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         taskMC.removeEventListener(MouseEvent.CLICK,onHerosClicked);
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            taskMC["machine" + _loc1_].removeEventListener(MouseEvent.CLICK,onMachineClicked);
            _loc1_++;
         }
         AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
         MainManager.actorModel.visible = true;
         taskMC.removeEventListener(MouseEvent.CLICK,onDamiFight);
         taskMC.removeEventListener(MouseEvent.CLICK,onFinishTask);
         ToolBarController.showOrHideAllUser(true);
         ToolBarController.noticeAimat(false);
         DisplayUtil.removeForParent(taskMC);
         _map = null;
      }
   }
}
