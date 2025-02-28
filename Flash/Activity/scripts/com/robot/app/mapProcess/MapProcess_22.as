package com.robot.app.mapProcess
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.taskscollection.Task532;
   import com.robot.app.task.taskscollection.YiyouTaskTool;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import gs.TweenMax;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_22 extends BaseMapProcess
   {
       
      
      private var myTween:TweenMax;
      
      private var sinNum:Number = 0;
      
      private var _beikeMc:MovieClip;
      
      private var _musicMc:MovieClip;
      
      private var _musicBtn:MovieClip;
      
      private var _slopsAMC:MovieClip;
      
      private var _slopsBMC:MovieClip;
      
      private var _oilcanMC:MovieClip;
      
      private var tool:YiyouTaskTool;
      
      public function MapProcess_22()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.tool = new YiyouTaskTool();
         this._beikeMc = conLevel.getChildByName("beikeMc") as MovieClip;
         this._beikeMc.buttonMode = true;
         this._beikeMc.gotoAndStop(1);
         this._beikeMc.mouseEnabled = false;
         this._musicMc = conLevel.getChildByName("musicMc") as MovieClip;
         this._musicMc.gotoAndStop(1);
         this._musicMc.buttonMode = true;
         this._musicMc.mouseEnabled = false;
         this._musicMc.visible = false;
         this._musicBtn = conLevel.getChildByName("musicBtn") as MovieClip;
         this._musicBtn.mouseEnabled = false;
         this._musicBtn.visible = false;
         this._slopsAMC = conLevel.getChildByName("garbage_0") as MovieClip;
         this._slopsBMC = conLevel.getChildByName("garbage_1") as MovieClip;
         this._oilcanMC = conLevel.getChildByName("boxMC") as MovieClip;
         ToolTipManager.add(conLevel["boss_mc"],"钢牙鲨");
         conLevel["boss_mc"].buttonMode = true;
         conLevel["boss_mc"].addEventListener(MouseEvent.CLICK,this.onBossClickHandler);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_END,this.onWalkEnd);
         this.check();
         Task532.initTask_1(this);
      }
      
      private function onBossClickHandler(param1:MouseEvent) : void
      {
         this.okHandler();
      }
      
      private function check() : void
      {
         if(TasksManager.getTaskStatus(401) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatus(401,3,function(param1:Boolean):void
            {
               if(!param1)
               {
                  _beikeMc.mouseEnabled = true;
                  _beikeMc.addEventListener(MouseEvent.CLICK,onBeikeClick);
               }
            });
         }
         if(TasksManager.getTaskStatus(404) == TasksManager.ALR_ACCEPT)
         {
            this._slopsAMC.buttonMode = true;
            this._slopsAMC.addEventListener(MouseEvent.CLICK,this.onShowYiyouPanel);
            this._slopsBMC.buttonMode = true;
            this._slopsBMC.addEventListener(MouseEvent.CLICK,this.onShowYiyouPanel);
            this._oilcanMC.buttonMode = true;
            this._oilcanMC.addEventListener(MouseEvent.CLICK,this.onShowYiyouPanel);
         }
         if(TasksManager.getTaskStatus(404) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatus(404,0,function(param1:Boolean):void
            {
               if(param1)
               {
                  DisplayUtil.removeForParent(_slopsAMC);
                  DisplayUtil.removeForParent(_slopsBMC);
               }
            });
            TasksManager.getProStatus(404,1,function(param1:Boolean):void
            {
               if(param1)
               {
                  _oilcanMC.gotoAndStop(2);
               }
            });
         }
         if(TasksManager.getTaskStatus(404) == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(this._slopsAMC);
            DisplayUtil.removeForParent(this._slopsBMC);
            this._oilcanMC.gotoAndStop(2);
            this._slopsAMC.removeEventListener(MouseEvent.CLICK,this.onShowYiyouPanel);
            this._slopsBMC.removeEventListener(MouseEvent.CLICK,this.onShowYiyouPanel);
            this._oilcanMC.removeEventListener(MouseEvent.CLICK,this.onShowYiyouPanel);
         }
      }
      
      private function onShowYiyouPanel(param1:MouseEvent) : void
      {
         if(TasksManager.getTaskStatus(404) == TasksManager.COMPLETE)
         {
            this._slopsAMC.removeEventListener(MouseEvent.CLICK,this.onShowYiyouPanel);
            this._slopsBMC.removeEventListener(MouseEvent.CLICK,this.onShowYiyouPanel);
            this._oilcanMC.removeEventListener(MouseEvent.CLICK,this.onShowYiyouPanel);
            return;
         }
         this.tool.showToolPanel();
      }
      
      private function onWalk(param1:RobotEvent) : void
      {
         this.sinNum += 0.2;
         MainManager.actorModel.y += Math.sin(this.sinNum) * 15;
      }
      
      private function onWalkEnd(param1:RobotEvent) : void
      {
         this.sinNum = 0;
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(conLevel["boss_mc"]);
         conLevel["boss_mc"].removeEventListener(MouseEvent.CLICK,this.onBossClickHandler);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalk);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,this.onWalkEnd);
         this._beikeMc.removeEventListener(MouseEvent.CLICK,this.onBeikeClick);
         this._musicMc.addFrameScript(this._musicMc.totalFrames - 1,null);
         this._beikeMc = null;
         this._musicMc = null;
         this._musicBtn = null;
         this.tool.destory();
         this.tool = null;
      }
      
      private function onBeikeClick(param1:MouseEvent) : void
      {
         if(!MainManager.actorModel.getIsPetFollw(22) && !MainManager.actorModel.getIsPetFollw(23) && !MainManager.actorModel.getIsPetFollw(24))
         {
            Alarm.show("只有带上你的<font color=\'#ff0000\'>毛毛</font>，这些音符才会起到作用呢。");
            return;
         }
         this._beikeMc.removeEventListener(MouseEvent.CLICK,this.onBeikeClick);
         this._beikeMc.gotoAndStop(2);
         this._musicMc.visible = true;
         this._musicMc.addFrameScript(this._musicMc.totalFrames - 1,this.onMusicClick);
         this._musicMc.gotoAndPlay(2);
      }
      
      private function onMusicClick() : void
      {
         this._musicMc.addFrameScript(this._musicMc.totalFrames - 1,null);
         this._musicMc.gotoAndStop(this._musicMc.totalFrames);
         this._musicBtn.visible = true;
         this._musicBtn.mouseEnabled = true;
      }
      
      public function onMusicHit() : void
      {
         if(!MainManager.actorModel.getIsPetFollw(22) && !MainManager.actorModel.getIsPetFollw(23) && !MainManager.actorModel.getIsPetFollw(24))
         {
            Alarm.show("只有带上你的<font color=\'#ff0000\'>毛毛</font>，这些音符才会起到作用呢。");
            return;
         }
         TasksManager.complete(401,2,function(param1:Boolean):void
         {
            if(param1)
            {
               DisplayUtil.removeForParent(_musicMc);
               DisplayUtil.removeForParent(_musicBtn);
               Alarm.show("你帮助毛毛找到了一个音符！");
            }
         });
      }
      
      public function hitBoss() : void
      {
         this.okHandler();
      }
      
      private function okHandler() : void
      {
         if(MapManager.currentMap.id == 22)
         {
            getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
            FightBossController.fightBoss("钢牙鲨");
         }
      }
      
      private function changeMap() : void
      {
         MapManager.changeMap(21);
      }
   }
}
