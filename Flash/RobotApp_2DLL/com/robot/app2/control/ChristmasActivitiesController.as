package com.robot.app2.control
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ChristmasActivitiesController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _mapId:int;
      
      private static var _EnableAnimation:Boolean = true;
      
      private static var _animation:MovieClip;
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
       
      
      public function ChristmasActivitiesController()
      {
         super();
      }
      
      public static function initForMap(param1:int, param2:BaseMapProcess) : void
      {
         var _loc3_:int = 0;
         _map = param2;
         _mapId = param1;
         if(_mapId == 1 || _mapId == 808)
         {
            MainManager.actorModel.addEventListener(RobotEvent.WALK_START,playAnimation);
            if(_mapId == 808)
            {
               updateNpcState();
               _loc3_ = 1;
               while(_loc3_ <= 3)
               {
                  _map.btnLevel["btn_" + _loc3_].addEventListener(MouseEvent.CLICK,onClickNpc);
                  _loc3_++;
               }
            }
         }
      }
      
      public static function updateNpcState() : void
      {
         if(MapManager.currentMap.id != 808)
         {
            return;
         }
         KTool.getMultiValue([3533,3534],function(param1:Array):void
         {
            var _loc2_:* = KTool.getBit(param1[0],7) > 0;
            var _loc3_:* = KTool.getBit(param1[1],7) > 0;
            if(_loc2_)
            {
               _map.depthLevel["npc_1"].gotoAndStop(1);
            }
            else
            {
               _map.depthLevel["npc_1"].gotoAndStop(2);
            }
            if(_loc3_)
            {
               _map.depthLevel["npc_2"].gotoAndStop(1);
            }
            else
            {
               _map.depthLevel["npc_2"].gotoAndStop(2);
            }
         });
      }
      
      private static function onClickNpc(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ChristmasSaveSantaClausPanel"));
      }
      
      private static function playAnimation(param1:Event) : void
      {
         var e:Event = param1;
         if(Math.random() < 0.1 && _EnableAnimation)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_START,playAnimation);
            KTool.getMultiValue([13554],function(param1:Array):void
            {
               var arr:Array = param1;
               var animationName:String = "ChristmasAnimation_6";
               if(arr[0] == 0)
               {
                  StatManager.sendStat2014("圣诞节主题活动","活动5_触发动画1",StatManager.RUN_ACT);
               }
               else if(arr[0] == 1)
               {
                  StatManager.sendStat2014("圣诞节主题活动","活动5_触发动画2",StatManager.RUN_ACT);
                  animationName = "ChristmasAnimation_7";
               }
               else if(arr[0] == 2)
               {
                  StatManager.sendStat2014("圣诞节主题活动","活动5_触发动画3",StatManager.RUN_ACT);
                  animationName = "ChristmasAnimation_8";
               }
               else if(arr[0] == 3)
               {
                  _EnableAnimation = false;
                  return;
               }
               if(_mapId == 808)
               {
                  _map.depthLevel["npc_1"].visible = false;
                  _map.depthLevel["npc_2"].visible = false;
                  _map.depthLevel["npc_3"].visible = false;
               }
               KTool.hideMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(false);
               LevelManager.iconLevel.visible = false;
               ResourceManager.getResource(ClientConfig.getMapAnimate(animationName),function(param1:MovieClip):void
               {
                  var taskMc:MovieClip = param1;
                  MapManager.currentMap.btnLevel.addChild(taskMc);
                  _animation = taskMc;
                  AnimateManager.playMcAnimate(taskMc,1,"mc",function():void
                  {
                     KTool.showMapAllPlayerAndMonster();
                     LevelManager.iconLevel.visible = true;
                     if(_mapId == 808)
                     {
                        _map.depthLevel["npc_1"].visible = true;
                        _map.depthLevel["npc_2"].visible = true;
                        _map.depthLevel["npc_3"].visible = true;
                     }
                     MapObjectControl.hideOrShowAllObjects(true);
                     taskMc.addEventListener(MouseEvent.CLICK,onReceive);
                  });
               });
            });
         }
      }
      
      private static function onReceive(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.sendWithCallback(45531,function(param1:SocketEvent):void
         {
            if(_animation)
            {
               MapManager.currentMap.btnLevel.removeChild(_animation);
               _animation.removeEventListener(MouseEvent.CLICK,onReceive);
               _animation = null;
            }
         },1);
      }
      
      public static function showFishingGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("GoFishing"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game = param1.getContent() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.appLevel.addChild(_game);
         _game.addEventListener("seerFishingOver",onCloseGame);
         _game.addEventListener("seerFishingClose",closeGamePanel);
         _game.addEventListener("seerFishingStart",onStartGame);
         _game.addEventListener("seerFishingOpenVip",onLinkVip);
      }
      
      private static function onStartGame(param1:*) : void
      {
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeUnsignedInt(1);
         var _loc3_:int = 0;
         while(_loc3_ < 5)
         {
            _loc2_.writeUnsignedInt(0);
            _loc3_++;
         }
         SocketConnection.send(45533,_loc2_);
      }
      
      private static function onLinkVip(param1:*) : void
      {
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var i:int;
         var e:* = param1;
         var data:ByteArray = new ByteArray();
         var fish:Array = e.extra as Array;
         data.writeUnsignedInt(2);
         i = 0;
         while(i < 5)
         {
            data.writeUnsignedInt(fish[i]);
            i++;
         }
         SocketConnection.sendWithCallback(45533,function(param1:SocketEvent):void
         {
            closeGamePanel();
         },data);
      }
      
      private static function closeGamePanel(param1:* = null) : void
      {
         if(_game != null)
         {
            _game.removeEventListener("seerFishingOver",onCloseGame);
            _game.removeEventListener("seerFishingClose",closeGamePanel);
            _game.removeEventListener("seerFishingStart",onStartGame);
            _game.removeEventListener("seerFishingOpenVip",onLinkVip);
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
            DisplayUtil.removeForParent(_game);
            _game = null;
            _loader.loader.unloadAndStop();
            _loader = null;
         }
      }
      
      public static function getIsVip() : Boolean
      {
         return MainManager.actorInfo.isVip;
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_START,playAnimation);
         if(_animation)
         {
            _animation.removeEventListener(MouseEvent.CLICK,onReceive);
            _animation = null;
         }
         if(MapManager.currentMap.id == 808)
         {
            _loc1_ = 1;
            while(_loc1_ <= 3)
            {
               _map.btnLevel["btn_" + _loc1_].removeEventListener(MouseEvent.CLICK,onClickNpc);
               _loc1_++;
            }
         }
         _map = null;
      }
   }
}
