package com.robot.app2.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class ReturnLoginIconController
   {
      
      private static var icon:MovieClip;
       
      
      public function ReturnLoginIconController()
      {
         super();
      }
      
      public static function setup2() : void
      {
         var num:uint = 0;
         KTool.getMultiValue([4157,4158,2110],function(param1:Array):void
         {
            var _loc2_:int = 0;
            if(param1[1] == 1)
            {
               _loc2_ = 0;
               while(_loc2_ < 7)
               {
                  num = KTool.getBit(param1[0],_loc2_ + 1);
                  if(num == 0)
                  {
                     LocalMsgController.addLocalMsg("ReFlowLetter");
                  }
                  _loc2_++;
               }
            }
            if(param1[2] == 1)
            {
               icon = UIManager.getMovieClip("ReturnLogin_Icon");
               if(icon != null)
               {
                  TaskIconManager.addIcon(icon,TaskIconManager.LEFT_SIDE);
                  icon.addEventListener(MouseEvent.CLICK,onIconClick);
               }
            }
         });
      }
      
      public static function showReturnLoginPanel() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            KTool.getMultiValue([2110],function(param1:Array):void
            {
               if(BufferRecordManager.getState(MainManager.actorInfo,1092) == false && Boolean(param1[0]))
               {
                  BufferRecordManager.setState(MainManager.actorInfo,1092,true);
                  ModuleManager.showModule(ClientConfig.getAppModule("ReturnLoginSignUpPanel"));
               }
            });
         });
      }
      
      public static function setup(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         returnDo(function(param1:Boolean):void
         {
            if(!param1)
            {
               IconController.hideIcon("ReturnLogin_Icon");
            }
         });
      }
      
      public static function returnDo(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([5898,5899],function(param1:Array):void
         {
            if(func != null)
            {
               func(param1[0] == 2 && param1[1] + 15 * 86400 > SystemTimerManager.time);
            }
         });
      }
      
      public static function changeSpark(param1:uint) : void
      {
      }
      
      private static function onIcon(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ReturnLoginSignUpPanel"));
      }
      
      public static function onIconClick(param1:MovieClip) : void
      {
         ModuleManager.showAppModule("ReturnSummerGetGiftPanel");
      }
   }
}
