package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1254;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
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
   
   public class Task1254
   {
      
      private static var _haveHead:Boolean;
      
      private static var _haveArmor:Boolean;
      
      private static var _haveFoot:Boolean;
      
      private static var _dressedHead:Boolean;
      
      private static var _dressedArmor:Boolean;
      
      private static var _dressedFoot:Boolean;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1254()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["task1254mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1254.TASK_ID);
      }
      
      public static function initForMap784(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         DisplayUtil.stopAllMovieClip(taskMC);
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1254.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startStep();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  taskMC.addEventListener(MouseEvent.CLICK,step1_1);
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
      
      public static function initForMap786(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.buttonMode = true;
         DisplayUtil.stopAllMovieClip(taskMC);
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1254.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[1]) && !param1[2])
               {
                  taskMC.addEventListener(MouseEvent.CLICK,step2_1);
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  ToolTipManager.add(taskMC,"点击小息队长继续任务哦");
               }
               else if(Boolean(param1[2]) && !param1[3])
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
      
      public static function startStep() : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         ToolTipManager.add(taskMC,"点击拉摩斯继续任务哦");
         taskMC.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
         {
            var e:MouseEvent = param1;
            ToolTipManager.remove(taskMC);
            taskMC.removeEventListener(MouseEvent.CLICK,arguments.callee);
            AnimateManager.playMcAnimate(taskMC,2,"mc1",function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["糟糕！阿铁打你太鲁莽了！这下我们还没准备好就遇到了这几个恐怖的家伙！"],["哼！我才不怕它们！"],[function():void
               {
                  NpcDialog.show(NPC.ATIEDA,["反正邪不胜正！事到如今，躲也躲不了啦！就让我们看看这些恶灵兽的爪牙究竟有什么本事吧！"],["阿铁打！小心！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,3,"mc2",function():void
                     {
                        NpcDialog.show(NPC.LAMOSI,["这位绿色的小朋友，遇到坏人这么冲动可是很危险的哦喵！"],["你到底是什么鬼怪！"],[function():void
                        {
                           NpcDialog.show(NPC.LAMOSI,["鬼怪？是个好词儿，嘻嘻……"],["哈哈哈"],[function():void
                           {
                              NpcDialog.show(NPC.BIMOLA,["拉摩斯，他们说你鬼怪！哇哈哈哈！"],["闭嘴，比莫拉！"],[function():void
                              {
                                 NpcDialog.show(NPC.LAMOSI,["敢如此小看我万圣将军，我要生气了喵"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.BIMOLA,["嘶嘶！别生气嘛猫哥哥，纳斯琪，来给这些小鬼一点苦头吃吃吧！"],["你想做什么！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,4,"mc3",function():void
                                       {
                                          NpcDialog.show(NPC.BIMOLA,["拉摩斯，你什么意思，为什么要保护他们？"],null,null,false,function():void
                                          {
                                             TasksManager.complete(TaskController_1254.TASK_ID,0,function(param1:Boolean):void
                                             {
                                                if(param1)
                                                {
                                                   step1_1();
                                                }
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
      
      private static function step1_1(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1254_1"),function():void
         {
            taskMC.gotoAndStop(5);
            NpcDialog.show(NPC.SAIXIAOXI,["555，阿铁打——拉摩斯！把阿铁打还给我！"],["喵！"],[function():void
            {
               NpcDialog.show(NPC.LAMOSI,["不要着急嘛！只要你乖乖的去给我找到救世主，我一定还给你一个毫无发伤的伙伴！"],["你好卑鄙！"],[function():void
               {
                  NpcDialog.show(NPC.LAMOSI,["喵嘻嘻嘻，那就这样吧！我会在我的南瓜地宫等你的好消息，不要让我失望哦！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,5,"mc4",function():void
                     {
                        NpcDialog.show(NPC.KALULU,["怎么办？难道我们真的要帮它去找救世主吗？"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["寻找救世主是麒麟的嘱托，但是就是找到了我们也不能让救世主落到坏人手里！"],["嗯嗯，一定！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["刚才拉摩斯说它的老窝是什么南瓜地宫，阿铁打会不会被带到那里去了！"],["肯定是的！"],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["就是龙潭虎穴，也要去闯一闯！就是刀山火海，也不能阻止我去救阿铁打！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.KALULU,["冷静点小息，我们先来搜索一下拉摩斯的去向！"],null,null,false,function():void
                                    {
                                       ModuleManager.showModule(ClientConfig.getTaskModule("TaskInteractive_1254_1"));
                                    });
                                 });
                              }]);
                           }]);
                        });
                     });
                  });
               }]);
            }]);
         },false);
      }
      
      public static function step1_2() : void
      {
         NpcDialog.show(NPC.SEER,["原来在螺旋星系还隐藏了一个这么奇怪的星球！事不宜迟，我们快点出发吧！"],["阿铁打！坚持住！我们来救你了！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1254_2"),function():void
            {
               TasksManager.complete(TaskController_1254.TASK_ID,1,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     MapManager.changeMap(786);
                  }
               });
            });
         }]);
      }
      
      private static function step2_1(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 29
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function step2_2() : void
      {
         AnimateManager.playMcAnimate(taskMC,9,"mc8",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["清醒点阿铁打！是我们！"],["哈？小息！"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["阿铁打，你是怎么到这里的？"],["我也不知道"],[function():void
               {
                  NpcDialog.show(NPC.ATIEDA,["我感觉眼前一黑就稀里糊涂的给抓来关了起来，那拉摩斯还说什么要我死心塌地的做它的囚犯！气死我了！"],["现在我们怎么做？"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["队长，现在我们怎么办？是继续探索还是撤退啊！"],["等一下，有总部发来的信号！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1254_3"),function():void
                        {
                           TasksManager.complete(TaskController_1254.TASK_ID,2,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 step3();
                              }
                           });
                        });
                     }]);
                  }]);
               }]);
            }]);
         });
      }
      
      private static function step3() : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.SHIPER,["你看到了！拉摩斯的能力非常古怪，似乎能免疫别人的攻击！"],["嗯，阿铁打攻击它也无效！"],[function():void
         {
            NpcDialog.show(NPC.SHIPER,["木木已经联系过我们了，把你们送到恶灵深渊是麒麟的指示！用意就是让你们接近三巨头找出它们的弱点！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["我知道啦船长！我们现在正在拉摩斯的老窝里呢！趁它们被战神联盟牵制住了，我这就去看看它藏了什么秘密！"],["好的！万事小心！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,10,"mc9",function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["那个拉摩斯不可能刀枪不入，它肯定有什么阴险的秘密！我们四处找找！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.KALULU,["刚才路上我发现了一个奇怪的地方，因为急着救阿铁打没仔细看！"],["在哪里，我们去看看！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,11,"mc10",function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["哇！这有两扇好大的门！这里面是什么地方？"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.KALULU,["刚才的狼叫声似乎就是从这里传出来的……咦门上有字！"],null,null,false,function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,12,"mc11",function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["藏宝室！哈哈！踏破铁鞋无觅处，得来全不费功夫！竟然给我们找到了万圣将军的藏宝室！里面一定有好宝贝！"],["不要冲动"],[function():void
                                       {
                                          NpcDialog.show(NPC.ATIEDA,["刚才卡璐璐说里面有狼叫声！没准有什么守卫宝藏的狼人！这开了门也许就是一场大战！"],["哈，阿铁打！你变小心了嘛！"],[function():void
                                          {
                                             NpcDialog.show(NPC.SAIXIAOXI,["好的！我们先回去报告一下！准备充分了再来看看拉摩斯的藏宝室里有什么好东东！"],null,null,false,function():void
                                             {
                                                AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1254_4"),function():void
                                                {
                                                   checkSuit();
                                                },false);
                                             });
                                          }]);
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
         }]);
      }
      
      private static function checkSuit() : void
      {
         ItemManager.addEventListener(ItemEvent.CLOTH_LIST,onItem_Cloth);
         ItemManager.getCloth();
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
            TasksManager.complete(TaskController_1254.TASK_ID,3,function(param1:Boolean):void
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
               }
            });
         }
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            MainManager.selfVisible = true;
            ToolBarController.showOrHideAllUser(true);
            DisplayUtil.removeForParent(taskMC);
            ToolTipManager.remove(taskMC);
            taskMC.removeEventListener(MouseEvent.CLICK,step1_1);
            taskMC.removeEventListener(MouseEvent.CLICK,step2_1);
            _map = null;
         }
      }
   }
}
