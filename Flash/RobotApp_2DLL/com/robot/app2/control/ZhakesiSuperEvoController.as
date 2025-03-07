package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ZhakesiSuperEvoController
   {
      
      private static const TIME_VO:Array = [new CronTimeVo("*","13-14","*","*","*","*"),new CronTimeVo("*","18-19","*","*","*","*")];
      
      private static var _timer:int;
      
      private static var _popupMc:MovieClip;
      
      private static var _boxflag:uint;
      
      private static var _boxF:uint;
      
      private static var _hurtNum:uint;
      
      private static var _intervalId:int;
      
      private static var _countDownComp:TimeCountdownComponent;
      
      private static var _index:int;
       
      
      public function ZhakesiSuperEvoController()
      {
         super();
      }
      
      public static function setup() : void
      {
         _boxflag = 0;
         if(isActive())
         {
            KTool.getMultiValue([13916],function(param1:Array):void
            {
               _boxF = param1[0];
               checkBox();
               _intervalId = setInterval(checkBox,60000);
            });
         }
         else
         {
            _timer = getCountDownNum();
            SystemTimerManager.addTickFun(onTick);
         }
      }
      
      private static function checkBox() : void
      {
         SocketConnection.sendByQueue(45676,[11,0],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            _hurtNum = _loc2_.readUnsignedInt();
            if(SystemTimerManager.sysDate.hours >= 18)
            {
               _boxF >>= 3;
               _boxflag >>= 3;
            }
            var _loc3_:Boolean = true;
            _index = -1;
            var _loc4_:int = 0;
            while(_loc4_ < 3)
            {
               if(KTool.getBit(_boxF,_loc4_ + 1) == 0 && KTool.getBit(_boxflag,_loc4_ + 1) == 0 && _hurtNum <= (2 - _loc4_) * 35)
               {
                  if(_countDownComp != null)
                  {
                     _countDownComp.destroy();
                     _countDownComp = null;
                  }
                  _index = _loc4_ + 1;
                  _boxflag = BitUtils.setBit(_boxflag,_loc4_);
                  _loc3_ = false;
               }
               _loc4_++;
            }
            if(_index != -1)
            {
               showPopUp(2);
            }
            if(SystemTimerManager.sysDate.hours >= 18)
            {
               if(KTool.getBit(_boxflag,7) == 0 && _loc3_)
               {
                  showPopUp(1);
                  _boxflag = BitUtils.setBit(_boxflag,6);
               }
            }
            else if(KTool.getBit(_boxflag,8) == 0 && _loc3_)
            {
               showPopUp(1);
               _boxflag = BitUtils.setBit(_boxflag,7);
            }
         });
      }
      
      private static function onTick() : void
      {
         --_timer;
         if(_timer <= 0)
         {
            SystemTimerManager.removeTickFun(onTick);
            if(SystemTimerManager.sysDate.hours >= 18)
            {
               if(KTool.getBit(_boxflag,7) == 0)
               {
                  showPopUp(1);
               }
               _boxflag = BitUtils.setBit(_boxflag,6);
            }
            else
            {
               if(KTool.getBit(_boxflag,8) == 0)
               {
                  showPopUp(1);
               }
               _boxflag = BitUtils.setBit(_boxflag,7);
            }
            _intervalId = setInterval(checkBox,60000);
         }
      }
      
      private static function showPopUp(param1:int) : void
      {
         var i:int = param1;
         var show:Function = function():void
         {
            _popupMc.x = 548.55;
            _popupMc.y = 560;
            _popupMc.gotoAndStop(i);
            if(i == 1)
            {
               _countDownComp = new TimeCountdownComponent(_popupMc.tiemTxt,3);
               _countDownComp.initialSeconds = getOverTime();
               _countDownComp.start(hidePopup);
            }
            else
            {
               _popupMc.boxMc.gotoAndStop(_index);
            }
            if(_popupMc != null)
            {
               _popupMc.addEventListener(MouseEvent.CLICK,onMouseClick);
               LevelManager.iconLevel.addChild(_popupMc);
               TweenLite.to(_popupMc,2,{"y":305.75});
            }
         };
         if(_popupMc == null)
         {
            ResourceManager.getResource(ClientConfig.getActiveUrl("ZhakesiSuperEvo_popUp"),function(param1:MovieClip):void
            {
               _popupMc = param1;
               show();
            });
         }
         else
         {
            show();
         }
      }
      
      public static function getOverTime() : uint
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.hours < 18)
         {
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,15) - SystemTimerManager.time;
         }
         return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,20) - SystemTimerManager.time;
      }
      
      private static function hidePopup() : void
      {
         if(_popupMc != null)
         {
            _popupMc.removeEventListener(MouseEvent.CLICK,onMouseClick);
            DisplayUtil.removeForParent(_popupMc);
            _popupMc = null;
         }
         if(_countDownComp != null)
         {
            _countDownComp.destroy();
            _countDownComp = null;
         }
         if(_intervalId != 0 && !isActive())
         {
            clearInterval(_intervalId);
         }
      }
      
      private static function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:Array = null;
         switch(param1.target.name)
         {
            case "goBtn":
               _loc2_ = ["点击全民获得咤克斯弹框【立即前往】按钮","点击宝箱可领取弹框【立即前往】按钮"];
               StatManager.sendStat2014("0805咤克斯超进化放送",_loc2_[param1.target.parent.currentFrame - 1],"2016运营活动");
               ModuleManager.showAppModule("ZhakesiSuperEvoFightUniversePanel");
               hidePopup();
               break;
            case "close":
               hidePopup();
         }
      }
      
      public static function isActive() : Boolean
      {
         return SystemTimerManager.isActive(TIME_VO);
      }
      
      public static function getCountDownNum() : int
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.hours < 13)
         {
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,13) - SystemTimerManager.time;
         }
         if(_loc1_.hours >= 20)
         {
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date + 1,13) - SystemTimerManager.time;
         }
         if(_loc1_.hours < 18)
         {
            return SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,18) - SystemTimerManager.time;
         }
         return 0;
      }
   }
}
