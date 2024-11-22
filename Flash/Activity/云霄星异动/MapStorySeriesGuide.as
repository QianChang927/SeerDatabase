package com.robot.module.app
{
   import com.robot.app2.control.DialogControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.MapStoryManager;
   import com.robot.core.manager.ModuleManager;
   
   public class MapStorySeriesGuide extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var StoryProgress:int;
      
      private var IsFinishStory1:int;
      
      private var IsFinishStory1Prize:int;
      
      private var IsFinishStory1Egg:int;
      
      private var Map1708SaveArr:Array;
      
      private var hasGot3:int;
      
      private var hasGot4:Array;
      
      private var hasGot2:Array;
      
      public function MapStorySeriesGuide()
      {
         super();
         resUrl = "2024/1122/MapStorySeriesGuide";
         configUrl = "2024/1122/MapStorySeriesGuideCig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         MapStoryManager.updateProgress();
      }
      
      private function onStart() : void
      {
         if(!this.isStart)
         {
            this.isStart = true;
         }
      }
      
      override protected function updatePanel() : void
      {
         this.updateData();
         this.onStart();
         this.updateDisplay();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         if(!this.isStart)
         {
            return;
         }
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         var gotoArr:Array = ["","SpaceshipSystemMaintenanceMainPanel","PositioningMysteriousSignalPanel","BigShotRideSuitMainPanel"];
         switch(btnName)
         {
            case "close":
               this.hide();
               break;
            case "goto_" + index:
               ModuleManager.showAppModule(gotoArr[index]);
               this.hide();
               break;
            case "moby":
               if(this.IsFinishStory1Egg == 0)
               {
                  DialogControl.showAllDilogs(169,1);
               }
               else if(BitBuffSetClass.getState(24523) == 0)
               {
                  DialogControl.showAllDilogs(169,2);
                  BitBuffSetClass.setState(24523,1);
                  ui.mobyMc.gotoAndStop(2);
               }
               break;
            case "btnStoryPrize":
               doAction("StoryPrize").then(refresh);
               break;
            case "gotoMap_" + index:
               this.hide();
               MapManager.changeMap(index);
               break;
            case "btnStory":
               if(MapStoryManager.StoryProgress >= 0 && MapStoryManager.StoryProgress < 5)
               {
                  MapStoryManager.startStory();
                  MapManager.changeMap(25);
               }
               else if(MapStoryManager.StoryProgress >= 5 && MapStoryManager.StoryProgress < 8)
               {
                  MapStoryManager.startStory();
                  MapManager.changeMap(27);
               }
               else
               {
                  MapStoryManager.startStory();
                  MapManager.changeMap(1708);
               }
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
      
      private function updateData() : void
      {
         this.StoryProgress = getValue("StoryProgress");
         this.IsFinishStory1 = getValue("IsFinishStory1");
         this.IsFinishStory1Prize = getValue("IsFinishStory1Prize");
         this.IsFinishStory1Egg = getValue("IsFinishStory1Egg");
         this.Map1708SaveArr = getValue("Map1708SaveArr");
         this.hasGot3 = getValue("hasGot3");
         this.hasGot2 = getValue("hasGot2");
         this.hasGot4 = getValue("hasGot4");
      }
      
      private function updateDisplay() : void
      {
         ui.mcStoryTip.gotoAndStop(1);
         if(this.StoryProgress == 0)
         {
            ui.mcStory.gotoAndStop(1);
         }
         else if(this.IsFinishStory1 == 1 && this.IsFinishStory1Prize == 0)
         {
            ui.mcStory.gotoAndStop(3);
            ui.mcStoryTip.gotoAndStop(2);
         }
         else if(this.IsFinishStory1 == 1 && this.IsFinishStory1Prize == 1)
         {
            ui.mcStory.gotoAndStop(4);
            ui.mcStoryTip.gotoAndStop(2);
         }
         else
         {
            ui.mcStory.gotoAndStop(2);
         }
         if(this.IsFinishStory1 == 1)
         {
            ui.mapActionMc.gotoAndStop(2);
            ui.mapActionMc.mcBtn.gotoAndStop(1);
            ui.mapActionMc.task_1.gotoAndStop(this.Map1708SaveArr[0] == 1 ? 2 : 1);
            ui.mapActionMc.task_2.gotoAndStop(this.Map1708SaveArr[1] + this.Map1708SaveArr[2] + this.Map1708SaveArr[3] + this.Map1708SaveArr[4] + this.Map1708SaveArr[5] == 5 ? 2 : 1);
            ui.mapActionMc.task_3.gotoAndStop(this.Map1708SaveArr[6] == 1 ? 2 : 1);
         }
         else
         {
            ui.mapActionMc.gotoAndStop(1);
         }
         ui.hasGot_1.gotoAndStop(this.IsFinishStory1 + 1);
         ui.hasGot_2.gotoAndStop(this.sum(this.hasGot2) == this.hasGot2.length ? 2 : 1);
         ui.hasGot_3.gotoAndStop(this.hasGot3 > 3 ? 2 : 1);
         ui.hasGot_4.gotoAndStop(this.sum(this.hasGot4) == this.hasGot4.length ? 2 : 1);
         if(BitBuffSetClass.getState(24523) == 1)
         {
            ui.mobyMc.gotoAndStop(2);
         }
         else
         {
            ui.mobyMc.gotoAndStop(1);
         }
      }
      
      private function sum(arr:Array) : int
      {
         var r:int = 0;
         for(var i:int = 0; i < arr.length; i++)
         {
            r += arr[i];
         }
         return r;
      }
   }
}

