package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BreakSkyController
   {
      
      private static var _taskMc:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      private static var mcUrl:String = "map_1027_0";
      
      private static var BuffID:uint = 1184;
      
      private static var _targetMapID:uint = 1027;
      
      private static var mainPanel:String = "BreakSkyMainPanel";
       
      
      public function BreakSkyController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate(mcUrl),function(param1:MovieClip):void
         {
            taskMC = param1;
         });
      }
      
      public static function clickEquip(param1:* = null) : void
      {
         StatManager.sendStat2014("破碎苍穹！冥王破天","点击装置",StatManager.RUN_ACT);
         if(MapManager.currentMap.id == _targetMapID)
         {
            if(!BufferRecordManager.getMyState(BuffID))
            {
               playPreStory();
            }
            else
            {
               showPanel();
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BreakMsgPanel"),"正在打开");
         }
      }
      
      private static function playPreStory() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         _map.btnLevel.addChild(taskMC);
         _map.depthLevel.visible = false;
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            showPanel();
            BufferRecordManager.setMyState(BuffID,true);
            DisplayUtil.removeForParent(taskMC);
            _map.depthLevel.visible = true;
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAGELUOSI,["看来你在冥界这段日子，并没有放弃对自己的提高！"],["（我永远不会堕落。）"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KING_SKYSHATTER,["这个世上除了回到诸神之殿，已经没有什么再可以刺激我了。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,["active_20140919_0",true]));
         return _loc1_;
      }
      
      public static function destroy() : void
      {
         _taskMc = null;
         _map = null;
      }
      
      private static function showPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule(mainPanel),"正在打开");
      }
      
      private static function set taskMC(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _taskMc;
      }
   }
}
