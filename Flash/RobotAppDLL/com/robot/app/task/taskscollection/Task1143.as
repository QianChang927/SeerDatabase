package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.utils.Direction;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1143
   {
      
      private static const TASK_ID:uint = 1247;
      
      private static var _taskState:uint;
      
      private static var _map:BaseMapProcess;
      
      private static var _shootCount:uint;
      
      private static var _region:uint;
      
      private static var _isActivity:Boolean;
      
      public static var _isPlay:Boolean;
      
      public static var _isBridge:Boolean;
      
      public static var _isFight:Boolean;
      
      public static var _isFirst:Boolean;
      
      private static const TIME_STR:String = "18:00-20:00";
       
      
      public function Task1143()
      {
         super();
      }
      
      public static function initFor684(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               beforeTask();
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor684);
               break;
            case TasksManager.COMPLETE:
         }
      }
      
      public static function initFor687(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor687);
               break;
            case TasksManager.COMPLETE:
               taskComplete();
         }
      }
      
      private static function checkStepFor684(param1:Array) : void
      {
         if(!param1[0])
         {
            startTask();
         }
      }
      
      private static function checkStepFor687(param1:Array) : void
      {
         if(Boolean(param1[0]) && !param1[1])
         {
            startStep0();
         }
      }
      
      private static function beforeTask() : void
      {
         _map.conLevel["bubble"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["bubble"],1,"mc1",function():void
         {
            CommonUI.addYellowArrow(_map.conLevel["bubble"],450,350,300);
            _map.conLevel["bubble"].buttonMode = true;
            _map.conLevel["bubble"].addEventListener(MouseEvent.CLICK,onClickPeterSaluo);
         });
      }
      
      private static function onClickPeterSaluo(param1:Event) : void
      {
         var e:Event = param1;
         if(!_isBridge)
         {
            _map.conLevel["bridge"].mouseEnabled = false;
            _map.conLevel["bridge"].mouseChildren = false;
            AnimateManager.playMcAnimate(_map.conLevel["bridge"],0,"",function():void
            {
               Task1143._isBridge = true;
               DisplayUtil.removeForParent(_map.typeLevel["barrier"]);
               MapManager.currentMap.makeMapArray();
               MainManager.actorModel.moveAndAction(new Point(440,420),function():void
               {
                  CommonUI.removeYellowArrow(_map.conLevel["bubble"]);
                  MainManager.actorModel.direction = Direction.RIGHT;
                  TasksManager.accept(TASK_ID,startTask);
               });
            });
         }
         else
         {
            MainManager.actorModel.moveAndAction(new Point(440,420),function():void
            {
               CommonUI.removeYellowArrow(_map.conLevel["bubble"]);
               MainManager.actorModel.direction = Direction.RIGHT;
               TasksManager.accept(TASK_ID,startTask);
            });
         }
      }
      
      private static function startTask(param1:Boolean = true) : void
      {
         var b:Boolean = param1;
         if(!b)
         {
            return;
         }
         _map.conLevel["bubble"].visible = true;
         _map.conLevel["bubble"].removeEventListener(MouseEvent.CLICK,onClickPeterSaluo);
         NpcDialog.show(NPC.PITESALUO,[MainManager.actorInfo.formatNick + "，你来的正好，快帮忙救救我的宝贝蛋吧！否则就会被漩涡卷入湖底了！"],["哇！怎么会这样啊！"],[function():void
         {
            NpcDialog.show(NPC.PITESALUO,["我也不知道，之前我看到一群海盗在这里鬼鬼祟祟，刚想上前阻止，他们却一下钻进了湖里~"],["难道是…还是先救你的宝贝蛋再说！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_802_1"),function():void
               {
                  MainManager.actorModel.x = 550;
                  MainManager.actorModel.y = 348;
                  MainManager.actorModel.direction = Direction.DOWN;
                  MainManager.selfVisible = false;
                  _map.conLevel["bubble"].gotoAndStop(2);
                  NpcDialog.show(NPC.SEER,["阿布！真是太感谢你了！幸亏你及时出现，否则我们都不知道如何是好了！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.ABU,["这点小事不算什么！不过湖底的海之子神殿即将大难临头了~"],["海之子神殿？"],[function():void
                     {
                        NpcDialog.show(NPC.ABU,["哎…说来话长，你最好还是和我下去看看吧!鱼龙王需要你的帮助！"],["鱼龙王，那我们马上就走！"],[function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["bubble"],3,"mc3",function():void
                           {
                              NpcDialog.show(NPC.SEER,["看来事情相当严重啊！不知道漩涡下面究竟发生了什么，去看看再说！"],["立刻跳入漩涡！"],[function():void
                              {
                                 _map.conLevel["bubble"].visible = false;
                                 MainManager.selfVisible = true;
                                 _map.conLevel["vortex"].buttonMode = true;
                                 CommonUI.addYellowArrow(_map.conLevel["vortex"],0,0,300);
                                 _isPlay = true;
                                 TasksManager.complete(TASK_ID,0);
                              }]);
                           });
                        }]);
                     }]);
                  });
               });
            }]);
         }]);
      }
      
      private static function startStep0() : void
      {
         _map.conLevel["activity"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["activity"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["哇！远古鱼龙还有鱼龙王都出现了，看上去一场大战即将发生！"],["再继续观望观望！"],[function():void
            {
               NpcDialog.show(NPC.YULONGWANG,["水系同胞们，现在海之子神殿已经出现有史以来最强大的敌人，宇宙中最邪恶的海盗集团抓走了我们亲人，就是想获得0xff0000海魂之力0xffffff，大家要小心附近的漩涡！ "],["什么！宇宙海盗？"],[function():void
               {
                  NpcDialog.show(NPC.YULONGWANG,["现在大家都各自准备一下，相信海盗集团一定会在晚上偷袭这里，我会带领大家守护海之子神殿！散……."],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["activity"],2,"mc2",function():void
                     {
                        CommonUI.addYellowExcal(_map.conLevel["activity"],486,85,1.2);
                        _map.conLevel["activity"].buttonMode = true;
                        _map.conLevel["activity"].addEventListener(MouseEvent.CLICK,onClickKing);
                     });
                  });
               }]);
            }]);
         });
      }
      
      private static function onClickKing(param1:Event) : void
      {
         var e:Event = param1;
         _map.conLevel["activity"].removeEventListener(MouseEvent.CLICK,onClickKing);
         CommonUI.removeYellowExcal(_map.conLevel["activity"]);
         NpcDialog.show(NPC.YULONGWANG,["珀伽索斯！！！你们休想霸占海底世界，有我鱼龙王在，海盗们你们休想得逞！"],["去问问发生事了！"],[function():void
         {
            NpcDialog.show(NPC.YULONGWANG,["前不久，海盗偷袭了这里，他们的目的就是获得海之子并拿到0xff0000海魂之力0xffffff，然而守护这里确是我们鱼龙王一族的使命！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.YULONGWANG,["我猜测海盗集团一定还会卷土重来，0xff0000他们一定会在17:00—20:00进攻这里0xffffff，到时就让我们好好教训他们吧！"],["恩恩，我一定会救出那些水系伙伴的！"],[function():void
               {
                  TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                  {
                     if(!param1)
                     {
                        return;
                     }
                     taskComplete();
                  });
               }]);
            });
         }]);
      }
      
      private static function taskComplete() : void
      {
         _isActivity = true;
         if(TasksManager.getTaskStatus(811) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(811,function(param1:Array):void
            {
               if(param1[1] && !param1[2] && SystemTimerManager.sysDate.hours != 19)
               {
                  return;
               }
               onCheckTime();
               SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckTime);
            });
         }
         else
         {
            onCheckTime();
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckTime);
         }
      }
      
      private static function onCheckTime(param1:Event = null) : void
      {
         var _loc2_:ActivityControl = new ActivityControl([new CronTimeVo("*","18-19","11-17","9","*","2015")]);
         if(_loc2_.isInActivityTime)
         {
            inTime();
         }
         else
         {
            outOfTime();
         }
      }
      
      private static function inTime() : void
      {
         var random:uint = 0;
         if(_isActivity)
         {
            _isActivity = true;
            _isFight = false;
            _map.conLevel["activity"].visible = false;
            _map.conLevel["challenge"].visible = false;
            _map.conLevel["blood"].visible = false;
            _map.conLevel["vortex"].visible = true;
            _map.conLevel["vortex"].gotoAndStop(2);
            _map.conLevel["vortex"].gotoAndStop(2);
            _map.conLevel["drag"].visible = true;
            _map.conLevel["drag"].gotoAndStop(1);
            _map.conLevel["drag"].buttonMode = true;
            _map.conLevel["drag"].removeEventListener(MouseEvent.CLICK,onClickDrag1);
            _map.conLevel["drag"].addEventListener(MouseEvent.CLICK,onClickDrag);
            AimatController.addEventListener(AimatEvent.PLAY_END,onShootDrag);
            _shootCount = 0;
            _map.conLevel["run"].visible = true;
            _map.conLevel["run"].gotoAndStop(1);
            _map.conLevel["run"].buttonMode = true;
            _map.conLevel["run"].removeEventListener(MouseEvent.CLICK,onClickRun1);
            _map.conLevel["run"].addEventListener(MouseEvent.CLICK,onClickRun);
            random = Math.floor(Math.random() * 6) + 1;
            _map.conLevel["pk"].visible = true;
            _map.conLevel["pk"].gotoAndStop(random);
            _map.conLevel["pk"].buttonMode = true;
            _map.conLevel["pk"].removeEventListener(MouseEvent.CLICK,onClickPk1);
            _map.conLevel["pk"].addEventListener(MouseEvent.CLICK,onClickPk);
            if(_isFirst)
            {
               return;
            }
            _isFirst = true;
            NpcDialog.show(NPC.SEER,["不好，看来海盗马上就要开始进攻了，海之子神殿以及水系伙伴我一定会拯救你们的！"],["全面御敌！"],[]);
         }
         else
         {
            _isActivity = true;
            _isFight = false;
            _map.conLevel["activity"].visible = false;
            _map.conLevel["challenge"].visible = true;
            _map.conLevel["vortex"].visible = true;
            _map.conLevel["blood"].visible = false;
            AnimateManager.playMcAnimate(_map.conLevel["challenge"],0,"",function():void
            {
               NpcDialog.show(NPC.SEER,["不好，看来海盗马上就要开始进攻了，海之子神殿以及水系伙伴我一定会拯救你们的！"],["全面御敌！"],[function():void
               {
                  _map.conLevel["vortex"].gotoAndStop(2);
                  _map.conLevel["drag"].visible = true;
                  _map.conLevel["drag"].buttonMode = true;
                  _map.conLevel["drag"].addEventListener(MouseEvent.CLICK,onClickDrag);
                  AimatController.addEventListener(AimatEvent.PLAY_END,onShootDrag);
                  _shootCount = 0;
                  _map.conLevel["run"].visible = true;
                  _map.conLevel["run"].buttonMode = true;
                  _map.conLevel["run"].addEventListener(MouseEvent.CLICK,onClickRun);
                  var _loc1_:* = Math.floor(Math.random() * 6) + 1;
                  _map.conLevel["pk"].visible = true;
                  _map.conLevel["pk"].gotoAndStop(_loc1_);
                  _map.conLevel["pk"].buttonMode = true;
                  _map.conLevel["pk"].addEventListener(MouseEvent.CLICK,onClickPk);
               }]);
            });
         }
      }
      
      private static function onClickPk(param1:Event) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFinishFight1);
         _isFight = true;
         FightManager.fightWithBoss("海盗潜水兵",7);
      }
      
      private static function onFinishFight1(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFinishFight1);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            FightWin1();
         }
         else
         {
            FightLose1();
         }
      }
      
      private static function FightWin1() : void
      {
         _map.conLevel["pk"].gotoAndStop(7);
         _map.conLevel["pk"].buttonMode = true;
         _map.conLevel["pk"].removeEventListener(MouseEvent.CLICK,onClickPk);
         _map.conLevel["pk"].addEventListener(MouseEvent.CLICK,onClickPk1);
      }
      
      private static function onClickPk1(param1:Event) : void
      {
         SocketConnection.addCmdListener(CommandID.CHECK_BOSS_SEA,onCheckBoss);
         SocketConnection.send(CommandID.CHECK_BOSS_SEA);
      }
      
      private static function FightLose1() : void
      {
         NpcDialog.show(NPC.SEER,["神马？我竟然输给你这样的对手！！"],["再来！"],[]);
      }
      
      private static function onClickRun(param1:Event) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
         _isFight = true;
         FightManager.fightWithBoss("海盗潜水兵",7);
      }
      
      private static function onFinishFight(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            FightWin();
         }
         else
         {
            FightLose();
         }
      }
      
      private static function FightWin() : void
      {
         _map.conLevel["run"].gotoAndStop(2);
         _map.conLevel["run"].buttonMode = true;
         _map.conLevel["run"].removeEventListener(MouseEvent.CLICK,onClickRun);
         _map.conLevel["run"].addEventListener(MouseEvent.CLICK,onClickRun1);
      }
      
      private static function onClickRun1(param1:Event) : void
      {
         SocketConnection.addCmdListener(CommandID.CHECK_BOSS_SEA,onCheckBoss);
         SocketConnection.send(CommandID.CHECK_BOSS_SEA);
      }
      
      private static function FightLose() : void
      {
         NpcDialog.show(NPC.SEER,["可恶，我不会轻易放弃的！"]);
      }
      
      private static function onShootDrag(param1:Event) : void
      {
         _map.conLevel["blood"].visible = true;
         ++_shootCount;
         _map.conLevel["blood"].gotoAndStop(_shootCount + 1);
         if(_shootCount == 3)
         {
            _map.conLevel["blood"].visible = false;
            AimatController.removeEventListener(AimatEvent.PLAY_END,onShootDrag);
            _map.conLevel["drag"].removeEventListener(MouseEvent.CLICK,onClickDrag);
            _map.conLevel["drag"].gotoAndStop(2);
            _map.conLevel["drag"].buttonMode = true;
            _map.conLevel["drag"].addEventListener(MouseEvent.CLICK,onClickDrag1);
         }
      }
      
      private static function onClickDrag1(param1:Event) : void
      {
         SocketConnection.addCmdListener(CommandID.CHECK_BOSS_SEA,onCheckBoss);
         SocketConnection.send(CommandID.CHECK_BOSS_SEA);
      }
      
      private static function onCheckBoss(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.CHECK_BOSS_SEA,onCheckBoss);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _region = _loc2_.readUnsignedInt();
         if(_loc3_ == 400033)
         {
            ItemInBagAlert.show(400033,"一个<font color=\'#ff0000\'>" + ItemXMLInfo.getName(400033) + "</font>已经放入你的储存箱中");
            onCheckTime();
            return;
         }
         _isFight = true;
         FightManager.fightWithBoss(PetXMLInfo.getName(_loc3_),_region);
      }
      
      private static function onClickDrag(param1:Event) : void
      {
         NpcDialog.show(NPC.HAIDAO_QIANSHUIBING,["小子，别妨碍我工作！"],["利用头部射击消灭海盗"],[]);
      }
      
      private static function outOfTime() : void
      {
         _isActivity = false;
         _map.conLevel["activity"].visible = true;
         _map.conLevel["drag"].visible = false;
         _map.conLevel["blood"].visible = false;
         _map.conLevel["challenge"].visible = false;
         _map.conLevel["vortex"].visible = false;
         _map.conLevel["run"].visible = false;
         _map.conLevel["pk"].visible = false;
         _map.conLevel["activity"].gotoAndStop(3);
         _map.conLevel["activity"].buttonMode = true;
         _map.conLevel["activity"].addEventListener(MouseEvent.CLICK,onClickIntro);
      }
      
      private static function onClickIntro(param1:Event) : void
      {
         NpcDialog.show(NPC.YULONGWANG,["我猜测珀伽索斯已经和海盗勾结，他们一定会在" + TIME_STR + "进攻这里，到时就让我们好好教训他们吧！"],["恩恩，我一定会救出那些水系伙伴的！"],[]);
      }
      
      public static function destroy() : void
      {
         _isPlay = false;
         _isBridge = false;
         if(Boolean(_map) && Boolean(_map.conLevel["bridge"]))
         {
            _map.conLevel["bridge"].mouseEnabled = true;
            _map.conLevel["bridge"].mouseChildren = true;
         }
         if(Boolean(_map) && Boolean(_map.conLevel["bubble"]))
         {
            _map.conLevel["bubble"].removeEventListener(MouseEvent.CLICK,onClickPeterSaluo);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["vortex"]))
         {
            CommonUI.removeYellowArrow(_map.conLevel["vortex"]);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["activity"]))
         {
            _map.conLevel["activity"].removeEventListener(MouseEvent.CLICK,onClickKing);
            _map.conLevel["activity"].removeEventListener(MouseEvent.CLICK,onClickIntro);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["drag"]))
         {
            _map.conLevel["drag"].removeEventListener(MouseEvent.CLICK,onClickDrag);
            _map.conLevel["drag"].removeEventListener(MouseEvent.CLICK,onClickDrag1);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["run"]))
         {
            _map.conLevel["run"].removeEventListener(MouseEvent.CLICK,onClickRun);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["pk"]))
         {
            _map.conLevel["pk"].removeEventListener(MouseEvent.CLICK,onClickPk);
         }
         SocketConnection.removeCmdListener(CommandID.CHECK_BOSS_SEA,onCheckBoss);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckTime);
         AimatController.removeEventListener(AimatEvent.PLAY_END,onShootDrag);
      }
   }
}
