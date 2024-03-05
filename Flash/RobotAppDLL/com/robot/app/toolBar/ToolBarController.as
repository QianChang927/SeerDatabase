package com.robot.app.toolBar
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.teamPK.TeamPKManager;
   import flash.display.Sprite;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class ToolBarController extends BaseBean
   {
      
      private static var _toolBarPanel:com.robot.app.toolBar.ToolBarPanel;
      
      private static var _lastTime:uint;
       
      
      public function ToolBarController()
      {
         super();
      }
      
      public static function get panel() : com.robot.app.toolBar.ToolBarPanel
      {
         if(_toolBarPanel == null)
         {
            _toolBarPanel = new com.robot.app.toolBar.ToolBarPanel();
         }
         return _toolBarPanel;
      }
      
      public static function aimatOff() : void
      {
      }
      
      public static function aimatOn() : void
      {
      }
      
      public static function closeOrOpenGroupBtn(param1:Boolean = true) : void
      {
         _toolBarPanel.closeOrOpenGroupBtn(param1);
      }
      
      public static function bagOff() : void
      {
         _toolBarPanel.bagOff();
      }
      
      public static function bagOn() : void
      {
         _toolBarPanel.bagOn();
      }
      
      public static function closeOrOpenImBtn(param1:Boolean) : void
      {
         _toolBarPanel.closeOrOpenImBtn(param1);
      }
      
      public static function closeChatTabMc() : void
      {
         _toolBarPanel.closeChatTabMc();
      }
      
      public static function vipOff() : void
      {
         _toolBarPanel.vipOff();
      }
      
      public static function vipOn() : void
      {
         _toolBarPanel.vipOn();
      }
      
      public static function hidePTalkPanel() : void
      {
         _toolBarPanel.hidePTalkPanel();
      }
      
      public static function friendOff() : void
      {
         _toolBarPanel.friendOff();
      }
      
      public static function friendOn() : void
      {
         _toolBarPanel.friendOn();
      }
      
      public static function actionOff() : void
      {
      }
      
      public static function guideShine(param1:Boolean) : void
      {
         _toolBarPanel.guideShine(param1);
      }
      
      public static function actionOn() : void
      {
      }
      
      public static function homeOff() : void
      {
         _toolBarPanel.homeOff();
      }
      
      public static function homeOn() : void
      {
         _toolBarPanel.homeOn();
      }
      
      public static function shopOff() : void
      {
         _toolBarPanel.setShopEnable(false);
      }
      
      public static function shopOn() : void
      {
         _toolBarPanel.setShopEnable(true);
      }
      
      public static function closePetBag(param1:Boolean) : void
      {
         _toolBarPanel.closePetBag(param1);
      }
      
      public static function showBubble(param1:String) : void
      {
         if(_toolBarPanel)
         {
            _toolBarPanel.bubble(param1);
         }
      }
      
      public static function showEmail() : void
      {
      }
      
      public static function hideEmail() : void
      {
         _toolBarPanel.emailHide();
      }
      
      public static function getpanelUi() : Sprite
      {
         return _toolBarPanel.getMainUi();
      }
      
      public static function noticeAimat(param1:Boolean) : void
      {
         _toolBarPanel.noticeAimat(param1);
      }
      
      public static function showOrHideAllUser(param1:Boolean) : void
      {
         if(_toolBarPanel)
         {
            _toolBarPanel.showOrHideUser(param1);
         }
      }
      
      public static function checkPetLv() : void
      {
         if(_toolBarPanel)
         {
            _toolBarPanel.checkPetLv();
         }
      }
      
      public static function get isTeamVisible() : Boolean
      {
         if(MainManager.actorInfo.petMaxLev >= 100 || MainManager.actorInfo.petMaxLev >= 30 && MainManager.actorInfo.teamInfo.id > 0)
         {
            return true;
         }
         return false;
      }
      
      public static function checkDrawGameState(param1:uint = 0) : void
      {
         var timeLast:uint = param1;
         var handler:Function = function():void
         {
            if(_lastTime > 0)
            {
               if(_toolBarPanel)
               {
                  _toolBarPanel.clearMv();
               }
               SystemTimerManager.addTickFun(onDrawTimer);
            }
            else if(_toolBarPanel)
            {
               _toolBarPanel.startMv();
            }
         };
         SystemTimerManager.removeTickFun(onDrawTimer);
         if(timeLast > 0)
         {
            _lastTime = timeLast;
            handler();
         }
         else
         {
            SocketConnection.sendWithCallback(CommandID.EVERYDAY_DRAW_LAST_TIME,function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               _loc2_.position = 0;
               _lastTime = _loc2_.readUnsignedInt();
               handler();
            });
         }
      }
      
      private static function onDrawTimer() : void
      {
         --_lastTime;
         if(_lastTime < 1)
         {
            SystemTimerManager.removeTickFun(onDrawTimer);
            if(_toolBarPanel)
            {
               _toolBarPanel.startMv();
            }
         }
      }
      
      override public function start() : void
      {
         panel.show();
         TeamPKManager.setup();
         finish();
      }
   }
}
