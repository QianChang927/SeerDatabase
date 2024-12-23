package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   
   public class MapProcess_11921 extends BaseMapProcess
   {
       
      
      protected var isUpdata:*;
      
      protected var _curBossId:int;
      
      protected var _bossIdArr:Array;
      
      protected var _curIndex:int;
      
      protected var _passTime:int;
      
      protected var _timer:Timer;
      
      public function MapProcess_11921()
      {
         this._bossIdArr = [18703,18704];
         super();
      }
      
      override protected function init() : void
      {
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.topLevel.mouseChildren = this.topLevel.mouseEnabled = false;
         this.update();
         this._timer = new Timer(60000);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimerEvent);
         this._timer.start();
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         KTool.getMultiValue([11914,11915,11916],function(param1:Array):void
         {
            var winNum:int;
            var i:int;
            var va:Array = param1;
            if(BitUtils.getBit(va[1],0) == 0)
            {
               KTool.socketSendCallBack(45850,function():void
               {
                  update();
               },[32,1]);
            }
            _curBossId = va[0];
            _passTime = SystemTimerManager.time - va[2];
            _curIndex = _bossIdArr.indexOf(_curBossId);
            winNum = int(KTool.subByte(va[1],8,8));
            i = 0;
            while(i < 2)
            {
               if(winNum >= 12)
               {
                  btnLevel["flag_" + i].visible = false;
                  btnLevel["btn_" + i].mouseEnabled = false;
               }
               else if(i == _curIndex)
               {
                  if(_passTime > 300)
                  {
                     btnLevel["flag_" + i].visible = true;
                  }
                  else
                  {
                     btnLevel["flag_" + i].visible = false;
                  }
                  btnLevel["btn_" + i].mouseEnabled = true;
               }
               else
               {
                  btnLevel["flag_" + i].visible = false;
                  btnLevel["btn_" + i].mouseEnabled = false;
               }
               i++;
            }
         });
      }
      
      private function onTimerEvent(param1:TimerEvent) : void
      {
         this.update();
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_" + index:
               if(this._passTime > 300)
               {
                  FightManager.fightNoMapBoss("",this._curBossId,false,true,function():void
                  {
                     KTool.getMultiValue([11914,11915,11916],function(param1:Array):void
                     {
                        var _loc2_:int = int(KTool.subByte(param1[1],8,8));
                        if(_loc2_ >= 12)
                        {
                           Alarm2.show("你已完成了今天的挑战，请明天再来！");
                        }
                     });
                  });
               }
               else
               {
                  Alarm2.show("你已经完成了本轮对战，每次战胜5分钟后将开启下一轮，请稍后再来！");
               }
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               PetManager.currencyCureAll();
               break;
            case "closeBtn":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showAppModule("AncestralGiantVsSnowMountainGiantMainPanel");
               });
         }
      }
      
      override public function destroy() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         this._timer.removeEventListener(TimerEvent.TIMER,this.onTimerEvent);
         super.destroy();
      }
   }
}
