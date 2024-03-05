package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import org.taomee.events.SocketEvent;
   
   public class PetTrainingController
   {
      
      public static var _info:PetListInfo;
      
      private static var _choicePetImpersonationPanel:AppModel;
       
      
      public function PetTrainingController()
      {
         super();
      }
      
      public static function start() : void
      {
         PetManager.addEventListener(PetEvent.UPDATE_INFO,function(param1:PetEvent):void
         {
            PetManager.removeEventListener(PetEvent.UPDATE_INFO,arguments.callee);
            showMainPanel();
         });
         PetManager.upDate();
      }
      
      public static function showMainPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PetTrainingMainPanel"),"正在载入...");
      }
      
      public static function showBagPanel() : void
      {
         _info = null;
         ModuleManager.showModule(ClientConfig.getAppModule("PetTrainingBagPanel"),"正在载入...");
      }
      
      public static function showChoicePetImpersonationPanel() : void
      {
         _info = null;
         if(!_choicePetImpersonationPanel)
         {
            _choicePetImpersonationPanel = new AppModel(ClientConfig.getAppModule("ChoicePetImpersonationPanel"),"正在进入");
            _choicePetImpersonationPanel.setup();
            _choicePetImpersonationPanel.sharedEvents.addEventListener(Event.OPEN,onOpenCoursePanelHandler);
            _choicePetImpersonationPanel.sharedEvents.addEventListener(Event.CLOSE,onCloseCoursePanelHandler);
         }
         if(PetManager.getCanExePetList().length != 0)
         {
            _choicePetImpersonationPanel.init(PetManager.getStorage());
         }
         else
         {
            _choicePetImpersonationPanel.init(PetManager.getBagMap());
         }
         _choicePetImpersonationPanel.show();
      }
      
      private static function onCloseCoursePanelHandler(param1:Event) : void
      {
         _choicePetImpersonationPanel.sharedEvents.removeEventListener(Event.CLOSE,onCloseCoursePanelHandler);
         _choicePetImpersonationPanel.sharedEvents.removeEventListener(Event.OPEN,onOpenCoursePanelHandler);
         _choicePetImpersonationPanel.destroy();
         _choicePetImpersonationPanel = null;
         if(_info != null)
         {
            SocketConnection.addCmdListener(CommandID.NONO_START_EXE,onStartTraining);
            SocketConnection.send(CommandID.NONO_START_EXE,_info.catchTime);
         }
      }
      
      private static function onStartTraining(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         PetManager.deletePet(_info.catchTime);
         SocketConnection.removeCmdListener(CommandID.NONO_START_EXE,onStartTraining);
         PetManager.addEventListener(PetEvent.UPDATE_INFO,function(param1:PetEvent):void
         {
            PetManager.removeEventListener(PetEvent.UPDATE_INFO,arguments.callee);
            showMainPanel();
         });
         PetManager.upDate();
      }
      
      private static function onOpenCoursePanelHandler(param1:Event) : void
      {
         onCloseCoursePanelHandler(null);
         if(param1)
         {
            showChoicePetImpersonationPanel();
         }
      }
      
      public static function destroy() : void
      {
      }
   }
}
