package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MovieController
   {
       
      
      public function MovieController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:Sprite = UIManager.getSprite("movie_icon");
         ToolTipManager.add(_loc1_,"电影票房破亿大狂欢");
         _loc1_.addEventListener(MouseEvent.CLICK,onClickIcon);
         TaskIconManager.addIcon(_loc1_,TaskIconManager.LEFT_SIDE);
      }
      
      public static function onClickIcon(param1:* = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("MovieResultPanel"));
      }
   }
}
