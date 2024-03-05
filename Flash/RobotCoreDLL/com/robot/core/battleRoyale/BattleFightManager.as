package com.robot.core.battleRoyale
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.ActionSpriteModel;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.spriteModelAdditive.PeopleBloodBar;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BattleFightManager
   {
      
      public static var URL:String = ClientConfig.getResPath("eff/battleRoyaleResource.swf");
      
      private static var _map:BaseMapProcess;
      
      private static var _maxDistance:uint;
      
      private static var _maxHp:uint;
      
      private static var _currentItemID:int;
      
      private static var _userMap:HashMap;
      
      private static var _modeMap:HashMap;
      
      private static var _scoreMap:HashMap;
      
      private static var _hasFightBegin:Boolean;
      
      private static var _effectManager:com.robot.core.battleRoyale.BattleEffectManager;
      
      private static var _deadMC:MovieClip;
      
      private static var _gameOverPanel:com.robot.core.battleRoyale.GameOverPanel;
      
      private static var _ampMC:MovieClip;
      
      private static var _billPanel:com.robot.core.battleRoyale.BillBoardPanel;
      
      private static var _royaleClock:com.robot.core.battleRoyale.RoyaleClockTime;
      
      private static var _toolBar:com.robot.core.battleRoyale.BattleToolBar;
      
      private static var _singleKillTip:com.robot.core.battleRoyale.SingleKillTip;
      
      private static var _itemArr:Array;
      
      private static var _bpManager:com.robot.core.battleRoyale.BirthPaceManager;
      
      private static var _royaleStartMC:MovieClip;
      
      private static var _royaleEndMC:MovieClip;
      
      private static var _royaleWaitMC:MovieClip;
      
      private static var _alrMc:MovieClip;
      
      private static const MAX_ITEM_NUM:uint = 7;
       
      
      public function BattleFightManager()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _hasFightBegin = false;
         _currentItemID = -1;
         _userMap = new HashMap();
         _modeMap = new HashMap();
         _scoreMap = new HashMap();
         initResource(param1);
         initModeMap();
         initCommandListener();
         showWaitPanel(true);
      }
      
      public static function get userMap() : HashMap
      {
         return _userMap;
      }
      
      public static function get modeMap() : HashMap
      {
         return _modeMap;
      }
      
      private static function initResource(param1:BaseMapProcess) : void
      {
         _map = param1;
         _deadMC = MapManager.currentMap.libManager.getMovieClip("deadMC");
         _ampMC = MapManager.currentMap.libManager.getMovieClip("AmplifierMC");
         _billPanel = new com.robot.core.battleRoyale.BillBoardPanel(_map.conLevel["billMC"],_map.topLevel["billPanel"],MapManager.currentMap.libManager.getClass("BillPanelItem"));
         _toolBar = new com.robot.core.battleRoyale.BattleToolBar(_map.conLevel["toolBar"]);
         _effectManager = new com.robot.core.battleRoyale.BattleEffectManager();
         _royaleStartMC = MapManager.currentMap.libManager.getMovieClip("RoyaleBattleStartMC").getChildAt(0) as MovieClip;
         _royaleEndMC = MapManager.currentMap.libManager.getMovieClip("RoyaleBattleEndMC").getChildAt(0) as MovieClip;
         _royaleWaitMC = MapManager.currentMap.libManager.getMovieClip("RoyaleBattleWaitMC") as MovieClip;
         _alrMc = _map.conLevel["playMc"] as MovieClip;
         _itemArr = new Array();
         var _loc2_:int = 1;
         while(_loc2_ <= MAX_ITEM_NUM)
         {
            _itemArr.push(_map.conLevel["item_" + _loc2_]);
            _map.conLevel["item_" + _loc2_].addEventListener(MouseEvent.CLICK,onItemClick);
            _map.conLevel["item_" + _loc2_].mc.visible = false;
            _loc2_++;
         }
         AmplifierController.setup(_ampMC);
         _bpManager = new com.robot.core.battleRoyale.BirthPaceManager(_map.conLevel as MovieClip);
         _singleKillTip = new com.robot.core.battleRoyale.SingleKillTip(MapManager.currentMap.libManager.getMovieClip("SingleKillTip"));
      }
      
      private static function onItemClick(param1:MouseEvent) : void
      {
         var _loc2_:int = 1;
         while(_loc2_ <= MAX_ITEM_NUM)
         {
            _map.conLevel["item_" + _loc2_].mc.visible = false;
            _loc2_++;
         }
         var _loc3_:MovieClip = param1.currentTarget as MovieClip;
         _loc3_.mc.visible = true;
         if(_loc3_.num > 0)
         {
            useItem(int(_loc3_.itemID));
         }
      }
      
      private static function useItem(param1:int) : void
      {
         if(param1 == 400761 || param1 == 400762 || param1 == 400766 || param1 == 400768)
         {
            _currentItemID = param1;
         }
         else
         {
            SocketConnection.send(CommandID.BATTLEROYALE_ITEM,MainManager.actorID,param1);
         }
      }
      
      public static function shootOther(param1:uint, param2:uint) : void
      {
         var _loc3_:uint = 10038;
         var _loc4_:Point = new Point(LevelManager.mapLevel.mouseX,LevelManager.mapLevel.mouseY);
         if(param2 <= _maxDistance)
         {
            if(_currentItemID == -1)
            {
               SocketConnection.send(CommandID.BATTLEROYALE_SHOOT,param1,param2);
               MainManager.actorModel.aimatAction(0,_loc3_,_loc4_);
            }
            else
            {
               SocketConnection.send(CommandID.BATTLEROYALE_ITEM,param1,_currentItemID);
            }
         }
         else
         {
            _alrMc.gotoAndPlay(2);
         }
      }
      
      private static function initModeMap() : void
      {
         var arry:Array;
         var mode:BasePeoleModel = null;
         _modeMap.add(MainManager.actorID,MainManager.actorModel);
         arry = UserManager.getUserModelList().slice();
         for each(mode in arry)
         {
            _modeMap.add(mode.info.userID,mode);
         }
         _modeMap.each2(function(param1:uint, param2:BasePeoleModel):void
         {
            param2.hidePet();
            param2.hideNono();
            param2.hideNonoForSetFly();
            if(!_hasFightBegin)
            {
               stopBodyMove(param2);
               if(param1 != MainManager.actorID)
               {
                  param2.visible = false;
               }
            }
         });
         MainManager.actorModel.hideNono();
      }
      
      private static function onMapUser(param1:RobotEvent) : void
      {
         var _loc3_:BasePeoleModel = null;
         var _loc2_:Array = UserManager.getUserModelList().slice();
         for each(_loc3_ in _loc2_)
         {
            if(!_modeMap.containsValue(_loc3_))
            {
               _loc3_.hidePet();
               _loc3_.hideNono();
               _loc3_.hideNonoForSetFly();
               _modeMap.add(_loc3_.info.userID,_loc3_);
               if(!_hasFightBegin)
               {
                  _loc3_.visible = false;
                  stopBodyMove(_loc3_);
               }
            }
         }
         for each(_loc3_ in _modeMap.getValues())
         {
            if(_loc2_.indexOf(_loc3_) == -1 && _loc3_ != MainManager.actorModel)
            {
               if(_loc3_.info)
               {
                  _modeMap.remove(_loc3_.info.userID);
               }
            }
         }
      }
      
      private static function onLeaveMap(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_userMap.containsKey(_loc3_))
         {
            _userMap.remove(_loc3_);
         }
      }
      
      private static function initCommandListener() : void
      {
         EventManager.addEventListener(RobotEvent.CREATED_MAP_USER,onMapUser);
         SocketConnection.addCmdListener(CommandID.BATTLEROYALE_FIGHT,onBattleFight);
         SocketConnection.addCmdListener(CommandID.BATTLEROYALE_HARM,onBattleHarm);
         SocketConnection.addCmdListener(CommandID.BATTLEROYALE_INSTANTINFO,onKillInfo);
         SocketConnection.addCmdListener(CommandID.BATTLEROYALE_REBORN,onReborn);
         SocketConnection.addCmdListener(CommandID.BATTLEROYALE_ITEM,onItemUse);
         SocketConnection.addCmdListener(CommandID.BATTLEROYALE_OVER,onGameOver);
         SocketConnection.addCmdListener(CommandID.LEAVE_MAP,onLeaveMap);
         SocketConnection.send(CommandID.BATTLEROYALE_READY,BattleRoyaleManager.struct);
         setTimeout(function():void
         {
            if(!_hasFightBegin)
            {
               BattleRoyaleManager.stutas = BattleRoyaleManager.ROOM_TO_ONLINE;
               MapManager.changeMap(BattleRoyaleManager.oldMapID);
            }
         },40000);
      }
      
      private static function showWaitPanel(param1:Boolean = true, param2:Function = null) : void
      {
         var firstHalf:Boolean = param1;
         var func:Function = param2;
         _royaleWaitMC.x = 400;
         _royaleWaitMC.y = 200;
         if(firstHalf)
         {
            _royaleWaitMC.addEventListener(Event.ENTER_FRAME,function():void
            {
               if(_royaleWaitMC.currentFrame == 35)
               {
                  _royaleWaitMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  _royaleWaitMC.stop();
               }
            });
            LevelManager.closeMouseEvent();
            LevelManager.topLevel.addChild(_royaleWaitMC);
            _royaleWaitMC.gotoAndPlay(1);
         }
      }
      
      private static function destroyCommandListener() : void
      {
         EventManager.removeEventListener(RobotEvent.CREATED_MAP_USER,onMapUser);
         SocketConnection.removeCmdListener(CommandID.BATTLEROYALE_FIGHT,onBattleFight);
         SocketConnection.removeCmdListener(CommandID.BATTLEROYALE_HARM,onBattleHarm);
         SocketConnection.removeCmdListener(CommandID.BATTLEROYALE_INSTANTINFO,onKillInfo);
         SocketConnection.removeCmdListener(CommandID.BATTLEROYALE_REBORN,onReborn);
         SocketConnection.removeCmdListener(CommandID.BATTLEROYALE_OVER,onGameOver);
         SocketConnection.removeCmdListener(CommandID.BATTLEROYALE_ITEM,onItemUse);
         SocketConnection.removeCmdListener(CommandID.LEAVE_MAP,onLeaveMap);
      }
      
      private static function onBattleFight(param1:SocketEvent) : void
      {
         var info:RoyaleUserInfo = null;
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         var len:uint = data.readUnsignedInt();
         _hasFightBegin = true;
         _royaleClock = new com.robot.core.battleRoyale.RoyaleClockTime(_map.conLevel["clockTxt"]);
         var i:int = 0;
         while(i < len)
         {
            info = new RoyaleUserInfo(data);
            _userMap.add(info.userID,info);
            if(info.userID == MainManager.actorID)
            {
               _maxDistance = info.distance;
               _maxHp = info.maxHp;
            }
            _scoreMap.add(info.userID,{
               "nick":info.nickName,
               "score":0
            });
            i++;
         }
         _billPanel.updateUI(_scoreMap.getValues());
         setTimeout(function():void
         {
            var _loc1_:BasePeoleModel = null;
            onMapUser(null);
            for each(_loc1_ in _modeMap.getValues())
            {
               startBodyMove(_loc1_);
               changeBloodBar(_loc1_);
               _loc1_.interactiveAction = new RoyaleInteractiveAction(_loc1_);
               if(Boolean(_loc1_) && Boolean(_loc1_.info))
               {
                  if(_loc1_.info.userID == MainManager.actorID)
                  {
                     _loc1_.bloodBar.colorType = PeopleBloodBar.RED;
                  }
                  else
                  {
                     _loc1_.bloodBar.colorType = PeopleBloodBar.BLUE;
                     _loc1_.visible = true;
                  }
               }
            }
            initPositions();
            LevelManager.openMouseEvent();
            DisplayUtil.removeForParent(_royaleWaitMC);
            playMC(_royaleStartMC);
         },500);
      }
      
      private static function initPositions() : void
      {
         _bpManager.unBirthAll(_userMap,_modeMap);
         _bpManager.brithAll();
      }
      
      private static function playMC(param1:MovieClip, param2:Function = null) : void
      {
         var mc:MovieClip = param1;
         var func:Function = param2;
         mc.x = 400;
         mc.y = 200;
         mc.addEventListener(Event.ENTER_FRAME,function():void
         {
            if(mc.totalFrames == mc.currentFrame)
            {
               LevelManager.openMouseEvent();
               mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               DisplayUtil.removeForParent(mc);
               if(func != null)
               {
                  func();
               }
            }
         });
         LevelManager.closeMouseEvent();
         LevelManager.topLevel.addChild(mc);
         mc.gotoAndPlay(1);
      }
      
      private static function onReborn(param1:SocketEvent) : void
      {
         var userID:uint = 0;
         var hp:uint = 0;
         var maxHp:uint = 0;
         var pos:uint = 0;
         var delay:uint = 0;
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         userID = data.readUnsignedInt();
         hp = data.readUnsignedInt();
         maxHp = data.readUnsignedInt();
         pos = data.readUnsignedInt();
         var arr:Array = _modeMap.getValues();
         var mode:BasePeoleModel = _modeMap.getValue(userID);
         stopBodyMove(mode);
         delay = setTimeout(function():void
         {
            var mode:* = undefined;
            if(_modeMap.containsKey(userID))
            {
               mode = _modeMap.getValue(userID);
               _deadMC.x = mode.x;
               _deadMC.y = mode.y;
               _bpManager.unBirthOne(mode,pos - 1);
               _map.depthLevel.addChild(_deadMC);
               _deadMC.addEventListener(Event.ENTER_FRAME,function():void
               {
                  if(_deadMC.totalFrames == _deadMC.currentFrame)
                  {
                     _deadMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     DisplayUtil.removeForParent(_deadMC);
                  }
               });
               _deadMC.gotoAndPlay(1);
            }
            _bpManager.birthOne(userID,function():void
            {
               dataAfterReborn(userID,hp,maxHp);
            });
            clearTimeout(delay);
         },800);
      }
      
      private static function dataAfterReborn(param1:uint, param2:uint, param3:uint) : void
      {
         var _loc4_:BasePeoleModel = null;
         var _loc5_:RoyaleUserInfo = null;
         if(_modeMap.containsKey(param1))
         {
            (_loc4_ = _modeMap.getValue(param1)).bloodBar.setHpNew(param2,param3);
         }
         if(param1 == MainManager.actorID)
         {
            _toolBar.updateBlood(param2,param3);
         }
         if(_userMap.containsKey(param1))
         {
            (_loc5_ = _userMap.getValue(param1) as RoyaleUserInfo).hp = param2;
            _loc5_.maxHp = param3;
         }
      }
      
      private static function changeBloodBar(param1:BasePeoleModel) : void
      {
         var _loc2_:RoyaleUserInfo = null;
         for each(_loc2_ in _userMap.getValues())
         {
            if(param1 && param1.info && Boolean(_loc2_))
            {
               if(_loc2_.userID == param1.info.userID)
               {
                  param1.bloodBar.setHpNew(_loc2_.hp,_loc2_.maxHp);
               }
            }
         }
      }
      
      private static function updateBloodBar(param1:uint, param2:uint, param3:uint, param4:uint) : void
      {
         var delay:uint = 0;
         var shootee:uint = param1;
         var hp:uint = param2;
         var maxHp:uint = param3;
         var damge:uint = param4;
         _modeMap.each2(function(param1:uint, param2:BasePeoleModel):void
         {
            var userID:uint = param1;
            var mode:BasePeoleModel = param2;
            if(shootee == userID)
            {
               delay = setTimeout(function():void
               {
                  mode.bloodBar.setHpNew(hp,maxHp,damge);
                  if(userID == MainManager.actorID)
                  {
                     _toolBar.updateBlood(hp,maxHp);
                  }
                  clearTimeout(delay);
               },500);
            }
         });
         if(_userMap.containsKey(shootee))
         {
            RoyaleUserInfo(_userMap.getValue(shootee)).hp = hp;
            RoyaleUserInfo(_userMap.getValue(shootee)).maxHp = maxHp;
         }
      }
      
      private static function onBattleHarm(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:String = _loc2_.readUTFBytes(16);
         var _loc6_:uint = _loc2_.readUnsignedInt();
         var _loc7_:uint = _loc2_.readUnsignedInt();
         var _loc8_:uint = _loc2_.readUnsignedInt();
         var _loc9_:uint = _loc2_.readUnsignedInt();
         _scoreMap.add(_loc4_,{
            "nick":_loc5_,
            "score":_loc9_
         });
         _billPanel.updateUI(_scoreMap.getValues());
         updateBloodBar(_loc6_,_loc7_,_loc8_,_loc3_);
      }
      
      private static function onKillInfo(param1:SocketEvent) : void
      {
         var _loc8_:BasePeoleModel = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:String = _loc2_.readUTFBytes(16);
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:uint = _loc2_.readUnsignedInt();
         var _loc7_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == MainManager.actorInfo.userID)
         {
            _loc8_ = _modeMap.getValue(_loc7_);
            _map.topLevel["killMc"].x = _loc8_.x;
            _map.topLevel["killMc"].y = _loc8_.y - 100;
            _map.topLevel["killMc"].gotoAndPlay(2);
         }
         if(_loc5_ >= 3)
         {
            _singleKillTip.show(_userMap.getValue(_loc3_).nickName,_loc5_);
         }
      }
      
      private static function onGameOver(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         playMC(_royaleEndMC,function():void
         {
            _royaleClock.reset(0);
            MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
            ModuleManager.showModule(ClientConfig.getAppModule("SnowballWarsFightOverPanel"),"正在打开....",e.data as ByteArray);
         });
      }
      
      private static function onItemUse(param1:SocketEvent) : void
      {
         var targetID:uint = 0;
         var itemID:uint = 0;
         var hp:uint = 0;
         var changeHp:uint = 0;
         var changeCHp:int = 0;
         var rUserInfo:RoyaleUserInfo = null;
         var otherMode:BasePeoleModel = null;
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         var userID:uint = data.readUnsignedInt();
         var nick:String = data.readUTFBytes(16);
         targetID = data.readUnsignedInt();
         itemID = data.readUnsignedInt();
         hp = data.readUnsignedInt();
         changeHp = data.readUnsignedInt();
         var score:uint = data.readUnsignedInt();
         var mode:BasePeoleModel = _modeMap.getValue(targetID);
         _toolBar.useItem(itemID,userID);
         _scoreMap.add(userID,{
            "nick":nick,
            "score":score
         });
         _billPanel.updateUI(_scoreMap.getValues());
         switch(itemID)
         {
            case 400761:
            case 400762:
               _currentItemID = -1;
               _effectManager.showEffect(itemID,targetID,mode);
               break;
            case 400753:
               _effectManager.showEffect(itemID,targetID,mode,function(param1:BasePeoleModel):void
               {
                  param1.bloodBar.setHpNew(hp,_userMap.getValue(param1.info.userID).maxHp,-changeHp);
                  _toolBar.updateBlood(hp,_maxHp);
               });
               break;
            case 400767:
            case 400769:
               for each(otherMode in _modeMap.getValues())
               {
                  if(otherMode.info)
                  {
                     if(otherMode.info.userID != userID)
                     {
                        if(itemID == 400767)
                        {
                           changeCHp = 400;
                        }
                        else
                        {
                           changeCHp = 600;
                        }
                        rUserInfo = _userMap.getValue(otherMode.info.userID);
                        changeCHp = Math.min(changeCHp,rUserInfo.hp);
                        rUserInfo.hp -= changeCHp;
                        _effectManager.showEffect(itemID,otherMode.info.userID,otherMode,function(param1:BasePeoleModel):void
                        {
                           var delay:uint = 0;
                           var mode:BasePeoleModel = param1;
                           delay = setTimeout(function():void
                           {
                              clearTimeout(delay);
                              mode.bloodBar.setHpNew(rUserInfo.hp,rUserInfo.maxHp,changeCHp);
                              if(mode.info.userID == MainManager.actorID)
                              {
                                 _toolBar.updateBlood(rUserInfo.hp,rUserInfo.maxHp);
                              }
                           },1500);
                        });
                     }
                  }
               }
               break;
            case 400766:
            case 400768:
               _currentItemID = -1;
               _effectManager.showEffect(itemID,targetID,mode,function(param1:BasePeoleModel):void
               {
                  var changeCHp:int = 0;
                  var rUserInfo:RoyaleUserInfo = null;
                  var delay:uint = 0;
                  var mode:BasePeoleModel = param1;
                  if(itemID == 400766)
                  {
                     changeCHp = 600;
                  }
                  else
                  {
                     changeCHp = 800;
                  }
                  rUserInfo = _userMap.getValue(targetID);
                  changeCHp = Math.min(changeCHp,rUserInfo.hp);
                  rUserInfo.hp -= changeCHp;
                  delay = setTimeout(function():void
                  {
                     clearTimeout(delay);
                     mode.bloodBar.setHpNew(rUserInfo.hp,rUserInfo.maxHp,changeCHp);
                  },1500);
               });
         }
      }
      
      public static function startBodyMove(param1:ActionSpriteModel) : void
      {
         param1.removeEventListener(RobotEvent.WALK_START,onBodyWalkStart);
      }
      
      private static function onBodyWalkStart(param1:RobotEvent) : void
      {
         var _loc2_:BasePeoleModel = param1.currentTarget as BasePeoleModel;
         _loc2_.stop();
         _loc2_.skeleton.stop();
      }
      
      public static function stopBodyMove(param1:ActionSpriteModel) : void
      {
         param1.addEventListener(RobotEvent.WALK_START,onBodyWalkStart);
      }
      
      public static function destroy() : void
      {
         var _loc1_:BasePeoleModel = null;
         var _loc2_:int = 0;
         if(_modeMap)
         {
            for each(_loc1_ in _modeMap.getValues())
            {
               startBodyMove(_loc1_);
               _loc1_.visible = true;
               _loc1_.removeBloodBar();
            }
         }
         MainManager.actorModel.interactiveAction = null;
         LevelManager.openMouseEvent();
         AmplifierController.destroy();
         destroyCommandListener();
         if(_singleKillTip)
         {
            _toolBar.destroy();
            _singleKillTip.destroy();
            _billPanel.destroy();
            _loc2_ = 0;
            while(_loc2_ < MAX_ITEM_NUM)
            {
               _itemArr[_loc2_].removeEventListener(MouseEvent.CLICK,onItemClick);
               _loc2_++;
            }
            DisplayUtil.removeForParent(_royaleWaitMC);
         }
         if(_royaleClock)
         {
            _royaleClock.destroy();
         }
         SimpleAlarm.hide();
      }
   }
}
