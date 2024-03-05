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
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public class SptKnifeYaKuBuController
   {
      
      private static const BUFFER_ID:uint = 863;
      
      private static var _instance:com.robot.app.control.SptKnifeYaKuBuController;
       
      
      private var _taskMC:MovieClip;
      
      public function SptKnifeYaKuBuController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app.control.SptKnifeYaKuBuController
      {
         return _instance = _instance || new com.robot.app.control.SptKnifeYaKuBuController();
      }
      
      public function destroy() : void
      {
         if(this._taskMC)
         {
            this._taskMC.removeEventListener(MouseEvent.CLICK,this.onClickTaskmc);
         }
         this._taskMC = null;
      }
      
      public function get taskMC() : MovieClip
      {
         return this._taskMC;
      }
      
      public function start() : void
      {
         SocketConnection.send(1022,86063560);
         StoryLoaderManager.insatnce.swfName = "map_948_0";
         StoryLoaderManager.insatnce.setloaderHandler = this.loadAnimationHandler;
      }
      
      private function loadAnimationHandler(param1:MovieClip) : void
      {
         this._taskMC = param1;
         if(BufferRecordManager.getMyState(BUFFER_ID) == true)
         {
            KTool.showMapPlayerAndMonster();
            this._taskMC.visible = false;
            (MapManager.currentMap.btnLevel["yakubuBtn"] as MovieClip).visible = true;
         }
         else
         {
            this._taskMC.visible = true;
            SocketConnection.send(1022,86063561);
            (MapManager.currentMap.btnLevel["yakubuBtn"] as MovieClip).visible = false;
            this._taskMC.gotoAndStop(6);
            this._taskMC.buttonMode = true;
            this._taskMC.addEventListener(MouseEvent.CLICK,this.onClickTaskmc);
         }
         this.addEvents();
      }
      
      private function onClickTaskmc(param1:Event) : void
      {
         var e:Event = param1;
         this._taskMC.removeEventListener(MouseEvent.CLICK,this.onClickTaskmc);
         this._taskMC.buttonMode = false;
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(this.stroyLine,function():void
         {
            _taskMC.visible = false;
            SocketConnection.send(1022,86063562);
            KTool.showMapAllPlayerAndMonster(true);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            (MapManager.currentMap.btnLevel["yakubuBtn"] as MovieClip).visible = true;
         });
      }
      
      private function addEvents() : void
      {
         MapListenerManager.add(MapManager.currentMap.btnLevel["yakubuBtn"],this.onClickHandler,"雅库布");
      }
      
      protected function onClickHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.YAKUBU,["这里是暗黑魔君索伦森的领地，我不会让你们随意骚扰我的主人！"],["索伦森的爪牙！让我领教一下你的实力！","对不起，我走错地方了！"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
            FightManager.fightWithBoss("雅库布",0);
            MainManager.isFighting = true;
         },function():void
         {
         }]);
      }
      
      private function onFightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var event:PetFightEvent = param1;
         MainManager.isFighting = false;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
         info = event.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            TaskDiaLogManager.single.playStory([new TaskMod(TaskDiaLogManager.DIALOG,NPC.YAKUBU,["想不到你有如此强大的实力！竟然可以战胜我刀锋刺客雅库布，你可以自由通行了！"],["记得继续保持哦！"])],function():void
            {
            });
         }
         else if(info.winnerID == 0)
         {
            NpcDialog.show(NPC.YAKUBU,["你没有战胜我，立刻离开这里，否则可别怪我不客气！"],["继续挑战你！","对不起，我马上就走！"],[function():void
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
               FightManager.fightWithBoss("雅库布",0);
               MainManager.isFighting = true;
            },function():void
            {
            }]);
         }
      }
      
      private function get stroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["艾利逊，第六星系中一定蕴藏着更加丰富的能源，这次我们一定不能让赛尔们又抢了先！"],["幸亏我们消息灵通……"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["这个你放心吧，我早就研制好了秘密武器，这次一定会给赛尔一个教训，让他们知道我们宇宙海盗的厉害！"],["什么秘密武器？"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["你可不要吹牛，艾利逊，是什么东西快拿出来我看看！"],["一定会让你大开眼界"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["看起来是个厉害的角色，不知道战斗力究竟怎么样……"],["我可是严格测试过的……"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["这个机械战士不仅结实耐用，而且防水防震，实在是居家旅行必备良品！"],["艾利逊你改行做销售了吗？"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["槽糕！又有意外状况，看来电路还不太稳定……"],["这就是你们海盗的厉害？"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["艾利逊你个笨蛋，怎么带着这个废物就来这里了……"],["这个是意外……一定是意外……"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["所以你们是来搞笑的吗？难道不知道这里是我的领地？"],["其实……我们是来找您合作的。"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["听说您正在谋划返回第六星系，我们宇宙海盗非常愿意成为您忠实的伙伴，用我们闯荡宇宙的丰富经验为您扫平道路！"],["可是我可不愿意与废物为伍。"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,4,"mc4"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["我就说我的研究成果很厉害吧！这才是真正的雅库布嘛！"],["这是你的研究成果？"]);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["他是依靠我注入的能量才能重生成为强者，你们只不过给了他一个残废的身躯，不信你看看他还记得你吗？"],["雅库布？"]);
         var _loc16_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,5,"mc5"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_];
      }
   }
}
