package com.robot.app2.task.control
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class TaskController_358
   {
      
      public static const BUFFER_RECORD_NUM:int = 681;
      
      private static var _map:BaseMapProcess;
       
      
      public function TaskController_358()
      {
         super();
      }
      
      public static function init() : void
      {
      }
      
      private static function startAttackBoss() : void
      {
         AnimateManager.playMcAnimate(taskMc,4,"mc4",function():void
         {
            MapListenerManager.add(_map.btnLevel["anniClick"],attackBossAnni,"安奈美");
         });
      }
      
      private static function attackBossAnni(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.ANNAIMEI,["这个不是我的...那个...你看见过我的小熊吗？"],["别疑神疑鬼的，接受我的挑战吧！","什么小熊，我没这个功夫帮你找！"],[function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            FightBossController.fightBoss("安奈美",6);
         },null]);
      }
      
      private static function onFightFinish(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.ANNAIMEI,["想不到你有如此强大的实力！！！刚刚非常感谢你的帮助，同时你已经通过战魔之女对你的考验了！"],["记得继续保持哦！"]);
         }
         else
         {
            NpcDialog.show(NPC.ANNAIMEI,["如果你不能战胜我，你就休想离开这里！快把我的小熊还给我！"],["继续挑战你！","不是我拿的！"],[function():void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
               FightBossController.fightBoss("安奈美",6);
            }]);
         }
      }
      
      public static function startTask_494(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(BufferRecordManager.getMyState(BUFFER_RECORD_NUM))
         {
            startAttackBoss();
            return;
         }
         AnimateManager.playMcAnimate(taskMc,1,"mc1",function():void
         {
            taskMc.gotoAndStop(6);
            MapListenerManager.add(_map.btnLevel["anniClick"],_clickMcHandler,"安奈美");
         });
      }
      
      private static function _clickMcHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         KTool.hideMapAllPlayerAndMonster();
         MapListenerManager.remove(_map.btnLevel["anniClick"],false);
         TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
         {
            BufferRecordManager.setMyState(BUFFER_RECORD_NUM,true);
            startAttackBoss();
            KTool.showMapAllPlayerAndMonster();
         });
      }
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc2_:Array = null;
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc6_:TaskMod = null;
         var _loc7_:TaskMod = null;
         var _loc8_:TaskMod = null;
         var _loc9_:TaskMod = null;
         var _loc10_:TaskMod = null;
         var _loc11_:TaskMod = null;
         var _loc12_:TaskMod = null;
         var _loc13_:TaskMod = null;
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANNAIMEI,["有谁看到我的小熊吗？它是我最好的伙伴，现在它不见了，我很伤心！"],["发生什么了，我能帮助你吗？"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON_20111027,["大哥…快看…有人在那里求救，我们是不是要过去帮忙啊！"],["你是白痴吗？我们是无恶不作的海盗！"]);
               _loc6_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG_20111027,["比特大人叫我们寻找迪恩的下落，既然没有找到，抓个俘虏回去也算是有个交代了！"],["老大果然聪明绝顶啊！"]);
               _loc7_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["就凭你们也想找到迪恩，先过了我这关再说吧！"],["兄弟们…给我上！！！"]);
               _loc8_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
               _loc9_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你们这群败类，你们快放开我！"],["老大…我们有新发现！"]);
               _loc10_ = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["task358_1",true]);
               _loc11_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["这女的好可怕啊！想不到她手上的玩具小熊居然可以变成精灵！"],["太神奇了！"]);
               _loc12_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANNAIMEI,["我的小熊又不见了，你能帮我找找吗？"],["这家伙怎么疯疯癫癫的！"]);
               _loc13_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["让我来看看你究竟是谁，而你手上的小熊玩具到底是不是这么强大！"],["我一定要战胜你！"]);
               _loc2_ = new Array(_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_);
         }
         return _loc2_;
      }
      
      private static function get taskMc() : MovieClip
      {
         if(_map == null)
         {
            return null;
         }
         return _map.animatorLevel["taskMc"];
      }
   }
}
