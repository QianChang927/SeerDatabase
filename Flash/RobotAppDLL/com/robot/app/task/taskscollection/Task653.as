package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_653;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
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
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task653 extends ITask
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var isFight:Boolean;
       
      
      public function Task653()
      {
         super();
      }
      
      public static function initTaskForMap446(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         var nRet:uint = uint(TasksManager.getTaskStatus(648));
         if(nRet == TasksManager.COMPLETE)
         {
            _map = map;
            nRet = uint(TasksManager.getTaskStatus(TaskController_653.TASK_ID));
            if(nRet == TasksManager.UN_ACCEPT)
            {
               taskStep = -1;
               ToolBarController.showOrHideAllUser(false);
               _map.conLevel["kaziMC"].visible = true;
               _map.conLevel["kaziMC"].buttonMode = true;
               _map.conLevel["kaziMC"].gotoAndStop(2);
               _map.conLevel["kaziMC"].addEventListener(MouseEvent.CLICK,kaziClickHandler);
            }
            else if(nRet == TasksManager.ALR_ACCEPT)
            {
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(TaskController_653.TASK_ID,function(param1:Array):void
               {
                  if(!param1[0])
                  {
                     taskStep = 0;
                     gotoStep1();
                  }
               });
            }
         }
      }
      
      private static function kaziClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         if(taskStep == -1)
         {
            NpcDialog.show(NPC.KAZI,[MainManager.actorInfo.formatNick + "，记忆晶球让我坚信，我的父母就在炫彩山中，继续前进吧！"],["恩，出发！","我们先在这休息会！"],[function():void
            {
               TasksManager.accept(TaskController_653.TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("任务接取成功");
                     taskStep = 0;
                     gotoStep1();
                  }
               });
            }]);
         }
         else if(taskStep == 0)
         {
            gotoStep1();
         }
      }
      
      private static function gotoStep1() : void
      {
         AnimateManager.playMcAnimate(_map.conLevel["kaziMC"],3,"mc3",function():void
         {
            _map.conLevel["nextMapHit"].visible = true;
         });
      }
      
      public static function initTaskForMap447(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_653.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            MainManager.selfVisible = false;
            OgreController.isShow = false;
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_653.TASK_ID,function(param1:Array):void
            {
               var a:Array = param1;
               if(!a[0])
               {
                  taskStep = 0;
                  TasksManager.complete(TaskController_653.TASK_ID,0,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        DebugTrace.show("第一步完成");
                        taskStep = 1;
                        gotoStep2();
                     }
                  });
               }
               else if(Boolean(a[0]) && !a[1])
               {
                  taskStep = 1;
                  gotoStep2();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && !a[2])
               {
                  taskStep = 2;
                  gotoStep3();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && !a[3])
               {
                  taskStep = 3;
                  gotoStep4();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && Boolean(a[3]) && !a[4])
               {
                  taskStep = 4;
                  gotoStep5();
               }
               else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && Boolean(a[3]) && Boolean(a[4]) && !a[5])
               {
                  taskStep = 5;
                  gotoStep6();
               }
            });
         }
         else if(nRet == TasksManager.COMPLETE)
         {
            _map.conLevel["kaziMC"].visible = false;
            _map.conLevel["linesMC"].gotoAndStop(3);
         }
         _map.topLevel["lightMC"].mouseChildren = _map.topLevel["lightMC"].mouseEnabled = false;
      }
      
      private static function gotoStep2() : void
      {
         _map.conLevel["kaziMC"].gotoAndStop(2);
         NpcDialog.show(NPC.KAZI,["嘘！你看，那边是机械要塞和海盗船，看来这里已经被海盗设为重要据点了！"],["嗯，我还发现远处的水面有一股奇特的蓝色能量！"],[function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["kaziMC"],2,"mc2",function():void
            {
               TasksManager.complete(TaskController_653.TASK_ID,1,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("第二步完成");
                     taskStep = 2;
                     gotoStep3();
                  }
               });
            });
         }]);
      }
      
      private static function gotoStep3() : void
      {
         AnimateManager.playMcAnimate(_map.conLevel["kaziMC"],3,"mc3",function():void
         {
            NpcDialog.show(NPC.KAZI,["我们已经暴露了，这场战役不可避免！"],["卡茨，刚才你那一招太帅了！"],[function():void
            {
               NpcDialog.show(NPC.KAZI,["嗯，乘坐前面那个小木筏，让我们把海盗要塞闹个天翻地覆吧！"],["海盗我们来了！(点击小木筏)"],[function():void
               {
                  _map.conLevel["kaziMC"]["boatHit"].buttonMode = true;
                  _map.conLevel["kaziMC"]["boatHit"].addEventListener(MouseEvent.CLICK,boatClickHandler);
               }]);
            }]);
         });
      }
      
      private static function boatClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["kaziMC"]["boatHit"].mouseChildren = _map.conLevel["kaziMC"]["boatHit"].mouseEnabled = false;
         AnimateManager.playMcAnimate(_map.conLevel["kaziMC"],4,"mc4",function():void
         {
            NpcDialog.show(NPC.PIRATE_2,["哈哈哈！你们坐的那个破玩意！啊哈哈！太搞笑了，我要把你们打个落花流水。"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["好呀！那咱们就试试！"],["消灭海盗！（点击海盗杂兵进行对战）"],[function():void
               {
                  _map.conLevel["kaziMC"].gotoAndStop(5);
                  _map.conLevel["kaziMC"]["pirate1Hit"].buttonMode = true;
                  _map.conLevel["kaziMC"]["pirate1Hit"].addEventListener(MouseEvent.CLICK,pirateClickHandler);
                  _map.conLevel["kaziMC"]["pirate2Hit"].buttonMode = true;
                  _map.conLevel["kaziMC"]["pirate2Hit"].addEventListener(MouseEvent.CLICK,pirateClickHandler);
               }]);
            });
         });
      }
      
      private static function pirateClickHandler(param1:MouseEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete);
         FightManager.fightWithBoss("海盗杂兵",0);
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         isFight = true;
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_RESULT,onFightComplete);
         TasksManager.complete(TaskController_653.TASK_ID,2,function(param1:Boolean):void
         {
            if(param1)
            {
               DebugTrace.show("第三步完成");
               taskStep = 3;
            }
         });
      }
      
      private static function gotoStep4() : void
      {
         _map.conLevel["kaziMC"].gotoAndStop(5);
         if(isFight)
         {
            isFight = false;
            NpcDialog.show(NPC.PIRATE_2,["哼哼！你们的冒险之旅才刚刚开始，前面会有“好东西”等着你们！哈哈哈！"],["“好东西”？看来前方一定有埋伏！"],[function():void
            {
               beatByBoat();
            }]);
         }
         else
         {
            beatByBoat();
         }
      }
      
      private static function beatByBoat() : void
      {
         AnimateManager.playMcAnimate(_map.conLevel["kaziMC"],6,"mc6",function():void
         {
            NpcDialog.show(NPC.KAZI,["赛尔，你没事吧！这个怪物在水中有优势，不好对付啊！"],["嗯嗯嗯…..等等，我想我有办法了！(用头部攻击怪物)"],[function():void
            {
               TasksManager.complete(TaskController_653.TASK_ID,3,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("第四步完成");
                     taskStep = 4;
                     gotoStep5();
                  }
               });
            }]);
         });
      }
      
      private static function gotoStep5() : void
      {
         _map.conLevel["kaziMC"].gotoAndStop(7);
         _map.conLevel["kaziMC"]["monsterHit"].data = {"num":0};
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEnd);
      }
      
      private static function onAimatEnd(param1:AimatEvent) : void
      {
         var evt:AimatEvent = param1;
         if(_map.conLevel["kaziMC"]["monsterHit"].hitTestPoint(evt.info.endPos.x,evt.info.endPos.y))
         {
            DebugTrace.show("击中了");
            ++_map.conLevel["kaziMC"]["monsterHit"].data["num"];
            if(_map.conLevel["kaziMC"]["monsterHit"].data["num"] == 3)
            {
               _map.conLevel["kaziMC"]["monsterHit"].visible = false;
               AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
               NpcDialog.show(NPC.SEER,["可恶！这样下去不行，一定要找到它身上的弱点！"],["弱点…究竟在哪里呢？"],[function():void
               {
                  NpcDialog.show(NPC.KAZI,["小赛尔，我发现每次攻击时，它的触角都会紧缩，似乎在躲避。也许触角就是它的弱点！"],["真的吗？那我们同时攻击一次！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["kaziMC"],7,"mc7",function():void
                     {
                        NpcDialog.show(NPC.SEER,["耶！！！太棒了，我们联手击退了那个怪物！"],["用小木筏继续前进"],[function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["kaziMC"],8,"mc8",function():void
                           {
                              NpcDialog.show(NPC.KAZI,["赛尔！那股蓝色能量似乎在向我们呼唤！"],["恩恩，先把那个海盗打跑！"],[function():void
                              {
                                 NpcDialog.show(NPC.PIRATE_2,["你们别过来啊！别过来！我可比你们想象的厉害！我会很多招式的！别惹我哦！"],["哈哈！瞧你那样就知道你害怕啦！"],[function():void
                                 {
                                    NpcDialog.show(NPC.PIRATE_2,["既然被你们看破，那..那我只好去找救兵了，你们等着，别走啊！"],["哈哈哈！没用的东西！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(_map.conLevel["kaziMC"],9,"mc9",function():void
                                       {
                                          TasksManager.complete(TaskController_653.TASK_ID,4,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                DebugTrace.show("第五步完成");
                                                taskStep = 5;
                                                gotoStep6();
                                             }
                                          });
                                       });
                                    }]);
                                 }]);
                              }]);
                           });
                        }]);
                     });
                  }]);
               }]);
            }
         }
      }
      
      private static function gotoStep6() : void
      {
         _map.conLevel["kaziMC"].gotoAndStop(10);
         NpcDialog.show(NPC.SEER,["快看看水里的蓝色能量到底是什么？"],["拉动链条（点击铁链）"],[function():void
         {
            _map.conLevel["linesMC"]["linesHit"].buttonMode = true;
            _map.conLevel["linesMC"]["linesHit"].addEventListener(MouseEvent.CLICK,linsClickHandler);
         }]);
      }
      
      private static function linsClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["linesMC"]["linesHit"].mouseChildren = _map.conLevel["linesMC"]["linesHit"].mouseEnabled = false;
         AnimateManager.playMcAnimate(_map.conLevel["linesMC"],2,"mc2",function():void
         {
            NpcDialog.show(NPC.KAZI,["咦！好像是巧克力一族啊！"],["巧克力？难道是……"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_653_1"),function():void
               {
                  _map.conLevel["linesMC"].gotoAndStop(3);
                  _map.conLevel["kaziMC"].visible = false;
                  _map.conLevel["boatMC"].gotoAndStop(2);
                  NpcDialog.show(NPC.SEER,["快！卡茨，我们先离开这个地方！到达安全的地方再说！"],["恩，我们走！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["pirateMC"],1,"mc1",function():void
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["boatMC"],2,"mc2",function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_653_2"),function():void
                           {
                              _map.conLevel["boatMC"].gotoAndStop(3);
                              DisplayUtil.removeForParent(_map.conLevel["pirateMC"]);
                              NpcDialog.show(NPC.KACI_MOTHER,["孩子，没想到你被赐予了如此强大的力量！我们赶紧去救你的父亲吧，他应该在上面一层！"],["什么！被什么赐予力量？我的父亲也被海盗困住了？"],[function():void
                              {
                                 NpcDialog.show(NPC.KACI_MOTHER,["嗯，我知道你心里现在有很多疑问，目前情况紧急，等危机解除后我会你解释清楚事情的来龙去脉。"],["我明白了！"],[function():void
                                 {
                                    NpcDialog.show(NPC.KAZI,["亲爱的母亲，炫彩山很危险，你又受了伤，你先回村庄，召集大伙一起来赶走海盗。相信我！我一定能够救出父亲！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.KACI_MOTHER,["卡茨，我相信你！你说的很对，必须集合大家的力量才能解除炫彩山的困境！我现在就出发，你要小心！"],["嗯！我们会成功的！"],[function():void
                                       {
                                          TasksManager.complete(TaskController_653.TASK_ID,5,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                DebugTrace.show("任务完成");
                                                taskStep = 6;
                                                _map.conLevel["boatMC"].visible = false;
                                                MainManager.selfVisible = true;
                                                OgreController.isShow = true;
                                                ToolBarController.showOrHideAllUser(true);
                                             }
                                          });
                                       }]);
                                    });
                                 }]);
                              }]);
                           });
                        });
                     });
                  }]);
               });
            }]);
         });
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 446)
         {
            ToolBarController.showOrHideAllUser(true);
            _map.conLevel["kaziMC"].removeEventListener(MouseEvent.CLICK,kaziClickHandler);
         }
         else if(MapManager.currentMap.id == 447)
         {
            OgreController.isShow = true;
            ToolBarController.showOrHideAllUser(true);
            MainManager.selfVisible = true;
            AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
            _map.conLevel["kaziMC"]["boatHit"].removeEventListener(MouseEvent.CLICK,boatClickHandler);
            _map.conLevel["kaziMC"]["pirate1Hit"].removeEventListener(MouseEvent.CLICK,pirateClickHandler);
            _map.conLevel["kaziMC"]["pirate2Hit"].removeEventListener(MouseEvent.CLICK,pirateClickHandler);
            _map.conLevel["linesMC"]["linesHit"].removeEventListener(MouseEvent.CLICK,linsClickHandler);
         }
         _map = null;
      }
      
      override public function initForMap(param1:BaseMapProcess) : void
      {
         if(MapManager.currentMap.id == 446)
         {
            initTaskForMap446(param1);
         }
         if(MapManager.currentMap.id == 447)
         {
            initTaskForMap447(param1);
         }
      }
      
      override public function hideInMap(param1:BaseMapProcess) : void
      {
         if(MapManager.currentMap.id == 446)
         {
         }
         if(MapManager.currentMap.id == 447)
         {
            param1.conLevel["linesMC"].gotoAndStop(3);
         }
      }
      
      override public function destoryForMap() : void
      {
         if(MapManager.currentMap.id == 446)
         {
            destroy();
         }
         if(MapManager.currentMap.id == 447)
         {
            destroy();
         }
      }
   }
}
