package com.robot.app2.mapProcess.control
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SpecAlert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.Utils;
   
   public class DarkArmorController
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
       
      
      public function DarkArmorController()
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
         ResourceManager.getResource(ClientConfig.getAppRes("map_10555_0"),function(param1:MovieClip):void
         {
            _map.btnLevel.addChild(param1);
            _ui = param1;
            _robot = _ui["mcRobot"];
            _ui["mcGo"].visible = false;
            _ui["mcProgress"].visible = false;
            MovieClip(_ui["mcReduceTimeMovie"]).gotoAndStop(MovieClip(_ui["mcReduceTimeMovie"]).totalFrames);
            MovieClip(_ui["mcGo"]["mcMovie"]).mouseChildren = MovieClip(_ui["mcGo"]["mcMovie"]).mouseEnabled = false;
            MovieClip(_ui["mcTrainning"]).buttonMode = true;
            getbuffData();
            updateItems();
            addEvent();
            updateVipState();
         });
      }
      
      public static function clickEquip(param1:* = null) : void
      {
         if(MapManager.currentMap.id == 1013)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DarkArmorMainPanel"));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DarkArmorMsgPanel"));
         }
      }
      
      private static function updateItems() : void
      {
         var items:Array = null;
         items = [1701651];
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
         var START_TIME_CODE:int = 2226;
         var COLLECT_TIMES_CODE:int = 12155;
         var VIP_GOT_ITEM:int = 12153;
         var ENERGY_CODE:int = 2224;
         KTool.getMultiValue([START_TIME_CODE,COLLECT_TIMES_CODE,VIP_GOT_ITEM,ENERGY_CODE],function(param1:Array):void
         {
            var _loc2_:int = 0;
            _startTime = param1[0];
            _collectCount = param1[1];
            _vipGotAward = param1[2];
            _energy = param1[3];
            updateGoState();
            TextField(_ui["txtCount"]).text = "" + (4 - _collectCount);
            if(_vipGotAward > 0)
            {
               MovieClip(_ui["mcVip"]).gotoAndStop(3);
               MovieClip(_ui["mcVip"]).mouseChildren = MovieClip(_ui["mcVip"]).mouseEnabled = false;
            }
            if(param1[1] > 0 && _startTime > 0)
            {
               _loc2_ = SystemTimerManager.time - param1[0];
               if(_loc2_ > 800)
               {
                  completeCollect();
               }
               else
               {
                  _ui["mcProgress"]["btnBuy"].visible = true;
                  SystemTimerManager.addTickFun(collecting);
               }
               _ui["mcProgress"].visible = true;
            }
            else if(param1[0] > 0)
            {
               completeCollect();
               _ui["mcProgress"].visible = true;
            }
            else
            {
               initCollect();
            }
         });
      }
      
      private static function completeCollect() : void
      {
         var _loc1_:Point = _pos[0];
         _robot.x = _loc1_.x;
         _robot.y = _loc1_.y;
         _robot.gotoAndStop(3);
         SystemTimerManager.removeTickFun(collecting);
         MovieClip(_robot["mcBar"]["mcBar"]).gotoAndStop(101);
         TextField(_robot["txt"]).text = "100/100";
         TextField(_robot["txtTitle"]).text = "收集完毕...";
         MovieClip(_robot["mcBar"]).visible = true;
         TextField(_robot["txt"]).visible = true;
         TextField(_robot["txtTitle"]).visible = true;
         var _loc2_:MovieClip = _ui["mcProgress"];
         _loc2_["mcBar"].gotoAndStop(101);
         TextField(_loc2_["txtPercent"]).text = "8/8";
         _loc2_["btnBuy"].visible = false;
         TextField(_ui["mcProgress"]["txtLeftTime"]).text = "0";
      }
      
      private static function collecting() : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:Point = null;
         var _loc1_:int = SystemTimerManager.time - _startTime;
         _loc1_ = _loc1_ < 0 ? 0 : _loc1_;
         if(_loc1_ > 800)
         {
            SystemTimerManager.removeTickFun(collecting);
            completeCollect();
         }
         else if(_robot)
         {
            _loc2_ = _loc1_ % 100;
            _loc3_ = 100 * _loc1_ / 800;
            _loc4_ = ((_loc4_ = _loc1_ / 100) + 1) % 4;
            _loc5_ = _pos[_loc4_];
            _robot.x = _loc5_.x;
            _robot.y = _loc5_.y;
            MovieClip(_robot["mcBar"]).visible = true;
            TextField(_robot["txt"]).visible = true;
            TextField(_robot["txtTitle"]).visible = true;
            TextField(_robot["txt"]).text = _loc2_ + "/100";
            TextField(_robot["txtTitle"]).text = "收集中...";
            if(_robot.currentFrame != 4 && _robot.currentFrame != 2)
            {
               _robot.gotoAndStop(2);
            }
            MovieClip(_robot["mcBar"]["mcBar"]).gotoAndStop(_loc2_ + 1);
            MovieClip(_ui["mcProgress"]["mcBar"]).gotoAndStop(_loc3_ + 1);
            TextField(_ui["mcProgress"]["txtPercent"]).text = "" + int(_loc1_ / 100) + "/8";
            TextField(_ui["mcProgress"]["txtLeftTime"]).text = "" + SystemTimerManager.getTimeClockString(800 - _loc1_,false);
         }
      }
      
      private static function initCollect() : void
      {
         var _loc1_:Point = _pos[1];
         _robot.x = _loc1_.x;
         _robot.y = _loc1_.y;
         _robot.gotoAndStop(1);
         MovieClip(_robot["mcBar"]).visible = false;
         TextField(_robot["txt"]).visible = false;
         TextField(_robot["txtTitle"]).visible = false;
         MovieClip(_ui["mcProgress"]["mcBar"]).gotoAndStop(1);
         TextField(_ui["mcProgress"]["txtPercent"]).text = "0%";
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
         _eventListenerManager.addEventListener(_ui["mcTrainning"],MouseEvent.CLICK,onTrainning);
         _eventListenerManager.addEventListener(_ui["btnExit"],MouseEvent.CLICK,onExit);
         _eventListenerManager.addEventListener(_ui["mcGo"]["btnGo"],MouseEvent.CLICK,onGo);
         _eventListenerManager.addEventListener(_ui["mcProgress"]["btnBuy"],MouseEvent.CLICK,onBuy);
         _eventListenerManager.addEventListener(_robot,MouseEvent.CLICK,onClickRobot);
         _eventListenerManager.addEventListener(EventManager,RobotEvent.CLOSE_SIMPLE_MODULE_PANEL,onClosePanel);
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
            KTool.buyProductByCallback(240884,1,function():void
            {
               SocketConnection.sendWithCallback(47150,function(param1:SocketEvent):void
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
         MapManager.changeMap(1013);
      }
      
      private static function onMapChange(param1:*) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         ModuleManager.showModule(ClientConfig.getAppModule("DarkArmorMainPanel"));
      }
      
      private static function onClickRobot(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var name:String = String(e.target.name);
         if(name == "btnStart")
         {
            StatManager.sendStat2014("暗夜战甲","开始收集夜影之石",StatManager.RUN_ACT);
            if(_collectCount < 4)
            {
               SocketConnection.sendWithCallback(47146,function(param1:SocketEvent):void
               {
                  getbuffData();
               });
            }
            else
            {
               Alarm2.show("每天只能收集4次，明天再来吧！");
            }
         }
         else if(name == "btnAcc")
         {
            SocketConnection.sendWithCallback(47148,function(param1:SocketEvent):void
            {
               var e:SocketEvent = param1;
               var pass:int = SystemTimerManager.time - _startTime;
               if(pass >= 790)
               {
                  SystemTimerManager.removeTickFun(collecting);
               }
               MovieClip(_ui["mcReduceTimeMovie"]).gotoAndPlay(1);
               AnimateManager.playMcAnimate(_robot,4,"mc",function():void
               {
                  _robot.gotoAndStop(2);
                  getbuffData();
               });
            });
            StatManager.sendStat2014("暗夜战甲","点击手动加速",StatManager.RUN_ACT);
         }
         else if(name == "btnGet")
         {
            SocketConnection.sendWithCallback(47147,function(param1:SocketEvent):void
            {
               _ui["mcProgress"].visible = false;
               getbuffData();
               updateItems();
            });
            StatManager.sendStat2014("暗夜战甲","点击领取夜影之石",StatManager.RUN_ACT);
         }
      }
      
      private static function onExit(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("暗夜战甲","点击离开按钮",StatManager.RUN_ACT);
         MapManager.changeMap(1013);
      }
      
      private static function onTrainning(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DarkArmorTrainningPanel"));
         StatManager.sendStat2014("暗夜战甲","打开恢复训练面板",StatManager.RUN_ACT);
      }
      
      private static function onOpenBag(param1:MouseEvent) : void
      {
         PetBagControllerNew.showByBuffer();
      }
      
      private static function onOpenExp(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ExshiwExpPanel"));
      }
      
      private static function onCure(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var e:MouseEvent = param1;
         if(MainManager.actorInfo.superNono)
         {
            PetManager.cureAll();
         }
         else
         {
            cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
            if(cls.bonusType == 1)
            {
               PetManager.cureAll();
            }
            else
            {
               SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
               {
                  PetManager.cureAll();
               });
            }
         }
      }
      
      private static function onGet(param1:MouseEvent) : void
      {
         EventManager.addEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onCloseBuyPanel);
         ModuleManager.showModule(ClientConfig.getAppModule("MultiBuyPanel"),"",{
            "productID":240883,
            "iconID":1701651,
            "exchangeID":3030
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
               Alarm2.show("你今天已经领取了夜影之石，请明天再来吧！");
            }
            else
            {
               KTool.doExchange(3038,function():void
               {
                  _vipGotAward = 1;
                  updateItems();
                  updateVipState();
               });
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
      }
   }
}
