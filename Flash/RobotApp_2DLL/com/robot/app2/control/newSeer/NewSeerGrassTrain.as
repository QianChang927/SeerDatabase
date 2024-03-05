package com.robot.app2.control.newSeer
{
   import com.robot.app.control.NewSeerGuideController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerGrassTrain
   {
      
      private static var isUseDrug:Boolean = false;
       
      
      public function NewSeerGrassTrain()
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
         StatManager.sendStat2014("5月全新新手任务  ","接取任务原地复活的",StatManager.USER_CHARACTER);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            doNonoBubble();
         });
         MapManager.changeMap(359);
      }
      
      private static function doNonoBubble() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_359_nono_bubble_use_drug"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.tipLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,0,"",function():void
            {
               DisplayUtil.removeForParent(mc);
               mc = null;
            });
         });
      }
      
      public static function completeStep1() : void
      {
         if(!NewSeerGuideController.isNewSeer)
         {
            return;
         }
         KTool.getMultiValue([3140],function(param1:Array):void
         {
            var va:Array = param1;
            if(va[0] == 23)
            {
               SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_COMPLETE_TASK,[3,1,0],function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  NewSeerGuideController.completeTask(31,function():void
                  {
                     MapManager.changeLocalMap(10017);
                  });
               });
            }
         });
      }
      
      private static function start2() : void
      {
         StatManager.sendStat2014("5月全新新手任务  ","接取任务赶走那条鲨鱼的",StatManager.USER_CHARACTER);
         MapManager.changeLocalMap(10019);
      }
      
      public static function enterMap10019() : void
      {
         MapManager.currentMap.depthLevel["shark"].buttonMode = true;
         MapManager.currentMap.depthLevel["shark"].addEventListener(MouseEvent.CLICK,onShark);
      }
      
      public static function leaveMap10019() : void
      {
         MapManager.currentMap.depthLevel["shark"].removeEventListener(MouseEvent.CLICK,onShark);
      }
      
      private static function onShark(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.sendByQueue(CommandID.SPT_CHALLENGE_FIGHT,[302,1],function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
               {
                  completeStep2();
               }
            });
         });
      }
      
      private static function completeStep2() : void
      {
      }
      
      private static function start3() : void
      {
         StatManager.sendStat2014("5月全新新手任务  ","接取任务丽萨布布历练的",StatManager.USER_CHARACTER);
         NpcDialog.show(NPC.LISHABUBU,[MainManager.actorInfo.formatNick + "，我等你好久了，现在让我们开始草之试炼吧！"],["嗯，我已经准备好了！（点击）"],[function():void
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
            FightManager.fightNoMapBoss("丽莎布布",1130);
         }]);
      }
      
      private static function completeStep3() : void
      {
         NewSeerGuideController.completeTask(33,function():void
         {
            NpcDialog.show(NPC.LISHABUBU,["恭喜你完成了水火草的试炼，我们距离雷伊超进化还剩最后一步，让他变得更强大吧！"],null,null,false,function():void
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
