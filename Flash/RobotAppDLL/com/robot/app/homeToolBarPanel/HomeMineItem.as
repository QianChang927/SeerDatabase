package com.robot.app.homeToolBarPanel
{
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   
   public class HomeMineItem extends HomeFriendItem
   {
       
      
      public function HomeMineItem()
      {
         super();
      }
      
      override protected function getMC() : MovieClip
      {
         return UIManager.getMovieClip("ui_Home_Friend_mine_item");
      }
      
      override public function set info(param1:UserInfo) : void
      {
         super.info = param1;
         clothPrev.changeCloth(param1.clothes);
      }
   }
}
