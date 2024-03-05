package com.robot.app2.control
{
   import com.robot.core.manager.MainManager;
   import flash.events.Event;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.EventManager;
   
   public class ScheduleController
   {
       
      
      public function ScheduleController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(MainManager.isDebug)
         {
            EventManager.addEventListener("sample_event",sampleEventHandler);
            EventManager.addEventListener("DeathBlueSkyPlutoYaiba_event",deathBlueSkyPlutoYaibaHandler);
         }
      }
      
      private static function sampleEventHandler(param1:Event) : void
      {
      }
      
      private static function deathBlueSkyPlutoYaibaHandler(param1:Event) : void
      {
         getDefinitionByName("com.robot.app2.control.DeathBlueSkyPlutoYaibaController").initForMap();
      }
   }
}
