package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class Task819
   {
      
      private static const TASK_ID:uint = 819;
      
      private static var _map:BaseMapProcess;
      
      private static var _mcForMap57:MovieClip;
      
      private static var _mcForMap515:MovieClip;
      
      private static var _mcForMap693:MovieClip;
       
      
      public function Task819()
      {
         super();
      }
      
      public static function acceptTask() : void
      {
         goStep1();
      }
      
      public static function initTaskForMap4() : void
      {
         goStep1();
      }
      
      public static function initTaskForMap57(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap57 = _map.depthLevel["task_819_1"];
         _mcForMap57.visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!(Boolean(param1[0]) && !param1[1]))
               {
                  if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
                  {
                     goStep3();
                  }
                  else
                  {
                     DisplayUtil.removeForParent(_mcForMap57);
                  }
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_mcForMap57);
         }
      }
      
      public static function initTaskForMap515(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap515 = _map.animatorLevel["task_819_2"];
         _mcForMap515.visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  goStep4();
               }
               else
               {
                  DisplayUtil.removeForParent(_mcForMap515);
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_mcForMap515);
         }
      }
      
      public static function initTaskForMap693(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap693 = _map.conLevel["task_819_3"];
         _mcForMap693.visible = false;
         _map.conLevel["pojiasuosiTig"].visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  goStep5();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
               {
                  goStep6();
               }
               else
               {
                  DisplayUtil.removeForParent(_mcForMap693);
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_mcForMap693);
         }
      }
      
      private static function initRule(param1:MovieClip, param2:Boolean = false, param3:uint = 1, param4:Boolean = true, param5:Boolean = true, param6:Boolean = true, param7:Boolean = true) : void
      {
         param1.visible = param2;
         param1.gotoAndStop(param3);
         ToolBarController.showOrHideAllUser(param4);
         if(!param5)
         {
            NonoManager.nonoGoHome();
         }
         if(!param6)
         {
            MainManager.selfVisible = false;
         }
         if(!param7)
         {
            OgreController.isShow = false;
         }
      }
      
      public static function goStep1() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "你终于回来了！我还以为你被困Y星呢？回来就好…回来就好啊！"],["恩恩，事情是这样的！"],[function():void
         {
            CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_816"),function():void
            {
               NpcDialog.show(NPC.SEER,["船长，我也只能长话短说了，朱雀还提到珀伽索斯的事情由它来解决！现在我想去0xff0000上古圣战0xffffff的现场0xff0000尼古尔星0xffffff勘察一下，说不定会发现新线索哦！等我好消息吧！船长…"],["向尼古尔星出发！！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_819_1"),function():void
                  {
                     TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           MapManager.changeMap(57);
                        }
                     });
                  });
               }]);
            });
         }]);
      }
      
      public static function goStep2(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(590,470),function():void
         {
            CommonUI.removeYellowExcal(_map.conLevel["miniNPC"]);
            NpcDialog.show(NPC.MILUO,["尼古尔星有着很多秘密，这需要你一步一步去探寻……"],["#101仙境中的顶尖对决","哇哦！我的好奇心被激发了！"],[function():void
            {
               step2Accept();
            }]);
         });
      }
      
      private static function step2Accept() : void
      {
         initRule(_mcForMap57,false,1,false,true,true,false);
         NpcDialog.show(NPC.MILUO,["最近你有听说关于上古圣战的传言吗？这里可是当时决战的圣地啊！对于我来说这很是太荣幸了！"],["哇哦！难道你也是参与者？"],[function():void
         {
            NpcDialog.show(NPC.MILUO,["那是！！我们米洛尼一族在尼古尔星上已经生活了千百年了，那场圣战当然不会忘记！"],["太好了，快告诉我吧！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_819_2"),function():void
               {
                  NpcDialog.show(NPC.MILUO,["事情就是这样的，不过现在想想，那时候珀伽索斯从天上坠落是有点奇怪，好好的怎么会突然…其中一定是有什么原因的！"],["恩，你的描述果然和朱雀说的一样！"],[function():void
                  {
                     NpcDialog.show(NPC.MILUO,["不过我听说自从上次珀伽索斯消失后就一直居住在一个神秘的地方，好像是叫0xff0000拉珀0xffffff什么，我也记不清楚了！那里可是仙境哦！"],["真的吗？这个线索太重要了！"],[function():void
                     {
                        NpcDialog.show(NPC.MILUO,["别高兴的太早，珀伽索斯一定会带着当年的仇恨向四大守护神宣战，这次的对决可谓是0xff0000神与神之间的较量0xffffff！等等，我们好像被监视了…."],null,null,false,function():void
                        {
                           TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 goStep3();
                              }
                           });
                        });
                     }]);
                  }]);
               });
            }]);
         }]);
      }
      
      public static function goStep3() : void
      {
         initRule(_mcForMap57,true,1,false,false,false,false);
         AnimateManager.playMcAnimate(_mcForMap57,1,"task_819_mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["可恶的海盗，你为什么会出现在这里？？快说！！！"],["额…我也是奉命行事而已！"],[function():void
            {
               NpcDialog.show(NPC.SEER,["那么，那两个蠢货一定也在附近咯！是不是啊！快说…你最好老实交代，免遭皮肉之苦！！哼哼！否则…."],["它..它们就在…"],[function():void
               {
                  AnimateManager.playMcAnimate(_mcForMap57,2,"task_819_mc2",function():void
                  {
                     NpcDialog.show(NPC.MILUO,["混蛋，居然偷听我们说话！这次一定要让你们尝尝我狼牙锤的滋味！"],["哈哈！又有好戏看咯！"],[function():void
                     {
                        MainManager.selfVisible = true;
                        AnimateManager.playMcAnimate(_mcForMap57,3,"task_819_mc3",function():void
                        {
                           NpcDialog.show(NPC.MILUO,["哼哼，知道我的厉害了吧！放你们出来可以，不过你们要老实交代，别再惹我生气！"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(_mcForMap57,4,"task_819_mc4",function():void
                              {
                                 NpcDialog.show(NPC.ZOG_20111027,["嘶….疼死我了！居然打海盗的屁股，你们胆子不小嘛！"],["佐格，你来这里干什么，快说！"],[function():void
                                 {
                                    NpcDialog.show(NPC.ALLISON_20111027,["小子，居然敢如此无礼，告诉你吧！0xff0000天马珀伽索斯0xffffff一定会成为海盗的精灵，哈哈哈！"],["什么，你们居然想抓天马？"],[function():void
                                    {
                                       NpcDialog.show(NPC.ZOG_20111027,["大哥，我们还是先走吧！先锋部队已经前往拉珀尔仙境了，估计现在已经将珀伽索斯降服了，你就望尘莫及吧！"],["海盗，你们的计谋一定不会得逞的！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(_mcForMap57,5,"task_819_mc5",function():void
                                          {
                                             NpcDialog.show(NPC.SEER,["不好，米洛尼！拉珀尔仙境里一定还有其他精灵，还有神兽，要是被海盗发现，那就不好了！我一定要去阻止海盗的计划！"],["立刻前往拉珀尔星！"],[function():void
                                             {
                                                TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                                                {
                                                   if(param1)
                                                   {
                                                      MapManager.changeMap(515);
                                                   }
                                                });
                                             }]);
                                          });
                                       }]);
                                    }]);
                                 }]);
                              });
                           });
                        });
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      public static function goStep4() : void
      {
         _map.conLevel["ship"].visible = false;
         initRule(_mcForMap515,true,1,false);
         AnimateManager.playMcAnimate(_mcForMap515,1,"task_819_mc1",function():void
         {
            CommonUI.addYellowExcal(_map.conLevel["task819buluTig"],20,0);
            _map.conLevel["task819buluTig"].buttonMode = true;
            _map.conLevel["task819buluTig"].addEventListener(MouseEvent.CLICK,onBuluClick);
         });
      }
      
      private static function onBuluClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         CommonUI.removeYellowExcal(_map.conLevel["task819buluTig"]);
         _map.conLevel["task819buluTig"].buttonMode = false;
         _map.conLevel["task819buluTig"].removeEventListener(MouseEvent.CLICK,onBuluClick);
         NpcDialog.show(NPC.BULU,["赛尔，你终于来了，前面我发现四大神兽路过这里，随后还出现了很多海盗，它们也进入了拉珀尔仙境，可能是去抓珀伽索斯的！"],["可恶，我一定要去阻止它们！"],[function():void
         {
            NpcDialog.show(NPC.BULU,["恩恩，我也去！你等等啊！你这样是去不了拉珀尔仙境的！不过我有办法的！你在这里等我哦！"],["太好了，还是布鲁聪明！"],[function():void
            {
               AnimateManager.playMcAnimate(_mcForMap515,2,"task_819_mc2",function():void
               {
                  _map.conLevel["ship"].visible = true;
                  NpcDialog.show(NPC.SEER,["哇！布鲁你简直太棒了，这样我们就能进入拉珀尔仙境了！"],["坐上小叶舟（点击小叶舟）"],[function():void
                  {
                     TasksManager.complete(TASK_ID,3);
                  }]);
               });
            }]);
         }]);
      }
      
      public static function goStep5() : void
      {
         initRule(_mcForMap693,true,1,false);
         _map.conLevel["pojiasuosiTig"].visible = true;
         NpcDialog.show(NPC.BULU,["赛尔，这里就是拉珀尔仙境，漂亮吧！呵呵！"],["哇哦！好漂亮啊！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["原来这里就是天马珀伽索斯生活的地方，果然是仙境，快看那些美丽的花朵，里面好像有什么东西？？"],["让我去看看里面是什么！"],[function():void
            {
               CommonUI.addYellowArrow(_map.conLevel["pojiasuosiTig"],0,0,300);
               _map.conLevel["pojiasuosiTig"].buttonMode = true;
               _map.conLevel["pojiasuosiTig"].addEventListener(MouseEvent.CLICK,onFlowerClick);
            }]);
         }]);
      }
      
      private static function onFlowerClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         LevelManager.closeMouseEvent();
         MainManager.actorModel.moveAndAction(new Point(400,320),function():void
         {
            LevelManager.openMouseEvent();
            CommonUI.removeYellowArrow(_map.conLevel["pojiasuosiTig"]);
            _map.conLevel["pojiasuosiTig"].visible = false;
            _map.conLevel["pojiasuosiTig"].buttonMode = false;
            _map.conLevel["pojiasuosiTig"].removeEventListener(MouseEvent.CLICK,onFlowerClick);
            AnimateManager.playMcAnimate(_mcForMap693,1,"task_819_mc1",function():void
            {
               NpcDialog.show(NPC.POJIASUOSI,["小子，你竟然敢闯入我的仙境，难道就不怕粉身碎骨吗？以前的那些小喽喽难道是你的同伴？"],["不不，才不是呢！我是来保护你的！"],[function():void
               {
                  AnimateManager.playMcAnimate(_mcForMap693,2,"task_819_mc2",function():void
                  {
                     NpcDialog.show(NPC.POJIASUOSI,["笑话！四大神兽我都不放在眼里，我怎么会需要你的保护，马上离开这里，否则…"],["你误会了天马，上古圣战也不是你所想的那样！"],[function():void
                     {
                        MainManager.selfVisible = false;
                        AnimateManager.playMcAnimate(_mcForMap693,3,"task_819_mc3",function():void
                        {
                           MainManager.selfVisible = true;
                           NpcDialog.show(NPC.BAI_HU,["天马，我们的约定也该到时间了吧！那么今天就来个了断吧！"],["等等，白虎！"],[function():void
                           {
                              NpcDialog.show(NPC.QINGLONG,["珀伽索斯要找的对手是我，上次那场战斗还没有真正结束，你不要插手！我很想领教它的终极力量！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.ZHUQUE,["我履行当初的约定，不过珀伽索斯这次你可看清楚了，我们四个现在都在这里，没有人会暗算你的！如果你改变现在的想法，我…"],["少废话，开战吧！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_819_3"),function():void
                                    {
                                       _mcForMap693.gotoAndStop(4);
                                       NpcDialog.show(NPC.POJIASUOSI,["为什么会这样！难道这就是我最终的力量吗？可恶….."],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.ZHUQUE,["天马，你清醒点吧！没有人质疑过你的实力和你的强大，但是一旦你激发自己的潜能达到一定程度，就会对自己造成伤害！"],["这是为什么？？？"],[function():void
                                          {
                                             NpcDialog.show(NPC.POJIASUOSI,["但是，之前我所做的一切…为什么我是最后一个知道的，为什么！！"],["我当初没告诉你真相，就是不忍心伤害你！所以…."],[function():void
                                             {
                                                TasksManager.complete(TASK_ID,4,function(param1:Boolean):void
                                                {
                                                   if(param1)
                                                   {
                                                      goStep6();
                                                   }
                                                });
                                             }]);
                                          }]);
                                       });
                                    });
                                 }]);
                              });
                           }]);
                        });
                     }]);
                  });
               }]);
            });
         });
      }
      
      public static function goStep6() : void
      {
         initRule(_mcForMap693,true,4,false);
         AnimateManager.playMcAnimate(_mcForMap693,4,"task_819_mc4",function():void
         {
            NpcDialog.show(NPC.ZOG_20111027,["哼！别以为这样就结束了，噩梦才刚刚开始，精灵吸收仪器虽然坏了，但是里面的元素会形成巨大的死黑能量圈，你们就等死吧！啊哈哈！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.POJIASUOSI,["不行，我只有这一次机会了！之前我所做的一切，已经无法弥补了，那就用我的生命来补偿你们吧！"],["等等，天马！"],[function():void
               {
                  AnimateManager.playMcAnimate(_mcForMap693,5,"task_819_mc5",function():void
                  {
                     NpcDialog.show(NPC.ZHUQUE,["不好，天马用自己的身躯拯救了我们，不过我想它应该也受了很重的伤，对了，我们快去寻找四色羽毛吧！说不定那些羽毛能够治愈它！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SEER,["恩，我们一定可以找到四色羽毛的，珀伽索斯你会慢慢好起来的！0xff0000大家出发一起寻找四色羽毛吧！0xffffff"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(_mcForMap693,6,"task_819_mc6",function():void
                           {
                              TasksManager.complete(TASK_ID,5,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    DisplayUtil.removeForParent(_mcForMap693);
                                    ToolBarController.showOrHideAllUser(true);
                                    MapManager.refMap();
                                 }
                              });
                           });
                        });
                     });
                  });
               }]);
            });
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(_map.conLevel["task819buluTig"])
            {
               _map.conLevel["task819buluTig"].removeEventListener(MouseEvent.CLICK,onBuluClick);
            }
            if(_map.conLevel["pojiasuosiTig"])
            {
               _map.conLevel["pojiasuosiTig"].removeEventListener(MouseEvent.CLICK,onFlowerClick);
            }
         }
         _mcForMap515 = null;
         _mcForMap57 = null;
         _mcForMap693 = null;
         _map = null;
         ToolBarController.showOrHideAllUser(true);
      }
   }
}
