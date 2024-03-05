package com.robot.app.fightLevel
{
   import com.robot.app.mapProcess.MapProcess_500;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class FightChoicePanel
   {
       
      
      private var uiLoader:MCLoader;
      
      private var app:ApplicationDomain;
      
      private var panel:Sprite;
      
      private var _petArr:Array;
      
      private var _maxLevel:uint;
      
      private var levelArr:Array;
      
      private const urlStr:String = ClientConfig.getResPath("fightLevel/fightLevel.swf");
      
      private var currentBossId:Array;
      
      public function FightChoicePanel()
      {
         this.levelArr = [1,11,21,31,41,51,61,71];
         super();
      }
      
      public function show() : void
      {
         this.loaderUI(this.urlStr);
      }
      
      private function loaderUI(param1:String) : void
      {
         this.uiLoader = new MCLoader(param1,LevelManager.appLevel,1,"正在进入勇者之塔....");
         this.uiLoader.addEventListener(MCLoadEvent.SUCCESS,this.onLoadUISuccessHandler);
         this.uiLoader.doLoad();
      }
      
      private function onLoadUISuccessHandler(param1:MCLoadEvent) : void
      {
         this.app = param1.getApplicationDomain();
         this.panel = new (this.app.getDefinition("UI_FightPanel") as Class)() as Sprite;
         UserInfoManager.upDateMoreInfo(MainManager.actorInfo,this.upDatahandler);
      }
      
      private function addEvent() : void
      {
         var _loc1_:uint = 0;
         this.panel["bgMc"].buttonMode = true;
         this.panel["bgMc"].addEventListener(MouseEvent.MOUSE_DOWN,this.onBgDownHandler);
         this.panel["closeBtn"].addEventListener(MouseEvent.CLICK,this.onCloseBtnClickHandler);
         this.panel["goOnBtn"].addEventListener(MouseEvent.CLICK,this.onGoonBtnClickHandler);
         this.panel["startFightBtn"].addEventListener(MouseEvent.CLICK,this.onStartFightClickHandler);
         if(this.PetLevelCertificate())
         {
            this.showLadderControl();
         }
         else
         {
            _loc1_ = 0;
            while(_loc1_ <= 7)
            {
               (this.panel["item" + _loc1_] as MovieClip).mouseChildren = false;
               (this.panel["item" + _loc1_] as MovieClip).mouseEnabled = false;
               (this.panel["item" + _loc1_] as MovieClip).filters = [ColorFilter.setGrayscale()];
               _loc1_++;
            }
            this.panel["introduce_Icon"].visible = false;
         }
      }
      
      private function removeEvent() : void
      {
         this.panel["bgMc"].removeEventListener(MouseEvent.MOUSE_DOWN,this.onBgDownHandler);
         this.panel["closeBtn"].removeEventListener(MouseEvent.CLICK,this.onCloseBtnClickHandler);
         this.panel["goOnBtn"].removeEventListener(MouseEvent.CLICK,this.onGoonBtnClickHandler);
         this.panel["startFightBtn"].removeEventListener(MouseEvent.CLICK,this.onStartFightClickHandler);
      }
      
      private function onItemOver(param1:MouseEvent) : void
      {
         var _loc2_:String = (param1.target as MovieClip).name;
         var _loc3_:uint = uint(_loc2_.charAt(4));
         (this.panel["item" + _loc3_] as MovieClip).gotoAndStop(2);
      }
      
      private function onItemOut(param1:MouseEvent) : void
      {
         var _loc2_:String = (param1.target as MovieClip).name;
         var _loc3_:uint = uint(_loc2_.charAt(4));
         (this.panel["item" + _loc3_] as MovieClip).gotoAndStop(1);
      }
      
      private function onItemClick(param1:MouseEvent) : void
      {
         var _loc2_:String = (param1.target as MovieClip).name;
         var _loc3_:uint = uint(_loc2_.charAt(4));
         this.choiceFight(_loc3_ + 1);
      }
      
      private function onSuperFight(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,84806432);
         this.destroy();
         ModuleManager.showModule(ClientConfig.getAppModule("SuperFightTower"),"正在加载....");
      }
      
      private function onBgDownHandler(param1:MouseEvent) : void
      {
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_UP,this.onUpHandler);
         this.panel.startDrag();
      }
      
      private function onUpHandler(param1:MouseEvent) : void
      {
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onUpHandler);
         this.panel.stopDrag();
      }
      
      private function onCloseBtnClickHandler(param1:MouseEvent) : void
      {
         this.destroy();
      }
      
      private function onGoonBtnClickHandler(param1:MouseEvent) : void
      {
         if(MainManager.actorInfo.curStage > FightLevelModel.maxLevel)
         {
            Alarm.show("你已经到达最高层，不能再挑战了！");
            return;
         }
         this.choiceFight(0);
      }
      
      private function onStartFightClickHandler(param1:MouseEvent) : void
      {
         this.choiceFight(0);
      }
      
      private function showOrHideList(param1:Boolean) : void
      {
         var _loc2_:uint = 0;
         while(_loc2_ <= 7)
         {
            this.panel["item" + _loc2_].visible = param1;
            _loc2_++;
         }
         this.panel["introduce_Icon"].visible = param1;
         this.panel["new_mc"].visible = param1;
      }
      
      private function upDatahandler() : void
      {
         this._petArr = PetManager.getBagMap().concat();
         LevelManager.appLevel.addChild(this.panel);
         DisplayUtil.align(this.panel,null,AlignType.MIDDLE_CENTER);
         this.showOrHideList(false);
         AnimateManager.playMcAnimate(this.panel["mc"],1,"",function():void
         {
            DisplayUtil.removeForParent(panel["mc"]);
            showOrHideList(true);
            addEvent();
         });
         if(MainManager.actorInfo.maxStage == 0)
         {
            this.panel["goOnBtn"].visible = false;
            this.panel["startFightBtn"].y -= 20;
         }
         if(MainManager.actorInfo.curStage >= 1 && MainManager.actorInfo.maxStage > 0)
         {
            this.panel["startFightBtn"].visible = false;
            this.panel["goOnBtn"].y += 20;
         }
         if(MainManager.actorInfo.curStage > FightLevelModel.maxLevel)
         {
            this.panel["goOnBtn"].visible = false;
         }
         this.setLevel(MainManager.actorInfo.curStage);
      }
      
      private function PetLevelCertificate() : Boolean
      {
         var _loc2_:uint = 0;
         var _loc1_:uint = this._petArr.length;
         if(_loc1_ == 0)
         {
            Alarm.show("你的背包中还没有精灵，不能挑战战斗阶梯！");
            return false;
         }
         _loc2_ = 0;
         while(_loc2_ < _loc1_)
         {
            if((this._petArr[_loc2_] as PetListInfo).level >= this._maxLevel)
            {
               this._maxLevel = (this._petArr[_loc2_] as PetListInfo).level;
            }
            _loc2_++;
         }
         if(this._maxLevel <= 30)
         {
            Alarm.show("你背包中没有31级以上的精灵，不能挑战战斗阶梯！");
            return false;
         }
         return true;
      }
      
      private function showLadderControl() : void
      {
         this.panel["introduce_Icon"].x = 517;
         var _loc1_:uint = this.introduceLevel() > 7 ? 7 : this.introduceLevel();
         this.panel["introduce_Icon"].y = this.panel["item" + _loc1_].y - 8;
         var _loc2_:uint = 0;
         while(_loc2_ <= 7)
         {
            this.panel["item" + _loc2_].buttonMode = true;
            this.panel["item" + _loc2_].gotoAndStop(1);
            this.panel["item" + _loc2_].addEventListener(MouseEvent.MOUSE_OVER,this.onItemOver);
            this.panel["item" + _loc2_].addEventListener(MouseEvent.MOUSE_OUT,this.onItemOut);
            if(this.levelArr[_loc2_] <= MainManager.actorInfo.maxStage + 1)
            {
               (this.panel["item" + _loc2_] as MovieClip).filters = [];
               this.panel["item" + _loc2_].addEventListener(MouseEvent.CLICK,this.onItemClick);
            }
            else
            {
               (this.panel["item" + _loc2_] as MovieClip).filters = [ColorFilter.setGrayscale()];
            }
            _loc2_++;
         }
      }
      
      private function introduceLevel() : uint
      {
         var _loc3_:uint = 0;
         var _loc1_:uint = this._petArr.length;
         var _loc2_:uint = 0;
         if(this._maxLevel < 51 && this._maxLevel >= 31)
         {
            return 1;
         }
         if(this._maxLevel < 71 && this._maxLevel >= 51)
         {
            return 2;
         }
         if(this._maxLevel < 91 && this._maxLevel >= 71)
         {
            return 3;
         }
         if(this._maxLevel < 100 && this._maxLevel >= 91)
         {
            return 4;
         }
         _loc3_ = 0;
         while(_loc3_ < _loc1_)
         {
            if((this._petArr[_loc3_] as PetListInfo).level == 100)
            {
               _loc2_++;
            }
            _loc3_++;
         }
         if(_loc2_ == 1)
         {
            return 4;
         }
         if(_loc2_ == 2)
         {
            return 5;
         }
         if(_loc2_ == 3)
         {
            return 6;
         }
         if(_loc2_ == 4)
         {
            return 7;
         }
         return 8;
      }
      
      public function choiceFight(param1:uint) : void
      {
         SocketConnection.addCmdListener(CommandID.CHOICE_FIGHT_LEVEL,this.onChoiceSuccessHandler);
         SocketConnection.send(CommandID.CHOICE_FIGHT_LEVEL,param1);
      }
      
      private function onChoiceSuccessHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.CHOICE_FIGHT_LEVEL,this.onChoiceSuccessHandler);
         var _loc2_:ChoiceLevelRequestInfo = param1.data as ChoiceLevelRequestInfo;
         this.currentBossId = _loc2_.getBossId;
         this.destroy();
         FightLevelModel.setBossId = this.currentBossId;
         FightLevelModel.setCurLevel = _loc2_.getLevel;
         MainManager.actorInfo.curStage = _loc2_.getLevel;
         MapProcess_500.isSuperFight = false;
         MapManager.changeMap(500);
      }
      
      private function hideListPanel() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ <= 7)
         {
            this.panel["item" + _loc1_].buttonMode = true;
            this.panel["item" + _loc1_].removeEventListener(MouseEvent.MOUSE_OVER,this.onItemOver);
            this.panel["item" + _loc1_].removeEventListener(MouseEvent.MOUSE_OUT,this.onItemOut);
            this.panel["item" + _loc1_].removeEventListener(MouseEvent.CLICK,this.onItemClick);
            _loc1_++;
         }
         DisplayUtil.removeForParent(this.panel);
         this.panel = null;
      }
      
      public function destroy() : void
      {
         this.removeEvent();
         this.hideListPanel();
         DisplayUtil.removeForParent(this.panel);
         this.panel = null;
         LevelManager.openMouseEvent();
      }
      
      private function setLevel(param1:int) : void
      {
         KTool.showScore(this.panel["lvMC"],param1);
      }
   }
}
