package com.robot.app.control.clothEffect
{
   import com.robot.app.bag.BagPanel;
   import com.robot.core.event.PeopleActionEvent;
   import com.robot.core.manager.MainManager;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.net.URLRequest;
   
   public class ClothEffectController
   {
      
      private static var _cls:Class = ClothEffectController__cls;
      
      private static var _xml:XML;
      
      private static var _loader:Loader;
      
      private static var _effect:MovieClip;
       
      
      public function ClothEffectController()
      {
         super();
      }
      
      public static function setup() : void
      {
         _xml = XML(new _cls());
         MainManager.actorModel.addEventListener(PeopleActionEvent.CLOTH_CHANGE,onClothChange);
      }
      
      private static function onClothChange(param1:Event) : void
      {
         var _loc2_:XML = null;
         var _loc3_:Array = null;
         var _loc4_:Boolean = false;
         var _loc5_:Boolean = false;
         for each(_loc2_ in _xml.children())
         {
            _loc3_ = String(_loc2_.@cloth).split("|");
            if(_loc4_ = checkCloth(_loc3_,BagPanel.oldCloths))
            {
               return;
            }
            _loc5_ = checkCloth(_loc3_,BagPanel.newCloths);
            if(!_loc4_ && _loc5_)
            {
               showEffect(_loc2_.@path);
               break;
            }
         }
      }
      
      private static function checkCloth(param1:Array, param2:Array) : Boolean
      {
         var _loc3_:int = 0;
         for each(_loc3_ in param1)
         {
            if(param2.indexOf(_loc3_) == -1)
            {
               return false;
            }
         }
         return true;
      }
      
      private static function showEffect(param1:String) : void
      {
         if(!_effect)
         {
            if(!_loader)
            {
               _loader = new Loader();
               _loader.contentLoaderInfo.addEventListener(Event.COMPLETE,onLoadShineComplete);
            }
            _loader.load(new URLRequest(param1));
         }
      }
      
      private static function onLoadShineComplete(param1:Event) : void
      {
         var _loc2_:Class = _loader.contentLoaderInfo.applicationDomain.getDefinition("item") as Class;
         _effect = new _loc2_() as MovieClip;
         _effect.addEventListener(Event.ENTER_FRAME,onEnterFrame);
         _effect.gotoAndPlay(1);
         MainManager.actorModel.addChild(_effect);
      }
      
      private static function onEnterFrame(param1:Event) : void
      {
         if(_effect.currentFrame == _effect.totalFrames)
         {
            MainManager.actorModel.removeChild(_effect);
            _effect.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
            _effect = null;
         }
      }
   }
}
