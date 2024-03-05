package com.robot.app.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_90 extends BaseMapProcess
   {
       
      
      public function MapProcess_90()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         Alarm.show("全新精灵训练基地已代替原有练级场，还可获得精灵学习力，快来训练你的精灵吧！",function():void
         {
            KTool.changeMapWithCallBack(1147,function():void
            {
               ModuleManager.showAppModule("UpgradeBaseEntryPanel");
            });
         });
         getDefinitionByName("com.robot.app2.mapProcess.control.LevelingFieldController").initMap(this);
         getDefinitionByName("com.robot.app2.mapProcess.control.XinChunShiKeBiaoController").initMap(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.LevelingFieldController").destroy();
         getDefinitionByName("com.robot.app2.mapProcess.control.XinChunShiKeBiaoController").destroy();
      }
   }
}
