package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   
   public class MapProcess_1478 extends BaseMapProcess
   {
       
      
      public var _map:MapModel;
      
      public function MapProcess_1478()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         var _loc1_:int = 0;
         while(_loc1_ < 10)
         {
            this._map.controlLevel["getBtn_" + _loc1_].visible = false;
            _loc1_++;
         }
         this.update();
      }
      
      private function setMouseClick(param1:Boolean) : void
      {
         conLevel.mouseChildren = param1;
         conLevel.mouseEnabled = param1;
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "getBtn_" + index:
               KTool.socketSendCallBack(45788,function(param1:SocketEvent):void
               {
                  update();
               },[13,1 + index]);
         }
      }
      
      protected function update() : void
      {
         KTool.getMultiValue([109742],function(param1:Array):void
         {
            var _loc2_:int = 0;
            while(_loc2_ < 10)
            {
               if(ActivityTimeControl.getIsinTime(292))
               {
                  if(BitUtils.getBit(param1[0],_loc2_) > 0)
                  {
                     _map.controlLevel["getBtn_" + _loc2_].visible = false;
                  }
                  else
                  {
                     _map.controlLevel["getBtn_" + _loc2_].visible = true;
                  }
               }
               else
               {
                  _map.controlLevel["getBtn_" + _loc2_].visible = false;
               }
               _loc2_++;
            }
         });
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
