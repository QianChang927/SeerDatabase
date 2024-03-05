package com.robot.app.task.control
{
   import com.robot.app.task.model.MainTaskDetailStep;
   import com.robot.app.task.model.MainTaskDetailTask;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.TasksOfNewStyleXMLInfo;
   import com.robot.core.config.xml.TasksXMLInfo;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TaskRoadOfDevildomController
   {
      
      private static var _instance:com.robot.app.task.control.TaskRoadOfDevildomController;
       
      
      private var _panel:AppModel;
      
      public function TaskRoadOfDevildomController()
      {
         super();
         if(_instance)
         {
            throw new Error("只能使用getInstance()方法访问该实例对象！");
         }
      }
      
      public static function getInstance() : com.robot.app.task.control.TaskRoadOfDevildomController
      {
         if(!_instance)
         {
            _instance = new com.robot.app.task.control.TaskRoadOfDevildomController();
         }
         return _instance;
      }
      
      public function start(param1:uint) : void
      {
         var task:MainTaskDetailTask;
         var dialogArr:Array;
         var questionArr:Array;
         var handlerArr:Array;
         var taskId:uint = param1;
         StatManager.sendStat2014("0310赛尔号主线","点击4号场景NPC人数","2016运营活动");
         task = TaskRoadOfDevildom.getInstance().getTaskById(taskId);
         dialogArr = [MainManager.actorInfo.formatNick + task.requirement];
         questionArr = [task.question,"让我先准备一下！"];
         handlerArr = [function():void
         {
            TasksManager.accept(taskId,function(param1:Boolean):void
            {
               startPro(taskId);
               LevelManager.iconLevel.visible = false;
            });
         }];
         NpcDialog.show(NPC.SHIPER,dialogArr,questionArr,handlerArr);
      }
      
      public function showPanel(param1:uint) : void
      {
         var _loc2_:MainTaskDetailTask = TaskRoadOfDevildom.getInstance().getTaskById(param1);
         if(this._panel == null)
         {
            this._panel = new AppModel(ClientConfig.getTaskModule(_loc2_.panel),"正在打开任务信息");
            this._panel.setup();
         }
         this._panel.show();
      }
      
      public function completeNode(param1:uint, param2:uint) : void
      {
         var nextStep:MainTaskDetailStep = null;
         var curTaskIndex:int = 0;
         var protocolNum:int = 0;
         var taskId:uint = param1;
         var step:uint = param2;
         nextStep = TaskRoadOfDevildom.getInstance().getStepById(taskId,step + 1);
         if(nextStep)
         {
            curTaskIndex = int(TasksOfNewStyleXMLInfo.IsInArray(taskId,TasksOfNewStyleXMLInfo.data));
            protocolNum = Number(TasksOfNewStyleXMLInfo.getArrName(taskId,"protocol"));
            if(taskId >= 3099)
            {
               TasksManager.getProStatusList(taskId,function(param1:Array):void
               {
                  if(!param1[step])
                  {
                     SocketConnection.send(protocolNum,step + 1,curTaskIndex - 2);
                  }
               });
            }
            else
            {
               SocketConnection.send(protocolNum,step + 1);
            }
            TasksManager.complete(taskId,step,function(param1:Boolean):void
            {
               var panelName:String = null;
               var sucess:Boolean = param1;
               var curTaskIndex:int = int(TasksOfNewStyleXMLInfo.IsInArray(taskId,TasksOfNewStyleXMLInfo.data));
               if(curTaskIndex != -1)
               {
                  if(taskId < 3120)
                  {
                     EventManager.addEventListener(ItemEvent.ITEM_IN_BAG_ALARM_CLICK,function(param1:DynamicEvent):void
                     {
                        EventManager.removeEventListener(ItemEvent.ITEM_IN_BAG_ALARM_CLICK,arguments.callee);
                        switchMap(taskId,nextStep.stepId);
                     });
                  }
                  if(taskId >= 3120)
                  {
                     panelName = "TaskGoPanel";
                     if(panelName != null)
                     {
                        ModuleManager.showModule(ClientConfig.getTaskModule(panelName),"...",[taskId,step + 1]);
                     }
                  }
               }
               else
               {
                  switchMap(taskId,nextStep.stepId);
               }
            });
         }
         else
         {
            this.allCompleted(taskId);
         }
      }
      
      private function startPro(param1:uint) : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         this.switchMap(param1,0);
      }
      
      private function switchMap(param1:uint, param2:uint) : void
      {
         var taskId:uint = param1;
         var stepId:uint = param2;
         var mapId:uint = TaskRoadOfDevildom.getInstance().getMapIdByStep(taskId,stepId);
         if(mapId <= 0)
         {
            return;
         }
         if(MapManager.currentMap.id == mapId)
         {
            this.playStory(taskId,stepId);
         }
         else
         {
            MapManager.changeLocalMap(mapId);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               playStory(taskId,stepId);
            });
         }
      }
      
      public function playStory(param1:uint, param2:uint) : void
      {
         var step:MainTaskDetailStep = null;
         var taskId:uint = param1;
         var stepId:uint = param2;
         if(TasksManager.getTaskStatus(taskId) == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(taskId);
         }
         KTool.hideMapAllPlayerAndMonster();
         step = TaskRoadOfDevildom.getInstance().getStepById(taskId,stepId);
         if(!step)
         {
            return;
         }
         TaskDiaLogManager.single.playStory(TaskRoadOfDevildom.getInstance().getStories(taskId,step.stepId),function():void
         {
            completeNode(taskId,step.stepId);
         });
      }
      
      private function allCompleted(param1:uint) : void
      {
         var taskId:uint = param1;
         DisplayUtil.removeForParent(MapManager.currentMap.controlLevel["animationContainer"]);
         KTool.showMapAllPlayerAndMonster();
         if(TasksOfNewStyleXMLInfo.IsInArray(taskId,TasksOfNewStyleXMLInfo.data) != -1)
         {
            TasksManager.getProStatusList(taskId,function(param1:Array):void
            {
               var a:Array = param1;
               if(!a[3])
               {
                  TasksManager.complete(taskId,4,function():void
                  {
                     if(taskId < 3120)
                     {
                        EventManager.addEventListener(ItemEvent.ITEM_IN_BAG_ALARM_CLICK,function(param1:DynamicEvent):void
                        {
                           EventManager.removeEventListener(ItemEvent.ITEM_IN_BAG_ALARM_CLICK,arguments.callee);
                           ModuleManager.showModule(ClientConfig.getTaskModule(TasksOfNewStyleXMLInfo.getTotalName(taskId)));
                        });
                     }
                     if(taskId >= 3120)
                     {
                        ModuleManager.showModule(ClientConfig.getTaskModule(TasksOfNewStyleXMLInfo.getTotalName(taskId)),"",taskId);
                     }
                  });
               }
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getTaskModule(TasksXMLInfo.getCurrentTaskTotal(SystemTimerManager.sysBJDate)),"正在打开...",function():void
            {
               var obj:Object;
               TasksManager.complete(taskId,TaskRoadOfDevildom.getInstance().getLastStep(taskId),function(param1:Boolean):void
               {
                  TaskRoadOfDevildom.getInstance().reqDoAfterFinish(taskId);
                  TaskRoadOfDevildom.getInstance().reqAchievement(taskId);
                  LevelManager.iconLevel.visible = true;
               });
               obj = {};
               obj["funhandler2"] = continueTasksHandler;
               ModuleManager.getModule(ClientConfig.getTaskModule(TasksXMLInfo.getCurrentTaskTotal(SystemTimerManager.sysBJDate)),"").content.init(obj);
            });
         }
      }
      
      private function continueTasksHandler() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("NewYearPetFestivalPanel"),"正在打开");
      }
   }
}
