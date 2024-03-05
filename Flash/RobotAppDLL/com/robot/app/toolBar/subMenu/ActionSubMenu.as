package com.robot.app.toolBar.subMenu
{
   import com.robot.app.action.ActorActionManager;
   import com.robot.core.aimat.AimatGridPanel;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ActionSubMenu
   {
      
      private static var _menu:MovieClip;
       
      
      public function ActionSubMenu()
      {
         super();
      }
      
      public static function show() : void
      {
         if(_menu == null)
         {
            _menu = UIManager.getMovieClip("ui_actionBtnsPanel");
            _menu.x = 300;
            _menu.y = 410;
         }
         if(DisplayUtil.hasParent(_menu))
         {
            hide();
         }
         else
         {
            _menu["tranBtn"].addEventListener(MouseEvent.CLICK,onChangeSuit);
            _menu["aimatBtn"].addEventListener(MouseEvent.CLICK,onAimAt);
            ToolTipManager.add(_menu["tranBtn"],"变形");
            ToolTipManager.add(_menu["aimatBtn"],"瞄准");
            MainManager.getStage().addEventListener(MouseEvent.CLICK,onStageClick);
            LevelManager.toolsLevel.addChild(_menu);
         }
      }
      
      public static function hide() : void
      {
         _menu["tranBtn"].removeEventListener(MouseEvent.CLICK,onChangeSuit);
         _menu["aimatBtn"].removeEventListener(MouseEvent.CLICK,onAimAt);
         MainManager.getStage().removeEventListener(MouseEvent.CLICK,onStageClick);
         ToolTipManager.remove(_menu["tranBtn"]);
         ToolTipManager.remove(_menu["aimatBtn"]);
         DisplayUtil.removeForParent(_menu);
      }
      
      private static function onStageClick(param1:MouseEvent) : void
      {
         if(_menu.hitTestPoint(param1.stageX,param1.stageY,true) == false)
         {
            hide();
         }
      }
      
      private static function onChangeSuit(param1:MouseEvent) : void
      {
         hide();
         SocketConnection.send(1022,86064539);
         if(MainManager.actorModel.isTransform)
         {
            ActorActionManager.unTranHandler();
         }
         else
         {
            ActorActionManager.tranHandler();
         }
      }
      
      private static function onAimAt(param1:MouseEvent) : void
      {
         hide();
         if(MainManager.actorInfo.petMaxLev < 30)
         {
            SocketConnection.send(1022,84807313);
         }
         SocketConnection.send(1020,157);
         param1.stopImmediatePropagation();
         AimatGridPanel.show();
      }
   }
}
