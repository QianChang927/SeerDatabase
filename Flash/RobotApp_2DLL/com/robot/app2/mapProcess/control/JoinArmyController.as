package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class JoinArmyController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _npcKeluoyi:MovieClip;
      
      private static var _npcYeer:MovieClip;
      
      private static var _movie:MovieClip;
      
      private static var _people:MovieClip;
      
      private static var _hasPet:Boolean;
      
      private static const FOREVER_TASK_STATE:int = 6162;
      
      private static const FUN_ARR:Array = [taskPre,taskOne,taskTwo,taskThree,taskFour,lastMovie];
       
      
      public function JoinArmyController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         StatManager.sendStat2014("星球活动","进入活动首场景","2015运营活动");
         _map = map;
         ResourceManager.getResource(ClientConfig.getActiveUrl("join_army_people"),function(param1:MovieClip):void
         {
            _people = param1;
            _map.conLevel.addChild(_people);
         });
         KTool.getForeverNum(FOREVER_TASK_STATE,function(param1:uint):void
         {
            var value:uint = param1;
            _hasPet = value == 6;
            ResourceManager.getResource(ClientConfig.getActiveUrl("join_army_npc_keluoyi"),function(param1:MovieClip):void
            {
               _npcKeluoyi = param1;
               if(BitBuffSetClass.getState(22618))
               {
                  loadYeer();
                  _npcKeluoyi.addEventListener(MouseEvent.CLICK,onClickKeluoyi);
               }
               else
               {
                  CommonUI.addYellowArrow(_npcKeluoyi,650,200,-135);
                  _npcKeluoyi.addEventListener(MouseEvent.CLICK,onFirstPlay);
               }
               _npcKeluoyi.buttonMode = true;
               _map.conLevel.addChild(_npcKeluoyi);
            });
         });
      }
      
      public static function destroy() : void
      {
         if(_npcKeluoyi != null)
         {
            _npcKeluoyi.removeEventListener(MouseEvent.CLICK,onClickKeluoyi);
            _npcKeluoyi.removeEventListener(MouseEvent.CLICK,onFirstPlay);
            _npcKeluoyi = null;
         }
         if(_npcYeer != null)
         {
            _npcYeer.removeEventListener(MouseEvent.CLICK,onClickYeer);
            _npcYeer = null;
         }
         _people = null;
         _map = null;
      }
      
      public static function doTask(param1:int) : void
      {
         FUN_ARR[param1]();
      }
      
      public static function get excalContainer() : MovieClip
      {
         return _npcYeer;
      }
      
      private static function sendSocket() : void
      {
         LevelManager.closeMouseEvent();
         SocketConnection.sendByQueue(CommandID.JOIN_ARMY,null,function(param1:SocketEvent):void
         {
            ModuleManager.showAppModule("JoinArmyTaskPanel");
            ModuleManager.showAppModule("JoinArmyTipsPanel");
            LevelManager.openMouseEvent();
         });
      }
      
      private static function taskPre() : void
      {
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["想报名没有问题。先去把这张报名表填了吧。"],["呃，报名表？"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["没错，想参与天启军的人很多，填一份报名表，我也好进行统一检查。"],["克洛伊大人说的是！我这就填！"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["精灵名字，耶尔……"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["精灵性别，雄性……"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["精灵种族，熊族……"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["精灵特长，肉搏战斗……"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["来自星系，俺那个星系叫啥来着？算了先空着吧……"],["好了，我填好了！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["很好。填完别忘了交啊！"],["没问题！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8],function():void
         {
            ModuleManager.showAppModule("JoinArmyTaskPanel");
            ModuleManager.showAppModule("JoinArmyTipsPanel");
         });
      }
      
      private static function taskOne() : void
      {
         var task:Function = function():void
         {
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["你好，我是精灵太空站的站长贾斯汀。有什么事情需要问我吗？"],["请问天启军的报名表是不是交给您呢？"]);
            var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["您好，俺是一只来自……呃，一个遥远星系的精灵。听闻克洛伊大人正在组建神谕天启军，俺也想加入其中。"]);
            var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["是有这么回事儿。克洛伊携带着光与火的秘力，是一只有着强大力量的精灵。"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["那么你为什么没有去参加报名呢？"],["俺已经填好报名表了！"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["但是……说来惭愧，俺忘了要把报名表交给谁了……"],["这……"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["非常抱歉了，我没有参与报名，具体负责人我也不太清楚。不如你去问问罗杰吧！"],["哦好的，谢谢站长！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
            {
               sendSocket();
            });
         };
         ModuleManager.hideAllModule();
         if(MapManager.currentMap.id == 102)
         {
            task();
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            task();
         });
         MapManager.changeMap(102);
      }
      
      private static function taskTwo() : void
      {
         var task:Function = function():void
         {
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["你好，我是赛尔号的罗杰船长。有什么事情需要问我吗？"],["请问天启军的报名表是不是交给您呢？"]);
            var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["您好，俺是一只来自……呃，一个遥远星系的精灵。听闻克洛伊大人正在组建神谕天启军，俺也想加入其中。"]);
            var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["是有这么回事儿，我也在填入伍报名表呢！"],["什么，您也在写吗！"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["俺还想问您是不是应该把报名表交给您呢！"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["真是不好意思，打扰您了！那俺先告辞了！"],["喂……"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["怎么急匆匆的就走了，也不问下我应该交给谁，真是的……"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
            {
               sendSocket();
            });
         };
         ModuleManager.hideAllModule();
         if(MapManager.currentMap.id == 4)
         {
            task();
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            task();
         });
         MapManager.changeMap(4);
      }
      
      private static function taskThree() : void
      {
         var task:Function = function():void
         {
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["愿光与火之力护佑着你。你好，我是神谕之子克洛伊。"],["克……克洛伊大人！俺是您的忠实支持者！"]);
            var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["谢谢。能为宇宙中爱好和平的善良精灵们谋求幸福是我的荣幸。"]);
            var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["由于咤克斯的疯狂，我受雷神雷伊的邀请前来赛尔号，想要组建一支神谕天启军，共同抵抗咤克斯的肆虐。"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["天启军！啊，是的！对的，没错！俺也想加入神谕天启军！"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["哦？那按照流程，你得先去填一张报名表哦。"],["俺填好了！"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["报名表俺早就填好了！只不过……俺不小心忘了要把表交给谁了……嘿嘿……"],["原来如此。"]);
            var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KE_LUO_YI_SUPER,["表填好之后交给我就行了，我会对你进行一些考验。只有通过考验的精灵才能加入神谕天启军这支精锐队伍！"],["啊？原来交给您就行了啊！"]);
            var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YEER,["克洛伊大人请收下俺的报名表！可千万保存好了啊！至于考验什么的，放马来吧！俺不怕！"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8],function():void
            {
               playMovie(3,sendSocket);
            });
         };
         ModuleManager.hideAllModule();
         if(MapManager.currentMap.id == 10793)
         {
            task();
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            task();
         });
         MapManager.changeMap(10793);
      }
      
      private static function taskFour() : void
      {
         ModuleManager.hideAllModule();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var info:FightOverInfo;
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            info = e.dataObj as FightOverInfo;
            if(info.winnerID == MainManager.actorID)
            {
               lastMovie();
               LevelManager.closeMouseEvent();
               SocketConnection.sendByQueue(CommandID.JOIN_ARMY,null,function(param1:SocketEvent):void
               {
                  LevelManager.openMouseEvent();
               });
            }
            else
            {
               ModuleManager.showAppModule("JoinArmyTaskPanel");
               ModuleManager.showAppModule("JoinArmyTipsPanel");
            }
         });
         FightManager.fightNoMapBoss("小灵狮",3035);
      }
      
      private static function lastMovie() : void
      {
         ModuleManager.hideAllModule();
         if(MapManager.currentMap.id == 10793)
         {
            playMovie(4,function():void
            {
               ModuleManager.showAppModule("JoinArmyMainPanel");
            });
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            playMovie(4,function():void
            {
               ModuleManager.showAppModule("JoinArmyMainPanel");
            });
         });
         MapManager.changeMap(10793);
      }
      
      private static function loadYeer() : void
      {
         ResourceManager.getResource(ClientConfig.getActiveUrl("join_army_npc_yeer"),function(param1:MovieClip):void
         {
            _npcYeer = param1;
            if(!_hasPet)
            {
               CommonUI.addYellowExcal(_npcYeer,500,170);
            }
            _npcYeer.buttonMode = true;
            _npcYeer.addEventListener(MouseEvent.CLICK,onClickYeer);
            _map.conLevel.addChild(_npcYeer);
         });
      }
      
      private static function onFirstPlay(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         BitBuffSetClass.setState(22618,1);
         CommonUI.removeYellowArrow(_npcKeluoyi);
         if(BitBuffSetClass.getState(22619))
         {
            onSecondPlay();
         }
         else
         {
            playMovie(1,function():void
            {
               KTool.showMapAllPlayerAndMonster();
               onSecondPlay();
               BitBuffSetClass.setState(22619,1);
            });
         }
      }
      
      private static function onSecondPlay() : void
      {
         if(BitBuffSetClass.getState(22620))
         {
            onThirdPlay();
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("join_army_full_movie"),onThirdPlay);
            BitBuffSetClass.setState(22620,1);
         }
      }
      
      private static function onThirdPlay() : void
      {
         if(BitBuffSetClass.getState(22621))
         {
            loadYeer();
         }
         else
         {
            playMovie(2,function():void
            {
               KTool.showMapAllPlayerAndMonster();
               BitBuffSetClass.setState(22621,1);
               loadYeer();
            });
         }
      }
      
      private static function playMovie(param1:int, param2:Function = null) : void
      {
         var frame:int = param1;
         var fun:Function = param2;
         if(_movie == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("join_army_map_movie"),function(param1:MovieClip):void
            {
               _movie = param1;
               playMovie(frame,fun);
            });
            return;
         }
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         NpcController.npcVisible = false;
         LevelManager.iconLevel.visible = false;
         ModuleManager.hideAllModule();
         if(_npcKeluoyi != null)
         {
            _npcKeluoyi.visible = false;
         }
         if(_npcYeer != null)
         {
            _npcYeer.visible = false;
         }
         if(_people != null)
         {
            _people.visible = false;
         }
         _map.conLevel.addChild(_movie);
         AnimateManager.playMcAnimate(_movie,frame,"mc",function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            NpcController.npcVisible = true;
            LevelManager.iconLevel.visible = true;
            if(_npcKeluoyi != null)
            {
               _npcKeluoyi.visible = true;
            }
            if(_npcYeer != null)
            {
               _npcYeer.visible = true;
            }
            if(_people != null)
            {
               _people.visible = true;
            }
            DisplayUtil.removeForParent(_movie);
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function onClickKeluoyi(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.KE_LUO_YI_SUPER,["吾为神谕之子克洛伊。咤克斯风云再起，愿天下英豪加入神谕天启军，与我共同对抗黑暗！"]);
      }
      
      private static function onClickYeer(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("JoinArmyMainPanel");
      }
   }
}
