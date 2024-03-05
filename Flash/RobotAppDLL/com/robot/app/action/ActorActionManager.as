package com.robot.app.action
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatGridPanel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ChatManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.TransformSkeleton;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class ActorActionManager
   {
      
      public static var isTransforming:Boolean = false;
      
      private static var subMenu:MovieClip;
      
      public static var actionBtn:SimpleButton;
      
      public static var tranBtn:SimpleButton;
      
      private static var unTranBtn:SimpleButton;
      
      private static var aimatBtn:SimpleButton;
      
      {
         setup();
      }
      
      public function ActorActionManager()
      {
         super();
      }
      
      private static function setup() : void
      {
         EventManager.addEventListener(RobotEvent.TRANSFORM_START,onTranStart);
         EventManager.addEventListener(RobotEvent.TRANSFORM_OVER,onTranOver);
      }
      
      private static function onTranStart(param1:RobotEvent) : void
      {
         isTransforming = true;
      }
      
      private static function onTranOver(param1:RobotEvent) : void
      {
         isTransforming = false;
         if(tranBtn)
         {
            tranBtn.visible = !MainManager.actorModel.isTransform;
            unTranBtn.visible = MainManager.actorModel.isTransform;
         }
      }
      
      public static function showMenu(param1:MovieClip = null) : void
      {
         if(subMenu == null)
         {
            subMenu = param1;
            actionBtn = subMenu["actionBtn"];
            tranBtn = subMenu["tranBtn"];
            unTranBtn = subMenu["unTranBtn"];
            aimatBtn = subMenu["aimatBtn"];
            ToolTipManager.add(actionBtn,"蹲下");
            ToolTipManager.add(tranBtn,"变形");
            ToolTipManager.add(unTranBtn,"恢复变形");
            ToolTipManager.add(unTranBtn,"恢复变形");
            ToolTipManager.add(aimatBtn,"瞄准");
            actionBtn.addEventListener(MouseEvent.CLICK,actionHandler);
            tranBtn.addEventListener(MouseEvent.CLICK,tranHandler);
            unTranBtn.addEventListener(MouseEvent.CLICK,unTranHandler);
            aimatBtn.addEventListener(MouseEvent.CLICK,aimatHandler);
         }
         tranBtn.visible = !MainManager.actorModel.isTransform;
         unTranBtn.visible = MainManager.actorModel.isTransform;
      }
      
      private static function onStageClick(param1:MouseEvent) : void
      {
         if(subMenu.hitTestPoint(param1.stageX,param1.stageY,true) == false)
         {
            hide();
         }
      }
      
      public static function hide() : void
      {
         ToolBarController.closeChatTabMc();
         ChatManager.getinstance().showChatPanel(false);
         ChatManager.getinstance().hideSchat();
         ModuleManager.hideModule(ClientConfig.getAppModule("NewSeerFriendMainPanel"));
      }
      
      private static function actionHandler(param1:MouseEvent) : void
      {
         hide();
         if(MainManager.actorModel.pet)
         {
            if(PetXMLInfo.isFlyPet(MainManager.actorModel.pet.info.petID))
            {
               Alarm.show("注意！你现在骑着宠物，不能进行赛尔变形！");
               return;
            }
            if(PetXMLInfo.isRidePetOpen(MainManager.actorModel.pet.info.petID,MainManager.actorInfo))
            {
               Alarm.show("注意！你现在骑着宠物，不需要进行赛尔变形！");
               return;
            }
         }
         if(MainManager.actorInfo.actionType != 0)
         {
            Alarm.show("注意！不要采用危险操作，取消飞行模式才能进行赛尔变形！");
            return;
         }
         if(isTransforming)
         {
            return;
         }
         if(!MainManager.actorModel.isTransform)
         {
            MainManager.actorModel.peculiarAction(MainManager.actorModel.direction);
            MainManager.actorModel.dispatchEvent(new Event("SEER_SQUAT"));
         }
      }
      
      public static function tranHandler(param1:MouseEvent = null) : void
      {
         hide();
         if(MainManager.actorModel.pet)
         {
            if(PetXMLInfo.isFlyPet(MainManager.actorModel.pet.info.petID))
            {
               Alarm.show("注意！你现在骑着宠物，不能进行赛尔变形！");
               return;
            }
            if(PetXMLInfo.isRidePetOpen(MainManager.actorModel.pet.info.petID,MainManager.actorInfo))
            {
               Alarm.show("注意！你现在骑着宠物，不需要进行赛尔变形！");
               return;
            }
         }
         if(MainManager.actorInfo.actionType != 0)
         {
            Alarm.show("注意！不要采用危险操作，取消飞行模式才能进行赛尔变形！");
            return;
         }
         if(isTransforming)
         {
            return;
         }
         var _loc2_:uint = uint(SuitXMLInfo.getSuitID(MainManager.actorInfo.clothIDs));
         if(_loc2_ == 0)
         {
            SimpleAlarm.show("你装备的不是变形套装，马上装备好你的变形套装变形吧！");
            return;
         }
         SocketConnection.send(CommandID.PEOPLE_TRANSFROM,_loc2_);
      }
      
      public static function unTranHandler(param1:MouseEvent = null) : void
      {
         hide();
         if(isTransforming)
         {
            return;
         }
         if(MainManager.actorModel.skeleton is TransformSkeleton)
         {
            (MainManager.actorModel.skeleton as TransformSkeleton).untransform();
         }
      }
      
      public static function aimatHandler(param1:MouseEvent = null) : void
      {
         hide();
         param1.stopImmediatePropagation();
         AimatGridPanel.show();
      }
   }
}
