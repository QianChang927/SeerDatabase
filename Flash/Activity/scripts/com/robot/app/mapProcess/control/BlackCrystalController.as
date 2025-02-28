package com.robot.app.mapProcess.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class BlackCrystalController
   {
      
      private static var _icon:MovieClip;
      
      private static var _timer:Timer;
      
      public static var remain:uint;
      
      public static var id:uint;
      
      public static var name:String;
      
      public static var friendArr:Array;
      
      private static var _map:BaseMapProcess;
       
      
      public function BlackCrystalController()
      {
         super();
      }
      
      public static function setup() : void
      {
         friendArr = [];
         SocketConnection.addCmdListener(CommandID.BLACKROCK_HELP_INFO,onInvite);
         SocketConnection.addCmdListener(CommandID.BLACKROCK_ONTIME,onTime);
      }
      
      private static function onInvite(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         id = _loc2_.readUnsignedInt();
         name = _loc2_.readUTFBytes(16);
         remain = 10;
         _timer = new Timer(1000,remain);
         _timer.start();
         _timer.addEventListener(TimerEvent.TIMER,onTimerHandler);
         _timer.addEventListener(TimerEvent.TIMER_COMPLETE,onTimerComplete);
         addIcon();
      }
      
      private static function onTimerComplete(param1:TimerEvent) : void
      {
         _timer.removeEventListener(TimerEvent.TIMER,onTimerHandler);
         _timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimerComplete);
         if(_icon)
         {
            TaskIconManager.delIcon(_icon);
         }
      }
      
      private static function onTimerHandler(param1:TimerEvent) : void
      {
         if(remain != 0)
         {
            --remain;
         }
      }
      
      public static function addIcon() : void
      {
         if(_icon == null)
         {
            _icon = UIManager.getMovieClip("black_icon");
            _icon.buttonMode = true;
            _icon.addEventListener(MouseEvent.CLICK,onIconClick);
            ToolTipManager.add(_icon,"助威请求");
         }
         TaskIconManager.addIcon(_icon,TaskIconManager.LEFT);
      }
      
      private static function onIconClick(param1:MouseEvent) : void
      {
         remain += 20;
         if(_icon)
         {
            TaskIconManager.delIcon(_icon);
         }
         ModuleManager.showModule(ClientConfig.getAppModule("BlackCrystalGreePanel"),"正在打开....");
      }
      
      private static function onTime(param1:SocketEvent) : void
      {
         LocalMsgController.addLocalMsg("BlackCrystalMailPanel");
      }
      
      public static function initTaskFor429(param1:BaseMapProcess) : void
      {
         _map = param1;
         CommonUI.addYellowExcal(_map.depthLevel["weibin"]);
         _map.depthLevel["weibin"].buttonMode = true;
         _map.depthLevel["weibin"].addEventListener(MouseEvent.CLICK,onWeibinClick);
         ToolTipManager.add(_map.depthLevel["black"],"黑曜结晶");
         _map.depthLevel["black"].buttonMode = true;
         _map.depthLevel["black"].addEventListener(MouseEvent.CLICK,onBlackClick);
         ToolTipManager.add(_map.depthLevel["change"],"黑曜结晶兑换");
         _map.depthLevel["change"].addEventListener(MouseEvent.CLICK,onChangeClick);
      }
      
      private static function onBlackClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,84806326);
         CommonUI.removeYellowArrow(_map.depthLevel["black"]);
         ModuleManager.showModule(ClientConfig.getAppModule("BlackCrystalMainPanel"),"正在打开....");
      }
      
      private static function onChangeClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,84806327);
         ModuleManager.showModule(ClientConfig.getAppModule("BlackCrystalChangePanel"),"正在打开....");
      }
      
      private static function onWeibinClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         SocketConnection.send(1022,84806325);
         if(!BufferRecordManager.getState(MainManager.actorInfo,292))
         {
            NpcDialog.show(NPC.SOLIDMAN,[MainManager.actorInfo.nick + "，你来的正好！赶紧加入采集小队吧！"],["（一头雾水）…….采集小队？是什么？"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("20120604_2"),function():void
               {
                  NpcDialog.show(NPC.SOLIDMAN,["自从那天开始，我们就忙个不停！苏克队长见识广博，正如它所说，这是一块采集价值极高的巨石！"],["好多赛尔在采集啊！"],[function():void
                  {
                     NpcDialog.show(NPC.SOLIDMAN,["黑曜石降落至星球，能源会渐渐挥发，我们必须抓紧时间进行采集！0xff0000" + MainManager.actorInfo.nick + "，从我这里用黑曜晶体兑换珍贵道具吧！还可以兑换那只调皮的小家伙！0xffffff"],["我现在就开始采集！"],[function():void
                     {
                        NpcDialog.show(NPC.SOLIDMAN,["你可以邀请好友替你助威，这样能大幅提升采集速度！"],["我知道了！"],[function():void
                        {
                           BufferRecordManager.setState(MainManager.actorInfo,292,true);
                           CommonUI.addYellowArrow(_map.depthLevel["black"],0,0,300);
                        }]);
                     }]);
                  }]);
               });
            }]);
         }
         else
         {
            NpcDialog.show(NPC.SOLIDMAN,["你好，小赛尔!为了解决飞船的能源危机，请你伸出援手和他们共同采集黑曜晶体吧!"],["我要采集","我要兑换奖励","下次再来"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BlackCrystalMainPanel"),"正在打开....");
            },function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BlackCrystalChangePanel"),"正在打开....");
            }]);
         }
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(_map.depthLevel["weibin"])
            {
               _map.depthLevel["weibin"].removeEventListener(MouseEvent.CLICK,onWeibinClick);
            }
            if(_map.depthLevel["black"])
            {
               _map.depthLevel["black"].removeEventListener(MouseEvent.CLICK,onBlackClick);
               ToolTipManager.remove(_map.depthLevel["black"]);
            }
            if(_map.depthLevel["change"])
            {
               ToolTipManager.remove(_map.depthLevel["change"]);
               _map.depthLevel["change"].removeEventListener(MouseEvent.CLICK,onChangeClick);
            }
         }
         _map = null;
      }
   }
}
