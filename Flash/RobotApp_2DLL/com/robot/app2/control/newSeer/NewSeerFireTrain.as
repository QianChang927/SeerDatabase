package com.robot.app2.control.newSeer
{
   import com.robot.app.control.NewSeerGuideController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.RectangleMask;
   import flash.geom.Rectangle;
   import org.taomee.events.SocketEvent;
   
   public class NewSeerFireTrain
   {
      
      private static var _isCompletingStep1:Boolean = false;
       
      
      public function NewSeerFireTrain()
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
         StatManager.sendStat2014("5月全新新手任务  ","接取任务勇闯试炼之塔的",StatManager.USER_CHARACTER);
         NewSeerGuideController.changeMapDo(10021,enterMap10021,leaveMap10021);
      }
      
      private static function enterMap10021() : void
      {
         CommonUI.addYellowArrow(MapManager.currentMap.topLevel,589,253,0);
         NewSeerGuideController.maskGuide(210,function():void
         {
            completeStep1();
         });
      }
      
      private static function leaveMap10021() : void
      {
         CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
      }
      
      private static function completeStep1() : void
      {
         if(_isCompletingStep1)
         {
            return;
         }
         _isCompletingStep1 = true;
         CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
         SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_COMPLETE_TASK,[2,1,0],function(param1:SocketEvent):void
         {
            NewSeerGuideController.completeTask(21);
         });
      }
      
      private static function start2() : void
      {
         StatManager.sendStat2014("5月全新新手任务  ","接取任务升级！升级！升级！的",StatManager.USER_CHARACTER);
         NewSeerGuideController.maskGuide(220,function():void
         {
            StatManager.sendStat2014("5月全新新手任务  ","触发经验分配器指引的",StatManager.USER_CHARACTER);
            NewSeerGuideController.maskGuide(221,function():void
            {
               NewSeerGuideController.maskGuide(222,function():void
               {
               });
               RectangleMask.mask(new Rectangle(201,433,96,33),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
            });
            RectangleMask.mask(new Rectangle(300,425,96,33),"",10,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
         });
         RectangleMask.mask(new Rectangle(307,518,36,36),"",11,ClientConfig.getResPath("forApp/NewSeerTask.swf"));
      }
      
      public static function completeStep2(param1:int, param2:Function = null) : void
      {
         var tm:int = param1;
         var func:Function = param2;
         if(!NewSeerGuideController.isNewSeer)
         {
            return;
         }
         KTool.getMultiValue([3140],function(param1:Array):void
         {
            var va:Array = param1;
            if(va[0] == 21)
            {
               SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_COMPLETE_TASK,[2,2,tm],function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  if(null != func)
                  {
                     func();
                  }
                  NewSeerGuideController.completeTask(22,function():void
                  {
                  });
               });
            }
         });
      }
      
      private static function start3() : void
      {
         StatManager.sendStat2014("5月全新新手任务  ","接取任务魔焰猩猩的历练的",StatManager.USER_CHARACTER);
         NpcDialog.show(NPC.MOYANXINGXING,[MainManager.actorInfo.formatNick + "，雷伊在你的帮助下能力提升了不少，是时候该接受我的历练了。"],["我一定会战胜你。（点击）"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
               {
                  completeStep3();
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("NewSeerTaskPanel_2014"));
               }
            });
            FightManager.fightNoMapBoss("魔焰猩猩",1129);
         }]);
      }
      
      private static function completeStep3() : void
      {
         NewSeerGuideController.completeTask(23,function():void
         {
            NpcDialog.show(NPC.MOYANXINGXING,["很好，现在只剩下最后的草之试炼了，我愿意加入你的队伍，让我们为雷伊的进化而努力吧！"],null,null,false,function():void
            {
               NewSeerGuideController.changeMapDo(10017,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("NewSeerTaskPanel_2014"));
               });
            });
         });
      }
   }
}
