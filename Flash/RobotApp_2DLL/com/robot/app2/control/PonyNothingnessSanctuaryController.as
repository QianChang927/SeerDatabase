package com.robot.app2.control
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
   
   public class PonyNothingnessSanctuaryController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const FOREVER_TOTAL_ABILITY_VALUE:int = 5884;
       
      
      public function PonyNothingnessSanctuaryController()
      {
         super();
      }
      
      public static function initMap1102(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      public static function destroyMap1102() : void
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
            if(param1 >= 20)
            {
               Alarm.show("获得的特攻能力值已达到上限，敬请期待其他的圣域开启！");
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
               ModuleManager.showAppModule("PonyNothingnessSanctuaryMainPanel");
            });
         }
         else if(name == "btnTreasure")
         {
            ModuleManager.showAppModule("PonyGetSpecialAttackAbilityPanel");
         }
         else if(name == "btnAd")
         {
            check(function():void
            {
               ModuleManager.showAppModule("PonyNothingnessSanctuaryMsgPanel");
            });
         }
      }
   }
}
