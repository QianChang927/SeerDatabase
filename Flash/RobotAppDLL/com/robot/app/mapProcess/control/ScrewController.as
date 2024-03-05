package com.robot.app.mapProcess.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.DaidaiXmlInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.DisplayObject;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class ScrewController
   {
      
      public static var isDraw:Boolean;
       
      
      public function ScrewController()
      {
         super();
      }
      
      public static function setup() : void
      {
         addMachine();
         addlocalMsg();
         addNotice();
      }
      
      public static function addMachine() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
      }
      
      private static function addlocalMsg() : void
      {
         LocalMsgController.addLocalMsg("ScrewEnvelop");
      }
      
      private static function addNotice() : void
      {
      }
      
      private static function onSwitchMap(param1:MapEvent) : void
      {
         var e:MapEvent = param1;
         var id:uint = uint(MapManager.currentMap.id);
         DaidaiXmlInfo.getDefaultPos(id,function(param1:Point):void
         {
            var pos:Point = param1;
            if(pos != null)
            {
               ResourceManager.getResource(ClientConfig.getActiveUrl("diyage"),function(param1:DisplayObject):void
               {
                  param1.x = pos.x;
                  param1.y = pos.y;
                  LevelManager.mapLevel.addChild(param1);
                  param1.addEventListener(MouseEvent.CLICK,onClickMc);
               },"npc");
            }
         });
      }
      
      private static function onClickMc(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var id:uint = uint(MapManager.currentMap.id);
         DaidaiXmlInfo.getCountId(id,function(param1:uint):void
         {
            if(param1 > 0)
            {
               SocketConnection.send(1022,param1);
            }
         });
         NpcDialog.show(NPC.DIYAGE,["螺旋杯精灵王争霸赛经过激烈的角逐终于落下帷幕，螺旋杯王者称号和闪光蒂亚戈究竟花落谁家，让我们一起去参加争霸赛的闭幕式，共同揭晓吧！"],["好，我们这就去！","我已经去过啦！"],[function():void
         {
            MapManager.changeLocalMap(10314);
         }]);
      }
      
      private static function onGetNotice(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         SimpleAlarm.show("恭喜你获得精灵王争霸赛\r" + TextFormatUtil.getRedTxt(_loc3_.toString()) + "积分和" + TextFormatUtil.getRedTxt(_loc4_.toString()) + "个积分牌！");
      }
   }
}
