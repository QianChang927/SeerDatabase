package com.robot.app.mapProcess.control
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class TheSleepingEliza
   {
      
      private static var _map:BaseMapProcess;
      
      private static const TASK_ID:uint = 1179;
      
      private static var _taskState:uint;
      
      private static var _statusList:Array;
      
      private static var _count:uint;
      
      private static var ac:ActivityControl = new ActivityControl([new CronTimeVo("*","12-13","11-17","3","*","2016")]);
       
      
      public function TheSleepingEliza()
      {
         super();
      }
      
      private static function buyItem() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.ITEM_LIST,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint;
            if((_loc4_ = _loc3_.readUnsignedInt()) == 0)
            {
               ItemAction.buyItem(100044);
            }
         });
         SocketConnection.send(CommandID.ITEM_LIST,100044,100044,2);
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         buyItem();
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         taskMC.gotoAndStop(3);
         processBar.visible = false;
         taskMC.buttonMode = true;
         OgreController.isShow = false;
         CommonUI.addYellowExcal(_map.topLevel,458,379);
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onGetTime);
         MapListenerManager.add(_map.conLevel["introBtn"],onExchangeBtnClick);
         if(_taskState == TasksManager.UN_ACCEPT)
         {
            taskMC.gotoAndStop(1);
            ToolBarController.showOrHideAllUser(false);
            CommonUI.removeYellowExcal(_map.topLevel);
            CommonUI.addYellowExcal(_map.topLevel,445,372);
            taskMC.addEventListener(MouseEvent.CLICK,onStartTask);
         }
         else
         {
            if(!isInActive)
            {
               OgreController.isShow = true;
               taskMC.addEventListener(MouseEvent.CLICK,showDialogue);
               return;
            }
            if(_taskState == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
               {
                  if(!param1[0])
                  {
                     taskMC.addEventListener(MouseEvent.CLICK,onNPCClick);
                  }
               });
            }
            else if(_taskState == TasksManager.COMPLETE)
            {
               SocketConnection.addCmdListener(CommandID.ELIZA_GET_ICE_BLOOD_VOLUME,onGetBloodVolume);
               taskMC.addEventListener(MouseEvent.CLICK,onBingDiaoClick);
               SocketConnection.send(CommandID.ELIZA_GET_ICE_BLOOD_VOLUME);
               SocketConnection.addCmdListener(CommandID.ELIZA_SHOOTING_ICE,onShot);
               AimatController.addEventListener(AimatEvent.PLAY_END,onShootOver);
            }
         }
      }
      
      private static function onGetTime(param1:SocketEvent) : void
      {
         if(!isInActive)
         {
            processBar.visible = false;
         }
      }
      
      private static function showDialogue(param1:MouseEvent = null) : void
      {
         NpcDialog.show(NPC.KEDU,["每天的12:00-14:00，是唤醒它最好的时机。用火焰喷射器融化冰块。我建议赛尔们一起合作，不然要花很久很久呢。"],["嗯，我到时再来试试。"]);
      }
      
      private static function get processBar() : MovieClip
      {
         return _map.conLevel["processBar"];
      }
      
      private static function onGetBloodVolume(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         updateProcessBar(_loc3_);
      }
      
      private static function updateProcessBar(param1:uint) : void
      {
         var _loc2_:uint = 0;
         if(param1 == 0)
         {
            if(processBar.visible)
            {
               onWakeUpEliza();
            }
            processBar.visible = false;
         }
         else
         {
            processBar["perTxt"].text = param1 + "/500";
            _loc2_ = processBar["perMc"].totalFrames - processBar["perMc"].totalFrames * param1 / 500;
            processBar["perMc"].gotoAndStop(_loc2_);
            processBar.visible = true;
         }
      }
      
      private static function onExchangeBtnClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86049330);
         ModuleManager.showModule(ClientConfig.getAppModule("ElizaExchangePanel"),"正在加载");
      }
      
      private static function get isInActive() : Boolean
      {
         if(ac.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      private static function onBingDiaoFirstClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onBingDiaoFirstClick);
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.KEDU,["每天的12:00-14:00，是唤醒它最好的时机。赶快装备火焰喷射器融化冰块。我建议赛尔们一起合作，不然要花很久很久呢。"],["嗯，我这就去试试。"],[function():void
         {
            TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
            {
               if(param1)
               {
                  taskMC.addEventListener(MouseEvent.CLICK,onBingDiaoClick);
                  SocketConnection.send(CommandID.ELIZA_GET_ICE_BLOOD_VOLUME);
                  AimatController.addEventListener(AimatEvent.PLAY_END,onShootOver);
               }
            });
         }]);
      }
      
      private static function get isEquipWeapons() : Boolean
      {
         return MainManager.actorInfo.clothIDs.indexOf(100044) != -1;
      }
      
      private static function onBingDiaoClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86049331);
         if(isInActive)
         {
            if(processBar.visible)
            {
               if(isEquipWeapons)
               {
                  NpcDialog.show(NPC.KEDU,["赶快0xFF0000装备火焰喷射器0xFFFFFF融化冰块。我建议赛尔们一起合作，不然要花很久很久呢。"],["嗯，好的，我这就去试试。"]);
               }
               else
               {
                  Alarm.show("赶快穿上火焰喷射器吧");
               }
            }
            else
            {
               NpcDialog.show(NPC.KEDU,["赶快0xFF0000装备火焰喷射器0xFFFFFF融化冰块。我建议赛尔们一起合作，不然要花很久很久呢。"],["嗯，好的，我这就去试试。"],[function():void
               {
                  SocketConnection.send(CommandID.ELIZA_GET_ICE_BLOOD_VOLUME);
               }]);
            }
         }
         else
         {
            showDialogue();
         }
      }
      
      private static function onWakeUpEliza() : void
      {
         taskMC.gotoAndStop(3);
         AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
         {
            NpcDialog.show(NPC.YILISHA,["睡了好久啊，谢谢你这么温暖地唤醒我。想当年，我可是个著名的舞蹈家。陪我跳一段舞，我会送你一点小礼物哦。"],["好的，那我们开始吧。"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
               {
                  SocketConnection.addCmdListener(CommandID.ELIZA_GET_REWARD,onGetReward);
                  SocketConnection.send(CommandID.ELIZA_GET_REWARD);
               });
            }]);
         });
      }
      
      private static function onGetReward(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ELIZA_GET_REWARD,arguments.callee);
         SocketConnection.send(CommandID.ELIZA_GET_ICE_BLOOD_VOLUME);
         AnimateManager.playMcAnimate(taskMC,5,"mc");
      }
      
      private static function onShot(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         updateProcessBar(_loc3_);
      }
      
      private static function onShootOver(param1:AimatEvent) : void
      {
         var _loc2_:AimatInfo = param1.info as AimatInfo;
         if(_loc2_.userID != MainManager.actorID)
         {
            return;
         }
         if(processBar.visible && isInActive && isEquipWeapons)
         {
            SocketConnection.send(CommandID.ELIZA_SHOOTING_ICE);
         }
      }
      
      private static function onStartTask(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86049329);
         NpcDialog.show(NPC.KEDU,["多么美妙的地方，太阳永远不会在这里顺利升起。"],["难道……你每次的开场白都是一样的吗……"],[function():void
         {
            NpcDialog.show(NPC.KEDU,["是你啊，奇怪的机器人。你怎么又来了？"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
               {
                  NpcDialog.show(NPC.KEDU,["落日泥沼从来不会闪电的！这不科学！！"],["……最近不科学的事情太多了……"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["雷伊身受重伤后，意外地长出了一对翅膀。这道闪电，会不会，跟雷伊有关？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.KEDU,["听起来有点道理……什么？雷伊长翅膀了？"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SEER,["你不是在雷神秘境围观吗？怎么连这么惊天动地的事情都不知道…我还想来这里找找有关雷神之羽的线索呢。"],null,null,false,function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                              {
                                 NpcDialog.show(NPC.KEDU,["这个东西我认得我认得我认得！"],["这是什么奇怪的东西？"],[function():void
                                 {
                                    NpcDialog.show(NPC.KEDU,["这是我的老朋友伊力沙。"],["伊力沙？"],[function():void
                                    {
                                       NpcDialog.show(NPC.KEDU,["伊力沙是沉睡在冰山上的精灵。只要把它唤醒，它一高兴，可能就送你几根羽毛了。"],["真的吗？它的羽毛有什么用吗？"],[function():void
                                       {
                                          NpcDialog.show(NPC.KEDU,["当然，伊力沙可是我无所不能的朋友。伊力沙片羽拥有神奇的修复能量。"],["太好了！那我们该怎么收集呢？"],[function():void
                                          {
                                             NpcDialog.show(NPC.KEDU,["每天的0xFF000012:00-14:000xFFFFFF，是唤醒它最好的时机。用火焰喷射器融化冰块。我建议赛尔们一起合作，不然要花很久很久呢。"],["嗯，我到时再来试试。"],[function():void
                                             {
                                                TasksManager.accept(TASK_ID,function(param1:Boolean):void
                                                {
                                                   if(param1)
                                                   {
                                                      CommonUI.removeYellowExcal(_map.topLevel);
                                                      CommonUI.addYellowExcal(_map.topLevel,458,379);
                                                      taskMC.removeEventListener(MouseEvent.CLICK,onStartTask);
                                                      ToolBarController.showOrHideAllUser(true);
                                                      if(isInActive)
                                                      {
                                                         SocketConnection.addCmdListener(CommandID.ELIZA_GET_ICE_BLOOD_VOLUME,onGetBloodVolume);
                                                         SocketConnection.addCmdListener(CommandID.ELIZA_SHOOTING_ICE,onShot);
                                                         taskMC.addEventListener(MouseEvent.CLICK,onNPCClick);
                                                      }
                                                      else
                                                      {
                                                         OgreController.isShow = true;
                                                      }
                                                   }
                                                });
                                             }]);
                                          }]);
                                       }]);
                                    }]);
                                 }]);
                              });
                           });
                        });
                     });
                  }]);
               });
            });
         }]);
      }
      
      private static function onNPCClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.KEDU,["每天的12:00-14:00，是唤醒伊力沙最好的时机。赶快装备火焰喷射器融化冰块。我建议赛尔们一起合作，不然要花很久很久呢。"],["嗯，我这就去试试。"],[function():void
         {
            CommonUI.addYellowArrow(_map.topLevel,491,276,330);
            taskMC.removeEventListener(MouseEvent.CLICK,onNPCClick);
            taskMC.addEventListener(MouseEvent.CLICK,onBingDiaoFirstClick);
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["eliza"];
      }
      
      public static function destroy() : void
      {
         AimatController.removeEventListener(AimatEvent.PLAY_END,onShootOver);
         SocketConnection.removeCmdListener(CommandID.ELIZA_SHOOTING_ICE,onShot);
         SocketConnection.removeCmdListener(CommandID.ELIZA_GET_ICE_BLOOD_VOLUME,onGetBloodVolume);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onGetTime);
         SocketConnection.removeCmdListener(CommandID.ELIZA_GET_REWARD,onGetReward);
         OgreController.isShow = true;
         if(_map)
         {
            CommonUI.removeYellowExcal(_map.topLevel);
            taskMC.removeEventListener(MouseEvent.CLICK,onBingDiaoFirstClick);
            taskMC.removeEventListener(MouseEvent.CLICK,onBingDiaoClick);
            taskMC.removeEventListener(MouseEvent.CLICK,onNPCClick);
            taskMC.removeEventListener(MouseEvent.CLICK,showDialogue);
            DisplayUtil.removeForParent(taskMC);
            _map = null;
         }
      }
   }
}
