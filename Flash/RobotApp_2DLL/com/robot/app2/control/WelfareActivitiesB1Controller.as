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
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class WelfareActivitiesB1Controller
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static var _mapIdArr:Array;
      
      private static var _bossArr:Array = [{
         "bossName":"维泽博",
         "bossId":6740
      },{
         "bossName":"格尔顿",
         "bossId":6741
      },{
         "bossName":"地狱兽",
         "bossId":6742
      },{
         "bossName":"凯纳利斯",
         "bossId":6743
      }];
      
      private static var _questionArr:Array = ["题目1，银翼突击队是由谁组建的？","题目2，银翼突击队目前的成员有？","题目3，目前宇宙中最可怕的邪恶势力是？","题目4，谁将带领赛尔号前往魔界？","题目5，魔域一共分为几大区域？","题目6，首次开放的魔域场景地图叫什么？","题目7，银翼突击队组建的目的是？","题目8，赛尔号另一支部队的名字是？","题目9，银翼猎手套装升级后叫什么？","题目10，你有信心成为一个合格的银翼突击队队友吗？"];
      
      private static var _answerArr:Array = [["A. 贾斯汀","B. 罗杰","C. 赛小息","B. 罗杰"],["A. 罗杰和迪恩"," B. 赛小息和阿铁打 ","C. 贾斯汀和迪恩"," D. 迪恩和赛小息"],["A. 魔族 ","B. 妖族"," C. 神族 ","D. 鬼族 "],["A. 罗杰船长","B. 利尔","C. 战神联盟","B. 贾斯汀"],["A.  2","B. 3","C. 4","B. 5"],["A. 天魔古道","B. 弑神之地","C. 寂杀暗野","B. 不灭尊坛"],["A. 自由","B. 信仰","C. 和平","B. 尊严"],["A. SPT","B. SPB","C.SPE","B. SPH"],["A. 银色军团 ","B. 银翼骑士"," C.银辉天骑 ","D.银月之刃 "],["A. 有！  "]];
      
      private static var _rightAnswerArr:Array = ["A","C","A","B","D","C","C","A","B","A"];
      
      public static var _compeleteNum:int = 0;
       
      
      public function WelfareActivitiesB1Controller()
      {
         super();
      }
      
      public static function setUp() : void
      {
         if(MapManager.currentMap.id != 11203)
         {
            MapManager.changeMapWithCallback(11203,function():void
            {
               loadMc();
            });
         }
         else
         {
            loadMc();
         }
      }
      
      private static function loadMc() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_welfareActivitiesB"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map = MapManager.currentMap;
            _map.controlLevel.addChild(taskMc);
            initview();
         });
      }
      
      private static function initview() : void
      {
         if(!BufferRecordManager.getMyState(1323))
         {
            startPreTask(1);
         }
         else
         {
            taskMc.gotoAndStop(1);
            taskMc.mc1.gotoAndStop(619);
            CommonUI.addYellowArrow(taskMc["boshiMc"],50,-10,45);
            taskMc["boshiMc"].addEventListener(MouseEvent.CLICK,onBoshiClick);
            taskMc["boshiMc"].buttonMode = true;
         }
      }
      
      private static function onBoshiClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         StatManager.sendStat2014("0408福利活动B","点击派特博士开始答题","2016运营活动");
         KTool.getMultiValue([3894],function(param1:Array):void
         {
            var va:Array = param1;
            _compeleteNum = va[0];
            if(_compeleteNum == 0)
            {
               NpcDialog.show(NPC.BO_SHI_PAI_TE,["我这里准备了10道题目，全部答对才可以算作通过！可以开始了吗？"],["来吧！","我去准备一下。"],[function():void
               {
                  update();
               },function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("WelfareActivitiesBAlertPanel"),"正在打开....");
               }],false);
            }
            else
            {
               answerQuestion();
            }
         });
      }
      
      public static function answerQuestion() : void
      {
         NpcDialog.show(NPC.BO_SHI_PAI_TE,[_questionArr[_compeleteNum]],_answerArr[_compeleteNum],[function():void
         {
            judgment("A");
         },function():void
         {
            judgment("B");
         },function():void
         {
            judgment("C");
         },function():void
         {
            judgment("D");
         }],false);
      }
      
      private static function judgment(param1:String) : void
      {
         var chooseAnswer:String = param1;
         if(chooseAnswer == _rightAnswerArr[_compeleteNum])
         {
            SocketConnection.addCmdListener(45638,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(45638,arguments.callee);
               update();
            });
            SocketConnection.send(45638,1,_compeleteNum + 1);
         }
         else
         {
            NpcDialog.show(NPC.BO_SHI_PAI_TE,["你回答错误哦！再仔细想想看吧！"],["继续答题！","任性一下！"],[function():void
            {
               answerQuestion();
            },function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("WelfareActivitiesBAlertPanel"),"正在打开....",_compeleteNum);
            }],false);
         }
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var step:int = param1;
         CommonUI.removeYellowArrow(taskMc["boshiMc"]);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,step,"mc" + step]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(1323,true,function():void
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.visible = true;
               if(step == 1)
               {
                  initview();
               }
               if(step == 2)
               {
                  _map.controlLevel.removeChild(taskMc);
                  taskMc = null;
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("WelfareActivitiesBMainPanel"),"正在打开....");
                  });
               }
            });
         };
         storyPlayer.start();
      }
      
      public static function update() : void
      {
         KTool.getMultiValue([3894],function(param1:Array):void
         {
            _compeleteNum = param1[0];
            if(_compeleteNum == 10)
            {
               startPreTask(2);
            }
            else
            {
               answerQuestion();
            }
         });
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
   }
}
