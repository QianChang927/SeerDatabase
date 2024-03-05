package com.robot.app.nono
{
   import com.robot.app.control.YearVip2016Controller;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.mapProcess.control.ColorfulPrivilegeWishController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.DisplayObject;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NonoController
   {
      
      private static var _panelMc:Sprite;
      
      private static const PATH:String = ClientConfig.getNonoPath("nonoFlyModel/choicePanel.swf");
      
      public static var alarmArrow:Array = [0,0,0,0];
       
      
      public function NonoController()
      {
         super();
      }
      
      public static function show() : void
      {
         if(_panelMc)
         {
            configPannel();
         }
         else
         {
            ResourceManager.getResource(PATH,function(param1:DisplayObject):void
            {
               _panelMc = param1 as Sprite;
               configPannel();
            });
         }
      }
      
      private static function configPannel() : void
      {
         LevelManager.closeMouseEvent();
         LevelManager.appLevel.mouseEnabled = false;
         LevelManager.appLevel.mouseChildren = false;
         SocketConnection.send(1022,86063116);
         _panelMc.x = MainManager.actorModel.x - _panelMc.width / 2;
         if(MainManager.actorInfo.actionType == 0)
         {
            _panelMc.y = MainManager.actorModel.y - 140;
         }
         else
         {
            _panelMc.y = MainManager.actorModel.y - 180;
         }
         if(MapManager.currentMap.id == 1301)
         {
            _panelMc.x = 960 / 2 - _panelMc.width / 2;
            _panelMc.y = 560 / 2 - _panelMc.height / 2;
         }
         if(MapManager.currentMap.isBlockOpenFly(MainManager.actorModel.pos))
         {
            _panelMc["down"].enabled = true;
            _panelMc["down"].mouseEnabled = true;
            _panelMc["down"].filters = [];
         }
         else
         {
            _panelMc["down"].enabled = false;
            _panelMc["down"].mouseEnabled = false;
            _panelMc["down"].filters = [ColorFilter.setGrayscale()];
         }
         _panelMc["mc_1"].addEventListener(MouseEvent.CLICK,onFlyClick);
         _panelMc["mc_2"].addEventListener(MouseEvent.CLICK,onFlyClick);
         _panelMc["mc_3"].addEventListener(MouseEvent.CLICK,onFlyClick);
         _panelMc["mc_4"].addEventListener(MouseEvent.CLICK,onFlyClick);
         _panelMc["down"].addEventListener(MouseEvent.CLICK,onDownHandler);
         _panelMc["close"].addEventListener(MouseEvent.CLICK,onCloseClick);
         LevelManager.stage.addChild(_panelMc);
      }
      
      private static function hidePanel() : void
      {
         _panelMc["mc_1"].removeEventListener(MouseEvent.CLICK,onFlyClick);
         _panelMc["mc_2"].removeEventListener(MouseEvent.CLICK,onFlyClick);
         _panelMc["mc_3"].removeEventListener(MouseEvent.CLICK,onFlyClick);
         _panelMc["mc_4"].removeEventListener(MouseEvent.CLICK,onFlyClick);
         _panelMc["down"].removeEventListener(MouseEvent.CLICK,onDownHandler);
         _panelMc["close"].removeEventListener(MouseEvent.CLICK,onCloseClick);
         ModuleManager.destroy(ClientConfig.getAppModule("MachineDogPanel"));
         DisplayUtil.removeForParent(_panelMc);
         _panelMc = null;
      }
      
      private static function onFlyClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var b:SimpleButton = e.target as SimpleButton;
         var i:uint = uint(b.name.split("_")[1]);
         if(i < 3 && !MapManager.currentMap.isBlockOpenFly(MainManager.actorModel.pos))
         {
            Alarm.show("您在不可行走区域哦，不能使用这种飞行模式！");
            return;
         }
         SocketConnection.send(1020,227 + i);
         if(!MainManager.actorInfo.isVip && ColorfulPrivilegeWishController.bonusType != 3)
         {
            Alert.show("成为超能NoNo才能使用此飞行模式，是否立即成为超能NoNo?",function():void
            {
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
            });
         }
         else if(YearVip2016Controller.isYearVip)
         {
            NonoManager.nonoFlyAction(i);
            hidePanel();
            LevelManager.openMouseEvent();
         }
         else if(MainManager.actorInfo.vipLevel < i)
         {
            if(i == 1 && ColorfulPrivilegeWishController.bonusType == 3)
            {
               NonoManager.nonoFlyAction(i);
               hidePanel();
               LevelManager.openMouseEvent();
            }
            else
            {
               Alert.show("你的超能NoNo等级必须达到" + i + "级，才能使用该飞行模式,是否查看自己的超能等级？",function():void
               {
                  hidePanel();
                  LevelManager.openMouseEvent();
                  ModuleManager.showModule(ClientConfig.getAppModule("nonoPanel/NonoVipValuePanel"));
               });
            }
         }
         else
         {
            NonoManager.nonoFlyAction(i);
            hidePanel();
            LevelManager.openMouseEvent();
         }
      }
      
      private static function onDownHandler(param1:MouseEvent) : void
      {
         NonoManager.nonoFlyAction(0);
         hidePanel();
         LevelManager.openMouseEvent();
      }
      
      private static function onCloseClick(param1:MouseEvent) : void
      {
         hidePanel();
         LevelManager.openMouseEvent();
      }
      
      public static function startAlarm() : void
      {
      }
      
      private static function onGetAlarm(param1:SocketEvent) : void
      {
         MainManager.actorModel.showClockAlarm();
      }
      
      private static function onGetActivityAlarm(param1:SocketEvent) : void
      {
         MainManager.actorModel.showClockAlarm();
      }
   }
}
