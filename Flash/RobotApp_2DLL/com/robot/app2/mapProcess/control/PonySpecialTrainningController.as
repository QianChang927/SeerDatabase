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
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class PonySpecialTrainningController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _subMap:BaseMapProcess;
      
      private static var _stateArr:Array;
      
      public static const LIMIT:Array = [20,40,1,40,1,20,1];
      
      public static const MAP_IDS:Array = [1102,1105,1106,1109,1111,1114,1124];
      
      public static const BIT_BUFS:Array = [22833,22844,0,0,0,0,0];
      
      public static const MOVIES:Array = ["pony_nothingness_sanctuary_pre","pony_element_sanctuary_pre","","","","",""];
      
      public static const FOREVER_TOTAL_VALUE:Array = [5884,5896,5915,3665];
      
      public static const BIT_BUF_SKILL_STATE:Array = [17720,14647,195];
      
      private static const NAMES:Array = ["特攻能力值","特防能力值","技能","防御能力值","技能","速度能力值","技能"];
       
      
      public function PonySpecialTrainningController()
      {
         super();
      }
      
      public static function initPonySubMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _subMap = map;
         ResourceManager.getResource(ClientConfig.getActiveUrl("pony_sub_map_ad"),function(param1:MovieClip):void
         {
            _subMap.conLevel.addChild(param1);
         });
      }
      
      public static function destroyPonySubMap() : void
      {
         _subMap = null;
      }
      
      public static function initMap1101(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      public static function destroyMap1101() : void
      {
         _map.conLevel.removeEventListener(MouseEvent.CLICK,onClick);
         _map = null;
      }
      
      public static function playPonyMovie(param1:String, param2:int, param3:Function) : void
      {
         var movie:String = param1;
         var bitBuf:int = param2;
         var fun:Function = param3;
         if(movie == "" || bitBuf == 0)
         {
            fun();
            return;
         }
         if(BitBuffSetClass.getState(bitBuf))
         {
            fun();
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
                  fun();
               });
            });
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         var name:String = String(e.target.name);
         if(name == "btnPony")
         {
            ModuleManager.showAppModule("PonySpecialTrainningMainPanel");
         }
         else if(name.substr(0,6) == "btnMap")
         {
            index = int(name.replace("btnMap",""));
            if(MAP_IDS[index])
            {
               PonySpecialTrainningController.playPonyMovie(MOVIES[index],BIT_BUFS[index],function():void
               {
                  MapManager.changeMap(MAP_IDS[index]);
               });
            }
         }
      }
   }
}
