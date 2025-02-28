package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.active.WalkerInFog;
   import com.robot.app.task.taskscollection.Task846;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.BlendMode;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   
   public class MapProcess_697 extends BaseMapProcess
   {
       
      
      private var crtState:int = 0;
      
      private var seerCircle:MovieClip;
      
      private var movingCircle:MovieClip;
      
      private var LightTimer:Timer;
      
      private var _walkerInFog:WalkerInFog;
      
      private var frogState:int = 0;
      
      public function MapProcess_697()
      {
         this.LightTimer = new Timer(10000);
         super();
      }
      
      override protected function init() : void
      {
         this.initCircle();
         this.initTimeController();
         this.getFlower(1).addEventListener(MouseEvent.CLICK,this.onFlower1Clicked);
         this.getFlower(2).addEventListener(MouseEvent.CLICK,this.onFlower2Clicked);
         this.getFlower(3).addEventListener(MouseEvent.CLICK,this.onFlower3Clicked);
         Task846.initForMap697(this);
         this._walkerInFog = new WalkerInFog(this);
         conLevel["ad"].addEventListener(MouseEvent.CLICK,this.onClickAD);
         conLevel["board"].addEventListener(MouseEvent.CLICK,this.onClickBoard);
      }
      
      private function initCircle() : void
      {
         this.seerCircle = MapManager.currentMap.libManager.getMovieClip("LightCircle");
         this.movingCircle = MapManager.currentMap.libManager.getMovieClip("MovingCircle");
         this.seerCircle.scaleX = 2;
         this.seerCircle.scaleY = 2;
         this.movingCircle.mouseChildren = this.movingCircle.mouseEnabled = this.seerCircle.mouseChildren = this.seerCircle.mouseEnabled = false;
         this.seerCircle.visible = false;
         topLevel["frog"].blendMode = BlendMode.LAYER;
         this.seerCircle.blendMode = BlendMode.ERASE;
         topLevel["frog"].addChild(this.seerCircle);
      }
      
      private function initTimeController() : void
      {
         this.LightTimer.addEventListener(TimerEvent.TIMER,this.prepareHideLight);
      }
      
      public function PauseLightTimer() : void
      {
         this.LightTimer.stop();
      }
      
      public function RestartLightTimer() : void
      {
         this.LightTimer.start();
      }
      
      private function onFlower1Clicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(165,205),function():void
         {
            switch(crtState)
            {
               case 0:
                  conLevel["guide1"].visible = false;
                  AnimateManager.playMcAnimate(getFlower(1),2,"mc",function():void
                  {
                     getFlower(1).gotoAndStop(1);
                     showLight();
                  });
                  break;
               case 1:
                  LightTimer.reset();
                  LightTimer.start();
            }
         });
      }
      
      private function onFlower2Clicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(365,370),function():void
         {
            conLevel["guide2"].visible = false;
            switch(frogState)
            {
               case 0:
                  PauseLightTimer();
                  AnimateManager.playMcAnimate(getFrog(1),0,"",function():void
                  {
                     NpcDialog.show(NPC.SEER,["哇！原来这里的晶盐花有驱散大雾的功效，简直太神奇了！看样子迷雾森林里的秘密不仅这些啊！"],["继续收集光亮之芯探索其他领域！"]);
                     LightTimer.reset();
                     LightTimer.start();
                  });
                  frogState = 1;
                  break;
               case 1:
               case 2:
                  switch(crtState)
                  {
                     case 0:
                        showLight();
                        break;
                     case 1:
                        LightTimer.reset();
                        LightTimer.start();
                  }
            }
         });
      }
      
      private function onFlower3Clicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(725,400),function():void
         {
            conLevel["guide3"].visible = false;
            switch(frogState)
            {
               case 1:
                  PauseLightTimer();
                  AnimateManager.playMcAnimate(getFrog(2),0,"",function():void
                  {
                     LightTimer.reset();
                     LightTimer.start();
                  });
                  frogState = 2;
                  break;
               case 0:
               case 2:
                  switch(crtState)
                  {
                     case 0:
                        showLight();
                        break;
                     case 1:
                        LightTimer.reset();
                        LightTimer.start();
                  }
            }
         });
      }
      
      private function showLight() : void
      {
         this.crtState = 1;
         topLevel.addChild(this.movingCircle);
         this.seerCircle.visible = true;
         this.movingCircle.x = this.seerCircle.x = MainManager.actorModel.pos.x - this.seerCircle.width * 0.5;
         this.movingCircle.y = this.seerCircle.y = MainManager.actorModel.pos.y - this.seerCircle.height * 0.5;
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.walkHandler);
         this.LightTimer.reset();
         this.LightTimer.start();
         Task846.checkStep3();
         typeLevel["frog1"].visible = false;
         typeLevel["frog2"].visible = false;
         MapManager.currentMap.makeMapArray();
      }
      
      private function hideLight() : void
      {
         this.crtState = 0;
         if(this.movingCircle.parent)
         {
            topLevel.removeChild(this.movingCircle);
         }
         this.seerCircle.visible = false;
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.walkHandler);
         switch(this.frogState)
         {
            case 0:
               typeLevel["frog1"].visible = true;
               typeLevel["frog2"].visible = true;
               break;
            case 1:
               typeLevel["frog2"].visible = true;
               break;
            case 2:
         }
         MapManager.currentMap.makeMapArray();
      }
      
      private function walkHandler(param1:RobotEvent) : void
      {
         if(Boolean(this.seerCircle) && Boolean(MainManager.actorModel.visible))
         {
            this.movingCircle.x = this.seerCircle.x = MainManager.actorModel.pos.x - this.seerCircle.width * 0.5;
            this.movingCircle.y = this.seerCircle.y = MainManager.actorModel.pos.y - this.seerCircle.height * 0.5;
         }
      }
      
      private function prepareHideLight(param1:TimerEvent) : void
      {
         var point:Point = null;
         var e:TimerEvent = param1;
         this.LightTimer.stop();
         this.LightTimer.reset();
         LevelManager.closeMouseEvent();
         switch(this.frogState)
         {
            case 0:
               point = new Point(210,200);
               break;
            case 1:
               point = new Point(350,415);
               break;
            case 2:
               this.hideLight();
               LevelManager.openMouseEvent();
               return;
         }
         MainManager.actorModel.moveAndAction(point,function():void
         {
            hideLight();
            LevelManager.openMouseEvent();
         });
      }
      
      public function resetFrog() : void
      {
         LevelManager.closeMouseEvent();
         MainManager.actorModel.moveAndAction(new Point(210,200),function():void
         {
            frogState = 0;
            getFrog(1).gotoAndStop(1);
            getFrog(2).gotoAndStop(1);
            typeLevel["frog1"].visible = true;
            typeLevel["frog2"].visible = true;
            MapManager.currentMap.makeMapArray();
            LevelManager.openMouseEvent();
         });
      }
      
      public function cleanHalfFrog() : void
      {
         this.frogState = 1;
         this.getFrog(1).gotoAndStop(this.getFrog(1).totalFrames);
         typeLevel["frog1"].visible = false;
         MapManager.currentMap.makeMapArray();
      }
      
      public function cleanFrog() : void
      {
         this.frogState = 2;
         this.getFrog(1).gotoAndStop(this.getFrog(1).totalFrames);
         this.getFrog(2).gotoAndStop(this.getFrog(2).totalFrames);
         typeLevel["frog1"].visible = false;
         typeLevel["frog2"].visible = false;
         MapManager.currentMap.makeMapArray();
      }
      
      private function getFrog(param1:int) : MovieClip
      {
         return topLevel["frog"]["frog" + param1];
      }
      
      private function getFlower(param1:int) : MovieClip
      {
         return conLevel["flower" + param1];
      }
      
      private function onClickAD(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("WalkerInFogBroadcast"),"正在打开面板....","每天下午： 14:00-16:00");
      }
      
      private function onClickBoard(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("WalkerInFogExchange"),"正在打开面板....");
      }
      
      override public function destroy() : void
      {
         conLevel["ad"].removeEventListener(MouseEvent.CLICK,this.onClickAD);
         conLevel["board"].removeEventListener(MouseEvent.CLICK,this.onClickBoard);
         this._walkerInFog.destroy();
         this._walkerInFog = null;
         Task846.destroy();
         this.hideLight();
         this.seerCircle = null;
         this.movingCircle = null;
         LevelManager.openMouseEvent();
         this.LightTimer.removeEventListener(TimerEvent.TIMER,this.prepareHideLight);
         this.LightTimer.stop();
         this.LightTimer = null;
         super.destroy();
      }
   }
}
