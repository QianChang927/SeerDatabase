package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class ToothFairyController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var toothMv:MovieClip;
      
      private static var tipMc:MovieClip;
      
      private static var flag:uint;
      
      private static var isFirstInMap:Boolean;
       
      
      public function ToothFairyController()
      {
         super();
      }
      
      public static function initMap31(param1:BaseMapProcess) : void
      {
         _map = param1;
         toothMv = _map.conLevel["toothMv"];
         tipMc = MapManager.currentMap.libManager.getMovieClip("TipsMc");
         toothMv.buttonMode = true;
         SocketConnection.addCmdListener(CommandID.FUCK_SHINEHOO_TIMES,setState);
         SocketConnection.send(CommandID.FUCK_SHINEHOO_TIMES,10249);
         (_map.conLevel["toothFairy"] as SimpleButton).addEventListener(MouseEvent.CLICK,onStartGame);
         ToolTipManager.add(_map.conLevel["toothFairy"],"雷恩娜的褪色记忆");
         isFirstInMap = true;
      }
      
      private static function setState(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         flag = _loc2_.readUnsignedInt();
      }
      
      private static function onStartGame(param1:MouseEvent) : void
      {
         var t:uint = 0;
         var event:MouseEvent = param1;
         if(flag)
         {
            _map.depthLevel.addChild(tipMc);
            tipMc.x = 321;
            tipMc.y = 250;
            (_map.conLevel["toothFairy"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onStartGame);
            t = setTimeout(function():void
            {
               (_map.conLevel["toothFairy"] as SimpleButton).addEventListener(MouseEvent.CLICK,onStartGame);
               clearTimeout(t);
               _map.depthLevel.removeChild(tipMc);
            },2000);
         }
         else
         {
            MainManager.selfVisible = false;
            ToolBarController.showOrHideAllUser(false);
            AnimateManager.playMcAnimate(toothMv,1,"mc1",function():void
            {
               isFirstInMap = false;
               toothMv.gotoAndStop(2);
               toothMv.addEventListener(MouseEvent.CLICK,step2);
               (_map.conLevel["toothFairy"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onStartGame);
               (_map.conLevel["toothFairy"] as SimpleButton).addEventListener(MouseEvent.CLICK,step2);
            });
         }
      }
      
      private static function step2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!BufferRecordManager.getState(MainManager.actorInfo,608))
         {
            AnimateManager.playMcAnimate(toothMv,2,"mc2",function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,608,true);
               SocketConnection.send(1022,86056673);
               ModuleManager.showModule(ClientConfig.getAppModule("ToothFairyMainPanel"),"正在打开",endGame);
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ToothFairyMainPanel"),"正在打开",endGame);
            (_map.conLevel["toothFairy"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onStartGame);
            (_map.conLevel["toothFairy"] as SimpleButton).addEventListener(MouseEvent.CLICK,step2);
         }
      }
      
      private static function endGame() : void
      {
         AnimateManager.playMcAnimate(toothMv,3,"mc3",function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active201304110236"),function():void
            {
               AnimateManager.playMcAnimate(toothMv,4,"mc4",function():void
               {
                  FightManager.fightWithBoss("雷恩娜",1);
                  MainManager.selfVisible = true;
                  ToolBarController.showOrHideAllUser(true);
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         (_map.conLevel["toothFairy"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onStartGame);
         SocketConnection.removeCmdListener(CommandID.FUCK_SHINEHOO_TIMES,setState);
         toothMv.removeEventListener(MouseEvent.CLICK,step2);
         (_map.conLevel["toothFairy"] as SimpleButton).removeEventListener(MouseEvent.CLICK,step2);
         ToolTipManager.remove(_map.conLevel["toothFairy"]);
         _map = null;
         toothMv = null;
      }
   }
}
