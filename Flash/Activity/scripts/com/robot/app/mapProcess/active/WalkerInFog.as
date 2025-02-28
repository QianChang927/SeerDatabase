package com.robot.app.mapProcess.active
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.MapProcess_697;
   import com.robot.app.task.control.TaskController_846;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.manager.map.config.MapProcessConfig;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   
   public class WalkerInFog
   {
      
      public static var index:int = 0;
       
      
      private var _map:BaseMapProcess;
      
      private var stage:int;
      
      private var fairyIDArr:Array;
      
      private var fairyArr:Array;
      
      private var isStart:Boolean;
      
      private var currIndex:int = 0;
      
      private var pointArr:Array;
      
      private var petDialogArr:Array;
      
      private var inTask846:Boolean = false;
      
      private var currentTimeStage:int;
      
      private var _activeTime:Array;
      
      public function WalkerInFog(param1:BaseMapProcess)
      {
         this.fairyArr = [];
         this.pointArr = [new Point(250,358),new Point(320,460),new Point(674,360),new Point(807,347),new Point(787,295),new Point(682,408),new Point(575,464)];
         this.petDialogArr = [NPC.YILE,NPC.XIAOZHIZHU,NPC.MOKA,NPC.TUITE,NPC.XIAOXIAO,NPC.AIWEN,NPC.KUKA];
         this._activeTime = [new CronTimeVo("*","11-13","29-31","8","*","2014"),new CronTimeVo("*","11-13","1-4","9","*","2014")];
         super();
         this._map = param1;
         this.currIndex = index;
         ++index;
         this.init();
      }
      
      private function init() : void
      {
         var t:uint = 0;
         t = setTimeout(function():void
         {
            clearTimeout(t);
            getNPC(1).addEventListener(MouseEvent.CLICK,onClickAiwen);
            var _loc1_:* = 1;
            while(_loc1_ < 8)
            {
               fairyArr.push(_map.depthLevel.removeChild(getFairy(_loc1_)));
               _loc1_++;
            }
            checkCurrentState();
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,checkCurrentState);
         },200);
      }
      
      private function get isInTask846() : Boolean
      {
         var _loc1_:int = int(TasksManager.getTaskStatus(TaskController_846.TASK_ID));
         if(_loc1_ == TasksManager.ALR_ACCEPT)
         {
            return true;
         }
         return false;
      }
      
      private function cleanTimer() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,this.checkCurrentState);
      }
      
      private function _clikcFlog(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.SEER,["看来前面雾气确实太大，一点都看不清楚，不知道里面究竟是什么样的！很有可能是莫弗克在捣鬼，哼哼，等到11:00—13:00这段时间看我来收拾你！"]);
      }
      
      private function checkCurrentState(param1:SocketEvent = null) : void
      {
         var date:Date = null;
         var e:SocketEvent = param1;
         if(this.isInTask846)
         {
            return;
         }
         if(!this.checkTime)
         {
            date = SystemTimerManager.sysDate;
            if(date.hours > 16)
            {
               this.cleanTimer();
            }
            this._map.btnLevel["flogMc"].addEventListener(MouseEvent.CLICK,this._clikcFlog);
            return;
         }
         if(this._map.btnLevel["flogMc"] != null && this._map.btnLevel["flogMc"].parent != null)
         {
            this._map.btnLevel["flogMc"].parent.removeChild(this._map.btnLevel["flogMc"]);
         }
         ToolBarController.showOrHideAllUser(false);
         if(e == null)
         {
            this.getNPC(1).gotoAndStop(2);
         }
         else
         {
            (this._map as MapProcess_697).resetFrog();
            MainManager.actorModel.x = 185;
            MainManager.actorModel.y = 136;
         }
         SocketConnection.addCmdListener(CommandID.WALKER_IN_FROG_MAP,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.WALKER_IN_FROG_MAP,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            stage = _loc3_.readUnsignedInt();
            if(_loc3_.readUnsignedInt())
            {
               isStart = true;
            }
            else
            {
               isStart = false;
            }
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            fairyIDArr = [];
            var _loc5_:int = 0;
            while(_loc5_ < _loc4_)
            {
               fairyIDArr.push(_loc3_.readUnsignedInt());
               _loc5_++;
            }
            setState();
            cleanTimer();
         });
         SocketConnection.send(CommandID.WALKER_IN_FROG_MAP);
      }
      
      private function setState() : void
      {
         var _loc2_:MovieClip = null;
         var _loc1_:int = 0;
         while(_loc1_ < this.fairyIDArr.length)
         {
            _loc2_ = this.fairyArr[this.fairyIDArr[_loc1_] - 1];
            if(!_loc2_)
            {
               break;
            }
            _loc2_.buttonMode = true;
            _loc2_.addEventListener(MouseEvent.CLICK,this.fightWithFairy);
            this._map.depthLevel.addChild(_loc2_);
            _loc1_++;
         }
         switch(this.stage)
         {
            case 1:
               this._map.conLevel["flower2"].mouseEnabled = false;
               this._map.conLevel["flower3"].mouseEnabled = false;
               break;
            case 2:
               this._map.conLevel["flower3"].mouseEnabled = false;
               (this._map as MapProcess_697).cleanHalfFrog();
               break;
            case 3:
               (this._map as MapProcess_697).cleanFrog();
               MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.walkHandler);
         }
      }
      
      private function walkHandler(param1:RobotEvent) : void
      {
         var evt:RobotEvent = param1;
         if(MainManager.actorModel.pos.x > 700 && MainManager.actorModel.pos.y < 280)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.walkHandler);
            if(!this._map)
            {
               return;
            }
            AnimateManager.playMcAnimate(this._map.topLevel["newnpcdialog"],1,"mc",function():void
            {
               NpcDialog.show(NPC.SEER,["原来罪魁祸首在这里，哼哼，你以为凭这些大雾就能掩饰你邪恶的诡计吗？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.MOFUKE,["废话少说！迷雾森林可不是你们想来就来，想走就走的地方！就凭你这小样，根本就不可能是我的对手！"],["哈哈！口气不小，先过我这关再说吧！"],[function():void
                  {
                     FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                     FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchComplete);
                     FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,onCatchComplete);
                     FightManager.fightWithBoss("迷路精灵",8);
                  }]);
               });
            });
         }
      }
      
      private function onFightComplete(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightComplete);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,this.onCatchComplete);
         NpcDialog.show(NPC.MOFUKE,["小子，这次算你走运，现在就让你领教一下迷雾森林真正的恐怖吧！哈哈哈！"],["这家伙又想干嘛？"],[function():void
         {
            playNpcDialog();
         }]);
      }
      
      private function playNpcDialog() : void
      {
         var mp:MapModel = MapManager.currentMap;
         DebugTrace.show(this._map);
         AnimateManager.playMcAnimate(mp.topLevel["newnpcdialog"],2,"mc",function():void
         {
            (MapProcessConfig.currentProcessInstance as MapProcess_697).resetFrog();
            MainManager.actorModel.x = 185;
            MainManager.actorModel.y = 136;
            NpcDialog.show(NPC.MOFUKE,["哎呀！不好，看来我是小看这家伙了，可恶的家伙！下次我一定会不放过它！"],null,null,false,function():void
            {
            });
         });
      }
      
      private function onCatchComplete(param1:PetFightEvent) : void
      {
         var mp:MapModel;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightComplete);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,this.onCatchComplete);
         mp = MapManager.currentMap;
         AnimateManager.playMcAnimate(mp.topLevel["newnpcdialog"],3,"mc",function():void
         {
            NpcDialog.show(NPC.MOFUKE,["你刚刚只是获得我的分身而已，别以为我会傻到这个地步，迷雾森林没你想象的这么简单！哈哈，有缘再见吧！"],["你…居然欺骗我！！！！"],[function():void
            {
               (MapProcessConfig.currentProcessInstance as MapProcess_697).resetFrog();
               MainManager.actorModel.x = 185;
               MainManager.actorModel.y = 136;
               NpcDialog.show(NPC.SEER,["不好，雾气又开始弥漫了，我还是先离开这个鬼地方再说！下次我不会轻易被你骗到的！"],null,null,false,function():void
               {
               });
            }]);
         });
      }
      
      private function fightWithFairy(param1:MouseEvent) : void
      {
         var region:int = 0;
         var e:MouseEvent = param1;
         var str:String = e.currentTarget.name as String;
         region = int(str.charAt(str.length - 1));
         (this._map as MapProcess_697).PauseLightTimer();
         MainManager.actorModel.moveAndAction(this.pointArr[region - 1],function():void
         {
            NpcDialog.show(petDialogArr[region - 1],["好难受啊！我完全看不清方向了！谁能带我离开这个鬼地方啊！"],["可怜的小家伙，我这就带你走！"],[function():void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFairyComplete);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFairyComplete);
               FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchFairyComplete);
               FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,onCatchFairyComplete);
               FightManager.fightWithBoss("迷路精灵",region);
            }]);
         });
      }
      
      private function onFightFairyComplete(param1:PetFightEvent) : void
      {
         var point:Point = null;
         var passLv:Boolean = false;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,this.onCatchFairyComplete);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightFairyComplete);
         MapManager.currentMap.typeLevel["frog1"].visible = false;
         MapManager.currentMap.typeLevel["frog2"].visible = false;
         MapManager.currentMap.makeMapArray();
         passLv = false;
         if(this.fairyIDArr.length == 1)
         {
            ++this.stage;
            passLv = true;
         }
         switch(this.stage)
         {
            case 1:
               point = new Point(210,200);
               break;
            case 2:
               point = new Point(350,415);
               break;
            case 3:
               point = new Point(785,303);
         }
         LevelManager.closeMouseEvent();
         NpcDialog.show(NPC.SEER,["哎呀！不好，看来光亮之芯的功效已经完全消失，这下可糟了！"],null,null,false,function():void
         {
            LevelManager.closeMouseEvent();
            MainManager.actorModel.moveAndAction(point,function():void
            {
               if(stage == 1)
               {
                  MapManager.currentMap.typeLevel["frog1"].visible = true;
                  MapManager.currentMap.typeLevel["frog2"].visible = true;
               }
               else if(stage == 2)
               {
                  MapManager.currentMap.typeLevel["frog2"].visible = true;
               }
               MapManager.currentMap.makeMapArray();
               if(passLv)
               {
                  if(stage == 2)
                  {
                     NpcDialog.show(NPC.SEER,["看来这一地带都已经探索完毕了，相信在迷雾森林深处一定还有其他需要帮助的伙伴！"],["继续探索！"],[function():void
                     {
                        LevelManager.openMouseEvent();
                        MapManager.currentMap.controlLevel["guide" + stage].visible = true;
                     }]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.SEER,["看来这一地带都已经探索完毕了，相信在迷雾森林最深处一定可以找到莫弗克的踪迹！"],["看我不好好教训你！"],[function():void
                     {
                     }]);
                  }
               }
               else
               {
                  NpcDialog.show(NPC.SEER,["可恶，迷雾森林果然名不虚传，看来没有光亮之芯果然是寸步难行啊！"],["继续收集光亮之芯！"],[function():void
                  {
                     LevelManager.openMouseEvent();
                     if(stage != 3)
                     {
                        MapManager.currentMap.controlLevel["guide" + stage].visible = true;
                     }
                  }]);
               }
            });
         });
      }
      
      private function onCatchFairyComplete(param1:PetFightEvent) : void
      {
         var point:Point = null;
         var passLv:Boolean = false;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,this.onCatchFairyComplete);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightFairyComplete);
         MapManager.currentMap.typeLevel["frog1"].visible = false;
         MapManager.currentMap.typeLevel["frog2"].visible = false;
         MapManager.currentMap.makeMapArray();
         passLv = false;
         if(this.fairyIDArr.length == 1)
         {
            ++this.stage;
            passLv = true;
         }
         switch(this.stage)
         {
            case 1:
               point = new Point(210,200);
               break;
            case 2:
               point = new Point(350,415);
               break;
            case 3:
               point = new Point(785,303);
         }
         LevelManager.closeMouseEvent();
         NpcDialog.show(NPC.SEER,["太好了，继续拯救那些被困迷雾中的伙伴！"],["继续寻找迷失的精灵！"],[function():void
         {
            LevelManager.closeMouseEvent();
            MainManager.actorModel.moveAndAction(point,function():void
            {
               if(stage == 1)
               {
                  MapManager.currentMap.typeLevel["frog1"].visible = true;
                  MapManager.currentMap.typeLevel["frog2"].visible = true;
               }
               else if(stage == 2)
               {
                  MapManager.currentMap.typeLevel["frog2"].visible = true;
               }
               MapManager.currentMap.makeMapArray();
               if(passLv)
               {
                  if(stage == 2)
                  {
                     NpcDialog.show(NPC.SEER,["看来这一地带都已经探索完毕了，相信在迷雾森林深处一定还有其他需要帮助的伙伴！"],["继续探索！"],[function():void
                     {
                        LevelManager.openMouseEvent();
                        MapManager.currentMap.controlLevel["guide" + stage].visible = true;
                     }]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.SEER,["看来这一地带都已经探索完毕了，相信在迷雾森林最深处一定可以找到莫弗克的踪迹！"],["看我不好好教训你！"],[function():void
                     {
                     }]);
                  }
               }
               else
               {
                  NpcDialog.show(NPC.SEER,["可恶，迷雾森林果然名不虚传，看来没有光亮之芯果然是寸步难行啊！"],["继续收集光亮之芯！"],[function():void
                  {
                     LevelManager.openMouseEvent();
                     if(stage != 3)
                     {
                        MapManager.currentMap.controlLevel["guide" + stage].visible = true;
                     }
                  }]);
               }
            });
         }]);
      }
      
      private function getNPC(param1:int) : MovieClip
      {
         return this._map.depthLevel["npc_" + param1];
      }
      
      private function getFairy(param1:int) : MovieClip
      {
         return this._map.depthLevel["fairy_" + param1];
      }
      
      public function destroy() : void
      {
         var _loc2_:MovieClip = null;
         this.cleanTimer();
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.walkHandler);
         this.getNPC(1).removeEventListener(MouseEvent.CLICK,this.onClickAiwen);
         if(!this._map)
         {
            return;
         }
         var _loc1_:int = 0;
         while(_loc1_ < this.fairyArr.length)
         {
            _loc2_ = this.fairyArr[_loc1_];
            _loc2_.removeEventListener(MouseEvent.CLICK,this.fightWithFairy);
            if(_loc2_.parent)
            {
               _loc2_.parent.removeChild(_loc2_);
            }
            _loc1_++;
         }
         ToolBarController.showOrHideAllUser(true);
         this._map = null;
      }
      
      private function get checkTime() : Boolean
      {
         var _loc2_:CronTimeVo = null;
         var _loc1_:Date = SystemTimerManager.sysDate;
         for each(_loc2_ in this._activeTime)
         {
            if(_loc2_.isActive(SystemTimerManager.sysDate))
            {
               return true;
            }
         }
         return false;
      }
      
      private function onClickAiwen(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(this.isInTask846)
         {
            NpcDialog.show(NPC.AIWEN,["想参加活动，就先去完成任务0xff0000惊现！迷雾守护者0xffffff吧！"],["好！"],[function():void
            {
            }]);
            return;
         }
         this.getNPC(1).gotoAndStop(1);
         if(!this.checkTime)
         {
            NpcDialog.show(NPC.AIWEN,["呜呜呜….谁能来帮帮我啊！我和朋友们走散了！这么大的雾气，我不敢进去，怎么办..怎么办！"],["呀！埃闻你这是怎么了！"],[function():void
            {
               NpcDialog.show(NPC.AIWEN,["丹迪是我们最好的朋友，据说最近它一直为元素之星而烦恼，所以我们自发来这里寻找土元素之星的下落，想不到在这些大雾中迷失了方向！"],["哦…原来是这样，问题很严重啊！"],[function():void
               {
                  NpcDialog.show(NPC.AIWEN,["是啊！据说迷雾森林很可怕，莫弗克就是制造雾气的罪魁祸首！不过每天中午11:00—13:00这段时间是雾气最为稀薄的时刻！赛尔，你可一定要帮帮我啊！"],["恩，放心吧！我决定到时进去闯一闯！"]);
               }]);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.AIWEN,[MainManager.actorInfo.formatNick + "，现在正是进入迷雾森林的最佳时刻，如果你没有晶盐花中的0xff0000光亮之芯0xffffff是无法在大雾中前行的，不过也只能维持一段时间，这些神奇的植物就在我身边哦！"],["哇！这也太神奇了吧！"],[function():void
            {
               _map.conLevel["guide" + stage].visible = true;
            }]);
         }
      }
   }
}
