package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class FoolsdayActiveController
   {
      
      public static var masksArray:Array = [];
      
      private static var getInfo:Boolean = false;
       
      
      public function FoolsdayActiveController()
      {
         super();
      }
      
      private static function checkMaskState() : void
      {
         masksArray = [0,0,0,0];
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,function(param1:SocketEvent):void
         {
            var _loc6_:SingleItemInfo = null;
            var _loc7_:int = 0;
            SocketConnection.removeCmdListener(CommandID.ITEM_LIST,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            var _loc5_:int = 0;
            while(_loc5_ < _loc4_)
            {
               _loc7_ = (_loc6_ = new SingleItemInfo(_loc3_)).itemID - 1400027;
               masksArray[_loc7_] = 1;
               _loc5_++;
            }
         });
         SocketConnection.send(CommandID.ITEM_LIST,1400027,1400030,2);
      }
      
      public static function clickfoolsdayMask(param1:int, param2:int) : void
      {
         var userID:int = param1;
         var maskID:int = param2;
         checkMaskState();
         if(Boolean(MainManager.actorInfo.foolsdayMask) && userID != MainManager.actorInfo.userID)
         {
            SocketConnection.addCmdListener(CommandID.FOOLS_DAY_ACTIVE_3_GETMASK,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.FOOLS_DAY_ACTIVE_3_GETMASK,arguments.callee);
               var _loc3_:ByteArray = param1.data as ByteArray;
               var _loc4_:int;
               if(_loc4_ = int(_loc3_.readUnsignedInt()))
               {
                  masksArray[maskID - 1] = 1;
                  if(masksArray.indexOf(0) == -1)
                  {
                     showAlreadyGetTip(2);
                  }
                  else
                  {
                     showGetItemTip(maskID);
                  }
               }
               else
               {
                  showAlreadyGetTip(1);
               }
            });
            SocketConnection.send(CommandID.FOOLS_DAY_ACTIVE_3_GETMASK,maskID);
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("XiaoxiaoJixieShiPanel"));
         }
      }
      
      public static function showGetItemTip(param1:int) : void
      {
         var mc:MovieClip = null;
         var i:int = param1;
         mc = UIManager.getMovieClip("foolsday_showtip_" + i);
         LevelManager.appLevel.addChild(mc);
         mc.x = 310;
         mc.y = 90;
         setTimeout(function():void
         {
            DisplayUtil.removeForParent(mc);
         },2000);
      }
      
      public static function showAlreadyGetTip(param1:int) : void
      {
         var mc:MovieClip = null;
         var i:int = param1;
         mc = UIManager.getMovieClip("foolsday_showtip_6");
         LevelManager.appLevel.addChild(mc);
         mc.x = 310;
         mc.y = 90;
         if(i == 1)
         {
            mc["mc"].gotoAndStop(1);
         }
         else
         {
            mc["mc"].gotoAndStop(2);
         }
         setTimeout(function():void
         {
            DisplayUtil.removeForParent(mc);
         },2000);
      }
   }
}
