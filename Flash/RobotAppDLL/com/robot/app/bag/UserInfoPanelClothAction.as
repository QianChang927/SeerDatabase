package com.robot.app.bag
{
   import com.robot.app.control.ShopXmlController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ClothXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.ISkeletonSprite;
   import com.robot.core.net.SocketConnection;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class UserInfoPanelClothAction extends BagChangeClothAction
   {
       
      
      public function UserInfoPanelClothAction(param1:ISkeletonSprite, param2:Sprite, param3:String, param4:uint)
      {
         super(param1,param2,param3,param4);
         this._clothActiontype = "UserInfoPanelClothAction";
      }
      
      override protected function unloadCloth(param1:MouseEvent) : void
      {
         var num:Number = NaN;
         var obj:Object = null;
         var event:MouseEvent = param1;
         if(clothID == ClothXMLInfo.DEFAULT_FOOT || clothID == ClothXMLInfo.DEFAULT_HEAD || clothID == ClothXMLInfo.DEFAULT_WAIST)
         {
            return;
         }
         if(Boolean(clothSWF) && clothSWF.parent.parent.y == 120)
         {
            num = ShopXmlController.getTypeProId(ShopXmlController.CLOTH_XML_TYPE,clothID);
            SocketConnection.send(1022,86065564);
            if(num > 0)
            {
               SocketConnection.send(1022,86065565);
               obj = new Object();
               obj.id = num;
               obj.type = 3;
               ModuleManager.showModule(ClientConfig.getAppModule("ShopBuyPanelTwo"),"正在打开面板",obj);
               return;
            }
            if(ShopXmlController.getSuitId(clothID))
            {
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  ModuleManager.showModule(ClientConfig.getAppModule("GetStarClothPanel"));
               });
               MapManager.changeMap(107);
            }
         }
      }
   }
}
