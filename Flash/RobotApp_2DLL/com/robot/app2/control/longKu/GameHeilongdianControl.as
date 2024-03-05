package com.robot.app2.control.longKu
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.loading.Loading;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class GameHeilongdianControl
   {
      
      private static var _mapMv:MovieClip;
      
      private static var _isPlaying:Boolean = false;
       
      
      public function GameHeilongdianControl()
      {
         super();
      }
      
      public static function playPreTask() : void
      {
         var d1:Array = null;
         var d2:Array = null;
         var d3:Array = null;
         var d4:Array = null;
         var taskQuePro:TaskQuneProcessor = null;
         var mcloader:MCLoader = null;
         if(!_mapMv)
         {
            mcloader = new MCLoader(ClientConfig.getMapAnimate("heilongdian"),null,Loading.TITLE_AND_PERCENT,"加载..");
            mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
            {
               mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
               _mapMv = mcloader.loader.content["mv"];
               mcloader.clear();
               playPreTask();
            });
            mcloader.doLoad();
            return;
         }
         if(_isPlaying)
         {
            return;
         }
         _isPlaying = true;
         MainManager.selfVisible = false;
         d1 = [[NPC.DALAMU_PET,["赛小息，有什么需要我帮助的吗？"],["恩恩！"]],[NPC.SEER,["塔姆拉，通往黑龙殿的桥被黑龙护法破坏了，你能帮帮我们吗？"],["这个对我来说太简单了，哈哈哈哈"]]];
         d2 = [[NPC.SEER,["哈克萨斯，可以了，我们快去黑龙殿吧！"],["好！"]]];
         d3 = [[NPC.HAKESASI,["哈肯撒！你果然在这里！"],["可恶！沙多克和霍伊特这两个没用的东西！"]],[NPC.HAKESASI,["你这次出现究竟是为了什么！"],["呵呵，既然你这么问，那我就大发慈悲的告诉你吧！"]]];
         d4 = [[NPC.HAKESASI,["不好，哈肯撒的心智已经彻底被魔化了！"],["必须马上阻止他！"]],[NPC.HAKESASI,["赛尔，你们不要出手，这是我们龙族的恩怨，必须由我们龙族自己来解决。"],["哈克萨斯，你要小心啊！"]]];
         MapManager.currentMap.controlLevel.addChild(_mapMv);
         taskQuePro = new TaskQuneProcessor();
         taskQuePro.addMapMv(_mapMv,1,"mv",function():void
         {
            MapManager.changeLocalMap(10384);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
            {
               MainManager.selfVisible = false;
               MapManager.currentMap.controlLevel.addChild(_mapMv);
               if(MapManager.currentMap.controlLevel["bridge"])
               {
                  MapManager.currentMap.controlLevel["bridge"].visible = false;
               }
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               taskQuePro.destory();
               taskQuePro = new TaskQuneProcessor();
               taskQuePro.addFullMv(ClientConfig.getFullMovie("heilongdian0"));
               taskQuePro.addMapMv(_mapMv,2,"mv");
               taskQuePro.addDialog(d1);
               taskQuePro.addMapMv(_mapMv,3,"mv");
               taskQuePro.addDialog(d2);
               taskQuePro.addMapMv(_mapMv,4,"mv");
               taskQuePro.start();
               taskQuePro.procesEndFun = function():void
               {
                  taskQuePro.destory();
                  MapManager.changeLocalMap(10398);
                  MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
                  {
                     MainManager.selfVisible = false;
                     _mapMv.gotoAndStop(5);
                     MapManager.currentMap.controlLevel.addChild(_mapMv);
                     MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                     taskQuePro = new TaskQuneProcessor();
                     taskQuePro.addDialog(d3);
                     taskQuePro.addFullMv(ClientConfig.getFullMovie("heilongdian1"));
                     taskQuePro.addMapMv(_mapMv,6,"mv");
                     taskQuePro.addDialog(d4);
                     taskQuePro.start();
                     taskQuePro.procesEndFun = function():void
                     {
                        BufferRecordManager.setMyState(929,true);
                        KTool.stopMcAll(_mapMv);
                        DisplayUtil.removeForParent(_mapMv);
                        MapManager.currentMap.depthLevel["long"].visible = true;
                        MainManager.selfVisible = true;
                     };
                  });
               };
            });
         });
         taskQuePro.start();
      }
   }
}
