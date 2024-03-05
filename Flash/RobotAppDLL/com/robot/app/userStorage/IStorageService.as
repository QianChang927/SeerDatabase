package com.robot.app.userStorage
{
   public interface IStorageService
   {
       
      
      function reset() : void;
      
      function getItems(param1:int, param2:Function) : void;
      
      function destroy() : void;
   }
}
