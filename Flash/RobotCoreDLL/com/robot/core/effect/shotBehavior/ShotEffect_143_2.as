package com.robot.core.effect.shotBehavior
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ShotBehaviorManager;
   import com.robot.core.mode.PKArmModel;
   import com.robot.core.mode.SpriteModel;
   import flash.display.MovieClip;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class ShotEffect_143_2 implements IShotBehavior
   {
       
      
      private var modelMC:MovieClip;
      
      private var gunMC:MovieClip;
      
      private var bombMC:MovieClip;
      
      private var people:SpriteModel;
      
      private var armModel:PKArmModel;
      
      public function ShotEffect_143_2()
      {
         super();
         this.modelMC = ShotBehaviorManager.getMovieClip("shotEffect_143_2");
         this.bombMC = ShotBehaviorManager.getMovieClip("boomEffect_143_2");
         this.gunMC = ShotBehaviorManager.getMovieClip("gunEffect_143_2");
         this.modelMC["mc_1"].gotoAndStop(1);
         this.gunMC.gotoAndStop(1);
         this.bombMC.gotoAndStop(1);
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
            this.modelMC.x = -rect.x;
            this.modelMC.scaleX = -1;
         }
         else
         {
            this.modelMC.x = rect.x;
            this.modelMC.scaleX = 1;
         }
         this.modelMC.y = rect.y;
         armModel.container.addChild(this.modelMC);
         armModel.hideBmp();
         this.modelMC["mc_1"].gotoAndPlay(2);
         t = setTimeout(function():void
         {
            showGun();
            clearTimeout(t);
         },900);
         DebugTrace.show("armmodel ------------>",this.modelMC.x,this.modelMC.y);
      }
      
      private function showGun() : void
      {
         var t:uint = 0;
         var p:Point = this.people.localToGlobal(new Point());
         if(this.armModel.isMirror)
         {
            this.gunMC.x = p.x - 200;
            this.gunMC.scaleX = -1;
         }
         else
         {
            this.gunMC.x = p.x + 200;
            this.gunMC.scaleX = 1;
         }
         this.gunMC.y = p.y - 200;
         LevelManager.toolsLevel.addChild(this.gunMC);
         this.gunMC.gotoAndPlay(2);
         t = setTimeout(function():void
         {
            showBoom();
            clearTimeout(t);
         },1900);
      }
      
      private function showBoom() : void
      {
         this.armModel.showBmp();
         DisplayUtil.removeForParent(this.modelMC);
         DisplayUtil.removeForParent(this.gunMC);
         this.bombMC.x = this.people.x;
         this.bombMC.y = this.people.y;
         MapManager.currentMap.depthLevel.addChild(this.bombMC);
         this.bombMC.gotoAndPlay(2);
      }
      
      public function destroy() : void
      {
         DisplayUtil.removeForParent(this.modelMC);
         DisplayUtil.removeForParent(this.gunMC);
         DisplayUtil.removeForParent(this.bombMC);
         this.modelMC = null;
         this.gunMC = null;
         this.bombMC = null;
         this.people = null;
         this.armModel = null;
      }
   }
}
