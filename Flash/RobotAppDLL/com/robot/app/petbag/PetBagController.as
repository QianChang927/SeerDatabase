package com.robot.app.petbag
{
   import com.robot.app.petbag.ui.PetBagPanel;
   import org.taomee.utils.DisplayUtil;
   
   public class PetBagController
   {
      
      public static var _panel:PetBagPanel;
      
      public static var _fromThis:Boolean = false;
       
      
      public function PetBagController()
      {
         super();
      }
      
      public static function get panel() : PetBagPanel
      {
         if(_panel == null)
         {
            _panel = new PetBagPanel();
         }
         return _panel;
      }
      
      public static function show() : void
      {
         PetBagControllerNew.checkXteamEffect(function():void
         {
            if(Boolean(PetBagControllerNew._panel) && Boolean(DisplayUtil.hasParent(PetBagControllerNew._panel)))
            {
               PetBagControllerNew._panel.hide();
               PetBagControllerNew._panel = null;
            }
            else
            {
               panel.show();
            }
         });
      }
      
      public static function closeEvent() : void
      {
         panel.closeEvent();
      }
      
      public static function openEvent() : void
      {
         panel.openEvent();
      }
      
      public static function destroy() : void
      {
         if(_panel)
         {
            _panel.destroy();
            _panel = null;
         }
      }
   }
}
