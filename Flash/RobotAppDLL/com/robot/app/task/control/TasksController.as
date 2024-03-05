package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.ITask;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.utils.getDefinitionByName;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class TasksController
   {
      
      private static var xmlClass:Class = TasksController_xmlClass;
      
      private static var _chapters:Array = [];
      
      public static const TASKPANEL_SHOW_COMPLETE:String = "taskPanel_show_complete";
      
      public static const TASKPANEL_SHOW_PAUSE:String = "taskPanel_show_pause";
      
      public static const TASKPANEL_CLOSE:String = "taskPanel_close";
       
      
      public function TasksController()
      {
         super();
      }
      
      public static function setUp() : void
      {
         var _loc3_:XML = null;
         var _loc4_:TasksChapter = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc9_:* = undefined;
         var _loc10_:ITask = null;
         var _loc1_:XML = XML(new xmlClass());
         var _loc2_:XMLList = _loc1_.elements("chapter");
         for each(_loc3_ in _loc2_)
         {
            _loc4_ = new TasksChapter();
            _chapters.push(_loc4_);
            _loc4_.id = int(_loc3_.@id);
            _loc5_ = _loc3_.elements("task");
            for each(_loc6_ in _loc5_)
            {
               _loc7_ = int(_loc6_.@id);
               _loc8_ = int(_loc6_.@priority);
               (_loc10_ = new (_loc9_ = getDefinitionByName("com.robot.app.task.taskscollection.Task" + _loc7_))()).id = _loc7_;
               _loc10_.priority = _loc8_;
               _loc4_.tasks.push(_loc10_);
            }
         }
         MapManager.addEventListener(MapEvent.MAP_PROCESS_INIT,enterScene);
      }
      
      public static function enterScene(param1:*) : void
      {
         var _loc2_:TasksChapter = null;
         for each(_loc2_ in allChapters)
         {
            _loc2_.process();
         }
      }
      
      public static function leaveScene() : void
      {
         var _loc1_:TasksChapter = null;
         var _loc2_:ITask = null;
         for each(_loc1_ in allChapters)
         {
            for each(_loc2_ in _loc1_.tasks)
            {
               _loc2_.destoryForMap();
            }
         }
      }
      
      public static function get allChapters() : Array
      {
         return _chapters;
      }
      
      public static function taskCompleteUI() : void
      {
         var mc:MovieClip = null;
         mc = UIManager.getMovieClip("TaskOver_UI");
         LevelManager.appLevel.addChild(mc);
         DisplayUtil.align(mc,null,AlignType.MIDDLE_CENTER);
         AnimateManager.playMcAnimate(mc,0,"",function():void
         {
            DisplayUtil.removeForParent(mc);
         });
      }
   }
}
