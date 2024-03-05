package com.robot.core.ui.alert
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObjectContainer;
   import flash.display.Sprite;
   import flash.events.DataEvent;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.EventManager;
   
   public class PetBagIconAlarm
   {
      
      private static var _sprite:Sprite;
      
      private static var _moduleNum:int;
       
      
      public function PetBagIconAlarm()
      {
         super();
      }
      
      public static function show(param1:String, param2:Function = null, param3:Boolean = false, param4:Boolean = false, param5:Boolean = false, param6:DisplayObjectContainer = null) : Sprite
      {
         var bag:Sprite = null;
         var str:String = param1;
         var applyFun:Function = param2;
         var isColor:Boolean = param3;
         var isMouse:Boolean = param4;
         var isNONO:Boolean = param5;
         var parent:DisplayObjectContainer = param6;
         _sprite = Alarm.show(str,applyFun,isColor,isMouse,isNONO,parent);
         bag = UIManager.getSprite("PetBagIcon");
         bag.x = 294;
         bag.y = 177;
         bag.addEventListener(MouseEvent.CLICK,onClickPetBagIcon);
         _sprite.addChild(bag);
         ModuleManager.addEventListener(ModuleManager.MODEL_LOADED,onModuleLoad);
         ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,onCloseModule);
         _moduleNum = 0;
         EventManager.addEventListener(Event.CLOSE,function(param1:Event):void
         {
            if(_moduleNum > 0)
            {
               return;
            }
            EventManager.removeEventListener(Event.CLOSE,arguments.callee);
            bag.removeEventListener(MouseEvent.CLICK,onClickPetBagIcon);
            _sprite.removeChild(bag);
            bag = null;
            ModuleManager.removeListener(ModuleManager.MODEL_LOADED,onModuleLoad);
            ModuleManager.removeListener(ModuleManager.MODEL_CLOSE,onCloseModule);
         });
         return _sprite;
      }
      
      private static function onClickPetBagIcon(param1:MouseEvent) : void
      {
         if(param1.target.name == "bagBtn")
         {
            getDefinitionByName("com.robot.app.petbag.PetBagControllerNew").show();
         }
      }
      
      private static function onModuleLoad(param1:DataEvent) : void
      {
         ++_moduleNum;
         openMouseEnabled();
      }
      
      private static function onCloseModule(param1:DataEvent) : void
      {
         --_moduleNum;
         if(_moduleNum == 0)
         {
            closeMouseEnabled();
         }
      }
      
      private static function openMouseEnabled() : void
      {
         LevelManager.openMouseEvent();
         LevelManager.appLevel.mouseEnabled = true;
         LevelManager.appLevel.mouseChildren = true;
         _sprite.visible = false;
      }
      
      private static function closeMouseEnabled() : void
      {
         LevelManager.closeMouseEvent();
         LevelManager.appLevel.mouseEnabled = false;
         LevelManager.appLevel.mouseChildren = false;
         _sprite.visible = true;
      }
   }
}
