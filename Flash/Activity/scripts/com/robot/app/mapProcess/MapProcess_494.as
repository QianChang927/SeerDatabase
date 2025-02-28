package com.robot.app.mapProcess
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskscollection.Task624;
   import com.robot.app.task.taskscollection.Task743;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import flash.utils.getDefinitionByName;
   import flash.utils.getTimer;
   import gs.TweenLite;
   import gs.easing.Back;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_494 extends BaseMapProcess
   {
      
      private static var firetime:Array = [0,0,0,0];
      
      private static var monsterData:Array = null;
       
      
      private var timer:Timer;
      
      private var haveFire:Boolean;
      
      private var fireArr:Array;
      
      private var monsterArr:Array;
      
      private var sptController:*;
      
      private var petArr:Array;
      
      private var pointArr1:Array;
      
      private var pointArr2:Array;
      
      private var pointArr3:Array;
      
      private var pointArr4:Array;
      
      private var pointArr:Array;
      
      private var m_monster:OgreModel;
      
      public function MapProcess_494()
      {
         var _loc1_:uint = 0;
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         this.fireArr = [];
         this.monsterArr = [];
         this.petArr = [726,728];
         this.pointArr1 = [new Point(147,114),new Point(330,100)];
         this.pointArr2 = [new Point(762,130),new Point(700,77)];
         this.pointArr3 = [new Point(133,320),new Point(40,382)];
         this.pointArr4 = [new Point(344,426),new Point(278,362)];
         this.pointArr = [this.pointArr1,this.pointArr2,this.pointArr3,this.pointArr4];
         if(monsterData == null)
         {
            monsterData = [];
            _loc1_ = 0;
            _loc2_ = 0;
            while(_loc2_ < 4)
            {
               _loc3_ = 0;
               while(_loc3_ < 2)
               {
                  monsterData.push({
                     "pid":0,
                     "invoke":false,
                     "show":false
                  });
                  _loc1_++;
                  _loc3_++;
               }
               _loc2_++;
            }
         }
         super();
      }
      
      override protected function init() : void
      {
         var _loc1_:MovieClip = null;
         this.initStone();
         Task743.initTaskForMap494(this);
         this.sptController = getDefinitionByName("com.robot.app2.task.control.TaskController_358") as Class;
         this.sptController.startTask_494(this);
         this.conLevel["fireMC"].visible = false;
         this.topLevel["infoPanel"].visible = false;
         this.conLevel["infoHit"].buttonMode = true;
         this.conLevel["infoHit"].addEventListener(MouseEvent.CLICK,this.showInfoPanel);
         this.topLevel["infoPanel"]["closeBTN"].addEventListener(MouseEvent.CLICK,this.showInfoPanel);
         this.fireArr.push(this.conLevel["fire1"],this.conLevel["fire2"],this.conLevel["fire3"],this.conLevel["fire4"]);
         this.checkHaveFire();
         var _loc2_:uint = 0;
         while(_loc2_ < this.fireArr.length)
         {
            _loc1_ = this.fireArr[_loc2_];
            _loc1_.gotoAndStop(1);
            _loc1_.buttonMode = true;
            _loc1_.addEventListener(MouseEvent.CLICK,this.fireClickHandler);
            this.addMonster(_loc2_);
            _loc2_++;
         }
         this.timer = new Timer(1000);
         this.timer.addEventListener(TimerEvent.TIMER,this.timerHandler);
         this.timer.start();
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimatEnd);
      }
      
      private function checkHaveFire() : void
      {
         if(MainManager.actorInfo.clothIDs.indexOf(100044) == -1)
         {
            ItemManager.addEventListener(ItemEvent.CLOTH_LIST,function(param1:ItemEvent):void
            {
               if(!ItemManager.containsCloth(100044))
               {
                  haveFire = false;
                  conLevel["fireMC"].visible = true;
               }
               else
               {
                  haveFire = true;
                  conLevel["fireMC"].visible = false;
               }
               ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,arguments.callee);
            });
            ItemManager.getCloth();
         }
         else
         {
            this.haveFire = true;
            conLevel["fireMC"].visible = false;
         }
      }
      
      public function onGetFireGun() : void
      {
         ItemAction.buyItem(100044,false);
         DisplayUtil.removeForParent(conLevel["fireMC"]);
         this.haveFire = true;
      }
      
      private function showInfoPanel(param1:MouseEvent) : void
      {
         this.topLevel["infoPanel"].visible = !this.topLevel["infoPanel"].visible;
      }
      
      private function addMonster(param1:int) : void
      {
         var _loc4_:OgreModel = null;
         var _loc5_:uint = 0;
         var _loc6_:Object = null;
         var _loc2_:Array = this.pointArr[param1];
         var _loc3_:Array = new Array();
         var _loc7_:Boolean = getTimer() - firetime[param1] > 30 * 1000 ? false : true;
         var _loc8_:uint = 0;
         while(_loc8_ < _loc2_.length)
         {
            _loc5_ = uint(param1 * 2 + _loc8_);
            if(Boolean((_loc6_ = monsterData[_loc5_])["show"]) && !_loc7_)
            {
               _loc6_["show"] = false;
            }
            if(_loc6_["pid"] == 0)
            {
               _loc6_["pid"] = this.petArr[uint(Math.random() * this.petArr.length)];
            }
            (_loc4_ = new OgreModel(_loc5_)).isAutoTalk = false;
            _loc4_.show(_loc6_["pid"],_loc2_[_loc8_]);
            _loc4_.addEventListener(RobotEvent.OGRE_CLICK,this.onMonsterClick);
            _loc4_.visible = _loc6_["show"];
            _loc3_.push(_loc4_);
            _loc8_++;
         }
         this.monsterArr.push(_loc3_);
      }
      
      private function closeFire(param1:uint) : void
      {
         var _loc3_:OgreModel = null;
         var _loc4_:Object = null;
         firetime[param1] = 0;
         var _loc2_:MovieClip = this.fireArr[param1];
         if(_loc2_.currentFrame != 1)
         {
            _loc2_.gotoAndStop(1);
            _loc2_.mouseChildren = _loc2_.mouseEnabled = true;
            for each(_loc3_ in this.monsterArr[param1])
            {
               (_loc4_ = monsterData[_loc3_.index])["invoke"] = false;
               _loc4_["show"] = false;
               _loc3_.visible = _loc4_["show"];
            }
         }
      }
      
      private function openFire(param1:uint) : void
      {
         var _loc3_:OgreModel = null;
         var _loc4_:Object = null;
         var _loc2_:MovieClip = this.fireArr[param1];
         if(_loc2_.currentFrame != 2)
         {
            _loc2_.gotoAndStop(2);
            _loc2_.mouseChildren = _loc2_.mouseEnabled = false;
            for each(_loc3_ in this.monsterArr[param1])
            {
               if((_loc4_ = monsterData[_loc3_.index])["invoke"])
               {
                  _loc4_["show"] = true;
                  _loc3_.visible = _loc4_["show"];
               }
            }
         }
      }
      
      private function timerHandler(param1:TimerEvent) : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:int = getTimer();
         var _loc4_:uint = 0;
         while(_loc4_ < this.fireArr.length)
         {
            if(firetime[_loc4_] > 0)
            {
               if(_loc3_ - firetime[_loc4_] > 30 * 1000)
               {
                  this.closeFire(_loc4_);
               }
               else
               {
                  this.openFire(_loc4_);
               }
            }
            _loc4_++;
         }
      }
      
      private function onAimatEnd(param1:AimatEvent) : void
      {
         var _loc3_:MovieClip = null;
         var _loc4_:OgreModel = null;
         var _loc5_:Object = null;
         if(param1.info.userID != MainManager.actorID)
         {
            return;
         }
         var _loc2_:Point = param1.info.endPos;
         var _loc6_:uint = 0;
         while(_loc6_ < this.fireArr.length)
         {
            _loc3_ = this.fireArr[_loc6_];
            if(_loc3_.hitTestPoint(_loc2_.x,_loc2_.y))
            {
               if(MainManager.actorInfo.clothIDs.indexOf(100044) == -1)
               {
                  this.checkFire();
                  return;
               }
               firetime[_loc6_] = getTimer();
               if(_loc3_.currentFrame != 2)
               {
                  for each(_loc4_ in this.monsterArr[_loc6_])
                  {
                     _loc5_ = monsterData[_loc4_.index];
                     if(int(Math.random() * 2) == 1)
                     {
                        _loc5_["invoke"] = true;
                        _loc5_["show"] = true;
                        _loc4_.alpha = 0;
                        _loc4_.visible = _loc5_["show"];
                        TweenLite.to(_loc4_,2,{
                           "alpha":1,
                           "ease":Back.easeOut
                        });
                     }
                     else
                     {
                        _loc5_["invoke"] = false;
                     }
                  }
               }
               _loc3_.gotoAndStop(2);
               _loc3_.mouseChildren = _loc3_.mouseEnabled = false;
               break;
            }
            _loc6_++;
         }
      }
      
      private function onMonsterClick(param1:RobotEvent) : void
      {
         this.m_monster = param1.currentTarget as OgreModel;
         MainManager.actorModel.addEventListener(RobotEvent.WALK_END,this.fightMonster);
         MainManager.actorModel.walkAction(this.m_monster.pos);
      }
      
      private function fightMonster(param1:RobotEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,this.fightMonster);
         if(Boolean(this.m_monster) && Point.distance(MainManager.actorModel.pos,this.m_monster.pos) < 20)
         {
            FightManager.fightWithBoss(PetXMLInfo.getName(this.m_monster.id),this.petArr.indexOf(this.m_monster.id));
         }
         this.m_monster = null;
      }
      
      private function fireClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:uint = 0;
         while(_loc3_ < this.fireArr.length)
         {
            _loc2_ = this.fireArr[_loc3_];
            if(_loc2_ == param1.currentTarget as MovieClip)
            {
               if(this.monsterArr[_loc3_][0].visible)
               {
                  return;
               }
               break;
            }
            _loc3_++;
         }
         this.checkFire();
      }
      
      private function checkFire() : void
      {
         if(!this.haveFire)
         {
            Alarm.show("用火焰喷射器射击才能点燃枯枝, 你的背包内没有火焰喷射器，到机械室可以领取！");
         }
         else if(MainManager.actorInfo.clothIDs.indexOf(100044) == -1)
         {
            Alarm.show("装备火焰喷射器射击点燃枯枝！");
         }
         else
         {
            Alarm.show("用火焰喷射器射击点燃枯枝！");
         }
      }
      
      public function initStone() : void
      {
         ToolTipManager.add(depthLevel["stone"],"石板");
         depthLevel["stone"].buttonMode = true;
         depthLevel["stone"].addEventListener(MouseEvent.CLICK,this.onStoneClick);
      }
      
      private function onStoneClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_624"),function():void
         {
            Task624.finishPro_2();
         });
      }
      
      public function exploitOre() : void
      {
         EnergyController.exploit(34);
      }
      
      override public function destroy() : void
      {
         var _loc1_:MovieClip = null;
         var _loc3_:OgreModel = null;
         Task743.destroy();
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,this.fightMonster);
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimatEnd);
         ToolTipManager.remove(depthLevel["stone"]);
         depthLevel["stone"].removeEventListener(MouseEvent.CLICK,this.onStoneClick);
         conLevel["infoHit"].removeEventListener(MouseEvent.CLICK,this.showInfoPanel);
         topLevel["infoPanel"]["closeBTN"].removeEventListener(MouseEvent.CLICK,this.showInfoPanel);
         if(this.timer)
         {
            this.timer.stop();
            this.timer.removeEventListener(TimerEvent.TIMER,this.timerHandler);
         }
         var _loc2_:uint = 0;
         while(_loc2_ < this.fireArr.length)
         {
            _loc1_ = this.fireArr[_loc2_];
            _loc1_.removeEventListener(MouseEvent.CLICK,this.fireClickHandler);
            for each(_loc3_ in this.monsterArr[_loc2_])
            {
               _loc3_.removeEventListener(RobotEvent.OGRE_CLICK,this.onMonsterClick);
               _loc3_.destroy();
            }
            _loc2_++;
         }
         while(this.fireArr.length > 0)
         {
            this.fireArr.shift();
         }
         while(this.monsterArr.length > 0)
         {
            this.monsterArr.shift();
         }
         this.monsterArr = null;
         this.fireArr = null;
      }
   }
}
