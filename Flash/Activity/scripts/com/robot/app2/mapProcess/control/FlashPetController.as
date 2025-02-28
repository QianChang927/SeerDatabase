package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class FlashPetController
   {
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _icon:MovieClip;
      
      private static var _leftTime:int;
      
      private static var _map:BaseMapProcess;
      
      private static var _startTime:uint;
      
      public static var npcMap:HashMap = new HashMap();
       
      
      public function FlashPetController()
      {
         super();
      }
      
      public static function destroy() : void
      {
         _map = null;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         addEvents();
         refreshFightStatus();
      }
      
      public static function onNpcClick(param1:*) : void
      {
         var value:* = undefined;
         var e:* = param1;
         value = npcMap.getValue(e.currentTarget.name);
         SocketConnection.send(1022,86070540 + value.region);
         if(InActiveTime)
         {
            if(!_fightStatus[_curStep - 1])
            {
               NpcDialog.show(value.npcId,[MainManager.actorInfo.formatNick + "，每3分钟就能选择任一闪光精灵进行挑战，限时半小时哦。累计完成4次对战就可以领取我喽~ 现"],["我来挑战你啦","我要去挑战其他精灵（点击其他闪光精灵试试吧）"],[function():void
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
                  FightManager.fightNoMapBoss(value.name,668 + 36 * value.group + value.region + (_curStep - 1) * 3);
               }]);
            }
            else
            {
               NpcDialog.show(value.npcId,[MainManager.actorInfo.formatNick + "，每3分钟只能挑战我们之中的一个哦。耐心等待下一次挑战开启吧"],["好的，那我3分钟后再来挑战你。"]);
            }
         }
         else if(!_startTime)
         {
            NpcDialog.show(value.npcId,[MainManager.actorInfo.formatNick + "，你可以随时开启半小时的闪光挑战。累计完成4次对战就可以领取我喽~ 现在就去开启挑战吧"],["现在开启挑战","我一会儿再过来"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("FlashPetPanel"));
            }]);
         }
         else
         {
            NpcDialog.show(value.npcId,[MainManager.actorInfo.formatNick + "，你已经完成今天的挑战喽。每天都有半小时的限时挑战机会，记得明天再来吧。"],["好的，我明天还要继续领取闪光精灵"]);
         }
      }
      
      public static function setup(param1:MovieClip) : void
      {
         LocalMsgController.addLocalMsg("FlashPetMsgPanel");
         _icon = param1;
         _icon.buttonMode = true;
         _icon.gotoAndStop(1);
         _icon.addEventListener(MouseEvent.CLICK,onClickIcon);
         ToolTipManager.add(_icon,"闪光皮神 免费放送");
         npcMap.add("pet1",{
            "npcId":NPC.SHANGUANGBOKEER,
            "region":0,
            "name":"闪光波克尔",
            "group":3
         });
         npcMap.add("pet2",{
            "npcId":NPC.SHANGUANG_XINGJILA,
            "region":1,
            "name":"闪光星吉拉",
            "group":3
         });
         npcMap.add("pet3",{
            "npcId":NPC.SHANGUANG_SHUIJINGYA,
            "region":2,
            "name":"闪光水晶鸭",
            "group":3
         });
         refresh();
      }
      
      public static function start() : void
      {
         SocketConnection.sendWithCallback(CommandID.STARMONSTER_SET_BEGIN_TIME,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            SocketConnection.send(1022,86070251);
            refresh();
            MapNamePanel.hide();
            NpcDialog.show(NPC.SHANGUANGBOKEER,[MainManager.actorInfo.formatNick + "，挑战开始喽。好好把握这半个小时。每3分钟就可以选择1只精灵进行挑战。快开始吧~"],["我就要挑战你","我要挑战其他闪光精灵（点击其他活动闪光精灵试试吧）"],[function():void
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
               FightManager.fightNoMapBoss("闪光波克尔",776);
            }]);
         });
      }
      
      private static function onFightFinish(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         refresh();
      }
      
      private static function get InActiveTime() : Boolean
      {
         return _leftTime > 0;
      }
      
      public static function get leftTime() : int
      {
         return _leftTime;
      }
      
      public static function set leftTime(param1:int) : void
      {
         _leftTime = param1;
      }
      
      private static function addEvents() : void
      {
         MapListenerManager.add(_map.conLevel["pet1"],onNpcClick);
         MapListenerManager.add(_map.conLevel["pet2"],onNpcClick);
         MapListenerManager.add(_map.conLevel["pet3"],onNpcClick);
      }
      
      public static function onClickIcon(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86070264);
         ModuleManager.showModule(ClientConfig.getAppModule("FlashPetPanel"));
      }
      
      private static function onGo(param1:MouseEvent) : void
      {
         MapManager.changeMap(943);
      }
      
      private static function onIconTimer() : void
      {
         var _loc2_:BroadcastInfo = null;
         --_leftTime;
         if(_leftTime <= 0)
         {
            checkIcon();
            SystemTimerManager.removeTickFun(onIconTimer);
         }
         var _loc1_:int = int(10 - Math.floor(_leftTime / 180));
         _loc1_ = _loc1_ < 0 ? 0 : _loc1_;
         if(_curStep != _loc1_)
         {
            _curStep = _loc1_;
            _loc2_ = new BroadcastInfo();
            _loc2_.isLocal = true;
            _loc2_.map = 943;
            _loc2_.txt = "第" + (_curStep + 1 > 10 ? 10 : _curStep + 1) + "轮闪光精灵挑战开始了，快去领取满级闪光精灵吧";
            BroadcastController.addBroadcast(_loc2_);
            _icon["numTxt"].text = KTool.formatString("第{0}轮",Math.min(_curStep + 1,10));
            ToolTipManager.remove(_icon);
            ToolTipManager.add(_icon,KTool.formatString("第{0}轮闪光精灵挑战开始了，快去领取满级闪光精灵吧",_curStep + 1));
         }
         _icon["timeTxt"].text = SystemTimerManager.getTimeClockString(_leftTime % (3 * 60),false);
      }
      
      private static function checkIcon() : void
      {
         KTool.getLimitNum(16075,function(param1:uint):void
         {
            if(param1 > 0)
            {
               IconController.hideIcon("flashpet_icon");
            }
         });
      }
      
      public static function refresh(param1:Function = null) : void
      {
         var callback:Function = param1;
         SystemTimerManager.removeTickFun(onIconTimer);
         KTool.getMultiValue([16057,16070],function(param1:Array):void
         {
            var _loc2_:int = 0;
            _startTime = param1[0];
            if(_startTime)
            {
               _loc2_ = 1800 - (SystemTimerManager.time - param1[0] + param1[1]);
               _leftTime = _loc2_ < 0 ? 0 : _loc2_;
               if(_leftTime > 0)
               {
                  SystemTimerManager.addTickFun(onIconTimer);
                  refreshFightStatus();
               }
               else
               {
                  checkIcon();
               }
            }
            else
            {
               _icon["numTxt"].text = "点击开启";
            }
            if(callback != null)
            {
               callback.call();
            }
         });
      }
      
      private static function refreshFightStatus() : void
      {
         _fightStatus = [];
         KTool.getLimitNum(16058,function(param1:uint):void
         {
            var _loc2_:uint = 1;
            while(_loc2_ <= 12)
            {
               _fightStatus.push(KTool.getBit(param1,_loc2_));
               _loc2_++;
            }
         });
      }
   }
}
