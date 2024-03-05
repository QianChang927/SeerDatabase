package com.robot.app.mapProcess.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.GetPetController;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LittlePetSuperDreamController
   {
      
      private static var _mc:MovieClip;
       
      
      public function LittlePetSuperDreamController()
      {
         super();
      }
      
      public static function onGetPierde(param1:uint, param2:uint) : void
      {
         var petID:uint = param1;
         var catchTime:uint = param2;
         if(MapManager.currentMap.id == 66)
         {
            ResourceManager.getResource(ClientConfig.getActiveUrl("superDream"),function(param1:DisplayObject):void
            {
               var o:DisplayObject = param1;
               _mc = o as MovieClip;
               _mc.x = _mc.y = 0;
               MapManager.currentMap.topLevel.addChild(_mc);
               MapManager.currentMap.btnLevel.visible = MapManager.currentMap.depthLevel.visible = MapManager.currentMap.controlLevel.visible = false;
               CommonUI.removeYellowExcal(MapManager.currentMap.topLevel);
               AnimateManager.playMcAnimate(_mc,1,"mc15",function():void
               {
                  DisplayUtil.removeForParent(_mc);
                  _mc = null;
                  GetPetController.getPet(petID,catchTime);
                  if(TasksManager.getTaskStatus(1394) != TasksManager.COMPLETE)
                  {
                     TasksManager.accept(1394,function(param1:Boolean):void
                     {
                        var b:Boolean = param1;
                        TasksManager.complete(1394,0,function(param1:Boolean):void
                        {
                           DebugTrace.show("得到联盟荣誉！");
                        });
                     });
                  }
                  MapManager.currentMap.btnLevel.visible = MapManager.currentMap.depthLevel.visible = MapManager.currentMap.controlLevel.visible = true;
               });
            });
         }
      }
   }
}
