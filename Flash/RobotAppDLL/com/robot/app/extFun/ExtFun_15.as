package com.robot.app.extFun
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.team.ArmInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.mode.IExtFun;
   import com.robot.core.net.SocketLoader;
   import com.robot.core.teamInstallation.TeamInfoController;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class ExtFun_15 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      private var _info:ArmInfo;
      
      private var _sl:SocketLoader;
      
      private var _panel:AppModel;
      
      public function ExtFun_15()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this._info = param2 as ArmInfo;
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         if(this._info.form >= 2)
         {
            this._sl = new SocketLoader(CommandID.TEAM_SELECT_SUPER_CORE);
            this._sl.addEventListener(SocketEvent.COMPLETE,this.onSLComplete);
            this._sl.load();
         }
         else
         {
            TeamInfoController.start(this._info);
         }
      }
      
      private function onSLComplete(param1:SocketEvent) : void
      {
         this._sl.removeEventListener(SocketEvent.COMPLETE,this.onSLComplete);
         this._sl.destroy();
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(this._panel == null)
         {
            this._panel = ModuleManager.getModule(ClientConfig.getAppModule("TeamItemFactoryPanel"),"正在加载战队装备制造面板...");
         }
         this._panel.init(_loc3_);
         this._panel.show();
      }
      
      public function destory() : void
      {
         if(this._sl)
         {
            this._sl.removeEventListener(SocketEvent.COMPLETE,this.onSLComplete);
            this._sl.destroy();
         }
         if(this._panel)
         {
            this._panel.destroy();
            this._panel = null;
         }
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
