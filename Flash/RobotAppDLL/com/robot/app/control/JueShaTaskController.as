package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
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
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.Dictionary;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   
   public class JueShaTaskController
   {
      
      private static var _instance:com.robot.app.control.JueShaTaskController;
      
      public static var curTask:Object;
       
      
      private var configXml:XML;
      
      private var _tasks:Dictionary;
      
      private var taskMc:MovieClip;
      
      public function JueShaTaskController()
      {
         var loader:SeerUrlLoader;
         var url:String;
         super();
         this._tasks = new Dictionary();
         loader = new SeerUrlLoader("加载配置文件");
         url = "xml/JueshaTask.xml";
         PreloadZipXMLController.getXML("JueshaTask.xml",function(param1:*):void
         {
            var start:Number;
            var end:Number;
            var now:Number;
            var data:* = param1;
            configXml = new XML(data);
            parsexml();
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
      
      public static function get instance() : com.robot.app.control.JueShaTaskController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.JueShaTaskController();
         }
         return _instance;
      }
      
      public static function npcClick() : void
      {
         var _loc3_:int = 0;
         var _loc1_:String = "";
         var _loc2_:String = "";
         if(Boolean(curTask) && curTask.type == 3)
         {
            switch(curTask.id)
            {
               case 2:
                  _loc1_ = "没错，我就是人见人爱的超级巨星雷小伊！";
                  _loc2_ = "快把你的神奇药水交出来！";
                  _loc3_ = int(NPC.LEI_XIAO_YI);
                  break;
               case 4:
                  _loc1_ = "夏天到了，带着你的橡皮鸭子去戏水吧！";
                  _loc2_ = "快把你的宝贝交出来！";
                  _loc3_ = int(NPC.CHU_XIA);
                  break;
               case 8:
                  _loc1_ = "耗子的腰子多大个肾……咦，这不是谁家那小谁吗？";
                  _loc2_ = "快把你的宝贝交出来！";
                  _loc3_ = int(NPC.JUMOGUAI);
                  break;
               case 9:
                  _loc1_ = "你好，我是魔灵仙女，你可以叫我花仙子……";
                  _loc2_ = "快把你的宝贝交出来！";
                  _loc3_ = int(NPC.MO_LING_XIAN_NV);
            }
         }
         NpcDialog.show(_loc3_,[_loc1_],[_loc2_],[clickOverHandle],false,null);
      }
      
      private static function clickOverHandle() : void
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         var _loc3_:String = null;
         if(curTask)
         {
            _loc1_ = -1;
            _loc2_ = 0;
            _loc3_ = "";
            switch(curTask.id)
            {
               case 2:
                  _loc2_ = 4310;
                  _loc3_ = "雷小伊";
                  break;
               case 4:
                  _loc2_ = 4312;
                  _loc3_ = "初夏";
                  break;
               case 8:
                  _loc2_ = 4313;
                  _loc3_ = "巨蘑怪";
                  break;
               case 9:
                  _loc2_ = 4314;
                  _loc3_ = "魔灵仙女";
            }
            if(_loc2_ != 0)
            {
               FightManager.fightNoMapBoss(_loc3_,_loc2_);
            }
         }
      }
      
      public function initdata(param1:Boolean = true) : void
      {
         var hasGot:Boolean = false;
         var boo:Boolean = param1;
         KTool.getBitSet([8173,8174],function(param1:Array):void
         {
            var hasTask:Boolean = false;
            var obj:Object = null;
            var idx:int = 0;
            var arr1:Array = param1;
            hasGot = arr1[0] > 0;
            if(hasGot)
            {
               com.robot.app.control.JueShaTaskController.instance.hideTaskDetail();
            }
            else
            {
               hasTask = arr1[1] > 0;
               if(hasTask)
               {
                  KTool.getMultiValue([1910,1911,1912],function(param1:Array):void
                  {
                     curTask = com.robot.app.control.JueShaTaskController.instance.getTaskByid(param1[1] + 1);
                     if(Boolean(curTask) && !boo)
                     {
                        showTaskDetail();
                     }
                  });
               }
               else
               {
                  if(boo && curTask && curTask.type != 1)
                  {
                     Alarm.show("你成功帮助小绝煞完成了一个梦想！",function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("GetJueShaPanel"));
                     });
                  }
                  if(Boolean(curTask) && curTask.type == 3)
                  {
                     obj = getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").getMapObjetByName("jueshanpc_" + curTask.id);
                     if(obj)
                     {
                        if(getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").currentMapObjs)
                        {
                           idx = int(getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").currentMapObjs.indexOf(obj));
                           if(idx != -1)
                           {
                              getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").currentMapObjs.splice(idx,1);
                           }
                        }
                        obj.destory();
                     }
                  }
                  curTask = null;
                  hideTaskDetail();
               }
            }
         });
      }
      
      private function mapObjInit(param1:MapEvent) : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         if(Boolean(curTask) && curTask.type == 3)
         {
            switch(curTask.id)
            {
               case 2:
                  _loc2_ = 623;
                  _loc3_ = 377;
                  break;
               case 4:
                  _loc2_ = 821;
                  _loc3_ = 313;
                  break;
               case 8:
                  _loc2_ = 400;
                  _loc3_ = 400;
                  break;
               case 9:
                  _loc2_ = 661;
                  _loc3_ = 241;
                  break;
               default:
                  _loc2_ = 400;
                  _loc3_ = 400;
            }
            if((_loc4_ = int(MapManager.currentMap.id)) == parseInt(curTask.value))
            {
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").addNewObjToMapByNameWithOutXml("jueshanpc_" + curTask.id,_loc2_,_loc3_);
            }
         }
      }
      
      private function parsexml() : void
      {
         var _loc2_:Object = null;
         var _loc3_:XML = null;
         var _loc1_:XMLList = this.configXml.task;
         for each(_loc3_ in _loc1_)
         {
            _loc2_ = new Object();
            _loc2_.id = int(_loc3_.@id);
            _loc2_.type = int(_loc3_.@type);
            _loc2_.func = String(_loc3_.@func);
            _loc2_.value = String(_loc3_.@value);
            _loc2_.total = int(_loc3_.@total);
            this._tasks[_loc2_.id] = _loc2_;
         }
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
            ResourceManager.getResource(ClientConfig.getAppRes("jueshaTask"),function(param1:MovieClip):void
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
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "close":
               this.hideTaskDetail();
               break;
            case "see":
               ModuleManager.showModule(ClientConfig.getAppModule("GetJueShaPanel"),"正在打开。。。",1);
               break;
            case "onekey":
               if(curTask)
               {
                  KTool.buyProductByCallback(243855,1,function():void
                  {
                     SocketConnection.sendByQueue(CommandID.JUESHA_TASK,[11],function(param1:*):void
                     {
                        initdata();
                        hideTaskDetail();
                        ModuleManager.showModule(ClientConfig.getAppModule("GetJueShaPanel"));
                     });
                  });
               }
         }
      }
      
      public function updateTaskDetail() : void
      {
         if(Boolean(this.taskMc) && Boolean(curTask))
         {
            this.taskMc.mc.gotoAndStop(curTask.id);
         }
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
