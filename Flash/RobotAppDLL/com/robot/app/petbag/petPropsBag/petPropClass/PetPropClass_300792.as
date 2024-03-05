package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   
   public class PetPropClass_300792
   {
       
      
      public function PetPropClass_300792(param1:PetPropInfo)
      {
         var info:PetPropInfo = param1;
         super();
         ModuleManager.showAppModule("OnceBestLearnPanel",{"callback":function(param1:Array):void
         {
            var _loc2_:* = [info.petInfo.catchTime,info.itemId];
            _loc2_.push(param1[1]);
            _loc2_.push(param1[2]);
            _loc2_.push(param1[3]);
            _loc2_.push(param1[4]);
            _loc2_.push(param1[5]);
            _loc2_.push(param1[0]);
            SocketConnection.sendWithCallback2(47313,null,_loc2_);
         }});
      }
   }
}
