package com.robot.app.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   
   public class MapProcess_66 extends BaseMapProcess
   {
       
      
      public function MapProcess_66()
      {
         super();
      }
      
      override protected function init() : void
      {
         MapListenerManager.add(conLevel["treeMC"],this.onGetAcorn,"点我啊 点我啊");
         MapListenerManager.add(conLevel["puzzleMC"],this.onGetAcorn,"点我啊 点我啊");
      }
      
      private function onGetAcorn(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         var tarMc:MovieClip = e.currentTarget as MovieClip;
         var nameArr:Array = ["treeMC","puzzleMC"];
         index = nameArr.indexOf(tarMc.name);
         AnimateManager.playMcAnimate(this.conLevel as MovieClip,1,tarMc.name,function():void
         {
            if(TasksManager.getTaskStatus(444 + index) != TasksManager.COMPLETE)
            {
               TasksManager.accept(444 + index,function(param1:Boolean):void
               {
                  var b:Boolean = param1;
                  TasksManager.complete(444 + index,0,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        DebugTrace.show("时空橡果*1");
                     }
                  });
               });
            }
         });
      }
      
      override public function destroy() : void
      {
      }
   }
}
