package com.robot.app.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class BiSuoKongJianMainMapController
   {
       
      
      private var map:BaseMapProcess;
      
      private var time:int;
      
      private var random:int;
      
      public function BiSuoKongJianMainMapController()
      {
         super();
      }
      
      public function setUp(param1:BaseMapProcess) : void
      {
         this.map = param1;
         this.map.conLevel["npc_0"].addEventListener(MouseEvent.CLICK,this.mapItemClickHandle);
         this.map.conLevel["npc_1"].addEventListener(MouseEvent.CLICK,this.mapItemClickHandle);
         this.map.conLevel["jnb"].addEventListener(MouseEvent.CLICK,this.resultClickHandle);
         this.map.conLevel["room"].addEventListener(MouseEvent.CLICK,this.roomHandle);
         EventManager.addEventListener("bisuo_room_update_time",this.updateTime);
         this.random = int(Math.random() * 5);
         this.map.conLevel["npc_1"].gotoAndStop(this.random + 1);
         this.updateTime();
         if(!BitBuffSetClass.getState(24575))
         {
            ModuleManager.showAppModule("BisuoKongJianManHuaPanel",1);
            BitBuffSetClass.setState(24575,1);
         }
      }
      
      private function roomHandle(param1:MouseEvent) : void
      {
         MapManager.changeMap(11926);
      }
      
      private function playmovie() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("biSuoKongJianFull"),function():void
         {
         });
      }
      
      private function updateTime(param1:* = null) : void
      {
         var e:* = param1;
         KTool.getMultiValue([210503],function(param1:Array):void
         {
            time = param1[0];
         });
      }
      
      private function resultClickHandle(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("BiSuoKongJianResultPanel");
      }
      
      private function mapItemClickHandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var btnName:String = String(e.currentTarget.name);
         var index:int = int(btnName.split("_")[1]);
         switch(index)
         {
            case 0:
               SocketConnection.sendByQueue(45909,[],function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  var byte:ByteArray = e.data as ByteArray;
                  var result:int = int(byte.readUnsignedInt());
                  if(result == 0)
                  {
                     ModuleManager.showAppModule("BisuoKongJianMainPanel");
                  }
                  else
                  {
                     SocketConnection.sendByQueue(45910,[],function(param1:SocketEvent):void
                     {
                        var e:SocketEvent = param1;
                        getDefinitionByName("com.robot.app2.control.DialogControl").showAllDilogs(177,211).then(function(param1:int):void
                        {
                        });
                     });
                  }
               });
               break;
            default:
               getDefinitionByName("com.robot.app2.control.DialogControl").showAllDilogs(177,200 + this.random + 1).then(function(param1:int):void
               {
                  var idx:int = param1;
                  SocketConnection.sendByQueue(45907,[1,random],function(param1:SocketEvent):void
                  {
                  });
               });
         }
      }
      
      public function destroy() : void
      {
         this.map.conLevel["room"].removeEventListener(MouseEvent.CLICK,this.roomHandle);
         this.map.conLevel["jnb"].removeEventListener(MouseEvent.CLICK,this.resultClickHandle);
         EventManager.removeEventListener("bisuo_room_update_time",this.updateTime);
         this.map.conLevel["npc_0"].removeEventListener(MouseEvent.CLICK,this.mapItemClickHandle);
         this.map.conLevel["npc_1"].removeEventListener(MouseEvent.CLICK,this.mapItemClickHandle);
         this.map = null;
      }
   }
}
