package com.robot.app.petRoayle
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.spriteInteractive.ISpriteInteractiveAction;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.ui.Mouse;
   import org.taomee.utils.DisplayUtil;
   
   public class RoyaleInteractiveAction implements ISpriteInteractiveAction
   {
       
      
      private var _mode:BasePeoleModel;
      
      private var _mouseIcon:Sprite;
      
      private var _isSelf:Boolean;
      
      public function RoyaleInteractiveAction(param1:BasePeoleModel)
      {
         super();
         this._mode = param1;
         if(this._mode.info.userID == MainManager.actorID)
         {
            this._isSelf = true;
         }
         else
         {
            this._isSelf = false;
         }
         this._mouseIcon = new Sprite();
         var _loc2_:MovieClip = MapManager.currentMap.libManager.getMovieClip("FightMouseIcon");
         this._mouseIcon.addChild(_loc2_);
         this._mouseIcon.mouseChildren = false;
         this._mouseIcon.mouseEnabled = false;
      }
      
      public function rollOver() : void
      {
         if(!this._isSelf)
         {
            if(this.isTargetOk())
            {
               MainManager.getStage().addChild(this._mouseIcon);
               this._mouseIcon.startDrag(true);
               Mouse.hide();
            }
         }
      }
      
      public function rollOut() : void
      {
         if(!this._isSelf)
         {
            DisplayUtil.removeForParent(this._mouseIcon);
            Mouse.show();
         }
      }
      
      public function click() : void
      {
         if(!this._isSelf)
         {
            if(this.isTargetOk())
            {
               PetRoayleMapController.roayleManager.changeTarget(MainManager.actorID,this._mode.info.userID,true);
            }
         }
      }
      
      private function isTargetOk() : Boolean
      {
         var _loc1_:PetRoayleInfo = PetRoayleMapController.roayleManager.getInfoByID(MainManager.actorID);
         var _loc2_:PetRoayleInfo = PetRoayleMapController.roayleManager.getInfoByID(this._mode.info.userID);
         var _loc3_:Boolean = false;
         if(_loc1_.status <= 2 && _loc2_.status <= 2)
         {
            _loc3_ = true;
         }
         return _loc3_;
      }
      
      public function destroy() : void
      {
         DisplayUtil.removeForParent(this._mouseIcon);
         this._mode = null;
         this._mouseIcon = null;
         Mouse.show();
      }
   }
}
