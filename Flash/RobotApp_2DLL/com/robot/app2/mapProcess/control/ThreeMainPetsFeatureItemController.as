package com.robot.app2.mapProcess.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   
   public class ThreeMainPetsFeatureItemController
   {
      
      public static var isOpen:Boolean = false;
      
      private static var curIndex:int;
      
      public static var isStart:Boolean = false;
      
      private static var tipsMC:MovieClip;
       
      
      public function ThreeMainPetsFeatureItemController()
      {
         super();
      }
      
      public static function init(param1:int = -1) : void
      {
         var index:int = param1;
         if(!isStart)
         {
            isStart = true;
            tipsMC = MapManager.currentMap.controlLevel.getChildByName("itemTips") as MovieClip;
            tipsMC.visible = true;
            SimpleButton(tipsMC["goBtn"]).addEventListener(MouseEvent.CLICK,onOpenPanel);
            SimpleButton(tipsMC["close"]).addEventListener(MouseEvent.CLICK,onClose);
         }
         if(index != -1)
         {
            curIndex = index;
         }
         isOpen = true;
         ItemManager.updateItems([1700743,1700744,1700745],function():void
         {
            update();
         });
      }
      
      private static function onOpenPanel(param1:MouseEvent) : void
      {
         destroy();
         ModuleManager.showModule(ClientConfig.getAppModule("ThreeMainPetsIvolveMainPanel"),"正在打开...",curIndex);
      }
      
      public static function update() : void
      {
         if(!isStart)
         {
            return;
         }
         var _loc1_:int = 0;
         if(curIndex == 1)
         {
            _loc1_ = int(ItemManager.getNumByID(1700743));
            if(_loc1_ >= 5)
            {
               tipsMC["frameMc"].gotoAndStop(4);
            }
            else
            {
               tipsMC["frameMc"].gotoAndStop(1);
            }
         }
         else if(curIndex == 2)
         {
            _loc1_ = int(ItemManager.getNumByID(1700744));
            if(_loc1_ >= 5)
            {
               tipsMC["frameMc"].gotoAndStop(5);
            }
            else
            {
               tipsMC["frameMc"].gotoAndStop(2);
            }
         }
         else if(curIndex == 3)
         {
            _loc1_ = int(ItemManager.getNumByID(1700745));
            if(_loc1_ >= 5)
            {
               tipsMC["frameMc"].gotoAndStop(6);
            }
            else
            {
               tipsMC["frameMc"].gotoAndStop(3);
            }
         }
         if(_loc1_ < 5)
         {
            tipsMC["goBtn"].visible = false;
            TextField(tipsMC["frameMc"]["txt"]).text = _loc1_ + "/5";
         }
         else
         {
            tipsMC["goBtn"].visible = true;
         }
      }
      
      private static function onClose(param1:MouseEvent) : void
      {
         destroy();
         isOpen = false;
      }
      
      public static function destroy() : void
      {
         isStart = false;
         if(tipsMC)
         {
            SimpleButton(tipsMC["goBtn"]).removeEventListener(MouseEvent.CLICK,onOpenPanel);
            SimpleButton(tipsMC["close"]).removeEventListener(MouseEvent.CLICK,onClose);
            tipsMC.visible = false;
            tipsMC = null;
         }
      }
   }
}
