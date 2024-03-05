package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class GelannuoController
   {
      
      public static const BUFFER_ID:uint = 760;
      
      private static var count:uint = 0;
      
      private static var posArray:Array = [[570,250],[233,282],[540,322]];
       
      
      public function GelannuoController()
      {
         super();
      }
      
      public static function init() : void
      {
         taskMc.visible = false;
         birdMc.visible = false;
         birdMc.buttonMode = true;
         destroy();
         birdMc.addEventListener(MouseEvent.CLICK,onBird);
         SystemTimerManager.addTickFun(onTimer);
      }
      
      public static function start() : void
      {
         if(checkPreTask())
         {
            openPanel();
         }
         else
         {
            startPreTask();
         }
      }
      
      private static function checkPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID);
      }
      
      private static function get taskMc() : MovieClip
      {
         return MapManager.currentMap.controlLevel["gelannuo"];
      }
      
      private static function get birdMc() : MovieClip
      {
         return MapManager.currentMap.depthLevel["bird"];
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86060890);
         taskMc.visible = true;
         taskMc.gotoAndStop(1);
         MainManager.selfVisible = false;
         MapManager.currentMap.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.GELANNUO,["你是谁？真讨厌，快走开！"],["哈哈，真不好意思打扰你们了。"]]],[TaskStoryPlayer.DIALOG,[NPC.AIXINGE,["不过看着你们这么甜蜜，我心里总有一股破坏的冲动，能看到有情人生离死别的表情真是太开心了。"],["什么，你要干什么？"]]],[TaskStoryPlayer.DIALOG,[NPC.GELANNUO,["生离死别？你不要胡来！"],["我艾辛格偏喜欢胡来。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.GELANNUO,["格拉诺！快把格拉诺还给我！"],["哈哈，我偏偏不。"]]],[TaskStoryPlayer.DIALOG,[NPC.AIXINGE,["放心吧，我不会伤害她的，只不过这个七夕节，你恐怕要孤单一个人过了，哈哈！"],["快把格拉诺还给我！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.LINLINMAO,["格兰诺，你为什么哭啊，快到七夕节了，你不是应该和格拉诺一起快乐地过节吗？"],["呜呜呜……我的格拉诺在那里。"]]],[TaskStoryPlayer.DIALOG,[NPC.GELANNUO,["刚刚有一只叫艾辛格的精灵把格拉诺放到那里了，我够不着，看来只能一个人过七夕节了，呜呜呜……"],["什么，居然这么坏！"]]],[TaskStoryPlayer.DIALOG,[NPC.TUDANGDANG,["格兰诺你别哭了，快想办法把格拉诺救下来啊！"],["怎么救啊？"]]],[TaskStoryPlayer.DIALOG,[NPC.GELANNUO,["那个地方太高了，我们都够不着，怎么救格拉诺回来啊？"],["总会有办法的。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.TUDANGDANG,["斯卡伊，你来得太好了，快飞上去把格拉诺救下来！"],["啊！这么高啊？"]]],[TaskStoryPlayer.DIALOG,[NPC.SIKAYI,["太高了，光我一个恐怕不够，如果有更多我的同类，能够搭成一座桥梁，就可以救下格兰诺了。"],["飞行的桥梁？好主意！"]]],[TaskStoryPlayer.DIALOG,[NPC.LINLINMAO,["斯卡伊，快去多找一些你的同伴来吧！"],["额……这可不太好找。"]]],[TaskStoryPlayer.DIALOG,[NPC.SIKAYI,["我的同伴散布在各地可不好找，不过如果有我们最爱吃的果实，说不定可以吸引来他们。"],["什么果实？我们去找！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            MainManager.selfVisible = true;
            MapManager.currentMap.depthLevel.visible = true;
            taskMc.visible = false;
            KTool.showMapAllPlayerAndMonster();
            SocketConnection.send(1022,86060891);
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               openPanel();
            });
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GelannuoPanel"));
      }
      
      public static function playFinishMovie() : void
      {
         taskMc.visible = true;
         MapManager.currentMap.depthLevel.visible = false;
         AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
         {
            SocketConnection.sendWithCallback(46007,function():void
            {
               taskMc.visible = false;
               MapManager.currentMap.depthLevel.visible = true;
            });
         });
      }
      
      private static function onTimer() : void
      {
         var _loc1_:uint = 0;
         ++count;
         if(count % 20 == 1 && checkPreTask() == true && birdMc.visible == false)
         {
            birdMc.gotoAndPlay(2);
            birdMc.visible = true;
            _loc1_ = uint(Math.random() * posArray.length);
            birdMc.x = posArray[_loc1_][0];
            birdMc.y = posArray[_loc1_][1];
         }
      }
      
      private static function onBird(param1:MouseEvent) : void
      {
         if(birdMc.currentFrame == 18)
         {
            SocketConnection.send(46006);
            birdMc.gotoAndPlay(19);
         }
      }
      
      public static function destroy() : void
      {
         SystemTimerManager.removeTickFun(onTimer);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onTimer);
         birdMc.removeEventListener(MouseEvent.CLICK,onBird);
      }
   }
}
