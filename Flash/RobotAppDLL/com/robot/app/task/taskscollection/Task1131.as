package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1131
   {
      
      public static const TASK_ID:uint = 1131;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1131()
      {
         super();
      }
      
      public static function initTaskFor4(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(1);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(1);
               }
            });
         }
      }
      
      public static function initTaskFor746(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  taskMC.buttonMode = true;
                  _map.conLevel["task1131MapMC"].visible = false;
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
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            _map.conLevel["task1131MapMC"].visible = false;
            destroy();
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
      
      public static function initStep2() : void
      {
         taskMC.gotoAndStop(9);
         NpcDialog.show(NPC.JILATE,["接下来就看你们了！能不能拼凑这些不完整的地图，成功与否就在一瞬间！"],["恩恩，我们明白！"],[function():void
         {
            CommonUI.addYellowArrow(_map.topLevel,430,299,315);
            (_map.conLevel["task1131MapMC"] as MovieClip).buttonMode = true;
            _map.conLevel["task1131MapMC"].addEventListener(MouseEvent.CLICK,mapSpliceHandler);
         }]);
      }
      
      public static function initStep2GoOn() : void
      {
         NpcDialog.show(NPC.JILATE,["什么！你们居然成功了？难以置信，不过这才是刚刚开始！正如你们看见的那样！恶魔旋涡是个极度恐怖的领域！"],["别担心，我们是不会退缩的！"],[function():void
         {
            NpcDialog.show(NPC.JILATE,["真是一群执着的孩子，你们一定是上天派来拯救我的使者！希望你们能顺利通过那里的考验！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.ATIEDA,["哈哈！那是肯定的！还说什么星球转移，我看根本就是骗人的！"],["别得意，孩子！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                  {
                     NpcDialog.show(NPC.JILATE,["不好，一定不是好事！星球转移开始了！"],["怎么可能！！！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1131_3"),function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["刚刚是什么情况，到底发生什么事情啦！难道我们被转移到了另一个领域吗？"],["让我看看！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                              {
                                 NpcDialog.show(NPC.SAPAKE,["吉拉特，你看到了什么？我们究竟在哪里！！！"],["螺旋星系！"],[function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["什么！我们居然被转移到了螺旋星系！太神奇了，难道是那张地图所导致的吗？"],["很有可能是这样！"],[function():void
                                    {
                                       NpcDialog.show(NPC.ATIEDA,["想不到会有如此惊人的过程，看来我们是低估了恶魔旋涡的能量！"],["想必一定有事发生！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.JILATE,["熟悉的感觉，怎么可能！萨帕克，你难道被刚刚发生现象吓到了吗？"],["不可能，一定是他！！"],[function():void
                                             {
                                                TasksManager.complete(TASK_ID,2,function(param1:Boolean = true):void
                                                {
                                                   if(param1)
                                                   {
                                                      SocketConnection.send(1022,84806919);
                                                      initStep3();
                                                   }
                                                   else
                                                   {
                                                      destroy();
                                                   }
                                                });
                                             }]);
                                          });
                                       }]);
                                    }]);
                                 }]);
                              });
                           }]);
                        });
                     }]);
                  });
               }]);
            });
         }]);
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(12);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1131_4"),function():void
         {
            NpcDialog.show(NPC.JILATE,["萨帕克，你怎么样了，为什么要替我抵挡这次攻击！！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SAPAKE,["这是我和萨多拉尼之间的战斗，我不想让他伤及无辜！"],["可是你！！"],[function():void
               {
                  NpcDialog.show(NPC.YOUNIKA,["吉拉特，我这次出现是想告诉你，接下来就让我成为这个时代的领导者吧！"],["只要有我在，你休想！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                     {
                        NpcDialog.show(NPC.YUMINA,["哥哥，你真的是我失散多年的哥哥吗？为什么你会变成这样呢？"],["尤米娜，你来的正好！"],[function():void
                        {
                           NpcDialog.show(NPC.JILATE,["如果他真的是你寻找多年的哥哥，那么相信现在的他已经不是你所认识的尤尼卡了！"],["记得当初..."],[function():void
                           {
                              CartoonManager.play(ClientConfig.getFullMovie("task1131_0"),function():void
                              {
                                 NpcDialog.show(NPC.YUMINA,["不可能，我记忆中的哥哥，不是这样的！"],["接受现实吧！尤米娜！"],[function():void
                                 {
                                    NpcDialog.show(NPC.YOUNIKA,["哥哥？太可笑了，我怎么可能有你这样的妹妹！我可是恶魔旋涡的领袖，我是魔圣！"],["哥哥，你快清醒吧！"],[function():void
                                    {
                                       NpcDialog.show(NPC.YOUNIKA,["今天就当是送你们的见面礼，有本事就来恶魔旋涡闯闯吧！萨多拉尼，我们走！"],null,null,false,function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                                          {
                                             TasksManager.complete(TASK_ID,3,function(param1:Boolean = true):void
                                             {
                                                if(param1)
                                                {
                                                   initStep4();
                                                }
                                                else
                                                {
                                                   destroy();
                                                }
                                             });
                                          });
                                       });
                                    }]);
                                 }]);
                              });
                           }]);
                        }]);
                     });
                  }]);
               }]);
            });
         });
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(14);
         NpcDialog.show(NPC.SADUOLANI,["对了，萨帕克已经中了我的暗黑之拳，想救他的话就来恶魔旋涡的第一领域天空之门找我吧！"],["时间不多咯！啊哈哈！"],[function():void
         {
            NpcDialog.show(NPC.JILATE,["我绝不会善罢甘休的，萨多拉尼，我一定会来找你的！"],["哈哈哈！我等着！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
               {
                  NpcDialog.show(NPC.YUMINA,["不行，我一定去恶魔旋涡一次，看看到底发生了什么事情！"],["尤米娜，我们陪你一起去！"],[function():void
                  {
                     NpcDialog.show(NPC.JILATE,["大家先不要着急，进入恶魔旋涡探险，我们该从长计议！否则我们几个都会有危险！"],["那我们现在该怎么办呢？"],[function():void
                     {
                        NpcDialog.show(NPC.JILATE,["现在首要的就是治愈萨帕克，看上去她的伤势很重！"],["恩恩，我也认同！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["我们也该回赛尔号了，这件事情绝对不简单，我想赛尔号也一定会帮助你的，吉拉特！"],["感谢你们！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.JILATE,["赛尔，这里就交给你了，萨帕克我会负责，我们后会有期！"],["恩恩，放心吧！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.SEER,["尤尼卡，你的目的究竟是什么！难道他的背后也会有不为人知的一面吗？"],["你的秘密由我来揭晓！"],[function():void
                                          {
                                             TasksManager.complete(TASK_ID,4,function(param1:Boolean = true):void
                                             {
                                                destroy();
                                             });
                                          }]);
                                       });
                                    }]);
                                 });
                              }]);
                           });
                        }]);
                     }]);
                  }]);
               });
            }]);
         }]);
      }
      
      private static function mapSpliceHandler(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         (_map.conLevel["task1131MapMC"] as MovieClip).buttonMode = false;
         _map.conLevel["task1131MapMC"].removeEventListener(MouseEvent.CLICK,mapSpliceHandler);
         ModuleManager.showModule(ClientConfig.getAppModule("MapSplicePanel"),"正在打开面板...");
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 746 && Boolean(_map.conLevel["task1131MC"]))
         {
            return _map.conLevel["task1131MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         _map.conLevel["task1131MapMC"].removeEventListener(MouseEvent.CLICK,mapSpliceHandler);
         if(MapManager.currentMap.id == 746)
         {
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
