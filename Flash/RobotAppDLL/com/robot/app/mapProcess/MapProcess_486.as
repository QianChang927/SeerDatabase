package com.robot.app.mapProcess
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.taskscollection.Task620;
   import com.robot.app.task.taskscollection.Task707;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_486 extends BaseMapProcess
   {
       
      
      private var _bossMc:MovieClip;
      
      private var _clickBtn:SimpleButton;
      
      private var _d:Date;
      
      private var _isX:Boolean = false;
      
      private var _totalF:uint;
      
      public function MapProcess_486()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task707.initTaskForMap486(this);
         if(TasksManager.getTaskStatus(619) == TasksManager.ALR_ACCEPT)
         {
            Task620.delAll(this);
            DisplayUtil.removeForParent(this.conLevel["bossMc"]);
            this.conLevel["bossMc"] = null;
            return;
         }
         Task620.initTask(this);
         this._bossMc = this.conLevel["bossMc"];
         this._d = new Date(SystemTimerManager.time * 1000);
         if(this._d.getHours() >= 19 && this._d.getHours() <= 20)
         {
            this._isX = true;
            this._totalF = 289;
         }
         else
         {
            this._isX = false;
            this._totalF = this._bossMc.totalFrames;
         }
         this._bossMc.addEventListener(Event.ENTER_FRAME,this.onE1Handler);
      }
      
      private function onE1Handler(param1:Event) : void
      {
         if(this._bossMc["btn"])
         {
            this._bossMc.removeEventListener(Event.ENTER_FRAME,this.onE1Handler);
            this._clickBtn = this._bossMc["btn"];
            this._clickBtn.addEventListener(MouseEvent.CLICK,this.onClickHandler);
         }
      }
      
      private function onClickHandler(param1:MouseEvent) : void
      {
         if(this._bossMc.currentFrame == 1 || this._bossMc.currentFrame == 6 || this._bossMc.currentFrame == 38)
         {
            this._bossMc.gotoAndPlay(this._bossMc.currentFrame + 1);
         }
         else
         {
            if(this._bossMc.currentFrame == 289)
            {
               if(this._isX)
               {
                  this.fight();
               }
               else
               {
                  this._bossMc.gotoAndPlay(this._bossMc.currentFrame + 1);
               }
            }
            if(this._bossMc.currentFrame == this._bossMc.totalFrames)
            {
               this.fight();
            }
         }
      }
      
      private function fight() : void
      {
         this._d = new Date(SystemTimerManager.time * 1000);
         if(this._d.getHours() >= 19 && this._d.getHours() <= 20)
         {
            FightBossController.fightBoss("德拉萨",1);
         }
         else
         {
            FightBossController.fightBoss("德拉萨",0);
         }
      }
      
      override public function destroy() : void
      {
         Task620.destroy();
         Task707.destroy();
         if(this._bossMc)
         {
            this._bossMc.removeEventListener(Event.ENTER_FRAME,this.onE1Handler);
         }
         if(this._clickBtn)
         {
            this._clickBtn.removeEventListener(MouseEvent.CLICK,this.onClickHandler);
         }
      }
      
      public function getKeyHandler() : void
      {
         Task620.getKeyHandler();
      }
      
      public function npcClickHandler() : void
      {
         Task620.npcClickHandler();
      }
   }
}
