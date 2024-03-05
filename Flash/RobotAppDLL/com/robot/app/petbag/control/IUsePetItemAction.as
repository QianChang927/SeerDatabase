package com.robot.app.petbag.control
{
   import com.robot.app.petbag.ui.PetBagListItem;
   
   public interface IUsePetItemAction
   {
       
      
      function act(param1:PetBagListItem) : void;
      
      function destroy() : void;
   }
}
