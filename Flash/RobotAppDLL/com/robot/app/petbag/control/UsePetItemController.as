package com.robot.app.petbag.control
{
   import com.robot.app.petbag.control.actions.CharacterChgAction;
   import com.robot.app.petbag.ui.PetBagListItem;
   
   public class UsePetItemController
   {
       
      
      public function UsePetItemController()
      {
         super();
      }
      
      public static function action(param1:PetBagListItem, param2:uint) : void
      {
         var _loc3_:IUsePetItemAction = null;
         if(Boolean(param1) && Boolean(param2))
         {
            _loc3_ = actionPara(param2);
            if(_loc3_)
            {
               _loc3_.act(param1);
            }
         }
      }
      
      private static function actionPara(param1:uint) : IUsePetItemAction
      {
         if(param1 >= 300081 && param1 <= 300121)
         {
            return new CharacterChgAction();
         }
         return null;
      }
   }
}
