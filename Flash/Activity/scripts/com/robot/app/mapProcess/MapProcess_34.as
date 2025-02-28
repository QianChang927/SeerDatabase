package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskUtils.taskDialog.NpcTipDialog;
   import com.robot.app.task.taskscollection.TaskProcess_11;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_34 extends BaseMapProcess
   {
       
      
      private var _currYin:MovieClip;
      
      private var _currIndex:int = 0;
      
      private var mcA:Array;
      
      private var hitA:Array;
      
      private var curNameIndex:Number;
      
      private var curMc:MovieClip;
      
      private var curPoint:Point;
      
      private var time:uint = 0;
      
      private var _yaModel:OgreModel;
      
      private var shitou:MovieClip;
      
      private var xiangzi:MovieClip;
      
      public function MapProcess_34()
      {
         super();
      }
      
      override protected function init() : void
      {
         var _loc5_:String = null;
         var _loc6_:MovieClip = null;
         var _loc7_:uint = 0;
         this.checkMacKingOpenDoor();
         (conLevel["petMC"] as MovieClip).buttonMode = true;
         (conLevel["petMC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onPet);
         ToolTipManager.add(conLevel["tipBtn"] as SimpleButton,"活动告示牌");
         (conLevel["tipBtn"] as SimpleButton).addEventListener(MouseEvent.CLICK,this.onTip);
         conLevel["lidMc"].gotoAndPlay(60);
         ToolTipManager.add(conLevel["door_0"],"神秘通道");
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            conLevel["yin_" + _loc1_.toString()].gotoAndStop(1);
            conLevel["yin_" + _loc1_.toString()].visible = false;
            _loc1_++;
         }
         this._currYin = conLevel["yin_" + this._currIndex.toString()];
         conLevel["treeMc"].buttonMode = true;
         conLevel["treeMc"].addEventListener(MouseEvent.CLICK,this.onTreeHandler);
         DisplayUtil.removeForParent(conLevel["templeDoorMC"]);
         DisplayUtil.removeForParent(conLevel["huahuaguoMC"]);
         var _loc2_:uint = 0;
         while(_loc2_ < 6)
         {
            _loc5_ = "matter_" + _loc2_;
            _loc6_ = MapManager.currentMap.depthLevel.getChildByName(_loc5_) as MovieClip;
            DisplayUtil.removeForParent(_loc6_);
            _loc6_ = null;
            _loc2_++;
         }
         var _loc3_:MovieClip = MapManager.currentMap.depthLevel.getChildByName("chosSuccseMC") as MovieClip;
         DisplayUtil.removeForParent(_loc3_);
         _loc3_ = null;
         var _loc4_:MovieClip = MapManager.currentMap.depthLevel.getChildByName("chosFalseMC") as MovieClip;
         DisplayUtil.removeForParent(_loc4_);
         _loc4_ = null;
         this.shitou = conLevel["shitou"] as MovieClip;
         this.shitou.visible = false;
         this.xiangzi = conLevel["xiangzi"] as MovieClip;
         this.xiangzi.alpha = 0;
         getDefinitionByName("com.robot.app2.mapProcess.control.ASignalThatNeverDisappearsController").initMap34(this);
         if(TasksManager.getTaskStatus(12) == TasksManager.COMPLETE)
         {
            this.check();
            animatorLevel.visible = false;
            _loc7_ = 1;
            while(_loc7_ < 5)
            {
               conLevel["mc" + _loc7_].visible = false;
               conLevel["hit" + _loc7_].gotoAndPlay(2);
               conLevel["treeMc"].gotoAndStop(4);
               _loc7_++;
            }
            return;
         }
         if(TasksManager.getTaskStatus(12) == TasksManager.ALR_ACCEPT)
         {
            this.configStone();
            return;
         }
         if(TasksManager.getTaskStatus(12) == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(12,this.acHandler);
            return;
         }
      }
      
      private function onPet(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.GUODONGYA,["小赛尔，嘘嘘嘘…我无意间发现了一个秘密，在附近的机器装置背后可能存在一个机械的世界！不过，只有在0xff00004月30日—5月8日 全天开放0xffffff才能进入哦！"],["真的吗？到时我一定要来看个究竟！"]);
      }
      
      private function onTip(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("MacKingTipPanel"),"正在打开面板");
      }
      
      private function checkMacKingOpenDoor() : void
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         var _loc2_:uint = _loc1_.getHours() * 60 + _loc1_.getMinutes();
         var _loc3_:CronTimeVo = new CronTimeVo("*","*","30","4","*","*");
         var _loc4_:CronTimeVo = new CronTimeVo("*","*","1-8","5","*","*");
         if(Boolean(_loc3_.isActive(_loc1_)) || Boolean(_loc4_.isActive(_loc1_)))
         {
            (conLevel["door_2"] as MovieClip).mouseEnabled = true;
         }
         else
         {
            (conLevel["door_2"] as MovieClip).mouseEnabled = false;
         }
      }
      
      private function acHandler(param1:Boolean) : void
      {
         if(param1)
         {
            this.configStone();
         }
      }
      
      private function configStone() : void
      {
         this.mcA = [1,2,3,4];
         this.hitA = [1,2,3,4];
         this.time = 0;
         var _loc1_:uint = 1;
         while(_loc1_ < 5)
         {
            conLevel["mc" + _loc1_].buttonMode = true;
            conLevel["mc" + _loc1_].addEventListener(MouseEvent.MOUSE_DOWN,this.onDownHandler);
            _loc1_++;
         }
      }
      
      private function onTreeHandler(param1:MouseEvent) : void
      {
         ++this.time;
         if(this.time > 3)
         {
            return;
         }
         conLevel["treeMc"].gotoAndStop(this.time + 1);
         if(this.time == 3)
         {
            conLevel["mc4"].gotoAndPlay(2);
         }
      }
      
      public function clickTengman() : void
      {
         AnimateManager.playMcAnimate(conLevel["tengmanMC"],2,"mc2",function():void
         {
            conLevel["tengmanMC"].visible = false;
            MapManager.changeMap(36);
         },false,true);
      }
      
      public function clickTempleDoor() : void
      {
         ModuleManager.showModule(ClientConfig.getTaskModule("UnbelievableSpriteScholar/OpenTempleDoor"),"正在加载任务面板....");
      }
      
      public function oreHandler() : void
      {
         var _loc1_:String = NpcTipDialog.IRIS;
         NpcTipDialog.show("神秘的精灵圣殿被奇怪的晶体藤蔓缠绕着无法开启，得到电能锯子的赛尔们，快来帮忙吧！采集到的藤结晶可以拿到动力室换取赛尔豆哦！",this.handler,_loc1_);
      }
      
      private function handler() : void
      {
         EnergyController.exploit(7);
      }
      
      private function onDownHandler(param1:MouseEvent) : void
      {
         this.curPoint = new Point();
         this.curNameIndex = Number((param1.currentTarget as MovieClip).name.slice(2,3));
         this.curMc = param1.currentTarget as MovieClip;
         this.curPoint.x = param1.currentTarget.x;
         this.curPoint.y = param1.currentTarget.y;
         this.curMc.startDrag();
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_UP,this.onUphandler);
      }
      
      private function onUphandler(param1:MouseEvent) : void
      {
         var _loc3_:int = 0;
         this.curMc.stopDrag();
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onUphandler);
         var _loc2_:uint = 0;
         while(_loc2_ < this.hitA.length)
         {
            if(this.curMc.hitTestObject(conLevel["hit" + this.hitA[_loc2_]]))
            {
               conLevel["hit" + this.hitA[_loc2_]].gotoAndPlay(2);
               this.curMc.removeEventListener(MouseEvent.MOUSE_DOWN,this.onDownHandler);
               DisplayUtil.removeForParent(this.curMc);
               this.curMc = null;
               _loc3_ = this.hitA.indexOf(this.hitA[_loc2_]);
               this.hitA.splice(_loc3_,1);
               _loc3_ = this.mcA.indexOf(this.curNameIndex);
               this.mcA.splice(_loc3_,1);
               if(this.hitA.length == 0)
               {
                  if(TasksManager.getTaskStatus(12) != TasksManager.COMPLETE)
                  {
                     TasksManager.complete(12,1);
                  }
                  animatorLevel.visible = false;
                  this.check();
               }
               return;
            }
            _loc2_++;
         }
         this.curMc.x = this.curPoint.x;
         this.curMc.y = this.curPoint.y;
      }
      
      override public function destroy() : void
      {
         var _loc1_:int = 0;
         ToolTipManager.remove(conLevel["door_0"]);
         this.onMapDown();
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimatEnd);
         this._currYin.removeEventListener(Event.ENTER_FRAME,this.onYinEnter);
         this._currYin.stop();
         this._currYin = null;
         if(this.mcA)
         {
            if(this.mcA.length > 0)
            {
               _loc1_ = 0;
               while(_loc1_ < this.mcA.length)
               {
                  conLevel["mc" + this.mcA[_loc1_]].removeEventListener(MouseEvent.MOUSE_DOWN,this.onDownHandler);
                  _loc1_++;
               }
            }
         }
         if(this._yaModel)
         {
            this._yaModel.removeEventListener(RobotEvent.OGRE_CLICK,this.onYaClick);
            this._yaModel.destroy();
            this._yaModel = null;
         }
         (conLevel["petMC"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onPet);
         ToolTipManager.remove(conLevel["tipBtn"] as SimpleButton);
         (conLevel["tipBtn"] as SimpleButton).removeEventListener(MouseEvent.CLICK,this.onTip);
         getDefinitionByName("com.robot.app2.mapProcess.control.ASignalThatNeverDisappearsController").destroyMap34();
      }
      
      private function check() : void
      {
         if(TaskProcess_11.isCatch)
         {
            return;
         }
         if(TasksManager.getTaskStatus(11) != TasksManager.COMPLETE)
         {
            this._currYin.gotoAndPlay(2);
            this._currYin.visible = true;
            this._currYin.addEventListener(Event.ENTER_FRAME,this.onYinEnter);
            TaskProcess_11.start();
            AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimatEnd);
         }
      }
      
      private function onYinEnter(param1:Event) : void
      {
         if(this._currYin.currentFrame == this._currYin.totalFrames)
         {
            this._currYin.removeEventListener(Event.ENTER_FRAME,this.onYinEnter);
            this._currYin.gotoAndStop(1);
            this._currYin.visible = false;
            ++this._currIndex;
            if(this._currIndex >= 3)
            {
               this._currIndex = 0;
            }
            this._currYin = conLevel["yin_" + this._currIndex.toString()];
            this._currYin.addEventListener(Event.ENTER_FRAME,this.onYinEnter);
            this._currYin.gotoAndPlay(2);
            this._currYin.visible = true;
         }
      }
      
      private function onAimatEnd(param1:AimatEvent) : void
      {
         var _loc2_:AimatInfo = param1.info;
         if(_loc2_.userID == MainManager.actorID)
         {
            if(_loc2_.id == 10003)
            {
               if(this._currYin)
               {
                  if(this._currYin.hitTestPoint(_loc2_.endPos.x,_loc2_.endPos.y))
                  {
                     this._currYin.removeEventListener(Event.ENTER_FRAME,this.onYinEnter);
                     this._currYin.gotoAndStop(1);
                     this._currYin.visible = false;
                     this._yaModel = new OgreModel(0);
                     this._yaModel.show(74,_loc2_.endPos);
                     this._yaModel.addEventListener(RobotEvent.OGRE_CLICK,this.onYaClick);
                  }
               }
            }
         }
      }
      
      private function onYaClick(param1:Event) : void
      {
         if(Point.distance(this._yaModel.pos,MainManager.actorModel.pos) < 40)
         {
            MainManager.actorModel.stop();
            if(MapManager.currentMap.id == 34)
            {
               FightManager.fightWithBoss("果冻鸭");
            }
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapDown);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
         MainManager.actorModel.walkAction(this._yaModel.pos);
      }
      
      private function onWalkEnter(param1:Event) : void
      {
         if(Point.distance(this._yaModel.pos,MainManager.actorModel.pos) < 40)
         {
            this.onMapDown();
            MainManager.actorModel.stop();
            if(MapManager.currentMap.id == 34)
            {
               FightManager.fightWithBoss("果冻鸭");
            }
         }
      }
      
      private function onMapDown(param1:MapEvent = null) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapDown);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkEnter);
      }
      
      public function changeToHandler() : void
      {
         conLevel["lidMc"].addEventListener(Event.ENTER_FRAME,this.onEntHandler);
         conLevel["lidMc"].gotoAndPlay(60);
      }
      
      public function changeToMacHandler() : void
      {
         MapManager.changeMap(675);
      }
      
      private function onEntHandler(param1:Event) : void
      {
         if(conLevel["lidMc"].currentFrame == 70)
         {
            conLevel["lidMc"].removeEventListener(Event.ENTER_FRAME,this.onEntHandler);
            MapManager.changeMap(33);
         }
      }
      
      public function onClickShitou() : void
      {
      }
      
      private function onClickXiangzi(param1:MouseEvent) : void
      {
         this.xiangzi.removeEventListener(MouseEvent.CLICK,this.onClickXiangzi);
         DisplayUtil.removeForParent(this.shitou);
         this.shitou = null;
         DisplayUtil.removeForParent(this.xiangzi);
         this.xiangzi = null;
         var _loc2_:String = "恭喜你已经找到了遗迹宝箱，据这些机械残骸看来可能是属于机械精灵的，不过我们现在还缺少机械图纸，再去<font color=\'#ff0000\'>赫尔卡星</font>其他地方找找吧！";
         NpcTipDialog.show(_loc2_,null,NpcTipDialog.DOCTOR,-80);
         TasksManager.complete(28,0);
      }
   }
}
