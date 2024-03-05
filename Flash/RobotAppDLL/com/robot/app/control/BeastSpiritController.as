package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BeastSpiritController
   {
      
      private static var _icon:SimpleButton;
      
      private static var _beasts:Array = [["青龙朵拉格","朵拉格"],["白虎泰格尔","泰格尔"],["朱雀菲尼克斯","菲尼克斯"],["玄武巴斯特","巴斯特"]];
      
      private static var _currentIndex:uint = 0;
       
      
      public function BeastSpiritController()
      {
         super();
      }
      
      public static function setup() : void
      {
         _icon = UIManager.getButton("beastSpirit");
         _icon.visible = true;
         _icon.cacheAsBitmap = true;
         _icon.addEventListener(MouseEvent.CLICK,onIconClick);
         TaskIconManager.addIcon(_icon,TaskIconManager.LEFT,4);
         ToolTipManager.add(_icon,"野兽之灵");
      }
      
      private static function onIconClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("beastSpirit/BeastSpiritMainPanel"));
      }
      
      private static function isActive() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.fullYearUTC == 2013 && _loc1_.monthUTC == 3 && _loc1_.dayUTC >= 1 && _loc1_.dayUTC <= 28)
         {
            return true;
         }
         return false;
      }
      
      public static function hide() : void
      {
         if(_icon)
         {
            _icon.removeEventListener(MouseEvent.CLICK,onIconClick);
            ToolTipManager.remove(_icon);
            TaskIconManager.delIcon(_icon);
            DisplayUtil.removeForParent(_icon);
            _icon = null;
         }
      }
      
      public static function get beasts() : Array
      {
         return _beasts;
      }
      
      public static function get beastIndex() : uint
      {
         return _currentIndex;
      }
      
      public static function set beastIndex(param1:uint) : void
      {
         _currentIndex = param1;
      }
   }
}
