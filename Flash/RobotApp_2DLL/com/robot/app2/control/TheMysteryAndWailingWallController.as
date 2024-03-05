package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.utilClass.ActivityXMLInfo;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   
   public class TheMysteryAndWailingWallController
   {
      
      public static const MAPID_ARR:Array = [11169];
      
      public static const BOSSID:Array = [6597,368];
      
      public static const BOSSNAME:Array = ["",""];
      
      private static var _activity:ActivityXMLInfo;
      
      private static var _mapAnimate:String = "TheMysteryAndWailingMc";
      
      private static var _map:MapModel;
      
      private static var _bonusId:Array = [1812];
      
      private static var _curStep:int = 0;
      
      private static var _cjmc:MovieClip = null;
      
      private static var timeInterval:uint = 0;
       
      
      public function TheMysteryAndWailingWallController()
      {
         super();
      }
      
      public static function start(param1:int = 0) : void
      {
         _curStep = param1;
         if(_activity == null)
         {
            _activity = new ActivityXMLInfo("2016/0304/TheMysteryAndWailingWall",null,init);
         }
         else
         {
            init();
         }
      }
      
      public static function init() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         playStory(_curStep);
      }
      
      public static function fightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         var info:FightOverInfo = e.dataObj as FightOverInfo;
         ModuleManager.showAppModule("TheMysteryAndWailingWallPanel");
         switch(FightManager.currentBossRegion)
         {
            case BOSSID[0]:
               if(info.winnerID != MainManager.actorID)
               {
                  _activity.playStory(2,function():void
                  {
                     FightManager.fightNoMapBoss(BOSSNAME[0],BOSSID[0]);
                  },function():void
                  {
                     ModuleManager.showAppModule("TheMysteryAndWailingWallPanel");
                  });
               }
               break;
            case 0:
               if(info.winnerID == MainManager.actorID)
               {
                  playStory(10);
               }
               else
               {
                  _activity.playStory(12,function():void
                  {
                     FightManager.tryFight(BOSSID[1],[0,0,0,0]);
                  },function():void
                  {
                     ModuleManager.showAppModule("TheMysteryAndWailingWallPanel");
                  });
               }
         }
      }
      
      public static function playStory(param1:int) : void
      {
         var index:int = param1;
         switch(index)
         {
            case 1:
               _activity.playStory(1,function():void
               {
                  FightManager.fightNoMapBoss(BOSSNAME[0],BOSSID[0]);
               },function():void
               {
                  ModuleManager.showAppModule("TheMysteryAndWailingWallPanel");
               });
               break;
            case 2:
               _activity.playStory(3,function():void
               {
                  ModuleManager.hideAllModule();
                  KTool.changeMapWithCallBack(MAPID_ARR[0],function():void
                  {
                     _map = MapManager.currentMap;
                     addMapGood();
                  });
               });
               break;
            case 3:
               _activity.playStory(5,function():void
               {
                  playStory(7);
               },function():void
               {
                  playStory(7);
               },function():void
               {
                  playStory(7);
               },function():void
               {
                  playStory(6);
               });
               break;
            case 4:
               _activity.playStory(8,function():void
               {
                  playStory(9);
               },function():void
               {
                  playStory(8);
               },function():void
               {
                  playStory(9);
               },function():void
               {
                  playStory(9);
               });
               break;
            case 5:
               _activity.playStory(11,function():void
               {
                  FightManager.tryFight(BOSSID[1],[0,0,0,0]);
               },function():void
               {
                  ModuleManager.showAppModule("TheMysteryAndWailingWallPanel");
               });
               break;
            case 6:
               _activity.playStory(7,function():void
               {
                  SocketConnection.sendWithCallback(43700,function():void
                  {
                     ModuleManager.showAppModule("TheMysteryAndWailingWallPanel");
                  },2,3);
               });
               break;
            case 7:
               _activity.playStory(6,function():void
               {
                  playStory(7);
               },function():void
               {
                  playStory(7);
               },function():void
               {
                  playStory(7);
               },function():void
               {
                  playStory(6);
               });
               break;
            case 8:
               _activity.playStory(10,function():void
               {
                  SocketConnection.sendWithCallback(43700,function():void
                  {
                     ModuleManager.showAppModule("TheMysteryAndWailingWallPanel");
                  },2,4);
               });
               break;
            case 9:
               _activity.playStory(9,function():void
               {
                  playStory(9);
               },function():void
               {
                  playStory(8);
               },function():void
               {
                  playStory(9);
               },function():void
               {
                  playStory(9);
               });
               break;
            case 10:
               _activity.playStory(13,function():void
               {
                  ModuleManager.showAppModule("TheMysteryAndWailingWallPanel");
               });
         }
      }
      
      public static function addMapGood() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate + "item"),function(param1:MovieClip):void
         {
            _map.controlLevel.addChild(param1);
            _cjmc = param1;
            param1.buttonMode = true;
            param1.x = 609;
            param1.y = 401;
            param1["icon"].addEventListener(MouseEvent.CLICK,onGoodClick);
            _cjmc["pro"].visible = false;
         },"item");
      }
      
      public static function onGoodClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var mc:MovieClip = e.currentTarget as MovieClip;
         mc.removeEventListener(MouseEvent.CLICK,onGoodClick);
         _cjmc["pro"].visible = true;
         _cjmc["pro"]["xt"].gotoAndStop(1);
         _cjmc["pro"]["xt"].play();
         timeInterval = setTimeout(function():void
         {
            clearTimeout(timeInterval);
            if(_cjmc != null)
            {
               _cjmc.parent.removeChild(_cjmc);
            }
            _activity.playStory(4,function():void
            {
               SocketConnection.sendWithCallback(43700,function():void
               {
                  ModuleManager.showAppModule("TheMysteryAndWailingWallPanel");
               },2,2);
            });
         },6000);
      }
      
      public static function destroy() : void
      {
         if(_activity != null)
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
            _map = null;
            _activity = null;
         }
      }
   }
}
