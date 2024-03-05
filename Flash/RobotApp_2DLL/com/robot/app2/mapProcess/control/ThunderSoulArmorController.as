package com.robot.app2.mapProcess.control
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.getTimer;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ThunderSoulArmorController
   {
      
      private static var _itemCount:int = 0;
      
      private static var _map:BaseMapProcess;
      
      private static var _ui:MovieClip;
      
      private static var _robot:MovieClip;
      
      private static var _eventListenerManager:EventListenerManager;
      
      private static var _pos:Array = [];
      
      private static var _startTime:uint = 0;
      
      private static var _collectCount:int = 0;
      
      private static var _vipGotAward:int = 0;
      
      private static var _energy:int = 0;
      
      private static var _mcLevelPanel:MovieClip;
      
      private static var _buffData:Array;
      
      private static var _currLevel:int = 0;
      
      private static var _currIndex:int = 0;
      
      private static var maxTime:uint = 100000;
      
      private static var addTime:uint = 5000;
      
      private static var clickCount:int = 0;
      
      private static var startTime:int = 0;
      
      private static var reduce:Number = 4;
      
      private static var _firstClick:int = 0;
       
      
      public function ThunderSoulArmorController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _pos = [new Point(8.25,180.4),new Point(207.5,311.45),new Point(406.1,236.85),new Point(746.1,319.3)];
         ToolBarController.panel.visible = false;
         LevelManager.iconLevel.visible = false;
         _map = map;
         _eventListenerManager = new EventListenerManager();
         ResourceManager.getResource(ClientConfig.getAppRes("map_10750"),function(param1:MovieClip):void
         {
            _map.btnLevel.addChild(param1);
            _ui = param1;
            _robot = _ui["mcItem_0"];
            _mcLevelPanel = _ui["mcLevelPanel"];
            _mcLevelPanel["mcUpMovie_0"].visible = false;
            _mcLevelPanel["mcUpMovie_1"].visible = false;
            DisplayUtil.removeForParent(_mcLevelPanel);
            _ui["mcGo"].visible = false;
            _ui["mcProgress"].visible = false;
            MovieClip(_ui["mcGo"]["mcMovie"]).mouseChildren = MovieClip(_ui["mcGo"]["mcMovie"]).mouseEnabled = false;
            getbuffData();
            updateItems();
            addEvent();
            updateVipState();
         });
      }
      
      public static function clickEquip(param1:* = null) : void
      {
         if(MapManager.currentMap.id == 1016)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ThunderSoulArmorPanel"));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ThunderSoulArmorMsgPanel"));
         }
      }
      
      private static function updateItems() : void
      {
         var items:Array = null;
         items = [1701765];
         ItemManager.updateItems(items,function():void
         {
            _itemCount = ItemManager.getNumByID(items[0]);
            showItemCount(_ui["mcItemCount"],(_itemCount + "").split("").reverse());
            updateGoState();
         });
      }
      
      private static function updateGoState() : void
      {
         if(_itemCount + _energy >= 500)
         {
            _ui["mcGo"].visible = true;
         }
      }
      
      private static function getbuffData() : void
      {
         SystemTimerManager.removeTickFun(collecting);
         MovieClip(_ui["mcProgress"]).visible = false;
         KTool.getMultiValue([14153,14154,14155,14156,14157,14158,14159,14160,14161,14163,14164,14165,14166,4231,14162],function(param1:Array):void
         {
            var _loc3_:int = 0;
            var _loc4_:Array = null;
            _buffData = param1;
            _energy = param1[13];
            _vipGotAward = param1[14];
            var _loc2_:int = 0;
            while(_loc2_ < 4)
            {
               MovieClip(_ui["mcItem_" + _loc2_]["mcLevel"]).gotoAndStop(_buffData[9 + _loc2_] + 1);
               MovieClip(_ui["mcItem_" + _loc2_]["addMovie"]).visible = false;
               _loc3_ = 0;
               if(_loc2_ == 3 && Boolean(MainManager.actorInfo.isVip))
               {
                  _loc3_ = 1;
               }
               MovieClip(_ui["mcItem_" + _loc2_]).visible = true;
               if(_buffData[_loc2_] > 0)
               {
                  MovieClip(_ui["mcItem_" + _loc2_]["mcState"]).gotoAndStop(4 + _loc3_);
                  MovieClip(_ui["mcItem_" + _loc2_]["mcProcess"]).visible = false;
                  if(_buffData[8] > 0 && _buffData[8] != _loc2_ + 1)
                  {
                     MovieClip(_ui["mcItem_" + _loc2_]).visible = false;
                  }
               }
               else if(_buffData[8] > 0)
               {
                  if(_buffData[8] == _loc2_ + 1)
                  {
                     _robot = _ui["mcItem_" + _loc2_];
                     MovieClip(_ui["mcItem_" + _loc2_]["mcState"]).gotoAndStop(2 + _loc3_);
                     MovieClip(_ui["mcItem_" + _loc2_]["mcProcess"]).visible = true;
                     MovieClip(_ui["mcProgress"]).visible = true;
                     _currIndex = _loc2_;
                     _startTime = _buffData[4 + _loc2_];
                     _currLevel = _buffData[9 + _loc2_];
                     SystemTimerManager.addTickFun(collecting);
                     MovieClip(_robot["addMovie"]).gotoAndStop(_currLevel + 2);
                     MovieClip(_ui["mcItem_" + _loc2_]["addMovie"]).visible = true;
                     MovieClip(_mcLevelPanel["mcLevel"]).gotoAndStop(_currLevel + 1);
                     _loc4_ = [20,36];
                     reduce = _loc4_[_currLevel];
                  }
                  else
                  {
                     MovieClip(_ui["mcItem_" + _loc2_]).visible = false;
                  }
               }
               else
               {
                  MovieClip(_ui["mcItem_" + _loc2_]["mcState"]).gotoAndStop(1 + _loc3_);
                  MovieClip(_ui["mcItem_" + _loc2_]["mcProcess"]).visible = false;
               }
               if(_vipGotAward > 0)
               {
                  MovieClip(_ui["mcVip"]).gotoAndStop(3);
                  MovieClip(_ui["mcVip"]).mouseChildren = MovieClip(_ui["mcVip"]).mouseEnabled = false;
               }
               _loc2_++;
            }
         });
      }
      
      private static function completeCollect() : void
      {
         var _loc1_:int = 0;
         if(_robot.name == "mcItem_3" && Boolean(MainManager.actorInfo.isVip))
         {
            _loc1_ = 1;
         }
         SystemTimerManager.removeTickFun(collecting);
         MovieClip(_robot["mcProcess"]["mcBar"]).gotoAndStop(101);
         TextField(_robot["mcProcess"]["txt"]).text = "100%";
         TextField(_robot["mcProcess"]["txtTitle"]).text = "收集完毕...";
         MovieClip(_robot["mcProcess"]["mcBar"]).visible = true;
         TextField(_robot["mcProcess"]["txt"]).visible = true;
         TextField(_robot["mcProcess"]["txtTitle"]).visible = true;
         var _loc2_:MovieClip = _ui["mcProgress"];
         _loc2_["mcBar"].gotoAndStop(101);
         TextField(_loc2_["txtPercent"]).text = "12/12";
         _loc2_["btnBuy"].visible = false;
         TextField(_ui["mcProgress"]["txtLeftTime"]).text = "预计剩余时间：0";
         _robot["mcState"].gotoAndStop(3 + _loc1_);
         MovieClip(_robot["addMovie"]).visible = false;
      }
      
      private static function collecting() : void
      {
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc1_:int = SystemTimerManager.time - _startTime;
         _loc1_ = _loc1_ < 0 ? 0 : _loc1_;
         var _loc2_:Array = [900,600,300];
         var _loc3_:int = _loc2_[_currLevel] / 12;
         if(_loc1_ >= _loc3_ * 12)
         {
            SystemTimerManager.removeTickFun(collecting);
            completeCollect();
         }
         else if(_robot)
         {
            _loc4_ = _loc1_ / _loc3_;
            _loc5_ = _loc1_ % _loc3_ * 100 / _loc3_;
            _loc6_ = 100 * _loc1_ / _loc2_[_currLevel];
            MovieClip(_robot["mcProcess"]).visible = true;
            TextField(_robot["mcProcess"]["txt"]).visible = true;
            TextField(_robot["mcProcess"]["txtTitle"]).visible = true;
            TextField(_robot["mcProcess"]["txt"]).text = _loc5_ + "%";
            TextField(_robot["mcProcess"]["txtTitle"]).text = "采集雷魂金魄中…";
            MovieClip(_robot["mcProcess"]["mcBar"]).gotoAndStop(_loc5_ + 1);
            MovieClip(_ui["mcProgress"]["mcBar"]).gotoAndStop(_loc6_ + 1);
            TextField(_ui["mcProgress"]["txtPercent"]).text = "" + _loc4_ + "/12";
            TextField(_ui["mcProgress"]["txtLeftTime"]).text = "距收集完成还有：" + SystemTimerManager.getTimeClockString(_loc2_[_currLevel] - _loc1_,false);
         }
      }
      
      private static function showItemCount(param1:MovieClip, param2:Array) : void
      {
         var _loc3_:int = 0;
         while(_loc3_ < param1.numChildren)
         {
            if(_loc3_ < param2.length)
            {
               param1["num_" + _loc3_].visible = true;
               MovieClip(param1["num_" + _loc3_]).gotoAndStop(int(param2[_loc3_]) + 1);
            }
            else
            {
               param1["num_" + _loc3_].visible = false;
            }
            _loc3_++;
         }
      }
      
      private static function addEvent() : void
      {
         _eventListenerManager.addEventListener(_ui["btnGet"],MouseEvent.CLICK,onGet);
         _eventListenerManager.addEventListener(_ui["mcVip"],MouseEvent.CLICK,onVip);
         _eventListenerManager.addEventListener(_ui["btnTrainning"],MouseEvent.CLICK,onTrainning);
         _eventListenerManager.addEventListener(_ui["btnExit"],MouseEvent.CLICK,onExit);
         _eventListenerManager.addEventListener(_ui["mcGo"]["btnGo"],MouseEvent.CLICK,onGo);
         _eventListenerManager.addEventListener(_ui["mcProgress"]["btnBuy"],MouseEvent.CLICK,onBuy);
         _eventListenerManager.addEventListener(_mcLevelPanel["btnClose"],MouseEvent.CLICK,onCloseLevelPanel);
         _eventListenerManager.addEventListener(_mcLevelPanel["btnLevelUp0"],MouseEvent.CLICK,onBuyLevel);
         _eventListenerManager.addEventListener(_mcLevelPanel["btnLevelUp1"],MouseEvent.CLICK,onLevelUp);
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            _eventListenerManager.addEventListener(_ui["mcItem_" + _loc1_],MouseEvent.CLICK,onClickItem);
            _loc1_++;
         }
         _eventListenerManager.addEventListener(EventManager,RobotEvent.CLOSE_SIMPLE_MODULE_PANEL,onClosePanel);
      }
      
      private static function onBuyLevel(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(_currLevel < 2)
         {
            KTool.buyProductByCallback(240987,1,function():void
            {
               SocketConnection.sendWithCallback(46177,function(param1:SocketEvent):void
               {
                  updateVipState();
                  getbuffData();
                  _mcLevelPanel["mcUpMovie_1"].visible = true;
                  MovieClip(_mcLevelPanel["mcUpMovie_1"]).gotoAndPlay(1);
               },_buffData[8] + 4);
            },_ui);
         }
         else
         {
            Alarm2.show("已经升级到最高等级了，不能再升级！");
         }
      }
      
      private static function onLevelUp(param1:MouseEvent) : void
      {
         var _loc2_:uint = 0;
         if(_currLevel < 2)
         {
            _loc2_ = uint(getTimer());
            if(startTime > 0)
            {
               if(reduce * (_loc2_ - startTime) > addTime * clickCount)
               {
                  startTime = _loc2_;
                  clickCount = 1;
                  onEnterframe();
                  _eventListenerManager.addEventListener(_mcLevelPanel,Event.ENTER_FRAME,onEnterframe);
                  checkMouseMovie();
               }
               else
               {
                  ++clickCount;
                  onEnterframe();
               }
            }
            else
            {
               startTime = _loc2_;
               clickCount = 1;
               onEnterframe();
               _eventListenerManager.addEventListener(_mcLevelPanel,Event.ENTER_FRAME,onEnterframe);
               checkMouseMovie();
            }
         }
         else
         {
            Alarm2.show("已经升级到最高等级了，不能再升级！");
         }
      }
      
      private static function checkMouseMovie() : void
      {
         if(_firstClick == 0)
         {
            _firstClick = 1;
            setTimeout(removeMouse,3000);
            _mcLevelPanel.addChild(_mcLevelPanel["mcMouse"]);
            MovieClip(_mcLevelPanel["mcMouse"]).gotoAndPlay(1);
         }
      }
      
      private static function removeMouse() : void
      {
         DisplayUtil.removeForParent(_mcLevelPanel["mcMouse"]);
      }
      
      private static function onEnterframe(param1:Event = null) : void
      {
         var _loc2_:uint = uint(getTimer());
         var _loc3_:int = addTime * clickCount - reduce * (_loc2_ - startTime);
         var _loc4_:int;
         if((_loc4_ = (_loc4_ = (_loc4_ = 100 * _loc3_ / maxTime) < 0 ? 0 : _loc4_) > 100 ? 100 : _loc4_) >= 100)
         {
            _eventListenerManager.removeEventListener(_mcLevelPanel,Event.ENTER_FRAME,onEnterframe);
            sendLevelUp();
            _mcLevelPanel["mcUpMovie_0"].visible = true;
            MovieClip(_mcLevelPanel["mcUpMovie_0"]).gotoAndPlay(1);
            clickCount = 0;
         }
         _mcLevelPanel["mcBar"].gotoAndStop(_loc4_ + 1);
         _mcLevelPanel["txt"].text = "" + _loc4_ + "%";
      }
      
      private static function sendLevelUp() : void
      {
         SocketConnection.sendWithCallback(46177,function(param1:SocketEvent):void
         {
            getbuffData();
         },_buffData[8]);
      }
      
      private static function onCloseLevelPanel(param1:MouseEvent = null) : void
      {
         DisplayUtil.removeForParent(_mcLevelPanel);
      }
      
      private static function onClickItem(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var name:String = String(e.target.name);
         var index:int = int(String(e.currentTarget.name).split("_")[1]);
         switch(name)
         {
            case "btnStart":
               startCollect(index);
               break;
            case "btnLevel":
               showLevelPanel();
               break;
            case "btnGet":
               getItem(index);
               break;
            case "btnVip":
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4,"2",function():void
               {
                  updateVipState();
                  getbuffData();
               });
         }
      }
      
      private static function getItem(param1:int) : void
      {
         var index:int = param1;
         SocketConnection.sendWithCallback(46175,function(param1:SocketEvent):void
         {
            getbuffData();
         },index + 1);
         StatManager.sendStat2014("雷魂战甲","点击领取雷魂金魄",StatManager.RUN_ACT);
      }
      
      private static function startCollect(param1:int) : void
      {
         var index:int = param1;
         _ui["mcProgress"]["btnBuy"].visible = true;
         SocketConnection.sendWithCallback(46176,function(param1:SocketEvent):void
         {
            getbuffData();
         },index + 1);
         StatManager.sendStat2014("雷魂战甲","开始收集雷魂金魄",StatManager.RUN_ACT);
      }
      
      private static function showLevelPanel() : void
      {
         _ui.addChild(_mcLevelPanel);
         removeMouse();
         _firstClick = 0;
         MovieClip(_mcLevelPanel["mcLevel"]).gotoAndStop(_currLevel + 1);
         StatManager.sendStat2014("雷魂战甲","点击升级装置",StatManager.RUN_ACT);
      }
      
      private static function onClosePanel(param1:RobotEvent) : void
      {
         updateItems();
      }
      
      private static function onBuy(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var pass:int = SystemTimerManager.time - _startTime;
         if(pass >= 800)
         {
            Alarm2.show("你已经完成了收集，可以直接领取奖励！");
         }
         else
         {
            KTool.buyProductByCallback(240986,1,function():void
            {
               KTool.doExchange(3209,function():void
               {
                  _ui["mcProgress"].visible = false;
                  updateItems();
                  getbuffData();
               });
            });
         }
      }
      
      private static function onGo(param1:MouseEvent) : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         MapManager.changeMap(1016);
      }
      
      private static function onMapChange(param1:*) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         ModuleManager.showModule(ClientConfig.getAppModule("ThunderSoulArmorPanel"));
      }
      
      private static function onExit(param1:MouseEvent) : void
      {
         MapManager.changeMap(1016);
         StatManager.sendStat2014("雷魂战甲","点击离开按钮",StatManager.RUN_ACT);
      }
      
      private static function onTrainning(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ThunderSoulArmorTrainningPanel"));
         StatManager.sendStat2014("雷魂战甲","打开恢复训练面板",StatManager.RUN_ACT);
      }
      
      private static function onGet(param1:MouseEvent) : void
      {
         EventManager.addEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onCloseBuyPanel);
         ModuleManager.showModule(ClientConfig.getAppModule("MultiBuyPanel"),"",{
            "productID":240985,
            "iconID":1701765,
            "exchangeID":3208
         });
      }
      
      private static function onCloseBuyPanel(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onCloseBuyPanel);
         updateItems();
      }
      
      private static function onVip(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(MainManager.actorInfo.isVip)
         {
            if(_vipGotAward > 0)
            {
               Alarm2.show("你今天已经领取了雷魂金魄，请明天再来吧！");
            }
            else
            {
               SocketConnection.sendWithCallback(46178,function(param1:SocketEvent):void
               {
                  _vipGotAward = 1;
                  updateItems();
                  updateVipState();
               },1);
            }
         }
         else
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4,"2",function():void
            {
               updateVipState();
            });
         }
      }
      
      private static function updateVipState() : void
      {
         if(MainManager.actorInfo.isVip)
         {
            if(_vipGotAward > 0)
            {
               MovieClip(_ui["mcVip"]).gotoAndStop(3);
               MovieClip(_ui["mcVip"]).mouseChildren = MovieClip(_ui["mcVip"]).mouseEnabled = false;
            }
            else
            {
               MovieClip(_ui["mcVip"]).gotoAndStop(2);
            }
         }
         else
         {
            MovieClip(_ui["mcVip"]).gotoAndStop(1);
         }
      }
      
      public static function destroy() : void
      {
         ToolBarController.panel.visible = true;
         LevelManager.iconLevel.visible = true;
         SystemTimerManager.removeTickFun(collecting);
         if(_eventListenerManager)
         {
            _eventListenerManager.clear();
            _eventListenerManager = null;
         }
         _map = null;
         _ui = null;
         _pos = null;
         _robot = null;
         _mcLevelPanel = null;
      }
   }
}
