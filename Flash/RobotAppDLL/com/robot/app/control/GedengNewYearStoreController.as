package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GedengNewYearStoreController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _date:Date;
      
      private static var _set:MovieClip;
      
      private static var _cTime1:CronTimeVo;
      
      private static var _cTime2:CronTimeVo;
       
      
      public function GedengNewYearStoreController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         _set = _map.depthLevel["gedengSet"] as MovieClip;
         _date = SystemTimerManager.sysDate;
         _cTime1 = new CronTimeVo("*","14-20","28-31","12","*","2012");
         _cTime2 = new CronTimeVo("*","14-20","1-10","1","*","2013");
         if(!isPast)
         {
            if(!DisplayUtil.hasParent(_set))
            {
               _map.depthLevel.addChild(_set);
            }
            _set.visible = true;
            _set.buttonMode = true;
            _set.mouseChildren = true;
            _set.addEventListener(MouseEvent.CLICK,onSetClick);
            ToolTipManager.add(_set,"咯噔杂货铺新年大回馈！");
         }
         else
         {
            destroy();
         }
      }
      
      private static function onSetClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GedengNewYearTradePanel"));
      }
      
      public static function get isActiveTime() : Boolean
      {
         if(_cTime1.checkTimeHit(_date) == CronTimeVo.HIT || _cTime2.checkTimeHit(_date) == CronTimeVo.HIT)
         {
            return true;
         }
         return false;
      }
      
      public static function get isIncoming() : Boolean
      {
         if(_cTime1.checkTimeHit(_date) == CronTimeVo.INCOMING)
         {
            return true;
         }
         return false;
      }
      
      public static function get isPast() : Boolean
      {
         if(_cTime2.checkTimeHit(_date) == CronTimeVo.PAST)
         {
            return true;
         }
         return false;
      }
      
      public static function destroy() : void
      {
         if(DisplayUtil.hasParent(_set))
         {
            DisplayUtil.removeForParent(_set);
         }
         ToolTipManager.remove(_set);
         _set.removeEventListener(MouseEvent.CLICK,onSetClick);
      }
   }
}
