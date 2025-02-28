package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1715 extends BaseMapProcess
   {
       
      
      private var _originData:uint = 0;
      
      public function MapProcess_1715()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         animatorLevel.mouseChildren = false;
         animatorLevel.mouseEnabled = false;
         conLevel.addEventListener(MouseEvent.CLICK,this.onConclickHandle);
      }
      
      private function onConclickHandle(param1:MouseEvent) : void
      {
         var _loc4_:int = 0;
         var _loc2_:String = String(param1.target.name);
         var _loc3_:int = int(KTool.getIndex(param1.target));
         switch(_loc2_)
         {
            case "npc":
               ModuleManager.showModule(ClientConfig.getAppModule("Yearvip2025MainPanel"));
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConclickHandle);
         super.destroy();
      }
   }
}
