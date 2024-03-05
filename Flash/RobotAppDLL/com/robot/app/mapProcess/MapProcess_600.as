package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.fightNote.FightTypeInfo;
   import com.robot.app.freshFightLevel.FightLevelModel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alert;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_600 extends BaseMapProcess
   {
       
      
      private var b1:Boolean = true;
      
      private var _allBossA:Array;
      
      private var _curIndex:uint = 0;
      
      private var _bossContainer:Sprite;
      
      private var _allPointA:Array;
      
      private var _mapID:int;
      
      private const BOSS:Array = [1219,2321,910,1819,1651,1792,1831,1665,1782];
      
      private var _curLevel:int;
      
      private var _maxLevel:int = 9;
      
      private var tt:uint;
      
      private var nextBossId:Array;
      
      public function MapProcess_600()
      {
         this._allBossA = [];
         this._allPointA = [new Point(410,296),new Point(490,296),new Point(570,296)];
         super();
      }
      
      override protected function init() : void
      {
         this.b1 = true;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
         ToolBarController.showOrHideAllUser(false);
         this.update();
      }
      
      private function onFightOver(param1:PetFightEvent) : void
      {
      }
      
      private function update(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([13090],function(param1:Array):void
         {
            _curLevel = param1[0];
            FightLevelModel.setCurLevel = _curLevel;
            upDatahandler();
            if(null != func)
            {
               func();
            }
         });
      }
      
      private function upDatahandler() : void
      {
         conLevel["tens_mc"].visible = false;
         if(this._curLevel < 9)
         {
            conLevel["units_mc"].gotoAndStop(this._curLevel + 3);
         }
         else
         {
            conLevel["units_mc"].gotoAndStop(11);
         }
         ToolTipManager.add(conLevel["door_0"],"离开");
         ToolTipManager.add(conLevel["mosterMc"],"精灵背包");
         conLevel["mosterMc"].addEventListener(MouseEvent.CLICK,this.onMonsterHandler);
         this._allBossA = [];
         this._curIndex = 0;
         this.loadBoss(FightLevelModel.getBossId[0]);
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
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
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
         var _loc2_:Number = NaN;
         this._bossContainer = new Sprite();
         var _loc1_:int = 0;
         while(_loc1_ < this._allBossA.length)
         {
            this._bossContainer.addChild(this._allBossA[_loc1_] as MovieClip);
            _loc2_ = this._allBossA[_loc1_].width * 1.5;
            this._allBossA[_loc1_].width *= 1.6;
            this._allBossA[_loc1_].height *= 1.6;
            ToolTipManager.add(this._allBossA[_loc1_],PetXMLInfo.getName(FightLevelModel.getBossId[_loc1_]));
            _loc1_++;
         }
         if(this._allBossA.length == 1)
         {
            this._allBossA[0].x = this._allPointA[1].x;
            this._allBossA[0].y = this._allPointA[1].y;
            this._allBossA[0].scaleX *= 1.2;
            this._allBossA[0].scaleY *= 1.2;
         }
         MapManager.currentMap.depthLevel.addChild(this._bossContainer);
         this._bossContainer.buttonMode = true;
         this._bossContainer.addEventListener(MouseEvent.CLICK,this.onFightBtnClickHandler);
      }
      
      private function onFightBtnClickHandler(param1:MouseEvent) : void
      {
         var mc:Sprite = null;
         var e:MouseEvent = param1;
         mc = e.currentTarget as Sprite;
         mc.mouseEnabled = mc.mouseEnabled = false;
         mc.buttonMode = false;
         mc.removeEventListener(MouseEvent.CLICK,this.onFightBtnClickHandler);
         this.tt = setTimeout(function():void
         {
            clearTimeout(tt);
            if(mc)
            {
               mc.mouseChildren = mc.mouseEnabled = true;
               mc.buttonMode = true;
               mc.addEventListener(MouseEvent.CLICK,onFightBtnClickHandler);
            }
         },2000);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,this.handle);
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
         FightManager.info = new FightTypeInfo();
         FightManager.info.type = 2;
         FightManager.fightNoMapBoss("",1167 + FightLevelModel.getCurLevel);
         this.nextBossId = [this.getNextBoss()];
      }
      
      private function getNextBoss() : int
      {
         if(FightLevelModel.getCurLevel >= 8)
         {
            return this.BOSS[8];
         }
         return this.BOSS[FightLevelModel.getCurLevel + 1];
      }
      
      private function timeOutHandler() : void
      {
         clearTimeout(this.tt);
      }
      
      private function handle(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,this.handle);
         var _loc2_:FightOverInfo = param1.dataObj["data"];
         if(_loc2_.reason == 5)
         {
            this.b1 = true;
            return;
         }
         if(_loc2_.winnerID == MainManager.actorInfo.userID)
         {
            this.b1 = true;
            if(this._curLevel + 1 >= this._maxLevel)
            {
               this.leaveFight();
            }
            else
            {
               FightLevelModel.setBossId = this.nextBossId;
               FightLevelModel.setCurLevel = this._curLevel;
               MapManager.changeMap(600);
            }
         }
         else
         {
            this.b1 = false;
            this.leaveFight();
         }
         EventManager.dispatchEvent(new DynamicEvent(Event.COMPLETE,10));
      }
      
      public function onClickDoor() : void
      {
         Alert.show("确认离开试炼之塔吗？",this.leaveFight);
      }
      
      public function leaveFight(param1:int = 108) : void
      {
         this._mapID = param1;
         if(Boolean(NewSeerTaskController.isNewVersionSeer) && !NewSeerTaskController.isNewSeerTaskDone)
         {
            MapManager.changeMap(10021);
         }
         else
         {
            MapManager.changeMap(this._mapID);
         }
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
      }
   }
}
