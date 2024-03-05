package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GaoStationedDragonVentureController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID_0:uint = 1237;
      
      public static const BUFFER_ID_1:uint = 1238;
      
      public static const BUFFER_ID_2:uint = 1239;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var map:BaseMapProcess;
      
      private static var m_evtMgr:EventListenerManager;
      
      private static var _curLv:int;
      
      private static var _taskMc:MovieClip;
       
      
      public function GaoStationedDragonVentureController()
      {
         super();
      }
      
      public static function initForMap10862(param1:BaseMapProcess) : void
      {
         m_evtMgr = new EventListenerManager();
         map = param1;
         _map = MapManager.currentMap;
         m_evtMgr.addEventListener(map.conLevel["petMc"],MouseEvent.CLICK,onChooseNPcDiaLog);
         update();
      }
      
      public static function update() : void
      {
         CommonUI.removeYellowArrow(map.conLevel["petMc"]);
         KTool.getMultiValue([5714],function(param1:Array):void
         {
            _curLv = param1[0];
            if(param1[0] == 0)
            {
               CommonUI.addYellowArrow(map.conLevel["petMc"],40,0,45);
               map.conLevel["petMc"].buttonMode = true;
            }
            else if(param1[0] == 2)
            {
               CommonUI.addYellowArrow(map.conLevel["petMc"],40,0,45);
               map.conLevel["petMc"].buttonMode = true;
            }
            else
            {
               CommonUI.removeYellowArrow(map.conLevel["petMc"]);
               map.conLevel["petMc"].buttonMode = false;
            }
            if(param1[0] == 3)
            {
               KTool.enableMC([map.conLevel["petMc"]],false);
               map.conLevel["petMc"].buttonMode = false;
               CommonUI.removeYellowArrow(map.conLevel["petMc"]);
            }
         });
      }
      
      public static function startPlay(param1:int) : void
      {
         var index:int = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_gaoStationedDragonVenture"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            startPreTask(index);
         });
      }
      
      private static function get isTaskDone0() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_0);
      }
      
      private static function get isTaskDone1() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_1);
      }
      
      private static function get isTaskDone2() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_2);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         map.conLevel["petMc"].visible = false;
         LevelManager.iconLevel.visible = false;
         CommonUI.removeYellowArrow(map.conLevel["petMc"]);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMc);
            _taskMc = null;
            if(_curLv != 3)
            {
               CommonUI.addYellowArrow(map.conLevel["petMc"],40,0,45);
            }
            map.conLevel["petMc"].visible = true;
            LevelManager.iconLevel.visible = true;
            if(index == 1)
            {
               BonusController.addDelay(1156);
               SocketConnection.addCmdListener(43594,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(43594,arguments.callee);
                  openPanel();
                  update();
               });
               SocketConnection.send(43594,index);
            }
            else
            {
               openPanel();
               update();
            }
         };
         storyPlayer.start();
      }
      
      private static function onChooseNPcDiaLog(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         if(_curLv == 0)
         {
            if(!isTaskDone0)
            {
               step1();
            }
            else if(!isTaskDone1)
            {
               step2();
            }
            else
            {
               startPlay(1);
            }
         }
         else if(_curLv == 2)
         {
            if(!isTaskDone2)
            {
               step3();
            }
            else
            {
               step4();
            }
         }
      }
      
      private static function step1() : void
      {
         NpcDialog.show(NPC.SEER,["咦？这只是一尊石像吗？"],null,null,true,function():void
         {
            NpcDialog.show(NPC.SEER,["这里为什么会有这种奇异的精灵雕像……我以为龙脉里都应该是龙呢…"],null,null,true,function():void
            {
               NpcDialog.show(NPC.SEER,["算了，我还是往前面走走看吧！！"],["等等！谁告诉你我是雕像！我可是大名鼎鼎的加奥！"],[function():void
               {
                  NpcDialog.show(NPC.JIAAO,["只不过…..我太爱慕自己！所以才把自己做成了雕像！快来救我！我就告诉你龙脉的故事！还有一本神奇的古书哦！"],["要怎么救你呢？","切…你懂什么…..！"],[function():void
                  {
                     BufferRecordManager.setMyState(BUFFER_ID_0,true,function():void
                     {
                        step2();
                     });
                  }],false);
               }],false);
            });
         });
      }
      
      private static function step2() : void
      {
         NpcDialog.show(NPC.JIAAO,["很简单！很简单！一直有两个问题再困扰我！你先帮我思考一下！请听题~"],["好！你说吧！"],[function():void
         {
            NpcDialog.show(NPC.JIAAO,["第一个问题，现在外面是什么情况？"],["A.宇宙安好，万物晴天","B.海盗们从黑洞里找到了邪恶的精灵！","C.我也不知道。"],[function():void
            {
            },function():void
            {
               NpcDialog.show(NPC.JIAAO,["我就知道！！这个世界没有我是不行的！好吧….我先问你第二个问题~这个龙脉里有什么？"],["A.上古龙族的真正力量","B.被埋葬千年的龙骨","C.我也不知道"],[function():void
               {
                  BufferRecordManager.setMyState(BUFFER_ID_1,true,function():void
                  {
                     startPlay(1);
                  });
               }],false);
            }],false);
         }],false);
      }
      
      private static function step3() : void
      {
         NpcDialog.show(NPC.JIAAO,["看来，你获得了进入龙脉的许可~太好了~我能陪你一起进去看看吗？"],["你似乎….还没办法移动吧？"],[function():void
         {
            BufferRecordManager.setMyState(BUFFER_ID_2,true,function():void
            {
               step4();
            });
         }],false);
      }
      
      private static function step4() : void
      {
         NpcDialog.show(NPC.JIAAO,["……咳咳….不死族的石像鬼都是能飞的！就差最后一步了！这边有个战五渣的小怪在骚扰我，干掉它！"],["好！","稍等下！"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
            FightManager.fightNoMapBoss("小怪",3532);
         }],false);
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         if(FightManager.isWin)
         {
            startPlay(2);
         }
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("GaoStationedDragonVentureMainPanel"),"正在打开....",true);
      }
      
      public static function destroy() : void
      {
         _map = null;
         if(m_evtMgr)
         {
            m_evtMgr.clear();
            m_evtMgr = null;
         }
      }
   }
}
