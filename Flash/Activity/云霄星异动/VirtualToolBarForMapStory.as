package com.robot.module.app
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.BaseModule;
   import com.robot.core.utils.CommonUI;
   
   public class VirtualToolbarforMapStory extends BaseModule
   {
      public function VirtualToolbarforMapStory()
      {
         super();
         resUrl = "2024/1122/VirtualToolbarforMapStory";
      }
      
      override public function show() : void
      {
         CommonUI.resetUiAllTxtFont(_ui);
         LevelManager.appLevel.addChild(_ui);
         eventCom.addClickEvent(ui.btnQuit,this.onQuit);
         eventCom.addClickEvent(ui.btnBag,this.onBag);
         eventCom.addClickEvent(ui.btnGuide,this.onGuide);
      }
      
      private function onQuit(e:*) : void
      {
         ModuleManager.showAppModule("VirtualToolbarforMapStoryPop");
      }
      
      private function onBag(e:*) : void
      {
         PetBagControllerNew.showByBuffer();
      }
      
      private function onGuide(e:*) : void
      {
         ModuleManager.showAppModule("MapStory27Helper");
      }
      
      internal function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
      }
   }
}

