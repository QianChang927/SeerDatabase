package com.robot.app.task.petstory.util
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.newspaper.ContributeAlert;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.WeeklyTasksController;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.getDefinitionByName;
   
   public dynamic class BtnClick
   {
      
      public static const ALLOGRAPH:String = "allograph";
      
      public static const VOTE:String = "vote";
      
      public static const MAP:String = "map";
      
      public static const MODULE:String = "module";
      
      public static const URL:String = "url";
      
      public static const COPY:String = "copy";
      
      public static const PAGE:String = "page";
      
      public static const GETITEM:String = "get_item";
      
      public static const QILINROOM:String = "qilinroom";
      
      public static const MAP_ORE_MODULE:String = "map|module";
      
      public static const MAP_AND_MODULE:String = "map&module";
      
      public static const WEEKLY_TASKS:String = "weekly";
      
      public static const FUNC_WITH_CONTROLLER:String = "funcWithController";
      
      public static const ALARM:String = "alarm";
      
      public static const MAP_ORE_ALARM:String = "map|alarm";
       
      
      public var type:String;
      
      public var content:String;
      
      public var stat:String;
      
      public var arrow:String;
      
      public function BtnClick(param1:XML = null)
      {
         super();
         if(null != param1)
         {
            this.type = param1.@type;
            this.content = param1.toString();
            this.stat = param1.@stat;
         }
      }
      
      public static function parseMap(param1:String, param2:String) : void
      {
         var _loc4_:Array = null;
         var _loc3_:uint = uint(param1);
         if(param2)
         {
            if((_loc4_ = param2.split("_")).length >= 3)
            {
               MapManager.addAppArrowListener(_loc3_,Number(_loc4_[0]),Number(_loc4_[1]),Number(_loc4_[2]));
            }
         }
         if(_loc3_ >= 10001)
         {
            MapManager.changeLocalMap(_loc3_);
         }
         else
         {
            MapManager.changeMap(_loc3_);
         }
      }
      
      public static function parseModule(param1:String) : void
      {
         var _loc3_:Object = null;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc6_:String = null;
         var _loc7_:Array = null;
         var _loc8_:String = null;
         var _loc2_:Array = param1.split("|");
         if(_loc2_.length > 2)
         {
            _loc3_ = new Object();
            _loc5_ = (_loc4_ = (_loc4_ = String(_loc2_[2])).substr(1,_loc4_.length - 2)).split(",");
            for each(_loc6_ in _loc5_)
            {
               _loc7_ = _loc6_.split(":");
               _loc3_[_loc7_[0]] = _loc7_[1];
            }
            ModuleManager.showModule(ClientConfig.getModule(_loc2_[0]),"正在打开" + _loc2_[1] + "...",_loc3_);
         }
         else
         {
            _loc8_ = _loc2_.length > 1 ? String(_loc2_[1]) : "";
            ModuleManager.showModule(ClientConfig.getModule(_loc2_[0]),"正在打开" + _loc8_ + "...");
         }
      }
      
      public static function go(param1:String, param2:String, param3:String = null, param4:String = null) : void
      {
         var params2:Array = null;
         var mapid:int = 0;
         var analysisList:Array = null;
         var aclass:Class = null;
         var params3:Array = null;
         var mapid1:int = 0;
         var ntype:String = param1;
         var ncontent:String = param2;
         var narrow:String = param3;
         var nstat:String = param4;
         if(nstat != "")
         {
            SocketConnection.send(1022,uint(nstat));
         }
         switch(ntype)
         {
            case MAP:
               parseMap(ncontent,narrow);
               break;
            case VOTE:
               ContributeAlert.show();
               break;
            case URL:
               navigateToURL(new URLRequest(ncontent));
               break;
            case ALLOGRAPH:
               if(ncontent == "openNoNo")
               {
                  LinkToUrlManager.linkToHelpNonoPage();
               }
               else
               {
                  LinkToUrlManager.linkUrl(ncontent);
               }
               break;
            case MODULE:
               parseModule(ncontent);
               break;
            case WEEKLY_TASKS:
               WeeklyTasksController.go(int(ncontent));
               break;
            case MAP_AND_MODULE:
            case MAP_ORE_MODULE:
               params2 = ncontent.split(";");
               mapid = int(params2[0]);
               KTool.changeMapWithCallBack(mapid,function():void
               {
                  parseModule(params2[1]);
               });
               break;
            case FUNC_WITH_CONTROLLER:
               analysisList = ncontent.split(":");
               aclass = getDefinitionByName(String(analysisList[0])) as Class;
               aclass[String(analysisList[1])]();
               break;
            case ALARM:
               Alarm.show(ncontent);
               break;
            case MAP_ORE_ALARM:
               params3 = ncontent.split(";");
               mapid1 = int(params3[0]);
               KTool.changeMapWithCallBack(mapid1,function():void
               {
                  Alarm.show(params2[1]);
               });
         }
      }
      
      public function onClick() : void
      {
         go(this.type,this.content,this.arrow,this.stat);
      }
   }
}
