package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   
   public class MapProcess_11180 extends BaseMapProcess
   {
       
      
      private var tim:int = 0;
      
      private var _timeInterval:uint = 0;
      
      public function MapProcess_11180()
      {
         super();
      }
      
      override protected function init() : void
      {
         KTool.getMultiValue([100445],function(param1:Array):void
         {
            if(param1[0] != 0)
            {
               tim = SystemTimerManager.time - param1[0];
               if(tim < 120 && tim > 0)
               {
                  addTime(120 - tim);
               }
               else
               {
                  btnLevel["good"].gotoAndStop(3);
               }
            }
            else
            {
               btnLevel["good"].gotoAndStop(1);
            }
         });
         btnLevel.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      override public function destroy() : void
      {
         btnLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         clearInterval(this._timeInterval);
      }
      
      private function addTime(param1:int) : void
      {
         btnLevel["good"].gotoAndStop(2);
         this.tim = param1;
         btnLevel.addEventListener(Event.ENTER_FRAME,this.onEnterFrame);
      }
      
      private function onEnterFrame(param1:Event) : void
      {
         var e:Event = param1;
         btnLevel.removeEventListener(Event.ENTER_FRAME,this.onEnterFrame);
         this._timeInterval = setInterval(function():void
         {
            var _loc1_:* = undefined;
            if(tim < 0)
            {
               clearInterval(_timeInterval);
               btnLevel["good"].gotoAndStop(3);
            }
            else
            {
               _loc1_ = tim % 60 >= 10 ? String(tim % 60) : "0" + String(tim % 60);
               btnLevel["good"]["txt_1"].text = "0" + int(tim / 60) + ":" + _loc1_;
               btnLevel["good"]["mcBar"]["mcBar"].gotoAndStop(int((120 - tim) / 1.2));
            }
            --tim;
         },1000);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "good":
               NpcDialogNew_1.show(2537,["这是一块稀有的洛亚寒铁矿，通过挖掘，有几率出产洛亚寒铁哦！"],["开始挖掘。","过会再挖。"],[function():void
               {
                  SocketConnection.send(42240,1,1);
                  StatManager.sendStat2014("0325唤醒心中的正义","开始采集寒铁","2016运营活动");
                  addTime(120);
               },function():void
               {
               }],false,null);
               break;
            case "award":
               btnLevel["good"].gotoAndStop(1);
               SocketConnection.sendWithCallback(42240,function():void
               {
                  KTool.getBitSet([263],function(param1:Array):void
                  {
                     if(param1[0] == 1)
                     {
                        Alarm.show("很遗憾，没有采集到物品！");
                     }
                  });
               },2,1);
               break;
            case "people":
               NpcDialogNew_1.show(2532,["我已经明白你的来意，如果你能战胜我，我就送你一块秘影宝石。"],["那我不客气啦。","我再准备下。"],[function():void
               {
                  clearInterval(_timeInterval);
                  StatManager.sendStat2014("0325唤醒心中的正义","开始挑战安诺","2016运营活动");
                  FightManager.fightNoMapBoss("安诺",6738,false,true,function():void
                  {
                     SocketConnection.send(CommandID.SYSTEM_TIME);
                  });
               },function():void
               {
               }],false,null);
               break;
            case "exit":
               KTool.changeMapWithCallBack(11181,function():void
               {
               });
         }
      }
   }
}
