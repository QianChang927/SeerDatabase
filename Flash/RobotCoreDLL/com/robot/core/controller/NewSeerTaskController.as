package com.robot.core.controller
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import flash.events.Event;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.EventManager;
   
   public class NewSeerTaskController
   {
      
      public static var newseer2020Forever:int;
      
      private static var _newSeer20170627TaskPro:int;
      
      public static var NEWSEERTASK_PRO_CHANGE:String = "newseerprochanged";
      
      public static var isNewVersionSeer20170627:Boolean = false;
       
      
      public function NewSeerTaskController()
      {
         super();
      }
      
      public static function get isNewseer2020() : Boolean
      {
         return newseer2020Forever < 28;
      }
      
      public static function get isNewseer2020Done() : Boolean
      {
         return newseer2020Forever >= 28;
      }
      
      public static function get isNewSeer() : Boolean
      {
         return isNewseer2020;
      }
      
      public static function get isNewSeer2014() : Boolean
      {
         return TasksManager.getTaskStatus(1989) == TasksManager.COMPLETE && TasksManager.getTaskStatus(1995) != TasksManager.COMPLETE && !isNewSeer2015 && !isNewVersionSeer2016 && !isNewSeerTaskADone2016;
      }
      
      public static function get isNewSeer2015() : Boolean
      {
         return TasksManager.getTaskStatus(3076) == TasksManager.COMPLETE && TasksManager.getTaskStatus(3077) != TasksManager.COMPLETE && !isNewVersionSeer2016 && !isNewSeerTaskADone2016;
      }
      
      public static function get isNewSeer2016() : Boolean
      {
         var _loc1_:Date = new Date(2016,0,20);
         var _loc2_:int = _loc1_.time / 1000;
         return BitBuffSetClass.getState(23027) == 0 && MainManager.actorInfo.regTime >= _loc2_;
      }
      
      public static function get isNewVersionSeer() : Boolean
      {
         return TasksManager.getTaskStatus(1989) == TasksManager.COMPLETE;
      }
      
      public static function get newSeer20170627TaskOver() : Boolean
      {
         return newSeer20170627TaskPro >= 14;
      }
      
      public static function set newSeer20170627TaskPro(param1:int) : void
      {
         _newSeer20170627TaskPro = param1;
         EventManager.dispatchEvent(new Event(NEWSEERTASK_PRO_CHANGE));
      }
      
      public static function get newSeer20170627TaskPro() : int
      {
         return _newSeer20170627TaskPro;
      }
      
      public static function get isNewVersionSeer20170414() : Boolean
      {
         var _loc1_:Date = new Date(2017,3,14);
         var _loc2_:int = _loc1_.time / 1000;
         return MainManager.actorInfo.regTime >= _loc2_;
      }
      
      public static function get isNewVersionSeer2016() : Boolean
      {
         var _loc1_:Date = new Date(2016,0,20);
         var _loc2_:int = _loc1_.time / 1000;
         return MainManager.actorInfo.regTime >= _loc2_;
      }
      
      public static function get isNewVersionSeer2015() : Boolean
      {
         return TasksManager.getTaskStatus(3076) == TasksManager.COMPLETE;
      }
      
      public static function get isNewSeerTaskDone() : Boolean
      {
         return TasksManager.getTaskStatus(1989) == TasksManager.COMPLETE && TasksManager.getTaskStatus(1995) == TasksManager.COMPLETE || TasksManager.getTaskStatus(1989) != TasksManager.COMPLETE && !isNewVersionSeer2015 && !isNewVersionSeer2016;
      }
      
      public static function get isNewSeerTaskDone2015() : Boolean
      {
         return TasksManager.getTaskStatus(3076) == TasksManager.COMPLETE && TasksManager.getTaskStatus(3077) == TasksManager.COMPLETE;
      }
      
      public static function get isNewSeerTaskADone2016() : Boolean
      {
         return BitBuffSetClass.getState(23027) == 1;
      }
      
      public static function get isNewSeerTaskBDone2016() : Boolean
      {
         return BitBuffSetClass.getState(23046) == 1;
      }
      
      public static function get isNewSeerGuideDone() : Boolean
      {
         var _loc3_:Boolean = false;
         var _loc1_:uint = TasksManager.getTaskStatus(1989);
         var _loc2_:uint = TasksManager.getTaskStatus(3007);
         return _loc1_ == TasksManager.COMPLETE && _loc2_ == TasksManager.COMPLETE;
      }
      
      public static function startTask() : void
      {
         startTask2016();
      }
      
      public static function startTask2015() : void
      {
         startTask2016();
      }
      
      public static function startTask2016() : void
      {
         LevelManager.iconLevel.y = 660;
         getDefinitionByName("com.robot.app2.control.NewSeerController2016").getinstance();
      }
      
      public static function startTask2020() : void
      {
         LevelManager.iconLevel.y = 660;
         getDefinitionByName("com.robot.app2.control.NewSeerController2020").getinstance();
      }
   }
}
