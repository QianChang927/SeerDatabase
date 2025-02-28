package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.MapProcess_33;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.control.TasksController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.MapStoryManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class ACallThatSpansThousandsOfYearsController
   {
      
      private static var _preTaskStepIsDone:Boolean = false;
      
      private static var _mainTaskStep:int = 0;
      
      private static var _stateValue:int = 0;
      
      private static var _isFightWin:Boolean;
      
      private static var _map1709:BaseMapProcess;
      
      private static var _map1711:BaseMapProcess;
      
      private static var _map33:MapProcess_33;
      
      private static var _map315:BaseMapProcess;
       
      
      public function ACallThatSpansThousandsOfYearsController()
      {
         super();
      }
      
      public static function updateData() : Promise
      {
         return KTool.getMultiValue([105810,124331]);
      }
      
      public static function initMap1709(param1:BaseMapProcess) : void
      {
         _map1709 = param1;
         _map1709.conLevel.addEventListener(MouseEvent.CLICK,onMap1709ConClickHandle);
         updateMap1709State();
      }
      
      private static function onMap1709ConClickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         var stageX:Number = e.stageX;
         var stageY:Number = e.stageY;
         switch(btnName)
         {
            case "aliceBtn":
               StatManager.sendStat2014("1206特别调查任务","打开爱丽丝剧情入口","2024运营活动");
               if(_mainTaskStep == 0 && _preTaskStepIsDone)
               {
                  DialogControl.showAllDilogs(171,1).then(function(param1:int):void
                  {
                     var va:int = param1;
                     if(va == 1)
                     {
                        StatManager.sendStat2014("1206特别调查任务","点击【开启特别调查任务】","2024运营活动");
                        MapStoryManager.startStory(2);
                        DialogControl.showAllDilogs(171,2).then(function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_ACallThatSpansThousandsOfYears1709_0"),function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_ACallThatSpansThousandsOfYears1709_1"),function():void
                              {
                                 KTool.socketSendCallBack(45850,function():void
                                 {
                                    MapManager.changeMap(1711);
                                 },[29,1]);
                              });
                           });
                        });
                     }
                  });
               }
         }
      }
      
      private static function updateMap1709State() : void
      {
         updateData().then(function(param1:Array):void
         {
            _mainTaskStep = KTool.subByte(param1[0],0,8);
            _stateValue = param1[0];
            var _loc2_:int = int(KTool.subByte(param1[1],0,8));
            _preTaskStepIsDone = _loc2_ >= 7 ? true : false;
            if(_loc2_ > 0 && _loc2_ < 7)
            {
               return;
            }
            if(_mainTaskStep > 0 && _mainTaskStep < 10 && _preTaskStepIsDone)
            {
               MapStoryManager.startStory(2);
               _map1709.conLevel["abandonedXitaMc"].mouseChildren = _map1709.conLevel["abandonedXitaMc"].mouseEnabled = true;
               _map1709.conLevel["projectorMc"].mouseChildren = _map1709.conLevel["projectorMc"].mouseEnabled = true;
               _map1709.conLevel["elfTemplePortalMc"].mouseChildren = _map1709.conLevel["elfTemplePortalMc"].mouseEnabled = true;
               _map1709.conLevel["gotoMapBtn"].mouseEnabled = false;
               _map1709.conLevel["aliceBtn"].visible = true;
               _map1709.conLevel["siloBtn"].mouseEnabled = true;
               if(_mainTaskStep >= 1)
               {
                  MapManager.changeMap(1711);
               }
            }
            else
            {
               if(_mainTaskStep != 10)
               {
                  _map1709.conLevel["aliceBtn"].visible = _preTaskStepIsDone;
               }
               else
               {
                  _map1709.conLevel["aliceBtn"].visible = false;
               }
               _map1709.conLevel["abandonedXitaMc"].mouseChildren = _map1709.conLevel["abandonedXitaMc"].mouseEnabled = false;
               _map1709.conLevel["projectorMc"].mouseChildren = _map1709.conLevel["projectorMc"].mouseEnabled = false;
               _map1709.conLevel["elfTemplePortalMc"].mouseChildren = _map1709.conLevel["elfTemplePortalMc"].mouseEnabled = false;
               _map1709.conLevel["gotoMapBtn"].mouseEnabled = true;
               _map1709.conLevel["siloBtn"].mouseEnabled = false;
            }
         });
      }
      
      public static function destroyMap1709() : void
      {
         MapStoryManager.quitStory();
         _map1709.conLevel.removeEventListener(MouseEvent.CLICK,onMap1709ConClickHandle);
         _map1709 = null;
      }
      
      public static function initMap1711(param1:BaseMapProcess) : void
      {
         _map1711 = param1;
         _map1711.conLevel.addEventListener(MouseEvent.CLICK,onMap1711ConClickHandle);
         updateMap1711State();
      }
      
      private static function onMap1711ConClickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         var stageX:Number = e.stageX;
         var stageY:Number = e.stageY;
         switch(btnName)
         {
            case "consoleBtn":
               if(_mainTaskStep < 4)
               {
                  if(_map1711.conLevel["consoleMc"].currentFrame == 1)
                  {
                     MapStoryManager.playerMoveToPos(new Point(744,374),function():void
                     {
                        _map1711.conLevel["consoleMc"].gotoAndStop(2);
                     });
                  }
                  else if(_map1711.conLevel["consoleMc"].currentFrame == 2)
                  {
                     _map1711.conLevel["consoleMc"].gotoAndStop(3);
                     AnimateManager.playMcAnimate(_map1711.conLevel["sleepingRobotMc"],2,"mc2",function():void
                     {
                        _map1711.conLevel["sleepingRobotMc"].gotoAndStop(3);
                        AnimateManager.playMcAnimate(_map1711.conLevel["liftMc"],2,"mc2",function():void
                        {
                           _map1711.conLevel["liftMc"].gotoAndStop(3);
                        },false,true);
                        fightBoss();
                     },false,true);
                  }
               }
               else if(_map1711.conLevel["consoleMc"].currentFrame == 2)
               {
                  MapStoryManager.playerMoveToPos(new Point(744,374),function():void
                  {
                     _map1711.conLevel["consoleMc"].gotoAndStop(3);
                     _map1711.conLevel["paopaoMc"].visible = true;
                     DialogControl.showAllDilogs(171,10).then(function(param1:int):void
                     {
                        var va:int = param1;
                        KTool.socketSendCallBack(45850,function():void
                        {
                           updateMap1711State();
                        },[29,5]);
                     });
                  });
               }
               break;
            case "liftBtn":
               if(_map1711.conLevel["liftMc"].currentFrame == 1)
               {
                  MapStoryManager.playerMoveToPos(new Point(183,319),function():void
                  {
                     DialogControl.showAllDilogs(171,4).then(function(param1:int):void
                     {
                     });
                  });
               }
               else if(_map1711.conLevel["liftMc"].currentFrame == 3)
               {
                  if(_mainTaskStep > 0 && _mainTaskStep < 10)
                  {
                     if(BitBuffSetClass.getState(24534) == 0)
                     {
                        BitBuffSetClass.setState(24534,1);
                        MapManager.changeMap(33);
                     }
                  }
                  else
                  {
                     MapManager.changeMap(33);
                  }
               }
               break;
            case "propBtn":
               if(_map1711.conLevel["propMc"].currentFrame == 1)
               {
                  MapStoryManager.playerMoveToPos(new Point(576,258),function():void
                  {
                     _map1711.conLevel["propMc"].gotoAndStop(2);
                     AnimateManager.playMcAnimate(_map1711.conLevel["propMc"],2,"mc2",function():void
                     {
                        _map1711.conLevel["propMc"].gotoAndStop(3);
                     },false,true);
                  });
               }
               else if(_map1711.conLevel["propMc"].currentFrame == 3)
               {
                  MapStoryManager.playerMoveToPos(new Point(576,258),function():void
                  {
                     DialogControl.showAllDilogs(171,5).then(function(param1:int):void
                     {
                        var va:int = param1;
                        _map1711.conLevel["propMc"].gotoAndStop(4);
                        KTool.socketSendCallBack(45850,function():void
                        {
                           updateMap1711State();
                        },[29,11]);
                     });
                  });
               }
               break;
            case "sleepingRobotBtn":
               if(_map1711.conLevel["sleepingRobotMc"].currentFrame == 1)
               {
                  MapStoryManager.playerMoveToPos(new Point(491,541),function():void
                  {
                     if(_mainTaskStep > 0 && _mainTaskStep < 10)
                     {
                        DialogControl.showAllDilogs(171,6).then(function():void
                        {
                        });
                     }
                     else
                     {
                        DialogControl.showAllDilogs(171,33).then(function():void
                        {
                        });
                     }
                  });
               }
               else if(_map1711.conLevel["sleepingRobotMc"].currentFrame == 3)
               {
                  fightBoss("sleepingRobotBtn");
               }
               else if(_map1711.conLevel["sleepingRobotMc"].currentFrame == 4)
               {
                  MapStoryManager.playerMoveToPos(new Point(680,436),function():void
                  {
                     DialogControl.showAllDilogs(171,11).then(function():void
                     {
                     });
                  });
               }
               break;
            case "aliceBtn":
               MapStoryManager.playerMoveToMc(_map1711.conLevel["aliceBtn"],function():void
               {
                  if(_mainTaskStep < 4)
                  {
                     if(_map1711.conLevel["sleepingRobotMc"].currentFrame != 3)
                     {
                        DialogControl.showAllDilogs(171,7).then(function():void
                        {
                        });
                     }
                     else
                     {
                        fightBoss("aliceBtn");
                     }
                  }
                  else if(_mainTaskStep == 8)
                  {
                     DialogControl.showSingleDilog(171,20,1).then(function():void
                     {
                     });
                  }
                  else
                  {
                     DialogControl.showAllDilogs(171,12).then(function():void
                     {
                     });
                  }
               });
               break;
            case "paopaoBtn":
               if(_map1711.conLevel["paopaoMc"].currentFrame == 2)
               {
                  _map1711.conLevel["nonoBtn"].visible = false;
                  ModuleManager.showAppModule("ACallThatSpansThousandsOfYearsPanel");
               }
               else if(_map1711.conLevel["paopaoMc"].currentFrame == 4)
               {
                  MapManager.changeMap(315);
               }
               break;
            case "lossRobotBtn":
               MapStoryManager.playerMoveToPos(new Point(703,513),function():void
               {
                  DialogControl.showAllDilogs(171,11).then(function():void
                  {
                  });
               });
               break;
            case "nonoBtn":
               DialogControl.showAllDilogs(171,13).then(function():void
               {
               });
         }
      }
      
      private static function updateMap1711State() : void
      {
         updateData().then(function(param1:Array):void
         {
            var valueArr:Array = param1;
            _mainTaskStep = KTool.subByte(valueArr[0],0,8);
            _stateValue = valueArr[0];
            if(_mainTaskStep > 0 && _mainTaskStep < 10)
            {
               _map1711.conLevel["consoleMc"].mouseChildren = _map1711.conLevel["consoleMc"].mouseEnabled = true;
               _map1711.conLevel["propMc"].mouseChildren = _map1711.conLevel["propMc"].mouseEnabled = true;
               _map1711.conLevel["liftMc"].mouseChildren = _map1711.conLevel["liftMc"].mouseEnabled = true;
               _map1711.conLevel["sleepingRobotMc"].mouseChildren = _map1711.conLevel["sleepingRobotMc"].mouseEnabled = true;
               _map1711.conLevel["propMc"].mouseEnabled = true;
               _map1711.conLevel["aliceBtn"].visible = true;
               _map1711.conLevel["paopaoMc"].visible = false;
               _map1711.conLevel["nonoBtn"].visible = false;
               MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
               MapStoryManager.startStory(2);
               if(BitUtils.getBit(_stateValue,8) > 0)
               {
                  _map1711.conLevel["propMc"].gotoAndStop(4);
               }
               else
               {
                  _map1711.conLevel["propMc"].gotoAndStop(1);
               }
               if(_mainTaskStep == 1)
               {
                  DialogControl.showAllDilogs(171,3).then(function():void
                  {
                     KTool.socketSendCallBack(45850,function():void
                     {
                        updateMap1711State();
                     },[29,2]);
                  });
                  _map1711.conLevel["liftMc"].gotoAndStop(1);
               }
               else if(_mainTaskStep == 2)
               {
                  _map1711.conLevel["liftMc"].gotoAndStop(1);
               }
               else if(_mainTaskStep == 3)
               {
                  _map1711.conLevel["liftMc"].gotoAndStop(3);
                  _map1711.conLevel["consoleMc"].gotoAndStop(3);
                  _map1711.conLevel["sleepingRobotMc"].gotoAndStop(3);
                  if(_isFightWin)
                  {
                     _isFightWin = false;
                     _map1711.conLevel["sleepingRobotMc"].gotoAndStop(4);
                     DialogControl.showAllDilogs(171,9).then(function():void
                     {
                        KTool.socketSendCallBack(45850,function():void
                        {
                           updateMap1711State();
                        },[29,4]);
                     });
                  }
                  else
                  {
                     _map1711.conLevel["consoleMc"].mouseChildren = _map1711.conLevel["consoleMc"].mouseEnabled = false;
                     _map1711.conLevel["propMc"].mouseChildren = _map1711.conLevel["propMc"].mouseEnabled = false;
                     _map1711.conLevel["liftMc"].mouseChildren = _map1711.conLevel["liftMc"].mouseEnabled = false;
                  }
               }
               else if(_mainTaskStep == 4)
               {
                  _map1711.conLevel["liftMc"].gotoAndStop(3);
                  _map1711.conLevel["consoleMc"].gotoAndStop(2);
                  _map1711.conLevel["sleepingRobotMc"].gotoAndStop(4);
                  _map1711.conLevel["nonoBtn"].visible = true;
                  MainManager.actorModel.hideNono();
               }
               else if(_mainTaskStep == 5)
               {
                  _map1711.conLevel["liftMc"].gotoAndStop(3);
                  _map1711.conLevel["consoleMc"].gotoAndStop(3);
                  _map1711.conLevel["paopaoMc"].visible = true;
                  _map1711.conLevel["paopaoMc"].gotoAndStop(2);
                  _map1711.conLevel["sleepingRobotMc"].gotoAndStop(4);
                  _map1711.conLevel["nonoBtn"].visible = false;
               }
               else if(_mainTaskStep == 6)
               {
                  _map1711.conLevel["liftMc"].gotoAndStop(3);
                  _map1711.conLevel["consoleMc"].gotoAndStop(3);
                  _map1711.conLevel["paopaoMc"].visible = true;
                  _map1711.conLevel["paopaoMc"].gotoAndStop(3);
                  _map1711.conLevel["sleepingRobotMc"].gotoAndStop(4);
                  _map1711.conLevel["nonoBtn"].visible = false;
                  AnimateManager.playMcAnimate(_map1711.conLevel["paopaoMc"],3,"mc3",function():void
                  {
                     _map1711.conLevel["paopaoMc"].gotoAndStop(4);
                     KTool.socketSendCallBack(45850,function():void
                     {
                        updateMap1711State();
                     },[29,7]);
                  },false,true);
               }
               else if(_mainTaskStep == 7)
               {
                  _map1711.conLevel["liftMc"].gotoAndStop(3);
                  _map1711.conLevel["consoleMc"].gotoAndStop(3);
                  _map1711.conLevel["paopaoMc"].visible = true;
                  _map1711.conLevel["paopaoMc"].gotoAndStop(4);
                  _map1711.conLevel["sleepingRobotMc"].gotoAndStop(4);
                  _map1711.conLevel["nonoBtn"].visible = false;
                  DialogControl.showAllDilogs(171,20).then(function():void
                  {
                     MapManager.changeMap(315);
                     KTool.socketSendCallBack(45850,function():void
                     {
                        updateMap1711State();
                     },[29,8]);
                  });
               }
               else if(_mainTaskStep == 8 || _mainTaskStep == 9)
               {
                  _map1711.conLevel["liftMc"].gotoAndStop(3);
                  _map1711.conLevel["consoleMc"].gotoAndStop(3);
                  _map1711.conLevel["paopaoMc"].visible = true;
                  _map1711.conLevel["paopaoMc"].gotoAndStop(4);
                  _map1711.conLevel["sleepingRobotMc"].gotoAndStop(4);
                  _map1711.conLevel["nonoBtn"].visible = false;
               }
               if(_map1711.conLevel["liftMc"].currentFrame == 3)
               {
                  if(BitBuffSetClass.getState(24534) == 1)
                  {
                     _map1711.conLevel["liftMc"].mouseChildren = _map1711.conLevel["liftMc"].mouseEnabled = false;
                  }
               }
            }
            else
            {
               _map1711.conLevel["consoleMc"].mouseChildren = _map1711.conLevel["consoleMc"].mouseEnabled = false;
               _map1711.conLevel["propMc"].mouseChildren = _map1711.conLevel["propMc"].mouseEnabled = false;
               _map1711.conLevel["sleepingRobotMc"].mouseChildren = _map1711.conLevel["sleepingRobotMc"].mouseEnabled = true;
               _map1711.conLevel["propMc"].mouseEnabled = false;
               _map1711.conLevel["aliceBtn"].visible = false;
               _map1711.conLevel["liftMc"].gotoAndStop(3);
               _map1711.conLevel["liftMc"].mouseChildren = _map1711.conLevel["liftMc"].mouseEnabled = true;
               _map1711.conLevel["nonoBtn"].visible = false;
               _map1711.conLevel["propMc"].gotoAndStop(4);
               _map1711.conLevel["consoleMc"].gotoAndStop(2);
               _map1711.conLevel["paopaoMc"].visible = false;
               _map1711.conLevel["sleepingRobotMc"].gotoAndStop(1);
            }
         });
      }
      
      private static function fightBoss(param1:String = "") : void
      {
         var str:String = param1;
         if(_mainTaskStep == 2)
         {
            DialogControl.showAllDilogs(171,8).then(function(param1:int):void
            {
               var va:int = param1;
               KTool.socketSendCallBack(45850,function():void
               {
                  _mainTaskStep = 3;
                  if(va == 1)
                  {
                     FightManager.fightNoMapBoss("",18701,false,true);
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
                  }
                  else
                  {
                     PetBagControllerNew.showByBuffer();
                  }
               },[29,3]);
            });
         }
         else if(str == "sleepingRobotBtn")
         {
            FightManager.fightNoMapBoss("",18701,false,true);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         }
         else if(str == "aliceBtn")
         {
            DialogControl.showSingleDilog(171,8,5).then(function(param1:int):void
            {
               if(param1 == 1)
               {
                  FightManager.fightNoMapBoss("",18701,false,true);
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
               }
               else
               {
                  PetBagControllerNew.showByBuffer();
               }
            });
         }
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         if(FightManager.isWin)
         {
            _isFightWin = true;
            MapManager.refMap();
         }
      }
      
      public static function destroyMap1711() : void
      {
         MapStoryManager.quitStory();
         _map1711.conLevel.removeEventListener(MouseEvent.CLICK,onMap1711ConClickHandle);
         _map1711 = null;
      }
      
      public static function initMap33(param1:MapProcess_33) : void
      {
         _map33 = param1;
         _map33.conLevel.addEventListener(MouseEvent.CLICK,onMap33ConClickHandle);
         updateMap33State();
      }
      
      private static function onMap33ConClickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "gotoBtn":
               MapManager.changeMap(1711);
               break;
            case "aliceBtn":
               DialogControl.showAllDilogs(171,14).then(function():void
               {
               });
               break;
            case "chuansongBtn":
               DialogControl.showAllDilogs(171,15).then(function():void
               {
               });
               break;
            case "goto1711Btn":
               if(_mainTaskStep == 0 || _mainTaskStep == 10)
               {
                  MapStoryManager.playerMoveToPos(new Point(477,200),function():void
                  {
                     AnimateManager.playMcAnimate(_map33.conLevel["lockMc"],2,"mc2",function():void
                     {
                        _map33.conLevel["lockMc"].gotoAndStop(3);
                     },false,true);
                  });
               }
         }
      }
      
      private static function updateMap33State() : void
      {
         updateData().then(function(param1:Array):void
         {
            var valueArr:Array = param1;
            _mainTaskStep = KTool.subByte(valueArr[0],0,8);
            _stateValue = valueArr[0];
            if(_mainTaskStep > 0 && _mainTaskStep < 10)
            {
               MapStoryManager.startStory(2);
               _map33.conLevel["lockMc"].visible = true;
               _map33.conLevel["lockMc"].gotoAndStop(1);
               _map33.conLevel["maskMc"].visible = true;
               _map33.conLevel["maskMc"].gotoAndStop(1);
               _map33.conLevel["chuansongBtn"].visible = true;
               _map33.conLevel["aliceBtn"].visible = true;
               if(_mainTaskStep >= 4)
               {
                  if(BitUtils.getBit(_stateValue,9) == 0)
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_ACallThatSpansThousandsOfYears33_0"),function():void
                     {
                        AnimateManager.playMcAnimate(_map33.conLevel["lockMc"],2,"mc2",function():void
                        {
                           _map33.conLevel["lockMc"].gotoAndStop(3);
                           DialogControl.showAllDilogs(171,31).then(function():void
                           {
                              KTool.socketSendCallBack(45850,function():void
                              {
                                 updateMap33State();
                              },[29,12]);
                           });
                        },false,true);
                     });
                  }
                  else
                  {
                     _map33.conLevel["lockMc"].gotoAndStop(3);
                  }
               }
               _map33.conLevel["goto1711Btn"].visible = false;
            }
            else
            {
               _map33.conLevel["chuansongBtn"].visible = false;
               _map33.conLevel["aliceBtn"].visible = false;
            }
         });
      }
      
      public static function destroyMap33() : void
      {
         MapStoryManager.quitStory();
         _map33.conLevel.removeEventListener(MouseEvent.CLICK,onMap33ConClickHandle);
         _map33 = null;
      }
      
      public static function initMap315(param1:BaseMapProcess) : void
      {
         _map315 = param1;
         _map315.conLevel.addEventListener(MouseEvent.CLICK,onMap315ConClickHandle);
         updateMap315State();
      }
      
      private static function onMap315ConClickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         var stageX:Number = e.stageX;
         var stageY:Number = e.stageY;
         switch(btnName)
         {
            case "gotoBailunhaoBtn":
               MapStoryManager.playerMoveToPos(new Point(257,176),function():void
               {
                  DialogControl.showAllDilogs(171,24).then(function():void
                  {
                  });
               });
               break;
            case "gotojinglingcangBtn":
               MapStoryManager.playerMoveToPos(new Point(747,251),function():void
               {
                  DialogControl.showAllDilogs(171,25).then(function():void
                  {
                  });
               });
               break;
            case "spaceTimeDoorBtn":
               MapStoryManager.playerMoveToPos(new Point(482,312),function():void
               {
                  DialogControl.showAllDilogs(171,26).then(function():void
                  {
                  });
               });
               break;
            case "aliceBtn":
               MapStoryManager.playerMoveToPos(new Point(283,327),function():void
               {
                  DialogControl.showAllDilogs(171,27).then(function():void
                  {
                  });
               });
               break;
            case "disk_0Btn":
               MapStoryManager.playerMoveToPos(new Point(608,347),function():void
               {
                  DialogControl.showAllDilogs(171,28).then(function():void
                  {
                     _map315.conLevel["disk_0Btn"].visible = false;
                     _map315.conLevel["diskMc_0"].visible = false;
                  });
               });
               break;
            case "disk_1Btn":
               MapStoryManager.playerMoveToPos(new Point(608,347),function():void
               {
                  DialogControl.showAllDilogs(171,29).then(function():void
                  {
                     _map315.conLevel["disk_1Btn"].visible = false;
                     _map315.conLevel["diskMc_1"].visible = false;
                  });
               });
               break;
            case "coverBtn":
               MapStoryManager.playerMoveToPos(new Point(364,400),function():void
               {
                  if(_map315.conLevel["coverMc"].currentFrame == 1)
                  {
                     AnimateManager.playMcAnimate(_map315.conLevel["coverMc"],2,"mc2",function():void
                     {
                        _map315.conLevel["coverMc"].gotoAndStop(3);
                     },false,true);
                  }
                  else if(_map315.conLevel["coverMc"].currentFrame == 3)
                  {
                     DialogControl.showAllDilogs(171,30).then(function():void
                     {
                        KTool.socketSendCallBack(45850,function():void
                        {
                           MapStoryManager.quitStory();
                           TasksController.taskCompleteUI();
                           updateMap315State();
                           ModuleManager.showAppModule("MapStorySeriesGuide");
                        },[29,10]);
                     });
                  }
               });
         }
      }
      
      private static function updateMap315State() : void
      {
         updateData().then(function(param1:Array):void
         {
            var valueArr:Array = param1;
            _mainTaskStep = KTool.subByte(valueArr[0],0,8);
            _stateValue = valueArr[0];
            if(_mainTaskStep > 0 && _mainTaskStep < 10)
            {
               MapStoryManager.startStory(2);
               _map315.conLevel["aliceBtn"].visible = true;
               _map315.conLevel["gotoBailunhaoBtn"].visible = true;
               _map315.conLevel["gotojinglingcangBtn"].visible = true;
               _map315.conLevel["spaceTimeDoorBtn"].visible = true;
               _map315.conLevel["disk_0Btn"].visible = false;
               _map315.conLevel["disk_1Btn"].visible = false;
               _map315.conLevel["diskMc_0"].visible = false;
               _map315.conLevel["diskMc_1"].visible = false;
               _map315.conLevel["spt368"].visible = false;
               _map315.conLevel["task739HdMC"].visible = false;
               _map315.conLevel["task739LlMC"].visible = false;
               _map315.conLevel["coverMc"].mouseEnabled = _map315.conLevel["coverMc"].mouseChildren = true;
               if(_mainTaskStep == 8)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_ACallThatSpansThousandsOfYears315_0"),function():void
                  {
                     DialogControl.showAllDilogs(171,21).then(function():void
                     {
                        ModuleManager.showAppModule("MapStoryScreenView",{
                           "acId":171,
                           "numId":22,
                           "callback":function():void
                           {
                              DialogControl.showAllDilogs(171,23).then(function():void
                              {
                                 KTool.socketSendCallBack(45850,function():void
                                 {
                                    updateMap315State();
                                 },[29,9]);
                              });
                           }
                        });
                     });
                  });
               }
               else if(_mainTaskStep == 9)
               {
               }
            }
            else
            {
               _map315.conLevel["aliceBtn"].visible = false;
               _map315.conLevel["gotoBailunhaoBtn"].visible = false;
               _map315.conLevel["gotojinglingcangBtn"].visible = false;
               _map315.conLevel["spaceTimeDoorBtn"].visible = false;
               _map315.conLevel["disk_0Btn"].visible = false;
               _map315.conLevel["disk_1Btn"].visible = false;
               _map315.conLevel["diskMc_0"].visible = false;
               _map315.conLevel["diskMc_1"].visible = false;
               _map315.conLevel["coverMc"].mouseEnabled = _map315.conLevel["coverMc"].mouseChildren = false;
            }
         });
      }
      
      public static function destroyMap315() : void
      {
         MapStoryManager.quitStory();
         _map315.conLevel.removeEventListener(MouseEvent.CLICK,onMap315ConClickHandle);
         _map315 = null;
      }
   }
}
