package com.robot.app2.control
{
   import com.robot.app.control.MidAutumnCelebrationController;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.npc.NPC;
   
   public class DarkAllianceBackAttackBattleControlle
   {
      
      private static var index:int = 0;
      
      private static var battleIndex:int = 0;
       
      
      public function DarkAllianceBackAttackBattleControlle()
      {
         super();
      }
      
      public static function init1() : void
      {
         StatManager.sendStat2014("暗黑战神联盟集结","打开暗黑雷伊UI",StatManager.RUN_ACT);
         index = 0;
         start();
      }
      
      public static function init2() : void
      {
         StatManager.sendStat2014("暗黑战神联盟集结","打开暗黑盖亚UI",StatManager.RUN_ACT);
         index = 1;
         start();
      }
      
      public static function init3() : void
      {
         StatManager.sendStat2014("暗黑战神联盟集结","打开暗黑缪斯UI",StatManager.RUN_ACT);
         index = 2;
         start();
      }
      
      public static function init4() : void
      {
         StatManager.sendStat2014("暗黑战神联盟集结","打开暗黑布莱克UI",StatManager.RUN_ACT);
         index = 3;
         start();
      }
      
      public static function init5() : void
      {
         StatManager.sendStat2014("暗黑战神联盟集结","打开暗黑卡修斯UI",StatManager.RUN_ACT);
         index = 4;
         start();
      }
      
      public static function start() : void
      {
         StatManager.sendStat2014("暗黑战神联盟集结","点击装置",StatManager.RUN_ACT);
         if(MapManager.currentMap.id != 1020)
         {
            MapManager.changeMap(1020);
            return;
         }
         playStory();
      }
      
      private static function playStory() : void
      {
         TaskStoryPlayer.PlayAimate(22510,"map_1020_1",getStory(),openPanel);
      }
      
      private static function openPanel() : void
      {
         MidAutumnCelebrationController.tryFinish(5);
         ModuleManager.showModule(ClientConfig.getAppModule("DarkAllianceBackAttackGetPetPanel"),"正在打开...",{"BossIndex":index});
      }
      
      private static function getStory() : Array
      {
         return [[TaskStoryPlayer.MAP_MOVIE,[null,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.Yi_XIU_RANDY,["为什么你们最后选择的是我们？ "],["你和暗黑战神联盟的其他成员最适合。"]]],[TaskStoryPlayer.DIALOG,[NPC.Yi_XIU_RANDY,["我只忠于我的索伦森大人，我对冥界没有兴趣，对你们所说的新秩序也没有兴趣。 "]]],[TaskStoryPlayer.DIALOG,[NPC.DIEN,["恐怕你还不太了解冥界，你不是想见到索伦森吗，也许那里会有他的一丝残影。 "],["真的？！"]]],[TaskStoryPlayer.DIALOG,[NPC.LEIYI_EVO,["迪恩说的没有错，你进化后能力不逊色于我。拜托了，伊修兰迪。 "]]],[TaskStoryPlayer.DIALOG,[NPC.Yi_XIU_RANDY,["那我可说好，我们只是去寻找索伦森。 "],["但.....希望你可以安全找到吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[null,2,"mc2"]]];
      }
      
      public static function destroy() : void
      {
      }
   }
}
