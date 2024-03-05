package com.robot.app.mapProcess.control
{
   import com.robot.app.panel.RewardPanel;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.roomFight.SignUpManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.TimerEvent;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import gs.easing.Elastic;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.Utils;
   
   public class ElementFightController
   {
      
      private static const FIGHT_TYPE_NAME_ARR:Array = ["草","水","火","飞行","电","机械","地面","普通","冰","超能","战斗","光","暗影","神秘","龙","圣灵"];
      
      private static const FIGHT_LEVEL_NAME_ARR:Array = ["30~59","60~79","80~99","100!!!"];
      
      private static const MAX_COUNT:uint = 2;
      
      private static const URL:String = ClientConfig.getResPath("forApp/elementFight.swf");
      
      private static var _map:BaseMapProcess;
      
      private static var _fightLevel:int;
      
      private static var _waitResource:Boolean;
      
      private static var _loadResourceComplete:Boolean;
      
      private static var _resourceLoader:MCLoader;
      
      private static var _challegeBoss:Boolean;
      
      private static var _elementFightOver:Boolean;
      
      private static var _fightType:uint;
      
      private static var _championID:uint;
      
      private static var _fightInfo:HashMap;
      
      private static var _elementFightReadyReceived:Boolean;
      
      private static var _fightCount:uint;
      
      private static var _enemyName:String;
      
      private static var _enemyID:uint;
      
      private static var _timer:Timer;
      
      private static var _count:int;
      
      private static var _isUISafe:Boolean;
      
      private static const MAX_MC_COUNT:uint = 7;
      
      private static var _playerMCArr:Array;
      
      private static var _fightRuleMC:MovieClip;
      
      private static var _fightTypeMC:MovieClip;
      
      private static var _winLineClass:Class;
      
      private static var _lowerMCClass:Class;
      
      private static var _highMCClass:Class;
      
      private static var _loseRewardPanel:RewardPanel;
      
      private static var _winRewardPanel:RewardPanel;
      
      private static var _bossInMC:MovieClip;
      
      private static var _status:uint;
      
      private static var _waitType:int;
       
      
      public function ElementFightController()
      {
         super();
      }
      
      public static function get fightLevel() : int
      {
         return _fightLevel;
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         _elementFightReadyReceived = false;
         if(!_fightInfo)
         {
            _fightType = uint.MAX_VALUE;
            _challegeBoss = false;
            _elementFightOver = false;
            _championID = 0;
            _fightInfo = new HashMap();
            initFightLevel();
            initLoader();
            initCommandListener();
         }
         initResource();
         initModel();
      }
      
      private static function initResource() : void
      {
         _timer = new Timer(1000);
         _timer.addEventListener(TimerEvent.TIMER,onTimer);
         _fightRuleMC = _map.conLevel["fightRuleMC"];
         _fightTypeMC = _map.conLevel["fightTypeMC"];
         _fightTypeMC.visible = false;
         _lowerMCClass = MapManager.currentMap.libManager.getClass("lowerMC");
         _highMCClass = MapManager.currentMap.libManager.getClass("highMC");
         _winLineClass = MapManager.currentMap.libManager.getClass("WinLine");
         _playerMCArr = new Array();
         var _loc1_:int = 1;
         while(_loc1_ <= MAX_MC_COUNT)
         {
            _playerMCArr.push(_fightRuleMC["player_" + _loc1_]);
            _loc1_++;
         }
         updateMapUI();
      }
      
      private static function updateMapUI() : void
      {
         if(_fightType < uint.MAX_VALUE)
         {
            _fightTypeMC.visible = true;
            _fightTypeMC.gotoAndStop(_fightType);
            switch(_fightCount)
            {
               case 1:
                  updateMapUIHelper1();
                  break;
               case 2:
                  updateMapUIHelper2();
            }
         }
      }
      
      private static function updateMapUIHelper1() : void
      {
         var _loc1_:Array = _fightInfo.getValue(1);
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_.length)
         {
            if(_loc1_[_loc2_]["id"] == MainManager.actorID)
            {
               _playerMCArr[_loc2_].gotoAndStop(3);
            }
            else if(_loc1_[_loc2_]["status"] == 0)
            {
               _playerMCArr[_loc2_].gotoAndStop(2);
            }
            _loc2_++;
         }
      }
      
      private static function updateMapUIHelper2() : void
      {
         var _loc4_:int = 0;
         var _loc5_:MovieClip = null;
         var _loc1_:Array = _fightInfo.getValue(1);
         var _loc2_:Array = _fightInfo.getValue(2);
         var _loc3_:int = 0;
         while(_loc3_ < 4)
         {
            _playerMCArr[_loc3_].gotoAndStop(1);
            _loc3_++;
         }
         _loc3_ = 0;
         while(_loc3_ < _loc2_.length)
         {
            if(_loc2_[_loc3_]["id"] != 0)
            {
               _loc4_ = 0;
               while(_loc4_ < _loc1_.length)
               {
                  if(_loc1_[_loc4_]["id"] == _loc2_[_loc3_]["id"])
                  {
                     (_loc5_ = MovieClip(new _winLineClass())).gotoAndStop(_loc4_ + 1);
                     _fightRuleMC["line"].addChild(_loc5_);
                     if(_loc1_[_loc4_]["id"] == MainManager.actorID)
                     {
                        _playerMCArr[_loc4_].gotoAndStop(3);
                     }
                     else
                     {
                        _playerMCArr[_loc4_].gotoAndStop(2);
                     }
                  }
                  _loc4_++;
               }
            }
            _loc3_++;
         }
         _loc3_ = 0;
         while(_loc3_ < _loc2_.length)
         {
            if(_loc2_[_loc3_]["id"] == MainManager.actorID)
            {
               _playerMCArr[4 + _loc3_].gotoAndStop(3);
            }
            else if(_loc2_[_loc3_]["status"] == 0)
            {
               _playerMCArr[4 + _loc3_].gotoAndStop(2);
            }
            _loc3_++;
         }
      }
      
      private static function destroyResource() : void
      {
         if(_timer)
         {
            _timer.stop();
            _timer.removeEventListener(TimerEvent.TIMER,onTimer);
            _timer = null;
         }
         _fightRuleMC = null;
      }
      
      private static function initModel() : void
      {
         onCreatedMapUser(null);
         EventManager.addEventListener(RobotEvent.CREATED_MAP_USER,onCreatedMapUser);
      }
      
      private static function onCreatedMapUser(param1:RobotEvent) : void
      {
         var _loc2_:BasePeoleModel = null;
         for each(_loc2_ in UserManager.getUserModelList())
         {
            if(_elementFightReadyReceived)
            {
               _loc2_.visible = true;
            }
            else
            {
               _loc2_.visible = false;
            }
         }
      }
      
      private static function initFightLevel() : void
      {
         var _loc2_:int = 0;
         var _loc1_:PetInfo = PetManager.getPetInfo(PetManager.defaultTime);
         if(_loc1_)
         {
            _loc2_ = int(_loc1_.level);
            if(_loc2_ >= 30 && _loc2_ < 60)
            {
               _fightLevel = 0;
            }
            else if(_loc2_ >= 60 && _loc2_ < 80)
            {
               _fightLevel = 1;
            }
            else if(_loc2_ >= 80 && _loc2_ < 100)
            {
               _fightLevel = 2;
            }
            else if(_loc2_ == 100)
            {
               _fightLevel = 3;
            }
         }
      }
      
      private static function initLoader() : void
      {
         _waitResource = false;
         _loadResourceComplete = false;
         _resourceLoader = new MCLoader(URL);
         _resourceLoader.addEventListener(MCLoadEvent.SUCCESS,onLoadSuccess);
         _resourceLoader.doLoad();
      }
      
      private static function onLoadSuccess(param1:MCLoadEvent) : void
      {
         var mc:MovieClip = null;
         var e:MCLoadEvent = param1;
         _resourceLoader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSuccess);
         mc = Utils.getMovieClipFromLoader("loseReceivePanel",_resourceLoader.loader);
         _loseRewardPanel = new RewardPanel(mc,0,5,function():void
         {
            SignUpManager.stutas = SignUpManager.ROOM_TO_ONLINE;
            MapManager.changeMap(SignUpManager.oldMapID);
         });
         mc = Utils.getMovieClipFromLoader("winReceivePanel",_resourceLoader.loader);
         _winRewardPanel = new RewardPanel(mc,1,10,function():void
         {
            _challegeBoss = true;
            _bossInMC.x = 380;
            _bossInMC.y = 110;
            LevelManager.closeMouseEvent();
            LevelManager.appLevel.addChild(_bossInMC);
            _bossInMC.addEventListener(Event.ENTER_FRAME,function():void
            {
               if(_bossInMC.currentFrame == _bossInMC.totalFrames)
               {
                  _bossInMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  LevelManager.openMouseEvent();
                  _bossInMC.stop();
                  _fightTypeMC.gotoAndStop(17);
                  SocketConnection.send(CommandID.ELEMNET_FIGHT_BOSS);
               }
            });
            _bossInMC.gotoAndPlay(1);
         });
         _bossInMC = Utils.getMovieClipFromLoader("bossInMC",_resourceLoader.loader);
         _loadResourceComplete = true;
         if(_waitResource)
         {
            showReceivePanel(_waitType);
            _waitResource = false;
         }
      }
      
      private static function initCommandListener() : void
      {
         SocketConnection.addCmdListener(CommandID.ELEMNET_FIGHT_SERVER_READY,onServerReady);
         SocketConnection.addCmdListener(CommandID.ELEMNET_FIGHT_WIN_NOTICE,onWinNotice);
         SocketConnection.send(CommandID.ELEMNET_FIGHT_CLIENT_READY,SignUpManager.struct);
      }
      
      private static function destroyCommandListener() : void
      {
         SocketConnection.removeCmdListener(CommandID.ELEMNET_FIGHT_SERVER_READY,onServerReady);
         SocketConnection.removeCmdListener(CommandID.ELEMNET_FIGHT_WIN_NOTICE,onWinNotice);
         EventManager.removeEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onFightOverUI);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,onFightClose);
      }
      
      private static function onServerReady(param1:SocketEvent) : void
      {
         var id:uint = 0;
         var name:String = null;
         var status:uint = 0;
         var mc:MovieClip = null;
         var e:SocketEvent = param1;
         _elementFightReadyReceived = true;
         var data:ByteArray = e.data as ByteArray;
         _fightCount = data.readUnsignedInt();
         _fightType = data.readUnsignedInt();
         _enemyID = data.readUnsignedInt();
         var count:uint = data.readUnsignedInt();
         var arr:Array = new Array();
         var i:int = 0;
         while(i < count)
         {
            id = data.readUnsignedInt();
            name = data.readUTFBytes(16);
            status = data.readUnsignedInt();
            arr.push({
               "id":id,
               "name":name,
               "status":status
            });
            if(id == _enemyID)
            {
               _enemyName = name;
            }
            i++;
         }
         _fightInfo.add(_fightCount,arr);
         if(_enemyID > 0)
         {
            if(_fightLevel == 3)
            {
               mc = MovieClip(new _highMCClass());
            }
            else
            {
               mc = MovieClip(new _lowerMCClass());
            }
            mc["txt1"].text = FIGHT_LEVEL_NAME_ARR[_fightLevel];
            mc["txt2"].text = FIGHT_TYPE_NAME_ARR[_fightType - 1] + "系主场";
            mc["txt3"].text = _enemyName;
            mc.x = 480;
            mc.y = 315;
            mc.scaleX = mc.scaleY = 0;
            LevelManager.appLevel.addChild(mc);
            TweenLite.to(mc,0.8,{
               "scaleX":1,
               "scaleY":1,
               "onComplete":function():void
               {
                  TweenLite.to(mc,0.8,{
                     "scaleX":0,
                     "scaleY":0,
                     "delay":3,
                     "onComplete":function():void
                     {
                        DisplayUtil.removeForParent(mc);
                     }
                  });
               }
            });
            _count = 5;
            DebugTrace.show("对战倒计时~~~~" + _count);
            _timer.start();
         }
         updateMapUI();
         onCreatedMapUser(null);
      }
      
      private static function onTweenComplete1(param1:MovieClip) : void
      {
         TweenLite.to(param1,0.8,{
            "scaleX":0,
            "scaleY":0,
            "delay":3,
            "ease":Elastic.easeOut,
            "onComplete":onTweenComplete2,
            "onCompleteParams":[param1]
         });
      }
      
      private static function onTweenComplete2(param1:MovieClip) : void
      {
         DisplayUtil.removeForParent(param1);
      }
      
      private static function onWinNotice(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == MainManager.actorID)
         {
            switch(_loc6_)
            {
               case 0:
                  if(_loc5_ == 1)
                  {
                     _status = 1;
                  }
                  else if(_loc5_ == 2)
                  {
                     _status = 4;
                  }
                  break;
               case 1:
                  if(_loc5_ == 1)
                  {
                     _status = 2;
                  }
                  else if(_loc5_ == 2)
                  {
                     if(_status == 2)
                     {
                        _status = 5;
                     }
                     else
                     {
                        _status = 6;
                     }
                  }
                  break;
               case 2:
                  if(_loc5_ == 1)
                  {
                     _status = 3;
                  }
                  else if(_loc5_ == 2)
                  {
                     _status = 7;
                  }
            }
         }
         else if(_loc4_ == MainManager.actorID)
         {
            if(_loc6_ == 2)
            {
               _status = 3;
            }
            else if(_loc5_ == 1)
            {
               _status = 8;
            }
            else if(_loc5_ == 2)
            {
               _status = 9;
            }
         }
         if(_loc6_ != 2 && _loc5_ == 2)
         {
            _championID = _loc3_;
         }
         handleStatus();
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         --_count;
         DebugTrace.show("对战倒计时~~~~" + _count);
         if(_count == 0)
         {
            _timer.stop();
            _isUISafe = false;
            EventManager.addEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onFightOverUI);
            FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,onFightClose);
            PetFightModel.enemyName = _enemyName;
            SocketConnection.send(CommandID.ELEMNET_FIGHT_START);
         }
      }
      
      private static function onFightOverUI(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onFightOverUI);
         DisplayUtil.removeForParent(LevelManager.iconLevel,false);
         DisplayUtil.removeForParent(LevelManager.toolsLevel,false);
         _isUISafe = true;
         handleStatus();
      }
      
      private static function handleStatus() : void
      {
         if(!_isUISafe)
         {
            return;
         }
         switch(_status)
         {
            case 1:
               showWinFirst(true);
               break;
            case 2:
               showWinFirst(false);
               break;
            case 3:
               showLoseFirst(true);
               break;
            case 4:
               showWinSecond();
               break;
            case 5:
               showDirectOver();
               break;
            case 6:
               showWinSecond();
               break;
            case 7:
               break;
            case 8:
               showLoseFirst(false);
               break;
            case 9:
               showLoseSecond();
               break;
            case 10:
               showWinBoss();
               break;
            case 11:
               showLoseBoss();
         }
         _status = 0;
         if(_championID != 0)
         {
            handleChampion(_championID);
         }
      }
      
      private static function showDirectOver() : void
      {
         _elementFightOver = true;
         Alarm.show("那群人都跑光了，你也跑了吧",function():void
         {
            SignUpManager.stutas = SignUpManager.ROOM_TO_ONLINE;
            MapManager.changeMap(SignUpManager.oldMapID);
         });
      }
      
      private static function showLoseFirst(param1:Boolean) : void
      {
         var str:String = null;
         var b:Boolean = param1;
         _elementFightOver = true;
         if(b)
         {
            str = "你第一轮打成平手，不过很遗憾，按照规则，你还是失败了";
         }
         else
         {
            str = "你第一轮就被打败啦";
         }
         Alarm.show(str,function():void
         {
            SignUpManager.stutas = SignUpManager.ROOM_TO_ONLINE;
            MapManager.changeMap(SignUpManager.oldMapID);
         });
      }
      
      private static function showLoseSecond() : void
      {
         Alarm.show("真可惜，第二轮被打败啦",function():void
         {
            showReceivePanel(0);
         });
      }
      
      private static function showWinFirst(param1:Boolean) : void
      {
         var str:String = null;
         var sprite:Sprite = null;
         var delay:uint = 0;
         var b:Boolean = param1;
         if(b)
         {
            str = "你打赢第一轮";
         }
         else
         {
            str = "你的对手跑路了，你直接进入第二关";
         }
         sprite = Alarm.show(str,function():void
         {
            clearTimeout(delay);
            SocketConnection.send(CommandID.ELEMNET_FIGHT_CLIENT_READY,SignUpManager.struct);
         });
         delay = setTimeout(function():void
         {
            clearTimeout(delay);
            DisplayUtil.removeForParent(sprite);
            SocketConnection.send(CommandID.ELEMNET_FIGHT_CLIENT_READY,SignUpManager.struct);
         },5000);
      }
      
      private static function showWinSecond() : void
      {
         Alarm.show("喔靠，你可以打boss啦，不过领奖先",function():void
         {
            showReceivePanel(1);
         });
      }
      
      private static function showWinBoss() : void
      {
         var t:uint = 0;
         Alarm.show("打赢boss");
         t = setTimeout(function():void
         {
            clearTimeout(t);
            SignUpManager.stutas = SignUpManager.ROOM_TO_ONLINE;
            MapManager.changeMap(SignUpManager.oldMapID);
         },5000);
      }
      
      private static function showLoseBoss() : void
      {
         Alarm.show("滚到吧，小P孩，被boss菜掉啦 :)",function():void
         {
            SignUpManager.stutas = SignUpManager.ROOM_TO_ONLINE;
            MapManager.changeMap(SignUpManager.oldMapID);
         });
      }
      
      private static function handleChampion(param1:uint) : void
      {
         var championName:String = null;
         var targetFrame:int = 0;
         var txt:TextField = null;
         var mc:MovieClip = null;
         var i:int = 0;
         var championID:uint = param1;
         var array:Array = _fightInfo.getValue(2);
         if(array)
         {
            mc = MovieClip(new _winLineClass());
            if(_championID == MainManager.actorID)
            {
               targetFrame = 3;
               championName = String(MainManager.actorInfo.nick);
            }
            else
            {
               targetFrame = 2;
               i = 0;
               while(i < array.length)
               {
                  if(array[i]["id"] == championID)
                  {
                     championName = String(array[i]["name"]);
                     break;
                  }
                  i++;
               }
            }
            _playerMCArr[6].addEventListener(Event.ENTER_FRAME,function():void
            {
               txt = _playerMCArr[6]["txt"];
               if(txt)
               {
                  _playerMCArr[6].removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  txt.text = championName;
               }
            });
            _playerMCArr[6].gotoAndStop(targetFrame);
            if(array[0]["id"] == championID)
            {
               mc.gotoAndStop(5);
            }
            else
            {
               mc.gotoAndStop(6);
            }
            _fightRuleMC["line"].addChild(mc);
         }
      }
      
      private static function showReceivePanel(param1:int) : void
      {
         if(!_loadResourceComplete)
         {
            Alarm.show("正在加载资源，请等候");
            _waitType = param1;
            _waitResource = true;
            return;
         }
         if(param1 == 0)
         {
            _loseRewardPanel.show();
         }
         else
         {
            _winRewardPanel.show();
         }
      }
      
      private static function onFightClose(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,onFightClose);
         var _loc2_:FightOverInfo = param1.dataObj.data as FightOverInfo;
         if(_challegeBoss)
         {
            if(_loc2_.winnerID == MainManager.actorID)
            {
               _status = 10;
            }
            else
            {
               _status = 11;
            }
         }
      }
      
      public static function destroy() : void
      {
         destroyResource();
         if(_elementFightOver)
         {
            destroyCommandListener();
            if(_resourceLoader)
            {
               _resourceLoader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSuccess);
               _resourceLoader.clear();
               _resourceLoader = null;
               if(_winRewardPanel)
               {
                  _loseRewardPanel.destroy();
                  _winRewardPanel.destroy();
               }
            }
            _fightInfo = null;
         }
      }
   }
}
