package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.Dictionary;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   
   public class FearBoxController
   {
      
      private static var _instance:com.robot.app.control.FearBoxController;
      
      public static var curTask:Object;
      
      public static var mapArr:Array = [[411,459,439],[20,105,51],[60,338,82],[451,484,683],[969,967,988],[795,702,775]];
      
      public static var mapObjXy:Array = [[{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      }],[{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      }],[{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      }],[{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      }],[{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      }],[{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      },{
         "x":300,
         "y":300
      }]];
       
      
      private var configXml:XML;
      
      private var _tasks:Dictionary;
      
      private var _ques:Dictionary;
      
      public var totalQuestionNum:int;
      
      private var taskMc:MovieClip;
      
      public function FearBoxController()
      {
         var loader:SeerUrlLoader;
         var url:String;
         super();
         this._tasks = new Dictionary();
         this._ques = new Dictionary();
         this.totalQuestionNum = 0;
         loader = new SeerUrlLoader("加载配置文件");
         url = "xml/fearBox.xml";
         PreloadZipXMLController.getXML("fearBox.xml",function(param1:*):void
         {
            var start:Number;
            var end:Number;
            var now:Number;
            var data:* = param1;
            configXml = new XML(data);
            parsexml();
            EventManager.addEventListener("chatTxtEvent",taskOver);
            start = new Date(2015,6,3).time;
            end = new Date(2015,6,10).time;
            now = Number(SystemTimerManager.sysBJDate.time);
            MapManager.addEventListener(MapEvent.MAP_OBJECT_INIT_FINISH,mapObjInit);
            initdata(false);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               initdata();
            });
         });
      }
      
      public static function get instance() : com.robot.app.control.FearBoxController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.FearBoxController();
         }
         return _instance;
      }
      
      public static function npcClick() : void
      {
         var _loc1_:String = "";
         if(curTask.step == curTask.total - 1)
         {
            _loc1_ = "恭喜你找到了我的所有分身！送你点奖励吧！";
         }
         else
         {
            _loc1_ = "恭喜你找到了我的分身，我的其他分身就藏在其他星球上，快去找找吧！";
         }
         NpcDialog.show(NPC.XIAO_TIAN_SHA,[_loc1_],null,null,false,clickOverHandle);
      }
      
      private static function clickOverHandle() : void
      {
         var idx:int = 0;
         if(curTask)
         {
            idx = int(mapArr[curTask.id - 5].indexOf(MapManager.currentMap.id));
            SocketConnection.sendByQueue(CommandID.FEARBOX_TASK_OVER,[curTask.id,idx + 1],function(param1:*):void
            {
               var _loc3_:int = 0;
               var _loc2_:Object = getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").getMapObjetByName("fenshen");
               if(_loc2_)
               {
                  if(getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").currentMapObjs)
                  {
                     _loc3_ = int(getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").currentMapObjs.indexOf(_loc2_));
                     if(_loc3_ != -1)
                     {
                        getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").currentMapObjs.splice(_loc3_,1);
                     }
                  }
                  _loc2_.destory();
               }
               instance.initdata();
            },function(param1:*):void
            {
            });
         }
      }
      
      private function initdata(param1:Boolean = true) : void
      {
         var boo:Boolean = param1;
         KTool.getMultiValue([1901,1892,1893,1894,1895,1896,1897,1898,1899,1900,1902,1903],function(param1:Array):void
         {
            var nowtask:Object = null;
            var tmpStep:int = 0;
            var n:int = 0;
            var arr:Array = param1;
            if(arr[10] != 0)
            {
               nowtask = com.robot.app.control.FearBoxController._instance.getTaskByid(arr[arr[10]]);
               if(nowtask)
               {
                  nowtask.step = arr[11];
               }
               if(Boolean(nowtask) && nowtask.type == 4)
               {
                  tmpStep = 0;
                  n = 0;
                  while(n < 3)
                  {
                     if(KTool.getBit(arr[11],n + 1) == 1)
                     {
                        tmpStep++;
                     }
                     n++;
                  }
                  nowtask.step = tmpStep;
                  nowtask.rstep = arr[11];
               }
               com.robot.app.control.FearBoxController.curTask = nowtask;
               if(nowtask)
               {
                  if(!boo)
                  {
                     KTool.getBitSet([8172],function(param1:Array):void
                     {
                        if(param1[0] > 0)
                        {
                           hideTaskDetail();
                        }
                        else
                        {
                           showTaskDetail();
                        }
                     });
                  }
                  updateTaskDetail();
               }
               else
               {
                  hideTaskDetail();
               }
            }
            else
            {
               hideTaskDetail();
               if(boo && Boolean(curTask))
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("FearBoxPanel"),"正在打开。。。");
               }
            }
         });
      }
      
      private function mapObjInit(param1:MapEvent) : void
      {
         var _loc2_:Boolean = false;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         if(Boolean(curTask) && curTask.type == 4)
         {
            _loc3_ = int(MapManager.currentMap.id);
            if((_loc4_ = int(mapArr[curTask.id - 5].indexOf(_loc3_))) != -1 && KTool.getBit(curTask.rstep,_loc4_ + 1) == 0)
            {
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").addNewObjToMapByNameWithOutXml("fenshen",mapObjXy[curTask.id - 5][_loc4_].x,mapObjXy[curTask.id - 5][_loc4_].y);
            }
         }
      }
      
      private function taskOver(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         if(e.paramObject == "赛尔号暑期更精彩" && MapManager.currentMap.id == 1 && curTask && curTask.id == 3)
         {
            SocketConnection.sendByQueue(CommandID.FEARBOX_TASK_OVER,[3,1],function(param1:*):void
            {
               initdata();
            },function(param1:*):void
            {
            });
         }
      }
      
      private function parsexml() : void
      {
         var _loc2_:Object = null;
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc6_:Array = null;
         var _loc7_:XMLList = null;
         var _loc8_:XML = null;
         var _loc1_:XMLList = this.configXml.task;
         for each(_loc3_ in _loc1_)
         {
            _loc2_ = new Object();
            _loc2_.id = int(_loc3_.@id);
            _loc2_.type = int(_loc3_.@type);
            _loc2_.func = String(_loc3_.@func);
            _loc2_.value = int(_loc3_.@value);
            _loc2_.total = int(_loc3_.@total);
            this._tasks[_loc2_.id] = _loc2_;
         }
         _loc4_ = this.configXml.item;
         for each(_loc5_ in _loc4_)
         {
            _loc2_ = new Object();
            _loc2_.id = int(_loc5_.@id);
            _loc2_.question = String(_loc5_.@question);
            _loc2_.answer = int(_loc5_.@rightAnswer);
            _loc6_ = [];
            _loc7_ = _loc5_.answer;
            for each(_loc8_ in _loc7_)
            {
               _loc6_.push(String(_loc8_.@desc));
            }
            _loc2_.answers = _loc6_;
            ++this.totalQuestionNum;
            this._ques[_loc2_.id + 1] = _loc2_;
         }
      }
      
      public function getQuestionByid(param1:int) : Object
      {
         return this._ques[param1];
      }
      
      public function getTaskByid(param1:int) : Object
      {
         return this._tasks[param1];
      }
      
      public function showTaskDetail() : void
      {
         if(this.taskMc)
         {
            this.taskMc.visible = true;
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getAppRes("taskDetail"),function(param1:MovieClip):void
            {
               taskMc = param1;
               taskMc.x = 706.7;
               taskMc.y = 126.25;
               updateTaskDetail();
               taskMc.addEventListener(MouseEvent.CLICK,clickHandle);
               LevelManager.iconLevel.addChild(taskMc);
            });
         }
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         var id:int = 0;
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "close":
               this.hideTaskDetail();
               break;
            case "see":
               ModuleManager.showModule(ClientConfig.getAppModule("FearBoxPanel"),"正在打开。。。",1);
               break;
            case "onekey":
               if(curTask)
               {
                  id = 243786;
                  if(curTask.type == 3)
                  {
                     id = 243785;
                  }
                  else
                  {
                     id = 243786;
                  }
                  KTool.buyProductByCallback(id,1,function():void
                  {
                     SocketConnection.sendByQueue(CommandID.FEARBOX_TASK,[10],function(param1:*):void
                     {
                        hideTaskDetail();
                        ModuleManager.showModule(ClientConfig.getAppModule("FearBoxPanel"));
                     },function(param1:*):void
                     {
                     });
                  },null);
               }
         }
      }
      
      public function updateTaskDetail() : void
      {
         var _loc1_:int = 0;
         if(Boolean(this.taskMc) && Boolean(curTask))
         {
            _loc1_ = int(curTask.id);
            if(curTask.id >= 5 && curTask.id <= 10)
            {
               _loc1_ = 5;
            }
            else if(curTask.id == 11)
            {
               _loc1_ = 6;
            }
            this.taskMc.mc.gotoAndStop(_loc1_);
            this.taskMc.num.text = curTask.step + "/" + curTask.total;
         }
      }
      
      public function check() : void
      {
      }
      
      public function hideTaskDetail() : void
      {
         if(this.taskMc)
         {
            this.taskMc.visible = false;
            this.taskMc.removeEventListener(MouseEvent.CLICK,this.clickHandle);
            if(this.taskMc.parent)
            {
               this.taskMc.parent.removeChild(this.taskMc);
            }
            this.taskMc = null;
         }
      }
   }
}
