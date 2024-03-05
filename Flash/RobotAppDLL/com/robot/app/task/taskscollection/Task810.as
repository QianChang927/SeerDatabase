package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.MapProcess_688;
   import com.robot.app.task.control.TaskController_810;
   import com.robot.app.task.petstory.util.FightGang;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class Task810
   {
      
      private static var _map:BaseMapProcess;
      
      private static var fightGang:FightGang;
      
      private static var isClicked:Boolean = false;
       
      
      public function Task810()
      {
         super();
      }
      
      public static function initForMap688(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_810.TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               if(TasksManager.getTaskStatus(TaskController_810.TASK_ID) == TasksManager.ALR_ACCEPT)
               {
                  _map.conLevel["door_guide"].visible = true;
               }
            }
            else if(Boolean(param1[0]) && !param1[1])
            {
               _map.conLevel["task810mc"].buttonMode = true;
               _map.conLevel["task810mc"].addEventListener(MouseEvent.CLICK,prepareToFightGang);
               _map.conLevel["task810mc"].visible = true;
               _map.conLevel["task810mc"].gotoAndStop(_map.conLevel["task810mc"].totalFrames);
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               _map.conLevel["task810mc"].gotoAndStop(1);
               _map.conLevel["task810mc"].visible = true;
            }
         });
      }
      
      private static function prepareToFightGang(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(350,245),function():void
         {
            NpcDialog.show(NPC.SEER,["盖亚，现在还用不着你出手，我会让他们知道到底谁的屁股会开花！"],["（用头部射击消灭海盗）"],[function():void
            {
               step1Fight();
               _map.conLevel["task810mc"].buttonMode = false;
               _map.conLevel["task810mc"].removeEventListener(MouseEvent.CLICK,prepareToFightGang);
            }]);
         });
      }
      
      public static function showGaiya() : void
      {
         _map.conLevel["task810mc"].visible = true;
      }
      
      public static function prepareToFight() : void
      {
         AnimateManager.playMcAnimate(_map.conLevel["task810mc"],1,null,function():void
         {
            NpcDialog.show(NPC.SEER,["盖亚，现在还用不着你出手，我会让他们知道到底谁的屁股会开花！"],["（用头部射击消灭海盗）"],[function():void
            {
               TasksManager.complete(TaskController_810.TASK_ID,0,function():void
               {
                  step1Fight();
               });
            }]);
         });
      }
      
      private static function step1Fight() : void
      {
         _map.conLevel["task810mc"].visible = true;
         _map.conLevel["task810mc"].gotoAndStop(_map.conLevel["task810mc"].totalFrames);
         MapProcess_688(_map).openDoorDandi();
         if(fightGang == null)
         {
            fightGang = new FightGang(120,100,5);
            fightGang.createOgre(2538,new Point(400,245),10,10);
            fightGang.createOgre(2538,new Point(440,245),10,10);
            fightGang.createOgre(2538,new Point(420,215),10,10);
            fightGang.createOgre(2538,new Point(380,215),10,10);
            fightGang.beginFight().addResponse(function():void
            {
               fightGang.destroyFight();
               fightGang = null;
               TasksManager.complete(TaskController_810.TASK_ID,1,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_810_2"));
                  _map.conLevel["task810mc"].gotoAndStop(1);
               });
            },function():void
            {
               NpcDialog.show(NPC.SEER,["可恶！我一定要你们屁股开花！"],["（用头部射击消灭海盗）"],[function():void
               {
                  fightGang.beginFight();
               }]);
            });
         }
      }
      
      public static function showBLZguide() : void
      {
         _map.topLevel["entryGuide"].visible = true;
      }
      
      public static function initForMap690(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         TasksManager.getProStatusList(TaskController_810.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
            {
               _map.conLevel["task810mc"].visible = true;
               _map.conLevel["task810mc"]["dandi"].addEventListener(MouseEvent.CLICK,onNPCClicked);
               _map.conLevel["task810mc"]["dandi"].buttonMode = true;
               NpcController.npcVisible = false;
               _map.conLevel["task810mc2"].visible = true;
            }
            else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
            {
               if(TasksManager.getTaskStatus(TaskController_810.TASK_ID) == TasksManager.ALR_ACCEPT)
               {
                  _map.conLevel["task810mc2"].visible = true;
               }
               else
               {
                  hideNPCs();
               }
            }
            else
            {
               hideNPCs();
            }
         });
      }
      
      public static function hideNPCs() : void
      {
         _map.conLevel["task810mc2"].visible = false;
      }
      
      private static function onNPCClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(isClicked)
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
            FightManager.fightWithBoss("卡洛斯、 艾文",0);
         }
         else
         {
            _map.conLevel["task810mc"]["guide"].visible = false;
            NpcDialog.show(NPC.SEER,["卡洛斯！艾文！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.NADUO,["那是丹迪吗？样子怎么变了。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.GAIYA,["别想那么多！先把该死的邪灵成员干掉。"],["（点击卡洛斯、 艾文对战）"],[function():void
                  {
                     isClicked = true;
                     _map.conLevel["task810mc"].addEventListener(MouseEvent.CLICK,onNPCClicked);
                     _map.conLevel["task810mc"].buttonMode = true;
                     _map.conLevel["task810mc"]["dandi"].buttonMode = false;
                  }]);
               });
            });
         }
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_810_3"),function():void
         {
            TasksManager.complete(TaskController_810.TASK_ID,3,function():void
            {
               _map.conLevel["task810mc"].removeEventListener(MouseEvent.CLICK,onNPCClicked);
               _map.conLevel["task810mc"].visible = false;
               NpcController.npcVisible = true;
            });
         });
      }
      
      public static function destroy() : void
      {
         if(fightGang)
         {
            fightGang.destroyFight();
            fightGang = null;
         }
         if(MapManager.currentMap.id == 690)
         {
            _map.conLevel["task810mc"]["dandi"].removeEventListener(MouseEvent.CLICK,onNPCClicked);
            _map.conLevel["task810mc"].removeEventListener(MouseEvent.CLICK,onNPCClicked);
         }
         else if(MapManager.currentMap.id == 688)
         {
            _map.conLevel["task810mc"].removeEventListener(MouseEvent.CLICK,prepareToFightGang);
         }
         _map = null;
      }
   }
}
