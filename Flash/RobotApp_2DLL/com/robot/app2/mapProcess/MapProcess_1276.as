package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   
   public class MapProcess_1276 extends BaseMapProcess
   {
       
      
      public function MapProcess_1276()
      {
         super();
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
               ModuleManager.showModule(ClientConfig.getAppModule("MonsterKingAllGetGuidePanel"),"正在打开....");
         }
      }
      
      private static function Dialog(param1:int) : void
      {
         var index:int = param1;
         var npcArr:Array = [2643,2607,2542];
         NpcDialogNew_1.show(npcArr[index],["欢迎来到王者圣域，准备好接受精灵王的考验了吗？"],["来吧！我赛尔何惧？","我要准备一下。"],[function():void
         {
            getIsInActivity();
         }]);
      }
      
      private static function getIsInActivity() : void
      {
         var date:Date = null;
         var k:uint = 0;
         date = SystemTimerManager.sysBJDate;
         if(ActivityTimeControl.getIsinTime(57) && (date.hours == 14 || date.hours == 19))
         {
            k = date.hours == 14 ? 0 : 6;
            KTool.getMultiValue([15470],function(param1:Array):void
            {
               var va:Array = param1;
               if(BitUtils.getBit(va[0],int(date.minutes / 10) + k) > 0)
               {
                  Alarm2.show("你已经完成了本轮对战，每10分钟一轮，请稍后再来哦！");
               }
               else
               {
                  if(int(date.minutes / 10) == 0 || int(date.minutes / 10) == 3)
                  {
                     StatManager.sendStat2014("0105精灵王全民放送","挑战摩哥斯","2018运营活动");
                  }
                  if(int(date.minutes / 10) == 1 || int(date.minutes / 10) == 4)
                  {
                     StatManager.sendStat2014("0105精灵王全民放送","挑战霍德尔","2018运营活动");
                  }
                  if(int(date.minutes / 10) == 2 || int(date.minutes / 10) == 5)
                  {
                     StatManager.sendStat2014("0105精灵王全民放送","挑战米斯蒂克","2018运营活动");
                  }
                  FightManager.fightNoMapBoss("",10952 + int(date.minutes / 10),false,true,function():void
                  {
                  });
               }
            });
         }
         else
         {
            Alarm2.show("只有在1月5日-1月11日，每天14:00—15:00和19:00—20:00才能挑战精灵王哦！");
         }
      }
      
      override protected function init() : void
      {
         super.init();
         conLevel.addEventListener(MouseEvent.CLICK,onMainClick);
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
