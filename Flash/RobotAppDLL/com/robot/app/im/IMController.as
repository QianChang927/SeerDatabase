package com.robot.app.im
{
   import com.robot.app.im.ui.IMPanel;
   import org.taomee.utils.DisplayUtil;
   
   public class IMController
   {
      
      private static var _panel:IMPanel;
      
      public static var curTab:uint = 1;
      
      public static var _onlineIM:Boolean = false;
       
      
      public function IMController()
      {
         super();
      }
      
      public static function get panel() : IMPanel
      {
         if(_panel == null)
         {
            _panel = new IMPanel();
         }
         return _panel;
      }
      
      public static function show() : void
      {
         if(DisplayUtil.hasParent(panel))
         {
            panel.hide();
         }
         else
         {
            panel.show();
         }
      }
   }
}
