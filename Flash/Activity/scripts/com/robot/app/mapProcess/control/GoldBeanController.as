package com.robot.app.mapProcess.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   
   public class GoldBeanController
   {
      
      public static var vipReqList:Array = [];
      
      public static var notVipReqList:Array = [];
      
      public static var vipTick:Array = [];
      
      public static var notVipTick:Array = [];
       
      
      public function GoldBeanController()
      {
         super();
      }
      
      public static function showMainPanel() : void
      {
         if(MainManager.actorInfo.vip == 1 || MainManager.actorInfo.vip == 3)
         {
            SocketConnection.send(1022,86052730);
            showVipExchangePanel();
         }
         else if(MainManager.actorInfo.vip == 0 || MainManager.actorInfo.vip == 2)
         {
            SocketConnection.send(1022,86052732);
            showNotVipMakePanel();
         }
      }
      
      private static function showVipExchangePanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GoldBeanVipExchange"),"正在加载...");
      }
      
      public static function showVipSendPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GoldBeanVipSend"),"正在加载...");
      }
      
      public static function showVipCheckPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GoldBeanVipCheck"),"正在加载...");
      }
      
      private static function showNotVipMakePanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GoldBeanNotVipMake"),"正在加载...");
      }
      
      public static function showNotVipRequestPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GoldBeanNotVipRequest"),"正在加载...");
      }
      
      public static function showNotVipReceivePanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GoldBeanNotVipReceive"),"正在加载...");
      }
      
      public static function sortFun1(param1:UserInfo, param2:UserInfo) : int
      {
         if((param1.vip == 0 || param1.vip == 2) && (param2.vip == 1 || param2.vip == 3))
         {
            return -1;
         }
         if((param1.vip == 1 || param1.vip == 3) && (param2.vip == 0 || param2.vip == 2))
         {
            return 1;
         }
         return 0;
      }
      
      public static function sortFun2(param1:UserInfo, param2:UserInfo) : int
      {
         if((param2.vip == 0 || param2.vip == 2) && (param1.vip == 1 || param1.vip == 3))
         {
            return -1;
         }
         if((param2.vip == 1 || param2.vip == 3) && (param1.vip == 0 || param1.vip == 2))
         {
            return 1;
         }
         return 0;
      }
      
      public static function destroy() : void
      {
      }
   }
}
