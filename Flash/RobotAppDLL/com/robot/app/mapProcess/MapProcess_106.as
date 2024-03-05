package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.games.GameStorageManager;
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.control.TaskController_735;
   import com.robot.app.task.control.TaskController_755;
   import com.robot.app.task.taskUtils.taskDialog.NpcTipDialog;
   import com.robot.app.task.taskscollection.Task735;
   import com.robot.app.task.taskscollection.Task755;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.task.CateInfo;
   import com.robot.core.info.task.DayTalkInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.Direction;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import flash.utils.getDefinitionByName;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_106 extends BaseMapProcess
   {
       
      
      private var fightMC:MovieClip;
      
      private var timer:Timer;
      
      private var type:uint;
      
      private var makeTa_btn:SimpleButton;
      
      private var ta_mc:MovieClip;
      
      private var shieldGame:AppModel;
      
      public function MapProcess_106()
      {
         super();
      }
      
      override protected function init() : void
      {
         var _loc2_:SimpleButton = null;
         this.fightMC = conLevel["fightMC"];
         this.makeTa_btn = conLevel["makeTa_btn"];
         this.ta_mc = conLevel["ta_mc"];
         this.ta_mc.gotoAndStop(1);
         this.ta_mc.visible = true;
         ToolTipManager.add(this.ta_mc,"防空塔");
         this.makeTa_btn.visible = false;
         var _loc1_:uint = 0;
         while(_loc1_ < 2)
         {
            _loc2_ = conLevel.getChildByName("btn_" + _loc1_) as SimpleButton;
            _loc2_.addEventListener(MouseEvent.CLICK,this.pull);
            _loc1_++;
         }
         if(TasksManager.getTaskStatus(307) == TasksManager.COMPLETE)
         {
            this.fightMC.mouseEnabled = true;
            conLevel["bossMC"].gotoAndStop(3);
         }
         else
         {
            this.fightMC.mouseEnabled = false;
            conLevel["bossMC"].gotoAndStop(1);
         }
         this.ta_mc.buttonMode = true;
         this.ta_mc.addEventListener(MouseEvent.CLICK,this.clickTaMcHandler);
         this.timer = new Timer(10 * 1000,1);
         this.timer.addEventListener(TimerEvent.TIMER,this.timerHandler);
         Task735.initTaskForMap106(this,true);
         Task755.initTaskForMap106(this,true);
         if(TasksManager.getTaskStatus(TaskController_735.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            Task735.initTaskForMap106(this);
            return;
         }
         if(TasksManager.getTaskStatus(TaskController_755.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            Task755.initTaskForMap106(this);
            return;
         }
      }
      
      private function clickTaMcHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86053874);
         MapManager.removeAppArrow();
         if(this.ta_mc.currentFrame != 2)
         {
            SocketConnection.addCmdListener(CommandID.JOIN_GAME,this.onBeginGame);
            SocketConnection.send(CommandID.JOIN_GAME,1);
         }
      }
      
      private function onBeginGame(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.JOIN_GAME,this.onBeginGame);
         if(!this.shieldGame)
         {
            this.shieldGame = new AppModel(ClientConfig.getGameModule("ShieldGame"),"正在防护塔游戏");
            this.shieldGame.setup();
         }
         this.shieldGame.show();
         GameStorageManager.freshLastGame(41007);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         DebugTrace.show(_loc3_ + "\t ok");
      }
      
      private function makeTaClickHandler(param1:MouseEvent) : void
      {
      }
      
      private function onWalk(param1:RobotEvent) : void
      {
         var _loc2_:String = null;
         MainManager.actorModel.sprite.removeEventListener(RobotEvent.WALK_START,this.onWalk);
         this.timer.stop();
         this.timer.reset();
         MainManager.actorModel.stop();
         MainManager.actorModel.scaleX = 1;
         if(this.type == 1)
         {
            _loc2_ = "豆豆果实";
         }
         else
         {
            _loc2_ = "纳格晶体";
         }
         Alarm.show("随便走动是无法挖到" + _loc2_ + "的!");
      }
      
      override public function destroy() : void
      {
         this.ta_mc.removeEventListener(MouseEvent.CLICK,this.clickTaMcHandler);
         this.ta_mc = null;
         this.makeTa_btn.removeEventListener(MouseEvent.CLICK,this.makeTaClickHandler);
         this.makeTa_btn = null;
         MainManager.actorModel.sprite.removeEventListener(RobotEvent.WALK_START,this.onWalk);
         this.fightMC = null;
         this.timer.stop();
         this.timer.removeEventListener(TimerEvent.TIMER,this.timerHandler);
         this.timer = null;
         Task735.destroy();
         Task755.destroy();
      }
      
      private function pull(param1:MouseEvent) : void
      {
         conLevel["bossMC"].nextFrame();
         if(conLevel["bossMC"].currentFrame == 3)
         {
            this.fightMC.mouseEnabled = true;
         }
      }
      
      public function fight() : void
      {
         if(MapManager.currentMap.id == 106)
         {
            getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
            FightBossController.fightBoss("纳多雷");
         }
      }
      
      public function hitDoor() : void
      {
         MapManager.changeMap(46);
      }
      
      public function catchMine2() : void
      {
         EnergyController.exploit(10);
      }
      
      public function catchMine() : void
      {
         EnergyController.exploit(11);
      }
      
      private function timerHandler(param1:TimerEvent) : void
      {
         MainManager.actorModel.sprite.removeEventListener(RobotEvent.WALK_START,this.onWalk);
         SocketConnection.addCmdListener(CommandID.TALK_CATE,this.onSuccess);
         if(this.type == 1)
         {
            SocketConnection.send(CommandID.TALK_CATE,11);
         }
         else
         {
            SocketConnection.send(CommandID.TALK_CATE,10);
         }
      }
      
      private function onSuccess(param1:SocketEvent) : void
      {
         var _loc5_:SharedObject = null;
         MainManager.actorModel.direction = Direction.DOWN;
         MainManager.actorModel.scaleX = 1;
         SocketConnection.removeCmdListener(CommandID.TALK_CATE,this.onSuccess);
         var _loc2_:DayTalkInfo = param1.data as DayTalkInfo;
         var _loc3_:CateInfo = _loc2_.outList[0];
         var _loc4_:String = String(ItemXMLInfo.getName(_loc3_.id));
         NpcTipDialog.show("看样子你采集到了" + _loc3_.count.toString() + "个" + _loc4_ + "。" + _loc4_ + "都已经放入你的储存箱里了。\n<font color=\'#FF0000\'> " + "   快去飞船动力室看看它有什么用</font>",null,NpcTipDialog.DOCTOR,-80);
         if(this.type == 1)
         {
            if(!(_loc5_ = SOManager.getUserSO(SOManager.MINE_400012)).data["isCatch"])
            {
               _loc5_.data["isCatch"] = true;
               SOManager.flush(_loc5_);
            }
         }
         else if(!(_loc5_ = SOManager.getUserSO(SOManager.MINE_400011)).data["isCatch"])
         {
            _loc5_.data["isCatch"] = true;
            SOManager.flush(_loc5_);
         }
      }
      
      private function checkCloth() : Boolean
      {
         var _loc1_:Boolean = true;
         if(this.type == 1)
         {
            if(MainManager.actorInfo.clothIDs.indexOf(100059) == -1 && MainManager.actorInfo.clothIDs.indexOf(100717) == -1)
            {
               _loc1_ = false;
               Alarm.show("你必须装备上" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(100059)) + "才能进行采集哦！");
            }
         }
         else if(MainManager.actorInfo.clothIDs.indexOf(100014) == -1 && MainManager.actorInfo.clothIDs.indexOf(100717) == -1)
         {
            _loc1_ = false;
            Alarm.show("你必须装备上" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(100014)) + "才能进行采集哦！");
         }
         return _loc1_;
      }
   }
}
