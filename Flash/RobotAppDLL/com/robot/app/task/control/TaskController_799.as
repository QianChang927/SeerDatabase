package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task799;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.GamePlatformEvent;
   import com.robot.core.manager.GamePlatformManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import org.taomee.debug.DebugTrace;
   
   public class TaskController_799
   {
      
      public static const TASK_ID:uint = 799;
      
      private static var panel:AppModel;
      
      private static var panel2:AppModel;
       
      
      public function TaskController_799()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_" + TASK_ID),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + ", 我现在是心动，激动加冲动啊！OMG！"],["船长，你有喜欢的对象了？"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_799_5"),function():void
                  {
                     MapManager.changeMap(7);
                  },false);
               }
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.WULIGULA,["哎呦，我睡得正香呢，讨厌呀 ！"],["唔哩哇啦，工作时间不许睡觉！"],[function():void
               {
                  NpcDialog.show(NPC.WULIGULA,["哎，最近加班很多的，船长却一点奖励都不给，我心里当然不爽啦！"],["额……理解理解，我会帮你申诉的。"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["船长下达任务，我要驾驶探索飞船去卡兰星系搜寻最近发现的能量信号来源地。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.WULIGULA,["嗯，虽然我的新型飞船很强大，但这段时间陨石风暴频频出现，你可得注意安全哦。"],["嗯，放心吧！（开始航行）"],[function():void
                        {
                           loadGame();
                        }]);
                     });
                  }]);
               }]);
            }
            else if(Boolean(a[0]) && !a[1])
            {
               NpcDialog.show(NPC.NADUO,["啊啊啊啊！我们加利部落已经一团糟了！啊啊啊啊！"],["朋友，你没事吧，受什么刺激啦！"],[function():void
               {
                  NpcDialog.show(NPC.NADUO,["你又是谁，到这里来干嘛？"],["……额"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["我叫" + MainManager.actorInfo.formatNick + "，是赛尔号先锋队的队员，我们的飞船收到这颗星球发出的信号，所以赶过来了解情况，如果需要帮助尽管说，呵呵。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.NADUO,["哇！传说中的赛尔号！你就是赛尔铁皮机器人？文化素养果然很高啊，态度比那几个坏蛋好多了！"],["啊？你知道赛尔号？还有，什么坏蛋？发生什么事情了？"],[function():void
                        {
                           NpcDialog.show(NPC.NADUO,["先不说这个，我的房子被打坏了，如果你有诚意就赶紧帮我修好吧！"],["…………（点击场景里的房屋零件）"],[function():void
                           {
                              TasksManager.complete(TASK_ID,1,function():void
                              {
                                 Task799.initBreakHouse(true);
                              });
                           }]);
                        }]);
                     });
                  }]);
               }]);
            }
            else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && !a[3])
            {
               NpcDialog.show(NPC.NADUO,["你太厉害了！你有成为房地产商的潜质。"],["额……"],[function():void
               {
                  NpcDialog.show(NPC.NADUO,[MainManager.actorInfo.formatNick + "，我给你讲讲我们伯利兹精灵的故事吧，朋友之间要互相多了解嘛。"],["好呀，好呀，我迫不及待了！"],[function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("task_799_3"),function():void
                     {
                        NpcDialog.show(NPC.SEER,["哇！这么说，你们的领袖一定很厉害咯？"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.NADUO,["嗯嗯，我们加利部落的领袖丹迪为了保护领地，特意把那些入侵的坏蛋引开，他到现在还没回来，我真的很担心啊。"],["哦，对了！你前面一直提起的坏蛋是谁啊？"],[function():void
                           {
                              TasksManager.complete(TASK_ID,3,function():void
                              {
                                 Task799.showRuiersi();
                              });
                           }]);
                        });
                     });
                  }]);
               }]);
            }
         });
      }
      
      private static function loadGame() : void
      {
         SoundManager.stopSound();
         addGameEvent();
         if(panel2 == null)
         {
            panel2 = new AppModel(ClientConfig.getTaskModule("TaskPanel_799_game"),"正在打开星球游戏");
            panel2.setup();
         }
         panel2.init(0.8);
         panel2.show();
      }
      
      private static function addGameEvent() : void
      {
         GamePlatformManager.addEventListener(GamePlatformEvent.GAME_LOST,onFailGame);
         GamePlatformManager.addEventListener(GamePlatformEvent.GAME_WIN,onSucGame);
      }
      
      private static function removeGameEvent() : void
      {
         GamePlatformManager.removeEventListener(GamePlatformEvent.GAME_LOST,onFailGame);
         GamePlatformManager.removeEventListener(GamePlatformEvent.GAME_WIN,onSucGame);
      }
      
      public static function onFailGame(param1:GamePlatformEvent) : void
      {
         var e:GamePlatformEvent = param1;
         SoundManager.playSound();
         removeGameEvent();
         if(e.gameIndex == 799)
         {
            NpcDialog.show(NPC.SEER,["加油！加油！我一定能够成功！"],["继续前进！","下次再玩！"],[function():void
            {
               loadGame();
            }]);
         }
         else
         {
            DebugTrace.show("不是此游戏");
         }
      }
      
      public static function onSucGame(param1:GamePlatformEvent = null) : void
      {
         var e:GamePlatformEvent = param1;
         removeGameEvent();
         SoundManager.playSound();
         if(e.gameIndex == 799)
         {
            TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_799_1"),function():void
                  {
                     MapManager.changeMap(688);
                  });
               }
            });
         }
         else
         {
            DebugTrace.show("不是航行游戏");
         }
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
         if(panel2)
         {
            panel2.destroy();
            panel2 = null;
         }
         removeGameEvent();
      }
   }
}
