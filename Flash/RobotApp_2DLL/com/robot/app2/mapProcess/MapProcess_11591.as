package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_11591 extends BaseMapProcess
   {
       
      
      private var _index:uint;
      
      private var _isSend:Boolean;
      
      public function MapProcess_11591()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this.update();
         conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
      }
      
      private function update() : void
      {
         KTool.getMultiValue([13413],function(param1:Array):void
         {
            var _loc2_:uint = uint(param1[0]);
            _isSend = KTool.getBit(_loc2_,4) == 1;
         });
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         switch(event.target.name)
         {
            case "btn":
               KTool.getMultiValue([13413],function(param1:Array):void
               {
                  var arr:Array = param1;
                  var v:uint = uint(arr[0]);
                  _isSend = KTool.getBit(v,4) == 1;
                  if(_isSend)
                  {
                     TaskDiaLogManager.single.playStory([new TaskMod(TaskDiaLogManager.DIALOG,2714,["我已经收到你的祝福了，明天再来吧。圣诞快乐！"],["圣诞快乐！"])],function():void
                     {
                        MapManager.changeMapWithCallback(1220,function():void
                        {
                           ModuleManager.showAppModule("ChristmasDayPetMainPanel");
                        });
                     });
                  }
                  else
                  {
                     ModuleManager.showAppModule("ChristmasDayPetWishPanel");
                  }
               });
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
