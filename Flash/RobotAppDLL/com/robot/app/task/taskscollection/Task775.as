package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_775;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   
   public class Task775
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
       
      
      public function Task775()
      {
         super();
      }
      
      public static function initTaskForMap419(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_775.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_775.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskStep = 0;
                  gotoStep1();
               }
            });
         }
      }
      
      public static function acceptTask() : void
      {
         TasksManager.accept(TaskController_775.TASK_ID,function(param1:Boolean):void
         {
            var b:Boolean = param1;
            if(b)
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_775_1"),function():void
               {
                  DebugTrace.show("任务接取成功");
                  taskStep = 0;
                  gotoStep1();
               },false);
            }
         });
      }
      
      private static function gotoStep1() : void
      {
         AnimateManager.playMcAnimate(_map.conLevel["blackMC1"],1,"mc1",function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["blackMC2"],1,"mc1",function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["blackMC3"],1,"mc1",function():void
               {
                  NpcDialog.show(NPC.SEER,["我好像也看见一些黑乎乎的东东，它们躲在了角落里。"],["（点击场景里的黑影）"],[function():void
                  {
                     _map.conLevel["blackMC1"].buttonMode = true;
                     _map.conLevel["blackMC2"].buttonMode = true;
                     _map.conLevel["blackMC3"].buttonMode = true;
                     _map.conLevel["blackMC1"].addEventListener(MouseEvent.CLICK,blackClickHandler);
                     _map.conLevel["blackMC2"].addEventListener(MouseEvent.CLICK,blackClickHandler);
                     _map.conLevel["blackMC3"].addEventListener(MouseEvent.CLICK,blackClickHandler);
                  }]);
               });
            });
         });
      }
      
      private static function blackClickHandler(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var evt:MouseEvent = param1;
         if(MapManager.currentMap.id == 419)
         {
            mc = evt.currentTarget as MovieClip;
            AnimateManager.playMcAnimate(mc,2,"mc2",function():void
            {
               mc.visible = false;
               if(!_map.conLevel["blackMC1"].visible && !_map.conLevel["blackMC2"].visible && !_map.conLevel["blackMC3"].visible)
               {
                  NpcDialog.show(NPC.SEER,["呀，它们往觅食林方向逃走了，哼！我一定要知道那些到底是什么。"],["（前往觅食林）"],[function():void
                  {
                     TasksManager.complete(TaskController_775.TASK_ID,0,function():void
                     {
                        DebugTrace.show("第一步完成");
                        taskStep = 1;
                        MapManager.changeMap(414);
                     });
                  }]);
               }
            });
         }
         else if(MapManager.currentMap.id == 414)
         {
            NpcDialog.show(NPC.SEER,["嘿嘿！这次可别想逃了，看我不一炮把你们给轰下来。"],["（用头部射击攻击黑影）"]);
         }
      }
      
      public static function initTaskForMap414(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_775.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_775.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskStep = 1;
                  gotoStep2();
               }
            });
         }
      }
      
      private static function gotoStep2() : void
      {
         _map.conLevel["blackMC1"].visible = true;
         _map.conLevel["blackMC2"].visible = true;
         _map.conLevel["blackMC3"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["blackMC1"],1,"mc1",function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["blackMC2"],1,"mc1",function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["blackMC3"],1,"mc1",function():void
               {
                  NpcDialog.show(NPC.SEER,["嘿嘿！这次可别想逃，看我不一炮把你们给轰下来。"],["（用头部射击攻击黑影）"],[function():void
                  {
                     _map.conLevel["blackMC1"].buttonMode = true;
                     _map.conLevel["blackMC2"].buttonMode = true;
                     _map.conLevel["blackMC3"].buttonMode = true;
                     _map.conLevel["blackMC1"].addEventListener(MouseEvent.CLICK,blackClickHandler);
                     _map.conLevel["blackMC2"].addEventListener(MouseEvent.CLICK,blackClickHandler);
                     _map.conLevel["blackMC3"].addEventListener(MouseEvent.CLICK,blackClickHandler);
                     AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEnd);
                  }]);
               });
            });
         });
      }
      
      private static function onAimatEnd(param1:AimatEvent) : void
      {
         var mc:MovieClip = null;
         var evt:AimatEvent = param1;
         if(_map.conLevel["blackMC1"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            mc = _map.conLevel["blackMC1"];
         }
         else if(_map.conLevel["blackMC2"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            mc = _map.conLevel["blackMC2"];
         }
         else if(_map.conLevel["blackMC3"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            mc = _map.conLevel["blackMC3"];
         }
         if(Boolean(mc) && mc.visible)
         {
            AnimateManager.playMcAnimate(mc,2,"mc2",function():void
            {
               mc.visible = false;
               if(!_map.conLevel["blackMC1"].visible && !_map.conLevel["blackMC2"].visible && !_map.conLevel["blackMC3"].visible)
               {
                  AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_775_2"),function():void
                  {
                     var app:AppModel = null;
                     app = ModuleManager.getModule(ClientConfig.getAppModule("TaskIntro_775"));
                     app.setup();
                     app.show();
                     app.sharedEvents.addEventListener(Event.CLOSE,function(param1:Event):void
                     {
                        var evt:Event = param1;
                        app.sharedEvents.removeEventListener(Event.CLOSE,arguments.callee);
                        app.destroy();
                        app = null;
                        NpcDialog.show(NPC.GAIYA,["哥哥……"],["盖亚，先别多想，我们出发吧！（前往艾迪星）"],[function():void
                        {
                           TasksManager.complete(TaskController_775.TASK_ID,1,function():void
                           {
                              DebugTrace.show("第二步完成");
                              taskStep = 2;
                              MapManager.changeMap(325);
                           });
                        }]);
                     });
                  });
               }
            });
         }
      }
      
      public static function initTaskForMap325(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_775.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_775.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  taskStep = 2;
                  _map.conLevel["npcMC"].gotoAndStop(1);
               }
            });
         }
         _map.conLevel["npcMC"].buttonMode = true;
         _map.conLevel["npcMC"].addEventListener(MouseEvent.CLICK,npcClickHandler1);
      }
      
      private static function npcClickHandler1(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(620,440),function():void
         {
            if(_map.conLevel["npcMC"].currentFrame == 1 && taskStep == 2)
            {
               NpcDialog.show(NPC.PAGENI,["艾迪星是全宇宙最有情调的地方！美妙的音乐无处不在。"],["#101瑞尔斯入魔","嗯嗯！这里的音乐真美。"],[function():void
               {
                  _map.conLevel["npcMC"].gotoAndStop(2);
                  NpcDialog.show(NPC.GAIYA,["帕格尼，这里到底发生什么事了？瑞尔斯现在去了哪里？"],["（帕格尼开始回忆）"],[function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("task_775_3"),function():void
                     {
                        NpcDialog.show(NPC.PAGENI,["事情就是这样，经过刚刚的爆发，现在的瑞尔斯似乎平静了一些，你们去暮色之城找他吧。"],["好的！（去往暮色之城）"],[function():void
                        {
                           TasksManager.complete(TaskController_775.TASK_ID,2,function():void
                           {
                              DebugTrace.show("第三步完成");
                              taskStep = 3;
                              MapManager.changeMap(326);
                           });
                        }]);
                     });
                  }]);
               }]);
            }
            else
            {
               NpcDialog.show(NPC.PAGENI,["艾迪星是全宇宙最有情调的地方！美妙的音乐无处不在。"],["嗯嗯！这里的音乐真美。"]);
            }
         });
      }
      
      public static function initTaskForMap326(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         _map = map;
         _map.conLevel["npcMC"].gotoAndStop(2);
         nRet = uint(TasksManager.getTaskStatus(TaskController_775.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_775.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  _map.conLevel["npcMC"].gotoAndStop(1);
               }
            });
         }
         _map.conLevel["npcMC"].buttonMode = true;
         _map.conLevel["npcMC"].addEventListener(MouseEvent.CLICK,ruiersiClickHandler);
      }
      
      private static function ruiersiClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(555,405),function():void
         {
            if(_map.conLevel["npcMC"].currentFrame == 1 && taskStep == 3)
            {
               NpcDialog.show(NPC.RUIERSI,["我为了一个约定出现在这里！英雄必须时刻做好战斗准备！"],["#101瑞尔斯入魔","我感受到了你强大的能量！"],[function():void
               {
                  NpcDialog.show(NPC.GAIYA,["瑞尔斯，你怎么样了！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.RUIERSI,["我现在好极了，杀戮的快感，我才刚刚开始体会！哈哈哈！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.GAIYA,["“杀戮的快感”？瑞尔斯，别胡思乱想，清醒一点！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.RUIERSI,["我体内的能量正喷薄而出！盖亚，好好尝尝我的厉害吧！"],["（与瑞尔斯对战）"],[function():void
                           {
                              FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                              FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                              FightManager.fightWithBoss("瑞尔斯",0);
                           }]);
                        });
                     });
                  });
               }]);
            }
            else
            {
               NpcDialog.show(NPC.RUIERSI,["我为了一个约定出现在这里！英雄必须时刻做好战斗准备！"],["我感受到了你强大的能量！"]);
            }
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         _map.conLevel["npcMC"].gotoAndStop(2);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_775_4"),function():void
         {
            _map.conLevel["npcMC"].visible = false;
            NpcDialog.show(NPC.SEER,["盖亚，刚刚你与瑞尔斯对战，好像有点力不从心啊！你没事吧！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.GAIYA,["我……我没事！这几天状态有些虚弱，所以才会发挥失常！"],["瑞尔斯现在变得太可怕了！无论力量，还是心智！"],[function():void
               {
                  NpcDialog.show(NPC.GAIYA,["死黑能量真是后患无穷啊！是海盗邪灵把瑞尔斯变成这幅疯狂模样，我一定会要他们付出代价！"],["胜利终将属于正义！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_775_5"),function():void
                     {
                        TasksManager.complete(TaskController_775.TASK_ID,3,function():void
                        {
                           DebugTrace.show("任务完成");
                           taskStep = 4;
                        });
                     });
                  }]);
               }]);
            });
         });
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 419)
         {
            _map.conLevel["blackMC1"].removeEventListener(MouseEvent.CLICK,blackClickHandler);
            _map.conLevel["blackMC2"].removeEventListener(MouseEvent.CLICK,blackClickHandler);
            _map.conLevel["blackMC3"].removeEventListener(MouseEvent.CLICK,blackClickHandler);
         }
         else if(MapManager.currentMap.id == 414)
         {
            AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
            _map.conLevel["blackMC1"].removeEventListener(MouseEvent.CLICK,blackClickHandler);
            _map.conLevel["blackMC2"].removeEventListener(MouseEvent.CLICK,blackClickHandler);
            _map.conLevel["blackMC3"].removeEventListener(MouseEvent.CLICK,blackClickHandler);
         }
         else if(MapManager.currentMap.id == 325)
         {
            _map.conLevel["npcMC"].removeEventListener(MouseEvent.CLICK,npcClickHandler1);
         }
         else if(MapManager.currentMap.id == 326)
         {
            _map.conLevel["npcMC"].removeEventListener(MouseEvent.CLICK,ruiersiClickHandler);
         }
         _map = null;
      }
   }
}
