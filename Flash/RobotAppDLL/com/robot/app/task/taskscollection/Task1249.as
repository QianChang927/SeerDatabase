package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1249;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1249
   {
      
      private static var _map:BaseMapProcess;
      
      private static var flag730:Boolean;
      
      private static var flag784:Boolean;
       
      
      public function Task1249()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["task1249mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1249.TASK_ID);
      }
      
      public static function initForMap730(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         DisplayUtil.stopAllMovieClip(taskMC);
         if(!flag730)
         {
            if(taskState == TasksManager.ALR_ACCEPT)
            {
               ToolTipManager.add(taskMC,"点击小息队长继续任务哦");
               TasksManager.getProStatusList(TaskController_1249.TASK_ID,function(param1:Array):void
               {
                  if(Boolean(param1[0]) && !param1[1])
                  {
                     taskMC.addEventListener(MouseEvent.CLICK,step2);
                  }
                  else if(Boolean(param1[1]) && !param1[2])
                  {
                     step3();
                  }
                  else
                  {
                     destroy();
                  }
               });
            }
            else
            {
               destroy();
            }
         }
      }
      
      public static function initForMap784(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         DisplayUtil.stopAllMovieClip(taskMC);
         if(!flag784)
         {
            if(taskState == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(TaskController_1249.TASK_ID,function(param1:Array):void
               {
                  if(Boolean(param1[2]) && !param1[3])
                  {
                     stepEnd4();
                  }
                  else
                  {
                     destroy();
                  }
               });
            }
            else
            {
               destroy();
            }
         }
      }
      
      private static function step2(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 26
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function step3() : void
      {
         MainManager.selfVisible = false;
         ToolTipManager.remove(taskMC);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1249_3"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1249_4"),function():void
            {
               flag784 = true;
               MapManager.changeMap(784);
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
               {
                  var e:MapEvent = param1;
                  MapManager.currentMap.controlLevel["taskmc"].visible = false;
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  flag784 = false;
                  MainManager.selfVisible = false;
                  NpcDialog.show(NPC.BIMOLA,["嘶嘶！沉睡了这么久，全身的骨头都生锈了！我要赶紧找个风景优美的星球吸取点能量！"],["是呀！"],[function():void
                  {
                     NpcDialog.show(NPC.NASIQI,["吼吼！ 几千年没露面了，那些善良的小精灵们怕都要忘记我们了！该做点什么让它们重拾恐怖的回忆啊！"],["正事要紧！"],[function():void
                     {
                        NpcDialog.show(NPC.LAMOSI,["别只顾着玩啊你们俩！早点找到并除掉救世主才是正事啊喵！"],["我们比一下吧！"],[function():void
                        {
                           NpcDialog.show(NPC.BIMOLA,["我们比试一下吧！谁能先找到救世主，一定会得到主人的嘉奖的！嘶嘶！"],["好呀！那我们就比一下吧！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
                              {
                                 CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_1249_3"),function():void
                                 {
                                    flag730 = true;
                                    MapManager.changeMap(730);
                                    MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                                    {
                                       var e:MapEvent = param1;
                                       MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                                       taskMC.gotoAndStop(7);
                                       ToolTipManager.add(taskMC,"点击咪卡继续任务哦");
                                       MainManager.selfVisible = false;
                                       flag730 = false;
                                       taskMC.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                                       {
                                          var e:MouseEvent = param1;
                                          taskMC.removeEventListener(MouseEvent.CLICK,arguments.callee);
                                          ToolTipManager.remove(taskMC);
                                          NpcDialog.show(NPC.SAIXIAOXI,["原来如此，是恶灵兽手下的三巨头在搞鬼！如果不阻止它们，恶灵兽就会全部复苏！我们该怎么办？"],null,null,false,function():void
                                          {
                                             NpcDialog.show(NPC.MUMU,["一切，需要听从麒麟的指示！"],null,null,false,function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMC,8,"mc8",function():void
                                                {
                                                   NpcDialog.show(NPC.MUMU,["我来帮助你们进入启示梦境，里面有麒麟的指示，能不能找出来就看你们的了！"],null,null,false,function():void
                                                   {
                                                      ModuleManager.showModule(ClientConfig.getTaskModule("TaskInteractive_1249"));
                                                   });
                                                });
                                             });
                                          });
                                       });
                                    });
                                 });
                              });
                           }]);
                        }]);
                     }]);
                  }]);
               });
            });
         },false);
      }
      
      public static function step3End() : void
      {
         AnimateManager.playMcAnimate(taskMC,9,"mc9",function():void
         {
            TasksManager.complete(TaskController_1249.TASK_ID,2,function(param1:Boolean = false):void
            {
               if(param1)
               {
                  MapManager.changeMap(784);
               }
            });
         });
      }
      
      private static function stepEnd4() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 13
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            DisplayUtil.removeForParent(taskMC);
            ToolTipManager.remove(taskMC);
            if(_map.conLevel["taskmc"])
            {
               _map.conLevel["taskmc"].visible = true;
            }
            taskMC.removeEventListener(MouseEvent.CLICK,step2);
            _map = null;
         }
      }
   }
}
