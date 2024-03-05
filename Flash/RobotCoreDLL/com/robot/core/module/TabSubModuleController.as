package com.robot.core.module
{
   import flash.display.DisplayObjectContainer;
   
   public class TabSubModuleController extends SubModuleController
   {
       
      
      private var _config;
      
      public function TabSubModuleController(param1:DisplayObjectContainer, param2:Object)
      {
         this._config = param2;
         super(param1);
      }
      
      public function showModule(param1:String) : void
      {
         var module:SubModule;
         var subModule:SubModule = null;
         var key:String = param1;
         if(getSubModule(key) == null)
         {
            subModule = new this._config[key]();
            addSubModule(key,subModule);
         }
         module = getSubModule(key);
         _subModules.eachValue(function(param1:SubModule):void
         {
            if(param1.parent)
            {
               param1.parent.removeChild(param1);
            }
         });
         _parent.addChild(module);
      }
   }
}
