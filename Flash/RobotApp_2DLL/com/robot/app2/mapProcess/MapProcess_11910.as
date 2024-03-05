package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   
   public class MapProcess_11910 extends BaseMapProcess
   {
       
      
      protected var curTime:Date;
      
      protected var curXs:int;
      
      protected var curFz:int;
      
      protected var curBit1:int;
      
      protected var curBit2:int;
      
      protected var curBitNum:int;
      
      protected var curCount:int;
      
      public function MapProcess_11910()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         SystemTimerManager.addTickFun(this.timeHandle);
         if(BitBuffSetClass.getState(24063) == 0)
         {
            this.playAnimation();
         }
         else
         {
            this.update();
         }
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         KTool.getMultiValue([207022,207023],function(param1:Array):void
         {
            curBit1 = param1[0];
            curBit2 = param1[1];
         });
         if(this.curXs != 13 && this.curXs != 19 && this.curXs != 12 && this.curXs != 18)
         {
            btnLevel["flag_1"].visible = false;
            btnLevel["flag_2"].visible = false;
         }
         else
         {
            this.curCount = this.curFz / 5 + 1;
            if(this.curCount % 2 != 0)
            {
               btnLevel["flag_1"].visible = false;
               btnLevel["flag_2"].visible = true;
               btnLevel["btn_1"].mouseEnabled = false;
               btnLevel["btn_2"].mouseEnabled = true;
            }
            else
            {
               btnLevel["flag_1"].visible = true;
               btnLevel["flag_2"].visible = false;
               btnLevel["btn_1"].mouseEnabled = true;
               btnLevel["btn_2"].mouseEnabled = false;
            }
            if(this.curXs == 12 || this.curXs == 18)
            {
               this.curBitNum = this.curCount;
            }
            else
            {
               this.curBitNum = this.curCount + 12;
            }
         }
      }
      
      private function timeHandle() : void
      {
         this.curTime = SystemTimerManager.sysBJDate;
         this.curXs = this.curTime.getHours();
         this.curFz = this.curTime.getMinutes();
         this.update();
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_1":
               if(this.curXs != 13 && this.curXs != 19 && this.curXs != 12 && this.curXs != 18)
               {
                  NpcDialog.show(4422,["我们必须抵挡住暴雪，不能让普兰多雪上加霜了！小赛尔，每天0xff000012:00-14:000xffffff和0xff000018:00-20:000xffffff，你愿意来帮忙吗？"],["好的，我一定来！"],[function():void
                  {
                  }],false,null,true);
               }
               else if(this.curXs == 12 || this.curXs == 13)
               {
                  if(KTool.getBit(this.curBit1,this.curBitNum) == 1)
                  {
                     Alarm.show("你已经完成了本轮对战，每5分钟一轮，请稍后再来！",function():void
                     {
                        KTool.changeMapWithCallBack(1597,function():void
                        {
                           ModuleManager.showAppModule("IceSheetDuelGoToMapPanel");
                        });
                     });
                  }
                  else
                  {
                     SocketConnection.sendByQueue(41277,[18,2],function(param1:*):void
                     {
                        var e:* = param1;
                        FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                        {
                           FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                        });
                     });
                  }
               }
               else if(KTool.getBit(this.curBit2,this.curBitNum) == 1)
               {
                  Alarm.show("你已经完成了本轮对战，每5分钟一轮，请稍后再来！",function():void
                  {
                     KTool.changeMapWithCallBack(1597,function():void
                     {
                        ModuleManager.showAppModule("IceSheetDuelGoToMapPanel");
                     });
                  });
               }
               else
               {
                  SocketConnection.sendByQueue(41277,[18,2],function(param1:*):void
                  {
                     var e:* = param1;
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                     {
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     });
                  });
               }
               break;
            case "btn_2":
               if(this.curXs != 13 && this.curXs != 19 && this.curXs != 12 && this.curXs != 18)
               {
                  NpcDialog.show(4479,["只有暴风和冰雪才能教会他们什么事情该做，什么事情不该做！每天0xff000012:00-14:000xffffff和0xff000018:00-20:000xffffff，我在这里等着你们！"],["冷静，暴力无法解决任何问题！"],[function():void
                  {
                  }],false,null,true);
               }
               else if(this.curXs == 12 || this.curXs == 13)
               {
                  if(KTool.getBit(this.curBit1,this.curBitNum) == 1)
                  {
                     Alarm.show("你已经完成了本轮对战，每5分钟一轮，请稍后再来！",function():void
                     {
                        KTool.changeMapWithCallBack(1597,function():void
                        {
                           ModuleManager.showAppModule("IceSheetDuelGoToMapPanel");
                        });
                     });
                  }
                  else
                  {
                     SocketConnection.sendByQueue(41277,[18,1],function(param1:*):void
                     {
                        var e:* = param1;
                        FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                        {
                           FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                        });
                     });
                  }
               }
               else if(KTool.getBit(this.curBit2,this.curBitNum) == 1)
               {
                  Alarm.show("你已经完成了本轮对战，每5分钟一轮，请稍后再来！",function():void
                  {
                     KTool.changeMapWithCallBack(1597,function():void
                     {
                        ModuleManager.showAppModule("IceSheetDuelGoToMapPanel");
                     });
                  });
               }
               else
               {
                  SocketConnection.sendByQueue(41277,[18,1],function(param1:*):void
                  {
                     var e:* = param1;
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                     {
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                     });
                  });
               }
               break;
            case "close":
               ModuleManager.showAppModule("ColdWindInsideOfDuelMainPanel");
         }
      }
      
      private function playAnimation() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("ColdWindInsideOfDuelS1"),this.stopPlaying);
      }
      
      private function stopPlaying() : void
      {
         BitBuffSetClass.setState(24063,1);
         this.update();
      }
      
      override public function destroy() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         SystemTimerManager.removeTickFun(this.timeHandle);
         super.destroy();
      }
   }
}
