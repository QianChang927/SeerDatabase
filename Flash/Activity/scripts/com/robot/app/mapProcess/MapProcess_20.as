package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.task.taskscollection.Task1232;
   import com.robot.app.task.taskscollection.Task572;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   
   public class MapProcess_20 extends BaseMapProcess
   {
       
      
      private var kgBtn:SimpleButton;
      
      private var stoneMC:MovieClip;
      
      private var smMC:MovieClip;
      
      private var gasMC:MovieClip;
      
      private var type:uint;
      
      private var t1:uint;
      
      private var t2:uint;
      
      public function MapProcess_20()
      {
         super();
      }
      
      override public function destroy() : void
      {
         Task1232.destroy();
         Task572.destory();
         this.kgBtn = null;
         this.stoneMC = null;
         this.smMC = null;
         this.gasMC = null;
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86056314);
         this.kgBtn = conLevel["kgBtn"];
         this.stoneMC = conLevel["stoneMC"];
         this.smMC = btnLevel["smMC"];
         this.gasMC = conLevel["gasEffectMC"];
         this.gasMC.gotoAndStop(3);
         Task572.initTask_20(this);
         Task1232.initForMap20(this);
      }
      
      private function onShuita(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86056312);
         ModuleManager.showModule(ClientConfig.getAppModule("RareDancerXiaoTaPanel"));
      }
      
      private function clickKg(param1:MouseEvent) : void
      {
         this.t1 = setTimeout(this.hitStone,500);
      }
      
      private function hitStone() : void
      {
         clearTimeout(this.t1);
         try
         {
            this.kgBtn.mouseEnabled = false;
            this.stoneMC.addFrameScript(7,function():void
            {
               stoneMC.addFrameScript(7,null);
               smMC.gotoAndPlay("eatStone");
               t2 = setTimeout(resetBtn,3000);
            });
            this.stoneMC.play();
         }
         catch(e:Error)
         {
         }
      }
      
      private function resetBtn() : void
      {
         clearTimeout(this.t2);
         if(this.kgBtn)
         {
            this.kgBtn.mouseEnabled = true;
            this.stoneMC.gotoAndStop(1);
         }
      }
      
      public function eatMan() : void
      {
         var _loc1_:Sprite = null;
         if(this.smMC.currentFrame < 48)
         {
            LevelManager.closeMouseEvent();
            MainManager.actorModel.stop();
            _loc1_ = MainManager.actorModel.sprite;
            TweenLite.to(_loc1_,1,{
               "x":275,
               "y":261,
               "alpha":0.8,
               "rotation":360,
               "onComplete":this.onEatMan
            });
         }
      }
      
      private function onEatMan() : void
      {
         var sprite:Sprite = MainManager.actorModel.sprite;
         sprite.x = 66;
         sprite.y = 84;
         sprite.rotation = 0;
         this.smMC.addChild(sprite);
         this.smMC.gotoAndPlay("eatPlayer");
         this.smMC.addFrameScript(46,function():void
         {
            resetMan();
            smMC.addFrameScript(46,null);
         });
      }
      
      private function resetMan() : void
      {
         var _loc1_:Sprite = MainManager.actorModel.sprite;
         _loc1_.x = 275;
         _loc1_.y = 261;
         depthLevel.addChild(_loc1_);
         TweenLite.to(_loc1_,1.5,{
            "x":744,
            "y":383,
            "alpha":1,
            "rotation":360 * 4,
            "onComplete":this.onResetMan
         });
      }
      
      private function onResetMan() : void
      {
         LevelManager.openMouseEvent();
      }
      
      public function exploitGas() : void
      {
         EnergyController.exploit(4);
      }
   }
}
