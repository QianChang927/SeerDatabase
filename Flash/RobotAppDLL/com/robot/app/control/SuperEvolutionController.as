package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class SuperEvolutionController
   {
      
      private static var _insatnce:com.robot.app.control.SuperEvolutionController;
       
      
      private var curMap:BaseMapProcess;
      
      public function SuperEvolutionController()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.control.SuperEvolutionController
      {
         return _insatnce = _insatnce || new com.robot.app.control.SuperEvolutionController();
      }
      
      public function startPro(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         this.curMap = map;
         if(BufferRecordManager.getMyState(697))
         {
            KTool.showMapAllPlayerAndMonster();
            (this.curMap.conLevel["evolutionMc"] as MovieClip).visible = false;
            this.curMap.conLevel["cixixiBtn"].visible = true;
            (this.curMap.conLevel["npcBtn"] as MovieClip).visible = true;
            (this.curMap.conLevel["evolutionMc"] as MovieClip).visible = false;
         }
         else
         {
            SocketConnection.send(1022,86059535);
            KTool.hideMapAllPlayerAndMonster();
            (this.curMap.conLevel["evolutionMc"] as MovieClip).visible = true;
            (this.curMap.conLevel["evolutionMc"] as MovieClip).buttonMode = true;
            this.curMap.conLevel["cixixiBtn"].visible = false;
            this.curMap.topLevel.mouseChildren = false;
            this.curMap.topLevel.mouseEnabled = false;
            (this.curMap.conLevel["npcBtn"] as MovieClip).visible = false;
            (this.curMap.conLevel["evolutionMc"] as MovieClip).visible = true;
         }
         (this.curMap.conLevel["npcBtn"] as MovieClip).buttonMode = true;
         MapListenerManager.add(this.curMap.conLevel["cixixiBtn"],function():void
         {
            SocketConnection.send(1022,86059537);
            ModuleManager.showModule(ClientConfig.getAppModule("ChixixibiSuperEvolutionPanel"));
         },"赤西西比超进化-火山斗士赤西格");
         (this.curMap.conLevel["npcBtn"] as MovieClip).addEventListener(MouseEvent.CLICK,this.sayEndHandler);
         (this.curMap.conLevel["evolutionMc"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
      }
      
      protected function onMouseClickHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         this.curMap.conLevel["evolutionMc"].removeEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
         TaskDiaLogManager.single.playStory(this.storyLineList,function():void
         {
            (curMap.conLevel["npcBtn"] as MovieClip).visible = true;
            (curMap.conLevel["evolutionMc"] as MovieClip).visible = true;
            (curMap.conLevel["evolutionMc"] as MovieClip).buttonMode = true;
            SocketConnection.send(1022,86059536);
            BufferRecordManager.setMyState(697,true);
         });
      }
      
      protected function sayEndHandler(param1:MouseEvent) : void
      {
         (this.curMap.conLevel["evolutionMc"] as MovieClip).buttonMode = false;
         TaskDiaLogManager.single.playStory([new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["打败赤西西比就可以从他身上获得超进化道具，获得火山斗士赤西格，赛尔们快去试试吧！"],["好的,我知道了"])],this.endStoryHandler);
      }
      
      private function endStoryHandler() : void
      {
         KTool.showMapAllPlayerAndMonster();
         this.curMap.conLevel["cixixiBtn"].visible = true;
         (this.curMap.conLevel["evolutionMc"] as MovieClip).visible = false;
      }
      
      protected function get storyLineList() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.movieMc,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["赛小息！让你不小心！闯祸了吧！"],["我也不是故意的……"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["现在可怎么办啊，那些赤西西比好像情况更糟了！"],["赶紧想想办法！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.movieMc,2,"mc2"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["这些赤西西比的脾气越来越暴躁了，我们得想办法让他们先平静下来。"],["能用什么办法呢？"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["看来只能以暴制暴了，看我的斩月双刀！"],["阿铁打，你别冲动。"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["我们只要把火神之元拿回来就可以了，不要伤到这些赤西西比！"],["放心，我知道的。"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_];
      }
      
      protected function get movieMc() : MovieClip
      {
         return this.curMap.conLevel["evolutionMc"] as MovieClip;
      }
      
      public function destroy() : void
      {
         (this.curMap.conLevel["evolutionMc"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
         (this.curMap.conLevel["evolutionMc"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.sayEndHandler);
         _insatnce = null;
      }
   }
}
