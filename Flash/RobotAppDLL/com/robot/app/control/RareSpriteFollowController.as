package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class RareSpriteFollowController
   {
      
      private static var _instance:com.robot.app.control.RareSpriteFollowController;
       
      
      private var curShootMc:MovieClip;
      
      public function RareSpriteFollowController()
      {
         super();
      }
      
      public static function get instance() : com.robot.app.control.RareSpriteFollowController
      {
         return _instance = _instance || new com.robot.app.control.RareSpriteFollowController();
      }
      
      public function hideAnimationMC() : void
      {
         this.animationMC.visible = false;
      }
      
      public function start() : void
      {
         var boo:Boolean = false;
         (MapManager.currentMap.controlLevel["task1330mc"] as MovieClip).visible = false;
         (MapManager.currentMap.controlLevel["task1320mc"] as MovieClip).visible = false;
         BitBuffSetClass.getBitSet([22417],function(param1:Array):void
         {
            var m8:TaskMod = null;
            var m9:TaskMod = null;
            var arr:Array = param1;
            boo = arr[0];
            if(boo == true)
            {
               KTool.hideMapAllPlayerAndMonster();
               (MapManager.currentMap.controlLevel["mc1"] as MovieClip).visible = false;
               (MapManager.currentMap.controlLevel["mc2"] as MovieClip).visible = false;
               (MapManager.currentMap.controlLevel["mc3"] as MovieClip).visible = false;
               (MapManager.currentMap.controlLevel["mc4"] as MovieClip).visible = false;
               (MapManager.currentMap.controlLevel["preAnimationMc"] as MovieClip).visible = true;
               m8 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[animationMC,3,"mc3"]);
               m9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["看来比达尔是把精灵封印到冰柱里了！让我想一下到底该怎么解救他们！ "],["（点击射击，解救精灵）"]);
               TaskDiaLogManager.single.playStory([m8,m9],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
                  MainManager.actorModel.x = 500;
                  MainManager.actorModel.y = 500;
                  (MapManager.currentMap.controlLevel["mc1"] as MovieClip).visible = true;
                  (MapManager.currentMap.controlLevel["mc2"] as MovieClip).visible = true;
                  (MapManager.currentMap.controlLevel["mc3"] as MovieClip).visible = true;
                  (MapManager.currentMap.controlLevel["mc4"] as MovieClip).visible = true;
                  (MapManager.currentMap.controlLevel["preAnimationMc"] as MovieClip).visible = false;
                  addEvents();
               });
            }
            else
            {
               (MapManager.currentMap.controlLevel["mc1"] as MovieClip).visible = false;
               (MapManager.currentMap.controlLevel["mc2"] as MovieClip).visible = false;
               (MapManager.currentMap.controlLevel["mc3"] as MovieClip).visible = false;
               (MapManager.currentMap.controlLevel["mc4"] as MovieClip).visible = false;
               (MapManager.currentMap.controlLevel["preAnimationMc"] as MovieClip).visible = false;
               (MapManager.currentMap.controlLevel["rareSpriteBtn"] as MovieClip).buttonMode = true;
               (MapManager.currentMap.controlLevel["rareSpriteBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,function():void
               {
                  (MapManager.currentMap.controlLevel["rareSpriteBtn"] as MovieClip).removeEventListener(MouseEvent.CLICK,arguments.callee);
                  (MapManager.currentMap.controlLevel["mc1"] as MovieClip).visible = false;
                  (MapManager.currentMap.controlLevel["mc2"] as MovieClip).visible = false;
                  (MapManager.currentMap.controlLevel["mc3"] as MovieClip).visible = false;
                  (MapManager.currentMap.controlLevel["mc4"] as MovieClip).visible = false;
                  (MapManager.currentMap.controlLevel["preAnimationMc"] as MovieClip).visible = true;
                  KTool.hideMapAllPlayerAndMonster();
                  (MapManager.currentMap.controlLevel["rareSpriteBtn"] as MovieClip).visible = false;
                  TaskDiaLogManager.single.playStory(prevStroy,function():void
                  {
                     SocketConnection.send(1022,86069810);
                     SocketConnection.send(42019,22417,1);
                     (MapManager.currentMap.controlLevel["rareSpriteBtn"] as MovieClip).visible = true;
                     BitBuffSetClass.setBitSet([22417],[1],function():void
                     {
                        KTool.showMapAllPlayerAndMonster();
                        hideAnimationMC();
                        (MapManager.currentMap.controlLevel["mc1"] as MovieClip).visible = true;
                        (MapManager.currentMap.controlLevel["mc2"] as MovieClip).visible = true;
                        (MapManager.currentMap.controlLevel["mc3"] as MovieClip).visible = true;
                        (MapManager.currentMap.controlLevel["mc4"] as MovieClip).visible = true;
                        (MapManager.currentMap.controlLevel["preAnimationMc"] as MovieClip).visible = false;
                        addEvents();
                     });
                  });
               });
            }
         });
      }
      
      private function addEvents() : void
      {
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onShootEndHander);
         (MapManager.currentMap.controlLevel["rareSpriteBtn"] as MovieClip).buttonMode = true;
         (MapManager.currentMap.controlLevel["rareSpriteBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onOpenExchangeClickHandler);
         ToolTipManager.add(MapManager.currentMap.controlLevel["mc1"],"点击射击，击碎冰柱，解救精灵");
         ToolTipManager.add(MapManager.currentMap.controlLevel["mc2"],"点击射击，击碎冰柱，解救精灵");
         ToolTipManager.add(MapManager.currentMap.controlLevel["mc3"],"点击射击，击碎冰柱，解救精灵");
         ToolTipManager.add(MapManager.currentMap.controlLevel["mc4"],"点击射击，击碎冰柱，解救精灵");
      }
      
      protected function onOpenExchangeClickHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("RareSpriteFollowPanel"));
      }
      
      private function onShootEndHander(param1:AimatEvent) : void
      {
         if(param1.info.userID != MainManager.actorID)
         {
            return;
         }
         SocketConnection.send(1022,86069811);
         var _loc2_:Point = new Point(param1.info.endPos.x,param1.info.endPos.y);
         var _loc3_:MovieClip = MapManager.currentMap.controlLevel["mc1"];
         var _loc4_:MovieClip = MapManager.currentMap.controlLevel["mc2"];
         var _loc5_:MovieClip = MapManager.currentMap.controlLevel["mc3"];
         var _loc6_:MovieClip = MapManager.currentMap.controlLevel["mc4"];
         if(_loc3_.hitTestPoint(_loc2_.x,_loc2_.y))
         {
            if((_loc3_["bloodMc"]["perMC"] as MovieClip).currentFrame == 3)
            {
               this.curShootMc = _loc3_;
               SocketConnection.addCmdListener(42042,this.onSocketShootIceCompleteHandler);
               SocketConnection.send(42042);
            }
            (_loc3_["bloodMc"]["perMC"] as MovieClip).nextFrame();
         }
         if(_loc4_.hitTestPoint(_loc2_.x,_loc2_.y))
         {
            if((_loc4_["bloodMc"]["perMC"] as MovieClip).currentFrame == 3)
            {
               this.curShootMc = _loc4_;
               SocketConnection.addCmdListener(42042,this.onSocketShootIceCompleteHandler);
               SocketConnection.send(42042);
            }
            (_loc4_["bloodMc"]["perMC"] as MovieClip).nextFrame();
         }
         if(_loc5_.hitTestPoint(_loc2_.x,_loc2_.y))
         {
            if((_loc5_["bloodMc"]["perMC"] as MovieClip).currentFrame == 3)
            {
               this.curShootMc = _loc5_;
               SocketConnection.addCmdListener(42042,this.onSocketShootIceCompleteHandler);
               SocketConnection.send(42042);
            }
            (_loc5_["bloodMc"]["perMC"] as MovieClip).nextFrame();
         }
         if(_loc6_.hitTestPoint(_loc2_.x,_loc2_.y))
         {
            if((_loc6_["bloodMc"]["perMC"] as MovieClip).currentFrame == 3)
            {
               this.curShootMc = _loc6_;
               SocketConnection.addCmdListener(42042,this.onSocketShootIceCompleteHandler);
               SocketConnection.send(42042);
            }
            (_loc6_["bloodMc"]["perMC"] as MovieClip).nextFrame();
         }
      }
      
      private function shootIceCompleteHandler() : void
      {
         SocketConnection.addCmdListener(42042,this.onSocketShootIceCompleteHandler);
         SocketConnection.send(42042);
      }
      
      private function onSocketShootIceCompleteHandler(param1:SocketEvent) : void
      {
         var byte:ByteArray;
         var reagion:uint = 0;
         var monsterName:String = null;
         var movieIndex:uint = 0;
         var m3:TaskMod = null;
         var m1:TaskMod = null;
         var m2:TaskMod = null;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(42042,this.onSocketShootIceCompleteHandler);
         byte = event.data as ByteArray;
         reagion = byte.readUnsignedInt();
         monsterName = "";
         switch(reagion)
         {
            case 843:
               monsterName = "波德尔";
               movieIndex = 5;
               break;
            case 844:
               monsterName = "艾斯菲亚";
               movieIndex = 4;
               break;
            case 845:
               monsterName = "文杰尔";
               movieIndex = 3;
               break;
            case 846:
               monsterName = "杰莱卡";
               movieIndex = 2;
               break;
            case 847:
               monsterName = "比达尔";
               movieIndex = 6;
         }
         if(reagion == 847)
         {
            m3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BIDAER,["可恶！没想到你居然能够找到我！但是你别忘了，我可是神算子，你敢接受我的挑战吧！ "],["放马过来吧！"]);
            TaskDiaLogManager.single.playStory([m3],function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("StoneKnifeClothPanel"));
            });
         }
         else if(reagion == 843 || reagion == 844 || reagion == 845 || reagion == 846)
         {
            m1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.curShootMc,movieIndex,"mc" + movieIndex]);
            m2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太棒了！快跟我走吧！神算子比达尔是个坏家伙！我带你们回家！ "],["我不相信你！让我看看你的实力！"]);
            TaskDiaLogManager.single.playStory([m1,m2],function():void
            {
               FightManager.fightNoMapBoss(monsterName,reagion);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverOneBossHandler);
            });
         }
      }
      
      public function onFightBiDaErHandler() : void
      {
         var m1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BIDAER,["可恶！我要让你知道我的厉害！我是聪明的神算子比达尔 "],["我不会怕你！"]);
         TaskDiaLogManager.single.playStory([m1],function():void
         {
            FightManager.fightNoMapBoss("比达尔",847);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverBiDaErHandler);
         });
      }
      
      private function onFightOverBiDaErHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverBiDaErHandler);
      }
      
      private function onFightOverTwoBossHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverTwoBossHandler);
      }
      
      private function onFightOverOneBossHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverOneBossHandler);
         if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
         }
      }
      
      public function loosBidaErbackStartState() : void
      {
         var m1:TaskMod;
         var m2:TaskMod;
         (MapManager.currentMap.controlLevel["mc1"] as MovieClip).visible = false;
         (MapManager.currentMap.controlLevel["mc2"] as MovieClip).visible = false;
         (MapManager.currentMap.controlLevel["mc3"] as MovieClip).visible = false;
         (MapManager.currentMap.controlLevel["mc4"] as MovieClip).visible = false;
         (MapManager.currentMap.controlLevel["preAnimationMc"] as MovieClip).visible = true;
         m1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BIDAER,["怎么样！知道我的厉害了吧。我劝你乖乖的离开这里！ "],["我是不会放弃的！"]);
         m2 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,3,"mc3"]);
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory([m1,m2],function():void
         {
            KTool.showMapAllPlayerAndMonster();
            (MapManager.currentMap.controlLevel["mc1"] as MovieClip).visible = true;
            (MapManager.currentMap.controlLevel["mc2"] as MovieClip).visible = true;
            (MapManager.currentMap.controlLevel["mc3"] as MovieClip).visible = true;
            (MapManager.currentMap.controlLevel["mc4"] as MovieClip).visible = true;
            (MapManager.currentMap.controlLevel["mc1"]["bloodMc"]["perMC"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc1"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc2"]["bloodMc"]["perMC"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc2"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc3"]["bloodMc"]["perMC"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc3"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc4"]["bloodMc"]["perMC"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc4"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["preAnimationMc"] as MovieClip).visible = false;
         });
      }
      
      public function backStartState() : void
      {
         var m1:TaskMod;
         var m2:TaskMod;
         (MapManager.currentMap.controlLevel["mc1"] as MovieClip).visible = false;
         (MapManager.currentMap.controlLevel["mc2"] as MovieClip).visible = false;
         (MapManager.currentMap.controlLevel["mc3"] as MovieClip).visible = false;
         (MapManager.currentMap.controlLevel["mc4"] as MovieClip).visible = false;
         (MapManager.currentMap.controlLevel["preAnimationMc"] as MovieClip).visible = true;
         m1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,3,"mc3"]);
         m2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["看来比达尔是把精灵封印到冰柱里了！让我想一下到底该怎么解救他们！ "],["（点击射击，解救精灵）"]);
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory([m1,m2],function():void
         {
            KTool.showMapAllPlayerAndMonster();
            (MapManager.currentMap.controlLevel["mc1"] as MovieClip).visible = true;
            (MapManager.currentMap.controlLevel["mc2"] as MovieClip).visible = true;
            (MapManager.currentMap.controlLevel["mc3"] as MovieClip).visible = true;
            (MapManager.currentMap.controlLevel["mc4"] as MovieClip).visible = true;
            (MapManager.currentMap.controlLevel["mc1"]["bloodMc"]["perMC"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc1"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc2"]["bloodMc"]["perMC"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc2"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc3"]["bloodMc"]["perMC"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc3"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc4"]["bloodMc"]["perMC"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["mc4"] as MovieClip).gotoAndStop(1);
            (MapManager.currentMap.controlLevel["preAnimationMc"] as MovieClip).visible = false;
         });
      }
      
      private function onSocketRequestTwoFightHandler(param1:SocketEvent) : void
      {
         var _loc5_:uint = 0;
         SocketConnection.removeCmdListener(42042,this.onSocketRequestTwoFightHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:String = "";
         switch(_loc3_)
         {
            case 848:
               _loc4_ = "波拉";
               _loc5_ = 5;
               break;
            case 849:
               _loc4_ = "尼尔";
               _loc5_ = 4;
               break;
            case 850:
               _loc4_ = "文文";
               _loc5_ = 3;
               break;
            case 851:
               _loc4_ = "杰雷";
               _loc5_ = 2;
               break;
            case 847:
               _loc4_ = "比达尔";
               _loc5_ = 6;
         }
         FightManager.fightNoMapBoss(_loc4_,_loc3_);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverTwoBossHandler);
      }
      
      protected function get prevStroy() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BIDAER,["小小赛尔，不要在这里逞能！凭什么说他们是稀有精灵！不管多稀有的精灵，我都得有！ "],["但是你不能全部霸占！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你现在把大批的稀有精灵全部掠走！他们是不会快乐的！ "],["哼！别说废话！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BIDAER,["我是神算子！我知道他们一定会乖乖听我的话的！我就是他们的主人！ "],["那我只能抢了！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BIDAER,["你不是很厉害嘛！我看看是你厉害还是我这个神算子厉害！ "],["我不会害怕你的！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BIDAER,["如果你能够战胜我，我愿赌服输，不仅仅把精灵们放了，而且以后你就是我的主人！ "],["我一定会胜利的！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,3,"mc3"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["看来比达尔是把精灵封印到冰柱里了！让我想一下到底该怎么解救他们！ "],["（点击射击，解救精灵）"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_];
      }
      
      private function get animationMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["preAnimationMc"] as MovieClip;
      }
   }
}
