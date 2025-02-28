package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.MapProcess_32;
   import com.robot.app.sptStar.LeiyiController;
   import com.robot.app.task.control.TasksController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.MapStoryManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class ASignalThatNeverDisappearsController
   {
      
      private static var _preTaskStepIsDone:Boolean = false;
      
      private static var _mainTaskStep:int = 0;
      
      private static var _stateValue:int = 0;
      
      private static var _map30:BaseMapProcess;
      
      private static var clickNum:int = 0;
      
      private static var _map31:BaseMapProcess;
      
      private static var _map32:MapProcess_32;
      
      private static var _map33:BaseMapProcess;
      
      private static var _map34:BaseMapProcess;
      
      private static var _isCatch:Boolean;
      
      private static var stoneState:int;
      
      private static var _map36:BaseMapProcess;
      
      private static var _map1710:BaseMapProcess;
      
      private static var _isFightWin:Boolean;
      
      private static var _isFightOver:Boolean;
      
      private static var _map1709:BaseMapProcess;
      
      private static var _saveDot_1709_0:Boolean = false;
      
      private static var _saveDot_1709_1:Boolean = false;
      
      private static var _stoneBitArr:Array = [];
       
      
      public function ASignalThatNeverDisappearsController()
      {
         super();
      }
      
      private static function updateData() : Promise
      {
         return KTool.getMultiValue([124331,124332,105807,124338,105810]);
      }
      
      public static function initMap30(param1:BaseMapProcess) : void
      {
         _map30 = param1;
         _map30.conLevel.addEventListener(MouseEvent.CLICK,onMap30ConClickHandle);
         _map30.topLevel["boxAnim"].visible = false;
         _map30.topLevel["boxAnim"].gotoAndStop(1);
         updateMap30State();
      }
      
      private static function onMap30ConClickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "aliceBtn":
               DialogControl.showAllDilogs(168,1).then(function(param1:int):void
               {
                  var va:int = param1;
                  if(va == 1 && _mainTaskStep == 0)
                  {
                     MapStoryManager.startStory(1);
                     DialogControl.showAllDilogs(168,2).then(function(param1:int):void
                     {
                        var va:int = param1;
                        ModuleManager.showAppModule("MapStoryScreenView",{
                           "acId":168,
                           "numId":3,
                           "callback":function():void
                           {
                              DialogControl.showAllDilogs(168,4).then(function():void
                              {
                                 KTool.socketSendCallBack(41900,function():void
                                 {
                                    updateMap30State();
                                 },[98,1]);
                              });
                           }
                        });
                     });
                  }
               });
               break;
            case "bibiMouseBtn_0":
               ++clickNum;
               if(clickNum >= 2)
               {
                  if(_map30.conLevel["bibiMouseMc_0"].currentFrame == 1)
                  {
                     AnimateManager.playMcAnimate(_map30.conLevel["bibiMouseMc_0"],2,"mc2",function():void
                     {
                        _map30.conLevel["bibiMouseMc_0"].gotoAndStop(3);
                     },false,true);
                  }
                  else if(_map30.conLevel["bibiMouseMc_0"].currentFrame == 3)
                  {
                     MapStoryManager.playerMoveToPos(new Point(209,500),function():void
                     {
                        DialogControl.showAllDilogs(168,5).then(function():void
                        {
                           if(!BitUtils.getBit(_stateValue,0))
                           {
                              KTool.socketSendCallBack(41900,function():void
                              {
                                 updateMap30State();
                              },[99,1]);
                           }
                        });
                     });
                  }
               }
               break;
            case "bibiMouseBtn_1":
               if(_map30.conLevel["bibiMouseMc_1"].currentFrame == 1)
               {
                  AnimateManager.playMcAnimate(_map30.conLevel["bibiMouseMc_1"],2,"mc2",function():void
                  {
                     _map30.conLevel["bibiMouseMc_1"].gotoAndStop(3);
                  },false,true);
               }
               else if(_map30.conLevel["bibiMouseMc_1"].currentFrame == 3)
               {
                  MapStoryManager.playerMoveToPos(new Point(616,293),function():void
                  {
                     DialogControl.showAllDilogs(168,6).then(function():void
                     {
                        if(!BitUtils.getBit(_stateValue,1))
                        {
                           KTool.socketSendCallBack(41900,function():void
                           {
                              updateMap30State();
                           },[99,2]);
                        }
                     });
                  });
               }
               break;
            case "chuansongBtn":
               if(_mainTaskStep > 0 && _mainTaskStep < 7)
               {
                  MapStoryManager.playerMoveToMc(_map30.conLevel["door_0"],function():void
                  {
                     DialogControl.showAllDilogs(168,7).then(function(param1:int):void
                     {
                        if(param1 == 2)
                        {
                           MapManager.changeMap(1);
                        }
                     });
                  });
               }
               break;
            case "goto36Btn":
               MapStoryManager.playerMoveToPos(new Point(637,251),function():void
               {
                  MapManager.changeMap(33);
               });
               break;
            case "getBtn":
               AnimateManager.playMcAnimate(_map30.conLevel["getBtnMc"],2,"mc2",function():void
               {
                  DialogControl.showAllDilogs(172,1).then(function():void
                  {
                     _map30.conLevel["getBtnMc"].visible = false;
                     KTool.socketSendCallBack(45850,function():void
                     {
                        updateMap30State();
                     },[29,13]);
                  });
               },false,true);
               break;
            case "stone":
               _map30.topLevel["boxAnim"].visible = true;
               AnimateManager.playMcAnimate(_map30.topLevel["boxAnim"],1,"",function():void
               {
                  _map30.topLevel["boxAnim"].visible = false;
                  if(!BitUtils.getBit(stoneState,7))
                  {
                     KTool.socketSendCallBack(41900,function():void
                     {
                        StatManager.sendStat2014("1220场景彩蛋","在地图30领取了赫尔卡星彩蛋奖励","2024运营活动");
                        updateMap30State();
                     },[103,8]);
                  }
               },false,true);
         }
      }
      
      private static function updateMap30State() : void
      {
         updateData().then(function(param1:Array):void
         {
            _mainTaskStep = KTool.subByte(param1[0],0,8);
            stoneState = param1[3];
            _stateValue = param1[1];
            _preTaskStepIsDone = BitUtils.getBit(param1[2],19) > 0;
            if(BitUtils.getBit(param1[4],11) == 0 && Boolean(SystemTimerManager.getIsInActivity("20241206","2025020710")))
            {
               _map30.conLevel["getBtnMc"].visible = true;
            }
            else
            {
               _map30.conLevel["getBtnMc"].visible = false;
            }
            if(_mainTaskStep > 0 && _mainTaskStep < 7)
            {
               MapStoryManager.startStory(1);
               _map30.conLevel["aliceBtn"].visible = false;
               _map30.conLevel["comp_4"].visible = false;
               _map30.conLevel["door_4"].visible = false;
               _map30.conLevel["door_0"].mouseChildren = _map30.conLevel["door_0"].mouseEnabled = true;
               _map30.conLevel["bibiMouseMc_0"].mouseChildren = _map30.conLevel["bibiMouseMc_0"].mouseEnabled = true;
               _map30.conLevel["bibiMouseMc_1"].mouseChildren = _map30.conLevel["bibiMouseMc_1"].mouseEnabled = true;
               if(!BitUtils.getBit(_stateValue,0))
               {
                  _map30.conLevel["bibiMouseMc_0"].gotoAndStop(1);
               }
               else
               {
                  _map30.conLevel["bibiMouseMc_0"].gotoAndStop(3);
               }
               if(!BitUtils.getBit(_stateValue,1))
               {
                  _map30.conLevel["bibiMouseMc_1"].gotoAndStop(1);
               }
               else
               {
                  _map30.conLevel["bibiMouseMc_1"].gotoAndStop(3);
               }
            }
            else
            {
               if(_mainTaskStep != 7)
               {
                  _map30.conLevel["aliceBtn"].visible = _preTaskStepIsDone;
               }
               else
               {
                  _map30.conLevel["aliceBtn"].visible = false;
                  _map30.conLevel["bibiMouseMc_0"].visible = false;
                  _map30.conLevel["bibiMouseMc_1"].gotoAndStop(4);
               }
               _map30.conLevel["bibiMouseMc_0"].mouseChildren = _map30.conLevel["bibiMouseMc_0"].mouseEnabled = false;
               _map30.conLevel["bibiMouseMc_1"].mouseChildren = _map30.conLevel["bibiMouseMc_1"].mouseEnabled = false;
               _map30.conLevel["door_0"].mouseChildren = _map30.conLevel["door_0"].mouseEnabled = false;
            }
            if(Boolean(SystemTimerManager.getIsInActivity("20241220","2024122710")) && !BitUtils.getBit(stoneState,7))
            {
               _map30.conLevel["stone"].visible = true;
               _map30.btnLevel.mouseEnabled = _map30.btnLevel.mouseChildren = false;
            }
            else
            {
               _map30.conLevel["stone"].visible = false;
            }
         });
      }
      
      public static function destroyMap30() : void
      {
         MapStoryManager.quitStory();
         _map30.conLevel.removeEventListener(MouseEvent.CLICK,onMap30ConClickHandle);
         _map30 = null;
      }
      
      public static function initMap31(param1:BaseMapProcess) : void
      {
         _map31 = param1;
         _map31.conLevel.addEventListener(MouseEvent.CLICK,onMap31ConClickHandle);
         updateMap31State();
      }
      
      private static function onMap31ConClickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var timeOut:* = undefined;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "aliceBtn":
            case "redBtn":
               if(_mainTaskStep >= 2)
               {
                  _map31.conLevel["redBtnMc"].gotoAndStop(2);
                  AnimateManager.playMcAnimate(_map31.conLevel["ye_doorMc"],2,"mc2",function():void
                  {
                     _map31.conLevel["ye_doorMc"].gotoAndStop(3);
                     DialogControl.showAllDilogs(168,13).then(function(param1:int):void
                     {
                        var va:int = param1;
                        if(_mainTaskStep == 2)
                        {
                           KTool.socketSendCallBack(41900,function():void
                           {
                              if(va == 1)
                              {
                                 MapManager.changeMap(1710);
                              }
                              else if(!BitUtils.getBit(_stateValue,15))
                              {
                                 KTool.socketSendCallBack(41900,function():void
                                 {
                                    updateMap31State();
                                 },[99,16]);
                              }
                           },[98,1]);
                        }
                        else if(va == 1)
                        {
                           MapManager.changeMap(1710);
                        }
                        else if(!BitUtils.getBit(_stateValue,15))
                        {
                           KTool.socketSendCallBack(41900,function():void
                           {
                              updateMap31State();
                           },[99,16]);
                        }
                     });
                  },false,true);
               }
               else
               {
                  LevelManager.closeMouseEvent();
                  _map31.conLevel["redBtnMc"].gotoAndStop(2);
                  timeOut = setTimeout(function():void
                  {
                     _map31.conLevel["redBtnMc"].gotoAndStop(1);
                     clearTimeout(timeOut);
                     LevelManager.openMouseEvent();
                     if(BitBuffSetClass.getState(24524) == 0)
                     {
                        DialogControl.showAllDilogs(168,12).then(function():void
                        {
                           BitBuffSetClass.setState(24524,1);
                        });
                     }
                     else
                     {
                        DialogControl.showSingleDilog(168,12,10);
                     }
                  },1000);
               }
               break;
            case "ye_doorBtn":
               MapStoryManager.playerMoveToPos(new Point(368,195),function():void
               {
                  MapManager.changeMap(1710);
               });
               break;
            case "xitaBtn":
               if(_map31.conLevel["xitaMc"].currentFrame == 1)
               {
                  AnimateManager.playMcAnimate(_map31.conLevel["xitaMc"],2,"mc2",function():void
                  {
                     _map31.conLevel["xitaMc"].gotoAndStop(3);
                  },false,true);
               }
               else if(_map31.conLevel["xitaMc"].currentFrame == 3)
               {
                  MapStoryManager.playerMoveToPos(new Point(563,304),function():void
                  {
                     DialogControl.showAllDilogs(168,8).then(function():void
                     {
                        if(!BitUtils.getBit(_stateValue,2))
                        {
                           KTool.socketSendCallBack(41900,function():void
                           {
                              updateMap31State();
                           },[99,3]);
                        }
                     });
                  });
               }
               break;
            case "qitaBtn":
               if(_map31.conLevel["qitaMc"].currentFrame == 1)
               {
                  AnimateManager.playMcAnimate(_map31.conLevel["qitaMc"],2,"mc2",function():void
                  {
                     _map31.conLevel["qitaMc"].gotoAndStop(3);
                  },false,true);
               }
               else if(_map31.conLevel["qitaMc"].currentFrame == 3)
               {
                  MapStoryManager.playerMoveToPos(new Point(644,427),function():void
                  {
                     DialogControl.showAllDilogs(168,9).then(function():void
                     {
                        if(!BitUtils.getBit(_stateValue,3))
                        {
                           KTool.socketSendCallBack(41900,function():void
                           {
                              updateMap31State();
                           },[99,4]);
                        }
                     });
                  });
               }
               break;
            case "heKateBtn":
               if(_map31.conLevel["heKateMc"].currentFrame == 1)
               {
                  AnimateManager.playMcAnimate(_map31.conLevel["heKateMc"],2,"mc2",function():void
                  {
                     _map31.conLevel["heKateMc"].gotoAndStop(3);
                  },false,true);
               }
               else if(_map31.conLevel["heKateMc"].currentFrame == 3)
               {
                  MapStoryManager.playerMoveToPos(new Point(150,174),function():void
                  {
                     DialogControl.showAllDilogs(168,10).then(function():void
                     {
                        if(!BitUtils.getBit(_stateValue,4))
                        {
                           KTool.socketSendCallBack(41900,function():void
                           {
                              updateMap31State();
                           },[99,5]);
                        }
                     });
                  });
               }
               break;
            case "chipBtn":
               if(_map31.conLevel["chipMc"].currentFrame == 1)
               {
                  AnimateManager.playMcAnimate(_map31.conLevel["chipMc"],2,"mc2",function():void
                  {
                     _map31.conLevel["chipMc"].gotoAndStop(3);
                  },false,true);
               }
               else if(_map31.conLevel["chipMc"].currentFrame == 3)
               {
                  MapStoryManager.playerMoveToPos(new Point(649,304),function():void
                  {
                     DialogControl.showAllDilogs(168,11).then(function():void
                     {
                        if(!BitUtils.getBit(_stateValue,5))
                        {
                           KTool.socketSendCallBack(41900,function():void
                           {
                              ModuleManager.showAppModule("ASignalThatNeverDisappearsChipPanel");
                           },[99,6]);
                        }
                        else
                        {
                           ModuleManager.showAppModule("ASignalThatNeverDisappearsChipPanel");
                        }
                     });
                  });
               }
               break;
            case "boxBtn":
               AnimateManager.playMcAnimate(_map31.conLevel["boxMc"],2,"mc2",function():void
               {
                  _map31.conLevel["boxMc"].visible = false;
                  if(!BitUtils.getBit(_stateValue,14))
                  {
                     KTool.socketSendCallBack(41900,function():void
                     {
                        updateMap31State();
                     },[99,15]);
                  }
               },false,true);
         }
      }
      
      private static function updateMap31State() : void
      {
         updateData().then(function(param1:Array):void
         {
            _mainTaskStep = KTool.subByte(param1[0],0,8);
            _stateValue = param1[1];
            if(_mainTaskStep > 0 && _mainTaskStep < 7)
            {
               MapStoryManager.startStory(1);
               _map31.conLevel["aliceBtn"].visible = true;
               _map31.conLevel["xitaMc"].mouseChildren = _map31.conLevel["xitaMc"].mouseEnabled = true;
               _map31.conLevel["qitaMc"].mouseChildren = _map31.conLevel["xitaMc"].mouseEnabled = true;
               _map31.conLevel["heKateMc"].mouseChildren = _map31.conLevel["xitaMc"].mouseEnabled = true;
               _map31.conLevel["chipMc"].mouseChildren = _map31.conLevel["chipMc"].mouseEnabled = true;
               if(BitUtils.getBit(_stateValue,2) > 0)
               {
                  _map31.conLevel["xitaMc"].gotoAndStop(3);
               }
               else
               {
                  _map31.conLevel["xitaMc"].gotoAndStop(1);
               }
               if(BitUtils.getBit(_stateValue,3) > 0)
               {
                  _map31.conLevel["qitaMc"].gotoAndStop(3);
               }
               else
               {
                  _map31.conLevel["qitaMc"].gotoAndStop(1);
               }
               if(BitUtils.getBit(_stateValue,4) > 0)
               {
                  _map31.conLevel["heKateMc"].gotoAndStop(3);
               }
               else
               {
                  _map31.conLevel["heKateMc"].gotoAndStop(1);
               }
               if(BitUtils.getBit(_stateValue,5) > 0)
               {
                  _map31.conLevel["chipMc"].gotoAndStop(3);
               }
               else
               {
                  _map31.conLevel["chipMc"].gotoAndStop(1);
               }
               if(_mainTaskStep < 2)
               {
                  _map31.conLevel["eyeMc"].gotoAndStop(2);
                  _map31.conLevel["redBtnMc"].gotoAndStop(1);
               }
               else
               {
                  _map31.conLevel["eyeMc"].gotoAndStop(1);
                  _map31.conLevel["redBtnMc"].gotoAndStop(3);
               }
               if(!BitUtils.getBit(_stateValue,15))
               {
                  _map31.conLevel["ye_doorMc"].mouseChildren = _map31.conLevel["ye_doorMc"].mouseEnabled = false;
               }
               else
               {
                  _map31.conLevel["ye_doorMc"].mouseChildren = _map31.conLevel["ye_doorMc"].mouseEnabled = true;
               }
               _map31.conLevel["boxMc"].visible = false;
            }
            else
            {
               _map31.conLevel["aliceBtn"].visible = false;
               _map31.conLevel["xitaMc"].mouseChildren = _map31.conLevel["xitaMc"].mouseEnabled = false;
               _map31.conLevel["qitaMc"].mouseChildren = _map31.conLevel["xitaMc"].mouseEnabled = false;
               _map31.conLevel["heKateMc"].mouseChildren = _map31.conLevel["xitaMc"].mouseEnabled = false;
               _map31.conLevel["chipMc"].mouseChildren = _map31.conLevel["chipMc"].mouseEnabled = false;
               _map31.conLevel["ye_doorMc"].mouseChildren = _map31.conLevel["ye_doorMc"].mouseEnabled = true;
               _map31.conLevel["redBtnMc"].mouseChildren = _map31.conLevel["redBtnMc"].mouseEnabled = false;
               if(Boolean(SystemTimerManager.getIsInActivity("20241129","2024120610")) && !BitUtils.getBit(_stateValue,14))
               {
                  _map31.conLevel["boxMc"].visible = true;
               }
               else
               {
                  _map31.conLevel["boxMc"].visible = false;
               }
            }
         });
      }
      
      public static function destroyMap31() : void
      {
         MapStoryManager.quitStory();
         _map31.conLevel.removeEventListener(MouseEvent.CLICK,onMap31ConClickHandle);
         _map31 = null;
      }
      
      public static function initMap32(param1:BaseMapProcess) : void
      {
         _map32 = param1 as MapProcess_32;
         _map32.conLevel.addEventListener(MouseEvent.CLICK,onMap32ConClickHandle);
         _map32.topLevel["boxAnim"].visible = false;
         _map32.topLevel["boxAnim"].gotoAndStop(1);
         updateMap32State();
      }
      
      private static function onMap32ConClickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "wuyaBtn":
               if(!BitUtils.getBit(_stateValue,11))
               {
                  DialogControl.showAllDilogs(168,14).then(function():void
                  {
                     KTool.socketSendCallBack(41900,function():void
                     {
                        updateMap32State();
                     },[99,12]);
                  });
               }
               else
               {
                  DialogControl.showSingleDilog(168,14,13);
               }
               break;
            case "rockBtn":
               AnimateManager.playMcAnimate(_map32.conLevel["rockMc"],2,"mc2",function():void
               {
                  _map32.conLevel["rockMc"].gotoAndStop(1);
                  if(!BitUtils.getBit(_stateValue,12))
                  {
                     DialogControl.showAllDilogs(168,15).then(function():void
                     {
                        KTool.socketSendCallBack(41900,function():void
                        {
                           updateMap32State();
                        },[99,13]);
                     });
                  }
               },false,true);
               break;
            case "stone":
               _map32.topLevel["boxAnim"].visible = true;
               AnimateManager.playMcAnimate(_map32.topLevel["boxAnim"],1,"",function():void
               {
                  _map32.topLevel["boxAnim"].visible = false;
                  if(!BitUtils.getBit(stoneState,1))
                  {
                     KTool.socketSendCallBack(41900,function():void
                     {
                        StatManager.sendStat2014("1206场景彩蛋","在地图34领取了精灵广场彩蛋奖励","2024运营活动");
                        updateMap32State();
                     },[103,2]);
                  }
               },false,true);
         }
      }
      
      private static function updateMap32State() : void
      {
         updateData().then(function(param1:Array):void
         {
            _mainTaskStep = KTool.subByte(param1[0],0,8);
            _stateValue = param1[1];
            stoneState = param1[3];
            if(_mainTaskStep > 0 && _mainTaskStep < 7)
            {
               MapStoryManager.startStory(1);
               hideOtherBtns();
               _map32.conLevel["wuyaBtn"].visible = true;
               _map32.conLevel["rockMc"].visible = true;
               _map32.conLevel["rockMc"].gotoAndStop(1);
            }
            else
            {
               _map32.conLevel["wuyaBtn"].visible = false;
               LeiyiController._setNotloadPet = false;
            }
            if(Boolean(SystemTimerManager.getIsInActivity("20241213","2024122010")) && !BitUtils.getBit(stoneState,1))
            {
               _map32.conLevel["stone"].visible = true;
               _map32.btnLevel.mouseEnabled = _map32.btnLevel.mouseChildren = false;
            }
            else
            {
               _map32.conLevel["stone"].visible = false;
            }
         });
      }
      
      private static function hideOtherBtns() : void
      {
         _map32._seerModel.visible = false;
         _map32.animatorLevel.visible = false;
         _map32.topLevel.visible = false;
         if(TasksManager.getTaskStatus(130) != TasksManager.COMPLETE)
         {
            CommonUI.removeYellowExcal(_map32._seerModel.parent);
         }
         _map32._seerModel.pet.visible = false;
         if(LeiyiController._petMc != null)
         {
            LeiyiController._petMc.visible = false;
         }
         else
         {
            LeiyiController._setNotloadPet = true;
         }
      }
      
      public static function destroyMap32() : void
      {
         MapStoryManager.quitStory();
         _map32.conLevel.removeEventListener(MouseEvent.CLICK,onMap32ConClickHandle);
         _map32 = null;
      }
      
      public static function initMap33(param1:BaseMapProcess) : void
      {
         _map33 = param1;
         _map33.conLevel.addEventListener(MouseEvent.CLICK,onMap33ConClickHandle);
         updateMap33State();
      }
      
      private static function onMap33ConClickHandle(param1:MouseEvent) : void
      {
         var _loc4_:int = 0;
         var _loc2_:String = String(param1.target.name);
         var _loc3_:int = int(KTool.getIndex(param1.target));
         var _loc5_:* = _loc2_;
         switch(0)
         {
         }
      }
      
      private static function updateMap33State() : void
      {
         updateData().then(function(param1:Array):void
         {
            var valueArr:Array = param1;
            _mainTaskStep = KTool.subByte(valueArr[0],0,8);
            _stateValue = valueArr[1];
            if(_mainTaskStep > 0 && _mainTaskStep < 7)
            {
               MapStoryManager.startStory(1);
               if(!BitUtils.getBit(_stateValue,8))
               {
                  DialogControl.showAllDilogs(168,16).then(function():void
                  {
                     KTool.socketSendCallBack(41900,function():void
                     {
                        updateMap33State();
                     },[99,9]);
                  });
               }
               _map33.conLevel["goto1711Btn"].visible = false;
            }
         });
      }
      
      public static function destroyMap33() : void
      {
         MapStoryManager.quitStory();
         _map33.conLevel.removeEventListener(MouseEvent.CLICK,onMap33ConClickHandle);
         _map33 = null;
      }
      
      public static function initMap34(param1:BaseMapProcess) : void
      {
         _map34 = param1;
         _map34.conLevel.addEventListener(MouseEvent.CLICK,onMap34ConClickHandle);
         _map34.topLevel["ami"].visible = false;
         _map34.topLevel["boxAnim"].visible = false;
         _map34.topLevel["boxAnim"].gotoAndStop(1);
         updateMap34State();
      }
      
      private static function onFightOver(param1:DynamicEvent) : void
      {
         var _loc2_:int = int(param1.paramObject);
         if(_loc2_ == 74)
         {
            FightDispatcher.removeEventListener(PetFightEvent.CATCH_SUCCESS,onFightOver);
            _isCatch = true;
         }
      }
      
      private static function onMap34ConClickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "fightBtn":
               MapStoryManager.playerMoveToMc(_map34.conLevel["guodongyaMc"],function():void
               {
                  FightManager.fightWithBoss("果冻鸭",0,false,true);
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
                  FightDispatcher.addEventListener(PetFightEvent.CATCH_SUCCESS,onFightOver);
               });
               break;
            case "anbianHeziBtn":
               MapStoryManager.playerMoveToPos(new Point(272,226),function():void
               {
                  DialogControl.showAllDilogs(168,19).then(function():void
                  {
                  });
               });
               break;
            case "stone":
               _map34.topLevel["boxAnim"].visible = true;
               AnimateManager.playMcAnimate(_map34.topLevel["boxAnim"],1,"",function():void
               {
                  _map34.topLevel["boxAnim"].visible = false;
                  if(!BitUtils.getBit(stoneState,0))
                  {
                     KTool.socketSendCallBack(41900,function():void
                     {
                        StatManager.sendStat2014("1206场景彩蛋","在地图34领取了精灵广场彩蛋奖励","2024运营活动");
                        updateMap34State();
                     },[103,1]);
                  }
               },false,true);
         }
      }
      
      private static function updateMap34State() : void
      {
         updateData().then(function(param1:Array):void
         {
            var valueArr:Array = param1;
            _mainTaskStep = KTool.subByte(valueArr[0],0,8);
            stoneState = valueArr[3];
            _stateValue = valueArr[1];
            if(_mainTaskStep > 0 && _mainTaskStep < 7)
            {
               MapStoryManager.startStory(1);
               _map34.conLevel["tipBtn"].visible = false;
               _map34.conLevel["petMC"].visible = false;
               _map34.conLevel["petYeMC"].visible = false;
               _map34.conLevel["xiangzi"].visible = false;
               _map34.conLevel["xiangziDi"].visible = false;
               _map34.conLevel["guodongyaMc"].visible = false;
               _map34.conLevel["door_2"].mouseChildren = _map34.conLevel["door_2"].mouseEnabled = false;
               _map34.conLevel["guodongyaMc"].visible = false;
               _map34.conLevel["guodongyadezujiMc"].visible = true;
               _map34.conLevel["anbianHeziBtn"].visible = true;
               if(!BitUtils.getBit(_stateValue,9))
               {
                  DialogControl.showAllDilogs(168,17).then(function():void
                  {
                     KTool.socketSendCallBack(41900,function():void
                     {
                        updateMap34State();
                     },[99,10]);
                  });
               }
               else if(!BitUtils.getBit(_stateValue,10))
               {
                  if(_isFightWin || _isFightOver || _isCatch)
                  {
                     _isFightWin = false;
                     _isFightOver = false;
                     _map34.conLevel["guodongyadezujiMc"].visible = false;
                     DialogControl.showAllDilogs(168,18).then(function():void
                     {
                        KTool.socketSendCallBack(41900,function():void
                        {
                           updateMap34State();
                        },[99,11]);
                     });
                  }
                  else
                  {
                     _map34.topLevel["ami"].visible = true;
                     LevelManager.closeMouseEvent();
                     AnimateManager.playMcAnimate(_map34.topLevel["ami"],1,"mc1",function():void
                     {
                        _map34.topLevel["ami"].visible = false;
                        _map34.conLevel["guodongyaMc"].visible = true;
                        _map34.conLevel["guodongyadezujiMc"].visible = false;
                        LevelManager.openMouseEvent();
                     },false,true);
                  }
               }
               else
               {
                  _map34.conLevel["guodongyaMc"].visible = false;
                  _map34.conLevel["guodongyadezujiMc"].visible = false;
               }
            }
            else
            {
               _map34.conLevel["tipBtn"].visible = true;
               _map34.conLevel["petMC"].visible = true;
               _map34.conLevel["petYeMC"].visible = true;
               _map34.conLevel["xiangziDi"].visible = true;
               _map34.conLevel["xiangzi"].visible = false;
               _map34.conLevel["door_2"].mouseChildren = _map34.conLevel["door_2"].mouseEnabled = true;
               _map34.conLevel["guodongyadezujiMc"].visible = false;
               _map34.conLevel["guodongyaMc"].visible = false;
               _map34.conLevel["anbianHeziBtn"].visible = false;
               if(Boolean(SystemTimerManager.getIsInActivity("20241206","2024121310")) && !BitUtils.getBit(stoneState,0))
               {
                  _map34.conLevel["stone"].visible = true;
               }
               else
               {
                  _map34.conLevel["stone"].visible = false;
               }
            }
         });
      }
      
      public static function destroyMap34() : void
      {
         MapStoryManager.quitStory();
         _map34.conLevel.removeEventListener(MouseEvent.CLICK,onMap34ConClickHandle);
         _map34 = null;
      }
      
      public static function initMap36(param1:BaseMapProcess) : void
      {
         _map36 = param1;
         _map36.conLevel.addEventListener(MouseEvent.CLICK,onMap36ConClickHandle);
         updateMap36State();
      }
      
      private static function onMap36ConClickHandle(param1:MouseEvent) : void
      {
         var index:int = 0;
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         index = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "damagedDoorBtn":
               MapStoryManager.playerMoveToPos(new Point(291,111),function():void
               {
                  DialogControl.showAllDilogs(168,24).then(function():void
                  {
                  });
               });
               break;
            case "runeBtn":
               MapStoryManager.playerMoveToPos(new Point(603,345),function():void
               {
                  DialogControl.showAllDilogs(168,25).then(function():void
                  {
                  });
               });
               break;
            case "stoneBtn_" + index:
               DialogControl.showAllDilogs(172,8).then(function():void
               {
                  if(!BitUtils.getBit(stoneState,index + 4))
                  {
                     KTool.socketSendCallBack(41900,function():void
                     {
                        StatManager.sendStat2014("1206场景彩蛋","在地图34领取了精灵广场彩蛋奖励","2024运营活动");
                        updateMap36State();
                     },[103,index + 5]);
                  }
               });
         }
      }
      
      private static function updateMap36State() : void
      {
         updateData().then(function(param1:Array):void
         {
            var i:int;
            var valueArr:Array = param1;
            _mainTaskStep = KTool.subByte(valueArr[0],0,8);
            _stateValue = valueArr[1];
            stoneState = valueArr[3];
            if(_mainTaskStep > 0 && _mainTaskStep < 7)
            {
               MapStoryManager.startStory(1);
               _map36.conLevel["damagedDoorMc"].mouseChildren = _map36.conLevel["damagedDoorMc"].mouseEnabled = true;
               _map36.conLevel["runeMc"].mouseChildren = _map36.conLevel["runeMc"].mouseEnabled = true;
               if(!BitUtils.getBit(_stateValue,6))
               {
                  DialogControl.showAllDilogs(168,20).then(function():void
                  {
                     KTool.socketSendCallBack(41900,function():void
                     {
                        updateMap36State();
                     },[99,7]);
                  });
               }
               if(_mainTaskStep >= 2)
               {
                  _map36.conLevel["damagedDoorMc"].gotoAndStop(2);
                  _map36.conLevel["runeMc"].gotoAndStop(2);
               }
               else
               {
                  _map36.conLevel["damagedDoorMc"].gotoAndStop(1);
                  _map36.conLevel["runeMc"].gotoAndStop(1);
               }
            }
            else
            {
               _map36.conLevel["damagedDoorMc"].mouseChildren = _map36.conLevel["damagedDoorMc"].mouseEnabled = false;
               _map36.conLevel["runeMc"].mouseChildren = _map36.conLevel["runeMc"].mouseEnabled = false;
            }
            i = 0;
            while(i < 3)
            {
               if(Boolean(SystemTimerManager.getIsInActivity("20241213","2025021410")) && !BitUtils.getBit(stoneState,i + 4))
               {
                  _map36.conLevel["stoneBtn_" + i].visible = true;
               }
               else
               {
                  _map36.conLevel["stoneBtn_" + i].visible = false;
               }
               i++;
            }
         });
      }
      
      public static function onMap36PillarAllLight() : void
      {
         if(_mainTaskStep > 0 && _mainTaskStep < 7)
         {
            DialogControl.showAllDilogs(168,21).then(function():void
            {
               ModuleManager.showAppModule("MapStoryScreenView",{
                  "acId":168,
                  "numId":22,
                  "callback":function():void
                  {
                     DialogControl.showAllDilogs(168,23).then(function(param1:int):void
                     {
                        var va:int = param1;
                        if(_mainTaskStep == 1)
                        {
                           KTool.socketSendCallBack(41900,function():void
                           {
                              if(va == 1)
                              {
                                 MapManager.changeMap(31);
                              }
                              else
                              {
                                 updateMap36State();
                              }
                           },[98,1]);
                        }
                        else if(va == 1)
                        {
                           MapManager.changeMap(31);
                        }
                        else
                        {
                           updateMap36State();
                        }
                     });
                  }
               });
            });
         }
      }
      
      public static function destroyMap36() : void
      {
         MapStoryManager.quitStory();
         _map36.conLevel.removeEventListener(MouseEvent.CLICK,onMap36ConClickHandle);
         _map36 = null;
      }
      
      public static function initMap1710(param1:BaseMapProcess) : void
      {
         _map1710 = param1;
         _map1710.conLevel.addEventListener(MouseEvent.CLICK,onMap1710ConClickHandle);
         updateMap1710State();
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         if(FightManager.isWin)
         {
            _isFightWin = true;
            MapManager.refMap();
         }
         else
         {
            _isFightOver = true;
            MapManager.refMap();
         }
      }
      
      private static function onMap1710ConClickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "steelPlateBtn":
               if(_map1710.conLevel["steelPlateMc"].currentFrame == 1)
               {
                  AnimateManager.playMcAnimate(_map1710.conLevel["steelPlateMc"],2,"mc2",function():void
                  {
                     _map1710.conLevel["steelPlateMc"].gotoAndStop(3);
                     DisplayUtil.removeForParent(_map1710.typeLevel["mc"]);
                     MapManager.currentMap.makeMapArray();
                     updateMap1710State();
                  },false,true);
               }
               break;
            case "heratBtn":
               _map1710.conLevel["chuansongBtn"].mouseEnabled = false;
               if(_map1710.conLevel["heratMc"].currentFrame == 1)
               {
                  _map1710.conLevel["heratMc"].gotoAndStop(2);
               }
               else if(_map1710.conLevel["heratMc"].currentFrame == 2)
               {
                  AnimateManager.playMcAnimate(_map1710.conLevel["heratMc"],3,"mc3",function():void
                  {
                     _map1710.conLevel["heratMc"].gotoAndStop(4);
                  },false,true);
               }
               else if(_map1710.conLevel["heratMc"].currentFrame == 4)
               {
                  MapStoryManager.playerMoveToPos(new Point(509,173),function():void
                  {
                     FightManager.fightWithBoss("赫卡特",0,false,true);
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
                  });
               }
               break;
            case "chuansongBtn":
               if(_map1710.conLevel["steelPlateMc"].currentFrame != 1)
               {
                  if(_map1710.conLevel["heratMc"].currentFrame == 1 || !_map1710.conLevel["heratMc"].visible)
                  {
                     if(_mainTaskStep > 0 && _mainTaskStep < 7)
                     {
                        if(_mainTaskStep == 4)
                        {
                           KTool.socketSendCallBack(41900,function():void
                           {
                              MapStoryManager.playerMoveToPos(new Point(502,140),function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_ASignalThatNeverDisappears2"),function():void
                                 {
                                    MapManager.changeMap(1709);
                                 });
                              });
                           },[98,1]);
                        }
                        else
                        {
                           MapStoryManager.playerMoveToPos(new Point(502,140),function():void
                           {
                              MapManager.changeMap(1709);
                           });
                        }
                     }
                     else
                     {
                        MapStoryManager.playerMoveToPos(new Point(502,140),function():void
                        {
                           MapManager.changeMap(1709);
                        });
                     }
                  }
                  else
                  {
                     Alarm2.show("请先清除障碍！");
                  }
               }
               break;
            case "goto31Btn":
               MapStoryManager.playerMoveToPos(new Point(290,490),function():void
               {
                  MapManager.changeMap(31);
               });
               break;
            case "getBtn":
               AnimateManager.playMcAnimate(_map1710.animatorLevel as MovieClip,1,"mc1",function():void
               {
                  DialogControl.showAllDilogs(172,3).then(function():void
                  {
                     _map1710.animatorLevel["mc1"].visible = false;
                     KTool.socketSendCallBack(45850,function():void
                     {
                        updateMap1710State();
                     },[29,15]);
                  });
               },false,true);
         }
      }
      
      private static function updateMap1710State() : void
      {
         updateData().then(function(param1:Array):void
         {
            var valueArr:Array = param1;
            _mainTaskStep = KTool.subByte(valueArr[0],0,8);
            _stateValue = valueArr[1];
            if(BitUtils.getBit(valueArr[4],13) == 0 && Boolean(SystemTimerManager.getIsInActivity("20241206","2025020710")))
            {
               _map1710.conLevel["getBtn"].visible = true;
            }
            else
            {
               _map1710.conLevel["getBtn"].visible = false;
            }
            if(_mainTaskStep > 0 && _mainTaskStep < 7)
            {
               _map1710.conLevel["goto31Btn"].mouseEnabled = false;
               MapStoryManager.startStory(1);
               if(_mainTaskStep == 3)
               {
                  DialogControl.showAllDilogs(168,26).then(function():void
                  {
                     KTool.socketSendCallBack(41900,function():void
                     {
                        updateMap1710State();
                     },[98,1]);
                  });
               }
            }
            else
            {
               _map1710.conLevel["goto31Btn"].mouseEnabled = true;
            }
            if(_isFightWin)
            {
               MainManager.actorModel.x = 509;
               MainManager.actorModel.y = 172;
               _isFightWin = false;
               _map1710.conLevel["heratMc"].visible = false;
               _map1710.conLevel["steelPlateMc"].gotoAndStop(3);
               DisplayUtil.removeForParent(_map1710.typeLevel["mc"]);
               MapManager.currentMap.makeMapArray();
               _map1710.conLevel["heratMc"].mouseChildren = _map1710.conLevel["heratMc"].mouseEnabled = false;
               _map1710.conLevel["chuansongBtn"].mouseEnabled = true;
               if(_mainTaskStep > 0 && _mainTaskStep < 7)
               {
                  if(BitUtils.getBit(_stateValue,7) == 0)
                  {
                     DialogControl.showAllDilogs(168,27).then(function():void
                     {
                        KTool.socketSendCallBack(41900,function():void
                        {
                        },[99,8]);
                     });
                  }
               }
            }
            else
            {
               if(_isFightOver)
               {
                  MainManager.actorModel.x = 509;
                  MainManager.actorModel.y = 172;
                  _isFightOver = false;
                  _map1710.conLevel["heratMc"].gotoAndStop(4);
                  _map1710.conLevel["steelPlateMc"].gotoAndStop(3);
                  DisplayUtil.removeForParent(_map1710.typeLevel["mc"]);
               }
               _map1710.conLevel["heratMc"].visible = true;
               if(_map1710.conLevel["steelPlateMc"].currentFrame == 3)
               {
                  _map1710.conLevel["heratMc"].mouseChildren = _map1710.conLevel["heratMc"].mouseEnabled = true;
                  _map1710.conLevel["chuansongBtn"].mouseEnabled = true;
               }
               else
               {
                  _map1710.conLevel["heratMc"].mouseChildren = _map1710.conLevel["heratMc"].mouseEnabled = false;
                  _map1710.conLevel["chuansongBtn"].mouseEnabled = false;
               }
            }
         });
      }
      
      public static function destroyMap1710() : void
      {
         MapStoryManager.quitStory();
         _map1710.conLevel.removeEventListener(MouseEvent.CLICK,onMap1710ConClickHandle);
         _map1710 = null;
      }
      
      public static function initMap1709(param1:BaseMapProcess) : void
      {
         _map1709 = param1;
         _map1709.conLevel.addEventListener(MouseEvent.CLICK,onMap1709ConClickHandle);
         updateMap1709State();
      }
      
      private static function onNpcClick() : void
      {
         if(!BitUtils.getBit(_stateValue,13))
         {
            DialogControl.showAllDilogs(168,31).then(function(param1:int):void
            {
               var va:int = param1;
               KTool.socketSendCallBack(41900,function():void
               {
                  if(va == 1)
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_ASignalThatNeverDisappears"),function():void
                     {
                        DialogControl.showAllDilogs(168,37).then(function():void
                        {
                           KTool.socketSendCallBack(41900,function():void
                           {
                              MapStoryManager.quitStory();
                              TasksController.taskCompleteUI();
                              updateMap1709State();
                           },[98,1]);
                        });
                     });
                  }
                  else
                  {
                     updateMap1709State();
                  }
               },[99,14]);
            });
         }
         else
         {
            DialogControl.showSingleDilog(168,31,15).then(function(param1:int):void
            {
               var va:int = param1;
               if(va == 1)
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_ASignalThatNeverDisappears"),function():void
                  {
                     DialogControl.showAllDilogs(168,37).then(function():void
                     {
                        KTool.socketSendCallBack(41900,function():void
                        {
                           MapStoryManager.quitStory();
                           TasksController.taskCompleteUI();
                           updateMap1709State();
                        },[98,1]);
                     });
                  });
               }
            });
         }
      }
      
      private static function onMap1709ConClickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var frame:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         var stageX:Number = e.stageX;
         var stageY:Number = e.stageY;
         switch(btnName)
         {
            case "aliceBtn":
               if(_mainTaskStep == 6)
               {
                  onNpcClick();
               }
               break;
            case "abandonedXitaBtn":
               MapStoryManager.playerMoveToMc(_map1709.conLevel["abandonedXitaMc"],function():void
               {
                  DialogControl.showAllDilogs(168,30).then(function():void
                  {
                  });
               });
               break;
            case "projectorBtn":
               MapStoryManager.playerMoveToPos(new Point(623,276),function():void
               {
                  onNpcClick();
               });
               break;
            case "elfTemplePortalBtn":
               MapStoryManager.playerMoveToPos(new Point(738,307),function():void
               {
                  DialogControl.showAllDilogs(168,32).then(function():void
                  {
                  });
               });
               break;
            case "movingYitaBtn":
               if(_mainTaskStep > 0 && _mainTaskStep < 7)
               {
                  _map1709.conLevel["movingYitaMc"].mc.gotoAndStop(2);
                  frame = int(_map1709.conLevel["movingYitaMc"].currentFrame);
                  _map1709.conLevel["movingYitaMc"].gotoAndStop(frame);
                  MapStoryManager.playerMoveToPos(new Point(stageX,stageY),function():void
                  {
                     DialogControl.showAllDilogs(168,33).then(function():void
                     {
                        _map1709.conLevel["movingYitaMc"].mc.gotoAndStop(1);
                        _map1709.conLevel["movingYitaMc"].gotoAndPlay(frame);
                     });
                  });
               }
               else
               {
                  _map1709.conLevel["movingYitaMc"].mc.gotoAndStop(2);
                  frame = int(_map1709.conLevel["movingYitaMc"].currentFrame);
                  _map1709.conLevel["movingYitaMc"].gotoAndStop(frame);
                  MapStoryManager.playerMoveToPos(new Point(stageX,stageY),function():void
                  {
                     DialogControl.showAllDilogs(168,36).then(function(param1:int):void
                     {
                        _map1709.conLevel["movingYitaMc"].mc.gotoAndStop(1);
                        _map1709.conLevel["movingYitaMc"].gotoAndPlay(frame);
                        if(param1 == 1)
                        {
                           ModuleManager.showAppModule("SceneActivityPanel");
                        }
                     });
                  });
               }
               break;
            case "gotoMapBtn":
               MapStoryManager.playerMoveToMc(_map1709.conLevel["gotoMapBtn"],function():void
               {
                  MapManager.changeMap(1710);
               });
               break;
            case "siloBtn":
               MapStoryManager.playerMoveToPos(new Point(378,394),function():void
               {
                  DialogControl.showAllDilogs(168,34).then(function():void
                  {
                  });
               });
               break;
            case "stone":
               DialogControl.showAllDilogs(172,9).then(function():void
               {
                  var randomIndex:int = 0;
                  if(_stoneBitArr.length < 3)
                  {
                     randomIndex = getRandomNumberNotInArray(_stoneBitArr);
                     KTool.socketSendCallBack(41900,function():void
                     {
                        StatManager.sendStat2014("1220场景彩蛋","在地图34领取了精灵广场彩蛋奖励","2024运营活动");
                        updateMap1709State();
                     },[103,randomIndex + 9]);
                  }
               });
         }
      }
      
      private static function getRandomNumberNotInArray(param1:Array) : int
      {
         var _loc2_:int = 0;
         var _loc3_:Boolean = false;
         var _loc4_:int = 0;
         do
         {
            _loc2_ = Math.floor(Math.random() * 3);
            _loc3_ = false;
            _loc4_ = 0;
            while(_loc4_ < param1.length)
            {
               if(param1[_loc4_] == _loc2_)
               {
                  _loc3_ = true;
                  break;
               }
               _loc4_++;
            }
         }
         while(_loc3_);
         
         return _loc2_;
      }
      
      private static function updateMap1709State() : void
      {
         updateData().then(function(param1:Array):void
         {
            var valueArr:Array = param1;
            _mainTaskStep = KTool.subByte(valueArr[0],0,8);
            _stateValue = valueArr[1];
            stoneState = valueArr[3];
            _stoneBitArr = [];
            var i:int = 0;
            while(i < 3)
            {
               if(BitUtils.getBit(stoneState,i + 8) > 0)
               {
                  _stoneBitArr.push(i);
               }
               i++;
            }
            if(_mainTaskStep > 0 && _mainTaskStep < 7)
            {
               MapStoryManager.startStory(1);
               _map1709.conLevel["abandonedXitaMc"].mouseChildren = _map1709.conLevel["abandonedXitaMc"].mouseEnabled = true;
               _map1709.conLevel["projectorMc"].mouseChildren = _map1709.conLevel["projectorMc"].mouseEnabled = true;
               _map1709.conLevel["elfTemplePortalMc"].mouseChildren = _map1709.conLevel["elfTemplePortalMc"].mouseEnabled = true;
               _map1709.conLevel["gotoMapBtn"].mouseEnabled = false;
               _map1709.conLevel["aliceBtn"].visible = true;
               _map1709.conLevel["siloBtn"].mouseEnabled = true;
               if(_mainTaskStep == 5)
               {
                  DialogControl.showAllDilogs(168,29).then(function():void
                  {
                     KTool.socketSendCallBack(41900,function():void
                     {
                        updateMap1709State();
                     },[98,1]);
                  });
               }
               else if(_mainTaskStep == 6)
               {
                  _map1709.conLevel["projectorMc"].mouseChildren = _map1709.conLevel["projectorMc"].mouseEnabled = true;
               }
               else
               {
                  _map1709.conLevel["projectorMc"].mouseChildren = _map1709.conLevel["projectorMc"].mouseEnabled = false;
               }
            }
            else
            {
               _map1709.conLevel["abandonedXitaMc"].mouseChildren = _map1709.conLevel["abandonedXitaMc"].mouseEnabled = false;
               _map1709.conLevel["projectorMc"].mouseChildren = _map1709.conLevel["projectorMc"].mouseEnabled = false;
               _map1709.conLevel["elfTemplePortalMc"].mouseChildren = _map1709.conLevel["elfTemplePortalMc"].mouseEnabled = false;
               _map1709.conLevel["gotoMapBtn"].mouseEnabled = true;
               _map1709.conLevel["aliceBtn"].visible = false;
               _map1709.conLevel["siloBtn"].mouseEnabled = false;
            }
            if(Boolean(SystemTimerManager.getIsInActivity("20241220","2024127010")) && _stoneBitArr.length < 3)
            {
               _map1709.conLevel["stone"].visible = true;
               _map1709.btnLevel.mouseEnabled = _map1709.btnLevel.mouseChildren = false;
            }
            else
            {
               _map1709.conLevel["stone"].visible = false;
            }
         });
      }
      
      public static function destroyMap1709() : void
      {
         MapStoryManager.quitStory();
         _map1709.conLevel.removeEventListener(MouseEvent.CLICK,onMap1709ConClickHandle);
         _map1709 = null;
         _stoneBitArr = null;
      }
   }
}
