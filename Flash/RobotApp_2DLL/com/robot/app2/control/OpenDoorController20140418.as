package com.robot.app2.control
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class OpenDoorController20140418
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskmc:MovieClip;
      
      private static var func:Function;
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","*","15-21","4","*","2016")]);
       
      
      public function OpenDoorController20140418()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess, param2:Function) : void
      {
         _map = param1;
         func = param2;
         taskmc = param1.conLevel["openDoor0418"];
         if(!AC.isInActivityTime)
         {
            destroy();
            return;
         }
         taskmc.buttonMode = true;
         ToolTipManager.add(taskmc,"德维勒");
         taskmc.addEventListener(MouseEvent.CLICK,onClick);
         taskmc.gotoAndStop(1);
         if(BufferRecordManager.getMyState(1111))
         {
            func(_map);
         }
      }
      
      public static function onClick(param1:MouseEvent = null) : void
      {
         if(MapManager.currentMap.id != 982)
         {
            MapManager.changeMap(982);
            return;
         }
         StatManager.sendStat2014("勇闯魔窟之门——耐力的试炼","点击场景中德维特的",StatManager.RUN_ACT);
         if(BufferRecordManager.getMyState(1111))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ADOpenDoorMainPanel"));
         }
         else
         {
            taskStart();
         }
      }
      
      private static function taskStart() : void
      {
         NpcDialog.show(NPC.DEWEILE,[MainManager.actorInfo.nick + "，接下来你即将面临耐力的试炼，有机会获得卡修斯超进化道具，你敢接受吗？"],["来吧！我无所畏惧！","我走错了！"],[function():void
         {
            LevelManager.closeMouseEvent();
            KTool.hideMapAllPlayerAndMonster();
            AnimateManager.playMcAnimate(taskmc,2,"mc1",function():void
            {
               NpcDialog.show(NPC.SEER,["我说过，我不会服输的！再来吧！"],["那就准备好吧！"],[function():void
               {
                  NpcDialog.show(NPC.DEWEILE,["抵挡住我的5次攻击，即为试炼通过！ "],["尽管来吧！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active201409244"),function():void
                     {
                        AnimateManager.playMcAnimate(taskmc,3,"mc2",function():void
                        {
                           LevelManager.openMouseEvent();
                           KTool.showMapAllPlayerAndMonster();
                           BufferRecordManager.setMyState(1111,true);
                           taskmc.gotoAndStop(1);
                           ModuleManager.showModule(ClientConfig.getAppModule("ADOpenDoorMainPanel"));
                           StatManager.sendStat2014("勇闯魔窟之门——耐力的试炼","完成前置剧情的",StatManager.RUN_ACT);
                           func(_map);
                        });
                     });
                  }]);
               }]);
            });
         }]);
      }
      
      public static function destroy() : void
      {
         if(taskmc)
         {
            ToolTipManager.remove(taskmc);
            taskmc.removeEventListener(MouseEvent.CLICK,onClick);
            taskmc = null;
         }
         func = null;
         _map = null;
      }
   }
}
