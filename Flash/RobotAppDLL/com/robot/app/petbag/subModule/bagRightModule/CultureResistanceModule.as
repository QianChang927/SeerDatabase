package com.robot.module.app.petBag.subModule.bagRightModule
{
   import com.robot.module.app.petBag.PetTabModule;
   import com.robot.module.app.petBag.subModule.bagRightModule.petModules.petSubModules.CultureModule;
   import com.robot.module.app.petBag.subModule.bagRightModule.petModules.petSubModules.ResistanceModule;
   
   public class CultureResistanceModule extends PetTabModule
   {
       
      
      private var CONFIG;
      
      public function CultureResistanceModule()
      {
         this.CONFIG = {
            "culture":CultureModule,
            "resistance":ResistanceModule
         };
         super();
         initUi("cultureResistanceModule");
         initSubModules(this.CONFIG);
         showSubModule("culture");
      }
      
      override public function destory() : void
      {
         this.CONFIG = null;
         super.destory();
      }
   }
}
