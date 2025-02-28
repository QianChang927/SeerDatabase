package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   
   public class MapProcess_1660 extends BaseMapProcess
   {
       
      
      private var _count:int;
      
      public function MapProcess_1660()
      {
         super();
      }
      
      override protected function init() : void
      {
         EventManager.addEventListener("FefreshMap",this.refreshHandle);
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         conLevel["mc"].visible = false;
         this._count = 0;
         KTool.getMultiValue([121596],function(param1:Array):void
         {
            var _loc2_:int = 1;
            while(_loc2_ <= 6)
            {
               if(KTool.getBit(param1[0],_loc2_) == 1)
               {
                  ++_count;
               }
               _loc2_++;
            }
            if(_count < 6)
            {
               conLevel["btn_2"].visible = false;
            }
            else
            {
               conLevel["btn_2"].visible = true;
            }
         });
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "btn_2":
               ModuleManager.showAppModule("OldCastleClueS2Panel",31);
               break;
            case "btn_3":
               ModuleManager.showAppModule("OldCastleClueS2Panel",42);
               break;
            case "btn_4":
               ModuleManager.showAppModule("TheGoldenCompassMainPanel");
         }
      }
      
      private function refreshHandle(param1:Event) : void
      {
         this.update();
      }
      
      override public function destroy() : void
      {
         EventManager.removeEventListener("FefreshMap",this.refreshHandle);
         this.conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
