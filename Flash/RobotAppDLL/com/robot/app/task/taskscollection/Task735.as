package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_735;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   
   public class Task735
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var isFight:Boolean;
       
      
      public function Task735()
      {
         super();
      }
      
      public static function acceptTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_735_1"),function():void
         {
            MapManager.changeMap(105);
         });
      }
      
      public static function initTaskForMap105(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["pointMC"].visible = false;
         _map.conLevel["pirateMC"].visible = false;
         _map.conLevel["machineMC"].visible = false;
         if(MapManager.prevMapID != MapManager.currentMap.id)
         {
            isFight = false;
         }
         nRet = uint(TasksManager.getTaskStatus(TaskController_735.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            _map.conLevel["pirateMC"].visible = true;
            _map.conLevel["machineMC"].visible = true;
            TasksManager.getProStatusList(TaskController_735.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskStep = 0;
                  gotoStep1();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  taskStep = 1;
                  gotoStep2();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  taskStep = 2;
                  gotoStep3();
               }
               else if(param1[2])
               {
                  _map.conLevel["pirateMC"].visible = false;
                  _map.conLevel["machineMC"].gotoAndStop(3);
               }
            });
         }
         else if(nRet != TasksManager.UN_ACCEPT)
         {
            if(nRet == TasksManager.COMPLETE)
            {
            }
         }
         _map.conLevel["dikeNPC"].buttonMode = true;
         _map.conLevel["dikeNPC"].addEventListener(MouseEvent.CLICK,dikeClickHandler);
      }
      
      private static function gotoStep1() : void
      {
         if(isFight == false)
         {
            NpcDialog.show(NPC.SEER,["我来的可真是时候啊！捣乱的海盗无处不在，让他们尝尝我的厉害。"],["（点击海盗对战）"],[function():void
            {
               _map.conLevel["pirateMC"].buttonMode = true;
               _map.conLevel["pirateMC"].addEventListener(MouseEvent.CLICK,pirateClickHandler);
            }]);
         }
      }
      
      private static function pirateClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(410,425),function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightManager.fightWithBoss("海盗",1);
            isFight = true;
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_735_2"),function():void
         {
            _map.conLevel["pirateMC"].gotoAndStop(2);
            _map.conLevel["machineMC"].gotoAndStop(2);
            NpcDialog.show(NPC.PIRATE_2,[MainManager.actorInfo.formatNick + "，这是怎么回事！你怎么一会变成海盗，一会又变回自己啊？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["啊？你也看到这种幻象了？我看到你的模样也是在海盗与雷伊之间来回切换。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.LEIYI,["双子星一定有什么东西在做怪！影响了我们所看到的景象！"],["嗯，我们找找。"],[function():void
                  {
                     TasksManager.complete(TaskController_735.TASK_ID,0,function():void
                     {
                        DebugTrace.show("第一步完成");
                        taskStep = 1;
                        isFight = false;
                        gotoStep2();
                     });
                  }]);
               });
            });
         });
      }
      
      private static function gotoStep2() : void
      {
         _map.conLevel["machineMC"].gotoAndStop(2);
         _map.conLevel["machineMC"].buttonMode = true;
         _map.conLevel["machineMC"].addEventListener(MouseEvent.CLICK,machineClickHandler);
         _map.conLevel["pirateMC"].gotoAndStop(2);
      }
      
      private static function machineClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(238,380),function():void
         {
            NpcDialog.show(NPC.SEER,["咦？以前双子星没有这个装置的呀？而且这东西正在放射出电磁波，一定有蹊跷！"],["不管那么多了，嘿嘿！先让它休息会。（用头部射击毁坏装置）"],[function():void
            {
               if(_map.conLevel["machineMC"]["bloodMc"].data == null)
               {
                  _map.conLevel["machineMC"]["bloodMc"].visible = true;
                  _map.conLevel["machineMC"]["bloodMc"].data = {"blood":10};
                  AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEndHandler1);
               }
            }]);
         });
      }
      
      private static function onAimatEndHandler1(param1:AimatEvent) : void
      {
         var bloodMc:MovieClip = null;
         var evt:AimatEvent = param1;
         var machineMC:MovieClip = _map.conLevel["machineMC"];
         if(machineMC.hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            DebugTrace.show("被击中");
            bloodMc = machineMC["bloodMc"];
            bloodMc.data["blood"] -= 5;
            bloodMc["perTxt"].text = bloodMc.data["blood"] + "/10";
            bloodMc["perMc"].gotoAndStop(uint(101 - 10 * bloodMc.data["blood"]));
            if(bloodMc.data["blood"] <= 0)
            {
               AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler1);
               bloodMc.visible = false;
               machineMC.buttonMode = false;
               machineMC.removeEventListener(MouseEvent.CLICK,machineClickHandler);
               machineMC.gotoAndStop(3);
               _map.conLevel["pirateMC"].gotoAndStop(3);
               NpcDialog.show(NPC.SEER,["雷伊！刚刚我找到了一个放射电磁波的装置，把它摧毁后，现在看你是正常模样了！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.LEIYI,[MainManager.actorInfo.formatNick + "，我现在看到你的视像也恢复正常了！那个装置出现在这，一定是谁在搞鬼。"],["雷伊，你发消息到赛尔号，就是因为双子星出现了这个奇怪现象？"],[function():void
                  {
                     NpcDialog.show(NPC.LEIYI,["啊？我没有给你们发消息呀！是赛尔号通知我说双子星有紧急情况，需要我的帮助！"],["晕倒！看来这事情很玄乎啊！"],[function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["我们去找迪克问问，看它有没有发现一些蛛丝马迹！"],["嗯。"],[function():void
                        {
                           TasksManager.complete(TaskController_735.TASK_ID,1,function():void
                           {
                              DebugTrace.show("第二步完成");
                              taskStep = 2;
                              gotoStep3();
                           });
                        }]);
                     }]);
                  }]);
               });
            }
         }
      }
      
      private static function gotoStep3() : void
      {
         _map.conLevel["pirateMC"].gotoAndStop(3);
         _map.conLevel["dikeNPC"].gotoAndStop(2);
         _map.conLevel["machineMC"].gotoAndStop(3);
      }
      
      private static function dikeClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(398,132),function():void
         {
            if(taskStep == 2)
            {
               NpcDialog.show(NPC.DIKE,["都说我长得像地球上的某种生物，我很是怀疑！它有我这么酷吗？它可以像我这样不断的喷出鼻液吗！"],["#101雷伊之光","额……"],[function():void
               {
                  _map.conLevel["dikeNPC"].gotoAndStop(1);
                  NpcDialog.show(NPC.SEER,["迪克，最近双子星有什么奇怪的事情发生吗？你是否发现可疑迹象。"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.DIKE,["让我想想……啊！就在前两天夜深人静的时候海盗来过……"],null,null,false,function():void
                     {
                        CartoonManager.play(ClientConfig.getFullMovie("task_735_3"),function():void
                        {
                           NpcDialog.show(NPC.DIKE,["自从那天以后，我看东西就晕晕乎乎的，还总把对象搞错，估计被海盗给打傻了！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.LEIYI,["看来那些奇怪装置是海盗特意安装在双子星的，我和你收到的都是它们发送的假消息。"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.SEER,["海盗把我们骗到双子星，然后用这些幻象射线进行视像干扰，目的就是要让我们自相残杀！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.LEIYI,["真是太可恶了，我们必须把双子星上面所有的幻象装置都拆除。"],["立刻行动！我们现在去阿尔法星岩地。"],[function():void
                                    {
                                       TasksManager.complete(TaskController_735.TASK_ID,2,function():void
                                       {
                                          DebugTrace.show("第三步完成");
                                          taskStep = 3;
                                          _map.conLevel["pointMC"].visible = true;
                                       });
                                    }]);
                                 });
                              });
                           });
                        });
                     });
                  });
               }]);
            }
            else
            {
               NpcDialog.show(NPC.DIKE,["都说我长得像地球上的某种生物，我很是怀疑！它有我这么酷吗？它可以像我这样不断的喷出鼻液吗！"],["额……"]);
            }
         });
      }
      
      public static function initTaskForMap106(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         map.conLevel["machine1MC"].visible = false;
         map.conLevel["machine2MC"].visible = false;
         if(lock)
         {
            return;
         }
         _map = map;
         nRet = uint(TasksManager.getTaskStatus(TaskController_735.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            _map.conLevel["machine1MC"].visible = true;
            _map.conLevel["machine2MC"].visible = true;
            TasksManager.getProStatusList(TaskController_735.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  gotoStep4();
               }
               else if(param1[3])
               {
                  _map.conLevel["machine1MC"].gotoAndStop(3);
                  _map.conLevel["machine2MC"].gotoAndStop(3);
               }
            });
         }
      }
      
      private static function gotoStep4() : void
      {
         _map.conLevel["machine1MC"]["bloodMc"].visible = true;
         _map.conLevel["machine2MC"]["bloodMc"].visible = true;
         _map.conLevel["machine1MC"]["bloodMc"].data = {"blood":10};
         _map.conLevel["machine2MC"]["bloodMc"].data = {"blood":10};
         _map.conLevel["machine1MC"].gotoAndStop(2);
         _map.conLevel["machine2MC"].gotoAndStop(2);
         _map.conLevel["machine1MC"].buttonMode = true;
         _map.conLevel["machine1MC"].addEventListener(MouseEvent.CLICK,machineClickHandler2);
         _map.conLevel["machine2MC"].buttonMode = true;
         _map.conLevel["machine2MC"].addEventListener(MouseEvent.CLICK,machineClickHandler2);
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEndHandler2);
      }
      
      private static function machineClickHandler2(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.SEER,["我要把这些作恶的机器清理干净。"],["（用头部射击毁坏幻象射线装置）"]);
      }
      
      private static function onAimatEndHandler2(param1:AimatEvent) : void
      {
         var machineMC:MovieClip = null;
         var bloodMc:MovieClip = null;
         var evt:AimatEvent = param1;
         if(_map.conLevel["machine1MC"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            machineMC = _map.conLevel["machine1MC"];
         }
         else if(_map.conLevel["machine2MC"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            machineMC = _map.conLevel["machine2MC"];
         }
         if(machineMC != null)
         {
            DebugTrace.show("被击中");
            bloodMc = machineMC["bloodMc"];
            bloodMc.data["blood"] -= 5;
            bloodMc["perTxt"].text = bloodMc.data["blood"] + "/10";
            bloodMc["perMc"].gotoAndStop(uint(101 - 10 * bloodMc.data["blood"]));
            if(bloodMc.data["blood"] <= 0)
            {
               bloodMc.visible = false;
               machineMC.buttonMode = false;
               machineMC.removeEventListener(MouseEvent.CLICK,machineClickHandler2);
               machineMC.gotoAndStop(3);
            }
            if(!_map.conLevel["machine1MC"]["bloodMc"].visible && !_map.conLevel["machine2MC"]["bloodMc"].visible)
            {
               AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler2);
               if(taskStep == 3)
               {
                  NpcDialog.show(NPC.SEER,["阿尔法星岩地的幻象装置都清理完了，咱们接下来去哪里？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.LEIYI,["双子星有一个黑白森林，那边的环境很特殊，事物的色彩时有时无！"],["你觉得海盗在那个奇怪的区域也会设置机关？"],[function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["为了打败我们，为了争夺资源，海盗不会放过任何一个机会，哪怕要付出很大的代价！"],["嗯，咱们现在就出发去黑白森林。"],[function():void
                        {
                           TasksManager.complete(TaskController_735.TASK_ID,3,function():void
                           {
                              DebugTrace.show("第四步完成");
                              taskStep = 4;
                              MapManager.changeMap(407);
                           });
                        }]);
                     }]);
                  });
               }
               else if(taskStep == 4)
               {
                  TasksManager.complete(TaskController_735.TASK_ID,4,function():void
                  {
                     DebugTrace.show("第五步完成");
                     taskStep = 5;
                     gotoStep6();
                  });
               }
            }
         }
      }
      
      public static function initTaskForMap407(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var fun:Function = null;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["machine1MC"].visible = false;
         _map.conLevel["machine2MC"].visible = false;
         _map.conLevel["leiyiMC"].visible = false;
         _map.conLevel["leiyiMC"].gotoAndStop(1);
         nRet = uint(TasksManager.getTaskStatus(TaskController_735.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            fun = _map["initFilters"];
            _map.conLevel["machine1MC"].visible = true;
            _map.conLevel["machine2MC"].visible = true;
            TasksManager.getProStatusList(TaskController_735.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  taskStep = 4;
                  gotoStep5();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
               {
                  taskStep = 5;
                  gotoStep6();
               }
            });
         }
         else if(nRet == TasksManager.UN_ACCEPT)
         {
            fun = _map["initFilters"];
         }
         else if(nRet == TasksManager.COMPLETE)
         {
         }
         if(fun != null)
         {
            fun();
         }
         _map.conLevel["dadaNPC"].buttonMode = true;
         _map.conLevel["dadaNPC"].addEventListener(MouseEvent.CLICK,dadaClickHandler);
      }
      
      private static function gotoStep5() : void
      {
         _map.conLevel["leiyiMC"].visible = true;
         gotoStep4();
      }
      
      private static function gotoStep6() : void
      {
         _map.conLevel["leiyiMC"].visible = true;
         _map.conLevel["machine1MC"].gotoAndStop(3);
         _map.conLevel["machine2MC"].gotoAndStop(3);
         _map.conLevel["dadaNPC"].gotoAndStop(2);
      }
      
      private static function dadaClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(213,364),function():void
         {
            if(taskStep == 5)
            {
               NpcDialog.show(NPC.DADA,["我爱阳光！我爱生命！我爱五彩缤纷的世界。"],["#101雷伊之光","嗯嗯！我也喜欢多姿多彩的世界。"],[function():void
               {
                  _map.conLevel["dadaNPC"].gotoAndStop(1);
                  NpcDialog.show(NPC.DADA,["雷伊，" + MainManager.actorInfo.formatNick + "，黑白森林现在需要你们的帮助。"],["怎么了？"],[function():void
                  {
                     NpcDialog.show(NPC.DADA,["不久前这里突然出现了大量黑色能量，这次不仅是色彩彻底消失！而且很多生物都被莫名的迷雾笼罩，慢慢变得干燥枯萎！"],["这种状况和邪灵组织的暗黑能量所造成的后果很相似啊！"],[function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["很巧！我刚刚修炼完成的“雷霆之光”正好可以派上用场！"],["雷伊！你领悟出新的技能了！"],[function():void
                        {
                           NpcDialog.show(NPC.LEIYI,["嗯！我的雷霆之光能够驱散阴霾，给生命输入一定的光明能量，但使用技能的同时，身体也将耗尽元气！"],["雷伊！这对于你太危险了！"],[function():void
                           {
                              NpcDialog.show(NPC.LEIYI,["为了帮助千千万万的生命，我必须尽全力一试！而且我刚刚领悟“雷霆之光”就遇到了黑白森林的状况，看来这也是命运的安排！哈哈哈！"],["雷伊！你是真正的英雄！"],[function():void
                              {
                                 _map.conLevel["leiyiMC"].gotoAndStop(2);
                                 _map.conLevel["leiyiMC"].buttonMode = true;
                                 _map.conLevel["leiyiMC"].addEventListener(MouseEvent.CLICK,leiyiHandler);
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }
            else
            {
               NpcDialog.show(NPC.DADA,["我爱阳光！我爱生命！我爱五彩缤纷的世界。"],["嗯嗯！我也喜欢多姿多彩的世界。"]);
            }
         });
      }
      
      private static function leiyiHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(385,437),function():void
         {
            var mc:MovieClip = _map.conLevel["leiyiMC"];
            if(mc.currentFrame < mc.totalFrames)
            {
               mc.nextFrame();
            }
            else
            {
               _map.conLevel["leiyiMC"].buttonMode = false;
               _map.conLevel["leiyiMC"].removeEventListener(MouseEvent.CLICK,leiyiHandler);
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_735_4"),function():void
               {
                  var fun:Function = _map["destroyFilters"];
                  if(fun != null)
                  {
                     fun();
                  }
                  NpcDialog.show(NPC.SEER,["哈哈哈！雷伊！雷伊！雷伊无敌！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.DADA,["雷伊，你的雷霆之光真是太强悍，太神奇了！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["这次海盗并没有算计到我们！反而给了我拯救无辜生命的机会！哈哈哈！我必须勇往直前！没有什么能够阻挡！"],["雷伊！加油！我们支持你！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_735_5"),function():void
                           {
                              _map.conLevel["leiyiMC"].visible = false;
                              TasksManager.complete(TaskController_735.TASK_ID,5,function():void
                              {
                                 DebugTrace.show("任务完成");
                                 taskStep = 6;
                              });
                           });
                        }]);
                     });
                  });
               });
            }
         });
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 105)
         {
            _map.conLevel["pirateMC"].removeEventListener(MouseEvent.CLICK,pirateClickHandler);
            _map.conLevel["machineMC"].removeEventListener(MouseEvent.CLICK,machineClickHandler);
            _map.conLevel["dikeNPC"].removeEventListener(MouseEvent.CLICK,dikeClickHandler);
            AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler1);
         }
         else if(MapManager.currentMap.id == 106)
         {
            _map.conLevel["machine1MC"].removeEventListener(MouseEvent.CLICK,machineClickHandler2);
            _map.conLevel["machine2MC"].removeEventListener(MouseEvent.CLICK,machineClickHandler2);
            AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler2);
         }
         else if(MapManager.currentMap.id == 407)
         {
            _map.conLevel["dadaNPC"].removeEventListener(MouseEvent.CLICK,dadaClickHandler);
            _map.conLevel["machine1MC"].removeEventListener(MouseEvent.CLICK,machineClickHandler2);
            _map.conLevel["machine2MC"].removeEventListener(MouseEvent.CLICK,machineClickHandler2);
            _map.conLevel["leiyiMC"].removeEventListener(MouseEvent.CLICK,leiyiHandler);
            AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEndHandler2);
         }
         _map = null;
      }
   }
}
