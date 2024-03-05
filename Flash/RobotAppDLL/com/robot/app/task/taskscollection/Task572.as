package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_572;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task572
   {
      
      private static var _map:BaseMapProcess;
      
      private static var kaku51_mc:MovieClip;
      
      private static var hitKakuNum:uint = 0;
      
      private static var MILU_mc:MovieClip;
      
      private static var matchHeap_mc:MovieClip;
      
      private static var kaku1_mc:MovieClip;
      
      private static var kaku2_mc:MovieClip;
      
      private static var kaku3_mc:MovieClip;
      
      private static var kaku_mc:MovieClip;
      
      private static var beer_mc:MovieClip;
      
      private static var bubble1_mc:MovieClip;
      
      private static var bubble2_mc:MovieClip;
      
      private static var bubble3_mc:MovieClip;
      
      private static var bubble_num:uint = 0;
      
      private static var timeID_bubble:uint = 0;
      
      private static var kaku32_mc:MovieClip;
      
      private static var leiyi_mc:MovieClip;
      
      private static var panel1:AppModel;
      
      private static var panel2:AppModel;
       
      
      public function Task572()
      {
         super();
      }
      
      public static function initTask_464(param1:BaseMapProcess) : void
      {
         var _loc3_:MovieClip = null;
         _map = param1;
         var _loc2_:MovieClip = _map.conLevel["katuMc"];
         _loc3_ = _map.conLevel["katuHatMc"];
         var _loc4_:uint;
         if((_loc4_ = uint(TasksManager.getTaskStatus(TaskController_572.TASK_ID))) == TasksManager.COMPLETE)
         {
            _loc2_.visible = false;
            _loc3_.visible = false;
         }
      }
      
      public static function initTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_572_0"),function():void
         {
            NpcDialog.show(NPC.SHIPER,["那本日记本可能是卡酷年匆忙走的时候留下的，你自己看……"],["是的，长官！"],[function():void
            {
               showNoteBook(1);
            }]);
         });
      }
      
      private static function showNoteBook(param1:uint) : void
      {
         if(panel1 == null)
         {
            panel1 = new AppModel(ClientConfig.getTaskModule("TaskPanel_572_1"),"正在打开笔记本面板");
            panel1.setup();
         }
         panel1.init(param1);
         panel1.show();
      }
      
      public static function onCloseApp1() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，我相信现在只有你才能够阻止这一切恐怖事件的发生！精灵们需要你的帮助……赛尔号需要你！"],["我一定会完成任务！"],[function():void
         {
         }]);
      }
      
      public static function initTask_51(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         matchHeap_mc = _map.conLevel["matchHeap_mc"];
         kaku51_mc = _map.conLevel["kaku51_mc"];
         kaku1_mc = _map.depthLevel["kaku1_mc"];
         kaku2_mc = _map.depthLevel["kaku2_mc"];
         kaku3_mc = _map.depthLevel["kaku3_mc"];
         MILU_mc = _map.conLevel["MILU_mc"];
         initMap_51(false);
         status = uint(TasksManager.getTaskStatus(TaskController_572.TASK_ID));
         if(status == TasksManager.UN_ACCEPT)
         {
            removeMCMap_51();
            return;
         }
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_572.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  initMap_51(true);
                  startProOne();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  initMap_51(true);
                  startProTwo();
               }
            });
         }
         else if(status == TasksManager.COMPLETE)
         {
            removeMCMap_51();
         }
      }
      
      private static function initMap_51(param1:Boolean) : void
      {
         matchHeap_mc.visible = kaku51_mc.visible = MILU_mc.visible = param1;
         kaku1_mc.visible = kaku2_mc.visible = kaku3_mc.visible = false;
      }
      
      private static function removeMCMap_51() : void
      {
         if(matchHeap_mc)
         {
            DisplayUtil.removeAllChild(matchHeap_mc);
         }
         if(MILU_mc)
         {
            DisplayUtil.removeAllChild(MILU_mc);
         }
         if(kaku51_mc)
         {
            DisplayUtil.removeAllChild(kaku51_mc);
         }
         if(Boolean(kaku1_mc) && Boolean(kaku2_mc) && Boolean(kaku3_mc))
         {
            DisplayUtil.removeAllChild(kaku1_mc);
            DisplayUtil.removeAllChild(kaku2_mc);
            DisplayUtil.removeAllChild(kaku3_mc);
         }
      }
      
      private static function startProOne() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_572_1"),function():void
         {
            NpcDialog.show(NPC.SEER,["可恶！！(#‵′)卡酷年！你给我住手！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.KAKUNIAN,["不是吧！我的恐怖计划难道泡汤了？哼！你以为我傻呀，你叫我住手我就住手……有本事来追我呀！╭(╯3╰)╮"],["你给我站住！(需要靠近它)"],[function():void
               {
                  TasksManager.complete(TaskController_572.TASK_ID,0,function(param1:Boolean):void
                  {
                     startProTwo();
                  });
               }]);
            });
         });
      }
      
      private static function startProTwo() : void
      {
         kaku51_mc.visible = false;
         kaku1_mc.visible = true;
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onWalk);
      }
      
      private static function onWalk(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         if(MainManager.actorModel.hitTestObject(kaku1_mc))
         {
            kaku1_mc.visible = false;
            kaku2_mc.visible = true;
         }
         if(MainManager.actorModel.hitTestObject(kaku2_mc))
         {
            if(kaku1_mc.visible)
            {
               return;
            }
            kaku2_mc.visible = false;
            kaku3_mc.visible = true;
         }
         if(MainManager.actorModel.hitTestObject(kaku3_mc))
         {
            if(kaku1_mc.visible || kaku2_mc.visible)
            {
               return;
            }
            kaku3_mc.gotoAndStop(2);
            AnimateManager.playMcAnimate(kaku3_mc,2,"",function():void
            {
               kaku3_mc.visible = false;
               MainManager.actorModel.stop();
               MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalk);
               NpcDialog.show(NPC.MILU,["快来救救我们吧……我……我们没有哭哦！"],["（快用鼠标点击他们）"],[function():void
               {
                  MILU_mc.addEventListener(MouseEvent.CLICK,onMiluClick);
                  MILU_mc.buttonMode = true;
               }]);
            });
         }
      }
      
      private static function onMiluClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MILU_mc.removeEventListener(MouseEvent.CLICK,onMiluClick);
         MILU_mc.gotoAndStop(2);
         NpcDialog.show(NPC.MILU,["我刚才听大胖子说要去其他精灵……你快赶过去看看吧！"],["下一个目标会是谁呢？"],[function():void
         {
            TasksManager.complete(TaskController_572.TASK_ID,1,function(param1:Boolean):void
            {
               showNoteBook(2);
            });
         }]);
      }
      
      public static function initTask_20(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         kaku_mc = _map.depthLevel["kaku_mc"];
         beer_mc = _map.depthLevel["beer_mc"];
         bubble1_mc = _map.depthLevel["bubble1_mc"];
         bubble2_mc = _map.depthLevel["bubble2_mc"];
         bubble3_mc = _map.depthLevel["bubble3_mc"];
         initMap_20(false);
         status = uint(TasksManager.getTaskStatus(TaskController_572.TASK_ID));
         if(status == TasksManager.UN_ACCEPT)
         {
            removeMCMap_20();
            return;
         }
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_572.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  initMap_20(true);
                  startProThree();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  initMap_20(true);
                  startProFour();
               }
            });
         }
         else if(status == TasksManager.COMPLETE)
         {
            removeMCMap_20();
            return;
         }
      }
      
      private static function initMap_20(param1:Boolean) : void
      {
         kaku_mc.visible = beer_mc.visible = param1;
         bubble1_mc.visible = bubble2_mc.visible = bubble3_mc.visible = false;
      }
      
      private static function removeMCMap_20() : void
      {
         if(kaku_mc)
         {
            DisplayUtil.removeAllChild(kaku_mc);
         }
         if(beer_mc)
         {
            DisplayUtil.removeAllChild(beer_mc);
         }
         if(Boolean(bubble1_mc) && Boolean(bubble2_mc) && Boolean(bubble3_mc))
         {
            DisplayUtil.removeAllChild(bubble1_mc);
            DisplayUtil.removeAllChild(bubble2_mc);
            DisplayUtil.removeAllChild(bubble3_mc);
         }
      }
      
      public static function initTask_32(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         kaku32_mc = _map.animatorLevel["kaku32_mc"];
         leiyi_mc = _map.animatorLevel["leiyi_mc"];
         kaku32_mc.gotoAndStop(1);
         initMap_32(false);
         status = uint(TasksManager.getTaskStatus(TaskController_572.TASK_ID));
         if(status == TasksManager.UN_ACCEPT)
         {
            removeMCMap_32();
            return;
         }
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_572.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  startProFive();
               }
            });
         }
         else if(status == TasksManager.COMPLETE)
         {
            removeMCMap_32();
            return;
         }
      }
      
      private static function initMap_32(param1:Boolean) : void
      {
         kaku32_mc.visible = leiyi_mc.visible = param1;
      }
      
      private static function removeMCMap_32() : void
      {
         if(kaku32_mc)
         {
            DisplayUtil.removeAllChild(kaku32_mc);
         }
         if(leiyi_mc)
         {
            DisplayUtil.removeAllChild(leiyi_mc);
         }
      }
      
      private static function startProThree() : void
      {
         kaku_mc.gotoAndStop(1);
         beer_mc.gotoAndStop(1);
         NpcDialog.show(NPC.KAKUNIAN,["这样你都不怕？怕一怕嘛！搞了半天我一点恐惧都没收集到……咤克斯会不高兴的！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.BEER,["蓝蓝天空！太阳公公！贝尔追着小赛尔……我……我不怕！我才不会让咤克斯的阴谋得逞！可……可我快晕了……"],null,null,false,function():void
            {
               NpcDialog.show(NPC.KAKUNIAN,["怎么……怎么又是你……到底是哪里出了问题？你怎么知道我会来找贝尔！！！！！"],["有本事的和我来一场精灵决斗！（点击卡酷年）"],[function():void
               {
                  kaku_mc.addEventListener(MouseEvent.CLICK,onKakuClick);
                  kaku_mc.buttonMode = true;
               }]);
            });
         });
      }
      
      private static function onKakuClick(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var e:MouseEvent = param1;
         kaku_mc.removeEventListener(MouseEvent.CLICK,onKakuClick);
         kaku_mc.buttonMode = false;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_572_4"),function():void
         {
            AnimateManager.playMcAnimate(beer_mc,2,"mc",function():void
            {
               kaku_mc.gotoAndStop(2);
               NpcDialog.show(NPC.KAKUNIAN,["什么……什么声音！怎么在这里都会有“BIAO”的声音！"],["对了卡酷年害怕爆！（快用鼠标点击气泡）"],[function():void
               {
                  TasksManager.complete(TaskController_572.TASK_ID,2,function(param1:Boolean):void
                  {
                     startProFour();
                  });
               }]);
            });
         });
      }
      
      private static function startProFour() : void
      {
         bubble1_mc.buttonMode = bubble2_mc.buttonMode = bubble3_mc.buttonMode = true;
         bubble1_mc.visible = bubble2_mc.visible = bubble3_mc.visible = true;
         bubble1_mc.addEventListener(MouseEvent.CLICK,onBubbleClick);
         bubble2_mc.addEventListener(MouseEvent.CLICK,onBubbleClick);
         bubble3_mc.addEventListener(MouseEvent.CLICK,onBubbleClick);
      }
      
      private static function onBubbleClick(param1:MouseEvent) : void
      {
         var target_mc:MovieClip;
         var e:MouseEvent = param1;
         ++bubble_num;
         target_mc = e.currentTarget as MovieClip;
         target_mc.gotoAndStop(2);
         target_mc.removeEventListener(MouseEvent.CLICK,onBubbleClick);
         if(bubble_num <= 3)
         {
            kaku_mc.gotoAndStop(bubble_num + 2);
            if(bubble_num == 3)
            {
               NpcDialog.show(NPC.KAKUNIAN,["搞什么搞！人家一点点恐惧都没收集到！！！你个螺丝钉好讨厌！"],["绝不容许你在这里为非作歹！"],[function():void
               {
                  AnimateManager.playMcAnimate(beer_mc,3,"mc3",function():void
                  {
                     TasksManager.complete(TaskController_572.TASK_ID,3,function(param1:Boolean):void
                     {
                        showNoteBook(3);
                     });
                  });
               }]);
            }
         }
      }
      
      private static function startProFive() : void
      {
         initMap_32(true);
         kaku32_mc.gotoAndStop(2);
         AnimateManager.playMcAnimate(kaku32_mc,2,"mc1",function():void
         {
            leiyi_mc.gotoAndStop(2);
            AnimateManager.playMcAnimate(leiyi_mc,2,"leiyi_2",function():void
            {
               AnimateManager.playMcAnimate(kaku32_mc,3,"mc2",function():void
               {
                  NpcDialog.show(NPC.KAKUNIAN,["哇哦！英俊无比的雷伊大人，这是我给你的苹果！尝一尝吧！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(kaku32_mc,4,"mc3",function():void
                     {
                        NpcDialog.show(NPC.KATU,["绝不许你在这里捣蛋！！！我看你这次那里逃！爆！爆！爆！爆！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.KAKUNIAN,["啊啊啊 …………别……别说！这里一点都不好玩！我要回到自己的世界里去！卡兔别高兴太早！卡酷春晚我一定会来捣蛋的！"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(kaku32_mc,5,"mc4",function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_572_2"),function():void
                                 {
                                    AnimateManager.playMcAnimate(kaku32_mc,6,"mc5",function():void
                                    {
                                       AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_572_3"),function():void
                                       {
                                          NpcDialog.show(NPC.SEER,["雷神……你会去参加卡酷星的春晚吗？你说我们把那颗未知星球命名为卡酷星纪念卡兔好不好？你说卡兔会想我吗？"],["咦……雷神呢？"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(leiyi_mc,3,"leiyi_3",function():void
                                             {
                                                NpcDialog.show(NPC.SEER,["雷神还是这么酷耶……只要我们需要你，你一定会出现的是不是？哎呀！快去船长那里交任务！"],["赶往船长室"],[function():void
                                                {
                                                   TasksManager.complete(TaskController_572.TASK_ID,4,function(param1:Boolean):void
                                                   {
                                                      MapManager.changeMap(4);
                                                   });
                                                }]);
                                             });
                                          }]);
                                       });
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function onMachineHitClick(param1:MouseEvent) : void
      {
         if(panel2 == null)
         {
            panel2 = new AppModel(ClientConfig.getTaskModule("TaskPanel_572_2"),"正在打开面板");
            panel2.setup();
         }
         panel2.show();
      }
      
      public static function destory() : void
      {
         bubble_num = 0;
         removeMCMap_51();
         removeMCMap_20();
         removeMCMap_32();
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalk);
      }
   }
}
