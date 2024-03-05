package com.robot.app2.control
{
   import com.robot.app.sptStar.LeiyiTrainController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class AllianceController
   {
       
      
      public function AllianceController()
      {
         super();
      }
      
      public static function onClickMiusi() : void
      {
         NpcDialog.show(NPC.MIUSI,["想要挑战并得到我力量么，那就跟我来试炼之域吧！在那里你讲面对最强的我！"],["我现在就去挑战你！","让我再考虑一下。"],[function():void
         {
            MapManager.changeMap(82);
         }]);
      }
      
      public static function onClickGaiya() : void
      {
         NpcDialog.show(NPC.GAIYA_EVO,["我就是无人能敌的战神！跟我一起去沃尔夫洞穴吧！在那里，我会教上你两招！"],["好，我也想成为强大的战神！","我还是觉得雷伊比较厉害！"],[function():void
         {
            MapManager.changeMap(423);
         }]);
      }
      
      public static function onClickLeiyi() : void
      {
         NpcDialog.show(NPC.LEIYI_EVO,["雷电万钧！我的力量已经抵达了前所未有的顶点！追随我成为正义的化身吧！"],["雷神！你是我永远的偶像！我会一直追随你！","我过一会再来！"],[function():void
         {
            MapManager.changeMap(1003);
         }]);
      }
      
      public static function onClickKaxiusi() : void
      {
         NpcDialog.show(NPC.KAXIUSI_SUPER,["大地之力再度苏醒！来炫彩神殿帮助我再度完成超进化吧！赛尔！"],["好，我和你一起去，我一定会帮你完成超进化的！","不了，我还有其他的事情要做！"],[function():void
         {
            MapManager.changeMap(98);
         }]);
      }
      
      public static function onClickBulaike() : void
      {
         NpcDialog.show(NPC.BULAIKE_EVO,["想要领教我超进化的力量？随时等待着你的挑战！"],["我正式向你发出挑战！","让我先准备一下！"],[function():void
         {
            MapManager.changeMap(1002);
         }]);
      }
      
      public static function onGo32() : void
      {
         NpcDialog.show(NPC.LEIYI_EVO,["想要训练雷电的力量就必须到赫尔卡星！你愿意与我共同去修炼连点的力量吗？"],["走！我陪你一起去特训！","让我先准备一下！"],[function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               LeiyiTrainController.showTrainPanel();
            });
            MapManager.changeMap(32);
         }]);
      }
      
      public static function onGo484() : void
      {
         NpcDialog.show(NPC.KAXIUSI_SUPER,["我是怀特星的守护者，只有那里才能让我的力量得到最大限度的成长！"],["我们一起去怀特星吧！","让我先准备一下！"],[function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               ModuleManager.showModule(ClientConfig.getAppModule("KaXiuSiTrainPanel"));
            });
            MapManager.changeMap(484);
         }]);
      }
      
      public static function onGo507() : void
      {
         NpcDialog.show(NPC.BULAIKE_EVO,["黑夜是我的信仰，而光明圣坛是我的归宿，在那里我才能得到特训的升华！"],["让我们一起去特训吧！","让我先准备一下！"],[function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               ModuleManager.showModule(ClientConfig.getAppModule("BuLaiKeTrainPanel"));
            });
            MapManager.changeMap(507);
         }]);
      }
   }
}
