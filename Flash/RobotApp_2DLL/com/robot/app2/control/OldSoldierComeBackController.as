package com.robot.app2.control
{
   import com.robot.app.im.talk.TalkPanelManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.user.UserInfoController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.Timer;
   import org.taomee.manager.ToolTipManager;
   
   public class OldSoldierComeBackController
   {
      
      public static var isOldSoldier:uint;
      
      public static var isNewSoldier:uint;
      
      public static var soldierType:uint;
      
      private static var timer:Timer;
      
      private static var icon1:SimpleButton;
      
      private static var _user:UserInfo;
      
      private static var _infobtn:SimpleButton;
      
      private static var _petbgbtn:SimpleButton;
      
      private static var _msgbtn:SimpleButton;
      
      private static var _tongji:Array;
       
      
      public function OldSoldierComeBackController()
      {
         super();
      }
      
      public static function setup() : void
      {
         KTool.getMultiValue([2053,412],function(param1:Array):void
         {
            isOldSoldier = param1[0];
            isNewSoldier = param1[1];
            icon1 = MapManager.currentMap.depthLevel["oldsoldier_icon"];
            ToolTipManager.add(icon1,"新学期新兵老兵大招募");
            if(isNewSoldier == 3)
            {
               icon1.addEventListener(MouseEvent.CLICK,onClick2);
               soldierType = 1;
            }
            else if(isOldSoldier == 1)
            {
               icon1.visible = true;
               icon1.addEventListener(MouseEvent.CLICK,onClickOldSoldier);
               soldierType = 2;
            }
            else
            {
               icon1.addEventListener(MouseEvent.CLICK,onClickOldSoldier2);
               soldierType = 3;
            }
         });
      }
      
      public static function destroy() : void
      {
         ToolTipManager.remove(icon1);
         icon1.removeEventListener(MouseEvent.CLICK,onClick2);
         icon1.removeEventListener(MouseEvent.CLICK,onClickOldSoldier);
         icon1.removeEventListener(MouseEvent.CLICK,onClickOldSoldier2);
      }
      
      private static function onClickOldSoldier(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86065662);
         ModuleManager.showModule(ClientConfig.getAppModule("adown/VeteranReturnGiftPanel"));
      }
      
      private static function onClickOldSoldier2(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86065662);
         ModuleManager.showModule(ClientConfig.getAppModule("adown/VeteranReturnGiftPanelAll"));
      }
      
      private static function onClick2(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86059846);
         ModuleManager.showModule(ClientConfig.getAppModule("adown/VeteranRecruitGiftPanel"));
      }
      
      public static function setInfoForTowPanel(param1:SimpleButton, param2:SimpleButton, param3:SimpleButton, param4:UserInfo, param5:Array) : void
      {
         _user = param4;
         _infobtn = param1;
         _petbgbtn = param2;
         _msgbtn = param3;
         _tongji = param5;
         ToolTipManager.add(_infobtn,"被招募者信息");
         ToolTipManager.add(_petbgbtn,"被招募者精灵背包");
         ToolTipManager.add(_msgbtn,"与被招募者聊天");
         _infobtn.addEventListener(MouseEvent.CLICK,onClickInfo);
         _petbgbtn.addEventListener(MouseEvent.CLICK,onClickBag);
         _msgbtn.addEventListener(MouseEvent.CLICK,onClickMsg);
      }
      
      private static function onClickInfo(param1:Event) : void
      {
         SocketConnection.send(1022,_tongji[0]);
         UserInfoController.show(_user.userID);
      }
      
      private static function onClickBag(param1:Event) : void
      {
         SocketConnection.send(1022,_tongji[1]);
         if(Boolean(_user) && _user.userID != 0)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("OtherPetBagPanel"),"正在打开...",[_user.userID,_user.nick]);
         }
      }
      
      private static function onClickMsg(param1:Event) : void
      {
         SocketConnection.send(1022,_tongji[2]);
         if(Boolean(_user) && _user.userID != 0)
         {
            TalkPanelManager.showTalkPanel(_user.userID);
         }
      }
      
      public static function destroyForPanel() : void
      {
         _infobtn.removeEventListener(MouseEvent.CLICK,onClickInfo);
         _petbgbtn.removeEventListener(MouseEvent.CLICK,onClickBag);
         _msgbtn.removeEventListener(MouseEvent.CLICK,onClickMsg);
         ToolTipManager.remove(_infobtn);
         ToolTipManager.remove(_petbgbtn);
         ToolTipManager.remove(_msgbtn);
         _infobtn = null;
         _petbgbtn = null;
         _msgbtn = null;
      }
   }
}
