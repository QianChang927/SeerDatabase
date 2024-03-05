package com.robot.app2.systems.mapObject
{
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.SceneActivityNpcController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.display.MovieClip;
   import flash.system.System;
   import flash.utils.Dictionary;
   import flash.utils.getDefinitionByName;
   import org.taomee.bean.BaseBean;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.DepthManager;
   import org.taomee.utils.StringUtil;
   
   public class MapObjectControl extends BaseBean
   {
      
      private static var _objectsConfig:Dictionary = new Dictionary();
      
      private static var _mapConfig:Dictionary = new Dictionary();
      
      private static var _currentMapObjs:Array = [];
      
      public static var configXml:XML;
      
      public static var _ignoreList:Array;
      
      private static var _deleteList:Array;
      
      private static var _authDic:Dictionary = new Dictionary();
      
      private static var _isShow:Boolean;
       
      
      public function MapObjectControl()
      {
         super();
      }
      
      public static function setUp() : void
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc6_:BtnClick = null;
         var _loc7_:String = null;
         var _loc8_:int = 0;
         var _loc1_:XML = configXml.elements("allobjects")[0];
         var _loc2_:XMLList = _loc1_.elements("object");
         for each(_loc3_ in _loc2_)
         {
            _loc6_ = new BtnClick();
            _loc7_ = _loc3_.@name;
            _objectsConfig[_loc7_] = _loc6_;
            _loc6_.type = _loc3_.@type;
            _loc6_.content = _loc3_.toString();
            _loc6_.stat = _loc3_.@stat;
            _loc6_["tip"] = String(_loc3_.@tip);
            _loc6_["icon"] = String(_loc3_.@icon);
            _loc6_["objClass"] = String(_loc3_.@objClass);
            if(Boolean(_loc3_.@auth) && StringUtil.trim(_loc3_.@auth) != "")
            {
               _authDic[_loc7_] = StringUtil.trim(_loc3_.@auth);
            }
         }
         _loc4_ = configXml.descendants("map");
         for each(_loc5_ in _loc4_)
         {
            _loc8_ = int(_loc5_.@id);
            _mapConfig[_loc8_] = _loc5_;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
      }
      
      public static function clearXML() : void
      {
         var _loc1_:int = 0;
         var _loc3_:String = null;
         _deleteList = [];
         var _loc2_:uint = uint(configXml.elements("allobjects")[0].object.length());
         _loc1_ = 0;
         while(_loc1_ < _loc2_)
         {
            _loc3_ = configXml.elements("allobjects")[0].object[_loc1_].@name;
            if(!isUsed(_loc3_))
            {
               _deleteList.push(_loc1_);
            }
            _loc1_++;
         }
         deleteXML();
      }
      
      private static function deleteXML() : void
      {
         var _loc1_:int = 0;
         var _loc2_:uint = uint(configXml.elements("allobjects")[0].object.length());
         var _loc3_:Array = _deleteList.reverse();
         _loc1_ = 0;
         while(_loc1_ < _loc3_.length)
         {
            delete configXml.elements("allobjects")[0].object[_loc3_[_loc1_]];
            _loc1_++;
         }
         System.setClipboard(configXml.toString());
         Alarm.show("清理完毕，已经复制到粘贴板！");
      }
      
      private static function isUsed(param1:String) : Boolean
      {
         var _loc2_:XML = null;
         var _loc3_:uint = 0;
         var _loc4_:int = 0;
         var _loc5_:String = null;
         for each(_loc2_ in _mapConfig)
         {
            _loc3_ = uint(_loc2_.object.length());
            _loc4_ = 0;
            while(_loc4_ < _loc3_)
            {
               if((_loc5_ = _loc2_.object[_loc4_].@name) == param1)
               {
                  return true;
               }
               _loc4_++;
            }
         }
         return false;
      }
      
      public static function addIgnore(param1:String, param2:Boolean = false) : void
      {
         if(_ignoreList == null)
         {
            _ignoreList = [];
         }
         _ignoreList.push(param1);
         if(!param2)
         {
            return;
         }
         var _loc3_:MapObject = getMapObjetByName(param1);
         if(_loc3_ != null)
         {
            _loc3_.visible = false;
         }
      }
      
      public static function removeIgnore(param1:String, param2:Boolean = false) : void
      {
         if(_ignoreList == null)
         {
            return;
         }
         var _loc3_:int = _ignoreList.indexOf(param1);
         if(_loc3_ >= 0)
         {
            _ignoreList.splice(_loc3_,1);
         }
         if(!param2)
         {
            return;
         }
         var _loc4_:MapObject;
         if((_loc4_ = getMapObjetByName(param1)) != null)
         {
            _loc4_.visible = true;
         }
      }
      
      private static function onMapChange(param1:*) : void
      {
         var _loc2_:MapObject = null;
         var _loc3_:XML = null;
         var _loc5_:XML = null;
         _isShow = true;
         if(ModuleManager.hasModule(ClientConfig.getAppModule("MapObjEditorPanel")))
         {
            ModuleManager.getModule(ClientConfig.getAppModule("MapObjEditorPanel")).hide();
         }
         for each(_loc2_ in _currentMapObjs)
         {
            _loc2_.destory();
         }
         _currentMapObjs = [];
         if(MapManager.currentMap.id == MainManager.actorID)
         {
            _loc3_ = _mapConfig[50000];
         }
         else if(MapManager.currentMap.id == MainManager.actorInfo.teamInfo.id)
         {
            _loc3_ = _mapConfig[90000];
         }
         else
         {
            _loc3_ = _mapConfig[MapManager.currentMap.id];
         }
         if(null == _loc3_)
         {
            MapManager.dispatchEvent(new MapEvent(MapEvent.MAP_OBJECT_INIT_FINISH));
            return;
         }
         var _loc4_:XMLList = _loc3_.elements("object");
         for each(_loc5_ in _loc4_)
         {
            addObjectToMap(_loc5_);
         }
         DepthManager.swapDepthAll(MapManager.currentMap.depthLevel);
         MapManager.dispatchEvent(new MapEvent(MapEvent.MAP_OBJECT_INIT_FINISH));
      }
      
      public static function addNewObjToMapByName(param1:String, param2:Number, param3:Number) : void
      {
         var _loc6_:XML = null;
         if(null == _objectsConfig[param1])
         {
            Alarm.show("没有此装置");
            return;
         }
         if(getHasInMap(param1))
         {
            Alarm.show("场景中已存在");
            return;
         }
         var _loc4_:XML;
         (_loc4_ = <object name='ddd' x='400' y='400' isFlipHorizontally='0' scale='1' time='' countID='' />).@name = param1;
         _loc4_.@x = param2;
         _loc4_.@y = param3;
         var _loc5_:XML = _mapConfig[MapManager.currentMap.id];
         if(null == _loc5_)
         {
            _loc5_ = new XML("<map id=\'" + MapManager.currentMap.id + "\' />");
            (_loc6_ = configXml.elements("mapconfig")[0]).appendChild(_loc5_);
            _mapConfig[MapManager.currentMap.id] = _loc5_;
         }
         _loc5_.appendChild(_loc4_);
         addObjectToMap(_loc4_);
      }
      
      public static function addNewObjToMapByNameWithOutXml(param1:String, param2:Number, param3:Number) : void
      {
         if(null == _objectsConfig[param1])
         {
            Alarm.show("没有此装置");
            return;
         }
         if(getHasInMap(param1))
         {
            Alarm.show("场景中已存在");
            return;
         }
         var _loc4_:XML;
         (_loc4_ = <object name='ddd' x='400' y='400' isFlipHorizontally='0' scale='1' time='' countID='' />).@name = param1;
         _loc4_.@x = param2;
         _loc4_.@y = param3;
         addObjectToMap(_loc4_);
      }
      
      public static function setObjCountID(param1:int) : void
      {
         var _loc2_:MapObject = null;
         for each(_loc2_ in _currentMapObjs)
         {
            _loc2_.objCountID = param1;
            param1++;
         }
      }
      
      public static function getBtnClickByName(param1:String) : BtnClick
      {
         return _objectsConfig[param1];
      }
      
      private static function addObjectToMap(param1:XML) : void
      {
         var autoLoad:Boolean;
         var name:String = null;
         var btnClick:BtnClick = null;
         var x:Number = NaN;
         var y:Number = NaN;
         var scale:Number = NaN;
         var tip:String = null;
         var viewClass:String = null;
         var isFlipHorizontally:Boolean = false;
         var countID:int = 0;
         var authKey:String = null;
         var object:XML = param1;
         var addObj:Function = function():void
         {
            var _loc1_:MapObject = null;
            var _loc2_:* = undefined;
            if(viewClass != null && viewClass != "")
            {
               _loc2_ = getDefinitionByName("com.robot.app2.systems.mapObject.viewClass." + viewClass);
               _loc1_ = new _loc2_(name,x,y,tip,scale,isFlipHorizontally);
            }
            else
            {
               _loc1_ = new MapObject(name,x,y,tip,scale,isFlipHorizontally);
            }
            addIcon(_loc1_);
            _loc1_.countID = countID;
            _loc1_.btnClick = btnClick;
            _loc1_.loadView();
            _loc1_.xml = object;
            MapManager.currentMap.depthLevel.addChild(_loc1_);
            _currentMapObjs.push(_loc1_);
            _loc1_.visible = _isShow;
         };
         var time:String = object.@time;
         name = object.@name;
         if(_ignoreList != null && _ignoreList.indexOf(name) >= 0)
         {
            return;
         }
         btnClick = _objectsConfig[name];
         x = Number(object.@x);
         y = Number(object.@y);
         scale = Number(object.@scale);
         viewClass = String(_objectsConfig[name]["objClass"]);
         autoLoad = true;
         if(String(object.@autoLoad) == "false")
         {
            autoLoad = false;
         }
         if(!getIsInActivityTime(time))
         {
            return;
         }
         try
         {
            if("" != String(object.@tip))
            {
               tip = object.@tip;
            }
            else
            {
               tip = String(btnClick["tip"]);
            }
         }
         catch(e:Error)
         {
            DebugTrace.show("装置————" + name + "————————————————————没有配完整");
         }
         isFlipHorizontally = "1" == String(object.@isFlipHorizontally);
         countID = int(object.@countID);
         if(_authDic[name])
         {
            authKey = String(StringUtil.trim(_authDic[name]));
            MapObjectProcessFuns[authKey](function(param1:Boolean):void
            {
               if(param1)
               {
                  addObj();
                  DepthManager.swapDepthAll(MapManager.currentMap.depthLevel);
               }
            });
         }
         else
         {
            addObj();
         }
      }
      
      public static function addIcon(param1:MapObject) : void
      {
         var _loc3_:MovieClip = null;
         var _loc4_:Array = null;
         var _loc2_:BtnClick = _objectsConfig[param1.name];
         if(Boolean(_loc2_["icon"]) && _loc2_["icon"].length > 0)
         {
            _loc3_ = UIManager.getMovieClip("MapObject_Icon");
            _loc4_ = String(_loc2_["icon"]).split(",");
            _loc3_.gotoAndStop(int(_loc4_[0]));
            _loc3_.x = Number(_loc4_[1]);
            _loc3_.y = Number(_loc4_[2]);
            param1.setIcon(_loc3_);
         }
         else
         {
            param1.setIcon(null);
         }
      }
      
      public static function setIconToXML(param1:String, param2:String) : void
      {
         var _loc7_:XML = null;
         var _loc8_:MapObject = null;
         var _loc3_:XML = configXml.elements("allobjects")[0];
         var _loc4_:XMLList = _loc3_.elements("object");
         var _loc5_:BtnClick;
         (_loc5_ = _objectsConfig[param1])["icon"] = param2;
         var _loc6_:int = 0;
         while(_loc6_ < _currentMapObjs.length)
         {
            if((_loc8_ = _currentMapObjs[_loc6_]).name == param1)
            {
               addIcon(_loc8_);
               break;
            }
            _loc6_++;
         }
         for each(_loc7_ in _loc4_)
         {
            if(_loc7_.@name == param1)
            {
               _loc7_.@icon = param2;
               return;
            }
         }
      }
      
      public static function getIconData(param1:String) : String
      {
         var _loc4_:XML = null;
         var _loc2_:XML = configXml.elements("allobjects")[0];
         var _loc3_:XMLList = _loc2_.elements("object");
         for each(_loc4_ in _loc3_)
         {
            if(_loc4_.@name == param1)
            {
               return String(_loc4_.@icon);
            }
         }
         return null;
      }
      
      private static function getIsInActivityTime(param1:String) : Boolean
      {
         var _loc4_:CronTimeVo = null;
         var _loc5_:Array = null;
         var _loc6_:CronTimeVo = null;
         if(param1 == "")
         {
            return true;
         }
         var _loc2_:Array = param1.split(",");
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc5_ = (_loc2_[_loc3_] as String).split(" ");
            _loc6_ = new CronTimeVo(_loc5_[0],_loc5_[1],_loc5_[2],_loc5_[3],_loc5_[4],_loc5_[5]);
            _loc2_[_loc3_] = _loc6_;
            _loc3_++;
         }
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function get objectsConfig() : Dictionary
      {
         return _objectsConfig;
      }
      
      public static function get mapObjects() : Dictionary
      {
         return _mapConfig;
      }
      
      public static function get currentMapObjs() : Array
      {
         return _currentMapObjs;
      }
      
      public static function hideOrShowAllObjects(param1:Boolean) : void
      {
         var _loc2_:MapObject = null;
         _isShow = param1;
         for each(_loc2_ in _currentMapObjs)
         {
            _loc2_.visible = param1;
         }
         SceneActivityNpcController.shownpc(param1);
      }
      
      public static function getHasInMap(param1:String) : Boolean
      {
         var _loc2_:MapObject = null;
         for each(_loc2_ in _currentMapObjs)
         {
            if(_loc2_.name == param1)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function getMapObjetByName(param1:String) : MapObject
      {
         var _loc2_:MapObject = null;
         for each(_loc2_ in _currentMapObjs)
         {
            if(_loc2_.name == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      override public function start() : void
      {
         var loader:SeerUrlLoader = new SeerUrlLoader("加载场景配置文件");
         var sysdate:Date = SystemTimerManager.sysBJDate;
         var url:String = "mapobject_config.xml";
         PreloadZipXMLController.getXML(url,function(param1:*):void
         {
            configXml = new XML(param1);
            setUp();
            finish();
         });
      }
   }
}
