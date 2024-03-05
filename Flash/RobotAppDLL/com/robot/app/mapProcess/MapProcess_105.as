package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskscollection.Task1227;
   import com.robot.app.task.taskscollection.Task1597;
   import com.robot.app.task.taskscollection.Task735;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_105 extends BaseMapProcess
   {
       
      
      private var yoyoMC:MovieClip;
      
      private var isShow:Boolean = false;
      
      private var isCatch:Boolean = false;
      
      private var _forestGuide:MovieClip;
      
      private var clickArray:Array;
      
      private var clickMC:MovieClip;
      
      public function MapProcess_105()
      {
         this.clickArray = [];
         super();
      }
      
      override protected function init() : void
      {
         this.initNonoParty();
         this.yoyoMC = conLevel["yoyoMC"];
         if(TasksManager.getTaskStatus(23) != TasksManager.COMPLETE)
         {
            this.initNewPet();
         }
         conLevel["bridge"].mouseEnabled = false;
         conLevel["bridge"].mouseChildren = false;
         Task735.initTaskForMap105(this);
         Task1227.initForMap105(this);
         Task1597.initForMap105(this);
      }
      
      private function initNonoParty() : void
      {
         this._forestGuide = conLevel["forestGuide"];
         this._forestGuide.buttonMode = true;
         this._forestGuide.addEventListener(MouseEvent.MOUSE_OVER,this.onForestGuideOver);
         this._forestGuide.addEventListener(MouseEvent.MOUSE_OUT,this.onForestGuideOut);
         this._forestGuide.addEventListener(MouseEvent.CLICK,this.onForestGuideClick);
         ToolTipManager.add(this._forestGuide,"黑白森林");
      }
      
      private function onForestGuideOver(param1:MouseEvent) : void
      {
         animatorLevel["bubbling_mc_2"].gotoAndPlay(2);
         animatorLevel["bubbling_mc_1"].gotoAndStop(1);
      }
      
      private function onForestGuideOut(param1:MouseEvent) : void
      {
         animatorLevel["bubbling_mc_1"].gotoAndPlay(2);
         animatorLevel["bubbling_mc_2"].gotoAndStop(1);
      }
      
      private function onForestGuideClick(param1:MouseEvent) : void
      {
         MapManager.changeMap(407);
      }
      
      private function initNewPet() : void
      {
         var _loc1_:MovieClip = null;
         this.clickArray = [conLevel["seven"],conLevel["eight"],conLevel["nine"],conLevel["ten"]];
         for each(_loc1_ in this.clickArray)
         {
            _loc1_.buttonMode = true;
            _loc1_.addEventListener(MouseEvent.CLICK,this.clickMCHandler);
         }
      }
      
      private function clickMCHandler(param1:MouseEvent) : void
      {
         var t:uint = 0;
         var event:MouseEvent = param1;
         var mc:MovieClip = event.currentTarget as MovieClip;
         if(mc == this.clickMC || this.isShow || this.isCatch)
         {
            return;
         }
         this.clickMC = mc;
         if(Math.random() < 0.1)
         {
            this.yoyoMC.x = this.clickMC.x;
            this.yoyoMC.y = this.clickMC.y;
            conLevel["yoyoHit"].x = this.yoyoMC.x + 100;
            conLevel["yoyoHit"].y = this.yoyoMC.y + 20;
            this.yoyoMC["yoyoMC"].gotoAndStop(2);
            this.isShow = true;
            t = setTimeout(function():void
            {
               clearTimeout(t);
               if(yoyoMC)
               {
                  yoyoMC.y = -200;
                  yoyoMC["yoyoMC"].gotoAndStop(1);
               }
               isShow = false;
            },4000);
         }
      }
      
      public function fightYoyo() : void
      {
         if(this.isShow)
         {
            PetFightModel.defaultNpcID = 91;
            if(MapManager.currentMap.id == 105)
            {
               FightManager.fightWithBoss("悠悠");
            }
         }
      }
      
      public function changeScrene() : void
      {
         MapManager.changeMap(1);
      }
      
      private function initDilkeEvolution() : void
      {
         var _loc1_:MovieClip = btnLevel["mcDilkeEvolution"];
         _loc1_.buttonMode = true;
         _loc1_.addEventListener(MouseEvent.CLICK,this.onClickDilkeHandler);
      }
      
      protected function onClickDilkeHandler(param1:MouseEvent) : void
      {
      }
      
      override public function destroy() : void
      {
         this.yoyoMC = null;
         ToolTipManager.remove(this._forestGuide);
         this._forestGuide.removeEventListener(MouseEvent.MOUSE_OVER,this.onForestGuideOver);
         this._forestGuide.removeEventListener(MouseEvent.MOUSE_OUT,this.onForestGuideOut);
         this._forestGuide.removeEventListener(MouseEvent.CLICK,this.onForestGuideClick);
         this._forestGuide = null;
         Task735.destroy();
         Task1227.destroy();
         Task1597.destory();
      }
      
      public function hitMine() : void
      {
         EnergyController.exploit(9);
      }
   }
}
