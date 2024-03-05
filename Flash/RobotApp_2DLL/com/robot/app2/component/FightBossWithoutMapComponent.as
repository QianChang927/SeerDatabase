package com.robot.app2.component
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.mode.components.EventComponent;
   import flash.display.InteractiveObject;
   import flash.events.MouseEvent;
   
   public class FightBossWithoutMapComponent extends EventComponent
   {
       
      
      private var _obj:Object;
      
      private var _func:Function;
      
      private var _preCondition:Function;
      
      public function FightBossWithoutMapComponent(param1:InteractiveObject, param2:Object, param3:Function, param4:Function = null)
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
      
      private function onFight(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(this._preCondition != null)
         {
            this._preCondition(function():void
            {
               fight();
            });
         }
         else
         {
            this.fight();
         }
      }
      
      private function fight() : void
      {
         FightManager.fightNoMapBoss(this._obj.bossname,this._obj.bossid);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            if(FightManager.currentBossRegion == _obj.bossid)
            {
               if(_func != null)
               {
                  _func();
               }
            }
         });
      }
   }
}
