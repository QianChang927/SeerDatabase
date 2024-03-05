package com.robot.app.extFun
{
   import com.robot.core.CommandID;
   import com.robot.core.info.team.ArmInfo;
   import com.robot.core.info.team.SimpleTeamInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.MapType;
   import com.robot.core.mode.IExtFun;
   import com.robot.core.net.SocketLoader;
   import com.robot.core.teamInstallation.TeamInfoController;
   import com.robot.core.teamInstallation.TeamLogo;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class ExtFun_8 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      private var _info:ArmInfo;
      
      private var _sl:SocketLoader;
      
      public function ExtFun_8()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this._info = param2 as ArmInfo;
         this._ui["upBtn"].addEventListener(MouseEvent.CLICK,this.onUpClick);
         this._ui["bodyBtn"].addEventListener(MouseEvent.CLICK,this.onBodyClick);
         ToolTipManager.add(this._ui["bodyBtn"],"进入总部");
         this._sl = new SocketLoader(CommandID.TEAM_GET_INFO);
         this._sl.addEventListener(SocketEvent.COMPLETE,this.onComplete);
         this._sl.load(MainManager.actorInfo.mapID);
      }
      
      private function onUpClick(param1:MouseEvent) : void
      {
         if(MainManager.actorInfo.teamInfo.id == MainManager.actorInfo.mapID)
         {
            if(this._info)
            {
               TeamInfoController.start(this._info);
            }
         }
      }
      
      private function onBodyClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(e.stageX,e.stageY),function():void
         {
            MapManager.changeMap(MainManager.actorInfo.mapID,0,MapType.HEAD);
         });
      }
      
      private function onComplete(param1:SocketEvent) : void
      {
         var _loc3_:TeamLogo = null;
         this._sl.removeEventListener(SocketEvent.COMPLETE,this.onComplete);
         var _loc2_:SimpleTeamInfo = param1.data as SimpleTeamInfo;
         if(_loc2_.superCoreNum >= 10)
         {
            _loc3_ = new TeamLogo();
            _loc3_.info = _loc2_;
            _loc3_.x = this._ui["upBtn"].x + this._ui["upBtn"].width / 2 - _loc3_.width / 2;
            _loc3_.y = this._ui["upBtn"].y - _loc3_.height + 10;
            this._ui.addChild(_loc3_);
         }
      }
      
      public function destory() : void
      {
         if(this._sl)
         {
            this._sl.removeEventListener(SocketEvent.COMPLETE,this.onComplete);
            this._sl.destroy();
            this._sl = null;
         }
         this._ui["upBtn"].removeEventListener(MouseEvent.CLICK,this.onUpClick);
         this._ui["bodyBtn"].removeEventListener(MouseEvent.CLICK,this.onBodyClick);
         ToolTipManager.remove(this._ui["bodyBtn"]);
         this._ui = null;
         this._info = null;
      }
   }
}
