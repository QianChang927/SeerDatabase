package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class BaoZhaoMouseSptController
   {
      
      private static var _instance:com.robot.app.mapProcess.control.BaoZhaoMouseSptController;
       
      
      private const BUFFER:uint = 890;
      
      private var _taskMC:MovieClip;
      
      public function BaoZhaoMouseSptController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app.mapProcess.control.BaoZhaoMouseSptController
      {
         return _instance = _instance || new com.robot.app.mapProcess.control.BaoZhaoMouseSptController();
      }
      
      public function start() : void
      {
         StoryLoaderManager.insatnce.swfName = "map_923_0";
         StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         this._taskMC = param1;
         MapManager.currentMap.controlLevel.addChild(MapManager.currentMap.controlLevel["stoneMaskBtn"]);
         if(BufferRecordManager.getMyState(this.BUFFER) == false)
         {
            SocketConnection.send(1022,86063909);
            this.startPreStroy();
         }
         else
         {
            KTool.showMapAllPlayerAndMonster();
            this._taskMC.gotoAndStop(5);
            this.addEvents();
         }
      }
      
      private function addEvents() : void
      {
         this._taskMC.addEventListener(MouseEvent.CLICK,this.onFightClickHandler);
      }
      
      protected function onFightClickHandler(param1:MouseEvent) : void
      {
         var taskMod:TaskMod = null;
         var frameIndex:Number = NaN;
         var event:MouseEvent = param1;
         if(event.target is MovieClip)
         {
            frameIndex = Number(this._taskMC["mc5"].currentFrame);
            if(frameIndex < 95)
            {
               taskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,6,"mc6"]);
            }
            else if(frameIndex > 95 && frameIndex < 180)
            {
               taskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,7,"mc7"]);
            }
            else if(frameIndex > 180 && frameIndex < 280)
            {
               taskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,8,"mc8"]);
            }
            else if(frameIndex > 280 && frameIndex < 390)
            {
               taskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,9,"mc9"]);
            }
         }
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory([taskMod],function():void
         {
            KTool.showMapAllPlayerAndMonster();
            NpcDialog.show(NPC.DELAMENG,["废话少说，接招吧！"],["那我就来会会你！","让我再准备一下！"],[function():void
            {
               BufferRecordManager.setMyState(BUFFER,true);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverBossHandler);
               FightManager.fightWithBoss("德拉蒙",1);
               _taskMC.gotoAndStop(5);
            },function():void
            {
               _taskMC.gotoAndStop(5);
            }]);
         });
      }
      
      protected function onFightOverBossHandler(param1:PetFightEvent) : void
      {
         var md1:TaskMod;
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverBossHandler);
         md1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DELAMENG,["没想到你那么厉害！我认输了！"],["哈哈，头盔还你吧~！"]);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            TaskDiaLogManager.single.playStory([md1],function():void
            {
            });
         }
         else
         {
            NpcDialog.show(NPC.DELAMENG,["你输了，你不是我的对手！"],["继续挑战你！","让我再准备一下！"],[function():void
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverBossHandler);
               FightManager.fightWithBoss("德拉蒙",1);
               _taskMC.gotoAndStop(5);
            },function():void
            {
               _taskMC.gotoAndStop(5);
            }]);
         }
      }
      
      private function startPreStroy() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(this.stroyLine,function():void
         {
            NpcDialog.show(NPC.DELAMENG,["废话少说，接招吧！"],["那我就来会会你！","让我再准备一下！"],[function():void
            {
               BufferRecordManager.setMyState(BUFFER,true);
               KTool.showMapAllPlayerAndMonster();
               _taskMC.gotoAndStop(5);
               addEvents();
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverBossHandler);
               FightManager.fightWithBoss("德拉蒙",1);
               _taskMC.gotoAndStop(5);
            },function():void
            {
               BufferRecordManager.setMyState(BUFFER,true);
               KTool.showMapAllPlayerAndMonster();
               _taskMC.gotoAndStop(5);
               addEvents();
            }]);
         });
      }
      
      private function get stroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DELAMENG,["谁能告诉我，我该从哪儿出去？！"],["你不是鼹鼠吗？你竟然搞不清方向？"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["-.-！你明明长得就是一副鼹鼠的样子……"],["……"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你个小鼹鼠，脾气倒挺大！"],["我说了我不是鼹鼠！你才是鼹鼠，你全家都是鼹鼠！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,4,"mc4"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DELAMENG,["把我的头盔还给我！"],["-.-！是你自己丢给我的好不好？！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DELAMENG,["我不管我不管！快把我的头盔还给我，不然我要生气了！"],["哈哈！生气会怎么样？"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_];
      }
      
      private function get taskMC() : MovieClip
      {
         return this._taskMC;
      }
   }
}
