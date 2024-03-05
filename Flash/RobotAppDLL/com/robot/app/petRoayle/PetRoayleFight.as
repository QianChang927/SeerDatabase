package com.robot.app.petRoayle
{
   import com.robot.core.mode.BasePeoleModel;
   
   public class PetRoayleFight
   {
       
      
      private var _mode:BasePeoleModel;
      
      public function PetRoayleFight(param1:BasePeoleModel)
      {
         super();
         this._mode = param1;
      }
      
      public function destroy() : void
      {
         this._mode = null;
      }
   }
}
