package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class PetMeetController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function PetMeetController()
      {
         super();
      }
      
      public static function initMap51(param1:BaseMapProcess) : void
      {
         _map = param1;
         isShowTips(false);
         TasksManager.accept(1662);
         if(TasksManager.getTaskStatus(1662) != TasksManager.COMPLETE)
         {
            _map.btnLevel["seerClick"].addEventListener(MouseEvent.CLICK,_seerClick);
            _map.conLevel["npcMc"].visible = false;
            _map.btnLevel["npc2Click"].visible = false;
            _map.conLevel["bingqiling"].visible = false;
            _map.btnLevel["seerClick"].buttonMode = true;
         }
         else
         {
            _map.btnLevel["seerClick"].parent.removeChild(_map.btnLevel["seerClick"]);
            taskMc.parent.removeChild(taskMc);
            _map.btnLevel["npcClick"].addEventListener(MouseEvent.CLICK,_npcClick);
            _map.btnLevel["npc2Click"].addEventListener(MouseEvent.CLICK,_npcClick);
            _map.btnLevel["npcClick"].buttonMode = true;
            _map.btnLevel["npc2Click"].buttonMode = true;
         }
      }
      
      private static function _seerClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86060810);
         _map.btnLevel["seerClick"].removeEventListener(MouseEvent.CLICK,_seerClick);
         _map.btnLevel["seerClick"].parent.removeChild(_map.btnLevel["seerClick"]);
         MainManager.selfVisible = false;
         if(TasksManager.getTaskStatus(1662) != TasksManager.COMPLETE)
         {
            TaskDiaLogManager.single.playStory(getTaskArr(1),function():void
            {
               TasksManager.complete(1662,0,function():void
               {
                  _map.btnLevel["npcClick"].addEventListener(MouseEvent.CLICK,_npcClick);
                  _map.btnLevel["npc2Click"].addEventListener(MouseEvent.CLICK,_npcClick);
                  taskMc.parent.removeChild(taskMc);
                  _map.conLevel["npcMc"].visible = true;
                  _map.conLevel["bingqiling"].visible = true;
                  ModuleManager.showModule(ClientConfig.getAppModule("PetMeetPanel"));
                  MainManager.selfVisible = true;
                  _map.btnLevel["npc2Click"].visible = true;
               });
            });
         }
      }
      
      private static function _npcClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         if(_loc2_ == "npcClick")
         {
            NpcDialog.show(NPC.DALUQIEER,["在斯诺星玩0xFF0000勇闯冰雪关 赛尔套圈大赛 米鲁雪地疾走0xFFffff和参加0xFF0000SPT挑战0xFFffff都可以获得哦~每天最多找到20个，快去行动吧！"],["我立刻就去找！"]);
         }
         else if(_loc2_ == "npc2Click")
         {
            NpcDialog.show(NPC.DALUQIEER,["快去收集0xFF0000无瑕雪花0xFFFFFF来给我们制作冰淇淋吧！要收集到足够雪花就可以做好冰淇淋带我们回家啦！"],["哦哦哦！我马上就去！"]);
         }
      }
      
      private static function getTaskArr(param1:int = 1) : Array
      {
         var _loc3_:TaskMod = null;
         var _loc4_:TaskMod = null;
         var _loc5_:TaskMod = null;
         var _loc2_:Array = new Array();
         switch(param1)
         {
            case 1:
               _loc3_ = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
               _loc4_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DALUQIEER,["快去帮忙寻找0xFF0000无瑕雪花0xFFffff吧！帮我寻找到足够的0xFF0000无瑕雪花0xFFffff做出冰淇淋，我们就能成为好朋友哦！" + "哦对了，我这里还有10个0xFF0000无瑕雪花0xFFffff，第一次只要找到20个就能和我们其中一个成为朋友啦！"],["真的吗！那在哪才能找到无瑕雪花呢？"]);
               _loc5_ = new TaskMod(TaskDiaLogManager.DIALOG,NPC.DALUQIEER,["在斯诺星玩0xFF0000勇闯冰雪关 赛尔套圈大赛 米鲁雪地疾走0xFFffff和参加0xFF0000SPT挑战0xFFffff都可以获得哦~每天最多找到20个，快去行动吧！"],["好的！那你可要说话算话呀！"]);
               _loc2_.push(_loc3_,_loc4_,_loc5_);
         }
         return _loc2_;
      }
      
      public static function isShowTips(param1:Boolean) : void
      {
         (_map.btnLevel as MovieClip).tips1.visible = param1;
         (_map.btnLevel as MovieClip).tips2.visible = param1;
         (_map.btnLevel as MovieClip).tips3.visible = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         if(_map == null)
         {
            return null;
         }
         return _map.depthLevel["taskMc"];
      }
      
      public static function destroy() : void
      {
         _map.btnLevel["npcClick"].removeEventListener(MouseEvent.CLICK,_npcClick);
         _map.btnLevel["npc2Click"].removeEventListener(MouseEvent.CLICK,_npcClick);
      }
   }
}
