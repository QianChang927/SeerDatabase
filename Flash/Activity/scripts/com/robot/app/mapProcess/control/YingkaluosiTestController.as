package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.NatureChoosePanel;
   import com.robot.app.panel.PetChoosePanel;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.NatureXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class YingkaluosiTestController
   {
      
      public static var hasPlay:Boolean = false;
      
      private static var _time:uint;
       
      
      public function YingkaluosiTestController()
      {
         super();
      }
      
      public static function get time() : uint
      {
         return _time;
      }
      
      public static function enterMap() : void
      {
         SocketConnection.addCmdListener(CommandID.YINGKALUOSI_GET_TIME,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.YINGKALUOSI_GET_TIME,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _time = _loc3_.readUnsignedInt();
            SocketConnection.addCmdListener(CommandID.YINGKALUOSI_NOTICE,onNotice);
            MapManager.changeLocalMap(10016);
         });
         SocketConnection.send(CommandID.YINGKALUOSI_GET_TIME);
      }
      
      private static function onNotice(param1:SocketEvent) : void
      {
         var id:uint = 0;
         var oldDv:uint = 0;
         var newDv:uint = 0;
         var exp:uint = 0;
         var isWin:uint = 0;
         var e:SocketEvent = param1;
         var by:ByteArray = e.data as ByteArray;
         id = by.readUnsignedInt();
         oldDv = by.readUnsignedInt();
         newDv = by.readUnsignedInt();
         exp = by.readUnsignedInt();
         _time = by.readUnsignedInt();
         isWin = by.readUnsignedInt();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            if(isWin == 0)
            {
               if(_time < 10)
               {
                  if(exp != 0)
                  {
                     NpcDialog.show(NPC.YINGKALUOSI,[MainManager.actorInfo.nick + "，不要气馁，我已经看到了你的潜力！希望这些经验能帮助你更快的成长！"],["我一定会加油的！"],[function():void
                     {
                        ToolBarController.panel.hide();
                        Alarm.show("恭喜你获得了" + TextFormatUtil.getRedTxt(exp.toString()) + "点积累经验！");
                     }]);
                  }
                  if(newDv != 0)
                  {
                     NpcDialog.show(NPC.YINGKALUOSI,[MainManager.actorInfo.nick + "，不要气馁，我已经看到了你的潜力！希望这些经验能帮助你更快的成长！"],["我一定会加油的！"],[function():void
                     {
                        ToolBarController.panel.hide();
                        Alarm.show("恭喜你，" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(id)) + "的个体值由" + TextFormatUtil.getRedTxt(oldDv.toString()) + "提高至了" + TextFormatUtil.getRedTxt((oldDv + newDv).toString()) + "！");
                     }]);
                  }
               }
               else
               {
                  startFight();
               }
            }
            if(isWin == 1)
            {
               if(_time < 10)
               {
                  if(exp != 0)
                  {
                     NpcDialog.show(NPC.YINGKALUOSI,[MainManager.actorInfo.nick + "，你的表现不错，看来是我小瞧你了。为了表彰你的英勇，这个就作为你的奖励吧！"],["太好了！"],[function():void
                     {
                        ToolBarController.panel.hide();
                        Alarm.show("恭喜你获得了" + TextFormatUtil.getRedTxt(exp.toString()) + "点积累经验！");
                     }]);
                  }
                  if(newDv != 0)
                  {
                     NpcDialog.show(NPC.YINGKALUOSI,[MainManager.actorInfo.nick + "，你的表现不错，看来是我小瞧你了。为了表彰你的英勇，这个就作为你的奖励吧！"],["太好了！"],[function():void
                     {
                        ToolBarController.panel.hide();
                        Alarm.show("恭喜你，" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(id)) + "的个体值由" + TextFormatUtil.getRedTxt(oldDv.toString()) + "提高至了" + TextFormatUtil.getRedTxt((oldDv + newDv).toString()) + "！");
                     }]);
                  }
               }
               else
               {
                  startFight();
               }
            }
         });
      }
      
      public static function startFight() : void
      {
         if(_time < 9)
         {
            NpcDialog.show(NPC.YINGKALUOSI,[MainManager.actorInfo.nick + "，让我来测试下你精灵的实力吧！"],["来吧！"],[function():void
            {
               ToolBarController.panel.hide();
               FightManager.fightWithBoss("英卡洛斯");
            }]);
         }
         else if(_time == 9)
         {
            NpcDialog.show(NPC.YINGKALUOSI,[MainManager.actorInfo.nick + "，你将迎来最终的试炼，希望你能顺利通过这次挑战！"],["我一定可以的！"],[function():void
            {
               ToolBarController.panel.hide();
               FightManager.fightWithBoss("英卡洛斯");
            }]);
         }
         else if(_time == 10)
         {
            NpcDialog.show(NPC.YINGKALUOSI,["太棒了，你已经通过了我所有的考验！作为奖励，我将给你一次提高精灵个体的机会！"],["哇！真是太好了！"],[function():void
            {
               ToolBarController.panel.hide();
               addDv();
            }]);
         }
         else if(_time == 11)
         {
            NpcDialog.show(NPC.YINGKALUOSI,["太棒了，你已经通过了我所有的考验！作为奖励，我将给你一次提高精灵个体的机会！"],["哇！真是太好了！"],[function():void
            {
               ToolBarController.panel.hide();
               addDv();
            }]);
         }
         else
         {
            NpcDialog.show(NPC.YINGKALUOSI,["你已经完成了所有的试炼！"],["知道了！"],[function():void
            {
               ToolBarController.panel.hide();
            }]);
         }
      }
      
      private static function addDv() : void
      {
         PetChoosePanel.show(function(param1:PetInfo):void
         {
            var info:PetInfo = param1;
            Alert.show("确定要提升" + PetXMLInfo.getName(info.id) + "的个体值吗？",function():void
            {
               SocketConnection.addCmdListener(CommandID.YINGKALUOSI_ADD_DV,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(CommandID.YINGKALUOSI_ADD_DV,arguments.callee);
                  var _loc3_:ByteArray = param1.data as ByteArray;
                  var _loc4_:uint = _loc3_.readUnsignedInt();
                  var _loc5_:uint = _loc3_.readUnsignedInt();
                  var _loc6_:uint = _loc3_.readUnsignedInt();
                  _time = 12;
                  Alarm.show("恭喜你，" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(_loc4_)) + "的个体值由" + TextFormatUtil.getRedTxt(_loc5_.toString()) + "提高至了" + TextFormatUtil.getRedTxt((_loc5_ + _loc6_).toString()) + "！");
               });
               SocketConnection.send(CommandID.YINGKALUOSI_ADD_DV,info.catchTime,4294967295);
            });
         },null,function(param1:PetInfo):Boolean
         {
            if(param1.dv == 31)
            {
               return false;
            }
            return true;
         });
      }
      
      private static function changeNature() : void
      {
         PetChoosePanel.show(function(param1:PetInfo):void
         {
            var info:PetInfo = param1;
            NatureChoosePanel.show(PetXMLInfo.getName(info.id),function(param1:uint):void
            {
               var nature:uint = param1;
               SocketConnection.addCmdListener(CommandID.YINGKALUOSI_ADD_DV,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(CommandID.YINGKALUOSI_ADD_DV,arguments.callee);
                  _time = 12;
                  Alarm.show("恭喜你，" + TextFormatUtil.getRedTxt(PetXMLInfo.getName(info.id)) + "的性格转换为" + TextFormatUtil.getRedTxt(NatureXMLInfo.getName(nature)) + "！");
               });
               SocketConnection.send(CommandID.YINGKALUOSI_ADD_DV,info.catchTime,nature);
            });
         });
      }
      
      public static function leaveMap() : void
      {
         hasPlay = false;
         SocketConnection.removeCmdListener(CommandID.YINGKALUOSI_NOTICE,onNotice);
         MapManager.changeLocalMap(102);
      }
   }
}
