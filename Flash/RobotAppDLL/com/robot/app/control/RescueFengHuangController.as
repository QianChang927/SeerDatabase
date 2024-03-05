package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.manager.EventManager;
   
   public class RescueFengHuangController
   {
      
      private static var _instance:com.robot.app.control.RescueFengHuangController;
       
      
      private const BUFFER:uint = 912;
      
      public var fightNum:uint;
      
      private var _taskMc:MovieClip;
      
      private var _taskMC:MovieClip;
      
      public function RescueFengHuangController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app.control.RescueFengHuangController
      {
         return _instance = _instance || new com.robot.app.control.RescueFengHuangController();
      }
      
      public function start() : void
      {
         StoryLoaderManager.insatnce.swfName = "map_953_0";
         StoryLoaderManager.insatnce.setloaderHandler = this.loadAnimationAssert;
      }
      
      public function gameWin() : void
      {
         var mod:TaskMod;
         var mod2:TaskMod;
         SocketConnection.send(1022,86064952);
         if(this.fightNum >= 20)
         {
            Alarm.show("今天最多可挑战20次,明天再玩吧");
            return;
         }
         if(PetManager.isPackSpiriHavetHp == false)
         {
            Alarm.show("你背包里面的精灵体力都不够了哦！赶紧给它们补充体力吧！");
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.CLOSE_FIGHT_WAIT));
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.NO_PET_CAN_FIGHT));
            return;
         }
         mod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,8,"mc8"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["尽管来吧！还怕你不成！你这只兔子！"],["废话少说，看招！"]);
         TaskDiaLogManager.single.playStory([mod,mod2],function():void
         {
            FightManager.fightNoMapBoss("亚罗尔",117);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
            SocketConnection.mainSocket.addEventListener(SocketErrorEvent.ERROR,onError);
         });
      }
      
      public function gameLoss() : void
      {
         var mod:TaskMod;
         var mod2:TaskMod;
         SocketConnection.send(1022,86064953);
         if(this.fightNum >= 20)
         {
            Alarm.show("今天最多可挑战20次,明天再玩吧");
            return;
         }
         if(PetManager.isPackSpiriHavetHp == false)
         {
            Alarm.show("你背包里面的精灵体力都不够了哦！赶紧给它们补充体力吧！");
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.CLOSE_FIGHT_WAIT));
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.NO_PET_CAN_FIGHT));
            return;
         }
         mod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,9,"mc9"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["不管你变得多强大，我都不会惧怕你！我一定会解救凤凰之子的！"],["废话少说，看招！"]);
         TaskDiaLogManager.single.playStory([mod,mod2],function():void
         {
            FightManager.fightNoMapBoss("亚罗尔",118);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
            SocketConnection.mainSocket.addEventListener(SocketErrorEvent.ERROR,onError);
         });
      }
      
      private function onError(param1:SocketErrorEvent = null) : void
      {
         if(param1.headInfo.cmdID == 41129 && param1.headInfo.result == 10010)
         {
            this.addEvents();
         }
      }
      
      protected function onFightOverHandler(param1:PetFightEvent) : void
      {
         var fightWin1:TaskMod;
         var fightWin2:TaskMod;
         var fightLoss1:TaskMod;
         var taskArr:Array = null;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
         fightWin1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YALUOER,["哼！今天先饶过你们。记住，戈麦斯马上就会变得跟达芙妮一样！哈哈！"],["你们要做什么？"]);
         fightWin2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YALUOER,["击败我有什么嘛！有本事我们再来！菲格罗亚，你逃不出我的绳索！继续挑战吧！"],["太可恶了！"]);
         fightLoss1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YALUOER,["看着狂妄自大的凤凰一族无力还手的样子，可真是开心啊！哈哈哈！就凭你，还敢跟黄金天马对决！痴人说梦！"],["可恶！"]);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            taskArr = [fightWin1,fightWin2];
         }
         else
         {
            taskArr = [fightLoss1];
         }
         TaskDiaLogManager.single.playStory(taskArr,function():void
         {
            addEvents();
         });
      }
      
      private function loadAnimationAssert(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         this._taskMc = mc;
         if(BufferRecordManager.getMyState(this.BUFFER) == false)
         {
            KTool.hideMapAllPlayerAndMonster();
            SocketConnection.send(1022,86064946);
            TaskDiaLogManager.single.playStory(this.stroyLine,function():void
            {
               SocketConnection.send(41180,5);
               SocketConnection.send(1022,86064947);
               KTool.showMapAllPlayerAndMonster();
               BufferRecordManager.setMyState(BUFFER,true);
               addEvents();
            });
         }
         else
         {
            this.addEvents();
         }
      }
      
      private function addEvents() : void
      {
         this.taskMC.gotoAndStop(7);
         (this.taskMC["mc7"] as MovieClip).gotoAndStop((this.taskMC["mc7"] as MovieClip).totalFrames);
         (this.taskMC["mc7"]["attackBtn"] as MovieClip).buttonMode = true;
         (this.taskMC["mc7"]["yaluoerBtn"] as MovieClip).buttonMode = true;
         (this.taskMC["mc7"]["zenisenBtn"] as MovieClip).buttonMode = true;
         (this.taskMC["mc7"]["attackBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onAttackHandler);
         (this.taskMC["mc7"]["yaluoerBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onYaluoerHandler);
         (this.taskMC["mc7"]["zenisenBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onZenisenHandler);
      }
      
      protected function onZenisenHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86064949);
         NpcDialog.show(NPC.ZENISEN,[MainManager.actorInfo.formatNick + "！你能够在30秒内，按照轮盘旋转的提示，点击对应颜色的按钮吗？解救凤凰之子只有这个办法的！"],["点击凤凰之子！"]);
      }
      
      protected function onYaluoerHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86064950);
         NpcDialog.show(NPC.YALUOER,[MainManager.actorInfo.formatNick + "！你能够在30秒内，按照轮盘旋转的提示，点击对应颜色的按钮吗？解救凤凰之子只有这个办法的！"],["点击凤凰之子！"]);
      }
      
      protected function onAttackHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         SocketConnection.send(1022,86064948);
         NpcDialog.show(NPC.YALUOER,["想要救菲格罗亚，看你够不够快！你只有30秒的时间哦！只有按照我说的去做，你才能够通过！"],["解救凤凰之子","我还是放弃吧！"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("RescueFengHuangSonPanel"),"正在打开");
         }]);
      }
      
      private function get stroyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.FEIGELUOYA,["我已经完全恢复了！与黄金天马的对战即将展开，我需要好好的调整一下。"],["我们还是离开这里吧！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们不要打扰戈麦斯，他最近沉浸在悲伤的情绪中！我们让他静一静！"],["让我去开导他"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["竟然是你——第六星系的幻化使者，尼泽森！"],["这次你跑不掉了！"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.FEIGELUOYA,["你三番两次的招惹我！不给你点教训，你还真以为凤凰一族可以随便任人欺负！"],["你快走开！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZENISEN,["我们要找的是戈麦斯，不是你！别来凑热闹！ "],["想找戈麦斯，先过我这一关！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZENISEN,["明明一起来的，非得等到最后才出现！真以为自己是多大的明星嘛！"],["不是没被烤了嘛！"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YALUOER,["整天就知道变啊变，指望你，什么都干不了！"],["快放开我！"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YALUOER,["我们真的不是针对你。可惜你偏偏赶上了！既然是戈麦斯的朋友，那就一起解决吧！"],["主人是让我们一起解决他的朋友的！"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,4,"mc4"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,5,"mc5"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.FEIGELUOYA,["快放了我！否则，我要让你们尝一尝被火焚烧的滋味！"],["啧啧啧……"]);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YALUOER,["凤凰一族了不起哦！被我绑住了还能在这里逞能！有本事的话来烧我啊！"],["可恶！"]);
         var _loc16_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,6,"mc6"]);
         var _loc17_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YALUOER,["我的锁链曾经被创世之神加过祝福之能，除了我之外，别人除非用36种拼接才能解开。哈哈哈！"],["我们一定要救出菲格罗亚！"]);
         var _loc18_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YALUOER,["一定要快哦！不然菲格罗亚会慢慢地被绳索折磨的！哈哈哈！"],["可恶！"]);
         var _loc19_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,7,"mc7"]);
         var _loc20_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,[MainManager.actorInfo.formatNick + "！按照轮盘旋转的提示点击对应颜色的按钮，在30秒内完成，就能够挑战弱化的亚罗尔！解救凤凰之子！"],["点击凤凰之子！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_,_loc20_];
      }
      
      private function get taskMC() : MovieClip
      {
         return this._taskMc as MovieClip;
      }
   }
}
