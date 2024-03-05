package com.robot.app.task.taskscollection
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class Task535
   {
      
      public static const TASK_ID:uint = 535;
      
      private static var _map:BaseMapProcess;
      
      private static const URL_1:String = ClientConfig.getFullMovie("task_535_1");
      
      private static const URL_2:String = ClientConfig.getFullMovie("task_535_2");
      
      private static const URL_3:String = ClientConfig.getFullMovie("task_535_3");
      
      private static const URL_4:String = ClientConfig.getFullMovie("task_535_4");
      
      private static var _shipInMC:MovieClip;
      
      private static var _boatInMC:MovieClip;
      
      private static var _boatOutMC:MovieClip;
      
      private static var _errorMC:MovieClip;
      
      private static var _avatarMC:MovieClip;
      
      private static var _shipMC:MovieClip;
      
      private static var _nailMC:MovieClip;
      
      private static var _curtainMC:MovieClip;
      
      private static var _headHitMC:MovieClip;
      
      private static var _clickCount:uint;
      
      private static var _shouldShowArriveMC:Boolean = false;
      
      private static var _initPosArr:Array;
      
      private static var _rect:Rectangle;
      
      private static var _delay:uint;
      
      private static var _hasDestory_2:Boolean = false;
      
      private static var _treasureMC:MovieClip;
      
      private static var _woodMC:MovieClip;
      
      private static var _treasureBtn:MovieClip;
      
      private static var _planeMC:MovieClip;
      
      private static var _planeWoodMC:MovieClip;
      
      private static var _brigeMC:MovieClip;
      
      private static var _depthMC:MovieClip;
      
      private static var _testMC:MovieClip;
      
      private static const SPEED:uint = 20;
      
      private static const LEFT_LIMIT:uint = 234;
      
      private static const RIGHT_LIMIT:uint = 900;
      
      private static var _isTreasureReady:Boolean = false;
      
      private static var _hasDestroyResource_3:Boolean;
      
      private static var _loader:MCLoader;
      
      private static var _func:Function;
       
      
      public function Task535()
      {
         super();
      }
      
      public static function initTask_1() : void
      {
         playFullScreen(URL_1,function():void
         {
            NpcDialog.show(NPC.IRIS,["看到了吗！这颗就是传说中的死亡星球—戴斯星！如果没有错，第二把生命钥匙就在这里！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.IRIS,["航行史书记载，那颗星球上的气体具有腐蚀作用！赛尔只有脱卸了身上的装备才可以在上面勉强行走…… "],["没时间了！我这就出发！"],[function():void
               {
                  playFullScreen(URL_2,function():void
                  {
                     _shouldShowArriveMC = true;
                     MapManager.changeMap(435);
                  });
               }]);
            });
         });
      }
      
      public static function initTask_2(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _clickCount = 0;
         _hasDestory_2 = false;
         _delay = 0;
         ToolBarController.showOrHideAllUser(false);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_START,onWalkStart);
         initResource_2();
         showArriveMC();
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  initPro_1();
               }
               else if(!param1[1])
               {
                  initPro_2();
               }
               else
               {
                  Object(_map).initResource();
                  destroyResource_2();
               }
            });
         }
         else
         {
            Object(_map).initResource();
            destroyResource_2();
         }
      }
      
      public static function initResource_2() : void
      {
         _shipInMC = _map.animatorLevel["shipInMC"];
         _boatInMC = _map.animatorLevel["boatInMC"];
         _boatOutMC = _map.animatorLevel["boatOutMC"];
         _errorMC = _map.animatorLevel["errorMC"];
         _avatarMC = _map.conLevel["avatarMC"];
         _shipMC = _map.conLevel["shipMC"];
         _nailMC = _map.conLevel["nailMC"];
         _curtainMC = _map.conLevel["curtainMC"];
         _headHitMC = _map.conLevel["headHitMC"];
         _shipInMC.gotoAndStop(1);
         _boatInMC.gotoAndStop(1);
         _boatOutMC.gotoAndStop(1);
         _avatarMC.gotoAndStop(1);
         _avatarMC.buttonMode = true;
         _errorMC.visible = false;
      }
      
      public static function removeResource_2(param1:BaseMapProcess) : void
      {
         DisplayUtil.removeForParent(param1.animatorLevel["shipInMC"]);
         param1.animatorLevel["shipInMC"] = null;
         DisplayUtil.removeForParent(param1.animatorLevel["boatInMC"]);
         param1.animatorLevel["boatInMC"] = null;
         DisplayUtil.removeForParent(param1.animatorLevel["boatOutMC"]);
         param1.animatorLevel["boatOutMC"] = null;
         DisplayUtil.removeForParent(param1.animatorLevel["errorMC"]);
         param1.animatorLevel["errorMC"] = null;
         DisplayUtil.removeForParent(param1.conLevel["shipMC"]);
         param1.conLevel["shipMC"] = null;
         DisplayUtil.removeForParent(param1.conLevel["nailMC"]);
         param1.conLevel["nailMC"] = null;
         DisplayUtil.removeForParent(param1.conLevel["curtainMC"]);
         param1.conLevel["curtainMC"] = null;
         DisplayUtil.removeForParent(param1.conLevel["headHitMC"]);
         param1.conLevel["headHitMC"] = null;
      }
      
      private static function onAvatarClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(MainManager.actorInfo.clothes.length > 0)
         {
            NpcDialog.show(NPC.SEER,["糟糕！这里的气体果然极具腐蚀！看来必须0xff0000脱去身上的装备0xffffff才能前行了！"],["左边的石块怎么看起来这么奇怪？"]);
         }
         else
         {
            playMC(_boatInMC,0,function():void
            {
               _avatarMC.gotoAndStop(2);
               _boatInMC.gotoAndStop(_boatInMC.totalFrames);
               NpcDialog.show(NPC.SEER,["这个到底是什么意思？难道我们需要伪装成它的样子？又或者是把它伪装成我们的样子？"],["看看周围吧，可能会有伪装的道具哦！"],[function():void
               {
                  TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                  {
                     _avatarMC.mouseEnabled = false;
                     _avatarMC.mouseChildren = false;
                     initPro_2();
                  });
               }]);
            });
         }
      }
      
      private static function showArriveMC() : void
      {
         if(_shouldShowArriveMC)
         {
            _shipMC.visible = false;
            MainManager.actorModel.visible = false;
            stopMoveBody();
            _avatarMC.mouseEnabled = false;
            _avatarMC.mouseChildren = false;
            playMC(_shipInMC,0,function():void
            {
               _shouldShowArriveMC = false;
               _avatarMC.mouseEnabled = true;
               _avatarMC.mouseChildren = true;
               DisplayUtil.removeForParent(_shipInMC);
               _shipMC.visible = true;
               MainManager.actorModel.visible = true;
               startMoveBody();
            });
         }
      }
      
      private static function onWalkStart(param1:RobotEvent) : void
      {
         ++_clickCount;
         if(MainManager.actorInfo.clothes.length > 0)
         {
            MainManager.actorModel.stop();
            MainManager.actorModel.skeleton.stop();
            if(_clickCount % 2 == 0)
            {
               NpcDialog.show(NPC.SEER,["糟糕！这里的气体果然极具腐蚀！看来必须0xff0000脱去身上的装备0xffffff才能前行了！"],["左边的石块怎么看起来这么奇怪？"]);
            }
         }
      }
      
      private static function initPro_1() : void
      {
         _avatarMC.addEventListener(MouseEvent.CLICK,onAvatarClick);
      }
      
      private static function initPro_2() : void
      {
         _boatInMC.gotoAndStop(_boatInMC.totalFrames);
         _nailMC.buttonMode = true;
         _curtainMC.buttonMode = true;
         _avatarMC.mouseEnabled = false;
         _avatarMC.mouseChildren = false;
         _nailMC.addEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
         _nailMC.addEventListener(MouseEvent.MOUSE_UP,onMouseUp);
         _curtainMC.addEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
         _curtainMC.addEventListener(MouseEvent.MOUSE_UP,onMouseUp);
      }
      
      private static function onMouseDown(param1:MouseEvent) : void
      {
         if(_delay)
         {
            clearTimeout(_delay);
            _errorMC.visible = false;
            _delay = 0;
         }
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(!_initPosArr)
         {
            _initPosArr = new Array();
            _initPosArr.push([_nailMC.x,_nailMC.y]);
            _initPosArr.push([_curtainMC.x,_curtainMC.y]);
            _rect = new Rectangle(57,158,600,360);
         }
         _loc2_.addEventListener(Event.ENTER_FRAME,onEnterFrame);
         _loc2_.startDrag(false,_rect);
         _map.topLevel.addChild(_loc2_);
      }
      
      private static function onMouseUp(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         _loc2_.stopDrag();
         returnBack(_loc2_);
      }
      
      private static function returnBack(param1:MovieClip) : void
      {
         _map.conLevel.addChild(param1);
         if(param1 == _nailMC)
         {
            param1.x = _initPosArr[0][0];
            param1.y = _initPosArr[0][1];
         }
         else
         {
            param1.x = _initPosArr[1][0];
            param1.y = _initPosArr[1][1];
         }
      }
      
      private static function onEnterFrame(param1:Event) : void
      {
         var target:MovieClip = null;
         var e:Event = param1;
         target = e.currentTarget as MovieClip;
         var kind:int = -1;
         if(target["hitMC"].hitTestObject(MainManager.actorModel.skeleton.getBodyMC()["head"]))
         {
            if(target == _nailMC)
            {
               kind = 0;
            }
            if(target == _curtainMC)
            {
               kind = 2;
            }
         }
         if(target["hitMC"].hitTestObject(_headHitMC))
         {
            if(target == _nailMC)
            {
               kind = 1;
            }
            if(target == _curtainMC)
            {
               kind = 3;
            }
         }
         if(kind != -1)
         {
            target.stopDrag();
            target.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
            if(kind == 0 || kind == 3)
            {
               _errorMC.visible = true;
               _delay = setTimeout(function():void
               {
                  clearTimeout(_delay);
                  _errorMC.visible = false;
                  returnBack(target);
                  _delay = 0;
               },1000);
            }
            else if(kind == 1 || kind == 2)
            {
               DisplayUtil.removeForParent(_nailMC);
               DisplayUtil.removeForParent(_curtainMC);
               DisplayUtil.removeForParent(_boatInMC);
               MainManager.actorModel.visible = false;
               playMC(_boatOutMC,kind + 1,function():void
               {
                  DisplayUtil.removeForParent(_boatOutMC);
                  TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        MapManager.changeMap(436);
                     }
                  });
               });
            }
         }
      }
      
      public static function destroyResource_2() : void
      {
         if(Boolean(_map) && !_hasDestory_2)
         {
            ToolBarController.showOrHideAllUser(true);
            if(_avatarMC)
            {
               _avatarMC.removeEventListener(MouseEvent.CLICK,onAvatarClick);
            }
            if(_nailMC)
            {
               _nailMC.removeEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
               _nailMC.removeEventListener(MouseEvent.MOUSE_UP,onMouseUp);
               _nailMC.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
            }
            if(_curtainMC)
            {
               _curtainMC.removeEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
               _curtainMC.removeEventListener(MouseEvent.MOUSE_UP,onMouseUp);
               _curtainMC.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
            }
            MainManager.actorModel.visible = true;
            startMoveBody();
            DisplayUtil.removeForParent(_shipInMC);
            DisplayUtil.removeForParent(_boatInMC);
            DisplayUtil.removeForParent(_errorMC);
            DisplayUtil.removeForParent(_nailMC);
            DisplayUtil.removeForParent(_curtainMC);
            _shipInMC = null;
            _boatInMC = null;
            _boatOutMC = null;
            _errorMC = null;
            _avatarMC = null;
            _shipMC = null;
            _nailMC = null;
            _curtainMC = null;
            _headHitMC = null;
            _hasDestory_2 = true;
         }
      }
      
      public static function destroyTask_2() : void
      {
         _map = null;
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_START,onWalkStart);
         destroyResource_2();
      }
      
      public static function initTask_3(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ToolBarController.showOrHideAllUser(false);
         initResource_3();
         _hasDestroyResource_3 = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               var arr:Array = param1;
               if(Boolean(arr[0]) && Boolean(arr[1]) && !arr[2])
               {
                  _planeMC.gotoAndStop(2);
                  _planeMC.buttonMode = true;
                  _planeMC.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                  {
                     var e:MouseEvent = param1;
                     MainManager.actorModel.visible = false;
                     stopMoveBody();
                     _planeMC.buttonMode = false;
                     _planeMC.removeEventListener(MouseEvent.CLICK,arguments.callee);
                     playMC(_planeMC,3,function():void
                     {
                        _brigeMC.buttonMode = true;
                        _brigeMC.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                        {
                           var e:MouseEvent = param1;
                           _brigeMC.removeEventListener(MouseEvent.CLICK,arguments.callee);
                           _planeMC.gotoAndStop(4);
                           _planeMC.addEventListener(Event.ENTER_FRAME,function():void
                           {
                              var childMC1:MovieClip = null;
                              childMC1 = _planeMC.getChildAt(0) as MovieClip;
                              if(childMC1)
                              {
                                 _planeMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                                 childMC1.addEventListener(Event.ENTER_FRAME,function():void
                                 {
                                    childMC1.x += 10;
                                    if(childMC1.x >= 200)
                                    {
                                       childMC1.x = 200;
                                       childMC1.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                                       playMC(_planeMC,5,function():void
                                       {
                                          _planeMC.gotoAndStop(5);
                                          DisplayUtil.removeForParent(_planeWoodMC);
                                          _woodMC.buttonMode = true;
                                          _woodMC.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                                          {
                                             var e:MouseEvent = param1;
                                             _woodMC.removeEventListener(MouseEvent.CLICK,arguments.callee);
                                             DisplayUtil.removeForParent(_woodMC);
                                             _planeMC.gotoAndStop(6);
                                             _planeMC.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
                                             {
                                                var mc:MovieClip = null;
                                                var e:Event = param1;
                                                mc = _planeMC.getChildAt(0) as MovieClip;
                                                if(mc)
                                                {
                                                   _planeMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                                                   mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
                                                   {
                                                      var e:Event = param1;
                                                      if(mc.currentFrame == mc.totalFrames)
                                                      {
                                                         mc.stop();
                                                         mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                                                         _map.conLevel.addChild(_planeWoodMC);
                                                         _planeWoodMC.buttonMode = true;
                                                         _planeWoodMC.addEventListener(MouseEvent.CLICK,function():void
                                                         {
                                                            _planeWoodMC.removeEventListener(MouseEvent.CLICK,arguments.callee);
                                                            playMC(_planeMC,7,function():void
                                                            {
                                                               playMC(_planeMC,8,function():void
                                                               {
                                                                  _treasureBtn.addEventListener(MouseEvent.CLICK,onTreasureBtnClick);
                                                               });
                                                            });
                                                         });
                                                      }
                                                   });
                                                }
                                             });
                                          });
                                       });
                                    }
                                 });
                              }
                           });
                        });
                     });
                  });
               }
               else
               {
                  dealWithNoTask();
               }
            });
         }
         else
         {
            dealWithNoTask();
         }
      }
      
      private static function initResource_3() : void
      {
         _treasureMC = _map.conLevel["treasureMC"];
         _woodMC = _map.conLevel["woodMC"];
         _treasureBtn = _map.conLevel["treasureBtn"];
         _planeMC = _map.conLevel["planeMC"];
         _planeWoodMC = _map.conLevel["planeWoodMC"];
         _brigeMC = _map.conLevel["brigeMC"];
         _depthMC = _map.depthLevel["mc"];
         _testMC = _map.conLevel["testMC"];
         _planeMC.gotoAndStop(1);
      }
      
      private static function dealWithNoTask() : void
      {
         var mc:MovieClip = null;
         DisplayUtil.removeForParent(_depthMC);
         MapManager.currentMap.makeMapArray();
         DisplayUtil.removeForParent(_woodMC);
         DisplayUtil.removeForParent(_treasureMC);
         DisplayUtil.removeForParent(_brigeMC);
         DisplayUtil.removeForParent(_planeWoodMC);
         _planeMC.gotoAndStop(9);
         _planeMC.addEventListener(Event.ENTER_FRAME,function():void
         {
            mc = _planeMC.getChildAt(0) as MovieClip;
            if(mc)
            {
               mc.gotoAndStop(mc.totalFrames);
            }
         });
         destroyResource_3();
      }
      
      private static function onTreasureBtnClick(param1:MouseEvent) : void
      {
         var speed:int = 0;
         var e:MouseEvent = param1;
         var target:SimpleButton = e.target as SimpleButton;
         if(target)
         {
            if(target.name == "left")
            {
               speed = SPEED * -1;
            }
            else if(target.name == "right")
            {
               speed = int(SPEED);
            }
            _treasureMC.x += speed;
            if(_treasureMC.x <= LEFT_LIMIT)
            {
               _treasureMC.x = LEFT_LIMIT;
               playMC(_planeMC,9,function():void
               {
                  MainManager.actorModel.x = 448;
                  MainManager.actorModel.y = 208;
                  MainManager.actorModel.visible = true;
                  startMoveBody();
                  DisplayUtil.removeForParent(_depthMC);
                  MapManager.currentMap.makeMapArray();
                  DisplayUtil.removeForParent(_brigeMC);
                  DisplayUtil.removeForParent(_planeWoodMC);
                  _treasureBtn.mouseEnabled = false;
                  _treasureBtn.mouseChildren = false;
                  _treasureMC.buttonMode = true;
                  _treasureMC.addEventListener(MouseEvent.CLICK,onTrasureMCClick);
               });
            }
            if(_treasureMC.x >= RIGHT_LIMIT)
            {
               _treasureMC.x = RIGHT_LIMIT;
            }
         }
      }
      
      private static function onTrasureMCClick(param1:MouseEvent) : void
      {
         MainManager.actorModel.walkAction(new Point(_testMC.x,_testMC.y),false);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrame);
      }
      
      private static function onWalkEnterFrame(param1:RobotEvent) : void
      {
         var e:RobotEvent = param1;
         if(Point.distance(new Point(_testMC.x,_testMC.y),new Point(MainManager.actorModel.x,MainManager.actorModel.y)) < 30)
         {
            MainManager.actorModel.stop();
            MainManager.actorModel.skeleton.stop();
            playFullScreen(URL_3,function():void
            {
               NpcDialog.show(NPC.SEER,["这……这个……钥匙竟然会识别主人？"],["我的眼前怎么一片模糊……"],[function():void
               {
                  playFullScreen(URL_4,function():void
                  {
                     NpcDialog.show(NPC.SEER,["……又是赫尔卡星预言……石化之城！这到底是哪里呢？太神奇了……快带回去给爱丽丝看看！"],["起航返回赛尔号"],[function():void
                     {
                        TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              MapManager.changeMap(9);
                           }
                        });
                     }]);
                  });
               }]);
            });
         }
      }
      
      private static function stopMoveBody() : void
      {
         MainManager.actorModel.addEventListener(RobotEvent.WALK_START,onWalkStart1);
      }
      
      private static function onWalkStart1(param1:RobotEvent) : void
      {
         MainManager.actorModel.stop();
         MainManager.actorModel.skeleton.stop();
      }
      
      private static function startMoveBody() : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_START,onWalkStart1);
      }
      
      private static function destroyResource_3() : void
      {
         if(!_hasDestroyResource_3)
         {
            ToolBarController.showOrHideAllUser(true);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_START,onWalkStart);
            MainManager.actorModel.visible = true;
            _treasureMC.removeEventListener(MouseEvent.CLICK,onTrasureMCClick);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrame);
            startMoveBody();
            _treasureMC = null;
            _woodMC = null;
            _treasureBtn = null;
            _planeWoodMC = null;
            _brigeMC = null;
            _depthMC = null;
            _hasDestroyResource_3 = true;
         }
      }
      
      public static function destroyTask_3() : void
      {
         _map = null;
         destroyResource_3();
      }
      
      private static function playFullScreen(param1:String, param2:Function = null) : void
      {
         _func = param2;
         if(_loader)
         {
            _loader.clear();
            _loader = null;
         }
         _loader = new MCLoader("",LevelManager.appLevel,1,"加载全屏动画");
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSuccess);
         _loader.doLoad(param1);
      }
      
      private static function onLoadSuccess(param1:MCLoadEvent) : void
      {
         var mc:MovieClip = null;
         var e:MCLoadEvent = param1;
         mc = e.getContent() as MovieClip;
         if(mc.totalFrames == 1)
         {
            mc = mc.getChildAt(0) as MovieClip;
         }
         LevelManager.closeMouseEvent();
         LevelManager.appLevel.addChild(mc);
         mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(mc.currentFrame == mc.totalFrames)
            {
               mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               DisplayUtil.removeForParent(mc);
               LevelManager.openMouseEvent();
               if(_func != null)
               {
                  _func();
               }
            }
         });
      }
      
      public static function playMC(param1:MovieClip, param2:uint = 0, param3:Function = null) : void
      {
         var childMC:MovieClip = null;
         var mc:MovieClip = param1;
         var frame:uint = param2;
         var func:Function = param3;
         if(frame > 0)
         {
            mc.gotoAndStop(frame);
            mc.addEventListener(Event.ENTER_FRAME,function():void
            {
               if(mc.currentFrame == frame)
               {
                  childMC = mc.getChildAt(0) as MovieClip;
                  if(childMC)
                  {
                     mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     mc = childMC;
                     mc.addEventListener(Event.ENTER_FRAME,function():void
                     {
                        if(mc.currentFrame == mc.totalFrames)
                        {
                           LevelManager.openMouseEvent();
                           mc.stop();
                           mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                           if(func != null)
                           {
                              func();
                           }
                        }
                     });
                     LevelManager.closeMouseEvent();
                     mc.gotoAndPlay(1);
                  }
               }
            });
         }
         else
         {
            mc.addEventListener(Event.ENTER_FRAME,function():void
            {
               if(mc.currentFrame == mc.totalFrames)
               {
                  LevelManager.openMouseEvent();
                  mc.stop();
                  mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  if(func != null)
                  {
                     func();
                  }
               }
            });
            LevelManager.closeMouseEvent();
            mc.gotoAndPlay(1);
         }
      }
   }
}
