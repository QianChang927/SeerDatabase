package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class GaiyaIconControl
   {
      
      private static var _icon:MovieClip;
      
      private static var _leftTime:int;
       
      
      public function GaiyaIconControl()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         _icon = param1;
         _icon.addEventListener(MouseEvent.CLICK,onClick);
         ToolTipManager.add(_icon,"签到送圣甲战神联盟第五技能");
         _icon["txt"].visible = false;
         _icon["getMc"].visible = false;
         _leftTime = 30 * 60 - MainManager.actorInfo.timeToday;
         if(_leftTime > 0)
         {
            SystemTimerManager.addTickFun(onTimer);
         }
         updata();
      }
      
      public static function updata() : void
      {
         KTool.getMultiValue([11505,11506],function(param1:Array):void
         {
            if(param1[0] == 0 || param1[1] == 0 && _leftTime <= 0)
            {
               _icon["getMc"].visible = true;
            }
            else
            {
               _icon["getMc"].visible = false;
            }
         });
      }
      
      protected static function onClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FifthSkillGiftPanel"));
      }
      
      private static function onTimer() : void
      {
         --_leftTime;
         if(_leftTime <= 0)
         {
            SystemTimerManager.removeTickFun(onTimer);
            updata();
            _icon["txt"].visible = false;
            return;
         }
         _icon["txt"].visible = true;
         _icon.txt.text = SystemTimerManager.getTimeClockString(_leftTime,false);
      }
   }
}
