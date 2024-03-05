package com.robot.app2.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.InformInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class DoubleGiftBagController
   {
      
      private static var _s:uint;
      
      public static var icon:MovieClip;
      
      private static var _timer:uint;
      
      private static var _map:BaseMapProcess;
       
      
      public function DoubleGiftBagController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onEnter);
      }
      
      public static function onCheck(param1:SocketEvent) : void
      {
         var _loc9_:InformInfo = null;
         SocketConnection.removeCmdListener(CommandID.AUGUST_DISCOUNT_ASK_INFO,onCheck);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:String = _loc2_.readMultiByte(9,"utf-8");
         var _loc4_:uint = _loc2_.readUnsignedByte() / 10;
         _s = _loc2_.readUnsignedByte();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:Date = new Date(_loc5_ * 1000);
         var _loc7_:Date = SystemTimerManager.sysDate;
         var _loc8_:uint = Math.floor((_loc7_.time - _loc6_.time) / (1000 * 3600 * 24));
         if(_s == 1)
         {
            (_loc9_ = new InformInfo()).type = CommandID.LOGIN_CHECK_GET_STATUS;
            _loc9_.exInfo = {
               "coupon":_loc3_,
               "zk":_loc4_
            };
            MessageManager.addInformInfo(_loc9_);
         }
         else
         {
            LocalMsgController.addLocalMsg("DoubleGiftBagMsgPanel");
         }
         playMc();
      }
      
      private static function playMc() : void
      {
         clearInterval(_timer);
         if(_s == 1)
         {
            KTool.getFrameMc(icon["mc"],2,"mc",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               mc.gotoAndPlay(1);
               _timer = setInterval(function():void
               {
                  mc.gotoAndPlay(1);
               },180 * 1000);
            });
         }
         else
         {
            KTool.getFrameMc(icon["mc"],1,"mc",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               mc.gotoAndPlay(1);
               _timer = setInterval(function():void
               {
                  mc.gotoAndPlay(1);
               },60 * 1000);
            });
         }
      }
      
      private static function onOver(param1:MouseEvent) : void
      {
         clearInterval(_timer);
         icon.gotoAndStop(2);
         icon.addEventListener(MouseEvent.ROLL_OUT,onOut);
      }
      
      private static function onOut(param1:MouseEvent) : void
      {
         icon.gotoAndStop(1);
         icon.removeEventListener(MouseEvent.ROLL_OUT,onOut);
         playMc();
      }
      
      public static function onEnter(param1:MapEvent) : void
      {
         if(!icon)
         {
            icon = UIManager.getMovieClip("vipDiscountIcon");
            icon.buttonMode = true;
            icon.addEventListener(MouseEvent.ROLL_OVER,onOver);
            ToolTipManager.add(icon,"超能NoNo推广活动");
            icon.addEventListener(MouseEvent.CLICK,onClick);
            SocketConnection.addCmdListener(CommandID.AUGUST_DISCOUNT_ASK_INFO,onCheck);
            SocketConnection.send(CommandID.AUGUST_DISCOUNT_ASK_INFO);
         }
         var _loc2_:uint = uint(MapManager.currentMap.id);
         if(_loc2_ == 103 || _loc2_ == 4)
         {
            if(icon.parent)
            {
               TaskIconManager.delIcon(icon,false);
            }
            clearInterval(_timer);
         }
         else
         {
            TaskIconManager.addIcon(icon,TaskIconManager.RIGHT_SIDE,4);
         }
      }
      
      public static function onClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86063529);
         CommonUI.removeYellowArrow(LevelManager.iconLevel);
         ModuleManager.showModule(ClientConfig.getAppModule("DoubleGiftBagPanel"));
      }
   }
}
