package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import flash.events.MouseEvent;
   
   public class MapProcess_1388 extends BaseMapProcess
   {
       
      
      private var _itemNumArr:Array;
      
      private var _daily:int;
      
      private var _arr:Array;
      
      private var _surplusTime:int;
      
      public function MapProcess_1388()
      {
         this._arr = [[26,44,99],[18,61,97],[37,78,106],[29,59,72],[36,89,115],[10,79,98],[5,37,81]];
         super();
      }
      
      private static function onFightOver(param1:*) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      override protected function init() : void
      {
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
            _loc1_++;
         }
         this.update();
         SystemTimerManager.addTickFun(this.onTimer);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         switch(evt.target.name)
         {
            case "closeBtn":
               MapManager.changeMap(1);
               break;
            case "stoneBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("SceneActivities20190712MainPanel"),"正在打开....");
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "jiuerBtn":
               StatManager.sendStat2014("0712场景活动","在1388场景内点击喵九儿","2019运营活动");
               NpcDialog.show(3903,["是谁？"],["..."],[function():void
               {
                  NpcDialog.show(3903,["你...你找我干嘛?"],["我找到了一个金色铃铛，是你的吗？"],[function():void
                  {
                     NpcDialog.show(3903,["铃铛？你找到了我的铃铛？"],["拿出金色铃铛"],[function():void
                     {
                        if(_itemNumArr[2] > 0)
                        {
                           StatManager.sendStat2014("0712场景活动","与喵九儿进入战斗","2019运营活动");
                           FightManager.fightWithBossAndDelItem("",0);
                           FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
                        }
                        else
                        {
                           Alarm2.show("请先拥有金色铃铛后再来寻找喵九儿！");
                        }
                     }],false,null,true);
                  }],false,null,true);
               }],false,null,true);
         }
      }
      
      private function update() : void
      {
         var arr:Array = null;
         arr = [1720323,1720324,1720325];
         ItemManager.updateItems(arr,function():void
         {
            _itemNumArr = new Array();
            var _loc1_:int = 0;
            while(_loc1_ < 3)
            {
               _itemNumArr[_loc1_] = ItemManager.getNumByID(arr[_loc1_]);
               _loc1_++;
            }
         });
         conLevel["jiuerBtn"].visible = false;
      }
      
      private function onTimer() : void
      {
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         this._daily = ActivityTimeControl.getNumberDay(166);
         var _loc1_:int = this._daily % 7 == 0 ? 7 : int(this._daily % 7);
         var _loc2_:Array = this._arr[_loc1_ - 1];
         var _loc3_:Date = SystemTimerManager.sysDate;
         var _loc4_:int = int(SystemTimerManager.getTimeByDate(_loc3_.fullYear,_loc3_.month + 1,_loc3_.date,19,0,0));
         var _loc5_:int = int(SystemTimerManager.time);
         var _loc6_:int;
         if((_loc6_ = SystemTimerManager.time - _loc4_) < 0)
         {
            conLevel["jiuerBtn"].visible = false;
            return;
         }
         var _loc7_:int = -1;
         var _loc8_:int = 0;
         while(_loc8_ < 3)
         {
            if(int(_loc6_ / 60) >= _loc2_[_loc8_] && int(_loc6_ / 60) < _loc2_[_loc8_] + 3)
            {
               _loc7_ = _loc8_;
               break;
            }
            _loc8_++;
         }
         if(_loc7_ >= 0)
         {
            _loc9_ = _loc4_ + _loc2_[_loc7_] * 60;
            _loc10_ = SystemTimerManager.time - _loc9_;
            this._surplusTime = 3 * 60 - _loc10_;
            if(this._surplusTime > 0)
            {
               conLevel["jiuerBtn"].visible = true;
            }
            else
            {
               conLevel["jiuerBtn"].visible = false;
            }
         }
         else
         {
            conLevel["jiuerBtn"].visible = false;
         }
         --this._surplusTime;
      }
      
      private function getTimeClockString(param1:int) : void
      {
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         SystemTimerManager.removeTickFun(this.onTimer);
         super.destroy();
      }
   }
}
