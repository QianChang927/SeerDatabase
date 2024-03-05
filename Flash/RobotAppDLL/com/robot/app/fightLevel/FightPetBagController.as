package com.robot.app.fightLevel
{
   import org.taomee.utils.DisplayUtil;
   
   public class FightPetBagController
   {
      
      private static var _panel:com.robot.app.fightLevel.FightPetBagPanel;
       
      
      public function FightPetBagController()
      {
         super();
      }
      
      public static function get panel() : com.robot.app.fightLevel.FightPetBagPanel
      {
         if(_panel == null)
         {
            _panel = new com.robot.app.fightLevel.FightPetBagPanel();
         }
         return _panel;
      }
      
      public static function show(param1:Boolean = false, param2:Boolean = false, param3:Boolean = true) : void
      {
         if(DisplayUtil.hasParent(panel))
         {
            panel.hide();
         }
         else
         {
            panel.show(param1,param2,param3);
         }
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
