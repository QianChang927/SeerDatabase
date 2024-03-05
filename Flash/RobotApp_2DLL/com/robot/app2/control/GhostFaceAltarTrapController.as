package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class GhostFaceAltarTrapController
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static const BUFFERID:uint = 1393;
      
      private static var _itemNum:int;
       
      
      public function GhostFaceAltarTrapController()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         _map = MapManager.currentMap;
         update();
         _map.controlLevel.addEventListener(MouseEvent.CLICK,onMainClick);
         playMc(1);
      }
      
      private static function onMainClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(KTool.getIndex(param1.target));
         switch(param1.target.name)
         {
            case "closeBtn":
         }
      }
      
      private static function playMc(param1:int) : void
      {
         var index:int = param1;
         if(taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_ghostFaceAltarTrap"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map = MapManager.currentMap;
               _map.controlLevel.addChild(taskMc);
               startPreTask(index);
            });
         }
         else
         {
            startPreTask(index);
         }
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            BufferRecordManager.setMyState(BUFFERID,true,function():void
            {
               if(index == 1)
               {
                  NpcDialog.show(NPC.ANLISI,["你回来啦！咦，这……这不是迪恩和英卡洛斯吗！"],["..."],[function():void
                  {
                     NpcDialog.show(NPC.ANNIER,["没想到吧？这次真是天降大运，我们居然抓到了他们！主上一定会大大奖励我们的！"],["你怎么做到的？"],[function():void
                     {
                        NpcDialog.show(NPC.ANNIER,["之前我去琳那里确认一下情况，路上正好看到他们。我干脆故技重施，装作是前来救援的好心人，果然，再次轻松得手，哈哈哈！"],["..."],[function():void
                        {
                           NpcDialog.show(NPC.DIEN,["你这个骗子！想不到你这样外表光鲜的精灵，实际上却是虫后的走狗！呸！"],["闭嘴！给我老实点"],[function():void
                           {
                              NpcDialog.show(NPC.ANNIER,["呵，走狗？你比我想象中还要蠢一些啊！"],["..."],[function():void
                              {
                                 NpcDialog.show(NPC.ANLISI,["等下见到长老们，可别尿了裤子啊，哈哈哈！"],["长老们？原来是大暗黑天的人……这下倒是省了我的功夫！）"],[function():void
                                 {
                                    playMc(2);
                                 }]);
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.ANNIER,["好了，先不管他们了。接下来要做的事情，才是我们这次行动的关键！"],["..."],[function():void
                  {
                     NpcDialog.show(NPC.ANNIER,["琳那边我已经布置好了，她肯定会上钩的。等下我们还按照之前的计划行事，科兹莫之星，势在必得！"],["..."],[function():void
                     {
                        NpcDialog.show(NPC.ANLISI,["我觉得，既然迪恩和英卡洛斯已经出现了，赛尔号的其他人员一定就在附近。之前的布置还是太简单了，不足以应发突发情况。"],["恩，你说的没错！"],[function():void
                        {
                           NpcDialog.show(NPC.ANLISI,["我们需要加强陷阱，否则万一贾斯汀等人出现，形势会陷入被动！这次的行动，不容有失！"],["好"],[function():void
                           {
                              _map.controlLevel.removeChild(taskMc);
                              KTool.showMapAllPlayerAndMonster();
                              MapObjectControl.hideOrShowAllObjects(true);
                              LevelManager.iconLevel.visible = true;
                              ToolBarController.panel.visible = true;
                              SocketConnection.sendWithCallback(42367,function():void
                              {
                                 ModuleManager.showModule(ClientConfig.getAppModule("GhostFaceAltarTrapAlertPanel"),"正在打开....");
                              },[12,1]);
                           }]);
                        }]);
                     }]);
                  }]);
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      public static function update() : void
      {
      }
      
      public static function destroy() : void
      {
         KTool.showMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
      }
   }
}
