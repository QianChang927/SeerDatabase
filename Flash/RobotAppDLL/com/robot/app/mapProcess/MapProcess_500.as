package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.fightLevel.FightLevelModel;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.fightLevel.SuccessFightRequestInfo;
   import com.robot.app.fightNote.FightTypeInfo;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.component.control.MLoadPane;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_500 extends BaseMapProcess
   {
      
      public static var isSuperFight:Boolean;
      
      private static var _show_tip:Boolean;
       
      
      private var b1:Boolean = true;
      
      private var _allBossA:Array;
      
      private var _curIndex:uint = 0;
      
      private var _bossContainer:Sprite;
      
      private var _allPointA:Array;
      
      private var tt:uint;
      
      private var nextBossId:Array;
      
      public function MapProcess_500()
      {
         this._allBossA = [];
         this._allPointA = [new Point(410,296),new Point(490,296),new Point(570,296),new Point(570,296),new Point(570,296),new Point(570,296)];
         super();
      }
      
      override protected function init() : void
      {
         this.b1 = true;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
         this.upDatahandler();
         btnLevel.addEventListener(MouseEvent.CLICK,this.onClickButton);
         this.updateScore();
      }
      
      private function updateScore() : void
      {
         KTool.showScore(btnLevel["num_left"],int(MainManager.actorInfo.curStage / 20) + 1);
         ItemManager.updateItems([1707511],function():void
         {
            KTool.showScore(btnLevel["num_right"],ItemManager.getNumByID(1707511));
         });
      }
      
      protected function onClickButton(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "btn_exit":
               this.onClickDoor();
               break;
            case "btn_bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "btn_cure":
               PetManager.cureAll();
               break;
            case "btn_vip":
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
         }
      }
      
      private function upDatahandler() : void
      {
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc1_:uint = uint(FightLevelModel.getCurLevel + 1);
         if(_loc1_ > FightLevelModel.maxLevel)
         {
            _loc2_ = FightLevelModel.maxLevel;
         }
         else
         {
            _loc2_ = _loc1_;
         }
         if(_loc1_ < 10)
         {
            conLevel["lvmc2"].gotoAndStop(_loc1_ + 2);
            animatorLevel["floorMc"].gotoAndStop(1);
         }
         else if(_loc1_ == 100)
         {
            conLevel["lvmc1"].gotoAndStop(3);
            conLevel["lvmc2"].gotoAndStop(2);
            conLevel["lvmc3"].gotoAndStop(2);
         }
         else
         {
            if(_loc1_ % 10 == 0)
            {
               animatorLevel["floorMc"].gotoAndStop(int(_loc1_ / 10));
            }
            else
            {
               animatorLevel["floorMc"].gotoAndStop(int(_loc1_ / 10) + 1);
            }
            conLevel["lvmc2"].gotoAndStop(1);
            _loc3_ = uint(String(_loc1_).slice(0,1));
            _loc4_ = uint(String(_loc1_).slice(1,2));
            conLevel["lvmc1"].gotoAndStop(_loc3_ + 2);
            conLevel["lvmc3"].gotoAndStop(_loc4_ + 2);
         }
         ToolTipManager.add(conLevel["door_0"],"离开");
         ToolTipManager.add(conLevel["mosterMc"],"精灵背包");
         conLevel["mosterMc"].addEventListener(MouseEvent.CLICK,this.onMonsterHandler);
         this._allBossA = [];
         this._curIndex = 0;
         this._bossContainer = new Sprite();
         this._bossContainer.y = 240;
         this._bossContainer.buttonMode = true;
         this._bossContainer.addEventListener(MouseEvent.CLICK,this.onFightBtnClickHandler);
         MapManager.currentMap.depthLevel.addChild(this._bossContainer);
         this.loadOtherBoss();
      }
      
      private function loadOtherBoss() : void
      {
         var _loc1_:Array = FightLevelModel.getBossId;
         this.loadBoss(FightLevelModel.getBossId[0]);
      }
      
      private function loadBoss(param1:uint) : void
      {
         var _loc2_:String = String(ClientConfig.getPetSwfPath(param1));
         ResourceManager.getResource(_loc2_,this.loadComHandler,"pet");
      }
      
      private function loadComHandler(param1:DisplayObject) : void
      {
         var mc:MovieClip = null;
         var dis:DisplayObject = param1;
         mc = dis as MovieClip;
         if(mc)
         {
            mc.gotoAndStop("down");
            mc.addEventListener(Event.ENTER_FRAME,function():void
            {
               var _loc2_:MovieClip = mc.getChildAt(0) as MovieClip;
               if(_loc2_)
               {
                  _loc2_.gotoAndStop(1);
                  mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               }
            });
            this._allBossA.push(mc);
            if(this._allBossA.length < FightLevelModel.getBossId.length)
            {
               this.loadBoss(FightLevelModel.getBossId[this._allBossA.length]);
            }
            else
            {
               this.addAllBossToMap();
            }
         }
      }
      
      private function addAllBossToMap() : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:MLoadPane = null;
         while(this._bossContainer.numChildren > 0)
         {
            this._bossContainer.removeChildAt(0);
         }
         var _loc1_:int = 0;
         while(_loc1_ < this._allBossA.length)
         {
            _loc2_ = this._allBossA[_loc1_] as MovieClip;
            _loc3_ = new MLoadPane(_loc2_);
            if(_loc2_.width > _loc2_.height)
            {
               _loc3_.fitType = MLoadPane.FIT_WIDTH;
            }
            else
            {
               _loc3_.fitType = MLoadPane.FIT_HEIGHT;
            }
            _loc3_.setSizeWH(80,80);
            this._bossContainer.addChild(_loc3_);
            _loc3_.x = (80 + 20) * _loc1_;
            ToolTipManager.add(this._allBossA[_loc1_],PetXMLInfo.getName(FightLevelModel.getBossId[_loc1_]));
            _loc1_++;
         }
         this._bossContainer.x = (960 - this._bossContainer.width) / 2;
      }
      
      private function onFightBtnClickHandler(param1:MouseEvent = null) : void
      {
         var ix:int = 0;
         var e:MouseEvent = param1;
         this.tt = setTimeout(this.timeOutHandler,2000);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,this.handle);
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
         FightManager.info = new FightTypeInfo();
         FightManager.info.type = 2;
         if(isSuperFight)
         {
            SocketConnection.addCmdListener(CommandID.SUPER_TOWER_FIGHT_BOSS,this.onSuccessHandler);
            SocketConnection.send(CommandID.SUPER_TOWER_FIGHT_BOSS);
         }
         else
         {
            SocketConnection.addCmdListener(CommandID.START_FIGHT_LEVEL,this.onSuccessHandler);
            SocketConnection.send(CommandID.START_FIGHT_LEVEL);
         }
         _show_tip = false;
         ix = -1;
         switch(MainManager.actorInfo.curStage)
         {
            case 19:
               ix = 0;
               break;
            case 39:
               ix = 1;
               break;
            case 59:
               ix = 2;
               break;
            case 79:
               ix = 3;
         }
         if(ix > -1)
         {
            KTool.getMultiValue([11747],function(param1:Array):void
            {
               if(KTool.getByte(param1[0],ix) >= 1)
               {
                  _show_tip = true;
               }
            });
         }
      }
      
      private function timeOutHandler() : void
      {
         clearTimeout(this.tt);
      }
      
      private function onSuccessHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SUPER_TOWER_FIGHT_BOSS,this.onSuccessHandler);
         SocketConnection.removeCmdListener(CommandID.START_FIGHT_LEVEL,this.onSuccessHandler);
         var _loc2_:SuccessFightRequestInfo = param1.data as SuccessFightRequestInfo;
         this.nextBossId = _loc2_.getBossId;
      }
      
      private function handle(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,this.handle);
         EventManager.dispatchEvent(new DynamicEvent(Event.COMPLETE,6));
         var _loc2_:FightOverInfo = param1.dataObj["data"];
         if(_loc2_.reason == 5)
         {
            this.b1 = true;
            return;
         }
         if(_loc2_.winnerID == MainManager.actorInfo.userID)
         {
            this.b1 = true;
            ++MainManager.actorInfo.curStage;
            if(_show_tip)
            {
               Alarm.show("今日该层输出梦幻宝石次数已达上限，明日再通过该层可继续获得梦幻宝石！");
            }
            if(MainManager.actorInfo.curStage > FightLevelModel.maxLevel)
            {
               this.leaveFight();
            }
            else
            {
               FightLevelModel.setBossId = this.nextBossId;
               FightLevelModel.setCurLevel = MainManager.actorInfo.curStage;
               MapManager.changeMap(500);
            }
         }
         else
         {
            this.b1 = false;
            this.leaveFight();
         }
      }
      
      private function onLeaveFightHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.LEAVE_FIGHT_LEVEL,this.onLeaveFightHandler);
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         if(this.b1 == false)
         {
            LevelManager.iconLevel.addChild(Alarm.show("很遗憾，刚才的战斗你没有获胜，你需要重新开始挑战，不要气馁，再接再厉。"));
         }
         else
         {
            this.b1 = false;
         }
      }
      
      public function onClickDoor() : void
      {
         Alert.show("确认离开勇者之塔吗？",this.leaveFight);
      }
      
      public function leaveFight() : void
      {
         SocketConnection.addCmdListener(CommandID.LEAVE_FIGHT_LEVEL,this.onLeaveFightHandler);
         SocketConnection.send(CommandID.LEAVE_FIGHT_LEVEL);
      }
      
      private function onMonsterHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      override public function destroy() : void
      {
         var _loc1_:int = 0;
         ToolTipManager.remove(conLevel["mosterMc"]);
         conLevel["mosterMc"].removeEventListener(MouseEvent.CLICK,this.onMonsterHandler);
         ToolTipManager.remove(conLevel["door_0"]);
         btnLevel.removeEventListener(MouseEvent.CLICK,this.onClickButton);
         if(this._allBossA)
         {
            _loc1_ = 0;
            while(_loc1_ < this._allBossA.length)
            {
               ToolTipManager.remove(this._allBossA[_loc1_]);
               DisplayUtil.removeForParent(this._allBossA[_loc1_]);
               this._allBossA[_loc1_] = null;
               _loc1_++;
            }
            this._allBossA = null;
         }
         if(this._bossContainer)
         {
            this._bossContainer.removeEventListener(MouseEvent.CLICK,this.onFightBtnClickHandler);
            DisplayUtil.removeForParent(this._bossContainer);
            this._bossContainer = null;
         }
      }
   }
}
