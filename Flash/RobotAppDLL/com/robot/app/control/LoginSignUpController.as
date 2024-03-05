package com.robot.app.control
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.control.TaskRoadOfDevildom;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.LoginPopUpXMLInfo;
   import com.robot.core.config.xml.RecoveryXMLInfo;
   import com.robot.core.controller.NewIconMovieController;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CronTimeVo;
   import flash.external.ExternalInterface;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   
   public class LoginSignUpController
   {
      
      private static var needPop:Boolean;
      
      private static var _isgetReward:Boolean;
      
      private static var is7k7k:Boolean;
      
      private static var popDiDuo:Boolean;
      
      private static var lastobj:Object;
       
      
      public function LoginSignUpController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap2);
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
      }
      
      private static function onSwitchMap2(param1:MapEvent) : void
      {
         var e:MapEvent = param1;
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap2);
         SocketConnection.sendByQueue(45788,[10,1],function(param1:*):void
         {
         });
         SocketConnection.sendByQueue(43328,[3,0],function(param1:*):void
         {
            var e:* = param1;
            ItemManager.updateItems([1723256,1723292],function():void
            {
            });
         });
      }
      
      private static function onSwitchMap(param1:MapEvent) : void
      {
         var b:* = undefined;
         var e:MapEvent = param1;
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         KTool.getMultiValue([106931],function(param1:Array):void
         {
            var arr:Array = param1;
            var temp:int = arr[0] & 65535;
            var tempStart:uint = uint(RecoveryXMLInfo.curStage);
            if(temp < tempStart - 1)
            {
               SocketConnection.sendByQueue(45765,[7,1,0,0],function(param1:*):void
               {
               });
            }
         });
         if(ExternalInterface.available)
         {
            b = ExternalInterface.call("is7k7kPlatform");
            if(b == null)
            {
               dealPop();
            }
            else
            {
               is7k7k = b;
               dealPop();
            }
         }
         else
         {
            dealPop();
         }
      }
      
      private static function dealPop() : void
      {
         KTool.getBitSet([1000598,1000625],function(param1:Array):void
         {
            var va:Array = param1;
            _isgetReward = va[0] > 0 ? true : false;
            popDiDuo = va[1] == 0;
            KTool.getMultiValue([6906,8537],function(param1:Array):void
            {
               var arr1:Array = param1;
               SocketConnection.sendByQueue(41400,[1,0],function(param1:SocketEvent):void
               {
                  var _loc2_:ByteArray = param1.data as ByteArray;
                  var _loc3_:int = int(_loc2_.readUnsignedInt());
                  needPop = _loc3_ == 1;
                  checkFirstTimeNews();
                  getDefinitionByName("com.robot.app2.control.YearvippreviewController").setup();
               });
            });
         });
      }
      
      private static function fullScreen() : void
      {
         if(!BufferRecordManager.getMyState(1359))
         {
            BufferRecordManager.setMyState(1359,true,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("MarketWeeklyAdPanel"));
            });
         }
      }
      
      private static function checkLoginReturn() : void
      {
         if(checkisInTime())
         {
            ModuleManager.showAppModule("YearsVip2024AlertPanel");
         }
         checkLoginGiftPanel();
         checkKeyProtect();
         getDefinitionByName("com.robot.app2.control.DoubleTryFighController").init();
         getDefinitionByName("com.robot.app2.mapProcess.control.PrinceDragonOrderController").init();
      }
      
      private static function checkKeyProtect() : void
      {
         KTool.getMultiValue([6099],function(param1:Array):void
         {
            if(KTool.getBit(param1[0],1) == 1)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("KeyProtectionPanel"));
            }
         });
      }
      
      private static function checkFirstTimeNews() : void
      {
         checkLoginReturn();
      }
      
      private static function checkLoginGiftPanel() : void
      {
         var sysdate:Date;
         var isreturn:Boolean;
         var queue:Array = null;
         var url:String = null;
         var checkQueue:Function = null;
         var showMainTask:Function = null;
         checkQueue = function(param1:* = null):void
         {
            var _loc2_:Object = null;
            if(param1 != null)
            {
               if(Boolean(lastobj) && String(param1.data).indexOf(lastobj.panel) == -1)
               {
                  return;
               }
               if(param1.data == url)
               {
                  return;
               }
               url = param1.data;
            }
            if(queue.length > 0)
            {
               if(queue[0] is Function)
               {
                  queue[0]();
               }
               else
               {
                  _loc2_ = queue.shift();
                  lastobj = _loc2_;
                  showPanelOncePerDay(_loc2_);
               }
            }
            else
            {
               LevelManager.openMouseEvent();
               ModuleManager.removeListener(ModuleManager.MODEL_CLOSE,checkQueue);
               getDefinitionByName("com.robot.app2.control.SignUpSendVipController").showVipAd();
               getDefinitionByName("com.robot.app2.control.TakeAdayNationalDayGiftsController").setUp();
               getDefinitionByName("com.robot.app2.control.DoubleFestivalController").setup();
               if(!getDefinitionByName("com.robot.app2.control.SeerReturn201805Controller").IsReturn)
               {
                  NewIconMovieController.getinstance().showGuideMovie(3);
               }
            }
         };
         var showPanelOncePerDay:Function = function(param1:Object):void
         {
            var _loc5_:* = undefined;
            var _loc2_:SharedObject = _loc2_ = SOManager.getUserSO(SOManager.ACTIVITY);
            var _loc3_:String = String(param1.panel);
            if(param1.hasOwnProperty("weekOnce") && param1.weekOnce == true)
            {
               _loc3_ += "_" + SystemTimerManager.getDateString(ClientConfig.versonTimeDate);
            }
            else if(param1.dayOnce == true)
            {
               _loc3_ += "_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate);
            }
            var _loc4_:Boolean = true;
            if(param1["checkFun"] != null)
            {
               _loc4_ = (_loc5_ = param1["checkFun"])();
            }
            if(_loc2_.data[_loc3_] == undefined && _loc4_)
            {
               if(param1.type == "task")
               {
                  ModuleManager.showModule(ClientConfig.getTaskModule(param1.panel));
               }
               else
               {
                  ModuleManager.showAppModule(param1.panel);
               }
               if(!param1.flushDefer)
               {
                  _loc2_.data[_loc3_] = true;
                  _loc2_.flush();
               }
            }
            else
            {
               checkQueue();
            }
         };
         showMainTask = function():void
         {
            TaskRoadOfDevildom.getInstance().checkMainTask();
            queue.shift();
            checkQueue();
         };
         var showVipTrialAndSendDiamond:Function = function():void
         {
            getDefinitionByName("com.robot.app2.control.VipTrialAndSendDiamondController").showLoginAd();
            queue.shift();
            checkQueue();
         };
         LevelManager.closeMouseEvent();
         sysdate = SystemTimerManager.sysBJDate;
         isreturn = Boolean(getDefinitionByName("com.robot.app2.control.SeerReturnNewController").IsReturn);
         queue = LoginPopUpXMLInfo.getPops(isreturn);
         queue = queue.concat([showMainTask]);
         if(needPop)
         {
            queue = [{
               "panel":"NewSeerOverPanel",
               "type":"app",
               "flushDefer":true,
               "dayOnce":false
            }].concat(queue);
         }
         if(is7k7k)
         {
            queue = queue.concat([{
               "panel":"Seer7k7kPlayerPanel",
               "type":"app",
               "flushDefer":true,
               "dayOnce":false
            }]);
         }
         if(checkPopupTime())
         {
            queue = [{
               "panel":"PopUp20230623Panel",
               "type":"app",
               "flushDefer":false,
               "dayOnce":true
            }].concat(queue);
         }
         if(SystemTimerManager.time >= SystemTimerManager.getTimeByDate(2023,11,24,0) && SystemTimerManager.time < SystemTimerManager.getTimeByDate(2023,12,7,0))
         {
            queue = [{
               "panel":"TaoLePanel20231124",
               "type":"app",
               "flushDefer":false,
               "dayOnce":true
            }].concat(queue);
         }
         if(popDiDuo && SystemTimerManager.time >= SystemTimerManager.getTimeByDate(2023,9,29,0) && SystemTimerManager.time < SystemTimerManager.getTimeByDate(2023,10,6,0))
         {
            queue = [{
               "panel":"DiDuoSingupMainPanel",
               "type":"app",
               "flushDefer":true,
               "dayOnce":false
            }].concat(queue);
         }
         ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,checkQueue);
         checkQueue();
         url = "";
         getDefinitionByName("com.robot.app2.control.OffLineExpPushController").setup();
      }
      
      private static function isNotYearVip() : Boolean
      {
         return !YearVip2016Controller.isYearVip;
      }
      
      private static function checkPopupTime() : Boolean
      {
         if(SystemTimerManager.time >= SystemTimerManager.getTimeByDate(2023,7,4,0) && SystemTimerManager.time < SystemTimerManager.getTimeByDate(2023,7,28,0))
         {
            return true;
         }
         return false;
      }
      
      private static function shopHalfYearVipPanel() : Boolean
      {
         return !MainManager.actorInfo.isVip;
      }
      
      private static function checkFridayNiuDan() : Boolean
      {
         var _loc1_:Date = new Date(SystemTimerManager.time * 1000);
         return _loc1_.day == 5;
      }
      
      private static function checkisIsShowH5Sign() : void
      {
         var startData:Date = SystemTimerManager.get0DateByStr("20221001");
         var nowTime:Number = Number(SystemTimerManager.time);
         var passTime:Number = (nowTime * 1000 - startData.time) * 0.001;
         var days:Number = Number(passTime / (24 * 60 * 60));
         if(days < 7 && days > 0)
         {
            KTool.getMultiValue([121111,201340],function(param1:Array):void
            {
               var _loc2_:* = param1[0] & 255;
               _loc2_ = _loc2_ <= 5 ? _loc2_ : 5;
               var _loc3_:int = int(param1[1]);
               if(_loc3_ == 0 && (param1[0] & 31744) == 0)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("NationalDay2022SignPanel"));
                  return;
               }
               var _loc4_:int = 1;
               while(_loc4_ <= _loc2_)
               {
                  if(BitUtils.getBit(param1[0],9 + _loc4_) == 0)
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("NationalDay2022SignPanel"));
                     break;
                  }
                  _loc4_++;
               }
            });
         }
      }
      
      private static function checkNewYearSignH5() : void
      {
         var days:Number = NaN;
         var startData:Date = SystemTimerManager.get0DateByStr("20231230");
         var nowTime:Number = Number(SystemTimerManager.time);
         var passTime:Number = (nowTime * 1000 - startData.time) * 0.001;
         days = Number(passTime / (24 * 60 * 60));
         if(days >= 0 && days < 3)
         {
            KTool.getMultiValue([121552,121553],function(param1:Array):void
            {
               var _loc2_:int = int(days) + 1;
               var _loc3_:int = int(param1[1]);
               var _loc4_:int;
               if((_loc4_ = int(KTool.getBit(_loc3_,1) + KTool.getBit(_loc3_,2) + KTool.getBit(_loc3_,3))) < _loc2_)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("NewYear2023SignInPanel"));
               }
            });
         }
      }
      
      private static function checkNianFeiYuReShow() : void
      {
         var _loc1_:Date = null;
         var _loc2_:int = 0;
         _loc1_ = SystemTimerManager.sysBJDate;
         _loc2_ = _loc1_.getDate() - 23;
         if(SystemTimerManager.time > SystemTimerManager.getTimeByDate(2022,12,23,0) && SystemTimerManager.time < SystemTimerManager.getTimeByDate(2022,12,30,0))
         {
            if(BitBuffSetClass.getState(24243 + _loc2_) == 0)
            {
               BitBuffSetClass.setState(24243 + _loc2_,1);
               ModuleManager.showModule(ClientConfig.getAppModule("AnnualFeePreviewFiveS1MainPanel"));
               return;
            }
         }
      }
      
      private static function checkisInTime() : Boolean
      {
         var _loc1_:Array = [new CronTimeVo("*","*","1-30","1","*","2024"),new CronTimeVo("*","*","1-22","2","*","2024")];
         var _loc2_:ActivityControl = new ActivityControl(_loc1_);
         return _loc2_.isInActivityTime;
      }
      
      private static function checkFirstVipToShowPanel() : void
      {
         var cls:Object = null;
         cls = getDefinitionByName("com.robot.app2.control.VipController201408");
         cls.checkFirstVip(function():void
         {
            if(cls.isFirstVip == 1)
            {
               ModuleManager.showAppModule("FirstVIPPanel");
            }
         });
      }
      
      private static function checkIsFirstLoginThisWeek() : Boolean
      {
         var _loc1_:String = null;
         var _loc2_:SharedObject = null;
         var _loc3_:* = null;
         if(MainManager.actorInfo.vip == 0)
         {
            _loc1_ = "check_is_first_login_this_week";
            _loc2_ = SOManager.getUserSO(_loc1_);
            _loc3_ = ClientConfig.newsVersion + "";
            if(_loc2_.data[_loc3_] == undefined)
            {
               _loc2_.data[_loc3_] = true;
               _loc2_.flush();
               return true;
            }
            return false;
         }
         return false;
      }
   }
}
