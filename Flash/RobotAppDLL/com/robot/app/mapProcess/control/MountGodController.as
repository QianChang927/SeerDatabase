package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MountGodController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _sTalk:Boolean = false;
      
      private static var _fTalk:Boolean = false;
       
      
      public function MountGodController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(_sTalk)
         {
            _map.conLevel["npc"].gotoAndStop(5);
         }
         if(_fTalk)
         {
            _map.conLevel["npc"].gotoAndStop(4);
         }
         if(TasksManager.getTaskStatus(326) == TasksManager.COMPLETE)
         {
            _map.conLevel["npc"].gotoAndStop(5);
         }
         ToolTipManager.add(_map.conLevel["hit"],"山神迪符特");
         _map.conLevel["hit"].buttonMode = true;
         _map.conLevel["hit"].addEventListener(MouseEvent.CLICK,onNpcClick);
      }
      
      private static function onNpcClick(param1:MouseEvent) : void
      {
         if(_sTalk)
         {
            FightManager.fightWithBoss("迪符特");
            return;
         }
         if(TasksManager.getTaskStatus(647) == TasksManager.COMPLETE && TasksManager.getTaskStatus(649) == TasksManager.COMPLETE && TasksManager.getTaskStatus(654) == TasksManager.COMPLETE && TasksManager.getTaskStatus(656) == TasksManager.COMPLETE)
         {
            proSuccess();
         }
         else
         {
            proFail();
         }
      }
      
      private static function proSuccess() : void
      {
         _sTalk = true;
         AnimateManager.playMcAnimate(_map.conLevel["npc"],2,"mc_2",function():void
         {
            _map.conLevel["npc"].gotoAndStop(5);
            NpcDialog.show(NPC.DIFUTE,["不错，万年来，我还没见过如此清澈的眼神，相信你是可以托付的人……"],null,null,false,function():void
            {
               NpcDialog.show(NPC.DIFUTE,["可是，如果你不展示一下实力的话，我无法确信是否可以真正托付于你，让我看看你的实力吧！"],["来吧！我对自己有信心！","让我再准备一下！"],[function():void
               {
                  FightManager.fightWithBoss("迪符特");
               }]);
            });
         });
      }
      
      private static function proFail() : void
      {
         if(_fTalk)
         {
            NpcDialog.show(NPC.DIFUTE,["还没有集齐4枚灵魂残片吗？"],["我现在就去收集！","我再准备一下！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HolePanel"),"炫彩山山洞入口面板");
            }]);
            return;
         }
         _fTalk = true;
         AnimateManager.playMcAnimate(_map.conLevel["npc"],3,"mc_3",function():void
         {
            _map.conLevel["npc"].gotoAndStop(4);
            NpcDialog.show(NPC.DIFUTE,["你还没集齐4枚灵魂残片，只有结合4枚灵魂残片的力量才可解除封印，残片在炫彩山的各个领主身上，要进入炫彩山吗？"],["是，我现在就去收集！","不，我再准备一下！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HolePanel"),"炫彩山山洞入口面板");
            }]);
         });
      }
      
      public static function destroy() : void
      {
         ToolTipManager.remove(_map.conLevel["hit"]);
         _map.conLevel["hit"].removeEventListener(MouseEvent.CLICK,onNpcClick);
         _map = null;
      }
   }
}
