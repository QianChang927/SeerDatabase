package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class OpenSchoolSendGiftController
   {
      
      private static var _icon:MovieClip;
      
      private static var _active:uint;
      
      private static var _leftTime:int;
      
      private static const getMins:Array = [0,10,20,30,30];
      
      private static const _url:String = "OpenSchoolSendGiftIcon";
      
      public static const FOREVERID:uint = 8589;
       
      
      public function OpenSchoolSendGiftController()
      {
         super();
      }
      
      public static function setup() : void
      {
         EventManager.addEventListener("allIconParsed",onStart);
      }
      
      private static function onStart(param1:Event) : void
      {
         var e:Event = param1;
         EventManager.removeEventListener("allIconParsed",onStart);
         getIconStatuse(function():void
         {
            if(_active < 31)
            {
               if(_icon == null)
               {
                  ResourceManager.getResource(ClientConfig.getUiIcon(_url),function(param1:MovieClip):void
                  {
                     _icon = param1;
                     initIcon();
                  },_url);
               }
               else
               {
                  initIcon();
               }
            }
         });
      }
      
      private static function initIcon() : void
      {
         if(_icon.parent == null)
         {
            LevelManager.iconLevel.addChild(_icon);
            _icon.x = 799;
            _icon.y = 62;
         }
         _icon.visible = false;
         _icon.addEventListener(MouseEvent.CLICK,onClick);
         ToolTipManager.add(_icon,"迎春有好礼 千钻大放送");
         refreshCDTime();
      }
      
      public static function refreshCDTime() : void
      {
         var _onLineTime:uint = 0;
         var curReward:uint = 0;
         _onLineTime = uint(MainManager.actorInfo.onlineTime);
         getIconStatuse(function():void
         {
            var _loc2_:* = false;
            var _loc1_:int = 0;
            while(_loc1_ < 5)
            {
               _loc2_ = BitUtils.getBit(_active,_loc1_) > 0;
               if(!_loc2_)
               {
                  _icon.gotoAndStop(getMins[_loc1_] * 60 <= _onLineTime ? 1 : 2);
                  curReward = _loc1_;
                  break;
               }
               _loc1_++;
            }
            if(_icon.currentFrame == 2)
            {
               _leftTime = getMins[curReward] * 60 - _onLineTime;
               SystemTimerManager.addTickFun(onCDtime);
            }
         });
      }
      
      private static function onCDtime() : void
      {
         --_leftTime;
         if(_leftTime < 1)
         {
            SystemTimerManager.removeTickFun(onCDtime);
            refreshCDTime();
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("OpenSchoolSendGiftPanel");
      }
      
      public static function getIconStatuse(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([FOREVERID],function(param1:Array):void
         {
            _active = param1[0];
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function destrogyIcon() : void
      {
         SystemTimerManager.removeTickFun(onCDtime);
         if(_icon)
         {
            _icon.removeEventListener(MouseEvent.CLICK,onClick);
            ToolTipManager.remove(_icon);
            DisplayUtil.removeForParent(_icon);
            _icon = null;
         }
      }
   }
}
