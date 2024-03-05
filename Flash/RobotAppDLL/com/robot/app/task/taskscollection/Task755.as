package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_755;
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
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task755
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var fightGang:FightGang;
      
      private static var isFighting:Boolean;
       
      
      public function Task755()
      {
         super();
      }
      
      public static function initTaskForMap326(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["npcMC"].gotoAndStop(2);
         var _loc2_:uint = uint(TasksManager.getTaskStatus(TaskController_755.TASK_ID));
         if(_loc2_ == TasksManager.UN_ACCEPT)
         {
            _map.conLevel["npcMC"].gotoAndStop(1);
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
               NpcDialog.show(NPC.RUIERSI,["我为了一个约定出现在这里！英雄必须时刻做好战斗准备！"],["#101战神联盟爆发出击","我感受到了你强大的能量！"],[function():void
               {
                  _map.conLevel["npcMC"].gotoAndStop(2);
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_755_1"),function():void
                  {
                     TasksManager.accept(TaskController_755.TASK_ID,function(param1:Boolean):void
                     {
                        if(!param1)
                        {
                           return;
                        }
                        DebugTrace.show("任务接取成功");
                        taskStep = 0;
                        MapManager.changeMap(445);
                     });
                  },false);
               }]);
            }
            else if(_map.conLevel["npcMC"].currentFrame == 2)
            {
               NpcDialog.show(NPC.RUIERSI,["我为了一个约定出现在这里！英雄必须时刻做好战斗准备！"],["我感受到了你强大的能量！"]);
            }
         });
      }
      
      public static function initTaskForMap445(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_755.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_755.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskStep = 0;
                  _map.conLevel["kaxiusiMC"].gotoAndStop(2);
               }
            });
         }
         _map.conLevel["kaxiusiMC"].buttonMode = true;
         _map.conLevel["kaxiusiMC"].addEventListener(MouseEvent.CLICK,kaxiusiClickHandler);
      }
      
      private static function kaxiusiClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(670,190),function():void
         {
            if(_map.conLevel["kaxiusiMC"].currentFrame == 2 && taskStep == 0)
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["守护炫彩山是我的使命！"],["#101战神联盟爆发出击","嗯，你好好站岗吧，我顶你！"],[function():void
               {
                  _map.conLevel["kaxiusiMC"].gotoAndStop(1);
                  NpcDialog.show(NPC.SEER,["盖亚独身闯到海盗能源基地去了！那里不但有海盗的重兵把守，而且邪灵组织的威斯克也在！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.KAXIUSI_WHITE,["哎！他这不是自找麻烦么！虽然我们决心与黑暗势力对抗到底，但也必须理智的去战斗啊！"],["嗯嗯！你说的很对，可盖亚的个性就是如此莽撞啊！"],[function():void
                     {
                        NpcDialog.show(NPC.KAXIUSI_WHITE,["我绝不能让战友陷入困境！咱们立刻出发。"],["卡修斯你真好，我们去找布莱克，大家共同出击。"],[function():void
                        {
                           TasksManager.complete(TaskController_755.TASK_ID,0,function():void
                           {
                              DebugTrace.show("第一步完成");
                              taskStep = 1;
                              MapManager.changeMap(507);
                           });
                        }]);
                     }]);
                  });
               }]);
            }
            else
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["守护炫彩山是我的使命！"],["嗯，你好好站岗吧，我顶你！"]);
            }
         });
      }
      
      public static function initTaskForMap507(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_755.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               taskStep = 1;
               _map.conLevel["bulaikeNPC"]["signMC"].visible = true;
            }
         });
         _map.conLevel["bulaikeNPC"].buttonMode = true;
         _map.conLevel["bulaikeNPC"].addEventListener(MouseEvent.CLICK,bulaikeNPCHandler);
      }
      
      private static function bulaikeNPCHandler(param1:MouseEvent) : void
      {
         var fightFun:Function = null;
         var evt:MouseEvent = param1;
         fightFun = function():void
         {
            NpcDialog.show(NPC.BULAIKE_NEW,["作为光明圣坛守护者，我不畏惧任何挑战！但我认为只有一对一的决斗才能证明谁是真正的强者！你有这个胆量吗？"],["OK，我会让你心服口服的！","嘿嘿！让哥哥我再考虑考虑。"],[function():void
            {
               FightManager.fightWithBoss("布莱克",0);
            }]);
         };
         MainManager.actorModel.moveAndAction(new Point(325,215),function():void
         {
            if(_map.conLevel["bulaikeNPC"]["signMC"].visible == true && taskStep == 1)
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["我一定会让光明重返格雷斯星！"],["#101战神联盟爆发出击","与布莱克对战。","算了，我还是先围观吧。"],[function():void
               {
                  _map.conLevel["bulaikeNPC"]["signMC"].visible = false;
                  NpcDialog.show(NPC.SEER,["盖亚正独自闯到双子阿尔法星的海盗能源基地找威斯克复仇呢！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.BULAIKE_NEW,["他太小看威斯克的实力了！上次在威斯克受伤的情况下，我和卡修斯联手都没搞定！他这次是自讨苦吃！"],["盖亚一直认为瑞尔斯受伤是因为他，所以咯！他的心情可以理解。"],[function():void
                     {
                        NpcDialog.show(NPC.BULAIKE_NEW,["哼，有勇无谋的家伙！既然海盗和邪灵组织都在能源基地，那里一定有什么重要事情！咱们赶紧出发吧。"],["好咧，赶快与雷伊，瑞尔斯汇合吧！"],[function():void
                        {
                           TasksManager.complete(TaskController_755.TASK_ID,1,function():void
                           {
                              DebugTrace.show("第二步完成");
                              taskStep = 2;
                              MapManager.changeMap(106);
                           });
                        }]);
                     }]);
                  });
               },fightFun]);
            }
            else
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["我一定会让光明重返格雷斯星！"],["与布莱克对战。","算了，我还是先围观吧。"],[fightFun]);
            }
         });
      }
      
      public static function initTaskForMap106(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         map.conLevel["leiyiMC"].visible = false;
         map.conLevel["kaxiusiMC"].visible = false;
         map.conLevel["bulaikeMC"].visible = false;
         map.conLevel["ruiersiMC"].visible = false;
         map.conLevel["pointMC"].visible = false;
         map.conLevel["haidao4MC"].visible = false;
         if(lock)
         {
            return;
         }
         _map = map;
         nRet = uint(TasksManager.getTaskStatus(TaskController_755.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_755.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  taskStep = 2;
                  _map.conLevel["leiyiMC"].visible = true;
                  _map.conLevel["kaxiusiMC"].visible = true;
                  _map.conLevel["bulaikeMC"].visible = true;
                  _map.conLevel["ruiersiMC"].visible = true;
                  _map.conLevel["haidao4MC"].visible = true;
                  _map.conLevel["haidao4MC"].buttonMode = _map.conLevel["haidao4MC"].mouseChild = false;
                  _map.conLevel["leiyiMC"].gotoAndStop(2);
                  _map.conLevel["leiyiMC"].buttonMode = true;
                  _map.conLevel["leiyiMC"].addEventListener(MouseEvent.CLICK,leiyiMCHandler);
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  _map.conLevel["leiyiMC"].visible = true;
                  _map.conLevel["kaxiusiMC"].visible = true;
                  _map.conLevel["bulaikeMC"].visible = true;
                  _map.conLevel["ruiersiMC"].visible = true;
                  gotoStep4();
               }
            });
         }
      }
      
      private static function leiyiMCHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(760,440),function():void
         {
            if(_map.conLevel["leiyiMC"].currentFrame == 2 && taskStep == 2)
            {
               _map.conLevel["leiyiMC"].gotoAndStop(1);
               NpcDialog.show(NPC.LEIYI,["大家都到齐了！海盗邪灵重兵把守，层层设防，我们不能大意啊！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.KAXIUSI_WHITE,["这里有战斗过的痕迹，难道是盖亚……"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.BULAIKE_NEW,["情况不容乐观！看这阵势，敌人的防御机制已经恢复常态，盖亚有可能被俘虏了。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.RUIERSI,["咱们不能再耽误时间了，速战速决，找到盖亚！"],["我来对付杂兵，你们直捣海盗能源站！"],[function():void
                        {
                           TasksManager.complete(TaskController_755.TASK_ID,2,function():void
                           {
                              DebugTrace.show("第三步完成");
                              taskStep = 3;
                              gotoStep4();
                           });
                        }]);
                     });
                  });
               });
            }
         });
      }
      
      private static function gotoStep4() : void
      {
         if(fightGang == null)
         {
            DisplayUtil.removeForParent(_map.conLevel["haidao4MC"]);
            fightGang = new FightGang(120,100,5);
            fightGang.createOgre(2527,new Point(307,222),10,5);
            fightGang.createOgre(2527,new Point(371,183),10,5);
            fightGang.createOgre(2520,new Point(430,180),10,5);
            fightGang.createOgre(2520,new Point(495,198),10,5);
            fightGang.beginFight().addResponse(function():void
            {
               fightGang.destroyFight();
               fightGang = null;
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_755_2"),function():void
               {
                  TasksManager.complete(TaskController_755.TASK_ID,3,function():void
                  {
                     DebugTrace.show("第四步完成");
                     taskStep = 4;
                     _map.conLevel["leiyiMC"].visible = false;
                     _map.conLevel["kaxiusiMC"].visible = false;
                     _map.conLevel["bulaikeMC"].visible = false;
                     _map.conLevel["ruiersiMC"].visible = false;
                     _map.conLevel["pointMC"].visible = true;
                  });
               });
            },function():void
            {
               NpcDialog.show(NPC.SEER,["可恶！我一定要冲破你们的阻碍！"],["（用头部射击消灭敌人）"],[function():void
               {
                  fightGang.beginFight();
               }]);
            });
         }
      }
      
      public static function initTaskForMap46(param1:BaseMapProcess, param2:Boolean = false) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         var lock:Boolean = param2;
         map.conLevel["task755MC"].visible = false;
         if(lock)
         {
            return;
         }
         _map = map;
         nRet = uint(TasksManager.getTaskStatus(TaskController_755.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_755.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  taskStep = 4;
                  _map.conLevel["task755MC"].visible = true;
                  gotoStep5();
                  _map.depthLevel["siBinSaiBoss"].visible = false;
               }
            });
         }
      }
      
      private static function gotoStep5() : void
      {
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         if(isFighting)
         {
            return;
         }
         AnimateManager.playMcAnimate(_map.conLevel["task755MC"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.LEIYI,["大战开始了！"],["（点击威斯克一伙开始对战）"],[function():void
            {
               _map.conLevel["task755MC"].gotoAndStop(2);
               _map.conLevel["task755MC"].addEventListener(MouseEvent.CLICK,makeFightHandler);
            }]);
         });
      }
      
      private static function makeFightHandler(param1:MouseEvent) : void
      {
         if(param1.target.name == "shut")
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightManager.fightWithBoss("海盗",1);
            isFighting = true;
         }
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         isFighting = false;
         _map.conLevel["task755MC"].removeEventListener(MouseEvent.CLICK,makeFightHandler);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_755_3"),function():void
         {
            _map.conLevel["task755MC"].visible = false;
            NpcDialog.show(NPC.LEIYI,["大家别追了，咱们这次来毫无准备，以免又中了敌人的圈套！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["对！我们赶紧先把盖亚救下来吧！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.RUIERSI,["盖亚你好点了吗？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.GAIYA,["一点小伤，没问题！威斯克的实力让我惊讶！ 闯进能源站时，我似乎还听到了他们在商量什么“死黑能量”？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.BULAIKE_NEW,["在刚才的战斗中，海盗邪灵其实占据优势，他们急匆匆的离开肯定有更重要的原因！“死黑能量”？我们必须得加倍防范了！"],["嗯！我们要勇敢坚强的面对挑战！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_755_4"),function():void
                           {
                              TasksManager.complete(TaskController_755.TASK_ID,4,function():void
                              {
                                 DebugTrace.show("任务完成");
                                 taskStep = 5;
                                 OgreController.isShow = true;
                                 ToolBarController.showOrHideAllUser(true);
                                 _map.depthLevel["siBinSaiBoss"].visible = true;
                                 _map.depthLevel["siBinSaiBoss"].buttonMode = true;
                                 ToolTipManager.add(_map.depthLevel["siBinSaiBoss"],"斯宾塞");
                                 _map.depthLevel["siBinSaiBoss"].addEventListener(MouseEvent.CLICK,onFightClick);
                              });
                           });
                        }]);
                     });
                  });
               });
            });
         });
      }
      
      private static function onFightClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         NpcDialog.show(NPC.SIBINSAI,["威斯克殿下的计划必将成功！来吧，让你尝尝我的厉害！哈哈哈！"],["（与斯宾塞对战）"],[function():void
         {
            FightManager.fightWithBoss("斯宾塞",2);
         }]);
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
         }
         else if(MapManager.currentMap.id == 445)
         {
            _map.conLevel["kaxiusiMC"].removeEventListener(MouseEvent.CLICK,kaxiusiClickHandler);
         }
         else if(MapManager.currentMap.id == 507)
         {
            _map.conLevel["bulaikeNPC"].removeEventListener(MouseEvent.CLICK,bulaikeNPCHandler);
         }
         else if(MapManager.currentMap.id == 106)
         {
            _map.conLevel["leiyiMC"].removeEventListener(MouseEvent.CLICK,leiyiMCHandler);
            if(fightGang)
            {
               fightGang.destroyFight();
               fightGang = null;
            }
         }
         else if(MapManager.currentMap.id == 46)
         {
            _map.conLevel["task755MC"].removeEventListener(MouseEvent.CLICK,makeFightHandler);
            OgreController.isShow = true;
            ToolBarController.showOrHideAllUser(true);
            _map.depthLevel["siBinSaiBoss"].removeEventListener(MouseEvent.CLICK,onFightClick);
         }
         _map = null;
      }
   }
}
