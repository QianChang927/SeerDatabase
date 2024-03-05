package com.robot.app.exchangeCloth
{
   import org.taomee.utils.DisplayUtil;
   
   public class ExchangeClothController
   {
      
      private static var panel:com.robot.app.exchangeCloth.ExchangeClothPanel;
       
      
      public function ExchangeClothController()
      {
         super();
      }
      
      public static function get getPanel() : com.robot.app.exchangeCloth.ExchangeClothPanel
      {
         if(!panel)
         {
            panel = new com.robot.app.exchangeCloth.ExchangeClothPanel();
         }
         return panel;
      }
      
      public static function show(param1:Array) : void
      {
         if(DisplayUtil.hasParent(getPanel))
         {
            getPanel.destroy();
         }
         else
         {
            getPanel.show(param1);
         }
      }
   }
}
