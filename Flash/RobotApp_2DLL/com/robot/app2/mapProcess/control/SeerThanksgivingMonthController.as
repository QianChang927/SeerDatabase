package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import gs.TweenLite;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SeerThanksgivingMonthController
   {
      
      private static var _ui:MovieClip;
       
      
      public function SeerThanksgivingMonthController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _state:Object = null;
         var so:SharedObject = so = SOManager.getUserSO(SOManager.ACTIVITY);
         if(so.data["SeerThanksgivingMonth_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)])
         {
            return;
         }
         _state = {};
         KTool.getMultiValue([100289,100290,100291,100292],function(param1:Array):void
         {
            var ma:Array = param1;
            KTool.getBitSet([224,225,226,1000153,1000154],function(param1:Array):void
            {
               var _loc2_:int = int([0,1,3,3,3][ma[2]]);
               _state.veteran = {
                  "level":_loc2_,
                  "get":ma[3],
                  "have":param1[4]
               };
               _state.novice = {
                  "can":param1[1],
                  "have":param1[2]
               };
               _state.back = {
                  "level":ma[0],
                  "get":ma[1],
                  "have":param1[3]
               };
               _state.all = {"have":param1[0]};
               var _loc3_:Boolean = false;
               if(_state.veteran.level > _state.veteran.get && !_state.veteran.have)
               {
                  _loc3_ = true;
               }
               if(Boolean(_state.novice.can) && !_state.novice.have)
               {
                  _loc3_ = true;
               }
               if(_state.back.level > _state.back.get && !_state.back.have)
               {
                  _loc3_ = true;
               }
               if(!_state.all.have)
               {
                  _loc3_ = true;
               }
               if(_loc3_)
               {
                  loadUI();
               }
            });
         });
      }
      
      public static function loadUI() : void
      {
         var onClick:Function = null;
         onClick = function(param1:MouseEvent):void
         {
            var _loc2_:SharedObject = _loc2_ = SOManager.getUserSO(SOManager.ACTIVITY);
            _loc2_.data["SeerThanksgivingMonth_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)] = true;
            _loc2_.flush();
            switch(param1.target.name)
            {
               case "go":
                  ModuleManager.showAppModule("SeerThanksgivingMonthPanel");
                  break;
               case "close":
                  DisplayUtil.removeForParent(_ui);
                  onRemove(null);
            }
         };
         var onRemove:Function = function(param1:Event):void
         {
            _ui.removeEventListener(MouseEvent.CLICK,onClick);
         };
         ResourceManager.getResource(ClientConfig.getAppResource("2015/1127/SeerThanksgivingPopup"),function(param1:MovieClip):void
         {
            _ui = param1;
            LevelManager.toolsLevel.addChild(_ui);
            _ui.x = 528;
            _ui.y = 471;
            _ui.addEventListener(MouseEvent.CLICK,onClick);
            TweenLite.from(_ui,1,{"y":560});
         });
      }
   }
}
