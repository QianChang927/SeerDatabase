package com.robot.app.task.taskscollection
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task988
   {
      
      public static var _map:BaseMapProcess;
      
      private static var _mcForMap718:MovieClip;
      
      private static var _postMc:MovieClip;
      
      private static var _lightMc:MovieClip;
      
      private static var _isGetState:Boolean;
      
      private static var _isGetStateOutTime:Boolean;
      
      private static var _isMail:Boolean;
      
      private static var _postStateArr:Array;
      
      public static var isTaskxiaoyouxi:Boolean = false;
      
      private static var _cannotLight:Boolean;
      
      private static var _postNameArr:Array = ["玄铁","赤铜","翡翠","水晶"];
      
      private static const ACTIVITY_TIME_START:uint = SystemTimerManager.getTimeByDate(2012,11,3,0,0,0);
      
      private static const ACTIVITY_TIME_END:uint = SystemTimerManager.getTimeByDate(2013,11,30,0,0,0);
       
      
      public function Task988()
      {
         super();
      }
      
      public static function initForMap718(param1:BaseMapProcess) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         _map = param1;
         if(_loc2_.time / 1000 < ACTIVITY_TIME_END && _loc2_.time / 1000 > ACTIVITY_TIME_START)
         {
            _mcForMap718 = _map.conLevel["activity"];
            _postMc = _map.conLevel["post"];
            _lightMc = _map.conLevel["light"];
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,checkCurrentState);
            checkCurrentState(null);
         }
         else
         {
            DisplayUtil.removeForParent(_map.conLevel["activity"]);
            DisplayUtil.removeForParent(_map.conLevel["fazeng"]);
         }
      }
      
      public static function start() : void
      {
      }
      
      private static function mail(param1:SocketEvent) : void
      {
         if(isMailTime)
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,mail);
            if(!_isMail)
            {
               _isMail = true;
               LocalMsgController.addLocalMsg("PaluodiyaTrainADPanel");
            }
         }
      }
      
      private static function onCompleteTask(param1:SocketEvent) : void
      {
         var t:uint = 0;
         var e:SocketEvent = param1;
         t = setTimeout(function():void
         {
            clearTimeout(t);
            NpcDialog.show(NPC.NUJIADASI,["你的特训任务已经完成啦！快回翡翠山谷交任务吧！"],["马上就去！"],[function():void
            {
               MapManager.changeMap(718);
            }]);
         },3000);
      }
      
      private static function checkCurrentState(param1:SocketEvent) : void
      {
         var _loc2_:uint = 0;
         if(isActiveTime)
         {
            if(!_isGetState)
            {
               _isGetState = true;
               getPostState();
               CommonUI.removeYellowExcal(_mcForMap718);
               CommonUI.addYellowExcal(_mcForMap718,450,230);
               _mcForMap718.gotoAndStop(2);
               _mcForMap718.buttonMode = true;
               _mcForMap718.addEventListener(MouseEvent.CLICK,onNpcClick2);
               _lightMc.buttonMode = true;
               _lightMc.addEventListener(MouseEvent.CLICK,onLightClick);
               _map.conLevel["fazeng"].buttonMode = true;
               _map.conLevel["fazeng"].addEventListener(MouseEvent.CLICK,onFazengClick);
               ToolTipManager.add(_map.conLevel["fazeng"],"特训法阵榜");
               _loc2_ = 0;
               while(_loc2_ < 4)
               {
                  ToolTipManager.add(_postMc["post_" + _loc2_],_postNameArr[_loc2_] + "石柱");
                  _loc2_++;
               }
               ToolTipManager.add(_lightMc,"翡翠神灯");
            }
         }
         else
         {
            outofActivityTime();
            _lightMc.buttonMode = false;
            _lightMc.removeEventListener(MouseEvent.CLICK,onLightClick);
            _mcForMap718.removeEventListener(MouseEvent.CLICK,onNpcClick2);
            _map.conLevel["fazeng"].removeEventListener(MouseEvent.CLICK,onFazengClick);
            _map.conLevel["fazeng"].buttonMode = false;
         }
      }
      
      private static function onFazengClick(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(_map.conLevel["fazeng"]);
         ModuleManager.showModule(ClientConfig.getAppModule("PaluodiyaTrainMainPanel"),"正在打开....");
      }
      
      private static function onLightClick(param1:MouseEvent) : void
      {
         SocketConnection.addCmdListener(CommandID.PALUODIYA_TRAIN_LIGHT,onLightHandler);
         SocketConnection.send(CommandID.PALUODIYA_TRAIN_LIGHT);
      }
      
      private static function onLightHandler(param1:SocketEvent) : void
      {
         var by:ByteArray;
         var id:uint = 0;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.PALUODIYA_TRAIN_LIGHT,onLightHandler);
         by = event.data as ByteArray;
         id = by.readUnsignedInt();
         AnimateManager.playMcAnimate(_lightMc,3,"mc",function():void
         {
            FightManager.fightWithBoss("神秘精灵",id);
         });
      }
      
      public static function getPostState() : void
      {
         SocketConnection.addCmdListener(CommandID.PALUODIYA_TRAIN_POST_STATE,setPostState);
         SocketConnection.send(CommandID.PALUODIYA_TRAIN_POST_STATE);
      }
      
      private static function setPostState(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PALUODIYA_TRAIN_POST_STATE,setPostState);
         _postStateArr = [];
         var _loc2_:ByteArray = param1.data as ByteArray;
         _postStateArr = KTool.readDataByBits(_loc2_,8);
         initPost();
      }
      
      private static function initPost() : void
      {
         _cannotLight = false;
         var _loc1_:uint = 0;
         while(_loc1_ < 4)
         {
            switch(_postStateArr[_loc1_])
            {
               case 0:
                  _postMc["post_" + _loc1_].gotoAndStop(1);
                  _cannotLight = true;
                  break;
               case 1:
                  _postMc["post_" + _loc1_].gotoAndStop(2);
                  break;
            }
            _loc1_++;
         }
         if(_cannotLight)
         {
            _lightMc.gotoAndStop(1);
         }
         else
         {
            _lightMc.gotoAndStop(2);
         }
      }
      
      private static function outofActivityTime() : void
      {
         if(!_isGetStateOutTime)
         {
            _isGetStateOutTime = true;
            CommonUI.removeYellowExcal(_mcForMap718);
            CommonUI.addYellowExcal(_mcForMap718,450,230);
            _mcForMap718.gotoAndStop(1);
            _mcForMap718.buttonMode = true;
            _mcForMap718.addEventListener(MouseEvent.CLICK,onNpcClick);
         }
      }
      
      private static function onNpcClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var s:String = "988_1";
         var so:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
         if(so.data[s] == null)
         {
            so.data[s] = "true";
            SOManager.flush(so);
            CommonUI.removeYellowExcal(_mcForMap718);
            AnimateManager.playMcAnimate(_mcForMap718,1,"mc1",function():void
            {
               NpcDialog.show(NPC.NUJIADASI,["且慢，你不是喜欢玩弄人心，看别人绝望嘛？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.NUJIADASI,["我便与你打个赌如何？你给我两周的时间,我就可以训练出一个打败你的高手！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.ZOG_20111027,["你训练了数年的徒弟都不是我的对手，区区两周你又如何打败我！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.NUJIADASI,["一言为定，我定会训练出一个高手，打败你！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.NUJIADASI,["帕罗狄亚生性骄傲，但邪不胜正！正义之士请来参加我的特训！"],["我知道了"]);
                        });
                     });
                  });
               });
            });
         }
         else
         {
            NpcDialog.show(NPC.NUJIADASI,["帕罗狄亚生性骄傲，但邪不胜正！正义之士请来参加我的特训！"],["我知道了"]);
         }
      }
      
      private static function onNpcClick2(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var s:String = "988_2";
         var so:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
         if(so.data[s] == null)
         {
            so.data[s] = "true";
            SOManager.flush(so);
            CommonUI.removeYellowExcal(_mcForMap718);
            MainManager.actorModel.x = 600;
            MainManager.actorModel.y = 315;
            AnimateManager.playMcAnimate(_mcForMap718,2,"mc2",function():void
            {
               NpcDialog.show(NPC.NUJIADASI,["特训的内容就是激活0xff0000特训法阵0xffffff，激活特训法阵不仅能获得奖励还能得到特训徽章哦！"],["特训徽章有什么用？"],[function():void
               {
                  NpcDialog.show(NPC.NUJIADASI,["特训徽章可以兑换各种好礼哦！"],["恩恩，我知道了！"],[function():void
                  {
                     CommonUI.removeYellowArrow(_map.conLevel["fazeng"]);
                     CommonUI.addYellowArrow(_map.conLevel["fazeng"],0,0,300);
                  }]);
               }]);
            });
         }
         else
         {
            NpcDialog.show(NPC.NUJIADASI,["特训的内容就是激活0xff0000特训法阵0xffffff，激活特训法阵不仅能获得奖励还能得到特训徽章哦！"],["特训徽章有什么用？"],[function():void
            {
               NpcDialog.show(NPC.NUJIADASI,["特训徽章可以兑换各种好礼哦！"],["恩恩，我知道了！"],[function():void
               {
                  CommonUI.removeYellowArrow(_map.conLevel["fazeng"]);
                  CommonUI.addYellowArrow(_map.conLevel["fazeng"],0,0,300);
               }]);
            }]);
         }
      }
      
      public static function get isActiveTime() : Boolean
      {
         return true;
      }
      
      public static function get isMailTime() : Boolean
      {
         return false;
      }
      
      public static function destroy() : void
      {
         var _loc1_:uint = 0;
         if(!_map)
         {
            return;
         }
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,checkCurrentState);
         SocketConnection.removeCmdListener(CommandID.PALUODIYA_TRAIN_LIGHT,onLightHandler);
         SocketConnection.removeCmdListener(CommandID.PALUODIYA_TRAIN_POST_STATE,setPostState);
         if(_mcForMap718)
         {
            _mcForMap718.removeEventListener(MouseEvent.CLICK,onNpcClick2);
            _mcForMap718.removeEventListener(MouseEvent.CLICK,onNpcClick);
            CommonUI.removeYellowExcal(_mcForMap718);
         }
         if(_lightMc)
         {
            _lightMc.addEventListener(MouseEvent.CLICK,onLightClick);
            ToolTipManager.remove(_lightMc);
         }
         if(_map.conLevel["fazeng"])
         {
            _map.conLevel["fazeng"].addEventListener(MouseEvent.CLICK,onFazengClick);
            ToolTipManager.remove(_map.conLevel["fazeng"]);
            CommonUI.removeYellowArrow(_map.conLevel["fazeng"]);
         }
         if(_postMc)
         {
            _loc1_ = 0;
            while(_loc1_ < 4)
            {
               if(_postMc["post_" + _loc1_])
               {
                  ToolTipManager.remove(_postMc["post_" + _loc1_]);
               }
               _loc1_++;
            }
         }
         _isGetState = false;
         _isGetStateOutTime = false;
         _cannotLight = false;
         _mcForMap718 = null;
         _postMc = null;
         _lightMc = null;
         _postStateArr = [];
         _map = null;
      }
   }
}
