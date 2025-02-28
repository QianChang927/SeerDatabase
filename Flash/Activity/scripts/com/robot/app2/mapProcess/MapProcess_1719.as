package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.MapStoryManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   
   public class MapProcess_1719 extends BaseMapProcess
   {
       
      
      private var _value:int;
      
      public function MapProcess_1719()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel.addEventListener(MouseEvent.CLICK,this.onConClick);
         this.update();
         topLevel.mouseChildren = topLevel.mouseEnabled = false;
         animatorLevel.mouseChildren = animatorLevel.mouseEnabled = false;
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         KTool.getMultiValue([124338],function(param1:Array):void
         {
            _value = param1[0];
            if(Boolean(BitUtils.getBit(param1[0],25)) && Boolean(BitUtils.getBit(param1[0],26)))
            {
               conLevel["boxBtn"].visible = false;
            }
            else
            {
               conLevel["boxBtn"].visible = true;
            }
         });
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "boxBtn":
               MapStoryManager.dialog(172,23,function(param1:int):void
               {
                  var va:int = param1;
                  var choice:int = BitUtils.getBit(_value,25) == 0 ? 26 : 27;
                  SocketConnection.sendByQueue(41900,[103,choice],function(param1:*):void
                  {
                     update();
                  });
               });
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConClick);
         super.destroy();
      }
   }
}
