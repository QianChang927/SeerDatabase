package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class TerminatorArmorController
   {
      
      private static const JAMES_PET_ID:int = 1738;
      
      private static const PRE_TASK_BUFF:int = 691;
       
      
      public function TerminatorArmorController()
      {
         super();
      }
      
      public static function initEquip(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         MapListenerManager.add(map.depthLevel["termArmor"],function():void
         {
            checkPreTask();
         },"未来战士詹姆斯紧急武装");
      }
      
      private static function checkPreTask() : void
      {
         if(isTaskDone)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TerminatorArmorPanel"));
         }
         else
         {
            startPreTask();
         }
      }
      
      private static function startPreTask() : void
      {
         CartoonManager.play(ClientConfig.getFullMovie("cartoon/terminator_armor_cartoon"),function():void
         {
            BufferRecordManager.setMyState(PRE_TASK_BUFF,true);
            ModuleManager.showModule(ClientConfig.getAppModule("TerminatorArmorPanel"));
         });
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(PRE_TASK_BUFF);
      }
      
      public static function getCapTime() : int
      {
         var _loc2_:int = 0;
         var _loc3_:PetListInfo = null;
         var _loc1_:int = 0;
         for each(_loc3_ in PetManager.getBagMap())
         {
            if(_loc3_.id == JAMES_PET_ID)
            {
               _loc2_ = int(_loc3_.catchTime);
               _loc1_++;
            }
         }
         if(_loc1_ == 1)
         {
            return _loc2_;
         }
         return 0;
      }
      
      public static function getPetCount() : int
      {
         var _loc2_:PetListInfo = null;
         var _loc1_:int = 0;
         for each(_loc2_ in PetManager.getBagMap())
         {
            if(_loc2_.id == JAMES_PET_ID)
            {
               _loc1_++;
            }
         }
         return _loc1_;
      }
   }
}
