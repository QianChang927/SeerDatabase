package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ShenchongSuperEnvolveShenchongzhilingRecController
   {
      
      private static var _pets:Array;
      
      private static var _map:BaseMapProcess;
      
      private static var _locationX:Array = [50,170,250,550,800];
      
      private static var _locationY:Array = [300,420,270,100,450];
       
      
      public function ShenchongSuperEnvolveShenchongzhilingRecController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         refreshMap();
      }
      
      private static function showItemNum(param1:int) : void
      {
         var i:int = param1;
         ResourceManager.getResource(ClientConfig.getResPath("module/active/shenchongzhiling.swf"),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            var index:uint = uint(o.name.split("_")[1]);
            mc.gotoAndStop(1);
            mc.buttonMode = true;
            LevelManager.mapLevel.addChild(mc);
            mc.x = _locationX[i];
            mc.y = _locationY[i];
            mc.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               var event:MouseEvent = param1;
               mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
               ItemManager.updateItems([1702934],function():void
               {
                  var num:int = 0;
                  num = int(ItemManager.getNumByID(1702934));
                  if(num <= 99)
                  {
                     KTool.doExchange(3639,function():void
                     {
                        DisplayUtil.removeForParent(mc);
                        mc = null;
                        if(num >= 20)
                        {
                           Alert.show("您已经累积了足够的神宠之灵，是否前往超进化？",function():void
                           {
                              ModuleManager.showAppModule("SaurabhSuperEvoPanel");
                           });
                        }
                     });
                  }
                  else
                  {
                     Alarm.show("你获取的神宠之灵已经超过上限！");
                  }
               });
            });
         },"shenchongzhiling");
      }
      
      private static function refreshMap() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < _locationX.length)
         {
            showItemNum(_loc1_);
            _loc1_++;
         }
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
