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
   
   public class Task1160
   {
      
      public static const TASK_ID:uint = 1160;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1160()
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
      
      public static function initTaskFor756(param1:BaseMapProcess) : void
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
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
         taskMC.buttonMode = false;
         taskMC.gotoAndStop(2);
         NpcDialog.show(NPC.SAIXIAOXI,["太好了，等待了这么久，我们终于来到了第四领域，这里看上去如同两极分化一般，一边是洁白另一边则是黑暗的感觉！"],["先找米咔再说！"],[function():void
         {
            NpcDialog.show(NPC.KALULU,["恩恩，时间不多，趁那个黑影还没有出现，我们一定要找到米咔，否则形势对我们会非常不利！"],["大家帮忙一起找！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["我相信米咔一定就在附近，我能感受到它的能量！可恶，米咔你千万不能有事啊！"],["队长，我们再继续找找！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["米咔，如果你知道我来了，就给我点指引，我一定会想办法带你离开这里的！"],["米咔，你在哪里啊！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["米咔，大家快来！我找到米咔了，它被困在冰柱中了！"],["什么，找到了？"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["太好了，只要将冰柱融化，米咔就有救了！看上去米咔已经支持不了多久了！"],["让我来！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["出来，我知道是你，你要是不放了米咔，我们今天就和你拼了，别逼我踏平这里！"],["个子小，口气倒很大嘛！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.SHENSHENGSHIEZHE,["我说过想要拯救你的伙伴，就把迈尔斯带到这里来！看来是你们食言。你们这样的行为，神是无法原谅你们的！"],["哼，就知道你一定不怀好意！"],[function():void
                                             {
                                                NpcDialog.show(NPC.SHENSHENGSHIEZHE,["那就别怪我不客气了，我要让你们的朋友，永远留在冰柱中！"],["不，不准你伤害米咔！"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                                                   {
                                                      TasksManager.complete(TASK_ID,1,function(param1:Boolean = true):void
                                                      {
                                                         if(param1)
                                                         {
                                                            SocketConnection.send(1022,84494465);
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
         taskMC.gotoAndStop(15);
         NpcDialog.show(NPC.SHENSHENGSHIEZHE,["可恶，你们居然在我的领域发号施令，看我不好好收拾你们！在这里，我就是神！"],["我们不会让你得逞的！"],[function():void
         {
            NpcDialog.show(NPC.YOUNIKA,["尤米娜，我现在开始回想起过去的一些片段，我好像真的有你这样一个妹妹！"],["哥哥，你清醒了吗？"],[function():void
            {
               NpcDialog.show(NPC.YOUNIKA,["让我们兄妹一起联手，干掉神圣使者，还宇宙和平吧！"],["好奇怪的尤尼卡！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
                  {
                     NpcDialog.show(NPC.SHENSHENGSHIEZHE,["那就让你们尝尝天使与恶魔恐怖的瞬间吧！千万别眨眼，因为胜负就在一瞬间！"],["大家一起上！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1160_3"),function():void
                        {
                           taskMC.gotoAndStop(16);
                           NpcDialog.show(NPC.LEIYI,["大家的力量果然强大，否则是不可能击败神圣使者的！"],["雷伊，幸好有你掌控局面啊！"],[function():void
                           {
                              NpcDialog.show(NPC.LEIYI,["当然这次也要感谢尤尼卡的帮助！尤米娜，你的哥哥真的清醒了吗？"],["我想应该是的！"],[function():void
                              {
                                 NpcDialog.show(NPC.YUMINA,["哥哥，放弃这里的一切，和我回米娜村去吧！那里的伙伴都很想念你！"],["啊哈哈哈哈！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.YUMINA,["哥哥，你怎么了，刚才你还好好的，怎么现在变了一个样子！"],["蠢货，一群蠢货！"],[function():void
                                       {
                                          NpcDialog.show(NPC.YOUNIKA,["你们都中了我的计，现在我最大的绊脚石已经不在了，现在我就是恶魔星最大的统治者！"],["什么，尤尼卡你..."],[function():void
                                          {
                                             NpcDialog.show(NPC.LEIYI,["你居然连自己最亲的妹妹都能欺骗，这是我无法容忍的，尤尼卡我一定要秒杀你！"],["等等，雷神！"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                                                {
                                                   NpcDialog.show(NPC.YOUNIKA,["我在第八领域等着你们，后会有期！"],null,null,false,function():void
                                                   {
                                                      AnimateManager.playMcAnimate(taskMC,18,"mc",function():void
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
                  });
               }]);
            }]);
         }]);
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(19);
         NpcDialog.show(NPC.YUMINA,["看来用亲情是无法感动哥哥了，那么只剩下一个方法，我要突破接下来的几大领域，我要击败哥哥！！！"],["什么？尤米娜，你想！！"],[function():void
         {
            NpcDialog.show(NPC.YUMINA,["只有我击败了哥哥，才能让他心甘情愿的跟我回去，为了他我愿意尝试！"],["尤米娜，我们支持你！"],[function():void
            {
               NpcDialog.show(NPC.LEIYI,["需要帮助就来赫尔卡星找我，我们战神联盟一定会出手相助的！"],["我迈尔斯也是！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,19,"mc",function():void
                  {
                     NpcDialog.show(NPC.YUMINA,["我要用自己的行动证明给哥哥看，我是正确的！伙伴们，咱们有缘再见！"],["尤尼卡竟然有这样的妹妹！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,20,"mc",function():void
                        {
                           NpcDialog.show(NPC.SEER,["我一定把这个情况告诉队长，原来尤尼卡的邪念一直都没有散去！"],["赛尔..."],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,21,"mc",function():void
                              {
                                 NpcDialog.show(NPC.GELIN,["大事不好了！布鲁失踪了，这可怎么办啊！赛尔，你能去落日泥沼看看吗？"],["什么，布鲁失踪了？"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,22,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["看来我的任务又开始了，布鲁，我这就来拯救你！"],["前往落日泥沼！"],[function():void
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
                  });
               }]);
            }]);
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 756 && Boolean(_map.conLevel["task1160MC"]))
         {
            return _map.conLevel["task1160MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 756)
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
