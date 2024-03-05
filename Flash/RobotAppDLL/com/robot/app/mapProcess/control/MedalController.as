package com.robot.app.mapProcess.control
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.MedalsXMLInfo;
   import com.robot.core.event.MailEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.RelationManager;
   import com.robot.core.manager.mail.MailManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class MedalController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _ani:MovieClip;
      
      private static var _award:XML;
      
      private static var _friend:Array;
       
      
      public function MedalController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         _ani = _map.conLevel["MedalMC"];
         DisplayUtil.removeForParent(_ani,false);
      }
      
      public static function check() : Boolean
      {
         _award = getAwardXML();
         if(MainManager.actorInfo.totalAchieve >= uint(_award.@achievepoint))
         {
            return true;
         }
         return false;
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.CROW,["小赛尔，我等你很久啦！这段时间以来，你用实际行动证明了你的勇敢和实力！现在，我代表赛尔号全员，正式授予你0xff0000" + _award.@title + "0xffffff军衔！你做好准备了吗？！"],["我已经做好准备啦！","我还没有准备好，稍等一下！"],[function():void
         {
            playAwardEffect();
         }]);
      }
      
      private static function getAwardXML() : XML
      {
         var _loc1_:XML = null;
         var _loc2_:uint = uint(MainManager.actorInfo.achieRank);
         var _loc3_:uint = 0;
         while(_loc3_ < 32)
         {
            if(BitUtil.getBit(_loc2_,_loc3_) == 0)
            {
               _loc1_ = MedalsXMLInfo.getMedalByIndex(_loc3_ + 5);
               break;
            }
            _loc3_++;
         }
         return _loc1_;
      }
      
      public static function playAwardEffect() : void
      {
         _award = getAwardXML();
         NpcController.hideNpc(103);
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel.addChild(_ani);
         AnimateManager.playMcAnimate(_ani,HonorsHallController.rankLv - 3,"mc",function():void
         {
            NpcController.showNpc(103);
            MainManager.selfVisible = true;
            ToolBarController.showOrHideAllUser(true);
            DisplayUtil.removeForParent(_ani,false);
            ResourceManager.getResource(ClientConfig.getResPath("achieve/rank/" + _award.@rankeffect + ".swf"),function(param1:DisplayObject):void
            {
               var icon:MovieClip = null;
               var mc:DisplayObject = param1;
               if(mc)
               {
                  icon = mc as MovieClip;
                  icon.x = 500;
                  icon.y = 214;
                  LevelManager.topLevel.addChild(icon);
                  AnimateManager.playMcAnimate(icon,0,"",function():void
                  {
                     getTitleEffect();
                     DisplayUtil.removeForParent(icon);
                  });
               }
            },"effect");
         });
      }
      
      private static function getTitleEffect() : void
      {
         ResourceManager.getResource(ClientConfig.getResPath("achieve/rank/" + _award.@titleeffect + ".swf"),function(param1:DisplayObject):void
         {
            var icon:MovieClip = null;
            var mc:DisplayObject = param1;
            if(mc)
            {
               icon = mc as MovieClip;
               icon.x = 490;
               icon.y = 420;
               LevelManager.topLevel.addChild(icon);
               AnimateManager.playMcAnimate(icon,0,"",function():void
               {
                  playEffectEnd();
                  DisplayUtil.removeForParent(icon);
               });
            }
         },"effect");
      }
      
      private static function playEffectEnd() : void
      {
         SocketConnection.addCmdListener(CommandID.CONFERACHIEVEMENT,conferSuccess);
         SocketConnection.send(CommandID.CONFERACHIEVEMENT);
      }
      
      private static function conferSuccess(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.CONFERACHIEVEMENT,conferSuccess);
         MainManager.actorInfo.achieRank = (e.data as ByteArray).readUnsignedInt();
         NpcDialog.show(NPC.CROW,["恭喜你！" + MainManager.actorInfo.formatNick + "，现在你已经荣升为赛尔号的" + _award.@title + "了！是否要以邮件方式通知你的好友呢？"],["是的，我要通知我的好友！","还是不要打扰大家了！"],[function():void
         {
            NpcDialog.show(NPC.CROW,["很荣幸可以亲眼目睹你的成长，期待着你的下一次授勋哦！作为" + _award.@title + "，以后更需要以身作则，帮助身边的朋友哦！"],["好的，我明白了！"],[function():void
            {
               _friend = RelationManager.friendOnLineIDs.concat();
               MailManager.addEventListener(MailEvent.MAIL_SEND,onSend);
               sendEmail(_friend);
               EventManager.dispatchEvent(new RobotEvent("5021"));
            }]);
         },function():void
         {
            NpcDialog.show(NPC.CROW,["很荣幸可以亲眼目睹你的成长，期待着你的下一次授勋哦！作为" + _award.@title + "，以后更需要以身作则，帮助身边的朋友哦！"],["好的，我明白了！"],[function():void
            {
               EventManager.dispatchEvent(new RobotEvent("5021"));
            }]);
         }]);
      }
      
      private static function onSend(param1:MailEvent) : void
      {
         sendEmail(_friend);
      }
      
      private static function sendEmail(param1:Array) : void
      {
         var _loc5_:uint = 0;
         var _loc2_:Date = new Date();
         var _loc3_:Array = [];
         var _loc4_:uint = 0;
         while(_loc4_ < 10)
         {
            if((_loc5_ = param1.shift()) != 0)
            {
               _loc3_.push(_loc5_);
            }
            _loc4_++;
         }
         if(_loc3_.length > 0)
         {
            MailManager.sendMail(10007,"于赛尔历" + _loc2_.fullYear + "年" + (_loc2_.month + 1) + "月" + _loc2_.date + "号，你的好友" + MainManager.actorInfo.nick + "获得了" + _award.@title + "军衔，赶快给他发去贺电吧！",_loc3_);
         }
         else
         {
            MailManager.removeEventListener(MailEvent.MAIL_SEND,onSend);
         }
      }
      
      public static function destory() : void
      {
         _map = null;
         _ani = null;
         _award = null;
         _friend = null;
         SocketConnection.removeCmdListener(CommandID.CONFERACHIEVEMENT,conferSuccess);
         MailManager.removeEventListener(MailEvent.MAIL_SEND,onSend);
      }
   }
}
