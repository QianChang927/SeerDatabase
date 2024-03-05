package com.robot.app2.email
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   
   public class EmailXmlController
   {
      
      private static var _dataHash:HashMap;
      
      private static var _xml:XML;
      
      private static const XML_PATH:String = "xml/email.xml";
      
      private static const MAP_TYPE:String = "map";
      
      private static const MODULE_TYPE:String = "module";
      
      private static const FUNC_TYPE:String = "func";
      
      private static const URL_TYPE:String = "url";
      
      private static const MAP_APP_TYPE:String = "map/module";
       
      
      public function EmailXmlController()
      {
         super();
      }
      
      public static function setup() : void
      {
         _dataHash = new HashMap();
         var loader:SeerUrlLoader = new SeerUrlLoader("加载配置文件");
         PreloadZipXMLController.getXML("email.xml",function(param1:*):void
         {
            var _loc4_:XML = null;
            var _loc2_:XML = new XML(param1);
            var _loc3_:XMLList = _loc2_.elements("elements")[0].elements("element");
            for each(_loc4_ in _loc3_)
            {
               _dataHash.add(uint(_loc4_.@id),_loc4_);
            }
         });
      }
      
      public static function go(param1:EmailLinkInfo) : void
      {
         var _loc2_:String = null;
         _xml = _dataHash.getValue(param1.linkId);
         if(_xml)
         {
            _loc2_ = String(_xml.@type).toLocaleLowerCase();
            switch(_loc2_)
            {
               case MAP_TYPE:
                  changeMap();
                  break;
               case MODULE_TYPE:
                  showModule(param1);
                  break;
               case FUNC_TYPE:
                  funcHandle(param1);
                  break;
               case URL_TYPE:
                  openUrl(param1);
                  break;
               case MAP_APP_TYPE:
                  changeMapAndshowModule(param1);
            }
         }
      }
      
      private static function changeMap() : void
      {
         var _loc1_:int = 0;
         if(_xml)
         {
            _loc1_ = int(_xml);
            if(Boolean(_loc1_))
            {
               MapManager.changeMap(_loc1_);
            }
         }
      }
      
      private static function showModule(param1:EmailLinkInfo) : void
      {
         var _loc2_:Object = null;
         if(_xml)
         {
            _loc2_ = checkHasArgs();
            ModuleManager.showModule(ClientConfig.getAppModule(_xml),"",param1);
         }
      }
      
      private static function checkHasArgs() : Object
      {
         var _loc2_:Array = null;
         var _loc3_:Object = null;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc1_:Object = Object(_xml.@args);
         if(_loc1_ != null && _loc1_ != "")
         {
            _loc2_ = String(_loc1_).split(";");
            _loc3_ = new Object();
            if(_loc2_ != null && _loc2_.length > 0)
            {
               for each(_loc4_ in _loc2_)
               {
                  _loc5_ = _loc4_.split(":");
                  _loc3_[_loc5_[0]] = _loc5_[1];
               }
               return _loc3_;
            }
         }
         return null;
      }
      
      private static function openUrl(param1:EmailLinkInfo) : void
      {
         var _loc2_:* = _xml;
         if(_loc2_.indexOf("?") < 0)
         {
            _loc2_ += "?";
         }
         if(param1.sParam)
         {
            _loc2_ += param1.sParam;
         }
         navigateToURL(new URLRequest(_loc2_));
      }
      
      private static function funcHandle(param1:EmailLinkInfo) : void
      {
         var _loc2_:Object = null;
         var _loc3_:Array = null;
         var _loc4_:Class = null;
         var _loc5_:Function = null;
         if(_xml)
         {
            _loc2_ = checkHasArgs();
            _loc3_ = String(_xml).split(":");
            if((_loc5_ = (_loc4_ = getDefinitionByName(String(_loc3_[0])) as Class)[String(_loc3_[1])]) != null)
            {
               if(_loc5_.length > 0)
               {
                  _loc5_(param1);
               }
               else
               {
                  _loc5_();
               }
            }
         }
      }
      
      private static function changeMapAndshowModule(param1:EmailLinkInfo) : void
      {
         var str:String = null;
         var mapId:int = 0;
         var app:String = null;
         var linkInfo:EmailLinkInfo = param1;
         if(_xml)
         {
            str = String(_xml);
            mapId = int(str.split(";")[0]);
            app = String(str.split(";")[1]);
            if(Boolean(mapId))
            {
               MapManager.changeMapWithCallback(mapId,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule(app),"",linkInfo);
                  if(linkInfo.linkId == 97)
                  {
                     StatManager.sendStat2014("0804密保认证重做","点击邮件推送跳转功能","2017运营活动");
                  }
               });
            }
         }
      }
   }
}
