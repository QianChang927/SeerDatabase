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
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class PonyElementSanctuaryController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const LIMIT:int = 40;
      
      private static const FOREVER_TOTAL_ABILITY_VALUE:int = 5896;
       
      
      public function PonyElementSanctuaryController()
      {
         super();
      }
      
      public static function initMap1105(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      public static function destroyMap1105() : void
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
            MapManager.currentMap.controlLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,1,"mc1",function():void
            {
               KTool.showMapAllPlayerAndMonster();
               NpcController.npcVisible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.controlLevel.removeChild(mc);
               fun();
            });
         });
      }
      
      private static function check(param1:Function) : void
      {
         var fun:Function = param1;
         KTool.getForeverNum(FOREVER_TOTAL_ABILITY_VALUE,function(param1:int):void
         {
            if(param1 >= LIMIT)
            {
               Alarm.show("获得的特防能力值已达到上限，敬请期待其他的圣域开启！");
            }
            else
            {
               fun();
            }
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var name:String = String(e.target.name);
         if(name == "btnPony")
         {
            check(function():void
            {
               ModuleManager.showAppModule("PonyElementSanctuaryMainPanel");
            });
         }
         else if(name == "btnTreasure")
         {
            ModuleManager.showAppModule("PonyElementSanctuaryRewardPanel");
         }
         else if(name == "btnAd")
         {
            check(function():void
            {
               ModuleManager.showAppModule("PonyElementSanctuaryMsgPanel");
            });
         }
      }
   }
}
