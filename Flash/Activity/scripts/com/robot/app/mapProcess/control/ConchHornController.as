package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.control.TaskController_934;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class ConchHornController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const fairyIDArr:Array = [692,249,30,703,1004,198];
      
      private static const petNameArr:Array = ["扶来","浮空苗","贝尔","小可","费舍","小鳍鱼"];
      
      private static var _fairyMC:MovieClip;
      
      private static var _fairyIndex:uint;
      
      private static var AC:ActivityControl = new ActivityControl([new CronTimeVo("*","16-17","11-17","12","*","2015")]);
      
      private static const TIME_STR:String = "0xff0000下午16:00—18:000xffffff";
       
      
      public function ConchHornController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(1130) != TasksManager.COMPLETE)
         {
            TasksManager.accept(1130,function():void
            {
               TasksManager.complete(1130,0,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     DebugTrace.show("海螺号角---免费领取道具成功！");
                  }
               });
            });
         }
         if(TasksManager.getTaskStatus(TaskController_934.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_934.TASK_ID,function(param1:Array):void
            {
               if(param1[0])
               {
                  removeActivity();
               }
               else
               {
                  onActivityTime(null);
               }
            });
         }
         else
         {
            onActivityTime(null);
         }
      }
      
      private static function initInside() : void
      {
         var str:String = null;
         var so:SharedObject = null;
         removeActivity();
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         str = "1220_2";
         so = SOManager.getUserSO(SOManager.ACTIVITY);
         if(so.data[str] == null)
         {
            (_map.conLevel["conchHornCartoon"] as MovieClip).visible = true;
            (_map.conLevel["conchHornCartoon"] as MovieClip).buttonMode = true;
            (_map.conLevel["conchHornCartoon"] as MovieClip).gotoAndStop(4);
            AnimateManager.playMcAnimate(_map.conLevel["conchHornCartoon"],4,"mc4",function():void
            {
               NpcDialog.show(NPC.SENPUTE,["吹响巨型海螺的东西就在我们身上，有本事就来抢吧！我会让你付出惨痛的代价！哈哈！"],["呵呵，让我拔光你的毛！"],[function():void
               {
                  so.data[str] = true;
                  SOManager.flush(so);
                  DebugTrace.show("海螺号角---前置任务2完成！");
                  (_map.conLevel["conchHornCartoon"] as MovieClip).visible = true;
                  (_map.conLevel["conchHornCartoon"] as MovieClip).gotoAndStop(5);
                  (_map.conLevel["conch"] as MovieClip).buttonMode = true;
                  (_map.conLevel["conch"] as MovieClip).addEventListener(MouseEvent.CLICK,onConchClick2);
                  ToolTipManager.add(_map.conLevel["conch"],"巨型海螺");
                  CommonUI.addYellowArrow(_map.conLevel["conch"],100,0,45);
               }]);
            });
         }
         else
         {
            (_map.conLevel["conchHornCartoon"] as MovieClip).visible = true;
            (_map.conLevel["conchHornCartoon"] as MovieClip).gotoAndStop(5);
            (_map.conLevel["conch"] as MovieClip).buttonMode = true;
            (_map.conLevel["conch"] as MovieClip).addEventListener(MouseEvent.CLICK,onConchClick2);
            ToolTipManager.add(_map.conLevel["conch"],"巨型海螺");
            CommonUI.addYellowArrow(_map.conLevel["conch"],100,0,45);
         }
      }
      
      private static function initOutside() : void
      {
         removeActivity();
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         var _loc1_:String = "1220_1";
         var _loc2_:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
         if(_loc2_.data[_loc1_] == null)
         {
            (_map.conLevel["conchHornCartoon"] as MovieClip).visible = true;
            (_map.conLevel["conchHornCartoon"] as MovieClip).buttonMode = true;
            (_map.conLevel["conchHornCartoon"] as MovieClip).gotoAndStop(1);
            (_map.conLevel["xiaobu"] as MovieClip).buttonMode = true;
            CommonUI.addYellowExcal(_map.conLevel["xiaobu"],30,0);
            ToolTipManager.add(_map.conLevel["xiaobu"] as MovieClip,"小布");
            (_map.conLevel["xiaobu"] as MovieClip).addEventListener(MouseEvent.CLICK,onXiaobuClick);
         }
         else
         {
            (_map.conLevel["conchHornCartoon"] as MovieClip).visible = true;
            (_map.conLevel["conchHornCartoon"] as MovieClip).gotoAndStop(4);
            (_map.conLevel["senpute"] as MovieClip).buttonMode = true;
            (_map.conLevel["senpute"] as MovieClip).addEventListener(MouseEvent.CLICK,onSenputeClick);
            ToolTipManager.add(_map.conLevel["senpute"],"森普特");
            CommonUI.addYellowExcal(_map.conLevel["senpute"],30,-10);
            (_map.conLevel["conch"] as MovieClip).buttonMode = true;
            (_map.conLevel["conch"] as MovieClip).addEventListener(MouseEvent.CLICK,onConchClick3);
            ToolTipManager.add(_map.conLevel["conch"],"巨型海螺");
            CommonUI.addYellowArrow(_map.conLevel["conch"],100,0,45);
         }
      }
      
      private static function removeActivity() : void
      {
         (_map.conLevel["xiaobu"] as MovieClip).removeEventListener(MouseEvent.CLICK,onXiaobuClick);
         (_map.conLevel["xiaobu"] as MovieClip).buttonMode = false;
         CommonUI.removeYellowExcal(_map.conLevel["xiaobu"]);
         (_map.conLevel["conch"] as MovieClip).removeEventListener(MouseEvent.CLICK,onConchClick);
         (_map.conLevel["conch"] as MovieClip).removeEventListener(MouseEvent.CLICK,onConchClick2);
         (_map.conLevel["conch"] as MovieClip).removeEventListener(MouseEvent.CLICK,onConchClick3);
         (_map.conLevel["conch"] as MovieClip).buttonMode = false;
         CommonUI.removeYellowArrow(_map.conLevel["conch"]);
         (_map.conLevel["senpute"] as MovieClip).removeEventListener(MouseEvent.CLICK,onSenputeClick);
         (_map.conLevel["senpute"] as MovieClip).buttonMode = false;
         CommonUI.removeYellowExcal(_map.conLevel["senpute"]);
         (_map.conLevel["conchHornCartoon"] as MovieClip).visible = false;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         _fairyMC = _map.conLevel["fairy"];
         _fairyMC.buttonMode = false;
         ToolTipManager.remove(_fairyMC);
         _fairyMC.removeEventListener(MouseEvent.CLICK,fightWithFairy);
      }
      
      private static function onXiaobuClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         (_map.conLevel["xiaobu"] as MovieClip).removeEventListener(MouseEvent.CLICK,onXiaobuClick);
         (_map.conLevel["xiaobu"] as MovieClip).buttonMode = false;
         CommonUI.removeYellowExcal(_map.conLevel["xiaobu"]);
         NpcDialog.show(NPC.XIAOBU,["唔唔唔…."],["咦！小布这是怎么了！"],[function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["conchHornCartoon"],1,"mc1",function():void
            {
               NpcDialog.show(NPC.SEER,["小布一直指着那个巨型海螺，难道这海螺里有古怪？"],["让我好好看看！"],[function():void
               {
                  (_map.conLevel["conch"] as MovieClip).buttonMode = true;
                  (_map.conLevel["conch"] as MovieClip).addEventListener(MouseEvent.CLICK,onConchClick);
                  ToolTipManager.add(_map.conLevel["conch"],"巨型海螺");
                  CommonUI.addYellowArrow(_map.conLevel["conch"],100,0,45);
               }]);
            });
         }]);
      }
      
      private static function onConchClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         (_map.conLevel["conch"] as MovieClip).removeEventListener(MouseEvent.CLICK,onConchClick);
         (_map.conLevel["conch"] as MovieClip).buttonMode = false;
         CommonUI.removeYellowArrow(_map.conLevel["conch"]);
         AnimateManager.playMcAnimate(_map.conLevel["conchHornCartoon"],2,"mc2",function():void
         {
            NpcDialog.show(NPC.SENPUTE,["小子，想不到你竟敢进入帕罗狄亚大人的领地，这次你别想全身而退！"],["哼哼，就凭你们两只破鸟？"],[function():void
            {
               NpcDialog.show(NPC.SENPUTE,["哼，你可别小看我们，不知道有多少小精灵都栽在我们手里，除非你能让巨型海螺发出号角声，否则休想拯救它们！"],["可恶的家伙！"],[function():void
               {
                  NpcDialog.show(NPC.SENPUTE,["哈哈！不妨告诉你，只有我们知道其中的诀窍，机会很渺茫，有本事就在0xff0000下午16:00—18:000xffffff让巨型海螺发出号角声吧！"],["小布，我们一定可以做到的！"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["conchHornCartoon"],3,"mc3",function():void
                     {
                        var _loc1_:* = "1220_1";
                        var _loc2_:* = SOManager.getUserSO(SOManager.ACTIVITY);
                        _loc2_.data[_loc1_] = true;
                        SOManager.flush(_loc2_);
                        DebugTrace.show("海螺号角---前置任务1完成！");
                        (_map.conLevel["conchHornCartoon"] as MovieClip).visible = true;
                        (_map.conLevel["conchHornCartoon"] as MovieClip).gotoAndStop(4);
                        (_map.conLevel["senpute"] as MovieClip).buttonMode = true;
                        (_map.conLevel["senpute"] as MovieClip).addEventListener(MouseEvent.CLICK,onSenputeClick);
                        ToolTipManager.add(_map.conLevel["senpute"],"森普特");
                        CommonUI.addYellowExcal(_map.conLevel["senpute"],30,-10);
                        (_map.conLevel["conch"] as MovieClip).buttonMode = true;
                        (_map.conLevel["conch"] as MovieClip).addEventListener(MouseEvent.CLICK,onConchClick3);
                        ToolTipManager.add(_map.conLevel["conch"],"巨型海螺");
                        CommonUI.addYellowArrow(_map.conLevel["conch"],100,0,45);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function onSenputeClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SENPUTE,["小子，想不到你竟敢进入帕罗狄亚大人的领地，这次你别想全身而退！"],["哼哼，就凭你们两只破鸟？"],[function():void
         {
            NpcDialog.show(NPC.SENPUTE,["哼，你可别小看我们，不知道有多少小精灵都栽在我们手里，除非你能让巨型海螺发出号角声，否则休想拯救它们！"],["可恶的家伙！"],[function():void
            {
               NpcDialog.show(NPC.SENPUTE,["哈哈！不妨告诉你，只有我们知道其中的诀窍，机会很渺茫，有本事就在" + TIME_STR + "让巨型海螺发出号角声吧！"],["小布，我们一定可以做到的！"]);
            }]);
         }]);
      }
      
      private static function onConchClick2(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ConchHornPanel"),"正在打开面板……",true);
      }
      
      private static function onConchClick3(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ConchHornPanel"),"正在打开面板……",false);
      }
      
      public static function allLighten() : void
      {
         CommonUI.removeYellowArrow(_map.conLevel["conch"]);
         AnimateManager.playMcAnimate(_map.conLevel["conchHornCartoon"],5,"mc5",function():void
         {
            SocketConnection.addCmdListener(CommandID.CONCH_HORN_GET_PET_ID,onCanFight);
            SocketConnection.send(CommandID.CONCH_HORN_GET_PET_ID);
         });
      }
      
      private static function onCanFight(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         var mon_id:uint = data.readUnsignedInt();
         _fairyIndex = fairyIDArr.indexOf(mon_id);
         AnimateManager.playMcAnimate(_map.conLevel["conchHornCartoon"],_fairyIndex + 6,"mc" + (_fairyIndex + 6),function():void
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
            _fairyMC.buttonMode = true;
            _fairyMC.addEventListener(MouseEvent.CLICK,fightWithFairy);
            _map.conLevel["conchHornCartoon"].addEventListener(MouseEvent.CLICK,fightWithFairy);
            ToolTipManager.add(_fairyMC,petNameArr[_fairyIndex]);
         });
      }
      
      private static function fightWithFairy(param1:MouseEvent) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
         FightManager.fightWithBoss(petNameArr[_fairyIndex],_fairyIndex);
      }
      
      private static function onFight(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         AnimateManager.playMcAnimate(_map.conLevel["conchHornCartoon"],_fairyIndex + 12,"mc" + (_fairyIndex + 12),function():void
         {
            _fairyMC.buttonMode = false;
            _fairyMC.removeEventListener(MouseEvent.CLICK,fightWithFairy);
            _map.conLevel["conchHornCartoon"].removeEventListener(MouseEvent.CLICK,fightWithFairy);
            ToolTipManager.remove(_fairyMC);
            (_map.conLevel["conchHornCartoon"] as MovieClip).gotoAndStop(4);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            onActivityTime(null);
         });
      }
      
      private static function onActivityTime(param1:SocketEvent = null) : void
      {
         if(AC.isInActivityTime)
         {
            initInside();
         }
         else
         {
            initOutside();
         }
      }
      
      public static function destroy() : void
      {
         _map = null;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         SocketConnection.removeCmdListener(CommandID.CONCH_HORN_GET_PET_ID,onCanFight);
      }
   }
}
