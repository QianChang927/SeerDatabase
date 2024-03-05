package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class Task814
   {
      
      private static var _map:BaseMapProcess;
      
      private static const TASK_ID:uint = 814;
      
      private static var _taskState:uint;
      
      private static var _clickBall:uint;
      
      private static var _buryCount:uint;
      
      private static var _isThrow:Boolean;
      
      public static const TIME_STR:String = "0xff000011月6日-11月12日 18:00-20:00 0xffffff";
      
      private static const ac:ActivityControl = new ActivityControl([new CronTimeVo("*","18-19","6-12","11","*","2015")]);
      
      private static const END_DATE:Date = new Date(2015,11 - 1,12,24,0,0,0);
       
      
      public function Task814()
      {
         super();
      }
      
      public static function initFor53(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               beforeTask();
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor53);
               break;
            case TasksManager.COMPLETE:
               introActivity();
         }
      }
      
      public static function initFor691(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               OgreController.isShow = false;
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor691);
               break;
            case TasksManager.COMPLETE:
               startActivity();
         }
      }
      
      private static function checkStepFor53(param1:Array) : void
      {
         if(!param1[0])
         {
            startTask();
         }
         else
         {
            introActivity();
         }
      }
      
      private static function checkStepFor691(param1:Array) : void
      {
         if(Boolean(param1[0]) && !param1[1])
         {
            startStep0();
         }
         else
         {
            OgreController.isShow = false;
         }
      }
      
      private static function introActivity() : void
      {
         _map.animatorLevel["bubble"].visible = true;
         _map.animatorLevel["bubble"].gotoAndStop(2);
         _map.conLevel["situoliya"].visible = true;
         _map.conLevel["situoliya"].buttonMode = true;
         _map.conLevel["situoliya"].addEventListener(MouseEvent.CLICK,onClickSituoliya);
         _map.conLevel["tuoniya"].visible = true;
         _map.conLevel["tuoniya"].buttonMode = true;
         _map.conLevel["tuoniya"].addEventListener(MouseEvent.CLICK,onClickTuoniya);
      }
      
      private static function onClickTuoniya(param1:Event) : void
      {
         NpcDialog.show(NPC.TUONIYA,["据说珀伽索斯将我们的孩子都冰封在雪球中，" + TIME_STR + "是斯诺星最不寒冷的时候，到时候你可要及时击碎大雪球拯救我的孩子啊！"],["恩，放心吧！托尼亚，我一定回来的！"],[]);
      }
      
      private static function onClickSituoliya(param1:Event) : void
      {
         NpcDialog.show(NPC.SITUOLIYA,["额，是赛尔啊！事情是这样的，前不久，珀伽索斯闯入了斯诺星，将冰系精灵都带进了山洞，好像正在搞什么仪式，你能想办法救救我的孩子吗？"],["恩，我这就进去看看！"],[]);
      }
      
      private static function beforeTask() : void
      {
         _map.animatorLevel["bubble"].visible = true;
         _map.conLevel["door_1"].visible = false;
         AnimateManager.playMcAnimate(_map.animatorLevel["bubble"],1,"mc1",function():void
         {
            _map.conLevel["situoliya"].visible = true;
            _map.conLevel["situoliya"].buttonMode = true;
            _map.conLevel["situoliya"].addEventListener(MouseEvent.CLICK,onClickBubble);
         });
      }
      
      private static function onClickBubble(param1:Event) : void
      {
         var e:Event = param1;
         MainManager.actorModel.moveAndAction(new Point(720,220),function():void
         {
            MainManager.actorModel.direction = Direction.LEFT_UP;
            _map.conLevel["situoliya"].visible = false;
            _map.conLevel["situoliya"].removeEventListener(MouseEvent.CLICK,onClickBubble);
            TasksManager.accept(TASK_ID,startTask);
         });
      }
      
      private static function startTask(param1:Boolean = true) : void
      {
         var b:Boolean = param1;
         if(!b)
         {
            return;
         }
         _map.conLevel["door_1"].visible = false;
         _map.animatorLevel["bubble"].visible = true;
         _map.animatorLevel["bubble"].gotoAndStop(3);
         NpcDialog.show(NPC.SITUOLIYA,["哎…我真没用，连保护这些孩子都做不到！"],["呀！这里果然有问题！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["斯托利亚，这里怎么了！你和托尼亚为何这么伤心啊！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SITUOLIYA,["额，是赛尔啊！事情是这样的，前不久，珀伽索斯闯入了斯诺星，将冰系精灵都带进了山洞，好像正在搞什么仪式，你能想办法救救我的孩子吗？"],["恩，我这就进去看看！"],[function():void
               {
                  TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                  {
                     if(!param1)
                     {
                        return;
                     }
                     _map.conLevel["door_1"].visible = true;
                     CommonUI.addYellowArrow(_map.conLevel,825,165,180);
                  });
               }]);
            });
         }]);
      }
      
      private static function startStep0() : void
      {
         OgreController.isShow = false;
         _map.conLevel["activity"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["activity"],1,"mc1",function():void
         {
            _map.conLevel["activity"].gotoAndStop(2);
            _map.conLevel["activity"].buttonMode = true;
            _map.conLevel["activity"].addEventListener(MouseEvent.CLICK,onClickActivity);
         });
      }
      
      private static function onClickActivity(param1:Event) : void
      {
         var e:Event = param1;
         _map.conLevel["activity"].removeEventListener(MouseEvent.CLICK,onClickActivity);
         _map.conLevel["activity"]["mc2"]["guide"].visible = false;
         NpcDialog.show(NPC.POJIASUOSI,["哼哼！小铁皮你的嗅觉不错嘛！这么快就能找到我，不过你来的太晚了，这些冰系精灵已经被我困在雪球中，想要救它们的话可以，不过小心雪崩哦！"],["可恶，太卑鄙了！"],[function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["activity"],3,"mc3",function():void
            {
               _map.conLevel["monster"].visible = true;
               _map.conLevel["monster"].buttonMode = true;
               _map.conLevel["monster"].addEventListener(MouseEvent.CLICK,onClickMonster);
            });
         }]);
      }
      
      public static function onClickMonster(param1:Event) : void
      {
         var e:Event = param1;
         _map.conLevel["monster"].removeEventListener(MouseEvent.CLICK,onClickMonster);
         NpcDialog.show(NPC.XIAOXUEQIU,["珀伽索斯将我的伙伴们都冰封在大雪球中，" + TIME_STR + "是斯诺星最不寒冷的时候，到时候你可要及时击碎大雪球拯救我的朋友啊！"],["恩，放心吧！我一定会来的！"],[function():void
         {
            TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
            {
               if(!param1)
               {
                  return;
               }
               OgreController.isShow = true;
               startActivity();
            });
         }]);
      }
      
      public static function onClickMonster2(param1:Event) : void
      {
         NpcDialog.show(NPC.XIAOXUEQIU,["珀伽索斯将我的伙伴们都冰封在大雪球中，" + TIME_STR + "是斯诺星最不寒冷的时候，到时候你可要及时击碎大雪球拯救我的朋友啊！"],["恩，放心吧！我一定会来的！"],[]);
      }
      
      private static function startActivity() : void
      {
         onGetTime();
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onGetTime);
      }
      
      private static function onGetTime(param1:SocketEvent = null) : void
      {
         if(ac.isInActivityTime)
         {
            timeIn();
         }
         else
         {
            timeOut();
         }
      }
      
      private static function timeIn() : void
      {
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["activity"].visible = false;
         _map.conLevel["monster"].visible = true;
         _map.conLevel["monster"].buttonMode = true;
         _map.conLevel["monster"].addEventListener(MouseEvent.CLICK,onClickMonster1);
         _map.animatorLevel["blood"].visible = true;
         _map.conLevel["bigBall"].visible = true;
         SocketConnection.addCmdListener(CommandID.SINUO_ACT_CHECK_STATUS,onFinishCheck);
         SocketConnection.send(CommandID.SINUO_ACT_CHECK_STATUS);
      }
      
      private static function onFinishCheck(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var blood:uint;
         var smallBall:uint;
         var bit:uint = 0;
         var i:int = 0;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.SINUO_ACT_CHECK_STATUS,onFinishCheck);
         data = e.data as ByteArray;
         blood = data.readUnsignedInt();
         smallBall = data.readUnsignedInt();
         if(blood != 0)
         {
            _map.animatorLevel["blood"].gotoAndStop(51 - blood * 2);
            ToolBarController.noticeAimat(true);
            AimatController.addEventListener(AimatEvent.PLAY_END,onShootOver);
            if(blood == 25 && MapManager.prevMapID == 691)
            {
               AnimateManager.playMcAnimate(_map.conLevel["monster"],2,"mc2",function():void
               {
                  _map.conLevel["monster"].gotoAndStop(1);
               });
            }
         }
         else
         {
            _map.animatorLevel["blood"].visible = false;
            _map.conLevel["bigBall"].visible = false;
            i = 0;
            while(i < 10)
            {
               bit = uint(smallBall & 1);
               if(bit == 1)
               {
                  _map.conLevel["smallBall" + i].visible = true;
               }
               else
               {
                  _map.conLevel["smallBall" + i].visible = false;
               }
               _map.conLevel["smallBall" + i].buttonMode = true;
               _map.conLevel["smallBall" + i].addEventListener(MouseEvent.CLICK,onClickSmallBall);
               smallBall >>= 1;
               i++;
            }
         }
      }
      
      private static function onShootOver(param1:AimatEvent) : void
      {
         if(_map.conLevel["bigBall"].hitTestPoint(param1.info.endPos.x,param1.info.endPos.y))
         {
            SocketConnection.addCmdListener(CommandID.SINUO_ACT_SHOOT_COUNT,onSendShoot);
            SocketConnection.send(CommandID.SINUO_ACT_SHOOT_COUNT);
         }
      }
      
      private static function onSendShoot(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var blood:uint = 0;
         var affair:uint = 0;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.SINUO_ACT_SHOOT_COUNT,onSendShoot);
         data = e.data as ByteArray;
         blood = data.readUnsignedInt();
         affair = data.readUnsignedInt();
         _map.animatorLevel["blood"].gotoAndStop(51 - blood * 2);
         _map.conLevel["snowFlake"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["snowFlake"],1,"",function():void
         {
            _map.conLevel["snowFlake"].visible = false;
            if(blood == 0)
            {
               ToolBarController.noticeAimat(false);
               _map.animatorLevel["blood"].visible = false;
               AnimateManager.playMcAnimate(_map.conLevel["bigBall"],1,"mc1",function():void
               {
                  _map.conLevel["bigBall"].visible = false;
                  var _loc1_:int = 0;
                  while(_loc1_ < 10)
                  {
                     _map.conLevel["smallBall" + _loc1_].visible = true;
                     _map.conLevel["smallBall" + _loc1_].buttonMode = true;
                     _map.conLevel["smallBall" + _loc1_].addEventListener(MouseEvent.CLICK,onClickSmallBall);
                     _loc1_++;
                  }
               });
               return;
            }
            if(affair == 1)
            {
               affair1Happen();
            }
            else if(affair == 2)
            {
               affair2Happen();
            }
            else
            {
               AimatController.start(0);
            }
         });
      }
      
      private static function onClickSmallBall(param1:Event) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:uint = new uint(_loc2_.name.slice(9));
         _clickBall = _loc3_;
         SocketConnection.addCmdListener(CommandID.SINUO_ACT_BOSS_REGION,onGetRegion);
         SocketConnection.send(CommandID.SINUO_ACT_BOSS_REGION,_loc3_ + 1);
      }
      
      private static function onGetRegion(param1:SocketEvent) : void
      {
         var region:uint = 0;
         var petID:uint = 0;
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         region = data.readUnsignedInt();
         petID = data.readUnsignedInt();
         if(region == 0)
         {
            AnimateManager.playMcAnimate(_map.conLevel["smallBall" + _clickBall],2,"mc2",function():void
            {
               Alarm.show("雪球中好像没什么东西继续努力哦！");
               MapManager.refMap();
            });
         }
         else
         {
            KTool.getFrameMc(_map.conLevel["smallBall" + _clickBall],region + 2,"",function(param1:DisplayObject):void
            {
               var o:DisplayObject = param1;
               var mc:MovieClip = o as MovieClip;
               AnimateManager.playMcAnimate(mc,1,"",function():void
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
                  EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
                  FightManager.fightWithBoss(PetXMLInfo.getName(petID),region - 1);
               });
            });
         }
      }
      
      private static function onFinishFight(param1:PetFightEvent) : void
      {
      }
      
      private static function onFightError(param1:RobotEvent) : void
      {
         _map.conLevel["smallBall" + _clickBall].gotoAndStop(1);
      }
      
      private static function affair1Happen() : void
      {
         AimatController.removeEventListener(AimatEvent.PLAY_END,onShootOver);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_814_1"),function():void
         {
            _map.btnLevel["barrier"].visible = true;
            MainManager.selfVisible = false;
            _map.conLevel["bury"].visible = true;
            _map.conLevel["bury"].gotoAndStop(1);
            _map.conLevel["bury"].buttonMode = true;
            _buryCount = 0;
            NpcDialog.show(NPC.SEER,["真倒霉，居然引发雪崩了，现在我的造型一定很丑，一定要想办法从雪堆里出来！ "],null,null,false,function():void
            {
               ToolBarController.panel.mouseEnabled = false;
               ToolBarController.panel.mouseChildren = false;
               _map.conLevel["bury"].addEventListener(MouseEvent.CLICK,onClickBury);
               CommonUI.addYellowArrow(_map.conLevel["bury"],700,375,300);
            });
         });
      }
      
      private static function onClickBury(param1:Event) : void
      {
         var e:Event = param1;
         ++_buryCount;
         if(_buryCount == 3)
         {
            _map.conLevel["bury"].removeEventListener(MouseEvent.CLICK,onClickBury);
            CommonUI.removeYellowArrow(_map.conLevel["bury"]);
            KTool.getFrameMc(_map.conLevel["bury"],2,"",function(param1:DisplayObject):void
            {
               var o:DisplayObject = param1;
               var mc:MovieClip = o as MovieClip;
               AnimateManager.playMcAnimate(mc,1,"",function():void
               {
                  ToolBarController.panel.mouseEnabled = true;
                  ToolBarController.panel.mouseChildren = true;
                  _map.conLevel["bury"].visible = false;
                  MainManager.actorModel.x = 700;
                  MainManager.actorModel.y = 410;
                  MainManager.selfVisible = true;
                  if(SystemTimerManager.sysDate.time <= END_DATE.time)
                  {
                     AimatController.addEventListener(AimatEvent.PLAY_END,onShootOver);
                  }
                  _map.btnLevel["barrier"].visible = false;
               });
            });
         }
      }
      
      private static function affair2Happen() : void
      {
         MainManager.selfVisible = false;
         _map.conLevel["activity"].visible = true;
         KTool.getFrameMc(_map.conLevel["activity"],4,"",function(param1:DisplayObject):void
         {
            var o:DisplayObject = param1;
            var mc:MovieClip = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               _isThrow = true;
               MapManager.changeMap(53);
            });
         });
      }
      
      private static function onClickMonster1(param1:Event) : void
      {
         NpcDialog.show(NPC.XIAOXUEQIU,["快看，雪球变的越来越大了，现在正是溶解雪球的最佳时机，否则就没机会啦！"],["利用头部射击攻击大雪球！"],[]);
      }
      
      private static function timeOut() : void
      {
         AimatController.removeEventListener(AimatEvent.PLAY_END,onShootOver);
         _map.conLevel["activity"].visible = false;
         _map.conLevel["monster"].visible = true;
         _map.conLevel["monster"].buttonMode = true;
         _map.conLevel["monster"].addEventListener(MouseEvent.CLICK,onClickMonster2);
         _map.animatorLevel["blood"].visible = false;
         _map.conLevel["bigBall"].visible = true;
      }
      
      public static function throwDialog() : void
      {
         if(_isThrow)
         {
            NpcDialog.show(NPC.SEER,["可恶，这么关键的时刻，珀伽索斯竟然回来了！不过我是不会放弃的！"],["继续前往斯诺秘洞！"],[function():void
            {
               _isThrow = false;
            }]);
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onGetTime);
         SocketConnection.removeCmdListener(CommandID.SINUO_ACT_SHOOT_COUNT,onSendShoot);
         AimatController.removeEventListener(AimatEvent.PLAY_END,onShootOver);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         ToolBarController.noticeAimat(false);
         ToolBarController.showOrHideAllUser(true);
         if(_map.conLevel["situoliya"])
         {
            _map.conLevel["situoliya"].removeEventListener(MouseEvent.CLICK,onClickBubble);
            _map.conLevel["situoliya"].removeEventListener(MouseEvent.CLICK,onClickSituoliya);
         }
         if(_map.conLevel["tuoniya"])
         {
            _map.conLevel["tuoniya"].removeEventListener(MouseEvent.CLICK,onClickTuoniya);
         }
         if(_map.conLevel["activity"])
         {
            _map.conLevel["activity"].removeEventListener(MouseEvent.CLICK,onClickActivity);
         }
         if(_map.conLevel["monster"])
         {
            _map.conLevel["monster"].removeEventListener(MouseEvent.CLICK,onClickMonster);
            _map.conLevel["monster"].removeEventListener(MouseEvent.CLICK,onClickMonster1);
         }
         if(_map.conLevel["bury"])
         {
            _map.conLevel["bury"].removeEventListener(MouseEvent.CLICK,onClickBury);
         }
         var _loc1_:int = 0;
         while(_loc1_ < 10)
         {
            if(_map.conLevel["smallBall" + _loc1_])
            {
               _map.conLevel["smallBall" + _loc1_].removeEventListener(MouseEvent.CLICK,onClickSmallBall);
            }
            _loc1_++;
         }
         MainManager.selfVisible = true;
         OgreController.isShow = true;
         CommonUI.removeYellowArrow(_map.conLevel);
         ToolBarController.panel.mouseEnabled = true;
         ToolBarController.panel.mouseChildren = true;
      }
   }
}
