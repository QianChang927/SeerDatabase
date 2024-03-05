package com.robot.core.pet
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.RoomPetInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import flash.utils.getDefinitionByName;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class PetInfoController extends BaseBean
   {
      
      private static var _isRoom:Boolean = false;
      
      private static var _userId:uint;
      
      private static var _cap:uint;
      
      private static var _petInfoApp:AppModel;
      
      private static var _roomPetInfoPanel:AppModel;
       
      
      public function PetInfoController()
      {
         super();
      }
      
      public static function getInfo(param1:Boolean, param2:uint, param3:uint) : void
      {
         _isRoom = param1;
         _userId = param2;
         _cap = param3;
         if(_userId == 0)
         {
            return;
         }
         SocketConnection.send(CommandID.PET_ROOM_INFO,param2,param3);
      }
      
      public static function showPetInfoPanel(param1:RoomPetInfo) : void
      {
         if(!_petInfoApp)
         {
            _petInfoApp = new AppModel(ClientConfig.getAppModule("PetSimpleInfoPanel"),"正在打开精灵信息");
            _petInfoApp.setup();
         }
         _petInfoApp.init(param1);
         _petInfoApp.show();
      }
      
      public static function showRoomInfoPanel(param1:RoomPetInfo) : void
      {
         ModuleManager.showAppModule("BaseRoomPetInfoPanel",param1);
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.PET_ROOM_INFO,this.onInfoHandler);
         finish();
      }
      
      private function onInfoHandler(param1:SocketEvent) : void
      {
         var _loc3_:* = undefined;
         var _loc4_:PetListInfo = null;
         var _loc5_:PetShowInfo = null;
         var _loc2_:RoomPetInfo = param1.data as RoomPetInfo;
         if(_isRoom)
         {
            _loc3_ = getDefinitionByName("com.robot.app.sceneInteraction.RoomPetManager");
            _loc4_ = _loc3_.getInstance().getPetListInfo(_cap);
            _loc2_.isBright = null != _loc4_ ? _loc4_.isBright : false;
            if(_petInfoApp)
            {
               _petInfoApp.destroy();
               _petInfoApp = null;
            }
            showRoomInfoPanel(_loc2_);
         }
         else
         {
            if(_userId == 0)
            {
               return;
            }
            _loc5_ = UserManager.getUserModel(_userId).pet.info;
            _loc2_.isBright = null != _loc5_ ? _loc5_.isBright : false;
            if(_roomPetInfoPanel)
            {
               _roomPetInfoPanel.destroy();
               _roomPetInfoPanel = null;
            }
            showPetInfoPanel(_loc2_);
         }
      }
   }
}
