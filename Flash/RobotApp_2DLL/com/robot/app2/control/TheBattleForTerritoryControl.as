package com.robot.app2.control
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.utils.DisplayUtil;
   
   public class TheBattleForTerritoryControl
   {
      
      private static var _specialFighType:int = 0;
      
      private static var _type:int;
      
      private static var _uid:int;
      
      private static var viewMv:MovieClip;
      
      private static var _hasNote:Boolean = false;
      
      private static var _popupTip:Boolean;
       
      
      public function TheBattleForTerritoryControl()
      {
         super();
      }
      
      public static function setUp() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         SocketConnection.addCmdListener(CommandID.BATTLE_FOR_TERRITORY_SPECIAL_FIGHT_NOTI,onSpecialFightNote);
         SocketConnection.addCmdListener(CommandID.BATTLE_FOR_TERRITORY_CHANGE_OWNER,onOwnerChange);
      }
      
      public static function onOwnerChange(param1:*) : void
      {
         var _loc4_:MovieClip = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         if(_loc3_ != MainManager.actorInfo.userID && !_hasNote)
         {
            if(ToolBarController.panel != null)
            {
               _hasNote = true;
               (_loc4_ = UIManager.getMovieClip("lingdiNote")).buttonMode = true;
               _loc4_.addEventListener(MouseEvent.CLICK,onJidiClick);
               _loc4_.x = ToolBarController.panel.homeBtn.x;
               _loc4_.y = ToolBarController.panel.homeBtn.y;
               ToolBarController.panel.addChild(_loc4_);
            }
         }
      }
      
      private static function onJidiClick(param1:MouseEvent) : void
      {
         var _loc2_:DisplayObject = param1.currentTarget as DisplayObject;
         _loc2_.removeEventListener(MouseEvent.CLICK,onJidiClick);
         DisplayUtil.removeForParent(_loc2_);
         MapManager.changeMap(MainManager.actorInfo.userID);
         _hasNote = false;
      }
      
      private static function onSpecialFightNote(param1:*) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         _specialFighType = _loc2_.readUnsignedInt();
      }
      
      private static function onMapChange(param1:*) : void
      {
         var btn:SimpleButton = null;
         var e:* = param1;
      }
      
      private static function onBattleBtnClick(param1:*) : void
      {
         var e:* = param1;
         SocketConnection.send(1022,86058040);
         SocketConnection.sendWithCallback(41080,function(param1:*):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:* = _loc2_.readUnsignedInt() > 0;
            if(!_loc3_)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("TheBattleForTerritorySignUpPanel"));
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("TheBattleForTerritoryMainPanel"));
            }
         },482);
      }
      
      private static function showQizi(param1:Function) : void
      {
         var fun:Function = param1;
         getMV(function(param1:MovieClip):void
         {
            var mv:MovieClip = param1;
            LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
            LevelManager.appLevel.addChild(mv);
            AnimateManager.playMcAnimate(mv,2,"mc",function():void
            {
               fun();
            });
         });
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var _loc4_:String = null;
         var _loc5_:String = null;
         var _loc6_:Function = null;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(MapManager.currentMap.id !== MainManager.actorID)
         {
            return;
         }
         var _loc3_:Object = {};
         if(_loc2_.winnerID == MainManager.actorID)
         {
            _loc4_ = "恭喜你对战胜利以下是你的奖励";
            _loc5_ = "争夺战积分：5\n领地数：+1";
            if(_type == 1 && _specialFighType != 0)
            {
               _loc6_ = fightWithStarPet;
            }
         }
         else
         {
            _loc4_ = "很遗憾，战斗失败，以下是你的奖励,\n继续努力吧！";
            _loc5_ = "争夺战积分：2";
         }
         _loc3_["text0"] = _loc4_;
         _loc3_["text1"] = _loc5_;
         _loc3_["fun"] = _loc6_;
         ModuleManager.showModule(ClientConfig.getAppModule("LingdijiesuanPanel"),"正在打开。。。",_loc3_);
      }
      
      private static function fightWithStarPet() : void
      {
         getMV(function(param1:MovieClip):void
         {
            var mv:MovieClip = param1;
            var frame:int = _specialFighType == 1 ? 4 : 7;
            LevelManager.appLevel.addChild(mv);
            AnimateManager.playMcAnimate(mv,frame,"mc",function():void
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
               {
                  var _loc4_:Object = null;
                  var _loc5_:String = null;
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  if(MapManager.currentMap.id !== MainManager.actorID)
                  {
                     return;
                  }
                  var _loc3_:FightOverInfo = param1.dataObj as FightOverInfo;
                  if(_loc3_.winnerID == MainManager.actorID)
                  {
                     _loc4_ = {};
                     _loc5_ = _specialFighType == 1 ? "光" : "暗";
                     _loc4_["text0"] = "恭喜你战胜了" + _loc5_ + "之灵，以下是你的奖励！";
                     _loc4_["text1"] = "光暗祝福+1\n争夺战积分：10";
                     ModuleManager.showModule(ClientConfig.getAppModule("LingdijiesuanPanel"),"正在打开。。。",_loc4_);
                  }
               });
               viewMv = null;
               MapManager.currentMap.controlLevel.addChild(mv);
               MapListenerManager.add(mv,function():void
               {
                  SocketConnection.send(CommandID.BATTLE_FOR_TERRITORY_SPECIAL_FIGHT,_specialFighType);
               });
               if(_specialFighType == 1)
               {
                  NpcDialog.show(NPC.GUANGZHILINGL,["0xff0000" + MainManager.actorInfo.nick + "0xffffff 你的表现非常不错，现在来接受我的试炼吧！"],["我一定会击败你"]);
               }
            });
         });
      }
      
      public static function fightWithBagPet(param1:int, param2:int) : void
      {
         _specialFighType = 0;
         _type = param2;
         _uid = param1;
         SocketConnection.send(CommandID.BATTLE_FOR_TERRITORY_START_FIGHT,param2,param1);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
      }
      
      private static function getMV(param1:Function) : void
      {
         var mcloader:MCLoader = null;
         var fun:Function = param1;
         if(viewMv)
         {
            fun(viewMv);
            return;
         }
         mcloader = new MCLoader(ClientConfig.getResPath("active/" + "lingdi.swf"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            viewMv = mcloader.loader.content["mv"];
            fun(viewMv);
            mcloader.loader.unload();
            mcloader.clear();
         });
         mcloader.doLoad();
      }
      
      public static function get isPastToday() : Boolean
      {
         if(activeTime.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.PAST)
         {
            return true;
         }
         return false;
      }
      
      public static function get isInActivityTime() : Boolean
      {
         return activeTime.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT;
      }
      
      public static function get activeTime() : CronTimeVo
      {
         var _loc1_:CronTimeVo = null;
         if(SystemTimerManager.sysDate.day >= 1 && SystemTimerManager.sysDate.day <= 4)
         {
            _loc1_ = new CronTimeVo("*","18-21",SystemTimerManager.sysDate.date + "","*","*","2013");
         }
         else
         {
            _loc1_ = new CronTimeVo("*","15-18",SystemTimerManager.sysDate.date + "","*","*","2013");
         }
         return _loc1_;
      }
   }
}
