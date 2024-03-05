package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class WBSpaceController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var _star:Array;
      
      private static var _status:Array;
      
      private static var _canFightBoss:Boolean;
      
      private static const BUFFER_ID:uint = 22652;
      
      private static const BUFFER_ID1:uint = 22654;
       
      
      public function WBSpaceController()
      {
         super();
      }
      
      public static function setup() : void
      {
         EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,onSys);
      }
      
      private static function onSys(param1:SysTimeEvent) : void
      {
         if(isActive == 1 && SystemTimerManager.sysBJDate.getMinutes() % 10 == 0)
         {
         }
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         StatManager.sendStat2014("六芒麒麟阵！齐聚迎寒假","进入802场景","2015运营活动");
         _map = param1;
         SocketConnection.addCmdListener(CommandID.XUANWU_ACTIVE_BALL,onActive);
         SocketConnection.addCmdListener(CommandID.XUANWU_GET_BALL_STAT,onStatus);
         SocketConnection.addCmdListener(CommandID.XUANWU_GET_BALL_GIFT,onGetGift);
         SocketConnection.addCmdListener(CommandID.XUANWU_GET_CAN_FIGHT_BOSS,onGetBoss);
         if(BitBuffSetClass.getState(BUFFER_ID) == 0)
         {
            startPreTask();
         }
         else
         {
            SocketConnection.send(CommandID.XUANWU_GET_BALL_STAT);
         }
      }
      
      public static function startTask() : void
      {
         if(BitBuffSetClass.getState(BUFFER_ID1) == 1)
         {
            MapManager.changeMap(802);
            return;
         }
         KTool.changeMapWithCallBack(7,function():void
         {
            loadAnimate(function():void
            {
               KTool.showMapAllPlayerAndMonster(false);
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
               LevelManager.iconLevel.visible = false;
               AnimateManager.playMcAnimate(taskMc,1,"mc",function():void
               {
                  DisplayUtil.removeForParent(taskMc);
                  taskMc = null;
                  KTool.showMapAllPlayerAndMonster(true);
                  getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
                  LevelManager.iconLevel.visible = true;
                  BitBuffSetClass.setState(BUFFER_ID1,1);
                  NpcDialog.show(NPC.WULIGULA,["赛尔，在麒麟六芒阵等着和大家见面！一起欢庆新春！"],["哇，好棒！我也要去！","我等会再去！"],[function():void
                  {
                     MapManager.changeMap(802);
                  }]);
               });
            });
         });
      }
      
      private static function startPreTask() : void
      {
         loadAnimate(function():void
         {
            KTool.showMapAllPlayerAndMonster(false);
            getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
            LevelManager.iconLevel.visible = false;
            AnimateManager.playMcAnimate(taskMc,2,"mc",function():void
            {
               DisplayUtil.removeForParent(taskMc);
               taskMc = null;
               KTool.showMapAllPlayerAndMonster(true);
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
               LevelManager.iconLevel.visible = true;
               BitBuffSetClass.setState(BUFFER_ID,1);
               SocketConnection.send(CommandID.XUANWU_GET_BALL_STAT);
            });
         });
      }
      
      private static function loadAnimate(param1:Function = null) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("qilin_mapAnmiate"),function(param1:MovieClip):void
         {
            taskMc = param1;
            MapManager.currentMap.topLevel.addChild(taskMc);
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function onQinglong(param1:MouseEvent) : void
      {
         var end:Boolean = false;
         var j:uint = 0;
         var e:MouseEvent = param1;
         if(isActive == 0)
         {
            NpcDialog.show(NPC.QILIN_NEW,[MainManager.actorInfo.nick + "欢迎来到异界空间！现在还不能激活六芒麒麟阵中的图腾柱，记得0xff00002月13日到3月5日每天14:00—15:000xFFFFFF准时来，到时你能获得与图腾数相同的奖励数量哦！"],["知道了！","离开这里。"],[null,function():void
            {
               MapManager.changeMap(980);
            }]);
         }
         else if(isActive == 1)
         {
            if(_canFightBoss)
            {
               end = true;
               for each(j in _star)
               {
                  if(j == 0)
                  {
                     end = false;
                  }
               }
               if(end)
               {
                  NpcDialog.show(NPC.QILIN_NEW,["六芒麒麟阵中的图腾已经全部被激活，你敢接受我的挑战吗？"],["尽管来吧！","不关我事！"],[function():void
                  {
                     FightManager.fightWithBoss("麒麟");
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                     {
                        var e:PetFightEvent = param1;
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                        NpcDialog.show(NPC.QILIN_NEW,["你已经激活图腾且挑战完毕，麒麟挑战指数已经刷新，快去领取奖励吧！记得明天再来异界空间吧！"],["明天我一定更厉害！"],[function():void
                        {
                           MapManager.changeMap(980);
                        }]);
                     });
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.QILIN_NEW,[MainManager.actorInfo.nick + "，在活动时间内，你必须激活六芒麒麟阵后才能挑战我哦！"],["我知道了！"]);
               }
            }
            else
            {
               NpcDialog.show(NPC.QILIN_NEW,[MainManager.actorInfo.nick + "，你今天已经顺利激活了六芒麒麟阵，想挑战我的话明天再来吧！"]);
            }
         }
         else
         {
            NpcDialog.show(NPC.QILIN_NEW,[MainManager.actorInfo.nick + "，欢迎来到麒麟异界空间！今天的活动时间已经结束，记得明天0xff000014:00—15:000xffffff再来吧！"],["知道了！","离开这里。"],[null,function():void
            {
               MapManager.changeMap(980);
            }]);
         }
      }
      
      private static function onBall(param1:MouseEvent) : void
      {
         var index:uint = 0;
         var obj:Object = null;
         var e:MouseEvent = param1;
         if(isActive == 0)
         {
            NpcDialog.show(NPC.QILIN_NEW,[MainManager.actorInfo.nick + "0xff00002月13日到3月5日每天14:00—15:000xffffff,六星麒麟阵将等待你的激活！小赛尔，千万不要错过，我在麒麟异界空间等着你们的到来！"],["一定准时参加！"]);
         }
         else if(isActive == 1)
         {
            index = uint(e.currentTarget.name.split("_")[1]);
            obj = new Object();
            obj.index = index;
            obj.num = _star[index];
            if(index < currentIndex)
            {
               if(_star[index] == 0)
               {
                  Alarm.show("你已经错过这根图腾的激活时间，现在无法领取奖励咯！记得明天再来吧！");
               }
               else if(_status[index])
               {
                  Alarm.show("今天你已经领取过这根图腾的奖励咯！");
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("XuanwuYijieExchangePanel"),"正在加载...",obj);
               }
            }
            else if(index == currentIndex)
            {
               if(_star[index] == 0)
               {
                  SocketConnection.send(CommandID.XUANWU_ACTIVE_BALL,index);
               }
               else if(_status[index])
               {
                  Alarm.show("今天你已经领取过这根图腾的奖励咯！");
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("XuanwuYijieExchangePanel"),"正在加载...",obj);
               }
            }
            else
            {
               Alarm.show("还未到激活这根图腾的时间哦！过五分钟才能激活下一根图腾，耐心等待一下吧！");
            }
         }
         else
         {
            NpcDialog.show(NPC.QILIN_NEW,[MainManager.actorInfo.nick + "，欢迎来到麒麟异界空间！今天的活动时间已经结束，记得明天0xff000014:00—15:000xffffff再来吧！"],["知道了！","离开这里。"],[null,function():void
            {
               MapManager.changeMap(980);
            }]);
         }
      }
      
      private static function onActive(param1:SocketEvent) : void
      {
         var index:uint = 0;
         var e:SocketEvent = param1;
         var by:ByteArray = e.data as ByteArray;
         index = by.readUnsignedInt();
         _star[index] = by.readByte();
         AnimateManager.playMcAnimate(_map.depthLevel["ball_" + index],3,"mc_3",function():void
         {
            var t1:uint = 0;
            LevelManager.closeMouseEvent();
            _map.depthLevel["ball_" + index].gotoAndStop(4);
            t1 = setTimeout(function():void
            {
               var t2:* = undefined;
               clearTimeout(t1);
               childGotoFrame(_map.depthLevel["ball_" + index],4,"mc_4",_star[index]);
               t2 = setTimeout(function():void
               {
                  var title:* = undefined;
                  var i:* = undefined;
                  clearTimeout(t2);
                  LevelManager.openMouseEvent();
                  childGotoFrame(_map.depthLevel["ball_" + index],5,"mc_5",_star[index]);
                  if(index == 5)
                  {
                     title = true;
                     for each(i in _star)
                     {
                        if(i != 6)
                        {
                           title = false;
                        }
                     }
                     if(title)
                     {
                        NpcDialog.show(NPC.QILIN_NEW,["太不可思议了！你竟然激活了0xff0000六芒麒麟阵0xffffff！现在我就将“六芒麒麟战将”的称号赐予你，希望你为了星系和平做出最大的贡献！"],["恩恩，我一定会的！"],[function():void
                        {
                           SocketConnection.send(CommandID.XUANWU_GET_CAN_FIGHT_BOSS);
                        }]);
                     }
                     else
                     {
                        SocketConnection.send(CommandID.XUANWU_GET_CAN_FIGHT_BOSS);
                     }
                     _map.conLevel["xuanwu"].visible = false;
                     _map.depthLevel["boss_mc"].visible = true;
                     AnimateManager.playMcAnimate(_map.depthLevel["boss_mc"],2,"mc",function():void
                     {
                        _map.conLevel["xuanwu"].visible = true;
                        _map.depthLevel["boss_mc"].visible = false;
                     });
                  }
               },2000);
            },2000);
         });
      }
      
      private static function onStatus(param1:SocketEvent) : void
      {
         var i:uint;
         var end:Boolean = false;
         var k:uint = 0;
         var e:SocketEvent = param1;
         var by:ByteArray = e.data as ByteArray;
         _star = [];
         _status = [];
         var j:uint = 0;
         while(j < 6)
         {
            _star.push(by.readByte());
            _status.push(Boolean(by.readByte()));
            j++;
         }
         DebugTrace.show(_star.toString());
         DebugTrace.show(_status.toString());
         SystemTimerManager.addTickFun(onTime);
         _map.conLevel["xuanwu"].buttonMode = true;
         _map.conLevel["xuanwu"].mouseChildren = false;
         _map.conLevel["xuanwu"].addEventListener(MouseEvent.CLICK,onQinglong);
         i = 0;
         while(i < 6)
         {
            _map.depthLevel["ball_" + i].buttonMode = true;
            _map.depthLevel["ball_" + i].mouseChildren = false;
            _map.depthLevel["ball_" + i].addEventListener(MouseEvent.CLICK,onBall);
            if(_star[i] == 0)
            {
               if(i == currentIndex)
               {
                  _map.depthLevel["ball_" + i].gotoAndStop(2);
               }
               else
               {
                  _map.depthLevel["ball_" + i].gotoAndStop(1);
               }
            }
            else
            {
               childGotoFrame(_map.depthLevel["ball_" + i],5,"mc_5",_star[i]);
            }
            i++;
         }
         if(isActive == 1)
         {
            end = true;
            for each(k in _star)
            {
               if(k == 0)
               {
                  end = false;
               }
            }
            if(end)
            {
               _map.conLevel["xuanwu"].visible = true;
            }
            else
            {
               _map.conLevel["xuanwu"].visible = false;
               _map.depthLevel["boss_mc"].visible = true;
               AnimateManager.playMcAnimate(_map.depthLevel["boss_mc"],1,"mc",function():void
               {
                  _map.depthLevel["boss_mc"].visible = false;
               });
            }
         }
         SocketConnection.send(CommandID.XUANWU_GET_CAN_FIGHT_BOSS);
      }
      
      private static function onGetGift(param1:SocketEvent) : void
      {
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _status[_loc3_] = true;
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = 0;
         while(_loc5_ < _loc4_)
         {
            _loc6_ = _loc2_.readUnsignedInt();
            _loc7_ = _loc2_.readUnsignedInt();
            ItemInBagAlert.show(_loc6_,_loc7_.toString() + "个" + ItemXMLInfo.getName(_loc6_) + "已经放入了你的储物箱！");
            _loc5_++;
         }
      }
      
      private static function onGetBoss(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _canFightBoss = !Boolean(_loc2_.readUnsignedInt());
      }
      
      private static function onTime() : void
      {
         var _loc1_:int = 0;
         var _loc2_:String = null;
         if(isActive == 1)
         {
            if(_star[currentIndex] != 0 && _status[currentIndex] && currentIndex != 6)
            {
               MapNamePanel.hide();
               _map.topLevel["remain"].visible = true;
               _loc1_ = (currentIndex + 1) * 5 * 60 - (SystemTimerManager.sysBJDate.getMinutes() * 60 + SystemTimerManager.sysBJDate.getSeconds());
               if(_loc1_ < 0)
               {
                  _loc1_ += 30 * 60;
               }
            }
            else
            {
               MapNamePanel.show();
               _map.topLevel["remain"].visible = false;
               _loc1_ = 0;
            }
            _loc2_ = _loc1_.toString();
            while(_loc2_.length < 3)
            {
               _loc2_ = "0" + _loc2_;
            }
            _map.topLevel["remain"]["num_0"].gotoAndStop(uint(_loc2_.substr(0,1)) + 1);
            _map.topLevel["remain"]["num_1"].gotoAndStop(uint(_loc2_.substr(1,1)) + 1);
            _map.topLevel["remain"]["num_2"].gotoAndStop(uint(_loc2_.substr(2,1)) + 1);
         }
         else
         {
            MapNamePanel.show();
            _map.topLevel["remain"].visible = false;
         }
      }
      
      private static function get isActive() : uint
      {
         if(SystemTimerManager.sysBJDate.getUTCHours() + 8 < 14)
         {
            return 0;
         }
         if(SystemTimerManager.sysBJDate.getUTCHours() + 8 == 14)
         {
            return 1;
         }
         return 2;
      }
      
      private static function get currentIndex() : uint
      {
         var _loc1_:uint = 0;
         if(isActive == 1)
         {
            _loc1_ = uint(SystemTimerManager.sysBJDate.getMinutes() / 5);
            if(_loc1_ > 5)
            {
               _loc1_ -= 6;
            }
            return _loc1_;
         }
         return 100;
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function childGotoFrame(param1:MovieClip, param2:uint, param3:String, param4:uint) : void
      {
         var mc:MovieClip = param1;
         var frame:uint = param2;
         var name:String = param3;
         var childFrame:uint = param4;
         mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(mc[name])
            {
               mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               mc[name].gotoAndStop(childFrame);
            }
         });
         mc.gotoAndStop(frame);
      }
      
      public static function destory() : void
      {
         MapNamePanel.show();
         SocketConnection.removeCmdListener(CommandID.XUANWU_ACTIVE_BALL,onActive);
         SocketConnection.removeCmdListener(CommandID.XUANWU_GET_BALL_STAT,onStatus);
         SocketConnection.removeCmdListener(CommandID.XUANWU_GET_BALL_GIFT,onGetGift);
         SocketConnection.removeCmdListener(CommandID.XUANWU_GET_CAN_FIGHT_BOSS,onGetBoss);
         SystemTimerManager.removeTickFun(onTime);
         _map.conLevel["xuanwu"].removeEventListener(MouseEvent.CLICK,onQinglong);
         var _loc1_:uint = 0;
         while(_loc1_ < 6)
         {
            _map.depthLevel["ball_" + _loc1_].removeEventListener(MouseEvent.CLICK,onBall);
            _loc1_++;
         }
         _map = null;
         _star = null;
         _status = null;
      }
   }
}
