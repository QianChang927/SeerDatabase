package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class Task1098
   {
      
      private static const TASK_ID:uint = 1098;
      
      private static var _map:BaseMapProcess;
      
      public static var canStart_1098:Boolean = true;
       
      
      public function Task1098()
      {
         super();
      }
      
      public static function initTaskForMap15(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(canStart_1098)
         {
            (_map.conLevel["task1098MC"] as MovieClip).gotoAndStop(1);
            if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
            {
               ToolBarController.showOrHideAllUser(false);
               OgreController.isShow = false;
               MainManager.selfVisible = false;
               AnimateManager.playMcAnimate(_map.conLevel["task1098MC"],1,"mc1",function():void
               {
                  var lastVislble:Boolean = false;
                  (_map.conLevel["task1098MC"] as MovieClip).mouseChildren = (_map.conLevel["task1098MC"] as MovieClip).mouseEnabled = true;
                  lastVislble = (_map.conLevel["luojilasi"] as MovieClip).visible;
                  (_map.conLevel["luojilasi"] as MovieClip).visible = false;
                  MapListenerManager.add(_map.conLevel["task1098MC"],function(param1:MouseEvent):void
                  {
                     var e:MouseEvent = param1;
                     (_map.conLevel["luojilasi"] as MovieClip).visible = lastVislble;
                     MapListenerManager.remove(_map.conLevel["task1098MC"],false);
                     NpcDialog.show(NPC.SEER,["这不是洛吉拉斯吗？怎么在独自哭泣，它口中提到的父亲是谁？"],["我一定要问个清楚！","和我无关。"],[function():void
                     {
                        TasksManager.accept(TASK_ID,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              startPro_0();
                           }
                        });
                     },function():void
                     {
                        ToolBarController.showOrHideAllUser(true);
                        OgreController.isShow = true;
                        MainManager.selfVisible = true;
                        (_map.conLevel["task1098MC"] as MovieClip).gotoAndStop(1);
                     }]);
                  });
               });
            }
            else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
               {
                  if(!param1[0])
                  {
                     startPro_0();
                  }
                  else if(!param1[1])
                  {
                     startPro_1();
                  }
                  else if(!param1[2])
                  {
                     startPro_2();
                  }
               });
            }
            else
            {
               ToolBarController.showOrHideAllUser(true);
               OgreController.isShow = true;
               MainManager.selfVisible = true;
               (_map.conLevel["task1098MC"] as MovieClip).visible = false;
               (_map.conLevel["luojilasi"] as MovieClip).buttonMode = false;
               CommonUI.removeYellowArrow(_map.conLevel["luojilasi"] as MovieClip);
               (_map.conLevel["luojilasi"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStartPro_0);
            }
         }
         else
         {
            ToolBarController.showOrHideAllUser(true);
            OgreController.isShow = true;
            MainManager.selfVisible = true;
            (_map.conLevel["task1098MC"] as MovieClip).visible = false;
            (_map.conLevel["luojilasi"] as MovieClip).buttonMode = false;
            CommonUI.removeYellowArrow(_map.conLevel["luojilasi"] as MovieClip);
            (_map.conLevel["luojilasi"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStartPro_0);
         }
      }
      
      public static function destory() : void
      {
         ToolBarController.showOrHideAllUser(true);
         OgreController.isShow = true;
         MainManager.selfVisible = true;
         _map = null;
      }
      
      private static function startPro_0() : void
      {
         ToolTipManager.add(_map.conLevel["luojilasi"] as MovieClip,"洛吉拉斯");
         (_map.conLevel["luojilasi"] as MovieClip).buttonMode = true;
         CommonUI.addYellowArrow(_map.conLevel["luojilasi"] as MovieClip,10,0);
         (_map.conLevel["luojilasi"] as MovieClip).addEventListener(MouseEvent.CLICK,onStartPro_0);
      }
      
      private static function onStartPro_0(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         MainManager.selfVisible = false;
         (_map.conLevel["luojilasi"] as MovieClip).buttonMode = false;
         CommonUI.removeYellowArrow(_map.conLevel["luojilasi"] as MovieClip);
         (_map.conLevel["luojilasi"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStartPro_0);
         AnimateManager.playMcAnimate(_map.conLevel["task1098MC"],2,"mc2",function():void
         {
            NpcDialog.show(NPC.LUOJILASI,["大笨蛋……你竟敢说我是大笨蛋！我是谁的孩子你知道吗？说出来吓死你！"],["我还真想不出…..让我仔细瞧瞧！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1098_1"),function():void
               {
                  NpcDialog.show(NPC.SEER,["这么说你还是名门望族后代咯？都看不出啊，你实在太普通了，没有一点特点！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.LUOJILASI,["你瞎说！我是……..(犹豫不决)"],["（很久很久以前）"],[function():void
                     {
                        TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              startPro_1();
                           }
                        });
                     }]);
                  });
               });
            }]);
         });
      }
      
      private static function startPro_1() : void
      {
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         MainManager.selfVisible = false;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1098_2"),function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["task1098MC"],3,"mc3",function():void
            {
               NpcDialog.show(NPC.LUOJILASI,["好熟悉身影……难道是父亲来看我了？"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1098_3"),function():void
                  {
                     NpcDialog.show(NPC.LUOJILASI,["我没有继承天幕龙族光荣血统！那么多父辈龙族中，你是最要面子的，但偏偏我最不争气！"],["原来它们之间有这样一段故事！"],[function():void
                     {
                        NpcDialog.show(NPC.BOENNI,["当初把你放逐至火山星，目的是让你吸收烈火精华！那么久过去了，你还是一无是处，简直是个废物！我今天不该来，不该对还你抱有任何希望和幻想！"],null,null,false,function():void
                        {
                           TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 startPro_2();
                              }
                           });
                        });
                     }]);
                  });
               });
            });
         });
      }
      
      private static function startPro_2() : void
      {
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         MainManager.selfVisible = false;
         AnimateManager.playMcAnimate(_map.conLevel["task1098MC"],4,"mc4",function():void
         {
            NpcDialog.show(NPC.SEER,["这个黑影好熟悉！好像在哪里见到过……"],null,null,false,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1098_4"),function():void
               {
                  NpcDialog.show(NPC.SEER,["太无耻了！这下情况很危急！我们会不会有生命危险啊……"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["task1098MC"],5,"mc5",function():void
                     {
                        NpcDialog.show(NPC.LUOJILASI,["没人能看扁天幕龙族!父亲，我不会再让你失望了！"],["洛吉拉斯很生气！后果很严重！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1098_5"),function():void
                           {
                              NpcDialog.show(NPC.CHIYIHUOLONG,["这次总算没让你丢脸，我终于领悟了天幕龙族的能力！"],["跟我回天幕宫殿吧！"],[function():void
                              {
                                 NpcDialog.show(NPC.CHIYIHUOLONG,["炎魔是我的恩师，它已经离开火山星，所以我必须坚守火山星的安全！我永远都是你的孩子，但是不能跟你走！"],["好吧，孩子！我尊重你的决定，希望你越变越强！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(_map.conLevel["task1098MC"],6,"mc6",function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["太棒了！没想到洛吉拉斯竟然可以超进化！必须赶紧把这个消息告诉我的好友！"],null,null,false,function():void
                                       {
                                          TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                             }
                                             ToolBarController.showOrHideAllUser(true);
                                             OgreController.isShow = true;
                                             MainManager.selfVisible = true;
                                             (_map.conLevel["task1098MC"] as MovieClip).visible = false;
                                          });
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
   }
}
