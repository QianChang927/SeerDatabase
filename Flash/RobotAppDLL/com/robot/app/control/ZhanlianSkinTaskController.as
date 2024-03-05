package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ZhanlianSkinTaskXmlInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   
   public class ZhanlianSkinTaskController
   {
      
      public static var ZHANLIANTASK_UPDATE:String = "zhanliantask_update";
      
      private static var _instance:com.robot.app.control.ZhanlianSkinTaskController;
       
      
      private var _task:XML;
      
      private var _ui:MovieClip;
      
      private var time:Number;
      
      private var left:int;
      
      public var lastTask:XML;
      
      public var result:int;
      
      private var times:Array;
      
      public var version:int;
      
      public var lastfriendly:int;
      
      public var friendly:int;
      
      private var dialogs:Array;
      
      public function ZhanlianSkinTaskController()
      {
         super();
         this.setup();
      }
      
      public static function getinstance() : com.robot.app.control.ZhanlianSkinTaskController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.ZhanlianSkinTaskController();
         }
         return _instance;
      }
      
      private function setup() : void
      {
         this.checkMap();
         this.request(0);
         SocketConnection.addCmdListener(42393,this.cmdHandle);
         SystemTimerManager.addTickFun(this.timerHandle);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.checkMap);
      }
      
      private function checkVersion() : void
      {
         var _loc3_:Number = NaN;
         var _loc1_:Number = Number(SystemTimerManager.sysBJDate.time);
         this.times = ZhanlianSkinTaskXmlInfo.getVersions();
         this.version = 1;
         var _loc2_:int = 0;
         while(_loc2_ < this.times.length)
         {
            _loc3_ = Number(SystemTimerManager.get24DateByStr(this.times[_loc2_]).time);
            if(_loc1_ <= _loc3_)
            {
               break;
            }
            ++this.version;
            _loc2_++;
         }
      }
      
      private function cmdHandle(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         this.lastTask = ZhanlianSkinTaskXmlInfo.getTaskById(_loc3_);
         this.result = _loc2_.readUnsignedInt();
         var _loc4_:int = int(_loc2_.readUnsignedInt());
         this.lastfriendly = this.friendly;
         if(this.result == 3)
         {
            Alarm.show(ZhanlianSkinTaskXmlInfo.getTaskTimeOverDialog());
         }
         if(Boolean(this.task) && int(this.task.@id) == _loc3_)
         {
            this.request(this.result);
         }
      }
      
      private function request(param1:int) : void
      {
         var value:int = param1;
         KTool.getPlayerInfo([1147,1148],function(param1:Array):void
         {
            var arr:Array = param1;
            KTool.getMultiValue([101987],function(param1:Array):void
            {
               var arr1:Array = param1;
               friendly = arr1[0];
               task = ZhanlianSkinTaskXmlInfo.getTaskById(arr[0]);
               if(value != -1)
               {
                  EventManager.dispatchEvent(new DynamicEvent(ZHANLIANTASK_UPDATE,value));
               }
               time = arr[1];
               if(task == null)
               {
                  hideTaskPanel();
               }
               checkMap();
               if(Boolean(task) && task.@type == 4)
               {
                  if(time == 0)
                  {
                     SocketConnection.sendByQueue(42392,[int(task.@id),1,0],function(param1:SocketEvent):void
                     {
                        refreshTaskinfo();
                     });
                     return;
                  }
                  left = int(task.@tasktime) - (SystemTimerManager.time - time) + 1;
                  timerHandle();
               }
            });
         });
      }
      
      public function refreshTaskinfo() : void
      {
         this.request(-1);
      }
      
      public function getTask() : void
      {
         SocketConnection.sendByQueue(42383,[32,this.version],function(param1:SocketEvent):void
         {
            request(0);
         });
      }
      
      private function checkMap(param1:Event = null) : void
      {
         var _loc2_:int = 0;
         this.hideTaskPanel();
         if(this.task != null && Boolean(int(this.task.@type == 4)))
         {
            _loc2_ = int(MapManager.currentMap.id);
            if(_loc2_ != int(this.task.@mapid))
            {
               this.showTaskPanel();
            }
            else
            {
               this.dialogs = String(this.task.@par).split("|");
               this.showDialog();
            }
         }
      }
      
      private function showDialog() : void
      {
         var id:int = 0;
         var dialog:XML = null;
         var answer:XMLList = null;
         var answers:Array = null;
         var funs:Array = null;
         var axml:XML = null;
         var fun2:Function = null;
         if(Boolean(this.dialogs) && Boolean(this.dialogs.length))
         {
            id = int(this.dialogs.shift());
            dialog = ZhanlianSkinTaskXmlInfo.getDialogById(id);
            answer = dialog.answer;
            answers = [];
            funs = [];
            for each(axml in answer)
            {
               answers.push(String(axml.@des));
            }
            if(answers.length == 0)
            {
               answers = null;
               funs = null;
               fun2 = function():void
               {
                  showDialog();
               };
            }
            else
            {
               funs.push(function():void
               {
                  showDialog();
               });
               fun2 = null;
            }
            NpcDialog.show(NPC.SEER,[String(dialog.@ques)],answers,funs,false,fun2,true);
         }
         else if(Boolean(this.task) && int(this.task.@type) == 4)
         {
            SocketConnection.sendByQueue(42392,[int(this.task.@id),2,0],function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               MapManager.changeMapWithCallback(11898,function():void
               {
                  ModuleManager.showAppModule("ZhanlianSkinTaskMainPanel",1);
               });
            });
         }
      }
      
      private function hideTaskPanel() : void
      {
         if(this._ui)
         {
            if(this._ui.parent)
            {
               this._ui.parent.removeChild(this._ui);
            }
            this._ui = null;
         }
      }
      
      private function timerHandle() : void
      {
         if(Boolean(this.task) && int(this.task.@type) == 4)
         {
            --this.left;
            this.showtime();
         }
         this.checkVersion();
      }
      
      private function showtime() : void
      {
         if(Boolean(this._ui) && Boolean(this.task))
         {
            this._ui["time"].text = this.left;
            this._ui["mc"]["des"].text = String(this.task.@taskdes);
         }
      }
      
      private function showTaskPanel() : void
      {
         ResourceManager.getResource(ClientConfig.getAppResource("2020/0117/zhanlianTaskPanel"),function(param1:MovieClip):void
         {
            if(Boolean(task) && int(task.@type) == 4)
            {
               _ui = param1;
               _ui.y = 50;
               _ui.mouseChildren = _ui.mouseEnabled = false;
               _ui.x = (MainManager.getStageWidth() - _ui.width) / 2;
               showtime();
               LevelManager.mapLevel.addChild(_ui);
            }
         });
      }
      
      public function dealFun(param1:int, param2:String) : void
      {
         switch(param1)
         {
            case 1:
         }
      }
      
      public function get task() : XML
      {
         return this._task;
      }
      
      public function set task(param1:XML) : void
      {
         this._task = param1;
      }
   }
}
