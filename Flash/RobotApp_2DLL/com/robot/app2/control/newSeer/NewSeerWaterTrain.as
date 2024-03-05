package com.robot.app2.control.newSeer
{
   import com.robot.app.control.NewSeerGuideController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.NewSeerGuidePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.BonusEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.RectangleMask;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class NewSeerWaterTrain
   {
      
      private static var _isAnimPlayed:Boolean = false;
      
      private static var _haveEgg:Boolean = false;
       
      
      public function NewSeerWaterTrain()
      {
         super();
      }
      
      public static function start(param1:int) : void
      {
         if(param1 == 1)
         {
            start1();
         }
         else if(param1 == 2)
         {
            start2();
         }
         else if(param1 == 3)
         {
            start3();
         }
      }
      
      private static function start1() : void
      {
         if(MapManager.currentMap.id == 358)
         {
            return;
         }
         StatManager.sendStat2014("5月全新新手任务  ","接取任务野怪大扫荡的",StatManager.USER_CHARACTER);
         NewSeerGuideController.maskGuide(110,function():void
         {
            if(NewSeerGuideController.mapHasSub)
            {
               NewSeerGuideController.maskGuide(112,function():void
               {
                  MapManager.changeMap(358);
               });
               RectangleMask.mask(new Rectangle(234,92,74,74),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
            }
            else
            {
               NewSeerGuideController.maskGuide(111,function():void
               {
                  NewSeerGuideController.maskGuide(112,function():void
                  {
                     MapManager.changeMap(358);
                  });
                  RectangleMask.mask(new Rectangle(234,92,74,74),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
               });
               RectangleMask.mask(new Rectangle(258,280,238,137),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
            }
         });
         RectangleMask.mask(new Rectangle(448,504,78,56),"",11,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
      }
      
      public static function leaveMap358() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
      }
      
      public static function enterMap358() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
         updatePipiProgress();
      }
      
      private static function onFight(param1:PetFightEvent) : void
      {
         updatePipiProgress(true);
      }
      
      private static function updatePipiProgress(param1:Boolean = false) : void
      {
         var triggerDialog:Boolean = param1;
         NewSeerGuidePanel.update();
         KTool.getMultiValue([3142],function(param1:Array):void
         {
            if(param1[0] == 0)
            {
               playFightGuide358();
            }
            else if(param1[0] == 3)
            {
               if(triggerDialog)
               {
                  completeTask358();
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
               }
            }
         });
      }
      
      private static function playFightGuide358() : void
      {
         if(_isAnimPlayed)
         {
            return;
         }
         _isAnimPlayed = true;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("new_seer_2014_fight_pipi"),null,false);
         StatManager.sendStat2014("新手数据监控","第3步成功完成对战教学","新手收费");
      }
      
      private static function completeTask358() : void
      {
         NewSeerGuideController.completeTask(11,function():void
         {
            leaveMap358();
            NewSeerGuideController.changeMapDo(10017,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("NewSeerTaskPanel_2014"));
            });
         });
      }
      
      private static function start2() : void
      {
         if(MapManager.currentMap.id == 360)
         {
            return;
         }
         MapManager.changeMap(360);
         StatManager.sendStat2014("5月全新新手任务  ","接取任务大战蘑菇怪的",StatManager.USER_CHARACTER);
      }
      
      public static function enterMap360() : void
      {
         MapManager.currentMap.depthLevel["mushroom"].buttonMode = true;
         MapManager.currentMap.depthLevel["mushroom"].addEventListener(MouseEvent.CLICK,onMushroom);
         EventManager.addEventListener(BonusEvent.BONUS_RECEIVE,onBonus);
      }
      
      private static function onBonus(param1:BonusEvent) : void
      {
         var _loc2_:Object = null;
         if(param1.info.id == 481)
         {
            for each(_loc2_ in param1.info.itemList)
            {
               if(_loc2_.id == 400475)
               {
                  _haveEgg = true;
                  break;
               }
            }
            EventManager.removeEventListener(BonusEvent.BONUS_RECEIVE,onBonus);
         }
      }
      
      public static function leaveMap360() : void
      {
         MapManager.currentMap.depthLevel["mushroom"].removeEventListener(MouseEvent.CLICK,onMushroom);
      }
      
      private static function onMushroom(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.MOGUGUAI,["我是大名鼎鼎的SPT BOSS 蘑菇怪，我要让你尝尝我的厉害！"],["为了让雷伊恢复，什么挑战我都不怕！（点击）"],[function():void
         {
            SocketConnection.sendWithCallback(CommandID.SPT_CHALLENGE_FIGHT,function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
                  {
                     completeTask360();
                  }
               });
            },301,1);
         }]);
      }
      
      private static function completeTask360() : void
      {
         NewSeerGuideController.completeTask(12,function():void
         {
            MapManager.changeLocalMap(10017);
         });
      }
      
      private static function hatch_guide() : void
      {
         NewSeerGuideController.maskGuide(120,function():void
         {
            NewSeerGuideController.maskGuide(121,function():void
            {
               NewSeerGuideController.maskGuide(122,function():void
               {
                  NewSeerGuideController.maskGuide(123,function():void
                  {
                     NewSeerGuideController.maskGuide(124,function():void
                     {
                        MapManager.changeLocalMap(10017);
                     });
                     RectangleMask.mask(new Rectangle(395,322,81,34),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
                  });
                  RectangleMask.mask(new Rectangle(431,359,105,34),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
               });
               RectangleMask.mask(new Rectangle(130,238,85,36),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
            });
            RectangleMask.mask(new Rectangle(166,434,50,25),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
         });
         ModuleManager.showModule(ClientConfig.getAppModule("NewSeerMoleculePanel"));
      }
      
      private static function start3() : void
      {
         StatManager.sendStat2014("5月全新新手任务  ","接取任务鲁斯王的历练的",StatManager.USER_CHARACTER);
         NpcDialog.show(NPC.LUSIWANG,["没想到你竟然击败了蘑菇怪，看来你为了雷伊真的愿意面对任何艰险。" + MainManager.actorInfo.formatNick + "，你愿意接受我的历练吗？"],["我愿意。（点击）"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
               {
                  completeTaskLusiwang();
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("NewSeerTaskPanel_2014"));
               }
            });
            FightManager.fightNoMapBoss("鲁斯王",1128);
         }]);
      }
      
      private static function completeTaskLusiwang() : void
      {
         NewSeerGuideController.completeTask(13,function():void
         {
            NewSeerGuideController.changeMapDo(10017,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("NewSeerTaskPanel_2014"));
            });
         });
      }
   }
}
