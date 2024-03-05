package com.robot.core.manager.version
{
   public class VersionInfo
   {
       
      
      private var _path:String;
      
      private var _stamp:String;
      
      private var _size:uint;
      
      public function VersionInfo()
      {
         super();
      }
      
      public function set path(param1:String) : void
      {
         this._path = param1;
      }
      
      public function get path() : String
      {
         return this._path;
      }
      
      public function set stamp(param1:String) : void
      {
         this._stamp = param1;
      }
      
      public function get stamp() : String
      {
         return this._stamp;
      }
      
      public function set size(param1:uint) : void
      {
         this._size = param1;
      }
      
      public function get size() : uint
      {
         return this._size;
      }
   }
}
