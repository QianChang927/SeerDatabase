package com.robot.app.mapProcess
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.spt.FightBossController;
   import com.robot.app.sptStar.LeiyiTrainController;
   import com.robot.app.task.control.TaskController_768;
   import com.robot.app.task.taskscollection.Task532;
   import com.robot.app.task.taskscollection.Task768;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.utils.getDefinitionByName;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_17 extends BaseMapProcess
   {
       
      
      public function MapProcess_17()
      {
         super();
      }
      
      override protected function init() : void
      {
         var _map:BaseMapProcess = null;
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimat);
         conLevel["task_532"].visible = false;
         conLevel["task_532_escape"].visible = false;
         conLevel["task768MC"].visible = false;
         conLevel["cixixiBtn"].visible = false;
         _map = this;
         if(TasksManager.getTaskStatus(TaskController_768.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_768.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  Task768.initTaskForMap17(_map);
               }
               else
               {
                  Task532.initTask_2(_map);
               }
            });
         }
         else
         {
            Task532.initTask_2(_map);
         }
         SocketConnection.send(1022,86059534);
      }
      
      private function onAimat(param1:AimatEvent) : void
      {
         var e:AimatEvent = param1;
         var info:AimatInfo = e.info;
         if(info.userID != MainManager.actorID)
         {
            return;
         }
         if(typeLevel["firstMC"] == null && typeLevel["secondMC"] == null)
         {
            return;
         }
         if(Boolean(conLevel["s1_mc"].hitTestPoint(info.endPos.x,info.endPos.y)) && typeLevel["firstMC"] != null)
         {
            AnimateManager.playMcAnimate(conLevel["s1_mc"],0,"",function():void
            {
               DisplayUtil.removeForParent(typeLevel["firstMC"]);
               MapManager.currentMap.makeMapArray();
            });
         }
         if(Boolean(conLevel["s2_mc"].hitTestPoint(info.endPos.x,info.endPos.y)) && typeLevel["secondMC"] != null)
         {
            AnimateManager.playMcAnimate(conLevel["s2_mc"],0,"",function():void
            {
               DisplayUtil.removeForParent(typeLevel["secondMC"]);
               MapManager.currentMap.makeMapArray();
            });
         }
      }
      
      public function onGetWaterGun() : void
      {
         ItemManager.addEventListener(ItemEvent.CLOTH_LIST,this.onGetClothList);
         ItemManager.getCloth();
      }
      
      private function onGetClothList(param1:ItemEvent) : void
      {
         var evt:ItemEvent = param1;
         ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,this.onGetClothList);
         if(ItemManager.getClothIDs().indexOf(100052) != -1)
         {
            NpcDialog.show(NPC.SEER,["咦？那里有一把高压水枪，不知道是哪个冒失鬼丢的。"],["哦，原来我已经有了！"]);
         }
         else
         {
            NpcDialog.show(NPC.SEER,["咦？那里有一把高压水枪，不知道是哪个冒失鬼丢的。"],["赶紧捡起来灭火用，嘻嘻！"],[function():void
            {
               ItemAction.buyMultiItem(3,"喷水套装",100052,100053,100054);
            }]);
         }
      }
      
      public function changeBoss() : void
      {
         if(TasksManager.getTaskStatus(121) == TasksManager.ALR_ACCEPT)
         {
            LeiyiTrainController.initTrain_0();
         }
         else
         {
            getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
            FightBossController.fightBoss("里奥斯");
         }
      }
      
      override public function destroy() : void
      {
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
         ItemManager.removeEventListener(ItemEvent.CLOTH_LIST,this.onGetClothList);
         Task768.destroy();
      }
   }
}
