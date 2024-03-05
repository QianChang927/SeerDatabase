package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_748;
   import com.robot.app.task.petstory.util.FightGang;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task748
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var fightGang:FightGang;
       
      
      public function Task748()
      {
         super();
      }
      
      public static function initTaskForMap326(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         map.conLevel["npcMC"].gotoAndStop(2);
         map.conLevel["weisikeMC"].visible = false;
         map.conLevel["haidaoMC"].visible = false;
         if(lock)
         {
            return;
         }
         _map = map;
         nRet = uint(TasksManager.getTaskStatus(TaskController_748.TASK_ID));
         if(nRet == TasksManager.UN_ACCEPT)
         {
            _map.conLevel["npcMC"].gotoAndStop(1);
         }
         else if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_748.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskStep = 1;
                  _map.conLevel["npcMC"].gotoAndStop(1);
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  ToolBarController.showOrHideAllUser(false);
                  _map.conLevel["npcMC"].gotoAndStop(8);
                  _map.conLevel["haidaoMC"].visible = true;
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  taskStep = 4;
                  _map.conLevel["npcMC"].gotoAndStop(4);
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
            if(_map.conLevel["npcMC"].currentFrame == 1 && taskStep == -100)
            {
               NpcDialog.show(NPC.RUIERSI,["我为了一个约定出现在这里！英雄必须时刻做好战斗准备！"],["#101王者对决","我感受到了你强大的能量！"],[function():void
               {
                  _map.conLevel["npcMC"].gotoAndStop(2);
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_748_1"),function():void
                  {
                     TasksManager.accept(TaskController_748.TASK_ID,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           DebugTrace.show("任务接取成功");
                           taskStep = 0;
                           MapManager.changeMap(419);
                        }
                     });
                  },false);
               }]);
            }
            else if(_map.conLevel["npcMC"].currentFrame == 1 && taskStep == 1)
            {
               _map.conLevel["npcMC"].gotoAndStop(2);
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_748_2"),function():void
               {
                  _map.conLevel["weisikeMC"].visible = true;
                  NpcDialog.show(NPC.SEER,["糟了，是威斯克！这也太巧了吧，他来的可真不是时候！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.WEISIKE,["盖亚！看了你们兄弟俩的对战，我很失望啊！就你这点实力还想与我抗衡，真是天大的笑话！哈哈哈！"],["你披着件脏不拉几的披风还唧唧歪歪！有胆子就跟我打一场！别废话。"],[function():void
                     {
                        NpcDialog.show(NPC.WEISIKE,["盖亚，大家不是都称你为战斗大师吗！我今天的目的就是要你的俯首称臣！我在光暗之城等你，过期不候。"],null,null,false,function():void
                        {
                           DisplayUtil.removeForParent(_map.conLevel["weisikeMC"]);
                           NpcDialog.show(NPC.GAIYA,["瑞尔斯，咱们今天就到这里吧，好不容易碰上威斯克那家伙，我一定要好好教训他！"],["他来得这么突然，一定有阴谋，不能冲动！"],[function():void
                           {
                              NpcDialog.show(NPC.GAIYA,["他释放出的强大能量，让我战火燃烧，我一定要与他决斗！哥哥，你在这等我回来！"],["哎！盖亚你太鲁莽了，" + MainManager.actorInfo.nick + "一起去，有事情及时联系。"],[function():void
                              {
                                 TasksManager.complete(TaskController_748.TASK_ID,1,function():void
                                 {
                                    DebugTrace.show("第二步完成");
                                    taskStep = 2;
                                    MapManager.changeMap(62);
                                 });
                              }]);
                           }]);
                        });
                     }]);
                  });
               });
            }
            else if(_map.conLevel["npcMC"].currentFrame == 8 && taskStep == 3)
            {
               _map.conLevel["npcMC"].gotoAndStop(7);
               NpcDialog.show(NPC.GAIYA,["这到底是怎么一回事！瑞尔斯怎么会受伤倒地！该死的海盗！"],["我来对付海盗，盖亚！你赶紧把瑞尔斯救出来！"],[function():void
               {
                  DisplayUtil.removeForParent(_map.conLevel["haidaoMC"]);
                  initFight();
               }]);
            }
            else if(_map.conLevel["npcMC"].currentFrame == 4 && taskStep == 4)
            {
               _map.conLevel["npcMC"].gotoAndStop(5);
               NpcDialog.show(NPC.GAIYA,["瑞尔斯，到底发生什么了！是谁把你伤成这样的！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.RUIERSI,["啊！威斯克太强了……"],["什么……（瑞尔斯回忆） "],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_748_4"),function():void
                     {
                        _map.conLevel["npcMC"].gotoAndStop(3);
                        NpcDialog.show(NPC.GAIYA,["哎！都怪我太冲动，才让敌人有机可趁！瑞尔斯我一定会为你报仇，我要威斯克付出惨痛的代价！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.RUIERSI,["盖亚！不要被仇恨的怒火灼伤心灵！坚守正义，保护生命才是最重要的！"],null,null,false,function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_748_5"),function():void
                              {
                                 TasksManager.complete(TaskController_748.TASK_ID,4,function():void
                                 {
                                    DebugTrace.show("任务完成");
                                    taskStep = 5;
                                    _map.conLevel["npcMC"].gotoAndStop(2);
                                 });
                              });
                           });
                        });
                     });
                  }]);
               });
            }
            else if(_map.conLevel["npcMC"].currentFrame == 2)
            {
               NpcDialog.show(NPC.RUIERSI,["我为了一个约定出现在这里！英雄必须时刻做好战斗准备！"],["我感受到了你强大的能量！"]);
            }
         });
      }
      
      private static function initFight() : void
      {
         if(fightGang == null)
         {
            fightGang = new FightGang(120,100,5);
            fightGang.createOgre(2520,new Point(491,327),10,5);
            fightGang.createOgre(2520,new Point(523,260),10,5);
            fightGang.createOgre(2520,new Point(636,286),10,5);
            fightGang.beginFight().addResponse(function():void
            {
               fightGang.destroyFight();
               fightGang = null;
               NpcDialog.show(NPC.SEER,["知道我的厉害了吧！你们全都是浮云！"],["赶紧找盖亚对话。"],[function():void
               {
                  TasksManager.complete(TaskController_748.TASK_ID,3,function():void
                  {
                     DebugTrace.show("第四步完成");
                     taskStep = 4;
                     _map.conLevel["npcMC"].gotoAndStop(4);
                  });
               }]);
            },function():void
            {
               NpcDialog.show(NPC.SEER,["可恶！海盗！我一定不会放过你们！"],["（用头部射击消灭海盗）"],[function():void
               {
                  fightGang.beginFight();
               }]);
            });
         }
      }
      
      public static function initTaskForMap419(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_748.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_748.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskStep = 0;
               }
            });
         }
      }
      
      public static function taskHandler() : void
      {
         NpcDialog.show(NPC.SEER,["盖亚！你能否推迟与瑞尔斯的决斗啊？海盗与邪灵组织最近活动异常频繁，他们正伺机而动呢！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.GAIYA,["经过这段时间的恢复，我和瑞尔斯都已经达到了最佳状态！现在是决斗的最佳时刻！"],["你们的大战必定会耗费许多能量！要是敌人乘机偷袭可就糟了！"],[function():void
            {
               NpcDialog.show(NPC.GAIYA,["哈哈哈！" + MainManager.actorInfo.formatNick + "，你杞人忧天了！那些小喽啰，我根本就没有放在眼里！"],["盖亚！你不能大意！威斯克、斯宾塞可都是深藏不露的对手！"],[function():void
               {
                  NpcDialog.show(NPC.GAIYA,["嘿嘿，我到是很期盼与邪灵组织的老大威斯克来一场！好了，别说了！我和瑞尔斯的决斗不容改变！现在就出发！"],["哎！你们兄弟俩的个性可真够倔的，咱们一起去暮色之城吧！"],[function():void
                  {
                     TasksManager.complete(TaskController_748.TASK_ID,0,function():void
                     {
                        DebugTrace.show("第一步完成");
                        taskStep = 1;
                        MapManager.changeMap(326);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      public static function initTaskForMap62(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["task748MC"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_748.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_748.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  taskStep = 1;
                  _map.conLevel["task748MC"].gotoAndStop(2);
                  _map.conLevel["task748MC"].visible = true;
                  _map.conLevel["task748MC"].buttonMode = true;
                  _map.conLevel["task748MC"].addEventListener(MouseEvent.CLICK,task748ClickHandler);
               }
            });
         }
      }
      
      private static function task748ClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(705,225),function():void
         {
            NpcDialog.show(NPC.GAIYA,["威斯克！我们一决高下吧！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.WEISIKE,["盖亚！我会让你痛不欲生的，哈哈哈！"],["与威斯克对战！"],[function():void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                  FightManager.fightWithBoss("威斯克",0);
               }]);
            });
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         _map.conLevel["task748MC"].buttonMode = false;
         _map.conLevel["task748MC"].removeEventListener(MouseEvent.CLICK,task748ClickHandler);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         _map.conLevel["task748MC"].gotoAndStop(1);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_748_3"),function():void
         {
            _map.conLevel["task748MC"].visible = false;
            NpcDialog.show(NPC.SEER,["盖亚！我觉得不对劲，咱们跑到这么远的地方与威斯克交战，可他发挥出的实力与之前天差地别，飞来飞去的似乎是在拖延时间。"],null,null,false,function():void
            {
               NpcDialog.show(NPC.GAIYA,["哈哈哈！他是被我给吓破胆了，邪灵组织的老大真是不堪一击！咱们现在回艾迪星找瑞尔斯。"],["嗯，希望一切顺利。"],[function():void
               {
                  TasksManager.complete(TaskController_748.TASK_ID,2,function():void
                  {
                     DebugTrace.show("第三步完成");
                     taskStep = 3;
                     MapManager.changeMap(326);
                  });
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
         if(MapManager.currentMap.id == 326)
         {
            _map.conLevel["npcMC"].removeEventListener(MouseEvent.CLICK,ruiersiClickHandler);
            ToolBarController.showOrHideAllUser(true);
            if(fightGang)
            {
               fightGang.destroyFight();
               fightGang = null;
            }
         }
         else if(MapManager.currentMap.id != 419)
         {
            if(MapManager.currentMap.id == 62)
            {
               _map.conLevel["task748MC"].removeEventListener(MouseEvent.CLICK,task748ClickHandler);
            }
         }
         _map = null;
      }
   }
}
