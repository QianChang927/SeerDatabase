package com.robot.app2.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BruceDualPropertiesOfEvolutionController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID_1:uint = 1216;
      
      public static const BUFFER_ID_2:uint = 1217;
      
      public static const BUFFER_ID_3:uint = 1218;
      
      private static var _map:MapModel;
      
      private static var _curStrengthValue:int;
      
      private static var _petLv:int;
      
      private static var _pointLv:int;
      
      private static var _mcNameArr:Array = ["mc1","mc2","mc3","mc4","mc5","mc6","mc7","mc8","mc9","mc10","mc11","mc12","mc13","mc14","mc15","mc16","mc17"];
      
      private static var _requireStrengthArr:Array = [10,50,105];
      
      private static var _bossNameArr:Array = [{
         "bossName":"都比",
         "bossId":138
      },{
         "bossName":"都比",
         "bossId":137
      },{
         "bossName":"都比",
         "bossId":140
      },{
         "bossName":"都比",
         "bossId":139
      },{
         "bossName":"都比",
         "bossId":141
      },{
         "bossName":"都比",
         "bossId":142
      },{
         "bossName":"都比",
         "bossId":144
      },{
         "bossName":"都比",
         "bossId":143
      },{
         "bossName":"都比",
         "bossId":145
      },{
         "bossName":"都比",
         "bossId":146
      },{
         "bossName":"都比",
         "bossId":148
      },{
         "bossName":"都比",
         "bossId":147
      },{
         "bossName":"都比",
         "bossId":149
      },{
         "bossName":"都比",
         "bossId":150
      },{
         "bossName":"都比",
         "bossId":152
      },{
         "bossName":"都比",
         "bossId":151
      }];
      
      private static var _skillArr:Array = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
      
      private static var _canGetStrengthValu:Array = [[5,4],[6,4],[10,20],[15,25],[17,26],[16,26],[0,0],[0,0],[0,0]];
      
      private static var _curChosenMonsterIndex:int;
      
      private static var _index:int;
      
      private static var _framArr:Array = [1,2,4,5,7,8,10,11,12];
      
      private static var _tshuFramArr:Array = [3,6,9];
      
      private static var _tshuFram2Arr:Array = [15,16,17];
      
      private static var _supNum1:int;
      
      private static var _supNum2:int;
      
      private static var _taskMc:MovieClip;
       
      
      public function BruceDualPropertiesOfEvolutionController()
      {
         super();
      }
      
      public static function setUp() : void
      {
         LocalMsgController.addLocalMsg("BruceDualPropertiesOfEvolutionXiaoxinfengPanel",0,false,null,null,1);
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 10774)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionXiaoxinfengPanel"),"正在努力打开面板...");
         }
         else
         {
            _map = MapManager.currentMap;
            ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionMainPanel"));
         }
         update();
      }
      
      public static function setMapAsCurMap() : void
      {
         _map = MapManager.currentMap;
      }
      
      public static function playAnimation(param1:int) : void
      {
         var cls:Class;
         var index:int = param1;
         _map = MapManager.currentMap;
         _index = index;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         cls = getDefinitionByName("com.robot.app.toolBar.ToolBarController") as Class;
         cls.panel.hide();
         update();
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_bruceDualPropertiesOfEvolution"),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _map.controlLevel.addChild(_taskMc);
               var _loc2_:int = 0;
               while(_loc2_ < 2)
               {
                  _taskMc["monsterMc_" + _loc2_].buttonMode = true;
                  _taskMc["monsterMc_" + _loc2_].addEventListener(MouseEvent.CLICK,onMonsterClick);
                  _loc2_++;
               }
               chixingFunction();
            });
         }
         else
         {
            chixingFunction();
         }
      }
      
      private static function chixingFunction() : void
      {
         var _loc1_:int = 0;
         switch(_index)
         {
            case 1:
               if(_pointLv == 2 || _pointLv == 4 || _pointLv == 6)
               {
                  if(_curStrengthValue >= _requireStrengthArr[_pointLv / 2 - 1])
                  {
                     startPreTask(_framArr[_pointLv]);
                  }
                  else
                  {
                     startPreTask(_tshuFram2Arr[(_pointLv - 2) / 2]);
                  }
               }
               else
               {
                  startPreTask(_framArr[_pointLv]);
               }
               if(_pointLv == 8)
               {
                  _loc1_ = 0;
                  while(_loc1_ < 2)
                  {
                     _taskMc["monsterMc_" + _loc1_].buttonMode = false;
                     KTool.enableMC([_taskMc["monsterMc_" + _loc1_]],false);
                     _loc1_++;
                  }
               }
               break;
            case 2:
               if(!isTaskDone2)
               {
                  startPreTask(13);
               }
               else
               {
                  _taskMc.gotoAndStop(13);
                  _taskMc["mc13"].gotoAndStop(81);
                  _taskMc["monsterMc_" + 0].buttonMode = true;
                  _taskMc["monsterMc_" + 0].addEventListener(MouseEvent.CLICK,onMonsterClick);
                  openPanel2();
               }
               break;
            case 3:
               if(!isTaskDone3)
               {
                  startPreTask(14);
               }
               else
               {
                  _taskMc.gotoAndStop(14);
                  _taskMc["mc14"].gotoAndStop(198);
                  _taskMc["monsterMc_" + 0].buttonMode = true;
                  _taskMc["monsterMc_" + 0].addEventListener(MouseEvent.CLICK,onMonsterClick);
                  openPanel3();
               }
         }
      }
      
      private static function onMonsterClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var index:int = int(event.currentTarget.name.split("_")[1]);
         _curChosenMonsterIndex = index;
         switch(_index)
         {
            case 1:
               if(_pointLv == 2 || _pointLv == 4 || _pointLv == 6)
               {
                  if(_curStrengthValue < _requireStrengthArr[_pointLv / 2 - 1])
                  {
                     Alert.show("是否花费" + (_requireStrengthArr[_pointLv / 2 - 1] - _curStrengthValue) * 4000 + "赛尔豆直接进化下一形态",function():void
                     {
                        SocketConnection.addCmdListener(41562,function(param1:SocketEvent):void
                        {
                           var e:SocketEvent = param1;
                           SocketConnection.removeCmdListener(41562,arguments.callee);
                           AnimateManager.playMcAnimate(taskMc,_tshuFramArr[(_pointLv - 2) / 2],"mc" + _tshuFramArr[(_pointLv - 2) / 2],function():void
                           {
                              FightManager.tryFight(_bossNameArr[_pointLv * 2 + _curChosenMonsterIndex].bossId,_skillArr[_pointLv]);
                           });
                        });
                        SocketConnection.send(41562);
                     },function():void
                     {
                        FightManager.tryFight(_bossNameArr[_pointLv * 2 + _curChosenMonsterIndex].bossId,_skillArr[_pointLv]);
                     });
                  }
                  else
                  {
                     FightManager.tryFight(_bossNameArr[_pointLv * 2 + _curChosenMonsterIndex].bossId,_skillArr[_pointLv]);
                  }
               }
               else
               {
                  FightManager.tryFight(_bossNameArr[_pointLv * 2 + _curChosenMonsterIndex].bossId,_skillArr[_pointLv]);
               }
               break;
            case 2:
               if(_supNum1 > 0)
               {
                  FightManager.fightNoMapBoss("绝影·无邪",2682);
               }
               else
               {
                  Alarm.show("挑战次数不足！");
               }
               break;
            case 3:
               if(_supNum2 > 0)
               {
                  FightManager.fightNoMapBoss(" 布鲁克林",2683);
               }
               else
               {
                  Alarm.show("挑战次数不足！");
               }
         }
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         _map = MapManager.currentMap;
         switch(_index)
         {
            case 1:
               if(FightManager.isWin)
               {
                  if(_canGetStrengthValu[_pointLv][_curChosenMonsterIndex] > 0)
                  {
                     Alarm.show("获得" + _canGetStrengthValu[_pointLv][_curChosenMonsterIndex] + "点进化力量");
                     _curStrengthValue += _canGetStrengthValu[_pointLv][_curChosenMonsterIndex];
                  }
                  if(_pointLv == 2 || _pointLv == 4 || _pointLv == 6)
                  {
                     hideAllObject();
                  }
                  KTool.getMultiValue([11573],function(param1:Array):void
                  {
                     var va:Array = param1;
                     _pointLv = va[0];
                     ResourceManager.getResource(ClientConfig.getMapAnimate("map_bruceDualPropertiesOfEvolution"),function(param1:MovieClip):void
                     {
                        var i:int = 0;
                        var mc:MovieClip = param1;
                        _taskMc = mc;
                        _map.controlLevel.addChild(_taskMc);
                        if(_pointLv == 8)
                        {
                           Alert.show("恭喜你通过坚守之役！");
                           ModuleManager.hideModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionFight1Panel"));
                           ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionEvoPanel"),"正在打开...");
                        }
                        else
                        {
                           i = 0;
                           while(i < 2)
                           {
                              _taskMc["monsterMc_" + i].buttonMode = true;
                              _taskMc["monsterMc_" + i].addEventListener(MouseEvent.CLICK,onMonsterClick);
                              i++;
                           }
                        }
                        if(_pointLv == 2 || _pointLv == 4 || _pointLv == 6)
                        {
                           if(_curStrengthValue >= _requireStrengthArr[_pointLv / 2 - 1])
                           {
                              hideAllObject();
                              AnimateManager.playMcAnimate(taskMc,_tshuFramArr[(_pointLv - 2) / 2],"mc" + _tshuFramArr[(_pointLv - 2) / 2],function():void
                              {
                                 ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionFight1Panel"),"正在打开...",false);
                              });
                           }
                           else
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionFight1Panel"),"正在打开...",false);
                           }
                        }
                        else if(_pointLv != 8)
                        {
                           ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionFight1Panel"),"正在打开...",false);
                        }
                     });
                  });
               }
               else
               {
                  Alert.show("很遗憾，布鲁被击倒了，是否使用1钻石原地复活继续挑战？不复活则需要重新开始哦。",function():void
                  {
                     KTool.buyProductByCallback(242074,1,function():void
                     {
                        KTool.doExchange(3640,function():void
                        {
                           KTool.getMultiValue([11573],function(param1:Array):void
                           {
                              var va:Array = param1;
                              _pointLv = va[0];
                              ResourceManager.getResource(ClientConfig.getMapAnimate("map_bruceDualPropertiesOfEvolution"),function(param1:MovieClip):void
                              {
                                 _taskMc = param1;
                                 _map.controlLevel.addChild(_taskMc);
                                 ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionFight1Panel"),"正在打开...",false);
                              });
                           });
                        });
                     },null,function():void
                     {
                        SocketConnection.addCmdListener(41561,function(param1:SocketEvent):void
                        {
                           destroyTaskMc();
                           SocketConnection.removeCmdListener(41561,arguments.callee);
                           ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionHoldFastPanel"));
                        });
                        SocketConnection.send(41561);
                     });
                  },function():void
                  {
                     SocketConnection.addCmdListener(41561,function(param1:SocketEvent):void
                     {
                        destroyTaskMc();
                        SocketConnection.removeCmdListener(41561,arguments.callee);
                        ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionHoldFastPanel"));
                     });
                     SocketConnection.send(41561);
                  });
               }
               break;
            case 2:
               if(FightManager.isWin)
               {
                  Alert.show("恭喜你通过反击之役！");
                  destroyTaskMc();
                  ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionEvoPanel"),"正在打开...");
               }
               else
               {
                  ResourceManager.getResource(ClientConfig.getMapAnimate("map_bruceDualPropertiesOfEvolution"),function(param1:MovieClip):void
                  {
                     _taskMc = param1;
                     _map.controlLevel.addChild(_taskMc);
                     BruceDualPropertiesOfEvolutionController.playAnimation(2);
                  });
               }
               break;
            case 3:
               if(FightManager.isWin)
               {
                  Alert.show("恭喜你通过友谊之役！");
                  destroyTaskMc();
                  ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionEvoPanel"),"正在打开...");
               }
               else
               {
                  ResourceManager.getResource(ClientConfig.getMapAnimate("map_bruceDualPropertiesOfEvolution"),function(param1:MovieClip):void
                  {
                     _taskMc = param1;
                     _map.controlLevel.addChild(_taskMc);
                     BruceDualPropertiesOfEvolutionController.playAnimation(3);
                  });
               }
         }
         update();
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array = null;
         var storyPlayer:TaskStoryPlayer = null;
         var frame:int = param1;
         if(_taskMc != null)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,frame,_mcNameArr[frame - 1]]]];
            storyPlayer = new TaskStoryPlayer();
            storyPlayer.addStory(story);
            storyPlayer.storyEndCallback = function():void
            {
               var i:int = 0;
               storyPlayer.destory();
               if(_taskMc != null)
               {
                  if(_index == 1)
                  {
                     i = 0;
                     while(i < 2)
                     {
                        _taskMc["monsterMc_" + i].buttonMode = true;
                        _taskMc["monsterMc_" + i].addEventListener(MouseEvent.CLICK,onMonsterClick);
                        i++;
                     }
                  }
                  else if(_index == 2)
                  {
                     BufferRecordManager.setMyState(BUFFER_ID_2,true,function():void
                     {
                        KTool.showMapPlayerAndMonster();
                     });
                     _taskMc["monsterMc_" + 0].buttonMode = true;
                     _taskMc["monsterMc_" + 0].addEventListener(MouseEvent.CLICK,onMonsterClick);
                     openPanel2();
                  }
                  else if(_index == 3)
                  {
                     BufferRecordManager.setMyState(BUFFER_ID_3,true,function():void
                     {
                        KTool.showMapPlayerAndMonster();
                     });
                     _taskMc["monsterMc_" + 0].buttonMode = true;
                     _taskMc["monsterMc_" + 0].addEventListener(MouseEvent.CLICK,onMonsterClick);
                     openPanel3();
                  }
               }
            };
            storyPlayer.start();
         }
      }
      
      public static function update() : void
      {
         KTool.getMultiValue([11571],function(param1:Array):void
         {
            _curStrengthValue = param1[0];
         });
         KTool.getMultiValue([11572],function(param1:Array):void
         {
            _petLv = param1[0];
         });
         KTool.getMultiValue([11573],function(param1:Array):void
         {
            _pointLv = param1[0];
         });
         KTool.getMultiValue([11569],function(param1:Array):void
         {
            _supNum1 = 3 - param1[0];
         });
         KTool.getMultiValue([11570],function(param1:Array):void
         {
            _supNum2 = 2 - param1[0];
         });
      }
      
      private static function get isTaskDone2() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_2);
      }
      
      private static function get isTaskDone3() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_3);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function openPanel1() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionFight1Panel"));
      }
      
      private static function openPanel2() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionFight2Panel"));
      }
      
      private static function openPanel3() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BruceDualPropertiesOfEvolutionFight3Panel"));
      }
      
      private static function hideAllObject() : void
      {
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         var _loc1_:Class = getDefinitionByName("com.robot.app.toolBar.ToolBarController") as Class;
         _loc1_.panel.hide();
      }
      
      public static function destroyTaskMc() : void
      {
         LevelManager.iconLevel.visible = true;
         KTool.showMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(true);
         DisplayUtil.removeForParent(_taskMc);
         var _loc1_:Class = getDefinitionByName("com.robot.app.toolBar.ToolBarController") as Class;
         _loc1_.panel.show();
         _taskMc = null;
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
