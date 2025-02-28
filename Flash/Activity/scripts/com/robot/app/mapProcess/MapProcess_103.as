package com.robot.app.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.BitUtils;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_103 extends BaseMapProcess
   {
       
      
      private var _gifIcon:InteractiveObject;
      
      private var _icon:MovieClip;
      
      public function MapProcess_103()
      {
         super();
      }
      
      override protected function init() : void
      {
         MapListenerManager.add(btnLevel["btn"],this.onBtnClick);
         getDefinitionByName("com.robot.app2.control.ChristmasSnowController").initMap(this);
         MapListenerManager.add(conLevel["stone"],this.onStoneClick);
         topLevel["boxAnim"].visible = false;
         topLevel["boxAnim"].gotoAndStop(1);
         this.update();
      }
      
      private function afterPlayGo() : void
      {
      }
      
      private function update() : void
      {
         KTool.getMultiValue([124338],function(param1:Array):void
         {
            if(Boolean(SystemTimerManager.getIsInActivity("20241227","2025010310")) && !BitUtils.getBit(param1[0],14))
            {
               conLevel["stone"].visible = true;
               btnLevel.mouseEnabled = btnLevel.mouseChildren = false;
            }
            else
            {
               conLevel["stone"].visible = false;
            }
         });
      }
      
      public function onBtnClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PartingOfTheWingsOfTheBirthGiftMainPanel"),"正在打开....");
      }
      
      public function onStoneClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         topLevel["boxAnim"].visible = true;
         AnimateManager.playMcAnimate(topLevel["boxAnim"],1,"",function():void
         {
            topLevel["boxAnim"].visible = false;
            KTool.socketSendCallBack(41900,function():void
            {
               StatManager.sendStat2014("1227场景彩蛋","在地图103领取了精灵广场彩蛋奖励","2024运营活动");
               update();
            },[103,15]);
         },false,true);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.ChristmasSnowController").destroy();
         super.destroy();
      }
   }
}
