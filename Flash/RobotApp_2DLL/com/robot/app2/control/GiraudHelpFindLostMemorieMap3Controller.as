package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.BitUtil;
   
   public class GiraudHelpFindLostMemorieMap3Controller
   {
      
      public static const NODE_1_BUFFER_ID:uint = 1251;
      
      public static const NODE_2_BUFFER_ID:uint = 1252;
      
      public static const NODE_3_BUFFER_ID:uint = 1253;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var _compeleteNum:int;
       
      
      public function GiraudHelpFindLostMemorieMap3Controller()
      {
         super();
      }
      
      public static function initForMap10883(param1:BaseMapProcess) : void
      {
         _map = param1;
         startPlay();
      }
      
      public static function startPlay() : void
      {
         _map.topLevel.mouseEnabled = false;
         _map.topLevel.mouseChildren = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_giraudHelpFindLostMemories_3"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            taskMc = mc;
            _map.conLevel.addChild(taskMc);
            update();
            addEvents();
            SocketConnection.addCmdListener(43601,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(43601,arguments.callee);
               update();
            });
         });
      }
      
      public static function update() : void
      {
         var i:int = 0;
         if(!isNode1TaskDone)
         {
            startPreTask(1);
         }
         else
         {
            taskMc.gotoAndStop(2);
            KTool.enableMC([taskMc["btn_0"]],true);
            taskMc["btn_0"].buttonMode = true;
            i = 0;
            while(i < 5)
            {
               CommonUI.removeYellowQuestion(taskMc["monster_" + i]);
               i++;
            }
            KTool.getMultiValue([5741],function(param1:Array):void
            {
               var index:int = 0;
               var va:Array = param1;
               _compeleteNum = 0;
               var i:int = 0;
               while(i < 9)
               {
                  index = int(i / 2);
                  if(BitUtil.getBit(va[0],i) > 0 || BitUtil.getBit(va[0],i + 1) > 0)
                  {
                     ++_compeleteNum;
                     KTool.enableMC([taskMc["monster_" + index]],false);
                     taskMc["monster_" + index].buttonMode = false;
                  }
                  else
                  {
                     KTool.enableMC([taskMc["monster_" + index]],true);
                     taskMc["monster_" + index].buttonMode = true;
                     CommonUI.addYellowQuestion(taskMc["monster_" + index],50,0);
                  }
                  i += 2;
               }
               if(_compeleteNum >= 5)
               {
                  CommonUI.addYellowArrow(taskMc.btn_0,106,0,45);
               }
               else
               {
                  CommonUI.removeYellowArrow(taskMc.btn_0);
               }
               KTool.getMultiValue([5737],function(param1:Array):void
               {
                  var _loc2_:int = 0;
                  if(param1[0] >= 3)
                  {
                     CommonUI.removeYellowArrow(taskMc.btn_0);
                     _loc2_ = 0;
                     while(_loc2_ < 5)
                     {
                        CommonUI.removeYellowQuestion(taskMc["monster_" + _loc2_]);
                        _loc2_++;
                     }
                  }
               });
            });
         }
      }
      
      private static function addEvents() : void
      {
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var name:String = e.target.name as String;
         switch(name)
         {
            case "btn_0":
               chooseDialog0();
               break;
            case "monster_0":
               NpcDialog.show(NPC.SAKESEN,["说来话长，关于妖族的事情，我只能从星际石碑上得到一些消息。你自己选择一下吧。"],["妖族残忍暴虐无比，他们必须被消灭。","有些可悲的种族，从一降临开始，就被迫着接受一些命运。"],[function():void
               {
                  SocketConnection.addCmdListener(43601,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(43601,arguments.callee);
                     update();
                  });
                  SocketConnection.send(43601,3,1);
               },function():void
               {
                  SocketConnection.addCmdListener(43601,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(43601,arguments.callee);
                     update();
                  });
                  SocketConnection.send(43601,3,2);
               }]);
               break;
            case "monster_1":
               NpcDialog.show(NPC.KE_LUO_YI_SUPER,["我们又见面了，小赛尔，我就是来自无尽领域的神谕之子，关于吉罗的事情，我也是从无尽之主那里得知的，你可以自行参考。"],["光明和黑暗都可以被接受，但是会衍生出不同的信仰。","他们信念都带有一定的偏执，但总体上不能定义为邪恶。"],[function():void
               {
                  SocketConnection.addCmdListener(43601,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(43601,arguments.callee);
                     update();
                  });
                  SocketConnection.send(43601,3,3);
               },function():void
               {
                  SocketConnection.addCmdListener(43601,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(43601,arguments.callee);
                     update();
                  });
                  SocketConnection.send(43601,3,4);
               }]);
               break;
            case "monster_2":
               NpcDialog.show(NPC.SNAKE,["很难相信，妖族除了摩哥斯之外，居然还要其他的精灵存活。“灰之哀烬”所留下的，大概更多是遗憾吧，我加入组织后，在那里查阅了一些资料，你自己看看吧。"],["所存活下来的妖族，都是被妖皇选中，日后可以成为妖王的精灵。","妖皇当年进入黑洞，只为修习更强的力量，等待时间恢复妖族王朝。"],[function():void
               {
                  SocketConnection.addCmdListener(43601,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(43601,arguments.callee);
                     update();
                  });
                  SocketConnection.send(43601,3,5);
               },function():void
               {
                  SocketConnection.addCmdListener(43601,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(43601,arguments.callee);
                     update();
                  });
                  SocketConnection.send(43601,3,6);
               }]);
               break;
            case "monster_3":
               NpcDialog.show(NPC.ERLIYA,["你好，赛尔，我是派特博士的专属精灵埃尔尼亚，我了解你的目的，也支持你的行为，我这里只有两条关于吉罗的记录，都提供给你。"],["吉罗敏感，脆弱，但是他有一只特殊的力量，需要一个特殊的爆发时刻。","敏感的吉罗可以第一时间感知到身边的危险，但是他极难进化。"],[function():void
               {
                  SocketConnection.addCmdListener(43601,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(43601,arguments.callee);
                     update();
                  });
                  SocketConnection.send(43601,3,7);
               },function():void
               {
                  SocketConnection.addCmdListener(43601,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(43601,arguments.callee);
                     update();
                  });
                  SocketConnection.send(43601,3,8);
               }]);
               break;
            case "monster_4":
               NpcDialog.show(NPC.PUNI,["历史分分合合，有些事情，我们怎么可能说的清楚，刨根问底还不如半知半解，我能提供给你的提示，总有一天，会有时间来证明。"],["永远不要小看任何一个妖王，他们的力量很强大。","你一旦具有一点攻击性，吉罗都会立刻变得非常冷漠无情。"],[function():void
               {
                  SocketConnection.addCmdListener(43601,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(43601,arguments.callee);
                     update();
                  });
                  SocketConnection.send(43601,3,9);
               },function():void
               {
                  SocketConnection.addCmdListener(43601,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(43601,arguments.callee);
                     update();
                  });
                  SocketConnection.send(43601,3,10);
               }]);
         }
      }
      
      private static function chooseDialog0() : void
      {
         NpcDialog.show(NPC.SEER,["收集到他们的提示了吗？说实话，我现在镇定了很多，有些提示，一定是假的，但我觉得，你可以先凭手中的这些提示，来试试看。"],["好","我再分析下。"],[function():void
         {
            CommonUI.removeYellowArrow(taskMc.btn_0);
            ModuleManager.showModule(ClientConfig.getAppModule("GiraudHelpFindLostMemorieThirdPanel"));
         }]);
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         CommonUI.removeYellowArrow(taskMc.btn_0);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(NODE_1_BUFFER_ID + (index - 1),true,function():void
            {
               KTool.showMapPlayerAndMonster();
               LevelManager.iconLevel.visible = true;
               update();
               if(index == 4)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("GiraudHelpFindLostMemoriesMainPanel"));
               }
            });
         };
         storyPlayer.start();
      }
      
      public static function startPreTask1() : void
      {
         var story1:Array;
         var storyPlayer:TaskStoryPlayer = null;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         CommonUI.removeYellowArrow(taskMc.btn_0);
         story1 = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc" + 4]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story1);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            ModuleManager.showModule(ClientConfig.getAppModule("GiraudHelpFindLostMemoriesMainPanel"));
         };
         storyPlayer.start();
      }
      
      private static function get isNode1TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_1_BUFFER_ID);
      }
      
      private static function get isNode2TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_2_BUFFER_ID);
      }
      
      private static function get isNode3TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_3_BUFFER_ID);
      }
      
      public static function destroy() : void
      {
         removeEvents();
         if(taskMc != null)
         {
            taskMc = null;
         }
         _map = null;
      }
   }
}
