package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public class SealTaitanHammerController
   {
      
      private static var _controLevel:MovieClip;
      
      private static var _currentTask:Function;
      
      private static var _currentArr:Array;
      
      private static var task4NpcArr:Array = [NPC.QIAOTELUDE,NPC.WANGZHIHAMO];
      
      private static var taskDialogArr:Array = ["准备好了？我绝不会留情的，并非我要怎样，只是这火焰的力量！非凡物可以驾驭！","准备好了？我也真心希望你可以挑战成功我们，这样，仪式就可以顺利进行了！"];
      
      private static var _allGot:Boolean = false;
      
      private static var _bossDialogArr:Array = ["这里是瀚海之殿，六界之水，为我所控！拿去吧！这就是瀚海神令！","这里是地藏之殿，六界厚土，为我主宰！拿去吧！这就是地藏神令！","我们又见面了，最近感觉如何？我的神令你拿去吧！整个宇宙，本就是一片混沌。","感觉你又强大了不少，可是我越来越疲惫了，神令你拿去吧，记得正义永存！","如梦幻泡影，如露亦如电……神令于我，又有何用，拿去吧！"];
      
      private static var _bossNPCArr:Array = [NPC.HANHAIJIEWANG,NPC.EARTHKING,NPC.HUNDUNJIEWANG,NPC.SHIKONGJIEWANG,NPC.HUANJINGJIEWANG];
      
      private static var task1DialogNPCArr:Array = [NPC.LEIYI_EVO,NPC.BULAIKE_EVO,NPC.ZHAN_SHEN_GAI_YA,NPC.KAXIUSI_PERFECT,NPC.CHITONGMIUSI];
      
      private static var task1DialogAskArr:Array = [["亲爱的朋友，你知道我的第五技能是什么吗？","很好，你知道是谁邀请龙王子前来参战的吗？","非常棒，是谁在主持这场封印仪式？"],["你好，你知道一直跟随在我身边，那条龙的名字吗？","还算不错，现在是赛尔历多少年？","完美，在这最近一段时间，我曾在主线里单独对决过哪个精灵？"],["嘿！伙计！我的哥哥是？","嗯….我们战神联盟第一个开启完全体的是？","的确是我！哈哈！那你知道，我的专属特性是什么吗？"],["嘿嘿，看来你准备好了~我的属性是？","不错，不错，我们最初相遇是在哪里？","NICE！我还是很怀念那里的，知道现在哪个赛尔被抢走了自己的芯片吗？"],["我喜欢你自信的样子，我曾经有一把武器，这把武器的名字是？","曾经纵横赛尔号的反派组织叫什么？","这不由让我想到了自己的父亲……以及我那个可怜的哥哥…你还记得他吗？"]];
      
      private static var task1DialogQuestionArr:Array = [[["A.天崩雷鸣闪 ","B.无极风雷爆","C.极电千鸟断 ","D.万雷霹雳斩"],["A.罗杰","B. 赛小息","C.摩多","D. 乔特鲁德"],["A.王之哈莫","B.六界神王","C.泰坦","D.乔特鲁德"]],[["A.索兰特","B.索斯特","C.索雷特","D.索雷德"],["A.45年","B.46年","C.47年 ","D.48年"],["A.百鬼夜王","B.千夜死神","C.无极魔主","D.飞镰"]],[["A.瑞尔斯","B.米瑞斯","C.瑞斯德","D.瑞尔斯德"],["A.雷伊","B.布莱克","C.卡修斯","D.盖亚"],["A.骁"," B.袭","C.愤 "," D.以上三个都对"]],[["A.地面暗影 ","B.地面飞行","C.地面 ","D.次元"],["A.赫尔卡星 ","B.怀特星","C.暗影峭壁 ","D.飓风星云"],["A.贾斯汀 ","B.艾伯","C.赛小息 ","D.阿铁打"]],[["A.泰坦之锤"," B.极夜之镰","C.圣剑 ","D.幻光之剑 "],["A.黑暗议会 ","B.大暗黑天","C.无极天启 ","D.极夜之眼"],["A.耶里梅斯 ","B.伊洛维奇"]]];
      
      private static var _npcIndex:int;
      
      private static var _dialogIndex:int;
      
      private static var _mapId:uint;
      
      private static var task1DialogChioceArr:Array = [[[wrongChoice,trueChoice,wrongChoice,wrongChoice],[trueChoice,wrongChoice,wrongChoice,wrongChoice],[wrongChoice,wrongChoice,trueChoice,wrongChoice]],[[trueChoice,wrongChoice,wrongChoice,wrongChoice],[wrongChoice,wrongChoice,trueChoice,wrongChoice],[wrongChoice,trueChoice,wrongChoice,wrongChoice]],[[trueChoice,wrongChoice,wrongChoice,wrongChoice],[wrongChoice,wrongChoice,wrongChoice,trueChoice],[wrongChoice,wrongChoice,wrongChoice,trueChoice]],[[trueChoice,wrongChoice,wrongChoice,wrongChoice],[wrongChoice,trueChoice,wrongChoice,wrongChoice],[trueChoice,wrongChoice,wrongChoice,wrongChoice]],[[wrongChoice,wrongChoice,trueChoice,wrongChoice],[wrongChoice,trueChoice,wrongChoice,wrongChoice],[wrongChoice,trueChoice]]];
       
      
      public function SealTaitanHammerController()
      {
         super();
      }
      
      public static function gotoTask(param1:int) : void
      {
         switch(param1)
         {
            case 0:
               _currentTask = task1;
               changeMap(11132,1);
               break;
            case 1:
               _currentTask = task2;
               changeMap(11138);
               break;
            case 2:
               _currentTask = task3;
               changeMap(11132,2);
               break;
            case 3:
               _currentTask = task4;
               changeMap(11132,3);
         }
      }
      
      private static function changeMap(param1:int, param2:int = 1) : void
      {
         var id:int = param1;
         var j:int = param2;
         MapManager.changeMapWithCallback(id,function():void
         {
            _controLevel = MapManager.currentMap.controlLevel as MovieClip;
            _controLevel.gotoAndStop(j);
            _currentTask();
         });
      }
      
      private static function send(param1:int, param2:int, param3:Function = null) : void
      {
         var i:int = param1;
         var j:int = param2;
         var func:Function = param3;
         SocketConnection.sendByQueue(47273,[i,j],function():void
         {
            if(func != null)
            {
               func();
            }
         });
      }
      
      private static function refreshMap(param1:Array, param2:Function) : void
      {
         var arr:Array = param1;
         var func:Function = param2;
         KTool.getMultiValue(arr,function(param1:Array):void
         {
            if(func != null)
            {
               func(param1);
            }
         });
      }
      
      private static function task4() : void
      {
         _controLevel.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            var e:Event = param1;
            _controLevel.removeEventListener(Event.ENTER_FRAME,arguments.callee);
            _controLevel.boss_0.mouseChildren = false;
            _controLevel.boss_0.buttonMode = true;
            if(BitBuffSetClass.getState(23081) == 0)
            {
               CommonUI.addYellowArrow(_controLevel.boss_0,10,-40);
               _controLevel.boss_0.addEventListener(MouseEvent.CLICK,qiaokeClick);
            }
            else
            {
               refreshMap([2723],function(param1:Array):void
               {
                  var _loc2_:* = false;
                  var _loc3_:int = 0;
                  while(_loc3_ < 2)
                  {
                     _loc2_ = KTool.getBit(param1[0],_loc3_ + 5) == 0;
                     CommonUI.removeYellowArrow(_controLevel["boss_" + _loc3_]);
                     if(_loc2_)
                     {
                        CommonUI.addYellowArrow(_controLevel["boss_" + _loc3_],10,-40);
                        _controLevel["boss_" + _loc3_].addEventListener(MouseEvent.CLICK,onBossFightClick);
                     }
                     else
                     {
                        _controLevel["boss_" + _loc3_].removeEventListener(MouseEvent.CLICK,onBossFightClick);
                     }
                     _controLevel["boss_" + _loc3_].mouseChildren = false;
                     _controLevel["boss_" + _loc3_].buttonMode = _loc2_;
                     _loc3_++;
                  }
               });
            }
         });
      }
      
      private static function checkeAllWin() : void
      {
         refreshMap([2723],function(param1:Array):void
         {
            var play:PlayAnimationComponent = null;
            var a:Array = param1;
            var b:Boolean = true;
            var i:int = 0;
            while(i < 2)
            {
               if(KTool.getBit(a[0],5 + i) == 0)
               {
                  b = false;
               }
               i++;
            }
            if(b)
            {
               play = new PlayAnimationComponent("SealTaitanHammer_mapAnimate",function():void
               {
                  play.destroy();
                  ModuleManager.showAppModule("SealTaitanHammerMainPanel");
                  BonusController.showDelayBonus(1766);
                  BonusController.removeDelay(1766);
                  task4();
               },5);
            }
            else
            {
               task4();
               BonusController.showDelayBonus(1766);
            }
         });
      }
      
      private static function onBossFightClick(param1:MouseEvent) : void
      {
         var i:int = 0;
         var e:MouseEvent = param1;
         i = int(e.target.name.replace("boss_",""));
         NpcDialogNew_1._HasDanmu = false;
         NpcDialogNew_1.show(task4NpcArr[i],[taskDialogArr[i]],["我准备好了！","稍等一下。"],[function():void
         {
            NpcDialogNew_1._HasDanmu = true;
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _controLevel = MapManager.currentMap.controlLevel as MovieClip;
               _controLevel.gotoAndStop(3);
               task4();
            });
            BonusController.addDelay(1766);
            FightManager.fightNoMapBoss("",6490 + i,false,true,function():void
            {
               if(FightManager.isWin)
               {
                  checkeAllWin();
               }
            });
         }]);
      }
      
      private static function qiaokeClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var story:TaskStoryPlayer = new TaskStoryPlayer();
         story.useNewDialog = true;
         NpcDialogNew_1._HasDanmu = false;
         story.addDialog([NPC.QIAOTELUDE,["想从我们龙族手里，拿走任何东西，都不是一件容易的事情。"],["哦？是要考验我吗？"]]);
         story.addDialog([NPC.SEER,["我可不怕你们！"],["看来你很有信心."]]);
         story.addDialog([NPC.QIAOTELUDE,["虽然我们之前也算见过，但你这次来所求的龙族之火，非一般之物，稍有不慎，恐怕……"],["那我要怎么做？"]]);
         story.addDialog([NPC.QIAOTELUDE,["当我们的对话结束后，我和哈莫都等着你来挑战，只要你能击败我和哈莫，龙族之火，就给你，我们很有耐心，你可以随时来战。"],["好。"]],function():void
         {
            NpcDialogNew_1._HasDanmu = true;
            BitBuffSetClass.setState(23081,1,function():void
            {
               _controLevel.boss_0.removeEventListener(MouseEvent.CLICK,qiaokeClick);
               task4();
            });
         });
         story.start();
      }
      
      private static function task3() : void
      {
         var play:PlayAnimationComponent = null;
         if(BitBuffSetClass.getState(23080) == 0)
         {
            play = new PlayAnimationComponent("SealTaitanHammer_mapAnimate",function():void
            {
               play.destroy();
               BitBuffSetClass.setState(23080,1,function():void
               {
                  ModuleManager.showAppModule("SealTaitanHammerLordPanel");
                  ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,function(param1:* = null):void
                  {
                     ModuleManager.removeListener(ModuleManager.MODEL_CLOSE,arguments.callee);
                     task3();
                  });
               });
            },4);
         }
         else
         {
            _controLevel.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
            {
               var e:Event = param1;
               _controLevel.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               _controLevel.bossMc.mouseChildren = false;
               _controLevel.bossMc.buttonMode = true;
               _controLevel["bossMc"].addEventListener(MouseEvent.CLICK,clickBoss);
               refreshMap([2723],function(param1:Array):void
               {
                  _controLevel.dialogMc.visible = KTool.getBit(param1[0],3) == 1;
               });
            });
         }
      }
      
      private static function clickBoss(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("SealTaitanHammerLordPanel");
      }
      
      private static function task2() : void
      {
         _controLevel.bossMc.mouseChildren = false;
         _controLevel.bossMc.buttonMode = true;
         _controLevel["bossMc"].addEventListener(MouseEvent.CLICK,queenDialog);
         if(BitBuffSetClass.getState(23079) == 0)
         {
            _controLevel.dialogMc.visible = true;
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,switchMap11138);
         }
         else
         {
            _controLevel.dialogMc.visible = false;
            _mapId = MapManager.currentMap.id;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,task2SwitchMap);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,task2SwitchMap);
            checkAllGot();
         }
      }
      
      private static function switchMap11138(param1:MapEvent) : void
      {
         if(MapManager.currentMap.id == 11138)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,switchMap11138);
            _controLevel = MapManager.currentMap.controlLevel as MovieClip;
            task2();
         }
      }
      
      private static function task2SwitchMap(param1:MapEvent) : void
      {
         _mapId = MapManager.currentMap.id;
         _controLevel = MapManager.currentMap.controlLevel as MovieClip;
         if(_mapId >= 11133 && _mapId <= 11138)
         {
            if(_mapId == 11138)
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,task2SwitchMap);
               task2();
            }
            else
            {
               _controLevel = MapManager.currentMap.controlLevel as MovieClip;
               _controLevel.bossMc.mouseChildren = false;
               _controLevel.bossMc.buttonMode = true;
            }
            checkAllGot();
         }
      }
      
      private static function checkAllGot() : void
      {
         refreshMap([2723],function(param1:Array):void
         {
            var _loc2_:Boolean = true;
            var _loc3_:int = 0;
            while(_loc3_ < 5)
            {
               if(_mapId == 11138)
               {
                  CommonUI.removeYellowArrow(_controLevel["comp_" + _loc3_]);
               }
               if(KTool.getBit(param1[0],_loc3_ + 7) == 0)
               {
                  if(_mapId == 11138)
                  {
                     CommonUI.addYellowArrow(_controLevel["comp_" + _loc3_],0,-10);
                  }
                  _loc2_ = false;
               }
               _loc3_++;
            }
            _allGot = _loc2_;
            if(_mapId == 11138)
            {
               if(_loc2_)
               {
                  _controLevel["bossMc"].removeEventListener(MouseEvent.CLICK,queenDialog);
                  _controLevel["bossMc"].addEventListener(MouseEvent.CLICK,queenEndDialog);
                  CommonUI.addYellowExcal(_controLevel["bossMc"],0,-60,5);
               }
               return;
            }
            _controLevel.dialogMc.visible = _loc2_;
            if(KTool.getBit(param1[0],_mapId - 11132 + 6) == 0)
            {
               _controLevel["bossMc"].addEventListener(MouseEvent.CLICK,bossDialog);
               CommonUI.addYellowExcal(_controLevel["bossMc"],0,-80,5);
            }
            else
            {
               _controLevel["bossMc"].addEventListener(MouseEvent.CLICK,bossEndDialog);
               CommonUI.removeYellowExcal(_controLevel["bossMc"]);
            }
            if(_loc2_)
            {
               _controLevel["dialogMc"].visible = true;
               _controLevel["dialogMc"].gotoAndPlay(1);
            }
         });
      }
      
      private static function queenEndDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialogNew_1._HasDanmu = false;
         NpcDialogNew_1.show(NPC.TIANXUANJIWANG,["看来你已经获得了5个神令，下面我将会给你我的天玄神令！这样，你就可以合成六界之光了！"],["好。"],[function():void
         {
            var play:* = undefined;
            NpcDialogNew_1._HasDanmu = true;
            play = new PlayAnimationComponent("SealTaitanHammer_mapAnimate",function():void
            {
               play.destroy();
               KTool.doExchange(8226,function():void
               {
                  ModuleManager.showAppModule("SealTaitanHammerMainPanel");
               });
               _controLevel["bossMc"].removeEventListener(MouseEvent.CLICK,queenEndDialog);
               CommonUI.removeYellowExcal(_controLevel["bossMc"]);
            },3);
         }]);
      }
      
      private static function bossDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialogNew_1._HasDanmu = false;
         NpcDialogNew_1.show(_bossNPCArr[_mapId - 11133],[_bossDialogArr[_mapId - 11133]],["谢谢。"],[function():void
         {
            NpcDialogNew_1._HasDanmu = true;
            CommonUI.removeYellowExcal(_controLevel["bossMc"]);
            _controLevel["bossMc"].removeEventListener(MouseEvent.CLICK,bossDialog);
            _controLevel["bossMc"].addEventListener(MouseEvent.CLICK,bossEndDialog);
            send(16,_mapId - 11132);
            checkAllGot();
         }]);
      }
      
      private static function bossEndDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialogNew_1._HasDanmu = false;
         NpcDialogNew_1.show(_bossNPCArr[_mapId - 11133],["你不是已经获得神令了吗？为何还在此处徘徊？"],["好。"],[function():void
         {
            NpcDialogNew_1._HasDanmu = true;
         }]);
      }
      
      private static function queenDialog(param1:MouseEvent = null) : void
      {
         var e:MouseEvent = param1;
         NpcDialogNew_1._HasDanmu = false;
         NpcDialogNew_1.show(NPC.TIANXUANJIWANG,["你一定是来收集六界之光，这非常简单。你需要通过五个入口到达每个界王殿之中，和界王们对话，获得他们的神令。当你收集完毕五个神令的时候，再回到这里，我会给你我的神令，助你合成六界之光！"],["好。"],[function():void
         {
            NpcDialogNew_1._HasDanmu = true;
            if(BitBuffSetClass.getState(23079) == 0)
            {
               BitBuffSetClass.setState(23079,1,function():void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,switchMap11138);
                  _controLevel.dialogMc.visible = false;
                  task2();
               });
            }
         }]);
      }
      
      private static function task1() : void
      {
         var play:PlayAnimationComponent = null;
         if(BitBuffSetClass.getState(23078) == 0)
         {
            play = new PlayAnimationComponent("SealTaitanHammer_mapAnimate",function():void
            {
               play.destroy();
               BitBuffSetClass.setState(23078,1,function():void
               {
                  task1();
               });
            });
         }
         else
         {
            refreshMap([2724,2725],function(param1:Array):void
            {
               var _loc2_:Boolean = true;
               _currentArr = KTool.intTo4byte(param1[0]);
               _currentArr.push(param1[1]);
               var _loc3_:int = 0;
               while(_loc3_ < 5)
               {
                  CommonUI.removeYellowExcal(_controLevel["mc_" + _loc3_]);
                  if(_currentArr[_loc3_] < 3)
                  {
                     _loc2_ = false;
                     CommonUI.addYellowExcal(_controLevel["mc_" + _loc3_],0,10,5);
                  }
                  _controLevel["mc_" + _loc3_].mouseChildren = false;
                  _controLevel["mc_" + _loc3_].buttonMode = true;
                  _controLevel["mc_" + _loc3_].addEventListener(MouseEvent.CLICK,task1_OnClick);
                  _loc3_++;
               }
               if(_loc2_)
               {
                  task1End();
               }
               else
               {
                  BonusController.showDelayBonus(1766);
               }
            });
         }
      }
      
      private static function task1End() : void
      {
         var play:PlayAnimationComponent = null;
         play = new PlayAnimationComponent("SealTaitanHammer_mapAnimate",function():void
         {
            play.destroy();
            ModuleManager.showAppModule("SealTaitanHammerMainPanel");
            BonusController.showDelayBonus(1766);
            BonusController.removeDelay(1766);
         },2);
      }
      
      private static function task1_OnClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         var _loc3_:int = int(_loc2_.replace("mc_",""));
         task1_dialog(_loc3_,_currentArr[_loc3_]);
      }
      
      private static function task1_dialog(param1:int, param2:int) : void
      {
         _npcIndex = param1;
         _dialogIndex = param2;
         NpcDialogNew_1._HasDanmu = false;
         if(param2 >= 3)
         {
            endDialog();
         }
         else
         {
            NpcDialogNew_1.show(task1DialogNPCArr[param1],[task1DialogAskArr[param1][param2]],task1DialogQuestionArr[param1][param2],task1DialogChioceArr[param1][param2]);
         }
      }
      
      private static function trueChoice() : void
      {
         BonusController.addDelay(1766);
         send(_npcIndex * 3 + _dialogIndex + 1,1);
         task1_dialog(_npcIndex,++_dialogIndex);
      }
      
      private static function wrongChoice() : void
      {
         NpcDialogNew_1.show(task1DialogNPCArr[_npcIndex],["似乎不对哦！再想想！"],["好……"],[function():void
         {
            task1_dialog(_npcIndex,_dialogIndex);
         }]);
      }
      
      private static function endDialog() : void
      {
         NpcDialogNew_1.show(task1DialogNPCArr[_npcIndex],["我这里你已经全部回答完毕了，去看看，别人还有没有什么问题~"],["嗯！"],[function():void
         {
            task1();
         }]);
         NpcDialogNew_1._HasDanmu = true;
      }
   }
}
