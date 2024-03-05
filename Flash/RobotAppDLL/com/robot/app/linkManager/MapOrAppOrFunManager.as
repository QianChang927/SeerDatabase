package com.robot.app.linkManager
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.getDefinitionByName;
   
   public class MapOrAppOrFunManager
   {
       
      
      public function MapOrAppOrFunManager()
      {
         super();
      }
      
      public static function deal(param1:String, param2:Function = null) : void
      {
         var fList:Array;
         var cls1:Class = null;
         var func:Function = null;
         var arr:Array = null;
         var mapid:int = 0;
         var str:String = param1;
         var fun:Function = param2;
         var regApp:RegExp = /app:/;
         var regMap:RegExp = /map:/;
         var regMapApp:RegExp = /mapApp:/;
         var urlReg:RegExp = /url:/;
         var alarmReg:RegExp = /alarm:/;
         var _type:int = 0;
         if(str.search(regApp) == 0)
         {
            _type = 1;
         }
         else if(str.search(regMap) == 0)
         {
            _type = 2;
         }
         else if(str.search(regMapApp) == 0)
         {
            _type = 3;
         }
         else if(str.search(urlReg) == 0)
         {
            _type = 4;
         }
         else if(str.search(alarmReg) == 0)
         {
            _type = 5;
         }
         fList = str.split(":");
         if(_type == 0)
         {
            cls1 = getDefinitionByName(String(fList[0])) as Class;
            func = cls1[String(fList[1])];
            func(null);
         }
         else if(_type == 1)
         {
            ModuleManager.showModule(ClientConfig.getAppModule(fList[1]));
         }
         else if(_type == 2)
         {
            MapManager.changeMap(int(fList[1]));
         }
         else if(_type == 3)
         {
            arr = String(fList[1]).split(",");
            mapid = int(arr[0]);
            KTool.changeMapWithCallBack(mapid,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule(arr[1]));
            });
         }
         else if(_type == 4)
         {
            navigateToURL(new URLRequest(str.replace("url:","")),"_blank");
         }
         else if(_type == 5)
         {
            Alarm.show(fList[1]);
         }
         if(fun != null)
         {
            fun();
         }
      }
   }
}
