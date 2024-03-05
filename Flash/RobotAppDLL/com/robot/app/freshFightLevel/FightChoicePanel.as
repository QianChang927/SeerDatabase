package com.robot.app.freshFightLevel
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.NonoEvent;
   import com.robot.core.group.manager.GroupManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.temp.TempInfo;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.RectangleMask;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import org.taomee.events.DynamicEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class FightChoicePanel
   {
       
      
      private var uiLoader:MCLoader;
      
      private var app:ApplicationDomain;
      
      private var panel:Sprite;
      
      private var b1:Boolean = false;
      
      private var level:int;
      
      private const BOSS:Array = [1219,2321,910,1819,1651,1792,1831,1665,1782];
      
      private const urlStr:String = ClientConfig.getResPath("freshFightLevel/fightLevel.swf");
      
      private var currentBossId:Array;
      
      public function FightChoicePanel()
      {
         super();
      }
      
      public function show() : void
      {
         TempInfo.returnMapID = MapManager.currentMap.id;
         this.loaderUI(this.urlStr);
      }
      
      private function loaderUI(param1:String) : void
      {
         this.uiLoader = new MCLoader(param1,LevelManager.appLevel,1,"正在进入试炼之塔");
         this.uiLoader.addEventListener(MCLoadEvent.SUCCESS,this.onLoadUISuccessHandler);
         this.uiLoader.doLoad();
      }
      
      private function onLoadUISuccessHandler(param1:MCLoadEvent) : void
      {
         var event:MCLoadEvent = param1;
         this.app = event.getApplicationDomain();
         this.panel = new (this.app.getDefinition("UI_FightPanel") as Class)() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
         LevelManager.appLevel.addChild(this.panel);
         KTool.getMultiValue([13090],function(param1:Array):void
         {
            level = param1[0];
            setLevel(level);
         });
         this.addEvent();
         RectangleMask.dispatchEvent(new DynamicEvent(RectangleMask.GUIDE_NEXT,210));
      }
      
      private function addEvent() : void
      {
         this.panel["close"].addEventListener(MouseEvent.CLICK,this.onClose);
         this.panel["fight"].addEventListener(MouseEvent.CLICK,this.onFight);
         this.panel["exp"].addEventListener(MouseEvent.CLICK,this.onExp);
      }
      
      private function removeEvent() : void
      {
         this.panel["close"].removeEventListener(MouseEvent.CLICK,this.onClose);
         this.panel["fight"].removeEventListener(MouseEvent.CLICK,this.onFight);
         this.panel["exp"].removeEventListener(MouseEvent.CLICK,this.onExp);
      }
      
      private function onExp(param1:MouseEvent) : void
      {
         this.destroy();
         ModuleManager.showModule(ClientConfig.getAppModule("ExpAdmPanel"));
      }
      
      private function onClose(param1:MouseEvent) : void
      {
         this.destroy();
      }
      
      private function onFight(param1:MouseEvent) : void
      {
         if(this.level >= 9)
         {
            Alarm.show("你已经到达最高层,不能再挑战了");
            return;
         }
         this.choiceFight(this.level);
      }
      
      public function choiceFight(param1:uint) : void
      {
         var _loc2_:int = 0;
         if(Boolean(GroupManager.isInGroup) && Boolean(MainManager.actorInfo.groupInfo))
         {
            Alarm.show("不支持组队站模式，请先退出小队");
            return;
         }
         NonoManager.addEventListener(NonoEvent.HOOM,this.onHomeHandler);
         NonoManager.nonoGoHome();
         if(this.getLevel() > 9)
         {
            _loc2_ = int(this.BOSS[8]);
         }
         else
         {
            _loc2_ = int(this.BOSS[this.getLevel()]);
         }
         FightLevelModel.setBossId = [_loc2_];
         FightLevelModel.setCurLevel = this.getLevel();
         MainManager.actorInfo.curFreshStage = this.getLevel();
         MapManager.changeMap(600);
      }
      
      private function onHomeHandler(param1:NonoEvent) : void
      {
         NonoManager.removeEventListener(NonoEvent.HOOM,this.onHomeHandler);
      }
      
      public function destroy() : void
      {
         this.removeEvent();
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         DisplayUtil.removeForParent(this.panel);
         this.panel = null;
         LevelManager.openMouseEvent();
      }
      
      private function setLevel(param1:int) : void
      {
         if(param1 < 0)
         {
            param1 = 0;
         }
         if(param1 > 9)
         {
            param1 = 9;
         }
         this.panel["floor"].gotoAndStop(param1 + 1);
         this.panel["tip1"].visible = false;
         this.panel["tip2"].visible = false;
         this.panel["tip3"].visible = false;
         if(param1 == 0)
         {
            this.panel["fight"].gotoAndStop(1);
            this.panel["fight"].mouseEnabled = true;
            this.panel["fight"].mouseChildren = true;
         }
         else if(param1 >= 9)
         {
            this.panel["fight"].gotoAndStop(3);
            this.panel["fight"].mouseEnabled = false;
            this.panel["fight"].mouseChildren = false;
            this.panel["tip3"].visible = true;
         }
         else
         {
            this.panel["fight"].gotoAndStop(2);
            this.panel["fight"].mouseEnabled = true;
            this.panel["fight"].mouseChildren = true;
         }
         if(param1 >= 3)
         {
            this.panel["tip1"].visible = true;
         }
         if(param1 >= 6)
         {
            this.panel["tip2"].visible = true;
         }
      }
      
      private function getLevel() : int
      {
         if(this.level < 0)
         {
            return 0;
         }
         if(this.level > 9)
         {
            return 9;
         }
         return this.level;
      }
   }
}
