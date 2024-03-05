package com.robot.app.task.control
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.FightStartInfo;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.DataEvent;
   import flash.events.MouseEvent;
   
   public class TaskController_370
   {
      
      public static const BUFFER_ID:int = 1013;
      
      public static const SPT_TASK_ID:int = 370;
      
      public static const PET_ID:int = 2151;
      
      public static const MAP_ID:int = 726;
      
      private static var _map:BaseMapProcess;
      
      private static var _animationContainer:DisplayObjectContainer;
      
      private static var _index:int = 1;
      
      private static var _isTest:int = 0;
       
      
      public function TaskController_370()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         _animationContainer = _map.conLevel["spt" + String(SPT_TASK_ID)] as DisplayObjectContainer;
         hideAnimationContainerAllChildren();
         staticScene();
      }
      
      public static function test() : void
      {
         if(_isTest == 0)
         {
            ++_isTest;
            BufferRecordManager.setMyState(BUFFER_ID,false,function():void
            {
               staticScene();
            });
         }
         else
         {
            staticScene();
         }
      }
      
      public static function hideAnimationContainerAllChildren() : void
      {
         var _loc1_:int = 0;
         _loc1_ = 0;
         while(_loc1_ < _animationContainer.numChildren)
         {
            _animationContainer.getChildAt(_loc1_).visible = false;
            MovieClip(_animationContainer.getChildAt(_loc1_)).gotoAndStop(1);
            _loc1_++;
         }
      }
      
      public static function start() : void
      {
      }
      
      public static function staticScene() : void
      {
         hideAnimationContainerAllChildren();
         var _loc1_:Boolean = Boolean(BufferRecordManager.getMyState(BUFFER_ID));
         if(_loc1_)
         {
            MainManager.selfVisible = true;
            MainManager.actorModel.x = 275;
            MainManager.actorModel.y = 460;
            ToolBarController.showOrHideAllUser(true);
            MovieClip(_animationContainer["animation4"]).visible = true;
            MovieClip(_animationContainer["animation4"]).gotoAndPlay(_index);
            MovieClip(_animationContainer["animation4"]).buttonMode = true;
            MovieClip(_animationContainer["animation4"]).addEventListener(MouseEvent.CLICK,onMouseEventHandler);
         }
         else
         {
            MainManager.selfVisible = false;
            ToolBarController.showOrHideAllUser(false);
            MovieClip(_animationContainer["animation1"]).visible = true;
            MovieClip(_animationContainer["animation1"]).gotoAndPlay(_index);
            MovieClip(_animationContainer["animation1"]).buttonMode = true;
            MovieClip(_animationContainer["animation1"]).addEventListener(MouseEvent.CLICK,onMouseEventHandler);
         }
      }
      
      public static function rollBackAnimationScene() : void
      {
         var mod1:TaskMod;
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         mod1 = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["spt" + String(SPT_TASK_ID)],"animation3"]);
         TaskDiaLogManager.single.playStory([mod1],function():void
         {
            staticScene();
         });
      }
      
      private static function onMouseEventHandler(param1:MouseEvent) : void
      {
         var mod1:TaskMod;
         var mod2:TaskMod;
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86068129);
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         mod1 = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["spt" + String(SPT_TASK_ID)],"animation2"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["原来是精灵…等等怎么好像没见过你啊！你是谁啊？为什么会出现在这里…难道你是海盗派来的？"],["海盗？我可是蜥蜴王加尔鲁什"]);
         TaskDiaLogManager.single.playStory([mod1,mod2],function():void
         {
            NpcDialog.show(NPC.XIYIWANG,["做朋友？除非你能战胜我，否则休想！"],["那就接受挑战吧！","让我再考虑一下！"],[function():void
            {
               var _loc1_:* = BufferRecordManager.getMyState(BUFFER_ID);
               if(_loc1_)
               {
                  MainManager.selfVisible = true;
                  MainManager.actorModel.x = 275;
                  MainManager.actorModel.y = 460;
                  ToolBarController.showOrHideAllUser(true);
               }
               else
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
               }
               ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,onMoudleCloseHandler);
               FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,fightStartHandler,false,0,true);
               FightBossController.fightBoss("加尔鲁什",0);
            },function():void
            {
               rollBackAnimationScene();
            }]);
         });
      }
      
      public static function fightStartHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.START_FIGHT,fightStartHandler);
         var _loc2_:FightStartInfo = param1.dataObj as FightStartInfo;
         if(_loc2_.otherInfo.petID == PET_ID)
         {
            FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,fightOverHandler,false,0,true);
         }
      }
      
      private static function onMoudleCloseHandler(param1:DataEvent) : void
      {
         ModuleManager.removeEventListener("model","close",onMoudleCloseHandler);
         if(String(param1.data) != "startClose")
         {
            if(String(param1.data) == "normalClose")
            {
               rollBackAnimationScene();
            }
         }
      }
      
      public static function fightOverHandler(param1:PetFightEvent) : void
      {
         var obj:FightOverInfo = null;
         var hasFight:Boolean = false;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,fightOverHandler);
         obj = e.dataObj.data as FightOverInfo;
         if(MapManager.currentMap)
         {
            if(MapManager.currentMap.id == MAP_ID)
            {
               hasFight = Boolean(BufferRecordManager.getMyState(BUFFER_ID));
               if(!hasFight)
               {
                  BufferRecordManager.setMyState(BUFFER_ID,true,function():void
                  {
                     if(obj.winnerID == MainManager.actorInfo.userID)
                     {
                        whenFightWin();
                     }
                     else
                     {
                        whenFightFail();
                     }
                  });
               }
               else if(obj.winnerID == MainManager.actorInfo.userID)
               {
                  whenFightWin();
               }
               else
               {
                  whenFightFail();
               }
            }
         }
      }
      
      private static function whenFightFail() : void
      {
         NpcDialog.show(NPC.XIYIWANG,["哈哈，怎么样失败的滋味不错吧"],["继续挑战你！","让我再准备一下！"],[function():void
         {
            var _loc1_:* = BufferRecordManager.getMyState(BUFFER_ID);
            if(_loc1_)
            {
               MainManager.selfVisible = true;
               MainManager.actorModel.x = 275;
               MainManager.actorModel.y = 460;
               ToolBarController.showOrHideAllUser(true);
            }
            else
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
            }
            ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,onMoudleCloseHandler);
            FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,fightStartHandler,false,0,true);
            FightBossController.fightBoss("加尔鲁什",0);
         },function():void
         {
            rollBackAnimationScene();
         }]);
      }
      
      private static function whenFightWin() : void
      {
         NpcDialog.show(NPC.XIYIWANG,["没想到你竟然这么厉害，我认输……不过你别高兴的太早，总有一天我一定会成为草系精灵王的！"],["恩恩，希望你早日成功！"],[function():void
         {
            rollBackAnimationScene();
         }]);
      }
   }
}
