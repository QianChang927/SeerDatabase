package com.robot.app.panel
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class BeanChangePanel
   {
      
      private static var _panel:MovieClip;
       
      
      public function BeanChangePanel()
      {
         super();
      }
      
      public static function show() : void
      {
         if(_panel == null)
         {
            ResourceManager.getResource(ClientConfig.getActiveUrl("beanPanel"),function(param1:DisplayObject):void
            {
               var _loc3_:SimpleButton = null;
               _panel = param1 as MovieClip;
               var _loc2_:uint = 0;
               while(_loc2_ < _panel.numChildren)
               {
                  if(_panel.getChildAt(_loc2_) is SimpleButton)
                  {
                     _loc3_ = _panel.getChildAt(_loc2_) as SimpleButton;
                     _loc3_.addEventListener(MouseEvent.CLICK,onBtnClickHandler);
                  }
                  _loc2_++;
               }
               LevelManager.closeMouseEvent();
               LevelManager.appLevel.addChild(_panel);
               DisplayUtil.align(_panel,null,AlignType.MIDDLE_CENTER);
            },"BeanPanel");
         }
      }
      
      private static function onBtnClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:int = 0;
         var _loc3_:SimpleButton = null;
         switch(param1.currentTarget.name)
         {
            case "tenbean":
               ProductAction.buyMoneyProduct(200000);
               break;
            case "fiftybean":
               ProductAction.buyMoneyProduct(200001);
               break;
            case "percentbean":
               ProductAction.buyMoneyProduct(200002);
               break;
            case "closeBtn":
               LevelManager.openMouseEvent();
               _loc2_ = 0;
               while(_loc2_ < _panel.numChildren)
               {
                  if(_panel.getChildAt(_loc2_) is SimpleButton)
                  {
                     _loc3_ = _panel.getChildAt(_loc2_) as SimpleButton;
                     _loc3_.removeEventListener(MouseEvent.CLICK,onBtnClickHandler);
                  }
                  _loc2_++;
               }
               DisplayUtil.removeForParent(_panel);
               _panel = null;
         }
      }
      
      private static function onMapSwitch(param1:MapEvent) : void
      {
         var _loc3_:SimpleButton = null;
         var _loc2_:uint = 0;
         while(_loc2_ < _panel.numChildren)
         {
            if(_panel.getChildAt(_loc2_) is SimpleButton)
            {
               _loc3_ = _panel.getChildAt(_loc2_) as SimpleButton;
               _loc3_.removeEventListener(MouseEvent.CLICK,onBtnClickHandler);
            }
            _loc2_++;
         }
         _panel = null;
      }
   }
}
