package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ChristmasWinterGamesController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var activeMc:MovieClip;
       
      
      public function ChristmasWinterGamesController()
      {
         super();
      }
      
      public static function setup() : void
      {
         EventManager.addEventListener("winterGame2013End",onGameEnd);
         SocketConnection.addCmdListener(CommandID.FOOLISH_GAME_OVER,onGameOver);
      }
      
      private static function onGameOver(param1:SocketEvent) : void
      {
      }
      
      private static function onGameEnd(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("WinterGamesMainPanel3"));
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(!BufferRecordManager.getMyState(922))
         {
            getMc("christmasWinterGames2013_map964",taskBefore);
         }
      }
      
      private static function getMc(param1:String, param2:Function) : void
      {
         var mcName:String = param1;
         var func:Function = param2;
         LevelManager.closeMouseEvent();
         ResourceManager.getResource(ClientConfig.getMapAnimate(mcName),function(param1:MovieClip):void
         {
            activeMc = param1;
            MapManager.currentMap.topLevel.addChild(activeMc);
            func();
            LevelManager.openMouseEvent();
         },"ani",3,false);
      }
      
      private static function taskBefore() : void
      {
         SocketConnection.send(1022,86065340);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active201312045698"),function():void
         {
            AnimateManager.playMcAnimate(activeMc,1,"mc1",function():void
            {
               NpcDialog.show(NPC.SHIPER,["勇敢的赛尔们，静一静！我们亲爱的圣诞老人被雪夜魔王抓走了！我们必须营救圣诞老人！"],["太可恶了，我们要营救圣诞老人！"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["我与贾斯汀站长协商，决定举办一次冬季运动会，来选拔出最优秀的赛尔去营救圣诞老人。"],["是我！是我！让我来！"],[function():void
                  {
                     NpcDialog.show(NPC.JUSTIN,["不要急！这里是速度、耐力以及智慧的比拼。期待大家的表现！在这里只有优胜者才能获得积分，我为大家准备了丰厚的礼物！"],["太棒啦！"],[function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["那么，请大家打起精神，接受我们冬季运动会的挑战吧！让我们把圣诞老人安全的营救回赛尔号！"],["我们一定可以的！"],[function():void
                        {
                           AnimateManager.playMcAnimate(activeMc,2,"mc2",function():void
                           {
                              SocketConnection.send(1022,86065341);
                              BufferRecordManager.setMyState(922,true);
                              DisplayUtil.removeForParent(activeMc);
                              ModuleManager.showModule(ClientConfig.getAppModule("adown/WinterGamesGuidePanel"));
                           });
                        }]);
                     }]);
                  }]);
               }]);
            });
         });
      }
      
      public static function destroy() : void
      {
         activeMc = null;
         _map = null;
      }
   }
}
