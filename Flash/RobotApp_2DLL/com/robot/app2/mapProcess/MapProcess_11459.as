package com.robot.app2.mapProcess
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_11459 extends BaseMapProcess
   {
       
      
      private var _indexArr:Array;
      
      private var _Len1:int;
      
      private var _Len2:int;
      
      public function MapProcess_11459()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         this.conLevel["npcMc_0"].buttonMode = true;
         this.conLevel["npcMc_1"].buttonMode = true;
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "npcMc_0":
               ModuleManager.showModule(ClientConfig.getAppModule("TheBattleOfTheCentury2017MainPanel"),"正在打开....");
               break;
            case "npcMc_1":
               ModuleManager.showModule(ClientConfig.getAppModule("TheBattleOfTheCentury2017MainPanel"),"正在打开....");
         }
      }
      
      override public function destroy() : void
      {
         this.conLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         super.destroy();
      }
   }
}
