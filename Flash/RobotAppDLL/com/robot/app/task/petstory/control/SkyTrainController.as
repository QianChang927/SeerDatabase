package com.robot.app.task.petstory.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.RobotModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcInfo;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.Direction;
   import com.robot.core.utils.UserState;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SkyTrainController
   {
      
      private static var _instance:com.robot.app.task.petstory.control.SkyTrainController;
       
      
      public var _curtLayer:uint = 1;
      
      private var _map:BaseMapProcess;
      
      private var _eqList:Array;
      
      private var _nameList:Array;
      
      public var petTimeList:Array;
      
      public function SkyTrainController(param1:PrivateClass)
      {
         this._eqList = [null,[100448,100449,100450,100451,100452],[100453,100454,100455,100456,100457],[100458,100459,100460,100461,100462],[100484,100485,100486,100487,100488],[100489,100490,100491,100492,100493]];
         this._nameList = [null,"龙炎","天命","不灭","无双","大帝"];
         super();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.control.SkyTrainController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.control.SkyTrainController(new PrivateClass());
         }
         return _instance;
      }
      
      public function init(param1:BaseMapProcess) : void
      {
         this._map = param1;
         (this._map.conLevel["petMC"] as MovieClip).visible = false;
         (this._map.btnLevel["clickBtn"] as SimpleButton).visible = false;
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         (this._map.topLevel["titleMC"] as MovieClip).visible = false;
         if(MainManager.actorPrevState == UserState.FIGHT)
         {
            return;
         }
         this.checkLayer();
      }
      
      private function checkLayer() : void
      {
         if(this._curtLayer == 6)
         {
            (this._map.conLevel["petMC"] as MovieClip).visible = true;
            KTool.getFrameMc(this._map.conLevel["petMC"] as MovieClip,1,"",function(param1:DisplayObject):void
            {
               var o:DisplayObject = param1;
               var mc:MovieClip = o as MovieClip;
               AnimateManager.playMcAnimate(mc,1,"",function():void
               {
                  (_map.conLevel["petMC"] as MovieClip).visible = false;
                  playeTitle();
                  createBoss();
               });
            });
         }
         else
         {
            this.playeTitle();
            this.start();
         }
         this.petFollow();
      }
      
      private function petFollow() : void
      {
         PetManager.showPet(this.petTimeList[this._curtLayer - 1]);
      }
      
      private function playeTitle() : void
      {
         var frame:uint;
         (this._map.topLevel["titleMC"] as MovieClip).visible = true;
         frame = uint(this._curtLayer + 1);
         (this._map.topLevel["titleMC"]["numMC"] as MovieClip).gotoAndStop(frame);
         AnimateManager.playMcAnimate(this._map.topLevel["titleMC"] as MovieClip,1,"",function():void
         {
            (_map.topLevel["titleMC"] as MovieClip).visible = false;
         });
      }
      
      private function createBoss() : void
      {
         var petId:uint = 0;
         petId = 950;
         ResourceManager.getResource(ClientConfig.getPetSwfPath(petId),function(param1:DisplayObject):void
         {
            var _loc2_:MovieClip = param1 as MovieClip;
            (_loc2_.getChildAt(0) as MovieClip).gotoAndStop(1);
            ToolTipManager.add(_loc2_,PetXMLInfo.getName(petId));
            _loc2_.buttonMode = true;
            _loc2_.scaleX = _loc2_.scaleY = 1.5;
            _loc2_.addEventListener(MouseEvent.CLICK,onMouseRobot);
            _loc2_.x = 768;
            _loc2_.y = 450;
            _map.depthLevel.addChild(_loc2_);
         },"pet");
      }
      
      private function start() : void
      {
         this.createNPC();
      }
      
      private function createNPC() : void
      {
         var _loc1_:Array = ["离开这里！","这里不是你该来的地方！","我不会输给你的!","弱小的对手！","我只使出七分力！"];
         var _loc2_:NpcInfo = new NpcInfo();
         _loc2_.dir = Direction.LEFT;
         _loc2_.npcName = this._nameList[this._curtLayer];
         _loc2_.clothIds = this._eqList[this._curtLayer];
         _loc2_.point = new Point(768,450);
         var _loc3_:RobotModel = new RobotModel(_loc2_,_loc1_);
         DisplayUtil.stopAllMovieClip(_loc3_.skeleton.getBodyMC());
         _loc3_.showDialog(null);
         (this._map.btnLevel["clickBtn"] as SimpleButton).visible = true;
         ToolTipManager.add(this._map.btnLevel["clickBtn"] as SimpleButton,"点击挑战" + this._nameList[this._curtLayer]);
         (this._map.btnLevel["clickBtn"] as SimpleButton).addEventListener(MouseEvent.CLICK,this.onMouseRobot);
      }
      
      private function onMouseRobot(param1:MouseEvent) : void
      {
         SocketConnection.send(CommandID.FIGHT_SKY_TRAIN);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
      }
      
      private function onAlarmClickHandler(param1:PetFightEvent) : void
      {
         var event:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         if((event.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            if(this._curtLayer == 6)
            {
               (this._map.conLevel["petMC"] as MovieClip).visible = true;
               KTool.getFrameMc(this._map.conLevel["petMC"] as MovieClip,2,"",function(param1:DisplayObject):void
               {
                  var o:DisplayObject = param1;
                  var mc:MovieClip = o as MovieClip;
                  AnimateManager.playMcAnimate(mc,1,"",function():void
                  {
                     SocketConnection.addCmdListener(CommandID.AWARD_GIFT_SKY_TRAIN,onAward);
                     SocketConnection.send(CommandID.AWARD_GIFT_SKY_TRAIN);
                  });
               });
            }
            else
            {
               KTool.getFrameMc(this._map.conLevel["doorMC"] as MovieClip,2,"",function(param1:DisplayObject):void
               {
                  var mc:MovieClip = null;
                  var o:DisplayObject = param1;
                  mc = o as MovieClip;
                  AnimateManager.playMcAnimate(mc,1,"",function():void
                  {
                     mc.gotoAndStop(mc.totalFrames);
                     (_map.conLevel["doorMC"] as MovieClip).buttonMode = true;
                     (_map.conLevel["doorMC"] as MovieClip).addEventListener(MouseEvent.CLICK,onDoor);
                     ToolTipManager.add(_map.conLevel["doorMC"] as MovieClip,"进入下一节");
                  });
               });
            }
         }
         else
         {
            this.leaveGame();
         }
      }
      
      public function leaveGame() : void
      {
         SocketConnection.addCmdListener(CommandID.LEAVE_SKY_TRAIN,this.onLeave);
         SocketConnection.send(CommandID.LEAVE_SKY_TRAIN);
      }
      
      private function onAward(param1:SocketEvent) : void
      {
         (this._map.conLevel["petMC"] as MovieClip).visible = false;
         SocketConnection.removeCmdListener(CommandID.AWARD_GIFT_SKY_TRAIN,this.onAward);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            Alarm.show("礼盒是空的,请再接再厉啦！");
         }
         this.leaveGame();
      }
      
      private function onLeave(param1:SocketEvent) : void
      {
         var ba:ByteArray;
         var exp:int;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.LEAVE_SKY_TRAIN,this.onLeave);
         ba = e.data as ByteArray;
         exp = int(ba.readUnsignedInt());
         if(exp > 0)
         {
            Alarm.show("本次挑战累计获得经验：" + exp,function():void
            {
               MapManager.changeMap(14);
            });
         }
         else
         {
            MapManager.changeMap(14);
         }
         PetManager.hidePet();
      }
      
      private function onDoor(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(838,466),function():void
         {
            ++_curtLayer;
            MapManager.changeLocalMap(10056);
         });
      }
      
      public function destroy() : void
      {
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
      }
   }
}

class PrivateClass
{
    
   
   public function PrivateClass()
   {
      super();
   }
}
