package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PirateAttacksController
   {
      
      public static var doTask:Boolean = false;
      
      private static var icon:MovieClip;
       
      
      public function PirateAttacksController()
      {
         super();
      }
      
      public static function init() : void
      {
         var maps:Array = null;
         var forevers:Array = null;
         var index:int = 0;
         if(doTask)
         {
            maps = [40,328,21,338];
            forevers = [13601,13602,13603,13604];
            index = maps.indexOf(MapManager.currentMap.id);
            if(index >= 0)
            {
               ResourceManager.getResource(ClientConfig.getAppRes("pirate_attacks_task_icon"),function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  LevelManager.iconLevel.addChild(mc);
                  icon = mc;
                  MovieClip(mc["mcIcon"]).gotoAndStop(index + 1);
                  KTool.getMultiValue([forevers[index]],function(param1:Array):void
                  {
                     var _loc2_:int = int(param1[0]);
                     mc["txtTimes"].text = _loc2_ + "/3";
                  });
                  MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
                  icon.addEventListener(MouseEvent.CLICK,onOpenPanel);
               });
            }
         }
      }
      
      private static function onOpenPanel(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("PirateAttacksDonationTaskPanel");
      }
      
      private static function onMapChange(param1:*) : void
      {
         var _loc2_:Array = [40,328,21,338];
         var _loc3_:Array = [13601,13602,13603,13604];
         var _loc4_:int;
         if((_loc4_ = _loc2_.indexOf(MapManager.currentMap.id)) < 0)
         {
            doTask = false;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         }
      }
      
      public static function destroy() : void
      {
         if(icon)
         {
            icon.removeEventListener(MouseEvent.CLICK,onOpenPanel);
            DisplayUtil.removeForParent(icon);
            icon = null;
         }
      }
   }
}
