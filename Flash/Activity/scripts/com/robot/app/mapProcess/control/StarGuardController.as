package com.robot.app.mapProcess.control
{
   import com.robot.app.control.StarMapController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.GuardXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   
   public class StarGuardController
   {
      
      private static var _point:Point;
      
      private static var _npcMv:Sprite;
       
      
      public function StarGuardController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMap);
      }
      
      private static function onChangeMap(param1:Event) : void
      {
         var e:Event = param1;
         var id:uint = uint(MapManager.currentMap.id);
         _npcMv = null;
         _point = GuardXMLInfo.getDefaultPos(id);
         if(_point != null)
         {
            _npcMv = new Sprite();
            ResourceManager.getResource(ClientConfig.getActiveUrl("guard"),function(param1:DisplayObject):void
            {
               var _loc2_:MovieClip = param1 as MovieClip;
               _npcMv.addChild(_loc2_);
               _loc2_.buttonMode = true;
               _npcMv.x = _point.x;
               _npcMv.y = _point.y;
               MapManager.currentMap.depthLevel.addChild(_npcMv);
               MapListenerManager.add(_npcMv,onClickNPC);
            },"npc");
         }
      }
      
      public static function hide() : void
      {
         if(null != _npcMv)
         {
            _npcMv.visible = false;
         }
      }
      
      public static function show() : void
      {
         if(null != _npcMv)
         {
            _npcMv.visible = true;
         }
      }
      
      private static function onClickNPC(param1:Event) : void
      {
         var e:Event = param1;
         NpcDialog.show(NPC.SOLIDMAN,["我是" + GuardXMLInfo.getName(MapManager.currentMap.id) + "的驻守者，想迅速了解星球上的情况，就来问我吧！"],["我想找野怪！","我想挑战sptboss！","我先自己逛逛！"],[function():void
         {
            StarMapController.show();
         },function():void
         {
            var _loc1_:* = undefined;
            if(MapManager.currentMap.id == 30)
            {
               MapManager.changeMap(32);
            }
            else if(MapManager.currentMap.id == 484)
            {
               _loc1_ = Math.random();
               if(_loc1_ > 0 && _loc1_ <= 1 / 3)
               {
                  MapManager.changeMap(484);
               }
               else if(_loc1_ > 1 / 3 && _loc1_ <= 2 / 3)
               {
                  MapManager.changeMap(486);
               }
               else
               {
                  MapManager.changeMap(479);
               }
            }
         }]);
      }
   }
}
