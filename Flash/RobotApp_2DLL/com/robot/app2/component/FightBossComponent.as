package com.robot.app2.component
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.mode.components.EventComponent;
   import flash.display.InteractiveObject;
   import flash.events.MouseEvent;
   
   public class FightBossComponent extends EventComponent
   {
       
      
      private var _obj:Object;
      
      private var _func:Function;
      
      private var _preCondition:Function;
      
      public function FightBossComponent(param1:InteractiveObject, param2:Object, param3:Function, param4:Function = null, param5:Boolean = false)
      {
         super();
         this._obj = param2;
         this._func = param4;
         this._preCondition = param3;
         if(param1 == null)
         {
            throw new Error("交互对象不能为空！");
         }
         if(param5)
         {
            super.addClickEvent(param1,this.onFightWithReturnEvent);
         }
         else
         {
            super.addClickEvent(param1,this.onFight);
         }
      }
      
      public static function fightNoMapBoss(param1:int, param2:String, param3:Function = null) : void
      {
         var bossId:int = param1;
         var bossName:String = param2;
         var func:Function = param3;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            if(FightManager.currentBossRegion == bossId)
            {
               if(func != null)
               {
                  func(param1);
               }
            }
         });
         FightManager.fightNoMapBoss(bossName,bossId);
      }
      
      private function onFightWithReturnEvent(param1:MouseEvent) : void
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
                  _func(param1);
               }
            }
         });
      }
   }
}
