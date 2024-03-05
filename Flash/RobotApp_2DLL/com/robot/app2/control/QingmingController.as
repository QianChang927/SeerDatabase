package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class QingmingController
   {
      
      private static var _ui:MovieClip;
      
      private static var utime:uint;
       
      
      public function QingmingController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:SharedObject = _loc1_ = SOManager.getUserSO(SOManager.ACTIVITY);
         if(_loc1_.data["Qingmingcollection_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)])
         {
            return;
         }
         loadUI();
      }
      
      public static function loadUI() : void
      {
         var onClick:Function = null;
         var onRemove:Function = null;
         onClick = function(param1:MouseEvent):void
         {
            var _loc2_:SharedObject = _loc2_ = SOManager.getUserSO(SOManager.ACTIVITY);
            _loc2_.data["Qingmingcollection_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)] = true;
            _loc2_.flush();
            switch(param1.target.name)
            {
               case "go":
                  onRemove(null);
                  ModuleManager.showAppModule("QingmingCollectionPanel");
                  break;
               case "close":
                  onRemove(null);
            }
         };
         onRemove = function(param1:Event = null):void
         {
            clearTimeout(utime);
            _ui.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_ui);
         };
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0401/qingminglogin"),function(param1:MovieClip):void
         {
            _ui = param1;
            LevelManager.appLevel.addChild(_ui);
            _ui.x = 69.75;
            _ui.y = 8.2;
            _ui.addEventListener(MouseEvent.CLICK,onClick);
            utime = setTimeout(onRemove,1000 * 60);
         });
      }
   }
}
