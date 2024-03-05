package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HolyKingController
   {
      
      private static var taskMC:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      private static var needPlayStory:Boolean = false;
       
      
      public function HolyKingController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_1001_1"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            taskMC = mc;
            _map.btnLevel.addChild(mc);
            addEvent();
            if(!BitBuffSetClass.getState(22457))
            {
               MapObjectControl.hideOrShowAllObjects(false);
               KTool.hideMapPlayerAndMonster();
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  MapObjectControl.hideOrShowAllObjects(true);
                  KTool.showMapAllPlayerAndMonster();
               });
            }
            else if(needPlayStory)
            {
               playStory();
            }
            else
            {
               taskMC.gotoAndStop(6);
            }
         });
      }
      
      private static function addEvent() : void
      {
         taskMC.addEventListener(MouseEvent.CLICK,onClickHandler);
      }
      
      protected static function onClickHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var name:String = String(event.target.name);
         if(name == "btnStart")
         {
            playPreStory();
         }
         else if(name == "sheng")
         {
            StatManager.sendStat2014("奥斯卡超进化","点击圣皇",StatManager.RUN_ACT);
            showHolyKingPanel();
         }
         else if(name == "oscar")
         {
            showAosikaPanel();
            StatManager.sendStat2014("奥斯卡超进化","点击圣迈尔斯",StatManager.RUN_ACT);
         }
         else if(name == "dou")
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DouhuangPanel"));
         }
         else if(name == "ying")
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ShadowKingMianPanel"));
         }
         else if(name == "zhan")
         {
            ModuleManager.showModule(ClientConfig.getAppModule("JihadKingMaiersiMainPanel"));
         }
         else if(name == "btnBosaidong")
         {
            NpcDialog.show(NPC.BOSAIDONG,["0xff0000" + MainManager.actorInfo.nick + "0xffffff我们一定要守护奥斯卡，毕竟对手是三皇之首的影魔，知道吗？！"],["波塞冬，我想和你切磋一下！","恩恩，明白了！"],[function():void
            {
               showDaAnTiapPanel();
            }]);
         }
      }
      
      private static function removeEvent() : void
      {
         if(_map)
         {
            taskMC.removeEventListener(MouseEvent.CLICK,onClickHandler);
         }
      }
      
      private static function showAosikaPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("OscarEvoPanel"));
      }
      
      private static function showHolyKingPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("HolyKingMianPanel"));
      }
      
      private static function showDaAnTiapPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PoseidonMainPanel"));
      }
      
      public static function playPreStory() : void
      {
         StatManager.sendStat2014("奥斯卡超进化","参与前置任务",StatManager.RUN_ACT);
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(getStorys(),function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BitBuffSetClass.setState(22457,1);
            addEvent();
            taskMC.gotoAndStop(6);
            StatManager.sendStat2014("奥斯卡超进化","完成前置任务",StatManager.RUN_ACT);
         });
      }
      
      public static function playStory() : void
      {
         if(taskMC)
         {
            taskMC.gotoAndStop(6);
            needPlayStory = false;
            MapObjectControl.hideOrShowAllObjects(false);
            KTool.hideMapAllPlayerAndMonster();
            TaskDiaLogManager.single.playStory(getStorys(),function():void
            {
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               BitBuffSetClass.setState(22457,1);
               addEvent();
               taskMC.gotoAndStop(6);
               ModuleManager.showModule(ClientConfig.getAppModule("HolyKingMsgPanel"));
            });
         }
         else
         {
            needPlayStory = true;
         }
      }
      
      private static function getStorys() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 1;
         var _loc3_:String = "active_20131122_14";
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGHUANG,["奥斯卡，我很欣赏你的勇气！居然敢独闯魔界之门，相信你在这里一定会有一次特别的旅程！"],["圣皇！我进来就没想过要出去！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOUHUANG,["圣皇，少和他废话！让我们一起干掉这个阻碍我们的家伙吧"],["住手！奥斯卡是我的对手！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["圣皇…没想到你魔界三巨头的首领还挺仗义，不过别以为这样我就会饶了你！"],["呵呵，很荣幸和你成为对手！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGHUANG,["今天在魔界之域，我将和奥斯卡来一场公平的决斗，你们谁都不准插手！！"],["可是…圣皇，这可是千载难逢的机会啊！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGHUANG,["现在你们明白了吗？如果谁还敢违背我的命令，那我就让他在这里彻底消失！"],["遵命！首领！！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["既然这样，那我也就不客气了，让你见识一下圣灵系的最终奥义吧！"],["超进化吧！圣•奥斯卡！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc"]));
         return _loc1_;
      }
      
      public static function destroy() : void
      {
         removeEvent();
         if(taskMC != null)
         {
            DisplayUtil.removeForParent(taskMC);
            taskMC = null;
         }
         if(_map)
         {
            _map = null;
         }
      }
   }
}
