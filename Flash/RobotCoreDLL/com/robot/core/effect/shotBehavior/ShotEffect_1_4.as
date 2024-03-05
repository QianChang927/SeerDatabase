package com.robot.core.effect.shotBehavior
{
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ShotBehaviorManager;
   import com.robot.core.mode.PKArmModel;
   import com.robot.core.mode.SpriteModel;
   import flash.display.MovieClip;
   import flash.geom.Rectangle;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class ShotEffect_1_4 implements IShotBehavior
   {
       
      
      private var shotMC:MovieClip;
      
      private var bombMC:MovieClip;
      
      private var people:SpriteModel;
      
      private var armModel:PKArmModel;
      
      public function ShotEffect_1_4()
      {
         super();
         this.shotMC = ShotBehaviorManager.getMovieClip("shotEffect_1_4");
         this.bombMC = ShotBehaviorManager.getMovieClip("boomEffect_1_4");
         this.shotMC.gotoAndStop(1);
         this.bombMC.gotoAndStop(1);
         this.shotMC.x = -32;
         this.shotMC.y = -172;
      }
      
      public function shot(param1:PKArmModel, param2:SpriteModel) : void
      {
         var rect:Rectangle;
         var t:uint = 0;
         var armModel:PKArmModel = param1;
         var sprite:SpriteModel = param2;
         this.armModel = armModel;
         this.people = sprite;
         rect = armModel.getRect(armModel);
         if(armModel.isMirror)
         {
            this.shotMC.scaleX = -1;
         }
         else
         {
            this.shotMC.scaleX = 1;
         }
         armModel.container.addChild(this.shotMC);
         this.shotMC.gotoAndPlay(2);
         t = setTimeout(function():void
         {
            showBoom();
            clearTimeout(t);
         },500);
         setTimeout(this.showBoom,500);
      }
      
      private function showBoom() : void
      {
         DisplayUtil.removeForParent(this.shotMC);
         this.bombMC.x = this.people.x;
         this.bombMC.y = this.people.y;
         MapManager.currentMap.depthLevel.addChild(this.bombMC);
         this.bombMC.gotoAndPlay(2);
      }
      
      public function destroy() : void
      {
         DisplayUtil.removeForParent(this.shotMC);
         DisplayUtil.removeForParent(this.bombMC);
         this.shotMC = null;
         this.bombMC = null;
         this.people = null;
         this.armModel = null;
      }
   }
}
