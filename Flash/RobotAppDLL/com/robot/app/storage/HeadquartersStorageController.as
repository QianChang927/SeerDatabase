package com.robot.app.storage
{
   import org.taomee.utils.DisplayUtil;
   
   public class HeadquartersStorageController
   {
      
      private static var _panel:com.robot.app.storage.HeadquartersStoragePanel;
       
      
      public function HeadquartersStorageController()
      {
         super();
      }
      
      public static function get panel() : com.robot.app.storage.HeadquartersStoragePanel
      {
         if(_panel == null)
         {
            _panel = new com.robot.app.storage.HeadquartersStoragePanel();
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
      
      public static function hide() : void
      {
         if(_panel == null)
         {
            return;
         }
         if(DisplayUtil.hasParent(panel))
         {
            panel.hide();
         }
      }
      
      public static function destroy() : void
      {
         if(_panel)
         {
            _panel.destroy();
            _panel = null;
         }
      }
   }
}
