package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BlackMiusiController
   {
      
      private static var _mc:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      private static const TARGET_MAP:uint = 1005;
      
      private static const BUFFER_ID:uint = 1187;
      
      private static const beginDate:Date = new Date(2014,9,3);
       
      
      public function BlackMiusiController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         checkActivity();
         DiamondDailyTaskController.tryFinish(8,7);
      }
      
      public static function initEquip() : void
      {
         if(SystemTimerManager.sysBJDate.time > beginDate.time)
         {
            if(MapManager.currentMap.id != TARGET_MAP)
            {
               MapManager.changeMap(TARGET_MAP);
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BlackMiusiSupportPanel"),"正在努力打开面板...");
            }
         }
         else
         {
            Alarm2.show("本活动10月3日开放！");
         }
      }
      
      private static function checkActivity() : void
      {
         if(SystemTimerManager.sysBJDate.time > beginDate.time)
         {
            loadMc();
         }
      }
      
      private static function loadMc() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_1005_2"),function(param1:MovieClip):void
         {
            _mc = param1;
            _map.btnLevel.addChild(_mc);
            if(BufferRecordManager.getMyState(BUFFER_ID))
            {
               showNpcs();
            }
            else
            {
               startStory();
            }
         });
      }
      
      private static function showNpcs() : void
      {
         _mc.mc.gotoAndStop(1);
         _mc.addEventListener(MouseEvent.CLICK,onDialog);
         _mc.buttonMode = true;
      }
      
      private static function onDialog(param1:Event) : void
      {
         var _loc2_:String = param1.target.name as String;
         switch(_loc2_)
         {
            case "Miusii_Btn":
               NpcDialog.show(NPC.MIUSI,["为什么她会使用魔眼之力，这不可能！"],["算了吧。。别太认真。。"]);
               break;
            case "BlackMiusii_Btn":
               NpcDialog.show(NPC.DARK_MUSE,["今天就是你的末日！"],["你哪里来的自信？"]);
         }
      }
      
      private static function startStory() : void
      {
         var storyPlayer:TaskStoryPlayer;
         var story:Array = [[TaskStoryPlayer.FUL_MOVIE,["active_20141003",true]],[TaskStoryPlayer.MAP_MOVIE,[_mc,1,"mc"]]];
         KTool.hideMapAllPlayerAndMonster();
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            KTool.showMapAllPlayerAndMonster();
            BufferRecordManager.setMyState(BUFFER_ID,true);
            ModuleManager.showModule(ClientConfig.getAppModule("BlackMiusiSupportPanel"));
            showNpcs();
         };
         storyPlayer.start();
      }
      
      public static function destroy() : void
      {
         if(_mc != null)
         {
            _mc.removeEventListener(MouseEvent.CLICK,onDialog);
            DisplayUtil.removeForParent(_mc);
         }
         _map = null;
      }
   }
}
