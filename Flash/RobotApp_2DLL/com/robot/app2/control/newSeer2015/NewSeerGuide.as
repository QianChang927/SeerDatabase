package com.robot.app2.control.newSeer2015
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.newSeer2015.task.NewSeerProgress;
   import com.robot.core.manager.PetManager;
   
   public class NewSeerGuide
   {
      
      private static var _ins:com.robot.app2.control.newSeer2015.NewSeerGuide;
       
      
      private var _progress:int;
      
      public function NewSeerGuide()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.newSeer2015.NewSeerGuide
      {
         return _ins || (_ins = new com.robot.app2.control.newSeer2015.NewSeerGuide());
      }
      
      public function update(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([NewSeer2015Controller.PROGRESS],function(param1:Array):void
         {
            _progress = param1[0];
            NewSeerProgress.instance.update(_progress);
            if(func != null)
            {
               func();
            }
         });
      }
      
      public function get catchTime() : int
      {
         var _loc1_:Array = PetManager.getBagPetsById(2311);
         if(_loc1_.length == 0)
         {
            return 0;
         }
         return _loc1_[0].catchTime;
      }
   }
}
