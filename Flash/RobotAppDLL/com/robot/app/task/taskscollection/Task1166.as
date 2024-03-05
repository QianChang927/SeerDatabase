package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1166
   {
      
      public static const TASK_ID:uint = 1166;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1166()
      {
         super();
      }
      
      public static function initTaskFor698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(113);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(113);
               }
            });
         }
      }
      
      public static function initTaskFor762(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               _map.conLevel["sptBoss"].visible = false;
               if(Boolean(param1[0]) && !param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  taskMC.buttonMode = true;
                  taskMC.addEventListener(MouseEvent.CLICK,initStep1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep3();
               }
               else if(Boolean(param1[3]) && !param1[4])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep4();
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
      
      private static function initStep1(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 31
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep2() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 20
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(13);
         AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
         {
            NpcDialog.show(NPC.YOUNIKA,["你小弟？的朋友？"],["哈哈，尤尼卡，你也有今天！"],[function():void
            {
               NpcDialog.show(NPC.PALISI,["尤尼卡，别装蒜了！我小弟都跟我说了！识相点，把他的朋友格林...还是格鲁..."],["是格林..."],[function():void
               {
                  NpcDialog.show(NPC.PALISI,["对，是格林！把格林还回来，什么都好说！不然我可跟你不客气！"],["狂妄！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1166_3"),function():void
                     {
                        NpcDialog.show(NPC.YOUNIKA,["哼，全力一搏，你肯定不是我的对手，只是这样就给这群赛尔看笑话了，帕里斯，我们改日再见！"],["哼，随时奉陪！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
                           {
                              TasksManager.complete(TASK_ID,3,function(param1:Boolean = true):void
                              {
                                 if(param1)
                                 {
                                    SocketConnection.send(1022,84494467);
                                    initStep4();
                                 }
                                 else
                                 {
                                    destroy();
                                 }
                              });
                           });
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(15);
         NpcDialog.show(NPC.PANDA,["万岁！老大就是老大！连魔圣尤尼卡都不是你的对手！"],["额！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
            {
               NpcDialog.show(NPC.PALISI,["我好像受伤了！"],["......"],[function():void
               {
                  NpcDialog.show(NPC.PALISI,["这尤尼卡果然强大，我看只怕不在我之下！"],["你都被打的吐血了！还不在你之下..."],[function():void
                  {
                     NpcDialog.show(NPC.PALISI,["哎，看来救你朋友的事，我是无能无力了！真可惜，要是尤尼卡也肯做我的小弟就好了！"],["......"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                        {
                           NpcDialog.show(NPC.KALULU,["这家伙实力不弱，可是满脑子异想天开，太不靠谱了！"],["是呀...怎么办？"],[function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["不管怎么说，它也是为了我们才受的伤！格林是我们的朋友！就算没别人的帮助，我们也不能半途而废！"],["说的好！队长！"],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["帕里斯，你受了伤，先不要着急，救朋友的事，我们会再想办法！"],["也好！"],[function():void
                                 {
                                    NpcDialog.show(NPC.PALISI,["世上无难事，只怕有心人！就凭你们不放弃的精神，相信一定可以救回你们的朋友！我就在这里，你们随时可以来找我！"],null,null,false,function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.SAIXIAOXI,["好了！我们继续出发吧！伙伴们！振作精神，我们一定会救回格林的！"],["恩，队长说的对！格林，等着我们！"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,18,"mc",function():void
                                             {
                                                TasksManager.complete(TASK_ID,4,function(param1:Boolean = true):void
                                                {
                                                   destroy();
                                                });
                                             });
                                          }]);
                                       });
                                    });
                                 }]);
                              }]);
                           }]);
                        });
                     }]);
                  }]);
               }]);
            });
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 762 && Boolean(_map.conLevel["task1166MC"]))
         {
            return _map.conLevel["task1166MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 762)
         {
            _map.conLevel["sptBoss"].visible = true;
            KTool.showMapAllPlayerAndMonster();
            if(taskMC)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
