package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.ValuesUpdateComponent;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   
   public class OldSeerReturnBackController
   {
      
      public static const ALL_DAYS:int = 21;
      
      private static var _valueUpdateCom:ValuesUpdateComponent;
      
      private static var _icon:MovieClip;
       
      
      public function OldSeerReturnBackController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
      }
      
      private static function onSwitchMap(param1:* = null) : void
      {
         var e:* = param1;
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         valueUpdateCom.updateValues(function():void
         {
            if(!isOldSeer)
            {
               return;
            }
            if(!BitBuffSetClass.getState(23148))
            {
               ModuleManager.showAppModule("OldSeerReturnFirstPanel");
            }
            BitBuffSetClass.setState(23148,1);
         });
      }
      
      public static function initIcon(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         _icon = icon;
         if(NewSeerTaskController.isNewSeer)
         {
            IconController.hideIcon("OldSeerReturnIcon");
            return;
         }
         if(icon == null)
         {
            return;
         }
         icon.visible = false;
         valueUpdateCom.updateValues(function():void
         {
            if(isOldSeer && leftDays > 0)
            {
               SystemTimerManager.addTickFun(checkIcon);
               icon.visible = true;
            }
            else
            {
               IconController.hideIcon("OldSeerReturnIcon");
            }
         });
      }
      
      private static function checkIcon() : void
      {
         if(leftDays <= 0)
         {
            SystemTimerManager.removeTickFun(checkIcon);
            IconController.hideIcon("OldSeerReturnIcon");
            _icon = null;
         }
      }
      
      private static function get valueUpdateCom() : ValuesUpdateComponent
      {
         if(_valueUpdateCom == null)
         {
            _valueUpdateCom = new ValuesUpdateComponent();
            _valueUpdateCom.forverOrDailyValueIds = [2790,2791,2792,2793];
         }
         return _valueUpdateCom;
      }
      
      public static function get leftDays() : int
      {
         var _loc1_:Date = new Date(_valueUpdateCom.getForverOrDailyValue(2793) * 1000);
         _loc1_ = new Date(_loc1_.fullYear,_loc1_.month,_loc1_.date,0,0,0,0);
         var _loc2_:int = Math.floor((SystemTimerManager.time - _loc1_.time / 1000) / 3600 / 24);
         var _loc3_:int = ALL_DAYS - _loc2_;
         return _loc3_ >= 0 ? _loc3_ : 0;
      }
      
      public static function get isOldSeer() : Boolean
      {
         var _loc1_:int = _valueUpdateCom.getForverOrDailyValue(2791);
         return KTool.getBit(_loc1_,15) != 0;
      }
   }
}
