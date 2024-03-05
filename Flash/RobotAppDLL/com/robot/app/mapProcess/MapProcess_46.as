package com.robot.app.mapProcess
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.control.TaskController_755;
   import com.robot.app.task.taskscollection.Task755;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import gs.TweenLite;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_46 extends BaseMapProcess
   {
       
      
      private var roadMC:MovieClip;
      
      private var rollMC_0:MovieClip;
      
      private var rollMC_1:MovieClip;
      
      private var btn_0:MovieClip;
      
      private var btn_1:MovieClip;
      
      public function MapProcess_46()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.jh();
         this.refreshRoad();
         Task755.initTaskForMap46(this,true);
         depthLevel["siBinSaiBoss"].visible = false;
         if(TasksManager.getTaskStatus(TaskController_755.TASK_ID) != TasksManager.COMPLETE)
         {
            Task755.initTaskForMap46(this);
         }
         this.intSiBinSaiBoss();
      }
      
      override public function destroy() : void
      {
         MainManager.actorModel.sprite.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         Task755.destroy();
         depthLevel["siBinSaiBoss"].addEventListener(MouseEvent.CLICK,this.onFightClick);
         ToolTipManager.remove(depthLevel["siBinSaiBoss"]);
      }
      
      private function intSiBinSaiBoss() : void
      {
         depthLevel["siBinSaiBoss"].visible = true;
         depthLevel["siBinSaiBoss"].buttonMode = true;
         ToolTipManager.add(depthLevel["siBinSaiBoss"],"斯宾塞");
         depthLevel["siBinSaiBoss"].addEventListener(MouseEvent.CLICK,this.onFightClick);
      }
      
      private function onFightClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         NpcDialog.show(NPC.SIBINSAI,["威斯克殿下的计划必将成功！来吧，让你尝尝我的厉害！哈哈哈！"],["（与斯宾塞对战）"],[function():void
         {
            getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
            FightBossController.fightBoss("斯宾塞",2);
         }]);
      }
      
      private function jh() : void
      {
         MainManager.actorModel.sprite.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         this.roadMC = animatorLevel["roadMC"];
         this.rollMC_0 = animatorLevel["rollMC_0"];
         this.rollMC_1 = animatorLevel["rollMC_1"];
         this.btn_0 = conLevel["btn_0"];
         this.btn_1 = conLevel["btn_1"];
         this.btn_0.buttonMode = this.btn_1.buttonMode = true;
         this.btn_0.gotoAndStop(1);
         this.btn_1.gotoAndStop(1);
         this.btn_0.addEventListener(MouseEvent.CLICK,this.clickBtn);
         this.btn_1.addEventListener(MouseEvent.CLICK,this.clickBtn);
      }
      
      private function clickBtn(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         _loc2_.gotoAndStop(2);
         _loc2_.mouseEnabled = false;
         if(_loc2_ == this.btn_0)
         {
            DisplayUtil.stopAllMovieClip(this.rollMC_0);
         }
         else
         {
            DisplayUtil.stopAllMovieClip(this.rollMC_1);
         }
      }
      
      private function getItem(param1:MouseEvent) : void
      {
         ItemAction.buyItem(100172,false);
      }
      
      private function kgHandler(param1:MouseEvent) : void
      {
         conLevel["light_0"].gotoAndStop(4);
      }
      
      private function refreshRoad() : void
      {
         this.roadMC.gotoAndStop(50);
         DisplayUtil.removeForParent(typeLevel["maskMC"]);
         MapManager.currentMap.makeMapArray();
      }
      
      private function onWalk(param1:RobotEvent) : void
      {
         if(this.rollMC_0.hitTestPoint(MainManager.actorModel.pos.x,MainManager.actorModel.pos.y,true))
         {
            if(this.btn_0.currentFrame == 1)
            {
               LevelManager.closeMouseEvent();
               MainManager.actorModel.stop();
               TweenLite.to(MainManager.actorModel,2,{
                  "x":268,
                  "y":364,
                  "onComplete":this.compHandler
               });
            }
         }
         if(this.rollMC_1.hitTestPoint(MainManager.actorModel.pos.x,MainManager.actorModel.pos.y,true))
         {
            if(this.btn_1.currentFrame == 1)
            {
               LevelManager.closeMouseEvent();
               MainManager.actorModel.stop();
               TweenLite.to(MainManager.actorModel,2,{
                  "x":600,
                  "y":370,
                  "onComplete":this.compHandler
               });
            }
         }
      }
      
      private function compHandler() : void
      {
         LevelManager.openMouseEvent();
      }
   }
}
