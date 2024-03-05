package com.robot.app.petbag.control.actions
{
   import com.robot.app.petbag.control.IUsePetItemAction;
   import com.robot.app.petbag.ui.PetBagListItem;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class CharacterChgAction implements IUsePetItemAction
   {
       
      
      public function CharacterChgAction()
      {
         super();
      }
      
      public function act(param1:PetBagListItem) : void
      {
         var mc:MovieClip = null;
         var item:PetBagListItem = param1;
         mc = UIManager.getMovieClip("CharacterChgMC");
         mc.x = 50;
         mc.y = 5;
         item.addChild(mc);
         AnimateManager.playMcAnimate(mc,0,"",function():void
         {
            DisplayUtil.removeForParent(mc);
            mc = null;
         });
      }
      
      public function destroy() : void
      {
      }
   }
}
