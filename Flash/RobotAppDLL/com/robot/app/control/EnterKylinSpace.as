package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.DaidaiXmlInfo;
   import com.robot.core.config.xml.GalaxyIDXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.MapConfig;
   import com.robot.core.net.SocketConnection;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.geom.Point;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class EnterKylinSpace
   {
       
      
      public function EnterKylinSpace()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.ENTER_KYLIN_SPACE,onGo);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onChangeMap);
      }
      
      public static function go() : void
      {
         SocketConnection.send(CommandID.ENTER_KYLIN_SPACE);
      }
      
      private static function onGo(param1:SocketEvent) : void
      {
         MapManager.changeMap(73);
      }
      
      private static function onChangeMap(param1:MapEvent) : void
      {
         if(MapManager.currentMap.id == MapConfig.getSuperMapID(MapManager.currentMap.id) && GalaxyIDXMLInfo.getGalaxyID(MapConfig.getSuperMapID(MapManager.currentMap.id)) == 5)
         {
            addDoor();
         }
      }
      
      private static function addDoor() : void
      {
         ResourceManager.getResource(ClientConfig.getActiveUrl("kylinDoor"),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var obj:DisplayObject = param1;
            mc = obj as MovieClip;
            DaidaiXmlInfo.getDefaultPos(MapManager.currentMap.id,function(param1:Point):void
            {
               var pt:Point = param1;
               var p:Point = pt;
               if(p != null)
               {
                  mc.x = p.x;
                  mc.y = p.y;
               }
               MapManager.currentMap.depthLevel.addChild(mc);
               MapListenerManager.add(mc,onClick,"麒麟空间");
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
               {
                  MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  DisplayUtil.removeForParent(mc);
               });
            });
         },"door");
      }
      
      private static function onClick(param1:Event) : void
      {
         go();
      }
   }
}
