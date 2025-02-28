package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskscollection.Task618;
   import com.robot.app.task.taskscollection.Task775;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.controller.MouseController;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.BasePeoleModel;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_414 extends BaseMapProcess
   {
      
      public static var isOnTime:Boolean = false;
      
      public static var isFight:Boolean = false;
       
      
      private var isPetTime:Boolean = false;
      
      private var hitCount:uint = 0;
      
      private var _sleepMC:MovieClip;
      
      private var _fatMC:MovieClip;
      
      private var _angryMC:MovieClip;
      
      private var _grassMC:MovieClip;
      
      private var _nightMC:MovieClip;
      
      private var _clickAreaMC:MovieClip;
      
      private var _hitPetMC:MovieClip;
      
      private var _time:uint;
      
      private var date:Date;
      
      private var _intervalTimer:Timer;
      
      private var _intervalTm:uint = 600000;
      
      private var isDate:Boolean = false;
      
      public function MapProcess_414()
      {
         super();
      }
      
      override protected function init() : void
      {
         var h:uint;
         var _map:BaseMapProcess = null;
         topLevel.mouseEnabled = topLevel.mouseChildren = false;
         EventManager.addEventListener(RobotEvent.CREATED_MAP_USER,this.onUserHandler);
         getDefinitionByName("com.robot.app2.mapProcess.control.activityControl.ForagingForestOfWarController").initForMap414(this);
         this._sleepMC = animatorLevel["sleepMC"];
         this._fatMC = animatorLevel["fatMC"];
         this._angryMC = animatorLevel["angryMC"];
         this._grassMC = animatorLevel["grassMC"];
         this._nightMC = animatorLevel["nightMC"];
         this._clickAreaMC = conLevel["clickAreaMC"];
         this._hitPetMC = conLevel["hitPetMC"];
         conLevel["blackMC1"].visible = false;
         conLevel["blackMC2"].visible = false;
         conLevel["blackMC3"].visible = false;
         _map = this;
         if(TasksManager.getTaskStatus(641) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(641,function(param1:Array):void
            {
               var a:Array = param1;
               if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && !a[3])
               {
                  remove();
                  Task618.removeResouce_414(_map);
                  return;
               }
               if(TasksManager.getTaskStatus(775) == TasksManager.ALR_ACCEPT)
               {
                  TasksManager.getProStatusList(775,function(param1:Array):void
                  {
                     if(Boolean(param1[0]) && !param1[1])
                     {
                        remove();
                        Task618.removeResouce_414(_map);
                        Task775.initTaskForMap414(_map);
                        return;
                     }
                     remove();
                     Task618.initTask_414(_map);
                  });
                  return;
               }
               remove();
               Task618.initTask_414(_map);
            });
         }
         else
         {
            if(TasksManager.getTaskStatus(775) != TasksManager.ALR_ACCEPT)
            {
               this.remove();
               Task618.initTask_414(_map);
               return;
            }
            TasksManager.getProStatusList(775,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  remove();
                  Task618.removeResouce_414(_map);
                  Task775.initTaskForMap414(_map);
                  return;
               }
               remove();
               Task618.initTask_414(_map);
            });
         }
         this._sleepMC.gotoAndPlay(1);
         this._fatMC.gotoAndStop(1);
         this._angryMC.gotoAndStop(1);
         this._grassMC.gotoAndStop(1);
         this._nightMC.gotoAndStop(1);
         this._fatMC.visible = false;
         this._angryMC.visible = false;
         this._grassMC.visible = false;
         this._nightMC.visible = false;
         this._time = MainManager.actorInfo.sysTime;
         this.date = new Date();
         this.date.setTime(this._time * 1000);
         h = this.date.getHours();
         if(h == 20)
         {
            MapProcess_414.isOnTime = true;
         }
         else
         {
            MapProcess_414.isOnTime = false;
         }
         if(this._intervalTimer == null)
         {
            this._intervalTimer = new Timer(this._intervalTm);
            this._intervalTimer.addEventListener(TimerEvent.TIMER,this.onShowInterval);
            this._intervalTimer.start();
         }
         if(MapProcess_414.isFight)
         {
            this.onSystemTime();
         }
         else
         {
            this._clickAreaMC.buttonMode = true;
            this._clickAreaMC.addEventListener(MouseEvent.CLICK,this.onPetClick);
         }
      }
      
      private function remove() : void
      {
         DisplayUtil.removeForParent(this._sleepMC);
         this._sleepMC = null;
         DisplayUtil.removeForParent(this._fatMC);
         this._fatMC = null;
         DisplayUtil.removeForParent(this._angryMC);
         this._angryMC = null;
         DisplayUtil.removeForParent(this._grassMC);
         this._grassMC = null;
         DisplayUtil.removeForParent(this._nightMC);
         this._nightMC = null;
         DisplayUtil.removeForParent(this._clickAreaMC);
         this._clickAreaMC = null;
         DisplayUtil.removeForParent(this._hitPetMC);
         this._hitPetMC = null;
      }
      
      private function onShowInterval(param1:TimerEvent) : void
      {
         var evt:TimerEvent = param1;
         SystemTimerManager.getSysTime(function(param1:uint):void
         {
            var _loc2_:Date = new Date(param1 * 1000);
            var _loc3_:uint = _loc2_.getHours();
            if(_loc3_ == 20)
            {
               MapProcess_414.isOnTime = true;
            }
            else
            {
               MapProcess_414.isOnTime = false;
            }
         });
      }
      
      private function onUserHandler(param1:RobotEvent) : void
      {
         this.configModel(0.4,1.2);
      }
      
      private function configModel(param1:Number, param2:Number) : void
      {
         var _loc3_:BasePeoleModel = null;
         MainManager.actorModel.scaleX = MainManager.actorModel.scaleY = param1;
         if(MainManager.actorModel.pet)
         {
            MainManager.actorModel.pet.scaleX = MainManager.actorModel.pet.scaleY = param2;
         }
         for each(_loc3_ in UserManager.getUserModelList())
         {
            if(_loc3_)
            {
               _loc3_.scaleX = _loc3_.scaleY = param1;
               if(_loc3_.pet)
               {
                  _loc3_.pet.scaleX = _loc3_.pet.scaleY = param2;
               }
            }
         }
      }
      
      private function onPetClick(param1:MouseEvent) : void
      {
         this._clickAreaMC.buttonMode = false;
         this._clickAreaMC.removeEventListener(MouseEvent.CLICK,this.onPetClick);
         this.onSystemTime();
      }
      
      private function onSystemTime() : void
      {
         if(MapProcess_414.isOnTime)
         {
            this._fatMC.visible = false;
            this._grassMC.visible = false;
            this._sleepMC.visible = false;
            this._nightMC.visible = true;
            AnimateManager.playMcAnimate(this._nightMC,0,"",function():void
            {
               _nightMC.visible = false;
               _grassMC.visible = true;
               _fatMC.visible = true;
               _fatMC.gotoAndStop(1);
               AimatController.addEventListener(AimatEvent.PLAY_START,onThrowHandler);
               AimatController.addEventListener(AimatEvent.PLAY_END,onThrowEndHandler);
            });
         }
         else if(Boolean(MapProcess_414.isOnTime) && Boolean(MapProcess_414.isFight))
         {
            this._nightMC.visible = false;
            this._grassMC.visible = true;
            this._fatMC.visible = true;
            this._fatMC.gotoAndStop(1);
            AimatController.addEventListener(AimatEvent.PLAY_START,this.onThrowHandler);
            AimatController.addEventListener(AimatEvent.PLAY_END,this.onThrowEndHandler);
         }
         else
         {
            this._sleepMC.visible = false;
            this._angryMC.visible = true;
            AnimateManager.playMcAnimate(this._angryMC,0,"",function():void
            {
               _sleepMC.visible = true;
               _sleepMC.gotoAndPlay(1);
               _angryMC.visible = false;
               _clickAreaMC.addEventListener(MouseEvent.CLICK,onPetClick);
            });
         }
      }
      
      private function onThrowHandler(param1:AimatEvent) : void
      {
         AimatController.removeEventListener(AimatEvent.PLAY_START,this.onThrowHandler);
         MouseController.removeMouseEvent();
      }
      
      private function onThrowEndHandler(param1:AimatEvent) : void
      {
         var _loc2_:AimatInfo = param1.info;
         if(_loc2_.userID == MainManager.actorID)
         {
            AimatController.removeEventListener(AimatEvent.PLAY_END,this.onThrowEndHandler);
            if(this._hitPetMC.hitTestPoint(_loc2_.endPos.x,_loc2_.endPos.y))
            {
               ++this.hitCount;
               if(this.hitCount < 5)
               {
                  this._fatMC.gotoAndStop(this.hitCount + 1);
                  AimatController.addEventListener(AimatEvent.PLAY_START,this.onThrowHandler);
                  AimatController.addEventListener(AimatEvent.PLAY_END,this.onThrowEndHandler);
               }
               else if(this.hitCount == 5)
               {
                  this._fatMC.gotoAndStop(this.hitCount + 1);
                  MouseController.addMouseEvent();
                  AimatController.removeEventListener(AimatEvent.PLAY_START,this.onThrowHandler);
                  AimatController.removeEventListener(AimatEvent.PLAY_END,this.onThrowEndHandler);
                  this.hitCount = 0;
                  this._hitPetMC.buttonMode = true;
                  this._hitPetMC.addEventListener(MouseEvent.CLICK,this.fightWithPet);
               }
            }
         }
         MouseController.addMouseEvent();
      }
      
      private function fightWithPet(param1:MouseEvent) : void
      {
         this._hitPetMC.buttonMode = false;
         this._hitPetMC.removeEventListener(MouseEvent.CLICK,this.fightWithPet);
         MapProcess_414.isFight = true;
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,this.onHandler);
         FightManager.fightWithBoss("伊特",0);
      }
      
      private function onHandler(param1:RobotEvent) : void
      {
         MapProcess_414.isFight = false;
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,this.onHandler);
         this._hitPetMC.buttonMode = true;
         this._hitPetMC.addEventListener(MouseEvent.CLICK,this.fightWithPet);
      }
      
      override public function destroy() : void
      {
         Task775.destroy();
         Task618.destroy();
         if(this._intervalTimer)
         {
            this._intervalTimer.stop();
            this._intervalTimer.removeEventListener(TimerEvent.TIMER,this.onShowInterval);
            this._intervalTimer = null;
         }
         if(this._hitPetMC)
         {
            this._hitPetMC.removeEventListener(MouseEvent.CLICK,this.fightWithPet);
         }
         if(this._clickAreaMC)
         {
            this._clickAreaMC.removeEventListener(MouseEvent.CLICK,this.onPetClick);
         }
         if(MainManager.actorModel.pet)
         {
            MainManager.actorModel.pet.scaleX = MainManager.actorModel.pet.scaleY = 1;
         }
         MainManager.actorModel.scaleX = MainManager.actorModel.scaleY = 1;
         EventManager.removeEventListener(RobotEvent.CREATED_MAP_USER,this.onUserHandler);
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,this.onHandler);
         AimatController.removeEventListener(AimatEvent.PLAY_START,this.onThrowHandler);
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onThrowEndHandler);
      }
   }
}
