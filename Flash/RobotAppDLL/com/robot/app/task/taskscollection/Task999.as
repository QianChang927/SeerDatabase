package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_999;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class Task999
   {
      
      public static const TASK_ID:uint = 999;
      
      public static var _map:BaseMapProcess;
      
      private static var _shootCnt:uint;
      
      private static var _hitCnt:uint;
      
      private static var _hitMC:MovieClip;
       
      
      public function Task999()
      {
         super();
      }
      
      public static function initTaskForMap724(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["blood"].visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            _map.conLevel["task999StoneDoor"].gotoAndStop(4);
            _map.conLevel["task999RemainMC"].gotoAndStop(1);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            OgreController.isShow = false;
            MainManager.selfVisible = false;
            _map.conLevel["sptBoss"].visible = false;
            _map.conLevel["task999RemainMC"].visible = false;
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskMC.gotoAndStop(1);
                  taskMC.buttonMode = true;
                  taskMC.addEventListener(MouseEvent.CLICK,initStep1);
               }
               else if(Boolean(param1[1]) && !param1[2])
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
          * 指令数: 28
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep2() : void
      {
         taskMC.addEventListener(Event.ENTER_FRAME,onFrameHandler);
         taskMC.gotoAndStop(8);
         NpcDialog.show(NPC.HAMO_LEITE,["太可怕了，我不敢想象下去！伙伴们，我们一定要想法过去才行！"],["恩恩，先解决面前的石柱再说吧！"],[function():void
         {
            addYellowArrow(MapManager.currentMap.topLevel,520,305,0);
         }]);
      }
      
      private static function onFrameHandler(param1:Event) : void
      {
         if(taskMC["stoneMc"])
         {
            taskMC["stoneMc"].visible = true;
            taskMC["stoneMc"].buttonMode = true;
            taskMC["stoneMc"].addEventListener(MouseEvent.CLICK,onStoneClick);
            taskMC.removeEventListener(Event.ENTER_FRAME,onFrameHandler);
         }
      }
      
      private static function onStoneClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _hitMC = taskMC["stoneMc"] as MovieClip;
         CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
         taskMC["stoneMc"].removeEventListener(MouseEvent.CLICK,onStoneClick);
         NpcDialog.show(NPC.SEER,["看上去这根挡路石柱不是这么轻易就能移动的，仅仅靠我们这几个人的力量肯不行的，还是用头部射击试试吧！"],["尝试射击石柱！"],[function():void
         {
            MainManager.actorModel.x = 605;
            MainManager.actorModel.y = 444;
            _map.conLevel["blood"].visible = true;
            _shootCnt = 0;
            _hitCnt = 0;
            AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
            AimatController.start(0);
         }]);
      }
      
      private static function onAimatEndHandler(param1:AimatEvent) : void
      {
         var t:uint = 0;
         var e:AimatEvent = param1;
         if(e.info.userID == MainManager.actorID)
         {
            ++_shootCnt;
            if(_hitMC.hitTestPoint(e.info.endPos.x,e.info.endPos.y,true) == true)
            {
               ++_hitCnt;
               SocketConnection.send(CommandID.SINUO_ACT_SHOOT_COUNT);
               _map.conLevel["blood"].gotoAndStop(17 * _hitCnt);
            }
            if(_hitCnt < 3)
            {
               t = setTimeout(function():void
               {
                  clearTimeout(t);
                  AimatController.start(0);
               },1000);
            }
            else
            {
               DisplayUtil.removeForParent(_map.conLevel["blood"]);
               shootOver();
            }
         }
      }
      
      private static function shootOver() : void
      {
         AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
         AnimateManager.playMcAnimate(taskMC["stoneMc"],2,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["搞定！接下来就是正面交锋的时刻了，大家都打起十二万分精神，让我们一举拿下帕罗狄亚！"],["冲啊！！！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_999_2"),function():void
               {
                  NpcDialog.show(NPC.PALUODIYA,["呵呵！为了达到目的，我可以不惜一切代价！你们已经不能再挽回什么了，我现在就把龙族之心和龙族之印相结合，等死吧！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.HAMO_LEITE,["据我所知，龙族之印一旦开启就不可能回到之前的状态，除非…除非我们能摧毁龙族之印附近的0xff0000三个能量球0xffffff！"],["只有这个办法吗？"],[function():void
                     {
                        NpcDialog.show(NPC.HAMO_LEITE,["是的，虽然这样会导致龙族之印彻底的损坏，但是这样总比被帕罗狄亚利用的好，这样的东西本来就不该出现！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,8,"mc1",function():void
                           {
                              NpcDialog.show(NPC.PALUODIYA,["龙族之印，请赐予我最强大能量吧！啊哈哈哈！"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,9,"mc1",function():void
                                 {
                                    NpcDialog.show(NPC.HAMO_LEITE,["不…帕罗狄亚你不能吸收龙族之印的力量，你还无法控制它！布里克，我们上，不能再等了！"],["遵命，龙王子！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,10,"mc1",function():void
                                       {
                                          NpcDialog.show(NPC.HAMO_LEITE,["等等，我想起来了，我们一定要同时将这些能量球击碎才行，否则强大的龙族之印能量可能会将整个上古龙殿摧毁！"],["这可怎么办啊！"],[function():void
                                          {
                                             NpcDialog.show(NPC.SAIXIAOXI,["啊！我有办法，有米咔啊！"],null,null,false,function():void
                                             {
                                                NpcDialog.show(NPC.HAMO_LEITE,["不行，我们不能让米咔冒这个风险，实在不行我和布里克就拼了！"],["不，这样你们会有危险的！"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,11,"mc1",function():void
                                                   {
                                                      NpcDialog.show(NPC.SAIXIAOXI,["哇！圣光天马，你怎么来了！这下太好了，哈莫雷特，圣光天马来帮助我们了！"],null,null,false,function():void
                                                      {
                                                         NpcDialog.show(NPC.HAMO_LEITE,["太好了，圣光天马欢迎你的加入，接下来就看我们的了！布里克、圣光天马，利用你们最强大的能力摧毁龙族之印吧！"],["只有一次机会哦！"],[function():void
                                                         {
                                                            AnimateManager.playMcAnimate(taskMC,12,"mc1",function():void
                                                            {
                                                               TasksManager.complete(TaskController_999.TASK_ID,2,function():void
                                                               {
                                                                  initStep3();
                                                               });
                                                            });
                                                         }]);
                                                      });
                                                   });
                                                }]);
                                             });
                                          }]);
                                       });
                                    }]);
                                 });
                              });
                           });
                        });
                     }]);
                  });
               });
            }]);
         });
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(13);
         NpcDialog.show(NPC.PALUODIYA,["哈哈哈，你们已经晚了，我已经吸收了龙族之印一半的能力，现在就让你们尝尝我的厉害吧！"],null,null,false,function():void
         {
            AnimateManager.playMcAnimate(taskMC,13,"mc1",function():void
            {
               NpcDialog.show(NPC.PALUODIYA_3,["一起上吧！省的我一个个的解决，你敢吗？龙族王子！"],["来吧！我接受你的挑战！"],[function():void
               {
                  NpcDialog.show(NPC.SHENGGUANGTIANMA,["帕罗狄亚，你不该这样，有很多事情不是武力就能解决的！"],["少废话，接招吧！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_999_3"),function():void
                     {
                        taskMC.gotoAndStop(14);
                        NpcDialog.show(NPC.HAMO_LEITE,["星辰龙境？？它居然这都可以找到，太可怕了！还是快去看看圣光天马的伤势吧！"],["恩恩，我这就去！"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["圣光天马你伤的不轻啊！能动吗？怎么办啊！"],["别急，一定会有办法的！"],[function():void
                           {
                              NpcDialog.show(NPC.SILIPU,["你们太吵了，是谁受伤啦！让我看看…"],["那…那条龙怎么醒了？"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,14,"mc1",function():void
                                 {
                                    NpcDialog.show(NPC.SILIPU,["看来圣光天马的的双翼受到了严重的重创，想要恢复恐怕很难！我只能尽我所能了！"],["太感谢你了！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,15,"mc1",function():void
                                       {
                                          NpcDialog.show(NPC.HAMO_LEITE,["你没事吧！圣光天马，我们一定会想办法治愈你们的！"],null,null,false,function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,16,"mc1",function():void
                                             {
                                                NpcDialog.show(NPC.JUSHILINGWANG,["看来我还是来晚了！放心吧！天马我这就带你回拉珀尔仙境，我一定会想办法帮你治好的！"],["天马，我们走!"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,17,"mc1",function():void
                                                   {
                                                      TasksManager.complete(TaskController_999.TASK_ID,3,function():void
                                                      {
                                                         initStep4();
                                                      });
                                                   });
                                                }]);
                                             });
                                          });
                                       });
                                    }]);
                                 });
                              }]);
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
         taskMC.gotoAndStop(18);
         NpcDialog.show(NPC.SILIPU,["哎…真是报应啊！如果让帕罗狄亚找到十二黄道，那就麻烦了！看来上古龙殿的劫难就要来临了！"],["十二黄道？？"],[function():void
         {
            NpcDialog.show(NPC.SILIPU,["是的！帕罗狄亚刚刚已经激活龙族之印，就是启动十二黄道的机关，你们要赶紧啊！我先睡一会，真正的考验现在才开始！！"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(taskMC,18,"mc1",function():void
               {
                  NpcDialog.show(NPC.BULIKE,["龙王子，你快回龙王圣殿，召集你的龙族手下准备御敌，我现在就去星辰龙境寻找帕罗狄亚！"],["不行，你一个人去太危险了！"],[function():void
                  {
                     NpcDialog.show(NPC.BULIKE,["龙王子你忘记我的责任了吗？放心吧！我不会有事的！"],["那好吧！答应我一定要活着回来！"],[function():void
                     {
                        _map.conLevel["task999StoneDoor"].visible = false;
                        AnimateManager.playMcAnimate(taskMC,19,"mc1",function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，我们也回赛尔号汇报情况吧!赛尔，你别乱走，我们随后就来！"],["恩恩，立刻返回赛尔号！"],[function():void
                           {
                              TasksManager.complete(TaskController_999.TASK_ID,4,function():void
                              {
                                 destroy();
                              });
                           }]);
                        });
                     }]);
                  }]);
               });
            });
         }]);
      }
      
      private static function addYellowArrow(param1:DisplayObjectContainer, param2:Number = 0, param3:Number = 0, param4:uint = 0) : void
      {
         CommonUI.addYellowArrow(param1,param2,param3,param4);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 724)
         {
            return _map.conLevel["task999Mc"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         ToolBarController.showOrHideAllUser(true);
         OgreController.isShow = true;
         MainManager.selfVisible = true;
         if(taskMC)
         {
            if(MapManager.currentMap.id == 724)
            {
               AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
               taskMC.removeEventListener(Event.ENTER_FRAME,onFrameHandler);
               taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
               _map.conLevel["sptBoss"].visible = true;
               _map.conLevel["task999RemainMC"].gotoAndStop(1);
               _map.conLevel["task999RemainMC"].visible = true;
            }
            DisplayUtil.removeForParent(taskMC);
         }
         _map = null;
      }
   }
}
