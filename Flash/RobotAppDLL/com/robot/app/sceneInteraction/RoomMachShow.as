package com.robot.app.sceneInteraction
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.event.NonoEvent;
   import com.robot.core.info.NonoInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.mode.NonoModel;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   
   public class RoomMachShow
   {
       
      
      private var _nono:NonoModel;
      
      private var _info:NonoInfo;
      
      public function RoomMachShow(param1:uint)
      {
         super();
         if(param1 == MainManager.actorID)
         {
            NonoManager.addEventListener(NonoEvent.GET_INFO,this.onMyNonoInfo);
            NonoManager.getInfo();
         }
         else
         {
            SocketConnection.addCmdListener(CommandID.NONO_INFO,this.onNonoInfo);
            SocketConnection.send(CommandID.NONO_INFO,MapManager.currentMap.id);
         }
         NonoManager.addEventListener(NonoEvent.FOLLOW,this.onNonoFollow);
         NonoManager.addEventListener(NonoEvent.HOOM,this.onNonoHoom);
      }
      
      public function destroy() : void
      {
         NonoManager.removeEventListener(NonoEvent.FOLLOW,this.onNonoFollow);
         NonoManager.removeEventListener(NonoEvent.HOOM,this.onNonoHoom);
         NonoManager.removeEventListener(NonoEvent.GET_INFO,this.onMyNonoInfo);
         SocketConnection.removeCmdListener(CommandID.NONO_INFO,this.onNonoInfo);
         if(this._nono)
         {
            this._nono.destroy();
            this._nono = null;
         }
      }
      
      private function init(param1:NonoInfo) : void
      {
         this._info = param1;
         if(this._info.flag.length == 0)
         {
            return;
         }
         if(!this._info.flag[0])
         {
            return;
         }
         if(!this._info.state[1])
         {
            this.showNono(this._info);
         }
         else if(this._nono != null)
         {
            this._nono.showBox("12:00-15:00是双倍经验时段，主人要记得去训练精灵哦");
         }
      }
      
      private function showNono(param1:NonoInfo) : void
      {
         if(this._nono == null && !param1.state[1] && MapManager.currentMap.id == param1.userID)
         {
            this._nono = new NonoModel(param1);
            this._nono.pos = MapXMLInfo.getDefaultPos(MapManager.getResMapID(param1.userID));
            MapManager.currentMap.depthLevel.addChild(this._nono);
            this._nono.showBox("12:00-15:00是三倍经验时段，主人要记得去训练精灵哦");
         }
      }
      
      private function onNonoInfo(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.NONO_INFO,this.onNonoInfo);
         var _loc2_:NonoInfo = param1.data as NonoInfo;
         this.init(_loc2_);
      }
      
      private function onMyNonoInfo(param1:NonoEvent) : void
      {
         NonoManager.removeEventListener(NonoEvent.GET_INFO,this.onMyNonoInfo);
         this.init(param1.info);
      }
      
      private function onNonoFollow(param1:NonoEvent) : void
      {
         if(param1.info.userID == this._info.userID)
         {
            this._info.state[1] = true;
            if(this._nono)
            {
               this._nono.destroy();
               this._nono = null;
            }
         }
      }
      
      private function onNonoHoom(param1:NonoEvent) : void
      {
         if(param1.info.userID == this._info.userID)
         {
            this._info.state[1] = false;
            this.showNono(this._info);
         }
      }
   }
}
