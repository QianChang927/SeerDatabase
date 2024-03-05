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
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ShadowKingVsAosikaController
   {
      
      private static var taskMC:MovieClip;
      
      private static var _map:BaseMapProcess;
       
      
      public function ShadowKingVsAosikaController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         StatManager.sendStat2014("圣魔之战！圣灵奥斯卡","进入影之巅",StatManager.RUN_ACT);
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_999_0"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            taskMC = mc;
            _map.btnLevel.addChild(mc);
            addEvent();
            if(!BitBuffSetClass.getState(22455))
            {
               MapObjectControl.hideOrShowAllObjects(false);
               KTool.hideMapPlayerAndMonster();
               AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
               {
                  MapObjectControl.hideOrShowAllObjects(true);
                  KTool.showMapAllPlayerAndMonster();
               });
            }
            else
            {
               taskMC.gotoAndStop(4);
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
         else if(name == "btnShadowKing")
         {
            showShadowKingPanel();
         }
         else if(name == "btnAosika")
         {
            showAosikaPanel();
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
         ModuleManager.showModule(ClientConfig.getAppModule("HolySpiritAosikaMainPanel"));
      }
      
      private static function showShadowKingPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ShadowKingMianPanel"));
      }
      
      private static function showDaAnTiapPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PoseidonMainPanel"));
      }
      
      public static function playPreStory() : void
      {
         StatManager.sendStat2014("圣魔之战！圣灵奥斯卡","参与前置任务",StatManager.RUN_ACT);
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(getStorys(),function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BitBuffSetClass.setState(22455,1);
            addEvent();
            taskMC.gotoAndStop(4);
            StatManager.sendStat2014("圣魔之战！圣灵奥斯卡","完成前置任务",StatManager.RUN_ACT);
         });
      }
      
      public static function playStory() : void
      {
         SocketConnection.send(1022,86064741);
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory(getStorys(),function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BitBuffSetClass.setState(22455,1);
            addEvent();
            taskMC.gotoAndStop(4);
            ModuleManager.showModule(ClientConfig.getAppModule("AosikaVsShadowKingMainPanel"));
         });
      }
      
      private static function getStorys() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 1;
         var _loc3_:String = "active_20131122_14";
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["影皇，既然我能站在这里，说明我将改变历史，让我成为唯一一个在影之殿战胜你的对手！"],["哼哼…口气不小！！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YINGHUANG,["别以为你能站在这里就说明自己有多强，这一切都是由我决定的，我让你站着你就站着，让你倒下，你必须倒下！"],["那我们就开始吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.AOSIKA,["0xff0000" + MainManager.actorInfo.nick + "0xffffff好好看着吧！这回我要让影皇知道我们圣灵系最强的能力！"],["恩恩，我已经迫不及待了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
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
