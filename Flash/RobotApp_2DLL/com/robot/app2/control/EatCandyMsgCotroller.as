package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.BonusEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class EatCandyMsgCotroller
   {
      
      private static var todayIsShow:Boolean;
       
      
      public function EatCandyMsgCotroller()
      {
         super();
      }
      
      public static function start() : void
      {
         EventManager.addEventListener(BonusEvent.BONUS_RECEIVE,onShowMsg);
      }
      
      private static function onShowMsg(param1:BonusEvent) : void
      {
         var _loc2_:Object = null;
         for each(_loc2_ in param1.info.itemList)
         {
            if(_loc2_.id == 1707661)
            {
               showPanelOncePerDay();
               EventManager.removeEventListener(BonusEvent.BONUS_RECEIVE,onShowMsg);
               break;
            }
         }
      }
      
      private static function showPanelOncePerDay() : void
      {
         var _loc1_:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
         var _loc2_:String = "EatCandyMsgPanel";
         _loc2_ += "_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate);
         if(_loc1_.data[_loc2_] == undefined)
         {
            _loc1_.data[_loc2_] = true;
            _loc1_.flush();
            showMsg();
         }
      }
      
      private static function showMsg() : void
      {
         ResourceManager.getResource(ClientConfig.getResPath("appRes/2015/1225/EatCandyMsg.swf"),function(param1:DisplayObject):void
         {
            var _MsgPanel:MovieClip = null;
            var onAlarmClick:Function = null;
            var obj:DisplayObject = param1;
            onAlarmClick = function(param1:MouseEvent):void
            {
               var _loc2_:SimpleButton = param1.target as SimpleButton;
               if(_loc2_)
               {
                  _MsgPanel.removeEventListener(MouseEvent.CLICK,onAlarmClick);
                  DisplayUtil.removeForParent(_MsgPanel);
                  _MsgPanel = null;
                  if(_loc2_.name == "goBtn")
                  {
                     ModuleManager.showAppModule("EatCandyGiftPanel");
                  }
               }
            };
            _MsgPanel = obj as MovieClip;
            _MsgPanel.addEventListener(MouseEvent.CLICK,onAlarmClick);
            MainManager.getStage().addChild(_MsgPanel);
         });
      }
   }
}
