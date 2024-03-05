package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1586 extends BaseMapProcess
   {
       
      
      protected var hasNum:int;
      
      public function MapProcess_1586()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick1);
         SystemTimerManager.addTickFun(this.onTimer);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         conLevel["mcc"].gotoAndStop(2);
      }
      
      private function onTimer() : void
      {
         KTool.getMultiValue([125029],function(param1:Array):void
         {
            hasNum = param1[0];
            var _loc2_:int = 1;
            while(_loc2_ <= 4)
            {
               if(KTool.getBit(hasNum,_loc2_ + 8) == 0)
               {
                  btnLevel["flag_" + _loc2_].visible = true;
               }
               else
               {
                  btnLevel["flag_" + _loc2_].visible = false;
               }
               _loc2_++;
            }
         });
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "btnss_" + _loc2_:
               if(_loc2_ == 1)
               {
                  StatManager.sendStat2014("1230失落之翼","点击地图中的电脑1","2022运营活动");
                  ModuleManager.showAppModule("ShiLuoZhiYiS6Panel",1);
               }
               else if(_loc2_ == 2)
               {
                  StatManager.sendStat2014("1230失落之翼","点击地图中的电脑2","2022运营活动");
                  ModuleManager.showAppModule("ShiLuoZhiYiS6Panel",2);
               }
               else if(_loc2_ == 3)
               {
                  StatManager.sendStat2014("1230失落之翼","点击地图中的电脑3","2022运营活动");
                  ModuleManager.showAppModule("ShiLuoZhiYiS6Panel",3);
               }
               else if(_loc2_ == 4)
               {
                  StatManager.sendStat2014("1230失落之翼","点击地图中的电脑4","2022运营活动");
                  ModuleManager.showAppModule("ShiLuoZhiYiS6Panel",4);
               }
         }
      }
      
      public function onMouseClick1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btnss_5":
               StatManager.sendStat2014("1230失落之翼","点击地图中央培养罐","2022运营活动");
               conLevel["mcc"].gotoAndStop(3);
               AnimateManager.playMcAnimate(conLevel["mcc"],3,"ani",function():void
               {
                  DialogControl.showAllDilogs(116,21).then(function():void
                  {
                     conLevel["mcc"].gotoAndStop(1);
                  });
               },false,true);
         }
      }
      
      override public function destroy() : void
      {
         SystemTimerManager.removeTickFun(this.onTimer);
         super.destroy();
      }
   }
}
