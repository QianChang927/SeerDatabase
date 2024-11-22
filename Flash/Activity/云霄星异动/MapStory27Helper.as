package com.robot.module.app
{
   import com.robot.core.manager.MapStoryManager;
   import com.robot.core.mode.BaseModule;
   
   public class MapStory27Helper extends BaseModule
   {
      public function MapStory27Helper()
      {
         super();
         resUrl = "2024/1122/MapStory27Helper";
      }
      
      override public function show() : void
      {
         super.show();
         eventCom.addClickEvent(ui.close,function(e:*):void
         {
            hide();
         });
         ui.main.gotoAndStop(MapStoryManager.StoryProgress + 1);
         ui.testTxt.text = MapStoryManager.StoryProgress;
      }
   }
}

