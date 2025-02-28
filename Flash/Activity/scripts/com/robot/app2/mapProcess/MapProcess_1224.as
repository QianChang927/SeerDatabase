package com.robot.app2.mapProcess
{
   import com.robot.app2.control.NewSeerController2016;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   
   public class MapProcess_1224 extends BaseMapProcess
   {
       
      
      private var panelList:Array;
      
      private var type:int;
      
      public function MapProcess_1224()
      {
         this.panelList = ["NewSeerVillageCulturePanel","NewseerBattlePathMainPanel","ThreePetRedoNewMainPanel"];
         super();
      }
      
      override protected function init() : void
      {
         conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         this.updatestate();
         EventManager.addEventListener(NewSeerTaskController.NEWSEERTASK_PRO_CHANGE,this.updatestate);
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         EventManager.removeEventListener(NewSeerTaskController.NEWSEERTASK_PRO_CHANGE,this.updatestate);
         super.destroy();
      }
      
      private function updatestate(param1:Event = null) : void
      {
         conLevel["mc_2"].visible = NewSeerTaskController.newSeer20170627TaskPro >= 8;
         conLevel["mc_0"].gotoAndStop(NewSeerTaskController.newSeer20170627TaskPro >= 1 ? 2 : 1);
         conLevel["mc_1"].gotoAndStop(NewSeerTaskController.newSeer20170627TaskPro >= 2 ? 2 : 1);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var _loc2_:int = 0;
         if(param1.target.name == "jsd")
         {
            this.npchandle(param1);
         }
         else if(param1.target.name.indexOf("_") != -1)
         {
            _loc2_ = int(param1.target.name.split("_")[1]);
            ModuleManager.showAppModule(this.panelList[_loc2_]);
         }
      }
      
      private function npchandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         StatManager.sendStat2014("2016年1月基础","点击贾斯汀","新手任务");
         StatManager.sendStat2014("2017年6月封闭","2点击场景中的贾斯汀","新手任务");
         EventManager.dispatchEvent(new Event(NewSeerController2016.NEWSEER_JSD_CLICKED));
         if(NewSeerTaskController.isNewSeer)
         {
            if(NewSeerTaskController.isNewVersionSeer20170627)
            {
               if(NewSeerTaskController.newSeer20170627TaskPro >= 4 || NewSeerController2016.getinstance().nowStep == 104)
               {
                  NpcDialog.show(NPC.JUSTIN,["你好，" + "0xff0000" + MainManager.actorInfo.nick + "0xffffff。，我是太空站站长贾斯汀，也是太空站新兵训练基地的负责人。接下来，就由我来指导你完成新兵训练。"],["我要继续训练！","我要购买一些药剂。"],[function():void
                  {
                     StatManager.sendStat2014("2017年6月封闭","选择继续训练","新手任务");
                     ModuleManager.showAppModule("NewseerTrainTaskPanel");
                  },function():void
                  {
                     StatManager.sendStat2014("2017年6月封闭","选择购买药剂","新手任务");
                     ModuleManager.showAppModule("NewseerTrainItemBuyPanel");
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.JUSTIN,["你好，" + "0xff0000" + MainManager.actorInfo.nick + "0xffffff。我是太空站站长贾斯汀，也是太空站新兵训练基地的负责人。接下来，就由我来指导你完成新兵训练。"],["我该做什么？"],[function():void
                  {
                     ModuleManager.showAppModule("NewseerTrainTaskPanel");
                  },null]);
               }
            }
         }
         else
         {
            NpcDialog.show(NPC.JUSTIN,["0xff0000" + MainManager.actorInfo.nick + "0xffffff。你已经完成了所有太空站新兵训练的课程。勇敢地在宇宙中遨游吧，你将创造你的精彩！"]);
         }
      }
   }
}
