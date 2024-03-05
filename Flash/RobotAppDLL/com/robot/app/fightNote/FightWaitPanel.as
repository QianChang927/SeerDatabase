package com.robot.app.fightNote
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class FightWaitPanel
   {
      
      private static var panel:MovieClip;
      
      private static var closeBtn:SimpleButton;
      
      private static var selectPanel:MovieClip;
      
      public static var userInfo:UserInfo;
      
      private static var seletctCloseBtn:SimpleButton;
      
      private static var singleBtn:SimpleButton;
      
      private static var multiBtn:SimpleButton;
      
      private static var isInvite:Boolean = false;
      
      {
         initHandler();
      }
      
      public function FightWaitPanel()
      {
         super();
      }
      
      private static function initHandler() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_OPEN,onMapSwitch);
         EventManager.addEventListener(RobotEvent.CLOSE_FIGHT_WAIT,closeWait);
      }
      
      private static function closeWait(param1:RobotEvent) : void
      {
         closePanel();
      }
      
      private static function onMapSwitch(param1:MapEvent) : void
      {
         if(isInvite)
         {
            SocketConnection.send(CommandID.INVITE_FIGHT_CANCEL);
            isInvite = false;
         }
      }
      
      public static function selectMode(param1:UserInfo) : void
      {
         var _info:UserInfo = param1;
         LevelManager.closeMouseEvent();
         userInfo = _info;
         if(selectPanel == null)
         {
            ResourceManager.getResource(ClientConfig.getAppRes("FightSelectMode_mc"),function(param1:MovieClip):void
            {
               var dragBtn:SimpleButton;
               var mc:MovieClip = param1;
               selectPanel = mc;
               DisplayUtil.align(selectPanel,null,AlignType.MIDDLE_CENTER);
               seletctCloseBtn = selectPanel["closeBtn"];
               singleBtn = selectPanel["singleBtn"];
               multiBtn = selectPanel["multiBtn"];
               dragBtn = selectPanel["dragBtn"];
               dragBtn.addEventListener(MouseEvent.MOUSE_DOWN,function():void
               {
                  selectPanel.startDrag();
               });
               dragBtn.addEventListener(MouseEvent.MOUSE_UP,function():void
               {
                  selectPanel.stopDrag();
               });
               seletctCloseBtn.addEventListener(MouseEvent.CLICK,closeSelectHandler);
               singleBtn.addEventListener(MouseEvent.CLICK,selectModeHandler);
               multiBtn.addEventListener(MouseEvent.CLICK,selectModeHandler);
               LevelManager.appLevel.addChild(selectPanel);
            },"FightSelectMode_mc");
         }
         else
         {
            LevelManager.appLevel.addChild(selectPanel);
         }
      }
      
      public static function show() : void
      {
         if(panel == null)
         {
            ResourceManager.getResource(ClientConfig.getAppRes("FightWait"),function(param1:MovieClip):void
            {
               panel = param1;
               panel["closeBtn"].addEventListener(MouseEvent.CLICK,closePanel);
               panel["dragBtn"].addEventListener(MouseEvent.MOUSE_DOWN,startDrag);
               panel["dragBtn"].addEventListener(MouseEvent.MOUSE_UP,stopDrag);
               MainManager.getStage().addEventListener(MouseEvent.MOUSE_UP,stopDrag);
               DisplayUtil.align(panel,null,AlignType.MIDDLE_CENTER);
               panel["myNameTxt"].text = MainManager.actorInfo.nick;
               panel["otherNameTxt"].text = userInfo.nick;
               LevelManager.topLevel.addChild(panel);
               LevelManager.closeMouseEvent();
            },"FightWait_mc",3,false);
         }
         else
         {
            DisplayUtil.align(panel,null,AlignType.MIDDLE_CENTER);
            panel["myNameTxt"].text = MainManager.actorInfo.nick;
            panel["otherNameTxt"].text = userInfo.nick;
            LevelManager.topLevel.addChild(panel);
            LevelManager.closeMouseEvent();
         }
      }
      
      private static function startDrag(param1:MouseEvent) : void
      {
         if(panel)
         {
            panel.startDrag();
         }
      }
      
      private static function stopDrag(param1:MouseEvent) : void
      {
         if(panel)
         {
            panel.stopDrag();
         }
      }
      
      public static function hide() : void
      {
         if(panel)
         {
            if(panel.parent)
            {
               panel["closeBtn"].removeEventListener(MouseEvent.CLICK,closePanel);
               panel["dragBtn"].removeEventListener(MouseEvent.MOUSE_DOWN,startDrag);
               panel["dragBtn"].removeEventListener(MouseEvent.MOUSE_UP,stopDrag);
               MainManager.getStage().removeEventListener(MouseEvent.MOUSE_UP,stopDrag);
               panel.parent.removeChild(panel);
               panel = null;
            }
         }
         isInvite = false;
         LevelManager.openMouseEvent();
      }
      
      private static function closeSelectHandler(param1:MouseEvent) : void
      {
         LevelManager.openMouseEvent();
         selectPanel.parent.removeChild(selectPanel);
      }
      
      private static function selectModeHandler(param1:MouseEvent) : void
      {
         var type:uint = 0;
         var event:MouseEvent = param1;
         var btn:SimpleButton = event.currentTarget as SimpleButton;
         if(btn == singleBtn)
         {
            type = 1;
            PetFightModel.mode = PetFightModel.SINGLE_MODE;
         }
         else
         {
            type = 2;
            PetFightModel.mode = PetFightModel.MULTI_MODE;
         }
         PetFightModel.enemyName = userInfo.nick;
         PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
         FightManager.info = new FightTypeInfo();
         FightManager.info.type = 3;
         FightManager.info.userId = userInfo.userID;
         FightManager.info.fightType = type;
         SocketConnection.sendWithCallback2(CommandID.INVITE_TO_FIGHT,null,[userInfo.userID,type],function(param1:SocketErrorEvent):void
         {
            PetFightModel.mode = PetFightModel.MULTI_MODE;
            PetFightModel.enemyName = "";
            PetFightModel.status = PetFightModel.FIGHT_WITH_NPC;
         });
         isInvite = true;
         closeSelectHandler(null);
         show();
      }
      
      private static function closePanel(param1:MouseEvent = null) : void
      {
         SocketConnection.send(CommandID.INVITE_FIGHT_CANCEL);
         LevelManager.openMouseEvent();
         isInvite = false;
         if(panel)
         {
            panel["closeBtn"].removeEventListener(MouseEvent.CLICK,closePanel);
            panel["dragBtn"].removeEventListener(MouseEvent.MOUSE_DOWN,startDrag);
            panel["dragBtn"].removeEventListener(MouseEvent.MOUSE_UP,stopDrag);
            MainManager.getStage().removeEventListener(MouseEvent.MOUSE_UP,stopDrag);
            panel.parent.removeChild(panel);
            panel = null;
         }
      }
   }
}
