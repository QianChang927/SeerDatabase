package com.robot.app.toolBar.subMenu
{
   import com.robot.app.team.TeamController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class FriendSubMenu
   {
      
      private static var _menu:MovieClip;
       
      
      public function FriendSubMenu()
      {
         super();
      }
      
      public static function show() : void
      {
         if(_menu == null)
         {
            _menu = UIManager.getMovieClip("ui_friendBtnsPanel");
            _menu.x = 208.15;
            _menu.y = 410;
            adjustTeamIcon();
         }
         if(DisplayUtil.hasParent(_menu))
         {
            hide();
         }
         else
         {
            _menu["teamBtn"].addEventListener(MouseEvent.CLICK,onTeam);
            _menu["imBtn"].addEventListener(MouseEvent.CLICK,onIm);
            MainManager.getStage().addEventListener(MouseEvent.CLICK,onStageClick);
            ToolTipManager.add(_menu["teamBtn"],"战队");
            ToolTipManager.add(_menu["imBtn"],"好友");
            LevelManager.toolsLevel.addChild(_menu);
         }
      }
      
      public static function hide() : void
      {
         _menu["teamBtn"].removeEventListener(MouseEvent.CLICK,onTeam);
         _menu["imBtn"].removeEventListener(MouseEvent.CLICK,onIm);
         MainManager.getStage().removeEventListener(MouseEvent.CLICK,onStageClick);
         ToolTipManager.remove(_menu["teamBtn"]);
         ToolTipManager.remove(_menu["imBtn"]);
         DisplayUtil.removeForParent(_menu);
      }
      
      private static function onStageClick(param1:MouseEvent) : void
      {
         if(_menu.hitTestPoint(param1.stageX,param1.stageY,true) == false)
         {
            hide();
         }
      }
      
      private static function adjustTeamIcon() : void
      {
         if(!ToolBarController.isTeamVisible)
         {
            _menu["teamBtn"].visible = false;
            _menu["imBtn"].y = _menu["teamBtn"].y;
            _menu["imBtn"].x = _menu["teamBtn"].x;
         }
      }
      
      private static function onTeam(param1:MouseEvent) : void
      {
         hide();
         if(MainManager.actorInfo.petMaxLev < 30)
         {
            SocketConnection.send(1022,84807315);
         }
         SocketConnection.send(1020,160);
         param1.stopImmediatePropagation();
         TeamController.showSubMenu();
      }
      
      private static function onIm(param1:MouseEvent) : void
      {
         hide();
         if(MainManager.actorInfo.petMaxLev < 30)
         {
            SocketConnection.send(1022,84807317);
         }
         SocketConnection.send(1020,161);
         ModuleManager.showAppModule("NewSeerFriendMainPanel");
         ToolBarController.hidePTalkPanel();
      }
   }
}
