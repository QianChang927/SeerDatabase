package com.robot.app.sumstone
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class SumGiftStoneInterface
   {
      
      private static var _instance:com.robot.app.sumstone.SumGiftStoneInterface;
       
      
      public function SumGiftStoneInterface()
      {
         super();
         if(null != _instance)
         {
            throw new Error("该实例需要通过 SumGiftStoneInterface.getInstance() 方法调用");
         }
      }
      
      public static function getInstance() : com.robot.app.sumstone.SumGiftStoneInterface
      {
         if(null == _instance)
         {
            _instance = new com.robot.app.sumstone.SumGiftStoneInterface();
         }
         return _instance;
      }
      
      public function setLoaclData(param1:uint, param2:Object) : void
      {
         var _loc3_:SharedObject = SharedObject.getLocal(SumGiftStoneConst.LOCAL_DATA_NAME);
         if(null == _loc3_)
         {
            _loc3_ = new SharedObject();
         }
         _loc3_.data[param1] = param2;
         _loc3_.flush();
      }
      
      public function doPlayStoy(param1:Array, param2:Function) : void
      {
         var stories:Array = param1;
         var callBack:Function = param2;
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(stories,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            callBack.apply();
         });
      }
      
      public function doFight(param1:int) : void
      {
         var bossId:int = param1;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var data:FightOverInfo;
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            data = e.dataObj as FightOverInfo;
            if(null != data && data.winnerID == MainManager.actorID)
            {
               StatManager.sendStat2014(SumGiftStoneConst.STAT_TITLE,SumGiftStoneConst.STAT_STYLE_WIN + bossId,StatManager.RUN_ACT);
            }
            getFightProc(function():void
            {
               getFightNum(function():void
               {
                  doOpenModule(SumGiftStoneConst.PANEL_NAME_STONE);
               });
            });
         });
         StatManager.sendStat2014(SumGiftStoneConst.STAT_TITLE,SumGiftStoneConst.STAT_STYLE_FIGHT + bossId,StatManager.RUN_ACT);
         FightManager.fightNoMapBoss("",bossId);
      }
      
      public function doExchange(param1:int, param2:int, param3:Function) : void
      {
         var productId:int = param1;
         var exchangeId:int = param2;
         var callBack:Function = param3;
         KTool.buyProductByCallback(productId,1,function():void
         {
            KTool.doExchange(exchangeId,function():void
            {
               callBack.apply(this,null);
            });
         });
      }
      
      public function doOpenModule(param1:String, param2:Object = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule(param1),"正在打开...",param2);
      }
      
      public function doGetStone(param1:Function) : void
      {
         var callBack:Function = param1;
         SocketConnection.sendWithCallback2(SumGiftStoneConst.COMMAND_ID_STONE,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            SumGiftStoneData.getInstance().resType = _loc2_.readInt();
            StatManager.sendStat2014(SumGiftStoneConst.STAT_TITLE,SumGiftStoneConst.STAT_STYLE_REQUIRE,StatManager.RUN_ACT);
            callBack.apply(this,null);
         },[SumGiftStoneConst.COMMAND_TYPE_EVOLVE]);
      }
      
      public function doUpgrade(param1:Function) : void
      {
         var callBack:Function = param1;
         var catchTime:uint = KTool.getCatchTimeInBag([SumGiftStoneConst.MONSTER_ID_JAGU]);
         if(catchTime <= 0)
         {
            Alarm.show("宠物不在背包！",function():void
            {
               doOpenModule(SumGiftStoneConst.PANEL_NAME_PET_BAG);
            });
            return;
         }
         SocketConnection.sendWithCallback2(SumGiftStoneConst.COMMAND_ID_UPGRADE,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            StatManager.sendStat2014(SumGiftStoneConst.STAT_TITLE,SumGiftStoneConst.STAT_STYLE_REPLENISH,StatManager.RUN_ACT);
            getRewardStatus(function():void
            {
               getFightProc(callBack);
            });
         },[catchTime,SumGiftStoneConst.COMMAND_TYPE_UPGRADE]);
      }
      
      public function doCureAll() : void
      {
         PetManager.cureAllFree();
      }
      
      public function doSign(param1:Function) : void
      {
         var callBack:Function = param1;
         SocketConnection.sendWithCallback2(SumGiftStoneConst.COMMAND_ID_STONE,function(param1:SocketEvent):void
         {
            getSignDays(callBack);
         },[SumGiftStoneConst.COMMAND_TYPE_SIGN]);
      }
      
      public function doGetReward(param1:int, param2:Function) : void
      {
         var rewardId:int = param1;
         var callBack:Function = param2;
         SocketConnection.sendWithCallback2(SumGiftStoneConst.COMMAND_ID_STONE,function(param1:SocketEvent):void
         {
            getRewardStatus(callBack);
         },[SumGiftStoneConst.GetSignRewardCommandType(rewardId)]);
      }
      
      public function initializeStoneData(param1:Function) : void
      {
         var callBack:Function = param1;
         this.getFightNum(function():void
         {
            getFightProc(function():void
            {
               getRewardStatus(function():void
               {
                  SumGiftStoneData.getInstance().initializeStep = SumGiftStoneConst.INITIALIZE_STEP_STONE;
                  callBack.apply(this,null);
               });
            });
         });
      }
      
      public function initializeSignData(param1:Function) : void
      {
         var callBack:Function = param1;
         this.getSignDays(function():void
         {
            SumGiftStoneData.getInstance().initializeStep = SumGiftStoneConst.INITIALIZE_STEP_SIGN;
            callBack.apply(this,null);
         });
      }
      
      public function getFightNum(param1:Function) : void
      {
         var callBack:Function = param1;
         this.myGetValue(SumGiftStoneConst.DAILY_TYPE_FIGHT_NUM,function(param1:int):void
         {
            SumGiftStoneData.getInstance().haveUsedTimes = param1;
            callBack.apply(this,null);
         });
      }
      
      public function getFightProc(param1:Function) : void
      {
         var callBack:Function = param1;
         this.myGetValue(SumGiftStoneConst.FOREVER_TYPE_FIGHT_PROCESS,function(param1:int):void
         {
            SumGiftStoneData.getInstance().fightProcess = param1;
            callBack.apply(this,null);
         });
      }
      
      public function getSignDays(param1:Function) : void
      {
         var callBack:Function = param1;
         this.myGetValue(SumGiftStoneConst.FOREVER_TYPE_SIGN_DAYS,function(param1:int):void
         {
            SumGiftStoneData.getInstance().signDays = param1;
            callBack.apply(this,null);
         });
      }
      
      public function getRewardStatus(param1:Function) : void
      {
         var callBack:Function = param1;
         this.myGetValue(SumGiftStoneConst.FOREVER_TYPE_REWARD_STATUS,function(param1:int):void
         {
            SumGiftStoneData.getInstance().rewardStatus = param1;
            callBack.apply(this,null);
         });
      }
      
      private function myGetValue(param1:int, param2:Function) : void
      {
         if(10000 > param1)
         {
            KTool.getForeverNum(param1,param2);
         }
         else
         {
            KTool.getLimitNum(param1,param2);
         }
      }
   }
}
