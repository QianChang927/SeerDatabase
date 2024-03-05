package com.robot.app.homeToolBarPanel
{
   import com.robot.app.sceneInteraction.RoomPetManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import org.taomee.utils.DisplayUtil;
   
   public class HomeToolBarFightPanel extends Sprite
   {
       
      
      private var _panel:MovieClip;
      
      public function HomeToolBarFightPanel()
      {
         super();
         this._panel = UIManager.getMovieClip("ui_Home_toolBar_fight");
      }
      
      public function show() : void
      {
         addChild(this._panel);
         RoomPetManager.getInstance().getTodayFightNum(function(param1:int):void
         {
            _panel["num"].gotoAndStop(param1 + 1);
            _panel["bar"].gotoAndStop(param1 + 1);
         });
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this._panel);
      }
      
      public function destroy() : void
      {
         this.hide();
         this._panel = null;
      }
   }
}
