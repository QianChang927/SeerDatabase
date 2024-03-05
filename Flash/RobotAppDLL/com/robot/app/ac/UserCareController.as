package com.robot.app.ac
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import org.taomee.debug.DebugTrace;
   
   public class UserCareController
   {
       
      
      public function UserCareController()
      {
         super();
      }
      
      public static function setup() : void
      {
         onMapOpen(null);
      }
      
      private static function onMapOpen(param1:MapEvent) : void
      {
         if(MainManager.actorInfo.oldlast == 0)
         {
            return;
         }
         if(SystemTimerManager.time < MainManager.actorInfo.oldlast)
         {
            return;
         }
         if(getDormantTimeInDay() < 30)
         {
            return;
         }
         ModuleManager.showModule(ClientConfig.getAppModule("UserCarePanel"),"正在打开面板....");
      }
      
      public static function showItem() : void
      {
         ItemInBagAlert.show(300075,"2个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(300075)) + "已经放入了您的储存箱！");
         ItemInBagAlert.show(300102,"5个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(300102)) + "已经放入了您的储存箱！");
         ItemInBagAlert.show(300123,"2个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(300123)) + "已经放入了您的储存箱！");
         ItemInBagAlert.show(1,"50000个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(1)) + "已经放入了您的储存箱！");
         ItemInBagAlert.show(400063,"5个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(400063)) + "已经放入了您的储存箱！");
         ItemInBagAlert.show(400497,"1个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(400497)) + "已经放入你的精灵仓库！");
      }
      
      public static function getDormantTimeInDay() : uint
      {
         DebugTrace.show(MainManager.actorInfo.oldlast + "/" + SystemTimerManager.time);
         return uint((SystemTimerManager.time - MainManager.actorInfo.oldlast) / (24 * 60 * 60));
      }
   }
}
