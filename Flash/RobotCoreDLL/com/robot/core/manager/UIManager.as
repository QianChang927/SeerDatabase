package com.robot.core.manager
{
   import com.robot.core.config.xml.SkillXMLInfo;
   import flash.display.Bitmap;
   import flash.display.DisplayObject;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.media.Sound;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.Utils;
   
   public class UIManager
   {
      
      private static var _loader:Loader;
       
      
      public function UIManager()
      {
         super();
      }
      
      public static function setup(param1:Loader) : void
      {
         _loader = param1;
         EventManager.dispatchEvent(new Event("sbbug"));
      }
      
      public static function get loader() : Loader
      {
         return _loader;
      }
      
      public static function getClass(param1:String) : Class
      {
         return Utils.getClassFromLoader(param1,_loader);
      }
      
      public static function getDisplayObject(param1:String) : DisplayObject
      {
         return Utils.getDisplayObjectFromLoader(param1,_loader);
      }
      
      public static function getMovieClip(param1:String) : MovieClip
      {
         return Utils.getMovieClipFromLoader(param1,_loader);
      }
      
      public static function getSprite(param1:String) : Sprite
      {
         return Utils.getSpriteFromLoader(param1,_loader);
      }
      
      public static function getButton(param1:String) : SimpleButton
      {
         var sb:SimpleButton = null;
         var removeFromStage:Function = null;
         var spStr:String = null;
         var tip:String = null;
         var type:int = 0;
         var str:String = param1;
         removeFromStage = function(param1:Event):void
         {
            ToolTipManager.remove(sb);
         };
         sb = Utils.getSimpleButtonFromLoader(str,_loader);
         if(str.indexOf("Icon_PetType_") != -1)
         {
            spStr = String(str.split("_")[2]);
            if(spStr == "prop")
            {
               tip = "属性";
            }
            else
            {
               type = parseInt(spStr);
               tip = SkillXMLInfo.petTypeNameCN(type);
            }
            ToolTipManager.add(sb,tip);
            sb.addEventListener(Event.REMOVED_FROM_STAGE,removeFromStage);
         }
         return sb;
      }
      
      public static function getBitmap(param1:String) : Bitmap
      {
         return new Bitmap(Utils.getBitmapDataFromLoader(param1,_loader));
      }
      
      public static function getSound(param1:String) : Sound
      {
         return Utils.getSoundFromLoader(param1,_loader);
      }
      
      public static function hasDefinition(param1:String) : Boolean
      {
         return _loader.contentLoaderInfo.applicationDomain.hasDefinition(param1);
      }
   }
}
