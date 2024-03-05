package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class NewSeerLevelGiftController
   {
      
      public static var task:Array = [1099,1100,1101,1102];
      
      public static var level:Array = [15,20,25,30];
      
      private static var _icon:MovieClip;
       
      
      public function NewSeerLevelGiftController()
      {
         super();
      }
      
      public static function showIcon() : void
      {
         if(_icon == null)
         {
            _icon = UIManager.getMovieClip("NewSeerLevelGift_icon");
            _icon.buttonMode = true;
            _icon.cacheAsBitmap = true;
            _icon.mouseChildren = false;
            _icon.gotoAndStop(1);
            _icon.addEventListener(MouseEvent.CLICK,onIconClick);
         }
         TaskIconManager.addIcon(_icon,TaskIconManager.RIGHT_SIDE,7,[50000]);
      }
      
      private static function onIconClick(param1:MouseEvent) : void
      {
         switch(currentGift)
         {
            case 0:
               SocketConnection.send(1022,86048848);
               break;
            case 1:
               SocketConnection.send(1022,86048849);
               break;
            case 2:
               SocketConnection.send(1022,86048850);
               break;
            case 3:
               SocketConnection.send(1022,86048851);
         }
         ModuleManager.showModule(ClientConfig.getAppModule("NewSeerLevelGiftPanel"),"正在打开新手等级礼包....");
      }
      
      public static function updateIcon() : void
      {
         if(canGetCurrentGift)
         {
            _icon.gotoAndPlay(1);
            _icon["txt"].text = "可领取";
         }
         else
         {
            _icon.gotoAndStop(1);
            _icon["txt"].text = level[currentGift] + "级礼包";
         }
         ToolTipManager.add(_icon,level[currentGift] + "级可领取");
      }
      
      public static function destory() : void
      {
         if(_icon)
         {
            _icon.removeEventListener(MouseEvent.CLICK,onIconClick);
            ToolTipManager.remove(_icon);
            TaskIconManager.delIcon(_icon);
            _icon = null;
         }
      }
      
      public static function get isComplete() : Boolean
      {
         var _loc1_:uint = task.length;
         var _loc2_:uint = 0;
         while(_loc2_ < _loc1_)
         {
            if(TasksManager.getTaskStatus(task[_loc2_]) != TasksManager.COMPLETE)
            {
               return false;
            }
            _loc2_++;
         }
         return true;
      }
      
      public static function get currentGift() : uint
      {
         var _loc1_:uint = task.length;
         var _loc2_:uint = 0;
         while(_loc2_ < _loc1_)
         {
            if(TasksManager.getTaskStatus(task[_loc2_]) != TasksManager.COMPLETE)
            {
               return _loc2_;
            }
            _loc2_++;
         }
         return 0;
      }
      
      public static function get canGetCurrentGift() : Boolean
      {
         if(MainManager.actorInfo.petMaxLev >= level[currentGift])
         {
            return true;
         }
         return false;
      }
   }
}
