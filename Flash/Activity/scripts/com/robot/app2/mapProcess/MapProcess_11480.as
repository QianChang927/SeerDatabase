package com.robot.app2.mapProcess
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   
   public class MapProcess_11480 extends BaseMapProcess
   {
       
      
      public function MapProcess_11480()
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
         KTool.getMultiValue([18202],function(param1:Array):void
         {
            var _loc2_:* = false;
            var _loc3_:uint = uint(param1[0]);
            var _loc4_:int = 0;
            while(_loc4_ < 2)
            {
               _loc2_ = BitUtils.getBit(_loc3_,_loc4_) == 0;
               depthLevel["bossBtn_" + _loc4_].visible = _loc2_;
               depthLevel["arrowMc_" + _loc4_].visible = _loc2_;
               MapListenerManager.add(depthLevel["bossBtn_" + _loc4_],onclick);
               _loc4_++;
            }
            MapListenerManager.add(topLevel["close"],onclose);
         });
         super.init();
      }
      
      private function update() : void
      {
         KTool.getMultiValue([18202],function(param1:Array):void
         {
            var arr:Array = param1;
            var u:uint = uint(arr[0]);
            if(u == 3)
            {
               Alarm.show("无辜的冒险者对你表示深深的谢意，并送给了你一些他在冒险时发现的宝贝作为谢礼.",function():void
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
         var e:MouseEvent = param1;
         var i:int = int(e.target.name.replace("bossBtn_",""));
         BonusController.addDelay(2608);
         FightManager.fightNoMapBoss("",9346 + i,false,true,function():void
         {
            BonusController.showDelayBonus(2608);
            update();
         });
      }
   }
}
