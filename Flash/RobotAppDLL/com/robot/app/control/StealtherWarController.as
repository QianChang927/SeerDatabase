package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.StoryLoaderManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.BonusEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.BonusInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class StealtherWarController
   {
      
      protected static var _instance:com.robot.app.control.StealtherWarController;
       
      
      protected var dailyValue:uint;
      
      private var _taskMC:MovieClip;
      
      private var BUFFER:uint = 967;
      
      private var _itemNum:uint;
      
      public function StealtherWarController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app.control.StealtherWarController
      {
         return _instance = _instance || new com.robot.app.control.StealtherWarController();
      }
      
      public function start() : void
      {
         SocketConnection.send(1022,86066522);
         MapManager.currentMap.controlLevel.visible = false;
         StoryLoaderManager.insatnce.swfName = "map_961_0";
         StoryLoaderManager.insatnce.setloaderHandler = this.getStoryMCHanlder;
         this.upDateGetFiveItems();
         SocketConnection.sendWithCallback(CommandID.GET_DAILY_VALUE,this.getChuangDailyHandler,13014);
      }
      
      protected function getChuangDailyHandler(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         this.dailyValue = _loc2_.readUnsignedInt();
      }
      
      protected function upDateGetFiveItems() : void
      {
         ItemManager.upDateCollection(1700366,function():void
         {
            var _loc1_:SingleItemInfo = ItemManager.getInfo(1700366);
            _itemNum = _loc1_ == null ? 0 : uint(_loc1_.itemNum);
         });
      }
      
      public function fightSimpleBoss() : void
      {
         FightManager.fightWithBoss("海盗",0);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightSimplePirateHandler);
      }
      
      public function fightHardBoss() : void
      {
         FightManager.fightWithBossAndDelItem("维泽博",1);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightHardPirateHandler);
      }
      
      protected function onFightHardPirateHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightHardPirateHandler);
         this.upDateGetFiveItems();
         SocketConnection.sendWithCallback(CommandID.GET_DAILY_VALUE,this.getChuangDailyHandler,13014);
      }
      
      protected function onFightSimplePirateHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightSimplePirateHandler);
         this.upDateGetFiveItems();
      }
      
      private function getStoryMCHanlder(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         this._taskMC = mc;
         MapManager.currentMap.controlLevel.visible = true;
         this._taskMC.visible = false;
         MapManager.currentMap.controlLevel.addChildAt(this._taskMC,0);
         if(BufferRecordManager.getMyState(this.BUFFER) == false)
         {
            if(Boolean(JueShaTaskController.curTask) && JueShaTaskController.curTask.type == 3)
            {
               CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
            }
            else
            {
               CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,500,370);
            }
            (MapManager.currentMap.controlLevel["yingxingxiaBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               SocketConnection.send(1022,86066523);
               CommonUI.removeYellowArrow(MapManager.currentMap.controlLevel);
               (MapManager.currentMap.controlLevel["yingxingxiaBtn"] as MovieClip).removeEventListener(MouseEvent.CLICK,arguments.callee);
               _taskMC.visible = true;
               startPreStroy();
            });
         }
         else
         {
            this._taskMC.visible = true;
            MapManager.currentMap.controlLevel.visible = true;
            this._taskMC.gotoAndStop(5);
            (MapManager.currentMap.controlLevel["yingxingxiaBtn"] as MovieClip).visible = true;
            CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,530,230,30);
            this.addEvents();
         }
      }
      
      private function startPreStroy() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(this.stroyPreLine,function():void
         {
            BufferRecordManager.setMyState(BUFFER,true);
            (MapManager.currentMap.controlLevel["yingxingxiaBtn"] as MovieClip).visible = true;
            KTool.showMapAllPlayerAndMonster();
            _taskMC.gotoAndStop(5);
            addEvents();
            CommonUI.addYellowArrow(MapManager.currentMap.controlLevel,530,230,30);
            SocketConnection.send(1022,86066524);
         });
      }
      
      private function get stroyPreLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["这……这是哪里啊？好晕啊！发……发生了什么事情？"],["是隐形侠！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["隐形侠? "],["是的！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUOMULUO,["泰坦四煞中拥有隐形技能的隐形侠！来去无踪！有他在，创世神兵回到第六星系就遥遥无期了！ "],["啊？他在哪里？"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["哈哈哈！你这个小笨蛋怎么可能看得到隐形侠大人呢！ "],["可恶！"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,2,"mc2"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["怎么办？你也受伤了！其他创世神兵呢？ "],["我们走散了！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUOMULUO,["维泽博背后偷袭我。还派海盗集团趁机掠夺五峰山崖的五峰精华！ "],["太可恶了！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUOMULUO,["维泽博千方百计的想拿走五峰精华，一定是因为五峰精华能够让维泽博现出原形！ "],["胡说！"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,3,"mc3"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["可恶！背后偷袭！算什么正人君子！有本事跟我对决？ "],["看来是真的！"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUOMULUO,["只要战胜海盗拿到0xff00005颗五峰精华0xffffff，点击树桩，就能够让维泽博背现出原形！ "],["我知道了！"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUOMULUO,["一定要快！如果让维泽博拿到五峰精华，后果就不堪设想了！ "],["我一定会击败他！"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,4,"mc4"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_];
      }
      
      private function addEvents() : void
      {
         (MapManager.currentMap.controlLevel["yingxingxiaBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onOpenModuelHandler,false,0,true);
         (MapManager.currentMap.controlLevel["pirateBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onPirateBtnHandler,false,0,true);
         (MapManager.currentMap.controlLevel["woodBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onWoodHandler,false,0,true);
         (MapManager.currentMap.controlLevel["pirateBtn"] as MovieClip).buttonMode = true;
         (MapManager.currentMap.controlLevel["woodBtn"] as MovieClip).buttonMode = true;
         EventManager.addEventListener(BonusEvent.BONUS_RECEIVE,this.onBonusHandler);
      }
      
      private function onBonusHandler(param1:BonusEvent) : void
      {
         var _loc4_:Object = null;
         var _loc2_:BonusInfo = param1.info;
         var _loc3_:Array = _loc2_.itemList;
         var _loc5_:int = 0;
         var _loc6_:* = _loc3_;
         for each(_loc4_ in _loc6_)
         {
            if(_loc4_.id == 400300)
            {
               Alarm.show("恭喜你获得了维泽博的精元！多次挑战，奖励更丰厚哦！");
            }
            else if(_loc4_.id == 400064 || _loc4_.id == 300014 || _loc4_.id == 300003)
            {
               Alarm.show("你获得了维泽博逃跑时丢下的奖励，战胜维泽博5次必定可以获得他的精元！");
            }
         }
      }
      
      private function removeEvents() : void
      {
         (MapManager.currentMap.controlLevel["yingxingxiaBtn"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onOpenModuelHandler);
         (MapManager.currentMap.controlLevel["pirateBtn"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onPirateBtnHandler);
         (MapManager.currentMap.controlLevel["woodBtn"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onWoodHandler);
         (MapManager.currentMap.controlLevel["pirateBtn"] as MovieClip).buttonMode = false;
         (MapManager.currentMap.controlLevel["woodBtn"] as MovieClip).buttonMode = false;
         EventManager.removeEventListener(BonusEvent.BONUS_RECEIVE,this.onBonusHandler);
      }
      
      private function onWoodHandler(param1:MouseEvent) : void
      {
         var md123456:TaskMod;
         var event:MouseEvent = param1;
         SocketConnection.send(1022,86066527);
         if(this.dailyValue >= 20)
         {
            Alarm.show("本日挑战次数已达上限，请明日再来！");
            return;
         }
         md123456 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMC,6,"mc6"]);
         if(this._itemNum < 5)
         {
            Alert.show("五峰精华不足，快去与海盗战斗吧！",function():void
            {
               fightSimpleBoss();
            });
         }
         else
         {
            KTool.hideMapAllPlayerAndMonster();
            TaskDiaLogManager.single.playStory([md123456],function():void
            {
               KTool.showMapAllPlayerAndMonster();
               fightHardBoss();
            });
         }
      }
      
      protected function onPirateBtnHandler(param1:MouseEvent) : void
      {
         this.fightSimpleBoss();
         SocketConnection.send(1022,86066526);
      }
      
      private function onOpenModuelHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86066525);
         ModuleManager.showModule(ClientConfig.getAppModule("StealtherWarPanel"));
      }
      
      private function get taskMC() : MovieClip
      {
         return this._taskMC as MovieClip;
      }
   }
}
