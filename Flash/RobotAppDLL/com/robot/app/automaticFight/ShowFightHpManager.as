package com.robot.app.automaticFight
{
   import com.robot.core.CommandID;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LeftToolBarManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.component.bgFill.SoildFillStyle;
   import org.taomee.component.containers.VBox;
   import org.taomee.component.control.MLabel;
   import org.taomee.component.layout.FlowLayout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ShowFightHpManager
   {
      
      public static const ON:uint = 1;
      
      public static const OFF:uint = 0;
      
      private static var icon:MovieClip;
      
      private static var tipMC:VBox;
      
      private static var txt:TextField;
      
      private static var _callFun:Function;
      
      private static var stateLabel:MLabel;
      
      private static var redLabel:MLabel;
       
      
      public function ShowFightHpManager()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(!icon)
         {
            getTipMC();
            icon = UIManager.getMovieClip("showFightHp_icon");
            icon.gotoAndStop(1);
            icon.buttonMode = true;
            icon.addEventListener(MouseEvent.ROLL_OVER,overIcon);
            icon.addEventListener(MouseEvent.ROLL_OUT,outIcon);
            icon.mouseChildren = false;
            txt = icon["txt"];
         }
         checkIcon();
         EventManager.addEventListener(RobotEvent.SHOW_FIGHT_HP_CHANGE,onFightOver);
      }
      
      private static function onFightOver(param1:RobotEvent) : void
      {
         if(MainManager.actorInfo.btlDetectTimes == 0)
         {
            hideIcon();
         }
      }
      
      public static function useItem(param1:uint, param2:Function = null) : void
      {
         _callFun = param2;
         SocketConnection.addCmdListener(CommandID.USE_FIGHT_HP_ITEM,onUseItem);
         SocketConnection.send(CommandID.USE_FIGHT_HP_ITEM,param1);
      }
      
      private static function onUseItem(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         MainManager.actorInfo.btlDetectTimes = _loc2_.readUnsignedInt();
         checkIcon();
         if(_callFun != null)
         {
            _callFun();
         }
      }
      
      private static function checkIcon() : void
      {
         if(MainManager.actorInfo.btlDetectTimes > 0)
         {
            showIcon();
         }
         else
         {
            hideIcon();
         }
      }
      
      private static function showIcon() : void
      {
         txt.text = MainManager.actorInfo.btlDetectTimes.toString();
         LeftToolBarManager.addIcon(icon);
      }
      
      public static function hideIcon() : void
      {
         LeftToolBarManager.delIcon(icon);
      }
      
      private static function overIcon(param1:MouseEvent) : void
      {
         var _loc2_:Point = icon.localToGlobal(new Point());
         tipMC.x = _loc2_.x + 35;
         tipMC.y = _loc2_.y + 45;
         stateLabel.textColor = 52224;
         stateLabel.text = "  ";
         redLabel.text = "可查看敌方血量";
         LevelManager.toolsLevel.addChild(tipMC);
      }
      
      private static function outIcon(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(tipMC);
      }
      
      private static function getTipMC() : void
      {
         tipMC = new VBox(-2);
         tipMC.setSizeWH(140,70);
         tipMC.halign = FlowLayout.CENTER;
         tipMC.valign = FlowLayout.MIDLLE;
         tipMC.bgFillStyle = new SoildFillStyle(0,0.8,20,20);
         var _loc1_:MLabel = new MLabel("战斗力探测器");
         _loc1_.width = 120;
         _loc1_.textColor = 52224;
         _loc1_.blod = true;
         stateLabel = new MLabel();
         stateLabel.textColor = 52224;
         redLabel = new MLabel();
         redLabel.textColor = 16776960;
         stateLabel.fontSize = redLabel.fontSize = 12;
         stateLabel.width = redLabel.width = 120;
         tipMC.appendAll(_loc1_,stateLabel,redLabel);
      }
   }
}
