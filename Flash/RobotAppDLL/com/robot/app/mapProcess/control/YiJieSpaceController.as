package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
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
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class YiJieSpaceController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _star:Array;
      
      private static var _status:Array;
      
      private static var _canFightBoss:Boolean;
       
      
      public function YiJieSpaceController()
      {
         super();
      }
      
      public static function setup() : void
      {
         EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,onSys);
      }
      
      private static function onSys(param1:SysTimeEvent) : void
      {
         if(isActive == 1 && SystemTimerManager.sysDate.getMinutes() % 10 == 0)
         {
         }
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         SocketConnection.addCmdListener(CommandID.QINGLONG_ACTIVE_BALL,onActive);
         SocketConnection.addCmdListener(CommandID.QINGLONG_GET_BALL_STAT,onStatus);
         SocketConnection.addCmdListener(CommandID.QINGLONG_GET_BALL_GIFT,onGetGift);
         SocketConnection.addCmdListener(CommandID.QINGLONG_GET_CAN_FIGHT_BOSS,onGetBoss);
         SocketConnection.send(CommandID.QINGLONG_GET_BALL_STAT);
      }
      
      private static function onDoor(param1:MouseEvent) : void
      {
         MapManager.changeMap(751);
      }
      
      private static function onQinglong(param1:MouseEvent) : void
      {
         var end:Boolean = false;
         var j:uint = 0;
         var e:MouseEvent = param1;
         if(isActive == 0)
         {
            NpcDialog.show(NPC.QINGLONG,[MainManager.actorInfo.nick + "，欢迎来到青龙异界空间！现在还不能激活七星青龙阵中的龙珠，记得0xff000014:00—15:000xffffff准时过来，届时你能获得与龙珠星数相同的奖励数量哦！"],["查看活动规则。","知道了！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("YijieIntroPanel"),"正在加载...");
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
                  NpcDialog.show(NPC.QINGLONG,["七星青龙阵中的龙珠已经全部被激活！现在你有一次机会挑战我的弱化版！"],["开始挑战！","我还没准备好...."],[function():void
                  {
                     FightManager.fightWithBoss("朵拉格");
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.QINGLONG,[MainManager.actorInfo.nick + "，你必须激活七星龙珠后才能挑战我哦！"],["我知道了！"]);
               }
            }
            else
            {
               NpcDialog.show(NPC.QINGLONG,[MainManager.actorInfo.nick + "，你今天已经顺利激活了七星青龙阵！"]);
            }
         }
         else
         {
            NpcDialog.show(NPC.QINGLONG,[MainManager.actorInfo.nick + "，欢迎来到青龙异界空间！今天的活动时间已经结束，记得明天0xff000014:00—15:000xffffff再来吧！"],["查看活动规则。","知道了！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("YijieIntroPanel"),"正在加载...");
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
            NpcDialog.show(NPC.QINGLONG,[MainManager.actorInfo.nick + "，欢迎来到青龙异界空间！现在还不能激活七星青龙阵中的龙珠，记得0xff000014:00—15:000xffffff准时过来，届时你能获得与龙珠星数相同的奖励数量哦！"],["查看活动规则。","知道了！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("YijieIntroPanel"),"正在加载...");
            }]);
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
                  Alarm.show("你已经错过这颗龙珠的激活时间，现在无法领取奖励咯！");
               }
               else if(_status[index])
               {
                  Alarm.show("你已经领取过这颗龙珠的奖励咯！");
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("YijieExchangePanel"),"正在加载...",obj);
               }
            }
            else if(index == currentIndex)
            {
               if(_star[index] == 0)
               {
                  SocketConnection.send(CommandID.QINGLONG_ACTIVE_BALL,index);
               }
               else if(_status[index])
               {
                  Alarm.show("你已经领取过这颗龙珠的奖励咯！");
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("YijieExchangePanel"),"正在加载...",obj);
               }
            }
            else
            {
               Alarm.show("还未到激活这颗龙珠的时间哦！");
            }
         }
         else
         {
            NpcDialog.show(NPC.QINGLONG,[MainManager.actorInfo.nick + "，欢迎来到青龙异界空间！今天的活动时间已经结束，记得明天0xff000014:00—15:000xffffff再来吧！"],["查看活动规则。","知道了！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("YijieIntroPanel"),"正在加载...");
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
                  if(index == 6)
                  {
                     title = true;
                     for each(i in _star)
                     {
                        if(i != 7)
                        {
                           title = false;
                        }
                     }
                     if(title)
                     {
                        NpcDialog.show(NPC.QINGLONG,["太不可思议了！简直令人难以置信，你竟然激活了7颗七星龙珠！现在我就将0xff0000“七星战侠”0xffffff的称号赐予你，希望你为了星系和平做出最大的贡献！"],["我一定会的！"],[function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["qinglong"],4,"mc_4",function():void
                           {
                              _map.conLevel["qinglong"].gotoAndStop(1);
                              SocketConnection.send(CommandID.QINGLONG_GET_CAN_FIGHT_BOSS);
                           });
                        }]);
                     }
                     else
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["qinglong"],4,"mc_4",function():void
                        {
                           _map.conLevel["qinglong"].gotoAndStop(1);
                           SocketConnection.send(CommandID.QINGLONG_GET_CAN_FIGHT_BOSS);
                        });
                     }
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
         while(j < 7)
         {
            _star.push(by.readByte());
            _status.push(Boolean(by.readByte()));
            j++;
         }
         SystemTimerManager.addTickFun(onTime);
         _map.conLevel["door"].buttonMode = true;
         _map.conLevel["door"].mouseChildren = false;
         _map.conLevel["door"].addEventListener(MouseEvent.CLICK,onDoor);
         ToolTipManager.add(_map.conLevel["door"],"青龙战场");
         _map.conLevel["qinglong"].buttonMode = true;
         _map.conLevel["qinglong"].mouseChildren = false;
         _map.conLevel["qinglong"].addEventListener(MouseEvent.CLICK,onQinglong);
         i = 0;
         while(i < 7)
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
               _map.conLevel["qinglong"].gotoAndStop(1);
            }
            else if(SystemTimerManager.sysDate.getMinutes() == 0)
            {
               AnimateManager.playMcAnimate(_map.conLevel["qinglong"],2,"mc_2",function():void
               {
                  _map.conLevel["qinglong"].gotoAndStop(3);
               });
            }
            else
            {
               _map.conLevel["qinglong"].gotoAndStop(3);
            }
         }
         SocketConnection.send(CommandID.QINGLONG_GET_CAN_FIGHT_BOSS);
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
         var remain:uint = 0;
         var str:String = null;
         if(isActive == 1)
         {
            if(SystemTimerManager.sysDate.getMinutes() == 0 && _map.conLevel["qinglong"].currentFrame == 1)
            {
               AnimateManager.playMcAnimate(_map.conLevel["qinglong"],2,"mc_2",function():void
               {
                  _map.conLevel["qinglong"].gotoAndStop(3);
               });
            }
            if(_star[currentIndex] != 0 && _status[currentIndex] && currentIndex != 6)
            {
               MapNamePanel.hide();
               _map.topLevel["remain"].visible = true;
               remain = (currentIndex + 1) * 6 * 60 - (SystemTimerManager.sysDate.getMinutes() * 60 + SystemTimerManager.sysDate.getSeconds());
            }
            else
            {
               MapNamePanel.show();
               _map.topLevel["remain"].visible = false;
               remain = 0;
            }
            str = remain.toString();
            while(str.length < 3)
            {
               str = "0" + str;
            }
            _map.topLevel["remain"]["num_0"].gotoAndStop(uint(str.substr(0,1)) + 1);
            _map.topLevel["remain"]["num_1"].gotoAndStop(uint(str.substr(1,1)) + 1);
            _map.topLevel["remain"]["num_2"].gotoAndStop(uint(str.substr(2,1)) + 1);
         }
         else
         {
            MapNamePanel.show();
            _map.topLevel["remain"].visible = false;
         }
      }
      
      private static function get isActive() : uint
      {
         if(SystemTimerManager.sysDate.getUTCHours() + 8 < 15)
         {
            return 0;
         }
         if(SystemTimerManager.sysDate.getUTCHours() + 8 == 15)
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
            _loc1_ = uint(SystemTimerManager.sysDate.getMinutes() / 6);
            if(_loc1_ > 6)
            {
               _loc1_ = 6;
            }
            return _loc1_;
         }
         return 100;
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
         SocketConnection.removeCmdListener(CommandID.QINGLONG_ACTIVE_BALL,onActive);
         SocketConnection.removeCmdListener(CommandID.QINGLONG_GET_BALL_STAT,onStatus);
         SocketConnection.removeCmdListener(CommandID.QINGLONG_GET_BALL_GIFT,onGetGift);
         SocketConnection.removeCmdListener(CommandID.QINGLONG_GET_CAN_FIGHT_BOSS,onGetBoss);
         SystemTimerManager.removeTickFun(onTime);
         _map.conLevel["door"].removeEventListener(MouseEvent.CLICK,onDoor);
         ToolTipManager.remove(_map.conLevel["door"]);
         _map.conLevel["qinglong"].removeEventListener(MouseEvent.CLICK,onQinglong);
         var _loc1_:uint = 0;
         while(_loc1_ < 7)
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
