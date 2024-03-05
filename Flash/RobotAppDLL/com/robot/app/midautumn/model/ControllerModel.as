package com.robot.app.midautumn.model
{
   public class ControllerModel
   {
      
      public static const CONTROLLER_TYPE_BUTTON:int = 1;
      
      public static const CONTROLLER_TYPE_MOVIECLIP:int = 2;
       
      
      public var id:int;
      
      public var type:int;
      
      public var name:String;
      
      public var func:String;
      
      public var parent:String;
      
      public function ControllerModel()
      {
         super();
      }
      
      public static function ReadXml(param1:XML) : ControllerModel
      {
         var _loc2_:ControllerModel = new ControllerModel();
         _loc2_.id = param1.attribute("id");
         _loc2_.type = param1.attribute("type");
         _loc2_.name = param1.attribute("name");
         _loc2_.func = param1.attribute("func");
         _loc2_.parent = param1.attribute("parent");
         return _loc2_;
      }
   }
}
