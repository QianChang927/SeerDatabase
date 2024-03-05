package com.robot.core.manager
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.aticon.FlyAction;
   import com.robot.core.aticon.WalkAction;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.info.pet.ExeingPetInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.map.config.MapConfig;
   import com.robot.core.mode.ActorModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.DisplayObject;
   import flash.display.Sprite;
   import flash.display.Stage;
   import flash.events.Event;
   import flash.external.ExternalInterface;
   import flash.geom.Point;
   import flash.ui.ContextMenu;
   import flash.utils.ByteArray;
   import flash.utils.Endian;
   import flash.utils.IDataInput;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.getTimer;
   import flash.utils.setTimeout;
   import org.taomee.bean.BeanEvent;
   import org.taomee.bean.BeanManager;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.TaomeeManager;
   
   public class MainManager
   {
      
      private static const UI_PATH:String = ClientConfig.getDLLPath("UI.swf");
      
      public static const DefSpeed:Number = 4.6;
      
      public static const BOSS_IDS:Array = [47,34,42,50,69,70,88,113,132,187,216,264,384,391,274,421,490,538,0,587,617,672,715,755,798,804,855,0,875,925,945,957,997,1012,1045,1061,1085,1109,1131,1147,1164,1191,1221,1265,1304,1354,1377,1391,1418,1431,1453,1477,1521,1569,1598,1633,1667,1723,0,0,1808,1853,1892,1923,1964,1995,2023,2058,2094,2151,2171,2263,2399,2455,2507,0,2641,2656,2763,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,413,1240,1286,1341];
      
      public static var isClothHalfDay:Boolean;
      
      public static var isRoomHalfDay:Boolean;
      
      public static var iFortressHalfDay:Boolean;
      
      public static var isHQHalfDay:Boolean;
      
      private static var _isMember:Boolean;
      
      private static var _actorInfo:UserInfo;
      
      private static var _actorModel:ActorModel;
      
      private static var _uiLoader:MCLoader;
      
      public static var contextMenu:ContextMenu;
      
      public static var actorID:uint;
      
      public static var password:String = "";
      
      public static var serverID:uint;
      
      public static var ip:String = "";
      
      public static var port:uint;
      
      public static var cdnIP:String = "";
      
      public static var cdnSpeed:int;
      
      public static var session:ByteArray;
      
      public static var loadMapTime:int;
      
      public static var isFighting:Boolean = false;
      
      public static var tad:String;
      
      public static var isDebug:Boolean = false;
      
      public static var isNewUser:Boolean = false;
      
      public static var newSeerProgress:int = -1;
      
      private static var _onlineTimeValue:int = -1;
      
      private static var _actorState:uint;
      
      private static var _actorPrevState:uint;
      
      private static var _hidePosition:Point;
      
      public static var sessionKey:String;
      
      public static var oldStatus:uint;
      
      public static var walkType:Boolean;
      
      public static var visitor:Boolean = true;
      
      public static var age:int;
      
      public static var _interval:Number = 0;
      
      private static var _trainListarr:Array;
      
      public static var start:int;
       
      
      public function MainManager()
      {
         super();
      }
      
      public static function set actorState(param1:uint) : void
      {
         _actorPrevState = _actorState;
         _actorState = param1;
      }
      
      public static function get actorState() : uint
      {
         return _actorState;
      }
      
      public static function get actorPrevState() : uint
      {
         return _actorPrevState;
      }
      
      public static function get mainFrameInterval() : Number
      {
         if(_interval == 0)
         {
            _interval = 1000 / (LevelManager.stage.frameRate - 4);
         }
         return _interval;
      }
      
      public static function setup(param1:Object) : void
      {
         _actorInfo = new UserInfo();
         UserInfo.setForLoginInfo(_actorInfo,param1 as IDataInput);
         SocketConnection.mainSocket.userID = _actorInfo.userID;
         loaderUILib();
         updateOnlineTime();
      }
      
      private static function loaderUILib() : void
      {
         DebugTrace.show("Progress-1：开始加载UI资源",UI_PATH);
         _uiLoader = new MCLoader(UI_PATH,MainManager.getStage(),1,"正在加载星球");
         _uiLoader.setIsShowClose(false);
         _uiLoader.addEventListener(MCLoadEvent.SUCCESS,onLoadUI);
         _uiLoader.addEventListener(MCLoadEvent.ERROR,onFailLoadUI);
         _uiLoader.doLoad();
      }
      
      private static function onLoadUI(param1:MCLoadEvent) : void
      {
         UIManager.setup(param1.getLoader());
         initBean();
      }
      
      private static function initBean() : void
      {
         ItemXMLInfo.setup();
         DebugTrace.show("Progress-2：创建主角，执行BEAN控制");
         creatActor();
         BeanManager.addEventListener(BeanEvent.COMPLETE,onAllBeanComplete);
         BeanManager.start();
      }
      
      public static function creatActor() : void
      {
         _actorModel = new ActorModel(_actorInfo);
         if(_actorInfo.actionType != 0)
         {
            _actorModel.walk = new FlyAction(_actorModel);
         }
         else
         {
            _actorModel.walk = new WalkAction();
         }
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.CREATED_ACTOR));
      }
      
      private static function getforeverValue(param1:Array, param2:Function = null) : void
      {
         var num:int = 0;
         var foreverArr:Array = param1;
         var func:Function = param2;
         var paramArr:ByteArray = new ByteArray();
         for each(num in foreverArr)
         {
            paramArr.writeInt(num);
         }
         SocketConnection.sendByQueue(CommandID.GET_MULTI_FOREVER,[foreverArr.length,paramArr],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            if(null != func)
            {
               func(_loc4_);
            }
         });
      }
      
      private static function onAllBeanComplete(param1:Event) : void
      {
         var mapstart:uint = 0;
         var e:Event = param1;
         BeanManager.removeEventListener(BeanEvent.COMPLETE,onAllBeanComplete);
         DebugTrace.show("Progress-3：初始化地图管理");
         mapstart = uint(getTimer());
         getBitSet([2000047],function(param1:Array):void
         {
            var arr:Array = param1;
            if(arr[0] == 0)
            {
               SocketConnection.send(41279,1);
            }
            if(NewSeerTaskController.isNewSeer)
            {
               NewSeerTaskController.startTask2020();
            }
            else
            {
               if(!MainManager.actorInfo.hasNono)
               {
                  SocketConnection.sendByQueue(CommandID.NEW_SEER_2014_GET_NONO,null,function(param1:*):void
                  {
                     MainManager.actorInfo.hasNono = true;
                     NonoManager.isBeckon = true;
                     SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,1);
                  });
               }
               checkRunContex();
               MapManager.changeMap(MainManager.actorInfo.mapID);
            }
            DebugTrace.show("加载地图" + (getTimer() - mapstart) / 1000);
         });
         NonoManager.getInfo();
         PetManager.getStorageList();
         PetManager.addEventListener(PetEvent.STORAGE_LIST,storageListHandle);
      }
      
      private static function storageListHandle(param1:PetEvent) : void
      {
         var e:PetEvent = param1;
         if(!MainManager.actorInfo.hasNono)
         {
            return;
         }
         PetManager.removeEventListener(PetEvent.STORAGE_LIST,storageListHandle);
         SocketConnection.sendByQueue(CommandID.NONO_EXE_LIST,[],function(param1:SocketEvent):void
         {
            var _loc4_:int = 0;
            var _loc5_:ExeingPetInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            _trainListarr = [];
            _loc4_ = 0;
            while(_loc4_ < _loc3_)
            {
               _loc5_ = new ExeingPetInfo(_loc2_,null);
               _trainListarr.push(_loc5_);
               _loc4_++;
            }
            putpettoStore();
         });
      }
      
      private static function putpettoStore() : void
      {
         var trainInfo:ExeingPetInfo = null;
         if(Boolean(_trainListarr) && _trainListarr.length > 0)
         {
            trainInfo = _trainListarr.shift() as ExeingPetInfo;
            SocketConnection.sendWithCallback(CommandID.NONO_END_EXE,function(param1:SocketEvent):void
            {
               var catchTime:uint = 0;
               var id:uint = 0;
               var e:SocketEvent = param1;
               var data:ByteArray = e.data as ByteArray;
               var exp:uint = data.readUnsignedInt();
               catchTime = data.readUnsignedInt();
               id = data.readUnsignedInt();
               SocketConnection.sendWithCallback(CommandID.GET_PET_INFO,function(param1:SocketEvent):void
               {
                  var e1:SocketEvent = param1;
                  var data1:PetInfo = e1.data as PetInfo;
                  PetManager.addStorage(id,catchTime,data1.level,function():void
                  {
                     putpettoStore();
                  });
               },[catchTime]);
            },[trainInfo._capTm]);
         }
      }
      
      public static function getBitSet(param1:Array, param2:Function) : void
      {
         var paramArr:Array = param1;
         var fun:Function = param2;
         var b:ByteArray = new ByteArray();
         var i:uint = 0;
         while(i < paramArr.length)
         {
            BitBuffSetClass.checkBitBuffBound(paramArr[i]);
            b.writeUnsignedInt(paramArr[i]);
            i++;
         }
         b.position = 0;
         SocketConnection.sendByQueue(CommandID.BATCH_GET_BITSET,[paramArr.length,b],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:Array = [];
            var _loc5_:uint = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedByte());
               _loc5_++;
            }
            fun.call(null,_loc4_);
         });
      }
      
      public static function getMultiValue(param1:Array, param2:Function) : void
      {
         var num:int = 0;
         var foreverArr:Array = param1;
         var fun:Function = param2;
         var paramArr:ByteArray = new ByteArray();
         for each(num in foreverArr)
         {
            paramArr.writeInt(num);
         }
         SocketConnection.sendByQueue(CommandID.GET_MULTI_FOREVER,[foreverArr.length,paramArr],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            if(null != fun)
            {
               fun(_loc4_);
            }
         });
      }
      
      public static function setTime(param1:int) : void
      {
         if(param1 - start <= 1000)
         {
            SocketConnection.send(1022,86050338);
         }
         else if(param1 - start <= 3000)
         {
            SocketConnection.send(1022,86050339);
         }
         else if(param1 - start <= 5000)
         {
            SocketConnection.send(1022,86050340);
         }
         else if(param1 - start <= 8000)
         {
            SocketConnection.send(1022,86050341);
         }
         else
         {
            SocketConnection.send(1022,86050342);
         }
         DebugTrace.show("从登陆到进入赛尔号一共耗时===" + (param1 - start) + "毫秒");
         var _loc2_:int = int((param1 - start) / 1000);
         if(MainManager.isNewUser)
         {
            StatManager.sendStat2014("_newtrans_","fInterGameSucc","");
            StatManager.sendStat2014("_newtrans_","fLoadInfoSucc","");
         }
      }
      
      public static function get isMember() : Boolean
      {
         return _isMember;
      }
      
      public static function get actorInfo() : UserInfo
      {
         return _actorInfo;
      }
      
      public static function get actorClothStr() : String
      {
         var _loc3_:PeopleItemInfo = null;
         var _loc1_:Array = actorInfo.clothes;
         var _loc2_:Array = [];
         for each(_loc3_ in _loc1_)
         {
            _loc2_.push(_loc3_.id);
         }
         return _loc2_.sort().join(",");
      }
      
      public static function get actorModel() : ActorModel
      {
         return _actorModel;
      }
      
      public static function set selfVisible(param1:Boolean) : void
      {
         if(actorModel.visible == param1)
         {
            if(param1 && actorModel.x == -50)
            {
               actorModel.x = _hidePosition.x;
               actorModel.y = _hidePosition.y;
            }
            return;
         }
         actorModel.stopAutoWalk();
         actorModel.visible = param1;
         if(actorModel.pet)
         {
            actorModel.pet.visible = param1;
         }
         if(actorModel.nono)
         {
            actorModel.nono.setVisible(param1);
         }
         if(!param1)
         {
            if(actorModel.x != -50 || actorModel.y != -50)
            {
               _hidePosition = new Point(actorModel.x,actorModel.y);
               actorModel.x = -50;
               actorModel.y = -50;
            }
         }
         else
         {
            actorModel.x = _hidePosition.x;
            actorModel.y = _hidePosition.y;
         }
      }
      
      public static function upDateForPeoleInfo(param1:UserInfo) : void
      {
         _actorInfo.sysTime = param1.sysTime;
         _actorInfo.userID = param1.userID;
         _actorInfo.nick = param1.nick;
         _actorInfo.color = param1.color;
         _actorInfo.texture = param1.texture;
         _actorInfo.vip = param1.vip;
         _actorInfo.isExtremeNono = param1.isExtremeNono;
         _actorInfo.action = param1.action;
         _actorInfo.direction = param1.direction;
         _actorInfo.spiritID = param1.spiritID;
         _actorInfo.fightFlag = param1.fightFlag;
         _actorInfo.teacherID = param1.teacherID;
         _actorInfo.studentID = param1.studentID;
         _actorInfo.nonoState = param1.nonoState.slice();
         _actorInfo.nonoColor = param1.nonoColor;
         _actorInfo.nonoNick = param1.nonoNick;
         _actorInfo.superNono = param1.superNono;
         _actorInfo.clothes = param1.clothes.slice();
         SystemTimerManager.setTime(param1.sysTime);
      }
      
      public static function getRoot() : Sprite
      {
         return LevelManager.root;
      }
      
      public static function getStage() : Stage
      {
         return LevelManager.stage;
      }
      
      public static function getStageWidth() : int
      {
         return TaomeeManager.stageWidth;
      }
      
      public static function getStageHeight() : int
      {
         return TaomeeManager.stageHeight;
      }
      
      public static function centerObj(param1:DisplayObject, param2:DisplayObject = null) : void
      {
         if(param2)
         {
            param1.x = param2.x + (param2.width - param1.width) / 2;
            param1.y = param2.y + (param2.height - param1.height) / 2;
         }
         else
         {
            param1.x = (getStageWidth() - param1.width) / 2;
            param1.y = (getStageHeight() - param1.height) / 2;
         }
      }
      
      public static function getStageCenterPoint() : Point
      {
         return new Point(TaomeeManager.stageWidth / 2,TaomeeManager.stageHeight / 2);
      }
      
      public static function getStageMousePoint() : Point
      {
         return new Point(getStage().mouseX,getStage().mouseY);
      }
      
      private static function onFailLoadUI(param1:MCLoadEvent) : void
      {
         throw new Error("UI资源加载错误！");
      }
      
      public static function getTopLeftTmcid() : ByteArray
      {
         var _loc1_:ByteArray = new ByteArray();
         _loc1_.endian = Endian.LITTLE_ENDIAN;
         _loc1_.length = 64;
         if(tad != null && tad != "none" && tad != "")
         {
            if(tad.length > 63)
            {
               tad = tad.substr(0,63);
            }
            _loc1_.writeUTFBytes(tad);
         }
         else
         {
            _loc1_.writeUTFBytes("0");
         }
         return _loc1_;
      }
      
      public static function isFirstLoginToday() : Boolean
      {
         var _loc1_:uint = MainManager.actorInfo.oldlast;
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:uint = SystemTimerManager.getTimeByDate(_loc2_.fullYear,_loc2_.month + 1,_loc2_.date,0,0,0);
         if(_loc1_ <= _loc3_ || _loc1_ == 0)
         {
            return true;
         }
         return false;
      }
      
      public static function getIsIgnoreTerrain(param1:uint) : Boolean
      {
         var _loc2_:uint = MapConfig.getSuperMapID(param1);
         if(_loc2_ != 1 && _loc2_ != 5 && _loc2_ != 103 && _loc2_ != 107 && walkType)
         {
            return true;
         }
         return false;
      }
      
      public static function get onlineTimeValue() : int
      {
         return _onlineTimeValue;
      }
      
      private static function updateOnlineTime() : void
      {
         var id:uint = 0;
         id = setTimeout(function():void
         {
            var ktool_cls:* = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
            ktool_cls.getMultiValueByDB([12462],function(param1:Array):void
            {
               _onlineTimeValue = param1[0];
            });
            clearTimeout(id);
         },3000);
      }
      
      public static function checkRunContex() : void
      {
         if(!ExternalInterface.available)
         {
            Alarm2.show("因为一些神秘的原因建议去浏览器里面打开赛尔号!",function():void
            {
               SocketConnection.send(1006,1111);
            });
            throw new Error("sssssssss");
         }
      }
   }
}
