package com.robot.module.app.petBag
{
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.module.SubModule;
   import com.robot.core.utils.CommonUI;
   import com.robot.module.app.PetBag2017;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.InteractiveObject;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   
   public class PetBagSubModule extends SubModule
   {
       
      
      public function PetBagSubModule()
      {
         super();
         this.moduleData.listenTo(DataKeys.FOCUS_PET,this.onFocusPetChange);
      }
      
      protected function initUi(symbolName:String) : void
      {
         if(symbolName == "" || symbolName == null)
         {
            return;
         }
         _ui = this.bagPanel.getSymbolFromLib(symbolName);
         CommonUI.resetUiAllTxtFont(_ui);
         addChild(_ui);
         _eventCom.addClickEvent(this,this.onClick);
      }
      
      protected function onFocusPetChange() : void
      {
      }
      
      protected function onClick(e:MouseEvent) : void
      {
      }
      
      public function setPanelEnable(mc:DisplayObjectContainer, b:Boolean) : void
      {
         var child:DisplayObject = null;
         mc.mouseChildren = mc.mouseEnabled = b;
         var num:int = mc.numChildren - 1;
         for(var i:int = num; i >= 0; i--)
         {
            child = mc.getChildAt(i);
            if(child is DisplayObjectContainer)
            {
               this.setPanelEnable(child as DisplayObjectContainer,b);
            }
            else if(child is SimpleButton)
            {
               CommonUI.setEnabled(child as InteractiveObject,b,!b);
            }
            else if(child is TextField)
            {
               child.visible = b;
            }
         }
      }
      
      protected function get focusPet() : PetInfo
      {
         return this.moduleData.getData(DataKeys.FOCUS_PET) as PetInfo;
      }
      
      public function get moduleData() : BagModuleData
      {
         if(this.bagPanel == null)
         {
            return null;
         }
         return this.bagPanel.moduleData;
      }
      
      protected function get bagPanel() : PetBag2017
      {
         return PetBag2017.instance;
      }
      
      override public function destory() : void
      {
         trace("module destory");
         super.destory();
      }
      
      protected function closeEvent() : void
      {
         if(Boolean(_ui))
         {
            _ui.mouseChildren = _ui.mouseEnabled = false;
         }
      }
      
      protected function openEvent() : void
      {
         if(Boolean(_ui))
         {
            _ui.mouseChildren = _ui.mouseEnabled = true;
         }
      }
   }
}
