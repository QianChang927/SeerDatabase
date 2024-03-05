package com.robot.app2.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import flash.display.MovieClip;
   
   public class SorryController
   {
      
      private static var _icon:MovieClip;
       
      
      public function SorryController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            KTool.getBitSet([12878,12879],function(param1:Array):void
            {
               if(param1[0] > 0 && param1[1] == 0)
               {
                  LocalMsgController.addLocalMsg("SorryMsg",0,false,null,null,100);
               }
            });
         });
      }
   }
}
