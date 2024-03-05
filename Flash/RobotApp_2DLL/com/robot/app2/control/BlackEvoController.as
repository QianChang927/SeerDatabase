package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class BlackEvoController
   {
      
      private static var _taskMc:MovieClip;
      
      private static var _map:BaseMapProcess;
       
      
      public function BlackEvoController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         StatManager.sendStat2014("布莱克超进化","进入夜魔广场",StatManager.RUN_ACT);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_1002_0"),function(param1:MovieClip):void
         {
            taskMC = param1;
            _map.btnLevel.addChild(taskMC);
            addEvent();
            if(!BitBuffSetClass.getState(22459))
            {
               taskMC.gotoAndStop(1);
            }
            else
            {
               taskMC.gotoAndStop(5);
            }
         });
      }
      
      private static function addEvent() : void
      {
         if(taskMC)
         {
            taskMC.addEventListener(MouseEvent.CLICK,onClickHandler);
         }
      }
      
      private static function removeEvent() : void
      {
         if(taskMC)
         {
            taskMC.removeEventListener(MouseEvent.CLICK,onClickHandler);
         }
      }
      
      protected static function onClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         if(_loc2_ == "btnStart")
         {
            playPreStory();
         }
         else if(_loc2_ == "btnBlack")
         {
            StatManager.sendStat2014("布莱克超进化","点击布莱克",StatManager.RUN_ACT);
            showEvoPanel();
         }
         else if(_loc2_ == "btnSuolante")
         {
            StatManager.sendStat2014("布莱克超进化","点击索兰特",StatManager.RUN_ACT);
            showObtainPanel();
         }
      }
      
      private static function showEvoPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BlackEvoMainPanel"),"正在努力打开面板...");
      }
      
      private static function showObtainPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BlackObtainPanel"),"正在努力打开面板...");
      }
      
      public static function onClickEquip(param1:*) : void
      {
         if(MapManager.currentMap.id == 1002)
         {
            showEvoPanel();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BlackEvoMsgPanel"));
         }
      }
      
      private static function playPreStory() : void
      {
         _map.depthLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         StatManager.sendStat2014("布莱克超进化","参与前置任务",StatManager.RUN_ACT);
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            _map.depthLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            BitBuffSetClass.setState(22459,1);
            taskMC.gotoAndStop(5);
            StatManager.sendStat2014("布莱克超进化","完成前置任务",StatManager.RUN_ACT);
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         var _loc3_:String = "active_20130913_7";
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["布莱克，终于找到你了，你在这里做什么呢？"],["超能量…感觉就在我体内！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLANTE,["主人，相信你一定可以超越自我，成功超进化的！"],["什么…布莱克要超进化了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["放心吧！索兰特！我不会在错过这次机会，我将是战神联盟中第三个超进化的成员。"],["什么，难道雷神还没有超进化！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLANTE,["主人，我会给你能量的，你一定要坚持住！"],["哇…布莱克加油啊！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_NEW,["就是现在，我已经充满能量！"],["复仇者终将崛起！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULAIKE_EVO,["太好了，就是这种感觉，我已经不再是原来的布莱克了！0xff0000" + MainManager.actorInfo.nick + "0xffffff想试试我的实力吗？"],["我这就来！"]));
         return _loc1_;
      }
      
      private static function set taskMC(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
         removeEvent();
         _map = null;
      }
   }
}
