package com.robot.app2.mapProcess.control
{
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class HalloweenRevelPartyTask1Plot extends PlotTask
   {
      
      public static var canAward:Boolean;
      
      public static var init:Boolean = true;
       
      
      private var itemNum:int;
      
      public function HalloweenRevelPartyTask1Plot(param1:MovieClip)
      {
         super(param1);
         StatManager.sendStat2014("1101万圣节狂欢派对","进入活动场景","2019运营活动");
      }
      
      override protected function onNpcClick(param1:int) : void
      {
         var ok:Function = null;
         var cancel:Function = null;
         var npcId:int = param1;
         ok = function():void
         {
         };
         cancel = function():void
         {
            canAward = false;
            updateState();
            ModuleManager.showAppModule("HalloweenRevelPartyMainPanel");
         };
         switch(npcId)
         {
            case 1:
               NpcDialogNew_1.show(2984,["是不是挑花了眼了？怎么样，你想开哪个宝箱呢？"],["让我再挑一挑！","我想晚些再来开宝箱！"],[ok,cancel]);
               break;
            case 2:
               NpcDialogNew_1.show(2984,["哇哦，这奖励看起来不错！要不要再开一个宝箱试试呢？"],["再开一个！","晚些再来！"],[ok,cancel]);
         }
      }
      
      override protected function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               if(MapManager.currentMap.id != 1)
               {
                  MapManager.changeMap(1);
               }
               else
               {
                  MapManager.changeMap(1334);
               }
               break;
            case "award_" + index:
               if(this.itemNum >= 2)
               {
                  SocketConnection.sendWithPromise(43304,[19,0]).then(function():void
                  {
                     onNpcClick(2);
                     updateState();
                  });
               }
               else
               {
                  Alarm.show("需要2颗蝙蝠软糖，你现在没有足够的蝙蝠软糖哦！");
               }
               break;
            case "npc":
               init = false;
               if(!canAward)
               {
                  ModuleManager.showAppModule("HalloweenRevelPartyMainPanel");
               }
               else
               {
                  this.onNpcClick(1);
               }
         }
      }
      
      override protected function updateState() : void
      {
         ItemManager.updateAndGetItemsNum([1720863],function(param1:Array):void
         {
            itemNum = param1[0];
            var _loc2_:int = 1;
            while(ui["gift_" + _loc2_] != null)
            {
               ui["gift_" + _loc2_].gotoAndStop(canAward ? 2 : 1);
               _loc2_++;
            }
            ui["arrow"].visible = init && !canAward;
         });
      }
   }
}
