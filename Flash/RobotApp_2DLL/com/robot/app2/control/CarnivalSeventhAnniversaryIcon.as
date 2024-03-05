package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   
   public class CarnivalSeventhAnniversaryIcon
   {
      
      private static const LIMIT_LIST:Array = [7,30,100,365,730,1000];
      
      private static const FOR_LIST:Array = [1144];
       
      
      public function CarnivalSeventhAnniversaryIcon()
      {
         super();
      }
      
      public static function checkForVisible(param1:MovieClip) : void
      {
         var curTime:uint = 0;
         var _totalDays:int = 0;
         var actStartDate:Date = null;
         var actEndDate:Date = null;
         var icon:MovieClip = param1;
         var registTime:uint = uint(MainManager.actorInfo.regTime);
         curTime = uint(SystemTimerManager.time);
         _totalDays = (curTime - registTime) / 86400;
         actStartDate = new Date(2016,6 - 1,8,0,0,0);
         actEndDate = new Date(2016,6 - 1,16,23,59,59);
         KTool.getMultiValue(FOR_LIST,function callBack(param1:Array):void
         {
            if(curTime * 1000 < actStartDate.time || curTime * 1000 > actEndDate.time)
            {
               IconController.hideIcon("CarnivalAnniversary");
               return;
            }
            var _loc2_:int = 0;
            var _loc3_:Boolean = false;
            _loc2_ = 0;
            while(_loc2_ < 6)
            {
               if(KTool.getBit(param1[0],_loc2_ + 1) == 0 && _totalDays >= LIMIT_LIST[_loc2_])
               {
                  _loc3_ = true;
                  icon.x = 830;
                  icon.y = 150;
                  break;
               }
               _loc2_++;
            }
            if(!_loc3_)
            {
               IconController.hideIcon("CarnivalAnniversary");
            }
         });
      }
   }
}
