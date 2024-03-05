package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_707;
   import com.robot.core.animate.AnimateManager;
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
   
   public class Task707
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var isFight:Boolean;
       
      
      public function Task707()
      {
         super();
      }
      
      public static function acceptedTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_707_1"),function():void
         {
            MapManager.changeMap(484);
         });
      }
      
      public static function initTaskForMap484(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_707.TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               taskStep = 0;
               _map.conLevel["luluMC"].gotoAndStop(2);
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               taskStep = 2;
               _map.conLevel["luluMC"].gotoAndStop(2);
            }
         });
         _map.conLevel["luluMC"].buttonMode = true;
         _map.conLevel["luluMC"].addEventListener(MouseEvent.CLICK,luluClickHandler);
      }
      
      private static function luluClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(615,410),function():void
         {
            if(taskStep == 0)
            {
               NpcDialog.show(NPC.LULU,["我要泡泡，我要抱抱，不要崇拜我，妹妹我只是个传说！"],["#101拯救母亲河","璐璐长的真可爱。"],[function():void
               {
                  _map.conLevel["luluMC"].gotoAndStop(1);
                  NpcDialog.show(NPC.SEER,["璐璐，我们收到了怀特星发出的求救信号，奶油湾现在的状况如何呀。"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.LULU,[MainManager.actorInfo.formatNick + "，你们总算来了，事情大概是这样一个情况……"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_707_2"),function():void
                        {
                           NpcDialog.show(NPC.LULU,["喝了奶油水后很多精灵都病倒了，这种状况已经让怀特星陷入了恐慌。"],["嗯，我知道了。"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["现在去找卡修斯吧，他哪里一定有更加详细的信息。"],["到炫彩山山脚与卡修斯对话。"],[function():void
                              {
                                 TasksManager.complete(TaskController_707.TASK_ID,0,function():void
                                 {
                                    DebugTrace.show("第一步完成");
                                    taskStep = 1;
                                    MapManager.changeMap(445);
                                 });
                              }]);
                           }]);
                        });
                     });
                  });
               }]);
            }
            else if(taskStep == 2)
            {
               NpcDialog.show(NPC.LULU,["我要泡泡，我要抱抱，不要崇拜我，妹妹我只是个传说！"],["#101拯救母亲河","璐璐长的真可爱。"],[function():void
               {
                  _map.conLevel["luluMC"].gotoAndStop(1);
                  NpcDialog.show(NPC.SEER,["璐璐，赛尔号马上就要运送来一批急救物资，咱们召集大伙做好准备工作吧。"],["嗯，好的呢。"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_707_3"),function():void
                     {
                        NpcDialog.show(NPC.KAXIUSI_WHITE,["有了急救物资，这段时间怀特星的局势会稳定一些了。"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SEER,["我们现在去怀特矿场，看看能否调查到有关奶油湾污染的原因。"],["嗯，马上出发。"],[function():void
                           {
                              TasksManager.complete(TaskController_707.TASK_ID,2,function():void
                              {
                                 DebugTrace.show("第三步完成");
                                 taskStep = 3;
                                 MapManager.changeMap(486);
                              });
                           }]);
                        });
                     });
                  }]);
               }]);
            }
            else
            {
               NpcDialog.show(NPC.LULU,["我要泡泡，我要抱抱，不要崇拜我，妹妹我只是个传说！"],["璐璐长的真可爱。"]);
            }
         });
      }
      
      public static function initTaskForMap445(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_707.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_707.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskStep = 1;
                  gotoStep2();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  taskStep = 4;
                  _map.conLevel["black1MC"].visible = true;
                  _map.conLevel["black1MC"].buttonMode = true;
                  _map.conLevel["black1MC"].data = {"p":new Point(253,242)};
                  _map.conLevel["black1MC"].addEventListener(MouseEvent.CLICK,blackMCHandler);
                  _map.conLevel["black2MC"].visible = true;
                  _map.conLevel["black2MC"].buttonMode = true;
                  _map.conLevel["black2MC"].data = {"p":new Point(435,410)};
                  _map.conLevel["black2MC"].addEventListener(MouseEvent.CLICK,blackMCHandler);
               }
            });
         }
      }
      
      private static function gotoStep2() : void
      {
         NpcDialog.show(NPC.SEER,["卡修斯！你发现奶油湾被污染的原因了吗？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.KAXIUSI_WHITE,["目前还没有头绪，" + MainManager.actorInfo.formatNick + "，我们需要你的帮助！ "],["卡修斯，我会尽力而为。"],[function():void
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["现在已没有精灵敢以奶油水为食了，怀特星面临食物匮乏的局面！希望赛尔号能够赶紧提供一些食物解大家的燃眉之急。 "],["没问题，我马上联系。"],[function():void
               {
                  var app:* = undefined;
                  app = ModuleManager.getModule(ClientConfig.getAppModule("TaskIntro_707"));
                  app.setup();
                  app.show();
                  app.sharedEvents.addEventListener(Event.CLOSE,function(param1:Event):void
                  {
                     var evt:Event = param1;
                     app.sharedEvents.removeEventListener(Event.CLOSE,arguments.callee);
                     app.destroy();
                     app = null;
                     NpcDialog.show(NPC.SEER,["卡修斯！我现在去接应赛尔号的急救物资，等事情办妥，我们有必要到怀特矿场调查一下。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.KAXIUSI_WHITE,["你说的有道理，这事说不定与德拉萨有关。 "],["就这么办。"],[function():void
                        {
                           TasksManager.complete(TaskController_707.TASK_ID,1,function():void
                           {
                              DebugTrace.show("第二步完成");
                              taskStep = 2;
                              MapManager.changeMap(484);
                           });
                        }]);
                     });
                  });
               }]);
            }]);
         });
      }
      
      private static function blackMCHandler(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var evt:MouseEvent = param1;
         mc = evt.currentTarget as MovieClip;
         if(mc.data != null)
         {
            MainManager.actorModel.moveAndAction(mc.data["p"],function():void
            {
               mc.mouseChildren = mc.mouseEnabled = false;
               mc.data = null;
               AnimateManager.playMcAnimate(mc,2,"mc2",function():void
               {
                  mc.visible = false;
                  if(!_map.conLevel["black1MC"].visible && !_map.conLevel["black2MC"].visible)
                  {
                     _map.conLevel["black1MC"].mouseChildren = _map.conLevel["black1MC"].mouseEnabled = false;
                     _map.conLevel["black2MC"].mouseChildren = _map.conLevel["black2MC"].mouseEnabled = false;
                     NpcDialog.show(NPC.SEER,["看！通过机器解析，表明黑色物质含有毒素，这一定就是奶油湾污染的根源。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.KAXIUSI_WHITE,["炫彩山还遗留着海盗的实验室，这些东西肯定是从那边渗透出来的。"],["嗯，我们马上过去调查清楚。"],[function():void
                        {
                           TasksManager.complete(TaskController_707.TASK_ID,4,function():void
                           {
                              DebugTrace.show("第五步完成");
                              taskStep = 5;
                              MapManager.changeMap(448);
                           });
                        }]);
                     });
                  }
               });
            });
         }
      }
      
      public static function initTaskForMap486(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["task707MC"]["pointMC"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_707.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_707.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  if(!isFight)
                  {
                     _map.conLevel["task707MC"]["pointMC"].visible = true;
                  }
               }
            });
         }
         _map.conLevel["task707MC"].buttonMode = true;
         _map.conLevel["task707MC"].addEventListener(MouseEvent.CLICK,task707Handler2);
      }
      
      private static function task707Handler2(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(295,355),function():void
         {
            if(taskStep == 3)
            {
               NpcDialog.show(NPC.KANGBAO,["啦啦啦！我的音乐天赋与生俱来，谁也阻挡不了我唱歌的热情！啦啦啦啦啦……"],["#101拯救母亲河","你的声音真特别！"],[function():void
               {
                  _map.conLevel["task707MC"]["pointMC"].visible = false;
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_707_4"),function():void
                  {
                     NpcDialog.show(NPC.SEER,["你这个胡作非为的坏蛋，把臭烘烘的洗澡水倒进奶油湾，我们才要好好教训教训你呢！"],["与德拉萨对战"],[function():void
                     {
                        isFight = true;
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                        FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                        FightManager.fightWithBoss("德拉萨",3);
                     }]);
                  });
               }]);
            }
            else
            {
               NpcDialog.show(NPC.KANGBAO,["啦啦啦！我的音乐天赋与生俱来，谁也阻挡不了我唱歌的热情！啦啦啦啦啦……"],["你的声音真特别！"]);
            }
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_707_5"),function():void
         {
            TasksManager.complete(TaskController_707.TASK_ID,3,function():void
            {
               DebugTrace.show("第四步完成");
               isFight = false;
               taskStep = 4;
               MapManager.changeMap(445);
            });
         });
      }
      
      public static function initTaskForMap448(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["point2MC"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_707.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_707.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
               {
                  taskStep = 5;
                  _map.conLevel["point2MC"].visible = true;
                  _map.conLevel["task707MC"].buttonMode = true;
                  _map.conLevel["task707MC"].addEventListener(MouseEvent.CLICK,task707Handler3);
               }
            });
         }
      }
      
      private static function task707Handler3(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         if(taskStep == 5)
         {
            MainManager.actorModel.moveAndAction(new Point(787,247),function():void
            {
               _map.conLevel["point2MC"].visible = false;
               _map.conLevel["task707MC"].buttonMode = false;
               _map.conLevel["task707MC"].removeEventListener(MouseEvent.CLICK,task707Handler3);
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_707_6"),function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["看来我来的正是时候！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.KAXIUSI_WHITE,["布莱克！你怎么突然出现在炫彩山？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.BULAIKE_NEW,["我到赛尔号做心境特训，船长告知了我奶油湾被污染的事情，所以立刻赶了过来！"],["刚刚那些毒素，被你给抵消了？"],[function():void
                        {
                           NpcDialog.show(NPC.BULAIKE_NEW,["我身体里的暗黑能量能够以毒攻毒，所以那些黑色物质对我应该没多大影响！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.KAXIUSI_WHITE,["布莱克，真的很感谢你，你是我最值得信任的朋友！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.BULAIKE_NEW,["哈哈哈！卡修斯，有你这个朋友是我的幸运！"],["我们的友情永远坚不可摧！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_707_7"),function():void
                                    {
                                       TasksManager.complete(TaskController_707.TASK_ID,5,function():void
                                       {
                                          DebugTrace.show("任务完成");
                                          taskStep = 6;
                                       });
                                    });
                                 }]);
                              });
                           });
                        }]);
                     });
                  });
               });
            });
         }
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 484)
         {
            _map.conLevel["luluMC"].removeEventListener(MouseEvent.CLICK,luluClickHandler);
         }
         else if(MapManager.currentMap.id == 445)
         {
            _map.conLevel["black1MC"].removeEventListener(MouseEvent.CLICK,blackMCHandler);
            _map.conLevel["black2MC"].removeEventListener(MouseEvent.CLICK,blackMCHandler);
         }
         else if(MapManager.currentMap.id == 486)
         {
            _map.conLevel["task707MC"].removeEventListener(MouseEvent.CLICK,task707Handler2);
         }
         else if(MapManager.currentMap.id == 448)
         {
            _map.conLevel["task707MC"].removeEventListener(MouseEvent.CLICK,task707Handler3);
         }
         _map = null;
      }
   }
}
