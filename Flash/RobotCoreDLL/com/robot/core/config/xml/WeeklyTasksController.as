package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   
   public class WeeklyTasksController
   {
      
      private static var _dataHash:HashMap;
      
      private static var configXml:XML;
      
      private static const XML_PATH:String = "xml/weeklyTasks.xml";
      
      private static const MAP_TYPE:String = "map";
      
      private static const MODULE_TYPE:String = "module";
      
      private static const FUNC_TYPE:String = "func";
      
      private static const URL_TYPE:String = "url";
       
      
      public function WeeklyTasksController()
      {
         super();
      }
      
      public static function setup() : void
      {
         _dataHash = new HashMap();
         var loader:SeerUrlLoader = new SeerUrlLoader("加载配置文件");
         PreloadZipXMLController.getXML("weeklyTasks.xml",function(param1:*):void
         {
            var _loc3_:XML = null;
            configXml = new XML(param1);
            var _loc2_:XMLList = configXml.elements("tasks")[0].elements("task");
            for each(_loc3_ in _loc2_)
            {
               _dataHash.add(uint(_loc3_.@id),_loc3_);
            }
         });
      }
      
      public static function go(param1:uint) : void
      {
         var _loc3_:String = null;
         var _loc2_:XML = _dataHash.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = String(_loc2_.@type).toLocaleLowerCase();
            switch(_loc3_)
            {
               case MAP_TYPE:
                  changeMap(_loc2_);
                  break;
               case MODULE_TYPE:
                  showModule(_loc2_);
                  break;
               case FUNC_TYPE:
                  funcHandle(_loc2_);
                  break;
               case URL_TYPE:
                  openUrl(_loc2_);
            }
            return;
         }
      }
      
      private static function changeMap(param1:XML) : void
      {
         var _loc2_:int = 0;
         if(param1)
         {
            _loc2_ = int(param1);
            if(Boolean(_loc2_))
            {
               MapManager.changeMap(_loc2_);
               return;
            }
            return;
         }
      }
      
      private static function showModule(param1:XML) : void
      {
         var _loc2_:Object = null;
         if(param1)
         {
            _loc2_ = checkHasArgs(param1);
            if(_loc2_ != null)
            {
               ModuleManager.showModule(ClientConfig.getAppModule(param1),"",_loc2_);
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule(param1));
            }
            return;
         }
      }
      
      private static function checkHasArgs(param1:XML) : Object
      {
         var _loc3_:Array = null;
         var _loc4_:Object = null;
         var _loc5_:String = null;
         var _loc6_:Array = null;
         var _loc2_:Object = Object(param1.@args);
         if(_loc2_ != null && _loc2_ != "")
         {
            _loc3_ = String(_loc2_).split(";");
            _loc4_ = new Object();
            if(_loc3_ != null && _loc3_.length > 0)
            {
               for each(_loc5_ in _loc3_)
               {
                  _loc6_ = _loc5_.split(":");
                  _loc4_[_loc6_[0]] = _loc6_[1];
               }
               return _loc4_;
            }
            return null;
         }
         return null;
      }
      
      private static function openUrl(param1:XML) : void
      {
         navigateToURL(new URLRequest(param1));
      }
      
      private static function funcHandle(param1:XML) : void
      {
         var _loc2_:Object = null;
         var _loc3_:Array = null;
         var _loc4_:Class = null;
         if(param1)
         {
            _loc2_ = checkHasArgs(param1);
            _loc3_ = String(param1).split(":");
            _loc4_ = getDefinitionByName(String(_loc3_[0])) as Class;
            if(_loc2_ != null)
            {
               _loc4_[String(_loc3_[1])](_loc2_);
            }
            else
            {
               _loc4_[String(_loc3_[1])]();
            }
            return;
         }
      }
   }
}
