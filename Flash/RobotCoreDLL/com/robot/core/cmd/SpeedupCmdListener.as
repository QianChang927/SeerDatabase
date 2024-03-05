package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LeftToolBarManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class SpeedupCmdListener extends BaseBean
   {
      
      private static var icon:MovieClip;
       
      
      public function SpeedupCmdListener()
      {
         super();
      }
      
      public static function showIcon() : void
      {
         if(MainManager.actorInfo.twoTimes > 0)
         {
            icon["txt"].text = MainManager.actorInfo.twoTimes.toString();
            ToolTipManager.add(icon,"双倍加速器");
         }
         else if(MainManager.actorInfo.threeTimes > 0)
         {
            icon["txt"].text = MainManager.actorInfo.threeTimes.toString();
            ToolTipManager.add(icon,"三倍加速器");
         }
         LeftToolBarManager.addIcon(icon);
      }
      
      public static function delIcon() : void
      {
         LeftToolBarManager.delIcon(icon);
      }
      
      override public function start() : void
      {
         EventManager.addEventListener(RobotEvent.SPEEDUP_CHANGE,this.onChange);
         if(MainManager.actorInfo.twoTimes > 0)
         {
            icon = UIManager.getMovieClip("speedUp_icon");
            showIcon();
         }
         else if(MainManager.actorInfo.threeTimes > 0)
         {
            icon = UIManager.getMovieClip("threeSpeedUp_icon");
            showIcon();
         }
         SocketConnection.addCmdListener(CommandID.USE_SPEEDUP_ITEM,this.onUseSpeedup);
         finish();
      }
      
      private function onUseSpeedup(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         MainManager.actorInfo.twoTimes = _loc2_.readUnsignedInt();
         MainManager.actorInfo.threeTimes = _loc2_.readUnsignedInt();
         if(MainManager.actorInfo.twoTimes > 0 || MainManager.actorInfo.threeTimes > 0)
         {
            if(MainManager.actorInfo.twoTimes > 0)
            {
               if(!icon)
               {
                  icon = UIManager.getMovieClip("speedUp_icon");
               }
            }
            else if(MainManager.actorInfo.threeTimes > 0)
            {
               if(!icon)
               {
                  icon = UIManager.getMovieClip("threeSpeedUp_icon");
               }
            }
            showIcon();
         }
         else
         {
            delIcon();
         }
      }
      
      private function onChange(param1:RobotEvent) : void
      {
         if(MainManager.actorInfo.twoTimes > 0 || MainManager.actorInfo.threeTimes > 0)
         {
            showIcon();
         }
         else
         {
            delIcon();
         }
      }
   }
}
