package com.robot.app2.control
{
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   
   public class JiMieMoShenControlle
   {
       
      
      public function JiMieMoShenControlle()
      {
         super();
      }
      
      public static function init() : void
      {
         start();
      }
      
      public static function start() : void
      {
         if(MapManager.currentMap.id != 1015)
         {
            MapManager.changeMap(1015);
            return;
         }
         playStory();
      }
      
      private static function playStory() : void
      {
         TaskStoryPlayer.PlayAimate(22499,"map_1015_0",getStory(),openPanel);
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("JiMieMoShenPanel"));
      }
      
      private static function getStory() : Array
      {
         return [[TaskStoryPlayer.MAP_MOVIE,[null,1,"mc1"]],[TaskStoryPlayer.FUL_MOVIE,["active_20140815_3",true]],[TaskStoryPlayer.DIALOG,[NPC.QUIETUS_LOAD,["此剑陪我纵横多年，已然不堪再用。 "],["他的武器崩毁了！"]]],[TaskStoryPlayer.DIALOG,[NPC.HOLY_ARMOR_NIGHT,["我们是不会乘人之危的。待你拥有新的武器，堂堂正正一战！ "],["哈哈哈哈，好！"]]],[TaskStoryPlayer.DIALOG,[NPC.QUIETUS_LOAD,["神兵铸成之时，横扫诸敌之日！到时候你们可不要后悔了！ "],["不要小看我们！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGJIA_DILIE,["布莱克，我们先走！ "]]]];
      }
      
      public static function destroy() : void
      {
      }
   }
}
