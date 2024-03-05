package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BlueWhiteController
   {
      
      public static var masksArray:Array = [];
      
      private static var getInfo:Boolean = false;
      
      private static var userIdArr:Array = [];
      
      private static var init:Boolean = false;
      
      public static var p_num:uint = 0;
      
      public static var m_num:uint = 0;
       
      
      public function BlueWhiteController()
      {
         super();
      }
      
      private static function checkMaskState() : void
      {
      }
      
      public static function clickfoolsdayMask(param1:UserInfo, param2:MovieClip) : void
      {
         var info:UserInfo = param1;
         var hat:MovieClip = param2;
         if(!init)
         {
            init = true;
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         }
         if(Boolean(MainManager.actorInfo.foolsdayMask) && info.userID != MainManager.actorInfo.userID)
         {
            if(hat.currentFrame == MainManager.actorInfo.foolsdayMask)
            {
               SocketConnection.sendByQueue(CommandID.LISHABUBU_EVO_WEAR_HAT,[hat.currentFrame],function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  AnimateManager.playMcAnimate(hat,hat.currentFrame,"mc",function():void
                  {
                     hat.gotoAndStop(hat.currentFrame);
                     DisplayUtil.removeForParent(hat);
                     showGetItemTip(hat.currentFrame);
                  });
               });
            }
            else if(hat.currentFrame != MainManager.actorInfo.foolsdayMask)
            {
               showDialog(3);
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HeadPetVSLionPanel"));
         }
      }
      
      public static function onSwitchMap(param1:MapEvent) : void
      {
         userIdArr = [];
      }
      
      public static function showGetItemTip(param1:uint = 1) : void
      {
         var maskID:uint = param1;
         ResourceManager.getResource(ClientConfig.getAppRes("BlueWhiteTs"),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var obj:DisplayObject = param1;
            mc = obj as MovieClip;
            mc.gotoAndStop(maskID);
            LevelManager.appLevel.addChild(mc);
            mc.x = 290;
            mc.y = 60;
            setTimeout(function():void
            {
               DisplayUtil.removeForParent(mc);
            },2000);
         },"BlueWhiteTsUI");
      }
      
      public static function showAlreadyGetTip() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("BlueWhiteTs"),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var obj:DisplayObject = param1;
            mc = obj as MovieClip;
            mc.gotoAndStop(5);
            LevelManager.appLevel.addChild(mc);
            mc.x = 290;
            mc.y = 90;
            setTimeout(function():void
            {
               DisplayUtil.removeForParent(mc);
            },2000);
         },"BlueWhiteTsUI");
      }
      
      public static function showDialog(param1:uint, param2:Boolean = true, param3:Function = null, param4:uint = 0, param5:uint = 0) : void
      {
         var num:uint = param1;
         var isAlarm:Boolean = param2;
         var applyFun:Function = param3;
         var _exchangeLjNum:uint = param4;
         var _exchangeTxNum:uint = param5;
         ResourceManager.getResource(ClientConfig.getAppRes("BlueWhiteBtn"),function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var onClose:Function = null;
            var obj:DisplayObject = param1;
            onClose = function(param1:MouseEvent = null):void
            {
               mc.ok.removeEventListener(MouseEvent.CLICK,onClose);
               mc.close.removeEventListener(MouseEvent.CLICK,onClose);
               DisplayUtil.removeForParent(mc);
               mc = null;
            };
            mc = obj as MovieClip;
            mc.gotoAndStop(num);
            mc.ok.addEventListener(MouseEvent.CLICK,onClose);
            mc.close.addEventListener(MouseEvent.CLICK,onClose);
            LevelManager.appLevel.addChild(mc);
         },"BlueWhiteBtnUI");
      }
      
      public static function destroy() : void
      {
         if(init)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         }
      }
   }
}
