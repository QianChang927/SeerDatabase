package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1260;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.behavior.ChangeClothBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1260
   {
      
      private static var _haveHead:Boolean;
      
      private static var _haveArmor:Boolean;
      
      private static var _haveFoot:Boolean;
      
      private static var _dressedHead:Boolean;
      
      private static var _dressedArmor:Boolean;
      
      private static var _dressedFoot:Boolean;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1260()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["task1260mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1260.TASK_ID);
      }
      
      public static function initForMap786(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         DisplayUtil.stopAllMovieClip(taskMC);
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1260.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskMC.addEventListener(MouseEvent.CLICK,startStep);
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  step1();
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
      
      public static function initForMap789(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         DisplayUtil.stopAllMovieClip(taskMC);
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1260.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  taskMC.addEventListener(MouseEvent.CLICK,step2_1);
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  endStep_1();
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
      
      private static function startStep(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 31
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function step1() : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playMcAnimate(taskMC,6,"mc5",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["什么人！"],["噗噜噗噜！"],[function():void
            {
               NpcDialog.show(NPC.AOWEIZI,["噗噜噗噜！我是！在黑夜飞翔的恐怖！"],["不好！是敌人！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,7,"mc6",function():void
                  {
                     NpcDialog.show(NPC.AOWEIZI,["噗噜噗噜！别开枪！我是个好人！"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1260_1"),function():void
                        {
                           taskMC.gotoAndStop(8);
                           taskMC.addEventListener(MouseEvent.CLICK,function():void
                           {
                              taskMC.removeEventListener(MouseEvent.CLICK,arguments.callee);
                              NpcDialog.show(NPC.KALULU,["总觉得这个蝙蝠很不靠谱的样子！"],["喵！"],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["我刚才看见它的牙齿了！它应该是个吸血蝙蝠！它是想把我们引进去然后抓起来做晚餐吧！"],["拜托"],[function():void
                                 {
                                    NpcDialog.show(NPC.SEER,["队长，你是机器人……根本就没血可吸，除非这个蝙蝠是吸油蝙蝠……"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["万一它瞄准的是米咔呢！米咔可是我的宝贝，决不能让它吃掉！"],["……"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,8,"mc7",function():void
                                          {
                                             TasksManager.complete(TaskController_1260.TASK_ID,1,function(param1:Boolean):void
                                             {
                                                if(param1)
                                                {
                                                   MapManager.changeMap(789);
                                                }
                                             });
                                          });
                                       }]);
                                    });
                                 }]);
                              }]);
                           });
                        },false);
                     });
                  });
               }]);
            }]);
         });
      }
      
      private static function step2_1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playMcAnimate(taskMC,2,"mc1",function():void
         {
            NpcDialog.show(NPC.AOWEIZI,["这些小棺材里除了幽灵还是幽灵！如果你们真想得到拉摩斯的宝藏，就去里面打开那个超大号的宝箱吧！"],["哇！果然有个大宝箱！"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["哈哈，看样子里面就有不少好料！这下要发财了！"],["等一下！"],[function():void
               {
                  NpcDialog.show(NPC.ATIEDA,["小息，别上当！要是真有宝藏！这只蝙蝠自己为什么不拿？我看是陷阱！"],["噗噜！"],[function():void
                  {
                     NpcDialog.show(NPC.AOWEIZI,["我要是能拿我早就拿了！主要是因为那个宝箱是有一个机关的！我这么有身份的蝙蝠当然不屑去破解机关了！"],null,null,false,function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,3,"mc2",function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["哼哼！我们赛尔先锋队一路披荆斩棘，什么机关没见过！碰到我们算你运气好！看我们的吧！"],["恩！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,4,"mc3",function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["果然有点门道！伙伴们，让我们一起开动脑筋来解开这个机关！"],["好！"],[function():void
                                 {
                                    ModuleManager.showModule(ClientConfig.getTaskModule("TaskInteractive_1260_1"));
                                 }]);
                              });
                           }]);
                        });
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      public static function step2_2() : void
      {
         AnimateManager.playMcAnimate(taskMC,5,"mc4",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["哈？！祭、祭品？！这这这果然是陷阱，大家小心！"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(taskMC,6,"mc5",function():void
               {
                  NpcDialog.show(NPC.AOLAIDE_SPECIAL,["呼呼！重见天日的感觉真好！那只坏猫拉摩斯把我关在这么闷的棺材里，是想把我闷熟吗！"],["你是谁？"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,7,"mc6",function():void
                     {
                        NpcDialog.show(NPC.AOWEIZI,["别着急别着急！我实在是没办法嘛！"],["呼呼！"],[function():void
                        {
                           NpcDialog.show(NPC.AOLAIDE_SPECIAL,["能营救我是你们的荣幸！我可是伟大的万圣王！"],["你是万圣王？"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["拉摩斯也说它是万圣王啊……"],["它是假的！"],[function():void
                              {
                                 CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_1260_1"),function():void
                                 {
                                    NpcDialog.show(NPC.AOLAIDE_SPECIAL,["后来我的记忆渐渐的恢复了！拉摩斯怕我对抗它，就把我关了起来，现在看起来是想把我闷熟了吃掉！"],["等等"],[function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["你说拉摩斯害怕你？它这么轻易就把你抓起来了干嘛要害怕你啊！"],["这说来话就长了！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,8,"mc7",function():void
                                          {
                                             TasksManager.complete(TaskController_1260.TASK_ID,2,function(param1:Boolean):void
                                             {
                                                if(param1)
                                                {
                                                   endStep_1();
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
                  }]);
               });
            });
         });
      }
      
      private static function endStep_1() : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.SAIXIAOXI,["哈？！你？你你你就是救救救世主？"],["队长激动的都结巴了！"],[function():void
         {
            NpcDialog.show(NPC.AOLAIDE_SPECIAL,["只有在每年的万圣节期间，我才能发挥出100%的实力！变身为宇宙超级霹雳无敌的——南瓜！"],["原来如此！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,9,"mc8",function():void
               {
                  NpcDialog.show(NPC.AOLAIDE_SPECIAL,["竟然这么直接，太不给我面子了！不过，本万圣王恰好就知道一个很有用的情报！"],["什么情报?"],[function():void
                  {
                     NpcDialog.show(NPC.AOLAIDE_SPECIAL,["我知道拉摩斯刀枪不入的秘密！"],["啊！这可是个关键！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["连雷伊都拿它没办法！这能力太强大了！你有什么办法吗？"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.AOLAIDE_SPECIAL,["这其实不是拉摩斯的能力！"],["啊，那是谁的能力？"],[function():void
                           {
                              NpcDialog.show(NPC.AOLAIDE_SPECIAL,["是恶灵兽给拉摩斯加持的邪恶护佑！只要破除了邪恶护佑，拉摩斯的绝对防御就会瓦解！"],["原来如此，那护佑在哪里呢？"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,10,"mc9",function():void
                                 {
                                    NpcDialog.show(NPC.AOLAIDE_SPECIAL,["拉摩斯因为怕法阵被人轻易找到，就借助恶灵兽的力量把法阵藏在了镜子里！这是我的地盘，它们怎么可能瞒得了我！"],["伙伴们！让我们来破除这个法阵！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,11,"mc10",function():void
                                       {
                                          NpcDialog.show(NPC.AOWEIZI,["糟了，是幽灵家族的人！"],["幽灵家族？"],[function():void
                                          {
                                             NpcDialog.show(NPC.AOWEIZI,["万圣节有四大家族，分别是南瓜、黑猫、蝙蝠和幽灵！黑猫一族和幽灵一族一直是盟友的关系！"],["好复杂，你和南瓜也是盟友喽？"],[function():void
                                             {
                                                NpcDialog.show(NPC.AOWEIZI,["不错，好吧！帮人帮到底！"],null,null,false,function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,12,"mc11",function():void
                                                   {
                                                      NpcDialog.show(NPC.AOWEIZI,["臭幽灵，还真有点本事！咳！我的翅膀受伤了！快破解法阵吧！"],["你为了朋友可真拼命啊！剩下的交给我们吧！"],[function():void
                                                      {
                                                         ModuleManager.showModule(ClientConfig.getTaskModule("TaskInteractive_1260_2"));
                                                      }]);
                                                   });
                                                });
                                             }]);
                                          }]);
                                       });
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
      }
      
      public static function endStep_2() : void
      {
         AnimateManager.playMcAnimate(taskMC,13,"mc12",function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1260_2"),function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1260_3"),function():void
               {
                  AnimateManager.playMcAnimate(taskMC,14,"mc13",function():void
                  {
                     NpcDialog.show(NPC.AOWEIZI,["噗噜！噗噜！拉摩斯，别来无恙啊！这几位都是我的朋友，我们要走了，你没有意见吧？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.LAMOSI,["……（竟然有这个家伙，算了，不能坏了计划）好吧，这次就放过你们！"],["噗噜！谢谢你啦！"],[function():void
                        {
                           NpcDialog.show(NPC.AOWEIZI,["这里毕竟是拉摩斯的领域，我们先离开这里吧！"],["也好！"],[function():void
                           {
                              NpcDialog.show(NPC.AOLAIDE_SPECIAL,["拉摩斯，咱俩的账等万圣节再算！万圣王的称号，我一定会自己拿回来！"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,15,"mc14",function():void
                                 {
                                    NpcDialog.show(NPC.LAMOSI,["那就看你们有没有那个本事了！喵！"],null,null,false,function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,16,"mc15",function():void
                                       {
                                          AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1260_4"),function():void
                                          {
                                             checkSuit();
                                          },false);
                                       });
                                    });
                                 });
                              });
                           }]);
                        }]);
                     });
                  });
               });
            },false);
         });
      }
      
      private static function checkSuit() : void
      {
         TasksManager.complete(TaskController_1260.TASK_ID,3,function(param1:Boolean):void
         {
            if(param1)
            {
               destroy();
               MainManager.selfVisible = true;
               ToolBarController.showOrHideAllUser(true);
            }
         });
      }
      
      private static function onItem_Cloth(param1:ItemEvent) : void
      {
         var _loc2_:Array = null;
         ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,onItem_Cloth);
         if(ItemManager.containsCloth(1300161))
         {
            _haveHead = true;
         }
         else
         {
            _haveHead = false;
         }
         if(MainManager.actorInfo.clothIDs.indexOf(1300161) > -1)
         {
            _dressedHead = true;
         }
         else
         {
            _dressedHead = false;
         }
         if(ItemManager.containsCloth(1300162))
         {
            _haveArmor = true;
         }
         else
         {
            _haveArmor = false;
         }
         if(MainManager.actorInfo.clothIDs.indexOf(1300162) > -1)
         {
            _dressedArmor = true;
         }
         else
         {
            _dressedArmor = false;
         }
         if(ItemManager.containsCloth(1300163))
         {
            _haveFoot = true;
         }
         else
         {
            _haveFoot = false;
         }
         if(MainManager.actorInfo.clothIDs.indexOf(1300163) > -1)
         {
            _dressedFoot = true;
         }
         else
         {
            _dressedFoot = false;
         }
         if(_dressedHead || _dressedArmor || _haveFoot)
         {
            _loc2_ = [];
            MainManager.actorModel.execBehavior(new ChangeClothBehavior(_loc2_));
            MainManager.actorInfo.clothes = _loc2_;
         }
         if(_haveHead)
         {
            SocketConnection.addCmdListener(CommandID.ITEM_SALE,onHeadSuccess);
            SocketConnection.send(CommandID.ITEM_SALE,1300161,1);
         }
         if(_haveArmor)
         {
            SocketConnection.addCmdListener(CommandID.ITEM_SALE,onArmorSuccess);
            SocketConnection.send(CommandID.ITEM_SALE,1300162,1);
         }
         if(_haveFoot)
         {
            SocketConnection.addCmdListener(CommandID.ITEM_SALE,onFootSuccess);
            SocketConnection.send(CommandID.ITEM_SALE,1300163,1);
         }
         finishTask();
      }
      
      private static function onHeadSuccess(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ITEM_SALE,onHeadSuccess);
         _haveHead = false;
         finishTask();
      }
      
      private static function onArmorSuccess(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ITEM_SALE,onArmorSuccess);
         _haveArmor = false;
         finishTask();
      }
      
      private static function onFootSuccess(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ITEM_SALE,onFootSuccess);
         _haveFoot = false;
         finishTask();
      }
      
      private static function finishTask() : void
      {
         if(!_haveHead && !_haveArmor && !_haveFoot)
         {
            TasksManager.complete(TaskController_1260.TASK_ID,3,function(param1:Boolean):void
            {
               var _loc2_:Array = null;
               if(param1)
               {
                  if(_dressedHead || _dressedArmor || _dressedFoot)
                  {
                     _loc2_ = [new PeopleItemInfo(1300161),new PeopleItemInfo(1300162),new PeopleItemInfo(1300163)];
                     MainManager.actorModel.execBehavior(new ChangeClothBehavior(_loc2_));
                     MainManager.actorInfo.clothes = _loc2_;
                  }
                  destroy();
                  MainManager.selfVisible = true;
                  ToolBarController.showOrHideAllUser(true);
               }
            });
         }
      }
      
      public static function destroy() : void
      {
         ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,onItem_Cloth);
         SocketConnection.removeCmdListener(CommandID.ITEM_SALE,onHeadSuccess);
         SocketConnection.removeCmdListener(CommandID.ITEM_SALE,onArmorSuccess);
         SocketConnection.removeCmdListener(CommandID.ITEM_SALE,onFootSuccess);
         if(_map)
         {
            MainManager.selfVisible = true;
            ToolBarController.showOrHideAllUser(true);
            DisplayUtil.removeForParent(taskMC);
            ToolTipManager.remove(taskMC);
            taskMC.removeEventListener(MouseEvent.CLICK,startStep);
            taskMC.removeEventListener(MouseEvent.CLICK,step2_1);
            _map = null;
         }
      }
   }
}
