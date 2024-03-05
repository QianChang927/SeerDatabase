package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public class Task730
   {
      
      private static var _mcForMap671:MovieClip;
      
      private static var _mcForMap672:MovieClip;
      
      private static var _jixie:MovieClip;
      
      private static var _open:MovieClip;
      
      private static var _arrow:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      private static const TASK_ID:uint = 730;
       
      
      public function Task730()
      {
         super();
      }
      
      public static function initTaskForMap671(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap671 = _map.conLevel["task_730_1"];
         _arrow = _map.conLevel["arrow"];
         _arrow.visible = false;
         _mcForMap671.visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcDialog.show(NPC.SEER,["哎…不知道暗黑那里怎么样了，异能石究竟去了哪里呢？莫非和那群黑影有关？"],["我还是继续探索吧！","先在这里等暗黑吧！"],[function():void
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  goStep1();
               });
            }]);
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  goStep1();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  goStep4();
               }
            });
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            if(TasksManager.getTaskStatus(737) == TasksManager.UN_ACCEPT)
            {
               _mcForMap671.visible = true;
               _mcForMap671.gotoAndStop(6);
            }
         }
      }
      
      public static function initTaskForMap672(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap672 = _map.conLevel["task_730_2"];
         _jixie = _map.conLevel["task_730_3"];
         _open = _map.conLevel["open"];
         _mcForMap672.visible = false;
         _jixie.visible = false;
         _open.visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  goStep2();
               }
               if(param1[0] && param1[1] && !param1[2] || param1[0] && param1[1] && param1[2] && !param1[3])
               {
                  goStep3();
               }
            });
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            _mcForMap672.visible = true;
            _mcForMap672.gotoAndStop(7);
         }
      }
      
      public static function initTaskForMap5(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  goStep5();
               }
            });
            return;
         }
      }
      
      public static function goStep1() : void
      {
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         MainManager.actorModel.visible = false;
         NonoManager.nonoGoHome();
         _mcForMap671.visible = true;
         AnimateManager.playMcAnimate(_mcForMap671,1,"task_730_1_am1",function():void
         {
            NpcDialog.show(NPC.SEER,["不好，好像是精灵的声音，我还是先隐蔽一下再说，看看到底是谁！"],["不会是那群黑影吧！！"],[function():void
            {
               AnimateManager.playMcAnimate(_mcForMap671,2,"task_730_1_am2",function():void
               {
                  NpcDialog.show(NPC.SEER,["好奇怪！那不是异能精灵艾特吗？它怎么了，如此慌张！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.AITE,["是谁…是谁在那里，赶快出来！"],["是我，是我…..赛尔啦！"],[function():void
                     {
                        NpcDialog.show(NPC.AITE,["吓我一跳，原来是你啊！这里马上就要发生大事了！我的朋友都被几个黑影抓去了0xff0000能量控制室0xffffff！好像是为了解封异能石的能量，呜呜呜…."],["什么..异能石、能量控制室？？"],[function():void
                        {
                           AnimateManager.playMcAnimate(_mcForMap671,3,"task_730_1_am3",function():void
                           {
                              NpcDialog.show(NPC.SEER,["又是那些可恶的黑影！放心吧！小家伙，我这就去山洞的尽头，你先去通知其他异能精灵吧！"],["原来异能石真的是被他们拿走了！"],[function():void
                              {
                                 TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       _arrow.visible = true;
                                       _mcForMap671.visible = false;
                                       MainManager.actorModel.x = 600;
                                       MainManager.actorModel.y = 450;
                                       MainManager.actorModel.visible = true;
                                    }
                                 });
                              }]);
                           });
                        }]);
                     }]);
                  });
               });
            }]);
         });
      }
      
      public static function goStep2() : void
      {
         _mcForMap672.visible = true;
         _jixie.visible = true;
         MainManager.actorModel.visible = false;
         NonoManager.nonoGoHome();
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["breakJiXie"].visible = false;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("DemonSpaceSwf_1"),function():void
         {
            NpcDialog.show(NPC.SEER,["这里一定就是能量控制室，异能石果然在这里，那些黑影在做什么，好像是一种仪式啊！"],["先观察一下！"],[function():void
            {
               AnimateManager.playMcAnimate(_mcForMap672,1,"task_730_2_am1",function():void
               {
                  NpcDialog.show(NPC.SEER,["原来它们的目的是解封异能石，得到异能王的强大能量，我一定要想办法阻止他们，否则异能星甚至整个星系都会受到牵连！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(_mcForMap672,2,"task_730_2_am2",function():void
                     {
                        NpcDialog.show(NPC.SEER,["等等，难道他们想用自己的能力加快解封异能石的时间吗？不行我一定要阻止它们！"],["但是该怎么做呢！"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["一定有什么办法可以阻止它们，让我先观察一下！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.PEIEN,["不好，我感觉我的能量正在慢慢被吞噬，难道异能王正在吸收我们几个的能量吗？"],["咦！好像有点不对劲啊！"],[function():void
                              {
                                 TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       goStep3();
                                    }
                                 });
                              }]);
                           });
                        }]);
                     });
                  });
               });
            }]);
         });
      }
      
      public static function goStep3() : void
      {
         _mcForMap672.visible = true;
         _mcForMap672.gotoAndStop(3);
         _jixie.visible = true;
         MainManager.actorModel.visible = false;
         NonoManager.nonoGoHome();
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["breakJiXie"].visible = false;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_730_1"),function():void
         {
            NpcDialog.show(NPC.SEER,["好惊人的能力啊！异能王竟然吸收了这些家伙的邪恶能量，难道异能王会变的无比邪恶吗？"],["我还是先去解救那些异能精灵吧！"],[function():void
            {
               _map.conLevel["petTig"].visible = true;
               _map.conLevel["petTig"].buttonMode = true;
               _map.conLevel["petTig"].addEventListener(MouseEvent.CLICK,onPetClick);
            }]);
         });
      }
      
      private static function onPetClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _map.conLevel["petTig"].buttonMode = false;
         _map.conLevel["petTig"].removeEventListener(MouseEvent.CLICK,onPetClick);
         NpcDialog.show(NPC.JIENI,["赛尔，感谢你及时赶到，否则我们可就完了！"],["你们快走吧！这里太危险了！"],[function():void
         {
            NpcDialog.show(NPC.DADILA,["是啊！我们还是快走吧！异能王随时都会苏醒！"],["恩，这里就交给我吧！"],[function():void
            {
               AnimateManager.playMcAnimate(_mcForMap672,3,"task_730_2_am3",function():void
               {
                  NpcDialog.show(NPC.AITE,["赛尔，你终于成功了，感谢你救了我的朋友，不过我想有件事你应该知道！"],["啊！是什么啊！"],[function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_730_1"),function():void
                     {
                        NpcDialog.show(NPC.AITE,["所以，保护异能石是我们异能精灵毕生的义务，希望你能帮助我们，可以吗？"],["恩，这件事我一定会帮到底的！"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["我现在先想办法阻止这个装置再说，你先去冰窟等我吧！我很快就来！"],["恩，好，我等你！"],[function():void
                           {
                              AnimateManager.playMcAnimate(_mcForMap672,4,"task_730_2_am4",function():void
                              {
                                 MainManager.actorModel.visible = true;
                                 _open.visible = true;
                                 _open["open_2"].visible = false;
                                 _open["open_3"].visible = false;
                                 _open["open_4"].visible = false;
                                 _open["open_1"].visible = true;
                                 _open["open_1"].buttonMode = true;
                                 _open["open_1"].addEventListener(MouseEvent.CLICK,onOpen1);
                              });
                           }]);
                        }]);
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function onOpen1(param1:MouseEvent) : void
      {
         _jixie.gotoAndStop(2);
         _open["open_1"].removeEventListener(MouseEvent.CLICK,onOpen1);
         _open["open_1"].visible = false;
         _open["open_1"].buttonMode = false;
         _open["open_2"].visible = true;
         _open["open_2"].buttonMode = true;
         _open["open_2"].addEventListener(MouseEvent.CLICK,onOpen2);
      }
      
      private static function onOpen2(param1:MouseEvent) : void
      {
         _jixie.gotoAndStop(3);
         _open["open_2"].removeEventListener(MouseEvent.CLICK,onOpen2);
         _open["open_2"].visible = false;
         _open["open_2"].buttonMode = false;
         _open["open_3"].visible = true;
         _open["open_3"].buttonMode = true;
         _open["open_3"].addEventListener(MouseEvent.CLICK,onOpen3);
      }
      
      private static function onOpen3(param1:MouseEvent) : void
      {
         _jixie.gotoAndStop(4);
         _open["open_3"].removeEventListener(MouseEvent.CLICK,onOpen3);
         _open["open_3"].visible = false;
         _open["open_3"].buttonMode = false;
         _open["open_4"].visible = true;
         _open["open_4"].buttonMode = true;
         _open["open_4"].addEventListener(MouseEvent.CLICK,onKeyClick);
      }
      
      public static function onKeyClick(param1:Event = null) : void
      {
         var e:Event = param1;
         _open["open_4"].visible = false;
         _open["open_4"].buttonMode = false;
         _open["open_4"].removeEventListener(MouseEvent.CLICK,onKeyClick);
         AnimateManager.playMcAnimate(_jixie,5,"jixieBreak",function():void
         {
            NpcDialog.show(NPC.SEER,["太好了，异能石暂时已经无法吸收能量，现在应该想办法把它弄到异能冰窟去了！"],null,null,false,function():void
            {
               CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_730_2"),function():void
               {
                  NpcDialog.show(NPC.SEER,["不好，异能王苏醒了，但是感觉它好像能量不足一样！看来要尽快将异能石送回异能泉水那里，否则就太迟了！"],null,null,false,function():void
                  {
                     MainManager.actorModel.visible = false;
                     NonoManager.nonoGoHome();
                     AnimateManager.playMcAnimate(_mcForMap672,5,"task_730_2_am5",function():void
                     {
                        NpcDialog.show(NPC.ANHEI_SEER,["看来你已经找到异能石了，我正想和你说呢！等等，我的兄弟都怎么了？"],["他们已经被异能王吸收了全部的能量！"],[function():void
                        {
                           NpcDialog.show(NPC.ANHEI_SEER,["什么！可恶……"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.ANHEI_SEER,["看来他们的计划已经彻底失败，那我只能实行第二套计划了！"],["暗黑，快来帮忙啊！ "],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["快帮我把异能石运回异能冰窟吧！"],["恩，我这就来！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(_mcForMap672,6,"task_730_2_am6",function():void
                                    {
                                       TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                                       {
                                          MapManager.changeMap(671);
                                       });
                                    });
                                 }]);
                              }]);
                           });
                        }]);
                     });
                  });
               });
            });
         });
      }
      
      public static function goStep4() : void
      {
         _mcForMap671.visible = true;
         _mcForMap671.gotoAndStop(4);
         MainManager.actorModel.visible = false;
         NonoManager.nonoGoHome();
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         NpcDialog.show(NPC.SEER,["太好了，现在异能石一定可以受到异能泉水的洗礼，相信这样可以进化异能王所吸收的邪恶能量！"],["暗黑你也别难过了！"],[function():void
         {
            NpcDialog.show(NPC.ANHEI_SEER,["可恶的异能王，都是因为你我的兄弟才会这样！我现在就毁了你！"],["等等…"],[function():void
            {
               AnimateManager.playMcAnimate(_mcForMap671,4,"task_730_1_am4",function():void
               {
                  NpcDialog.show(NPC.SEER,["暗黑你冷静点，你这样反而会害了异能星和异能精灵！我知道你很伤心，但是…"],["不要再说了，我先走了，你自己小心！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_mcForMap671,5,"task_730_1_am5",function():void
                     {
                        NpcDialog.show(NPC.SEER,["对了，我应该把这块异能石和异能泉水都拿回赛尔号，让博士研究一下，说不定会有什么发现！"],["前往博士实验室！"],[function():void
                        {
                           TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 MapManager.changeMap(5);
                              }
                           });
                        }]);
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      public static function goStep5() : void
      {
         NpcDialog.show(NPC.SEER,["博士…博士，我这里有新发现，你快看看吧！"],["让我看看是什么神奇的东西！"],[function():void
         {
            NpcDialog.show(NPC.DOCTOR,["哇！这可是本世纪最大的精灵发现啊！最好再给我点时间研究一下！我一有消息马上联系你！"],["恩恩，拜托了博士！希望早日可以得到结果！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_730_2"),function():void
               {
                  TasksManager.complete(TASK_ID,4);
               });
            }]);
         }]);
      }
      
      public static function destroy() : void
      {
         OgreController.isShow = true;
         if(_mcForMap672)
         {
            _mcForMap672.removeEventListener(MouseEvent.CLICK,onPetClick);
         }
         if(Boolean(_open) && Boolean(_open["open_1"]))
         {
            _open["open_1"].removeEventListener(MouseEvent.CLICK,onOpen1);
         }
         if(Boolean(_open) && Boolean(_open["open_2"]))
         {
            _open["open_2"].removeEventListener(MouseEvent.CLICK,onOpen2);
         }
         if(Boolean(_open) && Boolean(_open["open_3"]))
         {
            _open["open_3"].removeEventListener(MouseEvent.CLICK,onOpen3);
         }
         if(Boolean(_open) && Boolean(_open["open_4"]))
         {
            _open["open_4"].removeEventListener(MouseEvent.CLICK,onKeyClick);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["petTig"]))
         {
            _map.conLevel["petTig"].removeEventListener(MouseEvent.CLICK,onPetClick);
         }
         _mcForMap671 = null;
         _mcForMap672 = null;
         _jixie = null;
         _open = null;
         _arrow = null;
         _map = null;
      }
   }
}
