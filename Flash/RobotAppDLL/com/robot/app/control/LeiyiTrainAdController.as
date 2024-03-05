package com.robot.app.control
{
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   
   public class LeiyiTrainAdController
   {
       
      
      public function LeiyiTrainAdController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(BufferRecordManager.getState(MainManager.actorInfo,319))
         {
            return;
         }
         PetManager.addEventListener(PetEvent.STORAGE_LIST,function(param1:PetEvent):void
         {
            var pet:Array;
            var bool:Boolean;
            var e:PetEvent = param1;
            PetManager.removeEventListener(PetEvent.STORAGE_LIST,arguments.callee);
            pet = PetManager.getAll();
            bool = pet.some(function(param1:PetListInfo, param2:int, param3:Array):Boolean
            {
               if(param1.id == 70 || param1.id == 2394)
               {
                  return true;
               }
               return false;
            });
            if(bool)
            {
               if(TasksManager.getTaskStatus(121) != TasksManager.COMPLETE || TasksManager.getTaskStatus(122) != TasksManager.COMPLETE)
               {
                  LocalMsgController.addLocalMsg("LeiyiTrainAdPanel");
               }
            }
         });
      }
   }
}
