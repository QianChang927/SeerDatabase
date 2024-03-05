package com.robot.app.mapProcess
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_332 extends BaseMapProcess
   {
       
      
      public function MapProcess_332()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         ToolTipManager.add(conLevel["award"],"授勋仪式");
         ToolTipManager.add(conLevel["begginer"],"荣誉之路");
         ToolTipManager.add(conLevel["rank"],"成就排行榜");
         ToolTipManager.add(conLevel["shop"],"军阶商店");
         ToolTipManager.add(depthLevel["book"],"军衔手册");
         conLevel.addEventListener(MouseEvent.CLICK,this.onConLvClicked);
         depthLevel.addEventListener(MouseEvent.CLICK,this.onConLvClicked);
      }
      
      private function onConLvClicked(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "book":
               ModuleManager.showAppModule("MilitaryRankMainPanel");
               break;
            case "award":
               if(MainManager.actorInfo.totalAchieve >= 600)
               {
                  ModuleManager.showAppModule("MilitaryRankAwardPanel");
               }
               else
               {
                  Alarm.show("很抱歉，只有达到准尉军衔才可以进行授勋仪式！");
               }
               break;
            case "begginer":
               Alarm.show("该功能暂未开放，敬请期待！");
               break;
            case "shop":
               ModuleManager.showAppModule("MilitaryRankShopPanel");
               break;
            case "rank":
               ModuleManager.showAppModule("MilitaryRankRankPanel");
               break;
            case "npc":
               NpcDialog.show(800,["赛尔勇士，我等你很久了！经过漫长的等待，军衔系统全面更新了！我相信，你会通过自己的勇气和实力证明自己！加油吧！"],["我会继续努力的！"]);
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConLvClicked);
         depthLevel.removeEventListener(MouseEvent.CLICK,this.onConLvClicked);
         ToolTipManager.remove(conLevel["award"]);
         ToolTipManager.remove(conLevel["begginer"]);
         ToolTipManager.remove(conLevel["rank"]);
         ToolTipManager.remove(conLevel["shop"]);
         ToolTipManager.remove(depthLevel["book"]);
         super.destroy();
      }
   }
}
