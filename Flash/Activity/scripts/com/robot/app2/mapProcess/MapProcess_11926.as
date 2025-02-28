package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_11926 extends BaseMapProcess
   {
       
      
      public function MapProcess_11926()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         topLevel.mouseChildren = topLevel.mouseEnabled = false;
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         KTool.getMultiValue([140033],function(param1:Array):void
         {
            if(param1[0] > 0)
            {
               conLevel["rupeeEggBtn"].visible = false;
            }
            else
            {
               conLevel["rupeeEggBtn"].visible = true;
            }
         });
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "gotoBtn":
               MapManager.changeMap(11925);
               break;
            case "propCompartmentBtn":
               AnimateManager.playMcAnimate(conLevel["propCompartmentMc"],2,"mc2",function():void
               {
                  conLevel["propCompartmentMc"].visible = false;
               },false,true);
               break;
            case "rupeeEggBtn":
               KTool.socketSendCallBack(45900,function():void
               {
                  update();
               },[12,1]);
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
