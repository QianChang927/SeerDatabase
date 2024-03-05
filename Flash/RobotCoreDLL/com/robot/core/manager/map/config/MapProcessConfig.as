package com.robot.core.manager.map.config
{
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.MapType;
   import flash.utils.getDefinitionByName;
   import org.taomee.utils.Utils;
   
   public class MapProcessConfig
   {
      
      public static var currentProcessInstance:com.robot.core.manager.map.config.BaseMapProcess;
      
      private static var PATH:String = "com.robot.app.mapProcess.MapProcess_";
      
      private static var PATH2:String = "com.robot.app2.mapProcess.MapProcess_";
       
      
      public function MapProcessConfig()
      {
         super();
      }
      
      public static function configMap(param1:uint, param2:uint = 0, param3:Boolean = true) : void
      {
         var _loc4_:String = null;
         if(param1 > 50000)
         {
            switch(param2)
            {
               case MapType.HOOM:
                  _loc4_ = "com.robot.app.mapProcess.RoomMap";
                  break;
               case MapType.GREEN_HOUSE:
                  _loc4_ = "com.robot.app.mapProcess.NewGreenHouseMap2021";
                  break;
               case MapType.CAMP:
                  _loc4_ = "com.robot.app.mapProcess.FortressMap";
                  break;
               case MapType.HEAD:
                  _loc4_ = "com.robot.app.mapProcess.HeadquartersMap";
                  break;
               case MapType.PK_TYPE:
                  _loc4_ = "com.robot.app.mapProcess.PKMap";
                  break;
               case MapType.BATTLEROYALE:
                  _loc4_ = "com.robot.app.mapProcess.BattleRoyaleMap";
                  break;
               case MapType.ROOM_FIGHT:
                  _loc4_ = "com.robot.app.mapProcess.PetRoayleMap";
                  break;
               case MapType.SPACE_ARENA:
                  _loc4_ = "com.robot.app.mapProcess.SpaceArena";
            }
            if(_loc4_ == null || _loc4_ == "")
            {
               return;
            }
         }
         else
         {
            _loc4_ = PATH + param1.toString();
         }
         var _loc5_:Class;
         if(_loc5_ = Utils.getClass(_loc4_))
         {
            currentProcessInstance = new _loc5_() as com.robot.core.manager.map.config.BaseMapProcess;
         }
         else
         {
            _loc4_ = PATH2 + param1.toString();
            if(_loc5_ = Utils.getClass(_loc4_))
            {
               currentProcessInstance = new _loc5_() as com.robot.core.manager.map.config.BaseMapProcess;
            }
            else
            {
               currentProcessInstance = new com.robot.core.manager.map.config.BaseMapProcess();
            }
         }
         if(param3)
         {
            currentProcessInstance.setup();
            MapManager.dispatchEvent(new MapEvent(MapEvent.MAP_PROCESS_INIT,MapManager.currentMap));
         }
      }
      
      public static function destroy() : void
      {
         var _loc1_:* = undefined;
         if(currentProcessInstance)
         {
            _loc1_ = getDefinitionByName("com.robot.app.task.control.TasksController");
            _loc1_.leaveScene();
            currentProcessInstance.destroy();
         }
         currentProcessInstance = null;
      }
   }
}
