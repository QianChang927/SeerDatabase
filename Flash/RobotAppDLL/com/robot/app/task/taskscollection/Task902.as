package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_902;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task902
   {
      
      public static var _map:BaseMapProcess;
       
      
      public function Task902()
      {
         super();
      }
      
      public static function initForMap698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ToolBarController.showOrHideAllUser(false);
         _map.depthLevel["task902mc"].visible = false;
         _map.conLevel["task899mc"]["mika"].visible = false;
         _map.conLevel["task899mc"]["atieda"].visible = true;
         if(TasksManager.getTaskStatus(TaskController_902.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.hideNpc(113);
         }
         if(TasksManager.getTaskStatus(TaskController_902.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_902.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.hideNpc(113);
               }
               if(Boolean(param1[0]) && !param1[1])
               {
                  initStep1();
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
      
      public static function initForMap706(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_902.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_902.TASK_ID,function(param1:Array):void
            {
               ToolBarController.showOrHideAllUser(false);
               OgreController.isShow = false;
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
                  initStep5();
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
      
      private static function initStep1() : void
      {
         NpcDialog.show(NPC.SEER,["恩恩，经历过上次的磨难，我们之间的情谊又加深了不少，这次我们再次踏上巨石星冒险，大家可要打起精神，决不能再让任何一个伙伴再受到伤害！"],["没问题！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_902_2"),function():void
            {
               NpcController.hideNpc(113);
               _map.depthLevel["task902mc"].visible = true;
               NpcDialog.show(NPC.SEER,["看来赛小息的短路问题还是很严重啊！卡璐璐你快看一下赛小息的伤势如何！"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_902_3"),function():void
                  {
                     NpcDialog.show(NPC.KALULU,["从分析图来看，赛小息受到的重创还是很严重，目前出现多处短路，放心，交给我来处理！你们还是先去巨石星支援吧！如果能帮赛小息恢复，我们随后就到！"],["恩恩，有事记得联线我们！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["好的，我们一言为定！阿铁打，我们走！"],["前往巨石星"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_902_4"),function():void
                           {
                              TasksManager.complete(TaskController_902.TASK_ID,1,function():void
                              {
                                 NpcController.showNpc(113);
                                 MapManager.changeMap(706);
                              });
                           });
                        }]);
                     }]);
                  });
               });
            });
         }]);
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(1);
         taskMC.addEventListener(MouseEvent.CLICK,onLaQiClicked_2);
         taskMC.buttonMode = true;
      }
      
      private static function onLaQiClicked_2(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 25
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep3() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(7);
         NpcDialog.show(NPC.ATIEDA,["哼！算你跑的快，否则让你尝尝我阿铁打的终极实力！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.LANI,["拉琪，你没事吧！接下来怎么办！那个怪物口中所说的 0xff0000星辰之柱和生命之柱0xffffff 真的都已经被激活了吗？还有那些 0xff0000七星战将0xffffff ！"],["别急！总会有办法的！"],[function():void
            {
               NpcDialog.show(NPC.LA_QI,["办法不是没有！不过我们必须先找到 0xff0000星辰之柱0xffffff，而且一定要击败里面的 0xff0000七星战将0xffffff，拿到 0xff0000宇宙中蕴藏极限能量的七星天珠0xffffff 才有机会拯救整个星系！"],["哇！看来这次冒险是越来越有意思了！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                  {
                     NpcDialog.show(NPC.LA_QI,["恩恩，和那些浮在半空的石柱有关，希望我们能顺利的找到第一个星辰之柱！时间不多了，各位加油吧！"],["恩恩.."],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["拉琪、阿铁打你们先在一旁休息一下，看我的吧！"],["你可要小心啊！"],[function():void
                        {
                           startInteractive_3();
                        }]);
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function startInteractive_3() : void
      {
         var _loc1_:MovieClip = null;
         var _loc2_:uint = 1;
         while(_loc2_ <= 4)
         {
            _loc1_ = _map.conLevel["pillar" + _loc2_];
            _loc1_.gotoAndStop(2);
            _loc2_++;
         }
         _loc1_ = _map.conLevel["pillar" + Math.floor(Math.random() * 4 + 1)];
         addYellowArrow(_loc1_,_loc1_.width / 2);
         _loc1_.addEventListener(MouseEvent.CLICK,onPillarFirstClick);
      }
      
      private static function onPillarFirstClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var mc:MovieClip = e.currentTarget as MovieClip;
         CommonUI.removeYellowArrow(mc);
         mc.removeEventListener(MouseEvent.CLICK,onPillarFirstClick);
         NpcDialog.show(NPC.SEER,["看来这些石柱一定和密林之柱有关，让我先试试！"],["注意密林之柱旁的石柱！"],[function():void
         {
            addPillarsEventListener();
         }]);
      }
      
      private static function addPillarsEventListener() : void
      {
         var _loc1_:MovieClip = null;
         var _loc2_:uint = 1;
         while(_loc2_ <= 4)
         {
            _loc1_ = _map.conLevel["pillar" + _loc2_];
            _loc1_.addEventListener(MouseEvent.CLICK,onPillarClick);
            _loc2_++;
         }
         _loc1_ = _map.conLevel["pillar1"];
         addYellowArrow(_loc1_,_loc1_.width / 2);
      }
      
      private static function onPillarClick(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         CommonUI.removeYellowArrow(_loc2_);
         _loc2_.removeEventListener(MouseEvent.CLICK,onPillarClick);
         _loc2_.addEventListener(Event.ENTER_FRAME,onPillarEnterFlame);
         _loc2_.gotoAndPlay(3);
      }
      
      private static function onPillarEnterFlame(param1:Event) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(_loc2_.currentFrame == _loc2_.totalFrames)
         {
            _loc2_.removeEventListener(Event.ENTER_FRAME,onPillarEnterFlame);
            updateCirrus();
         }
      }
      
      private static function updateCirrus() : void
      {
         var mc:MovieClip = null;
         var i:uint = 1;
         while(i <= 4)
         {
            mc = _map.conLevel["pillar" + i];
            if(mc.currentFrame < mc.totalFrames)
            {
               addYellowArrow(mc,mc.width / 2);
               return;
            }
            i++;
         }
         AnimateManager.playMcAnimate(_map.conLevel["cirrus"] as MovieClip,0,null,function():void
         {
            NpcDialog.show(NPC.LA_QI,["哇！那不是星辰之柱嘛！" + MainManager.actorInfo.formatNick + "你果然聪明！"],["哈哈！这个对我来说还是很简单的啦！"],[function():void
            {
               NpcDialog.show(NPC.ATIEDA,["别高兴的太早，你们别忘记还要击败守护星辰之柱的七星战将才行！"],["奇怪了，怎么没人呢？"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                  {
                     NpcDialog.show(NPC.KAIKETESI,["我就是 0xff0000守护密林之柱的守护者0xffffff，我叫凯克特斯！如果识相的快点离开这里，否则等待你们的将会是一场折磨！"],["它…它不是巨星仙人掌嘛！"],[function():void
                     {
                        TasksManager.complete(TaskController_902.TASK_ID,3,function():void
                        {
                           initStep4();
                        });
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function clearPillars() : void
      {
         var _loc2_:MovieClip = null;
         var _loc1_:uint = 1;
         while(_loc1_ <= 4)
         {
            _loc2_ = _map.conLevel["pillar" + _loc1_];
            _loc2_.removeEventListener(MouseEvent.CLICK,onPillarFirstClick);
            _loc2_.removeEventListener(MouseEvent.CLICK,onPillarClick);
            _loc2_.removeEventListener(Event.ENTER_FRAME,onPillarEnterFlame);
            _loc1_++;
         }
      }
      
      private static function initStep4() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(9);
         NpcDialog.show(NPC.KAIKETESI,["哼哼！你说的一定就是我那愚蠢的兄弟！被誉为最强仙人掌的我怎么能和它相提并论！"],["什么！你竟然是它的哥哥？"],[function():void
         {
            NpcDialog.show(NPC.KAIKETESI,["呵呵！别太惊讶小鬼，接下去让你们吃惊的还在后面！"],["凯克特斯你怎么变了一个人！"],[function():void
            {
               CartoonManager.play(ClientConfig.getFullMovie("task_902_5"),function():void
               {
                  NpcDialog.show(NPC.LA_QI,["但是你忘记曾经你是守护麒麟一族的战将吗？为什么你现在会变成邪恶四灵的爪牙！为什么！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.ATIEDA,["别和它废话，我们是来挑战你的，0xff0000目的就是拿到你身上的七星天珠0xffffff，如果你不想被我的斩月双刀砍成一段一段的，就快点交出天珠！"],["这么自信，你是在和我开玩笑吗？！"],[function():void
                     {
                        NpcDialog.show(NPC.KAIKETESI,["我对你没什么兴趣，我要的是拉琪！哼，你是这次战役的关键人物，如果可以把你贡献给邪恶四灵，那我将获得更强大的力量！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                           {
                              NpcDialog.show(NPC.LANI,["拉琪…拉琪！凯克特斯你干脆把我也抓了吧！"],["哼哼！我不需要你！"],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["你简直太可恶了！我说过不能让我的朋友受到伤害，难道你没听见吗？"],["赛尔，少和他废话！"],[function():void
                                 {
                                    TasksManager.complete(TaskController_902.TASK_ID,4,function():void
                                    {
                                       initStep5();
                                    });
                                 }]);
                              }]);
                           });
                        });
                     }]);
                  });
               });
            }]);
         }]);
      }
      
      private static function initStep5() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(10);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_902_6"),function():void
         {
            NpcDialog.show(NPC.SEER,["太棒了！阿铁打，你成功了！我们击败了凯克特斯！"],["是吗？"],[function():void
            {
               NpcDialog.show(NPC.KAIKETESI,["如果我的实力只有这点，我怎么能被誉为守护密林之柱的战将呢？"],["看好了！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                  {
                     NpcDialog.show(NPC.ATIEDA,["什么！这家伙居然有再生复苏的能力，看来想击败它不是件容易的事情啊！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.KAIKETESI,["哼哼！知道我的实力吧！想救你的朋友就来这里找我吧!我随时奉陪！"],["别走，我们再切磋啊！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
                           {
                              NpcDialog.show(NPC.LANI,["赛尔，你可一定要救救拉琪啊！如果真的被邪恶四灵抓到拉琪，它可就危险了！我不想失去它！"],["放心吧！拉妮，我们一定会救拉琪出来的！"],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["阿铁打你快回去看看赛小息怎么样了，我去附近再勘查一下！拉妮，你就在这里别乱跑，我一会儿就回来！"],["恩恩，感谢你们，我的朋友！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["第一个星辰之柱，我们就遭遇如此强大的对手，接下来这段旅途将会更加崎岖坎坷！"],["伙伴们，我们一起加油！"],[function():void
                                       {
                                          TasksManager.complete(TaskController_902.TASK_ID,5,function():void
                                          {
                                             Task902.destroy();
                                             NpcController.showNpc(117);
                                          });
                                       }]);
                                    });
                                 }]);
                              }]);
                           });
                        }]);
                     });
                  });
               }]);
            }]);
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 706)
         {
            return _map.conLevel["task902mc"];
         }
         return null;
      }
      
      private static function addYellowArrow(param1:DisplayObjectContainer, param2:Number = 0, param3:Number = 0, param4:uint = 0) : void
      {
         if(Boolean(param1) && param1.numChildren >= 2)
         {
            return;
         }
         CommonUI.addYellowArrow(param1,param2,param3,param4);
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         OgreController.isShow = true;
         if(MapManager.currentMap.id == 698)
         {
            _map.depthLevel["task902mc"].visible = false;
         }
         if(taskMC)
         {
            if(MapManager.currentMap.id == 706)
            {
               clearPillars();
               taskMC.removeEventListener(MouseEvent.CLICK,onLaQiClicked_2);
            }
            DisplayUtil.removeForParent(taskMC);
         }
         MainManager.selfVisible = true;
         ToolBarController.showOrHideAllUser(true);
         _map = null;
      }
   }
}
