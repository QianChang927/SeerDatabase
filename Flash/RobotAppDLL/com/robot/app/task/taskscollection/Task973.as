package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.utils.Direction;
   import com.robot.core.utils.TextFormatUtil;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task973
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      private static const TASK_ID:uint = 973;
      
      private static var _petName:Array = ["火焰贝","吉尔","巴多","库卡","赤甲虫","火晶兽"];
      
      private static var _lavaHeartList:Array = [];
      
      private static var _clickID:uint;
      
      private static var _iceList:Array = [];
      
      private static var _date:Date;
      
      private static var _boss:uint;
      
      private static var _lavaIndex:uint;
      
      private static const _activityTime:CronTimeVo = new CronTimeVo("*","11-12","20-26","11","*","2015");
      
      private static var _isActive:Boolean = false;
       
      
      public function Task973()
      {
         super();
      }
      
      public static function initTaskFor15(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               acceptTask();
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor15);
               break;
            case TasksManager.COMPLETE:
         }
      }
      
      public static function initTaskFor16(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor16);
               break;
            case TasksManager.COMPLETE:
               onSystemTime(null);
               SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
         }
         MapListenerManager.add(_map.conLevel["ad"],function(param1:MouseEvent):void
         {
         });
      }
      
      public static function initTaskFor51(param1:BaseMapProcess) : void
      {
         _map = param1;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               undo();
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepFor51);
               break;
            case TasksManager.COMPLETE:
               checkFight();
         }
      }
      
      private static function checkStepFor51(param1:Array) : void
      {
         if(!param1[0])
         {
            undo();
         }
         else if(Boolean(param1[0]) && !param1[1])
         {
            startStep0();
         }
         else if(Boolean(param1[1]) && !param1[2])
         {
            startStep1();
         }
      }
      
      private static function checkStepFor15(param1:Array) : void
      {
         if(!param1[0])
         {
            onAccept();
         }
      }
      
      private static function checkStepFor16(param1:Array) : void
      {
         if(Boolean(param1[2]) && !param1[3])
         {
            startStep2();
         }
      }
      
      public static function undo() : void
      {
         DisplayUtil.removeForParent(_map.depthLevel["ice0"]);
         DisplayUtil.removeForParent(_map.depthLevel["ice1"]);
         DisplayUtil.removeForParent(_map.depthLevel["ice2"]);
         DisplayUtil.removeForParent(_map.depthLevel["ice3"]);
         DisplayUtil.removeForParent(_map.depthLevel["ice4"]);
      }
      
      public static function acceptTask() : void
      {
         TasksManager.accept(TASK_ID,onAccept);
      }
      
      private static function onAccept(param1:Boolean = true) : void
      {
         var b:Boolean = param1;
         if(!b)
         {
            return;
         }
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["task767_1"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["task767_1"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["什么！火山爆发？？这到底是怎么回事啊！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SMALLJIER,["最近这里很不寻常，火山星原本是一座死火山想不到现在却要爆发了！我劝你还是快逃吧！"],["这也太奇怪了吧！什么原因呢？"],[function():void
               {
                  NpcDialog.show(NPC.SMALLJIER,["是啊！我们也搞不清是什么原因，不过据我爸爸的爸爸的爸爸说，火山星的地底一直生活着某种生物！难道会是它们？"],["火山星地底？生物？"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_767_1"),function():void
                     {
                        NpcDialog.show(NPC.SMALLJIER,["快看那个是什么？精灵？一定是它搞的鬼，火山星才会爆发的！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["task767_1"],2,"mc2",function():void
                           {
                              NpcDialog.show(NPC.SEER,["慢着，看样子它好像是被火山喷射出来的！斯诺星！！我还是先去那里看看吧！"],["前往斯诺星！"],[function():void
                              {
                                 TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                 {
                                    if(!param1)
                                    {
                                       return;
                                    }
                                    MapManager.changeMap(51);
                                 });
                              }]);
                           });
                        });
                     });
                  }]);
               }]);
            });
         });
      }
      
      private static function startStep0(param1:Boolean = true) : void
      {
         var b:Boolean = param1;
         if(!b)
         {
            return;
         }
         NpcDialog.show(NPC.SEER,["人呢？去哪里了！"],["让我在附近找找看吧！"],[function():void
         {
            AnimateManager.playMcAnimate(_map.depthLevel["ice2"],2,"mc2",function():void
            {
               NpcDialog.show(NPC.SEER,["冰块怎么会说话啊！好奇怪哎！让我过去看看！"],null,null,false,function():void
               {
                  LevelManager.closeMouseEvent();
                  MainManager.actorModel.moveAndAction(new Point(500,425),function():void
                  {
                     LevelManager.openMouseEvent();
                     MainManager.actorModel.direction = Direction.LEFT;
                     MainManager.selfVisible = false;
                     AnimateManager.playMcAnimate(_map.depthLevel["ice2"],3,"mc3",function():void
                     {
                        TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                        {
                           var b:Boolean = param1;
                           if(!b)
                           {
                              return;
                           }
                           AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEnd);
                           NpcDialog.show(NPC.SEER,["难道是刚刚被火山喷出来的精灵吗？看样子我要先把这些冰融化再说！我想火焰喷射器应该管用！"],["领取火焰喷射器！","我有火焰喷射器！"],[function():void
                           {
                              _map.depthLevel["ice2"].gotoAndStop(1);
                              MainManager.selfVisible = true;
                              _map.depthLevel["ice2"].buttonMode = true;
                              _map.depthLevel["ice2"].addEventListener(MouseEvent.CLICK,onFireIce);
                              getFireMachine();
                           },function():void
                           {
                              _map.depthLevel["ice2"].gotoAndStop(1);
                              MainManager.selfVisible = true;
                              _map.depthLevel["ice2"].buttonMode = true;
                              _map.depthLevel["ice2"].addEventListener(MouseEvent.CLICK,onFireIce);
                           }]);
                        });
                     });
                  });
               });
            });
         }]);
      }
      
      private static function onAimatEnd(param1:AimatEvent) : void
      {
         var event:AimatEvent = param1;
         if(event.info.id != 10001)
         {
            return;
         }
         if(_map.depthLevel["ice2"].hitTestPoint(event.info.endPos.x,event.info.endPos.y))
         {
            AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
            AnimateManager.playMcAnimate(_map.depthLevel["ice2"],4,"mc4",function():void
            {
               NpcDialog.show(NPC.KUKA,["太感谢你了！小个子，要不是你，我现在估计早就变成冰块了！."],["原来是你啊！"],[function():void
               {
                  NpcDialog.show(NPC.KUKA,["嘿嘿！我知道你是大好人，帮人就帮到底吧！我目前无法从冰块中挣脱出来，如果你去火山星找到0xff0000熔岩之心0xffffff的话就能帮助我了！"],["熔岩之心？？？"],[function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_767_2"),function():void
                     {
                        NpcDialog.show(NPC.SEER,["哦，原来是这样，那好吧！我现在就去火山星走一趟，你可要等我哦！千万要坚持！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.KUKA,["对了，忘记告诉你了！你一定要去0xff0000火山星山洞0xffffff啊！山洞中的的精灵们都知道熔岩之心，记得带0xff000010个熔岩之心0xffffff回来哦！"],["恩恩，我知道了！"],[function():void
                           {
                              TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                              {
                                 if(!param1)
                                 {
                                    return;
                                 }
                                 MapManager.changeMap(16);
                              });
                           }]);
                        });
                     });
                  }]);
               }]);
            });
         }
      }
      
      private static function startStep2() : void
      {
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["jier"].visible = true;
         _map.conLevel["jier"].buttonMode = true;
         _map.conLevel["jier"].addEventListener(MouseEvent.CLICK,onClickJier);
      }
      
      private static function onClickJier(param1:Event) : void
      {
         var event:Event = param1;
         NpcDialog.show(NPC.JIER,["最近火山星爆发的很频繁，不知道是什么原因！"],["你知道熔岩之心吗？"],[function():void
         {
            NpcDialog.show(NPC.JIER,["熔岩之心？你怎么会知道，这可是火山星地底的秘密啊！我记得库卡最喜欢熔岩之心了！不过熔岩之心一定要在火山爆发的时候才会出现！火山马上就要爆发了，赶快就去吧！"],["好嘞，我马上就去！"],[function():void
            {
               TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
               {
                  OgreController.isShow = true;
                  ToolBarController.showOrHideAllUser(true);
                  inTime();
               });
            }]);
         }]);
      }
      
      private static function onFireIce(param1:Event) : void
      {
         var event:Event = param1;
         NpcDialog.show(NPC.SEER,["难道是刚刚被火山喷出来的精灵吗？看样子我要先把这些冰融化再说！我想火焰喷射器应该管用！"],["领取火焰喷射器！","我有火焰喷射器！"],[function():void
         {
            _map.depthLevel["ice2"].gotoAndStop(1);
            MainManager.selfVisible = true;
            getFireMachine();
         },function():void
         {
            _map.depthLevel["ice2"].gotoAndStop(1);
            MainManager.selfVisible = true;
            _map.depthLevel["ice2"].buttonMode = true;
            _map.depthLevel["ice2"].addEventListener(MouseEvent.CLICK,onFireIce);
         }]);
      }
      
      private static function getFireMachine() : void
      {
         checkFireMachine();
      }
      
      private static function checkFireMachine() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheck);
         SocketConnection.send(CommandID.ITEM_LIST,100044,100044,2);
      }
      
      private static function onCheck(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onCheck);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            buyNewFireMachine();
         }
         else
         {
            Alarm.show("您已经拥有火焰喷射器了！");
         }
      }
      
      private static function buyNewFireMachine() : void
      {
         SocketConnection.send(CommandID.ITEM_BUY,100044,1);
      }
      
      private static function startStep1() : void
      {
         _map.depthLevel["ice2"].buttonMode = true;
         _map.depthLevel["ice2"].addEventListener(MouseEvent.CLICK,onFireIce);
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEnd);
      }
      
      private static function checkLavaHeart() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckLavaHeart);
         SocketConnection.send(CommandID.ITEM_LIST,300386,300386,2);
      }
      
      private static function onCheckLavaHeart(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onCheckLavaHeart);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         while(_loc6_ < _loc3_)
         {
            _loc4_ = _loc2_.readUnsignedInt();
            _loc5_ = _loc2_.readUnsignedInt();
            _loc6_++;
         }
         if(_loc5_ >= 10)
         {
            itemEnough();
         }
         else
         {
            itemLack();
         }
      }
      
      private static function itemEnough() : void
      {
         NpcDialog.show(NPC.KUKA,["哇！你真的找到10个熔岩之心啦！太好了，快给我吧！"],["恩恩，我这就给你！"],[function():void
         {
            var _loc1_:* = undefined;
            _loc1_ = 0;
            while(_loc1_ < 5)
            {
               _map.conLevel["guide" + _loc1_].visible = true;
               _iceList.push(_map.depthLevel["ice" + _loc1_]);
               _map.depthLevel["ice" + _loc1_].buttonMode = true;
               _map.depthLevel["ice" + _loc1_].addEventListener(MouseEvent.CLICK,onClickSaveIce);
               _loc1_++;
            }
         }]);
      }
      
      private static function onClickSaveIce(param1:Event) : void
      {
         _clickID = _iceList.indexOf(param1.currentTarget);
         SocketConnection.addCmdListener(CommandID.SAVE_MONSTER,onSavePet);
         SocketConnection.send(CommandID.SAVE_MONSTER);
      }
      
      private static function onSavePet(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var e:SocketEvent = param1;
         _map.conLevel["guide" + _clickID].visible = false;
         SocketConnection.removeCmdListener(CommandID.SAVE_MONSTER,onSavePet);
         data = e.data as ByteArray;
         _boss = data.readUnsignedInt();
         _map.depthLevel["ice" + _clickID].removeEventListener(MouseEvent.CLICK,onClickSaveIce);
         AnimateManager.playMcAnimate(_map.depthLevel["ice" + _clickID],_boss + 5,"mc" + (_boss + 5),function():void
         {
            if(_boss != 4)
            {
               FightManager.fightWithBoss(_petName[_boss - 1],_boss - 1);
            }
            else
            {
               NpcDialog.show(NPC.KUKA,["Yeah，我终于出来了！你是我的救命恩人！我也没什么朋友，如果可以的话就让我跟随你吧！"],["这是真的吗?"],[function():void
               {
                  NpcDialog.show(NPC.KUKA,["是啊！因为在火山星地底生活，很难结识到朋友，这次正好是最好的机会！"],["那最好不过了！来吧！"],[function():void
                  {
                     FightManager.fightWithBoss("库卡",3);
                  }]);
               }]);
            }
         });
      }
      
      private static function itemLack() : void
      {
         NpcDialog.show(NPC.KUKA,["你好像还没有10个熔岩之心哦！还是再去火山星山洞找找吧！我坚持不了多久了！"],["恩恩，我这就去！"],[]);
      }
      
      private static function checkFight() : void
      {
         SocketConnection.addCmdListener(CommandID.LAVA_BOSS_INFO,onCheckFight);
         SocketConnection.send(CommandID.LAVA_BOSS_INFO);
      }
      
      private static function onCheckFight(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.LAVA_BOSS_INFO,onCheckFight);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            checkLavaHeart();
         }
         else
         {
            EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onNoPetCanFight);
            FightManager.fightWithBoss(_petName[_loc3_ - 1],_loc3_ - 1);
         }
      }
      
      private static function onNoPetCanFight(param1:RobotEvent) : void
      {
      }
      
      private static function onSystemTime(param1:SocketEvent) : void
      {
         if(!MapManager.currentMap)
         {
            return;
         }
         if(MapManager.currentMap.id != 16)
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
            return;
         }
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:uint = _loc2_.getHours() * 60 + _loc2_.getMinutes();
         if(_activityTime.isTimeActive())
         {
            inTime();
         }
         else
         {
            _map.conLevel["lavaOut"].visible = false;
            _map.conLevel["lavaHeart0"].visible = false;
            _map.conLevel["lavaHeart1"].visible = false;
            _map.conLevel["lavaHeart2"].visible = false;
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
         }
      }
      
      private static function inTime() : void
      {
         if(_isActive)
         {
            return;
         }
         _isActive = true;
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["lavaOut"].visible = true;
         _map.conLevel["jier"].visible = true;
         _map.conLevel["jier"].gotoAndStop(2);
         _map.conLevel["lavaHeart0"].visible = true;
         _map.conLevel["lavaHeart1"].visible = true;
         _map.conLevel["lavaHeart2"].visible = true;
         _lavaHeartList.push(_map.conLevel["lavaHeart0"]);
         _lavaHeartList.push(_map.conLevel["lavaHeart1"]);
         _lavaHeartList.push(_map.conLevel["lavaHeart2"]);
         refreshLavaHeart();
      }
      
      private static function refreshLavaHeart() : void
      {
         if(!_map)
         {
            return;
         }
         _map.conLevel["lavaOut"].visible = true;
         if(!_map)
         {
            return;
         }
         AnimateManager.playMcAnimate(_map.conLevel["lavaOut"],1,"mc1",function():void
         {
            var i:int;
            var id1:uint = 0;
            if(!_map)
            {
               return;
            }
            _map.conLevel["lavaOut"].gotoAndStop(2);
            i = 0;
            while(i < 3)
            {
               if(!_map)
               {
                  return;
               }
               _map.conLevel["lavaHeart" + i].gotoAndStop(2);
               _map.conLevel["lavaHeart" + i].visible = true;
               _map.conLevel["lavaHeart" + i].buttonMode = true;
               _map.conLevel["lavaHeart" + i].addEventListener(MouseEvent.CLICK,onPickUpLavaHeart);
               i++;
            }
            id1 = setTimeout(function():void
            {
               clearTimeout(id1);
               if(!_map || MapManager.currentMap.id != 16)
               {
                  return;
               }
               AnimateManager.playMcAnimate(_map.conLevel["lavaHeart0"],3,"mc3",function():void
               {
                  if(!_map)
                  {
                     return;
                  }
                  _map.conLevel["lavaHeart0"].visible = false;
               });
               AnimateManager.playMcAnimate(_map.conLevel["lavaHeart1"],3,"mc3",function():void
               {
                  if(!_map)
                  {
                     return;
                  }
                  _map.conLevel["lavaHeart1"].visible = false;
               });
               AnimateManager.playMcAnimate(_map.conLevel["lavaHeart2"],3,"mc3",function():void
               {
                  if(!_map)
                  {
                     return;
                  }
                  _map.conLevel["lavaHeart2"].visible = false;
                  refreshLavaHeart();
               });
               LevelManager.openMouseEvent();
            },5000);
         });
         LevelManager.openMouseEvent();
      }
      
      private static function onPickUpLavaHeart(param1:Event) : void
      {
         _lavaIndex = _lavaHeartList.indexOf(param1.currentTarget);
         SocketConnection.addCmdListener(CommandID.GET_LAVA_HEART,onGetLavaHeart);
         SocketConnection.send(CommandID.GET_LAVA_HEART);
      }
      
      private static function onGetLavaHeart(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_LAVA_HEART,onGetLavaHeart);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 1)
         {
            _map.conLevel["lavaHeart" + _lavaIndex].visible = false;
            ItemInBagAlert.show(300386,"1个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(300386)) + "已经放入你的储存箱！");
         }
         else
         {
            _map.conLevel["lavaHeart" + _lavaIndex].visible = false;
            Alarm.show("未能获得熔岩之心！");
         }
      }
      
      private static function outOfTime() : void
      {
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         _iceList.length = 0;
         _lavaHeartList.length = 0;
         _loc1_ = 0;
         while(_loc1_ < 5)
         {
            if(Boolean(_map) && Boolean(_map.depthLevel["ice" + _loc1_]))
            {
               _map.depthLevel["ice" + _loc1_].removeEventListener(MouseEvent.CLICK,onClickSaveIce);
            }
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ < 3)
         {
            if(Boolean(_map) && Boolean(_map.conLevel["lavaHeart" + _loc1_]))
            {
               _map.conLevel["lavaHeart" + _loc1_].removeEventListener(MouseEvent.CLICK,onPickUpLavaHeart);
            }
            _loc1_++;
         }
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onCheck);
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onCheckLavaHeart);
         SocketConnection.removeCmdListener(CommandID.LAVA_BOSS_INFO,onCheckFight);
         SocketConnection.removeCmdListener(CommandID.SAVE_MONSTER,onSavePet);
         SocketConnection.removeCmdListener(CommandID.GET_LAVA_HEART,onGetLavaHeart);
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onNoPetCanFight);
         AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
         LevelManager.openMouseEvent();
         MainManager.selfVisible = true;
         OgreController.isShow = true;
         ToolBarController.showOrHideAllUser(true);
         _map = null;
         _isActive = false;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
      }
   }
}
