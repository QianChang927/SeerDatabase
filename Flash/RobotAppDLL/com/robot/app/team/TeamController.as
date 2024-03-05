package com.robot.app.team
{
   import com.robot.app.im.TeamChatController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.team.SimpleTeamInfo;
   import com.robot.core.info.team.TeamAddInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.MapType;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class TeamController
   {
      
      public static const ADMIN:uint = 0;
      
      public static const MEMBER:uint = 1;
      
      public static const GUEST:uint = 2;
      
      private static var infoPanel:AppModel;
      
      public static const TEAM_INTEREST:Array = ["团结朋友","探索宇宙","精灵对战","对抗坏蛋","结识伙伴","维护正义","热爱自然","辛勤劳动","勤奋学习","公平竞争"];
      
      public static const ADMIN_STR:Array = ["指挥官","管理员","队员"];
      
      private static var panel:AppModel;
      
      private static var searchPanel:MovieClip;
      
      private static var subMenu:MovieClip;
      
      private static var unreadInfoCount:int;
      
      private static var tipMC:MovieClip;
       
      
      public function TeamController()
      {
         super();
      }
      
      public static function showSubMenu() : void
      {
         var _loc1_:SimpleButton = null;
         var _loc2_:SimpleButton = null;
         if(MainManager.actorInfo.teamInfo.id == 0)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TeamJoinPanel"),"正在加载....");
            return;
         }
         if(subMenu == null)
         {
            subMenu = UIManager.getMovieClip("ui_teamBtnsPanel");
            subMenu.x = 208.15;
            subMenu.y = 410;
            _loc1_ = subMenu["enterTeamBtn"];
            subMenu["enterTeamBtn"].visible = true;
            subMenu["listBtn"].visible = false;
            ToolTipManager.add(_loc1_,"进入总部");
            _loc2_ = subMenu["teamImBtn"];
            ToolTipManager.add(_loc2_,"战队通讯");
            subMenu["enterTeamBtn"].addEventListener(MouseEvent.CLICK,enterHandler);
            subMenu["listBtn"].addEventListener(MouseEvent.CLICK,enterHandler);
            _loc2_.addEventListener(MouseEvent.CLICK,imHandler);
         }
         if(DisplayUtil.hasParent(subMenu))
         {
            hide();
         }
         else
         {
            _loc1_ = subMenu["enterTeamBtn"];
            subMenu["enterTeamBtn"].visible = true;
            subMenu["listBtn"].visible = false;
            ToolTipManager.add(_loc1_,"进入总部");
            LevelManager.toolsLevel.addChild(subMenu);
            MainManager.getStage().addEventListener(MouseEvent.CLICK,onStageClick);
         }
      }
      
      public static function showInfoTip() : void
      {
         ++unreadInfoCount;
         if(!tipMC)
         {
            tipMC = UIManager.getMovieClip("teamInfoTip");
            tipMC.x = 385;
            tipMC.y = 505;
            ToolTipManager.add(tipMC,"战队消息");
            tipMC.addEventListener(MouseEvent.CLICK,function():void
            {
               SocketConnection.send(1022,86054614);
               TeamChatController.show();
            });
            tipMC["numMC"].mouseChildren = tipMC["numMC"].mouseEnabled = false;
         }
         LevelManager.toolsLevel.addChild(tipMC);
         KTool.showScore(tipMC["numMC"],unreadInfoCount);
      }
      
      public static function hideInfoTip() : void
      {
         unreadInfoCount = 0;
         DisplayUtil.removeForParent(tipMC,false);
      }
      
      private static function onStageClick(param1:MouseEvent) : void
      {
         if(subMenu.hitTestPoint(param1.stageX,param1.stageY,true) == false)
         {
            hide();
         }
      }
      
      private static function hide() : void
      {
         DisplayUtil.removeForParent(subMenu);
         MainManager.getStage().removeEventListener(MouseEvent.CLICK,onStageClick);
      }
      
      private static function enterHandler(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(subMenu);
         show();
         SocketConnection.send(1022,86054612);
      }
      
      private static function imHandler(param1:MouseEvent) : void
      {
         if(SystemTimerManager.mingganshiqi())
         {
            return;
         }
         DisplayUtil.removeForParent(subMenu);
         TeamChatController.show();
         SocketConnection.send(1022,86054613);
      }
      
      public static function show(param1:uint = 0) : void
      {
         if(param1 == 0)
         {
            if(MainManager.actorInfo.teamInfo.id == 0)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("TeamJoinPanel"),"正在加载....");
            }
            else
            {
               enter(MainManager.actorInfo.teamInfo.id);
            }
         }
         else
         {
            join(param1);
         }
      }
      
      public static function searchTeam() : void
      {
         var closeBtn:SimpleButton = null;
         var okBtn:SimpleButton = null;
         if(!searchPanel)
         {
            searchPanel = new ui_findTeamAlarm();
            closeBtn = searchPanel["closeBtn"];
            okBtn = searchPanel["okBtn"];
            closeBtn.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               DisplayUtil.removeForParent(searchPanel);
            });
            okBtn.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               var _loc2_:String = String(searchPanel["txt"].text);
               if(_loc2_.replace(/" "/g,"") == "")
               {
                  return;
               }
               search(uint(_loc2_));
               DisplayUtil.removeForParent(searchPanel);
            });
         }
         DisplayUtil.align(searchPanel,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(searchPanel);
      }
      
      private static function search(param1:uint) : void
      {
         var id:uint = param1;
         if(id <= 50000)
         {
            Alarm.show("战队不存在");
            return;
         }
         if(!SocketConnection.hasCmdListener(CommandID.TEAM_GET_INFO))
         {
            SocketConnection.addCmdListener(CommandID.TEAM_GET_INFO,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.TEAM_GET_INFO,arguments.callee);
               var _loc3_:SimpleTeamInfo = param1.data as SimpleTeamInfo;
               show(_loc3_.teamID);
            });
         }
         SocketConnection.send(CommandID.TEAM_GET_INFO,id);
      }
      
      public static function create() : void
      {
         if(MainManager.actorInfo.teamInfo.id != 0)
         {
            Alarm.show("你已经加入了一个战队，如果想要创建一个战队的话，要先退出之前的战队哦！");
            return;
         }
         if(panel == null)
         {
            panel = ModuleManager.getModule(ClientConfig.getAppModule("TeamCreater"),"正在打开创建程序");
         }
         panel.show();
      }
      
      public static function join(param1:uint) : void
      {
         SocketConnection.addCmdListener(CommandID.TEAM_ADD,onTeamAdd);
         SocketConnection.send(CommandID.TEAM_ADD,param1);
      }
      
      private static function onTeamAdd(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TEAM_ADD,onTeamAdd);
         var _loc2_:TeamAddInfo = param1.data as TeamAddInfo;
         if(_loc2_.ret == 0)
         {
            Alarm.show("恭喜你加入战队成功");
            MainManager.actorInfo.teamInfo.id = _loc2_.teamID;
            MainManager.actorInfo.teamID = _loc2_.teamID;
            MainManager.actorInfo.teamInfo.priv = 2;
            ToolBarController.panel.checkPetLv();
         }
         else if(_loc2_.ret == 1)
         {
            Alarm.show("你的申请已经提交，等待对方验证");
         }
         else
         {
            Alarm.show("对不起，该战队不允许任何人加入");
         }
      }
      
      public static function enter(param1:uint) : void
      {
         if(param1 == 0)
         {
            Alarm.show("你还没有加入一个战队哦！");
            return;
         }
         MapManager.changeMap(param1,0,MapType.HEAD);
      }
      
      public static function changePriv(param1:uint, param2:uint, param3:Function = null) : void
      {
         var uid:uint = param1;
         var priv:uint = param2;
         var fun:Function = param3;
         SocketConnection.removeCmdListener(CommandID.TEAM_DELET_MEMBER,arguments.callee);
         SocketConnection.addCmdListener(CommandID.TEAM_CHANGE_ADMIN,function(param1:SocketEvent):void
         {
            Alarm.show("调整成功");
            SocketConnection.removeCmdListener(CommandID.TEAM_CHANGE_ADMIN,arguments.callee);
            if(fun != null)
            {
               fun(uid,priv);
            }
         });
         SocketConnection.send(CommandID.TEAM_CHANGE_ADMIN,uid,priv);
      }
      
      public static function del(param1:uint, param2:Function = null) : void
      {
         var uid:uint = param1;
         var fun:Function = param2;
         SocketConnection.removeCmdListener(CommandID.TEAM_DELET_MEMBER,arguments.callee);
         SocketConnection.addCmdListener(CommandID.TEAM_DELET_MEMBER,function(param1:SocketEvent):void
         {
            Alarm.show("删除成功");
            SocketConnection.removeCmdListener(CommandID.TEAM_DELET_MEMBER,arguments.callee);
            if(fun != null)
            {
               fun(uid);
            }
         });
         SocketConnection.send(CommandID.TEAM_DELET_MEMBER,uid);
      }
      
      public static function invite(param1:uint) : void
      {
         SocketConnection.removeCmdListener(CommandID.TEAM_INVITE_TO_JOIN,onInvite);
         SocketConnection.addCmdListener(CommandID.TEAM_INVITE_TO_JOIN,onInvite);
         SocketConnection.send(CommandID.TEAM_INVITE_TO_JOIN,param1);
      }
      
      private static function onInvite(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TEAM_INVITE_TO_JOIN,onInvite);
         Alarm.show("你的邀请已经发出，请耐心等待对方答复");
      }
   }
}
