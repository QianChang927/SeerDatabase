package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.info.GaiyaEffectInfo;
   import com.robot.app.sptStar.GaiyaEvent;
   import com.robot.app.sptStar.GaiyaTrainController;
   import com.robot.app.task.taskscollection.Task618;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.UserState;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_423 extends BaseMapProcess
   {
      
      private static var _gaiyafailCount:int;
      
      private static var _hasFightSPTBoss:Boolean;
       
      
      private var mOgreIndex:int = 0;
      
      private var _gaiyaTrainPanel:AppModel;
      
      private var _animation_gaiya:MovieClip;
      
      private var _animation_leiyi:MovieClip;
      
      private var _animation_hamoleite:MovieClip;
      
      private var _isShowHamoleiteDialog:Boolean;
      
      private var _sptBtn:SimpleButton;
      
      private var _stoneBtn:SimpleButton;
      
      private var _sptBoss:MovieClip;
      
      private var _sptMC:MovieClip;
      
      private var _sptType:int;
      
      private var _tipMC:Sprite;
      
      private var _tipCloseBtn:SimpleButton;
      
      public function MapProcess_423()
      {
         super();
      }
      
      public static function get hasFightSPTBoss() : Boolean
      {
         return _hasFightSPTBoss;
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86066231);
         getDefinitionByName("com.robot.app2.control.PeoplesGaiyaActionController").init(this);
         Task618.initTask_423(this);
         if(TasksManager.getTaskStatus(618) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(618,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  remove();
                  return;
               }
               initGaiyaTrain();
               initSPTBoss();
            });
         }
         else
         {
            this.initGaiyaTrain();
            this.initSPTBoss();
         }
         SocketConnection.addCmdListener(CommandID.FIGHT_NPC_MONSTER,this.onStartFightWithOgre);
      }
      
      private function onStartFightWithOgre(param1:*) : void
      {
         SocketConnection.addCmdListener(4552,this.onfightOgreResult);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
      }
      
      private function onFightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            if(this.mOgreIndex == 1)
            {
               Alarm.show("特攻学习力提升5点！闪光艾菲亚获得10000经验!");
            }
            else if(this.mOgreIndex == 2)
            {
               Alarm.show("体力学习力提升5点！闪光艾菲亚获得10000经验!");
            }
         }
      }
      
      private function onfightOgreResult(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(4552,this.onfightOgreResult);
         var _loc2_:ByteArray = param1.data as ByteArray;
         this.mOgreIndex = _loc2_.readUnsignedInt();
      }
      
      private function remove() : void
      {
         DisplayUtil.removeForParent(conLevel["sptBtn"]);
         conLevel["sptBtn"] = null;
         DisplayUtil.removeForParent(animatorLevel["sptBoss"]);
         animatorLevel["sptBoss"] = null;
         DisplayUtil.removeForParent(conLevel["stoneBtn"]);
         conLevel["stoneBtn"] = null;
         DisplayUtil.removeForParent(animatorLevel["keMc"]);
         animatorLevel["keMc"] = null;
         DisplayUtil.removeForParent(conLevel["petmc"]);
         conLevel["petmc"] = null;
      }
      
      private function initGaiyaTrain() : void
      {
         this.setGaiyaTrainBtn(true);
         if(MainManager.actorPrevState == UserState.FIGHT)
         {
            if(FightManager.amyId == 0)
            {
               if(FightManager.amyPetIds.indexOf(2517) != -1)
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onGaiyaFightWin_1);
                  return;
               }
               if(FightManager.amyPetIds.indexOf(216) != -1)
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onGaiyaFightWin_3);
                  return;
               }
            }
         }
         _gaiyafailCount = 0;
      }
      
      private function destroyGaiyaTrain() : void
      {
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffect_1);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onGaiyaFightWin_1);
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffect_3);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onGaiyaFightWin_3);
         EventManager.removeEventListener(GaiyaEvent.INTENSIFY_TRAIN,this.onGaiyaTrainStart);
         if(this._gaiyaTrainPanel)
         {
            this._gaiyaTrainPanel.destroy();
            this._gaiyaTrainPanel = null;
         }
         this.enabledLeiyiClick(false);
         if(this._animation_leiyi)
         {
            this._animation_leiyi.removeEventListener(Event.ENTER_FRAME,this.onEnterLeiyi);
            this._animation_leiyi.removeEventListener(MouseEvent.CLICK,this.onClickLeiyi);
            this._animation_leiyi = null;
         }
         this.destroyHamoleite();
         this._animation_gaiya = null;
      }
      
      private function setGaiyaTrainBtn(param1:Boolean) : void
      {
         if(param1)
         {
            ToolTipManager.add(conLevel["gaiyaTrain"],"盖亚特训");
            conLevel["gaiyaTrain"].mouseEnabled = true;
            conLevel["gaiyaTrain"].buttonMode = true;
            conLevel["gaiyaTrain"].addEventListener(MouseEvent.CLICK,this.onTrainClick);
         }
         else
         {
            ToolTipManager.remove(conLevel["gaiyaTrain"]);
            conLevel["gaiyaTrain"].mouseEnabled = false;
            conLevel["gaiyaTrain"].buttonMode = false;
            conLevel["gaiyaTrain"].removeEventListener(MouseEvent.CLICK,this.onTrainClick);
         }
      }
      
      public function onTrainClick(param1:MouseEvent) : void
      {
         if(GaiyaTrainController.check())
         {
            this._gaiyaTrainPanel = ModuleManager.getModule(ClientConfig.getAppModule("GaiyaTrainLeadPanel"),"正在打开盖亚特训");
            this._gaiyaTrainPanel.show();
            EventManager.addEventListener(GaiyaEvent.INTENSIFY_TRAIN,this.onGaiyaTrainStart);
         }
      }
      
      private function onGaiyaTrainStart(param1:GaiyaEvent) : void
      {
         this.setGaiyaTrainBtn(false);
         if(param1.effectID == 1)
         {
            TasksManager.getProStatusList(622,this.onTask_622);
         }
         else if(param1.effectID == 2)
         {
            TasksManager.getProStatusList(627,this.onTask_627);
         }
         else if(param1.effectID == 3)
         {
            TasksManager.getProStatusList(634,this.onTask_634);
         }
      }
      
      private function onCancelGaiya() : void
      {
         this.setGaiyaTrainBtn(true);
         DisplayUtil.removeForParent(this._animation_gaiya,false);
      }
      
      private function onGaiyaFightWin_1(param1:Event) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onGaiyaFightWin_1);
         SocketConnection.addCmdListener(CommandID.M_2149,this.onGaiyaEffect_1);
         SocketConnection.send(CommandID.M_2149);
      }
      
      private function onGaiyaEffect_1(param1:SocketEvent) : void
      {
         var _loc3_:Boolean = false;
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffect_1);
         var _loc2_:GaiyaEffectInfo = param1.data as GaiyaEffectInfo;
         if(_loc2_.effects.indexOf(1) == -1)
         {
            _loc3_ = true;
            this.showLeiyi();
            this.enabledLeiyiClick(true);
            this.setGaiyaTrainBtn(false);
            ++_gaiyafailCount;
            if(_gaiyafailCount >= 5)
            {
               _loc3_ = false;
               _gaiyafailCount = 0;
               NpcDialog.show(NPC.LAOKE_LEIDE,["哼！笨蛋，如果你过不了这关，你永远都无法有所突破！"],["难道说其中有什么奥秘？我再试试！"]);
            }
            if(_loc3_)
            {
               NpcDialog.show(NPC.LAOKE_LEIDE,["不！你必须满血结束战斗！你要设法驾驭这股力量，否则，最终的结果永远是失败！"],["难道说其中有什么奥秘？我再试试！"]);
            }
         }
         else
         {
            TasksManager.setProStatus(622,1,true);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("gaiya_shixuezhili"));
         }
      }
      
      private function showGaiyaAnimation() : void
      {
         DisplayUtil.removeForParent(animatorLevel["sptBoss"]);
         if(this._animation_gaiya == null)
         {
            this._animation_gaiya = MapManager.currentMap.libManager.getMovieClip("animation_gaiya");
            this._animation_gaiya.x = 638;
            this._animation_gaiya.y = 115;
         }
         animatorLevel.addChildAt(this._animation_gaiya,0);
      }
      
      private function showLeiyi() : void
      {
         this._animation_leiyi = MapManager.currentMap.libManager.getMovieClip("animation_leiyi");
         this._animation_leiyi.x = 275;
         this._animation_leiyi.y = 290;
         conLevel.addChild(this._animation_leiyi);
         this._animation_leiyi.addEventListener(Event.ENTER_FRAME,this.onEnterLeiyi);
         this._animation_leiyi.gotoAndPlay(1);
      }
      
      private function onEnterLeiyi(param1:Event) : void
      {
         if(this._animation_leiyi.currentFrame == this._animation_leiyi.totalFrames)
         {
            this._animation_leiyi.removeEventListener(Event.ENTER_FRAME,this.onEnterLeiyi);
            this._animation_leiyi.gotoAndStop(this._animation_leiyi.totalFrames);
         }
      }
      
      private function enabledLeiyiClick(param1:Boolean) : void
      {
         if(this._animation_leiyi)
         {
            if(param1)
            {
               this._animation_leiyi.buttonMode = true;
               this._animation_leiyi.addEventListener(MouseEvent.CLICK,this.onClickLeiyi);
            }
            else
            {
               this._animation_leiyi.removeEventListener(MouseEvent.CLICK,this.onClickLeiyi);
            }
         }
      }
      
      private function onClickLeiyi(param1:Event) : void
      {
         if(GaiyaTrainController.checkForTrain())
         {
            FightManager.fightWithBoss("雷伊",4);
         }
      }
      
      private function onTask_622(param1:Array) : void
      {
         if(param1[0])
         {
            EventManager.removeEventListener(GaiyaEvent.INTENSIFY_TRAIN,this.onGaiyaTrainStart);
            this.showLeiyi();
            this.enabledLeiyiClick(true);
         }
         else
         {
            this.showGaiyaAnimation();
            this.animationGaiya_1();
         }
      }
      
      private function animationGaiya_1() : void
      {
         LevelManager.closeMouseEvent();
         this._animation_gaiya.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(_animation_gaiya.currentFrame >= 75)
            {
               _animation_gaiya.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               _animation_gaiya.gotoAndStop(75);
               gaiyaDialog_1();
            }
         });
         this._animation_gaiya.gotoAndPlay(1);
         MapManager.currentMap.libManager.getSound("sound_gaiya_hou").play();
      }
      
      private function gaiyaDialog_1() : void
      {
         NpcDialog.show(NPC.LAOKE_LEIDE,["哈哈哈……小子，看来你终于下定决心了？！我可事先声明哦，想要变强可没那么容易！"],["哼，这对我来说不算什么，我有非变强不可的原因！"],[function():void
         {
            NpcDialog.show(NPC.LAOKE_LEIDE,["很好，就是需要这种气势！好了，废话不多说，我们切入真题！哼哼，先让你了解一下什么是领域吧！"],null,null,false,function():void
            {
               var guang:* = undefined;
               LevelManager.closeMouseEvent();
               guang = MapManager.currentMap.libManager.getMovieClip("animation_light");
               topLevel.addChild(guang);
               guang.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
               {
                  var event:Event = param1;
                  if(guang.currentFrame == guang.totalFrames)
                  {
                     guang.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     DisplayUtil.removeForParent(guang);
                     guang = null;
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("gaiya_huiyi"),function():void
                     {
                        LevelManager.closeMouseEvent();
                        _animation_gaiya.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
                        {
                           if(_animation_gaiya.currentFrame == 135)
                           {
                              _animation_gaiya.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                              _animation_gaiya.gotoAndStop(135);
                              gaiyaDialog_2();
                           }
                        });
                        _animation_gaiya.gotoAndPlay(76);
                     });
                  }
               });
               guang.gotoAndPlay(1);
               MapManager.currentMap.libManager.getSound("sound_gaiya_minxiang").play();
            });
         }]);
      }
      
      private function gaiyaDialog_2() : void
      {
         NpcDialog.show(NPC.GAIYA,["为什么……为什么是他，为什么我会看到雷伊！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.LAOKE_LEIDE,["这是我的领域规则，在这里，你会看到你最在意或是最害怕的东西……哼哼，这就是你的心魔！你在害怕，你怕雷伊会越来越强，和你的距离越来越远，对吗？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.GAIYA,["心魔？也许是吧……不！这绝不是我所希望看到的，我要超越他，超越他！！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.LAOKE_LEIDE,["恩，这份气势非常不错！这就是我要教你的第一个领域规则——嗜血之力！不过作为条件，你必须先打败自己心魔！"],["来吧！我什么都不怕！"],[function():void
                  {
                     LevelManager.closeMouseEvent();
                     TasksManager.setProStatus(622,0,true);
                     animationGaiya_2();
                  }]);
               });
            });
         });
      }
      
      private function animationGaiya_2() : void
      {
         this._animation_gaiya.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(_animation_gaiya.currentFrame == 180)
            {
               showLeiyi();
            }
            if(_animation_gaiya.currentFrame == 230)
            {
               _animation_gaiya.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               _animation_gaiya.gotoAndStop(230);
               gaiyaDialog_3();
            }
         });
         this._animation_gaiya.gotoAndPlay(136);
      }
      
      private function gaiyaDialog_3() : void
      {
         NpcDialog.show(NPC.LAOKE_LEIDE,["看好了，这并不是真正的雷伊，这是你内心深处的心魔！你必须在满血的情况下结束战斗才算是胜利！"],["哼，我一定会是最终的胜者！"],[function():void
         {
            LevelManager.closeMouseEvent();
            _animation_gaiya.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
            {
               if(_animation_gaiya.currentFrame == _animation_gaiya.totalFrames)
               {
                  _animation_gaiya.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  DisplayUtil.removeForParent(_animation_gaiya);
                  enabledLeiyiClick(true);
                  LevelManager.openMouseEvent();
               }
            });
            _animation_gaiya.gotoAndPlay(231);
         }]);
      }
      
      private function gotoMap61() : void
      {
         TasksManager.setProStatus(627,0,true);
         MapManager.changeMap(61);
      }
      
      private function onTask_627(param1:Array) : void
      {
         var arr:Array = param1;
         if(arr[0])
         {
            if(arr[1])
            {
               MapManager.changeMap(61);
            }
            else
            {
               NpcDialog.show(NPC.LAOKE_LEIDE,["别在这里磨蹭了，快去找厄尔塞拉吧！现在也只有他可以帮到你！"],["好，我这就去！我已经等不及了！","让我考虑一下。"],[function():void
               {
                  gotoMap61();
               }]);
            }
         }
         else
         {
            this.showGaiyaAnimation();
            this.animationGaiyaXie_1();
         }
      }
      
      private function animationGaiyaXie_1() : void
      {
         LevelManager.closeMouseEvent();
         this._animation_gaiya.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(_animation_gaiya.currentFrame >= 75)
            {
               _animation_gaiya.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               _animation_gaiya.gotoAndStop(75);
               gaiyaDialogXie_1();
            }
         });
         this._animation_gaiya.gotoAndPlay(1);
         MapManager.currentMap.libManager.getSound("sound_gaiya_hou").play();
      }
      
      private function gaiyaDialogXie_1() : void
      {
         NpcDialog.show(NPC.LAOKE_LEIDE,["哈哈，不错不错，果然是我看中的练武奇才，这么快就能适应血印，我果然没有看错！"],["哼，这不算什么，我要变得更强！"],[function():void
         {
            NpcDialog.show(NPC.LAOKE_LEIDE,["好！有志气！接下来就是第二阶段的特训了！你准备好了吗？"],["准备好了！我感觉浑身充满力量！"],[function():void
            {
               NpcDialog.show(NPC.LAOKE_LEIDE,["恩，我检查过你的身体，有一股不明的黑色能量正隐藏在你的身体里，虽然短时间内没有危害，但是却极大的限制了你的修炼！"],["黑色能量？难道我的伤还没有好？！"],[function():void
               {
                  NpcDialog.show(NPC.LAOKE_LEIDE,["对于这股能量，我也束手无策，不过，或许那只浑身披着七色光羽的老家伙能帮你解决这个问题。"],["七色光羽？难道是厄尔塞拉？！"],[function():void
                  {
                     NpcDialog.show(NPC.LAOKE_LEIDE,["没错，就是他，你的下一步特训，我想也只有他可以帮你了！"],["好，我这就去！我已经等不及了！","让我考虑一下。"],[function():void
                     {
                        gotoMap61();
                     },onCancelGaiya]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private function onTask_634(param1:Array) : void
      {
         var arr:Array = param1;
         this._isShowHamoleiteDialog = false;
         if(arr[0])
         {
            if(arr[1])
            {
               EventManager.removeEventListener(GaiyaEvent.INTENSIFY_TRAIN,this.onGaiyaTrainStart);
               NpcDialog.show(NPC.LAOKE_LEIDE,["现在，我要将我记忆空间中的哈莫雷特召唤出来，你准备好了吗？"],["来吧，我什么都不怕！"],[function():void
               {
                  _isShowHamoleiteDialog = true;
                  showHamoleite();
               }]);
            }
            else
            {
               this.showGaiyaAnimation();
               this._animation_gaiya.gotoAndStop(1);
               this.gaiyaDialogShi_2();
            }
         }
         else
         {
            this.showGaiyaAnimation();
            this.animationGaiyaShi_1();
         }
      }
      
      private function animationGaiyaShi_1() : void
      {
         LevelManager.closeMouseEvent();
         this._animation_gaiya.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(_animation_gaiya.currentFrame >= 75)
            {
               _animation_gaiya.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               _animation_gaiya.gotoAndStop(75);
               gaiyaDialogShi_1();
            }
         });
         this._animation_gaiya.gotoAndPlay(1);
         MapManager.currentMap.libManager.getSound("sound_gaiya_hou").play();
      }
      
      private function gaiyaDialogShi_1() : void
      {
         NpcDialog.show(NPC.LAOKE_LEIDE,["恩，不错，经历了前两轮的特训，我感觉到了你的进步，你体内澎湃的能量仿佛随时要迸发出来！"],["是的，我感觉浑身充满能量！"],[function():void
         {
            NpcDialog.show(NPC.LAOKE_LEIDE,["哼，还没到满足的时候，你还不能真正控制住自己的力量，一旦遇到强敌，这是非常危险的！"],["到底怎么样才能真正控制这股能量？"],[function():void
            {
               NpcDialog.show(NPC.LAOKE_LEIDE,["很遗憾，能量控制并非我所擅长。"],["那我该怎么办？！"],[function():void
               {
                  NpcDialog.show(NPC.LAOKE_LEIDE,["臭小子，急什么？我自然有办法让你体会到这种感觉。哼哼！要说力量，最为强悍的还是龙族，尤其是龙族的王子哈莫雷特！"],["龙族？你是说龙王子哈莫？"],[function():void
                  {
                     TasksManager.setProStatus(634,0,true);
                     LevelManager.closeMouseEvent();
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("gaiya_hamoleite_laokemengde"),gaiyaDialogShi_2);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private function gaiyaDialogShi_2() : void
      {
         NpcDialog.show(NPC.LAOKE_LEIDE,["几年前，我和他打了一架，他对于力量的掌握已经到了极致！"],["那……你打败他了？"],[function():void
         {
            NpcDialog.show(NPC.LAOKE_LEIDE,["当然！……当然是我输了……不许提这件事！我要说的是关于力量的控制！"],["好吧……我们谈关于力量的事……"],[function():void
            {
               NpcDialog.show(NPC.LAOKE_LEIDE,["龙族的力量是与生俱来的，但是他们对于力量的控制才是强大的关键所在！"],["也就是说，如果我能掌握我的力量，我也能变得更加强大？！"],[function():void
               {
                  NpcDialog.show(NPC.LAOKE_LEIDE,["是的，完全正确！现在，我要将我记忆空间中的哈莫雷特召唤出来，你准备好了吗？！"],["来吧，我什么都不怕！"],[function():void
                  {
                     LevelManager.closeMouseEvent();
                     TasksManager.setProStatus(634,1,true);
                     animationGaiyaShi_2();
                  }]);
               }]);
            }]);
         }]);
      }
      
      private function animationGaiyaShi_2() : void
      {
         this._animation_gaiya.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(_animation_gaiya.currentFrame == 180)
            {
               showHamoleite();
            }
            if(_animation_gaiya.currentFrame == 230)
            {
               _animation_gaiya.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               _animation_gaiya.gotoAndStop(230);
               gaiyaDialogShi_3();
            }
         });
         this._animation_gaiya.gotoAndPlay(136);
      }
      
      private function gaiyaDialogShi_3() : void
      {
         NpcDialog.show(NPC.LAOKE_LEIDE,["如果你能以0xFF0000石破惊天且打出致命一击0xFFFFFF击败它，那么你就能领悟天印的奥义！！"],["来吧！没有什么可以阻挡我前进的道路！","还是让我再准备一下吧……"],[function():void
         {
            LevelManager.closeMouseEvent();
            _animation_gaiya.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
            {
               if(_animation_gaiya.currentFrame == _animation_gaiya.totalFrames)
               {
                  _animation_gaiya.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  DisplayUtil.removeForParent(_animation_gaiya);
                  enabledHamoleiteClick(true);
                  LevelManager.openMouseEvent();
               }
            });
            _animation_gaiya.gotoAndPlay(231);
         },function():void
         {
            destroyHamoleite();
            onCancelGaiya();
         }]);
      }
      
      private function showHamoleite() : void
      {
         this._animation_hamoleite = MapManager.currentMap.libManager.getMovieClip("animation_hamoleite");
         this._animation_hamoleite.x = 215;
         this._animation_hamoleite.y = 165;
         conLevel.addChild(this._animation_hamoleite);
         this._animation_hamoleite.addEventListener(Event.ENTER_FRAME,this.onEnterHamoleite);
         this._animation_hamoleite.gotoAndPlay(1);
      }
      
      private function destroyHamoleite() : void
      {
         if(this._animation_hamoleite)
         {
            this._animation_hamoleite.removeEventListener(Event.ENTER_FRAME,this.onEnterHamoleite);
            this._animation_hamoleite.removeEventListener(MouseEvent.CLICK,this.onClickHamoleite);
            DisplayUtil.removeForParent(this._animation_hamoleite);
            this._animation_hamoleite = null;
         }
      }
      
      private function onEnterHamoleite(param1:Event) : void
      {
         var e:Event = param1;
         if(this._animation_hamoleite.currentFrame == this._animation_hamoleite.totalFrames)
         {
            this._animation_hamoleite.removeEventListener(Event.ENTER_FRAME,this.onEnterHamoleite);
            this._animation_hamoleite.gotoAndStop(this._animation_hamoleite.totalFrames);
            if(this._isShowHamoleiteDialog)
            {
               NpcDialog.show(NPC.LAOKE_LEIDE,["如果你能以0xFF0000石破惊天且打出致命一击0xFFFFFF击败它，那么你就能领悟天印的奥义！！"],["来吧！没有什么可以阻挡我前进的道路！","还是让我再准备一下吧……"],[function():void
               {
                  enabledHamoleiteClick(true);
                  LevelManager.openMouseEvent();
               },function():void
               {
                  destroyHamoleite();
                  onCancelGaiya();
               }]);
            }
         }
      }
      
      private function enabledHamoleiteClick(param1:Boolean) : void
      {
         if(this._animation_hamoleite)
         {
            if(param1)
            {
               this._animation_hamoleite.buttonMode = true;
               this._animation_hamoleite.addEventListener(MouseEvent.CLICK,this.onClickHamoleite);
            }
            else
            {
               this._animation_hamoleite.removeEventListener(MouseEvent.CLICK,this.onClickHamoleite);
            }
         }
      }
      
      private function onClickHamoleite(param1:Event) : void
      {
         if(GaiyaTrainController.checkForTrain())
         {
            FightManager.fightWithBoss("哈莫雷特",5);
         }
      }
      
      private function onGaiyaFightWin_3(param1:Event) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onGaiyaFightWin_3);
         SocketConnection.addCmdListener(CommandID.M_2149,this.onGaiyaEffect_3);
         SocketConnection.send(CommandID.M_2149);
      }
      
      private function onGaiyaEffect_3(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffect_3);
         var _loc2_:GaiyaEffectInfo = param1.data as GaiyaEffectInfo;
         if(_loc2_.effects.indexOf(3) == -1)
         {
            this.showHamoleite();
            this.enabledHamoleiteClick(true);
            this.setGaiyaTrainBtn(false);
            NpcDialog.show(NPC.LAOKE_LEIDE,["不！这是错误的！必须0xFF0000以石破天惊且打出致命一击0xFFFFFF击败它！"],["好！我知道了！"]);
         }
         else
         {
            TasksManager.setProStatus(634,2,true);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("gaiya_shipotianjing"));
         }
      }
      
      private function initSPTBoss() : void
      {
         this._sptBtn = conLevel["sptBtn"];
         this._sptBoss = animatorLevel["sptBoss"];
         this._sptBtn.addEventListener(MouseEvent.CLICK,this.onSptBtn);
         this._sptBoss.gotoAndStop(1);
         this._stoneBtn = conLevel["stoneBtn"];
         this._tipMC = MapManager.currentMap.libManager.getSprite("guizheAlarm");
         this._tipCloseBtn = this._tipMC["tipCloseBtn"];
         this._tipCloseBtn.addEventListener(MouseEvent.CLICK,this.onCloseTip);
         this._stoneBtn.addEventListener(MouseEvent.CLICK,this.onShowTip);
         ToolTipManager.add(conLevel["stoneBtn"],"规则掌控者");
      }
      
      private function destroySPT() : void
      {
         if(this._tipCloseBtn)
         {
            this._tipCloseBtn.removeEventListener(MouseEvent.CLICK,this.onCloseTip);
            this._tipCloseBtn = null;
         }
         if(this._stoneBtn)
         {
            this._stoneBtn.removeEventListener(MouseEvent.CLICK,this.onShowTip);
            this._stoneBtn = null;
         }
         if(this._sptBtn)
         {
            this._sptBtn.removeEventListener(MouseEvent.CLICK,this.onSptBtn);
            this._sptBtn = null;
         }
         if(this._sptBoss)
         {
            this._sptBoss.removeEventListener(Event.ENTER_FRAME,this.enterHandler);
            this._sptBoss = null;
         }
      }
      
      private function onShowTip(param1:MouseEvent) : void
      {
         topLevel.addChild(this._tipMC);
      }
      
      private function onCloseTip(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._tipMC,false);
      }
      
      private function onSptBtn(param1:MouseEvent) : void
      {
         this._sptBtn.removeEventListener(MouseEvent.CLICK,this.onSptBtn);
         this._sptBoss.addEventListener(Event.ENTER_FRAME,this.enterHandler);
         this._sptBoss.gotoAndPlay(2);
      }
      
      private function enterHandler(param1:Event) : void
      {
         if(this._sptBoss.currentFrame == this._sptBoss.totalFrames)
         {
            this._sptBoss.removeEventListener(Event.ENTER_FRAME,this.enterHandler);
            this.animatorLevel["keMc"].gotoAndPlay(2);
            this.conLevel["petmc"].addEventListener(MouseEvent.CLICK,this.onSptHandler);
            ToolTipManager.add(conLevel["petmc"],"劳克蒙德");
            conLevel["petmc"].buttonMode = true;
         }
      }
      
      private function onSptHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var date:Date = SystemTimerManager.sysDate;
         var hours:uint = date.getHours();
         switch(hours)
         {
            case 11:
               this._sptType = 0;
               NpcDialog.show(NPC.LAOKE_LEIDE,["我才是真正的规则掌控者！\n在0xff0000愈合领域0xffffff中，每回合都会恢复10%的体力值，如果能在我的0xff0000愈合领域0xffffff中战胜我，那么我将成为你忠实的伙伴！"],["我要战胜你，让你成为我的伙伴！","等我变得更加强大后再来找你！"],[function():void
               {
                  f();
                  FightManager.fightWithBoss("劳克蒙德",_sptType);
                  _hasFightSPTBoss = true;
               }]);
               break;
            case 14:
               this._sptType = 1;
               NpcDialog.show(NPC.LAOKE_LEIDE,["我才是真正的规则掌控者！\n在0xff0000极限领域0xffffff中，每回合我们都会受到固定伤害，如果能在我的0xff0000极限领域0xffffff中战胜我，那么我将成为你忠实的伙伴！"],["我要战胜你，让你成为我的伙伴！","等我变得更加强大后再来找你！"],[function():void
               {
                  f();
                  FightManager.fightWithBoss("劳克蒙德",_sptType);
                  _hasFightSPTBoss = true;
               }]);
               break;
            case 19:
               this._sptType = 2;
               NpcDialog.show(NPC.LAOKE_LEIDE,["我才是真正的规则掌控者！\n只要身处0xff0000能量领域0xffffff中，我们的所有攻击都会被放大化，如果能在我的0xff0000能量领域0xffffff中战胜我，那么我将成为你忠实的伙伴！"],["我要战胜你，让你成为我的伙伴！","等我变得更加强大后再来找你！"],[function():void
               {
                  f();
                  FightManager.fightWithBoss("劳克蒙德",_sptType);
                  _hasFightSPTBoss = true;
               }]);
               break;
            default:
               NpcDialog.show(NPC.LAOKE_LEIDE,["谁敢打扰我睡觉？！赶快离开我的领地！我现在是不会接受你的挑战的！"],["知道了！"]);
               this._sptType = -1;
               _hasFightSPTBoss = false;
         }
      }
      
      private function f() : void
      {
         EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,this.onNoHandler);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOver);
      }
      
      private function onNoHandler(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,this.onNoHandler);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOver);
      }
      
      private function onFightOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOver);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.LAOKE_LEIDE,["看来你已经可以从容应对我的领域规则了，好吧，按照约定，我会成为你的伙伴！"],["让我们一起努力吧！"]);
         }
         else
         {
            NpcDialog.show(NPC.LAOKE_LEIDE,["你还需要多多修炼啊，凭你现在的能力是无法击败我强大的领域规则的！"],["下次我一定要让你成为我的伙伴！"]);
         }
         _hasFightSPTBoss = false;
      }
      
      override public function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.FIGHT_NPC_MONSTER,this.onStartFightWithOgre);
         getDefinitionByName("com.robot.app2.control.PeoplesGaiyaActionController").destroy();
         Task618.destroy();
         ToolTipManager.remove(conLevel["gaiyaTrain"]);
         conLevel["gaiyaTrain"].removeEventListener(MouseEvent.CLICK,this.onTrainClick);
         if(this._tipCloseBtn)
         {
            this._tipCloseBtn.removeEventListener(MouseEvent.CLICK,this.onCloseTip);
         }
         if(this._stoneBtn)
         {
            this._stoneBtn.removeEventListener(MouseEvent.CLICK,this.onShowTip);
         }
         if(this._sptBtn)
         {
            this._sptBtn.removeEventListener(MouseEvent.CLICK,this.onSptBtn);
         }
         if(this._sptBoss)
         {
            this._sptBoss.removeEventListener(Event.ENTER_FRAME,this.enterHandler);
         }
         if(this._gaiyaTrainPanel)
         {
            this._gaiyaTrainPanel.destroy();
            this._gaiyaTrainPanel = null;
         }
         this.setGaiyaTrainBtn(false);
         this.destroyGaiyaTrain();
         this.destroySPT();
      }
   }
}
