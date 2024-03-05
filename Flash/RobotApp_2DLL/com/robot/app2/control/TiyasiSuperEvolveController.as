package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import org.taomee.manager.ResourceManager;
   
   public class TiyasiSuperEvolveController
   {
      
      private static var _petX:Array = [380,480,580];
      
      private static var _petY:Array = [320,250,370];
      
      private static var _sp1:Sprite = new Sprite();
      
      private static var _sp2:Sprite = new Sprite();
      
      private static var _sp3:Sprite = new Sprite();
       
      
      public function TiyasiSuperEvolveController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChangeHandler);
      }
      
      private static function onMapChangeHandler(param1:MapEvent) : void
      {
         var _loc2_:uint = uint(MapManager.currentMap.id);
         if(_loc2_ == 10781)
         {
            loadPet();
         }
      }
      
      private static function loadPet() : void
      {
         ResourceManager.getResource(ClientConfig.getPetSwfPath(746),function(param1:DisplayObject):void
         {
            var _loc2_:MovieClip = param1 as MovieClip;
            _sp1.x = _petX[0];
            _sp1.y = _petY[0];
            var _loc3_:TextField = new TextField();
            _loc3_.text = "基鲁";
            _loc3_.x = -12;
            _loc3_.y = 5;
            _loc3_.selectable = false;
            _sp1.addChild(_loc2_);
            _sp1.addChild(_loc3_);
            _sp1.buttonMode = true;
            _sp1.addEventListener(MouseEvent.CLICK,petClickHandler);
            LevelManager.mapLevel.addChild(_sp1);
         },"pet");
         ResourceManager.getResource(ClientConfig.getPetSwfPath(746),function(param1:DisplayObject):void
         {
            var _loc2_:MovieClip = param1 as MovieClip;
            _sp2.x = _petX[1];
            _sp2.y = _petY[1];
            var _loc3_:TextField = new TextField();
            _loc3_.text = "基鲁";
            _loc3_.x = -12;
            _loc3_.y = 5;
            _loc3_.selectable = false;
            _sp2.addChild(_loc2_);
            _sp2.addChild(_loc3_);
            _sp2.buttonMode = true;
            _sp2.addEventListener(MouseEvent.CLICK,petClickHandler);
            LevelManager.mapLevel.addChild(_sp2);
         },"pet");
         ResourceManager.getResource(ClientConfig.getPetSwfPath(746),function(param1:DisplayObject):void
         {
            var _loc2_:MovieClip = param1 as MovieClip;
            _sp3.x = _petX[2];
            _sp3.y = _petY[2];
            var _loc3_:TextField = new TextField();
            _loc3_.text = "基鲁";
            _loc3_.x = -12;
            _loc3_.y = 5;
            _loc3_.selectable = false;
            _sp3.addChild(_loc2_);
            _sp3.addChild(_loc3_);
            _sp3.buttonMode = true;
            _sp3.addEventListener(MouseEvent.CLICK,petClickHandler);
            LevelManager.mapLevel.addChild(_sp3);
         },"pet");
      }
      
      private static function petClickHandler(param1:MouseEvent) : void
      {
         FightManager.fightNoMapBoss("",2935);
      }
      
      public static function destroy() : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChangeHandler);
         if(_sp1)
         {
            _sp1.removeEventListener(MouseEvent.CLICK,petClickHandler);
         }
         if(_sp2)
         {
            _sp2.removeEventListener(MouseEvent.CLICK,petClickHandler);
         }
         if(_sp3)
         {
            _sp3.removeEventListener(MouseEvent.CLICK,petClickHandler);
         }
      }
   }
}
