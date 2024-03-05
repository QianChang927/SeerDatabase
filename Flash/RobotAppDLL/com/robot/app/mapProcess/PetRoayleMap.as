package com.robot.app.mapProcess
{
   import com.robot.app.petRoayle.PetRoayleMapController;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class PetRoayleMap extends BaseMapProcess
   {
      
      private static var _isShow:Boolean;
       
      
      public function PetRoayleMap()
      {
         super();
      }
      
      override protected function init() : void
      {
         _isShow = UserManager.isShow;
         UserManager.isShow = true;
         MapManager.currentMap.showAllUser();
         PetRoayleMapController.setup(this);
      }
      
      override public function destroy() : void
      {
         UserManager.isShow = _isShow;
         if(UserManager.isShow)
         {
            MapManager.currentMap.showAllUser();
         }
         else
         {
            MapManager.currentMap.hideAllUser();
         }
         PetRoayleMapController.destroy();
      }
   }
}
