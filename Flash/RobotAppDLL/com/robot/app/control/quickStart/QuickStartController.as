package com.robot.app.control.quickStart
{
   import com.robot.app.panel.NewSeerGuidePanel;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.QuickStartXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class QuickStartController
   {
      
      public static var current:XML;
      
      public static var DATACOMPLETE:String = "complete";
      
      public static var star:Array;
      
      public static var fighting:Array;
      
      public static var system:Array;
      
      public static var jobTitle:Array;
      
      public static var newStar:Array = [];
      
      private static var _instance:EventDispatcher;
       
      
      public function QuickStartController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:Array = null;
         var _loc2_:int = 0;
         var _loc3_:BasePeoleModel = null;
         if(BufferRecordManager.getState(MainManager.actorInfo,500))
         {
            BasePeoleModel.needShowJobTitle = true;
            _loc1_ = UserManager.getUserModelList();
            _loc2_ = 0;
            while(_loc2_ < _loc1_.length)
            {
               _loc3_ = _loc1_[_loc2_];
               _loc3_.showJobTitle();
               _loc2_++;
            }
            MainManager.actorModel.showJobTitle();
         }
      }
      
      public static function getStarInfo(param1:String, param2:String) : QuickStart_StarInfo
      {
         var _loc3_:QuickStart_StarInfo = null;
         for each(_loc3_ in star)
         {
            if(_loc3_.galaxyID == param1 && _loc3_.starID == param2)
            {
               return _loc3_;
            }
         }
         return null;
      }
      
      public static function addStar(param1:String, param2:String) : void
      {
         var _loc3_:QuickStart_StarInfo = new QuickStart_StarInfo();
         _loc3_.galaxyID = param1;
         _loc3_.starID = param2;
         star.push(_loc3_);
         newStar.push(_loc3_);
      }
      
      public static function delStar(param1:String, param2:String) : void
      {
         var galaxyID:String = param1;
         var starID:String = param2;
         star = star.filter(function(param1:QuickStart_StarInfo, param2:int, param3:Array):Boolean
         {
            if(param1.galaxyID == galaxyID && param1.starID == starID)
            {
               return false;
            }
            return true;
         });
      }
      
      public static function isNewStar(param1:String, param2:String) : Boolean
      {
         var galaxyID:String = param1;
         var starID:String = param2;
         return newStar.some(function(param1:QuickStart_StarInfo, param2:int, param3:Array):Boolean
         {
            if(param1.galaxyID == galaxyID && param1.starID == starID)
            {
               return true;
            }
            return false;
         });
      }
      
      public static function getSystemInfo(param1:String) : QuickStart_SystemInfo
      {
         var _loc2_:QuickStart_SystemInfo = null;
         for each(_loc2_ in system)
         {
            if(_loc2_.id == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public static function delSystem(param1:String) : void
      {
         var id:String = param1;
         system = system.filter(function(param1:QuickStart_SystemInfo, param2:int, param3:Array):Boolean
         {
            if(param1.id == id)
            {
               return false;
            }
            return true;
         });
      }
      
      public static function getFightingInfo(param1:String) : QuickStart_FightingInfo
      {
         var _loc2_:QuickStart_FightingInfo = null;
         for each(_loc2_ in fighting)
         {
            if(_loc2_.id == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public static function delFighting(param1:String) : void
      {
         var id:String = param1;
         fighting = fighting.filter(function(param1:QuickStart_FightingInfo, param2:int, param3:Array):Boolean
         {
            if(param1.id == id)
            {
               return false;
            }
            return true;
         });
      }
      
      public static function getJobTitleInfo(param1:String) : QuickStart_JobTitleInfo
      {
         var _loc2_:QuickStart_JobTitleInfo = null;
         for each(_loc2_ in jobTitle)
         {
            if(_loc2_.id == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public static function getGrowthValue(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.QUICKSTART_GET_MY_GROWTHVALUE,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_GET_MY_GROWTHVALUE,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            fun(_loc4_);
         });
         SocketConnection.send(CommandID.QUICKSTART_GET_MY_GROWTHVALUE);
      }
      
      public static function updateAll() : void
      {
         updateStar();
      }
      
      private static function updateStar() : void
      {
         SocketConnection.addCmdListener(CommandID.QUICKSTART_STARDISCOVERY_INFO,function(param1:SocketEvent):void
         {
            var _loc6_:QuickStart_StarInfo = null;
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_STARDISCOVERY_INFO,arguments.callee);
            star = [];
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:uint = 0;
            while(_loc5_ < _loc4_)
            {
               (_loc6_ = new QuickStart_StarInfo()).galaxyID = _loc3_.readUnsignedInt().toString();
               _loc6_.starID = _loc3_.readUnsignedInt().toString();
               star.push(_loc6_);
               _loc5_++;
            }
            updateSystem();
         });
         SocketConnection.send(CommandID.QUICKSTART_STARDISCOVERY_INFO);
      }
      
      private static function updateSystem() : void
      {
         SocketConnection.addCmdListener(CommandID.QUICKSTART_SYSTEM_INFO,function(param1:SocketEvent):void
         {
            var _loc6_:QuickStart_SystemInfo = null;
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_SYSTEM_INFO,arguments.callee);
            system = [];
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:uint = 0;
            while(_loc5_ < _loc4_)
            {
               (_loc6_ = new QuickStart_SystemInfo()).id = _loc3_.readUnsignedInt().toString();
               _loc6_.isCom = _loc3_.readUnsignedInt().toString();
               system.push(_loc6_);
               _loc5_++;
            }
            updateFighting();
         });
         SocketConnection.send(CommandID.QUICKSTART_SYSTEM_INFO);
      }
      
      private static function updateFighting() : void
      {
         SocketConnection.addCmdListener(CommandID.QUICKSTART_FIGHTING_INFO,function(param1:SocketEvent):void
         {
            var _loc6_:QuickStart_FightingInfo = null;
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_FIGHTING_INFO,arguments.callee);
            fighting = [];
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:uint = 0;
            while(_loc5_ < _loc4_)
            {
               (_loc6_ = new QuickStart_FightingInfo()).id = _loc3_.readUnsignedInt().toString();
               _loc6_.isCom = _loc3_.readUnsignedInt().toString();
               fighting.push(_loc6_);
               _loc5_++;
            }
            updateJobTitle();
         });
         SocketConnection.send(CommandID.QUICKSTART_FIGHTING_INFO);
      }
      
      public static function updateJobTitle() : void
      {
         SocketConnection.addCmdListener(CommandID.QUICKSTART_GET_JOBTITLE_INFO,function(param1:SocketEvent):void
         {
            var _loc6_:QuickStart_JobTitleInfo = null;
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_GET_JOBTITLE_INFO,arguments.callee);
            jobTitle = [];
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint = _loc3_.readUnsignedInt();
            var _loc5_:uint = 0;
            while(_loc5_ < _loc4_)
            {
               (_loc6_ = new QuickStart_JobTitleInfo()).id = _loc3_.readUnsignedInt().toString();
               _loc6_.status = _loc3_.readUnsignedInt().toString();
               _loc6_.getTitle = _loc3_.readUnsignedInt().toString();
               _loc6_.getMoney = _loc3_.readUnsignedInt().toString();
               jobTitle.push(_loc6_);
               _loc5_++;
            }
            dispatchEvent(new Event(DATACOMPLETE));
         });
         SocketConnection.send(CommandID.QUICKSTART_GET_JOBTITLE_INFO);
      }
      
      public static function updateSingleStar(param1:String, param2:String, param3:Function) : void
      {
         var galaxyID:String = param1;
         var starID:String = param2;
         var fun:Function = param3;
         SocketConnection.addCmdListener(CommandID.QUICKSTART_STARDISCOVERY_INFO_SINGLE,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_STARDISCOVERY_INFO_SINGLE,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            fun(_loc3_);
         });
         SocketConnection.send(CommandID.QUICKSTART_STARDISCOVERY_INFO_SINGLE,uint(galaxyID),uint(starID));
      }
      
      public static function getStarGrowthValue(param1:String, param2:String, param3:String, param4:Function) : void
      {
         var galaxyID:String = param1;
         var starID:String = param2;
         var index:String = param3;
         var fun:Function = param4;
         SocketConnection.addCmdListener(CommandID.QUICKSTART_STARDISCOVERY_GET_GROWTHVALUE,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_STARDISCOVERY_GET_GROWTHVALUE,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            fun(_loc3_);
         });
         SocketConnection.send(CommandID.QUICKSTART_STARDISCOVERY_GET_GROWTHVALUE,uint(galaxyID),uint(starID),uint(index) + 1);
      }
      
      public static function getSystemGrowthValue(param1:String, param2:Function) : void
      {
         var id:String = param1;
         var fun:Function = param2;
         SocketConnection.addCmdListener(CommandID.QUICKSTART_SYSTEM_GET_GROWTHVALUE,function(param1:SocketEvent):void
         {
            var _loc4_:QuickStart_SystemInfo = null;
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_SYSTEM_GET_GROWTHVALUE,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            for each(_loc4_ in system)
            {
               if(_loc4_.id == id)
               {
                  _loc4_.isCom = "2";
               }
            }
            fun(_loc3_);
         });
         SocketConnection.send(CommandID.QUICKSTART_SYSTEM_GET_GROWTHVALUE,uint(id));
      }
      
      public static function getFightingGrowthValue(param1:String, param2:Function) : void
      {
         var id:String = param1;
         var fun:Function = param2;
         SocketConnection.addCmdListener(CommandID.QUICKSTART_FIGHTING_GET_GROWTHVALUE,function(param1:SocketEvent):void
         {
            var _loc4_:QuickStart_FightingInfo = null;
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_FIGHTING_GET_GROWTHVALUE,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            for each(_loc4_ in fighting)
            {
               if(_loc4_.id == id)
               {
                  _loc4_.isCom = "2";
               }
            }
            fun(_loc3_);
         });
         SocketConnection.send(CommandID.QUICKSTART_FIGHTING_GET_GROWTHVALUE,uint(id));
      }
      
      public static function getJobTitle(param1:String, param2:Function) : void
      {
         var id:String = param1;
         var fun:Function = param2;
         SocketConnection.addCmdListener(CommandID.QUICKSTART_GET_JOBTITLE,function(param1:SocketEvent):void
         {
            var _loc5_:QuickStart_JobTitleInfo = null;
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_GET_JOBTITLE,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:uint;
            if((_loc4_ = _loc3_.readUnsignedInt()) > MainManager.actorInfo.jobTitle)
            {
               MainManager.actorInfo.jobTitle = _loc4_;
               MainManager.actorModel.showJobTitle();
            }
            for each(_loc5_ in jobTitle)
            {
               if(_loc5_.id == id)
               {
                  _loc5_.getTitle = "1";
               }
            }
            fun();
         });
         SocketConnection.send(CommandID.QUICKSTART_GET_JOBTITLE,uint(id));
      }
      
      public static function getStarExp(param1:String, param2:String, param3:String, param4:Function) : void
      {
         var galaxyID:String = param1;
         var starID:String = param2;
         var index:String = param3;
         var fun:Function = param4;
         SocketConnection.addCmdListener(CommandID.QUICKSTART_GET_STARDISCOVERY_EXP,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_GET_STARDISCOVERY_EXP,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            fun(_loc3_);
            NewSeerGuidePanel.update();
         });
         SocketConnection.send(CommandID.QUICKSTART_GET_STARDISCOVERY_EXP,uint(galaxyID),uint(starID),uint(index) + 1);
      }
      
      public static function getSystemExp(param1:String, param2:Function) : void
      {
         var id:String = param1;
         var fun:Function = param2;
         SocketConnection.addCmdListener(CommandID.QUICKSTART_GET_SYSTEM_EXP,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_GET_SYSTEM_EXP,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            fun(_loc3_);
         });
         SocketConnection.send(CommandID.QUICKSTART_GET_SYSTEM_EXP,uint(id));
      }
      
      public static function getFightingExp(param1:String, param2:Function) : void
      {
         var id:String = param1;
         var fun:Function = param2;
         SocketConnection.addCmdListener(CommandID.QUICKSTART_GET_FIGHTING_EXP,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_GET_FIGHTING_EXP,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            fun(_loc3_);
         });
         SocketConnection.send(CommandID.QUICKSTART_GET_FIGHTING_EXP,uint(id));
      }
      
      public static function getJobTitleMoney(param1:String, param2:Function) : void
      {
         var id:String = param1;
         var fun:Function = param2;
         SocketConnection.addCmdListener(CommandID.QUICKSTART_GET_JOBTITLE_MONEY,function(param1:SocketEvent):void
         {
            var by:ByteArray;
            var cnt:uint;
            var info:QuickStart_JobTitleInfo = null;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_GET_JOBTITLE_MONEY,arguments.callee);
            by = e.data as ByteArray;
            cnt = by.readUnsignedInt();
            for each(info in jobTitle)
            {
               if(info.id == id)
               {
                  info.getMoney = "1";
               }
            }
            MainManager.actorInfo.coins += cnt;
            Alarm.show("恭喜你获得了" + TextFormatUtil.getRedTxt(cnt.toString()) + "赛尔豆。",function():void
            {
               fun();
            });
         });
         SocketConnection.send(CommandID.QUICKSTART_GET_JOBTITLE_MONEY,uint(id));
      }
      
      public static function showArrow(param1:XML) : void
      {
         var info:XML = param1;
         if(MapManager.currentMap.id == uint(info.@Map))
         {
            CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
            CommonUI.addYellowArrow(MapManager.currentMap.topLevel,uint(info.@PosX),uint(info.@PosY),uint(info.@Rotation));
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            if(MapManager.currentMap.id == uint(info.@Map))
            {
               CommonUI.addYellowArrow(MapManager.currentMap.topLevel,uint(info.@PosX),uint(info.@PosY),uint(info.@Rotation));
            }
         });
      }
      
      public static function getMinTarget(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.QUICKSTART_STARDISCOVERY_INFO,function(param1:SocketEvent):void
         {
            var by:ByteArray;
            var len:uint;
            var galaxyID:String = null;
            var starID:String = null;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.QUICKSTART_STARDISCOVERY_INFO,arguments.callee);
            star = [];
            by = e.data as ByteArray;
            by.position = 0;
            len = by.readUnsignedInt();
            if(len == 0)
            {
               current = null;
               fun("");
               return;
            }
            galaxyID = by.readUnsignedInt().toString();
            starID = by.readUnsignedInt().toString();
            SocketConnection.addCmdListener(CommandID.QUICKSTART_STARDISCOVERY_INFO_SINGLE,function(param1:SocketEvent):void
            {
               var _loc7_:XML = null;
               var _loc8_:uint = 0;
               SocketConnection.removeCmdListener(CommandID.QUICKSTART_STARDISCOVERY_INFO_SINGLE,arguments.callee);
               var _loc3_:ByteArray = param1.data as ByteArray;
               var _loc4_:uint = _loc3_.readUnsignedInt();
               var _loc5_:XMLList = QuickStartXMLInfo.getStarTargets(galaxyID,starID);
               var _loc6_:uint = 0;
               while(_loc6_ < 4)
               {
                  if(_loc6_ < _loc4_)
                  {
                     _loc7_ = _loc5_[_loc6_];
                     _loc8_ = _loc3_.readUnsignedInt();
                     _loc3_.readUnsignedInt();
                     if(_loc8_ != 2)
                     {
                        current = QuickStartXMLInfo.getStarXml(galaxyID,starID);
                        fun(_loc7_.@Name);
                        return;
                     }
                  }
                  _loc6_++;
               }
               current = null;
               fun("");
            });
            SocketConnection.send(CommandID.QUICKSTART_STARDISCOVERY_INFO_SINGLE,uint(galaxyID),uint(starID));
         });
         SocketConnection.send(CommandID.QUICKSTART_STARDISCOVERY_INFO);
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(_instance == null)
         {
            _instance = new EventDispatcher();
         }
         return _instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         getInstance().dispatchEvent(param1);
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
   }
}
