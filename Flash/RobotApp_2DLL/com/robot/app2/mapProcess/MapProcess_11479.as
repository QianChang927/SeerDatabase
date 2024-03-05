package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   
   public class MapProcess_11479 extends BaseMapProcess
   {
       
      
      public function MapProcess_11479()
      {
         super();
      }
      
      override public function destroy() : void
      {
         MapObjectControl.hideOrShowAllObjects(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         super.destroy();
      }
      
      override protected function init() : void
      {
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
         this.update(true);
         super.init();
      }
      
      private function update(param1:Boolean) : void
      {
         var fit:Boolean = param1;
         KTool.getMultiValue([18202],function(param1:Array):void
         {
            var b:Boolean = false;
            var arr:Array = param1;
            var u:uint = uint(arr[0]);
            var i:int = 0;
            while(i < 5)
            {
               b = BitUtils.getBit(u,i) == 0;
               depthLevel["stoneBtn_" + i].visible = b;
               depthLevel["processMc_" + i].visible = b;
               if(fit)
               {
                  depthLevel["processMc_" + i].txt.text = "0%";
                  depthLevel["processMc_" + i].mcBar.gotoAndStop(1);
                  MapListenerManager.add(depthLevel["stoneBtn_" + i],onclick);
               }
               i++;
            }
            MapListenerManager.add(topLevel["close"],onclose);
            if(u == 31)
            {
               Alarm.show("你挖掉了这里所有的泰坦矿石，看起来已经不会再有什么收获了.",function():void
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showAppModule("AncientBattlefieldWelfareBExplorePanel");
                  });
               });
            }
         });
      }
      
      private function onclose(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         MapManager.changeMapWithCallback(1,function():void
         {
            ModuleManager.showAppModule("AncientBattlefieldWelfareBMainPanel");
         });
      }
      
      private function onclick(param1:MouseEvent) : void
      {
         var k:int;
         var e:MouseEvent = param1;
         var i:int = int(e.target.name.replace("stoneBtn_",""));
         depthLevel["processMc_" + i].mcBar.nextFrame();
         k = int(depthLevel["processMc_" + i].mcBar.currentFrame);
         depthLevel["processMc_" + i].txt.text = (k - 1) * 5 + "%";
         if(k == 21)
         {
            SocketConnection.sendByQueue(42333,[9,i + 1],function(param1:*):void
            {
               update(false);
            });
         }
      }
   }
}
