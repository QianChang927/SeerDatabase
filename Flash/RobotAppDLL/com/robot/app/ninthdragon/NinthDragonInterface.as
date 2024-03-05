package com.robot.app.ninthdragon
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ninthdragon.model.NinthDragonShopItem;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.events.Event;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class NinthDragonInterface
   {
       
      
      public function NinthDragonInterface()
      {
         super();
      }
      
      public static function DoMulti(param1:int, param2:int, param3:Function) : void
      {
         var itm:NinthDragonShopItem = null;
         var itmId:int = param1;
         var amt:int = param2;
         var callBack:Function = param3;
         itm = NinthDragonManager.getInstance().getBuyItem(itmId);
         if(null == itm)
         {
            Alarm.show("找不到购买信息");
            callBack.apply();
            return;
         }
         KTool.buyProductByCallback(itm.product,amt,function():void
         {
            KTool.doMultiExchange(itm.exchange,amt,function():void
            {
               callBack.apply();
            });
         });
      }
      
      public static function DoBuy(param1:int, param2:Function) : void
      {
         var itm:NinthDragonShopItem = null;
         var itmId:int = param1;
         var callBack:Function = param2;
         itm = NinthDragonManager.getInstance().getBuyItem(itmId);
         if(null == itm)
         {
            Alarm.show("找不到购买信息");
            callBack.apply();
            return;
         }
         KTool.buyProductByCallback(itm.product,1,function():void
         {
            KTool.doExchange(itm.exchange,function():void
            {
               callBack.apply();
            });
         });
      }
      
      public static function DoOpenModule(param1:String, param2:Object = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule(param1),"",param2);
      }
      
      public static function DoFight(param1:uint) : void
      {
         var bossId:uint = param1;
         var name:String = String(PetXMLInfo.getName(bossId));
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:Event):void
         {
            var e:Event = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            StatManager.sendStat2014("九天圣龙","主面板_成功战胜本体的",StatManager.RUN_ACT);
            NinthDragonData.getInstance().syncData(function():void
            {
               DoOpenModule("NinthDragonMain");
            });
         });
         FightManager.fightNoMapBoss(name,bossId);
      }
      
      public static function DoGetDragon(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.doExchange(NinthDragonConst.EXCHANGE_ID_GET_DRAGON,function():void
         {
            NinthDragonData.getInstance().syncData(callBack);
         },function():void
         {
            Alert.show("领取九天圣龙的条件未满足！");
         });
      }
      
      public static function DoSign(param1:int, param2:Function) : void
      {
         var id:int = param1;
         var callBack:Function = param2;
         SocketConnection.sendWithCallback2(NinthDragonConst.PROTOCOL_ID_SIGN,function():void
         {
            SyncFlagData(callBack);
         },[3,0,id]);
      }
      
      public static function DoReward(param1:int, param2:int, param3:Function) : void
      {
         var id:int = param1;
         var amt:int = param2;
         var callBack:Function = param3;
         SocketConnection.sendWithCallback2(NinthDragonConst.PROTOCOL_ID_SIGN,function():void
         {
            NinthDragonData.getInstance().setSignReward(id - 1);
            callBack.apply();
         },[2,1,amt]);
      }
      
      public static function SwitchToSceneMap(param1:Function) : void
      {
         var callBack:Function = param1;
         if(MapManager.currentMap.id != NinthDragonManager.getInstance().sceneMap)
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               if(null != callBack)
               {
                  callBack.apply();
               }
            });
            MapManager.changeMap(NinthDragonManager.getInstance().sceneMap);
         }
         else if(null != callBack)
         {
            callBack.apply();
         }
      }
      
      public static function PlayFulMovie(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.hideMapAllPlayerAndMonster();
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(NinthDragonManager.getInstance().fulMovie),function():void
         {
            KTool.showMapAllPlayerAndMonster();
            callBack.apply();
         });
      }
      
      public static function writeLocalData(param1:Object) : void
      {
         var _loc2_:SharedObject = SharedObject.getLocal(NinthDragonConst.LOCAL_DATA_NAME);
         if(null == _loc2_)
         {
            _loc2_ = new SharedObject();
         }
         _loc2_.data[MainManager.actorID] = param1;
         NinthDragonData.getInstance().havePlayed = param1;
         _loc2_.flush();
      }
      
      public static function DoSummonDragon(param1:int, param2:Function) : void
      {
         var exchangeId:int = param1;
         var callBack:Function = param2;
         KTool.doExchange(exchangeId,function():void
         {
            SyncFlagData(callBack);
         });
      }
      
      public static function SyncFlagData(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.getForeverNum(NinthDragonConst.FOREVER_FLAG,function(param1:uint):void
         {
            NinthDragonData.getInstance().flag = param1;
            callBack.apply();
         });
      }
      
      public static function DoExchangePrint(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.doExchange(NinthDragonConst.EXCHANGE_ID_GET_PRINT,function():void
         {
            callBack.apply();
         },function():void
         {
            Alert.show("条件未满足哦！");
         });
      }
      
      public static function DoRequireReward(param1:int, param2:Function) : void
      {
         Alert.show("策划案上没有，后台没做！");
      }
      
      public static function DoUpgrade(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.doExchange(NinthDragonConst.EXCHANGE_ID_UPGRADE,function():void
         {
            NinthDragonData.getInstance().upgradeCapacity();
            callBack.apply();
         },function():void
         {
            Alert.show("条件未满足哦！");
         });
      }
      
      public static function DoStartGame() : void
      {
         SocketConnection.sendWithCallback2(NinthDragonConst.PROTOCOL_ID_START_GAME,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            if(null == _loc2_)
            {
               Alert.show("打开游戏失败！");
               return;
            }
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readByte());
               _loc5_++;
            }
            NinthDragonData.getInstance().gameKey = _loc2_.readUnsignedInt();
            ++NinthDragonData.getInstance().leftGameNum;
            NinthDragonData.getInstance().gameList = _loc4_;
            NinthDragonData.getInstance().gameCdTime = NinthDragonData.getInstance().gameCdTime + NinthDragonManager.getInstance().gameCdTime;
            NinthDragonInterface.DoOpenModule("CubeWorldGame");
         },[0]);
      }
      
      public static function DoEndGame() : void
      {
         SocketConnection.sendWithCallback2(NinthDragonConst.PROTOCOL_ID_END_GAME,function(param1:SocketEvent):void
         {
            NinthDragonInterface.DoOpenModule("NinthDragonDialogResult");
         },NinthDragonData.getInstance().gameResult());
      }
   }
}
