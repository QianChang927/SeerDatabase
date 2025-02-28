package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class Nian2015SecondController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Nian2015SecondController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(!BitBuffSetClass.getState(22646))
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_1060_0"),function(param1:MovieClip):void
            {
               var taskMC:MovieClip = param1;
               BitBuffSetClass.setState(22646,1);
               LevelManager.iconLevel.visible = false;
               KTool.showMapAllPlayerAndMonster(false);
               map.conLevel.addChild(taskMC);
               map.depthLevel.visible = false;
               AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
               {
                  LevelManager.iconLevel.visible = true;
                  KTool.showMapAllPlayerAndMonster(true);
                  map.conLevel.removeChild(taskMC);
                  map.depthLevel.visible = true;
                  initState();
                  NpcDialog.show(NPC.NIAN_JUN,["0xff00002月13日—2月16日，每天14:00-14:30；18:00-18:30，0xffffff各位都可以在这里抢到从天而降的红包哦！小小红包藏大礼，钻石道具人人拿！"],["这么好！我一定会来！"]);
               });
            });
         }
         else
         {
            initState();
         }
         StatManager.sendStat2014("年兽送好礼第二弹","进入活动场景","2015运营活动");
      }
      
      private static function initState() : void
      {
         CommonUI.addYellowExcal(_map.btnLevel,500,160);
         _map.btnLevel.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var func2:Function = null;
         var date:Date = null;
         var ondate:Boolean = false;
         var onMin:Boolean = false;
         var num:int = 0;
         var e:MouseEvent = param1;
         var showDialog:Function = function(param1:int):void
         {
            var num:int = param1;
            KTool.getMultiValue([13587,13588],function(param1:Array):void
            {
               var arr:Array = param1;
               if(KTool.getBit(arr[1],num) > 0)
               {
                  if(num == 3 || num == 6)
                  {
                     showDialog2();
                     return;
                  }
                  NpcDialog.show(NPC.NIAN_JUN,["不要急嘛，这一批红包已经发完了，再让我稍微准备一下。5到10分钟内，你就可以再来抢红包啦！ "]);
                  return;
               }
               if(arr[0] >= 50)
               {
                  NpcDialog.show(NPC.NIAN_JUN,["小赛尔不要太贪心哦，0xff0000今天你已经获得50个红包啦！0xffffff明天再来抢红包吧！ "],["明天再来抢，大奖我还要！"]);
               }
               else
               {
                  NpcDialog.show(NPC.NIAN_JUN,["我的红包已经准备好了，你准备好抢了吗？  "],["开始吧，这次大奖一定是我的！","再让我准备一下"],[function():void
                  {
                     ModuleManager.showAppModule("Nian2015SecondGamePanel");
                  }]);
               }
            });
         };
         var showDialog2:Function = function():void
         {
            NpcDialog.show(NPC.NIAN_JUN,["0xff00002月13日—2月16日，每天14:00-14:30；18:00-18:30，0xffffff各位都可以在这里抢到从天而降的红包哦！小小红包藏大礼，钻石道具人人拿！"],["我想了解一下这次活动。","这么好！我一定会来！"],[func2]);
         };
         func2 = function():void
         {
            ModuleManager.showAppModule("Nian2015SecondPanel");
         };
         if(e.target.name == "btn_npc")
         {
            date = SystemTimerManager.sysBJDate;
            ondate = date.getFullYear() == 2015 && date.month == 1 && date.date >= 13 && date.date <= 16;
            if(ondate)
            {
               ondate = date.hours == 14 && date.minutes < 30 || date.hours == 18 && date.minutes < 30;
            }
            if(ondate)
            {
               onMin = date.minutes < 5 || date.minutes >= 10 && date.minutes < 15 || date.minutes >= 20;
               if(onMin)
               {
                  num = 1;
                  if(date.hours == 18)
                  {
                     num = 4;
                  }
                  if(date.minutes >= 10 && date.minutes < 15)
                  {
                     num += 1;
                  }
                  if(date.minutes >= 20)
                  {
                     num += 2;
                  }
                  showDialog(num);
               }
               else
               {
                  NpcDialog.show(NPC.NIAN_JUN,["别急别急，让我准备一下嘛！0xff0000最多再过5分钟，0xffffff下一批红包让你抢到爽！ "],["我想了解一下这次活动。","我已经迫不及待了！"],[func2]);
               }
            }
            else
            {
               showDialog2();
            }
         }
      }
      
      public static function destroy() : void
      {
         CommonUI.removeYellowExcal(_map.btnLevel);
         _map = null;
      }
   }
}
