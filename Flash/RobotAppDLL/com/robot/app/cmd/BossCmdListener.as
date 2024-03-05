package com.robot.app.cmd
{
   import com.robot.app.automaticFight.AutomaticFightManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.controller.GetPetController;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.task.BossMonsterInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.ui.alert.PetInBagAlert;
   import com.robot.core.ui.alert.PetInStorageAlert;
   import flash.events.Event;
   import org.taomee.bean.BaseBean;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class BossCmdListener extends BaseBean
   {
      
      private static var _targetIndex:uint = 0;
      
      private static var _delayList:HashMap = new HashMap();
       
      
      private var _info:BossMonsterInfo;
      
      public function BossCmdListener()
      {
         super();
      }
      
      public static function addDelay(param1:int) : void
      {
         _delayList.add("boss_bonus_" + param1,null);
      }
      
      public static function showBonusInfo(param1:int) : void
      {
         if(!_delayList.containsKey("boss_bonus_" + param1))
         {
            return;
         }
         if(_delayList.getValue("boss_bonus_" + param1) == null)
         {
            return;
         }
         var _loc2_:BossMonsterInfo = _delayList.getValue("boss_bonus_" + param1);
         _delayList.remove("boss_bonus_" + param1);
         showAwards(_loc2_);
         if(_loc2_.petID == 0)
         {
            return;
         }
         GetPetController.getPet(_loc2_.petID,_loc2_.captureTm);
      }
      
      private static function showAwards(param1:BossMonsterInfo) : void
      {
         var _loc2_:Object = null;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:String = null;
         var _loc6_:* = null;
         for each(_loc2_ in param1.monBallList)
         {
            _loc3_ = uint(_loc2_["itemCnt"]);
            if((_loc4_ = uint(_loc2_["itemID"])) == 100096 || _loc4_ == 100097 || _loc4_ == 100098 || _loc4_ == 100099)
            {
               LevelManager.tipLevel.addChild(Alarm.show("<font color=\'#FF0000\'>闪光勇士</font>套装已经放入了你的储存箱！"));
               break;
            }
            if(_loc4_ == 100333)
            {
               LevelManager.tipLevel.addChild(Alarm.show("你的实力得到了肯定，这<font color=\'#FF0000\'>试炼勋章</font>送给你，作为你实力的证明！"));
               break;
            }
            if(_loc4_ <= 10000 || _loc4_ >= 100001)
            {
               _loc5_ = String(ItemXMLInfo.getName(_loc4_));
            }
            else
            {
               _loc5_ = String(CountermarkXMLInfo.getDes(_loc4_));
            }
            if(_loc4_ == 1)
            {
               MainManager.actorInfo.coins += _loc3_;
            }
            if(_loc4_ < 10)
            {
               if(param1.bonusID == 5065 || param1.bonusID == 5066)
               {
                  if(_loc3_ == 100)
                  {
                     _loc6_ = "看来这样的难度还难不倒你，后面的精灵会更加厉害，这" + _loc3_ + "个<font color=\'#FF0000\'>" + _loc5_ + "</font>是你的奖励！";
                  }
                  else if(_loc3_ == 200)
                  {
                     _loc6_ = "你确实具备了很强大的实力，给你" + _loc3_ + "个<font color=\'#FF0000\'>" + _loc5_ + "</font>做为奖励！";
                  }
                  else
                  {
                     _loc6_ = "你成功挑战了30关，奖励你" + _loc3_ + "个<font color=\'#FF0000\'>" + _loc5_ + "</font>！";
                  }
               }
               else
               {
                  _loc6_ = "恭喜你得到了<font color=\'#FF0000\'>" + _loc3_ + "</font>个" + _loc5_ + "！";
               }
               LevelManager.tipLevel.addChild(Alarm.show(_loc6_));
            }
            else if(_loc4_ >= 10001 && _loc4_ < 100000)
            {
               _loc6_ = _loc3_ + "个<font color=\'#FF0000\'>" + _loc5_ + "</font>已经放入了你的精灵刻印包！";
               LevelManager.tipLevel.addChild(Alarm.show(_loc6_));
            }
            else if(_loc4_ >= 400829 && _loc4_ <= 400835)
            {
               checkHasItem();
               _loc6_ = _loc3_ + "个<font color=\'#FF0000\'>" + _loc5_ + "</font>已经放入了你的储存箱！";
               ItemInBagAlert.show(_loc4_,_loc6_);
            }
            else if(ItemXMLInfo.getCatID(_loc4_) == 14)
            {
               Alarm.show("你获得了" + _loc3_ + "个<font color=\'#FF0000\'>" + _loc5_ + "</font>",null,false,false,false,LevelManager.tipLevel);
            }
            else
            {
               _loc6_ = _loc3_ + "个<font color=\'#FF0000\'>" + _loc5_ + "</font>已经放入了你的储存箱！";
               ItemInBagAlert.show(_loc4_,_loc6_);
            }
         }
      }
      
      private static function checkHasItem() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onItemList);
         ItemManager.getCollection();
      }
      
      private static function onItemList(param1:ItemEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:SingleItemInfo = null;
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onItemList);
         var _loc2_:Array = [400835,400829,400830,400831,400832,400833,400834];
         while(_loc3_ < _loc2_.length)
         {
            if(_loc4_ = ItemManager.getCollectionInfo(_loc2_[_loc3_]))
            {
               if(_loc4_.itemNum >= 3)
               {
                  _targetIndex = _loc3_;
                  SocketConnection.send(CommandID.SUMMER_FIGHT_SPT,_targetIndex);
                  break;
               }
            }
            _loc3_++;
         }
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.GET_BOSS_MONSTER,this.onGetBossMonster);
         finish();
      }
      
      private function onGetBossMonster(param1:SocketEvent) : void
      {
         var info:BossMonsterInfo = null;
         var e:SocketEvent = param1;
         if(AutomaticFightManager.isStart)
         {
            return;
         }
         info = e.data as BossMonsterInfo;
         if(_delayList.containsKey("boss_bonus_" + info.bonusID))
         {
            _delayList.add("boss_bonus_" + info.bonusID,info);
            return;
         }
         if(info.bonusID == 5561)
         {
            Alert.show("恭喜你获得1个" + ItemXMLInfo.getName(info.itemID) + ",需要立刻啃掉它吗？",function():void
            {
               MapManager.changeMap(77);
            });
            return;
         }
         if(info.bonusID == 5557 || info.bonusID == 5558 || info.bonusID == 5559 || info.bonusID == 5560)
         {
            return;
         }
         if(info.bonusID == 5408 || info.bonusID == 5409)
         {
            return;
         }
         if(info.bonusID == 5474)
         {
            return;
         }
         if(info.bonusID == 5474)
         {
            return;
         }
         if(info.bonusID == 5539)
         {
            return;
         }
         if(info.bonusID == 5507)
         {
            return;
         }
         if(info.bonusID == 5508)
         {
            return;
         }
         if(info.bonusID == 5418)
         {
            return;
         }
         if(info.bonusID == 5511)
         {
            EventManager.addEventListener("getAward",function(param1:Event):void
            {
               GetPetController.getPet(info.petID,info.captureTm);
               EventManager.removeEventListener("getAward",arguments.callee);
            });
            return;
         }
         if(info.bonusID == 5553)
         {
            EventManager.addEventListener("evolveEndPlayMapAni",function(param1:DynamicEvent):void
            {
               showAwards(info);
               EventManager.removeEventListener("evolveEndPlayMapAni",arguments.callee);
            });
            return;
         }
         if(info.bonusID == 5512)
         {
            return;
         }
         if(info.bonusID == 5505)
         {
            EventManager.addEventListener("luckyDrawComplete",function(param1:DynamicEvent):void
            {
               showAwards(info);
               EventManager.removeEventListener("luckyDrawComplete",arguments.callee);
            });
            return;
         }
         if(info.bonusID == 5532)
         {
            EventManager.addEventListener("diyumozhu_fight_complete",function(param1:DynamicEvent):void
            {
               EventManager.removeEventListener("diyumozhu_fight_complete",arguments.callee);
               showAwards(info);
            });
            return;
         }
         if(info.bonusID == 5533)
         {
            EventManager.addEventListener("qixihuoniu_getaward_complete",function(param1:DynamicEvent):void
            {
               var e:DynamicEvent = param1;
               showAwards(info);
               EventManager.removeEventListener("qixihuoniu_getaward_complete",arguments.callee);
               if(info.petID == 0)
               {
                  return;
               }
               if(PetManager.length >= 6)
               {
                  PetInStorageAlert.show(info.petID,"恭喜你获得了<font color=\'#00CC00\'>" + PetXMLInfo.getName(info.petID) + "</font>，已经放入了你的精灵仓库！",null,function():void
                  {
                     PetManager.addStorage(info.petID,info.captureTm);
                  });
               }
               else
               {
                  PetManager.addEventListener(PetEvent.ADDED,function(param1:PetEvent):void
                  {
                     PetManager.removeEventListener(PetEvent.ADDED,arguments.callee);
                     PetInBagAlert.show(info.petID,"恭喜你获得了<font color=\'#00CC00\'>" + PetXMLInfo.getName(info.petID) + "</font>，已经放入了你的精灵背包！");
                  });
                  PetManager.setIn(info.captureTm,1);
               }
            });
            return;
         }
         showAwards(info);
         if(info.petID == 0)
         {
            return;
         }
         if(PetManager.length >= 6)
         {
            PetInStorageAlert.show(info.petID,"恭喜你获得了<font color=\'#00CC00\'>" + PetXMLInfo.getName(info.petID) + "</font>，已经放入了你的精灵仓库！",null,function():void
            {
               PetManager.addStorage(info.petID,info.captureTm);
            });
            return;
         }
         PetManager.addEventListener(PetEvent.ADDED,function(param1:PetEvent):void
         {
            PetManager.removeEventListener(PetEvent.ADDED,arguments.callee);
            PetInBagAlert.show(info.petID,"恭喜你获得了<font color=\'#00CC00\'>" + PetXMLInfo.getName(info.petID) + "</font>，已经放入了你的精灵背包！");
         });
         PetManager.setIn(info.captureTm,1);
      }
      
      private function onRankAwardHandler(param1:RobotEvent) : void
      {
         EventManager.removeEventListener("5021",this.onRankAwardHandler);
         showAwards(this._info);
         this._info = null;
      }
   }
}
