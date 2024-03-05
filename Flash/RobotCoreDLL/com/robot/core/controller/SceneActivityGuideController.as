package com.robot.core.controller
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   
   public class SceneActivityGuideController
   {
      
      private static var _instance:com.robot.core.controller.SceneActivityGuideController;
      
      public static var inGuide:Boolean;
       
      
      private var mask:MovieClip;
      
      private var step:int;
      
      private var totalstep:int;
      
      private var playfull:Boolean;
      
      private var movienum:int;
      
      private const TOTALNUM:int = 2;
      
      public function SceneActivityGuideController()
      {
         super();
      }
      
      public static function getinstance() : com.robot.core.controller.SceneActivityGuideController
      {
         _instance = _instance || new com.robot.core.controller.SceneActivityGuideController();
         return _instance;
      }
      
      public static function needguide() : Boolean
      {
         var _loc1_:Boolean = false;
         return !BitBuffSetClass.getState(23626) && !NewSeerTaskController.isNewSeer && !getDefinitionByName("com.robot.app2.control.SeerReturnNewController").IsReturn;
      }
      
      private function onModuleLoad(param1:*) : void
      {
         if(ModuleManager.hasModule(ClientConfig.getAppModule("SceneActivityPanel")))
         {
            if(this.movienum == 1 && this.step == this.totalstep)
            {
               this.nextstep();
            }
         }
      }
      
      private function nextstep() : void
      {
         ++this.step;
         this.mask.gotoAndStop(this.step);
         if(this.step > this.totalstep)
         {
            this.destroy();
         }
         else
         {
            this.showmovie();
         }
      }
      
      public function showmask(param1:int = 0, param2:Boolean = false) : void
      {
         var idx:int = param1;
         var full:Boolean = param2;
         ModuleManager.addEventListener(ModuleManager.MODEL_SHOW,this.onModuleLoad);
         this.playfull = full;
         this.movienum = idx;
         inGuide = true;
         LevelManager.root.mouseChildren = LevelManager.root.mouseEnabled = false;
         ResourceManager.getResource(ClientConfig.getResPath("appRes/update/sceneactivity/mask" + this.movienum + ".swf"),function(param1:MovieClip):void
         {
            mask = param1;
            step = 1;
            totalstep = mask.totalFrames;
            mask.gotoAndStop(step);
            mask.x = 480;
            mask.y = 280;
            LevelManager.root.addChild(mask);
            mask.addEventListener(MouseEvent.CLICK,clickHandle);
            showmovie();
         });
      }
      
      private function showmovie() : void
      {
         LevelManager.root.mouseChildren = LevelManager.root.mouseEnabled = false;
         if(this.mask["mc2"])
         {
            this.mask["mc2"].visible = false;
            this.mask["mc2"].gotoAndStop(1);
         }
         if(this.mask["automovie"])
         {
            AnimateManager.playMcAnimate(this.mask["automovie"],1,"",function():void
            {
               LevelManager.root.mouseChildren = LevelManager.root.mouseEnabled = true;
            });
         }
         else
         {
            LevelManager.root.mouseChildren = LevelManager.root.mouseEnabled = true;
         }
      }
      
      private function clickHandle(param1:MouseEvent = null) : void
      {
         if(this.movienum == 1 && this.step == this.totalstep)
         {
            if(this.mask["mc2"])
            {
               this.mask["mc2"].visible = true;
               this.mask["mc2"].gotoAndPlay(1);
            }
         }
         else
         {
            this.nextstep();
         }
      }
      
      public function destroy() : void
      {
         inGuide = false;
         if(this.mask)
         {
            this.mask.removeEventListener(MouseEvent.CLICK,this.clickHandle);
            if(this.mask.parent)
            {
               this.mask.parent.removeChild(this.mask);
            }
            this.mask = null;
         }
         ModuleManager.removeListener(ModuleManager.MODEL_SHOW,this.onModuleLoad);
         if(this.playfull && this.movienum < this.TOTALNUM)
         {
            ++this.movienum;
            this.showmask(this.movienum,this.playfull);
         }
         else if(this.playfull && this.movienum >= this.TOTALNUM)
         {
            BitBuffSetClass.setState(23626,1);
         }
      }
   }
}
