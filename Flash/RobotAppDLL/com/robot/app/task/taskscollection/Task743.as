package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_743;
   import com.robot.app.task.petstory.util.FightGang;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   
   public class Task743
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
      
      private static var fightGang:FightGang;
      
      private static var _step5Completed:Boolean;
       
      
      public function Task743()
      {
         super();
      }
      
      public static function acceptTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_743_1"),function():void
         {
            MapManager.changeLocalMap(10379);
         });
      }
      
      public static function initTaskForMap445(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_743.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_743.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskStep = 0;
                  gotoStep1();
               }
            });
         }
         _map.conLevel["kaxiusiMC"].buttonMode = true;
         _map.conLevel["kaxiusiMC"].addEventListener(MouseEvent.CLICK,kaxiusiClickHandler);
      }
      
      public static function npcClickHandler() : void
      {
      }
      
      private static function gotoStep1() : void
      {
         _map.conLevel["kaziMC"].visible = false;
         _map.conLevel["kazi2MC"].visible = false;
         _map.conLevel["kaxiusiMC"].gotoAndStop(2);
      }
      
      private static function kaxiusiClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(670,190),function():void
         {
            if(_map.conLevel["kaxiusiMC"].currentFrame == 2)
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["守护炫彩山是我的使命！"],["#101魔窟神器。","嗯，你好好站岗吧，我顶你！"],[kaxiusiTaskFun]);
            }
            else
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["守护炫彩山是我的使命！"],["嗯，你好好站岗吧，我顶你！"]);
            }
         });
      }
      
      private static function kaxiusiTaskFun() : void
      {
         NpcDialog.show(NPC.KAXIUSI_WHITE,[MainManager.actorInfo.formatNick + "，海盗好像在找什么东西，因为有精灵看见他们左挖右凿的！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.KAXIUSI_WHITE,["而且，海盗似乎不愿意惊动我们，每次干活都偷偷摸摸非常隐秘！"],["嗯，看来爱丽丝分析的很对啊。"],[function():void
            {
               NpcDialog.show(NPC.SEER,["海盗和邪灵组织解密出了星际藏宝图的关键信息，发现怀特星藏有宝物，所以暗地里展开行动。"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_743_2"),function():void
                  {
                     TasksManager.complete(TaskController_743.TASK_ID,0,function():void
                     {
                        DebugTrace.show("第一步完成");
                        taskStep = 1;
                        MapManager.changeMap(494);
                     });
                  });
               });
            }]);
         });
      }
      
      public static function initTaskForMap494(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["haidaoMC"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_743.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_743.TASK_ID,function(param1:Array):void
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
         _map.conLevel["haidaoMC"].visible = true;
         _map.conLevel["haidaoMC"].gotoAndStop(2);
         _map.conLevel["haidaoMC"].buttonMode = true;
         _map.conLevel["haidaoMC"].addEventListener(MouseEvent.CLICK,haidaoClickHandler);
      }
      
      private static function haidaoClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(315,120),function():void
         {
            _map.conLevel["haidaoMC"].gotoAndStop(3);
            NpcDialog.show(NPC.KAXIUSI_WHITE,["哼！你们这两个家伙别想逃走，赶紧把属于怀特星的东西给我。"],null,null,false,function():void
            {
               NpcDialog.show(NPC.PIRATE_HERO,["我们可不是那么好打发的，有胆子你来试试呀！"],["（点击海盗开始对战）"],[function():void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                  FightManager.fightWithBoss("海盗",4);
               }]);
            });
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         _map.conLevel["haidaoMC"].buttonMode = false;
         _map.conLevel["haidaoMC"].removeEventListener(MouseEvent.CLICK,haidaoClickHandler);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         AnimateManager.playMcAnimate(_map.conLevel["haidaoMC"],0,"",function():void
         {
            var app:AppModel = null;
            app = ModuleManager.getModule(ClientConfig.getAppModule("TaskIntro_743"));
            app.setup();
            app.show();
            app.sharedEvents.addEventListener(Event.CLOSE,function(param1:Event):void
            {
               var evt:Event = param1;
               app.sharedEvents.removeEventListener(Event.CLOSE,arguments.callee);
               app.destroy();
               app = null;
               TasksManager.complete(TaskController_743.TASK_ID,1,function():void
               {
                  DebugTrace.show("第二步完成");
                  taskStep = 2;
                  MapManager.changeMap(484);
               });
            });
         });
      }
      
      public static function initTaskForMap484(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_743.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               taskStep = 2;
               _map.conLevel["luluMC"].gotoAndStop(2);
            }
         });
         _map.conLevel["luluMC"].visible = true;
         _map.conLevel["luluMC"].buttonMode = true;
         _map.conLevel["luluMC"].addEventListener(MouseEvent.CLICK,luluClickHandler);
      }
      
      private static function luluClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(615,410),function():void
         {
            if(taskStep == 2)
            {
               NpcDialog.show(NPC.LULU,["我要泡泡，我要抱抱，不要崇拜我，妹妹我只是个传说！"],["#101魔窟神器。","璐璐长的真可爱。"],[function():void
               {
                  _map.conLevel["luluMC"].gotoAndStop(1);
                  NpcDialog.show(NPC.KAXIUSI_WHITE,["璐璐！ 现在情况怎么样啊！"],["哎呀呀！太刺激了。"],[function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("task_743_3"),function():void
                     {
                        NpcDialog.show(NPC.KAXIUSI_WHITE,["看来邪灵组织已经找到他们想要的宝物！" + MainManager.actorInfo.formatNick + "，咱们得抓紧时间呀！"],["嗯，let’s go！"],[function():void
                        {
                           TasksManager.complete(TaskController_743.TASK_ID,2,function():void
                           {
                              DebugTrace.show("第三步完成");
                              taskStep = 3;
                              MapManager.changeMap(478);
                           });
                        }]);
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
      
      public static function initTaskForMap478(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_743.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_743.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  gotoStep4();
               }
            });
         }
      }
      
      private static function gotoStep4() : void
      {
         if(_map.conLevel["seer"])
         {
            _map.conLevel["seer"].visible = false;
         }
         if(_map.conLevel["fire"])
         {
            _map.conLevel["fire"].visible = false;
         }
         if(_map.conLevel["water"])
         {
            _map.conLevel["water"].visible = false;
         }
         if(_map.conLevel["grass"])
         {
            _map.conLevel["grass"].visible = false;
         }
         if(_map.conLevel["fire"])
         {
            _map.conLevel["fire"].visible = false;
         }
         if(_map.conLevel["arrow"])
         {
            _map.conLevel["arrow"].visible = false;
         }
         if(_map.conLevel["boss_637"])
         {
            _map.conLevel["boss_637"].visible = false;
         }
         if(_map.depthLevel["leiyi"])
         {
            _map.depthLevel["leiyi"].visible = false;
         }
         if(_map.depthLevel["gaiya"])
         {
            _map.depthLevel["gaiya"].visible = false;
         }
         if(_map.depthLevel["kaxiu"])
         {
            _map.depthLevel["kaxiu"].visible = false;
         }
         if(_map.topLevel["arrow"])
         {
            _map.topLevel["arrow"].visible = false;
         }
         if(_map.topLevel["arrow_640"])
         {
            _map.topLevel["arrow_640"].visible = false;
         }
         Task637.hidePet();
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.KAXIUSI_WHITE,["邪灵战士已经张牙舞爪的候着我们了！看来他们是在为魔窟的宝物挖掘争取时间啊！"],["这里交给我了！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["我去吸引邪灵战士的注意力，卡修斯你直闯魔窟！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["嗯！" + MainManager.actorInfo.formatNick + "，你要小心！"],["我会搞定这些家伙的。（用头部射击消灭邪灵战士）"],[function():void
               {
                  initFight();
               }]);
            });
         }]);
      }
      
      private static function initFight() : void
      {
         if(fightGang == null)
         {
            fightGang = new FightGang(120,100,5);
            fightGang.createOgre(2527,new Point(560,312),10,5);
            fightGang.createOgre(2527,new Point(638,278),10,5);
            fightGang.createOgre(2527,new Point(650,333),10,5);
            fightGang.beginFight().addResponse(function():void
            {
               fightGang.destroyFight();
               fightGang = null;
               NpcDialog.show(NPC.SEER,["知道我的厉害了吧！你们全都是浮云！"],["赶紧到魔窟与卡修斯汇合。"],[function():void
               {
                  TasksManager.complete(TaskController_743.TASK_ID,3,function():void
                  {
                     DebugTrace.show("第四步完成");
                     taskStep = 4;
                     MapManager.changeMap(479);
                  });
               }]);
            },function():void
            {
               NpcDialog.show(NPC.SEER,["可恶！我一定要冲破你们的阻碍！"],["（用头部射击消灭敌人）"],[function():void
               {
                  fightGang.beginFight();
               }]);
            });
         }
      }
      
      public static function initTaskForMap479(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.topLevel["machine1"].visible = false;
         _map.animatorLevel["machine2"].visible = false;
         _map.conLevel["kaluosiMC"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_743.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_743.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  taskStep = 5;
                  gotoStep5();
               }
            });
         }
      }
      
      private static function gotoStep5() : void
      {
         if(_step5Completed)
         {
            return;
         }
         if(_map.depthLevel["npc"])
         {
            _map.depthLevel["npc"].visible = false;
         }
         _map.topLevel["machine1"].visible = true;
         _map.animatorLevel["machine2"].visible = true;
         _map.conLevel["kaluosiMC"].visible = true;
         NpcDialog.show(NPC.KALUOSI,["哈哈哈！你们来晚了！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SEER,["卡修斯，咱们绝对不能放过他！"],["（点击卡洛斯对战）"],[function():void
            {
               _map.conLevel["kaluosiMC"].gotoAndStop(2);
               _map.conLevel["kaluosiMC"].buttonMode = true;
               _map.conLevel["kaluosiMC"].addEventListener(MouseEvent.CLICK,kaluosiClickHandler);
            }]);
         });
      }
      
      private static function kaluosiClickHandler(param1:MouseEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete2);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete2);
         FightManager.fightWithBoss("卡洛斯",0);
         _step5Completed = true;
      }
      
      private static function onFightComplete2(param1:PetFightEvent = null) : void
      {
         var evt:PetFightEvent = param1;
         _map.conLevel["kaluosiMC"].buttonMode = false;
         _map.conLevel["kaluosiMC"].removeEventListener(MouseEvent.CLICK,kaluosiClickHandler);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete2);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_743_4"),function():void
         {
            _map.conLevel["kaluosiMC"].visible = false;
            _map.topLevel["machine1"].visible = false;
            _map.animatorLevel["machine2"].visible = false;
            NpcDialog.show(NPC.SEER,["卡修斯！这次事情的危险程度可不同以往啊！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["怀特星的魔窟竟然埋藏着“缚妖炉”，难道以前的魔王狄修就是从那里面释放出来的？"],["缚妖炉里千万别还有些什么其它东东啊！要不然咱们真吃不消啦！"],[function():void
               {
                  NpcDialog.show(NPC.KAXIUSI_WHITE,["我会把情况告诉雷伊、盖亚和布莱克。" + MainManager.actorInfo.formatNick + "，你抓紧时间回赛尔号让大家未雨绸缪，做好准备！"],["嗯！这个时候，信心比黄金更重要！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_743_5"),function():void
                     {
                        TasksManager.complete(TaskController_743.TASK_ID,4,function():void
                        {
                           DebugTrace.show("任务完成");
                           taskStep = 5;
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
         if(MapManager.currentMap.id == 445)
         {
            _map.conLevel["kaxiusiMC"].removeEventListener(MouseEvent.CLICK,kaxiusiClickHandler);
         }
         else if(MapManager.currentMap.id == 494)
         {
            _map.conLevel["haidaoMC"].removeEventListener(MouseEvent.CLICK,haidaoClickHandler);
         }
         else if(MapManager.currentMap.id == 484)
         {
            _map.conLevel["luluMC"].removeEventListener(MouseEvent.CLICK,luluClickHandler);
         }
         else if(MapManager.currentMap.id == 478)
         {
            ToolBarController.showOrHideAllUser(true);
            if(fightGang)
            {
               fightGang.destroyFight();
               fightGang = null;
            }
         }
         else if(MapManager.currentMap.id == 479)
         {
            _map.conLevel["kaluosiMC"].removeEventListener(MouseEvent.CLICK,kaluosiClickHandler);
         }
         _map = null;
      }
   }
}
