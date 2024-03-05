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
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class TaskController_1884
   {
      
      public static const TASK_ID:int = 1884;
      
      public static const SPT_TASK_ID:int = 369;
      
      public static const PET_ID:int = 2094;
      
      public static const MAP_ID:int = 95;
      
      private static var _map:BaseMapProcess;
      
      private static var _animationContainer:DisplayObjectContainer;
      
      private static var _index:int = 1;
       
      
      public function TaskController_1884()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         _animationContainer = _map.conLevel["spt" + String(SPT_TASK_ID)] as DisplayObjectContainer;
         hideAnimationContainerAllChildren();
         var _loc2_:uint = uint(TasksManager.getTaskStatus(TaskController_1884.TASK_ID));
         if(_loc2_ == TasksManager.UN_ACCEPT)
         {
            start();
         }
         else if(_loc2_ == TasksManager.ALR_ACCEPT)
         {
            staticScene();
         }
         else
         {
            staticScene();
         }
      }
      
      public static function destory() : void
      {
         hideAnimationContainerAllChildren();
         MovieClip(_animationContainer["animation1"]).removeEventListener(MouseEvent.CLICK,onMouseEventHandler);
         _map = null;
         _animationContainer = null;
      }
      
      public static function hideAnimationContainerAllChildren() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < _animationContainer.numChildren)
         {
            _animationContainer.getChildAt(_loc1_).visible = false;
            MovieClip(_animationContainer.getChildAt(_loc1_)).gotoAndStop(1);
            _loc1_++;
         }
      }
      
      public static function start() : void
      {
         TasksManager.accept(TASK_ID,function():void
         {
            staticScene();
         });
      }
      
      public static function startPro() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["spt" + String(SPT_TASK_ID)],"animation2"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUERZA,["是哪个讨厌的家伙用东西砸我，打扰我享受美食！"],["你是野生精灵，为什么精灵胶囊会对你没有作用？"]);
         TaskDiaLogManager.single.playStory([mod1,mod2],function():void
         {
            NpcDialog.show(NPC.PUERZA,["野生精灵……，尽然把我当做是野生精灵……！你个丑铁皮我要让你知道我的厉害！"],["来啊，怕你不成！","让我再准备一下！"],[function():void
            {
               TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
               {
                  staticScene();
                  FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,fightStartHandler,false,0,true);
                  FightBossController.fightBoss("普尔扎",5);
               });
            },function():void
            {
               TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
               {
                  staticScene();
               });
            }]);
         });
      }
      
      public static function startStatic() : void
      {
         NpcDialog.show(NPC.PUERZA,["尽然打扰我享受美食，我让让你知道我的厉害！"],["来啊，怕你不成！","让我再准备一下！"],[function():void
         {
            staticScene();
            FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,fightStartHandler,false,0,true);
            FightBossController.fightBoss("普尔扎",5);
         },function():void
         {
            staticScene();
         }]);
      }
      
      public static function staticScene() : void
      {
         hideAnimationContainerAllChildren();
         var _loc1_:uint = uint(TasksManager.getTaskStatus(TaskController_1884.TASK_ID));
         if(_loc1_ == TasksManager.COMPLETE)
         {
            MainManager.selfVisible = true;
            ToolBarController.showOrHideAllUser(true);
         }
         else
         {
            MainManager.selfVisible = false;
            ToolBarController.showOrHideAllUser(false);
         }
         MovieClip(_animationContainer["animation1"]).visible = true;
         MovieClip(_animationContainer["animation1"]).gotoAndPlay(_index);
         MovieClip(_animationContainer["animation1"]).buttonMode = true;
         MovieClip(_animationContainer["animation1"]).addEventListener(MouseEvent.CLICK,onMouseEventHandler);
      }
      
      public static function firstScene() : void
      {
      }
      
      private static function onMouseEventHandler(param1:MouseEvent) : void
      {
         var _loc2_:uint = uint(TasksManager.getTaskStatus(TaskController_1884.TASK_ID));
         if(_loc2_ == TasksManager.ALR_ACCEPT)
         {
            MovieClip(_animationContainer["animation1"]).gotoAndStop(57);
            _index = MovieClip(_animationContainer["animation1"]).currentFrame;
            startPro();
         }
         else if(_loc2_ == TasksManager.COMPLETE)
         {
            MovieClip(_animationContainer["animation1"]).stop();
            _index = MovieClip(_animationContainer["animation1"]).currentFrame;
            startStatic();
         }
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
      
      public static function fightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,fightOverHandler);
         var _loc2_:FightOverInfo = param1.dataObj.data as FightOverInfo;
         if(MapManager.currentMap)
         {
            if(MapManager.currentMap.id == MAP_ID)
            {
               if(_loc2_.winnerID == MainManager.actorInfo.userID)
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
         NpcDialog.show(NPC.PUERZA,["这就是打扰我吃东西的下场，哼哼"],["继续挑战你！","让我再准备一下！"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.START_FIGHT,fightStartHandler,false,0,true);
            FightBossController.fightBoss("普尔扎",5);
         },function():void
         {
         }]);
      }
      
      private static function whenFightWin() : void
      {
         NpcDialog.show(NPC.PUERZA,["没想到你个丑铁皮这么厉害，我认输……"],["嘿嘿"]);
      }
   }
}
