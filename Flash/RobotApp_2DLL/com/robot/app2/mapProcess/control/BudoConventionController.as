package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class BudoConventionController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _device:Array = [];
      
      private static var _count:int;
       
      
      public function BudoConventionController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         updateData();
      }
      
      private static function updateData() : void
      {
         initMap();
         initDevice();
      }
      
      private static function initMap() : void
      {
         KTool.getMultiValue([11531],function(param1:Array):void
         {
            var _loc4_:int = 0;
            var _loc2_:int = int(param1[0]);
            var _loc3_:int = 0;
            while(_loc3_ < 5)
            {
               if((_loc4_ = int(BitUtil.getBit(_loc2_,_loc3_))) > 0)
               {
                  DisplayUtil.removeForParent(_map.conLevel["stoneMc_" + _loc3_]);
               }
               else
               {
                  MapListenerManager.add(_map.conLevel["stoneMc_" + _loc3_],onCollect);
               }
               _loc3_++;
            }
         });
      }
      
      private static function initDevice() : void
      {
         KTool.getMultiValue([11533],function(param1:Array):void
         {
            var _loc4_:int = 0;
            var _loc2_:int = int(param1[0]);
            _count = 0;
            var _loc3_:int = 0;
            while(_loc3_ < 4)
            {
               _loc4_ = int(BitUtil.getBit(_loc2_,_loc3_));
               _device[_loc3_] = _loc4_;
               if(Boolean(_loc4_))
               {
                  ++_count;
               }
               _loc3_++;
            }
         });
      }
      
      public static function onFind1() : void
      {
         checkClickDevice(Boolean(_device[0]),[4,1]);
      }
      
      public static function onFind2() : void
      {
         checkClickDevice(Boolean(_device[1]),[4,2]);
      }
      
      public static function onFind3() : void
      {
         checkClickDevice(Boolean(_device[2]),[4,3]);
      }
      
      public static function onFind4() : void
      {
         checkClickDevice(Boolean(_device[3]),[4,4]);
      }
      
      public static function onClickIcon(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("HalloweenGiftsPublicityPanel"));
      }
      
      private static function checkClickDevice(param1:Boolean, param2:Array) : void
      {
         var isClicked:Boolean = param1;
         var arr:Array = param2;
         if(isClicked)
         {
            Alarm.show("该装置你已经点击过了哟！",function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BudoConventionAlarm"),"",{"frame":1});
            });
         }
         else
         {
            sendSocket(arr,"你已经找到了 ");
         }
      }
      
      private static function onCollect(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.currentTarget.name.split("_")[1]);
         sendSocket([2,_loc2_ + 1]);
      }
      
      private static function sendSocket(param1:Array, param2:String = "") : void
      {
         var arr:Array = param1;
         var tips:String = param2;
         SocketConnection.sendByQueue(CommandID.BUDO_CONVENTION_MASCOT,arr,function(param1:*):void
         {
            updateData();
            if(tips != "")
            {
               Alarm.show(tips + (_count + 1) + " 个武道意志！");
            }
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            _map = null;
         }
      }
   }
}
