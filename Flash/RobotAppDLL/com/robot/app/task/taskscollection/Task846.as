package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.MapProcess_697;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_846;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class Task846
   {
      
      public static var _map:BaseMapProcess;
      
      private static var needShowDialog:Boolean = false;
       
      
      public function Task846()
      {
         super();
      }
      
      public static function initForMap697(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_846.TASK_ID) != TasksManager.ALR_ACCEPT)
         {
            DisplayUtil.removeForParent(getTaskMC);
            _map = null;
            return;
         }
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         TasksManager.getProStatusList(TaskController_846.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               getTaskMC.addEventListener(MouseEvent.CLICK,onMCClicked);
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
            {
               initStep3();
               _map.conLevel["guide1"].visible = true;
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
            {
               initStep4();
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
            {
               initStep5();
            }
            else
            {
               ToolBarController.showOrHideAllUser(true);
               OgreController.isShow = true;
               DisplayUtil.removeForParent(getTaskMC);
               _map = null;
            }
         });
      }
      
      private static function onMCClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(220,216),function():void
         {
            AnimateManager.playMcAnimate(getTaskMC,2,"mc",function():void
            {
               TasksManager.complete(TaskController_846.TASK_ID,2,function():void
               {
                  getTaskMC.removeEventListener(MouseEvent.CLICK,onMCClicked);
                  showDialog(null);
                  initStep3();
                  NpcDialog.show(NPC.SAIXIAOXI,["米咔！米咔！你要去哪儿！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.DANDI,["赛小息，别追了！大家千万不要走散，先在附近找到晶盐花驱散雾气。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["呜呜！米咔，米咔， 等我！我一定会找到你的。"],null,null,false,function():void
                        {
                           showDialog(null);
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function showDialog(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.SEER,["赛小息，别担心，米咔很聪明，不会有事的！ 我们赶紧找晶盐花吧。"],["（点击附近的植物）"]);
         _map.conLevel["guide1"].visible = true;
      }
      
      private static function initStep3() : void
      {
         getTaskMC.gotoAndStop(3);
         getTaskMC.addEventListener(MouseEvent.CLICK,showDialog);
         needShowDialog = true;
      }
      
      public static function checkStep3() : void
      {
         if(needShowDialog)
         {
            needShowDialog = false;
            (_map as MapProcess_697).PauseLightTimer();
            NpcDialog.show(NPC.SEER,["哇哦！好神奇啊！晶盐花真的可以驱散雾气耶！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.DANDI,["嗯！但有时限的，当晶盐花的功效结束，雾气又会再次来袭。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["那咱们得抓紧时间呀，米咔还等着我们呢！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.DANDI,["嗯！大家看，那边还有一朵晶盐花，去把它唤醒吧 。"],["（点击场景中的的晶盐花）"],[function():void
                     {
                        _map.conLevel["guide2"].visible = true;
                        _map.conLevel["guide3"].visible = true;
                        getTaskMC.removeEventListener(MouseEvent.CLICK,showDialog);
                        getTaskMC.addEventListener(MouseEvent.CLICK,showDialog4);
                        (_map as MapProcess_697).RestartLightTimer();
                        _map.topLevel.mouseChildren = _map.topLevel.mouseEnabled = false;
                        _map.btnLevel.visible = false;
                        _map.conLevel["flower2"].buttonMode = true;
                        _map.conLevel["flower2"].addEventListener(MouseEvent.CLICK,onChooseFlower);
                     }]);
                  });
               });
            });
            MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
            return;
         }
      }
      
      private static function onChooseFlower(param1:MouseEvent) : void
      {
         _map.conLevel["flower2"].removeEventListener(MouseEvent.CLICK,onChooseFlower);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
         _map.conLevel["guide1"].visible = true;
         checkForStep4();
      }
      
      private static function walkHandler(param1:RobotEvent) : void
      {
         if(MainManager.actorModel.pos.x > 700 && MainManager.actorModel.pos.y < 285)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
            checkForStep4();
         }
      }
      
      private static function showDialog4(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.DANDI,["嗯！大家看，那边还有一朵晶盐花，去把它唤醒吧 。"],["（点击场景中的晶盐花）"],[function():void
         {
            _map.conLevel["guide2"].visible = true;
            _map.conLevel["guide3"].visible = true;
         }]);
      }
      
      private static function checkForStep4() : void
      {
         TasksManager.complete(TaskController_846.TASK_ID,3,function():void
         {
            getTaskMC.removeEventListener(MouseEvent.CLICK,showDialog4);
            initStep4();
            NpcDialog.show(NPC.SAIXIAOXI,["米咔，米咔，我看到米咔了！"],["（点击米咔对话）"],[function():void
            {
            }]);
         });
      }
      
      private static function initStep4() : void
      {
         _map.conLevel["guide1"].visible = false;
         _map.topLevel.visible = false;
         _map.btnLevel.mouseChildren = _map.btnLevel.mouseEnabled = false;
         getTaskMC.gotoAndStop(4);
         getTaskMC.addEventListener(MouseEvent.CLICK,onMikaClicked);
      }
      
      private static function onMikaClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         (_map as MapProcess_697).PauseLightTimer();
         AnimateManager.playMcAnimate(getTaskMC,4,"mc",function():void
         {
            NpcDialog.show(NPC.DANDI,["咱们赶紧把土元素之星挖出来吧。"],["（点击发光的地面）"],[function():void
            {
               TasksManager.complete(TaskController_846.TASK_ID,4,function():void
               {
                  getTaskMC.removeEventListener(MouseEvent.CLICK,onMikaClicked);
                  initStep5();
                  (_map as MapProcess_697).RestartLightTimer();
               });
            }]);
         });
      }
      
      private static function initStep5() : void
      {
         _map.topLevel.visible = false;
         _map.btnLevel.mouseChildren = _map.btnLevel.mouseEnabled = false;
         getTaskMC.gotoAndStop(5);
         getTaskGround.addEventListener(MouseEvent.CLICK,onGroundClicked);
         getTaskGround.buttonMode = true;
         getTaskGround.gotoAndStop(2);
      }
      
      private static function onGroundClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playMcAnimate(getTaskGround,getTaskGround.currentFrame + 1,"mc",function():void
         {
            if(getTaskGround.currentFrame == getTaskGround.totalFrames)
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_846_1"),function():void
               {
                  getTaskGround.removeEventListener(MouseEvent.CLICK,onGroundClicked);
                  dialog5();
               });
            }
         });
      }
      
      private static function dialog5() : void
      {
         NpcDialog.show(NPC.MOFUKE,["迷雾森林可不是你们想来就来，想走就走的地方！"],["你是谁？"],[function():void
         {
            NpcDialog.show(NPC.MOFUKE,["朋友们都叫我迷雾守护者，我也很喜欢这个称号！哈哈哈！如果你们不把土元素之星留下休想离开。"],null,null,false,function():void
            {
               NpcDialog.show(NPC.DANDI,["推特星正处于危机之中，我们要用元素之星的能量来拯救家园，请你不要捣乱！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.MOFUKE,["这个我知道，但是就凭你们这小样，根本就不可能实现。拯救推特星还是由我来吧！哈哈哈！"],["你！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["看来与他的这一战不可避免了"],["（开始对战）"],[function():void
                     {
                        finalFight(null);
                        getTaskMC.gotoAndStop(6);
                        getTaskMC.addEventListener(MouseEvent.CLICK,finalFight);
                     }]);
                  }]);
               });
            });
         }]);
      }
      
      private static function finalFight(param1:MouseEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightManager.fightWithBoss("迷雾守护者",0);
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_846_2"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_846_5"),function():void
            {
               TasksManager.complete(TaskController_846.TASK_ID,5,function():void
               {
                  getTaskGround.gotoAndStop(1);
                  getTaskGround.mouseEnabled = false;
                  (_map as MapProcess_697).resetFrog();
                  MainManager.actorModel.x = 185;
                  MainManager.actorModel.y = 136;
                  destroy();
               });
            });
         });
      }
      
      private static function get getFlower() : MovieClip
      {
         return _map.conLevel["flower1"];
      }
      
      private static function get getTaskMC() : MovieClip
      {
         return _map.conLevel["task846mc"];
      }
      
      private static function get getTaskGround() : MovieClip
      {
         return _map.conLevel["task846mc2"];
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         OgreController.isShow = true;
         ToolBarController.showOrHideAllUser(true);
         if(MapManager.currentMap.id == 697)
         {
            getTaskMC.removeEventListener(MouseEvent.CLICK,onMCClicked);
            getTaskMC.removeEventListener(MouseEvent.CLICK,showDialog);
            getTaskMC.removeEventListener(MouseEvent.CLICK,showDialog4);
            getTaskMC.removeEventListener(MouseEvent.CLICK,onMikaClicked);
            getTaskMC.removeEventListener(MouseEvent.CLICK,finalFight);
            getTaskGround.removeEventListener(MouseEvent.CLICK,onGroundClicked);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
         }
         needShowDialog = false;
         DisplayUtil.removeForParent(getTaskMC);
         _map = null;
      }
   }
}
