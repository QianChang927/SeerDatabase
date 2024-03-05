package com.robot.app.midautumn
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.midautumn.model.MakeMoonCakeModel;
   import com.robot.app.summergift.model.SummerGiftModelShopItem;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class MidAutumnGiftInterface
   {
      
      private static var _instance:com.robot.app.midautumn.MidAutumnGiftInterface;
       
      
      public function MidAutumnGiftInterface()
      {
         super();
         if(_instance)
         {
            throw new Error("请使用 MidAutumnGiftInterface.getInstance() 调用该实例！");
         }
      }
      
      public static function getInstance() : com.robot.app.midautumn.MidAutumnGiftInterface
      {
         if(!_instance)
         {
            _instance = new com.robot.app.midautumn.MidAutumnGiftInterface();
         }
         return _instance;
      }
      
      public function getPlayedMovie() : Boolean
      {
         var _loc1_:SharedObject = SharedObject.getLocal(MidAutumnGiftConst.LOCAL_DATA_MOVIE);
         if(null == _loc1_)
         {
            return false;
         }
         return _loc1_.data[MainManager.actorID];
      }
      
      public function setPlayedMovie(param1:Boolean) : void
      {
         var _loc2_:SharedObject = SharedObject.getLocal(MidAutumnGiftConst.LOCAL_DATA_MOVIE);
         if(null == _loc2_)
         {
            _loc2_ = new SharedObject();
         }
         _loc2_.data[MainManager.actorID];
         _loc2_.flush();
      }
      
      public function addLogData(param1:String) : void
      {
         param1 = "已获得 " + param1;
         var _loc2_:SharedObject = SharedObject.getLocal(MidAutumnGiftConst.LOCAL_DATA_NAME);
         if(null == _loc2_)
         {
            _loc2_ = new SharedObject();
         }
         var _loc3_:int = int(SystemTimerManager.sysDate.date);
         var _loc4_:Array = _loc2_.data[MainManager.actorID + "_" + _loc3_];
         if(null == _loc4_)
         {
            _loc4_ = new Array();
            _loc2_.data[MainManager.actorID + "_" + _loc3_] = _loc4_;
         }
         _loc4_.push(param1);
         _loc2_.flush();
         MidAutumnGiftData.getInstance().addRewardLog(param1);
      }
      
      public function getLocalData(param1:uint) : Array
      {
         var _loc2_:SharedObject = SharedObject.getLocal(MidAutumnGiftConst.LOCAL_DATA_NAME);
         if(null == _loc2_)
         {
            return [];
         }
         var _loc3_:int = int(SystemTimerManager.sysDate.date);
         var _loc4_:Array = _loc2_.data[MainManager.actorID + "_" + _loc3_];
         if(null == _loc4_)
         {
            return [];
         }
         return _loc4_;
      }
      
      public function init(param1:Function) : void
      {
         if(MidAutumnGiftData.INITIALIZED_STEP_DATA & MidAutumnGiftData.getInstance().initialized)
         {
            param1.apply();
            return;
         }
         this.resetData(param1);
      }
      
      private function resetData(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.getMultiValue(MidAutumnGiftData.GetMultiIDs(),function(param1:Array):void
         {
            MidAutumnGiftData.getInstance().initData(param1);
            MidAutumnGiftData.getInstance().initItemNum();
            MidAutumnGiftData.getInstance().logs = getLocalData(MainManager.actorID);
            MidAutumnGiftData.getInstance().initialized = MidAutumnGiftData.getInstance().initialized | MidAutumnGiftData.INITIALIZED_STEP_DATA;
            callBack.apply();
         });
      }
      
      public function syncServerData(param1:Function) : void
      {
         var callBack:Function = param1;
         SocketConnection.sendWithCallback2(MidAutumnGiftConst.COMMAND_ID_GET_COOKIE,function():void
         {
            KTool.getLimitNum(MidAutumnGiftConst.DAILY_ONLINE_TIME,function(param1:int):void
            {
               var val:int = param1;
               resetData(function():void
               {
                  MidAutumnGiftData.getInstance().onlineTime = val;
                  callBack.apply();
               });
            });
         },[MidAutumnGiftConst.COMMAND_TYPE_SYNC_ONLINE_TIME]);
      }
      
      public function doGetCookie(param1:Function) : void
      {
         var callBack:Function = param1;
         SocketConnection.sendWithCallback2(MidAutumnGiftConst.COMMAND_ID_GET_COOKIE,function():void
         {
            resetData(function():void
            {
               MidAutumnGiftData.getInstance().onlineTime = 0;
               callBack.apply();
            });
         },[MidAutumnGiftConst.COMMAND_TYPE_GET_ONLINE_REWARD]);
      }
      
      public function doPlayCookie() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            var _loc3_:int = MidAutumnGiftConst.OPEN_FROM_LOSE;
            if(++MidAutumnGiftData.getInstance().havePlayedTimes >= MidAutumnGiftManager.getInstance().getConst().maxPlayTimes)
            {
               MidAutumnGiftData.getInstance().playCookieCD = SystemTimerManager.time;
               _loc3_ = MidAutumnGiftConst.OPEN_FROM_TIRED;
            }
            var _loc4_:FightOverInfo = param1.dataObj as FightOverInfo;
            if(null != _loc4_ && _loc4_.winnerID == MainManager.actorID)
            {
               if(_loc3_ != MidAutumnGiftConst.OPEN_FROM_TIRED)
               {
                  _loc3_ = MidAutumnGiftConst.OPEN_FROM_WIN;
               }
               ++MidAutumnGiftData.getInstance().leftTimesOfGetMaterial;
               StatManager.sendStat2014("饼饼送大礼","成功战胜饼饼的 ",StatManager.RUN_ACT);
            }
            doOpenModule(MidAutumnGiftConst.PANEL_NAME_MAIN,_loc3_);
         });
         FightManager.fightNoMapBoss("",MidAutumnGiftManager.getInstance().getConst().cookieBossId);
         ModuleManager.destroy(ClientConfig.getAppModule(MidAutumnGiftConst.PANEL_NAME_MAIN));
      }
      
      public function doGetMaterial(param1:Function) : void
      {
         var callBack:Function = param1;
         SocketConnection.sendWithCallback2(MidAutumnGiftConst.COMMAND_ID_GET_COOKIE,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = MidAutumnGiftConst.GetMaterialID(_loc2_.readInt());
            MidAutumnGiftData.getInstance().curGetReward = _loc3_;
            MidAutumnGiftData.getInstance().updateItmNum(int(MidAutumnGiftManager.getInstance().getRewardLog(_loc3_)),true);
            --MidAutumnGiftData.getInstance().leftTimesOfGetMaterial;
            callBack.apply();
         },[MidAutumnGiftConst.COMMAND_TYPE_GET_MATERIAL]);
      }
      
      public function doMakeMoonCake(param1:MakeMoonCakeModel, param2:Function) : void
      {
         var info:MakeMoonCakeModel = param1;
         var callBack:Function = param2;
         KTool.doExchange(info.exchange,function():void
         {
            var _loc1_:int = 0;
            for each(_loc1_ in info.materials)
            {
               MidAutumnGiftData.getInstance().updateItmNum(_loc1_,false);
            }
            MidAutumnGiftData.getInstance().leftRewardTimes = MidAutumnGiftData.getInstance().leftRewardTimes + info.timesGetReward;
            callBack.apply(this,null);
         });
      }
      
      public function doBuyItem(param1:int, param2:Function) : void
      {
         var shopItm:SummerGiftModelShopItem = null;
         var shopItmId:int = param1;
         var callBack:Function = param2;
         shopItm = MidAutumnGiftManager.getInstance().getItemInfo(shopItmId);
         if(null == shopItm)
         {
            Alarm.show("找不到中间商品信息，ID = " + shopItmId);
            return;
         }
         KTool.buyProductByCallback(shopItm.productId,1,function():void
         {
            KTool.doExchange(shopItm.exchange,function():void
            {
               StatManager.sendStat2014("饼饼送大礼","成功购买" + shopItm.name + "的",StatManager.RUN_ACT);
               MidAutumnGiftData.getInstance().updateItmNum(shopItm.outItem,true);
               callBack.apply(this,null);
            });
         });
      }
      
      public function doStart(param1:Function) : void
      {
         var callBack:Function = param1;
         SocketConnection.sendWithCallback2(MidAutumnGiftConst.COMMAND_ID_GET_COOKIE,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = _loc2_.readInt();
            MidAutumnGiftData.getInstance().curGetReward = _loc3_;
            var _loc4_:String = MidAutumnGiftManager.getInstance().getRewardLog(_loc3_);
            addLogData(_loc4_);
            --MidAutumnGiftData.getInstance().leftRewardTimes;
            ++MidAutumnGiftData.getInstance().haveGottenRewardTimes;
            StatManager.sendStat2014("饼饼送大礼","成功领取" + _loc4_ + "的",StatManager.RUN_ACT);
            callBack.apply();
         },[MidAutumnGiftConst.COMMAND_TYPE_GET_REWARD]);
      }
      
      public function doGetBigReward(param1:Function) : void
      {
         var callBack:Function = param1;
         SocketConnection.sendWithCallback2(MidAutumnGiftConst.COMMAND_ID_GET_COOKIE,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = MidAutumnGiftConst.GetBigRewardID(_loc2_.readInt());
            MidAutumnGiftData.getInstance().curGetReward = _loc3_;
            addLogData(MidAutumnGiftManager.getInstance().getRewardLog(_loc3_));
            MidAutumnGiftData.getInstance().haveGottenBigReward = true;
            callBack.apply();
         },[MidAutumnGiftConst.COMMAND_TYPE_GET_BIG_REWARD]);
      }
      
      public function doOpenModule(param1:String, param2:Object = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("midautumn/" + param1),"正在打开……",param2);
      }
   }
}
