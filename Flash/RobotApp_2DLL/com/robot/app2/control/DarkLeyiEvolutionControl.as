package com.robot.app2.control
{
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.npc.NPC;
   
   public class DarkLeyiEvolutionControl
   {
       
      
      public function DarkLeyiEvolutionControl()
      {
         super();
      }
      
      public static function init() : void
      {
         start();
      }
      
      public static function start() : void
      {
         StatManager.sendStat2014("暗黑雷伊超进化","点击装置",StatManager.RUN_ACT);
         if(MapManager.currentMap.id != 1020)
         {
            StatManager.sendStat2014("暗黑雷伊超进化","打开封面主UI",StatManager.RUN_ACT);
            ModuleManager.showModule(ClientConfig.getAppModule("DarkLeyiEvolutionOther"));
            return;
         }
         playStory();
      }
      
      private static function playStory() : void
      {
         TaskStoryPlayer.PlayAimate(22503,"map_1020_0",getStory(),openPanel);
      }
      
      private static function openPanel() : void
      {
         StatManager.sendStat2014("暗黑雷伊超进化","打开超进化主UI",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("DarkLeyiEvolutionMainPanel"));
      }
      
      private static function getStory() : Array
      {
         return [[TaskStoryPlayer.MAP_MOVIE,[null,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.YILANDI,["你….当真可以给我力量吗？ "],["当然可以。"]]],[TaskStoryPlayer.DIALOG,[NPC.MASTER_OF_DEVILDOM,["我知道你需要力量，而我也需要你这样的帮手，我给你力量，你帮我击败雷神，这样的交易很公平。 "],["….但我绝对不会臣服于你。"]]],[TaskStoryPlayer.DIALOG,[NPC.YILANDI,["我只臣服我自己的主人，我们的交易结束后，我就会离开。 "],["没有问题。"]]],[TaskStoryPlayer.DIALOG,[NPC.MASTER_OF_DEVILDOM,["那下面，交易开始吧！ "],["好！"]]],[TaskStoryPlayer.FUL_MOVIE,["darkleyifullmov",true]]];
      }
      
      public static function destroy() : void
      {
      }
   }
}
