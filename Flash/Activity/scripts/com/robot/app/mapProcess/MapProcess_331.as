package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetBargeListInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.ui.Mouse;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_331 extends BaseMapProcess
   {
       
      
      private var startBtn:SimpleButton;
      
      private var bridge:MovieClip;
      
      private var bridgeSound:Sound;
      
      private var bridgeChannel:SoundChannel;
      
      private var _markMc:MovieClip;
      
      private var _gameApp:AppModel;
      
      public function MapProcess_331()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel["haidaoBtn"].visible = false;
         var _loc1_:int = 1;
         while(_loc1_ < 6)
         {
            animatorLevel["ai_" + _loc1_].visible = false;
            _loc1_++;
         }
         animatorLevel["shipMc"].visible = false;
         this.startBtn = conLevel["startMc"];
         this.startBtn.mouseEnabled = false;
         this.bridge = animatorLevel["bridgeMc"];
         this.bridge.gotoAndStop(1);
         this.startBtn.addEventListener(MouseEvent.CLICK,this.startBridge);
         if(FightManager.isKillBigPetB5 == false)
         {
            SocketConnection.addCmdListener(CommandID.PET_BARGE_LIST,this.addCmListenrPet);
            SocketConnection.send(CommandID.PET_BARGE_LIST,344,345);
         }
         if(TasksManager.getTaskStatus(115) == TasksManager.ALR_ACCEPT)
         {
            animatorLevel["shipMc"].visible = true;
            TasksManager.getProStatusList(115,this.onGetListComHandler);
         }
         else
         {
            this.startBtn.addEventListener(MouseEvent.CLICK,this.startBridge);
            this.startBtn.mouseEnabled = true;
         }
      }
      
      private function onGetListComHandler(param1:Array) : void
      {
         if(!param1[0])
         {
            this.showStepOne();
         }
         if(Boolean(param1[0]) && !param1[1])
         {
            this.showStepTwo(true);
         }
         if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
         {
            this.showStepFive();
         }
      }
      
      private function showStepOne() : void
      {
         NpcDialog.show(NPC.PIRATE,["巨镰鸟你是我们的啦！哈哈！#1艾里逊老大看到这么多巨镰鸟一定会夸我聪明的！哇哈哈哈……"],["他们在干什么！"],[this.onPlayAiOne]);
      }
      
      private function onPlayAiOne() : void
      {
         animatorLevel["ai_1"].visible = true;
         animatorLevel["ai_1"].gotoAndPlay(2);
         MovieClip(animatorLevel["ai_1"]).addFrameScript(animatorLevel["ai_1"].totalFrames - 1,this.onEndHandler);
      }
      
      private function onEndHandler() : void
      {
         MovieClip(animatorLevel["ai_1"]).gotoAndStop(animatorLevel["ai_1"].totalFrames - 1);
         MovieClip(animatorLevel["ai_1"]).addFrameScript(animatorLevel["ai_1"].totalFrames - 1,null);
         TasksManager.complete(115,0,function(param1:Boolean):void
         {
            if(param1)
            {
               showStepTwo(true);
            }
         });
      }
      
      private function showStepTwo(param1:Boolean) : void
      {
         animatorLevel["ai_1"].visible = param1;
         animatorLevel["ai_1"].gotoAndStop(animatorLevel["ai_1"].totalFrames - 1);
         NpcDialog.show(NPC.SEER,["糟糕！#5是海盗艾里逊的手下！！！他们竟然想要捕捉巨镰鸟！我不能让他们得逞！快住手……"],["可恶的海盗！接招吧！"],[this.showStepFour]);
      }
      
      private function showStepFour() : void
      {
         animatorLevel["ai_1"].visible = false;
         animatorLevel["ai_3"].gotoAndStop(animatorLevel["ai_3"].totalFrames - 1);
         animatorLevel["ai_3"].visible = true;
         NpcDialog.show(NPC.PIRATE,["你能够一个人战胜我们一个部队吗？海盗杂兵团出动！"],["我会让你知道什么才是赛尔勇士！"],[this.onStep4Handler]);
      }
      
      private function onStep4Handler() : void
      {
         this.showGame();
      }
      
      private function showStepFive() : void
      {
         animatorLevel["ai_3"].visible = false;
         animatorLevel["ai_4"].visible = true;
         animatorLevel["ai_4"].gotoAndPlay(2);
         MovieClip(animatorLevel["ai_4"]).addFrameScript(animatorLevel["ai_4"].totalFrames - 1,this.onAi4EndHandler);
      }
      
      private function onAi4EndHandler() : void
      {
         animatorLevel["ai_4"].gotoAndStop(animatorLevel["ai_4"].totalFrames - 1);
         MovieClip(animatorLevel["ai_4"]).addFrameScript(animatorLevel["ai_4"].totalFrames - 1,null);
         NpcDialog.show(NPC.PIRATE,["呜呜呜……我的艾里逊大人！我给您丢脸了！！！" + MainManager.actorInfo.formatNick + "，你就放过我吧……"],["快说！你们到底有什么阴谋诡计！海盗老巢在哪里？"],[this.onTalk2Handler]);
      }
      
      private function onTalk2Handler() : void
      {
         NpcDialog.show(NPC.PIRATE,["好吧！我说……在斯科尔星旁边有着一颗相当神秘的星球，上面盘踞着很多龙系精灵还有海盗集团最至高无上的……啊啊啊……啊……"],["快说！你们到底有什么阴谋诡计！海盗老巢在哪里？"],[this.onTalk3Handler]);
      }
      
      private function onTalk3Handler() : void
      {
         animatorLevel["ai_4"].visible = false;
         animatorLevel["ai_5"].visible = true;
         animatorLevel["ai_5"].gotoAndPlay(2);
         MovieClip(animatorLevel["ai_5"]).addFrameScript(animatorLevel["ai_5"].totalFrames - 1,this.onAi5EndHandler);
      }
      
      private function onAi5EndHandler() : void
      {
         animatorLevel["ai_5"].visible = false;
         animatorLevel["ai_5"].gotoAndStop(animatorLevel["ai_5"].totalFrames - 1);
         MovieClip(animatorLevel["ai_5"]).addFrameScript(animatorLevel["ai_5"].totalFrames - 1,null);
         NpcDialog.show(NPC.ALLISON,["笨蛋！你竟然泄密！！！看我一会怎么收拾你！" + MainManager.actorInfo.formatNick + "，你一次又一次的阻碍我们的计划！我一定会来收拾你的！你给我走着瞧！"],["艾里逊！我也不会放过你的！"],[this.onTalk4Handler]);
      }
      
      private function onTalk4Handler() : void
      {
         MainManager.actorModel.visible = true;
         if(MainManager.actorModel.pet)
         {
            MainManager.actorModel.pet.visible = true;
         }
         if(!MainManager.actorModel.nono)
         {
            MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
         }
         animatorLevel["shipMc"].gotoAndPlay(2);
         animatorLevel["shipMc"].addFrameScript(animatorLevel["shipMc"].totalFrames - 1,this.onShipEndHandler);
      }
      
      private function onShipEndHandler() : void
      {
         animatorLevel["shipMc"].gotoAndStop(animatorLevel["shipMc"].totalFrames - 1);
         animatorLevel["shipMc"].addFrameScript(animatorLevel["shipMc"].totalFrames - 1,null);
         NpcDialog.show(NPC.SEER,["下一颗神秘星球！！恶龙聚集的地方！！神秘的海盗老大……他们到底还有多少阴谋诡计！不管了！还是先去向船长汇报吧！"],["前方还会有更多的危险等着我们……"],[function():void
         {
            TasksManager.complete(115,2,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(4);
               }
            });
         }]);
      }
      
      private function addCmListenrPet(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PET_BARGE_LIST,this.addCmListenrPet);
         var _loc2_:PetBargeListInfo = param1.data as PetBargeListInfo;
         var _loc3_:Array = _loc2_.isKillList;
         if(_loc3_.length != 0)
         {
            FightManager.isKillBigPetB5 = true;
         }
         else
         {
            FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,this.onCloseFight);
         }
      }
      
      private function onCloseFight(param1:PetFightEvent) : void
      {
         var _loc2_:FightOverInfo = param1.dataObj["data"];
         if(_loc2_.winnerID == MainManager.actorInfo.userID)
         {
            FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,this.onCloseFight);
            FightManager.isKillBigPetB5 = true;
         }
      }
      
      private function startBridge(param1:MouseEvent) : void
      {
         this.startBtn.mouseEnabled = false;
         this.bridgeSound = MapManager.currentMap.libManager.getSound("brigeSound");
         this.bridgeChannel = this.bridgeSound.play();
         this.bridge.gotoAndPlay(1);
         this.bridge.addEventListener(Event.ENTER_FRAME,this.stopBridge);
      }
      
      private function stopBridge(param1:Event) : void
      {
         if(this.bridge.currentFrame == this.bridge.totalFrames)
         {
            if(this.bridgeChannel)
            {
               this.bridgeChannel.stop();
               this.bridgeChannel = null;
            }
            this.bridge.removeEventListener(Event.ENTER_FRAME,this.stopBridge);
            DisplayUtil.removeForParent(typeLevel["areaMC"]);
            MapManager.currentMap.makeMapArray();
         }
      }
      
      override public function destroy() : void
      {
         if(this.bridgeChannel)
         {
            this.bridgeChannel.stop();
            this.bridgeChannel = null;
         }
         this.bridge.removeEventListener(Event.ENTER_FRAME,this.stopBridge);
         SocketConnection.removeCmdListener(CommandID.PET_BARGE_LIST,this.addCmListenrPet);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,this.onCloseFight);
      }
      
      private function showGame() : void
      {
         LevelManager.mapLevel.x = 960;
         this._gameApp = new AppModel(ClientConfig.getGameModule("Shoter"),"正在进入游戏");
         this._gameApp.setup();
         this._gameApp.sharedEvents.addEventListener(Event.OPEN,this.onOpenHandler);
         this._gameApp.sharedEvents.addEventListener(Event.CLOSE,this.onCloseHandler);
         this._gameApp.show();
      }
      
      private function hideGame() : void
      {
         LevelManager.mapLevel.x = 0;
         Mouse.show();
         if(this._gameApp)
         {
            this._gameApp.sharedEvents.removeEventListener(Event.OPEN,this.onOpenHandler);
            this._gameApp.sharedEvents.removeEventListener(Event.CLOSE,this.onCloseHandler);
            this._gameApp.destroy();
            this._gameApp = null;
         }
      }
      
      private function onOpenHandler(param1:Event) : void
      {
         var e:Event = param1;
         MainManager.actorModel.visible = false;
         if(MainManager.actorModel.pet)
         {
            MainManager.actorModel.pet.visible = false;
         }
         if(MainManager.actorModel.nono)
         {
            MainManager.actorModel.hideNono();
         }
         this.hideGame();
         TasksManager.complete(115,1,function(param1:Boolean):void
         {
            if(param1)
            {
               showStepFive();
            }
         });
      }
      
      private function onCloseHandler(param1:Event) : void
      {
         MainManager.actorModel.visible = true;
         if(MainManager.actorModel.pet)
         {
            MainManager.actorModel.pet.visible = true;
         }
         if(!MainManager.actorModel.nono)
         {
            MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
         }
         this.hideGame();
         NpcDialog.show(NPC.ALLISON,["就你还想跟我们海盗作对？有本事你再来打我呀！#1"],["快点击海盗！把他们打的落花流水！"]);
         animatorLevel["ai_3"].visible = true;
         this.conLevel["haidaoBtn"].visible = true;
         this.conLevel["haidaoBtn"].addEventListener(MouseEvent.CLICK,this.onHaidaoClick1Handler);
      }
      
      private function onHaidaoClick1Handler(param1:MouseEvent) : void
      {
         this.showGame();
         animatorLevel["ai_3"].visible = false;
         this.conLevel["haidaoBtn"].visible = false;
         this.conLevel["haidaoBtn"].removeEventListener(MouseEvent.CLICK,this.onHaidaoClick1Handler);
      }
      
      public function changeMap() : void
      {
         Alarm.show("塔内还存在一些不稳定因素！切勿靠近！");
      }
      
      private function gotoMap() : void
      {
         var t:uint = 0;
         animatorLevel["door_effect"].gotoAndStop(2);
         t = setTimeout(function():void
         {
            clearTimeout(t);
            MapManager.changeMap(335);
         },2000);
      }
      
      private function onMarkClickHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SUPERNONO,["这座塔一定是海盗们建造的!里面究竟藏着什么样的危险呢？"],["无论多危险，我都不怕！","我还是考虑下再来问你吧……"],[function():void
         {
            NpcDialog.show(NPC.SUPERNONO,["海盗们阴险狡猾！这个塔防内一定机关重重！对了！听特派小队说，他们似乎看到了一个奇怪精灵的影子……"],["继续！继续！再告诉我点吧！"],[function():void
            {
               NpcDialog.show(NPC.SUPERNONO,["这座塔相当危险！所以只有在0xff0000超能NoNo0xffffff的保护下你才可以进入！当然你也可以通过0xff0000高空塔传送器0xffffff潜入塔防内部！（快去问问你的超能好友吧！）"],["好！我知道啦~"],[function():void
               {
               }]);
            }]);
         }]);
      }
   }
}
