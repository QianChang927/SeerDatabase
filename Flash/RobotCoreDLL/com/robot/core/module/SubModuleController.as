package com.robot.core.module
{
   import flash.display.DisplayObjectContainer;
   import org.taomee.ds.HashMap;
   
   public class SubModuleController
   {
       
      
      protected var _parent:DisplayObjectContainer;
      
      protected var _subModules:HashMap;
      
      public function SubModuleController(param1:DisplayObjectContainer)
      {
         this._subModules = new HashMap();
         super();
         this._parent = param1;
      }
      
      public function addSubModule(param1:String, param2:SubModule) : void
      {
         if(Boolean(this._subModules.containsKey(param1)) || param2 == null)
         {
            throw new Error("add error");
         }
         this._subModules.add(param1,param2);
         this._parent.addChild(param2);
      }
      
      public function getSubModule(param1:String) : SubModule
      {
         return this._subModules.getValue(param1);
      }
      
      public function get subModules() : Array
      {
         return this._subModules.getValues();
      }
      
      public function destory() : void
      {
         this._subModules.eachValue(function(param1:SubModule):void
         {
            param1.destory();
         });
         this._subModules.clear();
         this._parent = null;
      }
   }
}
