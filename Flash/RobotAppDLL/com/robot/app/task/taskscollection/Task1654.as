package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.EventListenerUtil;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1654
   {
      
      private static const TASK_ID:int = 1654;
      
      private static var _map:BaseMapProcess;
      
      private static var _eventUtil:EventListenerUtil = null;
       
      
      public function Task1654()
      {
         super();
      }
      
      public static function initForMap785(param1:BaseMapProcess) : void
      {
         _map = param1;
         _eventUtil = new EventListenerUtil();
         ToolTipManager.add(_map.conLevel["btnGrass"]," 丽莎布布特训  8月23日开启");
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            if(!BufferRecordManager.getMyState(767))
            {
               _map.btnLevel["mcThreeGod"].visible = false;
               AnimateManager.playMcAnimate(taskMC,10,"mc",initThreeGodIcon);
            }
            else
            {
               initThreeGodIcon();
            }
         }
         else
         {
            initTaskIcon();
         }
      }
      
      private static function initTaskIcon() : void
      {
         _map.btnLevel["mcThreeGod"].visible = false;
         _eventUtil.addEventListener(taskMC,MouseEvent.CLICK,onClickTaskMC);
      }
      
      private static function initThreeGodIcon() : void
      {
         BufferRecordManager.setMyState(767,true);
         DisplayUtil.removeForParent(taskMC);
         _map.btnLevel["mcThreeGod"].visible = true;
         _eventUtil.addEventListener(SimpleButton(_map.btnLevel["mcThreeGod"]["btnFire"]),MouseEvent.CLICK,onClickThreeGodPanel);
         _eventUtil.addEventListener(SimpleButton(_map.btnLevel["mcThreeGod"]["btnWater"]),MouseEvent.CLICK,onClickThreeGodPanel);
         _eventUtil.addEventListener(SimpleButton(_map.btnLevel["mcThreeGod"]["btnGrass"]),MouseEvent.CLICK,onClickThreeGodPanel);
         _eventUtil.addEventListener(SimpleButton(_map.conLevel["btnWater"]),MouseEvent.CLICK,onClickChange2Map941);
         _eventUtil.addEventListener(SimpleButton(_map.conLevel["btnFire"]),MouseEvent.CLICK,onClickChange2Map944);
         ToolTipManager.add(_map.btnLevel["mcThreeGod"],"融合三神宠特训");
         ToolTipManager.add(_map.conLevel["btnWater"],"鲁斯王特训 点击进入");
         ToolTipManager.add(_map.conLevel["btnFire"]," 魔焰猩猩特训  点击进入");
      }
      
      private static function onClickTaskMC(param1:MouseEvent) : void
      {
         _eventUtil.removeTargetAllEventListener(taskMC);
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(TASK_ID);
            SocketConnection.send(1022,86060822);
         }
         playPreStory();
      }
      
      private static function onClickThreeGodPanel(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86060824);
         SocketConnection.send(1022,86061062);
         ModuleManager.showModule(ClientConfig.getAppModule("ThreeGodPetTrainMainPanel"));
      }
      
      private static function onClickChange2Map941(param1:MouseEvent) : void
      {
         MapManager.changeMap(941);
      }
      
      private static function onClickChange2Map944(param1:MouseEvent) : void
      {
         MapManager.changeMap(944);
      }
      
      private static function playPreStory() : void
      {
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            TasksManager.complete(TASK_ID,0);
            initThreeGodIcon();
            SocketConnection.send(1022,86060823);
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20130809_3",true]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,2,"mc"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ELINGSHOU_NORMOL,["哈哈，没想到，暗黑战神联盟这么快就行动起来了，你们这些所谓的正义代言人，该尝到苦果了！"],null);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUSIWANG,["恶灵兽，你不过是乘人之危！失败了就灰溜溜地躲起来，现在倒好意思出来耀武扬威了。我们最不屑的就是你这种精灵，哼！"],null);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,3,"mc"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ELINGSHOU_NORMOL,["不管你们怎么说，当那群可笑的冒牌货让雷伊它们焦头烂额时，我就可以卷土重来，把你们一网打尽，重新统治这个世界！"],null);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,4,"mc"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ELINGSHOU_NORMOL,["鱼龙王？你这家伙也想与我为敌？哼，好，那我就顺便解决你！"],null);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,5,"mc"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ELINGSHOU_NORMOL,["果然有两下子。我这次回来，不是陪你们浪费时间的！就让我把你们一起解决了吧！"],null);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,6,"mc"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ELINGSHOU_NORMOL,["哈哈！准备好，迎接失败吧！"],null);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,7,"mc"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YULONGWANG,["竟然…逃跑了？还以为是什么厉害的角色……不过是个胆小鬼…"],null);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIZU_LINGSHOU,["不，它可能还没有完全恢复能力。我们不能低估恶灵兽，它逃跑，不过是保存实力、以便日后更大的行动罢了。"],null);
         var _loc16_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LUSIWANG,["谢谢你们出手相助。没有你们，我们根本不可能侥幸逃生……果然还是我们的能力太弱了……"],null);
         var _loc17_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LISHABUBU,["恶灵兽早晚还会回来这里的。鲁斯王，千万不要泄气。我们应该振作起来，快速提升自己的能力。只有自己变得更强，才能应对它！"],null);
         var _loc18_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,8,"mc"]);
         var _loc19_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YANMO,["暗黑战神联盟出现，精灵世界正在赛尔号的带领下，共同抗击敌人。你们三个，作为赛尔号最亲密的精灵伙伴，该肩负起保护弱者的责任。"],null);
         var _loc20_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YULONGWANG,["如果你们愿意，就让我们三灵兽为你们展开临时的特别训练，帮助你们提升能力，更好地应对暗黑危机。"],null);
         var _loc21_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIZU_LINGSHOU,["如果你们有接受历练的勇气，就进入我们的特训幻境，接受属于你们的考验吧~"],null);
         var _loc22_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,9,"mc"]);
         var _loc23_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20130809_4",true]);
         var _loc24_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,10,"mc"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_,_loc20_,_loc21_,_loc22_,_loc23_,_loc24_];
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.btnLevel["mcTask1654"];
      }
      
      public static function destroy() : void
      {
         if(_eventUtil)
         {
            _eventUtil.dispose();
         }
         _eventUtil = null;
         _map = null;
      }
   }
}
