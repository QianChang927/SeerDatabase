package com.robot.app.protectSys
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.fightNote.FightTypeInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import flash.events.Event;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class KillPluginSys
   {
      
      private static var wrongNum:uint = 0;
      
      private static var panel:com.robot.app.protectSys.KillPluginPanel;
      
      private static var ftInfo:FightTypeInfo;
       
      
      public function KillPluginSys()
      {
         super();
      }
      
      public static function start(param1:FightTypeInfo) : void
      {
         ftInfo = param1;
         show();
      }
      
      private static function show() : void
      {
         panel = new com.robot.app.protectSys.KillPluginPanel(new Object());
         DisplayUtil.align(panel,null,AlignType.MIDDLE_CENTER);
         MainManager.getStage().addChild(panel);
         panel.addEventListener(com.robot.app.protectSys.KillPluginPanel.RIGHT,onRightHandler);
         panel.addEventListener(com.robot.app.protectSys.KillPluginPanel.WRONG,onWrongHandler);
         LevelManager.closeMouseEvent();
      }
      
      private static function onWrongHandler(param1:Event) : void
      {
         ++wrongNum;
         panel.destroy();
         panel.removeEventListener(com.robot.app.protectSys.KillPluginPanel.RIGHT,onRightHandler);
         panel.removeEventListener(com.robot.app.protectSys.KillPluginPanel.WRONG,onWrongHandler);
         panel = null;
         if(wrongNum >= 2)
         {
            MapManager.changeMap(1);
            LevelManager.openMouseEvent();
            wrongNum = 0;
         }
         else
         {
            show();
         }
      }
      
      private static function onRightHandler(param1:Event) : void
      {
         wrongNum = 0;
         panel.destroy();
         panel.removeEventListener(com.robot.app.protectSys.KillPluginPanel.RIGHT,onRightHandler);
         panel.removeEventListener(com.robot.app.protectSys.KillPluginPanel.WRONG,onWrongHandler);
         panel = null;
         LevelManager.openMouseEvent();
         if(ftInfo)
         {
            switch(ftInfo.type)
            {
               case 0:
                  FightManager.fightWithNpc(ftInfo.area);
                  break;
               case 1:
                  FightManager.fightWithBoss(ftInfo.bossName,ftInfo.bossRegion,ftInfo.isSkipKP,ftInfo.isMultiModel);
            }
         }
      }
   }
}
