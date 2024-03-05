package com.robot.app2.control.newSeer
{
   import com.robot.app.control.NewSeerGuideController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
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
   
   public class NewSeerLeiyiEvo
   {
      
      private static var _stage:int;
       
      
      public function NewSeerLeiyiEvo()
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
         else if(param1 == 4)
         {
            start4();
         }
         else if(param1 == 5)
         {
            start5();
         }
      }
      
      private static function start1() : void
      {
         _stage = 1;
         MapManager.changeLocalMap(10020);
         StatManager.sendStat2014("5月全新新手任务  ","接取任务精灵的秘密-学习力的",StatManager.USER_CHARACTER);
      }
      
      public static function enterMap10020() : void
      {
         MapManager.currentMap.depthLevel["paite"].buttonMode = true;
         MapManager.currentMap.depthLevel["paite"].addEventListener(MouseEvent.CLICK,onDoctor);
      }
      
      public static function leaveMap10020() : void
      {
         MapManager.currentMap.depthLevel["paite"].removeEventListener(MouseEvent.CLICK,onDoctor);
      }
      
      private static function onDoctor(param1:MouseEvent) : void
      {
         if(_stage == 1)
         {
            onDoctor_1();
         }
         else if(_stage == 2)
         {
            onDoctor_2();
         }
      }
      
      private static function onDoctor_1() : void
      {
         NpcDialog.show(NPC.DOCTOR,[MainManager.actorInfo.formatNick + "，现在我要向你介绍一下精灵的学习力。"],null,null,false,function():void
         {
            ResourceManager.getResource(ClientConfig.getAppRes("newSeer/pets_buff"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               KTool.setBrightness(LevelManager.mapLevel,-0.3);
               LevelManager.tipLevel.addChild(mc);
               StatManager.sendStat2014("5月全新新手任务  ","触发学习力面板动画的",StatManager.USER_CHARACTER);
               AnimateManager.playMcAnimate(mc,1,"mc",function():void
               {
                  StatManager.sendStat2014("5月全新新手任务  ","观看完学习力面板动画的",StatManager.USER_CHARACTER);
                  KTool.setBrightness(LevelManager.mapLevel,0);
                  DisplayUtil.removeForParent(mc);
                  NpcDialog.show(NPC.DOCTOR,["雷小伊的推荐学习力是攻击和速度，参加学习力大作战可以获得大量学习力，现在就跟我去看看吧！"],["嗯嗯。"],[function():void
                  {
                     gotoMap985();
                  }]);
               });
            });
         });
      }
      
      private static function onDoctor_2() : void
      {
         NpcDialog.show(NPC.DOCTOR,[MainManager.actorInfo.formatNick + "，现在我要向你介绍一下精灵的天赋。"],null,null,false,function():void
         {
            ResourceManager.getResource(ClientConfig.getAppRes("newSeer/pets_buff"),function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               KTool.setBrightness(LevelManager.mapLevel,-0.3);
               LevelManager.tipLevel.addChild(mc);
               AnimateManager.playMcAnimate(mc,2,"mc",function():void
               {
                  KTool.setBrightness(LevelManager.mapLevel,0);
                  DisplayUtil.removeForParent(mc);
                  NpcDialog.show(NPC.DOCTOR,[MainManager.actorInfo.formatNick + "，我这里有一个雷小伊专属的天赋改造药剂，可以直接将雷小伊的天赋直接改造到31，打开背包就可以给雷小伊使用啦。"],["真是太感谢你啦，博士，我一定会帮助雷小伊进化的。（点击）"],[function():void
                  {
                     completeStep2();
                  }]);
               });
            });
         });
      }
      
      private static function gotoMap985() : void
      {
         SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_COMPLETE_TASK,[4,1,0],function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            NewSeerGuideController.completeTask(41,function():void
            {
               ModuleManager.showAppModule("NewSeerTaskPanel_2014");
            });
         });
      }
      
      private static function completeStep1() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_COMPLETE_TASK,[4,1,0],function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               NewSeerGuideController.completeTask(41,function():void
               {
               });
            });
         });
      }
      
      private static function start2() : void
      {
         _stage = 2;
         MapManager.changeLocalMap(10020);
         StatManager.sendStat2014("5月全新新手任务  ","接取任务精灵的秘密-天赋的",StatManager.USER_CHARACTER);
      }
      
      private static function completeStep2() : void
      {
         SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_COMPLETE_TASK,[4,2,0],function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            NewSeerGuideController.completeTask(42,function():void
            {
               MapManager.changeLocalMap(10017);
            });
         });
      }
      
      private static function start3() : void
      {
      }
      
      private static function start4() : void
      {
      }
      
      private static function start5() : void
      {
      }
   }
}
