package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SevenDevilController
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
       
      
      public function SevenDevilController()
      {
         super();
      }
      
      public static function initForMap1010() : void
      {
         StatManager.sendStat2014("魔界之门的激战！天蛇七魔将乱入！","点击装置",StatManager.RUN_ACT);
         _map = MapManager.currentMap;
         start();
      }
      
      public static function start() : void
      {
         if(MapManager.currentMap.id != 1010)
         {
            MapManager.changeMap(1010);
         }
         else if(BitBuffSetClass.getState(22492) == 0)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("sevenDevil"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.controlLevel.addChild(taskMc);
               _map.topLevel.visible = false;
               KTool.hideMapAllPlayerAndMonster();
               _map.depthLevel.visible = false;
               playStory();
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("devilGate/SevenDevilPanel"));
         }
      }
      
      private static function playStory() : void
      {
         AnimateManager.playMcAnimate(taskMc,1,"mc",function():void
         {
            NpcDialog.show(NPC.PURGATORY_LORD,["什么天蛇七魔将，完全不堪一击！"],["我要救回天蛇七魔将！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               _map.depthLevel.visible = true;
               BitBuffSetClass.setState(22492,1);
               DisplayUtil.removeForParent(taskMc);
               _map.topLevel.visible = true;
            }]);
         });
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
         DisplayUtil.removeForParent(taskMc);
         taskMc = null;
         _map = null;
      }
   }
}
