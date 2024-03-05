package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.SeerUrlLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PeakJihadController
   {
      
      private static var ac1:ActivityControl;
      
      private static var ac2:ActivityControl;
      
      private static var ac3:ActivityControl;
      
      private static var ac4:ActivityControl;
      
      private static var _openTime:String = "11:00-15:00、18:00-22:00";
      
      private static var cron1:Array = [new CronTimeVo("*","11-14","*","*","*","*"),new CronTimeVo("*","18-21","*","*","*","*")];
      
      private static var cron2:Array = [new CronTimeVo("*","12-14","*","*","*","*")];
      
      public static var originData:uint;
      
      private static var _date:Date;
      
      private static var cron3:Array = [new CronTimeVo("*","8-19","*","*","*","*")];
      
      private static var lianSaiNameStr:String = "夏季战队联赛32强赛";
      
      public static var _isHaveXianxia:Boolean = false;
      
      public static var isDraw:Boolean = false;
      
      private static const task:Array = [{
         "taskName":"完成10场巅峰战",
         "taskReard":"胜利点数*400  泰坦之灵*20000"
      },{
         "taskName":"完成6场自由战",
         "taskReard":"胜利点数*200 赛尔豆*10000"
      },{
         "taskName":"获得10场巅峰战胜利",
         "taskReard":"胜利点数*600  泰坦之灵*30000"
      },{
         "taskName":"获得5场自由战胜利",
         "taskReard":"胜利点数*300  赛尔豆*20000"
      },{
         "taskName":"完成6场自由战和6场巅峰战",
         "taskReard":"评级积分*50  胜利点数*500"
      },{
         "taskName":"获得5场自由战胜利和5场巅峰战胜利",
         "taskReard":"评级积分*100  胜利点数*1000"
      }];
      
      private static const QINGTONG:String = "青铜级";
      
      private static const BAIYING:String = "白银级";
      
      private static const HUANGJIN:String = "黄金级";
      
      private static const ZUANSHI:String = "钻石级";
      
      private static const WANGZHE:String = "王者级";
      
      private static const BAZHE:String = "霸者级";
      
      private static const RATINGSNAME:Array = [QINGTONG,BAIYING,HUANGJIN,ZUANSHI,WANGZHE,BAZHE];
      
      private static var _map:BaseMapProcess;
      
      private static var _itemNum:int;
      
      private static var _addItemNum:int;
      
      private static var _score:int;
      
      private static var _JJScore:int;
      
      private static var _peakCrusadeblessingXml:XML;
      
      private static var _blessingHash:HashMap = new HashMap();
      
      private static var _homePetHash:HashMap = new HashMap();
      
      private static var _widget:MovieClip;
       
      
      public function PeakJihadController()
      {
         super();
      }
      
      public static function getTaskNameById(param1:int) : String
      {
         if(task[param1 - 1] != null)
         {
            return task[param1 - 1].taskName;
         }
         return "";
      }
      
      public static function getTaskRewardById(param1:int) : String
      {
         if(task[param1 - 1] != null)
         {
            return task[param1 - 1].taskReard;
         }
         return "";
      }
      
      public static function getRatingsLvByPoints(param1:int) : int
      {
         if(param1 >= 0 && param1 <= 1500)
         {
            return 0;
         }
         if(param1 >= 1501 && param1 <= 2000)
         {
            return 1;
         }
         if(param1 >= 2001 && param1 <= 2500)
         {
            return 2;
         }
         if(param1 >= 2501 && param1 <= 3000)
         {
            return 3;
         }
         if(param1 >= 3001 && param1 <= 4000)
         {
            return 4;
         }
         if(param1 >= 4001)
         {
            return 5;
         }
         return 0;
      }
      
      public static function getRatingsNameBylv(param1:int) : String
      {
         if(RATINGSNAME[param1] != null)
         {
            return RATINGSNAME[param1];
         }
         return "";
      }
      
      public static function onLeiNuoClick() : void
      {
         NpcDialog.show(NPC.LEINUO_GENERAL,["巅峰圣战—超级英雄杯盛大开启！"],["我想了解巅峰战规则。","我想了解自由战规则。","祝福属性及主场精灵有什么用？","再见！"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadRulesHelpPanel"),"正在打开....",0);
         },function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadRulesHelpPanel"),"正在打开....",1);
         },function():void
         {
            NpcDialog.show(NPC.LEINUO_GENERAL,["祝福属性和主场精灵每天都会更换，祝福属性能使某系技能的威力额外提升；而主场精灵在巅峰圣战中出战时的HP会额外提升！"],["我明白了"]);
         },function():void
         {
         }],false);
      }
      
      public static function onHughClick() : void
      {
         NpcDialog.show(NPC.HUGH,["巅峰圣战—超级英雄杯盛大开启！我每天都会发布任务及更新排行榜！记得每天来找我领取奖励哦！"],["我要领取每日任务。","我要查看排行榜。","再见！"],[function():void
         {
            StatManager.sendStat2014("巅峰圣战超级英雄杯0710","打开每日任务UI",StatManager.RUN_ACT_2015);
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadPeakDailyTasksPanel"),"正在打开....");
         },function():void
         {
            StatManager.sendStat2014("巅峰圣战超级英雄杯0710","打开排行榜UI",StatManager.RUN_ACT_2015);
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadChartsPanel"),"正在打开....");
         },function():void
         {
         }],false);
      }
      
      public static function onLongClick() : void
      {
         NpcDialog.show(NPC.TWOBLONG,["巅峰圣战—超级英雄杯盛大开启，你可以在我这里兑换强大的奖品！"],["我要兑换奖励。","我要进行刻印合成。","再见！"],[function():void
         {
            StatManager.sendStat2014("巅峰圣战超级英雄杯0710","打开奖励兑换UI",StatManager.RUN_ACT_2015);
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadRewardChangePanel"),"正在打开....");
         },function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("CountermarkSythesizePanel"),"正在打开....");
         },function():void
         {
         },function():void
         {
         }],false);
      }
      
      public static function onEquipmentClick1() : void
      {
         StatManager.sendStat2014("巅峰圣战超级英雄杯0710","点击巅峰战装置",StatManager.RUN_ACT_2015);
         KTool.getMultiValue([3374],function(param1:Array):void
         {
            var va:Array = param1;
            var _subType:int = int(SystemTimerManager.getDateString(SystemTimerManager.sysBJDate));
            if(_subType == va[0])
            {
               if(isInGuangzhouBisaiTime())
               {
                  initScore(function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadPinnacleWarPanel"),"正在打开....");
                  });
               }
               else
               {
                  Alarm2.show("此次线下巅峰赛的开放时间8:00-20:00,请稍后再来。");
               }
            }
            else if(isInAcTime())
            {
               initScore(function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadPinnacleWarPanel"),"正在打开....");
               });
            }
            else
            {
               Alarm2.show("6v6巅峰战的开放时间" + _openTime + ",请稍后再来。");
            }
         });
      }
      
      public static function onEquipmentClick2() : void
      {
         var petInfo:PetInfo = null;
         StatManager.sendStat2014("巅峰圣战超级英雄杯0710","点击自由战装置",StatManager.RUN_ACT_2015);
         if(PetManager.infos.length > 0)
         {
            petInfo = PetManager.getPetInfo(PetManager.defaultTime);
            if(petInfo.hp > 0)
            {
               initScore(function():void
               {
                  ModuleManager.hideAllModule();
                  ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadFreedomFighterPanel"),"正在打开....");
               });
            }
            else
            {
               Alarm2.show("你出战背包的精灵体力不足，请为他们补充HP后再来。");
            }
         }
         else
         {
            Alarm2.show("请在出战背包内放入精灵再来参加自由战！");
         }
      }
      
      public static function initMap1095(param1:BaseMapProcess) : void
      {
         StatManager.sendStat2014("巅峰圣战超级英雄杯0710","进入1095号场景",StatManager.RUN_ACT_2015);
         _map = param1;
         if(null == _peakCrusadeblessingXml)
         {
            loadShopConfigXML(initView);
         }
         else
         {
            initView();
         }
         SocketConnection.addCmdListener(CommandID.MAIL_GET_ATTACHMENT,onGetRwardByEmail);
      }
      
      private static function initView() : void
      {
         var _loc2_:XML = null;
         var _loc3_:int = 0;
         var _loc1_:XMLList = _peakCrusadeblessingXml.elements("startTime");
         for each(_loc2_ in _loc1_)
         {
            _date = new Date(_loc2_.@year,_loc2_.@month - 1,_loc2_.@date);
         }
         _loc3_ = int(timeAway() / (24 * 60 * 60)) + 1;
      }
      
      public static function initData() : void
      {
         if(MapManager.prevMapID != MapManager.currentMap.id)
         {
            initScore(function():void
            {
               if(PeakJihad2016Controller.curMonthStarLvId == 0)
               {
                  PeakJihad2016Controller.getcurMonthStarLvId(function():void
                  {
                     KTool.getMultiValue([PeakJihad2016Controller.curMonthStarLvId,PeakJihad2016Controller.curJJMonthStarLvId],function(param1:Array):void
                     {
                        _score = param1[0];
                        _JJScore = param1[1];
                     });
                  });
               }
               else
               {
                  KTool.getMultiValue([PeakJihad2016Controller.curMonthStarLvId,PeakJihad2016Controller.curJJMonthStarLvId],function(param1:Array):void
                  {
                     _score = param1[0];
                     _JJScore = param1[1];
                  });
               }
               ItemManager.updateItems([PeakJihad2016Controller.MONEYID],function():void
               {
                  var _loc1_:Array = new Array();
                  _itemNum = ItemManager.getNumByID(PeakJihad2016Controller.MONEYID);
               });
            });
         }
      }
      
      private static function timeAway() : int
      {
         var _loc1_:Number = Number(SystemTimerManager.time);
         return int((_loc1_ * 1000 - _date.time) * 0.001);
      }
      
      private static function onBtnClick(param1:MouseEvent) : void
      {
         var _loc4_:XML = null;
         var _loc2_:int = int(timeAway() / (24 * 60 * 60)) + 1;
         var _loc3_:int = int(param1.currentTarget.name.split("_")[1]);
         if(_loc3_ == 0)
         {
            _loc4_ = _blessingHash.getValue(_loc2_);
            Alarm2.show("今天祝福属性是" + _loc4_.@type + "，在巅峰圣战中" + _loc4_.@type + "系技能威力提升" + _loc4_.@upgrade + "点");
         }
         else if(_loc3_ == 1)
         {
            _loc4_ = _homePetHash.getValue(_loc2_);
            Alarm2.show("今天的主场精灵是" + _loc4_.@petName + "，在巅峰圣战中主场精灵HP提升" + _loc4_.@upgrade + "倍");
         }
      }
      
      private static function onTitleMcClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadSeeMyLvAndScroePanel"),"正在打开....");
      }
      
      private static function loadShopConfigXML(param1:Function) : void
      {
         var seerUrlLoader:SeerUrlLoader = null;
         var fun:Function = param1;
         seerUrlLoader = new SeerUrlLoader("加载每周祝福属性和主场精灵");
         var url:String = "xml/peakCrusade_blessing.xml";
         seerUrlLoader.doLoad(ClientConfig.getResPath(url),function(param1:*):void
         {
            var _loc3_:XML = null;
            var _loc4_:XMLList = null;
            var _loc5_:XML = null;
            _peakCrusadeblessingXml = XML(param1);
            var _loc2_:XMLList = _peakCrusadeblessingXml.elements("blessing");
            for each(_loc3_ in _loc2_)
            {
               _blessingHash.add(uint(_loc3_.@day),_loc3_);
            }
            _loc4_ = _peakCrusadeblessingXml.elements("homePet");
            for each(_loc5_ in _loc4_)
            {
               _homePetHash.add(uint(_loc5_.@day),_loc5_);
            }
            seerUrlLoader.clear();
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.MAIL_GET_ATTACHMENT,onGetRwardByEmail);
         if(!MainManager.isFighting)
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         }
      }
      
      public static function clearType() : void
      {
         PetFightModel.type = 0;
         PetFightModel.status = 0;
      }
      
      private static function onGetRwardByEmail(param1:SocketEvent) : void
      {
      }
      
      private static function onFightOver(param1:*) : void
      {
         var e:* = param1;
         if(PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE || PetFightModel.type == PetFightModel.PEAK_JIHAD_3V3 || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6 || PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE_PLAN || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_JJ)
         {
            if(PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER)
            {
               PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
               ItemManager.updateItems([PeakJihad2016Controller.MONEYID],function():void
               {
                  var num:Array = new Array();
                  num[0] = ItemManager.getNumByID(PeakJihad2016Controller.MONEYID);
                  _addItemNum = num[0] - _itemNum;
                  _itemNum = num[0];
                  KTool.getMultiValue([PeakJihad2016Controller.curMonthStarLvId,PeakJihad2016Controller.curJJMonthStarLvId,6918],function(param1:Array):void
                  {
                     var obj:Object = null;
                     var va:Array = param1;
                     if(PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6 || PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6_JJ)
                     {
                        obj = new Object();
                        obj.isWin = FightManager.isWin;
                        obj.isDraw = isDraw;
                        obj.oldScore = PetFightModel.type == PetFightModel.PEAK_JIHAD_6V6 ? _score : _JJScore;
                        if(_isHaveXianxia)
                        {
                           return;
                        }
                        ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadBattleEnd2016RevisionPanel"),"正在打开....",obj);
                     }
                     else if(PetFightModel.type == PetFightModel.PEAK_JIHAD_3V3)
                     {
                        clearType();
                        if(FightManager.isWin)
                        {
                           Alarm2.show("恭喜你获得了胜利",function():void
                           {
                              KTool.getMultiValue([200036],function(param1:Array):void
                              {
                                 if(param1[0] >= 50)
                                 {
                                    Alarm2.show("每日通过3V3模式最多可获得50个圣战奖章！");
                                 }
                              });
                              ModuleManager.showModule(ClientConfig.getAppModule("PeakJihad3v3Entrance2016RevisionPanel"),"正在打开....");
                           });
                        }
                        else
                        {
                           Alarm2.show("很遗憾，你战败了",function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("PeakJihad3v3Entrance2016RevisionPanel"),"正在打开....");
                           });
                        }
                     }
                     else if(PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE || PetFightModel.type == PetFightModel.PEAK_JIHAD_FREE_PLAN)
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadRoomPanel"),"正在打开....");
                        if(FightManager.isWin)
                        {
                           Alarm2.show("恭喜你获得了胜利",function():void
                           {
                              clearType();
                           });
                        }
                        else
                        {
                           Alarm2.show("很遗憾，你战败了",function():void
                           {
                              clearType();
                           });
                        }
                     }
                     _score = va[0];
                     _JJScore = va[1];
                  });
               });
            }
         }
         else if(PetFightModel.type == PetFightModel.PEAK_JIHAD_LIMIT_AC)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("PeakJihad2023LimitActivityPanel"),"正在打开....");
            if(FightManager.isWin)
            {
               Alarm2.show("恭喜你获得了胜利",function():void
               {
                  clearType();
               });
            }
            else
            {
               Alarm2.show("很遗憾，你战败了",function():void
               {
                  clearType();
               });
            }
         }
      }
      
      public static function setUp() : void
      {
         if(!NewSeerTaskController.isNewSeer)
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onSystemTime);
         }
      }
      
      private static function onSystemTime(param1:SocketEvent) : void
      {
         if(MapManager.currentMap != null)
         {
            if(MapManager.currentMap.id != 1095 && !MainManager.isFighting)
            {
               if(isInAcTime())
               {
                  if(_widget == null)
                  {
                     loadWidget();
                  }
               }
               else
               {
                  destroyWidget();
               }
            }
         }
      }
      
      public static function loadWidget() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("PeakJihadMessengerPanel"),function(param1:MovieClip):void
         {
            _widget = param1;
            MapNamePanel.ChildMc = _widget;
            _widget.buttonMode = true;
            _widget.mouseChildren = false;
            _widget.addEventListener(MouseEvent.CLICK,onGo);
            updateWidget();
         });
      }
      
      private static function updateWidget() : void
      {
         MapNamePanel.autoOpenOrClose(true,2);
      }
      
      private static function onGo(param1:MouseEvent) : void
      {
         if(MapManager.currentMap.id != 1095)
         {
            MapManager.changeMap(1095);
         }
      }
      
      private static function destroyWidget() : void
      {
         if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
         {
            _widget.removeEventListener(MouseEvent.CLICK,onGo);
            MapNamePanel.autoOpenOrClose(false);
            DisplayUtil.removeForParent(_widget);
            _widget = null;
         }
      }
      
      public static function updateItemNum() : void
      {
         ItemManager.updateItems([PeakJihad2016Controller.MONEYID],function():void
         {
            var _loc1_:Array = new Array();
            _itemNum = ItemManager.getNumByID(PeakJihad2016Controller.MONEYID);
            if(Boolean(_map) && _map.conLevel["titleMc"].mc.winningCountMc != null)
            {
               KTool.showScore(_map.conLevel["titleMc"].mc.winningCountMc,_itemNum,0,true);
            }
         });
      }
      
      public static function getFristBagALLPetLvIsFull() : Boolean
      {
         var _loc1_:PetInfo = null;
         for each(_loc1_ in PetManager.infos)
         {
            if(_loc1_.level < 100 || _loc1_.hp < _loc1_.maxHp)
            {
               return false;
            }
         }
         return true;
      }
      
      public static function getFristBagALLPetLvIsFull2() : Boolean
      {
         var _loc1_:PetInfo = null;
         if(PetManager.infos.length < 6)
         {
            return false;
         }
         for each(_loc1_ in PetManager.infos)
         {
            if(_loc1_.level < 100 || _loc1_.hp < _loc1_.maxHp || !PetManager.getPetAllSkillPPIsFull(_loc1_))
            {
               return false;
            }
         }
         return true;
      }
      
      public static function getAllBagALLPetLvIsFull() : Boolean
      {
         var _loc1_:PetInfo = null;
         if(PetManager.infos.length < 6)
         {
            return false;
         }
         for each(_loc1_ in PetManager.allInfos)
         {
            if(_loc1_.level < 100 || _loc1_.hp < _loc1_.maxHp || !PetManager.getPetAllSkillPPIsFull(_loc1_))
            {
               return false;
            }
         }
         return true;
      }
      
      public static function getBagALLPetLvIsFullAndNotSame() : Boolean
      {
         var _loc2_:PetInfo = null;
         var _loc3_:int = 0;
         var _loc1_:Array = [];
         if(PetManager.infos.length < 6)
         {
            return false;
         }
         for each(_loc2_ in PetManager.allInfos)
         {
            if(_loc2_.level < 100 || _loc2_.hp < _loc2_.maxHp || !PetManager.getPetAllSkillPPIsFull(_loc2_))
            {
               return false;
            }
            _loc1_.push(_loc2_.id);
         }
         _loc1_.sort();
         _loc3_ = 0;
         while(_loc3_ < _loc1_.length - 1)
         {
            if(_loc1_[_loc3_] == _loc1_[_loc3_ + 1])
            {
               return false;
            }
            _loc3_++;
         }
         return true;
      }
      
      public static function getBagALLPetLvIsHaveBanPick(param1:int) : Boolean
      {
         var _loc2_:PetInfo = null;
         for each(_loc2_ in PetManager.allInfos)
         {
            if(_loc2_.id == param1)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function initScore(param1:Function) : void
      {
         var fun:Function = param1;
         KTool.getBitSet([12933],function(param1:Array):void
         {
            var va:Array = param1;
            if(va[0] > 0)
            {
               if(fun != null)
               {
                  fun();
               }
            }
            else
            {
               SocketConnection.addCmdListener(4548,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(4548,arguments.callee);
                  if(fun != null)
                  {
                     fun();
                  }
               });
               SocketConnection.send(4548,1273,1);
            }
         });
      }
      
      public static function initScoreFristLeague(param1:Function) : void
      {
         var fun:Function = param1;
         KTool.getBitSet([12952],function(param1:Array):void
         {
            var va:Array = param1;
            if(va[0] > 0)
            {
               if(fun != null)
               {
                  fun();
               }
            }
            else
            {
               SocketConnection.addCmdListener(4548,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(4548,arguments.callee);
                  if(fun != null)
                  {
                     fun();
                  }
               });
               SocketConnection.send(4548,1378,1);
            }
         });
      }
      
      public static function isInAcTime() : Boolean
      {
         if(ac1 == null)
         {
            ac1 = new ActivityControl(cron1);
         }
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(ac1.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      public static function isInFuSaiAcTime() : Boolean
      {
         if(ac2 == null)
         {
            ac2 = new ActivityControl(cron2);
         }
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(ac2.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      public static function isInGuangzhouBisaiTime() : Boolean
      {
         if(ac3 == null)
         {
            ac3 = new ActivityControl(cron3);
         }
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(ac3.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      public static function getIsNoRegister() : void
      {
         KTool.getMultiValue([3333],function(param1:Array):void
         {
            var _loc3_:Array = null;
            var _loc4_:int = 0;
            var _loc2_:int = int(param1[0]);
            if(param1[0] > 0)
            {
               _loc3_ = [678741263,462099690,140128652,19332511,109668647,456172445,105883007,518674749,92404036,197904630,81039998,91607643,135122433,183479031,9291154,444884996,167383622,144391406,237188429,144726275,130019338,120471065,35919675,11976286];
               for each(_loc4_ in _loc3_)
               {
                  if(int(MainManager.actorID) == _loc4_)
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("PeakJihadSummerLeagueKnockoutRegisterNoticePanel"),"正在打开....");
                  }
               }
            }
         });
      }
      
      public static function bronzePushMsg() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PeakWinterLeagueTeamQualifyingAlertPanel"),"正在打开....");
      }
      
      public static function onEquipmentClick3() : void
      {
         navigateToURL(new URLRequest("http://seer.61.com/gameevent/2015djls/"));
      }
      
      public static function onEquipmentClick4() : void
      {
         var _subType:int = 0;
         if(getFristBagALLPetLvIsFull2())
         {
            _subType = int(SystemTimerManager.getDateString(SystemTimerManager.sysBJDate));
            KTool.getMultiValue([13214],function(param1:Array):void
            {
               var va:Array = param1;
               if(va[0] == _subType)
               {
                  _isHaveXianxia = true;
                  if(MapManager.currentMap.id !== 11060)
                  {
                     MapManager.changeMapWithCallback(11060,function():void
                     {
                        enterTeamsRaceToSpecify();
                     });
                  }
                  else
                  {
                     enterTeamsRaceToSpecify();
                  }
               }
               else
               {
                  ItemManager.upDateCollection(1400533,function():void
                  {
                     if(ItemManager.getNumByID(1400533) >= 1)
                     {
                        _isHaveXianxia = true;
                        KTool.doExchange(8098,function():void
                        {
                           onEquipmentClick4();
                        });
                     }
                     else
                     {
                        _isHaveXianxia = false;
                        Alarm2.show("你尚未具备参加" + lianSaiNameStr + "资格！");
                     }
                  });
               }
            });
         }
         else
         {
            Alarm2.show("出战背包必须拥有6只满级满血精灵才能参加比赛！");
         }
      }
      
      private static function enterTeamsRaceToSpecify() : void
      {
         SocketConnection.addCmdListener(45168,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45168,arguments.callee);
            ModuleManager.showModule(ClientConfig.getAppModule("TeamsRaceToSpecifyMatchingSystemPanel"),"正在打开....");
         });
         SocketConnection.send(45168,1,0);
      }
   }
}
