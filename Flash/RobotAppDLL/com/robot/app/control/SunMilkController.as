package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class SunMilkController
   {
      
      public static const TASK_ID:uint = 1589;
      
      private static const DUDU_ID:uint = 1765;
      
      private static const BUF_ID:uint = 709;
      
      private static var _instance:com.robot.app.control.SunMilkController;
       
      
      private var curMap:BaseMapProcess;
      
      public function SunMilkController()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.control.SunMilkController
      {
         return _instance = _instance || new com.robot.app.control.SunMilkController();
      }
      
      public function startPro(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         this.curMap = map;
         if(BufferRecordManager.getMyState(BUF_ID))
         {
            KTool.showMapAllPlayerAndMonster();
            (this.curMap.conLevel["duduMC"] as MovieClip).visible = false;
            (this.curMap.conLevel["qiaokeliMC"] as MovieClip).visible = true;
            (this.curMap.conLevel["milkBtn"] as SimpleButton).visible = true;
            (this.curMap.conLevel["milkBoxMC"] as MovieClip).visible = true;
         }
         else
         {
            KTool.hideMapAllPlayerAndMonster();
            (this.curMap.conLevel["duduMC"] as MovieClip).visible = true;
            (this.curMap.conLevel["duduMC"] as MovieClip).buttonMode = true;
            (this.curMap.conLevel["qiaokeliMC"] as MovieClip).visible = false;
            (this.curMap.conLevel["milkBtn"] as SimpleButton).visible = false;
            (this.curMap.conLevel["milkBoxMC"] as MovieClip).visible = false;
         }
         (this.curMap.conLevel["qiaokeliMC"] as MovieClip).buttonMode = true;
         (this.curMap.conLevel["milkBoxMC"] as MovieClip).buttonMode = true;
         (this.curMap.conLevel["duduMC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onDuDuHandler);
         (this.curMap.conLevel["qiaokeliMC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onSayQKLHanlder);
         (this.curMap.conLevel["milkBoxMC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onPickMilkHandler);
         MapListenerManager.add(map.conLevel["milkBtn"],function():void
         {
            SocketConnection.send(1022,86059527);
            ModuleManager.showModule(ClientConfig.getAppModule("SunMilkPanel"));
         },"怀特星的牛奶嘉年华-光明嘟嘟的心愿");
      }
      
      public function playPreWarHandler() : void
      {
         var preStoryMode:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMc,6,"mc6"]);
         (this.curMap.conLevel["duduMC"] as MovieClip).visible = true;
         KTool.hideMapAllPlayerAndMonster();
         (this.curMap.conLevel["milkBtn"] as SimpleButton).mouseEnabled = false;
         TaskDiaLogManager.single.playStory([preStoryMode],function():void
         {
            (curMap.conLevel["duduMC"] as MovieClip).visible = false;
            KTool.showMapAllPlayerAndMonster();
            (curMap.conLevel["milkBtn"] as SimpleButton).mouseEnabled = true;
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightEndHandler);
            FightManager.fightWithBoss("光明嘟嘟",8);
            MainManager.isFighting = true;
         });
      }
      
      private function onFightEndHandler(param1:PetFightEvent) : void
      {
         var winMode:TaskMod;
         var loseMode:TaskMod;
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         MainManager.isFighting = false;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightEndHandler);
         (this.curMap.conLevel["duduMC"] as MovieClip).visible = true;
         winMode = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMc,7,"mc7"]);
         loseMode = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMc,8,"mc8"]);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            TaskDiaLogManager.single.playStory([winMode],this.endTaskHandler);
         }
         else if(info.winnerID == 0)
         {
            if(info.reason != 5)
            {
               TaskDiaLogManager.single.playStory([loseMode],function():void
               {
                  (curMap.conLevel["duduMC"] as MovieClip).visible = false;
               });
            }
         }
      }
      
      private function endTaskHandler() : void
      {
         (this.curMap.conLevel["duduMC"] as MovieClip).visible = false;
         TasksManager.accept(TASK_ID,function():void
         {
            TasksManager.complete(TASK_ID,0,function():void
            {
               TasksManager.setTaskStatus(TASK_ID,TasksManager.COMPLETE);
            });
         });
      }
      
      private function onPickMilkHandler(param1:MouseEvent) : void
      {
         var pickMode1:TaskMod = null;
         var pickMode2:TaskMod = null;
         var lossMode:TaskMod = null;
         var event:MouseEvent = param1;
         pickMode1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMc,5,"mc5"]);
         pickMode2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LALI,["哇！果然是美味的光明嘟嘟牛奶！快给我们多捞点吧！"],["嗯，看我的！"]);
         lossMode = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LALI,["骗人！这里面明明没有光明嘟嘟牛奶！"],["我再试试看！"]);
         SocketConnection.addCmdListener(CommandID.PICK_MILK,function(param1:SocketEvent):void
         {
            var data:uint;
            var e:SocketEvent = param1;
            (curMap.conLevel["milkBoxMC"] as MovieClip).visible = false;
            SocketConnection.removeCmdListener(CommandID.PICK_MILK,arguments.callee);
            data = (e.data as ByteArray).readUnsignedInt();
            if(data == 1)
            {
               (curMap.conLevel["duduMC"] as MovieClip).visible = true;
               KTool.hideMapAllPlayerAndMonster();
               TaskDiaLogManager.single.playStory([pickMode1,pickMode2],function():void
               {
                  Alarm.show("你获得了1盒光明嘟嘟牛奶！");
                  KTool.showMapAllPlayerAndMonster();
                  (curMap.conLevel["milkBoxMC"] as MovieClip).visible = true;
                  (curMap.conLevel["duduMC"] as MovieClip).visible = false;
               });
            }
            else if(data == 0)
            {
               (curMap.conLevel["duduMC"] as MovieClip).visible = true;
               TaskDiaLogManager.single.playStory([pickMode1,lossMode],function():void
               {
                  (curMap.conLevel["milkBoxMC"] as MovieClip).visible = true;
                  (curMap.conLevel["duduMC"] as MovieClip).visible = false;
                  Alarm.show("很遗憾这盒牛奶已经撒了，继续加油吧！");
               });
            }
         });
         SocketConnection.send(CommandID.PICK_MILK);
      }
      
      private function onSayQKLHanlder(param1:MouseEvent) : void
      {
         var mode:TaskMod = null;
         var e:MouseEvent = param1;
         (this.curMap.conLevel["qiaokeliMC"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onSayQKLHanlder);
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            mode = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QIAOKELI,["亲爱的小赛尔，现在线下购买嘟嘟奶一箱，就有机会参与活动获得超值大礼哦！各大商场超市都可以买到。"],["我知道了！"]);
         }
         else
         {
            mode = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QIAOKELI,["善良的小赛尔，你愿意帮助我们收集掉落在湖里的光明嘟嘟牛奶吗？"],["当然愿意！"]);
         }
         TaskDiaLogManager.single.playStory([mode],function():void
         {
            (curMap.conLevel["qiaokeliMC"] as MovieClip).addEventListener(MouseEvent.CLICK,onSayQKLHanlder);
         });
      }
      
      private function onDuDuHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86059525);
         (this.curMap.conLevel["duduMC"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onDuDuHandler);
         TaskDiaLogManager.single.playStory(this.taskList,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            BufferRecordManager.setMyState(BUF_ID,true);
            (curMap.conLevel["duduMC"] as MovieClip).visible = false;
            (curMap.conLevel["qiaokeliMC"] as MovieClip).visible = true;
            (curMap.conLevel["milkBoxMC"] as MovieClip).visible = true;
            (curMap.conLevel["milkBtn"] as SimpleButton).visible = true;
            SocketConnection.send(1022,86059526);
         });
      }
      
      private function get taskList() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LALI,["太好了，怀特星一年一度的牛奶嘉年华又到了，不知道今年嘟嘟会给我们带来什么样好喝的牛奶！"],["一定比去年更美味！"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QIAOKELI,["说到这个，今年嘟嘟怎么还没来呢，我们都在等着她的光明嘟嘟牛奶呢……"],["快看，她来了！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMc,2,"mc2"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DUDU,["可恶！半路被宇宙海盗偷袭了，光明嘟嘟牛奶呢？"],["好像都掉进湖里了……"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QIAOKELI,["嘟嘟，你没有受伤吧？"],["我还好，只是可惜了那些光明嘟嘟牛奶……"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMc,3,"mc3"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["老大，好像光明嘟嘟牛奶都不见了……"],["咦……对啊，去哪里了？"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DUDU,["你们这群强盗，休想抢走我们的光明嘟嘟牛奶！"],["哼，就会说大话。"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMc,4,"mc4"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DUDU,["这群强盗，如果我现在体力充沛，一定不放过他们！"],["嘟嘟你先好好休息吧！"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.QIAOKELI,["可惜今年我们喝不到光明嘟嘟牛奶了，呜呜呜……"],["别伤心，我还有办法。"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DUDU,["光明嘟嘟牛奶可没有这么容易损坏，只是掉进了湖里，趁海盗没注意我们再捞起来就可以了。"],["真的吗？我们快去！"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DUDU,["我现在需要好好休息，去找英勇善良的小赛尔们帮忙吧，他们一定会帮助你们的。"],["恩，我这就去找他们！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_];
      }
      
      public function get taskMc() : MovieClip
      {
         return this.curMap.conLevel["duduMC"] as MovieClip;
      }
      
      public function destroy() : void
      {
         (this.curMap.conLevel["duduMC"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onDuDuHandler);
         (this.curMap.conLevel["qiaokeliMC"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onSayQKLHanlder);
         (this.curMap.conLevel["milkBoxMC"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onPickMilkHandler);
         _instance = null;
      }
   }
}
