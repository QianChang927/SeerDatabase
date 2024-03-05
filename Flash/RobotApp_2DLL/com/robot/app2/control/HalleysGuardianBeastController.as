package com.robot.app2.control
{
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class HalleysGuardianBeastController
   {
      
      public static const PRE_TASK_BUFF:int = 694;
      
      private static var _map:BaseMapProcess;
       
      
      public function HalleysGuardianBeastController()
      {
         super();
      }
      
      public static function initNPC(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(MapManager.currentMap.id == 7 || MapManager.currentMap.id == 5 || MapManager.currentMap.id == 930)
         {
            MapListenerManager.add(map.depthLevel["halleysNpc"],function():void
            {
               MapManager.changeMap(935);
            },"立即领取太阳系水星骑宠迈尼斯！");
         }
      }
   }
}
