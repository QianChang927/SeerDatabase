package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.games.GameStorageManager;
   import com.robot.app.mapProcess.control.NinjaSpNoNoController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.GamePlatformManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_60 extends BaseMapProcess
   {
       
      
      private var _tree:SimpleButton;
      
      private var _evaBig:MovieClip;
      
      public function MapProcess_60()
      {
         super();
         this._tree = conLevel["tree_btn"];
         this._tree.addEventListener(MouseEvent.CLICK,this.clickTreeHandler);
         ToolTipManager.add(this._tree,"植物大战沙尘暴");
         this._evaBig = depthLevel["bigEva"];
         this._evaBig.gotoAndStop(1);
         this._evaBig.visible = false;
         if(TasksManager.getTaskStatus(97) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(97,function(param1:Array):void
            {
               if(Boolean(param1[3]) && !param1[4])
               {
                  if(MapProcess_325.vistiteEva != "visited")
                  {
                     _evaBig.visible = true;
                     _evaBig.buttonMode = true;
                     _evaBig.addEventListener(MouseEvent.CLICK,pleaseEva);
                  }
               }
            });
         }
         NinjaSpNoNoController.instance.initMap60(this);
      }
      
      override protected function init() : void
      {
      }
      
      private function pleaseEva(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.EVA,["咦？#7伊娃伊娃!彭恰恰！！#6艾迪？GOGOGO~~~~"],["嘿嘿……"],[function():void
         {
            _evaBig.gotoAndPlay(1);
            _evaBig.mouseEnabled = false;
            _evaBig.mouseChildren = false;
            MapProcess_325.vistiteEva = "visited";
            if(MapProcess_325.visiteMaomao == "visited")
            {
               TasksManager.complete(97,4,null,true);
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getTaskModule("TaskPanel_97"),"正在打开任务信息....");
            }
         }]);
      }
      
      public function onLineClickHandler() : void
      {
         if(Math.random() < 0.5)
         {
            MapManager.changeMap(61);
         }
         else
         {
            MapManager.changeMap(62);
         }
      }
      
      private function clickTreeHandler(param1:MouseEvent) : void
      {
         MapManager.removeAppArrow();
         GameStorageManager.freshLastGame(41011);
         GamePlatformManager.join("PlantsVSZombies",true);
      }
      
      public function exploitOre() : void
      {
         EnergyController.exploit(28);
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(this._tree);
         this._tree.removeEventListener(MouseEvent.CLICK,this.clickTreeHandler);
         this._tree = null;
         this._evaBig.removeEventListener(MouseEvent.CLICK,this.pleaseEva);
         this._evaBig = null;
      }
   }
}
