package com.robot.app.homeToolBarPanel
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class HomeToolBarPanel
   {
       
      
      private var _panel:MovieClip;
      
      private var _fight:com.robot.app.homeToolBarPanel.HomeToolBarFightPanel;
      
      private var _friend:com.robot.app.homeToolBarPanel.HomeToolBarFriendPanel;
      
      private var _plant:com.robot.app.homeToolBarPanel.HomeToolBarPlantPanel;
      
      private var _seed:com.robot.app.homeToolBarPanel.HomeToolBarSeedPanel;
      
      public function HomeToolBarPanel()
      {
         super();
         this._panel = UIManager.getMovieClip("ui_Home_toolBar_bg");
         this._panel.y = MainManager.getStageHeight() - this._panel.height;
         this._panel["close"].addEventListener(MouseEvent.CLICK,this.onClose);
         this._fight = new com.robot.app.homeToolBarPanel.HomeToolBarFightPanel();
         this._friend = new com.robot.app.homeToolBarPanel.HomeToolBarFriendPanel();
         this._plant = new com.robot.app.homeToolBarPanel.HomeToolBarPlantPanel();
         this._seed = new com.robot.app.homeToolBarPanel.HomeToolBarSeedPanel();
         this._panel.addChild(this._fight);
         this._panel.addChild(this._friend);
         this._panel.addChild(this._plant);
         this._panel.addChild(this._seed);
      }
      
      public function show(param1:String, param2:String, param3:Boolean = false) : void
      {
         this._fight.hide();
         this._friend.hide();
         this._plant.hide();
         this._seed.hide();
         if(param1 == HomeToolBarContoller.PANEL_FIGHT)
         {
            this._fight.show();
         }
         if(param1 == HomeToolBarContoller.PANEL_PLANT)
         {
            this._plant.show();
         }
         if(param2 == HomeToolBarContoller.PANEL_FRIEND)
         {
            this._friend.show();
         }
         if(param2 == HomeToolBarContoller.PANEL_SEED)
         {
            this._seed.show();
         }
         if(param3 == false)
         {
            this._panel["close"].visible = false;
         }
         ToolBarController.panel.hide();
         LevelManager.toolsLevel.addChild(this._panel);
      }
      
      private function onClose(param1:MouseEvent) : void
      {
         HomeToolBarContoller.dispatchEvent(new Event(Event.CLOSE));
      }
      
      public function hide() : void
      {
         this._panel["close"].removeEventListener(MouseEvent.CLICK,this.onClose);
         ToolBarController.panel.show();
         DisplayUtil.removeForParent(this._panel);
      }
      
      public function destroy() : void
      {
         this.hide();
         this._fight.destroy();
         this._friend.destroy();
         this._plant.destroy();
         this._seed.destroy();
         this._panel = null;
      }
   }
}
