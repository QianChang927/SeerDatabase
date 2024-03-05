package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class DragonMistCircleComtrol
   {
      
      public static const NODE_0_BUFFER_ID:uint = 1240;
      
      public static const NODE_1_BUFFER_ID:uint = 1241;
      
      public static const NODE_2_BUFFER_ID:uint = 1242;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
       
      
      public function DragonMistCircleComtrol()
      {
         super();
      }
      
      public static function initForMap10865(param1:BaseMapProcess) : void
      {
         _map = param1;
         startPlay();
      }
      
      public static function startPlay() : void
      {
         _map.topLevel.mouseEnabled = false;
         _map.topLevel.mouseChildren = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_dragonMistCircle"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            update();
            addEvents();
         });
      }
      
      public static function update() : void
      {
         var i:int = 0;
         if(!isNode1TaskDone)
         {
            if(!isNode0TaskDone)
            {
               CommonUI.addYellowArrow(taskMc.btn_0,106,0,45);
            }
            else
            {
               CommonUI.addYellowArrow(taskMc.btn_0,106,0,45);
               taskMc.gotoAndStop(1);
               taskMc.mc1.gotoAndStop(552);
            }
            i = 0;
            while(i < 3)
            {
               KTool.enableMC([taskMc["monster_" + i]],false);
               taskMc["monster_" + i].buttonMode = false;
               i++;
            }
            taskMc["btn_0"].buttonMode = true;
         }
         else
         {
            taskMc.gotoAndStop(2);
            taskMc.mc2.gotoAndStop(365);
            KTool.enableMC([taskMc["btn_0"]],false);
            taskMc["btn_0"].buttonMode = false;
            KTool.getMultiValue([3629],function(param1:Array):void
            {
               var _loc2_:int = 0;
               var _loc3_:int = 0;
               while(_loc3_ < 3)
               {
                  CommonUI.removeYellowArrow(taskMc["monster_" + _loc3_]);
                  if(BitUtils.getBit(param1[0],_loc3_) > 0)
                  {
                     _loc2_++;
                     CommonUI.removeYellowArrow(taskMc["monster_" + _loc3_]);
                     KTool.enableMC([taskMc["monster_" + _loc3_]],false);
                     taskMc["monster_" + _loc3_].buttonMode = false;
                  }
                  else
                  {
                     CommonUI.addYellowArrow(taskMc["monster_" + _loc3_],100,0,45);
                     KTool.enableMC([taskMc["monster_" + _loc3_]],true);
                     taskMc["monster_" + _loc3_].buttonMode = true;
                  }
                  _loc3_++;
               }
               if(_loc2_ >= 3)
               {
                  if(!isNode2TaskDone)
                  {
                     startPreTask(3);
                  }
                  else
                  {
                     taskMc.gotoAndStop(3);
                     taskMc.mc3.gotoAndStop(629);
                  }
               }
            });
         }
      }
      
      private static function addEvents() : void
      {
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         switch(_loc2_)
         {
            case "btn_0":
               chooseDialog0();
               break;
            case "btn_1":
               chooseDialog1();
               break;
            case "monster_0":
               onMonsterClick(0);
               break;
            case "monster_1":
               onMonsterClick(1);
               break;
            case "monster_2":
               onMonsterClick(2);
         }
      }
      
      private static function chooseDialog0() : void
      {
         if(!isNode0TaskDone)
         {
            StatManager.sendStat2014("星球活动—龙脉迷雾法阵","开始节点1",StatManager.RUN_ACT_2015);
            NpcDialog.show(NPC.SEER,["嘿嘿！我是雷德！看到我的火焰了吗？这里是我的地盘！"],["到底哪里来的小东西？"],[function():void
            {
               startPreTask(1);
            }]);
         }
         else
         {
            StatManager.sendStat2014("星球活动—龙脉迷雾法阵","开始节点2",StatManager.RUN_ACT_2015);
            NpcDialog.show(NPC.FIRE_CLAW_RADER,["是派我来破解这里的迷雾法阵！"],["什么？迷雾法阵？"],[function():void
            {
               NpcDialog.show(NPC.SEER,["怎么从来没听说过？"],["哼！我是雷德！我可是看过编年史的精灵！"],[function():void
               {
                  NpcDialog.show(NPC.FIRE_CLAW_RADER,["精灵编年史里记载了关于这迷雾法阵的一些传闻，没想到......"],["到什么？"],[function():void
                  {
                     startPreTask(2);
                  }]);
               }]);
            }]);
         }
      }
      
      private static function chooseDialog1() : void
      {
         if(!isNode0TaskDone)
         {
            NpcDialog.show(NPC.SEER,["前面那个.....到底是什么？你去帮我们看看。"],["好的！"],[function():void
            {
            }]);
         }
      }
      
      private static function onMonsterClick(param1:int) : void
      {
         var index:int = param1;
         StatManager.sendStat2014("星球活动—龙脉迷雾法阵","开始节点3",StatManager.RUN_ACT_2015);
         if(index == 0)
         {
            NpcDialog.show(NPC.SHENMIHEIYING,["到底是谁敢擅自闯入迷雾法阵？！必须让你尝尝我的厉害！"],["看我完爆你！","花点钻石一键通过","好好.....我不闯。"],[function():void
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
               FightManager.fightNoMapBoss("诺森德",3542);
            },function():void
            {
               KTool.buyProductByCallback(243085,1,function():void
               {
                  KTool.doExchange(5427,function():void
                  {
                     NpcDialog.show(NPC.SHENMIHEIYING,["这！怎么可能！我怎么会败！"],["Nothing is Impossible !"],[function():void
                     {
                        update();
                     }]);
                  });
               });
            },function():void
            {
            }]);
         }
         else if(index == 1)
         {
            NpcDialog.show(NPC.SHENMIHEIYING,["我不会鲁莽的挑战你，但我会用智慧征服你！精灵编年史的守护者是哪个精灵？"],["雷神雷伊","无上神龙","精灵王","......我再想想。"],[function():void
            {
               NpcDialog.show(NPC.SHENMIHEIYING,["愚不可及！居然连这都不知道！"],["再给我一次机会！","我愿意一键通过！（3钻石）"],[function():void
               {
                  onMonsterClick(1);
               },function():void
               {
                  KTool.buyProductByCallback(243086,1,function():void
                  {
                     KTool.doExchange(5428,function():void
                     {
                        update();
                     });
                  });
               }]);
            },function():void
            {
               NpcDialog.show(NPC.SHENMIHEIYING,["居然......这本神奇的古书必将成为改变整个宇宙的圣物！"],["你的问题太简单了！我早就知道了！"],[function():void
               {
                  SocketConnection.addCmdListener(45575,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(45575,arguments.callee);
                     update();
                  });
                  SocketConnection.send(45575,1);
               }]);
            },function():void
            {
               NpcDialog.show(NPC.SHENMIHEIYING,["愚不可及！居然连这都不知道！"],["再给我一次机会！","我愿意一键通过！（3钻石）"],[function():void
               {
                  onMonsterClick(1);
               },function():void
               {
                  KTool.buyProductByCallback(243086,1,function():void
                  {
                     KTool.doExchange(5428,function():void
                     {
                        update();
                     });
                  });
               }]);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.SHENMIHEIYING,["我可不像他们两个那么麻烦，我贪婪，快给我让我满足的东西！"],["赛尔豆","泰坦之灵","钻石",".......我看看我有什么。"],[function():void
            {
               seerDou(false);
            },function():void
            {
               taiTan(false);
            },function():void
            {
               zuanshi();
            },function():void
            {
            }]);
         }
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         if(FightManager.isWin)
         {
            NpcDialog.show(NPC.SHENMIHEIYING,["这！怎么可能！我怎么会败！"],["Nothing is Impossible !"],[function():void
            {
               update();
            }]);
         }
      }
      
      private static function seerDou(param1:Boolean) : void
      {
         var isReChoose:Boolean = param1;
         var str:String = "";
         if(isReChoose)
         {
            str = "不够！再来！";
         }
         else
         {
            str = "赛尔豆？好吧，多多益善哦！";
         }
         NpcDialog.show(NPC.SHENMIHEIYING,[str],["1000赛尔豆","10000赛尔豆","100000赛尔豆","我换个别的。"],[function():void
         {
            SocketConnection.addCmdListener(45575,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45575,arguments.callee);
               isSuccessPass(1);
            });
            SocketConnection.send(45575,2);
         },function():void
         {
            SocketConnection.addCmdListener(45575,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45575,arguments.callee);
               isSuccessPass(1);
            });
            SocketConnection.send(45575,3);
         },function():void
         {
            SocketConnection.addCmdListener(45575,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45575,arguments.callee);
               isSuccessPass(1);
            });
            SocketConnection.send(45575,4);
         },function():void
         {
            onMonsterClick(2);
         }]);
      }
      
      private static function taiTan(param1:Boolean) : void
      {
         var isReChoose:Boolean = param1;
         var str:String = "";
         if(isReChoose)
         {
            str = "不够！再来！";
         }
         else
         {
            str = "泰坦之灵？好吧，多多益善哦！";
         }
         NpcDialog.show(NPC.SHENMIHEIYING,[str],["100泰坦之灵","1000泰坦之灵","5000泰坦之灵","我换个别的。"],[function():void
         {
            SocketConnection.addCmdListener(45575,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45575,arguments.callee);
               isSuccessPass(2);
            });
            SocketConnection.send(45575,5);
         },function():void
         {
            SocketConnection.addCmdListener(45575,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45575,arguments.callee);
               isSuccessPass(2);
            });
            SocketConnection.send(45575,6);
         },function():void
         {
            SocketConnection.addCmdListener(45575,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45575,arguments.callee);
               isSuccessPass(2);
            });
            SocketConnection.send(45575,7);
         },function():void
         {
            onMonsterClick(2);
         }]);
      }
      
      private static function zuanshi() : void
      {
         NpcDialog.show(NPC.SHENMIHEIYING,["额.....你居然有钻石。！"],["5钻（直接通过）","我换个别的"],[function():void
         {
            KTool.buyProductByCallback(243087,1,function():void
            {
               SocketConnection.addCmdListener(45575,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(45575,arguments.callee);
                  isSuccessPass(3);
               });
               SocketConnection.send(45575,8);
            });
         },function():void
         {
            onMonsterClick(2);
         }]);
      }
      
      private static function isSuccessPass(param1:int = 0) : void
      {
         var sindex:int = param1;
         KTool.getMultiValue([3629],function(param1:Array):void
         {
            var completeNum:int = 0;
            var va:Array = param1;
            completeNum = 0;
            var i:int = 0;
            while(i < 3)
            {
               if(BitUtils.getBit(va[0],i) > 0)
               {
                  completeNum++;
               }
               i++;
            }
            if(BitUtils.getBit(va[0],2) > 0)
            {
               NpcDialog.show(NPC.SHENMIHEIYING,["有点意思，有点意思，我最喜欢出手大方的你了。"],["小意思小意思。"],[function():void
               {
                  if(completeNum >= 3)
                  {
                     startPreTask(3);
                  }
                  else
                  {
                     update();
                  }
               }]);
            }
            else if(sindex == 1)
            {
               seerDou(true);
            }
            else if(sindex == 2)
            {
               taiTan(true);
            }
            else
            {
               update();
            }
         });
      }
      
      private static function startPreTask(param1:int) : void
      {
         var i:int;
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         CommonUI.removeYellowArrow(taskMc.btn_0);
         i = 0;
         while(i < 3)
         {
            CommonUI.removeYellowArrow(taskMc["monster_" + i]);
            i++;
         }
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(NODE_0_BUFFER_ID + (index - 1),true,function():void
            {
               KTool.showMapPlayerAndMonster();
               LevelManager.iconLevel.visible = true;
               if(index == 1 || index == 2)
               {
                  update();
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("DragonMistCirclePanel"));
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function get isNode0TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_0_BUFFER_ID);
      }
      
      private static function get isNode1TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_1_BUFFER_ID);
      }
      
      private static function get isNode2TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_2_BUFFER_ID);
      }
      
      public static function destroy() : void
      {
      }
   }
}
