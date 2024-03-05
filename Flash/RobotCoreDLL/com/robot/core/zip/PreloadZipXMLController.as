package com.robot.core.zip
{
   import com.riaidea.utils.zip.ZipArchive;
   import com.riaidea.utils.zip.ZipEvent;
   import com.riaidea.utils.zip.ZipFile;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.ui.alert.Alarm2;
   import org.taomee.bean.BaseBean;
   
   public class PreloadZipXMLController extends BaseBean
   {
      
      private static var _zip:ZipArchive;
      
      private static var _callBackList:Array = [];
       
      
      public function PreloadZipXMLController()
      {
         super();
      }
      
      private static function onInit(param1:ZipEvent) : void
      {
         var _loc3_:Array = null;
         var _loc4_:String = null;
         var _loc5_:Function = null;
         var _loc6_:ZipFile = null;
         var _loc7_:XML = null;
         var _loc2_:ZipArchive = param1.target as ZipArchive;
         _loc2_.removeEventListener(ZipEvent.PROGRESS,onProgress);
         _loc2_.removeEventListener(ZipEvent.LOADED,onLoaded);
         _loc2_.removeEventListener(ZipEvent.INIT,onInit);
         _loc2_.removeEventListener(ZipEvent.ERROR,onError);
         while(_callBackList.length > 0)
         {
            _loc3_ = _callBackList.shift();
            _loc4_ = String(_loc3_[0]);
            _loc5_ = _loc3_[1];
            _loc6_ = _loc2_.getFileByName(_loc4_);
            _loc7_ = new XML(_loc6_.data);
            _loc2_.removeFileByName(_loc4_);
            _loc5_(_loc7_);
         }
      }
      
      private static function onProgress(param1:ZipEvent) : void
      {
      }
      
      private static function onLoaded(param1:ZipEvent) : void
      {
      }
      
      private static function onError(param1:ZipEvent) : void
      {
      }
      
      public static function getXML(param1:String, param2:Function, param3:Boolean = false) : void
      {
         var xml:XML = null;
         var loader:SeerUrlLoader = null;
         var xmlFile:ZipFile = null;
         var name:String = param1;
         var callBack:Function = param2;
         var reLoad:Boolean = param3;
         if(MainManager.isDebug || reLoad)
         {
            loader = new SeerUrlLoader("加载配置文件");
            loader.doLoad(ClientConfig.getResPath("xml/" + name),function(param1:*):void
            {
               var data:* = param1;
               try
               {
                  xml = new XML(data);
               }
               catch(error:Error)
               {
                  Alarm2.show(name + "格式不正确！");
               }
               callBack(xml);
            });
         }
         else
         {
            try
            {
               if(Boolean(_zip) && _zip.numFiles > 0)
               {
                  xmlFile = _zip.getFileByName(name);
                  _zip.removeFileByName(name);
                  xml = new XML(xmlFile.data);
                  callBack(xml);
               }
               else
               {
                  _callBackList.push([name,callBack]);
               }
            }
            catch(e:*)
            {
               getXML(name,callBack,true);
            }
         }
      }
      
      override public function start() : void
      {
         this.loadZip();
         finish();
      }
      
      private function loadZip() : void
      {
         if(!MainManager.isDebug)
         {
            _zip = new ZipArchive();
            _zip.addEventListener(ZipEvent.PROGRESS,onProgress);
            _zip.addEventListener(ZipEvent.LOADED,onLoaded);
            _zip.addEventListener(ZipEvent.INIT,onInit);
            _zip.addEventListener(ZipEvent.ERROR,onError);
            _zip.load(ClientConfig.getResPath("xml/prexml.swf"));
         }
      }
   }
}
