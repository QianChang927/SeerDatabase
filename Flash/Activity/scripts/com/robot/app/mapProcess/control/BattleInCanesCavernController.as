package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BattleInCanesCavernController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const rateArr:Array = [0.2,0.25,0.3,0.5,1];
      
      private static const BATTLE_IN_CANES_CAVERN_OPEN_OBSTACLE:uint = 4356;
      
      private static const BATTLE_IN_CANES_CAVERN_CHECK_INFO:uint = 4357;
      
      private static var _time:CronTimeVo = new CronTimeVo("*","10-12","29-31","8","*","2014");
      
      private static var _time1:CronTimeVo = new CronTimeVo("*","10-12","1-4","9","*","2014");
      
      private static var _canReceive:Boolean;
      
      private static var _curStage:uint;
      
      private static var _isRightVine:Boolean;
      
      private static var _tokensNum:uint;
      
      private static var _filter:GlowFilter = new GlowFilter(15072008,1,6,6,5);
       
      
      public function BattleInCanesCavernController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         _canReceive = true;
         onActivityTime(null);
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
      }
      
      private static function removeActivityMC() : void
      {
         var _loc2_:MovieClip = null;
         DisplayUtil.removeForParent(_map.depthLevel["spiderNPC"]);
         DisplayUtil.removeForParent(_map.depthLevel["stone"]);
         DisplayUtil.removeForParent(_map.depthLevel["task996MC"]);
         DisplayUtil.removeForParent(_map.depthLevel["telaxiusi"]);
         var _loc1_:int = 0;
         while(_loc1_ < _map.typeLevel.numChildren)
         {
            if(_map.typeLevel.getChildAt(_loc1_) is MovieClip)
            {
               DisplayUtil.removeForParent(_map.typeLevel.getChildAt(_loc1_));
               _loc1_--;
            }
            _loc1_++;
         }
         while(_loc1_ < _map.conLevel.numChildren)
         {
            _loc2_ = _map.conLevel.getChildAt(_loc1_) as MovieClip;
            if(_loc2_ && _loc2_.name != "door_0" && _loc2_.name != "hit_0")
            {
               DisplayUtil.removeForParent(_map.conLevel.getChildAt(_loc1_));
               _loc1_--;
            }
            _loc1_++;
         }
      }
      
      private static function onActivityTime(param1:SocketEvent = null) : void
      {
         if(_canReceive)
         {
            if(SystemTimerManager.isActive([_time,_time1]))
            {
               initInsideTime();
            }
            else
            {
               initOutsideTime();
            }
         }
      }
      
      private static function initOutsideTime() : void
      {
         removeActivity();
         ToolTipManager.add(_map.depthLevel["telaxiusi"] as MovieClip,"特拉修斯");
         CommonUI.addYellowExcal(_map.depthLevel["telaxiusi"],0,0);
         (_map.depthLevel["telaxiusi"] as MovieClip).visible = true;
         (_map.depthLevel["telaxiusi"] as MovieClip).buttonMode = true;
         (_map.depthLevel["telaxiusi"] as MovieClip).addEventListener(MouseEvent.CLICK,onTelaxiusiClick);
         var _loc1_:String = "qtd_1114_1";
         var _loc2_:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
         if(_loc2_.data[_loc1_] == null)
         {
            showObstacle(3);
         }
         else
         {
            showObstacle(0);
            MainManager.actorModel.x = 650;
            MainManager.actorModel.y = 440;
         }
      }
      
      private static function onTelaxiusiClick(param1:MouseEvent) : void
      {
         var _loc2_:String = "1114_1";
         var _loc3_:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
         if(_loc3_.data[_loc2_] == null)
         {
            startPro();
         }
         else
         {
            NpcDialog.show(NPC.TELAXIUSI,["小子，每天0xff000010:00—12:000xffffff打败我的手下才能得到破解机关的令牌！够胆就来试试！"],["你等着！我一定会来！"]);
         }
      }
      
      private static function startPro() : void
      {
         ToolTipManager.remove(_map.depthLevel["telaxiusi"] as MovieClip);
         CommonUI.removeYellowExcal(_map.depthLevel["telaxiusi"]);
         (_map.depthLevel["telaxiusi"] as MovieClip).visible = false;
         (_map.depthLevel["telaxiusi"] as MovieClip).buttonMode = false;
         (_map.depthLevel["telaxiusi"] as MovieClip).removeEventListener(MouseEvent.CLICK,onTelaxiusiClick);
         _canReceive = false;
         (_map.depthLevel["task996MC"] as MovieClip).visible = true;
         MainManager.selfVisible = false;
         AnimateManager.playMcAnimate(_map.depthLevel["task996MC"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.TELAXIUSI,["主人？！是什么风把您吹来了？"],["哼"],[function():void
            {
               NpcDialog.show(NPC.ZOG,["这就是一直反对我的人，本事不赖嘛，能找到这里来！"],["帕罗狄亚！受死吧！"],[function():void
               {
                  NpcDialog.show(NPC.ZOG,["哼哼，用不着我出手，特拉修斯！陪客人玩玩！"],["遵命！"],[function():void
                  {
                     (_map.depthLevel["task996MC"] as MovieClip).visible = true;
                     MainManager.selfVisible = false;
                     AnimateManager.playMcAnimate(_map.depthLevel["task996MC"],2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.TELAXIUSI,["小子，每天0xff000010:00—12:000xffffff打败我的手下才能得到破解机关的令牌！够胆就来试试！"],["你等着！我一定会来！"],[function():void
                        {
                           var _loc1_:* = "qtd_1114_1";
                           var _loc2_:* = SOManager.getUserSO(SOManager.ACTIVITY);
                           _loc2_.data[_loc1_] = true;
                           SOManager.flush(_loc2_);
                           (_map.depthLevel["task996MC"] as MovieClip).visible = false;
                           MainManager.selfVisible = true;
                           _canReceive = true;
                           ToolTipManager.add(_map.depthLevel["telaxiusi"] as MovieClip,"特拉修斯");
                           CommonUI.addYellowExcal(_map.depthLevel["telaxiusi"],0,0);
                           (_map.depthLevel["telaxiusi"] as MovieClip).visible = true;
                           (_map.depthLevel["telaxiusi"] as MovieClip).buttonMode = true;
                           (_map.depthLevel["telaxiusi"] as MovieClip).addEventListener(MouseEvent.CLICK,onTelaxiusiClick);
                           showObstacle(0);
                           MainManager.actorModel.x = 650;
                           MainManager.actorModel.y = 440;
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function initInsideTime() : void
      {
         var str:String = null;
         var so:SharedObject = null;
         removeActivity();
         str = "qtd_1114_2";
         so = SOManager.getUserSO(SOManager.ACTIVITY);
         if(so.data[str] != null)
         {
            SocketConnection.addCmdListener(BATTLE_IN_CANES_CAVERN_CHECK_INFO,initObstacle);
            SocketConnection.send(BATTLE_IN_CANES_CAVERN_CHECK_INFO);
            insideStatus();
         }
         else
         {
            _canReceive = false;
            (_map.depthLevel["task996MC"] as MovieClip).visible = true;
            AnimateManager.playMcAnimate(_map.depthLevel["task996MC"],3,"mc3",function():void
            {
               (_map.depthLevel["task996MC"] as MovieClip).visible = false;
               NpcDialog.show(NPC.TELAXIUSI,["想破我的机关，你得有足够的青藤令牌！想得到令牌，你就得先陪我的手下地穴蜘蛛玩玩！"],["你等着！"],[function():void
               {
                  so.data[str] = true;
                  SOManager.flush(so);
                  _canReceive = true;
                  insideStatus();
               }]);
            });
         }
      }
      
      private static function initObstacle(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(BATTLE_IN_CANES_CAVERN_CHECK_INFO,initObstacle);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _curStage = _loc2_.readUnsignedInt();
         showObstacle(_curStage);
         if(_curStage == 3)
         {
            ToolTipManager.add(_map.depthLevel["telaxiusi"] as MovieClip,"特拉修斯");
            CommonUI.addYellowExcal(_map.depthLevel["telaxiusi"],0,0);
            (_map.depthLevel["telaxiusi"] as MovieClip).visible = true;
            (_map.depthLevel["telaxiusi"] as MovieClip).buttonMode = true;
            (_map.depthLevel["telaxiusi"] as MovieClip).addEventListener(MouseEvent.CLICK,onTelaxiusiClick2);
         }
      }
      
      private static function insideStatus() : void
      {
         (_map.depthLevel["task996MC"] as MovieClip).visible = true;
         (_map.depthLevel["task996MC"] as MovieClip).gotoAndStop(3);
         ToolTipManager.add(_map.depthLevel["stone"] as MovieClip,"公告牌");
         (_map.depthLevel["stone"] as MovieClip).visible = true;
         (_map.depthLevel["stone"] as MovieClip).buttonMode = true;
         (_map.depthLevel["stone"] as MovieClip).addEventListener(MouseEvent.CLICK,onStoneClick);
         var _loc1_:int = 1;
         while(_loc1_ < 4)
         {
            (_map.conLevel["vine_" + _loc1_] as MovieClip).buttonMode = true;
            (_map.conLevel["vine_" + _loc1_] as MovieClip).addEventListener(MouseEvent.CLICK,onVineClick);
            _loc1_++;
         }
         ToolTipManager.add(_map.depthLevel["spiderNPC"] as MovieClip,"地穴蜘蛛");
         CommonUI.addYellowExcal(_map.depthLevel["spiderNPC"],0,-45);
         (_map.depthLevel["spiderNPC"] as MovieClip).visible = true;
         (_map.depthLevel["spiderNPC"] as MovieClip).buttonMode = true;
         (_map.depthLevel["spiderNPC"] as MovieClip).addEventListener(MouseEvent.CLICK,onSpiderClick);
      }
      
      private static function onVineClick(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:uint = uint(_loc2_.name.split("_")[1]);
         if(_loc3_ == _curStage + 1)
         {
            _isRightVine = true;
            SocketConnection.addCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
            SocketConnection.send(CommandID.ITEM_LIST,1200073,1200073,2);
         }
         else
         {
            _isRightVine = false;
            Alarm.show("你还没有清除前面的障碍哦！");
         }
      }
      
      private static function onItemCountHandler(param1:SocketEvent) : void
      {
         var _loc4_:SingleItemInfo = null;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onItemCountHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 1)
         {
            _loc4_ = new SingleItemInfo(_loc2_);
            _tokensNum = _loc4_.itemNum;
            if(_tokensNum >= 5)
            {
               _tokensNum -= 5;
               ++_curStage;
               SocketConnection.addCmdListener(BATTLE_IN_CANES_CAVERN_OPEN_OBSTACLE,onOpenObstacle);
               SocketConnection.send(BATTLE_IN_CANES_CAVERN_OPEN_OBSTACLE);
            }
            else
            {
               Alarm.show("青藤令牌不足，快去与地穴蜘蛛战斗吧！");
            }
         }
         else
         {
            Alarm.show("青藤令牌不足，快去与地穴蜘蛛战斗吧！");
         }
      }
      
      private static function onOpenObstacle(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var itemID:uint = 0;
         var cnt:uint = 0;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(BATTLE_IN_CANES_CAVERN_OPEN_OBSTACLE,onOpenObstacle);
         data = e.data as ByteArray;
         itemID = data.readUnsignedInt();
         cnt = data.readUnsignedInt();
         _curStage = data.readUnsignedInt();
         _canReceive = false;
         if(_curStage == 1 || _curStage == 2)
         {
            AnimateManager.playMcAnimate(_map.conLevel["vine_" + _curStage],2,"clear",function():void
            {
               AnimateManager.playMcAnimate(_map.depthLevel["task996MC"],4,"mc4",function():void
               {
                  (_map.depthLevel["task996MC"] as MovieClip).gotoAndStop(3);
                  (_map.conLevel["box"] as MovieClip).visible = true;
                  AnimateManager.playMcAnimate(_map.conLevel["box"],2,"mc",function():void
                  {
                     (_map.conLevel["box"] as MovieClip).visible = false;
                     ItemInBagAlert.show(itemID,cnt + "个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(itemID)) + "已经放入你的储物箱！",function():void
                     {
                        showObstacle(_curStage);
                        _canReceive = true;
                     });
                  });
               });
            });
         }
         else if(_curStage == 3)
         {
            AnimateManager.playMcAnimate(_map.conLevel["vine_" + _curStage],2,"clear",function():void
            {
               AnimateManager.playMcAnimate(_map.depthLevel["task996MC"],5,"mc5",function():void
               {
                  (_map.conLevel["box"] as MovieClip).visible = true;
                  AnimateManager.playMcAnimate(_map.conLevel["box"],2,"mc",function():void
                  {
                     ItemInBagAlert.show(itemID,cnt + "个" + ItemXMLInfo.getName(itemID) + "已经放入你的储物箱！",function():void
                     {
                        showObstacle(_curStage);
                        (_map.depthLevel["task996MC"] as MovieClip).gotoAndStop(3);
                        (_map.conLevel["box"] as MovieClip).visible = false;
                        ToolTipManager.add(_map.depthLevel["telaxiusi"] as MovieClip,"特拉修斯");
                        CommonUI.addYellowExcal(_map.depthLevel["telaxiusi"],0,0);
                        (_map.depthLevel["telaxiusi"] as MovieClip).visible = true;
                        (_map.depthLevel["telaxiusi"] as MovieClip).buttonMode = true;
                        (_map.depthLevel["telaxiusi"] as MovieClip).addEventListener(MouseEvent.CLICK,onTelaxiusiClick2);
                     });
                  });
               });
            });
         }
      }
      
      private static function onTelaxiusiClick2(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(380,200),function():void
         {
            ToolTipManager.remove(_map.depthLevel["telaxiusi"] as MovieClip);
            CommonUI.removeYellowExcal(_map.depthLevel["telaxiusi"]);
            (_map.depthLevel["telaxiusi"] as MovieClip).visible = false;
            (_map.depthLevel["telaxiusi"] as MovieClip).buttonMode = false;
            (_map.depthLevel["telaxiusi"] as MovieClip).removeEventListener(MouseEvent.CLICK,onTelaxiusiClick2);
            EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onError);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFairyComplete);
            FightManager.fightWithBoss("特拉修斯",1);
         });
      }
      
      private static function onError(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onError);
         ToolTipManager.add(_map.depthLevel["telaxiusi"] as MovieClip,"特拉修斯");
         CommonUI.addYellowExcal(_map.depthLevel["telaxiusi"],0,0);
         (_map.depthLevel["telaxiusi"] as MovieClip).visible = true;
         (_map.depthLevel["telaxiusi"] as MovieClip).buttonMode = true;
         (_map.depthLevel["telaxiusi"] as MovieClip).addEventListener(MouseEvent.CLICK,onTelaxiusiClick2);
      }
      
      private static function onFightFairyComplete(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFairyComplete);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            AnimateManager.playMcAnimate(_map.depthLevel["task996MC"],6,"mc6",function():void
            {
               MainManager.selfVisible = false;
               AnimateManager.playMcAnimate(_map.depthLevel["task996MC"],2,"mc2",function():void
               {
                  (_map.depthLevel["task996MC"] as MovieClip).gotoAndStop(3);
                  MainManager.selfVisible = true;
               });
            });
         }
         MainManager.actorModel.x = 650;
         MainManager.actorModel.y = 440;
      }
      
      private static function onStoneClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BattleInCanesCavernPanel"),"正在打开面板……");
      }
      
      private static function onSpiderClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.DIXUE_ZHIZHU,["誓死保卫青藤令牌！"],["我要打败你！","我要准备一下！"],[function():void
         {
            FightManager.fightWithBoss("地穴蜘蛛",0);
         }]);
      }
      
      private static function removeActivity() : void
      {
         ToolTipManager.remove(_map.depthLevel["stone"] as MovieClip);
         (_map.depthLevel["stone"] as MovieClip).visible = false;
         (_map.depthLevel["stone"] as MovieClip).buttonMode = false;
         (_map.depthLevel["stone"] as MovieClip).removeEventListener(MouseEvent.CLICK,onStoneClick);
         ToolTipManager.remove(_map.depthLevel["spiderNPC"] as MovieClip);
         CommonUI.removeYellowExcal(_map.depthLevel["spiderNPC"]);
         (_map.depthLevel["spiderNPC"] as MovieClip).visible = false;
         (_map.depthLevel["spiderNPC"] as MovieClip).buttonMode = false;
         (_map.depthLevel["spiderNPC"] as MovieClip).removeEventListener(MouseEvent.CLICK,onSpiderClick);
         ToolTipManager.remove(_map.depthLevel["telaxiusi"] as MovieClip);
         CommonUI.removeYellowExcal(_map.depthLevel["telaxiusi"]);
         (_map.depthLevel["telaxiusi"] as MovieClip).visible = false;
         (_map.depthLevel["telaxiusi"] as MovieClip).buttonMode = false;
         (_map.depthLevel["telaxiusi"] as MovieClip).removeEventListener(MouseEvent.CLICK,onTelaxiusiClick);
         (_map.depthLevel["telaxiusi"] as MovieClip).removeEventListener(MouseEvent.CLICK,onTelaxiusiClick2);
         (_map.conLevel["box"] as MovieClip).visible = false;
         (_map.depthLevel["task996MC"] as MovieClip).visible = false;
         var _loc1_:int = 1;
         while(_loc1_ < 4)
         {
            (_map.conLevel["vine_" + _loc1_] as MovieClip).buttonMode = false;
            (_map.conLevel["vine_" + _loc1_] as MovieClip).removeEventListener(MouseEvent.CLICK,onVineClick);
            _loc1_++;
         }
      }
      
      private static function showObstacle(param1:uint) : void
      {
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         switch(param1)
         {
            case 0:
               (_map.typeLevel["obstacle_1"] as MovieClip).visible = true;
               (_map.conLevel["vine_1"] as MovieClip).gotoAndStop(1);
               (_map.typeLevel["obstacle_2"] as MovieClip).visible = true;
               (_map.conLevel["vine_2"] as MovieClip).gotoAndStop(1);
               (_map.typeLevel["obstacle_3"] as MovieClip).visible = true;
               (_map.conLevel["vine_3"] as MovieClip).gotoAndStop(1);
               break;
            case 1:
               (_map.typeLevel["obstacle_1"] as MovieClip).visible = false;
               (_map.conLevel["vine_1"] as MovieClip).gotoAndStop(3);
               (_map.typeLevel["obstacle_2"] as MovieClip).visible = true;
               (_map.conLevel["vine_2"] as MovieClip).gotoAndStop(1);
               (_map.typeLevel["obstacle_3"] as MovieClip).visible = true;
               (_map.conLevel["vine_3"] as MovieClip).gotoAndStop(1);
               (_map.conLevel["vine_1"] as MovieClip).buttonMode = false;
               (_map.conLevel["vine_1"] as MovieClip).removeEventListener(MouseEvent.CLICK,onVineClick);
               break;
            case 2:
               (_map.typeLevel["obstacle_1"] as MovieClip).visible = false;
               (_map.conLevel["vine_1"] as MovieClip).gotoAndStop(3);
               (_map.typeLevel["obstacle_2"] as MovieClip).visible = false;
               (_map.conLevel["vine_2"] as MovieClip).gotoAndStop(3);
               (_map.typeLevel["obstacle_3"] as MovieClip).visible = true;
               (_map.conLevel["vine_3"] as MovieClip).gotoAndStop(1);
               _loc3_ = 1;
               while(_loc3_ < 3)
               {
                  (_map.conLevel["vine_" + _loc3_] as MovieClip).buttonMode = false;
                  (_map.conLevel["vine_" + _loc3_] as MovieClip).removeEventListener(MouseEvent.CLICK,onVineClick);
                  _loc3_++;
               }
               break;
            case 3:
               (_map.typeLevel["obstacle_1"] as MovieClip).visible = false;
               (_map.conLevel["vine_1"] as MovieClip).gotoAndStop(3);
               (_map.typeLevel["obstacle_2"] as MovieClip).visible = false;
               (_map.conLevel["vine_2"] as MovieClip).gotoAndStop(3);
               (_map.typeLevel["obstacle_3"] as MovieClip).visible = false;
               (_map.conLevel["vine_3"] as MovieClip).gotoAndStop(3);
               _loc4_ = 1;
               while(_loc4_ < 4)
               {
                  (_map.conLevel["vine_" + _loc4_] as MovieClip).buttonMode = false;
                  (_map.conLevel["vine_" + _loc4_] as MovieClip).removeEventListener(MouseEvent.CLICK,onVineClick);
                  _loc4_++;
               }
         }
         MapManager.currentMap.makeMapArray();
         var _loc2_:uint = 1;
         while(_loc2_ <= 3)
         {
            if((_map.typeLevel["obstacle_" + _loc2_] as MovieClip).visible)
            {
               (_map.conLevel["obstacle_" + _loc2_] as MovieClip).mouseEnabled = true;
               (_map.conLevel["obstacle_" + _loc2_] as MovieClip).addEventListener(MouseEvent.CLICK,onObstacleClick);
            }
            else
            {
               (_map.conLevel["obstacle_" + _loc2_] as MovieClip).mouseEnabled = false;
               (_map.conLevel["obstacle_" + _loc2_] as MovieClip).removeEventListener(MouseEvent.CLICK,onObstacleClick);
            }
            _loc2_++;
         }
      }
      
      private static function onObstacleClick(param1:MouseEvent) : void
      {
         var index:uint = 0;
         var event:MouseEvent = param1;
         var obsMC:MovieClip = event.currentTarget as MovieClip;
         index = uint(obsMC.name.split("_")[1]);
         (_map.conLevel["vine_" + index] as MovieClip).filters = [_filter];
         Alarm.show("前面的障碍还没有清除，不能进入哦！",function():void
         {
            var t:uint = 0;
            t = setTimeout(function():void
            {
               (_map.conLevel["vine_" + index] as MovieClip).filters = null;
               clearTimeout(t);
            },3000);
         });
      }
      
      public static function destroy() : void
      {
         _map = null;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
      }
   }
}
