package com.robot.app.cmd.helper
{
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.AchieveInformInfo;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.bean.BeanManager;
   import org.taomee.manager.EventManager;
   
   public class AchieveCmdFightHelper
   {
      
      public static var isProcessing:Boolean = false;
      
      private static var _type:uint;
      
      private static var _arr:Array;
       
      
      public function AchieveCmdFightHelper()
      {
         super();
      }
      
      public static function init(param1:uint, param2:AchieveInformInfo) : void
      {
         if(!isProcessing)
         {
            _type = param1;
            _arr = [];
            switch(param1)
            {
               case 2:
                  EventManager.addEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onUIClean);
            }
            isProcessing = true;
            _arr.push(param2);
         }
         else if(param1 == _type)
         {
            _arr.push(param2);
         }
      }
      
      private static function onUIClean(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         var handleArray:Function = function():void
         {
            var data:AchieveInformInfo = null;
            var t:uint = 0;
            if(_arr.length > 0)
            {
               data = _arr.shift();
               t = setTimeout(function():void
               {
                  BeanManager.getBeanInstance("AchieveCmdListener").analyseAchieveData(data);
                  handleArray();
                  clearTimeout(t);
               },2000);
            }
            else
            {
               _arr = null;
               isProcessing = false;
            }
         };
         EventManager.removeEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onUIClean);
         handleArray();
      }
   }
}
