package com.robot.app.mapProcess
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.Direction;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import gs.TweenGroup;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_458 extends BaseMapProcess
   {
      
      private static const FIGHT_TYPE_NAME_ARR:Array = ["草","水","火","飞行","电","机械","地面","普通","冰","超能","战斗","光","暗影","神秘","龙","圣灵"];
      
      private static var _applicationStatus:int = -1;
      
      private static var _status:int = 0;
      
      private static var _isMatch:Boolean;
      
      private static var _challegenBoss:Boolean;
      
      private static var _fightCloseFunc:Function;
      
      private static var _fightCloseUIFunc:Function;
       
      
      private var _fightTypeMC:MovieClip;
      
      private var _bossInMC:MovieClip;
      
      private var _mc1:MovieClip;
      
      private var _mc2:MovieClip;
      
      private var _leaveBtn:SimpleButton;
      
      private var _waitMC:MovieClip;
      
      private var _enemyMode:BasePeoleModel;
      
      public function MapProcess_458()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.initResource();
         if(_applicationStatus == -1)
         {
            _status = 0;
            _isMatch = false;
            this._waitMC.visible = true;
            _challegenBoss = false;
            _applicationStatus = 0;
            PetFightModel.mode = PetFightModel.SINGLE_MODE;
            PetFightModel.type = PetFightModel.PET_ELMENT_FIGHT;
            PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
            SocketConnection.send(CommandID.ELEMNET_FIGHT_SIGNUP);
            SocketConnection.addCmdListener(CommandID.ELEMNET_FIGHT_SIGNUP,this.onSignUp);
            EventManager.addEventListener("ElementFightStart",this.onElementFightStart);
         }
         EventManager.addEventListener(RobotEvent.CREATED_MAP_USER,this.onMapUser);
      }
      
      private function initResource() : void
      {
         this._fightTypeMC = conLevel["fightTypeMC"];
         this._fightTypeMC.visible = false;
         this._mc1 = conLevel["mc1"];
         this._mc2 = conLevel["mc2"];
         this._bossInMC = MapManager.currentMap.libManager.getMovieClip("bossInMC");
         this._leaveBtn = conLevel["leaveBtn"];
         this._waitMC = topLevel["waitMC"];
         this._leaveBtn.addEventListener(MouseEvent.CLICK,this.onLeaveBtnClick);
         ToolTipManager.add(this._leaveBtn,"离开");
         this._waitMC.visible = false;
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
      }
      
      private function restroeResource() : void
      {
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         ToolTipManager.remove(this._leaveBtn);
         this._leaveBtn.removeEventListener(MouseEvent.CLICK,this.onLeaveBtnClick);
      }
      
      private function onMapUser(param1:RobotEvent) : void
      {
         UserManager.clear();
      }
      
      private function onSignUp(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ELEMNET_FIGHT_SIGNUP,this.onSignUp);
         _isMatch = true;
      }
      
      private function onElementFightStart(param1:DynamicEvent) : void
      {
         var _loc3_:String = null;
         var _loc7_:PeopleItemInfo = null;
         EventManager.removeEventListener("ElementFightStart",this.onElementFightStart);
         _isMatch = false;
         this._waitMC.visible = false;
         var _loc2_:uint = uint(param1.paramObject["type"]);
         _loc3_ = String(param1.paramObject["name"]);
         var _loc4_:Array = param1.paramObject["clothes"];
         this._fightTypeMC.gotoAndStop(_loc2_);
         this._fightTypeMC.visible = true;
         this._mc1["txt"].text = FIGHT_TYPE_NAME_ARR[_loc2_ - 1] + "系主场";
         this._mc2["txt"].text = "对手：" + _loc3_;
         this._mc1.alpha = 0;
         this._mc2.alpha = 0;
         TweenGroup.allTo([this._mc1,this._mc2],2,{"alpha":1});
         this._leaveBtn.mouseEnabled = false;
         this._leaveBtn.alpha = 0.5;
         var _loc5_:UserInfo;
         (_loc5_ = new UserInfo()).nick = _loc3_;
         var _loc6_:uint = 0;
         while(_loc6_ < _loc4_.length)
         {
            _loc7_ = new PeopleItemInfo(_loc4_[_loc6_]);
            _loc5_.clothes.push(_loc7_);
            _loc6_++;
         }
         this._enemyMode = new BasePeoleModel(_loc5_);
         this._enemyMode.mouseChildren = false;
         this._enemyMode.mouseEnabled = false;
         this._enemyMode.x = 650;
         this._enemyMode.y = 320;
         this._enemyMode.direction = Direction.LEFT;
         depthLevel.addChild(this._enemyMode);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,this.onFightClose);
         EventManager.addEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,this.onFightOverUI);
         _fightCloseFunc = this.onFightClose;
         _fightCloseUIFunc = this.onFightOverUI;
      }
      
      private function onLeaveBtnClick(param1:MouseEvent) : void
      {
         this.switchOutMap();
      }
      
      private function switchOutMap() : void
      {
         _applicationStatus = 1;
         if(_isMatch)
         {
            SocketConnection.addCmdListener(CommandID.INVITE_FIGHT_CANCEL,this.onCancelFight);
            SocketConnection.send(CommandID.INVITE_FIGHT_CANCEL);
            return;
         }
         MapManager.changeMap(405);
      }
      
      private function onCancelFight(param1:SocketEvent) : void
      {
         _isMatch = false;
         SocketConnection.removeCmdListener(CommandID.INVITE_FIGHT_CANCEL,this.onCancelFight);
         MapManager.changeMap(405);
      }
      
      private function onFightClose(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,this.onFightClose);
         var _loc2_:FightOverInfo = param1.dataObj.data as FightOverInfo;
         if(!_challegenBoss)
         {
            if(_loc2_.winnerID == MainManager.actorID)
            {
               _status = 1;
            }
            else
            {
               _status = 2;
            }
         }
         else if(_loc2_.winnerID == MainManager.actorID)
         {
            _status = 3;
         }
         else
         {
            _status = 4;
         }
      }
      
      private function onFightOverUI(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,this.onFightOverUI);
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         switch(_status)
         {
            case 1:
               this.fightBoss();
               break;
            case 2:
               this.onLeaveBtnClick(null);
               break;
            case 3:
            case 4:
               ToolBarController.panel.hide();
               LevelManager.iconLevel.visible = false;
               this.onLeaveBtnClick(null);
         }
      }
      
      private function fightBoss() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,function(param1:SocketEvent):void
         {
            var data:ByteArray;
            var count:uint;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.ITEM_LIST,arguments.callee);
            data = e.data as ByteArray;
            data.position = 0;
            count = data.readUnsignedInt();
            if(count == 16)
            {
               Alert.show("挑战元素精灵会消耗每种属性的元素残片各一个，确定要挑战吗？",function():void
               {
                  _bossInMC.x = 380;
                  _bossInMC.y = 110;
                  LevelManager.closeMouseEvent();
                  LevelManager.appLevel.addChild(_bossInMC);
                  _bossInMC.addEventListener(Event.ENTER_FRAME,function():void
                  {
                     if(_bossInMC.currentFrame == _bossInMC.totalFrames)
                     {
                        _bossInMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                        LevelManager.openMouseEvent();
                        _bossInMC.stop();
                        _fightTypeMC.gotoAndStop(17);
                        PetFightModel.enemyName = "诺姆";
                        PetFightModel.type = PetFightModel.FIGHT_WITH_BOSS;
                        PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
                        PetFightModel.mode = PetFightModel.MULTI_MODE;
                        FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,onFightClose);
                        EventManager.addEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onFightOverUI);
                        _fightCloseFunc = onFightClose;
                        _fightCloseUIFunc = onFightOverUI;
                        _challegenBoss = true;
                        SocketConnection.send(CommandID.ELEMNET_FIGHT_BOSS);
                     }
                  });
                  _bossInMC.gotoAndPlay(1);
               },function():void
               {
                  onLeaveBtnClick(null);
               });
            }
            else
            {
               onLeaveBtnClick(null);
            }
         });
         SocketConnection.send(CommandID.ITEM_LIST,400687,400702,2);
      }
      
      override public function destroy() : void
      {
         var _loc1_:Boolean = false;
         if(_applicationStatus == 1)
         {
            _loc1_ = Boolean(EventManager.hasEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN));
            SocketConnection.removeCmdListener(CommandID.INVITE_FIGHT_CANCEL,this.onCancelFight);
            SocketConnection.removeCmdListener(CommandID.ELEMNET_FIGHT_SIGNUP,this.onSignUp);
            if(_fightCloseFunc != null)
            {
               FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,_fightCloseFunc);
               EventManager.removeEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,_fightCloseUIFunc);
            }
            EventManager.removeEventListener("ElementFightStart",this.onElementFightStart);
            PetFightModel.type = 0;
            _applicationStatus = -1;
         }
         this.restroeResource();
         EventManager.removeEventListener(RobotEvent.CREATED_MAP_USER,this.onMapUser);
         if(this._enemyMode)
         {
            this._enemyMode.destroy();
            this._enemyMode = null;
         }
      }
   }
}
