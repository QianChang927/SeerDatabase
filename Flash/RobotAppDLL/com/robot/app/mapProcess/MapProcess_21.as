package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.task.control.TaskController_107;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.mode.PetModel;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.utils.getDefinitionByName;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.EventManager;
   
   public class MapProcess_21 extends BaseMapProcess
   {
      
      private static var fishMc:MovieClip;
       
      
      private var panel:AppModel;
      
      public function MapProcess_21()
      {
         super();
      }
      
      override protected function init() : void
      {
         fishMc = conLevel["fishNewMc"];
         fishMc.visible = false;
         depthLevel["task1235mc"].visible = false;
         if(TasksManager.getTaskStatus(107) == TasksManager.ALR_ACCEPT)
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.fishFightListen);
            TasksManager.getProStatusList(107,function(param1:Array):void
            {
               if(!param1[4])
               {
                  if(TaskController_107.fishNumOne == 0 || TaskController_107.fishNumTwo == 0)
                  {
                     TaskController_107.oneStep();
                  }
               }
            });
         }
         else
         {
            getDefinitionByName("com.robot.app2.mapProcess.control.PirateAttacksController").init();
         }
      }
      
      private function checkFun() : void
      {
         if(TasksManager.getTaskStatus(107) == TasksManager.ALR_ACCEPT)
         {
            EventManager.addEventListener(PetEvent.PET_UPDATE,this.checkFun);
            TasksManager.getProStatusList(107,function(param1:Array):void
            {
               if(!param1[4])
               {
                  if(TaskController_107.testBool == false)
                  {
                     TaskController_107.testBool = true;
                     fishMc.visible = true;
                     MainManager.actorModel.visible = false;
                     fishMc.gotoAndPlay(1);
                     fishMc.addEventListener(Event.ENTER_FRAME,fishCheck);
                  }
               }
            });
         }
      }
      
      private function fishCheck(param1:Event) : void
      {
         LevelManager.closeMouseEvent();
         if(fishMc.currentFrame == fishMc.totalFrames)
         {
            fishMc.removeEventListener(Event.ENTER_FRAME,this.fishCheck);
            MainManager.actorModel.visible = true;
            LevelManager.openMouseEvent();
         }
      }
      
      private function fishFightListen(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.fishFightListen);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            TasksManager.getProStatusList(107,function(param1:Array):void
            {
               var arr:Array = param1;
               if(!arr[0])
               {
                  TaskController_107.testBool = false;
                  TasksManager.complete(107,0,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        checkFun();
                     }
                  },false);
               }
               if(Boolean(arr[0]) && !arr[1])
               {
                  TaskController_107.testBool = false;
                  TasksManager.complete(107,1,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        checkFun();
                     }
                  },false);
               }
               if(Boolean(arr[1]) && !arr[2])
               {
                  TaskController_107.testBool = false;
                  TasksManager.complete(107,2,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        checkFun();
                     }
                  },false);
               }
               if(Boolean(arr[2]) && !arr[3])
               {
                  TaskController_107.testBool = false;
                  TasksManager.complete(107,3,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        checkFun();
                     }
                  },false);
               }
               if(Boolean(arr[3]) && !arr[4])
               {
                  TaskController_107.testBool = false;
                  TasksManager.complete(107,4,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        checkFun();
                     }
                  },true);
               }
            });
         }
         else
         {
            DebugTrace.show("你失败了");
         }
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.PirateAttacksController").destroy();
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.fishFightListen);
         fishMc.removeEventListener(Event.ENTER_FRAME,this.fishCheck);
      }
      
      public function exploitOre() : void
      {
         EnergyController.exploit(2);
      }
      
      public function fishTask() : void
      {
         var _loc1_:PetModel = MainManager.actorModel.pet;
         if(_loc1_ && _loc1_.info.petID != 33 && _loc1_.info.petID != 34 || !_loc1_)
         {
            Alarm.show("这可是为<font color=\'#ff0000\'>利牙鱼</font>做口腔护理的装置呢，快带着它来做个护理吧！");
            return;
         }
         if(!this.panel)
         {
            this.panel = ModuleManager.getModule(ClientConfig.getGameModule("FishToothGame"),"正在打开游戏...");
         }
         this.panel.show();
      }
   }
}
