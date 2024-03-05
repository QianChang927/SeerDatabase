package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class YiShenTeController
   {
      
      private static var _instance:com.robot.app.control.YiShenTeController;
       
      
      public function YiShenTeController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app.control.YiShenTeController
      {
         return _instance = _instance || new com.robot.app.control.YiShenTeController();
      }
      
      public function start() : void
      {
         (this.controlLevel["sptAnimationMc"] as MovieClip).buttonMode = true;
         if(BufferRecordManager.getMyState(1102) == false)
         {
            (this.controlLevel["sptAnimationMc"] as MovieClip).gotoAndStop(1);
            (this.controlLevel["sptAnimationMc"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onStartSptStoryHandler);
         }
         else
         {
            (this.controlLevel["sptAnimationMc"] as MovieClip).gotoAndStop(1);
            this.addEvents();
         }
      }
      
      protected function onStartSptStoryHandler(param1:MouseEvent) : void
      {
         var mod1:TaskMod;
         var mod2:TaskMod;
         var mod3:TaskMod;
         var event:MouseEvent = param1;
         (this.controlLevel["sptAnimationMc"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onStartSptStoryHandler);
         mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.controlLevel["sptAnimationMc"],2,"mc2"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YISHENTE,["是谁打搅了我的好梦！"],["你是谁？为什么在这里睡觉？还放电电我！"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YISHENTE,["这空间补给站电量充足，在这里睡觉又舒服又能增加实力，至于放电电你嘛，我也不是故意的，只能怪你自己太不小心！"],["好啊，你电我就算了，还在这里偷电，看我不教训你！"]);
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3],function():void
         {
            BufferRecordManager.setMyState(1102,true);
            NpcDialog.show(NPC.YISHENTE,["哼！区区铁皮人口气不小，你若是能打败我，我立马走人，要不要来试试！ "],["来就来！输了可要遵守诺言！","算了，我再准备一下！"],[function():void
            {
               FightManager.fightWithBoss("伊森特",0);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverBossHandler);
               KTool.showMapAllPlayerAndMonster();
               (controlLevel["sptAnimationMc"] as MovieClip).gotoAndStop(1);
               addEvents();
            },function():void
            {
               KTool.showMapAllPlayerAndMonster();
               (controlLevel["sptAnimationMc"] as MovieClip).gotoAndStop(1);
               addEvents();
            }]);
         });
      }
      
      protected function onFightOverBossHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var winMod:TaskMod;
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverBossHandler);
         (this.controlLevel["sptAnimationMc"] as MovieClip).gotoAndStop(1);
         info = event.dataObj as FightOverInfo;
         winMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YISHENTE,["我一向崇敬强者，既然你能打败我，我就听你的，这就走！"],["下次睡觉的时候注意点，就是电到花花草草也不好！"]);
         if(info.winnerID == MainManager.actorID)
         {
            TaskDiaLogManager.single.playStory([winMod],function():void
            {
            });
         }
         else
         {
            NpcDialog.show(NPC.YISHENTE,["你这种实力也来挑战我？再回去练练吧，别打扰我睡觉！ "],["再战！我就不信打不过你！","算了，我再准备一下！"],[function():void
            {
               FightManager.fightWithBoss("伊森特",0);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverBossHandler);
            },function():void
            {
               addEvents();
            }]);
         }
      }
      
      private function addEvents() : void
      {
         (this.controlLevel["sptAnimationMc"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
      }
      
      private function onMouseClickHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(BufferRecordManager.getMyState(1102) == false)
         {
            return;
         }
         NpcDialog.show(NPC.YISHENTE,["你这种实力也来挑战我？再回去练练吧，别打扰我睡觉！ "],["再战！我就不信打不过你！","算了，我再准备一下！"],[function():void
         {
            FightManager.fightWithBoss("伊森特",0);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverBossHandler);
         }]);
      }
      
      private function get controlLevel() : MovieClip
      {
         return MapManager.currentMap.controlLevel as MovieClip;
      }
   }
}
