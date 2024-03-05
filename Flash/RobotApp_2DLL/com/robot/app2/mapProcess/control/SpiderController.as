package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   
   public class SpiderController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function SpiderController()
      {
         super();
      }
      
      public static function initMap108(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.depthLevel["taskMc"].visible = false;
         if(BufferRecordManager.getMyState(742))
         {
            _map.depthLevel["taskMc"].parent.removeChild(_map.depthLevel["taskMc"]);
         }
      }
      
      public static function spiderHandler() : void
      {
         if(!BufferRecordManager.getMyState(742))
         {
            MapObjectControl.hideOrShowAllObjects(false);
            _map.depthLevel["taskMc"].visible = true;
            MainManager.selfVisible = false;
            TaskDiaLogManager.single.playStory(_spiderDialog(),function():void
            {
               BufferRecordManager.setMyState(742,true,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("spider/FightSpiderMainPanel"));
                  if(_map.depthLevel["taskMc"] != null)
                  {
                     _map.depthLevel["taskMc"].parent.removeChild(_map.depthLevel["taskMc"]);
                  }
                  MainManager.selfVisible = true;
                  MapObjectControl.hideOrShowAllObjects(true);
               });
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("spider/FightSpiderMainPanel"));
         }
      }
      
      private static function _spiderDialog() : Array
      {
         var _loc1_:MovieClip = _map.depthLevel["taskMc"];
         var _loc2_:Array = new Array();
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_loc1_,1,"mc1"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["spider_sound_1",true]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_loc1_,2,"mc2"]);
         _loc2_.push(_loc3_,_loc4_,_loc5_);
         return _loc2_;
      }
   }
}
