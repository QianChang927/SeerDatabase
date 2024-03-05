package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_815;
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
   import org.taomee.utils.DisplayUtil;
   
   public class Task815
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task815()
      {
         super();
      }
      
      public static function initForMap688(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_815.TASK_ID,function(param1:Array):void
         {
            if(!(Boolean(param1[0]) && !param1[1]))
            {
               DisplayUtil.removeForParent(_map.conLevel["task815mc"]);
            }
         });
      }
      
      public static function initForMap690(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_815.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               _map.conLevel["guide"].visible = true;
               _map.conLevel["spring"].visible = true;
               _map.conLevel["spring"].addEventListener(MouseEvent.CLICK,onClicked);
            }
         });
      }
      
      private static function onClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _map.conLevel["spring"].removeEventListener(MouseEvent.CLICK,onClicked);
         NpcDialog.show(NPC.DANDI,["就在这里，“金元素之星”的指引非常明确。"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SEER,["嗯，让我仔细瞧瞧，一定能找出玄机。"],["（点击水池，解开机关）"],[function():void
            {
               TasksManager.complete(TaskController_815.TASK_ID,2);
            }]);
         });
      }
      
      private static function onDandiClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(60,270),function():void
         {
            NpcDialog.show(NPC.SEER,["真是不可思议啊！没想到水池底下竟然藏着如此奇特的空间。"],null,null,false,function():void
            {
               NpcDialog.show(NPC.DANDI,["在推特星生活了这么久，我刚刚才知道这里。"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_815_3"),function():void
                  {
                     TasksManager.complete(TaskController_815.TASK_ID,3,function():void
                     {
                        mc.removeEventListener(MouseEvent.CLICK,onDandiClicked);
                        mcToFrame2();
                     });
                  });
               });
            });
         });
      }
      
      private static function mcToFrame2() : void
      {
         mc.addEventListener(MouseEvent.CLICK,onOgreClicked);
         mc.gotoAndStop(2);
         _map.typeLevel["stone1"].visible = true;
         _map.typeLevel["stone1"].mouseEnabled = true;
         MapManager.currentMap.makeMapArray();
      }
      
      public static function showGuideTo688() : void
      {
         _map.conLevel["entryGuide"].visible = true;
      }
      
      public static function showGuideTo690() : void
      {
         _map.topLevel["entryGuide"].visible = true;
      }
      
      public static function initForMap692(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         var noTask:Function = function():void
         {
            DisplayUtil.removeForParent(mc);
            ToolBarController.showOrHideAllUser(true);
         };
         _map = map;
         if(TasksManager.getTaskStatus(815) == TasksManager.ALR_ACCEPT)
         {
            OgreController.isShow = false;
         }
         TasksManager.getProStatusList(TaskController_815.TASK_ID,function(param1:Array):void
         {
            mc.buttonMode = true;
            mc.mouseEnabled = true;
            ToolBarController.showOrHideAllUser(false);
            if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
            {
               mc.addEventListener(MouseEvent.CLICK,onDandiClicked);
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
            {
               mcToFrame2();
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
            {
               if(TasksManager.getTaskStatus(TaskController_815.TASK_ID) == TasksManager.ALR_ACCEPT)
               {
                  prepareForLastStep();
               }
               else
               {
                  noTask();
               }
            }
            else
            {
               noTask();
            }
         });
      }
      
      private static function onOgreClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(760,165),function():void
         {
            mc["mc"]["guide"].visible = false;
            NpcDialog.show(NPC.SEER,["嘿嘿，小家伙能让让路吗？我们有急事！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.HEIBULUO,["没看见，哥哥我正躺在路中间睡觉吗？故意把我吵醒，太坏啦！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SEER,["睡觉？…………你睡觉的状态可真特别啊！还可以滚来滚去的。"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.HEIBULUO,["睡觉时身体就不能蹦蹦跳跳吗？这是谁定的规矩！你这个破铁皮唧唧歪歪的，把我惹火了！尝尝我的厉害！"],["（与野怪对战）"],[function():void
                     {
                        prepareForFight();
                     }]);
                  });
               });
            });
         });
      }
      
      private static function prepareForFight() : void
      {
         mc.removeEventListener(MouseEvent.CLICK,onOgreClicked);
         mc.gotoAndStop(3);
         mc.addEventListener(MouseEvent.CLICK,onStartFight);
      }
      
      private static function onStartFight(param1:MouseEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         FightManager.fightWithBoss("黑布罗",0);
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            mc.gotoAndStop(4);
            NpcDialog.show(NPC.HEIBULUO,["哎呀呀！遇到高手啦，那我放个臭屁给你做礼物吧，哈哈哈！"],["我去！你真恶心！"],[function():void
            {
               AnimateManager.playMcAnimate(mc,4,"mc",function():void
               {
                  NpcDialog.show(NPC.DANDI,["好臭啊！受不了了！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SEER,["这个家伙的屁真是天下第一臭！我们赶紧往前冲，要不然会被熏晕的！"],["（进入暗物质神殿深处）"],[function():void
                     {
                        TasksManager.complete(TaskController_815.TASK_ID,4,function():void
                        {
                           AnimateManager.playMcAnimate(mc,5,"mc",function():void
                           {
                              mc.removeEventListener(MouseEvent.CLICK,onOgreClicked);
                              mc.removeEventListener(MouseEvent.CLICK,onStartFight);
                              prepareForLastStep();
                              _map.typeLevel["stone1"].visible = false;
                              _map.typeLevel["stone1"].mouseEnabled = false;
                              MapManager.currentMap.makeMapArray();
                           });
                        });
                     }]);
                  });
               });
            }]);
         }
         else
         {
            NpcDialog.show(NPC.HEIBULUO,["我还以为你这块铁皮有多大能耐呢，看来你除了嘴巴会啰嗦，根本就是一无是处啊！"],["可恶！我一定要打倒你！"]);
            prepareForFight();
         }
      }
      
      private static function prepareForLastStep() : void
      {
         mc.gotoAndStop(6);
         mc.addEventListener(MouseEvent.CLICK,on692DandiClicked);
      }
      
      private static function on692DandiClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(560,390),function():void
         {
            NpcDialog.show(NPC.DANDI,["“金元素之星”有强烈的反应，而且这里的石块布局很奇特……"],["我来试试，把不同形状的石块放入对应的凹槽。"]);
         });
      }
      
      public static function onfinishGame(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_815_4"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_815_5"),function():void
            {
               TasksManager.complete(TaskController_815.TASK_ID,5,function():void
               {
                  OgreController.isShow = true;
                  _map.conLevel["mainStone"].buttonMode = false;
                  _map.conLevel["mainStone"].mouseEnabled = false;
                  _map.conLevel["mainStone"].removeEventListener(MouseEvent.CLICK,onfinishGame);
                  _map.conLevel["mainStone"].gotoAndStop(2);
                  mc.visible = false;
               });
            });
         });
      }
      
      private static function get mc() : MovieClip
      {
         return _map.conLevel["task815mc"];
      }
      
      public static function destroy() : void
      {
         OgreController.isShow = true;
         if(MapManager.currentMap.id == 690)
         {
            _map.conLevel["spring"].removeEventListener(MouseEvent.CLICK,onClicked);
         }
         else if(MapManager.currentMap.id == 692)
         {
            if(mc)
            {
               mc.removeEventListener(MouseEvent.CLICK,onDandiClicked);
               mc.removeEventListener(MouseEvent.CLICK,onOgreClicked);
               mc.removeEventListener(MouseEvent.CLICK,onStartFight);
               mc.removeEventListener(MouseEvent.CLICK,on692DandiClicked);
            }
            _map.conLevel["mainStone"].removeEventListener(MouseEvent.CLICK,onfinishGame);
         }
         _map = null;
         ToolBarController.showOrHideAllUser(true);
      }
   }
}
