package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_739;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
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
   
   public class Task739
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
       
      
      public function Task739()
      {
         super();
      }
      
      public static function initTaskForMap507(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:uint = uint(TasksManager.getTaskStatus(TaskController_739.TASK_ID));
         if(_loc2_ == TasksManager.UN_ACCEPT)
         {
            _map.conLevel["bulaikeNPC"]["signMC"].visible = true;
         }
         _map.conLevel["bulaikeNPC"].buttonMode = true;
         _map.conLevel["bulaikeNPC"].addEventListener(MouseEvent.CLICK,bulaikeNPCHandler);
      }
      
      private static function bulaikeNPCHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(325,215),function():void
         {
            if(_map.conLevel["bulaikeNPC"]["signMC"].visible)
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["我一定会让光明重返格雷斯星！"],["#101战神联盟","与布莱克对战。","算了，我还是先围观吧。"],[acceptTaskFun,fightFun]);
            }
            else
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["我一定会让光明重返格雷斯星！"],["与布莱克对战。","算了，我还是先围观吧。"],[fightFun]);
            }
         });
      }
      
      private static function acceptTaskFun() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_739_1"),function():void
         {
            TasksManager.accept(TaskController_739.TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  DebugTrace.show("任务接取成功");
                  taskStep = 0;
                  MapManager.changeMap(453);
               }
            });
         },false);
      }
      
      private static function fightFun() : void
      {
         NpcDialog.show(NPC.BULAIKE_NEW,["作为光明圣坛守护者，我不畏惧任何挑战！但我认为只有一对一的决斗才能证明谁是真正的强者！你有这个胆量吗？"],["OK，我会让你心服口服的！","嘿嘿！让哥哥我再考虑考虑。"],[function():void
         {
            FightManager.fightWithBoss("布莱克",0);
         }]);
      }
      
      public static function initTaskForMap453(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["task739MC"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_739.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_739.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskStep = 0;
                  _map.conLevel["task739MC"].visible = true;
                  _map.conLevel["task739MC"].buttonMode = true;
                  _map.conLevel["task739MC"].addEventListener(MouseEvent.CLICK,task739Handler);
               }
            });
         }
      }
      
      private static function task739Handler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(800,430),function():void
         {
            NpcDialog.show(NPC.BULAIKE_NEW,["你们来的可真不是时候啊！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.XIELING_ZHANSHI,["布莱克！你以为老大是傻子吗？你叛变组织后，我们就知道藏宝图的另一半被你拿走了！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.PIRATE_2,["经过我们调查，你在黯夜地穴建立了密室，这里成为你吸收星际碎片能量以及经常出入的地方，因此也理所当然的是藏宝图最佳匿藏点！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.BULAIKE_NEW,["哈哈哈！既然一切明了，就别废话！受死吧！"],["（与海盗和邪灵战士对战）"],[function():void
                     {
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                        FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                        FightManager.fightWithBoss("海盗和邪灵战士",1);
                     }]);
                  });
               });
            });
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         _map.conLevel["task739MC"].buttonMode = false;
         _map.conLevel["task739MC"].removeEventListener(MouseEvent.CLICK,task739Handler);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_739_2"),function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["task739MC"],0,"",function():void
            {
               NpcDialog.show(NPC.BULAIKE_NEW,[MainManager.actorInfo.formatNick + "，他们肯定趁机设下了陷阱！"],["嗯，为了拿到藏宝图，这群坏蛋将不择手段！"],[function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["咱们现在就去黯夜之城，看海盗和邪灵组织到底耍些什么把戏！"],["嗯，出发！"],[function():void
                  {
                     TasksManager.complete(TaskController_739.TASK_ID,0,function():void
                     {
                        DebugTrace.show("第一步完成");
                        taskStep = 1;
                        MapManager.changeMap(451);
                     });
                  }]);
               }]);
            });
         });
      }
      
      public static function initTaskForMap451(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["duduNPC"].visible = true;
         nRet = uint(TasksManager.getTaskStatus(TaskController_739.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_739.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskStep = 1;
               }
            });
         }
         else if(nRet == TasksManager.COMPLETE)
         {
            _map.conLevel["duduNPC"]["signMC"].visible = false;
         }
         _map.conLevel["duduNPC"].buttonMode = true;
         _map.conLevel["duduNPC"].addEventListener(MouseEvent.CLICK,duduNPCHandler);
      }
      
      private static function duduNPCHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(430,320),function():void
         {
            if(taskStep == 1)
            {
               NpcDialog.show(NPC.DUDU,["别看我胖嘟嘟的，但我可是真材实料的运动健将哦！"],["#101战神联盟","加油！加油！"],[function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["嘟嘟！黯夜之城发生什么情况了？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.DUDU,["不得了啦！奥德长老和其他几个伙伴被抓进海盗飞船，我是要留下来传话才幸免被俘！"],["海盗说些什么？"],[function():void
                     {
                        NpcDialog.show(NPC.DUDU,["如果我们想伙伴活命，就带上什么“星际藏宝图”到拜伦号去交换！"],["这群奸诈的坏蛋！"],[function():void
                        {
                           NpcDialog.show(NPC.BULAIKE_NEW,["我无论如何都要把奥德他们给救出来！" + MainManager.actorInfo.formatNick + "，把情况报告给罗杰船长，要他做好下一阶段的部署！"],["我马上联系。"],[function():void
                           {
                              var app:* = undefined;
                              app = ModuleManager.getModule(ClientConfig.getAppModule("TaskIntro_739"));
                              app.setup();
                              app.show();
                              app.sharedEvents.addEventListener(Event.CLOSE,function(param1:Event):void
                              {
                                 var evt:Event = param1;
                                 app.sharedEvents.removeEventListener(Event.CLOSE,arguments.callee);
                                 app.destroy();
                                 app = null;
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_739_3"),function():void
                                 {
                                    TasksManager.complete(TaskController_739.TASK_ID,1,function():void
                                    {
                                       DebugTrace.show("第二步完成");
                                       taskStep = 2;
                                       MapManager.changeMap(315);
                                    });
                                 });
                              });
                           }]);
                        }]);
                     }]);
                  });
               }]);
            }
            else
            {
               NpcDialog.show(NPC.DUDU,["别看我胖嘟嘟的，但我可是真材实料的运动健将哦！"],["加油！加油！"]);
            }
         });
      }
      
      public static function initTaskForMap315(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["task739HdMC"].visible = false;
         _map.conLevel["task739LlMC"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_739.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_739.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  taskStep = 2;
                  gotoStep3();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  gotoStep4();
               }
            });
         }
      }
      
      private static function gotoStep3() : void
      {
         _map.conLevel["task739HdMC"].visible = true;
         _map.conLevel["task739LlMC"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["task739HdMC"],0,"",function():void
         {
            NpcDialog.show(NPC.SEER,["这两个海盗怎么浑身是伤啊？它们都奄奄一息了！"],["……"],[function():void
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["情况不对劲！难道有人来过？可为什么只把海盗打倒，却没救出精灵呢？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SEER,["布莱克，看来有人暗中帮助我们啊！哈哈，别想那么多了，先把奥德他们救出来！"],["（用头部射击牢笼）"],[function():void
                  {
                     TasksManager.complete(TaskController_739.TASK_ID,2,function():void
                     {
                        DebugTrace.show("第三步完成");
                        taskStep = 3;
                        gotoStep4();
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function gotoStep4() : void
      {
         _map.conLevel["task739HdMC"].visible = true;
         _map.conLevel["task739LlMC"].visible = true;
         _map.conLevel["task739LlMC"].addEventListener(MouseEvent.CLICK,task739LlMCHandler);
         _map.conLevel["task739LlMC"]["bloodMc"].data = {"blood":10};
         _map.conLevel["task739LlMC"]["bloodMc"].visible = true;
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
      }
      
      private static function onAimatEndHandler(param1:AimatEvent) : void
      {
         var bloodMc:MovieClip = null;
         var evt:AimatEvent = param1;
         var laolong:MovieClip = _map.conLevel["task739LlMC"];
         if(laolong.hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            DebugTrace.show("被击中");
            bloodMc = laolong["bloodMc"];
            bloodMc.data["blood"] -= 2;
            bloodMc["perTxt"].text = bloodMc.data["blood"] + "/10";
            bloodMc["perMc"].gotoAndStop(uint(101 - 10 * bloodMc.data["blood"]));
            if(bloodMc.data["blood"] <= 0)
            {
               AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
               bloodMc.visible = false;
               laolong.buttonMode = false;
               laolong.removeEventListener(MouseEvent.CLICK,task739LlMCHandler);
               NpcDialog.show(NPC.SEER,["哈哈哈！奥德，你们赶紧出来吧！"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_739_4"),function():void
                  {
                     _map.conLevel["task739HdMC"].visible = false;
                     _map.conLevel["task739LlMC"].gotoAndStop(2);
                     NpcDialog.show(NPC.SEER,["雷伊、盖亚、卡修斯与布莱克都聚齐了！哈哈哈！现在的这艘幽灵船可是星光熠熠，光芒四射啊！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["船长告知我们海盗与邪灵组织结盟的事情，敌人声势浩大，我们也必须做出行动了！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.BULAIKE_NEW,["这都是罗杰船长做的战略安排，我懂了！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.GAIYA,["罗杰那家伙竟然为我们四个命名“战神联盟”，我对结盟没任何兴趣，唯一吸引我就是布莱克你的实力，还有邪灵组织的威斯克！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.KAXIUSI_WHITE,["海盗与邪灵组织已经开始对全宇宙实行黑统战争，从现在开始，我们必须并肩作战！"],["我们要共同捍卫正义！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_739_5"),function():void
                                    {
                                       _map.conLevel["task739LlMC"].visible = false;
                                       TasksManager.complete(TaskController_739.TASK_ID,3,function():void
                                       {
                                          DebugTrace.show("任务完成");
                                          taskStep = 4;
                                       });
                                    });
                                 }]);
                              });
                           });
                        });
                     });
                  });
               });
            }
         }
      }
      
      private static function task739LlMCHandler(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.SEER,["我得用头部射击打开牢笼！救出精灵们！"],["（用头部射击牢笼）"]);
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 507)
         {
            _map.conLevel["bulaikeNPC"].removeEventListener(MouseEvent.CLICK,bulaikeNPCHandler);
         }
         else if(MapManager.currentMap.id == 453)
         {
            _map.conLevel["task739MC"].removeEventListener(MouseEvent.CLICK,task739Handler);
         }
         else if(MapManager.currentMap.id == 451)
         {
            _map.conLevel["duduNPC"].removeEventListener(MouseEvent.CLICK,duduNPCHandler);
         }
         else if(MapManager.currentMap.id == 315)
         {
            AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler);
            _map.conLevel["task739LlMC"].removeEventListener(MouseEvent.CLICK,task739LlMCHandler);
         }
         _map = null;
      }
   }
}
