package com.robot.app.task.petstory.control
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.UserState;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ToolTipManager;
   
   public class KeLaiFenSptController
   {
      
      private static var _instance:com.robot.app.task.petstory.control.KeLaiFenSptController;
      
      private static const NORMAL_SPT_TASK_ID:uint = 684;
      
      private static const SPECIAL_SPT_TASK_ID:uint = 685;
       
      
      private var _map:BaseMapProcess;
      
      private var _soldier:MovieClip;
      
      private var _sptMC:MovieClip;
      
      private var _effectMC:MovieClip;
      
      private var _cutSptId:uint = 0;
      
      public function KeLaiFenSptController(param1:PrivateClass)
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.control.KeLaiFenSptController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.control.KeLaiFenSptController(new PrivateClass());
         }
         return _instance;
      }
      
      public function init(param1:BaseMapProcess) : void
      {
         this._map = param1;
         this._sptMC = this._map.depthLevel["sptMC"];
         this._sptMC.buttonMode = true;
         this._sptMC.mouseEnabled = false;
         this._sptMC.mouseChildren = false;
         ToolTipManager.add(this._sptMC,"克莱芬");
         this._sptMC.addEventListener(MouseEvent.CLICK,this.onFightSpt);
         this._effectMC = this._map.depthLevel["effectMC"];
         this._effectMC.buttonMode = true;
         this._effectMC.addEventListener(MouseEvent.CLICK,this.onMosueEffect);
         this._cutSptId = 0;
         this._soldier = this._map.depthLevel["soldier_1"];
         this._soldier.buttonMode = true;
         this.checkTaskProcess();
         this.addSoldierNpc();
      }
      
      private function onFightSpt(param1:MouseEvent) : void
      {
         if(this._cutSptId == 0)
         {
            return;
         }
         this.fightWithSpt();
      }
      
      private function fightWithSpt() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
         FightBossController.fightBoss("克莱芬",this._cutSptId);
      }
      
      private function onAlarmClickHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         if(BufferRecordManager.getState(MainManager.actorInfo,164) == false)
         {
            if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               BufferRecordManager.setState(MainManager.actorInfo,164,true,function():void
               {
                  initProcess_4();
               });
            }
            else
            {
               NpcDialog.show(NPC.KELAIFEN,["美酒是我的最爱，离我远一点！"],null,null,false,function():void
               {
                  initProcess_3();
               });
            }
         }
         else if((e.dataObj as FightOverInfo).winnerID != MainManager.actorID)
         {
            NpcDialog.show(NPC.KELAIFEN,["享受最爱的美酒去了，没事别来打扰我！"],null,null,false,function():void
            {
            });
         }
      }
      
      private function checkTaskProcess() : void
      {
         if(MainManager.actorPrevState == UserState.FIGHT)
         {
            if(BufferRecordManager.getState(MainManager.actorInfo,164) == false)
            {
               this.fightBack_1();
            }
            else
            {
               this.fightBack_2();
            }
            return;
         }
         if(BufferRecordManager.getState(MainManager.actorInfo,164) == false)
         {
            this.initProcess_1();
         }
         else
         {
            this.initProcess_5();
         }
      }
      
      private function fightBack_1() : void
      {
         KTool.getFrameMc(this._sptMC,2,"",function(param1:DisplayObject):void
         {
            var _loc2_:MovieClip = param1 as MovieClip;
            _loc2_.gotoAndStop(_loc2_.totalFrames);
         });
         this._effectMC.visible = false;
      }
      
      private function fightBack_2() : void
      {
         this._cutSptId = 7;
         this._sptMC.mouseEnabled = true;
         KTool.getFrameMc(this._sptMC,3,"",function(param1:DisplayObject):void
         {
            var _loc2_:MovieClip = param1 as MovieClip;
            _loc2_.gotoAndStop(1);
         });
         this._effectMC.visible = false;
      }
      
      private function initProcess_1() : void
      {
         this._effectMC.gotoAndStop(1);
         this._sptMC.gotoAndStop(1);
         this.initProcess_2();
      }
      
      private function initProcess_2() : void
      {
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimat);
      }
      
      private function initProcess_3() : void
      {
         this._effectMC.visible = false;
         this._cutSptId = 6;
         this._sptMC.mouseEnabled = true;
      }
      
      private function initProcess_4() : void
      {
         this._effectMC.visible = false;
         KTool.getFrameMc(this._sptMC,3,"",function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               mc.gotoAndStop(mc.totalFrames);
               NpcDialog.show(NPC.KELAIFEN,["发生了什么？小子，你是来挑战我的吗？"],null,null,false,function():void
               {
                  _cutSptId = 7;
                  _sptMC.mouseEnabled = true;
                  fightWithSpt();
               });
            });
         });
      }
      
      private function initProcess_5() : void
      {
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimat_1);
      }
      
      private function onAimat_1(param1:AimatEvent) : void
      {
         var e:AimatEvent = param1;
         var info:AimatInfo = e.info;
         if(info.userID == MainManager.actorID)
         {
            if(info.id == 10002)
            {
               if(this._effectMC.hitTestPoint(info.endPos.x,info.endPos.y))
               {
                  AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat_1);
                  KTool.getFrameMc(this._effectMC,2,"",function(param1:DisplayObject):void
                  {
                     var mc:MovieClip = null;
                     var o:DisplayObject = param1;
                     mc = o as MovieClip;
                     AnimateManager.playMcAnimate(mc,1,"",function():void
                     {
                        mc.gotoAndStop(mc.totalFrames);
                        _effectMC.visible = false;
                        KTool.getFrameMc(_sptMC,3,"",function(param1:DisplayObject):void
                        {
                           var mc_2:MovieClip = null;
                           var p:DisplayObject = param1;
                           mc_2 = p as MovieClip;
                           AnimateManager.playMcAnimate(mc_2,1,"",function():void
                           {
                              mc_2.gotoAndStop(mc_2.totalFrames);
                              _effectMC.visible = false;
                              _cutSptId = 7;
                              _sptMC.mouseEnabled = true;
                           });
                        });
                     });
                  });
               }
            }
         }
      }
      
      private function onAimat(param1:AimatEvent) : void
      {
         var e:AimatEvent = param1;
         var info:AimatInfo = e.info;
         if(info.userID == MainManager.actorID)
         {
            if(info.id == 10002)
            {
               if(this._effectMC.hitTestPoint(info.endPos.x,info.endPos.y))
               {
                  AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
                  KTool.getFrameMc(this._effectMC,2,"",function(param1:DisplayObject):void
                  {
                     var mc:MovieClip = null;
                     var o:DisplayObject = param1;
                     mc = o as MovieClip;
                     AnimateManager.playMcAnimate(mc,1,"",function():void
                     {
                        mc.gotoAndStop(mc.totalFrames);
                        _effectMC.visible = false;
                        KTool.getFrameMc(_sptMC,2,"",function(param1:DisplayObject):void
                        {
                           var mc_2:MovieClip = null;
                           var p:DisplayObject = param1;
                           mc_2 = p as MovieClip;
                           AnimateManager.playMcAnimate(mc_2,1,"",function():void
                           {
                              mc_2.gotoAndStop(mc_2.totalFrames);
                              initProcess_3();
                           });
                        });
                     });
                  });
               }
            }
         }
      }
      
      private function onMosueEffect(param1:MouseEvent) : void
      {
         Alarm.show("好大一股酒味，无法靠近！快问问边上的卫兵吧！");
      }
      
      private function addSoldierNpc() : void
      {
         if(BufferRecordManager.getState(MainManager.actorInfo,164) == false)
         {
            CommonUI.addYellowExcal(this._soldier,0,-this._soldier.height);
         }
         this._soldier.addEventListener(MouseEvent.CLICK,this.onMouseSoldier);
      }
      
      private function onMouseSoldier(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.SOLIDMAN,["露希欧星最近来了一个爱喝酒的大家伙，醉了就欺负这里的精灵，可恶极了。"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SOLIDMAN,["看到左边的岩石吗？那里酒气熏天，根本无法靠近。你可以用高压水枪试试！（火山星山洞深处可以领取哦）"],["前去领取高压水枪","我知道了！"],[function():void
            {
               CommonUI.removeYellowExcal(_soldier);
               MapManager.changeMap(17);
            },function():void
            {
               CommonUI.removeYellowExcal(_soldier);
            }]);
         });
      }
      
      public function destory() : void
      {
         this._soldier.removeEventListener(MouseEvent.CLICK,this.onMouseSoldier);
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
         this._sptMC.removeEventListener(MouseEvent.CLICK,this.onFightSpt);
         ToolTipManager.remove(this._sptMC);
      }
   }
}

class PrivateClass
{
    
   
   public function PrivateClass()
   {
      super();
   }
}
