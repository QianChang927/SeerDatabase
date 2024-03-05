package com.robot.app.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AccuratePromotionController
   {
      
      private static var _icon:MovieClip;
      
      private static var _type:uint;
       
      
      public function AccuratePromotionController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(MainManager.actorInfo.petMaxLev < 40)
         {
            return;
         }
         _icon = UIManager.getMovieClip("accuratePromotion_icon");
         _icon.addEventListener(MouseEvent.CLICK,onClicked);
         _icon.buttonMode = true;
         _icon.x = 900;
         _icon.y = 188;
         LevelManager.iconLevel.addChild(_icon);
         _icon.visible = false;
         SocketConnection.addCmdListener(CommandID.ACCURATE_PROMOTION_CHECK_USER_STATE,onGetInfo);
         SocketConnection.send(CommandID.ACCURATE_PROMOTION_CHECK_USER_STATE);
      }
      
      private static function onGetInfo(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ACCURATE_PROMOTION_CHECK_USER_STATE,onGetInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _type = _loc2_.readUnsignedInt();
         if(_type != 0)
         {
            show();
         }
         else
         {
            hide();
         }
      }
      
      private static function show() : void
      {
         _icon.visible = true;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != MainManager.actorID)
            {
               if(_icon)
               {
                  _icon.visible = true;
                  ToolTipManager.add(_icon,"暑期送大礼");
               }
            }
            else if(_icon)
            {
               _icon.visible = false;
               ToolTipManager.remove(_icon);
            }
         });
      }
      
      private static function onClicked(param1:MouseEvent) : void
      {
         switch(_type)
         {
            case 1:
               ModuleManager.showModule(ClientConfig.getAppModule("AccuratePromotionPanel_1"),"正在加载...");
               break;
            case 2:
               ModuleManager.showModule(ClientConfig.getAppModule("AccuratePromotionPanel_2"),"正在加载...");
               break;
            case 3:
               ModuleManager.showModule(ClientConfig.getAppModule("AccuratePromotionPanel_3"),"正在加载...");
               break;
            case 4:
               ModuleManager.showModule(ClientConfig.getAppModule("AccuratePromotionPanel_4"),"正在加载...");
               break;
            case 5:
               ModuleManager.showModule(ClientConfig.getAppModule("AccuratePromotionPanel_5"),"正在加载...");
         }
      }
      
      public static function hide() : void
      {
         if(_icon)
         {
            _icon.removeEventListener(MouseEvent.CLICK,onClicked);
            ToolTipManager.remove(_icon);
            DisplayUtil.removeForParent(_icon);
            _icon = null;
         }
      }
   }
}
