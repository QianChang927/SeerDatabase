package com.robot.core.battleRoyale
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.SpriteModel;
   import com.robot.core.mode.spriteInteractive.ISpriteInteractiveAction;
   import flash.display.Bitmap;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.ui.Mouse;
   import flash.utils.Timer;
   import org.taomee.utils.DisplayUtil;
   
   public class RoyaleInteractiveAction implements ISpriteInteractiveAction
   {
       
      
      private var _model:SpriteModel;
      
      private var _mouseIcon:Sprite;
      
      private var _isCanShoot:Boolean;
      
      private var _timer:Timer;
      
      private var _isSelf:Boolean;
      
      public function RoyaleInteractiveAction(param1:SpriteModel)
      {
         super();
         if(!BasePeoleModel(param1).info)
         {
            this._isSelf = false;
         }
         else if(BasePeoleModel(param1).info.userID == MainManager.actorID)
         {
            this._isSelf = true;
         }
         else
         {
            this._isSelf = false;
         }
         this._model = param1;
         this._mouseIcon = new Sprite();
         var _loc2_:MovieClip = MapManager.currentMap.libManager.getMovieClip("pk_mouseIcon_shot");
         var _loc3_:Bitmap = DisplayUtil.copyDisplayAsBmp(_loc2_);
         this._mouseIcon.graphics.beginFill(0,0);
         this._mouseIcon.graphics.drawRect(_loc3_.x,_loc3_.y,_loc3_.width,_loc3_.height);
         this._mouseIcon.addChild(_loc3_);
         this._mouseIcon.mouseChildren = false;
         this._mouseIcon.mouseEnabled = false;
         this._isCanShoot = true;
         this._timer = new Timer(2000,1);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         this._isCanShoot = true;
      }
      
      public function click() : void
      {
         var _loc1_:Point = null;
         var _loc2_:uint = 0;
         if(this._isCanShoot && !this._isSelf)
         {
            _loc1_ = new Point(LevelManager.mapLevel.mouseX,LevelManager.mapLevel.mouseY);
            _loc2_ = Point.distance(MainManager.actorModel.pos,_loc1_);
            BattleFightManager.shootOther(BasePeoleModel(this._model).info.userID,_loc2_);
            this._isCanShoot = false;
            this._timer.start();
         }
      }
      
      public function destroy() : void
      {
         DisplayUtil.removeForParent(this._mouseIcon);
         this._mouseIcon = null;
         this._model = null;
         Mouse.show();
         this._timer.stop();
         this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         this._timer = null;
      }
      
      public function rollOut() : void
      {
         if(!this._isSelf)
         {
            DisplayUtil.removeForParent(this._mouseIcon);
            Mouse.show();
         }
      }
      
      public function rollOver() : void
      {
         if(!this._isSelf)
         {
            MainManager.getStage().addChild(this._mouseIcon);
            this._mouseIcon.startDrag(true);
            Mouse.hide();
         }
      }
   }
}
