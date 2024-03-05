package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task901
   {
      
      private static var _mcForMap705:MovieClip;
      
      private static const TASK_ID:uint = 901;
      
      private static var _map:BaseMapProcess;
      
      private static var _bossId:uint;
      
      private static var _xArr:Array = [100,400,800];
      
      private static var _yArr:Array = [300,200,250];
       
      
      public function Task901()
      {
         super();
      }
      
      public static function initTaskForMap705(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap705 = _map.animatorLevel["task_705"];
         _map.conLevel["huodong"].visible = false;
         _map.conLevel["dao"].visible = false;
         _mcForMap705.visible = false;
         MainManager.actorModel.x = 100;
         MainManager.actorModel.y = 450;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  goStep1();
               }
            });
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  goStep1();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  _mcForMap705.visible = true;
                  _mcForMap705.gotoAndStop(5);
                  _map.conLevel["dao"].visible = true;
                  startActivity();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  goStep3();
               }
            });
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            startActivity();
            _map.conLevel["huodong"].visible = true;
            fightWithBoss4();
            _map.conLevel["bossTig_3"].buttonMode = true;
            _map.conLevel["bossTig_3"].addEventListener(MouseEvent.CLICK,fightWithBoss4);
         }
      }
      
      public static function goStep1() : void
      {
         _mcForMap705.visible = true;
         _map.conLevel["dao"].visible = true;
         AnimateManager.playMcAnimate(_mcForMap705,1,"task_901_mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["呀！那不是阿铁打吗？看来这里守卫森严！我一定要想办法到阿铁打身边才行！"],["让我再好好看看！"],[function():void
            {
               AnimateManager.playMcAnimate(_mcForMap705,2,"task_901_mc2",function():void
               {
                  NpcDialog.show(NPC.KAILATE,["阿…铁…打？？世界上怎么会有如此难听的名字！不过你还是老老实实在这里待着吧！不会有人来救你的！你死心吧！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.ATIEDA,["别废话！要不是0xff0000斩月双刀0xffffff不在手里，否则我就早送你下地狱了！"],["啊哈哈，是吗？让我先来教训一下你！"],[function():void
                     {
                        AnimateManager.playMcAnimate(_mcForMap705,3,"task_901_mc3",function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["只要赛小息他们安全，我死而无憾！你们这些家伙也不会有好下场的！"],["挺有骨气的嘛！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["住手，你们太过分了！竟然这样对待我的朋友，我不会放过你们的！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.KAILATE,["哟！救兵来了！不过你们可别高兴的太早！想要救你的朋友先找到0xff0000太阳之匙和星月之匙0xffffff再说吧！0xff0000兄弟们记得好好守护这些钥匙0xffffff，开始干活吧！"],["太阳、星月？？？"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(_mcForMap705,4,"task_901_mc4",function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["放心吧！阿铁打，我一定会带你们出去的！"],["让我先教训这些守卫兵再说！"],[function():void
                                       {
                                          TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                          {
                                             if(param1)
                                             {
                                                _mcForMap705.gotoAndStop(5);
                                                startActivity();
                                             }
                                          });
                                       }]);
                                    });
                                 }]);
                              });
                           }]);
                        });
                     }]);
                  });
               });
            }]);
         });
      }
      
      public static function startActivity() : void
      {
         _map.conLevel["bossTig_0"].buttonMode = true;
         _map.conLevel["bossTig_0"].addEventListener(MouseEvent.CLICK,onBossClick);
         var _loc1_:uint = 1;
         while(_loc1_ < 3)
         {
            _map.depthLevel["men_" + _loc1_].buttonMode = true;
            _map.depthLevel["men_" + _loc1_].addEventListener(MouseEvent.CLICK,onDoorClick);
            _loc1_++;
         }
      }
      
      private static function onDoorClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.currentTarget.name);
         SocketConnection.addCmdListener(CommandID.RONGRANDIXING,onBossStateHandler);
         SocketConnection.send(CommandID.RONGRANDIXING,int(_loc2_.split("_")[1]));
      }
      
      private static function onBossClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var s:String = String(event.currentTarget.name);
         _bossId = int(s.split("_")[1]);
         LevelManager.closeMouseEvent();
         MainManager.actorModel.moveAndAction(new Point(_xArr[_bossId],_yArr[_bossId]),function():void
         {
            LevelManager.openMouseEvent();
            FightManager.fightWithBoss("拉列尼",_bossId);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         });
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         var info:FightOverInfo = e.dataObj as FightOverInfo;
         if(info.winnerID != MainManager.actorID)
         {
            NpcDialog.show(NPC.KAILATE,["哈哈哈！就知道你不是我的对手，想再尝尝失败的感觉吗？"],["别高兴的太早，我一定会可以战胜你的！"]);
         }
         else if(_bossId == 2)
         {
            if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
            {
               TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
               {
                  var b:Boolean = param1;
                  NpcDialog.show(NPC.LALIENI,["可恶，我们是不会善罢甘休的！老大会替我们报仇的！"],["哼，不自量力的家伙"],[function():void
                  {
                     goStep3();
                  }]);
               });
            }
         }
      }
      
      private static function onBossStateHandler(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var type:uint;
         var state:uint;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.RONGRANDIXING,onBossStateHandler);
         data = event.data as ByteArray;
         type = data.readUnsignedInt();
         state = data.readUnsignedInt();
         if(state == 1)
         {
            _map.depthLevel["men_" + type].removeEventListener(MouseEvent.CLICK,onDoorClick);
            DisplayUtil.removeForParent(_map.typeLevel["brr_" + type]);
            MapManager.currentMap.makeMapArray();
            _map.depthLevel["men_" + type].gotoAndStop(2);
            CommonUI.removeYellowExcal(_map.conLevel["bossTig_" + type]);
            CommonUI.addYellowExcal(_map.conLevel["bossTig_" + type],20,0);
            _map.conLevel["bossTig_" + type].buttonMode = true;
            _map.conLevel["bossTig_" + type].addEventListener(MouseEvent.CLICK,onBossClick);
            NpcDialog.show(NPC.LALIENI,["小子，挺有本事的嘛！居然可以进来，那就别想出去啦！让你知道熔岩地心的恐怖之处！"],["先击败你再说！"]);
         }
         else if(type == 1)
         {
            NpcDialog.show(NPC.SEER,["咦！怎么没反应呢？从图案上看一定是和凯拉特所说的太阳之钥匙有关，看来必须先战胜第一扇门中的守护者才行！"],["挑战拉列尼！"],[function():void
            {
               CommonUI.removeYellowArrow(_map.conLevel["bossTig_0"]);
               CommonUI.removeYellowArrow(_map.conLevel["bossTig_1"]);
               CommonUI.addYellowArrow(_map.conLevel["bossTig_0"],0,0,300);
            }]);
         }
         else if(type == 2)
         {
            NpcDialog.show(NPC.SEER,["咦！怎么没反应呢？从图案上看一定是和凯拉特所说的星之匙和月之匙有关，看来必须先战太阳之门中的守护者才行！"],["挑战拉列尼！"],[function():void
            {
               CommonUI.removeYellowArrow(_map.conLevel["bossTig_0"]);
               CommonUI.removeYellowArrow(_map.conLevel["bossTig_1"]);
               CommonUI.addYellowArrow(_map.conLevel["bossTig_1"],0,0,300);
            }]);
         }
      }
      
      public static function goStep3() : void
      {
         _mcForMap705.visible = true;
         _map.conLevel["dao"].visible = true;
         _mcForMap705.gotoAndStop(6);
         AnimateManager.playMcAnimate(_map.conLevel["rock"],2,"mc",function():void
         {
            _map.depthLevel["men_" + 1].mouseEnabled = false;
            _map.depthLevel["men_" + 1].mouseChildren = false;
            _map.depthLevel["men_" + 2].mouseEnabled = false;
            _map.depthLevel["men_" + 2].mouseChildren = false;
            _map.conLevel["bossTig_0"].mouseEnabled = false;
            _map.conLevel["bossTig_0"].mouseChildren = false;
            CommonUI.addYellowExcal(_map.conLevel["atieda"],30,0);
            _map.conLevel["atieda"].buttonMode = true;
            _map.conLevel["atieda"].addEventListener(MouseEvent.CLICK,onAteidaClick);
         });
      }
      
      private static function onAteidaClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         CommonUI.removeYellowExcal(_map.conLevel["atieda"]);
         _map.conLevel["atieda"].buttonMode = false;
         _map.conLevel["atieda"].removeEventListener(MouseEvent.CLICK,onAteidaClick);
         AnimateManager.playMcAnimate(_mcForMap705,6,"task_901_mc6",function():void
         {
            NpcDialog.show(NPC.SEER,["阿铁打我终于来救你了，你没事吧！米咔呢？它在哪里？"],["米咔就在石门背后！先找到我的斩月双刀吧！"],[function():void
            {
               NpcDialog.show(NPC.ATIEDA,["有了斩月双刀，我就能想办法救米咔了！"],["恩恩，为这就去找找，一定就在附近！"],[function():void
               {
                  _map.conLevel["dao"].buttonMode = true;
                  _map.conLevel["dao"].addEventListener(MouseEvent.CLICK,onDaoClick);
                  _map.conLevel["atieda"].buttonMode = true;
                  _map.conLevel["atieda"].addEventListener(MouseEvent.CLICK,onAteidaClick2);
               }]);
            }]);
         });
      }
      
      private static function onAteidaClick2(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.ATIEDA,["我的斩月双刀呢？动作快啊！否则我们都会被困在这个地方，被灼热的熔岩慢慢吞噬掉的！"],["哦哦，我这就去！"]);
      }
      
      private static function onDaoClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         _map.conLevel["dao"].visible = false;
         _map.conLevel["dao"].buttonMode = false;
         _map.conLevel["atieda"].buttonMode = false;
         _map.conLevel["dao"].removeEventListener(MouseEvent.CLICK,onDaoClick);
         _map.conLevel["atieda"].removeEventListener(MouseEvent.CLICK,onAteidaClick2);
         NpcDialog.show(NPC.ATIEDA,["太好了！我最珍贵的斩月双刀终于回来了！米咔，我这就来救你！"],[MainManager.actorInfo.nick + "，闪开点！"],[function():void
         {
            MainManager.actorModel.visible = false;
            AnimateManager.playMcAnimate(_mcForMap705,7,"task_901_mc7",function():void
            {
               NpcDialog.show(NPC.ATIEDA,["赛尔，你可要小心啊！一定要活着回来！这是我和你的约定！"],["知道啦！别啰嗦快走！"],[function():void
               {
                  AnimateManager.playMcAnimate(_mcForMap705,8,"task_901_mc8",function():void
                  {
                     MainManager.actorModel.visible = true;
                     TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                     {
                        var b:Boolean = param1;
                        _mcForMap705.gotoAndStop(9);
                        NpcDialog.show(NPC.KAILATE,["既然就省你一个了，那就来个了断吧！让你知道坏我好事的下场是很严重的！"],["哈哈，来吧！看看谁笑到最后！"],[function():void
                        {
                           FightManager.fightWithBoss("凯拉特",8);
                        }]);
                     });
                  });
               }]);
            });
         }]);
      }
      
      private static function fightWithBoss4(param1:Event = null) : void
      {
         SocketConnection.addCmdListener(CommandID.RONGRANDIXING_4,onBoss4StateHandler);
         SocketConnection.send(CommandID.RONGRANDIXING_4);
      }
      
      private static function onBoss4StateHandler(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var state:uint;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.RONGRANDIXING_4,onBoss4StateHandler);
         data = event.data as ByteArray;
         state = data.readUnsignedInt();
         if(state == 1)
         {
            NpcDialog.show(NPC.KAILATE,["小子，别以为击败了我的手下就觉得大功告成了，考验才刚开始！"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["huodong"],2,"mc",function():void
               {
                  NpcDialog.show(NPC.SEER,["什么！这些光球难道就是被困的精灵？看来这次要赌一赌了！点击光球捕捉被困精灵！"],null,null,false,function():void
                  {
                     _map.conLevel["guangTig"].buttonMode = true;
                     _map.conLevel["guangTig"].addEventListener(MouseEvent.CLICK,onGuangClick);
                  });
               });
            });
         }
         else
         {
            NpcDialog.show(NPC.KAILATE,["想挑战我，哼哼，你还太嫩了，先击败我的三个手下再说！"],["战胜这些无用的家伙简直太容易了！"],[function():void
            {
               NpcDialog.show(NPC.KAILATE,["不妨告诉你,被我抓来的精灵已经不计其数了，有本事你做它们的救世主吧！！"],["卑鄙的家伙，这次我一定要拯救这些精灵！"]);
            }]);
         }
      }
      
      private static function onGuangClick(param1:MouseEvent) : void
      {
         FightManager.fightWithBoss("神秘精灵",3);
      }
      
      public static function destory() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:uint = 0;
         if(_map)
         {
            SocketConnection.removeCmdListener(CommandID.RONGRANDIXING_4,onBoss4StateHandler);
            SocketConnection.removeCmdListener(CommandID.RONGRANDIXING,onBossStateHandler);
            if(_map.conLevel["bossTig_3"])
            {
               _map.conLevel["bossTig_3"].removeEventListener(MouseEvent.CLICK,fightWithBoss4);
            }
            if(_map.conLevel["bossTig_0"])
            {
               _loc1_ = 0;
               while(_loc1_ < 3)
               {
                  _map.conLevel["bossTig_" + _loc1_].removeEventListener(MouseEvent.CLICK,onBossClick);
                  _loc1_++;
               }
            }
            if(_map.conLevel["men_1"])
            {
               _loc2_ = 1;
               while(_loc2_ < 3)
               {
                  _map.depthLevel["men_" + _loc2_].removeEventListener(MouseEvent.CLICK,onDoorClick);
                  _loc2_++;
               }
            }
            if(_map.conLevel["atieda"])
            {
               _map.conLevel["atieda"].removeEventListener(MouseEvent.CLICK,onAteidaClick);
               _map.conLevel["atieda"].removeEventListener(MouseEvent.CLICK,onAteidaClick2);
            }
            if(_map.conLevel["dao"])
            {
               _map.conLevel["dao"].removeEventListener(MouseEvent.CLICK,onDaoClick);
            }
            if(_map.conLevel["guangTig"])
            {
               _map.conLevel["guangTig"].removeEventListener(MouseEvent.CLICK,onGuangClick);
            }
         }
         _mcForMap705 = null;
         _map = null;
      }
   }
}
