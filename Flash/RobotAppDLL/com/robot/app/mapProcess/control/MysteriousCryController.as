package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MysteriousCryController
   {
      
      private static var time:CronTimeVo = new CronTimeVo("*","*","9-15","5","*","2014");
      
      private static const PRE_TASK_BUFF:int = 1133;
      
      private static const SILADA_REGION:int = 12;
      
      private static const SILADA_BUFF:int = 1134;
      
      private static const TIME_INTERVAL:int = 6;
      
      private static var _map:BaseMapProcess;
      
      private static var _isWild:Boolean = true;
      
      private static var _canDestroy:Boolean = true;
       
      
      public function MysteriousCryController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         initEquip();
         initOgreListen();
         if(isPast)
         {
            destroy();
            return;
         }
         addEvents();
      }
      
      private static function initOgreListen() : void
      {
         if(isActive)
         {
            OgreController.isShow = true;
         }
         else
         {
            OgreController.isShow = false;
         }
      }
      
      private static function addEvents() : void
      {
         if(!isPreTaskDone)
         {
            taskMc.gotoAndStop(1);
         }
         else
         {
            KTool.getFrameMc(taskMc,3,"mc3",function(param1:MovieClip):void
            {
               param1.gotoAndStop(param1.totalFrames);
            });
         }
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,initPreTask);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_PET,onCatchOver);
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onMapDestroy);
      }
      
      private static function onMapDestroy(param1:MapEvent) : void
      {
         if(_canDestroy)
         {
            MapManager.removeEventListener(MapEvent.MAP_DESTROY,onMapDestroy);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            FightDispatcher.removeEventListener(PetFightEvent.CATCH_PET,onCatchOver);
         }
      }
      
      private static function removeEvents() : void
      {
         if(Boolean(_map) && Boolean(_map.conLevel["crymc"]))
         {
            _map.conLevel["crymc"].removeEventListener(MouseEvent.CLICK,initPreTask);
         }
      }
      
      private static function initEquip() : void
      {
         MapListenerManager.add(_map.depthLevel["pipeEquip"],function():void
         {
            StatManager.sendStat2014("母情节主题活动2","点击场景中《母子情深》装置",StatManager.RUN_ACT);
            ModuleManager.showModule(ClientConfig.getAppModule("MysteriousCryPanel"),"正在努力打开面板");
         },"神秘的哭声");
      }
      
      private static function initPreTask(param1:MouseEvent) : void
      {
         if(!isPreTaskDone)
         {
            startPreTask();
         }
         else if(param1.target.name == "silake")
         {
            if(!isActive)
            {
               NpcDialog.show(NPC.SILAKE,["每天可以在这里遇到0xff0000海魂0xffffff，打败她们获得0xff00008片碧鳞0xffffff，制作成0xff0000鲛神之笛0xffffff，就可以呼唤妈妈来救我了！"],["嗯，我到时再来试试。"]);
            }
            else
            {
               NpcDialog.show(NPC.SILAKE,["每天可以在这里遇到0xff0000海魂0xffffff，打败她们获得0xff00008片碧鳞0xffffff，制作成0xff0000鲛神之笛0xffffff，就可以呼唤妈妈来救我了！"],["嗯，我这就去试试。"]);
            }
         }
         else if(param1.target.name == "haidao")
         {
            NpcDialog.show(NPC.PIRATE,["这群战斗力为负数的小赛尔，只要小鲛人的妈妈斯拉达不来，我们谁都不怕！"]);
         }
      }
      
      public static function initFight() : void
      {
         if(hasGot)
         {
            NpcDialog.show(NPC.SILADA,["好久不见了我的朋友，找我有什么事吗？"],["你好斯拉达，我们能较量一下吗"],[startFight]);
         }
         else
         {
            KTool.hideMapAllPlayerAndMonster();
            AnimateManager.playMcAnimate(taskMc,4,"mc4",function():void
            {
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
               MainManager.selfVisible = true;
               taskMc.visible = false;
               Alarm.show("捕捉失去理智的斯拉达，让她平静下来",startFight);
            });
         }
      }
      
      private static function startFight() : void
      {
         _isWild = false;
         _canDestroy = false;
         FightManager.fightWithBoss("斯拉达",SILADA_REGION);
      }
      
      private static function onCatchOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         if(!hasGot)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130517_7"),function():void
            {
               BufferRecordManager.setMyState(SILADA_BUFF,true);
            },true);
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var _loc2_:FightOverInfo = null;
         _canDestroy = true;
         if(_isWild)
         {
            _loc2_ = param1.dataObj as FightOverInfo;
            if(_loc2_.winnerID != MainManager.actorID)
            {
               SimpleAlarm.show("你没能打败海魂，继续加油吧！");
            }
         }
         else
         {
            _isWild = true;
            Alarm.show("你没能成功捕获斯拉达，继续收集碧鳞将她召唤出来吧！");
         }
      }
      
      public static function destroy() : void
      {
         removeEvents();
         if(_map)
         {
            DisplayUtil.removeForParent(taskMc);
            _map = null;
         }
         OgreController.isShow = true;
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.DIALOG,[NPC.KALULU,["听罗杰船长说，最近这里晚上总是有神秘的哭声传出，到底是谁在哭呢？"],["咦？那边好像有什么！"]]],[TaskStoryPlayer.DIALOG,[NPC.SILAKE,["哇哇哇！妈妈，我要妈妈，哇……"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.PIRATE,["哈哈，鲛人一族真是神奇，眼泪竟然可以变成珍珠，拿到宇宙黑市上去一定可以卖个好价钱！"],null]],[TaskStoryPlayer.DIALOG,[NPC.PIRATE_2,["幸亏趁他妈妈不在的时候把他偷出来了，不然被他妈妈发现了可就麻烦了。"],null]],[TaskStoryPlayer.DIALOG,[NPC.SILAKE,["哇哇哇！哇哇哇哇哇哇！"],null]],[TaskStoryPlayer.DIALOG,[NPC.PIRATE,["哈哈，哭吧哭吧，你再也见不到你妈妈了，哭得越多珍珠就越多，再使劲点哭吧！啊哈哈哈哈！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["可恶！这几个海盗竟然这么厉害，怎么办？"],["问问罗杰船长也许有办法！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               startPreTaskPro();
            });
            MapManager.changeMap(4);
         };
         storyPlayer.start();
      }
      
      private static function startPreTaskPro() : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["原来是这样啊，斯拉克的妈妈一定也在焦急地寻找孩子，如果有她的帮助就可以轻松地打败那帮海盗了！"],["怎么找到斯拉克的妈妈呢？"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["斯拉克的母亲一定就在附近寻找她的孩子，鲛人一族特有的歌声应该可以把她吸引过来。"],["鲛人的歌声？额。。。我五音不全耶。。。"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["传说中鲛神之笛也可以吹奏出鲛人的歌声，只不过制作鲛神之笛需要8片碧鳞，要打败小海妖海魂才能从她身上获得。"],["太好了！海魂在哪里？"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["海魂的行踪很神秘，5月9日—5月15日 全天，才能在浅滩海岛遇到她们。"],["怎么找到斯拉克的妈妈呢？"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               BufferRecordManager.setMyState(PRE_TASK_BUFF,true);
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
               MainManager.selfVisible = true;
               KTool.getFrameMc(taskMc,3,"mc3",function(param1:MovieClip):void
               {
                  param1.gotoAndStop(param1.totalFrames);
               });
            });
            MapManager.changeMap(29);
         };
         storyPlayer.start();
      }
      
      private static function get hasGot() : Boolean
      {
         return BufferRecordManager.getMyState(SILADA_BUFF);
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["crymc"];
      }
      
      private static function get isPreTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(PRE_TASK_BUFF);
      }
      
      public static function get isActive() : Boolean
      {
         return time.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT;
      }
      
      private static function get isPast() : Boolean
      {
         return time.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.PAST;
      }
   }
}
