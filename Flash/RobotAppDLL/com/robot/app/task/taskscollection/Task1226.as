package com.robot.app.task.taskscollection
{
   import com.robot.app.control.GameStartController;
   import com.robot.app.games.GameStorageManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.event.GameEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1226
   {
      
      public static const TASK_ID:uint = 1226;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1226()
      {
         super();
      }
      
      public static function initTaskFor4(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(1);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(1);
               }
            });
         }
      }
      
      public static function initTaskFor778(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskMC.buttonMode = true;
                  KTool.hideMapAllPlayerAndMonster();
                  taskMC.addEventListener(MouseEvent.CLICK,initStep1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep3();
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      private static function initStep1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
         taskMC.buttonMode = false;
         taskMC.gotoAndStop(2);
         NpcDialog.show(NPC.SAIXIAOXI,["哗！想不到这魔神星还有个这么恐怖的地方！"],["小心！有机关！"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["区区机关，难不倒我！看我的！"],["加油啊！小息！"],[function():void
            {
               GameStorageManager.freshLastGame(41019);
               GameStartController.show("adventureStart","adventureGame");
               EventManager.addEventListener(GameEvent.CANCEL,initStep1GoOn);
               EventManager.addEventListener(GameEvent.OVER,initStep1GoOn);
            }]);
         }]);
      }
      
      public static function initStep1GoOn(param1:GameEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 26
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep2() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 16
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function initStep3() : void
      {
         taskMC.gotoAndStop(14);
         NpcDialog.show(NPC.SAIXIAOXI,["为什么？艾里克说它是赫尔卡星的守护神？"],["它没有说谎！"],[function():void
         {
            NpcDialog.show(NPC.LUOLAFEIDE,["在很久以前，艾里克的确是赫尔卡星的守护者，说起来，它算是第一任守护者！"],["那它怎么成了魔神呢？"],[function():void
            {
               NpcDialog.show(NPC.LUOLAFEIDE,["它的力量太过强大又比较单纯，很容易被邪恶的势力利用，成为对抗正义的武器！"],["这倒是，现在海盗就是这么做的！"],[function():void
               {
                  NpcDialog.show(NPC.LUOLAFEIDE,["就这样，它被封印了起来！说起来，它也很可怜！现在它的记忆还没完全恢复，所以提起赫尔卡星是又爱又恨的！"],["如果它恢复了记忆会怎样？"],[function():void
                  {
                     NpcDialog.show(NPC.LUOLAFEIDE,["它既有可能回想起自己赫尔卡星守护者的身份，改邪归正；也有可能怨恨被封印起来而变成报复的魔神！"],["啊，那怎么办？"],[function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["想不到赫尔卡星还有这么一段往事！但是不管它是正是邪，我都会保护赫尔卡星和赛尔号，我要继续修炼，提升实力！"],["雷伊真可靠！我们先回去报告吧！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
                           {
                              TasksManager.complete(TASK_ID,3,function(param1:Boolean = true):void
                              {
                                 destroy();
                              });
                           });
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 778 && Boolean(_map.conLevel["task1226MC"]))
         {
            return _map.conLevel["task1226MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 778)
         {
            KTool.showMapAllPlayerAndMonster();
            if(taskMC)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
