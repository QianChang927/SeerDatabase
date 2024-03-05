package com.robot.app2.mapProcess.control
{
   import com.robot.app.automaticFight.AutomaticFightManager;
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.Timer;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class LevelingFieldController
   {
      
      private static var _taskMc:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      protected static var _eventListenerManager:EventListenerManager;
      
      private static var trainMode:int = 0;
      
      private static var boss:Array = [108,523,991,1104,524,992,1009,1005,1006,1105,1134,1725];
      
      private static var ogres:Array = [];
      
      private static var msg:Array = ["VIP用户可以自动挂机哦！经验值上限是普通用户的两倍哦！","点击屏幕左下角的难度按钮可以更换难度哦！难度不同得到的经验也不同哦！"];
      
      private static var timer:Timer;
      
      private static var isFirstMaxExp:Boolean = true;
      
      private static var exp:int = 0;
      
      private static var isFirstFightShilaimu:int = 1;
      
      private static var coinCount:int = 0;
      
      private static var isFighting:int = 0;
      
      private static var fightBoss:int = 0;
      
      private static var isFirstEnter:Boolean = true;
       
      
      public function LevelingFieldController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         StatManager.sendStat2014("经验场+学习力场","进入经验场",StatManager.RUN_ACT);
         _eventListenerManager = new EventListenerManager();
         timer = new Timer(80);
         ToolBarController.panel.visible = false;
         getData();
         addEvent();
         MovieClip(_map.btnLevel["mcNotice"]).gotoAndStop(1);
         var _loc2_:TextField = _map.btnLevel["mcNotice"]["txtMsg"];
         _loc2_.text = msg.shift();
         msg.push(_loc2_.text);
         var _loc3_:Sprite = _map.btnLevel["mcNotice"]["mcMask"];
         _loc2_.mask = _loc3_;
         timer.start();
         _map.btnLevel["mcDialog"].visible = false;
         MovieClip(_map.btnLevel["mcMode_0"]).gotoAndStop(1);
         MovieClip(_map.btnLevel["mcMode_1"]).gotoAndStop(1);
         MovieClip(_map.btnLevel["mcMode_2"]).gotoAndStop(1);
         MovieClip(_map.btnLevel["mcClock"]).visible = false;
         SimpleButton(_map.btnLevel["btnCancelFight"]).visible = false;
         if(BitBuffSetClass.getState(22481))
         {
            MovieClip(_map.btnLevel["mcVipExp"]).gotoAndStop(2);
         }
         else
         {
            MovieClip(_map.btnLevel["mcVipExp"]).gotoAndStop(1);
            if(isFirstEnter)
            {
               Alarm2.show("在经验场中小赛尔们可以通过打野怪快速升级哦！");
               isFirstEnter = false;
            }
         }
      }
      
      private static function getData() : void
      {
         initModeState();
         KTool.getMultiValue([13110,13111],function(param1:Array):void
         {
            trainMode = param1[0];
            setTimeout(addBoss,2000);
            MovieClip(_map.btnLevel["mcMode_" + trainMode]).gotoAndStop(2);
            MovieClip(_map.btnLevel["mcMode_" + trainMode]).buttonMode = false;
            exp = param1[1];
            var _loc2_:int = 100 * param1[1] / maxExp;
            _loc2_ = _loc2_ > 100 ? 100 : _loc2_;
            KTool.showScore(_map.btnLevel["mcPercent"],_loc2_,0,true);
            if(_loc2_ < 10)
            {
               _map.btnLevel["mcPercent"].x = 3.35;
               MovieClip(_map.btnLevel["mcPercent"]["num_1"]).visible = false;
               MovieClip(_map.btnLevel["mcPercent"]["num_2"]).visible = false;
            }
            else if(_loc2_ < 100)
            {
               _map.btnLevel["mcPercent"].x = 18.35;
               _map.btnLevel["mcPercent"]["num_1"].visible = true;
               MovieClip(_map.btnLevel["mcPercent"]["num_2"]).visible = false;
            }
            else
            {
               _map.btnLevel["mcPercent"].x = 33.35;
               MovieClip(_map.btnLevel["mcPercent"]["num_1"]).visible = true;
               MovieClip(_map.btnLevel["mcPercent"]["num_2"]).visible = true;
            }
            MovieClip(_map.btnLevel["mcExp"]["mcBar"]).gotoAndStop(_loc2_ + 1);
            ToolTipManager.add(_map.btnLevel["mcExp"],"您当前获得的经验值为" + param1[1] + "，您的经验值上限为" + maxExp);
            if(param1[1] >= maxExp)
            {
               if(isFirstMaxExp)
               {
                  isFirstMaxExp = false;
                  _map.btnLevel["mcDialog"]["txtMsg"].text = "亲爱的小赛尔，你今天再经验场里获得的经验已经达到上限了哦！请明天再来!";
                  _map.btnLevel["mcDialog"].visible = true;
               }
            }
         });
      }
      
      private static function initModeState() : void
      {
         MovieClip(_map.btnLevel["mcMode_0"]).gotoAndStop(1);
         MovieClip(_map.btnLevel["mcMode_1"]).gotoAndStop(1);
         MovieClip(_map.btnLevel["mcMode_2"]).gotoAndStop(1);
         MovieClip(_map.btnLevel["mcMode_0"]).buttonMode = true;
         MovieClip(_map.btnLevel["mcMode_1"]).buttonMode = true;
         MovieClip(_map.btnLevel["mcMode_2"]).buttonMode = true;
      }
      
      private static function get maxExp() : int
      {
         var _loc1_:int = 200000;
         if(MainManager.actorInfo.isVip)
         {
            _loc1_ = 400000;
         }
         return _loc1_;
      }
      
      private static function addEvent() : void
      {
         _eventListenerManager.addEventListener(_map.btnLevel["btnExit"],MouseEvent.CLICK,onClickExit);
         _eventListenerManager.addEventListener(_map.btnLevel["mcArrow"],MouseEvent.CLICK,onClickNotice);
         _eventListenerManager.addEventListener(_map.btnLevel["btnBag"],MouseEvent.CLICK,onClickBag);
         _eventListenerManager.addEventListener(_map.btnLevel["mcVipExp"],MouseEvent.CLICK,onClickVipExp);
         _eventListenerManager.addEventListener(_map.btnLevel["btnCancelFight"],MouseEvent.CLICK,onCancelVipExp);
         _eventListenerManager.addEventListener(_map.conLevel["btnShop"],MouseEvent.CLICK,onClickShop);
         _eventListenerManager.addEventListener(timer,TimerEvent.TIMER,updateNotice);
         _eventListenerManager.addEventListener(_map.btnLevel["mcDialog"]["btnExit"],MouseEvent.CLICK,onClickDialogExit);
         _eventListenerManager.addEventListener(_map.btnLevel["mcDialog"]["btnClose"],MouseEvent.CLICK,onClickCloseDialog);
         _eventListenerManager.addEventListener(_map.btnLevel["mcMode_0"],MouseEvent.CLICK,onClickChangeMode);
         _eventListenerManager.addEventListener(_map.btnLevel["mcMode_1"],MouseEvent.CLICK,onClickChangeMode);
         _eventListenerManager.addEventListener(_map.btnLevel["mcMode_2"],MouseEvent.CLICK,onClickChangeMode);
      }
      
      private static function setAllEnable(param1:Boolean) : void
      {
         SimpleButton(_map.btnLevel["btnExit"]).mouseEnabled = param1;
         SimpleButton(_map.btnLevel["btnBag"]).mouseEnabled = param1;
         SimpleButton(_map.conLevel["btnShop"]).mouseEnabled = param1;
         SimpleButton(_map.btnLevel["mcMode_0"]).mouseEnabled = param1;
         SimpleButton(_map.btnLevel["mcMode_1"]).mouseEnabled = param1;
         SimpleButton(_map.btnLevel["mcMode_2"]).mouseEnabled = param1;
      }
      
      private static function onClickChangeMode(param1:MouseEvent) : void
      {
         var index:int = 0;
         var names:Array = null;
         var e:MouseEvent = param1;
         index = int(String(e.currentTarget.name).split("_")[1]);
         if(trainMode != index)
         {
            names = ["简单","普通","困难"];
            Alert.show("" + names[index] + "难度下出现的精灵需要" + (20 + index * 20) + "级的精灵才能打得过哦，是否要继续切换难度？",function():void
            {
               SocketConnection.sendWithCallback(45084,function(param1:SocketEvent):void
               {
                  getData();
               },1,index);
            });
         }
      }
      
      private static function onClickCloseDialog(param1:MouseEvent) : void
      {
         _map.btnLevel["mcDialog"].visible = false;
      }
      
      private static function onClickDialogExit(param1:MouseEvent) : void
      {
         _map.btnLevel["mcDialog"].visible = false;
         openBigMap();
      }
      
      private static function updateNotice(param1:TimerEvent) : void
      {
         var _loc3_:Sprite = null;
         var _loc2_:TextField = _map.btnLevel["mcNotice"]["txtMsg"];
         _loc2_.x -= 2;
         if(_loc2_.x < -_loc2_.width - 20)
         {
            _loc3_ = _map.btnLevel["mcNotice"]["mcMask"];
            _loc2_.x = _loc3_.width;
            _loc2_.text = msg.shift();
            msg.push(_loc2_.text);
         }
      }
      
      private static function onClickShop(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LevelingFiledShopPanel"),"....");
      }
      
      private static function onClickExit(param1:MouseEvent) : void
      {
         if(BitBuffSetClass.getState(22481))
         {
            Alarm.show("请先取消挂机，再离开这里！");
            return;
         }
         if(exp < maxExp)
         {
            _map.btnLevel["mcDialog"]["txtMsg"].text = "亲爱的小赛尔，你今天还有" + (maxExp - exp) + "点经验值没有拿到哦！确定要离开吗？";
            _map.btnLevel["mcDialog"].visible = true;
         }
         else
         {
            openBigMap();
         }
      }
      
      private static function openBigMap() : void
      {
         ModuleManager.showModule(ClientConfig.getMapModule("WorldMapPanel"),"正在加载世界地图....");
      }
      
      private static function onClickNotice(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(_loc2_.currentFrame == 1)
         {
            _loc2_.gotoAndStop(2);
            _map.btnLevel["mcNotice"].visible = false;
            timer.stop();
         }
         else
         {
            _loc2_.gotoAndStop(1);
            _map.btnLevel["mcNotice"].visible = true;
            timer.start();
         }
      }
      
      private static function onClickBag(param1:MouseEvent) : void
      {
         if(BitBuffSetClass.getState(22481))
         {
            Alarm.show("请先取消挂机，再打开背包！");
            return;
         }
         PetBagControllerNew.showByBuffer();
      }
      
      private static function onCancelVipExp(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MovieClip(_map.btnLevel["mcClock"]).visible = false;
         SimpleButton(_map.btnLevel["btnCancelFight"]).visible = false;
         BitBuffSetClass.setState(22481,0,function():void
         {
            MovieClip(_map.btnLevel["mcVipExp"]).gotoAndStop(1);
            Alarm2.show("你成功取消了自动对战！");
         });
      }
      
      private static function onClickVipExp(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(MainManager.actorInfo.isVip)
         {
            if(!BitBuffSetClass.getState(22481))
            {
               Alert.show("接下来会进入自动对战哦，要确保首发精灵打得过当前难度的野怪，要关闭自动对战的话，只要再次点击自动对战按钮就行了，是否要进入自动挂机？",function():void
               {
                  BitBuffSetClass.setState(22481,1,function():void
                  {
                     MovieClip(_map.btnLevel["mcVipExp"]).gotoAndStop(2);
                     checkAutoFight();
                  });
               });
            }
            else
            {
               BitBuffSetClass.setState(22481,0,function():void
               {
                  Alarm2.show("你成功取消了自动对战！");
               });
               MovieClip(_map.btnLevel["mcVipExp"]).gotoAndStop(1);
               MovieClip(_map.btnLevel["mcClock"]).visible = false;
               SimpleButton(_map.btnLevel["btnCancelFight"]).visible = false;
            }
         }
         else
         {
            Alert.show("双倍经验自动挑战是VIP专属特权,你目前还不是VIP,是否现在就成为VIP?",function():void
            {
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4,"2",function():void
               {
                  if(MainManager.actorInfo.isVip)
                  {
                     StatManager.sendStat2014("练级场","点击成为VIP按钮且付费成功的用户",StatManager.RUN_ACT);
                  }
               });
            });
         }
      }
      
      private static function addBoss() : void
      {
         var _loc3_:OgreModel = null;
         removeBoss();
         ogres = [];
         var _loc1_:Array = [new Point(100,380),new Point(350,430),new Point(360,360),new Point(577,295)];
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            _loc3_ = new OgreModel(_loc2_);
            ogres.push(_loc3_);
            _loc3_.addEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
            _loc3_.show(boss[trainMode * 4 + _loc2_],_loc1_[_loc2_]);
            _loc2_++;
         }
         checkAutoFight();
      }
      
      private static function checkAutoFight() : void
      {
         var onFrameHandler:Function;
         var index:int = 0;
         var mcMovie:MovieClip = null;
         if(BitBuffSetClass.getState(22481))
         {
            if(MapManager.currentMap.id == 90)
            {
               if(isFighting == 0)
               {
                  onFrameHandler = function():void
                  {
                     mcMovie.stop();
                     mcMovie.addFrameScript(mcMovie.totalFrames - 1,null);
                     if(BitBuffSetClass.getState(22481))
                     {
                        if(MapManager.currentMap.id == 90)
                        {
                           startFight(fightBoss);
                        }
                     }
                  };
                  PetManager.cureAll(false,false);
                  MovieClip(_map.btnLevel["mcClock"]).visible = true;
                  SimpleButton(_map.btnLevel["btnCancelFight"]).visible = true;
                  index = getRand();
                  fightBoss = trainMode * 4 + index + 2;
                  mcMovie = _map.btnLevel["mcClock"]["mcNum"];
                  mcMovie.gotoAndPlay(1);
                  mcMovie.addFrameScript(mcMovie.totalFrames - 1,onFrameHandler);
               }
            }
         }
      }
      
      private static function startFight(param1:int) : void
      {
         isFighting = 1;
         LevelManager.fightLevel.mouseEnabled = false;
         LevelManager.fightLevel.mouseChildren = false;
         AutomaticFightManager.autoBossFight = 1;
         EventManager.addEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onFightEnd);
         FightManager.fightWithBoss("",param1,true);
         StatManager.sendStat2014("经验场+学习力场","在经验场打怪的数量",StatManager.RUN_ACT);
      }
      
      private static function onFightEnd(param1:*) : void
      {
         isFighting = 0;
         LevelManager.fightLevel.mouseEnabled = true;
         LevelManager.fightLevel.mouseChildren = true;
         AutomaticFightManager.autoBossFight = 0;
         EventManager.removeEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onFightEnd);
         checkAutoFight();
      }
      
      private static function getRand() : int
      {
         return int(Math.random() * 4);
      }
      
      private static function removeBoss() : void
      {
         var _loc1_:int = 0;
         var _loc2_:OgreModel = null;
         if(ogres)
         {
            _loc1_ = 0;
            while(_loc1_ < ogres.length)
            {
               _loc2_ = ogres[_loc1_];
               _loc2_.removeEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
               _loc2_.destroy();
               _loc1_++;
            }
            ogres.splice(0);
         }
      }
      
      protected static function onClickBossHandler(param1:RobotEvent) : void
      {
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         var _loc3_:int = boss.indexOf(_loc2_.id);
         if(_loc3_ >= 0)
         {
            FightManager.fightWithBoss("",_loc3_ + 2);
         }
      }
      
      public static function destroy() : void
      {
         _taskMc = null;
         _map = null;
         ToolBarController.panel.showMiddle();
         _eventListenerManager.clear();
         _eventListenerManager = null;
         ToolBarController.panel.visible = true;
      }
   }
}
