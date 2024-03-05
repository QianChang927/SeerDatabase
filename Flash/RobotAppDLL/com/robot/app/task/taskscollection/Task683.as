package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_678;
   import com.robot.app.task.control.TaskController_683;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
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
   import org.taomee.utils.DisplayUtil;
   
   public class Task683
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      public static var savedArray:Array = [false,false,false];
      
      private static var fightXieLing1:Boolean;
      
      private static var fightXieLing2:Boolean;
      
      private static var fightXieLingName:String = "";
       
      
      public function Task683()
      {
         super();
      }
      
      public static function initTaskForMap455(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_678.TASK_ID));
         if(nRet == TasksManager.COMPLETE)
         {
            nRet = uint(TasksManager.getTaskStatus(TaskController_683.TASK_ID));
            if(nRet == TasksManager.UN_ACCEPT)
            {
               _map.conLevel["kaciMC"].gotoAndStop(2);
               _map.conLevel["kaciMC"].buttonMode = true;
               _map.conLevel["kaciMC"].addEventListener(MouseEvent.CLICK,kaciClickHandler);
            }
            else if(nRet == TasksManager.ALR_ACCEPT)
            {
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(TaskController_683.TASK_ID,function(param1:Array):void
               {
                  if(!param1[0])
                  {
                     gotoStep1();
                  }
                  else
                  {
                     _map.conLevel["kaciMC"].visible = false;
                     _map.conLevel["tuote1MC"].visible = false;
                     _map.conLevel["tuote2MC"].visible = false;
                     _map.conLevel["tuoruisiMC"].visible = false;
                  }
               });
            }
            else if(nRet == TasksManager.COMPLETE)
            {
               _map.conLevel["kaciMC"].visible = false;
               _map.conLevel["tuote1MC"].visible = false;
               _map.conLevel["tuote2MC"].visible = false;
               _map.conLevel["tuoruisiMC"].visible = false;
            }
         }
      }
      
      private static function kaciClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         NpcDialog.show(NPC.KAXIUSI_WHITE,[MainManager.actorInfo.formatNick + "，这里已经被邪灵组织破坏得一塌糊涂。"],["对啊！那群家伙简直就是无恶不作！","我现在不想讨论这个，先休息一会。"],[function():void
         {
            TasksManager.accept(TaskController_683.TASK_ID,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  DebugTrace.show("任务接取成功");
                  _map.conLevel["kaciMC"].gotoAndStop(1);
                  _map.conLevel["kaciMC"].buttonMode = false;
                  _map.conLevel["kaciMC"].removeEventListener(MouseEvent.CLICK,kaciClickHandler);
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_683_1"),function():void
                  {
                     gotoStep1();
                  });
               }
            });
         }]);
      }
      
      private static function checkDistance(param1:MovieClip) : Boolean
      {
         var _loc2_:Point = param1.data["point"];
         if(Point.distance(MainManager.actorModel.pos,new Point(param1.x,param1.y)) < 100)
         {
            return true;
         }
         MainManager.actorModel.walkAction(_loc2_);
         return false;
      }
      
      public static function gotoStep1() : void
      {
         taskStep = 0;
         OgreController.isShow = false;
         if(savedArray[0] == false)
         {
            _map.conLevel["tuote1MC"].data = {"point":new Point(382,200)};
            _map.conLevel["tuote1MC"].buttonMode = true;
            _map.conLevel["tuote1MC"].addEventListener(MouseEvent.CLICK,tuoteClickHandler);
         }
         else
         {
            _map.conLevel["tuote1MC"].gotoAndStop(4);
            _map.conLevel["tuote1MC"].visible = false;
         }
         if(savedArray[1] == false)
         {
            _map.conLevel["tuote2MC"].data = {"point":new Point(720,290)};
            _map.conLevel["tuote2MC"].buttonMode = true;
            _map.conLevel["tuote2MC"].addEventListener(MouseEvent.CLICK,tuoteClickHandler);
         }
         else
         {
            _map.conLevel["tuote2MC"].gotoAndStop(4);
            _map.conLevel["tuote2MC"].visible = false;
         }
         if(savedArray[2] == false)
         {
            _map.conLevel["tuoruisiMC"].data = {"point":new Point(430,450)};
            _map.conLevel["tuoruisiMC"].buttonMode = true;
            _map.conLevel["tuoruisiMC"].addEventListener(MouseEvent.CLICK,tuoruisiClickHandler);
         }
         else
         {
            _map.conLevel["tuoruisiMC"].gotoAndStop(4);
            _map.conLevel["tuoruisiMC"].visible = false;
         }
      }
      
      private static function tuoruisiClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         var mc:MovieClip = evt.currentTarget as MovieClip;
         if(checkDistance(mc) == false)
         {
            return;
         }
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_683_2"),function():void
         {
            OgreController.isShow = true;
            NpcDialog.show(NPC.SEER,["这只精灵被暗黑能量侵蚀得比较严重，看来得先制服它才能进行治疗。"],["开始精灵对战！","我先歇一会"],[function():void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
               FightManager.fightWithBoss("托瑞斯",1);
            }]);
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var mc:MovieClip = null;
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         info = evt.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            savedArray[2] = true;
            mc = _map.conLevel["tuoruisiMC"];
            mc.buttonMode = false;
            mc.removeEventListener(MouseEvent.CLICK,tuoruisiClickHandler);
            NpcDialog.show(NPC.SEER,["oh my lady gaga！总算把这个家伙给搞定了，开始对它展开治疗吧！"],["开始治疗精灵"],[function():void
            {
               AnimateManager.playMcAnimate(mc,2,"mc2",function():void
               {
                  AnimateManager.playMcAnimate(mc,3,"mc3",function():void
                  {
                     NpcDialog.show(NPC.TUORUISI,["哇哇！铁块！我刚刚怎么了，我感觉全身激情四溢，斗志昂扬啊！"],["流汗！你刚刚确实很激情四溢，斗志昂扬……"],[function():void
                     {
                        _map.conLevel["tuoruisiMC"].gotoAndStop(4);
                        checkStep1();
                     }]);
                  });
               });
            }]);
         }
      }
      
      private static function tuoteClickHandler(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var evt:MouseEvent = param1;
         mc = evt.currentTarget as MovieClip;
         if(checkDistance(mc) == false)
         {
            return;
         }
         mc.buttonMode = false;
         mc.removeEventListener(MouseEvent.CLICK,tuoteClickHandler);
         AnimateManager.playMcAnimate(mc,2,"mc2",function():void
         {
            AnimateManager.playMcAnimate(mc,3,"mc3",function():void
            {
               if(mc.name == "tuote1MC")
               {
                  NpcDialog.show(NPC.TUOTE,["感觉舒服多了，谢谢你，大铁片！"],["流汗！大铁片……"],[function():void
                  {
                     savedArray[0] = true;
                     checkStep1();
                  }]);
               }
               else if(mc.name == "tuote2MC")
               {
                  NpcDialog.show(NPC.TUOTE,["哈哈！我现在很精神，谢谢你，铁皮娃娃。"],["流汗！铁皮娃娃……"],[function():void
                  {
                     savedArray[1] = true;
                     checkStep1();
                  }]);
               }
            });
         });
      }
      
      private static function checkStep1() : void
      {
         if(savedArray[0] == true && savedArray[1] == true && savedArray[2] == true)
         {
            TasksManager.complete(TaskController_683.TASK_ID,0,function():void
            {
               DebugTrace.show("第一步完成");
               taskStep = 1;
               NpcDialog.show(NPC.SEER,["黯夜广场的救治工作完成了，去黯夜之城看看吧，顺便找奥德了解现在的情况。"],["去黯夜之城"],[function():void
               {
                  _map.conLevel["kaciMC"].visible = false;
                  MapManager.changeMap(451);
               }]);
            });
         }
      }
      
      public static function initTaskForMap451(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_683.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_683.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  _map.conLevel["task673MC"].visible = true;
                  _map.conLevel["task673MC"].gotoAndStop(1);
                  _map.conLevel["task673MC"].buttonMode = true;
                  _map.conLevel["task673MC"].addEventListener(MouseEvent.CLICK,task683ClickHandler);
               }
            });
         }
      }
      
      private static function task683ClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["task673MC"].buttonMode = false;
         _map.conLevel["task673MC"].removeEventListener(MouseEvent.CLICK,task683ClickHandler);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_683_3"),function():void
         {
            NpcDialog.show(NPC.AODE_ZHANGLAO,[MainManager.actorInfo.formatNick + "，城里的居民伤不起啊，要不是你们及时救治，后果不堪设想！真的非常感谢！"],["呵呵，别客气，我们是朋友，就应该互相帮助。"],[function():void
            {
               NpcDialog.show(NPC.AODE_ZHANGLAO,["刚刚有个小家伙说，它看见布莱克带领邪灵战士前往格雷深湖！那些坏蛋肯定又要搞鬼把戏了！"],["嗯，不管怎样，我现在得赶过去看看。"],[function():void
               {
                  NpcDialog.show(NPC.AODE_ZHANGLAO,[MainManager.actorInfo.formatNick + "，你的队友都带着吉嘟们回飞船了，你一个人去太危险！"],["哈哈，这个你不用担心，我有一个最可靠的伙伴——卡修斯。"],[function():void
                  {
                     NpcDialog.show(NPC.AODE_ZHANGLAO,["嗯！格雷深湖就在格雷大峡谷的东面，希望你们一切顺利。"],["嗯，立刻出发！"],[function():void
                     {
                        TasksManager.complete(TaskController_683.TASK_ID,1,function():void
                        {
                           DebugTrace.show("第二步完成");
                           taskStep = 2;
                           _map.conLevel["task673MC"].gotoAndStop(3);
                        });
                     }]);
                  }]);
               }]);
            }]);
         });
      }
      
      public static function initTaskForMap454(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_683.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_683.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  _map.conLevel["pointMC"].visible = true;
               }
            });
         }
      }
      
      public static function initTaskForMap434(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_683.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_683.TASK_ID,function(param1:Array):void
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
               else
               {
                  setUnPass();
               }
            });
         }
         else if(nRet == TasksManager.COMPLETE)
         {
            setUnPass();
            _map.conLevel["seerMC"].visible = true;
            _map.conLevel["seerMC"].buttonMode = true;
            _map.conLevel["seerMC"].addEventListener(MouseEvent.CLICK,seerClickHandler);
         }
         else
         {
            setUnPass();
         }
      }
      
      private static function seerClickHandler(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.KAXIUSI_WHITE,["我们没有退路，要解救精灵，要夺回星际碎片，只有前往邪灵圣殿！"],["嗯，我们一起直捣黄龙！"]);
      }
      
      private static function setUnPass() : void
      {
         _map.conLevel["seerMC"].gotoAndStop(2);
         _map.conLevel["seerMC"].visible = false;
         _map.conLevel["otherMC"].visible = false;
         _map.conLevel["xieling1MC"].visible = false;
         _map.conLevel["xieling2MC"].visible = false;
         _map.conLevel["xieling3MC"].visible = false;
         DisplayUtil.removeForParent(_map.typeLevel["mc1"]);
         DisplayUtil.removeForParent(_map.typeLevel["mc2"]);
         MapManager.currentMap.makeMapArray();
      }
      
      private static function gotoStep3() : void
      {
         if(fightXieLingName == "")
         {
            MainManager.selfVisible = false;
            AnimateManager.playMcAnimate(_map.conLevel["seerMC"],1,"mc1",function():void
            {
               MainManager.selfVisible = true;
               initXieLing("xieling1MC");
            });
         }
         else
         {
            _map.conLevel["seerMC"].gotoAndStop(2);
            initXieLing("xieling1MC");
         }
      }
      
      private static function initXieLing(param1:String) : void
      {
         _map.conLevel[param1].buttonMode = true;
         _map.conLevel[param1].addEventListener(MouseEvent.CLICK,xielingClickHandler);
      }
      
      private static function xielingClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         var mc:MovieClip = evt.currentTarget as MovieClip;
         fightXieLingName = mc.name;
         if(mc.name == "xieling1MC")
         {
            NpcDialog.show(NPC.XIELING_ZHANSHI,["破铁皮！立刻离开这里，要不然你会后悔的！"],["哼！无恶不作的坏蛋，后悔的将是你们！","不好意思，我是来吹吹风的，不打扰你们了！"],[function():void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightXieLingComplete);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightXieLingComplete);
               FightManager.fightWithBoss("邪灵战士",0);
            }]);
         }
         else if(mc.name == "xieling2MC")
         {
            NpcDialog.show(NPC.XIELING_ZHANSHI,["哎呀！你个臭铁块！胆子挺大嘛！竟然跑到这里来了 "],["我就是来收拾你们这群混蛋的！","不好意思，我是来风干身上的臭味的，我马上就走"],[function():void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightXieLingComplete);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightXieLingComplete);
               FightManager.fightWithBoss("邪灵战士",0);
            }]);
         }
      }
      
      private static function onFightXieLingComplete(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightXieLingComplete);
         info = evt.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            _map.conLevel[fightXieLingName].visible = false;
            if(fightXieLingName == "xieling1MC")
            {
               fightXieLing1 = true;
               TasksManager.complete(TaskController_683.TASK_ID,2,function():void
               {
                  DebugTrace.show("第三步完成");
                  taskStep = 3;
                  gotoStep4();
               });
            }
            else if(fightXieLingName == "xieling2MC")
            {
               fightXieLing2 = true;
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_683_4"),function():void
               {
                  _map.conLevel["otherMC"].visible = false;
                  _map.conLevel["xieling3MC"].visible = false;
                  NpcDialog.show(NPC.SEER,["卡修斯，现在时间紧迫啊！那些精灵的处境很危险！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.KAXIUSI_WHITE,["我们没有退路，要解救精灵，要夺回星际碎片，只有前往邪灵圣殿！"],["嗯，我们一起直捣黄龙！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_683_5"),function():void
                        {
                           TasksManager.complete(TaskController_683.TASK_ID,3,function():void
                           {
                              DebugTrace.show("任务完成");
                              taskStep = 4;
                              _map.conLevel["seerMC"].gotoAndStop(2);
                              _map.conLevel["seerMC"].visible = true;
                              DisplayUtil.removeForParent(_map.typeLevel["mc2"]);
                              MapManager.currentMap.makeMapArray();
                              ToolBarController.showOrHideAllUser(true);
                           });
                        });
                     }]);
                  });
               });
            }
            fightXieLingName = "";
         }
         else
         {
            _map.conLevel["seerMC"].gotoAndStop(2);
         }
      }
      
      private static function gotoStep4() : void
      {
         _map.conLevel["seerMC"].gotoAndStop(2);
         _map.conLevel["xieling1MC"].visible = false;
         DisplayUtil.removeForParent(_map.typeLevel["mc1"]);
         MapManager.currentMap.makeMapArray();
         initXieLing("xieling2MC");
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 455)
         {
            ToolBarController.showOrHideAllUser(true);
            _map.conLevel["kaciMC"].removeEventListener(MouseEvent.CLICK,kaciClickHandler);
            _map.conLevel["tuoruisiMC"].removeEventListener(MouseEvent.CLICK,tuoruisiClickHandler);
            _map.conLevel["tuote1MC"].removeEventListener(MouseEvent.CLICK,tuoteClickHandler);
            _map.conLevel["tuote2MC"].removeEventListener(MouseEvent.CLICK,tuoteClickHandler);
         }
         else if(MapManager.currentMap.id == 451)
         {
            _map.conLevel["task673MC"].removeEventListener(MouseEvent.CLICK,task683ClickHandler);
         }
         else if(MapManager.currentMap.id != 454)
         {
            if(MapManager.currentMap.id == 434)
            {
               OgreController.isShow = true;
               ToolBarController.showOrHideAllUser(true);
               _map.conLevel["xieling1MC"].removeEventListener(MouseEvent.CLICK,xielingClickHandler);
               _map.conLevel["xieling2MC"].removeEventListener(MouseEvent.CLICK,xielingClickHandler);
               _map.conLevel["seerMC"].removeEventListener(MouseEvent.CLICK,seerClickHandler);
            }
         }
         _map = null;
      }
   }
}
