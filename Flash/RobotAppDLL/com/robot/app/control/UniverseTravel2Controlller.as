package com.robot.app.control
{
   import com.robot.app.task.petstory.util.JPButton;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public class UniverseTravel2Controlller
   {
      
      private static var _instance:com.robot.app.control.UniverseTravel2Controlller;
       
      
      private var PREV_TASK_ID:uint = 1635;
      
      private var _mc1:JPButton;
      
      private var _mc2:JPButton;
      
      private var _mc3:JPButton;
      
      private var _mc4:JPButton;
      
      public function UniverseTravel2Controlller()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.control.UniverseTravel2Controlller
      {
         return _instance = _instance || new com.robot.app.control.UniverseTravel2Controlller();
      }
      
      public function start() : void
      {
         this._mc1 = new JPButton(this.groupBtn.mc1);
         this._mc2 = new JPButton(this.groupBtn.mc2);
         this._mc3 = new JPButton(this.groupBtn.mc3);
         this._mc4 = new JPButton(this.groupBtn.mc4);
         if(TasksManager.getTaskStatus(this.PREV_TASK_ID) != TasksManager.COMPLETE)
         {
            this.groupBtn.visible = false;
            this.animationMC.visible = true;
            KTool.hideMapAllPlayerAndMonster();
            TasksManager.accept(this.PREV_TASK_ID);
            SocketConnection.send(1022,86060564);
            TaskDiaLogManager.single.playStory(this.storyLine,function():void
            {
               SocketConnection.send(1022,86060565);
               TasksManager.complete(PREV_TASK_ID,0,function():void
               {
                  animationMC.visible = false;
                  groupBtn.visible = true;
                  KTool.showMapAllPlayerAndMonster();
                  ModuleManager.showModule(ClientConfig.getAppModule("UniversalTwoPanel"));
               });
            });
         }
         else
         {
            this.groupBtn.visible = true;
            this.animationMC.visible = false;
            KTool.showMapAllPlayerAndMonster();
         }
         this.addEvents();
      }
      
      private function addEvents() : void
      {
         this.groupBtn.mc4.addEventListener(MouseEvent.MOUSE_OVER,this.onMouseOverHandler);
         this.groupBtn.mc4.addEventListener(MouseEvent.MOUSE_OUT,this.onMouseOutHandler);
         this.groupBtn.mc1.addEventListener(MouseEvent.CLICK,this.on1Click);
         this.groupBtn.mc2.addEventListener(MouseEvent.CLICK,this.on2Click);
         this.groupBtn.mc3.addEventListener(MouseEvent.CLICK,this.on3Click);
         this.groupBtn.mc4.addEventListener(MouseEvent.CLICK,this.on4Click);
      }
      
      public function removeEvents() : void
      {
         this.groupBtn.mc4.removeEventListener(MouseEvent.MOUSE_OVER,this.onMouseOverHandler);
         this.groupBtn.mc4.removeEventListener(MouseEvent.MOUSE_OUT,this.onMouseOutHandler);
         this.groupBtn.mc1.removeEventListener(MouseEvent.CLICK,this.on1Click);
         this.groupBtn.mc2.removeEventListener(MouseEvent.CLICK,this.on2Click);
         this.groupBtn.mc3.removeEventListener(MouseEvent.CLICK,this.on3Click);
         this.groupBtn.mc4.removeEventListener(MouseEvent.CLICK,this.on4Click);
      }
      
      private function on1Click(param1:MouseEvent) : void
      {
         if(TasksManager.getTaskStatus(this.PREV_TASK_ID) != TasksManager.COMPLETE)
         {
            return;
         }
         SocketConnection.send(1022,86060566);
         ModuleManager.showModule(ClientConfig.getAppModule("PetCollectorPKPanel"),"正在努力打开面板...");
      }
      
      private function on2Click(param1:MouseEvent) : void
      {
         if(TasksManager.getTaskStatus(this.PREV_TASK_ID) != TasksManager.COMPLETE)
         {
            return;
         }
         SocketConnection.send(1022,86060567);
         ModuleManager.showModule(ClientConfig.getAppModule("UniversalOnePanel"));
      }
      
      private function on3Click(param1:MouseEvent) : void
      {
         if(TasksManager.getTaskStatus(this.PREV_TASK_ID) != TasksManager.COMPLETE)
         {
            return;
         }
         SocketConnection.send(1022,86060569);
         ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/KuangbaodianjituEvolutionPanel"),"正在努力打开面板...");
      }
      
      private function on4Click(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(TasksManager.getTaskStatus(this.PREV_TASK_ID) != TasksManager.COMPLETE)
         {
            return;
         }
         TaskDiaLogManager.single.playStory([new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIDISINUO,[MainManager.actorInfo.nick + " ,如果你拥有了宇宙旅行团的超进化能量，就能和我们一起挑战克梅纳。快将我们5个都放入精灵背包吧！~ "],["嗯！暗黑势力入侵，赛尔号义不容辞！"])],function():void
         {
            SocketConnection.send(1022,86060568);
            ModuleManager.showModule(ClientConfig.getAppModule("UniversalTwoPanel"));
         });
      }
      
      private function onMouseOutHandler(param1:Event) : void
      {
         this._mc1.gotoAndStop(1);
         this._mc2.gotoAndStop(1);
         this._mc3.gotoAndStop(1);
      }
      
      private function onMouseOverHandler(param1:Event) : void
      {
         this._mc1.gotoAndStop(2);
         this._mc2.gotoAndStop(2);
         this._mc3.gotoAndStop(2);
      }
      
      private function onClickHandler(param1:MouseEvent) : void
      {
         if(TasksManager.getTaskStatus(this.PREV_TASK_ID) == TasksManager.COMPLETE)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("UniversalTwoPanel"));
         }
      }
      
      protected function get storyLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["艾迪斯诺！狂暴电击兔！宇宙旅行团全部出现了！"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,2,"mc2"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KUANGBAODIANJITU,["团长，这家伙太嚣张了！我们应该代表正义消灭这个黑不溜秋的家伙！"],["嗯！它还打伤了这里的守护者呢！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,3,"mc3"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIDISINUO,["不要冲动！时间转换器的预言显示，只有我们聚集在一起才能打败它。"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["还有我还有我！预言说，最快乐最光明的元素汇聚在一起，就能轻松打败它~ "]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this.animationMC,4,"mc4"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIDISINUO,["0xff0000" + MainManager.actorInfo.nick + "0xffffff ,如果你拥有了宇宙旅行团的超进化能量，就能和我们一起挑战克梅纳。快将我们5个都放入精灵背包吧！~ "],["嗯！暗黑势力入侵，赛尔号义不容辞！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_];
      }
      
      protected function get animationMC() : MovieClip
      {
         return MapManager.currentMap.controlLevel["animationMC"] as MovieClip;
      }
      
      public function get groupBtn() : MovieClip
      {
         return MapManager.currentMap.depthLevel["groupBtn"] as MovieClip;
      }
      
      public function depose() : void
      {
         _instance = null;
         this.removeEvents();
      }
   }
}
