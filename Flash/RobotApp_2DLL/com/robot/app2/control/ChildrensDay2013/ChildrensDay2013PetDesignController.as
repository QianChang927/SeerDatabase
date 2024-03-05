package com.robot.app2.control.ChildrensDay2013
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   
   public class ChildrensDay2013PetDesignController
   {
       
      
      public function ChildrensDay2013PetDesignController()
      {
         super();
      }
      
      public static function initForNpc() : void
      {
         if(!BufferRecordManager.getState(MainManager.actorInfo,650))
         {
            AnimateManager.playMcAnimate(MapManager.currentMap.controlLevel["designPet"],2,"mc",function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,650,true);
               TasksManager.accept(1504,function():void
               {
                  TasksManager.complete(1504,0);
               });
            });
         }
      }
   }
}
