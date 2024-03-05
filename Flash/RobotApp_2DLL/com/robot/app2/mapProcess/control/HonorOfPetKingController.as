package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HonorOfPetKingController
   {
      
      private static var _taskMc:MovieClip;
      
      public static var curStep:uint;
      
      private static var heatNum:uint;
      
      private static var loongStauts:Array;
      
      private static var loongIndex:uint;
      
      private static const _mapAnimate:String = "HonorOfPetKing_Animate";
      
      private static const MapID:uint = 1;
      
      private static const loongNPCs:Array = [NPC.LOONG_TAKELIN,NPC.LOONG_SAIWEIER,NPC.LOONG_TAXIYA];
       
      
      public function HonorOfPetKingController()
      {
         super();
      }
      
      private static function openMainPanel() : void
      {
         ModuleManager.showAppModule("HonorOfPetKingMainPanel",true);
      }
      
      private static function loadTaskMc(param1:Function, param2:uint = 1) : void
      {
         var fun:Function = param1;
         var frame:uint = param2;
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _taskMc.gotoAndStop(frame);
               MapManager.currentMap.topLevel.addChild(_taskMc);
               _taskMc.addEventListener(MouseEvent.CLICK,onClick);
               if(fun != null)
               {
                  fun();
               }
            });
         }
         else
         {
            if(_taskMc.parent == null)
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
            }
            if(fun != null)
            {
               fun();
            }
         }
      }
      
      public static function initForMap() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(curStep == 4 || curStep == 6 || curStep == 7)
         {
            KTool.getMultiValue([100500,100501],function(param1:Array):void
            {
               heatNum = 10000 - param1[0] > 0 ? uint(10000 - param1[0]) : 0;
               loongStauts = [];
               var _loc2_:int = 0;
               while(_loc2_ < 9)
               {
                  loongStauts.push(BitUtils.getBit(param1[1],_loc2_) > 0);
                  _loc2_++;
               }
               interActive(curStep);
            });
         }
         else
         {
            interActive(curStep);
         }
      }
      
      public static function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(_taskMc != null)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_taskMc);
            _taskMc = null;
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "stepBtn_0":
               playStory(getStroy(1),function():void
               {
                  NpcDialog.show(NPC.TANGNITAILUO_XIE,["啊哈！又一个前来送命的！"],["是邪化的水系精灵！立刻开始战斗！","我先退后准备一下。"],[function():void
                  {
                     FightManager.fightNoMapBoss("",7166);
                  },function():void
                  {
                     _taskMc.mc.gotoAndStop(1);
                  }]);
               });
               break;
            case "stepBtn_4":
               NpcDialog.show(NPC.ICE_PHOENIX,["是柯尔德大人请您来的吗？麻烦您了，快救救我！0xff0000只需要再对冰块造成" + heatNum + "点伤害0xffffff，我就可以破冰而出了！"],["不要急，我这就救你出来！","让我再准备一下。"],[function():void
               {
                  FightManager.fightNoMapBoss("",7170);
               }]);
               break;
            case "boss_0":
            case "boss_1":
            case "boss_2":
               loongIndex = uint(e.target.name.split("_")[1]);
               if(loongStauts[loongIndex])
               {
                  NpcDialog.show(loongNPCs[loongIndex],["我的骄傲自大击败了我，我想我需要更多的修炼了！你很强，祝你好运！"],["您谦虚了。"]);
               }
               else
               {
                  NpcDialog.show(loongNPCs[loongIndex],["龙族的力量是不可匹敌的！"],["那我倒想试试看！","我再准备一下。"],[function():void
                  {
                     FightManager.fightNoMapBoss("",7171 + loongIndex);
                  }]);
               }
               break;
            case "setpBtn_7":
               loongIndex = uint(e.target.parent.name.split("_")[1]);
               NpcDialog.show(NPC.AIDEER,["感受空间，堪破虚妄！我亦真亦假，你能看透一切吗？"],["莫再装神弄鬼，你就是本体！","让我再准备一下。"],[function():void
               {
                  KTool.socketSendCallBack(42261,function():void
                  {
                     FightManager.fightNoMapBoss("",7174);
                  },[6,loongIndex + 1]);
               }]);
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var fightOver:FightOverInfo = null;
         var e:PetFightEvent = param1;
         fightOver = e.dataObj as FightOverInfo;
         KTool.getMultiValue([100499,100500,100501],function(param1:Array):void
         {
            var val:Array = param1;
            if(curStep == 0)
            {
               if(val[0] == 0)
               {
                  Alarm2.show("你在精灵身上一番摸索，但是什么也没有发现！",function():void
                  {
                     NpcDialog.show(NPC.LEIYI,["似乎邪化源头并不在这只精灵身上，我们再击败几只其他的精灵看看吧！"],["好的，咱们继续！"],[function():void
                     {
                        _taskMc.mc.gotoAndStop(1);
                     }]);
                  });
               }
               else
               {
                  Alarm2.show("你在精灵身上一番摸索，发现了使精灵邪化的源头！",function():void
                  {
                     NpcDialog.show(NPC.LEIYI,["看来这就是导致水系精灵们邪化的源头了，赶快回去找水系精灵王复命吧！"],["我们走！"],[function():void
                     {
                        MapManager.changeMapWithCallback(MapID,openMainPanel);
                     }]);
                  });
               }
            }
            if(curStep == 4)
            {
               heatNum = 10000 - val[1] > 0 ? uint(10000 - val[1]) : 0;
               if(heatNum == 0)
               {
                  playStory(getStroy(2),function():void
                  {
                     MapManager.changeMapWithCallback(MapID,openMainPanel);
                  });
               }
            }
            if(curStep == 6)
            {
               if(val[2] >= 7)
               {
                  NpcDialog.show(NPC.QIAOTELUDE,["想不到你居然能够击败龙族的三大巨头。我对你的力量心服口服，加油吧孩子！"],["谢谢你！"],[function():void
                  {
                     MapManager.changeMapWithCallback(MapID,openMainPanel);
                  }]);
               }
               else if(fightOver.winnerID == MainManager.actorID)
               {
                  NpcDialog.show(loongNPCs[loongIndex],["我的骄傲自大击败了我，我想我需要更多的修炼了！你很强，祝你好运！"],["您谦虚了。"]);
               }
               else
               {
                  NpcDialog.show(loongNPCs[loongIndex],["愚蠢的精灵，居然妄图挑战龙族的尊严！"],["哼，刚才是我一时失手，再来！","我再准备一下。"],[function():void
                  {
                     FightManager.fightNoMapBoss("",7171 + loongIndex);
                  }]);
               }
            }
            if(curStep == 7)
            {
               if(val[0] >= 12)
               {
                  NpcDialog.show(NPC.AIDEER,["好好好，想不到你也有如此慧眼！可造之材啊！"],["谢谢你！"],[function():void
                  {
                     MapManager.changeMapWithCallback(MapID,openMainPanel);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.AIDEER,["你对空间的把握还不够！再做做尝试，找到我的本体所在吧！"]);
               }
            }
         });
      }
      
      public static function playPreStroy() : void
      {
         loadTaskMc(function():void
         {
            playStory(getStroy(0),function():void
            {
               destroy();
               BitBuffSetClass.setState(23184,1);
               ModuleManager.showAppModule("HonorOfPetKingMainPanel");
            });
         });
      }
      
      public static function playAfterStroy() : void
      {
         loadTaskMc(function():void
         {
            playStory(getStroy(3),function():void
            {
               destroy();
               openMainPanel();
            });
         });
      }
      
      private static function playStory(param1:Array, param2:Function = null, param3:Boolean = true) : void
      {
         var storyArr:Array = param1;
         var fun:Function = param2;
         var showIcon:Boolean = param3;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         if(_taskMc.parent == null)
         {
            MapManager.currentMap.topLevel.addChild(_taskMc);
         }
         MapNamePanel.hide();
         ToolBarController.panel.hide();
         MapManager.currentMap.topLevel.mouseChildren = true;
         MapManager.currentMap.topLevel.mouseEnabled = true;
         LevelManager.iconLevel.visible = false;
         TaskDiaLogManager.single.playStory(storyArr,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            if(showIcon)
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.show();
               MapNamePanel.show();
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function getStroy(param1:uint) : Array
      {
         var _loc2_:Array = [];
         switch(param1)
         {
            case 0:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,1,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["大人，为何……为何我的力量消退了？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["还是说，这样的力量只是一个资格，我还需要更多的努力，才能成为王者？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HeritalThunderSword,["我想你只猜对了一半。王者之路固然困难，传承的力量却本不该这么快就消退。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HeritalThunderSword,["可能这一切只能归结于岁月的消磨了。虽然我被上一任精灵王所封印，但我等待的时间实在太漫长了，原本充沛的能量也逐渐消逝。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HeritalThunderSword,["想要恢复原本的传承之力，你可能需要一些额外的努力。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我愿意接受挑战！大人，我该怎么做？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HeritalThunderSword,["精灵王的力量需要精灵王来传承。你可以去向其他的精灵王们寻求帮助，虽然你们不同系别，但是毕竟同根同源……"],["我明白了！"]));
               break;
            case 1:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc.mc,2,"movie"]));
               break;
            case 2:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,4,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ICE_PHOENIX,["真是多谢你了！如果不是你，我可能就会因为这次冒险的尝试而丧命了！"],["举手之劳，你太客气了！"]));
               break;
            case 3:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,2,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEYI_KING,["好充实的力量感！跟之前迅速消逝的感觉完全不同！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.HeritalThunderSword,["恭喜你了，雷伊。在封王盛典之后，你就是新的电系精灵王了！但是，新的力量就意味着新的使命，你准备好了吗？"],["我已经迫不及待了！"]));
         }
         return _loc2_;
      }
      
      public static function interActive(param1:uint) : void
      {
         var step:uint = param1;
         switch(step)
         {
            case 0:
               loadTaskMc(function():void
               {
                  _taskMc.mc.gotoAndStop(1);
               },3);
               break;
            case 2:
               ModuleManager.showAppModule("RunningGamePanel");
               break;
            case 4:
               loadTaskMc(function():void
               {
                  _taskMc.mc.numTxt.text = "" + (10000 - heatNum) + "/10000";
               },5);
               break;
            case 6:
               loadTaskMc(function():void
               {
                  var _loc1_:int = 0;
                  while(_loc1_ < 3)
                  {
                     _taskMc.mc["flag_" + _loc1_].visible = !loongStauts[_loc1_];
                     _loc1_++;
                  }
               },6);
               break;
            case 7:
               loadTaskMc(function():void
               {
                  var _loc1_:int = 0;
                  while(_loc1_ < 5)
                  {
                     _taskMc.mc["mc_" + _loc1_].visible = !loongStauts[_loc1_ + 4];
                     _loc1_++;
                  }
               },7);
         }
      }
   }
}
