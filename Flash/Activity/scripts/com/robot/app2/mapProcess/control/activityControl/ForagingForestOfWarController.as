package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class ForagingForestOfWarController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _warBtn0:SimpleButton;
      
      private static var _warBtn1:SimpleButton;
      
      private static var _warMc:MovieClip;
      
      private static var _pergola:SimpleButton;
       
      
      public function ForagingForestOfWarController()
      {
         super();
      }
      
      public static function initForMap414(param1:BaseMapProcess) : void
      {
         _map = param1;
         _warBtn0 = _map.conLevel["warBtn0"];
         _warBtn1 = _map.conLevel["warBtn1"];
         _warMc = _map.conLevel["warMc"];
         _pergola = _map.conLevel["pergola"];
         _warBtn0.addEventListener(MouseEvent.CLICK,onClick);
         _warBtn1.addEventListener(MouseEvent.CLICK,onClick);
         _pergola.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         SocketConnection.send(1022,86054657);
         if(!BufferRecordManager.getState(MainManager.actorInfo,1101))
         {
            MainManager.selfVisible = false;
            ToolBarController.showOrHideAllUser(false);
            AnimateManager.playMcAnimate(_warMc,1,"mc1",function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active201301310025"),function():void
               {
                  AnimateManager.playMcAnimate(_warMc,2,"mc2",function():void
                  {
                     KTool.getFrameMc(_warMc,2,"mc2",function(param1:MovieClip):void
                     {
                        param1.gotoAndStop(1);
                     });
                     NpcDialog.show(NPC.CHAONENG_GUANJIA,["亲爱的主人，了解了事情的始末，原来它们之间只是一场误会呀！不过究竟贪吃蛇特雷西为什么能够自动吸收其它精灵的能量呢？ "],["嗯，你看接下来怎么办？"],[function():void
                     {
                        NpcDialog.show(NPC.CHAONENG_GUANJIA,["亲爱的主人，要不我们帮他们解开封印消除误会吧！说不定还能顺便和它们成为好伙伴呢！它们都这么贪吃，真是好玩！"],["嗯嗯，就这么办！"],[function():void
                        {
                           SocketConnection.send(1022,86054656);
                           MainManager.selfVisible = true;
                           ToolBarController.showOrHideAllUser(true);
                           BufferRecordManager.setState(MainManager.actorInfo,1101,true);
                           DisplayUtil.removeForParent(_warMc,false);
                           ModuleManager.showModule(ClientConfig.getAppModule("ForagingForestOfWarPanel"));
                        }]);
                     }]);
                  });
               });
            },false);
         }
         else
         {
            SocketConnection.send(1022,86054658);
            ModuleManager.showModule(ClientConfig.getAppModule("ForagingForestOfWarPanel"));
         }
      }
      
      public static function destroy() : void
      {
         _warBtn0.removeEventListener(MouseEvent.CLICK,onClick);
         _warBtn1.removeEventListener(MouseEvent.CLICK,onClick);
         _pergola.removeEventListener(MouseEvent.CLICK,onClick);
         _map = null;
         _warBtn0 = null;
         _warBtn1 = null;
         _warMc = null;
      }
   }
}
