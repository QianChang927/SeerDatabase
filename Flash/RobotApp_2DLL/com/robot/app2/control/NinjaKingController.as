package com.robot.app2.control
{
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.events.DataEvent;
   
   public class NinjaKingController
   {
      
      private static var mapobj:String;
       
      
      public function NinjaKingController()
      {
         super();
      }
      
      public static function addArrow(param1:String) : void
      {
         mapobj = param1;
         ModuleManager.addEventListener(ModuleManager.MODEL_OPEN,onOpenModule);
         var _loc2_:DisplayObject = MapManager.currentMap.depthLevel.getChildByName(param1);
         CommonUI.addYellowArrow(MapManager.currentMap.depthLevel,_loc2_.x - 15,_loc2_.y - 120);
      }
      
      private static function onOpenModule(param1:DataEvent) : void
      {
         var _loc2_:Array = param1.data.split("/");
         var _loc3_:String = String((_loc2_[_loc2_.length - 1] as String).split(".")[0]);
         var _loc4_:String;
         var _loc5_:Array = (_loc4_ = String(MapObjectControl.getBtnClickByName(mapobj).content)).split("/");
         var _loc6_:String = String(_loc5_[_loc5_.length - 1]);
         if(_loc3_ == _loc6_)
         {
            CommonUI.removeYellowArrowForMapObject();
            ModuleManager.removeListener(ModuleManager.MODEL_OPEN,onOpenModule);
         }
      }
   }
}
