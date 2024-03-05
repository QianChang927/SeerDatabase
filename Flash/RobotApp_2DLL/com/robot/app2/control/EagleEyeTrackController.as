package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class EagleEyeTrackController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMc:MovieClip;
      
      private static var haidiaolist:Array;
      
      private static var iceMc:MovieClip;
      
      private static var isFightBoss:Boolean;
      
      private static var coutTime:uint;
       
      
      public function EagleEyeTrackController()
      {
         super();
      }
      
      public static function initForMap809(param1:BaseMapProcess) : void
      {
         _map = param1;
         taskMc = _map.conLevel["EagleEyeTrackmc"];
         haidiaolist = [];
         var _loc2_:int = 0;
         while(_loc2_ < 3)
         {
            haidiaolist[_loc2_] = _map.conLevel["haidao" + _loc2_];
            haidiaolist[_loc2_].buttonMode = true;
            _loc2_++;
         }
         iceMc = _map.conLevel["iceMc"];
         taskMc.buttonMode = true;
         iceMc.buttonMode = true;
         SocketConnection.addCmdListener(CommandID.FUCK_SHINEHOO_TIMES,dateMax);
         SocketConnection.send(CommandID.FUCK_SHINEHOO_TIMES,10263);
      }
      
      private static function dateMax(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FUCK_SHINEHOO_TIMES,dateMax);
         var _loc2_:ByteArray = param1.data as ByteArray;
         coutTime = _loc2_.readUnsignedInt();
         initGame();
      }
      
      private static function initGame() : void
      {
         var _loc1_:int = 0;
         if(BufferRecordManager.getState(MainManager.actorInfo,614))
         {
            if(isFightBoss)
            {
               isFightBoss = false;
               _loc1_ = 0;
               while(_loc1_ < 3)
               {
                  haidiaolist[_loc1_].visible = false;
                  _loc1_++;
               }
               taskMc.gotoAndStop(3);
               iceMc.visible = false;
               taskMc.addEventListener(MouseEvent.CLICK,onFightbasile);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            }
            else
            {
               _loc1_ = 0;
               while(_loc1_ < 3)
               {
                  haidiaolist[_loc1_].addEventListener(MouseEvent.CLICK,onFightHaidiao);
                  _loc1_++;
               }
               iceMc.addEventListener(MouseEvent.CLICK,onIceMc);
               taskMc.visible = false;
            }
         }
         else
         {
            _loc1_ = 0;
            while(_loc1_ < 3)
            {
               haidiaolist[_loc1_].visible = false;
               _loc1_++;
            }
            CommonUI.addYellowArrow(taskMc,280,230);
            taskMc.addEventListener(MouseEvent.CLICK,beforeTask);
         }
      }
      
      private static function onFightFinish(param1:PetFightEvent) : void
      {
         var _loc3_:int = 0;
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.BALESI,["传说中的赛尔果然厉害。我愿意跟随你一起对抗杰洛里！保护缪斯少主！"]);
            _loc3_ = 0;
            while(_loc3_ < 3)
            {
               haidiaolist[_loc3_].visible = false;
               _loc3_++;
            }
         }
         else
         {
            NpcDialog.show(NPC.BALESI,["哈哈哈。传说中的赛尔也不过如此。我奉劝你不要再阻止杰洛里大人的计划。快走吧！"],["我不会放弃的！"]);
         }
      }
      
      private static function beforeTask(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         CommonUI.removeYellowArrow(taskMc);
         NpcDialog.show(NPC.SEER,["你怎么会在冰柱里面？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.BALESI,[MainManager.actorInfo.nick + "，你总算来了。我本打算去帮助缪斯少主。但却被邪恶的杰洛里冰封在这里。快来劈开冰柱，救我出去。"],["又是可恶的杰洛里！我该怎么帮你！"],[function():void
            {
               NpcDialog.show(NPC.BALESI,["去跟海盗对战，收集火光石，锻造火光石斧就能够劈开冰柱，救我出去！快点，我要去救少主！"],["好的。我马上就去！"],[function():void
               {
                  NpcDialog.show(NPC.HAIDAOTOU,["就凭你，也想拿到火光石？痴心妄想！让你看看杰洛里大人给你留下的天罗地网！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMc,1,"mc1",function():void
                     {
                        taskMc.visible = false;
                        BufferRecordManager.setState(MainManager.actorInfo,614,true);
                        FightManager.fightWithBoss("海盗",0);
                        var _loc1_:* = 0;
                        while(_loc1_ < 3)
                        {
                           haidiaolist[_loc1_].addEventListener(MouseEvent.CLICK,onFightHaidiao);
                           _loc1_++;
                        }
                        iceMc.addEventListener(MouseEvent.CLICK,onIceMc);
                        MainManager.selfVisible = true;
                        ToolBarController.showOrHideAllUser(true);
                     });
                  });
               }]);
            }]);
         });
      }
      
      private static function onFightHaidiao(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86056929);
         FightManager.fightWithBoss("海盗",0);
      }
      
      private static function onIceMc(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86056928);
         ModuleManager.showModule(ClientConfig.getAppModule("EagleEyeTrackMainPanel"),"正在打开",endGame);
      }
      
      private static function endGame(param1:uint) : void
      {
         var i:uint = 0;
         var flag:uint = param1;
         if(flag)
         {
            iceMc.visible = false;
            MainManager.selfVisible = false;
            ToolBarController.showOrHideAllUser(false);
            i = 0;
            while(i < 3)
            {
               haidiaolist[i].visible = false;
               i++;
            }
            taskMc.visible = true;
            AnimateManager.playMcAnimate(taskMc,2,"mc2",function():void
            {
               NpcDialog.show(NPC.BALESI,[MainManager.actorInfo.nick + "，谢谢你的英勇与善良。不过，你逃不掉了！ "],["你说什么？"],[function():void
               {
                  NpcDialog.show(NPC.HAIDAOTOU,["笨蛋！巴勒斯是杰洛里大人派来消灭你的。没想到你那么笨，一下子就进入了我们的圈套。"],["你们太可恶了！"],[function():void
                  {
                     NpcDialog.show(NPC.BALESI,["这次，一切都结束了。流沙破岩击！消亡吧！"],null,null,false,function():void
                     {
                        isFightBoss = true;
                        MainManager.selfVisible = true;
                        ToolBarController.showOrHideAllUser(true);
                        taskMc.gotoAndStop(3);
                        taskMc.addEventListener(MouseEvent.CLICK,onFightbasile);
                        onFightbasile();
                     });
                  }]);
               }]);
            });
         }
         else
         {
            NpcDialog.show(NPC.HAIDAOTOU,["哈哈哈，还是杰洛里大人高明！就凭你，怎么可能锻造出可以劈开冰柱的的火光石斧呢？啊哈哈哈。"],["别得意，我不会放弃的！"]);
         }
      }
      
      private static function onFightbasile(param1:MouseEvent = null) : void
      {
         SocketConnection.send(1022,86056931);
         if(coutTime <= 10)
         {
            isFightBoss = true;
            FightManager.fightWithBoss("巴勒斯",1);
         }
         else
         {
            Alarm.show("你今天与巴勒斯对战的次数达到最大10次了哦！明天再来吧！");
         }
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            haidiaolist[_loc1_].removeEventListener(MouseEvent.CLICK,onFightHaidiao);
            _loc1_++;
         }
         CommonUI.removeYellowArrow(taskMc);
         taskMc.removeEventListener(MouseEvent.CLICK,beforeTask);
         taskMc.removeEventListener(MouseEvent.CLICK,onFightbasile);
         iceMc.removeEventListener(MouseEvent.CLICK,onIceMc);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         SocketConnection.removeCmdListener(CommandID.FUCK_SHINEHOO_TIMES,dateMax);
         haidiaolist = null;
         taskMc = null;
         iceMc = null;
         _map = null;
      }
   }
}
