package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_1856;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   
   public class MapProcess_10397 extends BaseMapProcess
   {
       
      
      private var _animationContainer:MovieClip;
      
      public function MapProcess_10397()
      {
         super();
      }
      
      override protected function init() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         LevelManager.closeMouseEvent();
         this._animationContainer = conLevel["animationContainer"] as MovieClip;
         this.getAnimationAndRender(1);
         TaskController_1856.miniScene4();
      }
      
      override public function destroy() : void
      {
         this.hideAnimationContainerAllChildren();
         super.destroy();
         this._animationContainer = null;
      }
      
      protected function hideAnimationContainerAllChildren() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < this._animationContainer.numChildren)
         {
            this._animationContainer.getChildAt(_loc1_).visible = false;
            MovieClip(this._animationContainer.getChildAt(_loc1_)).gotoAndStop(1);
            _loc1_++;
         }
      }
      
      protected function getAnimationAndRender(param1:uint) : MovieClip
      {
         this.hideAnimationContainerAllChildren();
         var _loc2_:MovieClip = this._animationContainer["animation" + String(param1)] as MovieClip;
         _loc2_.visible = true;
         return _loc2_;
      }
   }
}