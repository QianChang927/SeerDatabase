package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class GiraudHelpFindLostMemorieMap2Controller
   {
      
      public static const NODE_1_BUFFER_ID:uint = 1249;
      
      public static const NODE_2_BUFFER_ID:uint = 1250;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
       
      
      public function GiraudHelpFindLostMemorieMap2Controller()
      {
         super();
      }
      
      public static function initForMap10880(param1:BaseMapProcess) : void
      {
         _map = param1;
         startPlay();
      }
      
      public static function startPlay() : void
      {
         _map.topLevel.mouseEnabled = false;
         _map.topLevel.mouseChildren = false;
         _map.btnLevel.mouseEnabled = false;
         _map.btnLevel.mouseChildren = false;
         _map.conLevel["boss_0"].visible = false;
         _map.conLevel["boss_1"].visible = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_giraudHelpFindLostMemories_2"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            update();
            addEvents();
         });
      }
      
      public static function update() : void
      {
         taskMc["btn_0"].buttonMode = true;
         if(!isNode1TaskDone)
         {
            _map.conLevel["boss_0"].visible = false;
            _map.conLevel["boss_1"].visible = false;
         }
         else
         {
            _map.conLevel["boss_0"].visible = true;
            _map.conLevel["boss_1"].visible = true;
            _map.conLevel["jiyiqiBtn"].buttonMode = true;
            CommonUI.addYellowArrow(_map.conLevel["jiyiqiBtn"],100,0,45);
         }
      }
      
      private static function addEvents() : void
      {
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
         _map.conLevel["boss_0"].addEventListener(MouseEvent.CLICK,onBoss1Fight);
         _map.conLevel["boss_1"].addEventListener(MouseEvent.CLICK,onBoss2Fight);
         _map.conLevel["jiyiqiBtn"].addEventListener(MouseEvent.CLICK,onJiyiqiBtn);
      }
      
      private static function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         switch(_loc2_)
         {
            case "btn_0":
               chooseDialog0();
         }
      }
      
      private static function chooseDialog0() : void
      {
         if(!isNode1TaskDone)
         {
            NpcDialog.show(NPC.SEER,["这里就是吉罗的第二个记忆丢失的地方啊。。怎么这么荒凉。"],["我们又见面了，我记得你。"],[function():void
            {
               NpcDialog.show(NPC.JILUO,["我是吉罗，是妖王吉罗，这里没有危险性，但我却感受到让我窒息的压迫感，我一定来过这里，并且发生了什么。"],["啊……这里居然有个记忆唤醒器！！"],[function():void
               {
                  BufferRecordManager.setMyState(NODE_1_BUFFER_ID,true,function():void
                  {
                     update();
                     NpcDialog.show(NPC.JILUO,["野怪身上应该有我需要的东西，你击败他们就能得到，然后去那边的记忆唤醒器里看看吧。应该有所帮助。"],["明白！"],[function():void
                     {
                     }]);
                  });
               }]);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.JILUO,["野怪身上应该有我需要的东西，你击败他们就能得到，然后去那边的记忆唤醒器里看看吧。应该有所帮助。"],["明白！"],[function():void
            {
            }]);
         }
      }
      
      private static function onBoss1Fight(param1:MouseEvent) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         FightManager.fightNoMapBoss("埃闻",3753);
      }
      
      private static function onBoss2Fight(param1:MouseEvent) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         FightManager.fightNoMapBoss("弗曼",3754);
      }
      
      private static function onJiyiqiBtn(param1:MouseEvent) : void
      {
         if(isNode1TaskDone)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("GiraudHelpFindLostMemorieSecPanel"),"正在打开...");
         }
      }
      
      public static function playFullMovie() : void
      {
         if(!isNode2TaskDone)
         {
            startPreTask();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("GiraudHelpFindLostMemoriesMainPanel"),"正在打开...");
         }
      }
      
      public static function startPreTask() : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.FUL_MOVIE,["task_giraudHelpFindLostMemories_3",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            BufferRecordManager.setMyState(NODE_2_BUFFER_ID,true,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("GiraudHelpFindLostMemoriesMainPanel"));
            });
         };
         storyPlayer.start();
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
      }
      
      private static function get isNode1TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_1_BUFFER_ID);
      }
      
      private static function get isNode2TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_2_BUFFER_ID);
      }
      
      public static function destroy() : void
      {
         removeEvents();
         if(taskMc != null)
         {
            taskMc = null;
         }
         _map = null;
      }
   }
}
