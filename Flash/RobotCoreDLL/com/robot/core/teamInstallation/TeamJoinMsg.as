package com.robot.core.teamInstallation
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.InformInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.ClothPreview;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.IDataInput;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TeamJoinMsg
   {
       
      
      private var ui:MovieClip;
      
      private var _info:InformInfo;
      
      public function TeamJoinMsg()
      {
         super();
      }
      
      public function show(param1:InformInfo) : void
      {
         var info:InformInfo = param1;
         this._info = info;
         ResourceManager.getResource(ClientConfig.getAppRes("NewTeamJoinMsg"),function(param1:MovieClip):void
         {
            ui = param1;
            ui.addEventListener(MouseEvent.CLICK,onClick);
            ui["nickName"].text = _info.nick;
            LevelManager.appLevel.addChild(ui);
            ui.x = 290;
            ui.y = 170;
            getCloth();
         },"NewTeamJoinMsgUI");
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         switch(param1.target)
         {
            case this.ui["infoBtn"]:
               getDefinitionByName("com.robot.app.user.UserInfoController").show(this._info.userID);
               break;
            case this.ui["yesBtn"]:
               SocketConnection.send(CommandID.TEAM_ANSWER,this._info.userID,1);
               this.destroy();
               break;
            case this.ui["noBtn"]:
               SocketConnection.send(CommandID.TEAM_ANSWER,this._info.userID,0);
               this.destroy();
         }
      }
      
      private function getCloth() : void
      {
         SocketConnection.sendByQueue(CommandID.GET_SIM_USERINFO,[this._info.userID],function(param1:SocketEvent):void
         {
            var _loc2_:UserInfo = null;
            var _loc3_:Sprite = null;
            _loc2_ = new UserInfo();
            UserInfo.setForSimpleInfo(_loc2_,param1.data as IDataInput);
            _loc3_ = UIManager.getSprite("ComposeMC");
            _loc3_.scaleX = _loc3_.scaleY = 0.4;
            _loc3_.x = 55;
            _loc3_.y = 50;
            _loc3_.mouseEnabled = false;
            _loc3_.mouseChildren = false;
            DisplayUtil.stopAllMovieClip(_loc3_,1);
            ui.addChild(_loc3_);
            var _loc5_:*;
            var _loc4_:*;
            (_loc5_ = new (_loc4_ = getDefinitionByName("com.robot.app.bag.BagClothPreview"))(_loc3_,null,ClothPreview.MODEL_SHOW)).changeColor(!!_loc2_ ? _loc2_.color : MainManager.actorInfo.color);
            var _loc6_:Array = _loc2_.clothes;
            _loc5_.showCloths(_loc6_);
         });
      }
      
      private function destroy() : void
      {
         this.ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this.ui.parent.removeChild(this.ui);
         this.ui = null;
      }
   }
}
