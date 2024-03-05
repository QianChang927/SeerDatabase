package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SongOfLifeController
   {
      
      private static var _daiy:int = 1;
      
      private static var _date:Date = new Date(2017,0,13);
      
      private static var _curDayIndex:int;
      
      public static var icon:MovieClip;
       
      
      public function SongOfLifeController()
      {
         super();
      }
      
      public static function loaderIcon() : void
      {
         _daiy = int(timeAway() / (24 * 60 * 60) + 1);
         _curDayIndex = _daiy % 7 > 0 ? int(_daiy % 7) : 7;
         KTool.getMultiValue([6757],function(param1:Array):void
         {
            var va1:Array = param1;
            KTool.getBitSet([2000027],function(param1:Array):void
            {
               var va2:Array = param1;
               if(BitUtils.getBit(va1[0],_curDayIndex - 1) <= 0 || va2[0] <= 0)
               {
                  ResourceManager.getResource(ClientConfig.getUiIcon("SongOfLifeIcon"),function(param1:MovieClip):void
                  {
                     var frame:int = 0;
                     var appNameArr:Array = null;
                     var $icon:MovieClip = param1;
                     icon = $icon;
                     icon.x = 793;
                     icon.y = 70;
                     icon.name = "svensbicon";
                     frame = va2[0] > 0 ? 2 : 1;
                     icon.gotoAndStop(frame);
                     appNameArr = ["My2017WinterHolidaySpreeMainPanel","My2017WinterHolidaySpreeCheckInPanel"];
                     icon.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                     {
                        ModuleManager.showAppModule(appNameArr[frame - 1]);
                     });
                     LevelManager.toolsLevel.addChildAt(icon,0);
                  },"SongOfLifeIcon");
               }
            });
         });
      }
      
      protected static function timeAway() : int
      {
         var _loc1_:Number = Number(SystemTimerManager.time);
         return int((_loc1_ * 1000 - _date.time) * 0.001);
      }
      
      public static function destroy() : void
      {
         DisplayUtil.removeForParent(icon);
         icon.stop();
         icon = null;
      }
   }
}
