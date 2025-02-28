package com.robot.app.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_82 extends BaseMapProcess
   {
      
      public static const BUFFER_ID:uint = 22468;
      
      private static var _taskMc:MovieClip;
       
      
      private var _taskMc:MovieClip;
      
      public function MapProcess_82()
      {
         super();
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BitBuffSetClass.getState(BUFFER_ID);
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         MapListenerManager.add(depthLevel["invitation"],function():void
         {
            getDefinitionByName("com.robot.app2.control.InvitationFromAresUnionController").init();
         },"战神联盟的邀请！缪斯的承诺！");
         if(MapManager.prevMapID == 1003)
         {
            depthLevel["invitation"].gotoAndStop(2);
         }
         if(BitBuffSetClass.getState(BUFFER_ID) == true)
         {
            if(MapManager.prevMapID == 1003)
            {
               depthLevel["invitation2"].gotoAndStop(4);
            }
            else
            {
               depthLevel["invitation2"].gotoAndStop(2);
            }
         }
         else if(MapManager.prevMapID == 1003)
         {
            depthLevel["invitation2"].gotoAndStop(3);
         }
         else
         {
            depthLevel["invitation2"].gotoAndStop(1);
         }
         MapListenerManager.add(depthLevel["invitation2"],function():void
         {
            ClickInvitation2Start();
         },"战神联盟的邀请！缪斯的承诺！");
      }
      
      private function set taskMc(param1:MovieClip) : void
      {
         this._taskMc = param1;
      }
      
      private function get taskMc() : MovieClip
      {
         return this._taskMc;
      }
      
      public function ClickInvitation2Start() : void
      {
         StatManager.sendStat2014("暗黑缪斯","点击暗黑缪斯",StatManager.USER_CHARACTER);
         if(!isTaskDone)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_82_2"),function(param1:MovieClip):void
            {
               taskMc = param1;
               MapManager.currentMap.controlLevel.addChild(taskMc);
               startPreTask();
            });
         }
         else
         {
            this.OpenPanel();
         }
      }
      
      private function startPreTask() : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         StatManager.sendStat2014("暗黑缪斯","参加前置任务",StatManager.USER_CHARACTER);
         KTool.hideMapAllPlayerAndMonster();
         depthLevel["invitation"].visible = false;
         depthLevel["invitation2"].visible = false;
         storyPlayer = new TaskStoryPlayer();
         TaskDiaLogManager.single.playStory(this.GetStory(),function():void
         {
            storyPlayer.destory();
            PlayEnd();
         });
      }
      
      private function GetStory() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMc,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["恩…我早就知道你的存在，但是没想到你竟然敢独自前来！"],["哼哼…我不做没把握的事情！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["别以为你的外形和我一样就可以拥有我的实力，你只是一个复制品而已！"],["你说什么！！我可不是好惹的！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DARK_MIUSI,["缪斯…你准备好了吗！我这次来的目的就是击败你，然后继承你天蛇星少主的宝座！"],["集结吧！我的暗黑战友们！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMc,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DARK_MIUSI,["哼哼…天蛇少主缪斯，没想到吧！"],["来再多人也是一样！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMc,3,"mc3"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["缪斯少主，你放心我会帮助你的！暗黑战神联盟，你们休想伤到缪斯！"],["不堪一击的小鬼！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.taskMc,4,"mc4"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DARK_MIUSI,["来吧！天蛇星少主，想战胜我可没这么简单！先战胜暗黑战神联盟再说吧！"],["复制品！等着受死吧！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_];
      }
      
      private function PlayEnd() : void
      {
         StatManager.sendStat2014("暗黑缪斯","完成前置任务",StatManager.USER_CHARACTER);
         KTool.showMapAllPlayerAndMonster();
         DisplayUtil.removeForParent(this.taskMc);
         this._taskMc = null;
         depthLevel["invitation"].visible = true;
         depthLevel["invitation2"].visible = true;
         depthLevel["invitation2"].gotoAndStop(2);
         BitBuffSetClass.setState(BUFFER_ID,1,function():void
         {
            OpenPanel();
         });
      }
      
      private function OpenPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("darkMuseTerror/DarkMuseTerrorPanel"));
      }
      
      override public function destroy() : void
      {
      }
   }
}
