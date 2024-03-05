package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_779;
   import com.robot.app.task.petstory.util.FightGang;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task779
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var fightGang:FightGang;
      
      private static var stopMove:Boolean;
      
      private static var seerIce:MovieClip;
       
      
      public function Task779()
      {
         super();
      }
      
      public static function initTaskForMap40(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         _map = param1;
         _map.conLevel["leiyiMC"].gotoAndStop(2);
         _map.conLevel["leiyiMC"].visible = true;
         _map.conLevel["leiyiMC"].buttonMode = true;
         _map.conLevel["leiyiMC"].addEventListener(MouseEvent.CLICK,leiyiClickHandler);
      }
      
      public static function leiyiClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(540,280),function():void
         {
            NpcDialog.show(NPC.LEIYI,["希望大家一切顺利！"],["#101狂暴的阿克奥斯"],[function():void
            {
               TasksManager.accept(TaskController_779.TASK_ID,function(param1:Boolean):void
               {
                  var b:Boolean = param1;
                  if(b)
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_779_1"),function():void
                     {
                        DebugTrace.show("任务接取成功");
                        taskStep = 0;
                        MapManager.changeMap(57);
                     },false);
                  }
               });
            }]);
         });
      }
      
      public static function initTaskForMap57(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_779.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_779.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskStep = 0;
                  _map.conLevel["miniNPC"].gotoAndStop(2);
               }
            });
         }
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         _map.conLevel["miniNPC"].visible = true;
         _map.conLevel["miniNPC"].buttonMode = true;
         _map.conLevel["miniNPC"].addEventListener(MouseEvent.CLICK,miniClickHandler);
      }
      
      public static function miniClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(290,400),function():void
         {
            if(taskStep == 0)
            {
               NpcDialog.show(NPC.MILUO,["尼古尔星有着很多秘密，这需要你一步一步去探寻……"],["#101狂暴的阿克奥斯","哇哦！我的好奇心被激发了！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["米尼，海盗邪灵是不是登陆尼古尔星了？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.MILUO,["嗯，非常突然！他们成群结队，还带来好多稀奇古怪的装置！"],null,null,false,function():void
                     {
                        CartoonManager.play(ClientConfig.getFullMovie("task_779_2"),function():void
                        {
                           NpcDialog.show(NPC.LEIYI,["威斯克他们竟然大费周章的跑到尼古尔星来办事，肯定有重要原因！"],["嗯，我认为有两种可能！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["首先，尼古尔星也许有他们需要的关键资源；第二，这个实验太过危险，万一出现事故可以把险情转移，不会破坏自己的老窝。"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.LEIYI,["分析的很对！" + MainManager.actorInfo.formatNick + "，你越来越聪明了嘛！ "],["哈哈哈！那是。"],[function():void
                                 {
                                    NpcDialog.show(NPC.LEIYI,["我们先把情况告诉船长，让他做好增援安排，然后咱们进入尼古尔峭壁一探究竟！"],["好！就这么办。"],[function():void
                                    {
                                       var app:* = undefined;
                                       app = ModuleManager.getModule(ClientConfig.getAppModule("TaskIntro_779"));
                                       app.setup();
                                       app.show();
                                       app.sharedEvents.addEventListener(Event.CLOSE,function(param1:Event):void
                                       {
                                          var evt:Event = param1;
                                          app.sharedEvents.removeEventListener(Event.CLOSE,arguments.callee);
                                          app.destroy();
                                          app = null;
                                          TasksManager.complete(TaskController_779.TASK_ID,0,function():void
                                          {
                                             DebugTrace.show("第一步完成");
                                             taskStep = 1;
                                             MapManager.changeMap(58);
                                          });
                                       });
                                    }]);
                                 }]);
                              });
                           }]);
                        });
                     });
                  });
               }]);
            }
            else
            {
               NpcDialog.show(NPC.MILUO,["尼古尔星有着很多秘密，这需要你一步一步去探寻……"],["哇哦！我的好奇心被激发了！"]);
            }
         });
      }
      
      public static function initTaskForMap58(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         _map = map;
         stopMove = true;
         _map.conLevel["task779MC"].visible = false;
         _map.conLevel["monsterMC"].visible = false;
         if(TasksManager.getTaskStatus(TaskController_779.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_779.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskStep = 1;
                  gotoStep2();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  taskStep = 2;
                  gotoStep3();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  gotoStep4();
               }
               else
               {
                  DisplayUtil.removeForParent(_map.conLevel["monsterMC"]);
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_map.conLevel["monsterMC"]);
            DisplayUtil.removeForParent(_map.conLevel["task779MC"]);
         }
      }
      
      public static function initSptFight(param1:BaseMapProcess) : void
      {
         _map = param1;
         taskStep = 4;
         DisplayUtil.removeForParent(_map.conLevel["task779MC"]);
         gotoStep4();
      }
      
      private static function gotoStep2() : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["task779MC"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["task779MC"],1,"mc1",function():void
         {
            MainManager.selfVisible = true;
            if(fightGang == null)
            {
               fightGang = new FightGang(120,100,5);
               fightGang.createOgre(2527,new Point(525,383),10,5);
               fightGang.createOgre(2527,new Point(667,335),10,5);
               fightGang.createOgre(2520,new Point(448,331),10,5);
               fightGang.createOgre(2520,new Point(494,280),10,5);
               fightGang.beginFight().addResponse(function():void
               {
                  fightGang.destroyFight();
                  fightGang = null;
                  NpcDialog.show(NPC.SEER,["哼，知道我的厉害了吧！"],["（点击威斯克对话）"],[function():void
                  {
                     TasksManager.complete(TaskController_779.TASK_ID,1,function():void
                     {
                        DebugTrace.show("第二步完成");
                        taskStep = 2;
                        gotoStep3();
                     });
                  }]);
               },function():void
               {
                  NpcDialog.show(NPC.SEER,["可恶！我一定要冲破你们的阻碍！"],["（用头部射击消灭敌人）"],[function():void
                  {
                     fightGang.beginFight();
                  }]);
               });
            }
         });
      }
      
      private static function gotoStep3() : void
      {
         _map.conLevel["task779MC"].gotoAndStop(2);
         _map.conLevel["task779MC"].visible = true;
         _map.conLevel["task779MC"]["weisikeMC"].buttonMode = true;
         _map.conLevel["task779MC"]["weisikeMC"].addEventListener(MouseEvent.CLICK,weisikeHandler);
      }
      
      public static function weisikeHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(650,315),function():void
         {
            NpcDialog.show(NPC.LEIYI,["威斯克！你们抽取阿克希亚和里奥斯的基因粒子就是为了今天的实验？太疯狂了！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.WEISIKE,["我找到记载“死黑能量”的历史资料，谁也不能阻挡我使用这个强大的物质！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.LEIYI,["炎魔就是死黑能量的作品，它只会制造出无穷无尽的灾难！到头来你也幸免不了！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.WEISIKE,["哈哈哈！我一定能够掌控。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.ZOG,["雷伊，赛尔，别唧唧歪歪了！等着看好戏吧！"],["（与威斯克对战）"],[function():void
                        {
                           FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                           FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                           FightManager.fightWithBoss("威斯克",0);
                        }]);
                     });
                  });
               });
            });
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         if(taskStep == 2)
         {
            _map.conLevel["task779MC"].visible = true;
            _map.conLevel["task779MC"]["weisikeMC"].buttonMode = false;
            _map.conLevel["task779MC"]["weisikeMC"].removeEventListener(MouseEvent.CLICK,weisikeHandler);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_779_3"),function():void
            {
               _map.conLevel["task779MC"].gotoAndStop(3);
               NpcDialog.show(NPC.ZOG,["威斯克！看样子实验失败了，这家伙压根就不受我们控制。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ALLISON,["对啊！对啊！还好不是在基地搞砸的，这怪物太可怕了，我们先撤退吧，哎呦！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.WEISIKE,["胆小鬼！就让愚蠢的雷伊和赛尔来收拾残局吧！有了这次的经验，下次必定成功！哈哈哈！"],null,null,false,function():void
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["task779MC"],4,"mc4",function():void
                        {
                           NpcDialog.show(NPC.SEER,["雷伊！现在该怎么啊！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.LEIYI,["我们先让阿克奥斯平静一点，否则，以它目前疯狂的状态肯定会伤害到无辜精灵。"],["嗯，只能这么做了！（点击阿克奥斯对战）"],[function():void
                              {
                                 TasksManager.complete(TaskController_779.TASK_ID,2,function():void
                                 {
                                    DebugTrace.show("第三步完成");
                                    taskStep = 3;
                                    gotoStep4();
                                 });
                              }]);
                           });
                        });
                     });
                  });
               });
            });
         }
         else if(taskStep == 3)
         {
            stopMove = true;
            _map.conLevel["task779MC"].visible = false;
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_779_4"),function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_779_5"),function():void
               {
                  TasksManager.complete(TaskController_779.TASK_ID,3,function():void
                  {
                     DebugTrace.show("任务完成");
                     taskStep = 4;
                     stopMove = false;
                     randomMove();
                  });
               });
            });
         }
      }
      
      private static function gotoStep4() : void
      {
         MainManager.actorModel.pos = new Point(475,375);
         stopMove = false;
         if(_map.conLevel["task779MC"])
         {
            _map.conLevel["task779MC"].visible = true;
            _map.conLevel["task779MC"].gotoAndStop(5);
            _map.conLevel["task779MC"].mouseEnabled = false;
            _map.conLevel["task779MC"].mouseChildren = false;
         }
         _map.conLevel["monsterMC"].visible = true;
         _map.conLevel["monsterMC"].addEventListener(MouseEvent.CLICK,monsterHandler);
         if(seerIce == null)
         {
            seerIce = MapManager.currentMap.libManager.getMovieClip("iceMC");
            seerIce.data = {"time":0};
            seerIce.buttonMode = true;
            seerIce.addEventListener(MouseEvent.CLICK,iceClickHandler);
         }
         randomMove();
      }
      
      private static function iceClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         --seerIce.data["time"];
         if(seerIce.data["time"] == 0)
         {
            AnimateManager.playMcAnimate(seerIce,2,"mc2",function():void
            {
               seerIce.parent.removeChild(seerIce);
            },false,false);
         }
      }
      
      private static function randomMove() : void
      {
         var frame:uint = 0;
         if(stopMove)
         {
            return;
         }
         while(1)
         {
            frame = uint(int(Math.random() * 4) + 1);
            if(frame != _map.conLevel["monsterMC"].currentFrame)
            {
               break;
            }
         }
         AnimateManager.playMcAnimate(_map.conLevel["monsterMC"],frame,"mc" + frame,function():void
         {
            var _loc1_:MovieClip = null;
            if(_map && _map.conLevel["monsterMC"] && Boolean(_map.conLevel["monsterMC"]["mc" + frame]))
            {
               _loc1_ = _map.conLevel["monsterMC"]["mc" + frame]["iceMid"];
               if(_loc1_)
               {
                  if(seerIce.parent == null && Boolean(MainManager.actorModel.hitTestObject(_loc1_)))
                  {
                     seerIce.data["time"] = 2;
                     seerIce.gotoAndStop(1);
                     MainManager.actorModel.addChild(seerIce);
                  }
               }
               if(!stopMove)
               {
                  randomMove();
               }
            }
         },false,false);
      }
      
      public static function monsterHandler(param1:MouseEvent) : void
      {
         if(param1.target.name == "monster" && seerIce.parent == null)
         {
            stopMove = true;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightManager.fightWithBoss("阿克奥斯",1);
         }
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 40)
         {
            _map.conLevel["leiyiMC"].removeEventListener(MouseEvent.CLICK,leiyiClickHandler);
         }
         else if(MapManager.currentMap.id == 57)
         {
            _map.conLevel["miniNPC"].removeEventListener(MouseEvent.CLICK,miniClickHandler);
            ToolBarController.showOrHideAllUser(true);
            OgreController.isShow = true;
         }
         else if(MapManager.currentMap.id == 58)
         {
            stopMove = true;
            MainManager.selfVisible = true;
            ToolBarController.showOrHideAllUser(true);
            if(fightGang)
            {
               fightGang.destroyFight();
               fightGang = null;
            }
            if(seerIce)
            {
               seerIce.removeEventListener(MouseEvent.CLICK,iceClickHandler);
               DisplayUtil.removeForParent(seerIce);
               seerIce = null;
            }
            if(_map.conLevel["monsterMC"])
            {
               _map.conLevel["monsterMC"].addEventListener(MouseEvent.CLICK,monsterHandler);
            }
            if(_map.conLevel["task779MC"])
            {
               _map.conLevel["task779MC"]["weisikeMC"].removeEventListener(MouseEvent.CLICK,weisikeHandler);
            }
         }
         _map = null;
      }
   }
}
