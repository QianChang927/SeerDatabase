package com.robot.app.user
{
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.UserEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import org.taomee.bean.BaseBean;
   import org.taomee.manager.EventManager;
   
   public class UserInfoController extends BaseBean
   {
      
      private static var _panel:com.robot.app.user.IUserInfoPanel;
       
      
      public function UserInfoController()
      {
         super();
      }
      
      public static function show(param1:uint = 0, param2:Boolean = false) : void
      {
         if(_panel)
         {
            _panel.hide();
         }
         if(MainManager.actorID == param1 || param1 == 0)
         {
            _panel = new NewUserInfoPanel();
         }
         else
         {
            _panel = new OtherUserInfoPanel();
         }
         _panel.show(param1,param2);
      }
      
      private static function onMapSwitch(param1:MapEvent) : void
      {
         if(_panel)
         {
            _panel.hide();
         }
      }
      
      override public function start() : void
      {
         EventManager.addEventListener(UserEvent.CLICK,this.onClick);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_OPEN,onMapSwitch);
         finish();
      }
      
      private function onClick(param1:UserEvent) : void
      {
         var _loc3_:UserInfo = null;
         var _loc2_:uint = uint(param1.userInfo.userID);
         if(_loc2_ != MainManager.actorID)
         {
            if(NewSeerTaskController.isNewSeer)
            {
               return;
            }
            _loc3_ = param1.userInfo;
            if(_loc3_.mountId > 0)
            {
               show(param1.userInfo.userID);
            }
            else
            {
               show(param1.userInfo.userID);
            }
         }
         else
         {
            if(NewSeerTaskController.isNewSeer)
            {
               return;
            }
            show(param1.userInfo.userID);
         }
      }
   }
}
