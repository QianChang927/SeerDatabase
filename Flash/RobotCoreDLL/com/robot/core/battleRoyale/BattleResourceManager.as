package com.robot.core.battleRoyale
{
   import flash.display.Loader;
   import flash.display.MovieClip;
   import org.taomee.utils.Utils;
   
   public class BattleResourceManager
   {
      
      private static var _loader:Loader;
       
      
      public function BattleResourceManager()
      {
         super();
      }
      
      public static function set loader(param1:Loader) : void
      {
         _loader = param1;
      }
      
      public static function getMovieClip(param1:String) : MovieClip
      {
         return Utils.getMovieClipFromLoader(param1,_loader);
      }
   }
}
