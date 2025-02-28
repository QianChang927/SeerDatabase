package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SkullWizardController
   {
      
      private static const PRE_TASK_BUFFER:int = 869;
      
      private static var _map:BaseMapProcess;
      
      private static var _fightWith:String;
      
      private static var _taskMc:MovieClip;
       
      
      public function SkullWizardController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         SocketConnection.send(1022,86063689);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_946_0"),function(param1:DisplayObject):void
         {
            _taskMc = param1 as MovieClip;
            _map.conLevel.addChild(_taskMc);
            if(isTaskDone)
            {
               showBoss();
            }
            else
            {
               taskMc.gotoAndStop(1);
               taskMc.buttonMode = true;
               CommonUI.addYellowArrow(_map.topLevel,488,242,60);
            }
            taskMc.addEventListener(MouseEvent.CLICK,onDialog);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         });
      }
      
      private static function showBoss() : void
      {
         taskMc.gotoAndStop(4);
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86063690);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SHENGYIZHILING,["帕格纳斯！没想到你也找到了这里！希望我们井水不犯河水。我们找斯拉维是有要紧事情。希望你放开他！"],["难道我的事情不是要紧事？"]]],[TaskStoryPlayer.DIALOG,[NPC.KULOUFASHI,["你打伤我的手下，这笔账怎么算？创世神兵是在炫耀自己很厉害吗？哼！"],["情急之下，多有冒犯！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["但是你绑架了那么多的无辜精灵！你到底有什么阴谋？"],["阴谋？哈哈哈！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SHENGYIZHILING,["可恶的帕格纳斯！斯维拉！你怎么样？"],["这到底是什么情况？"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGYIZHILING,["斯维拉是一只拥有超能力的精灵。能够通晓世间前后之事。我们前来询问关于创世神兵的线索。想必帕格纳斯也是来问的吧！"],["哼！这小子不识抬举！"]]],[TaskStoryPlayer.DIALOG,[NPC.NASIQI_SUPER,["他居然敢拒绝至高无上的骷髅法师！活该被骷髅法师拆碎元神！哈哈！更棒的是我们还封印了他！他现在动弹不得了！ "],["可恶！你们竟然……"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGYIZHILING,[MainManager.actorInfo.formatNick + "寻找光合能量，消除封印。尽快帮斯维拉凝聚元神。他是我们寻找创世神兵的唯一线索。请帮帮忙！"],["我一定全力以赴！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            BufferRecordManager.setMyState(PRE_TASK_BUFFER,true);
            showBoss();
            SocketConnection.send(1022,86063691);
         };
         storyPlayer.start();
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         if(taskMc.currentFrame == 1)
         {
            CommonUI.removeYellowArrow(_map.topLevel);
            startPreTask();
            return;
         }
         switch(param1.target.name)
         {
            case "haidao":
               SocketConnection.send(1022,86063692);
               fightPirates();
               break;
            case "siweila":
               NpcDialog.show(NPC.SIWEILA,[MainManager.actorInfo.formatNick + "叹息之境有丰富的光合能量。海盗集团已经在这里开采很久了。他们一定有光合能量。请帮帮忙吧！"],["我这就去！"]);
         }
      }
      
      public static function fightPirates() : void
      {
         BonusController.addDelay(43);
         _fightWith = "haidao";
         FightManager.fightWithBoss("海盗",0);
      }
      
      public static function fightSiweila() : void
      {
         BonusController.addDelay(44);
         _fightWith = "siweila";
         FightManager.fightWithBossAndDelItem("斯维拉",1);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         if(_fightWith == "haidao")
         {
            BonusController.showDelayBonus(43);
            BonusController.removeDelay(43);
            return;
         }
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
            {
               NpcDialog.show(NPC.SIWEILA,["实力的确不凡。谢谢你！但是我的元神被骷髅法师打散。请继续挑战我，将我的元神聚集！到时候我将成为超强力精灵！"],["放心吧！有我在！"],[function():void
               {
                  showBoss();
                  BonusController.showDelayBonus(44);
                  BonusController.removeDelay(44);
               }]);
            });
         }
      }
      
      public static function becomeBest() : void
      {
         AnimateManager.playMcAnimate(taskMc,6,"mc6",function():void
         {
            NpcDialog.show(NPC.SIWEILA,["哈哈！我早就预料到你就是解救我的勇敢赛尔！快去帮戈麦斯他们！创世神兵的踪迹我已经知道了！让我们出发吧！"],["太棒啦！我们这就出发！"],[function():void
            {
               showBoss();
               Alarm.show("恭喜！精灵成为极品啦！");
            }]);
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            _taskMc = null;
            _map = null;
         }
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc["skullWizardMc"];
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(PRE_TASK_BUFFER);
      }
   }
}
