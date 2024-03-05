package com.robot.app.fightNote
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.MapProcess_500;
   import com.robot.app.protectSys.KillPluginPanel;
   import com.robot.app.protectSys.ProtectSystem;
   import com.robot.core.CommandID;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class FightReadyCmdListener extends BaseBean
   {
       
      
      private var _quetion:int;
      
      private var _img_len:int;
      
      private var _imgBytes:ByteArray;
      
      private var _panel:KillPluginPanel;
      
      public function FightReadyCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.FIGHT_READY_INFO,this.onFight);
         finish();
      }
      
      private function onFight(param1:SocketEvent) : void
      {
         var _loc4_:Object = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = _loc2_.readByte();
         if(_loc3_ == 0)
         {
            this.startFight();
         }
         else if(_loc3_ == 1)
         {
            ProtectSystem.showPluginPanel();
            FightWaitPanel.hide();
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.ANTI_PLUG_IN_ERROR));
         }
         else
         {
            this._quetion = _loc2_.readByte();
            this._img_len = _loc2_.readUnsignedInt();
            this._imgBytes = new ByteArray();
            _loc2_.readBytes(this._imgBytes,0,this._img_len);
            (_loc4_ = new Object()).quetion = this._quetion;
            _loc4_.bytes = this._imgBytes;
            this.showPluginPanel(_loc4_);
         }
      }
      
      private function startFight() : void
      {
         var _loc1_:FightTypeInfo = FightManager.info;
         if(_loc1_)
         {
            switch(_loc1_.type)
            {
               case 0:
                  FightManager.fightWithNpc(_loc1_.area);
                  break;
               case 1:
                  FightManager.fightWithBoss(_loc1_.bossName,_loc1_.bossRegion,_loc1_.isSkipKP,_loc1_.isMultiModel);
                  break;
               case 2:
                  if(MapProcess_500.isSuperFight)
                  {
                     SocketConnection.send(CommandID.SUPER_TOWER_FIGHT_BOSS);
                  }
                  else
                  {
                     SocketConnection.send(CommandID.START_FIGHT_LEVEL);
                  }
                  break;
               case 3:
                  SocketConnection.send(CommandID.INVITE_TO_FIGHT,_loc1_.userId,_loc1_.fightType);
                  break;
               case 4:
                  SocketConnection.send(CommandID.JOIN_GAME,_loc1_.bossRegion);
            }
         }
      }
      
      private function showPluginPanel(param1:Object) : void
      {
         this._panel = new KillPluginPanel(param1);
         DisplayUtil.align(this._panel,null,AlignType.MIDDLE_CENTER);
         MainManager.getStage().addChild(this._panel);
         LevelManager.closeMouseEvent();
      }
   }
}
