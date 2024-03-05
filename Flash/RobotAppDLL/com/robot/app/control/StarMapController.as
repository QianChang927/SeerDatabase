package com.robot.app.control
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.GalaxyIDXMLInfo;
   import com.robot.core.config.xml.StarMapXMLInfo;
   import com.robot.core.config.xml.SuperMapXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.MapConfig;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class StarMapController
   {
      
      private static var _id:uint;
      
      private static var _map:MovieClip;
      
      private static var _loader:MCLoader;
      
      private static var _shipArray:Array = [4,9,5,1,107,698,8,101,6,332,7,103,77,96];
      
      public static var openFromMap:Boolean = false;
       
      
      public function StarMapController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onMapDestory);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapComplete);
      }
      
      public static function show() : void
      {
         var _loc1_:String = null;
         if(MapManager.currentMap)
         {
            _id = MapManager.currentMap.id;
            if(_shipArray.indexOf(_id) != -1)
            {
               openFromMap = true;
               ModuleManager.showModule(ClientConfig.getMapModule("ShipMapPanel"));
               return;
            }
            _loc1_ = String(ClientConfig.getStarMap(MapConfig.getSuperMapID(_id)));
            _loader = new MCLoader(_loc1_,LevelManager.appLevel,1,"正在加载小地图....");
            _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSuccess);
            _loader.addEventListener(MCLoadEvent.ERROR,onLoaderError);
            _loader.doLoad();
         }
      }
      
      private static function onLoadSuccess(param1:MCLoadEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:SimpleButton = null;
         var _loc6_:uint = 0;
         var _loc7_:Point = null;
         var _loc8_:MovieClip = null;
         var _loc2_:Class = param1.getApplicationDomain().getDefinition("map") as Class;
         _map = new _loc2_();
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSuccess);
         _loader.removeEventListener(MCLoadEvent.ERROR,onLoaderError);
         _loader.clear();
         _loader = null;
         if(_map)
         {
            sendStatistics();
            DisplayUtil.align(_map,null,AlignType.MIDDLE_CENTER);
            if(_map.getChildByName("flag") != null)
            {
               _map.x = 31.45;
               _map.y = 47.55;
            }
            LevelManager.appLevel.addChild(_map);
            _loc3_ = uint(_map.numChildren);
            _loc4_ = 0;
            while(_loc4_ < _loc3_)
            {
               if((Boolean(_loc5_ = _map.getChildAt(_loc4_) as SimpleButton)) && _loc5_.name.split("_")[0] == "scene")
               {
                  _loc6_ = uint(_loc5_.name.split("_")[1]);
                  _loc5_.addEventListener(MouseEvent.CLICK,onSceneClick);
                  if(GalaxyIDXMLInfo.getGalaxyID(MapConfig.getSuperMapID(_id)) == 102)
                  {
                     ToolTipManager.add(_loc5_,MapConfig.getName(_loc6_));
                  }
                  if(_id == _loc6_)
                  {
                     _loc7_ = CommonUI.getCenterPos(_loc5_,_map);
                     (_loc8_ = UIManager.getMovieClip("SeerHead_icon")).x = _loc7_.x;
                     _loc8_.y = _loc7_.y;
                     _loc8_.mouseEnabled = false;
                     _loc8_.mouseChildren = false;
                     DisplayUtil.FillColor(_loc8_["mc"]["colorMC"],MainManager.actorInfo.color);
                     _map.addChild(_loc8_);
                     if(MapConfig.getSuperMapID(_id) == 102)
                     {
                        if(_id == 108)
                        {
                           _loc8_.x = 400;
                           _loc8_.y = 225;
                        }
                        else if(_id == 102)
                        {
                           _loc8_.x = 600;
                           _loc8_.y = 150;
                        }
                        else if(_id == 503)
                        {
                           _loc8_.x = 600;
                           _loc8_.y = 250;
                        }
                        else if(_id == 465)
                        {
                           _loc8_.x = 500;
                           _loc8_.y = 300;
                        }
                        else if(_id == 111)
                        {
                           _loc8_.x = 200;
                           _loc8_.y = 300;
                        }
                        else if(_id == 405)
                        {
                           _loc8_.x = 225;
                           _loc8_.y = 200;
                        }
                        else if(_id == 433)
                        {
                           _loc8_.x = 470;
                           _loc8_.y = 100;
                        }
                     }
                  }
               }
               _loc4_++;
            }
            _map["close"].addEventListener(MouseEvent.CLICK,onCloseClick);
         }
      }
      
      private static function sendStatistics() : void
      {
         var _loc2_:uint = 0;
         var _loc1_:uint = uint(MapConfig.getSuperMapID(MapManager.currentMap.id));
         SocketConnection.send(1022,84806373);
         if(_loc1_ == 102)
         {
            SocketConnection.send(1022,84806463);
         }
         _loc2_ = uint(SuperMapXMLInfo.getStat1(MapConfig.getSuperMapID(MapManager.currentMap.id)));
         if(_loc2_ != 0)
         {
            SocketConnection.send(1022,_loc2_);
         }
      }
      
      private static function onLoaderError(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSuccess);
         _loader.removeEventListener(MCLoadEvent.ERROR,onLoaderError);
         _loader.clear();
         _loader = null;
         DebugTrace.show("没有==" + MapManager.currentMap.id + "==星球地图");
      }
      
      private static function onMapDestory(param1:MapEvent) : void
      {
         destroy();
      }
      
      private static function onMapComplete(param1:MapEvent) : void
      {
         if(MapManager.currentMap)
         {
            if(Boolean(StarMapXMLInfo.hasStarMap(MapManager.currentMap.id)) || MapConfig.getMapPlanetIndex(MapManager.currentMap.id) > 0)
            {
               ToolBarController.panel.openStarMap();
            }
            else
            {
               ToolBarController.panel.closeStarMap();
            }
         }
      }
      
      private static function onSceneClick(param1:MouseEvent) : void
      {
         var _loc2_:uint = 0;
         _loc2_ = uint(SuperMapXMLInfo.getStat2(MapConfig.getSuperMapID(MapManager.currentMap.id)));
         if(_loc2_ != 0)
         {
            SocketConnection.send(1022,_loc2_);
         }
         var _loc3_:SimpleButton = param1.currentTarget as SimpleButton;
         var _loc4_:uint = uint(_loc3_.name.split("_")[1]);
         destroy();
         MapManager.changeMap(_loc4_);
      }
      
      private static function onCloseClick(param1:MouseEvent) : void
      {
         destroy();
      }
      
      private static function destroy() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:uint = 0;
         var _loc3_:SimpleButton = null;
         if(_map)
         {
            _loc1_ = uint(_map.numChildren);
            _loc2_ = 0;
            while(_loc2_ < _loc1_)
            {
               _loc3_ = _map.getChildAt(_loc2_) as SimpleButton;
               if(Boolean(_loc3_) && _loc3_.name.split("_")[0] == "scene")
               {
                  _loc3_.removeEventListener(MouseEvent.CLICK,onSceneClick);
                  ToolTipManager.remove(_loc3_);
               }
               _loc2_++;
            }
            _map["close"].removeEventListener(MouseEvent.CLICK,onCloseClick);
            DisplayUtil.removeForParent(_map);
            _id = 0;
            _map = null;
         }
      }
   }
}
