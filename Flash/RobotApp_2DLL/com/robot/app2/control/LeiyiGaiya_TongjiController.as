package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   
   public class LeiyiGaiya_TongjiController
   {
      
      private static var map:BaseMapProcess;
      
      public static const BUFFER_ID:uint = 804;
       
      
      public function LeiyiGaiya_TongjiController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         map = param1;
         taskMc.buttonMode = true;
         taskMc.visible = false;
         if(checkPreTask())
         {
            LeiyiGaiya_LeiGuangZhiyiController.start();
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
         return map.conLevel["tongji"];
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86062287);
         taskMc.visible = true;
         taskMc.gotoAndStop(1);
         MainManager.selfVisible = false;
         MapManager.currentMap.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.AILONGNISI,["亲爱的小伙伴们，我艾隆尼斯回来了，你们想我吗？"],["赶紧说重点！"]]],[TaskStoryPlayer.DIALOG,[NPC.LIANGSI,["艾隆尼斯，你不是说有重大的消息要告诉我们吗？到底是什么啊？"],["不要着急嘛！"]]],[TaskStoryPlayer.DIALOG,[NPC.AILONGNISI,["咳咳，各位，我的师父，也就是雷神雷伊告诉我，他和战神盖亚的第三次对决将在9月19日正式打响！"],["什么？雷伊VS盖亚？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.AILONGNISI,["没有关系，这次的对决将会是超进化对决，雷神超进化VS战神超进化！一定比以前都精彩！"],["超进化对决？太棒了！"]]],[TaskStoryPlayer.DIALOG,[NPC.LIANGSI,["我猜这次一定是雷神获胜！虽然盖亚刚刚获得了超进化的力量，但是雷神是无敌的，是我们电系精灵的骄傲！"],["对！雷神必胜！"]]],[TaskStoryPlayer.DIALOG,[NPC.AILONGNISI,["那还用说，我师父的实力深不可测，盖亚绝不会是我师父的对手！"],["话说雷神什么时候变成你师父了……"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.NUOKELIN,["我们的战神盖亚刚刚领悟了超进化的力量，一定势不可挡，别忘了就是超进化的盖亚打败了库贝萨！"],["胡说，明明雷神也出力了！"]]],[TaskStoryPlayer.DIALOG,[NPC.AILONGNISI,["雷神可是宇宙的大英雄，是战神联盟的领袖！战神盖亚虽然也是大英雄，恐怕比雷神还是要差了那么一点点哦……"],["切，战神盖亚才是最棒的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.LAMEIXISI,["对，你别看我是普通系的精灵，我师父可是大名鼎鼎的战神盖亚！"],["还真没看出来……"]]],[TaskStoryPlayer.DIALOG,[NPC.AILONGNISI,["这么巧，我可是雷神雷伊的徒弟，幸会幸会！"],["你们进入角色还真快……"]]],[TaskStoryPlayer.DIALOG,[NPC.LAMEIXISI,["这次超进化的盖亚一定可以击败雷伊，你们等着瞧吧！"],["那咱们就走着瞧。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.AILONGNISI,["师父，加油哦！我们支持你，这次你一定可以打败盖亚！"],["师父？你是谁？"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["师父？哈哈，雷伊，你什么时候收了徒弟，我怎么都不知道……"],["额……说实话我也不知道……"]]],[TaskStoryPlayer.DIALOG,[NPC.LAMEIXISI,["师父，我们力挺你，这次你一定可以打败雷伊！"],["啊？我也有徒弟了？"]]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["哈哈，盖亚，看来你的崇拜者也不少嘛！"],["这个……我徒弟起码也应该是战斗系的吧。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["太好了，你终于也掌控了超进化的力量，我非常期待接下来与你的一战！"],["我也是一样！"]]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI,["盖亚，你是我的伙伴，也将会是我一生的对手，以后还有更多的危机在等待着我们，我们还要一起去迎接挑战！"],["说得很对。"]]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA,["在这之前，我们需要变得更强大，来吧雷伊！"],["来吧！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            MainManager.selfVisible = true;
            MapManager.currentMap.depthLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            SocketConnection.send(1022,86062288);
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               openPanel();
               LeiyiGaiya_LeiGuangZhiyiController.start();
            });
         };
         storyPlayer.start();
      }
      
      public static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LeiyiGaiya_TongjiPanel"));
      }
      
      public static function destroy() : void
      {
      }
   }
}
