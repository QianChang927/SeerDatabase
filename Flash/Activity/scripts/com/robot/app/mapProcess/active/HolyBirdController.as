package com.robot.app.mapProcess.active
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   
   public class HolyBirdController
   {
       
      
      public function HolyBirdController()
      {
         super();
      }
      
      private static function getPet() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1405_2"),function():void
         {
            TasksManager.accept(1405,function():void
            {
               TasksManager.complete(1405,0);
            });
         });
      }
      
      public static function initBird() : void
      {
         switch(MapManager.currentMap.id)
         {
            case 1:
               SocketConnection.send(1022,86055009);
               break;
            case 5:
               SocketConnection.send(1022,86055010);
               break;
            case 324:
               SocketConnection.send(1022,86055011);
               break;
            case 355:
               SocketConnection.send(1022,86055012);
               break;
            case 107:
               SocketConnection.send(1022,86055014);
         }
         MapListenerManager.add(MapManager.currentMap.depthLevel["holyBird"],function():void
         {
            if(MapManager.currentMap.id == 355 && Boolean(MainManager.actorInfo.isVip) && !BufferRecordManager.getState(MainManager.actorInfo,560))
            {
               SocketConnection.send(1022,86055008);
               BufferRecordManager.setState(MainManager.actorInfo,560,true);
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1405_1"),function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("HolyPetsFireMainPanel"));
               });
               return;
            }
            NpcDialog.show(NPC.SHENGGUANGHUONIAO,["超能NoNo的特有芯片，终于唤醒了我们圣光精灵一族，为了感谢它，我们圣光一族将永远为拥有超能NoNo的赛尔战斗！"],["我要立刻领取圣光精灵！！","了解圣光精灵一族","我再四处看看"],[function():void
            {
               if(MainManager.actorInfo.isVip)
               {
                  if(MapManager.currentMap.id == 355)
                  {
                     if(TasksManager.getTaskStatus(1405) == TasksManager.COMPLETE)
                     {
                        Alarm.show("你已经成功领取圣光火鸟！");
                     }
                     else
                     {
                        getPet();
                     }
                  }
                  else
                  {
                     MapManager.changeMap(355);
                  }
               }
               else
               {
                  NpcDialog.show(NPC.SUPERNONO,[MainManager.actorInfo.nick + "，拥有我就能激活圣光精灵的战斗特性，前往光辉殿堂免费领取圣光火鸟了！"],["立刻开通超能NoNo","我再四处看看"],[function():void
                  {
                     LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
                  }]);
               }
            },function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HolyPetsIntroPanel"));
            }]);
         },"圣光火鸟免费领取");
      }
   }
}
