package com.robot.app2.control.longKu
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.loading.Loading;
   import flash.display.MovieClip;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class LongKuPreTask
   {
      
      private static var _mapMv:MovieClip;
       
      
      public function LongKuPreTask()
      {
         super();
      }
      
      public static function get hasFinishPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(879);
      }
      
      public static function playPreTask() : void
      {
         var d1:Array;
         var d2:Array = null;
         var d3:Array = null;
         var d4:Array = null;
         var taskQuePro:TaskQuneProcessor = null;
         SocketConnection.send(1022,86064113);
         if(!mapMv)
         {
            loadMapmv(playPreTask);
            return;
         }
         KTool.hideMapAllPlayerAndMonster();
         MapManager.currentMap.controlLevel.addChild(mapMv);
         mapMv.gotoAndStop(1);
         KTool.hideMapAllPlayerAndMonster();
         MainManager.selfVisible = false;
         d1 = [[NPC.HAKESASI,["糟糕！我感受到他身上的气息太过邪恶，而且很可能会对我们龙族不利！"],["哈莫，连你都对付不了他吗？"]],[NPC.HAKESASI,["我没想到他散发的力量如此强大，我恐怕没办法制止他！"],["那我们该怎么办呢?"]],[NPC.HAKESASI,["我要先观察一下他后续的行动，如果就这样离去，我总有些不放心。"],["要不我去通知赛尔吧，他们也许能帮上忙。"]],[NPC.HAKESASI,["也好，那我在这里等你。你去吧，不过千万要注意安全！"],["好的，我一定带他们过来！"]]];
         d2 = [[NPC.WULUKA,["赛尔们，你们果然在这里！出……出大事儿了！"],["乌鲁卡你跑的这么着急是有什么事儿？?"]]];
         d3 = [[NPC.SEER,["那哈莫他现在怎么样了？！"],["他还在那家伙的老巢门口观察！"]],[NPC.WULUKA,["还等什么，快带我们过去！"],["好的，快跟我来！"]]];
         d4 = [[NPC.HAKESASI,["赛尔，你们来了！"],["哈莫你没事吧，这家伙到底什么来头？"]],[NPC.HAKESASI,["我还不是很确定。虽然他散发的气息异常邪恶，但是我隐约能感受到他身上有我们龙族的能量。"],["他是冲着你来的吗？"]],[NPC.HAKESASI,["没那么简单。他的目标应该是我们龙族。"],["龙族？！那岂不是特别危险？"]],[NPC.HAKESASI,["所以当务之急我们必须弄清楚他的来头。我觉得我们不能坐以待毙，我必须要进去问问他究竟是要干什么。"],["那我们陪你一起去！"]],[NPC.HAKESASI,["此行必定有风险，乌鲁卡麻烦你先回龙王圣殿，告知塞维尔他们目前的情况，让他们有些准备。"],["好的，你们千万小心！"]]];
         taskQuePro = new TaskQuneProcessor();
         taskQuePro.addDialog(d1);
         taskQuePro.addMapMv(mapMv,2,"mv",function():void
         {
            MapManager.changeMap(4);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
            {
               setTimeout(function():void
               {
                  MapObjectControl.hideOrShowAllObjects(false);
               },100);
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               mapMv.gotoAndStop(7);
               MapManager.currentMap.controlLevel.addChild(mapMv);
               taskQuePro = new TaskQuneProcessor();
               taskQuePro.addMapMv(mapMv,7,"mv");
               taskQuePro.addDialog(d2);
               taskQuePro.addFullMv(ClientConfig.getFullMovie("active_20131025_longku"));
               taskQuePro.addDialog(d3,function():void
               {
                  MapManager.changeMap(955);
                  MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
                  {
                     KTool.hideMapAllPlayerAndMonster();
                     MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                     MapManager.currentMap.controlLevel.addChild(mapMv);
                     taskQuePro = new TaskQuneProcessor();
                     taskQuePro.addMapMv(mapMv,3,"mv");
                     taskQuePro.addMapMv(mapMv,4,"mv");
                     taskQuePro.addDialog(d4);
                     taskQuePro.addMapMv(mapMv,5,"mv",function():void
                     {
                        BufferRecordManager.setMyState(879,true);
                        DisplayUtil.removeForParent(mapMv);
                        _mapMv = null;
                        ModuleManager.showModule(ClientConfig.getAppModule("LongKuMainPanel"));
                        SocketConnection.send(1022,86064114);
                        KTool.showMapAllPlayerAndMonster();
                     });
                     taskQuePro.start();
                  });
               });
               taskQuePro.start();
            });
         });
         taskQuePro.start();
      }
      
      private static function loadMapmv(param1:Function) : void
      {
         var mcloader:MCLoader = null;
         var fun:Function = param1;
         mcloader = new MCLoader(ClientConfig.getMapAnimate("longku"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            _mapMv = mcloader.loader.content["mv"];
            if(fun != null)
            {
               fun();
            }
            mcloader.clear();
         });
         mcloader.doLoad();
      }
      
      private static function get mapMv() : MovieClip
      {
         return _mapMv;
      }
   }
}
