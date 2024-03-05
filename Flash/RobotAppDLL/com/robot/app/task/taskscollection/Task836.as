package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_836;
   import com.robot.app.task.petstory.util.FightGang;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.GamePlatformEvent;
   import com.robot.core.manager.GamePlatformManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task836
   {
      
      private static var _map:BaseMapProcess;
      
      private static var crtStep:int;
      
      private static var fightGang:FightGang;
      
      private static var panel:AppModel;
       
      
      public function Task836()
      {
         super();
      }
      
      public static function prepareForFlyGame() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_836_4"),function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["最近，海盗飞船经常发动袭击，我们在前往推特星的路上一定要注意。"],["放心吧，我可是驾驶飞船的高手。"],[function():void
            {
               loadGame();
            }]);
         },false);
      }
      
      public static function initForMap690(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_836.TASK_ID,function(param1:Array):void
         {
            if(!(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2]))
            {
               DisplayUtil.removeForParent(getTaskMC);
            }
         });
      }
      
      public static function initFor698(param1:BaseMapProcess) : void
      {
         if(TasksManager.getTaskStatus(836) == TasksManager.ALR_ACCEPT)
         {
            NpcController.showNpc(113);
         }
      }
      
      public static function initForMap515(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_836.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
            {
               getTaskMC.buttonMode = true;
               getTaskMC.addEventListener(MouseEvent.CLICK,onMap515mcClicked);
            }
            else
            {
               DisplayUtil.removeForParent(getTaskMC);
            }
         });
      }
      
      private static function onMap515mcClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         getTaskMC.removeEventListener(MouseEvent.CLICK,onMap515mcClicked);
         getTaskMC.buttonMode = false;
         NpcDialog.show(NPC.SEER,["看来海盗正因为其他事情倾巢出动，地下之城防卫空虚啊！！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.DANDI,["嗯！运气不错哦，现在是解救杰西的好时机！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["根据收集的情报，伯利兹精灵被关在了地下之城，咱们直捣黄龙！"],["出发！"],[function():void
               {
                  getTaskMC.gotoAndStop(2);
               }]);
            });
         });
      }
      
      public static function initForMap681(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         getTaskMC.mouseChildren = false;
         TasksManager.getProStatusList(TaskController_836.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
            {
               crtStep = 1;
               getTaskMC.buttonMode = true;
               getTaskMC.addEventListener(MouseEvent.CLICK,onMap681mcClicked);
               ToolBarController.showOrHideAllUser(false);
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
            {
               crtStep = 2;
               getTaskMC.gotoAndStop(4);
               getTaskMC.buttonMode = true;
               getTaskMC.addEventListener(MouseEvent.CLICK,onMap681mcClicked);
               ToolBarController.showOrHideAllUser(false);
            }
            else
            {
               DisplayUtil.removeForParent(getTaskMC);
            }
         });
      }
      
      private static function onMap681mcClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(crtStep)
         {
            case 1:
               NpcDialog.show(NPC.PIRATE_2,["呀呀呀！该死的赛尔入侵了！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["哼哼，瞧瞧我们的厉害吧！"],["（用头部射击消灭海盗）"],[function():void
                  {
                     if(fightGang == null)
                     {
                        getTaskMC.gotoAndStop(2);
                        fightGang = new FightGang(120,100,5);
                        fightGang.createOgre(2520,new Point(570,300),10,10);
                        fightGang.createOgre(2520,new Point(680,365),10,10);
                        getTaskMC.mouseEnabled = false;
                        fightGang.beginFight().addResponse(function():void
                        {
                           fightGang.destroyFight();
                           fightGang = null;
                           TasksManager.complete(TaskController_836.TASK_ID,3,function(param1:Boolean):void
                           {
                              var b:Boolean = param1;
                              if(b)
                              {
                                 getTaskMC.mouseEnabled = true;
                                 AnimateManager.playMcAnimate(getTaskMC,3,"mc",function():void
                                 {
                                    getTaskMC.gotoAndStop(4);
                                    crtStep = 2;
                                 });
                              }
                           });
                        },function():void
                        {
                           NpcDialog.show(NPC.SEER,["可恶！我不能就这么认输，冲啊！"],["（用头部射击消灭海盗）"],[function():void
                           {
                              fightGang.beginFight();
                           }]);
                        });
                     }
                  }]);
               });
               break;
            case 2:
               MainManager.actorModel.moveAndAction(new Point(710,240),function():void
               {
                  AnimateManager.playMcAnimate(getTaskMC,5,"mc",function():void
                  {
                     NpcDialog.show(NPC.DANDI,["杰西，这是赛尔先锋队，就是他们一直在帮助推特星对抗海盗。 "],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.JIEXI,["谢谢你们，虽然我得救了，但另外两位部落首领仍被囚禁在了其它地方！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.JIEXI,["而木、火元素之星也被海盗邪灵抢走……"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["放心！只要我们齐心协力，一定能够救出所有精灵，夺回元素之星！"],null,null,false,function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_836_3"),function():void
                                 {
                                    getTaskMC.removeEventListener(MouseEvent.CLICK,onMap681mcClicked);
                                    DisplayUtil.removeForParent(getTaskMC);
                                    TasksManager.complete(TaskController_836.TASK_ID,4,function(param1:Boolean):void
                                    {
                                       if(param1)
                                       {
                                       }
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
         }
      }
      
      private static function get getTaskMC() : MovieClip
      {
         if(_map)
         {
            return _map.conLevel["task836mc"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(MapManager.currentMap.id == 4)
         {
            if(getTaskMC)
            {
               getTaskMC.removeEventListener(MouseEvent.CLICK,prepareForFlyGame);
            }
            if(panel)
            {
               panel.destroy();
               panel = null;
            }
         }
         else if(MapManager.currentMap.id == 515)
         {
            if(getTaskMC)
            {
               getTaskMC.removeEventListener(MouseEvent.CLICK,onMap515mcClicked);
            }
         }
         else if(MapManager.currentMap.id == 681)
         {
            if(fightGang)
            {
               fightGang.destroyFight();
               fightGang = null;
            }
            if(getTaskMC)
            {
               getTaskMC.removeEventListener(MouseEvent.CLICK,onMap681mcClicked);
            }
            ToolBarController.showOrHideAllUser(true);
         }
         _map = null;
      }
      
      private static function loadGame() : void
      {
         SoundManager.stopSound();
         addGameEvent();
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
         panel = new AppModel(ClientConfig.getTaskModule("Task836Game"),"正在打开游戏");
         panel.setup();
         panel.show();
      }
      
      private static function addGameEvent() : void
      {
         GamePlatformManager.addEventListener(GamePlatformEvent.GAME_LOST,onFailGame);
         GamePlatformManager.addEventListener(GamePlatformEvent.GAME_WIN,onSucGame);
      }
      
      private static function removeGameEvent() : void
      {
         GamePlatformManager.removeEventListener(GamePlatformEvent.GAME_LOST,onFailGame);
         GamePlatformManager.removeEventListener(GamePlatformEvent.GAME_WIN,onSucGame);
      }
      
      private static function onFailGame(param1:GamePlatformEvent) : void
      {
         var e:GamePlatformEvent = param1;
         SoundManager.playSound();
         removeGameEvent();
         panel.destroy();
         if(e.gameIndex == 836)
         {
            NpcDialog.show(NPC.SEER,["加油！加油！一定能够成功！"],["继续前进！","下次再玩！"],[function():void
            {
               loadGame();
            }]);
         }
         else
         {
            DebugTrace.show("不是此游戏");
         }
      }
      
      private static function onSucGame(param1:GamePlatformEvent = null) : void
      {
         var e:GamePlatformEvent = param1;
         removeGameEvent();
         SoundManager.playSound();
         panel.destroy();
         if(e.gameIndex == 836)
         {
            TasksManager.complete(TaskController_836.TASK_ID,1,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_836_1"),function():void
                  {
                     MapManager.changeMap(690);
                  });
               }
            });
         }
         else
         {
            DebugTrace.show("不是航行游戏");
         }
      }
   }
}
