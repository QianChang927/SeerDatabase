package com.robot.app.npc.npcClass
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_1
   {
       
      
      public function NpcClass_1()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,["各位小赛尔，欢迎来到赛尔号，我是最高指挥官—罗杰！在这里你能获得最全最新的0xff0000星际任务0xffffff和0xff0000本周活动0xffffff信息哦！"],["查看星际任务！","查看本周活动！","我了解了！"],[function():void
         {
            NpcDialog.show(NPC.SHIPER,["在无尽的宇宙中，有许多未知的星球等待着我们探索，你准备好了吗？我已经委派任务给你咯！快点开任务面板看看吧！"],["太棒了，我已经等不及了！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("TasksRecordPanel"),"正在加载赛尔任务档案....");
            }]);
         },function():void
         {
            NpcDialog.show(NPC.SHIPER,["每周的精彩活动是赛尔号上必不可少的项目之一，在这些活动中不仅能获得每周发现的新精灵，还能获得更多精美的礼物哦！"],["都有哪些活动呢？"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("NewYearPetFestivalPanel"),"正在加载本周活动....");
            }]);
         }]);
      }
   }
}
