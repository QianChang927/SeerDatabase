package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_540;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.utils.DisplayUtil;
   
   public class Task540
   {
      
      private static var _timer:Timer;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task540()
      {
         super();
      }
      
      public static function initTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_540_1"),function():void
         {
            NpcDialog.show(NPC.IRIS,["O(╯□╰)o，纽斯竟然在这个时候播放广播，真是的！哦，对了！差点忘记说关于钥匙的事情了……"],["是关于力量之匙的事情吗？","我一会再来找你哟！"],[function():void
            {
               NpcDialog.show(NPC.IRIS,["我发现了一件很奇怪的事情！之前一直没有力量之匙的信号，但是近来它的信号越来越强……"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.IRIS,["就在不远处，侦测器已经探测到来自海兹尔星上的力量正在释放，准备好探险了吗？"],["全速前进！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_540_2"),function():void
                     {
                        MapManager.changeMap(439);
                     });
                  }]);
               });
            }]);
         });
      }
      
      public static function initTask_0(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_540.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_540.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  ToolBarController.showOrHideAllUser(false);
                  NpcDialog.show(NPC.SEER,["这里怎么会有机械建筑……难道是赫尔卡星人？哇！快看地上的脚印……"],["（快看地上的脚印）"]);
               }
               else
               {
                  DisplayUtil.removeForParent(_map.conLevel["arrow"]);
                  _map.conLevel["arrow"] = null;
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_map.conLevel["arrow"]);
            _map.conLevel["arrow"] = null;
         }
      }
      
      public static function completeTask_0(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_540.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_540.TASK_ID,function(param1:Array):void
            {
               var array:Array = param1;
               if(!array[0])
               {
                  TasksManager.complete(TaskController_540.TASK_ID,0,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        _map.conLevel["arrow"].visible = true;
                     }
                  });
               }
            });
         }
      }
      
      public static function initTask_1() : void
      {
         if(TasksManager.getTaskStatus(TaskController_540.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_540.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  ToolBarController.showOrHideAllUser(false);
                  NpcDialog.show(NPC.SEER,["这里是哪里……外形看起来还是一个蘑菇生物，但是内部构造竟然如此高科技！"],["（快看看周围的装置）"]);
               }
            });
         }
      }
      
      public static function onActiveComplete(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_540.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_540.TASK_ID,function(param1:Array):void
            {
               var array:Array = param1;
               if(Boolean(array[0]) && !array[1])
               {
                  NpcDialog.show(NPC.SEER,["什么……堡垒开始动了……"],["快看窗外！"],[function():void
                  {
                     _map.animatorLevel["pet"].gotoAndPlay(2);
                     MapManager.currentMap.spaceLevel.mouseEnabled = false;
                     MapManager.currentMap.spaceLevel.mouseChildren = false;
                     _timer = new Timer(50,40);
                     _timer.addEventListener(TimerEvent.TIMER,onTimer);
                     _timer.addEventListener(TimerEvent.TIMER_COMPLETE,onTimerComplete);
                     _timer.start();
                  }]);
               }
            });
         }
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         if(_timer.currentCount <= 20)
         {
            if(_timer.currentCount % 2 == 0)
            {
               _map.conLevel.y -= 3;
               _map.animatorLevel["bg"].y -= 3;
            }
            else
            {
               _map.conLevel.y += 3;
               _map.animatorLevel["bg"].y += 3;
            }
         }
         else if(_timer.currentCount <= 30)
         {
            _map.conLevel.y += 2;
            _map.animatorLevel["bg"].y += 2;
         }
         else
         {
            _map.conLevel.y -= 4;
            _map.animatorLevel["bg"].y -= 4;
         }
      }
      
      private static function onTimerComplete(param1:TimerEvent) : void
      {
         var e:TimerEvent = param1;
         _map.typeLevel["path"].y = _map.conLevel.y - 50;
         MapManager.currentMap.makeMapArray();
         MapManager.currentMap.spaceLevel.mouseEnabled = true;
         MapManager.currentMap.spaceLevel.mouseChildren = true;
         _timer.reset();
         _timer.removeEventListener(TimerEvent.TIMER,onTimer);
         _timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimerComplete);
         NpcDialog.show(NPC.SEER,["糟糕！！！那个精灵想要吃掉堡垒……怎么办！！！！！！"],["SOS！总部听到请回话……我这里遇到麻烦了！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_540_3"),function():void
            {
               NpcDialog.show(NPC.SEER,["迪恩……他……他是为了救我们吗……"],["什么！？"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_540_4"),function():void
                  {
                     MainManager.actorModel.visible = false;
                     if(MainManager.actorModel.pet)
                     {
                        MainManager.actorModel.pet.visible = false;
                     }
                     if(MainManager.actorModel.nono)
                     {
                        MainManager.actorModel.hideNono();
                     }
                     AnimateManager.playMcAnimate(_map.conLevel["npc"],0,"",function():void
                     {
                        MainManager.actorModel.visible = true;
                        if(MainManager.actorModel.pet)
                        {
                           MainManager.actorModel.pet.visible = true;
                        }
                        if(MainManager.actorModel.nono)
                        {
                           MainManager.actorModel.showNono(MainManager.actorModel.nono.info,MainManager.actorInfo.actionType);
                        }
                        NpcDialog.show(NPC.SEER,["迪恩……力量之匙……不行快返回赛尔号！"],["起航回赛尔号！"],[function():void
                        {
                           TasksManager.complete(TaskController_540.TASK_ID,1,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 MapManager.changeMap(9);
                              }
                           });
                        }]);
                     });
                  });
               }]);
            });
         }]);
      }
      
      public static function destory() : void
      {
         ToolBarController.showOrHideAllUser(true);
      }
   }
}
