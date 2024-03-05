package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   
   public class ElfKingLimitedDeliveryController
   {
      
      private static var _map:MapModel;
       
      
      public function ElfKingLimitedDeliveryController()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         initView();
      }
      
      private static function initView() : void
      {
         _map = MapManager.currentMap;
         _map.controlLevel.addEventListener(MouseEvent.CLICK,onMainClick);
         StatManager.sendStat2014("0927精灵王全民放送","打开副本地图","2019运营活动");
      }
      
      private static function onMainClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "bossBtn_0":
               Dialog(0);
               break;
            case "bossBtn_1":
               Dialog(1);
               break;
            case "bossBtn_2":
               Dialog(2);
               break;
            case "flyBookBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("ElfKingToEveryOneGuidePanel"),"正在打开....");
         }
      }
      
      private static function Dialog(param1:int) : void
      {
         var index:int = param1;
         var npcArr:Array = [2739,2959,3355];
         NpcDialog.show(npcArr[index],["欢迎来到王者圣域，准备好接受精灵王的考验了吗？！"],["来吧！我赛尔何惧？","我要准备一下。"],[function():void
         {
            getIsInActivity();
         }],false,null,true);
      }
      
      private static function getIsInActivity() : void
      {
         var date:Date = null;
         date = SystemTimerManager.sysBJDate;
         if(date.hours == 14 || date.hours == 19)
         {
            KTool.getMultiValue([15470],function(param1:Array):void
            {
               var va:Array = param1;
               if(BitUtils.getBit(va[0],int(date.minutes / 10 + (date.hours == 19 ? 6 : 0))) > 0)
               {
                  Alarm2.show("你已经完成了本轮对战，每10分钟一轮，请稍后再来哦！");
               }
               else
               {
                  if(int(date.minutes / 10) == 0 || int(date.minutes / 10) == 3)
                  {
                     StatManager.sendStat2014("0927精灵王全民放送","开始挑战霍德尔","2019运营活动");
                  }
                  else if(int(date.minutes / 10) == 1 || int(date.minutes / 10) == 4)
                  {
                     StatManager.sendStat2014("0927精灵王全民放送","开始挑战柯尔德","2019运营活动");
                  }
                  else
                  {
                     StatManager.sendStat2014("0927精灵王全民放送","开始挑战米斯蒂克","2019运营活动");
                  }
                  FightManager.fightNoMapBoss("",10952 + int(date.minutes / 10),false,true,function():void
                  {
                  });
               }
            });
         }
         else
         {
            Alarm2.show("每天14:00—15:00和19:00-20:00才能挑战精灵王哦！");
         }
      }
      
      public static function destroy() : void
      {
      }
   }
}
