package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
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
   
   public class PonyLifeSanctuaryController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const BIT_BUF_HAS_GOT_PET:int = 17723;
       
      
      public function PonyLifeSanctuaryController()
      {
         super();
      }
      
      public static function initMap1109(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         playMovie("pony_life_sanctuary_pre",22857,function():void
         {
            _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
         });
      }
      
      public static function destroyMap1109() : void
      {
         _map.conLevel.removeEventListener(MouseEvent.CLICK,onClick);
         _map = null;
      }
      
      public static function playMovie(param1:String, param2:int, param3:Function = null) : void
      {
         var movie:String = param1;
         var bitBuf:int = param2;
         var fun:Function = param3;
         if(BitBuffSetClass.getState(bitBuf))
         {
            if(fun != null)
            {
               fun();
            }
         }
         else
         {
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
                  BitBuffSetClass.setState(bitBuf,1);
                  if(fun != null)
                  {
                     fun();
                  }
               });
            });
         }
      }
      
      private static function check(param1:Function) : void
      {
         var fun:Function = param1;
         KTool.getBitSet([BIT_BUF_HAS_GOT_PET],function(param1:Array):void
         {
            if(param1[0] > 0)
            {
               Alarm.show("你已解开生命圣殿封印，请前往其他圣殿！");
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
               ModuleManager.showAppModule("PonyLifeSanctuaryMainPanel");
            });
         }
      }
   }
}
