package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.events.MouseEvent;
   
   public class MapProcess_11521 extends BaseMapProcess
   {
       
      
      private var _indexArr:Array;
      
      private var _Len1:int;
      
      private var _Len2:int;
      
      private var _itemNum:int;
      
      private var _num:int;
      
      private var _appNameArr:Array;
      
      private var _npcIdArr:Array;
      
      public function MapProcess_11521()
      {
         this._appNameArr = ["TheGodOfDreamsMainPanel","MoDiXiSiCompMainPanel","AluonasiCompleteMainPanel","GodOffearMainPanel"];
         this._npcIdArr = [NPC.HEERMOSI,NPC.MODIXISI,NPC.ALUONASI,NPC.ARUIBOSI];
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         this.update();
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(KTool.getIndex(param1.target));
         switch(param1.target.name)
         {
            case "btn_" + _loc2_:
               ModuleManager.showAppModule(this._appNameArr[_loc2_]);
         }
      }
      
      private function update() : void
      {
      }
      
      override public function destroy() : void
      {
         this.conLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         super.destroy();
      }
   }
}
