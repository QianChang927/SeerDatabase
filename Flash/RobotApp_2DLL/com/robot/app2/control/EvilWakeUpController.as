package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   
   public class EvilWakeUpController
   {
      
      public static const BUFFER_ID_1:uint = 1115;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
       
      
      public function EvilWakeUpController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip) : void
      {
         param1.addEventListener(MouseEvent.CLICK,onClickIcon);
         ToolTipManager.add(param1,"唤醒邪化精灵");
      }
      
      public static function onClickIcon(param1:MouseEvent = null) : void
      {
         SocketConnection.send(1022,86072868);
         if(BufferRecordManager.getMyState(BUFFER_ID_1) == true)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("EvilWakeUpMaikelangqiluoPanel"));
         }
         else
         {
            MapManager.changeMap(977);
         }
      }
      
      public static function initForMap977(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(checkPreTask() == true)
         {
            return;
         }
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_977_evil_3"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            taskMc.visible = false;
            start_1();
         });
      }
      
      public static function initForMap10484(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_977_evil_3"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            taskMc = mc;
            _map.conLevel.addChild(taskMc);
            taskMc.visible = false;
            KTool.getForeverNum(4140,function(param1:uint):void
            {
               SocketConnection.send(46107,param1);
               if(param1 == 1)
               {
                  end_1();
               }
               if(param1 == 2)
               {
                  end_2();
               }
               if(param1 == 3)
               {
                  end_3();
               }
               if(param1 == 4)
               {
                  end_4();
               }
               if(param1 == 5)
               {
                  end_5();
               }
            });
         });
      }
      
      private static function checkPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_1);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function start_1() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86072869);
         taskMc.visible = true;
         taskMc.gotoAndStop(1);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.FUL_MOVIE,["evilWakeUp_3",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            taskMc.visible = false;
            SocketConnection.send(1022,86072870);
            BufferRecordManager.setMyState(BUFFER_ID_1,true,function():void
            {
               openPanel();
            });
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         SocketConnection.send(1022,86072871);
         ModuleManager.showModule(ClientConfig.getAppModule("EvilWakeUpMaikelangqiluoPanel"));
      }
      
      private static function end_1() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86060890);
         taskMc.visible = true;
         taskMc.gotoAndStop(2);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["快醒醒……麦克朗琪罗！ 快醒醒！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["你全身充满了邪恶的力量，到底是怎么回事？？还有迈瑞特是谁？"],null]],[TaskStoryPlayer.DIALOG,[NPC.MAIKELANGQILUO_XIE,["哈哈，你的问题似乎太多了！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["你不告诉我今天就别想离开！"],null]],[TaskStoryPlayer.DIALOG,[NPC.MAIKELANGQILUO_XIE,["哼，你这个渣渣，竟然敢挡我的道！找死！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看来他太虚弱了，我必须趁现在，将他体内的邪恶力量清除掉并且" + TextFormatUtil.getRedTxtInStory("再次唤醒他") + "才能知道真相了！"],["这就去唤醒他！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            taskMc.visible = false;
            SocketConnection.send(1022,86060891);
            Alarm.show("恭喜你，线索1已获得！快去领奖吧！",backToMap43);
         };
         storyPlayer.start();
      }
      
      private static function end_2() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86060890);
         taskMc.visible = true;
         taskMc.gotoAndStop(4);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["快醒醒……麦克朗琪罗！ 快醒醒！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["你怎么全身充满了邪恶的力量，到底是怎么回事？？你要报什么仇？？"],null]],[TaskStoryPlayer.DIALOG,[NPC.MAIKELANGQILUO_XIE,["少管闲事！不然让你死得难看！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["！！！你是被邪恶力量冲昏了头脑，快醒醒吧！"],null]],[TaskStoryPlayer.DIALOG,[NPC.MAIKELANGQILUO_XIE,["哼！你这是自寻死路！ "],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["今天我一定要将你身上的邪恶力量消除！"],null]],[TaskStoryPlayer.DIALOG,[NPC.MAIKELANGQILUO_XIE,["不自量力的家伙！出招吧！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看来他太虚弱了，我必须趁现在，将他体内的邪恶力量清除掉并且" + TextFormatUtil.getRedTxtInStory("再次唤醒他") + "才能知道真相了！"],["这就去唤醒他！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            taskMc.visible = false;
            SocketConnection.send(1022,86060891);
            Alarm.show("恭喜你，线索2已获得！快去领奖吧！",backToMap43);
         };
         storyPlayer.start();
      }
      
      private static function end_3() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86060890);
         taskMc.visible = true;
         taskMc.gotoAndStop(6);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["快醒醒……麦克朗琪罗！ 快醒醒！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看来是因为他身上还残留着邪恶的力量，他才昏迷的。"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看来他太虚弱了，我必须趁现在，将他体内的邪恶力量清除掉并且" + TextFormatUtil.getRedTxtInStory("再次唤醒他") + "才能知道真相了！"],["这就去唤醒他！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            taskMc.visible = false;
            SocketConnection.send(1022,86060891);
            Alarm.show("恭喜你，线索3已获得！快去领奖吧！",backToMap43);
         };
         storyPlayer.start();
      }
      
      private static function end_4() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86060890);
         taskMc.visible = true;
         taskMc.gotoAndStop(7);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["快醒醒……麦克朗琪罗！ 快醒醒！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看来是因为他身上还残留着邪恶的力量，他才昏迷的。"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看来他太虚弱了，我必须趁现在，将他体内的邪恶力量清除掉并且" + TextFormatUtil.getRedTxtInStory("再次唤醒他") + "才能知道真相了！"],["这就去唤醒他！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            taskMc.visible = false;
            SocketConnection.send(1022,86060891);
            Alarm.show("恭喜你，线索4已获得！快去领奖吧！",backToMap43);
         };
         storyPlayer.start();
      }
      
      private static function end_5() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86060890);
         taskMc.visible = true;
         taskMc.gotoAndStop(8);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["快醒醒……麦克朗琪罗！ 快醒醒！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看来这个事情还是一团迷雾啊！我必须找到" + TextFormatUtil.getRedTxtInStory("忍者战龟的其他成员") + "才行！"],["………………"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            taskMc.visible = false;
            SocketConnection.send(1022,86060891);
            Alarm.show("恭喜你，线索5已获得！快去领奖吧！",backToMap43);
         };
         storyPlayer.start();
      }
      
      private static function backToMap43() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            openPanel();
         });
         MapManager.changeMap(977);
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
