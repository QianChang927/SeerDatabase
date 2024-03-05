package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_815;
   import com.robot.app.task.taskscollection.Task815;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_692 extends BaseMapProcess
   {
       
      
      private var isDragging:Boolean = false;
      
      private var draggingItem:MovieClip;
      
      private var finishCount:int = 0;
      
      public function MapProcess_692()
      {
         super();
         if(conLevel.stage)
         {
            this.prepareForGame();
         }
         else
         {
            conLevel.addEventListener(Event.ADDED_TO_STAGE,this.prepareForGame);
         }
      }
      
      override protected function init() : void
      {
         var _loc2_:MovieClip = null;
         var _loc1_:int = 0;
         while(_loc1_ < conLevel.numChildren)
         {
            _loc2_ = conLevel.getChildAt(_loc1_) as MovieClip;
            if(_loc2_)
            {
               if(_loc2_.name.substr(0,5) != "brick")
               {
                  _loc2_.mouseEnabled = false;
               }
            }
            _loc1_++;
         }
         conLevel["mainStone"].mouseChildren = false;
         conLevel["door"].mouseEnabled = true;
         conLevel["hit"].mouseEnabled = true;
         Task815.initForMap692(this);
      }
      
      private function prepareForGame(param1:Event = null) : void
      {
         var _loc3_:MovieClip = null;
         conLevel.removeEventListener(Event.ADDED_TO_STAGE,this.prepareForGame);
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            _loc3_ = conLevel["brick" + _loc2_];
            _loc3_.buttonMode = true;
            _loc3_.mouseChildren = false;
            _loc3_.addEventListener(MouseEvent.CLICK,this.onBrickClicked);
            _loc2_++;
         }
         conLevel.stage.addEventListener(MouseEvent.CLICK,this.onStageClicked);
         conLevel.addEventListener(Event.REMOVED_FROM_STAGE,this.cleanListeners);
      }
      
      private function onBrickClicked(param1:MouseEvent) : void
      {
         if(this.isDragging)
         {
            return;
         }
         this.isDragging = true;
         param1.stopImmediatePropagation();
         var _loc2_:MovieClip = MovieClip(param1.currentTarget);
         _loc2_.gotoAndStop(2);
         _loc2_.x = conLevel.mouseX - _loc2_.width * 0.5;
         _loc2_.y = conLevel.mouseY - _loc2_.height * 0.5;
         _loc2_.mouseEnabled = false;
         _loc2_.startDrag();
         this.draggingItem = _loc2_;
      }
      
      private function onStageClicked(param1:MouseEvent) : void
      {
         if(!this.isDragging)
         {
            return;
         }
         this.isDragging = false;
         param1.stopImmediatePropagation();
         var _loc2_:String = this.draggingItem.name.charAt(5);
         var _loc3_:MovieClip = conLevel["stone" + _loc2_];
         if(this.draggingItem.hitTestObject(_loc3_))
         {
            this.cleanBrick(this.draggingItem);
            _loc3_.gotoAndStop(2);
            ++this.finishCount;
            if(this.finishCount == 4)
            {
               conLevel.stage.removeEventListener(MouseEvent.CLICK,this.onStageClicked);
               this.onFinishMove();
            }
         }
         else
         {
            this.draggingItem.stopDrag();
            this.draggingItem.mouseEnabled = true;
            this.draggingItem = null;
         }
      }
      
      private function cleanBrick(param1:MovieClip) : void
      {
         param1.removeEventListener(MouseEvent.CLICK,this.onBrickClicked);
         param1.stopDrag();
         DisplayUtil.removeForParent(param1);
      }
      
      private function cleanListeners(param1:Event) : void
      {
         conLevel.removeEventListener(Event.REMOVED_FROM_STAGE,this.cleanListeners);
         this.isDragging = false;
         this.finishCount = 0;
         conLevel.stage.removeEventListener(MouseEvent.CLICK,this.onStageClicked);
         if(this.draggingItem)
         {
            this.draggingItem.stopDrag();
            this.draggingItem = null;
         }
      }
      
      private function onFinishMove() : void
      {
         var mainStone:MovieClip = null;
         mainStone = conLevel["mainStone"];
         if(TasksManager.getTaskStatus(TaskController_815.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_815.TASK_ID,function(param1:Array):void
            {
               var a:Array = param1;
               if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && Boolean(a[3]) && Boolean(a[4]) && !a[5])
               {
                  AnimateManager.playMcAnimate(mainStone,3,"mc",function():void
                  {
                     mainStone.mouseEnabled = true;
                     mainStone.buttonMode = true;
                     mainStone.addEventListener(MouseEvent.CLICK,Task815.onfinishGame);
                  });
               }
               else
               {
                  mainStone.gotoAndStop(2);
               }
            });
         }
         else
         {
            mainStone.gotoAndStop(2);
         }
      }
      
      override public function destroy() : void
      {
         Task815.destroy();
         super.destroy();
      }
   }
}
