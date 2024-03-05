package com.robot.core.config.xml
{
   import flash.utils.getDefinitionByName;
   
   public class MedalConditionListInfo
   {
       
      
      private var _fun:String;
      
      private var _xml:XML;
      
      private var _error:String;
      
      public function MedalConditionListInfo(param1:XML)
      {
         super();
         this._xml = param1;
         this._fun = param1.@fun;
         this._error = param1;
      }
      
      public function getClass() : Class
      {
         if(this._xml["class"] == "")
         {
            return null;
         }
         return getDefinitionByName(this._xml["class"]) as Class;
      }
      
      public function get fun() : String
      {
         return this._fun;
      }
      
      public function get error() : String
      {
         return this._error;
      }
   }
}
