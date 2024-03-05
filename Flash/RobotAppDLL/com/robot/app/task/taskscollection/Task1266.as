package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1266;
   import com.robot.app.task.petstory.util.KTool;
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
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1266
   {
      
      public static const TASK_ID:int = 1266;
      
      private static var _map10:BaseMapProcess;
      
      private static var _map791:BaseMapProcess;
      
      private static var _haveHead:Boolean;
      
      private static var _haveArmor:Boolean;
      
      private static var _haveFoot:Boolean;
      
      private static var _dressedHead:Boolean;
      
      private static var _dressedArmor:Boolean;
      
      private static var _dressedFoot:Boolean;
       
      
      public function Task1266()
      {
         super();
      }
      
      public static function get taskMC() : MovieClip
      {
         return _map10.conLevel["task1266mc"] as MovieClip;
      }
      
      public static function get taskMC2() : MovieClip
      {
         return _map791.conLevel["task1266mc"] as MovieClip;
      }
      
      public static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TASK_ID);
      }
      
      public static function initForMap10(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map10 = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1266.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  MainManager.selfVisible = false;
                  step0();
               }
               else
               {
                  destory();
               }
            });
         }
         else
         {
            destory();
         }
      }
      
      public static function initForMap791(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map791 = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1266.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskMC2.visible = false;
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  MainManager.selfVisible = false;
                  CommonUI.addYellowExcal(_map791.topLevel,659,92);
                  taskMC2.buttonMode = true;
                  taskMC2.addEventListener(MouseEvent.CLICK,step1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  MainManager.selfVisible = false;
                  CommonUI.addYellowExcal(_map791.topLevel,370,88);
                  taskMC2.buttonMode = true;
                  taskMC2.addEventListener(MouseEvent.CLICK,step2);
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  step3();
               }
               else
               {
                  destory();
               }
            });
         }
         else
         {
            destory();
         }
      }
      
      public static function step0() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         MainManager.selfVisible = false;
         AnimateManager.playMcAnimate(taskMC,1,"mc1",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["⊙﹏⊙，米咔！连你也跟着胡闹！奥莱德太不靠谱了，这样的队伍怎么可能打败拉摩斯呢！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.ATIEDA,["哈哈，这南瓜有点对我的胃口！"],["……"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
                  {
                     NpcDialog.show(NPC.AOLAIDE,["阿铁打，你难道忘记了被关在笼子中的耻辱了吗？"],["！！！"],[function():void
                     {
                        NpcDialog.show(NPC.ATIEDA,["哇呀呀，我想起来了！士可杀不可辱，我一定要教训那只猫！"],["（好像说到了阿铁打的痛处……）"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                           {
                              NpcDialog.show(NPC.AOLAIDE,["哈！拉摩斯，本瓜爷正准备去找你，没想到你倒送上门来了！你的末日来到了！"],["喵！"],[function():void
                              {
                                 NpcDialog.show(NPC.LAMOSI,["喵！老虎不发威，你当我是病猫啊！！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.BIMOLA_NORMOL,["噗嘶嘶！拉摩斯，你本来就是只猫嘛！"],["闭嘴！比莫拉！"],[function():void
                                    {
                                       NpcDialog.show(NPC.LAMOSI,["奥莱德！我能打败你一次，就能打败你两次，你要来，就来吧！我在光之南瓜角斗场等着你！"],null,null,false,function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                                          {
                                             TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                             {
                                                if(true == param1)
                                                {
                                                   MapManager.changeMap(791);
                                                }
                                             });
                                          });
                                       });
                                    }]);
                                 });
                              }]);
                           });
                        }]);
                     }]);
                  });
               }]);
            });
         });
      }
      
      public static function step1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         KTool.hideMapAllPlayerAndMonster();
         MainManager.selfVisible = false;
         CommonUI.removeYellowExcal(_map791.topLevel);
         NpcDialog.show(NPC.SAIXIAOXI,["这里就是拉摩斯所说的角斗场？果然是一个决斗的好地方！"],["看！奥莱特和拉摩斯各就各位了！"],[function():void
         {
            NpcDialog.show(NPC.AOLAIDE,["拉摩斯！你抢了我万圣王的称号！霸占我的家园！最可恶的是，还打了我的脸！"],["（原来你最耿耿于怀的是脸被打了）"],[function():void
            {
               NpcDialog.show(NPC.AOLAIDE,["今天我一定要好好的教训你！"],["喵！"],[function():void
               {
                  NpcDialog.show(NPC.LAMOSI,["笨南瓜，好了伤疤忘了疼！是南瓜还是西瓜，滚出来溜溜！"],["等一下！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC2,1,"mc1",function():void
                     {
                        NpcDialog.show(NPC.LAMOSI,["……你哪里有腰！严肃点！我们这里决斗呢！"],["我在等你出手呢！"],[function():void
                        {
                           NpcDialog.show(NPC.LAMOSI,["喵！我要把你打成南瓜酱！"],["哼哼！"],[function():void
                           {
                              NpcDialog.show(NPC.AOLAIDE,["你会是条好毯子的，小猫咪！"],null,null,false,function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1266_1"),function():void
                                 {
                                    NpcDialog.show(NPC.AOLAIDE,["哈哈，一不小心太投入了，没弄伤你吧，小猫咪!"],["可恶！"],[function():void
                                    {
                                       TasksManager.complete(TASK_ID,1,function(param1:Boolean = true):void
                                       {
                                          if(true == param1)
                                          {
                                             CommonUI.addYellowExcal(_map791.topLevel,370,88);
                                             taskMC2.removeEventListener(MouseEvent.CLICK,step1);
                                             taskMC2.removeEventListener(MouseEvent.CLICK,step2);
                                             taskMC2.addEventListener(MouseEvent.CLICK,step2);
                                          }
                                       });
                                    }]);
                                 });
                              });
                           }]);
                        }]);
                     });
                  }]);
               }]);
            }]);
         }]);
      }
      
      public static function step2(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 32
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function step3() : void
      {
         taskMC2.gotoAndStop(9);
         KTool.hideMapAllPlayerAndMonster();
         MainManager.selfVisible = false;
         NpcDialog.show(NPC.AOWEIZI,["身无彩蝠双飞翼，心有灵犀一点通！"],null,null,false,function():void
         {
            AnimateManager.playMcAnimate(taskMC2,9,"mc9",function():void
            {
               NpcDialog.show(NPC.AOWEIZI,["彩翼蝠王在此！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["啊，你来的太及时了！奥莱德被那个幽灵抓住了！咱们得帮帮它！"],["好说"],[function():void
                  {
                     NpcDialog.show(NPC.AOWEIZI,["包在我身上，不过，你们得帮个忙！ "],["什么忙？"],[function():void
                     {
                        NpcDialog.show(NPC.ATIEDA,["不会，又要破解什么奇怪的机关吧？ "],["答对了！"],[function():void
                        {
                           NpcDialog.show(NPC.AOWEIZI,["破解阴谋是我的强项，破解机关不是我的强项，你们来吧！"],null,null,false,function():void
                           {
                              ModuleManager.showModule(ClientConfig.getTaskModule("SevenStarPanel"));
                           });
                        }]);
                     }]);
                  }]);
               });
            });
         });
      }
      
      public static function continueInteractive() : void
      {
         NpcDialog.show(NPC.AOWEIZI,["破解阴谋是我的强项，破解机关不是我的强项，你们来吧！"],null,null,false,function():void
         {
            ModuleManager.showModule(ClientConfig.getTaskModule("SevenStarPanel"));
         });
      }
      
      public static function continueStep3() : void
      {
         taskMC2.gotoAndStop(10);
         AnimateManager.playMcAnimate(taskMC2,10,"mc10",function():void
         {
            NpcDialog.show(NPC.LAMOSI,["喵！可恶！你又来坏我好事！"],["你没想到吧！"],[function():void
            {
               NpcDialog.show(NPC.AOWEIZI,["拉摩斯！你勾结海盗，利用我蝙蝠一族的子民制造恐怖事件！我身为蝙蝠一族千年难得一见的奇才，怎会坐视不管？"],null,null,false,function():void
               {
                  CartoonManager.play(ClientConfig.getFullMovie("cartoon/task1266_1"),function():void
                  {
                     AnimateManager.playMcAnimate(taskMC2,11,"mc11",function():void
                     {
                        NpcDialog.show(NPC.LAMOSI,["哼！蝙蝠也好！南瓜也罢！你们是一起上！还是一个一个来？"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.AOLAIDE,["我们才不会和你一样卑鄙，我要和你单挑！我要堂堂正正的夺回万圣王的称号！"],["好！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC2,12,"mc12",function():void
                              {
                                 NpcDialog.show(NPC.AOLAIDE,["小息，赛尔，谢谢你们啦！剩下的，就让我自己来吧！我和我的蝙蝠老弟得去叙叙旧了！"],["好！回头见！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC2,13,"mc13",function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["下一次，奥莱德和拉摩斯的猫瓜大战一定精彩无比，我们先回去和船长汇报啦！赛尔，船上见！"],["好！回头见！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC2,14,"mc14",function():void
                                          {
                                             checkSuit();
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
            TasksManager.complete(TASK_ID,3,function():void
            {
               var _loc1_:Array = null;
               if(_dressedHead || _dressedArmor || _dressedFoot)
               {
                  _loc1_ = [new PeopleItemInfo(1300161),new PeopleItemInfo(1300162),new PeopleItemInfo(1300163)];
                  MainManager.actorModel.execBehavior(new ChangeClothBehavior(_loc1_));
                  MainManager.actorInfo.clothes = _loc1_;
               }
               destory();
            });
         }
      }
      
      public static function destory() : void
      {
         KTool.showMapPlayerAndMonster();
         MainManager.selfVisible = true;
         ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,onItem_Cloth);
         SocketConnection.removeCmdListener(CommandID.ITEM_SALE,onHeadSuccess);
         SocketConnection.removeCmdListener(CommandID.ITEM_SALE,onArmorSuccess);
         SocketConnection.removeCmdListener(CommandID.ITEM_SALE,onFootSuccess);
         if(MapManager.currentMap.id == 10)
         {
            DisplayUtil.removeForParent(taskMC);
            ToolTipManager.remove(taskMC);
            _map10 = null;
         }
         if(MapManager.currentMap.id == 791 && Boolean(_map791))
         {
            taskMC2.removeEventListener(MouseEvent.CLICK,step1);
            taskMC2.removeEventListener(MouseEvent.CLICK,step2);
            DisplayUtil.removeForParent(taskMC2);
            ToolTipManager.remove(taskMC2);
            _map791 = null;
         }
      }
   }
}
