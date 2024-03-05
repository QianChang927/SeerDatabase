package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class PurneySuperEvoPreheatSecondControl
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      public static const BUFFERID:uint = 1362;
       
      
      public function PurneySuperEvoPreheatSecondControl()
      {
         super();
      }
      
      public static function setup() : void
      {
      }
      
      public static function playMc(param1:int) : void
      {
         var index:int = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_purneySuperEvoPreheatSecond"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map = MapManager.currentMap;
            _map.controlLevel.addChild(taskMc);
            startPreTask(index);
         });
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         hideIcon();
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            if(index == 1)
            {
               Dialog1();
            }
            else if(index == 2)
            {
               Dialog2();
            }
            else if(index == 3)
            {
               Dialog3();
            }
            else if(index == 4)
            {
               showIcon();
               SocketConnection.sendWithCallback(43723,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("PurneySuperEvoPreheatSecondScenesPanel"),"正在打开....");
               },3,1);
            }
            else if(index == 5)
            {
               Dialog4();
            }
            else if(index == 6)
            {
               Dialog5();
            }
            else if(index == 7)
            {
               Dialog6();
            }
         };
         storyPlayer.start();
      }
      
      private static function Dialog1() : void
      {
         NpcDialog.show(NPC.KEERHUODE,["你也接到消息了吗，" + MainManager.actorInfo.nick + "？"],[""],[function():void
         {
            NpcDialog.show(NPC.SEER,["没错，我第一时间就赶过来了。"],[""],[function():void
            {
               NpcDialog.show(NPC.KEERHUODE,["没想到，真的有人敢于直接打谱尼的主意。要不是谱尼现在情况特殊，他们根本毫无机会！"],[""],[function():void
               {
                  NpcDialog.show(NPC.SEER,["究竟是怎么一回事？迈尔斯和奥斯卡呢？"],[""],[function():void
                  {
                     NpcDialog.show(NPC.KEERHUODE,["我估计是混沌教派的眼线探查到现在谱尼的情况，正在进行试探性渗透。如果我们不能将这次的潜入者抓获，后果不堪设想！"],[""],[function():void
                     {
                        NpcDialog.show(NPC.KEERHUODE,["迈尔斯和奥斯卡都有着圣灵的属性，据他们所说，他们也无法感知到这名诡异的渗透者，想必是混沌教派已经研究出了一种针对圣灵系的方法。"],[""],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["这真是太可怕了，这种节骨眼上可千万不能掉链子。我们最好立刻开始行动！"],["我已经有办法了。"],[function():void
                           {
                              _map.controlLevel.removeChild(taskMc);
                              taskMc = null;
                              playMc(2);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog2() : void
      {
         NpcDialog.show(NPC.KEERHUODE,["看到这里了吗？我们可以在这里布置一个陷阱。"],[""],[function():void
         {
            NpcDialog.show(NPC.SEER,["为什么选择这里？"],[""],[function():void
            {
               NpcDialog.show(NPC.KEERHUODE,["你不是精灵，感受不到元素的波动。这里是圣灵气息的交汇点，如果那个渗透者不知道谱尼的具体位置，一定会循着圣灵的气息来到这里。"],[""],[function():void
               {
                  NpcDialog.show(NPC.SEER,["居然还有这种操作！厉害了，那它一定会落入我们的陷阱之中！"],[""],[function():void
                  {
                     NpcDialog.show(NPC.KEERHUODE,["是的，我们赶紧把陷阱布置好，然后在旁边等着就行了！"],[""],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["布置陷阱我在行！看我的！"],["那就麻烦你了！"],[function():void
                        {
                           showIcon();
                           _map.controlLevel.removeChild(taskMc);
                           taskMc = null;
                           SocketConnection.sendWithCallback(43723,function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("PurneySuperEvoPreheatSecondScenesPanel"),"正在打开....");
                           },1,1);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog3() : void
      {
         NpcDialog.show(NPC.SEER,["呼……搞定！让我看看，嗯……简直是天衣无缝！"],[""],[function():void
         {
            NpcDialog.show(NPC.KEERHUODE,["想不到你还有这一手，原来你除了扔胶囊，这些手工陷阱你也很在行啊！"],[""],[function():void
            {
               NpcDialog.show(NPC.SEER,["那当然！这一路航行过来，我可是用陷阱捉过不少坏蛋呢！百试百灵！"],[""],[function():void
               {
                  NpcDialog.show(NPC.KEERHUODE,["好了，我们快躲起来，接下来就等那个神秘精灵上钩了！"],["我们走！"],[function():void
                  {
                     _map.controlLevel.removeChild(taskMc);
                     taskMc = null;
                     playMc(4);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog4() : void
      {
         NpcDialog.show(NPC.SEER,["看！陷阱里有只精灵！我们抓到他了！"],[""],[function():void
         {
            NpcDialog.show(NPC.KEERHUODE,["让我来看看，究竟是什么人这么大胆，敢潜入圣灵峰！"],[""],[function():void
            {
               NpcDialog.show(NPC.SEER,["……"],[""],[function():void
               {
                  NpcDialog.show(NPC.SEER,["它看起来好可爱，我们会不会是误抓了谱尼的宠物呀？"],[""],[function():void
                  {
                     NpcDialog.show(NPC.KEERHUODE,["不可能，谱尼根本没有宠物！"],[""],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["我觉得我们还是让它醒过来，然后再问问它吧！"],["那也可以。"],[function():void
                        {
                           _map.controlLevel.removeChild(taskMc);
                           taskMc = null;
                           showIcon();
                           BufferRecordManager.setMyState(BUFFERID,true,function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("PurneySuperEvoPreheatSecondScenesPanel"),"正在打开....");
                           });
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog5() : void
      {
         NpcDialog.show(NPC.SHENGGUANGZHIZI,["爸爸！爸爸！不对，你不是圣灵系的精灵……你是谁？"],[""],[function():void
         {
            NpcDialog.show(NPC.SEER,["爸爸？这只精灵不会是被刚才的陷阱夹傻了吧？"],[""],[function():void
            {
               NpcDialog.show(NPC.KEERHUODE,["这居然是一只圣灵系的精灵！第四只圣灵系精灵吗？可是奇怪，为什么谱尼会感觉不到他的气息呢？"],[""],[function():void
               {
                  NpcDialog.show(NPC.SHENGGUANGZHIZI,["你们都是坏人！……呜呜呜，爸爸在哪里……"],[""],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["我们可不是坏人，小家伙，你的爸爸是谁呀？"],[""],[function():void
                     {
                        NpcDialog.show(NPC.SHENGGUANGZHIZI,["我的爸爸？不知道，但我看到他就能认出来！"],[""],[function():void
                        {
                           NpcDialog.show(NPC.KEERHUODE,["这精灵到处透露着诡异，不如我们找谱尼问一问？我们带着他一起，他想做什么也做不了。"],["好。"],[function():void
                           {
                              _map.controlLevel.removeChild(taskMc);
                              taskMc = null;
                              playMc(7);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog6() : void
      {
         NpcDialog.show(NPC.PUNI,["为什么……我感觉到了亲切，却感觉不到它的位置……"],[""],[function():void
         {
            NpcDialog.show(NPC.SHENGGUANGZHIZI,["爸爸！我终于找到你了，爸爸！"],[""],[function():void
            {
               NpcDialog.show(NPC.PUNI,["…………"],[""],[function():void
               {
                  NpcDialog.show(NPC.KEERHUODE,["哇，谱尼，你什么时候有的，万万没想到啊！"],[""],[function():void
                  {
                     NpcDialog.show(NPC.PUNI,["哼，胡闹！"],[""],[function():void
                     {
                        NpcDialog.show(NPC.PUNI,["这的确是一只圣灵系精灵没错，但他跟迈尔斯和奥斯卡有很大的区别。我总觉得他非常熟悉……奇怪了，我在哪里感受过他的波动。"],[""],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["为什么我觉得这个小家伙刚刚出生的样子呀？啥都不知道，还在找爸爸！"],[""],[function():void
                           {
                              NpcDialog.show(NPC.KEERHUODE,["其实谱尼说的没错。本来我没注意到，但他刚才一说，我也发现了。这只精灵身上散发的波动，虽然从来没有接触过，却有一种熟悉的感觉。"],[""],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["我只是个铁皮人，感觉不到你们说的气息，好像很玄乎的样子。小家伙，你从哪里来呀？"],[""],[function():void
                                 {
                                    NpcDialog.show(NPC.SHENGGUANGZHIZI,["我……我也不知道。我就记得我刚刚睡醒就在这里，周围什么都没有，但我记得在我刚睡醒的时候有一股气息，我需要找到它！"],[""],[function():void
                                    {
                                       NpcDialog.show(NPC.SHENGGUANGZHIZI,["现在我找到了，这就是我的爸爸，这里就是我的家！"],[""],[function():void
                                       {
                                          NpcDialog.show(NPC.PUNI,["听起来确实像是刚刚诞生呢。可他为什么会认定谱尼作为爸爸呢？"],[""],[function():void
                                          {
                                             NpcDialog.show(NPC.KEERHUODE,["我想我知道了！谱尼，他的确是你的孩子！"],[""],[function():void
                                             {
                                                NpcDialog.show(NPC.PUNI,["哼，胡说，我一直在这里修炼，没有离开过半步！"],[""],[function():void
                                                {
                                                   NpcDialog.show(NPC.KEERHUODE,["哈哈，正是如此……他就是你圣光结界所孕育的精灵呀！第四只——圣灵系精灵！"],["什么？"],[function():void
                                                   {
                                                      showIcon();
                                                      _map.controlLevel.removeChild(taskMc);
                                                      taskMc = null;
                                                      ModuleManager.showModule(ClientConfig.getAppModule("PurneySuperEvoPreheatSecondScenesPanel"),"正在打开....",true);
                                                   }]);
                                                }]);
                                             }]);
                                          }]);
                                       }]);
                                    }]);
                                 }]);
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      public static function Dialog7() : void
      {
         NpcDialog.show(NPC.SEER,["你是说，他的爸爸其实是这个圣光结界？"],[""],[function():void
         {
            NpcDialog.show(NPC.KEERHUODE,["正是。圣光结界存在已久，而谱尼在近期因为能量不稳定，导致结界能量充盈外溢。我猜是因为圣灵峰的灵气，导致这些能量形成了新的生命。"],[""],[function():void
            {
               NpcDialog.show(NPC.KEERHUODE,["这只精灵由圣灵的气息孕育诞生，自然与圣光结界的气息大致相同，谱尼无法察觉；但他的行为引起了结界的变化，导致谱尼感受到了“入侵”。"],[""],[function():void
               {
                  NpcDialog.show(NPC.SEER,["居然还有这种操作？"],[""],[function():void
                  {
                     NpcDialog.show(NPC.PUNI,["哈，这只小精灵跟我还真是有缘呢。"],[""],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["天呐，它太可爱了！小宝宝，到我这里来~"],[""],[function():void
                        {
                           showIcon();
                           SocketConnection.sendWithCallback(43723,function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("PurneySuperEvoPreheatSecondShowPetPanel"),"正在打开....");
                           },1,4);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      public static function Dialog8() : void
      {
         NpcDialog.show(NPC.SHENGGUANGZHIZI,["爸爸！他们欺负我！"],[""],[function():void
         {
            NpcDialog.show(NPC.SEER,["啊呀！我没有我没有，我只是想抱抱你啦。"],[""],[function():void
            {
               NpcDialog.show(NPC.KEERHUODE,["哈哈哈，看你把它吓的。"],[""],[function():void
               {
                  NpcDialog.show(NPC.PUNI,["你跟着这位大哥哥一起玩，可以快速成长起来，这对你来说是一次很好的机会。唔……以后你们就叫他圣光之子吧！"],[""],[function():void
                  {
                     NpcDialog.show(NPC.PUNI,["这次只是虚惊一场，但我现在确实已经到了关键的时刻，不能再这样分心了。现在的黑暗势力复杂而强大，近期还要依赖各位，多多帮助啊！"],[""],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["尽管放心，我们一定会把索伦森他们打的落花流水！"],[""],[function():void
                        {
                           NpcDialog.show(NPC.KEERHUODE,["谱尼，如果有什么需要我们的地方，你尽管说。毕竟，你才是我们的最强王牌！我们都期待着你展现力量的时刻！"],[""],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["小家伙，以后我们就一起旅行吧！"],["嗷！"],[function():void
                              {
                                 showIcon();
                                 ModuleManager.showModule(ClientConfig.getAppModule("PurneySuperEvoPreheatSecondEndPanel"),"正在打开....");
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function showIcon() : void
      {
         KTool.showMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
      }
      
      private static function hideIcon() : void
      {
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
   }
}
