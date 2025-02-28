package com.robot.app.mapProcess.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ToolTipManager;
   
   public class SevenStarsPhoenixController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function SevenStarsPhoenixController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.date >= 13)
         {
            _map.conLevel["phoenix"].visible = false;
            _map.conLevel["dragon"].visible = false;
            _map.btnLevel["doorBtn"].visible = false;
            return;
         }
         if(!BufferRecordManager.getState(MainManager.actorInfo,338))
         {
            CommonUI.addYellowExcal(_map.topLevel,476,95);
            _map.conLevel["phoenix"].visible = true;
            _map.conLevel["phoenix"].buttonMode = true;
            _map.conLevel["phoenix"].addEventListener(MouseEvent.CLICK,onClickPhoenix);
         }
         else
         {
            _map.conLevel["dragon"].visible = true;
            _map.conLevel["dragon"].gotoAndStop(3);
            _map.btnLevel["doorBtn"].visible = true;
            _map.btnLevel["doorBtn"].buttonMode = true;
            _map.btnLevel["doorBtn"].addEventListener(MouseEvent.CLICK,onClickDoor);
            ToolTipManager.add(_map.btnLevel["doorBtn"],"异界空间");
         }
      }
      
      private static function onClickPhoenix(param1:Event) : void
      {
         var e:Event = param1;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20120723_1"),function():void
         {
            _map.conLevel["dragon"].visible = true;
            CommonUI.removeYellowExcal(_map.topLevel);
            NpcDialog.show(NPC.QINGLONG,["为了表达对这次精灵王争霸赛的支持，我决定为大家开启青龙异界空间！"],["青龙异界空间？是什么？"],[function():void
            {
               NpcDialog.show(NPC.QINGLONG,["一个与青龙空间完全相同的领域！空间中有一个青龙七星阵，其中还有七颗龙珠，龙珠被激活后会呈现出1—7颗星，与此同时你能获得与星数相同的奖励数量！"],["哇，听起来好棒啊！"],[function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["dragon"],1,"mc1",function():void
                  {
                     NpcDialog.show(NPC.QINGLONG,["7月27日—8月12日每天14:00—15:00，七星青龙阵将等待你的激活！小赛尔，千万不要错过，我在异界空间等着你的到来！"],["一定准时参加！"],[function():void
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["dragon"],2,"mc2",function():void
                        {
                           BufferRecordManager.setState(MainManager.actorInfo,338,true);
                           _map.conLevel["phoenix"].visible = false;
                           _map.btnLevel["doorBtn"].visible = true;
                           _map.btnLevel["doorBtn"].buttonMode = true;
                           _map.btnLevel["doorBtn"].addEventListener(MouseEvent.CLICK,onClickDoor);
                           ToolTipManager.add(_map.btnLevel["doorBtn"],"异界空间");
                           CommonUI.addYellowArrow(_map.conLevel["dragon"],0,0,315);
                        });
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function onClickDoor(param1:Event) : void
      {
         var date:Date = null;
         var e:Event = param1;
         date = SystemTimerManager.sysDate;
         MainManager.actorModel.moveAndAction(new Point(660,450),function():void
         {
            if(date.hours == 14)
            {
               MapManager.changeMap(714);
            }
            else
            {
               Alarm.show("未到活动时间！" + TextFormatUtil.getRedTxt("7月27日—8月12日每天14:00—15:00") + "，七星青龙阵将等待你的激活！小赛尔，千万不要错过！更有“七星战侠”绝版称号等你来拿！");
            }
         });
      }
      
      public static function destroy() : void
      {
         ToolTipManager.remove(_map.btnLevel["doorBtn"]);
         CommonUI.removeYellowArrow(_map.conLevel["dragon"]);
         _map = null;
      }
   }
}
