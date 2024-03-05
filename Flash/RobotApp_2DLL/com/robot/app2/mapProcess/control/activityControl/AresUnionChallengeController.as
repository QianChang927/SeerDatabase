package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.fightNote.FightWaitPanel;
   import com.robot.app.info.GaiyaEffectInfo;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AresUnionChallengeController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _count:uint;
      
      private static var _count1:uint;
      
      private static var _count2:uint;
      
      private static var _count3:uint;
      
      public static var _icon:MovieClip;
      
      private static var _currentPetIndex:uint;
      
      private static var _currentSkillIndex:uint;
      
      private static var _gaiyaRegion:uint;
      
      private static var _result_type:uint;
      
      private static var _result_id:uint;
      
      private static var _result_is_succ:uint;
      
      private static var _result_is_end:uint;
      
      public static var _petInfo:PetInfo;
      
      private static var _closingCelemoryMC:MovieClip;
      
      private static var _scoreArr:Array = [];
      
      private static var _orginalArr:Array = [];
      
      private static var _cls;
       
      
      public function AresUnionChallengeController()
      {
         super();
      }
      
      public static function setup() : void
      {
         LocalMsgController.addLocalMsg("AresUnionChallengeEnvelopePanel");
         _icon = UIManager.getMovieClip("icon_aresUnion");
         _icon.buttonMode = true;
         ToolTipManager.add(_icon,"星际挑战赛");
         _icon.addEventListener(MouseEvent.CLICK,function(param1:*):void
         {
            SocketConnection.send(1022,86054219);
            ModuleManager.showModule(ClientConfig.getAppModule("AresUnionChallengeLabelPanel"));
         });
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onTime);
         _cls = getDefinitionByName("com.robot.app2.mapProcess.control.activityControl.KylinVSElingshouController") as Class;
      }
      
      private static function onTime(param1:SocketEvent) : void
      {
         if(_cls && Boolean(_cls.controller.isInActivityTime))
         {
            TaskIconManager.delIcon(_icon);
         }
         else
         {
            TaskIconManager.addIcon(_icon,TaskIconManager.RIGHT,7);
         }
      }
      
      public static function onItem(param1:uint) : void
      {
         _count = param1;
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_1);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,137);
      }
      
      private static function getGotStatus_1(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_1);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count >= 3)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,632);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_2);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,138);
      }
      
      private static function getGotStatus_2(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_2);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count >= 4)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,633);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_3);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,139);
      }
      
      private static function getGotStatus_3(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_3);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count >= 5)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,634);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_4);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,140);
      }
      
      private static function getGotStatus_4(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_4);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count >= 6)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,635);
         }
      }
      
      public static function onItem1(param1:uint) : void
      {
         _count1 = param1;
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_5);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,132);
      }
      
      private static function getGotStatus_5(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_5);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count1 >= 3)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,603);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_6);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,134);
      }
      
      private static function getGotStatus_6(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_6);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count1 >= 4)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,604);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_7);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,135);
      }
      
      private static function getGotStatus_7(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_7);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count1 >= 5)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,605);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_8);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,136);
      }
      
      private static function getGotStatus_8(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_8);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count1 >= 6)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,606);
         }
      }
      
      public static function onItem2(param1:uint) : void
      {
         _count2 = param1;
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_9);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,142);
      }
      
      private static function getGotStatus_9(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_9);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count2 >= 3)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,654);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_10);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,143);
      }
      
      private static function getGotStatus_10(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_10);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count2 >= 4)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,655);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_11);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,144);
      }
      
      private static function getGotStatus_11(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_11);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count2 >= 5)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,656);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_12);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,145);
      }
      
      private static function getGotStatus_12(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_12);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count2 >= 6)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,657);
         }
      }
      
      public static function onItem3(param1:uint) : void
      {
         _count3 = param1;
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_13);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,146);
      }
      
      private static function getGotStatus_13(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_13);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count3 >= 3)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,674);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_14);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,147);
      }
      
      private static function getGotStatus_14(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_14);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count3 >= 4)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,675);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_15);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,148);
      }
      
      private static function getGotStatus_15(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_15);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count3 >= 5)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,676);
         }
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_16);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,149);
      }
      
      private static function getGotStatus_16(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSTATUS,getGotStatus_16);
         (param1.data as ByteArray).position = 0;
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ == 0 && _count3 >= 6)
         {
            SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,677);
         }
      }
      
      public static function initTransportPoint(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         MapListenerManager.add(_map.conLevel["transportPoint"],function():void
         {
            switch(MapManager.currentMap.id)
            {
               case 32:
                  SocketConnection.send(1022,86054213);
                  NpcDialog.show(NPC.LEIYI,[MainManager.actorInfo.formatNick + "，那是通往联盟秘境的捷径，你做好准备了吗？在那里你将接受0xff0000战神联盟星际挑战赛0xffffff的考验，0xff0000雷神队0xffffff等待你的加入！"],["我想马上飞过去！","让我再考虑一下！"],[function():void
                  {
                     MapManager.changeMap(65);
                  },null]);
                  break;
               case 419:
                  SocketConnection.send(1022,86054214);
                  NpcDialog.show(NPC.GAIYA,[MainManager.actorInfo.formatNick + "，那是通往联盟秘境的捷径，做为战神我一定会在这次0xff0000战神联盟星际挑战赛0xffffff中超越自我，加入0xff0000战神队0xffffff是你的唯一选择！"],["恩恩，我已经迫不及待了！","战神这么强，我还是在想想吧！"],[function():void
                  {
                     MapManager.changeMap(65);
                  },null]);
                  break;
               case 484:
                  SocketConnection.send(1022,86054215);
                  NpcDialog.show(NPC.KAXIUSI_WHITE,[MainManager.actorInfo.formatNick + "，那是通往联盟秘境的捷径，这次是0xff0000战神联盟0xffffff第一次举办0xff0000星际挑战赛0xffffff，加入我的0xff0000炫彩队0xffffff吧！胜利属于我们！"],["恩恩，我这就去报名！","再让我思量一下！"],[function():void
                  {
                     MapManager.changeMap(65);
                  },null]);
                  break;
               case 507:
                  SocketConnection.send(1022,86054216);
                  NpcDialog.show(NPC.BULAIKE_NEW,[MainManager.actorInfo.formatNick + "，那是通往联盟秘境的捷径，这次0xff0000战神联盟星际挑战赛0xffffff的冠军一定是0xff0000光明队0xffffff，这也是你唯一的选择，加入我们吧！"],["哇！太好了，我这就去参加！","先让我把最强整容挑选出来！"],[function():void
                  {
                     MapManager.changeMap(65);
                  },null]);
            }
         },"能量圈");
      }
      
      public static function initMapFor65(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _map.depthLevel["kaxiusi"].visible = false;
         _map.depthLevel["gaiya"].visible = false;
         _map.depthLevel["leiyi"].visible = false;
         _map.depthLevel["bulaike"].visible = false;
         _map.conLevel["qilin"].visible = false;
         _map.conLevel["leiyi_fenshen"].visible = false;
         _map.conLevel["suolante"].visible = false;
         _map.conLevel["laokemengde"].visible = false;
         _map.conLevel["difute"].visible = false;
         _closingCelemoryMC = MapManager.currentMap.libManager.getMovieClip("closingCelemoryMc");
         MapListenerManager.add(_map.conLevel["qilin"],function():void
         {
            NpcDialog.show(NPC.QILIN_NORMOL,["雷伊、盖亚、卡修斯、布莱克你们听着，只有不断的追求更强才能守卫和平，这是我麒麟对你们的要求！终极特训已经开始，好好珍惜这次机会吧！"],["战神联盟终极特训！","战神联盟加油啊！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("AresUnionChallengeTrainPanel"),"正在打开...",5);
            },null]);
         },"麒麟");
         if(!BufferRecordManager.getState(MainManager.actorInfo,520))
         {
            _map.conLevel["act"].buttonMode = true;
            _map.conLevel["act"].addEventListener(MouseEvent.CLICK,onAct);
         }
         else
         {
            _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onAct);
            DisplayUtil.removeForParent(_map.conLevel["act"]);
            if(!BufferRecordManager.getState(MainManager.actorInfo,543))
            {
               _map.depthLevel["kaxiusi"].visible = true;
               _map.depthLevel["gaiya"].visible = true;
               _map.depthLevel["leiyi"].visible = true;
               _map.depthLevel["bulaike"].visible = true;
               showAct();
            }
            else if(!BufferRecordManager.getState(MainManager.actorInfo,570) && MainManager.actorInfo.aresUnionTeam != 0)
            {
               if(_closingCelemoryMC)
               {
                  _map.conLevel.addChild(_closingCelemoryMC);
                  _closingCelemoryMC.buttonMode = true;
                  _closingCelemoryMC.addEventListener(MouseEvent.CLICK,closingCelemoryStory);
                  CommonUI.addYellowExcal(_map.topLevel,517,253);
               }
            }
            else
            {
               _map.conLevel["qilin"].visible = true;
               _map.conLevel["leiyi_fenshen"].visible = true;
               _map.conLevel["suolante"].visible = true;
               _map.conLevel["laokemengde"].visible = true;
               _map.conLevel["difute"].visible = true;
               destroy();
            }
         }
      }
      
      private static function closingCelemoryStory(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(_closingCelemoryMC)
         {
            SocketConnection.send(1022,86055637);
            _closingCelemoryMC.removeEventListener(MouseEvent.CLICK,closingCelemoryStory);
            CommonUI.removeYellowExcal(_map.topLevel);
            if(ToolBarController.panel.panelIsShow)
            {
               KTool.hideMapPlayerAndMonster();
            }
            MainManager.selfVisible = false;
            AnimateManager.playInteractiveMc(_closingCelemoryMC["act"],1,3,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130220_1"),function():void
               {
                  _closingCelemoryMC["act"].gotoAndStop(4);
                  AnimateManager.playMcAnimate(_closingCelemoryMC["act"],4,"mc4",function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1412_1"),function():void
                     {
                        getScores();
                     });
                  });
               });
            },true,false);
         }
      }
      
      private static function continueStory(param1:uint) : void
      {
         var rank:uint = param1;
         var _teamNameArr:Array = ["炫彩队","雷神队","战神队","光明队"];
         NpcDialog.show(NPC.RUIWADE,["啊哈，恭喜你！0xff0000" + _teamNameArr[MainManager.actorInfo.aresUnionTeam - 1].toString() + "0xffffff的" + MainManager.actorInfo.formatNick + "，你的队伍在这次挑战赛中光荣的获得了第0xff0000" + rank.toString() + "0xffffff名！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.RUIWADE,["为了表示对你的嘉奖！特授予你0xff0000专属挑战赛奖杯0xffffff！拥有这个奖杯！你就可以源源不断的获得各种好礼哦！"],null,null,false,function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,570,true,function():void
               {
                  SocketConnection.send(1022,86055638);
                  if(ToolBarController.panel.panelIsShow)
                  {
                     KTool.showMapPlayerAndMonster();
                  }
                  MainManager.selfVisible = true;
                  ModuleManager.showModule(ClientConfig.getAppModule("AresUnionChallengeClosingCelemoryPanel"));
                  _map.conLevel["leiyi_fenshen"].visible = true;
                  _map.conLevel["suolante"].visible = true;
                  _map.conLevel["laokemengde"].visible = true;
                  _map.conLevel["difute"].visible = true;
                  _map.conLevel["qilin"].visible = true;
                  _map.depthLevel["kaxiusi"].visible = true;
                  _map.depthLevel["gaiya"].visible = true;
                  _map.depthLevel["leiyi"].visible = true;
                  _map.depthLevel["bulaike"].visible = true;
                  DisplayUtil.removeForParent(_closingCelemoryMC);
                  _closingCelemoryMC = null;
               });
            });
         });
      }
      
      private static function getScores() : void
      {
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_1);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,1);
      }
      
      private static function onListen_1(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_1);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _scoreArr[0] = _loc3_;
         _orginalArr[0] = _loc3_;
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_2);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,2);
      }
      
      private static function onListen_2(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_2);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _scoreArr[1] = _loc3_;
         _orginalArr[1] = _loc3_;
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_3);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,3);
      }
      
      private static function onListen_3(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_3);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _scoreArr[2] = _loc3_;
         _orginalArr[2] = _loc3_;
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_4);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,4);
      }
      
      private static function onListen_4(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_4);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _scoreArr[3] = _loc3_;
         _orginalArr[3] = _loc3_;
         sort();
      }
      
      private static function sort() : void
      {
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc1_:uint = 0;
         while(_loc1_ < 4)
         {
            _loc3_ = 0;
            while(_loc3_ < 3 - _loc1_)
            {
               if(_scoreArr[_loc3_] > _scoreArr[_loc3_ + 1])
               {
                  _loc4_ = uint(_scoreArr[_loc3_]);
                  _scoreArr[_loc3_] = _scoreArr[_loc3_ + 1];
                  _scoreArr[_loc3_ + 1] = _loc4_;
               }
               _loc3_++;
            }
            _loc1_++;
         }
         var _loc2_:uint = 0;
         while(_loc2_ <= 3)
         {
            if(MainManager.actorInfo.aresUnionTeam - 1 == _loc2_)
            {
               if(_orginalArr[_loc2_] == _scoreArr[3])
               {
                  continueStory(1);
               }
               if(_orginalArr[_loc2_] == _scoreArr[2])
               {
                  continueStory(2);
               }
               if(_orginalArr[_loc2_] == _scoreArr[1])
               {
                  continueStory(3);
               }
               if(_orginalArr[_loc2_] == _scoreArr[0])
               {
                  continueStory(4);
               }
            }
            _loc2_++;
         }
      }
      
      public static function fightWithDashi() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightDashiOver);
         FightManager.fightWithBoss("颁奖大使",12);
      }
      
      private static function onFightDashiOver(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightDashiOver);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            ItemInBagAlert.show(400065,"",function():void
            {
               ItemInBagAlert.show(1,"2000个" + ItemXMLInfo.getName(1) + "已经放入你的背包内！",function():void
               {
                  ItemInBagAlert.show(1200599);
               });
            });
         }
      }
      
      private static function checkFirstPet(param1:uint) : Boolean
      {
         var _loc2_:PetInfo = PetManager.getPetInfo(PetManager.defaultTime);
         if(param1 == 0)
         {
            if(_loc2_.id != 798 && _loc2_.id != 2323)
            {
               return false;
            }
            return true;
         }
         if(param1 == 1)
         {
            if(_loc2_.id != 875 && _loc2_.id != 2341)
            {
               return false;
            }
            return true;
         }
         return false;
      }
      
      private static function onGetTrainResult(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _result_type = _loc2_.readUnsignedInt();
         _result_id = _loc2_.readUnsignedInt();
         _result_is_succ = _loc2_.readUnsignedInt();
         _result_is_end = _loc2_.readUnsignedInt();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onShowResult);
      }
      
      private static function onShowResult(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onShowResult);
         if(_result_type == 0)
         {
            if(_result_id == 1)
            {
               if(_result_is_end)
               {
                  Alarm.show("恭喜你，特训成功！你的卡修斯成功领悟到炫彩山绝学“万山绝影”！");
               }
               else if(_result_is_succ)
               {
                  getProgress(0,1);
               }
               else
               {
                  NpcDialog.show(NPC.DIFUTE,["你并没有依据规则来进行挑战，只有在满速度，满攻击的状态下击败我，才可以通过此次特训！继续努力吧！"],["好，我知道了！"]);
               }
            }
            else if(_result_id == 2)
            {
               if(_result_is_end)
               {
                  Alarm.show("恭喜你，特训成功，防御、特防获得了1点提升！");
               }
               else if(_result_is_succ)
               {
                  getProgress(0,2);
               }
               else
               {
                  NpcDialog.show(NPC.DIFUTE,["你并没有依据规则来进行挑战，只有抵挡住我的10次攻击，才可以通过此次特训！继续努力吧！"],["好，我知道了！"]);
               }
            }
            else if(_result_id == 3)
            {
               if(_result_is_end)
               {
                  Alarm.show("恭喜你，你的卡修斯获得战斗力的大幅提升！");
               }
               else if(_result_is_succ)
               {
                  getProgress(0,3);
               }
               else
               {
                  NpcDialog.show(NPC.DIFUTE,["你并没有依据规则来进行挑战，只有打出3000以上的伤害，才可以通过此次特训！继续努力吧！"],["好，我知道了！"]);
               }
            }
         }
         else if(_result_type == 1)
         {
            if(_result_id == 1)
            {
               if(_result_is_end)
               {
                  Alarm.show("恭喜你，特训成功！你的布莱克获得了特性狂之印！快去唤醒它吧！",function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("BulaikeAttributeActivePanel"));
                  });
               }
               else if(_result_is_succ)
               {
                  getProgress(1,1);
               }
               else
               {
                  NpcDialog.show(NPC.SUOLANTE,["你并没有依据规则来进行挑战，只有一击必杀，才可以通过此次特训！继续努力吧！"],["好，我知道了！"]);
               }
            }
            else if(_result_id == 2)
            {
               if(_result_is_end)
               {
                  Alarm.show("恭喜你，特训成功！你的布莱克获得了特性霸之体！快去唤醒它吧！",function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("BulaikeAttributeActivePanel"));
                  });
               }
               else if(_result_is_succ)
               {
                  getProgress(1,2);
               }
               else
               {
                  NpcDialog.show(NPC.SUOLANTE,["你并没有依据规则来进行挑战，只有用致命一击击败我，才可以通过此次特训！继续努力吧！"],["好，我知道了！"]);
               }
            }
            else if(_result_id == 3)
            {
               if(_result_is_end)
               {
                  Alarm.show("恭喜你，特训成功！你的布莱克获得了特性意之念！快去唤醒它吧！",function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("BulaikeAttributeActivePanel"));
                  });
               }
               else if(_result_is_succ)
               {
                  getProgress(1,3);
               }
               else
               {
                  NpcDialog.show(NPC.SUOLANTE,["你并没有依据规则来进行挑战，只有抵挡住我的5次攻击后击败我，才可以通过此次特训！继续努力吧！"],["好，我知道了！"]);
               }
            }
         }
      }
      
      private static function getProgress(param1:uint, param2:uint) : void
      {
         _currentPetIndex = param1;
         _currentSkillIndex = param2;
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,onShowAlarm);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,_currentPetIndex);
      }
      
      private static function onShowAlarm(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,onShowAlarm);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:uint = _loc2_.readUnsignedInt();
         var _loc7_:uint = _loc2_.readUnsignedInt();
         var _loc8_:uint = _loc2_.readUnsignedInt();
         if(_currentSkillIndex == 1)
         {
            if(_loc4_ == 0)
            {
               if(_currentPetIndex == 0)
               {
                  Alarm.show("恭喜你！特训成功！继续努力，还需要" + TextFormatUtil.getRedTxt((5 - _loc3_).toString()) + "次特训，你的卡修斯就可以领悟到新技能“万山绝影”了！");
               }
               else
               {
                  Alarm.show("特训未成功，请继续努力哦！");
               }
            }
         }
         else if(_currentSkillIndex == 2)
         {
            if(_loc6_ == 0)
            {
               if(_currentPetIndex == 0)
               {
                  Alarm.show("恭喜你！特训成功！继续努力，还需要" + TextFormatUtil.getRedTxt((20 - _loc5_).toString()) + "次特训，你的卡修斯防御力和体力就可以获得大幅提升！");
               }
               else
               {
                  Alarm.show("特训未成功，请继续努力哦！");
               }
            }
         }
         else if(_currentSkillIndex == 3)
         {
            if(_loc8_ == 0)
            {
               if(_currentPetIndex == 0)
               {
                  Alarm.show("恭喜你！特训成功！继续努力，还需要" + TextFormatUtil.getRedTxt((5 - _loc7_).toString()) + "次特训，你的卡修斯就将获得战斗力的大幅提升！");
               }
               else
               {
                  Alarm.show("特训未成功，请继续努力哦！");
               }
            }
         }
      }
      
      public static function fightWithGaiya(param1:uint) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightGaiyaOver);
         if(param1 == 1)
         {
            FightManager.fightWithBoss("雷伊",3);
         }
         else if(param1 == 2)
         {
            FightManager.fightWithBoss("厄尔塞拉",4);
         }
         else
         {
            FightManager.fightWithBoss("哈莫",5);
         }
         _gaiyaRegion = param1;
      }
      
      private static function onFightGaiyaOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightGaiyaOver);
         SocketConnection.addCmdListener(CommandID.M_2149,onGaiyaEffect);
         SocketConnection.send(CommandID.M_2149);
      }
      
      private static function onGaiyaEffect(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.M_2149,onGaiyaEffect);
         var _loc2_:GaiyaEffectInfo = param1.data as GaiyaEffectInfo;
         if(_gaiyaRegion == 1)
         {
            if(_loc2_.effects.indexOf(1) == -1)
            {
               NpcDialog.show(NPC.LAOKE_LEIDE,["不！你必须满血结束战斗！你要设法驾驭这股力量，否则，最终的结果永远是失败！"],["难道说其中有什么奥秘？我再试试！"]);
            }
            else
            {
               Alarm.show("你已经成功获得了技能“嗜血之力”");
            }
         }
         else if(_gaiyaRegion == 2)
         {
            if(_loc2_.effects.indexOf(2) == -1)
            {
               NpcDialog.show(NPC.LAOKE_LEIDE,["这样是不行的，只有承受住10次七色光羽的攻击才可以净化这股能量！"],["好吧，我明白了！"]);
            }
            else
            {
               Alarm.show("你已经成功获得了技能“邪气凛然”");
            }
         }
         else if(_loc2_.effects.indexOf(3) == -1)
         {
            NpcDialog.show(NPC.LAOKE_LEIDE,["不！这是错误的！必须0xFF0000以石破天惊且打出致命一击0xFFFFFF击败它！"],["好！我知道了！"]);
         }
         else
         {
            Alarm.show("你已经成功获得了技能“石破天惊”");
         }
      }
      
      public static function fightWithPlayer(param1:UserInfo) : void
      {
         var info:UserInfo = param1;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onOver);
         PetFightModel.mode = PetFightModel.SINGLE_MODE;
         PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
         FightWaitPanel.userInfo = info;
         FightWaitPanel.show();
         SocketConnection.sendWithCallback2(CommandID.INVITE_TO_FIGHT,null,[info.userID,1],function():void
         {
            PetFightModel.mode = PetFightModel.MULTI_MODE;
            PetFightModel.enemyName = "";
            PetFightModel.status = PetFightModel.FIGHT_WITH_NPC;
         });
      }
      
      public static function prepareFight() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onOver);
         SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_START_FIGHT,onStartHandler);
         SocketConnection.send(CommandID.ARESUNIONCHALLENGE_START_FIGHT);
      }
      
      public static function onStartHandler(param1:SocketEvent) : void
      {
         PetFightModel.mode = PetFightModel.SINGLE_MODE;
         PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
         var _loc2_:* = getDefinitionByName("com.robot.app.panel.FightMatchingPanel");
         _loc2_.show(closeDouFight);
      }
      
      private static function closeDouFight() : void
      {
         PetFightModel.status = PetFightModel.FIGHT_WITH_NPC;
         SocketConnection.send(CommandID.INVITE_FIGHT_CANCEL);
      }
      
      private static function onOver(param1:PetFightEvent) : void
      {
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         PetFightModel.status = PetFightModel.FIGHT_WITH_NPC;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onOver);
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_START_FIGHT,onStartHandler);
      }
      
      private static function onAct(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 30
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function showAct() : void
      {
         _map.depthLevel["kaxiusi"].visible = false;
         _map.depthLevel["gaiya"].visible = false;
         _map.depthLevel["leiyi"].visible = false;
         _map.depthLevel["bulaike"].visible = false;
         ResourceManager.getResource(ClientConfig.getAppRes("activeMc/aresUnionForMap66_2"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            if(mc)
            {
               _map.topLevel.addChild(mc);
               AnimateManager.playMcAnimate(mc,1,"mc",function():void
               {
                  NpcDialog.show(NPC.LEIYI,["这是什么迹象？？难道又是可恶的恶灵兽吗？大伙注意四周的环境，看来我们要迎接战斗了！"],["什么！！又是恶灵兽？"],[function():void
                  {
                     NpcDialog.show(NPC.GAIYA,["哼！来的正好，我正想找个对手过过招呢！"],["盖亚，我们先看看再说！"],[function():void
                     {
                        AnimateManager.playMcAnimate(mc,2,"mc",function():void
                        {
                           NpcDialog.show(NPC.SEER,["哇！那...那不是麒麟吗？怎么会出现在这里？"],["瑞兽降临啦！"],[function():void
                           {
                              AnimateManager.playMcAnimate(mc,3,"mc",function():void
                              {
                                 NpcDialog.show(NPC.QILIN_NORMOL,["战神联盟，你们觉得自己强大吗？经过了长时间的修炼，我很想知道你们的真实之力！恶灵兽正在蠢蠢欲动，时间已经不多了！"],["麒麟，看看我们的实力吧！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1391_1"),function():void
                                    {
                                       NpcDialog.show(NPC.QILIN_NORMOL,["你们还没领悟到各自最高的领域，继续努力吧！希望你们会在0xff0000麒麟空间开启前0xffffff领悟最高技能！要知道战神联盟必定会所向无敌！"],["谨遵麒麟训话！"],[function():void
                                       {
                                          NpcDialog.show(NPC.LEIYI,["战神联盟的所有成员，让我们再次踏上终极特训之路吧！我们要变的更强！"],["特训开启！"],[function():void
                                          {
                                             AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1391_2"),function():void
                                             {
                                                NpcDialog.show(NPC.SEER,["哇！！战神联盟都要特训啦！我可不能错过这次难得的机会，我也要变的更强！"],["战神联盟，我们一起战斗吧！"],[function():void
                                                {
                                                   _map.depthLevel["kaxiusi"].visible = true;
                                                   _map.depthLevel["gaiya"].visible = true;
                                                   _map.depthLevel["leiyi"].visible = true;
                                                   _map.depthLevel["bulaike"].visible = true;
                                                   BufferRecordManager.setState(MainManager.actorInfo,543,true,function():void
                                                   {
                                                      SocketConnection.send(1022,86054800);
                                                      DisplayUtil.removeForParent(mc);
                                                      if(!BufferRecordManager.getState(MainManager.actorInfo,570) && MainManager.actorInfo.aresUnionTeam != 0)
                                                      {
                                                         if(_closingCelemoryMC)
                                                         {
                                                            _map.conLevel.addChild(_closingCelemoryMC);
                                                            _closingCelemoryMC.buttonMode = true;
                                                            _closingCelemoryMC.addEventListener(MouseEvent.CLICK,closingCelemoryStory);
                                                            CommonUI.addYellowExcal(_map.topLevel,517,253);
                                                         }
                                                         else
                                                         {
                                                            _map.conLevel["leiyi_fenshen"].visible = true;
                                                            _map.conLevel["suolante"].visible = true;
                                                            _map.conLevel["laokemengde"].visible = true;
                                                            _map.conLevel["difute"].visible = true;
                                                            _map.conLevel["qilin"].visible = true;
                                                         }
                                                      }
                                                   });
                                                }]);
                                             });
                                          }]);
                                       }]);
                                    });
                                 }]);
                              });
                           }]);
                        });
                     }]);
                  }]);
               });
            }
         });
      }
      
      public static function startBulaikeTrain(param1:uint) : void
      {
         var index:uint = param1;
         if(index == 1)
         {
            NpcDialog.show(NPC.SUOLANTE,["只有一击必杀，才可以通过此次特训！"],["来吧，战神联盟，勇往直前！","让我再准备一下。"],[function():void
            {
               if(!checkFirstPet(1))
               {
                  Alarm.show("需要把布莱克设为首发精灵！");
               }
               else if(MapManager.currentMap.id == 65)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("索兰特",9);
               }
               else if(MapManager.currentMap.id == 507)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("索兰特",2);
               }
            },null]);
         }
         else if(index == 2)
         {
            NpcDialog.show(NPC.SUOLANTE,["只有以致命一击击败我，才可以通过此次特训！"],["来吧，战神联盟，勇往直前！","让我再准备一下。"],[function():void
            {
               if(!checkFirstPet(1))
               {
                  Alarm.show("需要把布莱克设为首发精灵！");
               }
               else if(MapManager.currentMap.id == 65)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("索兰特",10);
               }
               else if(MapManager.currentMap.id == 507)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("索兰特",3);
               }
            },null]);
         }
         else
         {
            if(index != 3)
            {
               return;
            }
            NpcDialog.show(NPC.SUOLANTE,["只有抵挡住我的5次攻击后击败我，才可以通过此次特训！"],["来吧，战神联盟，勇往直前！","让我再准备一下。"],[function():void
            {
               if(!checkFirstPet(1))
               {
                  Alarm.show("需要把布莱克设为首发精灵！");
               }
               else if(MapManager.currentMap.id == 65)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("索兰特",11);
               }
               else if(MapManager.currentMap.id == 507)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("索兰特",4);
               }
            },null]);
         }
      }
      
      public static function startKaxiusiTrain(param1:uint) : void
      {
         var index:uint = param1;
         if(index == 1)
         {
            NpcDialog.show(NPC.DIFUTE,["如果你能在满速度，满攻击的情况下击败我，那你就能领悟到炫彩山的绝学“万山绝影”！"],["来吧，战神联盟，勇往直前！","让我再准备一下。"],[function():void
            {
               if(!checkFirstPet(0))
               {
                  Alarm.show("需要把卡修斯设为首发精灵！");
               }
               else if(MapManager.currentMap.id == 65)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("迪符特",6);
               }
               else if(MapManager.currentMap.id == 484)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("迪符特",4);
               }
            },null]);
         }
         else if(index == 2)
         {
            NpcDialog.show(NPC.DIFUTE,["只有抵挡住我的10次攻击，才可以通过此次特训！"],["来吧，战神联盟，勇往直前！","让我再准备一下。"],[function():void
            {
               if(!checkFirstPet(0))
               {
                  Alarm.show("需要把卡修斯设为首发精灵！");
               }
               else if(MapManager.currentMap.id == 65)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("迪符特",7);
               }
               else if(MapManager.currentMap.id == 484)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("迪符特",5);
               }
            },null]);
         }
         else
         {
            if(index != 3)
            {
               return;
            }
            NpcDialog.show(NPC.DIFUTE,["只有打出3000以上的伤害，才可以通过此次特训！"],["来吧，战神联盟，勇往直前！","让我再准备一下。"],[function():void
            {
               if(!checkFirstPet(0))
               {
                  Alarm.show("需要把卡修斯设为首发精灵！");
               }
               else if(MapManager.currentMap.id == 65)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("迪符特",8);
               }
               else if(MapManager.currentMap.id == 484)
               {
                  SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_TRAIN_END_INFO,onGetTrainResult);
                  FightManager.fightWithBoss("迪符特",6);
               }
            },null]);
         }
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(MapManager.currentMap.id == 65)
            {
               SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_1);
               SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_2);
               SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_3);
               SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_GOTSCORE,onListen_4);
               _map.conLevel["act"].removeEventListener(MouseEvent.CLICK,onAct);
               DisplayUtil.removeForParent(_map.conLevel["act"]);
               _map.depthLevel["kaxiusi"].visible = true;
               _map.depthLevel["gaiya"].visible = true;
               _map.depthLevel["leiyi"].visible = true;
               _map.depthLevel["bulaike"].visible = true;
            }
            _map = null;
         }
      }
   }
}
