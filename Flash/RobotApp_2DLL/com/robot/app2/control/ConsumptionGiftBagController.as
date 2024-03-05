package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class ConsumptionGiftBagController
   {
      
      public static var _icon:MovieClip;
      
      private static const CONSUMPTION_GIFT_BAG_COMLETE:String = "consumption_gift_bag_comlete";
      
      public static var canGetGiftBag:Boolean = false;
       
      
      public function ConsumptionGiftBagController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.PET_PRACTICE_BUYRECORD,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.PET_PRACTICE_BUYRECORD,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            if(!(_loc3_.readUnsignedInt() > 0 && TasksManager.getTaskStatus(1224) == TasksManager.COMPLETE))
            {
               canGetGiftBag = true;
               if(MainManager.actorInfo.petMaxLev > 49)
               {
                  _icon = UIManager.getMovieClip("consumption_gift_bag_icon");
                  _icon.buttonMode = true;
                  ToolTipManager.add(_icon,"你还有一个价值880钻石的礼包尚未领取！");
                  _icon.addEventListener(MouseEvent.CLICK,onClickIcon);
                  TaskIconManager.addIcon(_icon,TaskIconManager.RIGHT_SIDE,9,[50000,103]);
               }
            }
         });
         SocketConnection.send(CommandID.PET_PRACTICE_BUYRECORD);
      }
      
      private static function onClickIcon(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86054097);
         ModuleManager.showModule(ClientConfig.getAppModule("SupermarketPanel"),"正在打开...","消费礼包");
         destroy();
      }
      
      public static function destroy() : void
      {
         if(_icon)
         {
            TaskIconManager.delIcon(_icon);
            _icon.removeEventListener(MouseEvent.CLICK,onClickIcon);
            _icon = null;
         }
      }
   }
}
