package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewyearDailyRewardControl
   {
      
      private static var mapIds:Array = [4,5,77,107,324];
       
      
      public function NewyearDailyRewardControl()
      {
         super();
      }
      
      public static function setUp() : void
      {
         BonusController.addIgnore(384);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:Event):void
         {
            var e:Event = param1;
            if(mapIds.indexOf(MapManager.currentMap.id) != -1)
            {
               ResourceManager.getResource(ClientConfig.getMapAnimate("denglong"),function(param1:MovieClip):void
               {
                  MapManager.currentMap.btnLevel.addChild(param1);
                  var _loc2_:int = 0;
                  while(_loc2_ < 2)
                  {
                     MapListenerManager.add(param1["light" + _loc2_],onLightClick);
                     _loc2_++;
                  }
               });
            }
         });
      }
      
      public static function onLightClick(param1:MouseEvent) : void
      {
         var light:MovieClip = null;
         var e:MouseEvent = param1;
         light = e.target as MovieClip;
         KTool.getMultiValue([16074],function(param1:Array):void
         {
            var arr:Array = param1;
            if(arr[0] < 50)
            {
               SocketConnection.sendWithCallback(CommandID.COMMAND_4548,function(param1:SocketEvent):void
               {
                  var index:int = 0;
                  var e1:SocketEvent = param1;
                  index = int((e1.data as ByteArray).readUnsignedInt());
                  AnimateManager.playMcAnimate(light,2,"mc",function():void
                  {
                     DisplayUtil.removeForParent(light);
                     ModuleManager.showModule(ClientConfig.getAppModule("NewyearDailyRewardPanel"),"正在打开",index);
                  });
               },384,0);
            }
            else
            {
               DisplayUtil.removeForParent(light);
            }
         });
      }
   }
}
