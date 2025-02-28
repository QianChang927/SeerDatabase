package com.robot.app.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ColorfulPrivilegeWishController
   {
      
      public static var _map:BaseMapProcess;
      
      private static var _date:Date;
      
      public static var setActiveTime:CronTimeVo = new CronTimeVo("*","14","1","5","*","2014");
      
      public static var bonusType:uint;
      
      public static var _status:uint;
       
      
      public function ColorfulPrivilegeWishController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.PRIVILEGE_INFO,onCheck);
         SocketConnection.send(CommandID.PRIVILEGE_INFO);
      }
      
      private static function onCheck(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PRIVILEGE_INFO,onCheck);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _status = _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         if(_status == 3)
         {
            bonusType = 0;
         }
         else
         {
            bonusType = _loc2_.readUnsignedInt();
         }
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         _date = SystemTimerManager.sysBJDate;
         if(setActiveTime.checkTimeHit(_date) != CronTimeVo.PAST)
         {
            wishSet.visible = true;
            ToolTipManager.add(wishSet,"特权缤纷汇许愿机");
            MapListenerManager.add(wishSet,onWishSetClick);
         }
         else
         {
            destroy();
         }
      }
      
      private static function onWishSetClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86054386);
         if(setActiveTime.checkTimeHit(_date) == CronTimeVo.INCOMING)
         {
            Alarm.show("亲爱的赛尔，活动尚未开始！超NO特权试用活动将在2014年5月1日14：00-15：00进行，一定要准时参加哟！");
            return;
         }
         ModuleManager.showModule(ClientConfig.getAppModule("ColorfulPrivilegeWishPanel"));
      }
      
      private static function get wishSet() : MovieClip
      {
         return _map.depthLevel["wishMachine"] as MovieClip;
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(setActiveTime.checkTimeHit(_date) == CronTimeVo.PAST)
            {
               ToolTipManager.remove(wishSet);
               DisplayUtil.removeForParent(wishSet);
            }
            _map = null;
         }
      }
   }
}
