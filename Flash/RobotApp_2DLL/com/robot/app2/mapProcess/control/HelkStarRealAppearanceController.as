package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcController;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class HelkStarRealAppearanceController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _fog:MovieClip;
       
      
      public function HelkStarRealAppearanceController()
      {
         super();
      }
      
      public static function initMap1097(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function destroyMap1097() : void
      {
         _fog = null;
         _map = null;
      }
      
      public static function playPre(param1:Function) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getActiveUrl("helk_star_real_appearance_movie"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            NpcController.npcVisible = false;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            MapManager.currentMap.depthLevel.visible = false;
            _map.conLevel.addChild(mc);
            mc.addFrameScript(mc.totalFrames - 1,function():void
            {
               mc.addFrameScript(mc.totalFrames - 1,null);
               NpcController.npcVisible = true;
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.depthLevel.visible = true;
               fun();
               _map.conLevel.removeChild(mc);
               mc = null;
            });
            mc.gotoAndPlay(1);
         });
      }
   }
}
