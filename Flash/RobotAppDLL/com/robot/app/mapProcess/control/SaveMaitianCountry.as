package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class SaveMaitianCountry
   {
      
      private static var _map:BaseMapProcess;
      
      private static const rateArr:Array = [0.2,0.25,0.3,0.5,1];
      
      private static const TIME_STR:String = "每天中午11:00-13:00";
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","11-13","8-14","4","*","2016")]);
      
      private static var _canReceive:Boolean;
      
      private static var _cnt:uint;
       
      
      public function SaveMaitianCountry()
      {
         super();
      }
      
      private static function onGetTime() : void
      {
         if(AC.isInActivityTime)
         {
            timeIn();
         }
         else
         {
            timeOut();
         }
      }
      
      private static function timeIn() : void
      {
         if(TasksManager.getTaskStatus(976) != TasksManager.COMPLETE)
         {
            TasksManager.accept(976,function():void
            {
               TasksManager.complete(976,0,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("拯救麦田村---免费领取道具成功！");
                  }
               });
            });
         }
         _canReceive = true;
         onActivityTime(null);
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
      }
      
      private static function timeOut() : void
      {
         (_map.depthLevel["maigugu"] as MovieClip).visible = false;
         (_map.depthLevel["waterAltar"] as MovieClip).visible = false;
         (_map.depthLevel["lalieniNPC"] as MovieClip).visible = false;
         _map.depthLevel["task975MC"].visible = false;
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         onGetTime();
      }
      
      private static function onActivityTime(param1:SocketEvent = null) : void
      {
         if(_canReceive)
         {
            initInsideTime();
         }
      }
      
      private static function initOutsideTime() : void
      {
         removeActivity();
         ToolTipManager.add(_map.depthLevel["maigugu"] as MovieClip,"麦古古");
         CommonUI.addYellowExcal(_map.depthLevel["maigugu"],25,10);
         (_map.depthLevel["maigugu"] as MovieClip).visible = true;
         (_map.depthLevel["maigugu"] as MovieClip).buttonMode = true;
         (_map.depthLevel["maigugu"] as MovieClip).addEventListener(MouseEvent.CLICK,onMaiguguClick);
         (_map.depthLevel["task975MC"] as MovieClip).visible = true;
         (_map.depthLevel["task975MC"] as MovieClip).gotoAndStop(11);
         ToolTipManager.remove(_map.depthLevel["waterAltar"] as MovieClip);
         CommonUI.removeYellowArrow(_map.depthLevel["waterAltar"]);
         (_map.depthLevel["waterAltar"] as MovieClip).visible = false;
         (_map.depthLevel["waterAltar"] as MovieClip).buttonMode = false;
         (_map.depthLevel["waterAltar"] as MovieClip).removeEventListener(MouseEvent.CLICK,onAltarClick);
         ToolTipManager.remove(_map.depthLevel["lalieniNPC"] as MovieClip);
         CommonUI.removeYellowExcal(_map.depthLevel["lalieniNPC"]);
         (_map.depthLevel["lalieniNPC"] as MovieClip).visible = false;
         (_map.depthLevel["lalieniNPC"] as MovieClip).buttonMode = false;
         (_map.depthLevel["lalieniNPC"] as MovieClip).removeEventListener(MouseEvent.CLICK,onLalieniClick);
      }
      
      private static function onMaiguguClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(TasksManager.getTaskStatus(975) != TasksManager.COMPLETE)
         {
            TasksManager.accept(975,function():void
            {
               startPro();
            });
         }
         else
         {
            NpcDialog.show(NPC.MAIGUGU,[TIME_STR + "会出现邪恶的拉列尼，击败它们收集幻灵水珠来维持水之祭坛的力量，这是最后的机会！"],["你放心都交给我吧！"]);
         }
      }
      
      private static function startPro() : void
      {
         ToolTipManager.remove(_map.depthLevel["maigugu"] as MovieClip);
         CommonUI.removeYellowExcal(_map.depthLevel["maigugu"]);
         (_map.depthLevel["maigugu"] as MovieClip).visible = false;
         (_map.depthLevel["maigugu"] as MovieClip).buttonMode = false;
         (_map.depthLevel["maigugu"] as MovieClip).removeEventListener(MouseEvent.CLICK,onMaiguguClick);
         _canReceive = false;
         NpcDialog.show(NPC.MAIGUGU,["可恶的拉列尼，偷走了我村至宝幻灵水珠！帕罗狄亚这个坏蛋，想趁机逼我臣服于它！"],["你要小心啊，邪恶的帕罗狄亚就要来了！"],[function():void
         {
            (_map.depthLevel["task975MC"] as MovieClip).visible = true;
            MainManager.selfVisible = false;
            AnimateManager.playMcAnimate(_map.depthLevel["task975MC"],1,"mc1",function():void
            {
               NpcDialog.show(NPC.MAIGUGU,["帕罗狄亚好卑鄙，知道我对火束手无策的弱点，赛尔，你可要帮帮我！"],["我怎样才能帮助你呢？"],[function():void
               {
                  NpcDialog.show(NPC.MAIGUGU,["我们一族向来怕火，所以祖先留下了一个水之祭坛，只要激活水之祭坛就能获救，你先退后！"],["好的"],[function():void
                  {
                     (_map.depthLevel["task975MC"] as MovieClip).visible = true;
                     MainManager.selfVisible = false;
                     AnimateManager.playMcAnimate(_map.depthLevel["task975MC"],2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.MAIGUGU,["不好，我受了伤，能力不足以维持水之祭坛的力量，你得帮帮我！"],["怎么帮你？"],[function():void
                        {
                           NpcDialog.show(NPC.MAIGUGU,["每天会出现邪恶的拉列尼，击败它们收集幻灵水珠来维持水之祭坛的力量，这是最后的机会！"],["你放心都交给我吧！"],[function():void
                           {
                              TasksManager.complete(975,0,function():void
                              {
                                 _canReceive = true;
                                 DebugTrace.show("拯救麦田村的前置任务完成！");
                                 (_map.depthLevel["task975MC"] as MovieClip).visible = true;
                                 (_map.depthLevel["task975MC"] as MovieClip).gotoAndStop(11);
                                 MainManager.selfVisible = true;
                                 onActivityTime(null);
                              });
                           }]);
                        }]);
                     });
                  }]);
               }]);
            });
         }]);
      }
      
      private static function initInsideTime() : void
      {
         removeActivity();
         ToolTipManager.remove(_map.depthLevel["maigugu"] as MovieClip);
         CommonUI.removeYellowExcal(_map.depthLevel["maigugu"]);
         (_map.depthLevel["maigugu"] as MovieClip).visible = false;
         (_map.depthLevel["maigugu"] as MovieClip).buttonMode = false;
         (_map.depthLevel["maigugu"] as MovieClip).removeEventListener(MouseEvent.CLICK,onMaiguguClick);
         (_map.depthLevel["task975MC"] as MovieClip).visible = true;
         if(BitBuffSetClass.getState(22444))
         {
            (_map.depthLevel["task975MC"] as MovieClip).gotoAndStop(4);
            insideStatus();
         }
         else
         {
            _canReceive = false;
            AnimateManager.playMcAnimate(_map.depthLevel["task975MC"],3,"mc3",function():void
            {
               (_map.depthLevel["task975MC"] as MovieClip).gotoAndStop(4);
               NpcDialog.show(NPC.MAIGUGU,["拉列尼抢走了麦田村的至宝幻灵水珠，只有夺回幻灵水珠为水之祭坛充能，我们才能坚持下去。"],["恩恩，包在我身上！"],[function():void
               {
                  BitBuffSetClass.setState(22444,1);
                  _canReceive = true;
                  insideStatus();
               }]);
            });
         }
      }
      
      private static function insideStatus() : void
      {
         ToolTipManager.add(_map.depthLevel["waterAltar"] as MovieClip,"水之祭坛");
         CommonUI.addYellowArrow(_map.depthLevel["waterAltar"],90,30);
         (_map.depthLevel["waterAltar"] as MovieClip).visible = true;
         (_map.depthLevel["waterAltar"] as MovieClip).buttonMode = true;
         (_map.depthLevel["waterAltar"] as MovieClip).addEventListener(MouseEvent.CLICK,onAltarClick);
         ToolTipManager.add(_map.depthLevel["lalieniNPC"] as MovieClip,"拉列尼");
         CommonUI.addYellowExcal(_map.depthLevel["lalieniNPC"],14,10);
         (_map.depthLevel["lalieniNPC"] as MovieClip).visible = true;
         (_map.depthLevel["lalieniNPC"] as MovieClip).buttonMode = true;
         (_map.depthLevel["lalieniNPC"] as MovieClip).addEventListener(MouseEvent.CLICK,onLalieniClick);
      }
      
      private static function onAltarClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SaveMaitianCountryEmpoweredPanel"),"正在打开面板……");
      }
      
      public static function onEmpowerSuccess() : void
      {
         _canReceive = false;
         removeActivity();
         AnimateManager.playMcAnimate(_map.depthLevel["task975MC"],4,"mc4",function():void
         {
            (_map.depthLevel["guguFairy"] as MovieClip).visible = true;
            (_map.depthLevel["guguFairy"] as MovieClip).buttonMode = true;
            (_map.depthLevel["guguFairy"] as MovieClip).addEventListener(MouseEvent.CLICK,onFightWithGugu);
         });
      }
      
      private static function onFightWithGugu(param1:MouseEvent) : void
      {
         (_map.depthLevel["guguFairy"] as MovieClip).visible = false;
         (_map.depthLevel["guguFairy"] as MovieClip).buttonMode = false;
         (_map.depthLevel["guguFairy"] as MovieClip).removeEventListener(MouseEvent.CLICK,onFightWithGugu);
         FightManager.fightWithBoss("古古",2);
         _canReceive = true;
      }
      
      public static function onEmpowerLose() : void
      {
         _canReceive = false;
         removeActivity();
         NpcDialog.show(NPC.MAIGUGU,["感谢你帮助我，每次为水之祭坛冲灵我都有一些小心意，你将会随机获得0xff0000 高级精灵胶囊、超级体力药剂、经验券 0xffffff 中的一个！"],["太好了！"],[function():void
         {
            _canReceive = true;
            onActivityTime(null);
         }]);
      }
      
      private static function onLalieniClick(param1:MouseEvent) : void
      {
         SocketConnection.addCmdListener(CommandID.SAVE_MAITIAN_WHICH_FIGHT_WITH,isFightWithLalieni);
         SocketConnection.send(CommandID.SAVE_MAITIAN_WHICH_FIGHT_WITH);
      }
      
      private static function isFightWithLalieni(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var ret:uint;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.SAVE_MAITIAN_WHICH_FIGHT_WITH,isFightWithLalieni);
         data = event.data as ByteArray;
         ret = data.readUnsignedInt();
         DebugTrace.show("对战的是：" + ret);
         if(ret == 0)
         {
            FightManager.fightWithBoss("拉列尼",0);
         }
         else if(ret == 1)
         {
            MainManager.selfVisible = false;
            _canReceive = false;
            removeActivity();
            AnimateManager.playMcAnimate(_map.depthLevel["task975MC"],5,"mc5",function():void
            {
               _canReceive = true;
               (_map.depthLevel["tataerFairy"] as MovieClip).visible = true;
               (_map.depthLevel["tataerFairy"] as MovieClip).buttonMode = true;
               (_map.depthLevel["tataerFairy"] as MovieClip).addEventListener(MouseEvent.CLICK,onFightWithTataer);
            });
         }
      }
      
      private static function onFightWithTataer(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         (_map.depthLevel["tataerFairy"] as MovieClip).visible = false;
         (_map.depthLevel["tataerFairy"] as MovieClip).buttonMode = false;
         (_map.depthLevel["tataerFairy"] as MovieClip).removeEventListener(MouseEvent.CLICK,onFightWithTataer);
         if(getRandomNum(rateArr[_cnt]))
         {
            FightManager.fightWithBoss("塔塔尔",1);
            _canReceive = true;
            _cnt = 0;
         }
         else
         {
            ++_cnt;
            _canReceive = false;
            AnimateManager.playMcAnimate(_map.depthLevel["task975MC"],5,"mc5",function():void
            {
               (_map.depthLevel["task975MC"] as MovieClip).gotoAndStop(_cnt + 6);
               (_map.depthLevel["tataerFairy"] as MovieClip).visible = true;
               (_map.depthLevel["tataerFairy"] as MovieClip).buttonMode = true;
               (_map.depthLevel["tataerFairy"] as MovieClip).addEventListener(MouseEvent.CLICK,onFightWithTataer);
            });
         }
      }
      
      private static function getRandomNum(param1:Number) : Boolean
      {
         var _loc2_:Number = Math.random();
         if(_loc2_ <= param1)
         {
            return true;
         }
         return false;
      }
      
      private static function removeActivity() : void
      {
         ToolTipManager.remove(_map.depthLevel["waterAltar"] as MovieClip);
         CommonUI.removeYellowArrow(_map.depthLevel["waterAltar"]);
         (_map.depthLevel["waterAltar"] as MovieClip).visible = false;
         (_map.depthLevel["waterAltar"] as MovieClip).buttonMode = false;
         (_map.depthLevel["waterAltar"] as MovieClip).removeEventListener(MouseEvent.CLICK,onAltarClick);
         ToolTipManager.remove(_map.depthLevel["lalieniNPC"] as MovieClip);
         CommonUI.removeYellowExcal(_map.depthLevel["lalieniNPC"]);
         (_map.depthLevel["lalieniNPC"] as MovieClip).visible = false;
         (_map.depthLevel["lalieniNPC"] as MovieClip).buttonMode = false;
         (_map.depthLevel["lalieniNPC"] as MovieClip).removeEventListener(MouseEvent.CLICK,onLalieniClick);
         ToolTipManager.remove(_map.depthLevel["maigugu"] as MovieClip);
         CommonUI.removeYellowExcal(_map.depthLevel["maigugu"]);
         (_map.depthLevel["maigugu"] as MovieClip).visible = false;
         (_map.depthLevel["maigugu"] as MovieClip).buttonMode = false;
         (_map.depthLevel["maigugu"] as MovieClip).removeEventListener(MouseEvent.CLICK,onMaiguguClick);
      }
      
      public static function destroy() : void
      {
         _map = null;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
      }
   }
}
