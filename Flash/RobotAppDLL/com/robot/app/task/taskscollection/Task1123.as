package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1123
   {
      
      public static const TASK_ID:uint = 1123;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1123()
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
      
      public static function initTaskFor741(param1:BaseMapProcess) : void
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
                  taskMC.addEventListener(MouseEvent.CLICK,initStep1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep2();
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
      
      public static function initTaskFor744(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[2]) && !param1[3])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  CommonUI.addYellowExcal(_map.conLevel,724,192);
                  taskMC.buttonMode = true;
                  taskMC.addEventListener(MouseEvent.CLICK,initStep3);
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
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
         taskMC.buttonMode = false;
         taskMC.gotoAndStop(2);
         AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
         {
            NpcDialog.show(NPC.MENGTA,["你们这群坏蛋，快放了我和我父亲！要是让雷伊知道了，战神联盟一定不会放过你们的！"],["哈哈，你是在搞笑吗？"],[function():void
            {
               NpcDialog.show(NPC.ZOG,["有你们做人质，你说我们还会怕那些什么战神联盟吗？啊哈哈！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                  {
                     NpcDialog.show(NPC.ALLISON,["真是不知好歹，给你点阳光你就灿烂了，这下知道我们的厉害吧！"],["住手，你们这群海盗！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["你们这群臭海盗又在这里胡作非为了，蒙塔和迈尔斯都是我最珍贵的朋友，你们休想伤害他们！"],["赛尔，你怎么来啦！"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["蒙塔，虽然我们相识不久，但是你为迈尔斯所做的一切，我都看在眼里，认识你真的太荣幸了！"],["少废话！还聊起天了！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                              {
                                 NpcDialog.show(NPC.ALLISON,["大哥，大事不好！迈尔斯好像不受控制了，我们还是撤吧！"],["白痴，难道你想退缩？"],[function():void
                                 {
                                    NpcDialog.show(NPC.ZOG,["别忘了，我们还有蒙塔哦！有了他，量迈尔斯也不敢轻举妄动！"],["快去把蒙塔带过来！"],[function():void
                                    {
                                       AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1123_3"),function():void
                                       {
                                          TasksManager.complete(TASK_ID,1,function(param1:Boolean = true):void
                                          {
                                             if(param1)
                                             {
                                                initStep2();
                                             }
                                             else
                                             {
                                                destroy();
                                             }
                                          });
                                       });
                                    }]);
                                 }]);
                              });
                           }]);
                        }]);
                     }]);
                  });
               });
            }]);
         });
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
      
      private static function initStep3(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowExcal(_map.conLevel);
         taskMC.removeEventListener(MouseEvent.CLICK,initStep3);
         taskMC.buttonMode = false;
         taskMC.gotoAndStop(2);
         NpcDialog.show(NPC.YUMINA,["这里难道就是哥哥经常出没的地方，时隔这么久，不知道他还会认识我这个妹妹吗？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.MOYUXIANZI,["别担心，尤米娜！我一定会想办法帮你找到0xff0000尤尼卡0xffffff的下落！你别忘记，当年最有可能成为下届村长的正是尤尼卡！"],["但是哥哥他却..."],[function():void
            {
               NpcDialog.show(NPC.MOYUXIANZI,["过去的事就别提了！现在最重要的就是找到恶魔旋涡的入口，否则一切都是未知数！"],["恩恩，开始吧！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                  {
                     NpcDialog.show(NPC.YUMINA,["咦！居然是你，赛尔，这里很危险你还是先回去吧！我的事情自己会解决的！"],["多一个人多一份力量嘛！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                        {
                           NpcDialog.show(NPC.JILATE,["你们以为人多就能找到恶魔旋涡的入口吗？太可笑了，恶魔旋涡不是这么容易进入的！"],["你是谁？怎么会在这里！"],[function():void
                           {
                              NpcDialog.show(NPC.JILATE,["我是看守0xff0000恶魔旋涡0xffffff的0xff0000吉拉特一族0xffffff，但是看来这一切都将毁在我的手里！恶魔旋涡再次复苏，证明着它们已经苏醒了！"],["它们？？"],[function():void
                              {
                                 CartoonManager.play(ClientConfig.getFullMovie("task1123_0"),function():void
                                 {
                                    NpcDialog.show(NPC.YUMINA,["那你知道尤尼卡吗？这个名字你听过没有！"],["什么！你们居然想找魔圣？？"],[function():void
                                    {
                                       NpcDialog.show(NPC.MOYUXIANZI,["太好了，你真的知道尤尼卡的下落！快告诉我们吧！"],["我看你们还是死心吧！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.YUMINA,["不...这不是真的！我一定要找到我哥哥，否则我是不会死心的！"],["吉拉特，你就帮帮我吧！"],[function():void
                                             {
                                                NpcDialog.show(NPC.JILATE,["看来真的是宿命啊！尤尼卡的妹妹居然是你，呵呵！好吧！不过你必须要拥有0xff0000七星天珠0xffffff，否则是根本找不到入口的！"],["什么！七星天珠？？"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                                   {
                                                      NpcDialog.show(NPC.JILATE,["这不可能，七星天珠怎么会在你们这群小鬼手中，我不信！"],["赛小息你给他看看！"],[function():void
                                                      {
                                                         NpcDialog.show(NPC.SAIXIAOXI,["首先，我们不是小鬼，我们是赛尔探险小队！其次，七星天珠真的在我们手中，为了帮助尤米娜，就给你开开眼界吧！"],["七星天珠！！！"],[function():void
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
                                                         }]);
                                                      }]);
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
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(6);
         if(_map.animatorLevel["BeadsAndSwirl"])
         {
            _map.animatorLevel["BeadsAndSwirl"].visible = true;
         }
         if(_map.conLevel["AltarAndSwirl"])
         {
            _map.conLevel["AltarAndSwirl"].visible = true;
         }
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1123_4"),function():void
         {
            NpcDialog.show(NPC.JILATE,["既然恶魔领域的入口已经被你们找到，说明你们确实有点实力！不过现在还不能进入！"],["为什么！"],[function():void
            {
               NpcDialog.show(NPC.JILATE,["因为如果从这里进入，你们到达恶魔领域的几率等于零！除非你们能找到0xff0000恶魔领域的地图0xffffff！"],["什么，还有地图？"],[function():void
               {
                  NpcDialog.show(NPC.JILATE,["相信这些对你们而言，并不是难事！下次来找我的时候希望能看到这个地图！"],["失陪了！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                     {
                        NpcDialog.show(NPC.YUMINA,["但是这个地图究竟在哪里呢？茫茫宇宙我们还怎么寻找呢？"],["放心，尤米娜！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["我们分头行动，一定会有结果的！无论如何，一周以后，我们就在这里回合！"],["恩，好的！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["赛尔，我们也回赛尔号问问博士和船长知不知道相关的信息吧！"],["恩恩，你们先回吧！我很快就来！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["恶魔领域、八大统领…难道这些会和海盗有联系？？海盗又领先我们一步了吗？"],["真正的考验现在才开始！"],[function():void
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
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 741 && Boolean(_map.conLevel["task1123MC"]))
         {
            return _map.conLevel["task1123MC"];
         }
         if(MapManager.currentMap.id == 744 && Boolean(_map.conLevel["task1123MC"]))
         {
            return _map.conLevel["task1123MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 741 || MapManager.currentMap.id == 744)
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
