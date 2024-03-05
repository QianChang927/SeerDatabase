package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcController;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class PonyLastWakeUpController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function PonyLastWakeUpController()
      {
         super();
      }
      
      public static function initMap1127(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      public static function destroyMap1127() : void
      {
         _map.conLevel.removeEventListener(MouseEvent.CLICK,onClick);
         _map = null;
      }
      
      public static function playMovie(param1:String, param2:Function) : void
      {
         var movie:String = param1;
         var fun:Function = param2;
         ResourceManager.getResource(ClientConfig.getActiveUrl(movie),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.hideMapAllPlayerAndMonster();
            NpcController.npcVisible = false;
            MapObjectControl.hideOrShowAllObjects(false);
            _map.conLevel["btnPet"].visible = false;
            MapManager.currentMap.controlLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"mc1",function():void
            {
               KTool.showMapAllPlayerAndMonster();
               NpcController.npcVisible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               _map.conLevel["btnPet"].visible = true;
               MapManager.currentMap.controlLevel.removeChild(mc);
               fun();
            });
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         if(param1.target.name == "btnPet")
         {
            ModuleManager.showAppModule("PonyLastWakeUpMainPanel");
         }
      }
   }
}
