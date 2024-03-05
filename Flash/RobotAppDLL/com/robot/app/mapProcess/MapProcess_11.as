package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task532;
   import com.robot.app.task.taskscollection.Task949;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.ActorModel;
   import com.robot.core.mode.PetModel;
   import com.robot.core.ui.DialogBox;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   
   public class MapProcess_11 extends BaseMapProcess
   {
       
      
      private var catchTimer:Timer;
      
      private var isCacthing:Boolean = false;
      
      private var isFlower:Boolean = false;
      
      private var bubuArr:Array;
      
      public function MapProcess_11()
      {
         this.bubuArr = [1,2,3,301,302,303];
         super();
      }
      
      override protected function init() : void
      {
         var _loc1_:DialogBox = null;
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         Task949.initTaskForMap11(this);
         this.catchTimer = new Timer(5 * 1000,1);
         this.catchTimer.addEventListener(TimerEvent.TIMER,this.onCatchTimer);
         if(TasksManager.getTaskStatus(403) == TasksManager.COMPLETE)
         {
            this.isFlower = true;
            conLevel["flowerMC"].gotoAndStop("live");
         }
         else
         {
            _loc1_ = new DialogBox();
            _loc1_.show("好想要新鲜空气和阳光啊",0,-20,conLevel["flowerMC"]);
         }
         Task532.initTask_0(this);
      }
      
      override public function destroy() : void
      {
         Task949.destroy();
         this.catchTimer.stop();
         this.catchTimer.removeEventListener(TimerEvent.TIMER,this.onCatchTimer);
         this.catchTimer = null;
      }
      
      public function hitFlower() : void
      {
         if(this.isCacthing || this.isFlower)
         {
            return;
         }
         if(false == this.checkBubu())
         {
            return;
         }
         var _loc1_:ActorModel = MainManager.actorModel;
         var _loc2_:PetModel = _loc1_.pet;
         var _loc3_:uint = uint(_loc2_.info.petID);
         _loc1_.addEventListener(RobotEvent.WALK_START,this.onWalkStart);
         this.catchTimer.stop();
         this.catchTimer.reset();
         this.catchTimer.start();
         this.isCacthing = true;
         if(_loc3_ == 1 || _loc3_ == 301)
         {
            conLevel["effectMC"].gotoAndStop("one");
            topLevel["movie"].gotoAndStop("one");
         }
         else if(_loc3_ == 2 || _loc3_ == 302)
         {
            conLevel["effectMC"].gotoAndStop("two");
            topLevel["movie"].gotoAndStop("two");
         }
         else if(_loc3_ == 3 || _loc3_ == 303)
         {
            conLevel["effectMC"].gotoAndStop("three");
            topLevel["movie"].gotoAndStop("three");
         }
         TweenLite.to(topLevel["movie"],1,{
            "x":(MainManager.getStageWidth() - topLevel["movie"].width) / 2,
            "onComplete":this.onComp
         });
      }
      
      private function checkBubu() : Boolean
      {
         var _loc1_:Boolean = false;
         var _loc2_:ActorModel = MainManager.actorModel;
         var _loc3_:PetModel = _loc2_.pet;
         if(_loc3_ && this.check(_loc3_.info.petID) && TasksManager.getTaskStatus(403) == TasksManager.ALR_ACCEPT)
         {
            return true;
         }
         if(this.hasBuBu())
         {
            if(TasksManager.getTaskStatus(403) == TasksManager.UN_ACCEPT)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("BuBuTipPanel"));
            }
            else
            {
               Alarm.show("你必须带上<font color=\'#ff0000\'>布布种子、布布草、布布花、黄金布布、蒙娜布布、丽莎布布</font>的其中一个才能给克洛斯花补充活力哦！");
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ZhuChongCollectBuBuPanel"));
         }
         conLevel["effectMC"].gotoAndStop(1);
         return false;
      }
      
      private function hasBuBu() : Boolean
      {
         var _loc1_:int = 0;
         while(_loc1_ < this.bubuArr.length)
         {
            if(Boolean(PetManager.containsBagForID(_loc1_)) || Boolean(PetManager.containsStorageForID(_loc1_)))
            {
               return true;
            }
            _loc1_++;
         }
         return false;
      }
      
      private function check(param1:uint) : Boolean
      {
         var _loc2_:Boolean = false;
         var _loc3_:int = 0;
         while(_loc3_ < this.bubuArr.length)
         {
            if(this.bubuArr[_loc3_] == param1)
            {
               return true;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function onComp() : void
      {
         var t:uint = 0;
         t = setTimeout(function():void
         {
            clearTimeout(t);
            try
            {
               topLevel["movie"].x = 1075;
            }
            catch(e:Error)
            {
            }
         },2000);
      }
      
      private function onCatchTimer(param1:TimerEvent) : void
      {
         this.isCacthing = false;
         TasksManager.complete(403,0,this.onSuccess);
      }
      
      private function onSuccess(param1:Boolean) : void
      {
         this.isFlower = param1;
         if(this.isFlower)
         {
            conLevel["flowerMC"].gotoAndStop("live");
            conLevel["effectMC"].gotoAndStop(1);
         }
         else
         {
            Alarm.show("这次补充活力似乎没有起到效果，再试试吧！");
         }
      }
      
      private function onWalkStart(param1:RobotEvent) : void
      {
         if(this.isCacthing)
         {
            Alarm.show("随便走动是无法为克洛斯花补充能量的哦！");
            this.isCacthing = false;
            this.catchTimer.stop();
            conLevel["effectMC"].gotoAndStop(1);
         }
      }
   }
}
