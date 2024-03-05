package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class CallSpringController
   {
      
      public static const BUFFER_ID:uint = 1082;
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
       
      
      public function CallSpringController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 981)
         {
            MapManager.changeMap(981);
            return;
         }
         SocketConnection.send(1022,86070160);
         _map = MapManager.currentMap;
         start();
      }
      
      public static function start() : void
      {
         if(checkPreTask())
         {
            openPanel();
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_981_call_spring"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.controlLevel.addChild(taskMc);
               startPreTask();
            });
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
      
      private static function startPreTask(param1:MouseEvent = null) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var e:MouseEvent = param1;
         taskMc.removeEventListener(MouseEvent.CLICK,startPreTask);
         SocketConnection.send(1022,86060890);
         taskMc.visible = true;
         taskMc.gotoAndStop(1);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["哇！你是春天的使者？这里的生机都是你带来的？"],["对啊，我要把春意带到每一个角落。"]]],[TaskStoryPlayer.DIALOG,[NPC.FEIAONA,["善良的赛尔们，我的力量是有限的，我需要更多的力量，你们愿意来帮助我吗？"],["当然愿意了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["我需要怎么帮助你呢？"],["只需要唤醒我体内沉睡的力量。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.LISHABUBU,["魔焰猩猩！植物需要的温度是要阳光和空气提供的，不是你这样来的！"],["对不起，都怪我不小心……"]]],[TaskStoryPlayer.DIALOG,[NPC.MOYANXINGXING,["一时不小心没掌握好火候……帮了倒忙……"],["我们先看看菲奥娜吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["赶紧先救救菲奥娜吧！可惜我们都不知道怎么办，要是派特博士在就好了！"],["等等，也许不用找派特博士。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.FEIAONA,["咳咳……刚刚真是吓死我了……我们植物需要精心的呵护才能顺利地成长，为大家带来绿色。"],["对不起，我们以后会注意的……"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["这下好了，有了提洛他们的帮忙，一定可以帮助唤醒菲奥娜的力量！"],["我们来试试看吧！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            taskMc.visible = false;
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
         ModuleManager.showModule(ClientConfig.getAppModule("CallSpringPanel"));
      }
      
      public static function destroy() : void
      {
         if(taskMc != null)
         {
            taskMc.removeEventListener(MouseEvent.CLICK,startPreTask);
         }
         _map = null;
      }
   }
}
