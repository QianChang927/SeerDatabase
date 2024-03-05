package com.robot.app.panel
{
   import com.robot.app.control.NewSeerGuideController;
   import com.robot.app.control.quickStart.QuickStartController;
   import com.robot.app.spt.PioneerTaskModel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.tasksRecord.TasksRecordConfig;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.RectangleMask;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerGuidePanel
   {
      
      public static var panelVisible:Boolean = false;
      
      public static var _ui:MovieClip;
      
      private static var _show:MovieClip;
      
      private static var _hide:MovieClip;
      
      private static var _arrow:MovieClip;
      
      private static var _isShow:Boolean;
      
      private static var _noShowList:Array = [666];
      
      private static var _descs:Array = [["击败三只皮皮","击败蘑菇怪","战胜鲁斯王"],["寻找试炼之塔","提升雷小伊到40级","战胜魔焰猩猩"],["对战中使用一次药剂","击败钢牙鲨","战胜丽莎布布"],["精灵学习力","精灵天赋","雷小伊进化"]];
       
      
      public function NewSeerGuidePanel()
      {
         super();
      }
      
      public static function ui() : MovieClip
      {
         return _ui;
      }
      
      public static function setup() : void
      {
         if(_ui == null)
         {
            panelVisible = true;
            _ui = UIManager.getMovieClip("newSeerGuide_panel_ui");
            _show = _ui["show"];
            _hide = _ui["hide"];
            _ui.x = 56;
            _ui.y = 70;
            LevelManager.toolsLevel.addChild(_ui);
            _show["task_0"].addEventListener(MouseEvent.CLICK,onLink);
            _show["task_1"].addEventListener(MouseEvent.CLICK,onLink);
            _show["task_2"].addEventListener(MouseEvent.CLICK,onLink);
            _isShow = true;
            setArrowStatus();
            update();
         }
      }
      
      private static function initArrow() : void
      {
         _arrow.buttonMode = true;
         _arrow.addEventListener(MouseEvent.CLICK,onArrow);
      }
      
      private static function destroyArrow() : void
      {
         if(_arrow == null)
         {
            return;
         }
         _arrow.removeEventListener(MouseEvent.CLICK,onArrow);
         ToolTipManager.remove(_arrow);
      }
      
      public static function get guideDone() : Boolean
      {
         return NewSeerTaskController.isNewSeerGuideDone;
      }
      
      public static function get needShow() : Boolean
      {
         return NewSeerTaskController.isNewSeer;
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         if(["task","txt_"].indexOf(_loc2_.substr(0,4)) != -1)
         {
            onLink(null);
         }
      }
      
      private static function onLink(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _ui.stopDrag();
         RectangleMask.dispatchEvent(new Event(RectangleMask.GOTO_NEXT));
         SocketConnection.send(1022,84807065);
         if(MapManager.currentMap.id != 10017)
         {
            NewSeerGuideController.changeMapDo(10017,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("NewSeerTaskPanel_2014"));
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NewSeerTaskPanel_2014"));
         }
      }
      
      private static function onArrow(param1:MouseEvent) : void
      {
         _isShow = !_isShow;
         setArrowStatus();
         SocketConnection.send(1022,84807066);
      }
      
      private static function setArrowStatus() : void
      {
         if(_isShow)
         {
            _show.visible = true;
            _hide.visible = false;
            destroyArrow();
            _arrow = _show["arrow"];
            _arrow.gotoAndStop(1);
            initArrow();
            ToolTipManager.add(_arrow,"收起");
         }
         else
         {
            _show.visible = false;
            _hide.visible = true;
            destroyArrow();
            _arrow = _hide["arrow"];
            _arrow.gotoAndStop(2);
            initArrow();
            ToolTipManager.add(_arrow,"展开");
         }
      }
      
      public static function update() : void
      {
         if(_ui == null)
         {
            return;
         }
         KTool.getMultiValue([3140,3142],function(param1:Array):void
         {
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            var _loc4_:* = null;
            if(_ui == null)
            {
               return;
            }
            if(param1[0] == 0 || param1[0] == 13 || param1[0] == 23 || param1[0] == 33)
            {
               _loc2_ = int(param1[0] / 10) + 1;
               _loc3_ = 0;
            }
            else
            {
               _loc2_ = int(param1[0] / 10);
               _loc3_ = param1[0] % 10;
            }
            _ui["show"].gotoAndStop(_loc3_ + 1);
            var _loc5_:int = 0;
            while(_loc5_ < 3)
            {
               if(_loc5_ <= _loc3_)
               {
                  _ui["show"]["txt_" + _loc5_].visible = true;
                  _loc4_ = String(_descs[_loc2_ - 1][_loc5_]);
                  if(_loc5_ < _loc3_)
                  {
                     _loc4_ += "(已完成)";
                  }
                  setText(_loc5_,_loc4_);
               }
               else
               {
                  _ui["show"]["txt_" + _loc5_].visible = false;
               }
               _loc5_++;
            }
            _hide["title"].gotoAndStop(_loc2_);
            _show["title"].gotoAndStop(_loc2_);
            setPhaseProgress(_loc2_,_loc3_,param1[1]);
         });
      }
      
      private static function setText(param1:int, param2:String) : void
      {
         _ui["show"]["txt_" + param1].htmlText = "<a href=\'event:#\'>" + param2 + "</a>";
      }
      
      public static function setPhaseProgress(param1:int, param2:int, param3:Object) : void
      {
         if(param1 == 1 && param2 == 0)
         {
            if(int(param3) >= 3)
            {
               setText(param2,_descs[param1 - 1][param2] + "(已完成)");
            }
            else
            {
               setText(param2,_descs[param1 - 1][param2] + "(" + int(param3) + "/3)");
            }
         }
      }
      
      public static function destory() : void
      {
         if(_ui)
         {
            DisplayUtil.removeForParent(_ui);
            ToolTipManager.remove(_arrow);
            _arrow.removeEventListener(MouseEvent.CLICK,onArrow);
            _show["task_0"].removeEventListener(MouseEvent.CLICK,onLink);
            _show["task_1"].removeEventListener(MouseEvent.CLICK,onLink);
            _show["task_2"].removeEventListener(MouseEvent.CLICK,onLink);
            _ui = null;
            _show = null;
            _hide = null;
            _arrow = null;
            QuickStartController.current = null;
            TasksRecordConfig.currentId = "";
            PioneerTaskModel.currentId = "";
         }
      }
   }
}
