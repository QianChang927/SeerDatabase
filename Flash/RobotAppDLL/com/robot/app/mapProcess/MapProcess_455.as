package com.robot.app.mapProcess
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.control.TaskController_1859;
   import com.robot.app.task.control.TaskController_678;
   import com.robot.app.task.control.TaskController_683;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskscollection.Task678;
   import com.robot.app.task.taskscollection.Task683;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class MapProcess_455 extends BaseMapProcess
   {
       
      
      private var _currentScene:MovieClip;
      
      private var _currentMonster:MovieClip;
      
      private var _effectAnimation:MovieClip;
      
      private var _clickPanel:MovieClip;
      
      public function MapProcess_455()
      {
         super();
      }
      
      override protected function init() : void
      {
         var _loc1_:uint = 0;
         this.topLevel.mouseChildren = this.topLevel.mouseEnabled = false;
         Task678.initTaskForMap455(this);
         Task683.initTaskForMap455(this);
         _loc1_ = uint(TasksManager.getTaskStatus(TaskController_678.TASK_ID));
         var _loc2_:uint = uint(TasksManager.getTaskStatus(TaskController_683.TASK_ID));
         this.animationContainer.gotoAndStop(1);
         if(_loc1_ == TasksManager.ALR_ACCEPT || _loc2_ == TasksManager.ALR_ACCEPT || _loc1_ == TasksManager.COMPLETE && _loc2_ == TasksManager.UN_ACCEPT)
         {
            this.animationContainer.visible = false;
            return;
         }
         _loc1_ = uint(TasksManager.getTaskStatus(TaskController_1859.TASK_ID));
         this._effectAnimation = this.animationContainer["effectAnimation"] as MovieClip;
         this._effectAnimation.visible = false;
         this.animationContainer.visible = true;
         if(_loc1_ == TasksManager.UN_ACCEPT)
         {
            TaskController_1859.init(this);
            this.playerScene1();
         }
         else if(_loc1_ == TasksManager.ALR_ACCEPT)
         {
            KTool.hideMapAllPlayerAndMonster();
            TaskController_1859.init(this);
            TaskController_1859.startPro();
         }
         else
         {
            TaskController_1859.init(this);
            this.playerStaticScene();
         }
      }
      
      override public function destroy() : void
      {
         if(this._currentMonster)
         {
            this._currentMonster.removeEventListener(MouseEvent.CLICK,this.onClickMonsterHandler);
         }
         if(this._clickPanel)
         {
            this._clickPanel.removeEventListener(MouseEvent.CLICK,this.onClickPanelHandler);
         }
         Task678.destroy();
         Task683.destroy();
         super.destroy();
         this._effectAnimation = null;
         this._currentScene = null;
      }
      
      public function playerScene1() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         this._currentScene = this.getAnimation(1);
         this._currentScene.play();
         this._currentMonster = this.getCurrentMonster();
         this._currentMonster.buttonMode = true;
         this._currentMonster.addEventListener(MouseEvent.CLICK,this.onClickMonsterHandler);
      }
      
      public function playerStaticScene() : void
      {
         KTool.showMapAllPlayerAndMonster(true);
         this._currentScene = this.getAnimation(4);
         this._currentScene.play();
         this._clickPanel = this._currentScene["clickPanel"] as MovieClip;
         this._clickPanel.buttonMode = true;
         this._clickPanel.addEventListener(MouseEvent.CLICK,this.onClickPanelHandler);
      }
      
      protected function onClickMonsterHandler(param1:MouseEvent) : void
      {
         this._currentMonster.removeEventListener(MouseEvent.CLICK,this.onClickMonsterHandler);
         TaskController_1859.start();
      }
      
      protected function onClickPanelHandler(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = this._currentScene["fireAnimation"] as MovieClip;
         var _loc3_:Point = new Point(_loc2_.x,_loc2_.y);
         _loc3_ = _loc2_.parent.localToGlobal(_loc3_);
         _loc3_ = this._effectAnimation.parent.globalToLocal(_loc3_);
         this._effectAnimation.x = _loc3_.x;
         this._effectAnimation.y = _loc3_.y;
         this._effectAnimation.visible = true;
         this._currentScene = this.getAnimation(5);
         AnimateManager.playMcEndHandler(this._effectAnimation,this.onEffectAnimationEnd);
         AnimateManager.playMcEndHandler(this._currentScene,this.onAnimation5End);
      }
      
      private function onEffectAnimationEnd() : void
      {
         this._effectAnimation.visible = false;
      }
      
      private function onAnimation5End() : void
      {
         NpcDialog.show(NPC.PANDUOSI,["怎么样，看到我的厉害了吧！小看我的人都要付出代价！接受我的挑战吧！"],["打就打，怕你不成！","让我再准备一下！"],[function():void
         {
            playerStaticScene();
            FightBossController.fightBoss("潘多斯",2);
         },function():void
         {
            playerStaticScene();
         }]);
      }
      
      public function getCurrentMonster() : MovieClip
      {
         return this._currentScene["monster"] as MovieClip;
      }
      
      public function get animationContainer() : MovieClip
      {
         return conLevel["animationContainer"] as MovieClip;
      }
      
      protected function getAnimation(param1:uint) : MovieClip
      {
         this.animationContainer.gotoAndStop(param1);
         return this.animationContainer["animation" + String(param1)] as MovieClip;
      }
   }
}
