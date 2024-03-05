package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.events.MouseEvent;
   
   public class MapProcess_1271 extends BaseMapProcess
   {
       
      
      public function MapProcess_1271()
      {
         super();
      }
      
      override protected function init() : void
      {
         var _loc1_:int = 0;
         super.init();
         conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         if(ActivityTimeControl.getIsinTime(52))
         {
            this.showItem();
         }
         else
         {
            _loc1_ = 0;
            while(_loc1_ < 3)
            {
               conLevel["item_" + _loc1_].visible = false;
               _loc1_++;
            }
         }
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var ename:String = String(event.target.name);
         var index:int = int(ename.split("_")[1]);
         switch(event.target.name)
         {
            case "item_" + index:
               if(!BitBuffSetClass.getState(23556))
               {
                  BitBuffSetClass.setState(23556,1);
                  ModuleManager.showAppModule("ChristmasDayPetTipPanel");
                  SocketConnection.sendByQueue(43751,[5,index + 1],function():void
                  {
                     showItem();
                  });
                  return;
               }
               SocketConnection.sendByQueue(43751,[5,index + 1],function():void
               {
                  showItem();
               });
               break;
         }
      }
      
      private function showItem() : void
      {
         KTool.getMultiValue([102959,102960,102961],function(param1:Array):void
         {
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            while(_loc3_ < 3)
            {
               _loc2_ = param1[_loc3_] + 60 * 3 - SystemTimerManager.time;
               if(_loc2_ > 0)
               {
                  conLevel["item_" + _loc3_].visible = false;
               }
               else
               {
                  conLevel["item_" + _loc3_].visible = true;
               }
               _loc3_++;
            }
         });
      }
   }
}
