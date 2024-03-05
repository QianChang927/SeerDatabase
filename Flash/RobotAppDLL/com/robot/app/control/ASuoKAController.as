package com.robot.app.control
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
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class ASuoKAController
   {
      
      private static var _insatance:com.robot.app.control.ASuoKAController;
      
      private static var _isPlayStory:Boolean;
       
      
      private var _currentMap:MapModel;
      
      private var _taskMC:MovieClip;
      
      public function ASuoKAController()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.control.ASuoKAController
      {
         return _insatance = _insatance || new com.robot.app.control.ASuoKAController();
      }
      
      public function start() : void
      {
         this._currentMap = MapManager.currentMap;
         (this._currentMap.controlLevel["aSuoKaBtn"] as MovieClip).buttonMode = true;
         this.addEvents();
      }
      
      public function removeEvents() : void
      {
         (this._currentMap.controlLevel["aSuoKaBtn"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onASuoKaHandler);
      }
      
      protected function onASuoKaHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(!_isPlayStory)
         {
            KTool.hideMapAllPlayerAndMonster();
            (this._currentMap.controlLevel["aSuoKaBtn"] as MovieClip).visible = false;
            _isPlayStory = true;
            StoryLoaderManager.insatnce.swfName = "map_441_0";
            StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
            return;
         }
         NpcDialog.show(NPC.ASUOKA,["难道我一直都错了，心性的修炼才更加重要？"],["我想挑战你！","我只是路过，马上就走！"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
            FightManager.fightWithBoss("阿索卡",1);
         }]);
      }
      
      private function onFightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            TaskDiaLogManager.single.playStory([new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASUOKA,["想不到你有如此强大的实力！！！真是一山更有一山高啊！"],["继续加油吧！"])],function():void
            {
            });
         }
         else if(info.winnerID == 0)
         {
            NpcDialog.show(NPC.ASUOKA,["虽然你现在还没有能力战胜我，但相信终有一天你一定能行！"],["继续挑战你！","暂且先回去，再准备一下！"],[function():void
            {
               FightManager.fightWithBoss("阿索卡",1);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
            }]);
         }
      }
      
      private function addEvents() : void
      {
         (this._currentMap.controlLevel["aSuoKaBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onASuoKaHandler);
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         this._taskMC = mc;
         TaskDiaLogManager.single.playStory(this.stroyLine,function():void
         {
            BufferRecordManager.setMyState(824,true);
            KTool.showMapAllPlayerAndMonster();
            (_currentMap.controlLevel["aSuoKaBtn"] as MovieClip).visible = true;
            _taskMC.visible = false;
         });
      }
      
      private function get stroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASUOKA,["你是谁？悄悄接近我有何目的？"],["应该我问你才对，在这里从来没有见过你…"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASUOKA,["再问你一句，你是谁？来这里干什么？"],["干嘛那么凶，随便来这逛逛而已！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASUOKA,["不可能！再不说实话，我可要动手了！ "],["……"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你这个家伙，怎么没把事情搞清楚前就胡乱动手啊，真没礼貌！"],["弱者就是这样，打不过只能讲道理！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASUOKA,["你可知道战神盖亚？我要和他一样，打败所有的竞争者，成为星球的最强者！"],["盖亚才不像你这样，只知道好勇斗狠！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASUOKA,["怎么你认识盖亚？能带我去见见他吗，真想和他比试比试！"],["我才不啦，没你那么无聊！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ASUOKA,["战神盖亚果然实力超群！那今天我们就来分个高低吧！"],["看招！"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,4,"mc4"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["好久没有遇到如此强劲的对手了，今天你输给我并不在于实力，而在于心性！"],["胜者为王！你说什么都行！"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["如果只是为了争名夺利，是永远都无法站上实力的顶点！"],["你就留在这里好好想想吧！"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,5,"mc5"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_];
      }
      
      public function get taskMC() : MovieClip
      {
         return this._taskMC;
      }
   }
}
