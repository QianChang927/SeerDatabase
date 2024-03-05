package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class OldSeerIconController
   {
      
      private static var _icon:SimpleButton;
      
      public static var isOld:Boolean;
       
      
      public function OldSeerIconController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.OLD_SEER_RETURN_CHECK,onCheckSeer);
         SocketConnection.send(CommandID.OLD_SEER_RETURN_CHECK);
      }
      
      private static function onCheckSeer(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.OLD_SEER_RETURN_CHECK,onCheckSeer);
         var _loc2_:ByteArray = param1.data as ByteArray;
         isOld = Boolean(_loc2_.readUnsignedInt());
         if(isOld)
         {
            showIcon();
         }
      }
      
      private static function showIcon() : void
      {
         if(MainManager.actorInfo.totalGiftCount >= 15 || MainManager.actorInfo.toDayGetGiftCount > 0)
         {
            return;
         }
         if(_icon == null)
         {
            _icon = UIManager.getButton("OldSeer");
            ToolTipManager.add(_icon,"老兵回馈大放送");
            TaskIconManager.addIcon(_icon,TaskIconManager.RIGHT_SIDE,8);
            _icon.addEventListener(MouseEvent.CLICK,onClickIcon);
         }
      }
      
      public static function hideIcon() : void
      {
         if(_icon != null)
         {
            ToolTipManager.remove(_icon);
            _icon.removeEventListener(MouseEvent.CLICK,onClickIcon);
            TaskIconManager.delIcon(_icon);
            _icon = null;
         }
      }
      
      private static function onClickIcon(param1:Event) : void
      {
         SocketConnection.send(1022,86052384);
         MapManager.addAppArrowListener(332,600,300,45);
         MapManager.changeMap(332);
      }
   }
}
