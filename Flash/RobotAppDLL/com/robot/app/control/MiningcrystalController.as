package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class MiningcrystalController
   {
      
      public static var mapids:Array = [1173,1174,1175,1136,1134,1142];
      
      private static var nowidx:int;
      
      private static var nowpro:BaseMapProcess;
      
      private static const pos:Array = [{
         "x":276.05,
         "y":248.35
      },{
         "x":300,
         "y":300
      },{
         "x":60,
         "y":172
      },{
         "x":807.05,
         "y":329
      },{
         "x":560.05,
         "y":166.35
      },{
         "x":728.05,
         "y":281
      }];
       
      
      public function MiningcrystalController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess, param2:int) : void
      {
         var mapp:BaseMapProcess = param1;
         var idx:int = param2;
         nowidx = idx;
         nowpro = mapp;
      }
      
      private static function clickHandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         ResourceManager.getResource(ClientConfig.getAppResource("2016/0318/mining"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            var tmp:MovieClip = mc;
            tmp.name = "mining";
            tmp.x = 478;
            tmp.y = 277.5;
            nowpro.topLevel.addChild(tmp);
            AnimateManager.playMcAnimate(tmp["mc"],1,"",function():void
            {
               removeMining(nowpro);
               SocketConnection.sendByQueue(45629,[3,nowidx + 1],function():void
               {
                  destroy(nowpro);
                  checkover();
               });
            });
         });
      }
      
      private static function removeMining(param1:BaseMapProcess) : void
      {
         var _loc2_:DisplayObject = param1.topLevel.getChildByName("mining");
         if(_loc2_)
         {
            param1.topLevel.removeChild(_loc2_);
            _loc2_ = null;
         }
      }
      
      private static function checkover() : void
      {
         var map:int = 0;
         map = 0;
         KTool.getMultiValue([13800],function(param1:Array):void
         {
            var arr:Array = param1;
            var i:int = 0;
            while(i < 6)
            {
               if(KTool.getBit(arr[0],i + 1) == 0)
               {
                  map = mapids[i];
               }
               i++;
            }
            if(map == 0)
            {
               Alert.show("今日你已挖取完所有晶矿，是否前往进化闪光伊莱恩？",function():void
               {
                  ModuleManager.showAppModule("YilaienEvoMainPanel");
               });
            }
            else
            {
               Alert.show("今日此地的晶矿已挖取完，是否前往下一个地点？",function():void
               {
                  MapManager.changeMap(map);
               });
            }
         });
      }
      
      public static function destroy(param1:BaseMapProcess) : void
      {
         removeMining(param1);
         var _loc2_:DisplayObject = param1.conLevel.getChildByName("crystall");
         if(_loc2_)
         {
            param1.conLevel.removeChild(_loc2_);
            _loc2_.removeEventListener(MouseEvent.CLICK,clickHandle);
            _loc2_ = null;
         }
      }
   }
}
