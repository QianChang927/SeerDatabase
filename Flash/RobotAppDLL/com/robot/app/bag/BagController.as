package com.robot.app.bag
{
   import com.robot.core.manager.ModuleManager;
   
   public class BagController
   {
      
      public static var model:com.robot.app.bag.BagClothModel;
      
      private static var _bagPanel:com.robot.app.bag.BagPanel;
       
      
      public function BagController()
      {
         super();
      }
      
      public static function get panel() : com.robot.app.bag.BagPanel
      {
         if(_bagPanel == null)
         {
            _bagPanel = new com.robot.app.bag.BagPanel();
            model = new com.robot.app.bag.BagClothModel(_bagPanel);
         }
         return _bagPanel;
      }
      
      public static function show(param1:uint = 0) : void
      {
         ModuleManager.showAppModule("NewItemBagMainPanel");
      }
   }
}
