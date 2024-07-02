package com.robot.module.app.petBag
{
   import com.robot.core.module.TabSubModuleController;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class PetTabModule extends PetBagSubModule
   {
       
      
      protected var _subModuleController:TabSubModuleController;
      
      protected var _subModuleConfig;
      
      public function PetTabModule()
      {
         super();
      }
      
      protected function initSubModules(config:*) : void
      {
         var moduleKey:String = null;
         var btn:MovieClip = null;
         this._subModuleConfig = config;
         this._subModuleController = new TabSubModuleController(_ui,config);
         for(moduleKey in this._subModuleConfig)
         {
            btn = _ui[moduleKey];
            btn.mouseChildren = false;
            _eventCom.addClickEvent(btn,this.onTabBtnClick);
         }
      }
      
      protected function onTabBtnClick(e:MouseEvent) : void
      {
         var btnName:String = String(e.target.name);
         this.showSubModule(btnName);
      }
      
      protected function showSubModule(key:String) : void
      {
         var moduleKey:String = null;
         var btn:MovieClip = null;
         this._subModuleController.showModule(key);
         for(moduleKey in this._subModuleConfig)
         {
            btn = _ui[moduleKey];
            btn.gotoAndStop(1);
            btn.buttonMode = true;
            if(moduleKey == key)
            {
               btn.gotoAndStop(2);
               btn.buttonMode = true;
            }
         }
      }
      
      override public function destory() : void
      {
         this._subModuleController.destory();
         this._subModuleController = null;
         super.destory();
      }
   }
}
