package com.robot.app.energy.utils
{
   import com.robot.app.energy.ore.DayOreCount;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.EnergyCollectXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.task.CateInfo;
   import com.robot.core.info.task.DayTalkInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.Direction;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class EnergyController
   {
      
      private static var _type:uint;
      
      private static var _name:String;
      
      private static var _cltType:String;
      
      private static var _engyUnit:String;
      
      private static var _dayOre:DayOreCount;
      
      private static var _timer:Timer;
      
      private static var _exploitPorBar:MovieClip;
       
      
      public function EnergyController()
      {
         super();
      }
      
      public static function exploit(param1:uint = 1) : void
      {
         _type = param1;
         _name = EnergyCollectXMLInfo.getName(_type);
         _cltType = EnergyCollectXMLInfo.getColtType(_type);
         _engyUnit = EnergyCollectXMLInfo.getUnit(_type);
         if(MainManager.actorInfo.actionType != 0)
         {
            NpcDialog.show(NPC.SHUKE,["你开启了飞行模式，不能进行能源采集..."],["我知道啦！"]);
         }
         else
         {
            countExploitTimes();
         }
      }
      
      private static function countExploitTimes() : void
      {
         _dayOre = new DayOreCount();
         _dayOre.addEventListener(DayOreCount.countOK,onCount);
         _dayOre.sendToServer(_type);
      }
      
      private static function onCount(param1:Event) : void
      {
         var cnt:uint;
         var e:Event = param1;
         _dayOre.removeEventListener(DayOreCount.countOK,onCount);
         cnt = uint(EnergyCollectXMLInfo.getColtCnt(_type));
         if(DayOreCount.oreCount >= cnt)
         {
            NpcDialog.show(NPC.SHUKE,["为了0xff0000" + _name + "0xffffff可持续挖掘，这里每天只能挖掘0xff0000" + cnt + "次0xffffff！你可以去其它星球看看有没有矿石可以挖掘，或者明天再来挖掘！"],["我知道了！"]);
         }
         else
         {
            NpcDialog.show(NPC.SHUKE,["这块区域埋藏着0xff0000" + _name + "0xffffff，宝贵的0xff0000" + _name + "0xffffff可以给赛尔飞船提供能源。 你是否要" + _cltType + "一些这样的0xff0000" + _name + "0xffffff呢？"],["好的！","我一会再来！"],[function():void
            {
               MapManager.currentMap.depthLevel.mouseEnabled = false;
               MapManager.currentMap.depthLevel.mouseChildren = false;
               exploitNow();
            }]);
         }
      }
      
      private static function exploitNow() : void
      {
         addProBar();
         _timer = new Timer(1000,10);
         _timer.addEventListener(TimerEvent.TIMER,onTimer);
         _timer.addEventListener(TimerEvent.TIMER_COMPLETE,onTimeOver);
         _timer.start();
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onMap);
         MainManager.actorModel.sprite.addEventListener(RobotEvent.WALK_START,onWalk);
         MainManager.actorModel.direction = Direction.indexToStr(EnergyCollectXMLInfo.getDir(_type));
      }
      
      private static function addProBar() : void
      {
         _exploitPorBar = UIManager.getMovieClip("ExploitPorBarMC");
         _exploitPorBar.y = -80;
         _exploitPorBar.gotoAndStop(1);
         MainManager.actorModel.addChild(_exploitPorBar);
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         _exploitPorBar.gotoAndStop(param1.target.currentCount * 5);
      }
      
      private static function onTimeOver(param1:TimerEvent) : void
      {
         var evt:TimerEvent = param1;
         destory();
         _exploitPorBar.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(_exploitPorBar.currentFrame == _exploitPorBar.totalFrames)
            {
               _exploitPorBar.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               DisplayUtil.removeForParent(_exploitPorBar);
               _exploitPorBar = null;
            }
         });
         _exploitPorBar.gotoAndPlay(51);
         SocketConnection.addCmdListener(CommandID.TALK_CATE,onSuccess);
         SocketConnection.send(CommandID.TALK_CATE,_type);
      }
      
      private static function onMap(param1:MapEvent) : void
      {
         destory();
         _exploitPorBar.removeEventListener(Event.ENTER_FRAME,arguments.callee);
         DisplayUtil.removeForParent(_exploitPorBar);
         _exploitPorBar = null;
      }
      
      private static function onWalk(param1:RobotEvent) : void
      {
         destory();
         _exploitPorBar.removeEventListener(Event.ENTER_FRAME,arguments.callee);
         DisplayUtil.removeForParent(_exploitPorBar);
         _exploitPorBar = null;
         NpcDialog.show(NPC.SHUKE,["随便走动是无法" + _cltType + "0xff0000" + _name + "0xffffff的哦！"],["确定！"]);
      }
      
      private static function onSuccess(param1:SocketEvent) : void
      {
         var info:DayTalkInfo;
         var str:String = null;
         var cateInfo:CateInfo = null;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.TALK_CATE,onSuccess);
         info = e.data as DayTalkInfo;
         if(info.outList.length > 0)
         {
            if(info.outList.length == 1)
            {
               cateInfo = info.outList[0];
               if(cateInfo.id == 1200347 || cateInfo.id == 1200348)
               {
                  str = "看样子你" + _cltType + "到了0xff0000" + cateInfo.count.toString() + _engyUnit + ItemXMLInfo.getName(cateInfo.id) + "0xffffff，0xff0000 " + ItemXMLInfo.getName(cateInfo.id) + "0xffffff都已经放入了你的储存箱！";
               }
               else
               {
                  str = "看样子你" + _cltType + "到了0xff0000" + cateInfo.count.toString() + _engyUnit + ItemXMLInfo.getName(cateInfo.id) + "0xffffff，0xff0000 " + ItemXMLInfo.getName(cateInfo.id) + "0xffffff都已经放入了你的储存箱，快去飞船0xff0000动力室0xffffff看看它有什么用！";
               }
            }
            else
            {
               cateInfo = info.outList[1];
               str = "你已经" + _cltType + "到了0xff0000" + cateInfo.count.toString() + _engyUnit + ItemXMLInfo.getName(cateInfo.id) + "0xffffff，";
               cateInfo = info.outList[0];
               str = str + "由于0xff0000超能NoNo0xffffff的帮助，精炼出0xff0000" + cateInfo.count.toString() + "个" + ItemXMLInfo.getName(cateInfo.id) + "0xffffff！";
            }
         }
         NpcDialog.show(NPC.SHUKE,[str],["好的！"],[function():void
         {
            var _loc1_:* = new CateInfo();
            _loc1_.id = cateInfo.id;
            _loc1_.count = cateInfo.count;
            EventManager.dispatchEvent(new EnergyEvent(EnergyEvent.COMPLETE,cateInfo));
         }]);
      }
      
      private static function destory() : void
      {
         _dayOre.removeEventListener(DayOreCount.countOK,onCount);
         _dayOre = null;
         _timer.stop();
         _timer.removeEventListener(TimerEvent.TIMER,onTimer);
         _timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimeOver);
         _timer = null;
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,onMap);
         MainManager.actorModel.stop();
         MainManager.actorModel.sprite.removeEventListener(RobotEvent.WALK_START,onWalk);
         MapManager.currentMap.depthLevel.mouseEnabled = true;
         MapManager.currentMap.depthLevel.mouseChildren = true;
      }
   }
}
