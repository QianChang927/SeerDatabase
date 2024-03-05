package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task812
   {
      
      private static const TASK_ID:uint = 812;
      
      private static var _taskState:uint;
      
      public static var _map:BaseMapProcess;
      
      private static var _date:Date;
      
      public static var _isFight:Boolean;
      
      public static var _fightState:Array;
      
      public static var _fightBall:uint;
      
      public static var _fightCount:uint;
      
      private static var _clickPet:uint;
      
      private static var _petList:Array = ["皮卡","刹洛眼","尼奥","佩希","卡普"];
       
      
      public function Task812()
      {
         super();
      }
      
      public static function initFor19(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               beforeTask();
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor19);
               break;
            case TasksManager.COMPLETE:
               CommonUI.addYellowExcal(_map.conLevel["bubble"],320,300);
               _map.conLevel["bubble"].visible = true;
               _map.conLevel["bubble"].gotoAndStop(3);
               _map.conLevel["bubble"].buttonMode = true;
               _map.conLevel["bubble"].addEventListener(MouseEvent.CLICK,onClickBubble1);
         }
      }
      
      private static function checkStepFor19(param1:Array) : void
      {
         if(!param1[0])
         {
            startTask();
         }
         else
         {
            CommonUI.addYellowExcal(_map.conLevel["bubble"],320,300);
            _map.conLevel["bubble"].visible = true;
            _map.conLevel["bubble"].gotoAndStop(3);
            _map.conLevel["bubble"].buttonMode = true;
            _map.conLevel["bubble"].addEventListener(MouseEvent.CLICK,onClickBubble1);
         }
      }
      
      public static function initFor478(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor478);
               break;
            case TasksManager.COMPLETE:
               taskComplete();
         }
      }
      
      private static function beforeTask() : void
      {
         _map.conLevel["bubble"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["bubble"],1,"mc1",function():void
         {
            CommonUI.addYellowExcal(_map.conLevel["bubble"],320,300);
            _map.conLevel["bubble"].buttonMode = true;
            _map.conLevel["bubble"].addEventListener(MouseEvent.CLICK,onClickBubble);
         });
      }
      
      private static function onClickBubble1(param1:Event) : void
      {
         var e:Event = param1;
         NpcDialog.show(NPC.NIER,["怀特星的黑色洞穴里出现了0xff0000珀伽索斯0xffffff的身影，有许多超能系精灵仿佛都睡着了一样，而且0xff0000珀伽索斯0xffffff也好像进入了梦境！"],["不行，我一定要去看看！"],[function():void
         {
            MapManager.changeMap(478);
         }]);
      }
      
      private static function checkStepFor478(param1:Array) : void
      {
         if(Boolean(param1[0]) && !param1[1])
         {
            startStep0();
         }
      }
      
      private static function onClickBubble(param1:Event) : void
      {
         CommonUI.removeYellowExcal(_map.conLevel["bubble"]);
         _map.conLevel["bubble"].removeEventListener(MouseEvent.CLICK,onClickBubble);
         TasksManager.accept(TASK_ID,startTask);
      }
      
      private static function startTask(param1:Boolean = true) : void
      {
         var b:Boolean = param1;
         if(!b)
         {
            return;
         }
         NpcDialog.show(NPC.NIER,["大事不好啦！怀特星的黑色洞穴里出现了0xff0000珀伽索斯0xffffff的身影，还好我们擅长伪装，否则一定难逃它的魔掌！"],["啊！黑色洞穴发生什么事啦！"],[function():void
         {
            NpcDialog.show(NPC.NIAO,["我们兄弟俩在黑色洞穴发现，有许多超能系精灵仿佛都睡着了一样，而且0xff0000珀伽索斯0xffffff也好像进入了梦境！"],["不对，这里面一定有问题！"],[function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["bubble"],2,"mc2",function():void
               {
                  NpcDialog.show(NPC.SEER,["尼尔，如果有其他赛尔经过这里，你就把这个事情告诉他们，我们只有团结起来才能战胜0xff0000珀伽索斯0xffffff，我先去黑色洞穴看看情况！"],["前往黑色洞穴！"],[function():void
                  {
                     TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                     {
                        if(!param1)
                        {
                           return;
                        }
                        MapManager.changeMap(478);
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function startStep0() : void
      {
         _map.conLevel["activity"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["activity"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["怎么回事！阿尔比零呢？怎么没了！！！那些精灵究竟是怎么了？"],["让我去看看那些睡着的精灵！（点击睡梦中的精灵）"],[function():void
            {
               TasksManager.complete(TASK_ID,1,taskComplete);
            }]);
         });
      }
      
      private static function taskComplete(param1:Boolean = true) : void
      {
         if(!param1)
         {
            return;
         }
         SocketConnection.addCmdListener(CommandID.CHECK_PET_ISCAUGHT,onGetResult);
         SocketConnection.send(CommandID.CHECK_PET_ISCAUGHT);
         DisplayUtil.removeForParent(_map.conLevel["activity"]);
         _map.conLevel["boss"].visible = true;
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            _map.conLevel["pet" + _loc2_].buttonMode = true;
            _map.conLevel["pet" + _loc2_].addEventListener(MouseEvent.CLICK,onClickSleeper);
            _loc2_++;
         }
         _map.conLevel["boss"].buttonMode = true;
         _map.conLevel["boss"].addEventListener(MouseEvent.CLICK,onClickBoss);
      }
      
      private static function onGetResult(param1:SocketEvent) : void
      {
         var _loc4_:uint = 0;
         var _loc8_:String = null;
         SocketConnection.removeCmdListener(CommandID.CHECK_PET_ISCAUGHT,onGetResult);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc5_:int = 0;
         while(_loc5_ < 5)
         {
            if((_loc4_ = uint(_loc3_ & 1)) == 1)
            {
               _map.conLevel["pet" + _loc5_].visible = false;
            }
            else
            {
               _map.conLevel["pet" + _loc5_].visible = true;
            }
            _loc3_ -= _loc4_;
            _loc3_ >>= 1;
            _loc5_++;
         }
         var _loc6_:SharedObject = SOManager.getUserSO(SOManager.LOCALMSG);
         var _loc7_:Date = SystemTimerManager.sysDate;
         _loc5_ = 0;
         while(_loc5_ < 5)
         {
            _loc8_ = "pet_" + _loc5_.toString() + _loc7_.month.toString() + "_" + _loc7_.date.toString();
            if(_loc6_.data[_loc8_] != undefined)
            {
               if(_loc6_.data[_loc8_] == "true")
               {
                  _map.conLevel["pet" + _loc5_].gotoAndStop(2);
               }
            }
            _loc5_++;
         }
      }
      
      private static function onClickBoss(param1:Event) : void
      {
         var _loc2_:ActivityControl = new ActivityControl([new CronTimeVo("*","18-19","30","4","*","2015"),new CronTimeVo("*","18-19","1-7","5","*","2015")]);
         if(_loc2_.isInActivityTime)
         {
            SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckItems);
            SocketConnection.send(CommandID.ITEM_LIST,300446,300449,2);
         }
         else
         {
            NpcDialog.show(NPC.POJIASUOSI,["你一定很想进入我的睡梦空间吧！在里面你一定能享受到前所未有的痛苦！4月30日—5月07日0xff0000每天下午18:00—20:000xffffff睡梦空间就打开，不过你必须拥有四种不同颜色的神之晶球哦！"],["可恶，快去看看周围的精灵！（点击睡梦中的精灵）"],[]);
         }
      }
      
      private static function onCheckItems(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var count:uint;
         var flag:Boolean;
         var i:int;
         var info:SingleItemInfo = null;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onCheckItems);
         data = e.data as ByteArray;
         count = data.readUnsignedInt();
         flag = true;
         i = 0;
         while(i < count)
         {
            info = new SingleItemInfo(data);
            if(info.itemNum < 5)
            {
               flag = false;
            }
            i++;
         }
         if(count != 4)
         {
            flag = false;
         }
         if(flag)
         {
            NpcDialog.show(NPC.POJIASUOSI,["睡梦空间已经打开，有本事就来里面找我吧！哈哈，我等着你的大驾光临！"],["里面是什么，让我去看看！"],[function():void
            {
               SocketConnection.addCmdListener(CommandID.CHECK_CAN_ENTER_SPACE,onCheckDoor);
               SocketConnection.send(CommandID.CHECK_CAN_ENTER_SPACE);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.POJIASUOSI,["传说中四种颜色的神之晶球呢？如果没有这些晶球，你就没有资格进入我的梦境，再去努力吧！想要拯救超能精灵，你必须每个颜色收集5颗，时间不多，啊哈哈！"],["哼！我马上就会收集好的！"],[]);
         }
      }
      
      private static function onCheckDoor(param1:SocketEvent) : void
      {
         MapManager.changeMap(689);
      }
      
      private static function onClickSleeper(param1:Event) : void
      {
         _clickPet = param1.currentTarget.name.slice(3);
         SocketConnection.addCmdListener(CommandID.CHECK_IS_AWAKEN,onCheckIsAwaken);
         SocketConnection.send(CommandID.CHECK_IS_AWAKEN,_clickPet + 1);
      }
      
      private static function onCheckIsAwaken(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.CHECK_IS_AWAKEN,onCheckIsAwaken);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckItems1);
            SocketConnection.send(CommandID.ITEM_LIST,300450,300450,2);
         }
         else
         {
            _map.conLevel["pet" + _clickPet].gotoAndStop(2);
            switch(_clickPet)
            {
               case 0:
                  NpcDialog.show(NPC.PIKA,["真的是你，赛尔！我就知道你一定会有办法的，快带我走吧！"],["恩，我们这就离开！"],[onAwakePet]);
                  break;
               case 1:
                  NpcDialog.show(NPC.SHALUOYAN,["真的是你，赛尔！我就知道你一定会有办法的，快带我走吧！"],["恩，我们这就离开！"],[onAwakePet]);
                  break;
               case 2:
                  NpcDialog.show(NPC.NIAO,["真的是你，赛尔！我就知道你一定会有办法的，快带我走吧！"],["恩，我们这就离开！"],[onAwakePet]);
                  break;
               case 3:
                  NpcDialog.show(NPC.PEIXI,["真的是你，赛尔！我就知道你一定会有办法的，快带我走吧！"],["恩，我们这就离开！"],[onAwakePet]);
                  break;
               case 4:
                  NpcDialog.show(NPC.KAPU,["真的是你，赛尔！我就知道你一定会有办法的，快带我走吧！"],["恩，我们这就离开！"],[onAwakePet]);
            }
         }
      }
      
      private static function onCheckItems1(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var typeCount:uint;
         var itemID:uint = 0;
         var itemCount:uint = 0;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onCheckItems1);
         data = e.data as ByteArray;
         typeCount = data.readUnsignedInt();
         if(typeCount != 0)
         {
            itemID = data.readUnsignedInt();
            itemCount = data.readUnsignedInt();
         }
         else
         {
            itemID = 300450;
            itemCount = 0;
         }
         DebugTrace.show(_clickPet + 1);
         switch(_clickPet)
         {
            case 0:
               if(itemCount >= 10)
               {
                  _map.conLevel["pet" + _clickPet].gotoAndStop(2);
                  NpcDialog.show(NPC.PIKA,["真的是你，赛尔！我就知道你一定会有办法的，快带我走吧！"],["恩，我们这就离开！"],[function():void
                  {
                     SocketConnection.addCmdListener(CommandID.CHECK_AWAKE_PET,onAwakePet);
                     SocketConnection.send(CommandID.CHECK_AWAKE_PET,_clickPet + 1);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.PIKA,["我快撑不住了，好难受啊！，打败塔克星上的0xff0000伊娃0xffffff后就能获得0xff0000黄色神之晶球0xffffff！必须收集0xff0000四种0xffffff颜色的晶球，而且每个颜色需要0xff00005颗0xffffff，这样才能进入珀伽索斯的睡梦空间拯救我，在睡梦空间中获得0xff0000睡梦之净0xffffff，就能解除这场危机！"],["恩，我这就去找！","去附近帮助其他睡梦中的精灵！"],[function():void
                  {
                     MapManager.changeMap(60);
                  },null]);
               }
               break;
            case 1:
               if(itemCount >= 15)
               {
                  _map.conLevel["pet" + _clickPet].gotoAndStop(2);
                  NpcDialog.show(NPC.SHALUOYAN,["真的是你，赛尔！我就知道你一定会有办法的，快带我走吧！"],["恩，我们这就离开！"],[function():void
                  {
                     SocketConnection.addCmdListener(CommandID.CHECK_AWAKE_PET,onAwakePet);
                     SocketConnection.send(CommandID.CHECK_AWAKE_PET,_clickPet + 1);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.SHALUOYAN,["我快撑不住了，好难受啊！，打败牛奶基地上的0xff0000蒙米克0xffffff后就能获得0xff0000红色神之晶球0xffffff！必须收集0xff0000四种0xffffff颜色的晶球，而且每个颜色需要0xff00005颗0xffffff，才能进入珀伽索斯的睡梦空间拯救我，如果你能在空间中获得0xff0000睡梦之净0xffffff，那就能解除这场危机！"],["恩，我这就去找！","去附近帮助其他睡梦中的精灵！"],[function():void
                  {
                     MapManager.changeMap(667);
                  }]);
               }
               break;
            case 2:
               if(itemCount >= 20)
               {
                  _map.conLevel["pet" + _clickPet].gotoAndStop(2);
                  NpcDialog.show(NPC.NIAO,["真的是你，赛尔！我就知道你一定会有办法的，快带我走吧！"],["恩，我们这就离开！"],[function():void
                  {
                     SocketConnection.addCmdListener(CommandID.CHECK_AWAKE_PET,onAwakePet);
                     SocketConnection.send(CommandID.CHECK_AWAKE_PET,_clickPet + 1);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.NIAO,["我快撑不住了，好难受啊！，打败妙妙玄岛上的0xff0000克米特0xffffff后就能获得0xff0000绿色神之晶球0xffffff！必须收集0xff0000四种0xffffff颜色的晶球，而且每个颜色需要0xff00005颗0xffffff，才能进入珀伽索斯的睡梦空间拯救我，如果你能在空间中获得0xff0000睡梦之净0xffffff，那就能解除这场危机！"],["恩，我这就去找！","去附近帮助其他睡梦中的精灵！"],[function():void
                  {
                     MapManager.changeMap(670);
                  }]);
               }
               break;
            case 3:
               if(itemCount >= 25)
               {
                  _map.conLevel["pet" + _clickPet].gotoAndStop(2);
                  NpcDialog.show(NPC.PEIXI,["真的是你，赛尔！我就知道你一定会有办法的，快带我走吧！"],["恩，我们这就离开！"],[function():void
                  {
                     SocketConnection.addCmdListener(CommandID.CHECK_AWAKE_PET,onAwakePet);
                     SocketConnection.send(CommandID.CHECK_AWAKE_PET,_clickPet + 1);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.PEIXI,["我快撑不住了，好难受啊！，打败艾迪星上的0xff0000帕尼0xffffff后就能获得0xff0000蓝色神之晶球0xffffff！必须收集0xff0000四种0xffffff颜色的晶球，而且每个颜色需要0xff00005颗0xffffff，才能进入珀伽索斯的睡梦空间拯救我，如果你能在空间中获得0xff0000睡梦之净0xffffff，那就能解除这场危机！"],["恩，我这就去找！","去附近帮助其他睡梦中的精灵！"],[function():void
                  {
                     MapManager.changeMap(325);
                  }]);
               }
               break;
            case 4:
               if(itemCount >= 25)
               {
                  _map.conLevel["pet" + _clickPet].gotoAndStop(2);
                  NpcDialog.show(NPC.KAPU,["真的是你，赛尔！我就知道你一定会有办法的，快带我走吧！"],["恩，我们这就离开！"],[function():void
                  {
                     SocketConnection.addCmdListener(CommandID.CHECK_AWAKE_PET,onAwakePet);
                     SocketConnection.send(CommandID.CHECK_AWAKE_PET,_clickPet + 1);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.KAPU,["我快撑不住了，好难受啊！，打败塔克星上的0xff0000伊娃0xffffff后就能获得0xff0000黄色神之晶球0xffffff！必须收集0xff0000四种0xffffff颜色的晶球，而且每个颜色需要0xff00005颗0xffffff，才能进入珀伽索斯的睡梦空间拯救我，如果你能在空间中获得0xff0000睡梦之净0xffffff，那就能解除这场危机！"],["恩，我这就去找！","去附近帮助其他睡梦中的精灵！"],[function():void
                  {
                     MapManager.changeMap(60);
                  }]);
               }
         }
      }
      
      private static function onAwakePet(param1:SocketEvent = null) : void
      {
         SocketConnection.removeCmdListener(CommandID.CHECK_AWAKE_PET,onAwakePet);
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:SharedObject = SOManager.getUserSO(SOManager.LOCALMSG);
         var _loc4_:String = "pet_" + _clickPet.toString() + _loc2_.month.toString() + "_" + _loc2_.date.toString();
         _loc3_.data[_loc4_] = "true";
         SOManager.flush(_loc3_);
         FightManager.fightWithBoss(_petList[_clickPet],_clickPet + 1);
      }
      
      public static function activityStep(param1:BaseMapProcess) : void
      {
         _map = param1;
         _fightState = [true,true,true];
         _map.conLevel["ball0"].visible = true;
         _map.conLevel["ball1"].visible = true;
         _map.conLevel["ball2"].visible = true;
         AimatController.addEventListener(AimatEvent.PLAY_END,onShootOver);
         NpcDialog.show(NPC.SEER,["这里一定就是珀伽索斯的梦境，我一定要拯救这些超能精灵！"],["利用头部射击攻击能量球！"],[]);
      }
      
      private static function onShootOver(param1:AimatEvent) : void
      {
         var e:AimatEvent = param1;
         if(Boolean(_map.conLevel["ball0"].hitTestPoint(e.info.endPos.x,e.info.endPos.y)) && (e as AimatEvent).info.userID == MainManager.actorID)
         {
            _map.conLevel["blood0"].gotoAndStop(_map.conLevel["blood0"].currentFrame + 1);
            DebugTrace.show(_map.conLevel["blood0"].currentFrame,_map.conLevel["blood0"].totalFrames);
            if(_map.conLevel["blood0"].currentFrame == _map.conLevel["blood0"].totalFrames)
            {
               _map.conLevel["blood0"].gotoAndStop(1);
               _map.conLevel["blood0"].visible = false;
               AnimateManager.playMcAnimate(_map.conLevel["ball0"],2,"mc2",function():void
               {
                  chooseBall(0);
               });
            }
         }
         else if(Boolean(_map.conLevel["ball1"].hitTestPoint(e.info.endPos.x,e.info.endPos.y)) && (e as AimatEvent).info.userID == MainManager.actorID)
         {
            _map.conLevel["blood1"].gotoAndStop(_map.conLevel["blood1"].currentFrame + 1);
            DebugTrace.show(_map.conLevel["blood1"].currentFrame);
            if(_map.conLevel["blood1"].currentFrame == _map.conLevel["blood1"].totalFrames)
            {
               _map.conLevel["blood1"].gotoAndStop(1);
               _map.conLevel["blood1"].visible = false;
               AnimateManager.playMcAnimate(_map.conLevel["ball1"],2,"mc2",function():void
               {
                  chooseBall(1);
               });
            }
         }
         else if(Boolean(_map.conLevel["ball2"].hitTestPoint(e.info.endPos.x,e.info.endPos.y)) && (e as AimatEvent).info.userID == MainManager.actorID)
         {
            _map.conLevel["blood2"].gotoAndStop(_map.conLevel["blood2"].currentFrame + 1);
            DebugTrace.show(_map.conLevel["blood2"].currentFrame);
            if(_map.conLevel["blood2"].currentFrame == _map.conLevel["blood2"].totalFrames)
            {
               _map.conLevel["blood2"].gotoAndStop(1);
               _map.conLevel["blood2"].visible = false;
               AnimateManager.playMcAnimate(_map.conLevel["ball2"],2,"mc2",function():void
               {
                  chooseBall(2);
               });
            }
         }
      }
      
      private static function chooseBall(param1:uint) : void
      {
         _fightCount = param1;
         SocketConnection.addCmdListener(CommandID.CHECK_BOSS_SPACE,onCheckBoss);
         SocketConnection.send(CommandID.CHECK_BOSS_SPACE);
      }
      
      private static function onCheckBoss(param1:SocketEvent) : void
      {
         var id:uint = 0;
         var region:uint = 0;
         var id1:uint = 0;
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         id = data.readUnsignedInt();
         region = data.readUnsignedInt();
         _map.conLevel["pet" + _fightCount].visible = true;
         _map.conLevel["pet" + _fightCount].gotoAndStop(region + 1);
         LevelManager.closeMouseEvent();
         id1 = setTimeout(function():void
         {
            clearTimeout(id1);
            LevelManager.openMouseEvent();
            _isFight = true;
            EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
            FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,onFinishFight);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
            FightManager.fightWithBoss(PetXMLInfo.getName(id),region);
         },1000);
      }
      
      private static function onFightError(param1:RobotEvent) : void
      {
         _isFight = false;
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onFinishFight);
         _map.conLevel["ball" + _fightCount].gotoAndStop(1);
         _map.conLevel["blood" + _fightCount].visible = true;
         _map.conLevel["blood" + _fightCount].gotoAndStop(1);
         _map.conLevel["pet" + _fightCount].visible = false;
      }
      
      private static function onFinishFight(param1:PetFightEvent) : void
      {
         var _loc3_:Boolean = false;
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFinishFight);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onFinishFight);
         DebugTrace.show(_fightCount);
         _isFight = false;
         _fightState[_fightCount] = false;
         _map.conLevel["pet" + _fightCount].visible = false;
         var _loc2_:int = 0;
         while(_loc2_ < 3)
         {
            DebugTrace.show(_fightState[_loc2_]);
            _map.conLevel["ball" + _loc2_].visible = _fightState[_loc2_];
            _map.conLevel["blood" + _loc2_].visible = _fightState[_loc2_];
            AimatController.addEventListener(AimatEvent.PLAY_END,onShootOver);
            _loc2_++;
         }
         for each(_loc3_ in _fightState)
         {
            if(_loc3_)
            {
               return;
            }
         }
         MapManager.changeMap(478);
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         AimatController.removeEventListener(AimatEvent.PLAY_END,onShootOver);
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onCheckItems);
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onCheckItems1);
         SocketConnection.removeCmdListener(CommandID.CHECK_CAN_ENTER_SPACE,onCheckDoor);
         SocketConnection.removeCmdListener(CommandID.CHECK_AWAKE_PET,onAwakePet);
         SocketConnection.removeCmdListener(CommandID.CHECK_PET_ISCAUGHT,onGetResult);
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onFightError);
         SocketConnection.removeCmdListener(CommandID.CHECK_IS_AWAKEN,onCheckIsAwaken);
         try
         {
            if(Boolean(_map) && Boolean(_map.conLevel["bubble"]))
            {
               CommonUI.removeYellowExcal(_map.conLevel["bubble"]);
               _map.conLevel["bubble"].removeEventListener(MouseEvent.CLICK,onClickBubble);
               _map.conLevel["bubble"].removeEventListener(MouseEvent.CLICK,onClickBubble1);
               if(Boolean(_map) && Boolean(_map.conLevel["boss"]))
               {
                  _map.conLevel["boss"].removeEventListener(MouseEvent.CLICK,onClickBoss);
               }
               _loc1_ = 0;
               while(_loc1_ < 5)
               {
                  if(Boolean(_map) && Boolean(_map.conLevel["pet" + _loc1_]))
                  {
                     _map.conLevel["pet" + _loc1_].removeEventListener(MouseEvent.CLICK,onClickSleeper);
                  }
                  _loc1_++;
               }
            }
         }
         catch(e:*)
         {
         }
      }
   }
}
