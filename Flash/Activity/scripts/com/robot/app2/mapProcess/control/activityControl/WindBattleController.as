package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class WindBattleController
   {
      
      private static const PRE_TASK:int = 976;
      
      private static const BOSS_OBJ:Object = {
         "yaluoer":{
            "npc":NPC.YALUOER,
            "name":"亚罗尔",
            "region":319
         },
         "zenisen":{
            "npc":NPC.ZENISEN,
            "name":"泽尼森",
            "region":320
         },
         "kelisi":{
            "npc":NPC.KELISI,
            "name":"克里斯",
            "region":321
         },
         "fusite":{
            "npc":NPC.FUSITE,
            "name":"弗斯特",
            "region":322
         },
         "haidao":{
            "name":"海盗",
            "region":318
         }
      };
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var _fightType:String;
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","*","4-10","3","*","2016")]);
       
      
      public function WindBattleController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(!AC.isInActivityTime)
         {
            return;
         }
         _map = map;
         SocketConnection.send(1022,86066959);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_968_wind_battle"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            if(!isTaskDone)
            {
               CommonUI.addYellowExcal(_map.topLevel,417,222);
               MapObjectControl.hideOrShowAllObjects(false);
               taskMc.gotoAndStop(7);
            }
            else
            {
               taskMc.gotoAndStop(6);
            }
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            taskMc.buttonMode = true;
            taskMc.addEventListener(MouseEvent.CLICK,onTask);
         });
      }
      
      public static function onEquip() : void
      {
         SocketConnection.send(1022,86066962);
         if(MapManager.currentMap.id != 968)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WindBattleMsgPanel"));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WindBattleMainPanel"));
         }
      }
      
      private static function onTask(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "haidao":
               SocketConnection.send(1022,86066963);
               fight("haidao");
               break;
            case "kaxier":
               if(!isTaskDone)
               {
                  NpcDialog.show(NPC.KAXIER,[MainManager.actorInfo.formatNick + "你来得正好，泰坦四煞的疾风侠来到这里了！你能帮助我吗？"],["我一定会帮助你！","我不想管！"],[startPreTask]);
               }
               else
               {
                  NpcDialog.show(NPC.KAXIER,[MainManager.actorInfo.formatNick + "，快去挑战海盗，收集疾风恶果。降低弗斯特的速度，我们才能抓到他！"],["我知道啦！"]);
               }
               break;
            case "saixiaoxi":
               NpcDialog.show(NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，快去挑战海盗，收集疾风恶果。降低弗斯特的速度，我们才能抓到他！"],["我知道啦！"]);
               break;
            case "zhuzi":
               SocketConnection.send(1022,86066964);
               SocketConnection.sendWithCallback(CommandID.WIND_BATTLE_FIGHT_BOSS,function(param1:SocketEvent):void
               {
                  var _loc4_:String = null;
                  var _loc2_:ByteArray = param1.data as ByteArray;
                  _loc2_.position = 0;
                  var _loc3_:int = int(_loc2_.readUnsignedInt());
                  for(_loc4_ in BOSS_OBJ)
                  {
                     if(BOSS_OBJ[_loc4_].region == _loc3_)
                     {
                        fight(_loc4_);
                        break;
                     }
                  }
               });
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         if(["yaluoer","zenisen","kelisi"].indexOf(_fightType) != -1)
         {
            if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               NpcDialog.show(BOSS_OBJ[_fightType].npc,["好啦好啦！送你些奖励！记住只有收集疾风恶果，将弗斯特的速度降低，你才有机会找到他！否则……哼哼！"],["挑战海盗，收集疾风恶果！降低弗斯特的速度！"]);
            }
            else
            {
               NpcDialog.show(BOSS_OBJ[_fightType].npc,["啧啧啧！就你这实力，不怕告诉你，只有挑战海盗，收集疾风恶果，将弗斯特的速度降低，你才有机会找到他！"],["挑战海盗，收集疾风恶果！降低弗斯特的速度！"]);
            }
         }
      }
      
      public static function fight(param1:String) : void
      {
         var type:String = param1;
         _fightType = type;
         if(["yaluoer","zenisen","kelisi"].indexOf(_fightType) != -1)
         {
            NpcDialog.show(BOSS_OBJ[_fightType].npc,["哈哈！你不可能追上疾风侠—弗斯特！乖乖接受我的挑战吧！"],["可恶！我要击败你！"],[startFight]);
         }
         else if(_fightType == "fusite")
         {
            taskMc.visible = true;
            KTool.hideMapAllPlayerAndMonster();
            AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
            {
               KTool.showMapAllPlayerAndMonster();
               startFight();
            });
         }
         else
         {
            startFight();
         }
      }
      
      private static function startFight() : void
      {
         FightManager.fightNoMapBoss(BOSS_OBJ[_fightType].name,BOSS_OBJ[_fightType].region);
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86066960);
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowExcal(_map.topLevel);
         taskMc.visible = true;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.ZOG,["你看！这里的能源如此的丰厚！难怪隐藏的这么隐蔽！"],["别磨蹭了！"]]],[TaskStoryPlayer.DIALOG,[NPC.ALLISON,["赶紧着！小的们，给我把这里的能源都带走，有多少，拿多少！"],["是！"]]],[TaskStoryPlayer.DIALOG,[NPC.KAXIER,["放肆！可恶的侵略者！全都给我放下！"],["是谁？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["可恶的海盗！没想到你们竟然找到这里！"],["那又怎么样？"]]],[TaskStoryPlayer.DIALOG,[NPC.ALLISON,["我们就是来采能源的！你以为你们能阻止我们吗？告诉你们，是疾风侠带我们来的！"],["疾风侠？"]]],[TaskStoryPlayer.DIALOG,[NPC.KAXIER,["泰坦四煞——疾风侠！没想到这么快！"],["什么意思？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.FUSITE,["只要你抓得到我，我就离开。能源我们也不要了！不过……"],["不过什么！"]]],[TaskStoryPlayer.DIALOG,[NPC.FUSITE,["不过想要抓到我——根本不可能！哈哈！"],["可恶！"]]],[TaskStoryPlayer.DIALOG,[NPC.FUSITE,["不怕告诉你，只要战胜海盗，收集疾风恶果，降低我的速度，你就有机会找到我！看你的实力了！"],["我一定会赶走你！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            MapObjectControl.hideOrShowAllObjects(true);
            KTool.showMapAllPlayerAndMonster();
            BufferRecordManager.setMyState(PRE_TASK,true,function():void
            {
               SocketConnection.send(1022,86066961);
               CommonUI.removeYellowExcal(_map.topLevel);
               taskMc.gotoAndStop(6);
               ModuleManager.showModule(ClientConfig.getAppModule("WindBattleMainPanel"));
            });
         };
         storyPlayer.start();
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            CommonUI.removeYellowExcal(_map.topLevel);
            if(taskMc)
            {
               taskMc.removeEventListener(MouseEvent.CLICK,onTask);
               DisplayUtil.removeForParent(taskMc);
               _taskMc = null;
            }
            _map = null;
         }
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(PRE_TASK);
      }
   }
}
