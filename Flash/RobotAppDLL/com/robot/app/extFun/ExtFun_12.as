package com.robot.app.extFun
{
   import com.robot.core.CommandID;
   import com.robot.core.info.FitmentInfo;
   import com.robot.core.info.team.SimpleTeamInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.IExtFun;
   import com.robot.core.net.SocketLoader;
   import com.robot.core.teamInstallation.TeamLogo;
   import flash.display.Sprite;
   import org.taomee.events.SocketEvent;
   
   public class ExtFun_12 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      private var _info:FitmentInfo;
      
      private var _sl:SocketLoader;
      
      public function ExtFun_12()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this._ui.mouseEnabled = false;
         this._ui.mouseChildren = false;
         this._info = param2 as FitmentInfo;
         this._sl = new SocketLoader(CommandID.TEAM_GET_INFO);
         this._sl.addEventListener(SocketEvent.COMPLETE,this.onComplete);
         this._sl.load(MainManager.actorInfo.mapID);
      }
      
      private function onComplete(param1:SocketEvent) : void
      {
         var _loc3_:TeamLogo = null;
         this._sl.removeEventListener(SocketEvent.COMPLETE,this.onComplete);
         var _loc2_:SimpleTeamInfo = param1.data as SimpleTeamInfo;
         _loc3_ = new TeamLogo();
         _loc3_.info = _loc2_;
         _loc3_.x = -_loc3_.width / 2;
         _loc3_.y = -_loc3_.height / 2;
         this._ui.addChild(_loc3_);
      }
      
      public function destory() : void
      {
         if(this._sl)
         {
            this._sl.removeEventListener(SocketEvent.COMPLETE,this.onComplete);
            this._sl.destroy();
            this._sl = null;
         }
         this._ui = null;
         this._info = null;
      }
   }
}
