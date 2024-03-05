package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class PerilousJourneyActivity
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMC:MovieClip;
      
      private static var _taskState:uint;
      
      private static const TASK_ID:uint = 1163;
       
      
      public function PerilousJourneyActivity()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _map.btnLevel["introBtn"].addEventListener(MouseEvent.CLICK,onShowIntro);
         _taskMC = map.conLevel["task1163mc"];
         if(!isInActive)
         {
            PerilousJourneyActivity.destroy();
            return;
         }
         _taskMC.mouseChildren = false;
         _taskMC.mouseEnabled = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         OgreController.isShow = false;
         if(_taskState == TasksManager.UN_ACCEPT)
         {
            CommonUI.addYellowExcal(_map.topLevel,410,360);
            map.btnLevel["ogre"].addEventListener(MouseEvent.CLICK,onNPCClick);
         }
         else if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(param1[0])
               {
                  _taskMC.gotoAndStop(2);
                  OgreController.isShow = true;
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
               }
               else
               {
                  CommonUI.addYellowExcal(_map.topLevel,410,360);
                  map.btnLevel["ogre"].addEventListener(MouseEvent.CLICK,onNPCClick);
               }
            });
         }
         else if(_taskState == TasksManager.COMPLETE)
         {
            _taskMC.gotoAndStop(7);
            OgreController.isShow = true;
            CommonUI.addYellowExcal(_map.topLevel,669,232);
            _map.btnLevel["bulu"].addEventListener(MouseEvent.CLICK,onFightwidthBuLu);
         }
      }
      
      private static function get isInActive() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         var _loc2_:CronTimeVo = new CronTimeVo("*","*","25-30","4","*","2014");
         var _loc3_:CronTimeVo = new CronTimeVo("*","*","1-8","5","*","2014");
         var _loc4_:CronTimeVo;
         if(Boolean((_loc4_ = new CronTimeVo("*","*","22-28","8","*","2014")).isActive(_loc1_)) || Boolean(_loc2_.isActive(_loc1_)) || Boolean(_loc3_.isActive(_loc1_)))
         {
            return true;
         }
         return false;
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         var info:FightOverInfo = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            SocketConnection.addCmdListener(CommandID.LIGHT_SWAMP_ENABLE,function(param1:SocketEvent):void
            {
               var data:ByteArray;
               var num:uint;
               var e:SocketEvent = param1;
               SocketConnection.removeCmdListener(CommandID.LIGHT_SWAMP_ENABLE,arguments.callee);
               data = e.data as ByteArray;
               num = data.readUnsignedInt();
               if(num)
               {
                  TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                  {
                     var b:Boolean = param1;
                     if(b)
                     {
                        AnimateManager.playMcAnimate(_taskMC,2,"mc",function():void
                        {
                           NpcDialog.show(NPC.GELIN,["怎么办怎么办……布鲁，我该怎么救你……"],[" 它离河岸很近，我们一起把它拽出来"],[function():void
                           {
                              AnimateManager.playMcAnimate(_taskMC,3,"mc",function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20120803_3"),function():void
                                 {
                                    AnimateManager.playMcAnimate(_taskMC,4,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.BULU,["发生了什么？我的体内好像有一股神奇的力量…"],["你好像，超进化了…"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(_taskMC,5,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.YOUNIKA,["哼，这小子天天在恶魔星乱窜，简直不把我放在眼里。想要救他，有本事0xFF00008月22日0xFFFFFF来找我。"],null,null,false,function():void
                                             {
                                                AnimateManager.playMcAnimate(_taskMC,6,"mc",function():void
                                                {
                                                   NpcDialog.show(NPC.BULU,["格林……赛尔，你一定要帮我把格林救出来"],["嗯，我们一起去救格林"],[function():void
                                                   {
                                                      NpcDialog.show(NPC.BULU,["赛尔，把我带回赛尔号，我们8月22日一起去救格林。"],["（与布鲁对战，5回合后布鲁就会逃跑，要把握捕捉时机哦）"],[function():void
                                                      {
                                                         FightManager.fightWithBoss("布鲁");
                                                      }]);
                                                   }]);
                                                });
                                             });
                                          });
                                       }]);
                                    });
                                 });
                              });
                           }]);
                        });
                     }
                  });
               }
            });
            SocketConnection.send(CommandID.LIGHT_SWAMP_ENABLE);
         }
      }
      
      private static function onFightwidthBuLu(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.BULU,["赛尔，把我带回赛尔号，我们8月22日一起去救格林。"],["（与布鲁对战，5回合后布鲁就会逃跑，要把握捕捉时机哦）"],[function():void
         {
            FightManager.fightWithBoss("布鲁");
         }]);
      }
      
      private static function onShowIntro(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BuLuIntroPanel"),"正在加载...");
         SocketConnection.send(1022,84807634);
      }
      
      private static function onNPCClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowExcal(_map.topLevel);
         _taskMC.removeEventListener(MouseEvent.CLICK,onNPCClick);
         if(_taskState == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  pro();
               }
            });
         }
         else
         {
            pro();
         }
         SocketConnection.send(1022,84807635);
      }
      
      private static function pro() : void
      {
         NpcDialog.show(NPC.KEDU,["多么美妙的地方，太阳永远不会在这里顺利升起。"],["你，头上为什么顶根蜡烛…"],[function():void
         {
            NpcDialog.show(NPC.KEDU,["你懂什么？这叫自备光源，没看到这里这么黑吗？"],["这里永远都这么阴森吗？"],[function():void
            {
               NpcDialog.show(NPC.KEDU,["当然，这才是落日泥沼的魅力所在。不过这几天，这里的宁静被打破了"],["发生了什么事儿？"],[function():void
               {
                  AnimateManager.playMcAnimate(_taskMC,1,"mc",function():void
                  {
                     NpcDialog.show(NPC.SEER,["别着急，慢慢说，什么不见了？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.GELIN,["布鲁不见了！我把布鲁给丢了！呜哇啊……"],["啊？你们不是在旅行吗？"],[function():void
                        {
                           CartoonManager.play(ClientConfig.getFullMovie("bulu_cartoon"),function():void
                           {
                              NpcDialog.show(NPC.KEDU,["哼哼，你的朋友肯定是被这里的沼泽吞没了。这么久了，想必……"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.GELIN,["怎么办怎么办……赛尔你一定要帮我救救布鲁，它是我最好的朋友，如果它出事了……"],["别担心，布鲁会没事的"],[function():void
                                 {
                                    NpcDialog.show(NPC.KEDU,["漆黑一片的落日泥沼，你们连沼泽都看不清，别说去救你的朋友了"],["你有什么办法吗？"],[function():void
                                    {
                                       NpcDialog.show(NPC.KEDU,["我才不会告诉你们，0xFF0000收集3根沼泽灯芯0xFFFFFF，就能暂时恢复落日泥沼的光明。"],["沼泽灯芯？我该去哪里找？"],[function():void
                                       {
                                          NpcDialog.show(NPC.KEDU,["我才不会告诉你们，像我一样睿智的精灵身上就有沼泽灯芯。"],["格林，我们快去野怪身上找灯芯。"],[function():void
                                          {
                                             TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                             {
                                                if(param1)
                                                {
                                                   OgreController.isShow = true;
                                                }
                                                SocketConnection.send(1022,84807632);
                                             });
                                          }]);
                                       }]);
                                    }]);
                                 }]);
                              });
                           });
                        }]);
                     });
                  });
               }]);
            }]);
         }]);
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            _map.btnLevel["ogre"].removeEventListener(MouseEvent.CLICK,onNPCClick);
            _map.btnLevel["bulu"].removeEventListener(MouseEvent.CLICK,onFightwidthBuLu);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            DisplayUtil.removeForParent(_taskMC);
            OgreController.isShow = true;
            _taskMC = null;
            _map = null;
         }
      }
   }
}
