package com.robot.app2.mapProcess
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.mapProcess.control.FinalBattleTask1Plot;
   import com.robot.app2.mapProcess.control.FinalBattleTask2Plot;
   import com.robot.app2.mapProcess.control.FinalBattleTask3Plot;
   import com.robot.app2.mapProcess.control.FinalBattleTask4Plot;
   import com.robot.app2.mapProcess.control.FinalBattleTask5Plot;
   import com.robot.app2.mapProcess.control.FinalBattleTask6Plot;
   import com.robot.app2.mapProcess.control.FinalBattleTask7Plot;
   import com.robot.app2.mapProcess.control.PlotUITask;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.manager.map.config.MapConfig;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.loading.Loading;
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.DisplayObjectContainer;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import org.taomee.algo.AStar;
   
   public class MapProcess_11804 extends BaseMapProcess
   {
      
      public static var mapId:int = 5;
      
      public static var taskId:int = 1;
      
      public static var curMapIndex:int = 1;
       
      
      private var loader:MCLoader;
      
      private var task:PlotUITask;
      
      private var petIds:Array;
      
      private var bossIds:Array;
      
      private var npcIds:Array;
      
      private var awards:Array;
      
      public function MapProcess_11804()
      {
         this.petIds = [[3907,3945],[3962,3961,3935,3927,3926],[3987,3991],[3973,3937],[3993]];
         this.bossIds = [[3907,3945],[3962,3961,3935,3927,3926],[3987,3991],[3973,3937],[3993]];
         this.npcIds = [[3907,3945],[3962,3961,3935,3927,3926],[3987,3991],[3973,3937],[3993]];
         this.awards = [5,5,5,5,5,5,5,5];
         super();
      }
      
      override protected function init() : void
      {
         MapNamePanel.init(mapId);
         MainManager.actorInfo.mapID = 11804;
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapPlayerAndMonster();
         KTool.getMultiValue([10603],function(param1:Array):void
         {
            var arr:Array = param1;
            if(KTool.getByte(arr[0],0) != SystemTimerManager.sysDate.hours + 1)
            {
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showAppModule("FinalBattleMainPanel");
               });
               return;
            }
            update();
         });
      }
      
      protected function update() : void
      {
         var index:Array = null;
         this.loader = new MCLoader("",LevelManager.topLevel,Loading.TITLE_AND_PERCENT,"加载地图",false);
         this.loader.doLoad(ClientConfig.getMapPath(MapManager.getResMapID(mapId)));
         this.loader.addEventListener(MCLoadEvent.SUCCESS,this.onMapComplete);
         KTool.getMultiValue([10605,10607,10608,10609,10610,10611],function(param1:Array):void
         {
            switch(taskId)
            {
               case 1:
                  task = new FinalBattleTask1Plot();
                  index = [param1[0] & 15,param1[0] >> 4 & 15];
                  task.initData([[bossIds[2][index[1] - 1]],[petIds[1][index[0] - 1],petIds[2][index[1] - 1]],[npcIds[1][index[0] - 1],npcIds[2][index[1] - 1]],awards[taskId - 1]]);
                  break;
               case 2:
                  task = new FinalBattleTask2Plot();
                  index = [param1[0] >> 8 & 15,param1[0] >> 12 & 15];
                  task.initData([[bossIds[3][index[1] - 1]],[petIds[0][index[0] - 1],petIds[3][index[1] - 1]],[npcIds[0][index[0] - 1],npcIds[3][index[1] - 1]],awards[taskId - 1]]);
                  break;
               case 3:
                  task = new FinalBattleTask3Plot();
                  index = [param1[0] >> 16 & 15,1,1,1,1,1];
                  if((param1[1] & 15) == 0)
                  {
                     index[1] = param1[4] & 15;
                     index[2] = param1[4] >> 4 & 15;
                  }
                  else if((param1[1] & 15) == 1)
                  {
                     index[1] = param1[4] >> 8 & 15;
                     index[2] = param1[4] >> 12 & 15;
                     index[3] = param1[4] >> 16 & 15;
                  }
                  else
                  {
                     index[1] = param1[5] & 15;
                     index[2] = param1[5] >> 4 & 15;
                     index[3] = param1[5] >> 8 & 15;
                     index[4] = param1[5] >> 12 & 15;
                     index[5] = param1[5] >> 16 & 15;
                  }
                  task.initData([[bossIds[4][index[1] - 1],bossIds[4][index[2] - 1],bossIds[4][index[3] - 1],bossIds[4][index[4] - 1],bossIds[4][index[5] - 1]],[petIds[1][index[0] - 1],petIds[4][index[1] - 1],petIds[4][index[2] - 1],petIds[4][index[3] - 1],petIds[4][index[4] - 1],petIds[4][index[5] - 1]],[npcIds[1][index[0] - 1],npcIds[4][0],npcIds[4][0],npcIds[4][0],npcIds[4][0]],awards[taskId - 1]]);
                  break;
               case 4:
                  task = new FinalBattleTask4Plot();
                  index = [param1[1] >> 4 & 15];
                  task.initData([[],[petIds[1][index[0] - 1]],[npcIds[1][index[0] - 1]],awards[taskId - 1]]);
                  break;
               case 5:
                  task = new FinalBattleTask5Plot();
                  index = [param1[1] & 15];
                  task.initData([[],[petIds[4][0]],[npcIds[4][0]],awards[taskId - 1]]);
                  break;
               case 6:
                  task = new FinalBattleTask6Plot();
                  index = [param1[2] & 15,param1[2] >> 4 & 15,param1[2] >> 8 & 15];
                  task.initData([[bossIds[2][index[0] - 1],bossIds[2][index[1] - 1]],[petIds[2][index[0] - 1],petIds[2][index[1] - 1],petIds[1][index[2] - 1]],[npcIds[1][index[2] - 1]],awards[taskId - 1]]);
                  break;
               case 7:
                  task = new FinalBattleTask7Plot();
                  index = [param1[3] & 15,param1[3] >> 4 & 15,param1[3] >> 8 & 15,param1[3] >> 12 & 15,param1[3] >> 16 & 15,param1[3] >> 20 & 15];
                  task.initData([[bossIds[4][index[0] - 1],bossIds[4][index[1] - 1],bossIds[4][index[2] - 1],bossIds[4][index[3] - 1],bossIds[4][index[4] - 1],bossIds[4][index[5] - 1]],[petIds[4][index[0] - 1],petIds[4][index[1] - 1],petIds[4][index[2] - 1],petIds[4][index[3] - 1],petIds[4][index[4] - 1],petIds[4][index[5] - 1]],[npcIds[4][index[0] - 1]],awards[taskId - 1]]);
            }
         });
      }
      
      private function onMapComplete(param1:MCLoadEvent) : void
      {
         var _loc2_:DisplayObjectContainer = param1.getContent().root as DisplayObjectContainer;
         this.loader.removeEventListener(MCLoadEvent.SUCCESS,this.onMapComplete);
         var _loc3_:BitmapData = new BitmapData(960,560);
         this.clearMap(_loc2_["bg_mc"]);
         _loc3_.draw(_loc2_["bg_mc"]);
         animatorLevel.addChild(new Bitmap(_loc3_));
         typeLevel.removeChildren();
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_["type_mc"].numChildren)
         {
            typeLevel.addChild(_loc2_["type_mc"].getChildAt(_loc4_));
            _loc4_++;
         }
         MapManager.currentMap.makeMapNormal();
         AStar.init(MapManager.currentMap,1500);
         MainManager.actorModel.pos = MapConfig.getMapPeopleXY(mapId,mapId);
         this.loader.clear();
         this.loader = null;
      }
      
      private function clearMap(param1:DisplayObjectContainer) : void
      {
         var _loc2_:int = param1.numChildren - 1;
         while(_loc2_ >= 0)
         {
            if((param1.getChildAt(_loc2_) is Sprite || param1.getChildAt(_loc2_) is SimpleButton) && param1.getChildAt(_loc2_).width < 200 && param1.getChildAt(_loc2_).height < 200)
            {
               param1.removeChildAt(_loc2_);
            }
            _loc2_--;
         }
      }
      
      override public function destroy() : void
      {
         if(this.task != null)
         {
            this.task.destroy();
         }
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         ToolBarController.panel.visible = true;
         KTool.showMapPlayerAndMonster();
         super.destroy();
      }
   }
}
