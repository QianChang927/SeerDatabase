package com.robot.app.fight
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fightNote.FightTypeInfo;
   import com.robot.app.fightNote.FightWaitPanel;
   import com.robot.app.info.fightInvite.InviteNoteInfo;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app.user.UserInfoController;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Answer;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.events.TextEvent;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class FightManager
   {
      
      private static var _currentBossRegion:int;
      
      private static var _petFightClass:String;
      
      private static var array:Array = [];
      
      private static var iconMC:Sprite;
      
      private static var fightSwitch:Boolean = true;
      
      private static var NUM:Number = 0.08;
      
      public static var isKillBigPetB:Boolean = false;
      
      public static var isKillBigPetB0:Boolean = false;
      
      public static var isKillBigPetB1:Boolean = false;
      
      public static var isKillBigPetB2:Boolean = false;
      
      public static var isKillBigPetB3:Boolean = false;
      
      public static var isKillBigPetB4:Boolean = false;
      
      public static var isKillBigPetB5:Boolean = false;
      
      public static var isKillBigPetB6:Boolean = false;
      
      public static var isKillBigPetB7:Boolean = false;
      
      public static var isWin:Boolean;
      
      public static var amyId:uint;
      
      public static var isCanSave:Boolean;
      
      public static var isReplay:Boolean = false;
      
      public static var isPerformFirst:Boolean;
      
      public static var amyPetIds:Array = [];
      
      public static var info:FightTypeInfo;
      
      public static var _noMapFightCallBlackFun:Function;
      
      public static var _tryFightCallBlackFun:Function;
       
      
      public function FightManager()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(!BufferRecordManager.getMyState(939))
         {
            _petFightClass = "PetFightDLL_201308";
         }
         else
         {
            _petFightClass = "PetFightDLL";
         }
         _petFightClass = "PetFightDLL_201308";
      }
      
      public static function fightWithPlayer(param1:UserInfo) : void
      {
         var dinfo:PetInfo;
         var _info:UserInfo = param1;
         _currentBossRegion = 0;
         if(PetManager.length == 0)
         {
            Alarm.show("你没有带赛尔精灵，不能战斗！");
            return;
         }
         dinfo = PetManager.getPetInfo(PetManager.defaultTime);
         if(dinfo == null)
         {
            Alarm.show("你没有可出战的精灵！");
            return;
         }
         KTool.getOnlineUsersForeverOrDailyVal([_info.userID,3308],function(param1:int):void
         {
            if(param1 == 0)
            {
               FightWaitPanel.selectMode(_info);
            }
            else
            {
               Alarm.show("对方正在参加巅峰战，无法接受你的对战邀请！");
            }
         });
      }
      
      public static function fightWithNpc(param1:uint) : void
      {
         if(!fightSwitch)
         {
            return;
         }
         _currentBossRegion = 0;
         info = new FightTypeInfo();
         info.type = 0;
         info.area = param1;
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         PetFightModel.status = PetFightModel.FIGHT_WITH_NPC;
         if(PetXMLInfo.getName(PetFightModel.defaultNpcID) != "")
         {
            PetFightModel.enemyName = PetXMLInfo.getName(PetFightModel.defaultNpcID);
         }
         else
         {
            PetFightModel.enemyName = "野外精灵";
         }
         SocketConnection.send(CommandID.FIGHT_NPC_MONSTER,param1);
         fightSwitch = false;
         changeSwitch();
      }
      
      public static function fightOgre(param1:uint) : void
      {
         var _loc3_:OgreModel = null;
         var _loc4_:OgreModel = null;
         var _loc2_:Array = OgreController.getOgreList();
         if(_loc2_.length > 0)
         {
            for each(_loc4_ in _loc2_)
            {
               if(_loc4_.id == param1)
               {
                  _loc3_ = _loc4_;
                  break;
               }
            }
            if(_loc3_ != null)
            {
               PetFightModel.defaultNpcID = param1;
               FightManager.fightWithNpc(_loc3_.index);
            }
            else
            {
               Alarm.show("场景中似乎没有可以捕获的精灵，自己寻找寻找喽");
            }
         }
         else
         {
            Alarm.show("场景中精灵还没有出来，一会自己寻找寻找喽");
         }
      }
      
      public static function fightWithBoss(param1:String, param2:uint = 0, param3:Boolean = false, param4:Boolean = true) : void
      {
         if(!fightSwitch)
         {
            return;
         }
         _currentBossRegion = param2;
         if(!getDefinitionByName("com.robot.app2.control.BossReductionController").fightBoss(param1,param2,param3,param4))
         {
            confirmFightWithBoss(param1,param2,param3,param4,true,false);
         }
      }
      
      public static function fightNoMapBossWithPromise(param1:String, param2:uint = 0, param3:Boolean = false, param4:Boolean = true) : Promise
      {
         var deferred:Deferred = null;
         var name:String = param1;
         var region:uint = param2;
         var skipKillPlugin:Boolean = param3;
         var type:Boolean = param4;
         deferred = new Deferred();
         fightNoMapBoss(name,region,skipKillPlugin,type,function(param1:FightOverInfo):void
         {
            deferred.resolve(param1);
         });
         return deferred.promise;
      }
      
      public static function fightNoMapBoss(param1:String, param2:uint = 0, param3:Boolean = false, param4:Boolean = true, param5:Function = null) : void
      {
         _currentBossRegion = param2;
         if(!fightSwitch)
         {
            return;
         }
         confirmFightWithBoss(param1,param2,param3,param4,false,false);
         _noMapFightCallBlackFun = param5;
         if(param5 != null)
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         }
      }
      
      public static function fightNoMapBossByCmd(param1:int, param2:Array, param3:Function) : void
      {
         var cmd:int = param1;
         var args:Array = param2;
         var callback:Function = param3;
         _currentBossRegion = 0;
         SocketConnection.sendWithCallback2(cmd,function():void
         {
            _noMapFightCallBlackFun = callback;
            if(callback != null)
            {
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
            }
         },args);
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         if(_noMapFightCallBlackFun != null)
         {
            _noMapFightCallBlackFun(param1.dataObj as FightOverInfo);
            _noMapFightCallBlackFun = null;
         }
      }
      
      public static function fightWithBossAndDelItem(param1:String, param2:uint = 0, param3:Boolean = false, param4:Boolean = true) : void
      {
         if(!fightSwitch)
         {
            return;
         }
         confirmFightWithBoss(param1,param2,param3,param4,true,true);
      }
      
      public static function confirmFightWithBoss(param1:String, param2:uint = 0, param3:Boolean = false, param4:Boolean = true, param5:Boolean = true, param6:Boolean = false) : void
      {
         if(PetManager.isPackSpiriHavetHp == false)
         {
            Alarm.show("你背包里面的精灵体力都不够了哦！赶紧给它们补充体力吧！");
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.CLOSE_FIGHT_WAIT));
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.NO_PET_CAN_FIGHT));
            return;
         }
         info = new FightTypeInfo();
         info.type = 1;
         info.bossName = param1;
         info.bossRegion = param2;
         info.isSkipKP = param3;
         info.isMultiModel = param4;
         if(param4)
         {
            PetFightModel.mode = PetFightModel.MULTI_MODE;
         }
         else
         {
            PetFightModel.mode = PetFightModel.SINGLE_MODE;
         }
         PetFightModel.enemyName = param1;
         PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
         if(param6)
         {
            SocketConnection.send(CommandID.VANISH_AIR_BRICK_CHALLENGE,param2);
         }
         else if(param5)
         {
            SocketConnection.send(CommandID.CHALLENGE_BOSS,param2,Math.floor(Math.random() * 4294967296));
         }
         else
         {
            SocketConnection.send(CommandID.MIBAO_FIGHT,param2);
         }
         fightSwitch = false;
         changeSwitch();
      }
      
      public static function fightWithSpecial(param1:String = "稀有精灵") : void
      {
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         PetFightModel.status = PetFightModel.FIGHT_WITH_NPC;
         PetFightModel.enemyName = param1;
         SocketConnection.send(CommandID.FIGHT_SPECIAL_PET);
      }
      
      public static function tryFight(param1:int, param2:Array, param3:Function = null, param4:int = 1) : void
      {
         var _loc5_:int = 0;
         if(Boolean(param2) && param2.length > 3)
         {
            PetFightModel.mode = param4;
            PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
            PetFightModel.type = PetFightModel.PET_TRY_FIGHT;
            _loc5_ = 0;
            if(param2.length == 5)
            {
               _loc5_ = int(param2[4]);
            }
            SocketConnection.send(CommandID.FIGHT_TRY_USE_PET,param1,param2[0],param2[1],param2[2],param2[3],_loc5_);
            SocketConnection.addCmdListener(CommandID.FIGHT_TRY_USE_PET,isInFight);
            if(param3 != null)
            {
               _tryFightCallBlackFun = param3;
            }
         }
      }
      
      private static function isInFight(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.FIGHT_TRY_USE_PET,isInFight);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            PetFightModel.mode = PetFightModel.MULTI_MODE;
            PetFightModel.status = PetFightModel.FIGHT_WITH_NPC;
            PetFightModel.type = 0;
            if(_tryFightCallBlackFun != null)
            {
               _tryFightCallBlackFun();
               _tryFightCallBlackFun = null;
            }
         });
      }
      
      private static function changeSwitch() : void
      {
         var t:uint = 0;
         t = setTimeout(function():void
         {
            clearTimeout(t);
            fightSwitch = true;
         },1000);
      }
      
      public static function add(param1:InviteNoteInfo) : void
      {
         var info:InviteNoteInfo = param1;
         array.push(info);
         KTool.getMultiValue([3308,3314,3306,3307,100859],function(param1:Array):void
         {
            var va:Array = param1;
            if(va[0] == info.userID || va[1] == info.userID)
            {
               if(va[0] == info.userID)
               {
                  PetFightModel.mode = info.mode;
                  PetFightModel.enemyName = info.nickName;
                  PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
               }
               else if(va[1] == info.userID)
               {
                  KTool.getOnlineUsersForeverOrDailyVal([va[1],100859],function(param1:int):void
                  {
                     if(va[4] == 1 || param1 == 1)
                     {
                        PetFightModel.type = PetFightModel.PEAK_JIHAD_FREE_PLAN;
                     }
                     else
                     {
                        PetFightModel.type = PetFightModel.PEAK_JIHAD_FREE;
                     }
                     PetFightModel.mode = info.mode;
                     PetFightModel.enemyName = info.nickName;
                     PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
                     SocketConnection.send(CommandID.HANDLE_FIGHT_INVITE,info.userID,1,info.mode);
                  });
               }
            }
            else
            {
               checkLength();
            }
         });
      }
      
      private static function next() : InviteNoteInfo
      {
         var _loc1_:InviteNoteInfo = array.shift() as InviteNoteInfo;
         checkLength();
         return _loc1_;
      }
      
      private static function checkLength() : void
      {
         if(!iconMC)
         {
            iconMC = ToolBarController.getpanelUi();
         }
         if(array.length > 0)
         {
            iconMC["friendBtn"].addEventListener(MouseEvent.CLICK,showInviteAnswer,false,2);
            iconMC["uiDot"].visible = true;
            iconMC["uiDot"]["NewMaiIconMcl"].gotoAndStop(4);
         }
         else
         {
            iconMC["friendBtn"].removeEventListener(MouseEvent.CLICK,showInviteAnswer);
         }
      }
      
      private static function showInviteAnswer(param1:MouseEvent) : void
      {
         var sprite:Sprite;
         var data:InviteNoteInfo = null;
         var type:uint = 0;
         var str:String = null;
         var acceptInvite:Function = null;
         var rejectInvite:Function = null;
         var cls:Class = null;
         var event:MouseEvent = param1;
         acceptInvite = function():void
         {
            if(PetManager.length == 0)
            {
               Alarm.show("你还没有带上赛尔精灵，不能接受对战！");
               return;
            }
            PetFightModel.mode = type;
            PetFightModel.enemyName = data.nickName;
            PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
            SocketConnection.send(CommandID.HANDLE_FIGHT_INVITE,data.userID,1,type);
         };
         rejectInvite = function():void
         {
            SocketConnection.send(CommandID.HANDLE_FIGHT_INVITE,data.userID,0,type);
         };
         event.stopImmediatePropagation();
         if(iconMC)
         {
            iconMC["uiDot"].removeEventListener(MouseEvent.CLICK,showInviteAnswer);
            cls = getDefinitionByName("com.robot.app2.control.SeerBoxIconController") as Class;
            iconMC["uiDot"].visible = false;
            iconMC["uiDot"]["NewMaiIconMcl"].gotoAndStop(4);
            cls["updateDot"]();
         }
         data = next();
         type = data.mode;
         if(type == PetFightModel.SINGLE_MODE)
         {
            str = "精灵单挑";
         }
         else
         {
            str = "多精灵对战";
         }
         sprite = Answer.show("<a href=\'event:\'><font color=\'#ff0000\'>" + data.nickName + "(" + data.userID + ")</font></a>邀请你进行赛尔精灵对战，你愿意接受吗？\r\r<font color=\'#ff0000\'>对战模式：" + str + "。</font>",acceptInvite,rejectInvite);
         sprite.addEventListener(TextEvent.LINK,function():void
         {
            UserInfoController.show(data.userID);
         });
      }
      
      public static function get petFightClass() : String
      {
         return _petFightClass;
      }
      
      public static function set petFightClass(param1:String) : void
      {
         _petFightClass = param1;
         if(param1 == "PetFightDLL_201308")
         {
            BufferRecordManager.setMyState(939,false);
            SocketConnection.send(1022,86065489);
         }
         else
         {
            BufferRecordManager.setMyState(939,true);
            SocketConnection.send(1022,86065488);
         }
      }
      
      public static function get currentBossRegion() : int
      {
         return _currentBossRegion;
      }
   }
}
