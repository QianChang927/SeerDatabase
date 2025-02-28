package com.robot.app.mapProcess.control.mysteryHole
{
   import com.robot.app.mapProcess.MapProcess_10001;
   import com.robot.app.mapProcess.MapProcess_10002;
   import com.robot.app.mapProcess.MapProcess_10003;
   import com.robot.app.mapProcess.MapProcess_10004;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MysteryHoleControl
   {
       
      
      public var itemLayer:MovieClip;
      
      public var mapID:int;
      
      public var mysteryHoleBeen:MysteryHoleBeen;
      
      public var mysteryHoleConfig:MysteryHoleConfig;
      
      private var frontEffect:MovieClip;
      
      public const BOXDISTANCE:uint = 55;
      
      public const FRONTDISTANCE:uint = 60;
      
      public const KEYDISTANCE:uint = 60;
      
      public const LOCKDISTANCE:uint = 90;
      
      public const MONSTERDISTANCE:uint = 60;
      
      public const GEARDISTANCE:uint = 50;
      
      public const CHAINDISTANCE:uint = 50;
      
      private var overItemArr:Array;
      
      private var pirateMc:MovieClip;
      
      private var boxMc:MovieClip;
      
      private var frontMc:MovieClip;
      
      private var keyMc:MovieClip;
      
      private var lockMc:MovieClip;
      
      private var gearMc:MovieClip;
      
      private var chainMc:MovieClip;
      
      private var keyNumArr:Array;
      
      private var lockIsOpenArr:Array;
      
      private var gearNumArr:Array;
      
      private var chainIsOpenArr:Array;
      
      private var showMonsterId:int;
      
      private var showMonsterDirection:String;
      
      private var depthLevel:MovieClip;
      
      public function MysteryHoleControl()
      {
         super();
         this.overItemArr = new Array();
         this.keyNumArr = new Array();
         this.lockIsOpenArr = new Array();
         this.gearNumArr = new Array();
         this.chainIsOpenArr = new Array();
      }
      
      public function getMonster(param1:int) : void
      {
         this.depthLevel = MapManager.currentMap.depthLevel as MovieClip;
         if(param1 == 0)
         {
            SocketConnection.addCmdListener(CommandID.MYSTERYHOLE_DATA,this.onGetData);
            SocketConnection.send(CommandID.MYSTERYHOLE_DATA);
         }
         else if(param1 == 1)
         {
            if(this.showMonsterId != 0)
            {
               this.addMonsterbyMap();
            }
         }
      }
      
      private function onGetData(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.MYSTERYHOLE_DATA,this.onGetData);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            this.showMonsterId = _loc2_.readUnsignedInt();
            _loc4_++;
         }
         if(this.showMonsterId != 0)
         {
            if(MapManager.currentMap.id == 10002)
            {
               this.showMonsterDirection = "left";
            }
            else if(MapManager.currentMap.id == 10003)
            {
               this.showMonsterDirection = "right";
            }
            this.addMonsterbyMap();
         }
      }
      
      private function addMonsterbyMap() : void
      {
         ResourceManager.getResource(ClientConfig.getPetSwfPath(this.showMonsterId),this.addFun,"pet");
      }
      
      private function addFun(param1:DisplayObject) : void
      {
         var _loc2_:MovieClip = param1 as MovieClip;
         if(_loc2_)
         {
            DisplayUtil.stopAllMovieClip(_loc2_);
            (_loc2_ as MovieClip).gotoAndStop(this.showMonsterDirection);
            if(_loc2_.width > _loc2_.height)
            {
               _loc2_.scaleX = _loc2_.scaleY = 50 / _loc2_.width;
            }
            else
            {
               _loc2_.scaleX = _loc2_.scaleY = 50 / _loc2_.height;
            }
            this.depthLevel.showMonster.showmc.addChild(_loc2_);
            this.depthLevel.showMonster.buttonMode = true;
            this.depthLevel.showMonster.addEventListener(MouseEvent.CLICK,this.onShowMonster);
         }
      }
      
      private function onShowMonster(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:Boolean = this.chackEffectDistance(_loc2_);
         if(_loc3_)
         {
            this.depthLevel.showMonster.buttonMode = false;
            this.depthLevel.showMonster.removeEventListener(MouseEvent.CLICK,this.onShowMonster);
            SocketConnection.addCmdListener(CommandID.MYSTERYHOLE_PK,this.onJoinPK);
            SocketConnection.send(CommandID.MYSTERYHOLE_PK,34);
            this.depthLevel.removeChild(_loc2_);
            this.overItemArr.push(_loc2_.name);
         }
      }
      
      public function queryPirate(param1:int, param2:MovieClip, param3:int) : void
      {
         this.mapID = param1;
         this.itemLayer = param2;
         this.frontEffect = MapManager.currentMap.libManager.getMovieClip("effectMc");
         this.setupData();
      }
      
      private function setupData() : void
      {
         this.mysteryHoleConfig = new MysteryHoleConfig();
         this.mysteryHoleBeen = new MysteryHoleBeen();
         this.mysteryHoleBeen.theMapPirateCount = this.mysteryHoleConfig.mysteryHoleObj[this.mapID].pirateCount;
         this.mysteryHoleBeen.theMapBoxCount = this.mysteryHoleConfig.mysteryHoleObj[this.mapID].boxCount;
         this.mysteryHoleBeen.theMapFrontCount = this.mysteryHoleConfig.mysteryHoleObj[this.mapID].frontCount;
         this.mysteryHoleBeen.theMapPirateList = this.mysteryHoleConfig.mysteryHoleObj[this.mapID].pirateList;
         this.mysteryHoleBeen.theMapPirateQuestionList = this.mysteryHoleConfig.mysteryHoleObj[this.mapID].pirateQuestionList;
         this.mysteryHoleBeen.theMapBossQuestionList = this.mysteryHoleConfig.mysteryHoleObj[this.mapID].bossQuestionList;
         this.mysteryHoleBeen.theMapBossAnswerList = this.mysteryHoleConfig.mysteryHoleObj[this.mapID].bossAnswerList;
         this.addEventByItems();
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
      }
      
      private function addEventByItems() : void
      {
         var _loc3_:* = undefined;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc1_:uint = uint(this.itemLayer.numChildren);
         var _loc2_:int = int(_loc1_ - 1);
         while(_loc2_ >= 0)
         {
            _loc3_ = this.itemLayer.getChildAt(_loc2_);
            if((_loc5_ = (_loc4_ = String(_loc3_.name)).split("_"))[0] == "Box")
            {
               this.addEventByBox(_loc3_);
            }
            else if(_loc5_[0] == "Front")
            {
               this.addEventByFront(_loc3_);
            }
            else if(_loc5_[0] == "Pirate")
            {
               _loc3_.mouseChildren = false;
               _loc3_.mouseEnabled = false;
            }
            else if(_loc5_[0] == "Key")
            {
               this.addEventByKey(_loc3_);
            }
            else if(_loc5_[0] == "Lock")
            {
               this.addEventByLock(_loc3_);
            }
            else if(_loc5_[0] == "Gear")
            {
               this.addEventByGear(_loc3_);
            }
            else if(_loc5_[0] == "Chain")
            {
               this.addEventByChain(_loc3_);
            }
            else if(_loc5_[0] == "GearHit")
            {
               _loc3_.mouseChildren = false;
               _loc3_.mouseEnabled = false;
            }
            _loc2_--;
         }
      }
      
      private function onWalk(param1:Event) : void
      {
         var _loc4_:* = undefined;
         var _loc5_:String = null;
         var _loc6_:Array = null;
         var _loc2_:uint = uint(this.itemLayer.numChildren);
         var _loc3_:int = int(_loc2_ - 1);
         while(_loc3_ >= 0)
         {
            if((_loc6_ = (_loc5_ = String((_loc4_ = this.itemLayer.getChildAt(_loc3_)).name)).split("_"))[0] == "Pirate" && _loc4_.hitTestPoint(MainManager.actorModel.sprite.x,MainManager.actorModel.sprite.y,true) && this.overItemArr.indexOf(_loc5_) == -1)
            {
               this.seerIsMove(false);
               DebugTrace.show("触发事件：" + _loc5_);
               this.pirateMc = _loc4_;
               this.pirateMc.addEventListener(Event.ENTER_FRAME,this.onItemHead);
               this.pirateMc.gotoAndStop(2);
            }
            _loc3_--;
         }
      }
      
      private function onItemHead(param1:Event) : void
      {
         var randomSayIndex:int = 0;
         var pirateNPCSay:String = null;
         var pirateNPCShowId:uint = 0;
         var pirateServerType:int = 0;
         var evt:Event = param1;
         var itemName:String = String(evt.currentTarget.name);
         var itemArr:Array = itemName.split("_");
         var pirateType:int = int(this.mysteryHoleBeen.theMapPirateList[itemArr[1]].type);
         if(evt.currentTarget.currentFrame == 2 && evt.currentTarget.getChildAt(1).currentFrame == evt.currentTarget.getChildAt(1).totalFrames)
         {
            this.pirateMc.removeEventListener(Event.ENTER_FRAME,this.onItemHead);
            randomSayIndex = Math.random() * this.mysteryHoleBeen.theMapPirateQuestionList.length;
            pirateNPCSay = String(this.mysteryHoleBeen.theMapPirateQuestionList[randomSayIndex]);
            pirateNPCShowId = 739;
            pirateServerType = 32;
            if(pirateType == 1)
            {
               pirateServerType = 33;
               SocketConnection.addCmdListener(CommandID.MYSTERYHOLE_PK,this.onJoinPK);
               mapBoss.getInstance().PKBOSS(this.mapID,pirateType,pirateServerType);
            }
            else if(pirateType == 2)
            {
               pirateServerType = 33;
               SocketConnection.addCmdListener(CommandID.MYSTERYHOLE_PK,this.onJoinPK);
               mapBoss.getInstance().PKBOSS(this.mapID,pirateType,pirateServerType);
            }
            else if(pirateType == 0)
            {
               NpcDialog.show(pirateNPCShowId,[pirateNPCSay],null,null,false,function():void
               {
                  SocketConnection.addCmdListener(CommandID.MYSTERYHOLE_PK,onJoinPK);
                  SocketConnection.send(CommandID.MYSTERYHOLE_PK,pirateServerType);
               });
            }
         }
         else if(evt.currentTarget.currentFrame == 3 && evt.currentTarget.getChildAt(1) != null && evt.currentTarget.getChildAt(1).currentFrame == evt.currentTarget.getChildAt(1).totalFrames)
         {
            this.pirateMc.removeEventListener(Event.ENTER_FRAME,this.onItemHead);
            this.removeoverItemArr();
         }
         else if(evt.currentTarget.currentFrame == 4)
         {
            this.pirateMc.removeEventListener(Event.ENTER_FRAME,this.onItemHead);
            if(pirateType == 2)
            {
               mapBoss.getInstance().addEventListener(mapBoss.MONSTEROVER630,this.onMONSTEROVER630);
               mapBoss.getInstance().monsterSayOver();
            }
         }
      }
      
      private function onMONSTEROVER630(param1:Event) : void
      {
         mapBoss.getInstance().removeEventListener(mapBoss.MONSTEROVER630,this.onMONSTEROVER630);
         this.removeoverItemArr();
         var _loc2_:int = int(this.mysteryHoleConfig.mysteryHoleObj.lastMapGoExit);
         if(_loc2_ != 0 && this.mapID == _loc2_)
         {
            this.onClickBtn();
         }
      }
      
      private function removeoverItemArr() : void
      {
         var _loc1_:MovieClip = null;
         var _loc6_:String = null;
         var _loc7_:String = null;
         var _loc2_:int = 0;
         while(_loc2_ < this.overItemArr.length)
         {
            _loc1_ = this.itemLayer[this.overItemArr[_loc2_]];
            DisplayUtil.removeForParent(_loc1_);
            _loc2_++;
         }
         var _loc3_:MovieClip = MapManager.currentMap.typeLevel as MovieClip;
         var _loc4_:int = 0;
         while(_loc4_ < this.lockIsOpenArr.length)
         {
            _loc6_ = "LockMap" + this.lockIsOpenArr[_loc4_];
            this.itemLayer["Lock_" + this.lockIsOpenArr[_loc4_]].mouseChildren = false;
            this.itemLayer["Lock_" + this.lockIsOpenArr[_loc4_]].mouseEnabled = false;
            this.itemLayer["Lock_" + this.lockIsOpenArr[_loc4_]].gotoAndStop(3);
            _loc1_ = _loc3_[_loc6_];
            DisplayUtil.removeForParent(_loc1_);
            _loc4_++;
         }
         var _loc5_:int = 0;
         while(_loc5_ < this.chainIsOpenArr.length)
         {
            _loc7_ = "GearMap" + this.chainIsOpenArr[_loc5_];
            this.itemLayer["Gear_" + this.chainIsOpenArr[_loc5_]].mouseChildren = false;
            this.itemLayer["Gear_" + this.chainIsOpenArr[_loc5_]].mouseEnabled = false;
            this.itemLayer["Chain_" + this.chainIsOpenArr[_loc5_]].mouseChildren = false;
            this.itemLayer["Chain_" + this.chainIsOpenArr[_loc5_]].mouseEnabled = false;
            this.itemLayer["Gear_" + this.chainIsOpenArr[_loc5_]].gotoAndStop(3);
            this.itemLayer["Chain_" + this.chainIsOpenArr[_loc5_]].gotoAndStop(3);
            _loc1_ = _loc3_[_loc7_];
            DisplayUtil.removeForParent(_loc1_);
            _loc5_++;
         }
         if(this.chainIsOpenArr.length > 0 || this.lockIsOpenArr.length > 0)
         {
            MapManager.currentMap.makeMapArray();
         }
         this.seerIsMove(true);
      }
      
      private function onJoinPK(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.MYSTERYHOLE_PK,this.onJoinPK);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOver);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,this.onCatch_Pet);
      }
      
      private function onCatch_Pet(param1:PetFightEvent) : void
      {
         DisplayUtil.removeForParent(this.depthLevel.showMonster);
         this.overItemArr.push(this.depthLevel.showMonster.name);
         this.removeoverItemArr();
      }
      
      private function onFightOver(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var itemName:String = null;
         var itemArr:Array = null;
         var pirateType:int = 0;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOver);
         info = e.dataObj as FightOverInfo;
         if(MainManager.actorID == info.winnerID)
         {
            this.pirateMc = this.itemLayer[this.pirateMc.name];
            this.overItemArr.push(this.pirateMc.name);
            itemName = this.pirateMc.name;
            itemArr = itemName.split("_");
            pirateType = int(this.mysteryHoleBeen.theMapPirateList[itemArr[1]].type);
            if(pirateType == 1)
            {
               mapBoss.getInstance().addEventListener(mapBoss.BOSSOVER,function():void
               {
                  pirateMc.addEventListener(Event.ENTER_FRAME,onItemHead);
                  pirateMc.gotoAndStop(3);
               });
               mapBoss.getInstance().PKBOSSOver();
            }
            else if(pirateType == 2)
            {
               mapBoss.getInstance().addEventListener(mapBoss.ISHAVEITEM,function():void
               {
                  mapBoss.getInstance().removeEventListener(mapBoss.ISHAVEITEM,arguments.callee);
                  pirateMc.addEventListener(Event.ENTER_FRAME,onItemHead);
                  if(mapBoss.getInstance().ishaveitem)
                  {
                     pirateMc.gotoAndStop(4);
                  }
                  else
                  {
                     pirateMc.gotoAndStop(3);
                  }
               });
               mapBoss.getInstance().PKBOSSOver();
            }
            else if(pirateType == 0)
            {
               this.pirateMc.addEventListener(Event.ENTER_FRAME,this.onItemHead);
               this.pirateMc.gotoAndStop(3);
            }
         }
         else
         {
            Alarm.show("很遗憾，在这场战斗中，你失败了！",this.onClickBtn);
         }
      }
      
      public function onClickBtn() : void
      {
         SocketConnection.addCmdListener(CommandID.MYSTERYHOLE_EXIT,this.onExit);
         SocketConnection.send(CommandID.MYSTERYHOLE_EXIT);
      }
      
      private function onExit(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.MYSTERYHOLE_EXIT,this.onExit);
         this.destroy();
         MapManager.changeMap(445);
      }
      
      private function addEventByBox(param1:MovieClip) : void
      {
         param1.buttonMode = true;
         param1.addEventListener(MouseEvent.CLICK,this.onBoxItem);
      }
      
      private function onBoxItem(param1:MouseEvent) : void
      {
         var _loc2_:Boolean = this.chackEffectDistance(param1.currentTarget);
         if(_loc2_)
         {
            param1.currentTarget.buttonMode = false;
            param1.currentTarget.removeEventListener(MouseEvent.CLICK,this.onBoxItem);
            this.boxMc = param1.currentTarget as MovieClip;
            SocketConnection.addCmdListener(CommandID.MYSTERYHOLE_BOX,this.onBOX);
            SocketConnection.send(CommandID.MYSTERYHOLE_BOX,1);
         }
      }
      
      private function onBOX(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.MYSTERYHOLE_BOX,this.onBOX);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 1)
         {
            SimpleAlarm.show("这是个空箱子……");
         }
         this.itemLayer.removeChild(this.boxMc);
         this.overItemArr.push(this.boxMc.name);
      }
      
      private function addEventByFront(param1:MovieClip) : void
      {
         param1.buttonMode = true;
         param1.addEventListener(MouseEvent.CLICK,this.onFrontItem);
      }
      
      private function onFrontItem(param1:MouseEvent) : void
      {
         var _loc2_:Boolean = this.chackEffectDistance(param1.currentTarget);
         if(_loc2_)
         {
            param1.currentTarget.buttonMode = false;
            param1.currentTarget.removeEventListener(MouseEvent.CLICK,this.onFrontItem);
            this.frontMc = param1.currentTarget as MovieClip;
            Alert.show("这是海盗留下的能量机关，有一股强烈的能量波动，确定要开启这个能量阵吗？",this.usingFront);
         }
      }
      
      private function usingFront() : void
      {
         var _loc1_:Point = new Point(this.frontMc.x,this.frontMc.y);
         MainManager.actorModel.walkAction(_loc1_);
         SocketConnection.addCmdListener(CommandID.MYSTERYHOLE_FRONT,this.onFront);
         SocketConnection.send(CommandID.MYSTERYHOLE_FRONT,1);
      }
      
      private function onFront(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.MYSTERYHOLE_FRONT,this.onFront);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         MainManager.actorModel.sprite.addChild(this.frontEffect);
         this.frontEffect.addEventListener(Event.ENTER_FRAME,this.onFrontEffect);
         if(_loc3_ == 0)
         {
            this.frontEffect.gotoAndStop(1);
         }
         else if(_loc3_ == 1)
         {
            this.frontEffect.gotoAndStop(2);
         }
      }
      
      private function onFrontEffect(param1:Event) : void
      {
         if(param1.currentTarget.currentFrame == 1 && param1.currentTarget.getChildAt(0) != null && param1.currentTarget.getChildAt(0).currentFrame == param1.currentTarget.getChildAt(0).totalFrames)
         {
            this.frontEffect.removeEventListener(Event.ENTER_FRAME,this.onFrontEffect);
            this.itemLayer.removeChild(this.frontMc);
            this.overItemArr.push(this.frontMc.name);
            MainManager.actorModel.sprite.removeChild(this.frontEffect);
            Alarm.show("紫色能量治疗了你的精灵，你的精灵们现在充满了活力！");
         }
         else if(param1.currentTarget.currentFrame == 2 && param1.currentTarget.getChildAt(0) != null && param1.currentTarget.getChildAt(0).currentFrame == param1.currentTarget.getChildAt(0).totalFrames)
         {
            this.frontEffect.removeEventListener(Event.ENTER_FRAME,this.onFrontEffect);
            this.itemLayer.removeChild(this.frontMc);
            this.overItemArr.push(this.frontMc.name);
            MainManager.actorModel.sprite.removeChild(this.frontEffect);
            Alarm.show("神秘能量爆炸，你被传送出了洞穴。",this.onClickBtn);
         }
      }
      
      private function addEventByKey(param1:MovieClip) : void
      {
         param1.buttonMode = true;
         param1.addEventListener(MouseEvent.CLICK,this.onKeyItem);
      }
      
      private function onKeyItem(param1:MouseEvent) : void
      {
         var _loc3_:Array = null;
         var _loc2_:Boolean = this.chackEffectDistance(param1.currentTarget);
         if(_loc2_)
         {
            param1.currentTarget.buttonMode = false;
            param1.currentTarget.removeEventListener(MouseEvent.CLICK,this.onKeyItem);
            this.keyMc = param1.currentTarget as MovieClip;
            _loc3_ = this.keyMc.name.split("_");
            this.keyNumArr.push(_loc3_[1]);
            SimpleAlarm.show("你获得了一把钥匙！");
            this.itemLayer.removeChild(this.keyMc);
            this.overItemArr.push(this.keyMc.name);
         }
      }
      
      private function addEventByLock(param1:MovieClip) : void
      {
         param1.buttonMode = true;
         param1.addEventListener(MouseEvent.CLICK,this.onLockItem);
      }
      
      private function onLockItem(param1:MouseEvent) : void
      {
         var _loc3_:Array = null;
         var _loc4_:Boolean = false;
         var _loc5_:MovieClip = null;
         var _loc6_:String = null;
         var _loc2_:Boolean = this.chackEffectDistance(param1.currentTarget);
         if(_loc2_)
         {
            this.lockMc = param1.currentTarget as MovieClip;
            _loc3_ = this.lockMc.name.split("_");
            if(_loc4_ = this.checkKeyByLock(_loc3_[1]))
            {
               param1.currentTarget.buttonMode = false;
               param1.currentTarget.mouseChildren = false;
               param1.currentTarget.mouseEnabled = false;
               param1.currentTarget.removeEventListener(MouseEvent.CLICK,this.onLockItem);
               SimpleAlarm.show("门被打开了。");
               this.lockMc.gotoAndStop(2);
               _loc5_ = MapManager.currentMap.typeLevel as MovieClip;
               _loc6_ = "LockMap" + _loc3_[1];
               _loc5_.removeChild(_loc5_[_loc6_]);
               MapManager.currentMap.makeMapArray();
               this.lockIsOpenArr.push(_loc3_[1]);
            }
            else
            {
               Alarm.show("这扇门被锁住了，需要有钥匙才可以打开哦！也许钥匙就在附近……");
            }
         }
      }
      
      private function checkKeyByLock(param1:int) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:int = 0;
         while(_loc3_ < this.keyNumArr.length)
         {
            if(param1 == this.keyNumArr[_loc3_])
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function addEventByGear(param1:MovieClip) : void
      {
         param1.buttonMode = true;
         param1.addEventListener(MouseEvent.CLICK,this.onGearItem);
      }
      
      private function onGearItem(param1:MouseEvent) : void
      {
         var _loc3_:Array = null;
         var _loc2_:Boolean = this.chackEffectDistance(param1.currentTarget);
         if(_loc2_)
         {
            param1.currentTarget.buttonMode = false;
            param1.currentTarget.removeEventListener(MouseEvent.CLICK,this.onGearItem);
            this.gearMc = param1.currentTarget as MovieClip;
            _loc3_ = this.gearMc.name.split("_");
            this.gearNumArr.push(_loc3_[1]);
            SimpleAlarm.show("你触发了一个机关！");
            this.gearMc.gotoAndStop(2);
            this.gearMc.parent["Chain_" + _loc3_[1]].gotoAndStop(2);
            this.removeChainEvent(_loc3_[1]);
            this.openGear(_loc3_[1]);
         }
      }
      
      private function removeChainEvent(param1:int) : void
      {
         this.itemLayer["Chain_" + param1].buttonMode = false;
         this.itemLayer["Chain_" + param1].removeEventListener(MouseEvent.CLICK,this.onChainItem);
      }
      
      private function openGear(param1:int) : void
      {
         var _loc2_:MovieClip = MapManager.currentMap.typeLevel as MovieClip;
         var _loc3_:String = "GearMap" + param1;
         _loc2_.removeChild(_loc2_[_loc3_]);
         MapManager.currentMap.makeMapArray();
         this.chainIsOpenArr.push(param1);
      }
      
      private function addEventByChain(param1:MovieClip) : void
      {
         param1.buttonMode = true;
         param1.addEventListener(MouseEvent.CLICK,this.onChainItem);
      }
      
      private function onChainItem(param1:MouseEvent) : void
      {
         var _loc3_:Array = null;
         var _loc4_:Boolean = false;
         var _loc2_:Boolean = this.chackEffectDistance(param1.currentTarget);
         if(_loc2_)
         {
            this.chainMc = param1.currentTarget as MovieClip;
            _loc3_ = this.chainMc.name.split("_");
            if(_loc4_ = this.checkKeyByLock(_loc3_[1]))
            {
               param1.currentTarget.buttonMode = false;
               param1.currentTarget.mouseChildren = false;
               param1.currentTarget.mouseEnabled = false;
               param1.currentTarget.removeEventListener(MouseEvent.CLICK,this.onChainItem);
            }
            else
            {
               Alarm.show("这里被堵住了，无法通过，去周围找找有什么机关吧！");
            }
         }
      }
      
      private function checkGearByChain(param1:int) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:int = 0;
         while(_loc3_ < this.gearNumArr.length)
         {
            if(param1 == this.gearNumArr[_loc3_])
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function chackEffectDistance(param1:Object) : Boolean
      {
         var _loc6_:Array = null;
         var _loc7_:MovieClip = null;
         var _loc2_:Boolean = false;
         var _loc3_:Point = new Point(param1.x,param1.y);
         var _loc4_:Point = new Point(MainManager.actorModel.sprite.x,MainManager.actorModel.sprite.y);
         var _loc5_:Number = Point.distance(_loc3_,_loc4_);
         if(param1.name.indexOf("Box") != -1)
         {
            if(_loc5_ <= this.BOXDISTANCE)
            {
               _loc2_ = true;
            }
         }
         else if(param1.name.indexOf("Front") != -1)
         {
            if(_loc5_ <= this.FRONTDISTANCE)
            {
               _loc2_ = true;
            }
         }
         else if(param1.name.indexOf("Key") != -1)
         {
            if(_loc5_ <= this.KEYDISTANCE)
            {
               _loc2_ = true;
            }
         }
         else if(param1.name.indexOf("Lock") != -1)
         {
            if(_loc5_ <= this.LOCKDISTANCE)
            {
               _loc2_ = true;
            }
         }
         else if(param1.name.indexOf("showMonster") != -1)
         {
            if(_loc5_ <= this.MONSTERDISTANCE)
            {
               _loc2_ = true;
            }
         }
         else if(param1.name.indexOf("Gear") != -1)
         {
            _loc6_ = String(param1.name).split("_");
            if((_loc7_ = this.itemLayer["GearHit_" + _loc6_[1]]).hitTestPoint(_loc4_.x,_loc4_.y,true))
            {
               _loc2_ = true;
            }
         }
         else if(param1.name.indexOf("Chain") != -1)
         {
            if(_loc5_ <= this.CHAINDISTANCE)
            {
               _loc2_ = true;
            }
         }
         return _loc2_;
      }
      
      private function seerIsMove(param1:Boolean) : void
      {
         if(param1)
         {
            LevelManager.openMouseEvent();
            MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         }
         else
         {
            MainManager.actorModel.stop();
            LevelManager.closeMouseEvent();
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         }
      }
      
      private function removeEventByItems() : void
      {
         var _loc3_:* = undefined;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc1_:uint = uint(this.itemLayer.numChildren);
         var _loc2_:int = int(_loc1_ - 1);
         while(_loc2_ >= 0)
         {
            _loc3_ = this.itemLayer.getChildAt(_loc2_);
            if((_loc5_ = (_loc4_ = String(_loc3_.name)).split("_"))[0] == "Box")
            {
               _loc3_.removeEventListener(MouseEvent.CLICK,this.onBoxItem);
            }
            else if(_loc5_[0] == "Front")
            {
               _loc3_.removeEventListener(MouseEvent.CLICK,this.onFrontItem);
            }
            _loc2_--;
         }
      }
      
      public function destroy() : void
      {
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         this.removeMysteryHoleControlByMap();
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         mapBoss.getInstance().removeEventListener(mapBoss.MONSTEROVER630,this.onMONSTEROVER630);
         this.removeEventByItems();
         if(this.pirateMc != null)
         {
            this.pirateMc.removeEventListener(Event.ENTER_FRAME,this.onItemHead);
         }
         if(this.depthLevel != null && this.depthLevel.showMonster != null)
         {
            this.depthLevel.showMonster.removeEventListener(MouseEvent.CLICK,this.onShowMonster);
         }
         this.frontEffect.removeEventListener(Event.ENTER_FRAME,this.onFrontEffect);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOver);
         SocketConnection.removeCmdListener(CommandID.MYSTERYHOLE_PK,this.onJoinPK);
         SocketConnection.removeCmdListener(CommandID.MYSTERYHOLE_EXIT,this.onExit);
         SocketConnection.removeCmdListener(CommandID.MYSTERYHOLE_BOX,this.onBOX);
         SocketConnection.removeCmdListener(CommandID.MYSTERYHOLE_FRONT,this.onFront);
         SocketConnection.removeCmdListener(CommandID.MYSTERYHOLE_DATA,this.onGetData);
      }
      
      private function removeMysteryHoleControlByMap() : void
      {
         MapProcess_10001._mysteryHoleControl = null;
         MapProcess_10002._mysteryHoleControl = null;
         MapProcess_10003._mysteryHoleControl = null;
         MapProcess_10004._mysteryHoleControl = null;
      }
   }
}
