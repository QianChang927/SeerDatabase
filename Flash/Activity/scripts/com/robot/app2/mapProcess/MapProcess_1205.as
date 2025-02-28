package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.DataEvent;
   import flash.events.MouseEvent;
   
   public class MapProcess_1205 extends BaseMapProcess
   {
       
      
      public function MapProcess_1205()
      {
         super();
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
      
      override protected function init() : void
      {
         super.init();
      }
      
      private function refresh() : void
      {
         KTool.getMultiValue([14254],function(param1:Array):void
         {
            var _loc2_:int = 0;
            while(_loc2_ < 5)
            {
               if(KTool.getBit(param1[0],_loc2_ + 1) == 0)
               {
                  btnLevel["btn_" + _loc2_].visible = true;
                  btnLevel["btn_" + _loc2_].addEventListener(MouseEvent.CLICK,onClick);
               }
               else
               {
                  btnLevel["btn_" + _loc2_].visible = false;
                  btnLevel["btn_" + _loc2_].removeEventListener(MouseEvent.CLICK,onClick);
               }
               _loc2_++;
            }
         });
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.replace("btn_",""));
         ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,this.onModuleClose);
         ModuleManager.showAppModule("ZhutiJinglingPeiTaoHughQuestionPanel",_loc2_);
      }
      
      private function onModuleClose(param1:DataEvent) : void
      {
         ModuleManager.removeListener(ModuleManager.MODEL_CLOSE,this.onModuleClose);
         this.refresh();
      }
   }
}
