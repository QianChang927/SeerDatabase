package com.robot.app2.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.IXmlInfo.IPvp_banInfo;
   import com.robot.core.config.IXmlInfo.IPvp_shopInfo;
   import com.robot.core.config.Ixml.Pvp_ban;
   import com.robot.core.config.Ixml.Pvp_shop;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetSkillInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   
   public class PeakJihad2023Controller
   {
      
      public static var itemId1:int = 1717451;
      
      public static var itemId2:int = 1717452;
      
      public static var curLevel:int = 0;
      
      public static var curScore:int = 0;
      
      public static var isDraw:Boolean = false;
      
      public static var PeakJihad2023Controller_Buy_SHOP_ITEM:String = "PeakJihad2023Controller_Buy_SHOP_ITEM";
      
      public static var PeakJihad2023Controller_GET_LADDER_REWARD:String = "PeakJihad2023Controller_GET_LADDER_REWARD";
      
      public static var shopValue:HashMap = new HashMap();
      
      public static var RATINGS_NAME:Array = ["学徒","猛将","天骄","王者","圣皇"];
      
      public static var ladderRewardState:Array = [];
      
      public static var levelForever:int = 124801;
      
      public static var isBird:Boolean = true;
      
      public static var curBirdValue:int = 0;
      
      public static var curBirdTimes:int = 0;
      
      public static var originData:int = 0;
      
      private static var ac1:ActivityControl;
      
      private static var _openTime:String = "11:00-15:00和18:00-22:00";
      
      private static var cron1:Array = [new CronTimeVo("*","11-14","*","*","*","*"),new CronTimeVo("*","18-21","*","*","*","*")];
      
      private static var _map:BaseMapProcess;
      
      private static var appNameArr:Array = ["PeakJihad2023MainPanel","PeakJihadBanPickListPanel","PeakJihadBanPickVoteListPanel","PeakJihadRulesSummaryIntroduction2016RevisionPanel","","","PeakJihadRewardChange2016RevisionPanel","PeakJihadBanPetShowPanel",""];
       
      
      public function PeakJihad2023Controller()
      {
         super();
      }
      
      public static function initMap1095(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel.addEventListener(MouseEvent.CLICK,onClick);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      public static function destroy() : void
      {
         if(!MainManager.isFighting)
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         }
      }
      
      protected static function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var event:MouseEvent = param1;
         index = int(event.target.name.split("_")[1]);
         switch(event.target.name)
         {
            case "gotoBtn_" + index:
               PeakJihad2016Controller.getIsTimeOutNum(function():void
               {
                  if(index == 0)
                  {
                     ModuleManager.showAppModule(appNameArr[index]);
                  }
               });
         }
      }
      
      public static function isInAcTime(param1:Boolean = true) : Boolean
      {
         if(ac1 == null)
         {
            ac1 = new ActivityControl(cron1);
         }
         if(ac1.isInActivityTime)
         {
            return true;
         }
         if(param1)
         {
            Alarm2.show("6v6巅峰限制赛的开放时间为每日" + _openTime + ",请稍后再来。");
         }
         return false;
      }
      
      public static function updateBird() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         KTool.getMultiValue([124950]).then(function(param1:Array):void
         {
            isBird = param1[0] <= 0;
            deferred.resolve(param1);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function updateCurLevel() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         KTool.getMultiValue([levelForever]).then(function(param1:Array):void
         {
            curLevel = KTool.subByte(param1[0],0,16);
            curScore = KTool.subByte(param1[0],16,16);
            deferred.resolve(param1);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function getRatingsNameByScore(param1:int, param2:Boolean = true) : String
      {
         var _loc3_:int = int(KTool.subByte(param1,0,16));
         var _loc4_:int = int(KTool.subByte(param1,16,16));
         if(RATINGS_NAME[_loc3_] != null)
         {
            if(param2)
            {
               return RATINGS_NAME[_loc3_] + _loc4_ + (_loc3_ >= 4 ? "星" : "分");
            }
            return RATINGS_NAME[_loc3_] + (_loc3_ >= 4 ? _loc4_ + "星" : "");
         }
         return "";
      }
      
      public static function getTitleByLevelScore() : String
      {
         var _loc1_:String = "";
         return _loc1_ + (RATINGS_NAME[curLevel] + curScore + (curLevel >= 4 ? "星" : "分"));
      }
      
      public static function updateOrderShopValue() : void
      {
         var conf:Array = null;
         conf = Pvp_shop.getItems().filter(function(param1:IPvp_shopInfo, param2:int, param3:Array):Boolean
         {
            if(param1.userinfo > 0)
            {
               return true;
            }
            return false;
         });
         var arr:Array = conf.map(function(param1:IPvp_shopInfo):int
         {
            return param1.userinfo;
         });
         PeakJihad2023Controller.shopValue.clear();
         KTool.getMultiValue(arr).then(function(param1:Array):void
         {
            if(param1.length != conf.length)
            {
               DebugTrace.show("出错啦!数据不对等");
               return;
            }
            var _loc2_:int = 0;
            while(_loc2_ < conf.length)
            {
               PeakJihad2023Controller.shopValue.add(conf[_loc2_].id,param1[_loc2_]);
               _loc2_++;
            }
         });
      }
      
      public static function clearType() : void
      {
         PetFightModel.type = 0;
         PetFightModel.status = 0;
      }
      
      private static function onFightOver(param1:*) : void
      {
         var obj:Object = null;
         var e:* = param1;
         var isJumping:Boolean = false;
         if(PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE || PetFightModel.type == PetFightModel.PEAK_JIHAD_3V3 || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6 || PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE_PLAN || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_JJ)
         {
            if(PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER)
            {
               if(PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_JJ)
               {
                  obj = {};
                  obj["isWin"] = FightManager.isWin;
                  obj["isDraw"] = isDraw;
                  ModuleManager.showModule(ClientConfig.getAppModule("PeakJihad2023BattleEndResultPanel"),"正在打开....",obj);
               }
               else if(PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6 || PetFightModel.type == PetFightModel.PEAK_JIHAD_3V3)
               {
                  clearType();
                  if(!isJumping)
                  {
                     ModuleManager.showAppModule("PeakJihad2023FallowModePanel");
                  }
                  Alarm2.show(!!FightManager.isWin ? "恭喜你获得了胜利" : "很遗憾，你战败了");
               }
               else if(PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE || PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE_PLAN)
               {
                  clearType();
                  if(isJumping)
                  {
                     KTool.getMultiValue([3313],function(param1:Array):void
                     {
                        if(param1[0] == 1)
                        {
                           SocketConnection.sendByQueue(45136,[5,0]);
                        }
                        else
                        {
                           SocketConnection.sendByQueue(45136,[2,0]);
                        }
                     });
                  }
                  else
                  {
                     ModuleManager.showAppModule("PeakJihad2023RoomPanel");
                  }
                  Alarm2.show(!!FightManager.isWin ? "恭喜你获得了胜利" : "很遗憾，你战败了");
               }
            }
         }
      }
      
      public static function getFristBagALLPetLvIsFull() : Boolean
      {
         var _loc1_:PetInfo = null;
         for each(_loc1_ in PetManager.infos)
         {
            if(_loc1_.level < 100 || _loc1_.hp != _loc1_.maxHp)
            {
               return false;
            }
         }
         return true;
      }
      
      public static function getFristBagALLPetLvIsFull2() : Boolean
      {
         var info:PetInfo = null;
         var pp:Array = null;
         var infos:Array = PetManager.infos;
         if(infos.length < 6)
         {
            return false;
         }
         for each(info in infos)
         {
            if(info.level < 100 || info.hp != info.maxHp)
            {
               return false;
            }
            pp = info.skillArray.filter(function(param1:PetSkillInfo, param2:int, param3:Array):Boolean
            {
               return !param1.isFullPP;
            });
            if(pp.length > 0)
            {
               return false;
            }
            if(Boolean(info.hideSKill) && info.hideSKill.pp != SkillXMLInfo.getPP(info.hideSKill.id))
            {
               return false;
            }
         }
         return true;
      }
      
      public static function getAllBagALLPetLvIsFull() : Boolean
      {
         var info:PetInfo = null;
         var pp:Array = null;
         if(PetManager.infos.length < 6)
         {
            return false;
         }
         for each(info in PetManager.allInfos)
         {
            if(info.level < 100 || info.hp != info.maxHp)
            {
               return false;
            }
            pp = info.skillArray.filter(function(param1:PetSkillInfo, param2:int, param3:Array):Boolean
            {
               return !param1.isFullPP;
            });
            if(pp.length > 0)
            {
               return false;
            }
            if(Boolean(info.hideSKill) && info.hideSKill.pp != SkillXMLInfo.getPP(info.hideSKill.id))
            {
               return false;
            }
         }
         return true;
      }
      
      public static function getBagALLPetLvIsFullAndNotSame() : Boolean
      {
         var items:Array;
         var info:PetInfo = null;
         var i:int = 0;
         var j:int = 0;
         var pp:Array = null;
         var conf:IPvp_banInfo = null;
         var limitNum:int = 0;
         var num:int = 0;
         var pets:Array = null;
         var k:int = 0;
         var pet:int = 0;
         var arr:Array = [];
         if(PetManager.infos.length < 6)
         {
            return false;
         }
         for each(info in PetManager.allInfos)
         {
            if(info.level < 100 || info.hp != info.maxHp)
            {
               return false;
            }
            pp = info.skillArray.filter(function(param1:PetSkillInfo, param2:int, param3:Array):Boolean
            {
               return !param1.isFullPP;
            });
            if(pp.length > 0)
            {
               return false;
            }
            if(Boolean(info.hideSKill) && info.hideSKill.pp != SkillXMLInfo.getPP(info.hideSKill.id))
            {
               return false;
            }
            arr.push(info.id);
         }
         arr.sort();
         i = 0;
         while(i < arr.length - 1)
         {
            if(arr[i] == arr[i + 1])
            {
               return false;
            }
            i++;
         }
         items = Pvp_ban.getItems();
         j = 1;
         while(j <= 2)
         {
            conf = items.filter(function(param1:IPvp_banInfo, param2:int, param3:Array):Boolean
            {
               return param1.type == j;
            })[0];
            limitNum = int(conf.quantity);
            num = 0;
            pets = conf.name.split(";").map(function(param1:*, param2:int, param3:Array):int
            {
               return int(param1);
            });
            k = 0;
            while(k < pets.length)
            {
               pet = int(pets[k]);
               arr.indexOf(pet) > -1 && num++;
               if(num > limitNum)
               {
                  return false;
               }
               k++;
            }
            j++;
         }
         return true;
      }
      
      public static function getLadderRewardState() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         KTool.getMultiValue([124798]).then(function(param1:Array):void
         {
            var _loc4_:* = false;
            ladderRewardState = [];
            var _loc2_:int = int(param1[0]);
            var _loc3_:int = 0;
            while(_loc3_ < 5)
            {
               if(!(_loc4_ = KTool.getBit(_loc2_,_loc3_ + 1) == 1))
               {
                  ladderRewardState.push(PeakJihad2023Controller.curLevel >= _loc3_ ? 1 : 0);
               }
               else
               {
                  ladderRewardState.push(2);
               }
               _loc3_++;
            }
            deferred.resolve(param1);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
   }
}
