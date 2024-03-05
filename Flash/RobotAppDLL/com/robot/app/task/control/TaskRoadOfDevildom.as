package com.robot.app.task.control
{
   import com.robot.app.task.model.MainTaskDetailGroup;
   import com.robot.app.task.model.MainTaskDetailMod;
   import com.robot.app.task.model.MainTaskDetailStep;
   import com.robot.app.task.model.MainTaskDetailTask;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.TasksOfNewStyleXMLInfo;
   import com.robot.core.event.XMLEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.net.XMLLoader;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.utils.getDefinitionByName;
   
   public class TaskRoadOfDevildom
   {
      
      private static var _instance:com.robot.app.task.control.TaskRoadOfDevildom;
      
      private static const XML_URL:String = "xml/main_task_details.xml";
      
      public static const CURRENT_TASK_GROUP_ID:int = 0;
      
      public static const TASK_ID_MECHAOUT:uint = 3019;
      
      public static const TASK_ID_HOLY_VS_DEVIL:uint = 3021;
      
      public static const TASK_ID_HAVEN_EARTH:uint = 3031;
      
      public static const TASK_ID_EVIL_JUMPDOWN:uint = 3032;
      
      public static const TASK_ID_EVER_NIGHT:uint = 3033;
      
      public static const TASK_ID_STORM_AROUND:uint = 3036;
      
      public static const TASK_ID_MASTER_OF_DEVILDOM:uint = 3037;
      
      public static const TASK_ID_FACE_TO_DEVILDOM:uint = 3038;
      
      public static const TASK_ID_DEVILDOM_DROP_SCENE:uint = 3039;
      
      public static const MAP_ID_SHIPMASTER:uint = 4;
      
      public static const MAP_ID_EVER_NIGHT_OLD_CASTLE_1:uint = 10565;
      
      public static const MAP_ID_EVER_NIGHT_DARK_NIGHT_2:uint = 10566;
      
      public static const MAP_ID_EVER_NIGHT_CHASM_3:uint = 10567;
      
      public static const MAP_ID_EVER_NIGHT_CHASM_4:uint = 10568;
      
      public static const TASK_STEP_1:uint = 1;
      
      public static const TASK_STEP_2:uint = 2;
      
      public static const TASK_STEP_3:uint = 3;
      
      public static const TASK_STEP_4:uint = 4;
      
      public static const COMMAND_ID_ACHIEVEMENT_JUMP_EVIL_WORLD:uint = 48604;
      
      public static const COMMAND_ID_ANNIVERSARY:uint = 46106;
      
      public static const COMMAND_PARAM_ANNIVERSARY:int = 7;
       
      
      private var _xmlLoader:XMLLoader;
      
      private var _currentGrp:MainTaskDetailGroup;
      
      private var _grps:Array;
      
      private var _callBack:Function;
      
      public function TaskRoadOfDevildom()
      {
         super();
         if(_instance)
         {
            throw new Error("只能使用getInstance()方法访问该实例对象！");
         }
      }
      
      public static function isAllCompletedOfJuly() : Boolean
      {
         if(TasksManager.COMPLETE != TasksManager.getTaskStatus(TASK_ID_MECHAOUT) || TasksManager.COMPLETE != TasksManager.getTaskStatus(TASK_ID_HOLY_VS_DEVIL) || TasksManager.COMPLETE != TasksManager.getTaskStatus(TASK_ID_HAVEN_EARTH) || TasksManager.COMPLETE != TasksManager.getTaskStatus(TASK_ID_EVIL_JUMPDOWN))
         {
            return false;
         }
         SocketConnection.send(COMMAND_ID_ACHIEVEMENT_JUMP_EVIL_WORLD);
         return true;
      }
      
      public static function getInstance() : com.robot.app.task.control.TaskRoadOfDevildom
      {
         if(!_instance)
         {
            _instance = new com.robot.app.task.control.TaskRoadOfDevildom();
         }
         return _instance;
      }
      
      public function loadXml(param1:Function) : void
      {
         this._callBack = param1;
         this._xmlLoader = new XMLLoader();
         this._xmlLoader.addEventListener(XMLEvent.COMPLETE,this.onXmlLoadCompleted);
         this._xmlLoader.load(ClientConfig.getResPath(XML_URL));
      }
      
      private function onXmlLoadCompleted(param1:XMLEvent) : void
      {
         this._xmlLoader.removeEventListener(XMLEvent.COMPLETE,this.onXmlLoadCompleted);
         this.parseXml(param1.data);
      }
      
      private function parseXml(param1:XML) : void
      {
         var _loc2_:XML = null;
         var _loc3_:MainTaskDetailGroup = null;
         this._grps = new Array();
         for each(_loc2_ in param1.child("taskgrp"))
         {
            _loc3_ = MainTaskDetailGroup.ReadXml(_loc2_);
            if(Boolean(_loc3_) && _loc3_.grpId == CURRENT_TASK_GROUP_ID)
            {
               this._currentGrp = _loc3_;
            }
            this._grps.push(_loc3_);
         }
         if(null != this._callBack)
         {
            this._callBack.apply();
            this._callBack = null;
         }
      }
      
      public function getTasks() : Array
      {
         return this._currentGrp == null ? null : this._currentGrp.tasks;
      }
      
      public function getAllTasks() : Array
      {
         var _loc2_:MainTaskDetailGroup = null;
         var _loc1_:Array = new Array();
         for each(_loc2_ in this._grps)
         {
            _loc1_ = _loc1_.concat(_loc2_.tasks);
         }
         return _loc1_;
      }
      
      public function getGrpByTaskId(param1:int) : MainTaskDetailGroup
      {
         var _loc2_:MainTaskDetailGroup = null;
         var _loc3_:MainTaskDetailTask = null;
         for each(_loc2_ in this._grps)
         {
            for each(_loc3_ in _loc2_.tasks)
            {
               if(_loc3_.taskId == param1)
               {
                  return _loc2_;
               }
            }
         }
         return null;
      }
      
      public function getTaskByName(param1:String) : MainTaskDetailTask
      {
         var _loc3_:MainTaskDetailTask = null;
         var _loc2_:Array = this.getTasks();
         if(Boolean(_loc2_) && _loc2_.length > 0)
         {
            for each(_loc3_ in _loc2_)
            {
               if(_loc3_.mcName == param1)
               {
                  return _loc3_;
               }
            }
         }
         return null;
      }
      
      public function getLastTask() : MainTaskDetailTask
      {
         var _loc1_:Array = this.getTasks();
         _loc1_ = _loc1_.sortOn("taskId",Array.NUMERIC);
         return MainTaskDetailTask(_loc1_[_loc1_.length - 1]);
      }
      
      public function getTaskById(param1:uint) : MainTaskDetailTask
      {
         var _loc3_:MainTaskDetailTask = null;
         var _loc2_:Array = this.getAllTasks();
         if(Boolean(_loc2_) && _loc2_.length > 0)
         {
            for each(_loc3_ in _loc2_)
            {
               if(_loc3_.taskId == param1)
               {
                  return _loc3_;
               }
            }
         }
         return null;
      }
      
      public function getStepById(param1:uint, param2:uint) : MainTaskDetailStep
      {
         var _loc4_:MainTaskDetailStep = null;
         var _loc3_:MainTaskDetailTask = this.getTaskById(param1);
         if(_loc3_)
         {
            for each(_loc4_ in _loc3_.steps)
            {
               if(param2 == _loc4_.stepId)
               {
                  return _loc4_;
               }
            }
         }
         return null;
      }
      
      public function getMapIdByStep(param1:uint, param2:uint) : uint
      {
         var _loc3_:MainTaskDetailStep = this.getStepById(param1,param2);
         if(null == _loc3_)
         {
            return 0;
         }
         return _loc3_.mapId;
      }
      
      public function getLastStep(param1:uint) : int
      {
         var _loc2_:MainTaskDetailTask = this.getTaskById(param1);
         if(Boolean(_loc2_) && _loc2_.steps != null)
         {
            return _loc2_.steps.length - 1;
         }
         return 0;
      }
      
      public function getStories(param1:uint, param2:uint) : Array
      {
         var _loc5_:MainTaskDetailMod = null;
         var _loc6_:TaskMod = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         var _loc3_:MainTaskDetailStep = this.getStepById(param1,param2);
         var _loc4_:Array = new Array();
         if(_loc3_)
         {
            for each(_loc5_ in _loc3_.dialogs)
            {
               _loc7_ = int(_loc5_.type);
               switch(_loc7_)
               {
                  case TaskDiaLogManager.DIALOG:
                     _loc8_ = _loc5_.answer;
                     _loc6_ = new TaskMod(_loc7_,_loc5_.npcId,[_loc5_.dialog],_loc8_ == null || _loc8_.length <= 0 ? null : [_loc8_]);
                     if(param1 >= 3099)
                     {
                        _loc6_.isNewDialog_1 = true;
                     }
                     else if(param1 >= 3051)
                     {
                        _loc6_.isNewDialog = true;
                     }
                     break;
                  case TaskDiaLogManager.MAP_MOVIE:
                     _loc6_ = new TaskMod(_loc7_,0,null,null,[this.taskMc,_loc5_.frame,_loc5_.mcName]);
                     break;
                  case TaskDiaLogManager.FUL_MOVIE:
                     _loc6_ = new TaskMod(_loc7_,0,null,null,[_loc5_.swfName,true]);
                     break;
                  case TaskDiaLogManager.DLG_MOVIE:
                     _loc6_ = new TaskMod(_loc7_,0,null,null,[_loc5_.swfName,true]);
                     break;
               }
               _loc4_.push(_loc6_);
            }
         }
         return _loc4_;
      }
      
      public function get taskMc() : MovieClip
      {
         return MapManager.currentMap.controlLevel["animationContainer"];
      }
      
      public function reqDoAfterFinish(param1:int) : void
      {
         var _loc3_:Array = null;
         var _loc4_:Class = null;
         var _loc5_:Array = null;
         var _loc6_:Function = null;
         var _loc7_:int = 0;
         var _loc2_:MainTaskDetailTask = this.getTaskById(param1);
         if(null != _loc2_.codeAfterFinish && _loc2_.codeAfterFinish.length > 0)
         {
            _loc3_ = _loc2_.codeAfterFinish.split(":");
            _loc4_ = getDefinitionByName(_loc3_[0]) as Class;
            if(null == _loc4_)
            {
               Alarm.show("找不到该实例类：" + _loc3_[0]);
               return;
            }
            _loc5_ = String(_loc3_[1]).split(",");
            if(null == _loc5_)
            {
               Alarm.show("函数的格式错误：" + _loc3_[1]);
               return;
            }
            _loc6_ = _loc4_[String(_loc5_.shift())];
            if(null == _loc6_)
            {
               Alarm.show("该类中找不到静态函数：" + _loc2_.codeAfterFinish);
               return;
            }
            if((_loc7_ = int(_loc5_.length)) == 0)
            {
               _loc6_();
            }
            else if(_loc7_ == 1)
            {
               _loc6_(_loc5_[0]);
            }
            else if(_loc7_ == 2)
            {
               _loc6_(_loc5_[0],_loc5_[1]);
            }
            else if(_loc7_ == 3)
            {
               _loc6_(_loc5_[0],_loc5_[1],_loc5_[2]);
            }
         }
      }
      
      public function reqAchievement(param1:int) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:MainTaskDetailTask = null;
         var _loc2_:MainTaskDetailGroup = this.getGrpByTaskId(param1);
         if(!_loc2_)
         {
            return;
         }
         if(_loc2_.achievementProtocolId <= 0)
         {
            return;
         }
         if(null != _loc2_.achievementReq && _loc2_.achievementReq.length > 0)
         {
            for each(_loc3_ in _loc2_.achievementReq)
            {
               if(TasksManager.COMPLETE != TasksManager.getTaskStatus(_loc3_))
               {
                  return;
               }
            }
         }
         else
         {
            for each(_loc4_ in _loc2_.tasks)
            {
               if(TasksManager.COMPLETE != TasksManager.getTaskStatus(_loc4_.taskId))
               {
                  return;
               }
            }
         }
         SocketConnection.send(_loc2_.achievementProtocolId);
      }
      
      public function reqFinishAnniversary() : void
      {
         SocketConnection.send(COMMAND_ID_ANNIVERSARY,COMMAND_PARAM_ANNIVERSARY);
      }
      
      public function checkMainTask() : void
      {
         var execCheck:Function = null;
         execCheck = function():void
         {
            var _loc2_:int = 0;
            var _loc1_:Array = TasksOfNewStyleXMLInfo.data;
            for each(_loc2_ in _loc1_)
            {
               if(TasksManager.getTaskStatus(_loc2_) == TasksManager.ALR_ACCEPT)
               {
                  break;
               }
            }
         };
         if(this._grps == null)
         {
            this.loadXml(execCheck);
         }
         else
         {
            execCheck();
         }
      }
   }
}
