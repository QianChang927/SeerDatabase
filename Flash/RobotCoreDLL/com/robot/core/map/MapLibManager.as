package com.robot.core.map
{
   import flash.display.Bitmap;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.media.Sound;
   import org.taomee.utils.Utils;
   
   public class MapLibManager
   {
       
      
      private var _loader:Loader;
      
      public function MapLibManager()
      {
         super();
      }
      
      public function setup(param1:Loader) : void
      {
         this._loader = param1;
      }
      
      public function destroy() : void
      {
         this._loader = null;
      }
      
      public function get loader() : Loader
      {
         return this._loader;
      }
      
      public function getClass(param1:String) : Class
      {
         return Utils.getClassFromLoader(param1,this._loader);
      }
      
      public function getMovieClip(param1:String) : MovieClip
      {
         return Utils.getMovieClipFromLoader(param1,this._loader);
      }
      
      public function getSprite(param1:String) : Sprite
      {
         return Utils.getSpriteFromLoader(param1,this._loader);
      }
      
      public function getButton(param1:String) : SimpleButton
      {
         return Utils.getSimpleButtonFromLoader(param1,this._loader);
      }
      
      public function getBitmap(param1:String) : Bitmap
      {
         return new Bitmap(Utils.getBitmapDataFromLoader(param1,this._loader));
      }
      
      public function getSound(param1:String) : Sound
      {
         return Utils.getSoundFromLoader(param1,this._loader);
      }
   }
}
