package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class KaxiusiEvoController2
   {
      
      private static var activeMc:MovieClip;
      
      private static var _map:BaseMapProcess;
       
      
      public function KaxiusiEvoController2()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var m:BaseMapProcess = param1;
         activeMc = m.conLevel["kaxiusiMc"];
         if(BufferRecordManager.getMyState(1117) == false)
         {
            KTool.hideMapAllPlayerAndMonster();
            LevelManager.closeMouseEvent();
            AnimateManager.playMcAnimate(activeMc,1,"mc1",function():void
            {
               KTool.showMapAllPlayerAndMonster();
               LevelManager.openMouseEvent();
               activeMc.buttonMode = true;
               activeMc.addEventListener(MouseEvent.CLICK,onClick);
            });
         }
         else
         {
            activeMc.visible = false;
         }
      }
      
      public static function onClick(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         StatManager.sendStat2014("卡修斯超进化大猜想第三弹","前置任务参与人次人数",StatManager.RUN_ACT);
         KTool.hideMapAllPlayerAndMonster();
         LevelManager.closeMouseEvent();
         MapObjectControl.hideOrShowAllObjects(false);
         AnimateManager.playMcAnimate(activeMc,2,"mc2",function():void
         {
            NpcDialog.show(NPC.SEER,["这就是剩下的绿色能量珠？难道一直在神殿里？"],["快看看会发生什么？ "],[function():void
            {
               AnimateManager.playMcAnimate(activeMc,3,"mc3",function():void
               {
                  StatManager.sendStat2014("卡修斯超进化大猜想第三弹","前置任务完成人次人数",StatManager.RUN_ACT);
                  MapObjectControl.hideOrShowAllObjects(true);
                  DisplayUtil.removeForParent(activeMc);
                  KTool.showMapAllPlayerAndMonster();
                  LevelManager.openMouseEvent();
                  BufferRecordManager.setMyState(1117,true);
                  ModuleManager.showModule(ClientConfig.getAppModule("KaxiusiEvoAdMainPanel"));
               });
            }]);
         });
      }
      
      public static function destroy() : void
      {
         if(activeMc)
         {
            activeMc.removeEventListener(MouseEvent.CLICK,onClick);
            activeMc = null;
         }
      }
   }
}
