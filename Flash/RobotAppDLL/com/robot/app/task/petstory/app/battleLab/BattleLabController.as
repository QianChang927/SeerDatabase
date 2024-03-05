package com.robot.app.task.petstory.app.battleLab
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetBookXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.RobotModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.npc.NpcInfo;
   import com.robot.core.utils.Direction;
   import com.robot.core.utils.UserState;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class BattleLabController
   {
      
      private static var _instance:com.robot.app.task.petstory.app.battleLab.BattleLabController;
      
      public static var allPetList:Array;
       
      
      private var bxml:com.robot.app.task.petstory.app.battleLab.BattleLabConfigXML;
      
      private var _map:BaseMapProcess;
      
      private var _curtTimes:uint = 1;
      
      private var _npcList:Array;
      
      private var _bossLIst:Array;
      
      private var _curtRobot:RobotModel;
      
      private var _npcInfo:NpcInfo;
      
      private var _robotPetsList:Array;
      
      private var _startTimes:uint;
      
      private var _isJump:Boolean = false;
      
      public function BattleLabController(param1:PrivateClass)
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.app.battleLab.BattleLabController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.app.battleLab.BattleLabController(new PrivateClass());
         }
         return _instance;
      }
      
      public function init(param1:BaseMapProcess) : void
      {
         this._map = param1;
         this._map.topLevel["level_con"]["level_mc"].visible = false;
         this._map.topLevel["vsMC"].visible = false;
         if(this.bxml == null)
         {
            this.bxml = new com.robot.app.task.petstory.app.battleLab.BattleLabConfigXML();
            this.bxml.setup();
            this._npcList = this.bxml.getNpcList().concat();
            this._bossLIst = this.bxml.getBossList().concat();
         }
         this.createMaster();
         if(MainManager.actorPrevState == UserState.FIGHT)
         {
            return;
         }
         this.play();
      }
      
      private function createMaster() : void
      {
         var _loc1_:NpcInfo = new NpcInfo();
         _loc1_.dir = Direction.DOWN;
         _loc1_.npcName = "裁判山姆";
         _loc1_.clothIds = [100489,100490,100491,100492,100493];
         _loc1_.point = new Point(478,200);
         var _loc2_:RobotModel = new RobotModel(_loc1_);
      }
      
      private function play() : void
      {
         if(this._curtTimes == 10)
         {
            this._npcList = this.bxml.getNpcList().concat();
            this.gameStart(1);
         }
         else if(this._curtTimes == 20)
         {
            this._npcList = this.bxml.getNpcList().concat();
            this.gameStart(2);
         }
         else if(this._curtTimes == 30)
         {
            this._npcList = this.bxml.getNpcList().concat();
            this.gameStart(3);
         }
         else
         {
            this.gameStart();
         }
      }
      
      public function gameStart(param1:uint = 0) : void
      {
         this.showLevel(this._curtTimes);
         MainManager.actorModel.walkAction(new Point(365,309));
         switch(param1)
         {
            case 0:
               this.randomNpc();
               break;
            case 1:
               this.fightBoss(0);
               break;
            case 2:
               this.fightBoss(1);
               break;
            case 3:
               this.fightBoss(2);
         }
         this.askShowRobotInfo();
      }
      
      private function randomNpc() : void
      {
         var _loc1_:uint = uint(Math.random() * this._npcList.length);
         var _loc2_:Object = this._npcList[_loc1_];
         this._npcList.splice(_loc1_,1);
         this.createRobotSeer(_loc2_);
      }
      
      private function fightBoss(param1:uint) : void
      {
         var _loc2_:Object = this._bossLIst[param1];
         this.createRobotSeer(_loc2_);
      }
      
      private function createRobotSeer(param1:Object) : void
      {
         this._npcInfo = new NpcInfo();
         this._npcInfo.dir = Direction.DOWN;
         this._npcInfo.npcName = param1.name;
         this._npcInfo.clothIds = param1.clothIds;
         this._npcInfo.point = new Point(806,238);
         this._npcInfo.walkPoints = [new Point(596,312)];
         this._curtRobot = new RobotModel(this._npcInfo,param1.dialog);
         this._curtRobot.moveRobot();
      }
      
      private function showLevel(param1:uint) : void
      {
         var pram:uint = param1;
         this._map.topLevel["level_con"]["level_mc"].visible = true;
         this._map.topLevel["level_con"]["level_mc"].gotoAndStop(pram);
         AnimateManager.playMcAnimate(this._map.topLevel["level_con"]["level_effect"],0,"",function():void
         {
            _map.topLevel["level_con"]["level_mc"].visible = false;
         });
      }
      
      private function askShowRobotInfo() : void
      {
         SocketConnection.addCmdListener(CommandID.BATTLE_LAB_NEXT_LEVEL,this.onNextInfo);
         SocketConnection.send(CommandID.BATTLE_LAB_NEXT_LEVEL);
      }
      
      private function onNextInfo(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         this._robotPetsList = new Array();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            this._robotPetsList.push(_loc2_.readUnsignedInt());
            _loc4_++;
         }
         this.showJudgeDialog();
      }
      
      private function showJudgeDialog() : void
      {
         if(this._isJump)
         {
            this._isJump = false;
            NpcDialog.show(NPC.CAIPAN_SAM,["战斗吧！你的第一战对手是0xff0000" + this._npcInfo.npcName + "。"],null,null,true,function():void
            {
               NpcDialog.show(NPC.CAIPAN_SAM,["对手使用的精灵是" + pString_1(_robotPetsList[0]) + pString_1(_robotPetsList[1]) + pString_1(_robotPetsList[2]) + "，战斗即将开始，你做好准备了吗？"],["是的，我准备好了！"],[goNextSetp],true);
            });
            return;
         }
         if(this._curtTimes == 1)
         {
            NpcDialog.show(NPC.CAIPAN_SAM,["战斗吧！你的第一战对手是0xff0000" + this._npcInfo.npcName + "。"],null,null,true,function():void
            {
               NpcDialog.show(NPC.CAIPAN_SAM,["对手使用的精灵是" + pString_1(_robotPetsList[0]) + pString_1(_robotPetsList[1]) + pString_1(_robotPetsList[2]) + "，战斗即将开始，你做好准备了吗？"],["是的，我准备好了！"],[goNextSetp],true);
            });
         }
         else if(this._curtTimes <= 10)
         {
            NpcDialog.show(NPC.CAIPAN_SAM,["恭喜你，进入了第0xff0000" + this._curtTimes + "0xffffff战，你的对手是0xffff00" + this._npcInfo.npcName + "。"],null,null,true,function():void
            {
               NpcDialog.show(NPC.CAIPAN_SAM,["对手使用的精灵是" + pString_1(_robotPetsList[0]) + pString_1(_robotPetsList[1]) + pString_1(_robotPetsList[2]) + "，战斗即将开始，你做好准备了吗？"],null,null,true,function():void
               {
                  NpcDialog.show(NPC.CAIPAN_SAM,["你可以替换前一名对手的其中一只精灵，要替换吗？"],["是","否"],[showReplace,goNextSetp],true);
               });
            });
         }
         else if(this._curtTimes <= 20)
         {
            NpcDialog.show(NPC.CAIPAN_SAM,["恭喜你，进入了第0xff0000" + this._curtTimes + "0xffffff战，你的对手是0xffff00" + this._npcInfo.npcName + "。"],null,null,true,function():void
            {
               NpcDialog.show(NPC.CAIPAN_SAM,["对手的首发精灵是" + pString_1(_robotPetsList[0]) + pString_1(_robotPetsList[1]) + "。"],null,null,true,function():void
               {
                  NpcDialog.show(NPC.CAIPAN_SAM,["你可以替换前一名对手的其中一只精灵，要替换吗？"],["是","否"],[showReplace,goNextSetp],true);
               });
            });
         }
         else
         {
            NpcDialog.show(NPC.CAIPAN_SAM,["恭喜你，进入了第0xff0000" + this._curtTimes + "0xffffff战，对方的首发精灵是" + this.pString_1(this._robotPetsList[0]) + "。"],null,null,true,function():void
            {
               NpcDialog.show(NPC.CAIPAN_SAM,["你可以替换前一名对手的其中一只精灵，要替换吗？"],["是","否"],[showReplace,goNextSetp],true);
            });
         }
      }
      
      private function pString_1(param1:uint) : String
      {
         var _loc2_:String = null;
         return "0xff0000" + PetBookXMLInfo.getName(param1) + "(" + PetBookXMLInfo.getType(param1) + "系)0xffffff、";
      }
      
      private function goNextSetp() : void
      {
         this._curtRobot.showDialog(this.palyVS);
      }
      
      private function showReplace() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BattleLabReplacePanel"),"正在打开战斗实验室面板",this.goNextSetp);
      }
      
      private function palyVS() : void
      {
         this._map.topLevel["vsMC"].visible = true;
         AnimateManager.playMcAnimate(this._map.topLevel["vsMC"],1,"",function():void
         {
            _map.topLevel["vsMC"].visible = false;
            askServerPK();
         });
      }
      
      private function askServerPK() : void
      {
         PetFightModel.type = PetFightModel.BATTLE_LAB;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightComplete);
         SocketConnection.addCmdListener(CommandID.BATTLE_LAB_START,this.onPK);
         SocketConnection.send(CommandID.BATTLE_LAB_START);
      }
      
      private function onPK(param1:SocketEvent) : void
      {
      }
      
      private function onFightComplete(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightComplete);
         if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            if(this._curtTimes == 30)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BattleLabResultPanel"),"正在打开战斗实验室结算面板",this._curtTimes);
            }
            else
            {
               ++this._curtTimes;
               this.play();
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BattleLabResultPanel"),"正在打开战斗实验室结算面板",this._curtTimes);
            this._curtTimes = 1;
         }
      }
      
      public function destory() : void
      {
         if(this._robotPetsList)
         {
            this._robotPetsList.splice(0);
            this._robotPetsList = null;
         }
         this._curtRobot = null;
         this._npcInfo = null;
      }
      
      public function setCurtTimes(param1:uint) : void
      {
         this._startTimes = param1;
         this._curtTimes = param1;
         this._isJump = true;
      }
      
      public function getStartTimes() : uint
      {
         return this._startTimes;
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
