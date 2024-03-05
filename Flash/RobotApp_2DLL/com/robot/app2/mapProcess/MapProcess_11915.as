package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import flash.events.MouseEvent;
   
   public class MapProcess_11915 extends BaseMapProcess
   {
       
      
      protected var curCount:int;
      
      protected var m_timeBit:uint;
      
      protected var curTime:Date;
      
      protected var tempIndex:int;
      
      protected var curHours:int;
      
      public function MapProcess_11915()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         btnLevel["aniMc1"].visible = false;
         btnLevel["aniMc2"].visible = false;
         KTool.getMultiValue([10970,10974],function(param1:Array):void
         {
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            var _loc4_:int = 0;
            var _loc5_:int = 0;
            var _loc6_:int = 0;
            curCount = param1[0];
            m_timeBit = param1[1];
            curTime = SystemTimerManager.sysBJDate;
            curHours = curTime.getHours();
            if(curHours >= 10 && curHours < 12)
            {
               if(KTool.getBit(m_timeBit,16) == 0)
               {
                  _loc3_ = 1;
                  while(_loc3_ <= 15)
                  {
                     btnLevel["mc_" + _loc3_].visible = false;
                     _loc3_++;
                  }
                  playAnimation();
                  return;
               }
               _loc2_ = 1;
               while(_loc2_ <= 15)
               {
                  if(KTool.getBit(m_timeBit,_loc2_) == 1)
                  {
                     btnLevel["mc_" + _loc2_].visible = true;
                     btnLevel["mc_" + _loc2_]["flag"].visible = false;
                  }
                  else
                  {
                     btnLevel["mc_" + _loc2_].visible = false;
                  }
                  _loc2_++;
               }
            }
            else if(curHours >= 18 && curHours < 20)
            {
               if(KTool.getBit(m_timeBit,32) == 0)
               {
                  _loc5_ = 1;
                  while(_loc5_ <= 15)
                  {
                     btnLevel["mc_" + _loc5_].visible = false;
                     _loc5_++;
                  }
                  playAnimation();
                  return;
               }
               _loc4_ = 17;
               while(_loc4_ <= 31)
               {
                  if(KTool.getBit(m_timeBit,_loc4_) == 1)
                  {
                     btnLevel["mc_" + (_loc4_ - 16)].visible = true;
                     btnLevel["mc_" + (_loc4_ - 16)]["flag"].visible = false;
                  }
                  else
                  {
                     btnLevel["mc_" + (_loc4_ - 16)].visible = false;
                  }
                  _loc4_++;
               }
            }
            else
            {
               _loc6_ = 1;
               while(_loc6_ <= 15)
               {
                  btnLevel["mc_" + _loc6_].visible = false;
                  _loc6_++;
               }
            }
         });
      }
      
      private function playAnimation() : void
      {
         btnLevel["aniMc1"].visible = true;
         btnLevel["aniMc2"].visible = true;
         AnimateManager.playMcAnimate(btnLevel["aniMc2"],1,"ani2",this.stopPlaying);
      }
      
      private function stopPlaying() : void
      {
         btnLevel["aniMc1"].visible = false;
         btnLevel["aniMc2"].visible = false;
         SocketConnection.sendByQueue(43330,[1,4],function(param1:*):void
         {
            update();
         });
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "close":
               ModuleManager.showAppModule("SpringFestivalRedEnvelopeMainPanel");
               break;
            case "btn":
               this.curTime = SystemTimerManager.sysBJDate;
               this.curHours = this.curTime.getHours();
               if(this.curHours >= 10 && this.curHours < 12 || this.curHours >= 18 && this.curHours < 20)
               {
                  this.tempIndex = param1.target.parent.name.split("_")[1];
                  if(this.curCount >= 10)
                  {
                     Alarm.show("今日可拾取红包数量已达上限，请明日再来!");
                  }
                  else
                  {
                     this.playAnimation1();
                  }
               }
               else
               {
                  Alarm2.show("红包雨尚未开启！");
               }
         }
      }
      
      private function playAnimation1() : void
      {
         btnLevel["mc_" + this.tempIndex]["flag"].visible = true;
         AnimateManager.playMcAnimate(btnLevel["mc_" + this.tempIndex],1,"flag",this.stopPlaying1);
      }
      
      private function stopPlaying1() : void
      {
         SocketConnection.sendByQueue(43330,[2,this.tempIndex],function(param1:*):void
         {
            update();
         });
      }
   }
}
