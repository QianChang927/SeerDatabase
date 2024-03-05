package com.robot.app2.component
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.mode.components.EventComponent;
   import flash.display.InteractiveObject;
   import flash.events.MouseEvent;
   
   public class TryFightBossComponent extends EventComponent
   {
       
      
      private var _obj:Object;
      
      private var _func:Function;
      
      private var _preCondition:Function;
      
      public function TryFightBossComponent(param1:InteractiveObject, param2:Object, param3:Function, param4:Function = null)
      {
         super();
         this._obj = param2;
         this._func = param4;
         this._preCondition = param3;
         if(param1 == null)
         {
            throw new Error("交互对象不能为空！");
         }
         super.addClickEvent(param1,this.onFight);
      }
      
      public static function tryFight(param1:int, param2:Array, param3:Function = null) : void
      {
         var bossSn:int = param1;
         var skills:Array = param2;
         var func:Function = param3;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            if(func != null)
            {
               func(param1);
            }
         });
         FightManager.tryFight(bossSn,skills);
      }
      
      private function onFight(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(this._preCondition != null)
         {
            this._preCondition(function():void
            {
               fight();
            },e);
         }
         else
         {
            this.fight();
         }
      }
      
      private function fight() : void
      {
         FightManager.tryFight(this._obj.bossSn,this._obj.skills);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            if(_func != null)
            {
               _func(param1);
            }
         });
      }
   }
}
