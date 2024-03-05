package com.robot.app.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.HonorsHallSyssXMLInfo;
   import com.robot.core.config.xml.MedalsXMLInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.BitUtil;
   
   public class HonorsHallController
   {
      
      private static var _mail:AppModel;
      
      private static var _guidePanel:AppModel;
      
      private static var _sysPanel:AppModel;
      
      private static var _badgePanel:AppModel;
      
      private static var _rankPanel:AppModel;
      
      public static var lvState:int;
      
      private static var cnt:int;
       
      
      public function HonorsHallController()
      {
         super();
      }
      
      public static function initForMail() : void
      {
         var t:uint = 0;
         var onShowMail:Function = null;
         onShowMail = function(param1:SocketEvent):void
         {
            _mail = new AppModel(ClientConfig.getAppModule("honorsHall/InvitativeLetter100"),"正在打开邀请信....");
            _mail.setup();
            _mail.show();
         };
         t = setTimeout(function():void
         {
            clearTimeout(t);
            switch(TasksManager.getTaskStatus(998))
            {
               case TasksManager.UN_ACCEPT:
                  SocketConnection.addCmdListener(CommandID.FIRST_100_FAIRY,onShowMail);
                  break;
               case TasksManager.ALR_ACCEPT:
                  onShowMail(null);
                  break;
               case TasksManager.COMPLETE:
            }
         },5000);
      }
      
      public static function onClickedXiaoke() : void
      {
         SocketConnection.send(1020,242);
         checkState();
         MapManager.currentMap.controlLevel["guideXiaoke"].stop();
         MapManager.currentMap.controlLevel["guideXiaoke"].visible = false;
         MapManager.changeMapWithCallback(1147,function():void
         {
            ModuleManager.showAppModule("MeritSystemOnlineMianPanel");
         });
      }
      
      public static function openPanel(param1:int) : void
      {
         if(!_guidePanel)
         {
            _guidePanel = new AppModel(ClientConfig.getAppModule("honorsHall/HonorsHallGuidePanel"),"正在打开引导面板....");
            _guidePanel.setup();
         }
         _guidePanel.init(param1);
         _guidePanel.show();
         if(param1 == 1)
         {
            SocketConnection.send(1020,240);
         }
         else
         {
            SocketConnection.send(1020,239);
         }
      }
      
      public static function onClickedLaoke() : void
      {
         SocketConnection.send(1020,243);
         checkState();
         MapManager.currentMap.controlLevel["guideLaoke"].stop();
         MapManager.currentMap.controlLevel["guideLaoke"].visible = false;
         MapManager.changeMapWithCallback(1147,function():void
         {
            ModuleManager.showAppModule("MeritSystemOnlineMianPanel");
         });
      }
      
      public static function showSysPanel(param1:int) : void
      {
         if(!_sysPanel)
         {
            _sysPanel = new AppModel(ClientConfig.getAppModule("honorsHall/HonorsHallSysPanel"),"正在打开引导面板....");
            _sysPanel.setup();
         }
         _sysPanel.init(HonorsHallSyssXMLInfo.getSysInfo(param1));
         _sysPanel.show();
      }
      
      public static function showBadgePanel(param1:int = 0) : void
      {
         if(!_badgePanel)
         {
            _badgePanel = new AppModel(ClientConfig.getAppModule("honorsHall/HonorsHallBadgePanel"),"正在打开徽章面板....");
            _badgePanel.setup();
         }
         var _loc2_:Boolean = false;
         if(param1 == MainManager.actorID)
         {
            _loc2_ = true;
         }
         else if(param1 == 0)
         {
            param1 = int(MainManager.actorID);
            _loc2_ = true;
         }
         _badgePanel.init([param1,_loc2_]);
         _badgePanel.show();
      }
      
      public static function showRankPanel() : void
      {
         if(!_rankPanel)
         {
            _rankPanel = new AppModel(ClientConfig.getAppModule("honorsHall/HonorsHallRankPanel"),"正在打开排行面板....");
            _rankPanel.setup();
         }
         _rankPanel.show();
         SocketConnection.send(1020,241);
      }
      
      public static function destroy() : void
      {
      }
      
      public static function get rankLv() : int
      {
         var _loc1_:Array = null;
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         if(MainManager.actorInfo.totalAchieve < 600)
         {
            _loc1_ = MedalsXMLInfo.getMedalIcon(MainManager.actorInfo.totalAchieve);
            return _loc1_[0].icon;
         }
         _loc2_ = uint(MainManager.actorInfo.achieRank);
         _loc3_ = 0;
         while(_loc3_ < 32)
         {
            if(BitUtil.getBit(_loc2_,_loc3_) == 0)
            {
               return _loc3_ + 4;
            }
            _loc3_++;
         }
         return 0;
      }
      
      public static function get lvString() : String
      {
         var _loc1_:String = "";
         switch(lvState)
         {
            case 0:
               _loc1_ = "没有精灵";
               break;
            case 1:
               _loc1_ = "1--29";
               break;
            case 2:
               _loc1_ = "30--49";
               break;
            case 3:
               _loc1_ = "50--69";
               break;
            case 4:
               _loc1_ = "70--89";
               break;
            case 5:
               _loc1_ = "90--99";
               break;
            case 6:
               _loc1_ = "1只100级";
               break;
            case 7:
               if(cnt == 2)
               {
                  _loc1_ = "2只100级";
               }
               else
               {
                  _loc1_ = "3只100级";
               }
               break;
            case 8:
               if(cnt == 4)
               {
                  _loc1_ = "4只100级";
               }
               else
               {
                  _loc1_ = "5只100级";
               }
               break;
            case 9:
               _loc1_ = "6只100级";
         }
         return _loc1_;
      }
      
      public static function checkState() : void
      {
         var _loc4_:PetListInfo = null;
         var _loc1_:Array = PetManager.getBagMap().concat();
         var _loc2_:int = 0;
         cnt = 0;
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            if((_loc4_ = _loc1_[_loc3_]).level == 100)
            {
               ++cnt;
            }
            else if(_loc4_.level > _loc2_)
            {
               _loc2_ = int(_loc4_.level);
            }
            _loc3_++;
         }
         if(cnt == 0)
         {
            if(_loc2_ == 0)
            {
               lvState = 0;
            }
            else if(_loc2_ < 30)
            {
               lvState = 1;
            }
            else if(_loc2_ < 50)
            {
               lvState = 2;
            }
            else if(_loc2_ < 70)
            {
               lvState = 3;
            }
            else if(_loc2_ < 90)
            {
               lvState = 4;
            }
            else
            {
               lvState = 5;
            }
         }
         else if(cnt == 6)
         {
            lvState = 9;
         }
         else if(cnt == 4 || cnt == 5)
         {
            lvState = 8;
         }
         else if(cnt == 2 || cnt == 3)
         {
            lvState = 7;
         }
         else
         {
            lvState = 6;
         }
      }
   }
}
