package com.robot.app2.control
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.core.manager.MainManager;
   import flash.events.ContextMenuEvent;
   import flash.external.ExternalInterface;
   import flash.ui.ContextMenuItem;
   
   public class RightMenuController
   {
       
      
      public function RightMenuController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:ContextMenuItem = new ContextMenuItem("充值米币");
         MainManager.contextMenu.customItems.unshift(_loc1_);
         _loc1_.addEventListener(ContextMenuEvent.MENU_ITEM_SELECT,onClickItem1);
         var _loc2_:ContextMenuItem = new ContextMenuItem("开通超能NONO");
         MainManager.contextMenu.customItems.unshift(_loc2_);
         _loc2_.addEventListener(ContextMenuEvent.MENU_ITEM_SELECT,onClickItem3);
         var _loc3_:ContextMenuItem = new ContextMenuItem("收藏赛尔号");
         MainManager.contextMenu.customItems.unshift(_loc3_);
         _loc3_.addEventListener(ContextMenuEvent.MENU_ITEM_SELECT,onClickItem2);
      }
      
      private static function onClickItem1(param1:ContextMenuEvent) : void
      {
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_2);
      }
      
      private static function onClickItem2(param1:ContextMenuEvent) : void
      {
         if(ExternalInterface.available)
         {
            ExternalInterface.call("addBookmark","赛尔号 - 英勇赛尔，智慧童年","http://seer.61.com/main/");
         }
      }
      
      private static function onClickItem3(param1:ContextMenuEvent) : void
      {
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
      }
   }
}
