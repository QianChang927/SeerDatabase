package com.robot.app.sumfire
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.sumfire.model.SumGiftFireBaseInfo;
   import com.robot.app.summergift.model.SummerGiftModelShopItem;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.net.SharedObject;
   import org.taomee.events.SocketEvent;
   
   public class SumGiftFireInterface
   {
      
      private static var _instance:com.robot.app.sumfire.SumGiftFireInterface;
       
      
      public function SumGiftFireInterface()
      {
         super();
         if(null != _instance)
         {
            throw new Error("该实例需要通过 SumGiftFireInterface.getInstance() 方法调用");
         }
      }
      
      public static function getInstance() : com.robot.app.sumfire.SumGiftFireInterface
      {
         if(null == _instance)
         {
            _instance = new com.robot.app.sumfire.SumGiftFireInterface();
         }
         return _instance;
      }
      
      public function setLocalData(param1:uint, param2:int) : void
      {
         var _loc3_:SharedObject = SharedObject.getLocal(SumGiftFireConst.LOCAL_DATA_NAME);
         if(null == _loc3_)
         {
            _loc3_ = new SharedObject();
         }
         _loc3_.data[param1] = param2;
         _loc3_.flush();
      }
      
      public function initializeData(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.getMultiValue(SumGiftFireConst.GetAllIDs(),function(param1:Array):void
         {
            var ary:Array = param1;
            SumGiftFireData.getInstance().injectionsForAwaken = Math.min(ary[0],SumGiftFireManager.getInstance().getTotalAwakenInjections());
            SumGiftFireData.getInstance().injectionsForRescue = Math.min(ary[1],SumGiftFireManager.getInstance().getTotalRescueInjections());
            SumGiftFireData.getInstance().fightProcFire = Math.min(ary[2],SumGiftFireManager.getInstance().getTotalFightProc());
            SumGiftFireData.getInstance().fightForFire = Math.min(ary[3],SumGiftFireManager.getInstance().getBaseInfo(SumGiftFireConst.SYS_ID_FIRE).fightNum);
            SumGiftFireData.getInstance().fightForAwaken = Math.min(ary[4],SumGiftFireManager.getInstance().getBaseInfo(SumGiftFireConst.SYS_ID_AWAKEN).fightNum);
            SumGiftFireData.getInstance().fightForRescue = Math.min(ary[5],SumGiftFireManager.getInstance().getBaseInfo(SumGiftFireConst.SYS_ID_RESCUE).fightNum);
            SumGiftFireData.getInstance().fightProcRescue = Math.min(ary[6],SumGiftFireManager.getInstance().getTotalSunProc());
            KTool.getBitSet(SumGiftFireConst.GetBitBufIDs(),function(param1:Array):void
            {
               SumGiftFireData.getInstance().hasGottenFire = param1[0];
               SumGiftFireData.getInstance().hasWeakened = param1[1];
               SumGiftFireData.getInstance().leftWater = Math.min(SumGiftFireConst.ITEM_SHOW_MAX,ItemManager.getNumByID(SumGiftFireConst.ITEM_ID_HOLY_WATER));
               SumGiftFireData.getInstance().initStep = true;
               callBack.apply();
            });
         });
      }
      
      public function doFight(param1:int, param2:int) : void
      {
         var bossId:int = param1;
         var sysId:int = param2;
         if(SumGiftFireConst.SYS_ID_FIRE != sysId)
         {
            StatManager.sendStat2014("豆龙分支进化-烈火豆龙进化开启","点击挑战" + SumGiftFireManager.getInstance().getBossName(bossId) + "的",StatManager.RUN_ACT);
         }
         else
         {
            StatManager.sendStat2014("豆龙分支进化-烈火豆龙进化开启","点击挑战烈火豆龙的",StatManager.RUN_ACT);
         }
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            var _loc3_:FightOverInfo = param1.dataObj as FightOverInfo;
            var _loc4_:Boolean = false;
            if(null != _loc3_ && _loc3_.winnerID == MainManager.actorID)
            {
               _loc4_ = true;
            }
            switch(sysId)
            {
               case SumGiftFireConst.SYS_ID_AWAKEN:
                  ++SumGiftFireData.getInstance().fightForAwaken;
                  break;
               case SumGiftFireConst.SYS_ID_RESCUE:
                  ++SumGiftFireData.getInstance().fightForRescue;
                  break;
               case SumGiftFireConst.SYS_ID_FIRE:
                  ++SumGiftFireData.getInstance().fightForFire;
            }
            if(_loc4_)
            {
               if(SumGiftFireConst.SYS_ID_FIRE != sysId)
               {
                  SumGiftFireData.getInstance().leftWater = SumGiftFireData.getInstance().leftWater + SumGiftFireManager.getInstance().getRwdNumFromFightBoss(bossId);
                  StatManager.sendStat2014("豆龙分支进化-烈火豆龙进化开启","挑战" + SumGiftFireManager.getInstance().getBossName(bossId) + "胜利的",StatManager.RUN_ACT);
               }
               else
               {
                  StatManager.sendStat2014("豆龙分支进化-烈火豆龙进化开启","挑战烈火豆龙胜利的",StatManager.RUN_ACT);
               }
               switch(sysId)
               {
                  case SumGiftFireConst.SYS_ID_AWAKEN:
                     break;
                  case SumGiftFireConst.SYS_ID_RESCUE:
                     ++SumGiftFireData.getInstance().fightProcRescue;
                     break;
                  case SumGiftFireConst.SYS_ID_FIRE:
                     ++SumGiftFireData.getInstance().fightProcFire;
               }
            }
            if(SumGiftFireConst.SYS_ID_FIRE == sysId)
            {
               SumGiftFireData.getInstance().hasWeakened = false;
            }
            doOpenModule(SumGiftFireConst.GetModuleBySysId(sysId));
         });
         FightManager.fightNoMapBoss("",bossId);
         ModuleManager.destroy(ClientConfig.getAppModule(SumGiftFireConst.GetModuleBySysId(sysId)));
      }
      
      public function doBuyBaseInfo(param1:int, param2:Function) : void
      {
         var sysId:int = param1;
         var callBack:Function = param2;
         var baseInfo:SumGiftFireBaseInfo = SumGiftFireManager.getInstance().getBaseInfo(sysId);
         if(null == baseInfo)
         {
            Alarm.show("找不到系统基础信息：SYS_ID = " + sysId);
            return;
         }
         this.doBuyProduct(baseInfo.productId,baseInfo.exchangeId,function():void
         {
            switch(sysId)
            {
               case SumGiftFireConst.SYS_ID_AWAKEN:
                  SumGiftFireData.getInstance().injectionsForAwaken = SumGiftFireManager.getInstance().getTotalAwakenInjections();
                  break;
               case SumGiftFireConst.SYS_ID_RESCUE:
                  SumGiftFireData.getInstance().injectionsForRescue = SumGiftFireManager.getInstance().getTotalRescueInjections();
                  break;
               case SumGiftFireConst.SYS_ID_FIRE:
                  SumGiftFireData.getInstance().hasGottenFire = true;
            }
            callBack.apply();
         });
      }
      
      public function doBuyHolyWater(param1:int, param2:Function) : void
      {
         var itm:SummerGiftModelShopItem = null;
         var itmId:int = param1;
         var callBack:Function = param2;
         itm = SumGiftFireManager.getInstance().getShopItem(itmId);
         if(null == itm)
         {
            Alarm.show("配置文件中找不到itemId = " + itmId + "的物品信息！");
            return;
         }
         this.doBuyProduct(itm.productId,itm.exchange,function():void
         {
            SumGiftFireData.getInstance().leftWater = SumGiftFireData.getInstance().leftWater + itm.itemNum;
            StatManager.sendStat2014("豆龙分支进化-烈火豆龙进化开启","成功购买圣水" + itm.itemNum + "个的",StatManager.RUN_ACT);
            callBack.apply();
         });
      }
      
      private function doBuyProduct(param1:int, param2:int, param3:Function) : void
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
      
      public function doInject(param1:int, param2:int, param3:Function) : void
      {
         var num:int = param1;
         var sysId:int = param2;
         var callBack:Function = param3;
         SocketConnection.sendWithCallback2(SumGiftFireConst.COMMAND_ID_INJECT,function(param1:SocketEvent):void
         {
            var _loc2_:String = "";
            switch(sysId)
            {
               case SumGiftFireConst.SYS_ID_AWAKEN:
                  _loc2_ = "唤醒豆龙";
                  SumGiftFireData.getInstance().injectionsForAwaken = SumGiftFireData.getInstance().injectionsForAwaken + num;
                  break;
               case SumGiftFireConst.SYS_ID_RESCUE:
                  _loc2_ = "拯救豆龙";
                  SumGiftFireData.getInstance().injectionsForRescue = SumGiftFireData.getInstance().injectionsForRescue + num;
                  break;
               case SumGiftFireConst.SYS_ID_FIRE:
                  _loc2_ = "削弱烈火豆龙";
                  SumGiftFireData.getInstance().hasWeakened = true;
            }
            Alarm.show("注入圣水成功！");
            SumGiftFireData.getInstance().leftWater = SumGiftFireData.getInstance().leftWater - num;
            callBack.apply(this,null);
         },[num,sysId]);
      }
      
      public function doEvolve(param1:Function) : void
      {
         var petInfo:PetInfo = null;
         var callBack:Function = param1;
         var catchTime:uint = KTool.getCatchTimeInBag([SumGiftFireConst.MONSTER_ID_JAGU]);
         if(catchTime <= 0)
         {
            if(PetManager.getStoragePetsById(SumGiftFireConst.MONSTER_ID_JAGU).length <= 0)
            {
               Alarm.show("你还没有获得嘉古，先去获取嘉古吧！",function():void
               {
                  ModuleManager.destroy(ClientConfig.getModule(SumGiftFireConst.PANEL_NAME_FIRE));
                  doOpenModule(SumGiftFireConst.PANEL_NAME_AWAKEN);
               });
            }
            else
            {
               Alarm.show("你还没有获得嘉古，先去获取嘉古吧！",function():void
               {
                  doOpenModule(SumGiftFireConst.PANEL_NAME_PET_BAG);
               });
            }
            return;
         }
         petInfo = PetManager.getPetInfo(catchTime);
         if(null == petInfo)
         {
            Alarm.show("背包里没有该精灵的信息！");
            return;
         }
         SocketConnection.sendWithCallback2(SumGiftFireConst.COMMAND_ID_UPGRADE,function(param1:SocketEvent):void
         {
            Alarm.show("恭喜你，" + petInfo.name + "进化成功！");
            SumGiftFireData.getInstance().hasGottenFire = true;
            SumGiftFireData.getInstance().injectionsForAwaken = SumGiftFireManager.getInstance().getTotalAwakenInjections();
            callBack.apply(this,null);
         },[catchTime,SumGiftFireConst.COMMAND_TYPE_UPGRADE]);
      }
      
      public function doOpenModule(param1:String) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule(param1));
      }
      
      public function doPlayStory(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(SumGiftFireManager.getInstance().getStories(),function():void
         {
            KTool.showMapAllPlayerAndMonster();
            callBack.apply();
         });
      }
      
      public function doExchangeMap(param1:int, param2:Function) : void
      {
         var mapId:int = param1;
         var callBack:Function = param2;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            if(null != callBack)
            {
               callBack.apply();
            }
         });
         MapManager.changeLocalMap(mapId);
      }
   }
}
