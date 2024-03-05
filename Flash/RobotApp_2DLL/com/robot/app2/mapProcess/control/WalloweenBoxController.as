package com.robot.app2.mapProcess.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class WalloweenBoxController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _ui:MovieClip;
      
      private static var _startTime:Date = new Date(2014,9,31);
      
      private static var _endTime:Date = new Date(2014,10,7);
      
      private static var _state:int = 0;
      
      private static var _widget:MovieClip;
      
      private static var _isLoading:Boolean = false;
       
      
      public function WalloweenBoxController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getAppRes("walloween_box"),function(param1:MovieClip):void
         {
            _map.btnLevel.addChild(param1);
            param1.name = "walloween_box";
            _ui = param1;
            SystemTimerManager.addTickFun(update);
            _ui.addEventListener(MouseEvent.CLICK,onClickHandler);
            getBuffData();
            if(MapManager.currentMap.id == 1039)
            {
               _ui.x = 647;
               _ui.y = 450;
            }
            else
            {
               _ui.x = 387;
               _ui.y = 271;
            }
         });
      }
      
      public static function setup() : void
      {
         SystemTimerManager.removeTickFun(update);
         SystemTimerManager.addTickFun(update);
      }
      
      private static function getBuffData() : void
      {
         KTool.getMultiValue([13537],function(param1:Array):void
         {
            _state = param1[0];
         });
      }
      
      protected static function onClickHandler(param1:MouseEvent) : void
      {
         var hours:Array = null;
         var index:int = 0;
         var flag:int = 0;
         var event:MouseEvent = param1;
         if(MapManager.currentMap.id != 1039)
         {
            MapManager.changeMap(1039);
            return;
         }
         StatManager.sendStat2014("万圣节主题活动","南瓜大放送_点击万圣南瓜满箱子和空箱子",StatManager.RUN_ACT);
         if(SystemTimerManager.time > _startTime.time / 1000 && SystemTimerManager.time < _endTime.time / 1000)
         {
            hours = [13,15,17];
            index = hours.indexOf(SystemTimerManager.sysBJDate.hours);
            if(index >= 0)
            {
               flag = int(BitUtils.getBit(_state,5 + index));
               if(flag == 0)
               {
                  NpcDialog.show(NPC.WANSHENGBAOXIANG_MAN,["0xffff0010月31日——11月6日 每天下午13:00-14:00，15:00-16:00，17:00-18:00 0xffffff有万圣南瓜大放送哦！现在还不能领取万圣南瓜哦！"],["领取万圣节南瓜","我走错地方了，不好意思。"],[function():void
                  {
                     SocketConnection.sendWithCallback(45513,function(param1:SocketEvent):void
                     {
                        getBuffData();
                     },4,0,0);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.WANSHENGBAOXIANG_KONG,["0xffff0010月31日——11月6日 每天下午13:00-14:00，15:00-16:00，17:00-18:00 0xffffff有万圣南瓜大放送哦！你已经领过万圣南瓜了哦！"],["哦，那我一会再来。"],[function():void
                  {
                  }]);
               }
               return;
            }
         }
         NpcDialog.show(NPC.WANSHENGBAOXIANG_KONG,["0xffff0010月31日——11月6日 每天下午13:00-14:00，15:00-16:00，17:00-18:00 0xffffff有万圣南瓜大放送哦！现在还不能领取万圣南瓜哦！"],["哦，那我一会再来。"],[function():void
         {
         }]);
      }
      
      private static function update() : void
      {
         var _loc1_:Array = null;
         if(SystemTimerManager.time > _startTime.time / 1000 && SystemTimerManager.time < _endTime.time / 1000)
         {
            _loc1_ = [13,15,17];
            if(_loc1_.indexOf(SystemTimerManager.sysBJDate.hours) >= 0)
            {
               loadWidget();
               if(_ui)
               {
                  _ui.gotoAndStop(2);
               }
               return;
            }
         }
         hideWidget();
         if(_ui)
         {
            _ui.gotoAndStop(1);
         }
      }
      
      private static function loadWidget() : void
      {
         if(!_widget)
         {
            if(_isLoading)
            {
               return;
            }
            _isLoading = true;
            ResourceManager.getResource(ClientConfig.getAppRes("walloween_tv"),function(param1:MovieClip):void
            {
               _widget = param1;
               MapNamePanel.ChildMc = _widget;
               _widget["btnGo"].addEventListener(MouseEvent.CLICK,onGo);
               MapNamePanel.autoOpenOrClose(true,1);
            });
         }
         else
         {
            _widget.visible = true;
         }
      }
      
      private static function onGo(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("万圣节主题活动","南瓜大放送_点击小电视",StatManager.RUN_ACT);
         MapManager.changeMap(1039);
      }
      
      private static function hideWidget() : void
      {
         if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
         {
            _widget["btnGo"].removeEventListener(MouseEvent.CLICK,onGo);
            ToolTipManager.remove(_widget);
            MapNamePanel.autoOpenOrClose(false);
            DisplayUtil.removeForParent(_widget);
            _widget = null;
         }
      }
      
      public static function destroy() : void
      {
         if(_ui)
         {
            _ui.removeEventListener(MouseEvent.CLICK,onClickHandler);
            _ui = null;
         }
      }
   }
}
