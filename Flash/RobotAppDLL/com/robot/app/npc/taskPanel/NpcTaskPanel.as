package com.robot.app.npc.taskPanel
{
   import com.robot.app.task.control.TaskRoadOfDevildom;
   import com.robot.app.task.control.TaskRoadOfDevildomController;
   import com.robot.app.tasksRecord.TasksRecordConfig;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.TasksXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.npc.NpcInfo;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class NpcTaskPanel
   {
      
      private static const LEN:uint = 3;
      
      private static const PATH:String = "com.robot.app.task.control";
      
      private static var _ids:Array;
      
      private static var _info:NpcInfo;
      
      private static var _ui:MovieClip;
      
      private static var _items:Array;
      
      private static var crtIndex:int;
      
      private static var crtFocus:int;
      
      private static var _focusTaskId:int;
      
      private static var m_TempGoSceneArr:Array = ["ComingAgainKaErMainPanel","MainLineTask_3309","MainLineTask_3310","MainLineTask_3311"];
       
      
      public function NpcTaskPanel()
      {
         super();
      }
      
      public static function show(param1:Array, param2:NpcInfo) : void
      {
         var tempIndex:int = 0;
         var tId:uint = 0;
         var i:uint = 0;
         var item:NpcTaskListItem = null;
         var ids:Array = param1;
         var info:NpcInfo = param2;
         if(focusTaskID >= 3308)
         {
            tempIndex = focusTaskID - 3308;
            hide();
            MapManager.changeMapWithCallback(1,function():void
            {
               hide();
               ModuleManager.showAppModule(m_TempGoSceneArr[tempIndex]);
            });
            return;
         }
         if(_ui == null)
         {
            _ids = new Array();
            for each(tId in ids)
            {
               if(SystemTimerManager.sysBJDate.time > TasksXMLInfo.getTaskOnlineTime(tId))
               {
                  _ids.push(tId);
               }
            }
            if(_ids.length <= 0 || _ids.indexOf(focusTaskID) != -1)
            {
               processTask(focusTaskID);
               return;
            }
            _info = info;
            ResourceManager.getResource(ClientConfig.getAppRes(TasksXMLInfo.getCurrentTaskPanel(SystemTimerManager.sysDate)),function(param1:MovieClip):void
            {
               var _loc3_:NpcTaskListItem = null;
               _ui = param1;
               _ui["reward"].text = "";
               _items = [];
               var _loc2_:uint = 0;
               while(_loc2_ < LEN)
               {
                  _loc3_ = new NpcTaskListItem();
                  _loc3_.x = 190;
                  _loc3_.y = 60 + 39 * _loc2_;
                  _loc3_.addEventListener(MouseEvent.CLICK,onItemClick);
                  _items.push(_loc3_);
                  _ui.addChild(_loc3_);
                  _loc2_++;
               }
               _ui["close"].addEventListener(MouseEvent.CLICK,onCloseClick);
               crtIndex = 0;
               crtFocus = 0;
               updateItem();
               LevelManager.closeMouseEvent();
               LevelManager.appLevel.addChild(_ui);
               DisplayUtil.align(_ui,null,AlignType.MIDDLE_CENTER);
               _ui["moreTask"].addEventListener(MouseEvent.CLICK,onPetExploreClick);
               _ui["lastPage"].addEventListener(MouseEvent.CLICK,turnToLast);
               _ui["nextPage"].addEventListener(MouseEvent.CLICK,turnToNext);
               _ui["taskBtn"].addEventListener(MouseEvent.CLICK,onGO);
               _ui["btn_Super"].addEventListener(MouseEvent.CLICK,onSuper);
               if(TasksManager.getTaskStatus(TasksXMLInfo.getCurrentTaskId(SystemTimerManager.sysDate)) == TasksManager.UN_ACCEPT)
               {
                  (_ui["receiveBtn"] as SimpleButton).visible = true;
                  (_ui["receiveBtn"] as SimpleButton).addEventListener(MouseEvent.CLICK,onClickHandler);
               }
               else
               {
                  (_ui["receiveBtn"] as SimpleButton).visible = false;
               }
            },"ui_NpcTaskListPanel");
         }
         else
         {
            _ui["reward"].text = "";
            _items = [];
            i = 0;
            while(i < LEN)
            {
               item = new NpcTaskListItem();
               item.x = 190;
               item.y = 60 + 39 * i;
               item.addEventListener(MouseEvent.CLICK,onItemClick);
               _items.push(item);
               _ui.addChild(item);
               i++;
            }
            _ui["close"].addEventListener(MouseEvent.CLICK,onCloseClick);
            crtIndex = 0;
            crtFocus = 0;
            updateItem();
            LevelManager.closeMouseEvent();
            LevelManager.appLevel.addChild(_ui);
            DisplayUtil.align(_ui,null,AlignType.MIDDLE_CENTER);
            _ui["moreTask"].addEventListener(MouseEvent.CLICK,onPetExploreClick);
            _ui["lastPage"].addEventListener(MouseEvent.CLICK,turnToLast);
            _ui["nextPage"].addEventListener(MouseEvent.CLICK,turnToNext);
            _ui["taskBtn"].addEventListener(MouseEvent.CLICK,onGO);
            _ui["btn_Super"].addEventListener(MouseEvent.CLICK,onSuper);
         }
      }
      
      protected static function onSuper(param1:MouseEvent) : void
      {
         hide();
         ModuleManager.showAppModule("SuperEvolationPanel");
      }
      
      protected static function onClickHandler(param1:MouseEvent) : void
      {
         hide();
         processTask(TasksXMLInfo.getCurrentTaskId(SystemTimerManager.sysDate));
      }
      
      public static function get focusTaskID() : int
      {
         return _focusTaskId;
      }
      
      public static function setFocusTask(param1:int) : void
      {
         var taskId:int = param1;
         _focusTaskId = taskId;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:*):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            _focusTaskId = 0;
         });
      }
      
      private static function openFunc(param1:MouseEvent) : void
      {
         hide();
         ModuleManager.showModule(ClientConfig.getAppModule("SuperEvolationPanel"));
      }
      
      private static function onPetExploreClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TasksRecordPanel"),"正在打开赛尔任务档案....");
      }
      
      private static function turnToLast(param1:MouseEvent) : void
      {
         crtIndex -= 3;
         if(crtIndex < 0)
         {
            crtIndex = 0;
         }
         updateItem();
      }
      
      private static function turnToNext(param1:MouseEvent) : void
      {
         crtIndex += 3;
         if(crtIndex > _ids.length - 1)
         {
            crtIndex -= 3;
         }
         updateItem();
      }
      
      private static function updateItem() : void
      {
         var _loc2_:uint = 0;
         var _loc3_:NpcTaskListItem = null;
         var _loc1_:uint = 0;
         while(_loc1_ < LEN)
         {
            _loc2_ = uint(_loc1_ + crtIndex);
            _loc3_ = _items[_loc1_];
            if(_loc2_ < _ids.length)
            {
               _loc3_.visible = true;
               _loc3_.id = _ids[_loc1_ + crtIndex];
            }
            else
            {
               _loc3_.visible = false;
               _loc3_.clear();
            }
            _loc1_++;
         }
         crtFocus = 0;
         refreshFocus();
      }
      
      private static function refreshFocus() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < LEN)
         {
            if(_loc1_ == crtFocus)
            {
               (_items[_loc1_] as NpcTaskListItem).setSelected(true);
            }
            else
            {
               (_items[_loc1_] as NpcTaskListItem).setSelected(false);
            }
            _loc1_++;
         }
         var _loc2_:int = int(_ids[crtIndex + crtFocus]);
         var _loc3_:String = TasksRecordConfig.getTaskReward(_loc2_);
         if(_loc3_.length < 3)
         {
            _loc3_ = String(TasksXMLInfo.getTaskReward(_loc2_));
         }
         _ui["reward"].text = "";
         if(_loc3_.length < 3)
         {
            _ui["reward"].text = "奖励需要探索哦";
            return;
         }
         var _loc4_:Array = _loc3_.split("|");
         var _loc5_:int = 0;
         while(_loc5_ < _loc4_.length)
         {
            _ui["reward"].text += _loc4_[_loc5_];
            _ui["reward"].text += "\r";
            _loc5_++;
         }
      }
      
      private static function onItemClick(param1:MouseEvent) : void
      {
         crtFocus = _items.indexOf(param1.currentTarget);
         refreshFocus();
      }
      
      private static function onGO(param1:MouseEvent) : void
      {
         var _loc2_:int = int(_ids[crtIndex + crtFocus]);
         hide();
         processTask(_loc2_);
      }
      
      public static function processTask(param1:int) : void
      {
         var taskID:int = param1;
         TaskRoadOfDevildom.getInstance().loadXml(function():void
         {
            var status:int = 0;
            var cls:* = undefined;
            try
            {
               if(null != TaskRoadOfDevildom.getInstance().getTaskById(taskID))
               {
                  status = int(TasksManager.getTaskStatus(taskID));
                  if(status == TasksManager.UN_ACCEPT)
                  {
                     TaskRoadOfDevildomController.getInstance().start(taskID);
                  }
                  else if(status == TasksManager.ALR_ACCEPT)
                  {
                     if(taskID >= 3161)
                     {
                        if(taskID >= 3188)
                        {
                           ModuleManager.showModule(ClientConfig.getTaskModule("TaskRestPanel_3188"),"正在打开....",taskID);
                        }
                        else
                        {
                           ModuleManager.showModule(ClientConfig.getTaskModule("TaskRestPanel_" + taskID));
                        }
                     }
                     else
                     {
                        TaskRoadOfDevildomController.getInstance().showPanel(taskID);
                     }
                  }
               }
               else
               {
                  cls = getDefinitionByName(PATH + "::TaskController_" + taskID);
                  if(TasksManager.getTaskStatus(taskID) == TasksManager.UN_ACCEPT)
                  {
                     cls.start();
                  }
                  if(TasksManager.getTaskStatus(taskID) == TasksManager.ALR_ACCEPT)
                  {
                     if(taskID >= 3161)
                     {
                        if(taskID >= 3188)
                        {
                           ModuleManager.showModule(ClientConfig.getTaskModule("TaskRestPanel_3188"),"正在打开....",taskID);
                        }
                        else
                        {
                           ModuleManager.showModule(ClientConfig.getTaskModule("TaskRestPanel_" + taskID));
                        }
                     }
                     else
                     {
                        cls.startPro();
                     }
                  }
               }
            }
            catch(e:Error)
            {
               throw new Error("no taskController ==== " + taskID);
            }
         });
      }
      
      private static function onCloseClick(param1:MouseEvent) : void
      {
         hide();
      }
      
      public static function hide() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:NpcTaskListItem = null;
         if(_ui != null)
         {
            LevelManager.openMouseEvent();
            DisplayUtil.removeForParent(_ui);
            ResourceManager.cancelURL(ClientConfig.getNpcSwfPath(_info.type));
            _loc1_ = 0;
            while(_loc1_ < LEN)
            {
               _loc2_ = _items[_loc1_];
               _loc2_.destory();
               _loc2_.removeEventListener(MouseEvent.CLICK,onItemClick);
               _loc1_++;
            }
            _ui["close"].removeEventListener(MouseEvent.CLICK,onCloseClick);
            _ui["moreTask"].removeEventListener(MouseEvent.CLICK,onPetExploreClick);
            _ui["taskBtn"].removeEventListener(MouseEvent.CLICK,onGO);
            _ids = null;
            _info = null;
            _ui = null;
            _items = null;
         }
      }
   }
}
