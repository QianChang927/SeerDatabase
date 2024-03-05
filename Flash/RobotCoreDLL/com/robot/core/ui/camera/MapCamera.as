package com.robot.core.ui.camera
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.DragManager;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapCamera extends Sprite
   {
      
      public static const SAVE_PICTURE:String = "save_picture";
       
      
      private var maskBg:Sprite;
      
      private var mainUI:MovieClip;
      
      private var closeBtn:SimpleButton;
      
      private var getBtn:SimpleButton;
      
      private var cancelBtn:SimpleButton;
      
      private var saveBtn:SimpleButton;
      
      private var shotMC:MovieClip;
      
      private var cameraShot:Sprite;
      
      public function MapCamera()
      {
         super();
         this.maskBg = this.creatMaskBg();
         this.addChild(this.maskBg);
         this.shotMC = UIManager.getMovieClip("CameraShotMC");
         var _loc1_:Bitmap = this.creatBitmap(MapManager.currentMap.root);
         _loc1_.mask = this.shotMC;
         this.addChild(_loc1_);
         this.addChild(this.shotMC);
         this.shotMC.x = 288;
         this.shotMC.y = 150;
         DragManager.add(this.shotMC,this.shotMC);
         this.mainUI = UIManager.getMovieClip("CameraMC");
         this.getBtn = this.mainUI["getBtn"];
         this.cancelBtn = this.mainUI["cancelBtn"];
         this.saveBtn = this.mainUI["saveBtn"];
         this.saveBtn.mouseEnabled = false;
         this.saveBtn.filters = [ColorFilter.setGrayscale()];
         this.closeBtn = this.mainUI["closeBtn"];
         this.closeBtn.visible = false;
         this.mainUI.x = 290;
         this.addChild(this.mainUI);
         LevelManager.toolsLevel.visible = false;
         LevelManager.iconLevel.visible = false;
         this.addEvent();
      }
      
      private function addEvent() : void
      {
         this.getBtn.addEventListener(MouseEvent.CLICK,this.onGetPic);
         this.closeBtn.addEventListener(MouseEvent.CLICK,this.onClose);
         this.cancelBtn.addEventListener(MouseEvent.CLICK,this.onCancel);
         this.saveBtn.addEventListener(MouseEvent.CLICK,this.onSave);
      }
      
      private function removeEvent() : void
      {
         this.getBtn.removeEventListener(MouseEvent.CLICK,this.onGetPic);
         this.closeBtn.removeEventListener(MouseEvent.CLICK,this.onClose);
         this.cancelBtn.removeEventListener(MouseEvent.CLICK,this.onCancel);
         this.saveBtn.removeEventListener(MouseEvent.CLICK,this.onSave);
      }
      
      private function onGetPic(param1:MouseEvent) : void
      {
         this.saveBtn.mouseEnabled = true;
         this.saveBtn.filters = [];
         this.getBtn.mouseEnabled = false;
         this.getBtn.filters = [ColorFilter.setGrayscale()];
      }
      
      private function onClose(param1:MouseEvent = null) : void
      {
         this.removeEvent();
         DisplayUtil.removeForParent(this.mainUI);
         DisplayUtil.removeForParent(this);
         LevelManager.toolsLevel.visible = true;
         LevelManager.iconLevel.visible = true;
      }
      
      private function onCancel(param1:MouseEvent) : void
      {
         this.saveBtn.mouseEnabled = false;
         this.saveBtn.filters = [ColorFilter.setGrayscale()];
         this.getBtn.mouseEnabled = true;
         this.getBtn.filters = [];
      }
      
      private function onSave(param1:MouseEvent) : void
      {
         EventManager.dispatchEvent(new DynamicEvent(MapCamera.SAVE_PICTURE));
         this.onClose();
      }
      
      private function creatBitmap(param1:DisplayObjectContainer) : Bitmap
      {
         var _loc2_:Bitmap = new Bitmap();
         var _loc3_:BitmapData = new BitmapData(960,560);
         _loc3_.draw(param1);
         _loc2_.bitmapData = _loc3_;
         return _loc2_;
      }
      
      private function creatMaskBg() : Sprite
      {
         var _loc1_:Sprite = new Sprite();
         _loc1_.graphics.beginFill(0,0.6);
         _loc1_.graphics.drawRect(0,0,960,560);
         _loc1_.graphics.endFill();
         return _loc1_;
      }
   }
}
