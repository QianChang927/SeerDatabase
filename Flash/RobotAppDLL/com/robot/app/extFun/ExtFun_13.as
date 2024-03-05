package com.robot.app.extFun
{
   import com.robot.core.CommandID;
   import com.robot.core.info.team.SimpleTeamInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.IExtFun;
   import com.robot.core.net.SocketLoader;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   
   public class ExtFun_13 implements IExtFun
   {
       
      
      private var _ui:MovieClip;
      
      private var _actionTime:uint;
      
      private var _sl:SocketLoader;
      
      private var _count:uint;
      
      public function ExtFun_13()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1 as MovieClip;
         this._ui.gotoAndStop(1);
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
         this._sl = new SocketLoader(CommandID.TEAM_GET_INFO);
         this._sl.addEventListener(SocketEvent.COMPLETE,this.onGetInfo);
         this._sl.load(MainManager.actorInfo.mapID);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
      }
      
      private function onAddEn(param1:uint) : void
      {
         this._count = param1;
         this._ui.gotoAndStop(4);
         clearTimeout(this._actionTime);
         this._actionTime = setTimeout(this.onActionEnd,4500);
      }
      
      private function onActionEnd() : void
      {
         if(this._count >= 10)
         {
            this._ui.gotoAndStop(2);
         }
         else
         {
            this._ui.gotoAndStop(1);
         }
      }
      
      private function onGetInfo(param1:SocketEvent) : void
      {
         var _loc2_:SimpleTeamInfo = param1.data as SimpleTeamInfo;
         this._sl.removeEventListener(SocketEvent.COMPLETE,this.onGetInfo);
         this._sl.destroy();
         if(_loc2_.superCoreNum >= 10)
         {
            this._ui.gotoAndStop(2);
         }
      }
      
      public function destory() : void
      {
         if(this._sl)
         {
            this._sl.removeEventListener(SocketEvent.COMPLETE,this.onGetInfo);
            this._sl.destroy();
            this._sl = null;
         }
         clearTimeout(this._actionTime);
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
