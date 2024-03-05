package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class FlashPiGodVsDarkPiGodController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var _currIndex:int = 0;
      
      private static var _datas:Array;
      
      private static var maxRound:int = 1;
       
      
      public function FlashPiGodVsDarkPiGodController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         getMc(function(param1:MovieClip):void
         {
            taskMC = param1;
            _map.btnLevel.addChild(taskMC);
            if(!BitBuffSetClass.getState(22441))
            {
               playPreStory();
            }
            else
            {
               initBtn();
            }
         });
      }
      
      public static function clickEquip(param1:* = null) : void
      {
         StatManager.sendStat2014("闪光皮神vs暗黑皮神","点击主装置",StatManager.RUN_ACT);
         if(MapManager.currentMap.id == 943)
         {
            showPanel();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SuperGodFightMsgPanel"));
         }
      }
      
      public static function clickShopEquip(param1:* = null) : void
      {
         StatManager.sendStat2014("闪光皮神vs暗黑皮神","点击商店装置",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("SuperGodFightEvolveShopPanel"));
      }
      
      public static function clickRuleEquip(param1:* = null) : void
      {
         StatManager.sendStat2014("闪光皮神vs暗黑皮神","点击规则装置",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("SuperGodFightRulePanel"));
      }
      
      private static function initBtn() : void
      {
         taskMC.gotoAndStop(7);
         taskMC.addEventListener(MouseEvent.CLICK,onClickMcHandler);
         getState();
      }
      
      protected static function onClickMcHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var name:String = String(event.target.name);
         switch(name)
         {
            case "btnPiPi":
               NpcDialog.show(NPC.SHANGUANG_PIPI,["加油啊！闪光皮神！没有谁能够战胜你！"],["我们以你为傲！"]);
               break;
            case "btnGodPower":
               NpcDialog.show(NPC.SHENLIHAO,["这是我看过最激烈的对抗，超神对决！太热血了！"],["让我们拭目以待！"]);
               break;
            case "flashPiGod":
               if(_currIndex % 2 == 0)
               {
                  if(_currIndex == 0 && _datas[1] >= maxRound)
                  {
                     Alert.show("今天你的参加活动的机会已经用完！想再次开启活动吗？",function():void
                     {
                        showPanel();
                     });
                  }
                  else
                  {
                     CommonUI.removeYellowArrow(_map.topLevel);
                     KTool.hideMapAllPlayerAndMonster();
                     _map.depthLevel.visible = false;
                     AnimateManager.playMcAnimate(taskMC,8,"mc8",function():void
                     {
                        NpcDialog.show(NPC.SHANGUANG_PISHEN,["0xff0000" + MainManager.actorInfo.nick + "0xffffff，快帮助闪光皮神，这是最好的时机，我们千万不能错过！"],["我会为你加油的！"],[function():void
                        {
                           addFightEndListener();
                           FightManager.fightNoMapBoss("闪光波斯蒂加",1219 + _currIndex);
                        }]);
                     });
                  }
               }
               else
               {
                  NpcDialog.show(NPC.SHANGUANG_PISHEN,["波尔蒂加，你的野心不会得逞，我一定会在再次击败你！"],["我会为你加油的！"]);
               }
               break;
            case "darkPiGod":
               if(_currIndex % 2 == 1)
               {
                  if(_currIndex == 0 && _datas[1] >= maxRound)
                  {
                     Alert.show("今天你的参加活动的机会已经用完！想再次开启活动吗？",function():void
                     {
                        showPanel();
                     });
                  }
                  else
                  {
                     CommonUI.removeYellowArrow(_map.topLevel);
                     KTool.hideMapAllPlayerAndMonster();
                     _map.depthLevel.visible = false;
                     AnimateManager.playMcAnimate(taskMC,9,"mc9",function():void
                     {
                        NpcDialog.show(NPC.ANHEI_PISHEN,["0xff0000" + MainManager.actorInfo.nick + "0xffffff，闪光皮皮我是要定了，你们休想阻止我！"],["我会为你加油的！"],[function():void
                        {
                           addFightEndListener();
                           FightManager.fightNoMapBoss("暗黑波斯蒂加",1219 + _currIndex);
                        }]);
                     });
                  }
               }
               else
               {
                  NpcDialog.show(NPC.ANHEI_PISHEN,["上次的失败不可能在重演，这次我一定要将所有的闪光皮皮消灭，哈哈哈！"],["波尔蒂加，我一定会打败你的！"]);
               }
         }
      }
      
      private static function addFightEndListener() : void
      {
         var onError2:Function = null;
         var onBossFight:Function = null;
         onError2 = function(param1:SocketErrorEvent):void
         {
            SocketConnection.mainSocket.removeEventListener(SocketErrorEvent.ERROR,onError2);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onBossFight);
         };
         onBossFight = function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            SocketConnection.mainSocket.removeEventListener(SocketErrorEvent.ERROR,onError2);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onBossFight);
            if(_currIndex == 0 && _datas[1] >= maxRound)
            {
               NpcDialog.show(NPC.ANHEI_PISHEN,["闪光波斯蒂加，想不多年后，你的实力还如此强大！"],["收手吧！波尔蒂加！"],[function():void
               {
                  NpcDialog.show(NPC.ANHEI_PISHEN,["不可能，你别得意的太早，对决还没有结束，我的实力还没有发挥出来！你给我等着！"],["好吧！那就别怪我了，波尔蒂加！"],[function():void
                  {
                     MapManager.changeMap(10);
                  }]);
               }]);
               return;
            }
            if(_currIndex % 2 == 0)
            {
               NpcDialog.show(NPC.ANHEI_PISHEN,["0xff0000" + MainManager.actorInfo.nick + "0xffffff，没想到你也有如此强大的能量，看来我是小看你们了，下次就没这么幸运了！ "],["你是不会得逞的！"]);
            }
            else
            {
               NpcDialog.show(NPC.ANHEI_PISHEN,["0xff0000" + MainManager.actorInfo.nick + "0xffffff，感谢你的帮助，相信再过不久，我一定可以战胜暗黑皮神波尔蒂加！  "],["恩，我也会继续努力的！"]);
            }
         };
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onBossFight);
         SocketConnection.mainSocket.addEventListener(SocketErrorEvent.ERROR,onError2);
      }
      
      private static function getState() : void
      {
         KTool.getMultiValue([14070,14071,14072,4182,14073],function(param1:Array):void
         {
            _datas = param1;
            maxRound = 1;
            var _loc2_:int = int(param1[0]);
            var _loc3_:Array = BitUtils.bitToList(_loc2_);
            _currIndex = 0;
            var _loc4_:int = 0;
            while(_loc4_ < 9)
            {
               if(_loc3_[_loc4_] == 0)
               {
                  _currIndex = _loc4_;
                  break;
               }
               _loc4_++;
            }
            if(param1[2] == 31)
            {
               ++maxRound;
            }
            if(MainManager.actorInfo.vip > 0)
            {
               ++maxRound;
            }
            maxRound += param1[3] + param1[4];
            setArrow();
         });
      }
      
      private static function setArrow() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         if(!(_currIndex == 0 && _datas[1] >= maxRound))
         {
            if(_currIndex % 2 == 0)
            {
               CommonUI.addYellowArrow(_map.topLevel,314,200,0);
            }
            else if(_currIndex % 2 == 1)
            {
               CommonUI.addYellowArrow(_map.topLevel,668,209,0);
            }
         }
      }
      
      private static function playPreStory() : void
      {
         StatManager.sendStat2014("闪光皮神vs暗黑皮神","参与前置任务",StatManager.RUN_ACT);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            _map.depthLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            BitBuffSetClass.setState(22441,1);
            showPanel();
            initBtn();
            StatManager.sendStat2014("闪光皮神vs暗黑皮神","完成前置任务",StatManager.RUN_ACT);
         });
      }
      
      private static function showPanel(param1:* = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SuperGodFightMainPanel"));
         ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,closeGoldBuyPanelHandler);
      }
      
      private static function closeGoldBuyPanelHandler(param1:*) : void
      {
         getState();
         ModuleManager.removeEventListener("model","close",closeGoldBuyPanelHandler);
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         var _loc3_:String = "20140319_55";
         var _loc4_:String = "cartoon/goldenwarrior";
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc1"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANG_PIPI,["闪光皮神，你说的暗黑势力是什么？？如果是真的，那就太可怕了！！"],["恩…他们很快就到！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc2"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEI_PISHEN,["闪光波斯蒂加…没想到我们又见面了吧！今天我把拿回曾经失去的一切，闪光皮皮们你们准备从这个世界上消失吧"],["这么久了，你还没有释怀？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEI_PISHEN,["别以为这件事情就这么算了，如今我的一切都拜你所赐！你可以是闪光一族中最闪耀、最受崇拜的！"],["那我呢！为什么我要变成这样！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANG_PISHEN,["只因为你的怨念太重，所以无论当时的结果是什么都无法进化成超神一族，可能这就是命运吧！"],["住口！可恶的家伙！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc3"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANG_PISHEN,["没事的，放心吧！当年我可以击败波尔蒂加，时隔多年，现在我一样可以击败他！"],["哼哼…闪光皮神，你可别小看我了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc4"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEI_PISHEN,["又来几个没用的，今天我要让神宠之境充满黑暗，是天魔组织给了我如此强大的力量，我必须完成任务！"],["我们一定会阻止你的！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc5"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEI_PISHEN,["好强大的能量，但是你们别忘记了，这是我和闪光波斯蒂加之间的事情！"],["神力号，你别插手！！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHANGUANG_PISHEN,["这件事情让我来解决，波斯蒂、神力号，你们好好照顾闪光皮皮！"],["恩，明白！！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 6,"mc6"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太厉害了，这简直是超神之战，闪光皮神vs暗黑皮神，我可以要做点什么！"],["加油啊！闪光皮神！"]));
         return _loc1_;
      }
      
      private static function getMc(param1:Function) : void
      {
         var fun:Function = param1;
         if(taskMC)
         {
            fun(taskMC);
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_943_0"),function(param1:MovieClip):void
            {
               taskMC = param1;
               fun(taskMC);
            });
         }
      }
      
      private static function set taskMC(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            DisplayUtil.removeForParent(taskMC);
            CommonUI.removeYellowExcal(_map.topLevel);
            _map = null;
            taskMC = null;
         }
      }
   }
}
