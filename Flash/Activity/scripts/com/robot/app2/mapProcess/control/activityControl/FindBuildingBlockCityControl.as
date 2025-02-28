package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.controller.GetPetController;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.ui.loading.Loading;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class FindBuildingBlockCityControl
   {
      
      private static var _posiInfoArray:Array;
      
      private static var _posiArray:Array;
      
      private static var _tipMv:MovieClip;
      
      public static const TIP_TYPE_1:int = 1;
      
      public static const TIP_TYPE_2:int = 2;
      
      private static var _tipFun:Function;
       
      
      public function FindBuildingBlockCityControl()
      {
         super();
      }
      
      public static function initForMap817() : void
      {
         if(hasFininshPreTask)
         {
            DisplayUtil.removeForParent(mapMv);
         }
         else
         {
            mapMv.buttonMode = true;
            MapListenerManager.add(mapMv,function(param1:*):void
            {
               SocketConnection.send(1022,86057765);
               SocketConnection.send(1022,86057766);
               MapListenerManager.remove(mapMv,false);
               mapMv.buttonMode = false;
               playPreTask();
            });
         }
         initPaipaizuo();
         MapListenerManager.add(buildBtn as InteractiveObject,function(param1:*):void
         {
            if(isInPosi)
            {
               return;
            }
            ModuleManager.showModule(ClientConfig.getAppModule("BuildBuluokePanel"));
            SocketConnection.send(1022,86057769);
         }," 铸造布洛克");
         MapListenerManager.add(signBtn as InteractiveObject,function(param1:*):void
         {
            SocketConnection.send(1022,86057770);
            ModuleManager.showModule(ClientConfig.getAppModule("JimuchengSignPanel"));
         },"许愿领经验啦");
         MapListenerManager.add(MapManager.currentMap.controlLevel["screen0"] as InteractiveObject,function(param1:*):void
         {
            SocketConnection.send(1022,86057768);
            ModuleManager.showModule(ClientConfig.getAppModule("PaipaizuoInfoPanel"));
         },"绝版精灵等你拿");
         MapListenerManager.add(MapManager.currentMap.controlLevel["screen1"] as InteractiveObject,function(param1:*):void
         {
            SocketConnection.send(1022,86057770);
            ModuleManager.showModule(ClientConfig.getAppModule("JimuchengSignPanel"));
         },"许愿领经验啦");
      }
      
      private static function initPaipaizuo() : void
      {
         updatePosiInfo();
         addPaipaizuoSocketEvent();
         _posiArray = [];
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            addDengZiClickEvent(_loc1_);
            _loc1_++;
         }
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,onMapClick);
      }
      
      private static function removePaipaizuoSocketEvent() : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_IN_POSI,onGetPosi);
         SocketConnection.removeCmdListener(CommandID.GET_OUT_POSI,onOutPosi);
         SocketConnection.removeCmdListener(CommandID.ALL_LEAVE_POSI,onAllLeave);
      }
      
      private static function addPaipaizuoSocketEvent() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_IN_POSI,onGetPosi);
         SocketConnection.addCmdListener(CommandID.GET_OUT_POSI,onOutPosi);
         SocketConnection.addCmdListener(CommandID.ALL_LEAVE_POSI,onAllLeave);
      }
      
      private static function onAllLeave(param1:*) : void
      {
         var by:ByteArray;
         var e:* = param1;
         OgreController.isShow = true;
         if(!isInPosi)
         {
            updatePosiInfo();
            return;
         }
         SocketConnection.send(1022,86057772);
         MainManager.actorModel.stopAutoWalk(false);
         by = new ByteArray();
         by.writeObject([]);
         SocketConnection.send(CommandID.PEOPLE_WALK,0,450,450,by.length,by);
         LevelManager.closeMouseEvent();
         removePaipaizuoSocketEvent();
         numMv.gotoAndPlay("reward");
         setTimeout(function():void
         {
            var _loc6_:int = 0;
            LevelManager.openMouseEvent();
            addPaipaizuoSocketEvent();
            updatePosiInfo();
            var _loc1_:ByteArray = e.data as ByteArray;
            _loc1_.position = 0;
            var _loc2_:int = int(_loc1_.readUnsignedInt());
            var _loc3_:Object = getRewardInfo(_loc2_);
            var _loc4_:int = int(_loc3_["id"]);
            var _loc5_:int = int(_loc3_["count"]);
            if(-1 != [469,484,1280,1283,1423].indexOf(_loc4_))
            {
               _loc6_ = int(_loc1_.readUnsignedInt());
               GetPetController.getPet(_loc4_,_loc6_);
            }
            else
            {
               if(_loc4_ == 1)
               {
                  MainManager.actorInfo.coins += _loc5_;
               }
               ItemInBagAlert.show(_loc4_,"恭喜你获得了" + _loc5_ + "个" + ItemXMLInfo.getName(_loc4_) + "，已经放入了你的储物箱中！");
            }
            addPaipaizuoSocketEvent();
            updatePosiInfo();
            numMv.addFrameScript(numMv.totalFrames - 1,null);
         },2500);
      }
      
      private static function getRewardInfo(param1:int) : Object
      {
         var _loc2_:Object = [{
            "id":400063,
            "count":1
         },{
            "id":469,
            "count":1
         },{
            "id":1529,
            "count":1
         },{
            "id":1280,
            "count":1
         },{
            "id":1283,
            "count":1
         },{
            "id":1423,
            "count":1
         },{
            "id":1200759,
            "count":1
         },{
            "id":400065,
            "count":1
         },{
            "id":400064,
            "count":1
         },{
            "id":1,
            "count":5000
         },{
            "id":1,
            "count":2000
         },{
            "id":300004,
            "count":5
         },{
            "id":1,
            "count":500
         }];
         return _loc2_[param1];
      }
      
      private static function onMapClick(param1:MapEvent) : void
      {
         var e:MapEvent = param1;
         if(isInPosi)
         {
            showTip(TIP_TYPE_1,function():void
            {
               SocketConnection.send(CommandID.GET_OUT_POSI);
               MainManager.actorModel.stopAutoWalk(false);
            });
         }
      }
      
      private static function updatePosiInfo() : void
      {
         SocketConnection.sendWithCallback(CommandID.GET_POSI_INFO,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            _posiInfoArray = [];
            _posiInfoArray.push(_loc2_.readUnsignedInt());
            _posiInfoArray.push(_loc2_.readUnsignedInt());
            _posiInfoArray.push(_loc2_.readUnsignedInt());
            _posiInfoArray.push(_loc2_.readUnsignedInt());
            numMv.gotoAndPlay("num" + peopleNum);
         });
      }
      
      private static function get isInPosi() : Boolean
      {
         var _loc1_:int = 0;
         while(_loc1_ < _posiInfoArray.length)
         {
            if(_posiInfoArray[_loc1_] == MainManager.actorInfo.userID)
            {
               return true;
            }
            _loc1_++;
         }
         return false;
      }
      
      private static function addDengZiClickEvent(param1:int) : void
      {
         var i:int = param1;
         var dengzi:MovieClip = MapManager.currentMap.controlLevel["p" + i];
         _posiArray[i] = new Point(dengzi.x,dengzi.y);
         dengzi.buttonMode = true;
         MapListenerManager.add(dengzi,function(param1:*):void
         {
            if(isInPosi)
            {
               return;
            }
            SocketConnection.send(1022,86057771);
            SocketConnection.send(CommandID.GET_IN_POSI,i);
         },"抢凳子");
      }
      
      private static function onGetPosi(param1:SocketEvent) : void
      {
         var id:int;
         var isLastOne:Boolean;
         var posi:int = 0;
         var by:ByteArray = null;
         var actorModle:BasePeoleModel = null;
         var e:SocketEvent = param1;
         var b:ByteArray = e.data as ByteArray;
         if(null == b)
         {
            Alarm.show("你今天已经获打开好多好多礼盒了，不要贪心，明天再来吧");
            return;
         }
         id = int(b.readUnsignedInt());
         posi = int(b.readUnsignedInt());
         _posiInfoArray[posi] = id;
         isLastOne = -1 == _posiInfoArray.indexOf(0);
         if(id == MainManager.actorID)
         {
            OgreController.isShow = false;
            if(isLastOne)
            {
               by = new ByteArray();
               by.writeObject([]);
               SocketConnection.send(CommandID.PEOPLE_WALK,0,_posiArray[posi].x,_posiArray[posi].y,by.length,by);
               return;
            }
            LevelManager.closeMouseEvent();
            MainManager.actorModel.stopAutoWalk();
            MainManager.actorModel.addEventListener(RobotEvent.WALK_END,function(param1:*):void
            {
               MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,arguments.callee);
               LevelManager.openMouseEvent();
               var _loc3_:ByteArray = new ByteArray();
               _loc3_.writeObject([]);
               SocketConnection.send(CommandID.PEOPLE_WALK,0,_posiArray[posi].x,_posiArray[posi].y,_loc3_.length,_loc3_);
            });
            MainManager.actorModel.walkAction([MainManager.actorModel.pos,_posiArray[posi]],true);
         }
         else
         {
            actorModle = UserManager.getUserModel(id);
            if(actorModle)
            {
               actorModle.x = _posiArray[posi].x;
               actorModle.y = _posiArray[posi].y;
            }
         }
         numMv.gotoAndPlay("num" + peopleNum);
      }
      
      private static function onOutPosi(param1:SocketEvent) : void
      {
         var _loc5_:ByteArray = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = int(_loc2_.readUnsignedInt());
         _posiInfoArray[_loc4_] = 0;
         if(_loc3_ == MainManager.actorInfo.userID)
         {
            (_loc5_ = new ByteArray()).writeObject([]);
            SocketConnection.send(CommandID.PEOPLE_WALK,0,450,450,_loc5_.length,_loc5_);
            OgreController.isShow = true;
         }
         numMv.gotoAndPlay("num" + peopleNum);
      }
      
      private static function get hasFininshPreTask() : Boolean
      {
         return TasksManager.getTaskStatus(1490) == TasksManager.COMPLETE;
      }
      
      private static function playPreTask() : void
      {
         var d1:Array;
         var d2:Array;
         var d3:Array;
         var d4:Array;
         var d5:Array;
         var d6:Array;
         var d7:Array;
         var taskQuePro:TaskQuneProcessor = null;
         TasksManager.accept(1490);
         MainManager.selfVisible = false;
         buildBtn.visible = signBtn.visible = false;
         d1 = [[NPC.SEER,["派吉危险！快下来！"],null],[NPC.PAIJI,[MainManager.actorInfo.nick + "是你呀~ 你怎么来得这么慢？我都在这里等你半天了。"],null],[NPC.SEER,["嘿嘿，我不是很习惯利用黑洞进行旅行嘛。我还差点把你的光年电梯撞坏了…"],null]];
         d2 = [[NPC.SEER,["它应该就在我身后的…不知道为什么不见了…嘿嘿，它应该认得回家的路的吧。"],null],[NPC.PAIJI,["你太高估它了吧！虽然它是个神奇的宝贝，但是它只是一个稍微神奇一点点的道具，它不认路的！"],null]];
         d3 = [[NPC.PAIJI,["好了，既然你已经安全抵达了，那我就向你介绍下我的王国吧"],["你的王国？"]]];
         d4 = [[NPC.PAIJI,["嗯！那么寻找电梯零件的任务就继续交给你啦~"],["没问题，包在我身上。"]],[NPC.PAIJI,["对了，如果我们把电梯修好了，你想用它去哪里呢？它能带你去到任何时间的任何地方哦。"],["任何时间的任何地方…"]]];
         d5 = [[NPC.SEER,["迪恩…迪恩你到底是生是死…我们大家都好想念好想念你…~"],null],[NPC.PAIJI,["迪恩是谁？我的电梯可是很宝贵的，你可不要把机会随随便便浪费了。"],null]];
         d6 = [[NPC.PAIJI,["你不要难过…它是你的好朋友吗？听起来好像很久没见的样子呢，它发生什么事情了吗？"],null]];
         d7 = [[NPC.SEER,["我要用光年电梯回到迪恩为贾斯汀站长牺牲的那天，我要阻止这一切发生！~"],null],[NPC.SEER,["派吉，你的电梯就交给我了！我一定会把所有零件找齐的！"],null]];
         taskQuePro = new TaskQuneProcessor();
         taskQuePro.addDialog(d1);
         taskQuePro.addMapMv(mapMv,1,"mv");
         taskQuePro.addDialog(d2);
         taskQuePro.addMapMv(mapMv,2,"mv");
         taskQuePro.addDialog(d3);
         taskQuePro.addFullMv(ClientConfig.getFullMovie("jimucheng"));
         taskQuePro.addMapMv(mapMv,3,"mv");
         taskQuePro.addDialog(d4);
         taskQuePro.addMapMv(mapMv,4,"mv");
         taskQuePro.addDialog(d5);
         taskQuePro.addMapMv(mapMv,5,"mv");
         taskQuePro.addDialog(d6);
         taskQuePro.addMapMv(mapMv,6,"mv");
         taskQuePro.addDialog(d7);
         taskQuePro.addMapMv(mapMv,7,"mv");
         taskQuePro.procesEndFun = function():void
         {
            MainManager.selfVisible = true;
            TasksManager.complete(1490,0);
            SocketConnection.send(1022,86057767);
            taskQuePro.destory();
            taskQuePro = null;
            DisplayUtil.removeForParent(mapMv);
            buildBtn.visible = signBtn.visible = true;
         };
         taskQuePro.start();
      }
      
      private static function get buildBtn() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["buildBtn"];
      }
      
      private static function get signBtn() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["signBtn"];
      }
      
      private static function get mapMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["mapMv"];
      }
      
      private static function get numMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["numMv"];
      }
      
      private static function get peopleNum() : int
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         while(_loc2_ < _posiInfoArray.length)
         {
            if(0 != _posiInfoArray[_loc2_])
            {
               _loc1_++;
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      public static function destoryFor817() : void
      {
         _tipMv = null;
         _tipFun = null;
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,onMapClick);
         removePaipaizuoSocketEvent();
      }
      
      private static function showTip(param1:int, param2:Function = null) : void
      {
         var mcloader:MCLoader = null;
         var type:int = param1;
         var fun:Function = param2;
         _tipFun = fun;
         if(null == _tipMv)
         {
            mcloader = new MCLoader(ClientConfig.getActiveUrl("paipaizuo"),null,Loading.TITLE_AND_PERCENT,"加载..");
            mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
            {
               var e:* = param1;
               mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
               _tipMv = mcloader.loader.content["tip"];
               _tipMv.stop();
               mcloader.closeLoading();
               mcloader.loader.unload();
               mcloader.clear();
               MapListenerManager.add(_tipMv,function(param1:MouseEvent):void
               {
                  switch(param1.target.name)
                  {
                     case "close":
                     case "cancelBtn":
                        LevelManager.showOrRemoveMapLevelandToolslevel(true);
                        LevelManager.appLevel.removeChild(_tipMv);
                        break;
                     case "applyBtn":
                        LevelManager.showOrRemoveMapLevelandToolslevel(true);
                        LevelManager.appLevel.removeChild(_tipMv);
                        if(null != _tipFun)
                        {
                           _tipFun();
                        }
                  }
               });
               _tipMv.buttonMode = false;
               _tipMv.mouseChildren = true;
               showTip(type,fun);
            });
            mcloader.doLoad();
         }
         else
         {
            LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
            _tipMv.gotoAndStop(type);
            LevelManager.appLevel.addChild(_tipMv);
         }
      }
   }
}
