package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GaiyaVsFightKingController
   {
      
      public static const BUFFER_ID:uint = 1145;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
       
      
      public function GaiyaVsFightKingController()
      {
         super();
      }
      
      public static function initForMap997(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(!checkPreTask())
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_997_998"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.conLevel.addChild(taskMc);
               if(checkPreTask() == false)
               {
                  _map.animatorLevel["bgAni"].visible = false;
               }
               taskMc.buttonMode = true;
               taskMc.addEventListener(MouseEvent.CLICK,start);
            });
         }
         _map.animatorLevel.mouseEnabled = _map.animatorLevel.mouseChildren = true;
      }
      
      public static function initForMap998(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_997_998"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            taskMc.gotoAndStop(10);
            taskMc.addEventListener(MouseEvent.CLICK,start2);
         });
      }
      
      public static function start(param1:*) : void
      {
         if(checkPreTask())
         {
            openPanel();
         }
         else
         {
            taskMc.buttonMode = false;
            startPreTask();
         }
      }
      
      public static function start2(param1:MouseEvent) : void
      {
         if(param1.target.name == "npc1")
         {
            StatManager.sendStat2014("勇闯魔界之门！不灭战魂！战神盖亚vs斗皇！","点击斗皇",StatManager.RUN_ACT);
            ModuleManager.showModule(ClientConfig.getAppModule("DouhuangPanel"));
         }
         if(param1.target.name == "npc2")
         {
            StatManager.sendStat2014("勇闯魔界之门！不灭战魂！战神盖亚vs斗皇！","点击盖亚",StatManager.RUN_ACT);
            ModuleManager.showModule(ClientConfig.getAppModule("GaiyaSuperEvoPanel"));
         }
      }
      
      private static function checkPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         StatManager.sendStat2014("勇闯魔界之门！不灭战魂！战神盖亚vs斗皇！","参与前置任务",StatManager.RUN_ACT);
         SocketConnection.send(1022,86060890);
         taskMc.visible = true;
         taskMc.gotoAndStop(1);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["不好，阿萨斯一定是想复仇，所以才会借用魔界之门的力量！！"],["我一定要想办法阻止他！！"]]],[TaskStoryPlayer.DIALOG,[NPC.ASASI,["小子，你别痴心妄想了，如今战神联盟都自身难保，你还奢求什么呢？哈哈！"],["不知道战神盖亚和布莱克怎么样了！！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["怎么办…左边是战神盖亚…右边是布莱克，究竟该先去哪里呢？"],["布莱克应该很需要帮助吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI_EVO,["反而现在更让我担心的是布莱克，目前他还没有领取到超进化的能力，按照现在的实力和影皇对抗，胜算微乎其微！"],["卡修斯，我们时间不多了！！"]]],[TaskStoryPlayer.DIALOG,[NPC.KAXIUSI_SUPER,["恩…雷神，我明白你的意思，现在首要的目标就是保证布莱克的安全，不过你的伤势！"],["不管这些了，我们快走吧！！"]]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI_EVO,[MainManager.actorInfo.formatNick + "，战神盖亚就交给你了，我们先去影之殿了，如果你找到战神盖亚了，告诉他，我们在影之殿等你们！"],["恩恩，明白，我这就去找战神！！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA_EVO,["可恶的家伙，在斗之殿里他的实力比之前更强大，但是我不是一个容易放弃的对手！"],["斗皇，接招吧！！"]]],[TaskStoryPlayer.DIALOG,[NPC.DOUHUANG,["看来传说是真的，在没有分出胜负之前，战神盖亚绝对不会放弃战斗！"],["我就喜欢你这样的对手！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.KADEMASITE,["还记得当年你所做的一切吗？相信你看到我的样子后就会知道我是谁了！"],["哼哼…做的坏事太多了，我自己都不知道了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.DOUHUANG,["这不可能，当年魔导师一族已经灭绝了！"],["没想到斗皇！你还是百密一疏！"]]],[TaskStoryPlayer.DIALOG,[NPC.KADEMASITE,["今天就让魔导师唯一的幸存者，讨回一些当年的血债！"],["哼哼…当年我太大意了，现在弥补还来得及！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.GAIYA_EVO,["我不管你们之间有什么恩怨，但是在我没打到斗皇之前谁都不准插手！"],["斗皇必须由我来击败！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["就连战无不胜的战神盖亚都遇到了对手，看来魔界三巨头真不是好惹的，雷神给我的任务是帮助战胜盖亚，我可要行动起来！"],["战神盖亚，等着我！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            taskMc.visible = false;
            SocketConnection.send(1022,86060891);
            StatManager.sendStat2014("勇闯魔界之门！不灭战魂！战神盖亚vs斗皇！","完成前置任务",StatManager.RUN_ACT);
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               openPanel();
               if(_taskMc)
               {
                  taskMc.removeEventListener(MouseEvent.CLICK,start);
                  taskMc.removeEventListener(MouseEvent.CLICK,start2);
               }
               DisplayUtil.removeForParent(taskMc);
            });
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GaiyaFreeToAllPanel"));
      }
      
      public static function destroy() : void
      {
         if(_taskMc)
         {
            taskMc.removeEventListener(MouseEvent.CLICK,start);
            taskMc.removeEventListener(MouseEvent.CLICK,start2);
         }
         _map = null;
      }
   }
}
