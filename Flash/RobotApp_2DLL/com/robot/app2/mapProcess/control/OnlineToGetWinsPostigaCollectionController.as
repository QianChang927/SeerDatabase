package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.CollectionComponet;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   
   public class OnlineToGetWinsPostigaCollectionController
   {
      
      private static var _collectionCmp:CollectionComponet;
      
      private static var _map:BaseMapProcess;
      
      private static var _countDownCmp:TimeCountdownComponent;
       
      
      public function OnlineToGetWinsPostigaCollectionController()
      {
         super();
      }
      
      public static function destroy() : void
      {
         if(_collectionCmp)
         {
            _collectionCmp.destroy();
            _collectionCmp = null;
         }
         if(_countDownCmp)
         {
            _countDownCmp.destroy();
            _countDownCmp = null;
         }
         _map = null;
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         update();
      }
      
      private static function update() : void
      {
         KTool.getMultiValue([15191,15192],function(param1:Array):void
         {
            var i:int;
            var b:Boolean = false;
            var arr:Array = param1;
            var u:int = SystemTimerManager.time - arr[0];
            var outTime:Boolean = u < 300 && u > 0 && arr[0] != 0;
            if(outTime)
            {
               _countDownCmp = new TimeCountdownComponent(null);
               _countDownCmp.initialSeconds = 300 - SystemTimerManager.time + arr[0];
               _countDownCmp.start(function():void
               {
                  SocketConnection.sendByQueue(43186,[4,0],function(param1:SocketEvent):void
                  {
                     update();
                  });
               });
            }
            else if(SystemTimerManager.time - arr[0] >= 300 && arr[1] >= 31)
            {
               SocketConnection.sendByQueue(43186,[4,0],function(param1:SocketEvent):void
               {
                  update();
               });
               return;
            }
            i = 1;
            while(i <= 5)
            {
               b = KTool.getBit(arr[1],i) == 0;
               _map.conLevel["stoneBtn_" + i].visible = b && !outTime;
               i++;
            }
            if(!outTime && _collectionCmp == null)
            {
               _collectionCmp = new CollectionComponet(_map.conLevel,3000,5,oncollection,onClick,"stoneBtn_");
            }
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         _collectionCmp.start();
      }
      
      private static function oncollection(param1:int) : void
      {
         var i:int = param1;
         SocketConnection.sendByQueue(43186,[4,i],function(param1:SocketEvent):void
         {
            update();
         });
      }
   }
}
