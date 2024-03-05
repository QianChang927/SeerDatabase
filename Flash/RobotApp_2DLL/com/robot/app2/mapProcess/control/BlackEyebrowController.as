package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class BlackEyebrowController
   {
      
      private static var _mc:MovieClip;
       
      
      public function BlackEyebrowController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         startPreTask();
      }
      
      private static function startPreTask() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("purple_animation"),function(param1:MovieClip):void
         {
            _mc = param1;
            _mc["exclamation"].visible = false;
            MapManager.currentMap.controlLevel.addChild(_mc);
            if(!BitBuffSetClass.getState(22694))
            {
               playMapMovie();
               MapObjectControl.hideOrShowAllObjects(false);
               KTool.hideMapAllPlayerAndMonster();
            }
            else
            {
               initNpc();
            }
         });
      }
      
      private static function initNpc() : void
      {
         _mc.gotoAndStop(2);
         _mc.mc2.gotoAndStop(_mc.mc2.totalFrames);
         _mc["exclamation"].visible = true;
         _mc.mc2["heiMei"].buttonMode = true;
         _mc.mc2["baiYing"].buttonMode = true;
         _mc.mc2["jinzhong"].buttonMode = true;
         _mc.mc2["ziguang"].buttonMode = true;
         _mc.mc2["ziguang"].mouseChildren = false;
         _mc.mc2["heiMei"].mouseChildren = false;
         _mc.mc2["baiYing"].mouseChildren = false;
         _mc.mc2["jinzhong"].mouseChildren = false;
         _mc.addEventListener(MouseEvent.CLICK,onClick);
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onRemove);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         if(_loc2_ == "heiMei")
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BlackEyebrowMainPanel"));
         }
         else if(_loc2_ == "baiYing")
         {
            ModuleManager.showModule(ClientConfig.getAppModule("GodOfWhiteEaglePanel"));
         }
         else if(_loc2_ == "jinzhong")
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HadesMainPanel"));
         }
         else if(_loc2_ == "ziguang")
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PurpleMainPanel"));
         }
      }
      
      private static function onRemove(param1:Event) : void
      {
         param1.currentTarget.removeEventListener(MouseEvent.CLICK,onClick);
         param1.currentTarget.removeEventListener(MapEvent.MAP_DESTROY,onRemove);
         _mc = null;
      }
      
      private static function playMapMovie() : void
      {
         AnimateManager.playMcAnimate(_mc,1,"mc1",function():void
         {
            AnimateManager.playMcAnimate(_mc,2,"mc2",function():void
            {
               MapObjectControl.hideOrShowAllObjects(true);
               KTool.showMapAllPlayerAndMonster();
               BitBuffSetClass.setState(22694,1);
               initNpc();
            });
         });
      }
   }
}
