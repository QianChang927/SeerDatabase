package com.robot.app2.mapProcess
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.events.MouseEvent;
   
   public class MapProcess_1222 extends BaseMapProcess
   {
       
      
      public function MapProcess_1222()
      {
         super();
      }
      
      override public function destroy() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
      
      override protected function init() : void
      {
         super.init();
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         if(str == "petBtn_3")
         {
            NpcDialogNew_1.show(NPC.QINGLONGWANQUANTI_NPCHEAD,["吾乃天苍玄魂•青龙，汝前来是要挑战我的神威嘛！"],["神兽大人，我向你发出挑战","我就是路过而已"],[function():void
            {
               ModuleManager.showAppModule("QinglongCompleteBodyMainPanel");
            },null,function():void
            {
            }]);
         }
      }
   }
}
