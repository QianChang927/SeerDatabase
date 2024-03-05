package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class LegendsOfFiveEmperorsController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID_0:uint = 1259;
      
      public static const BUFFER_ID_1:uint = 1260;
      
      public static const BUFFER_ID_2:uint = 1261;
      
      public static const BUFFER_ID_3:uint = 1262;
      
      public static const MAPID_ARR:Array = [10923,10923,10924,10923];
      
      public static const BUFFER_ID_4:uint = 1263;
      
      public static const BUFFER_ID_5:uint = 1264;
      
      public static const BUFFER_ID_6:uint = 1265;
      
      public static const BUFFER_ID_7:uint = 1266;
      
      public static const MAPID_ARR1:Array = [10925,10926,10925,10925];
      
      public static const BUFFER_ID_8:uint = 1267;
      
      public static const BUFFER_ID_9:uint = 1268;
      
      public static const BUFFER_ID_10:uint = 1269;
      
      public static const BUFFER_ID_11:uint = 1270;
      
      public static const MAPID_ARR2:Array = [10928,10929,10928,10928];
      
      private static var _taskMc:MovieClip;
      
      private static var _map:MapModel;
      
      private static var _curStep:int;
       
      
      public function LegendsOfFiveEmperorsController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         _curStep = getCurStep();
         if(_curStep == 1 || _curStep == 2 || _curStep == 4)
         {
            gotoFristMap();
         }
         else if(_curStep == 3)
         {
            gotoSecMap();
         }
         else if(_curStep == 5)
         {
            openPanel();
         }
      }
      
      public static function initForMap1() : void
      {
         _curStep = getCurStep1();
         if(_curStep == 6 || _curStep == 8 || _curStep == 9)
         {
            gotoFristMap1();
         }
         else if(_curStep == 7)
         {
            gotoSecMap1();
         }
         else if(_curStep == 10)
         {
            openPanel();
         }
      }
      
      public static function initForMap2() : void
      {
         _curStep = getCurStep2();
         if(_curStep == 11 || _curStep == 13 || _curStep == 14)
         {
            gotoFristMap2();
         }
         else if(_curStep == 12)
         {
            gotoSecMap2();
         }
         else if(_curStep == 15)
         {
            openPanel();
         }
      }
      
      private static function gotoFristMap() : void
      {
         if(MapManager.currentMap.id != MAPID_ARR[0])
         {
            MapManager.changeMap(MAPID_ARR[0]);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               loadingMc();
            });
         }
         else
         {
            _map = MapManager.currentMap;
            loadingMc();
         }
      }
      
      private static function gotoFristMap1() : void
      {
         if(MapManager.currentMap.id != MAPID_ARR1[0])
         {
            MapManager.changeMap(MAPID_ARR1[0]);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               loadingMc1();
            });
         }
         else
         {
            _map = MapManager.currentMap;
            loadingMc1();
         }
      }
      
      private static function gotoFristMap2() : void
      {
         if(MapManager.currentMap.id != MAPID_ARR2[0])
         {
            MapManager.changeMap(MAPID_ARR2[0]);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               loadingMc2();
            });
         }
         else
         {
            _map = MapManager.currentMap;
            loadingMc2();
         }
      }
      
      private static function loadingMc() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_LegendsOfFiveEmperors"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.topLevel.addChild(taskMc);
            switch(_curStep)
            {
               case 1:
                  startPreTask(0);
                  break;
               case 2:
                  taskMc.mc1.gotoAndStop(195);
                  startPreTask(1);
                  break;
               case 4:
                  taskMc.mc1.gotoAndStop(195);
                  startPreTask(3);
            }
         });
      }
      
      private static function loadingMc1() : void
      {
         if(_curStep == 6 || _curStep == 8 || _curStep == 9)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_LegendsOfFiveEmperors1"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.topLevel.addChild(taskMc);
               switch(_curStep)
               {
                  case 6:
                     startPreTask1(6);
                     break;
                  case 8:
                     taskMc.mc1.gotoAndStop(75);
                     startPreTask1(8);
                     break;
                  case 9:
                     taskMc.mc1.gotoAndStop(75);
                     startPreTask1(9);
               }
            });
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_LegendsOfFiveEmperors2"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.topLevel.addChild(taskMc);
               if(_curStep == 7)
               {
                  startPreTask1(7);
               }
            });
         }
      }
      
      private static function loadingMc2() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_LegendsOfFiveEmperors3"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.topLevel.addChild(taskMc);
            switch(_curStep)
            {
               case 11:
                  startPreTask2(11);
                  break;
               case 12:
                  startPreTask2(12);
                  break;
               case 13:
                  taskMc.mc1.gotoAndStop(108);
                  startPreTask2(13);
                  break;
               case 14:
                  taskMc.mc1.gotoAndStop(357);
                  startPreTask2(14);
            }
         });
      }
      
      private static function gotoSecMap() : void
      {
         if(MapManager.currentMap.id != MAPID_ARR[2])
         {
            MapManager.changeMap(MAPID_ARR[2]);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               startPreTask(2);
            });
         }
         else
         {
            _map = MapManager.currentMap;
            startPreTask(2);
         }
      }
      
      private static function gotoSecMap1() : void
      {
         if(MapManager.currentMap.id != MAPID_ARR1[1])
         {
            MapManager.changeMap(MAPID_ARR1[1]);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               loadingMc1();
            });
         }
         else
         {
            _map = MapManager.currentMap;
            loadingMc1();
         }
      }
      
      private static function gotoSecMap2() : void
      {
         if(MapManager.currentMap.id != MAPID_ARR2[1])
         {
            MapManager.changeMap(MAPID_ARR2[1]);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               loadingMc2();
            });
         }
         else
         {
            _map = MapManager.currentMap;
            loadingMc2();
         }
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array = null;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         if(index == 0)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]]];
         }
         else if(index == 21)
         {
            story = [[TaskStoryPlayer.FUL_MOVIE,["task_LegendsOfFiveEmperors",true]]];
         }
         else if(index == 31)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.FUL_MOVIE,["task_LegendsOfFiveEmperors_1",true]]];
         }
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            if(index == 0)
            {
               NpcDialog.show(NPC.KUANSHA,["主人，凭您的实力，为什么要和海盗联盟？"],["你不懂"],[function():void
               {
                  NpcDialog.show(NPC.WEISIKE,["敌人的敌人，是最可靠的朋友。更何况，我们也并非无所不能。"],["您指的是？"],[function():void
                  {
                     NpcDialog.show(NPC.ANGRY_TIANSHA,["就凭我们的实力，兵来将挡，水来土掩，还有什么需要那些海盗的？"],["……"],[function():void
                     {
                        NpcDialog.show(NPC.WEISIKE,["你说的那是以前，想当年，当他们还在我身边的时候，的确如此"],["……"],[function():void
                        {
                           NpcDialog.show(NPC.JUESHA,["他们——原来您指的是那5个神威无匹的大人。"],["是的"],[function():void
                           {
                              NpcDialog.show(NPC.WEISIKE,["是啊，如果不是一时大意，中了精灵王们的圈套被封进了黑洞，他们现在绝对应该是我最得意的战力！"],["……"],[function():void
                              {
                                 BufferRecordManager.setMyState(BUFFER_ID_0,true,function():void
                                 {
                                    initForMap();
                                 });
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(index == 1)
            {
               NpcDialog.show(NPC.WEISIKE,["不要小看海盗！你们是被那些不堪一击的杂兵迷惑了。那个奥古斯特博士，是有点名堂的！"],["是吗？"],[function():void
               {
                  NpcDialog.show(NPC.ANGRY_TIANSHA,["什么名堂？"],["他的发明……"],[function():void
                  {
                     NpcDialog.show(NPC.WEISIKE,["他发明了一个黑洞穿梭机，可以打开黑洞时空之门，从而解放出那些被封印在里面的精灵。"],["竟然如此强大"],[function():void
                     {
                        NpcDialog.show(NPC.KUANSHA,["这么说，那5位被封印的大人岂不是——"],["不错"],[function():void
                        {
                           NpcDialog.show(NPC.ANGRY_TIANSHA,["不错，这就是我和海盗结盟的原因。我答应帮奥古斯特寻找他梦寐以求的无尽能源，而他，将会帮助我破除精灵的封印，让我重新拥有我最强的手下！"],["……"],[function():void
                           {
                              BufferRecordManager.setMyState(BUFFER_ID_1,true,function():void
                              {
                                 initForMap();
                              });
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(index == 2)
            {
               NpcDialog.show(NPC.LEIYI_EVO,["北冥玄武，远古壁垒已经开启，我们战神联盟也陆续觉醒了完全体，为什么你还是愁眉不展的样子？"],["哎"],[function():void
               {
                  NpcDialog.show(NPC.BEI_MING_XUAN_WU,["看到三煞出现，让我非常的担忧……"],["三煞？"],[function():void
                  {
                     NpcDialog.show(NPC.LEIYI_EVO,["那几个家伙不足为虑吧，仅凭我们战神联盟对付他们已经绰绰有余了！"],["不是他们"],[function():void
                     {
                        NpcDialog.show(NPC.BEI_MING_XUAN_WU,["三煞我不担心，我担心的是威斯克不会仅仅召集三煞……"],["什么"],[function():void
                        {
                           NpcDialog.show(NPC.LEIYI_EVO,["什么，难道他还有其它的帮手？"],["是的"],[function():void
                           {
                              startPreTask(21);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(index == 21)
            {
               NpcDialog.show(NPC.BEI_MING_XUAN_WU,["什么，难道他还有其它的帮手？"],["是的"],[function():void
               {
                  BufferRecordManager.setMyState(BUFFER_ID_2,true,function():void
                  {
                     initForMap();
                  });
               }]);
            }
            else if(index == 3)
            {
               NpcDialog.show(NPC.WEISIKE,["我亲爱的手下们啊，你们沉睡的太久了！是时候醒来把这个世界闹个天翻地覆了！海盗们，开始吧！"],["就这么办吧"],[function():void
               {
                  startPreTask(31);
               }]);
            }
            else if(index == 31)
            {
               BufferRecordManager.setMyState(BUFFER_ID_3,true,function():void
               {
                  taskMc.visible = false;
                  TasksManager.accept(3090,function():void
                  {
                     TasksManager.complete(3090,0,function(param1:Boolean):void
                     {
                     });
                  });
               });
            }
         };
         storyPlayer.start();
      }
      
      private static function startPreTask1(param1:int) : void
      {
         var story:Array = null;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         if(index == 61)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]]];
         }
         else if(index == 71)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]]];
         }
         else if(index == 81)
         {
            story = [[TaskStoryPlayer.FUL_MOVIE,["task_LegendsOfFiveEmperors1_0",true]]];
         }
         else if(index == 91)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.FUL_MOVIE,["task_LegendsOfFiveEmperors1_1",true]]];
         }
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            if(index == 6)
            {
               NpcDialog.show(NPC.KUANSHA,["还以为穿越了黑洞之后会到什么奇怪的地方，没想到似乎进入了地底坟墓的感觉嘛！"],["你说对了"],[function():void
               {
                  NpcDialog.show(NPC.WEISIKE,["这里，正是被称作帝陵。这个暗婆罗星正是当年精灵王们封印五帝的地方！"],["精灵王们？"],[function():void
                  {
                     NpcDialog.show(NPC.ANGRY_TIANSHA,["主人，现在那些精灵王呢？"],["不知道"],[function():void
                     {
                        NpcDialog.show(NPC.WEISIKE,["不要小看了我的爱将们！封印五帝消耗了精灵王强大的能量，所以在那场大战之后他们相继沉睡了！"],["这正是我们的机会啊"],[function():void
                        {
                           NpcDialog.show(NPC.JUESHA,["所以现在如果能召唤五帝，战神联盟就不足为虑了！"],["不错"],[function():void
                           {
                              NpcDialog.show(NPC.WEISIKE,["海盗们，快点让我见识一下奥古斯特的黑暗科技吧！"],["遵命"],[function():void
                              {
                                 startPreTask1(61);
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(index == 61)
            {
               BufferRecordManager.setMyState(BUFFER_ID_4,true,function():void
               {
                  taskMc.visible = false;
                  initForMap1();
               });
            }
            else if(index == 7)
            {
               NpcDialog.show(NPC.LUANUO,["嗨！好久不见，你似乎进步了不少嘛！"],["……"],[function():void
               {
                  NpcDialog.show(NPC.ZHANGCHIBANGLEIYI,["这些年你去了哪里？"],["哈哈"],[function():void
                  {
                     NpcDialog.show(NPC.LUANUO,["你还是和以前一样，不要这么严肃嘛！要不要来一个久别重逢的拥抱？"],["……"],[function():void
                     {
                        NpcDialog.show(NPC.ZHANGCHIBANGLEIYI,["现在不是开玩笑的时候，威斯克似乎和奥古斯特博士达成了什么邪恶联盟！不光是赫尔卡星，整个宇宙都面临着巨大的危险！"],["不错"],[function():void
                        {
                           NpcDialog.show(NPC.LUANUO,["这些我都知道了，我还知道威斯克计划利用奥古斯特博士的什么装置召唤一帮叫五帝的家伙！"],["……"],[function():void
                           {
                              startPreTask1(71);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(index == 71)
            {
               BufferRecordManager.setMyState(BUFFER_ID_5,true,function():void
               {
                  taskMc.visible = false;
                  initForMap1();
               });
            }
            else if(index == 8)
            {
               NpcDialog.show(NPC.KUANSHA,["主人，封印看起来松动了不少了！"],["等一下"],[function():void
               {
                  startPreTask1(81);
               }]);
            }
            else if(index == 81)
            {
               BufferRecordManager.setMyState(BUFFER_ID_6,true,function():void
               {
                  taskMc.visible = false;
                  initForMap1();
               });
            }
            else if(index == 9)
            {
               NpcDialog.show(NPC.WEISIKE,["奥古斯特的机器需要大量的能量，雷伊你们来的太是时候了！哈哈，有了你们的能量，封印可以提前破除了！"],["就这么办吧"],[function():void
               {
                  startPreTask1(91);
               }]);
            }
            else if(index == 91)
            {
               BufferRecordManager.setMyState(BUFFER_ID_7,true,function():void
               {
                  taskMc.visible = false;
                  TasksManager.accept(3091,function():void
                  {
                     TasksManager.complete(3091,0,function(param1:Boolean):void
                     {
                     });
                  });
               });
            }
         };
         storyPlayer.start();
      }
      
      private static function startPreTask2(param1:int) : void
      {
         var story:Array = null;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         if(index == 111)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]]];
         }
         else if(index == 121)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]]];
         }
         else if(index == 131)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]]];
         }
         else if(index == 141)
         {
            story = [[TaskStoryPlayer.FUL_MOVIE,["task_LegendsOfFiveEmperors2_0",true]],[TaskStoryPlayer.FUL_MOVIE,["task_LegendsOfFiveEmperors2_1",true]]];
         }
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            if(index == 11)
            {
               NpcDialog.show(NPC.BULAIKE_EVO,["诛神法阵？似乎听到了不得了的事情呢。"],["是的"],[function():void
               {
                  NpcDialog.show(NPC.COLT,["让我想起了一些非常不愉快的往事呢！诛神法阵是五帝独有的邪恶阵法，拥有极大的杀伤力。"],["你想起来了？"],[function():void
                  {
                     NpcDialog.show(NPC.HASINA,["最后一战如果不是出了点小意外，一旦我们成功发动法阵，最后五帝和精灵王们谁胜谁败还不一定呢！"],["是的"],[function():void
                     {
                        NpcDialog.show(NPC.COLT,["不错，只差了一点点，也许现在这个世界的格局会完全不同！"],["哼哼"],[function():void
                        {
                           NpcDialog.show(NPC.WEISIKE,["只要有足够的耐心，机会总会出现。这一次，精灵王也好，战神联盟也好，都别想阻止我！"],[""],[function():void
                           {
                              NpcDialog.show(NPC.ZHANGCHIBANGLEIYI,["想不到竟然还有这种事情，我们需要帮手！"],["快联系赛尔号"],[function():void
                              {
                                 NpcDialog.show(NPC.BULAIKE_NEW,["想不到竟然还有这种事情，我们需要帮手！"],["好"],[function():void
                                 {
                                    startPreTask2(111);
                                 }]);
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(index == 111)
            {
               BufferRecordManager.setMyState(BUFFER_ID_8,true,function():void
               {
                  taskMc.visible = false;
                  initForMap2();
               });
            }
            else if(index == 12)
            {
               NpcDialog.show(NPC.KUANSHA,["雷伊，你以为可以轻易的摆脱我们吗？"],["……"],[function():void
               {
                  NpcDialog.show(NPC.ZHANGCHIBANGLEIYI,["威斯克只是在利用你们，难道你们没发现吗？在他眼里你们是随时可以抛弃的弃卒而已。"],["那又如何"],[function():void
                  {
                     NpcDialog.show(NPC.KUANSHA,["在黑暗的世界里，弱肉强食天经地义！我们只是想看着主人站上黑暗的巅峰！"],["……"],[function():void
                     {
                        NpcDialog.show(NPC.ANGRY_TIANSHA,["五帝即将现身，精灵王们的末日来了！这个时候可不能让你坏了好事！"],["不错"],[function():void
                        {
                           NpcDialog.show(NPC.JUESHA,["这里风景不错，雷伊，我们将在这里埋葬你！"],["哦？"],[function():void
                           {
                              NpcDialog.show(NPC.ZHANGCHIBANGLEIYI,["执迷不悟！看来我要用拳头让你们清醒清醒！"],["……"],[function():void
                              {
                                 startPreTask2(121);
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(index == 121)
            {
               BufferRecordManager.setMyState(BUFFER_ID_9,true,function():void
               {
                  taskMc.visible = false;
                  initForMap2();
               });
            }
            else if(index == 13)
            {
               NpcDialog.show(NPC.WEISIKE,["夜魔之神，三煞的实力你是知道的，雷伊可只有一个人，你不担心吗？"],["不"],[function():void
               {
                  NpcDialog.show(NPC.BULAIKE_EVO,["就像雷伊完全信任我一样，我也绝对信任他，信任这种情感，我想你是不会明白的！"],["哼"],[function():void
                  {
                     NpcDialog.show(NPC.WEISIKE,["我只信任绝对的实力！这位是雷诺是吧，奥古斯特博士特意嘱托过我要好好的关照你！"],["不"],[function():void
                     {
                        NpcDialog.show(NPC.HASINA,["在其余四帝苏醒之前，再热热身吧！"],["不"],[function():void
                        {
                           startPreTask2(131);
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(index == 131)
            {
               BufferRecordManager.setMyState(BUFFER_ID_10,true,function():void
               {
                  taskMc.visible = false;
                  initForMap2();
               });
            }
            else if(index == 14)
            {
               NpcDialog.show(NPC.WEISIKE,["雷伊？！三煞呢？"],["呵呵"],[function():void
               {
                  NpcDialog.show(NPC.ZHANGCHIBANGLEIYI,["他们说天蛇花原风景很好，我就让他们在那边好好的欣赏风景了。"],["哼"],[function():void
                  {
                     NpcDialog.show(NPC.WEISIKE,["这几个没用的家伙……"],["……"],[function():void
                     {
                        NpcDialog.show(NPC.ZHANGCHIBANGLEIYI,["布莱克，做好的！我已经成功联系上了赛尔号！X战队的成员马上就到！"],["哼"],[function():void
                        {
                           NpcDialog.show(NPC.WEISIKE,["就算你们有援军又能如何？封印已经彻底的打开了！属于黑暗的时代，再次来临了！"],["……"],[function():void
                           {
                              startPreTask2(141);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(index == 141)
            {
               BufferRecordManager.setMyState(BUFFER_ID_11,true,function():void
               {
                  taskMc.visible = false;
                  TasksManager.accept(3096,function():void
                  {
                     TasksManager.complete(3096,0,function(param1:Boolean):void
                     {
                        StatManager.sendStat2014("五帝主线","完成了支线中的最后一个任务",StatManager.RUN_ACT_2015);
                        ModuleManager.showAppModule("LegendsOfFiveEmperorsPanel");
                     });
                  });
               });
            }
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LegendsOfFiveEmperorsMainPanel"));
      }
      
      private static function getCurStep() : int
      {
         if(!BufferRecordManager.getMyState(BUFFER_ID_0))
         {
            return 1;
         }
         if(!BufferRecordManager.getMyState(BUFFER_ID_1))
         {
            return 2;
         }
         if(!BufferRecordManager.getMyState(BUFFER_ID_2))
         {
            return 3;
         }
         if(!BufferRecordManager.getMyState(BUFFER_ID_3))
         {
            return 4;
         }
         return 5;
      }
      
      private static function getCurStep1() : int
      {
         if(!BufferRecordManager.getMyState(BUFFER_ID_4))
         {
            return 6;
         }
         if(!BufferRecordManager.getMyState(BUFFER_ID_5))
         {
            return 7;
         }
         if(!BufferRecordManager.getMyState(BUFFER_ID_6))
         {
            return 8;
         }
         if(!BufferRecordManager.getMyState(BUFFER_ID_7))
         {
            return 9;
         }
         return 10;
      }
      
      private static function getCurStep2() : int
      {
         if(!BufferRecordManager.getMyState(BUFFER_ID_8))
         {
            return 11;
         }
         if(!BufferRecordManager.getMyState(BUFFER_ID_9))
         {
            return 12;
         }
         if(!BufferRecordManager.getMyState(BUFFER_ID_10))
         {
            return 13;
         }
         if(!BufferRecordManager.getMyState(BUFFER_ID_11))
         {
            return 14;
         }
         return 15;
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
