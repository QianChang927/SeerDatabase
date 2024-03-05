package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_565;
   import com.robot.app.task.control.TaskController_605;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.aticon.PeculiarAction;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.NonoEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.skeleton.EmptySkeletonStrategy;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.ui.Mouse;
   import flash.utils.Timer;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task565
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _truck:MovieClip;
      
      private static var _isTruck:Boolean;
      
      private static var _pulse:Timer;
      
      private static var _isClock:Boolean = false;
      
      private static var _timeRemaining:int = 120;
      
      private static var _currentTnt:int = -1;
      
      private static var _tankTimerArray:Array = [0,0,0,0,0,0];
      
      private static var _tankArray:Array = [false,false,false,false,false,false];
       
      
      public function Task565()
      {
         super();
      }
      
      public static function initTask() : void
      {
         NpcDialog.show(NPC.IRIS,["你知道吗……我们收到了来自露希欧星发出来强烈的求救信号！从航行蓝图来看，星球……星球已经在被黑色粒子吞噬……"],null,null,false,function():void
         {
            NpcDialog.show(NPC.IRIS,["这可能意味着星球即将要爆炸……"],["怎么了？爱丽丝你别急！慢慢说！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_565_1"),function():void
               {
                  NpcDialog.show(NPC.IRIS,["是的……就像纽斯所说的，如果我们再不行动！星球就真的要四分五裂了……"],["那还等什么！行动！！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_565_2"),function():void
                     {
                        MapManager.changeMap(54);
                     });
                  }]);
               });
            }]);
         });
      }
      
      public static function initTask_0(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TaskController_565.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_565.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startPro_0();
               }
               else
               {
                  DisplayUtil.removeForParent(_map.conLevel["arrow"]);
                  _map.conLevel["arrow"] = null;
                  initTruck();
               }
            });
         }
         else
         {
            if(TasksManager.getTaskStatus(TaskController_605.TASK_ID) == TasksManager.ALR_ACCEPT)
            {
               _map.conLevel["arrow"].visible = false;
            }
            else
            {
               DisplayUtil.removeForParent(_map.conLevel["arrow"]);
               _map.conLevel["arrow"] = null;
            }
            if(TasksManager.getTaskStatus(TaskController_565.TASK_ID) == TasksManager.COMPLETE)
            {
               initTruck();
            }
         }
      }
      
      private static function startPro_0() : void
      {
         _isTruck = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["arrow"].visible = false;
         AnimateManager.playMcAnimate(_map.conLevel["go"],0,"",function():void
         {
            NpcDialog.show(NPC.SOLIDMAN,["报告，这里已经被咤克斯的黑色瘴气所吞噬，我们赶到的时候……精灵们已经消失……"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SOLIDMAN,["请您驾驶货运车将火炮运往露希欧泥潭！我们需要您的战略部署进行第二轮抗战！"],["（快点击货运车吧）"],[function():void
               {
                  initTruck();
               }]);
            });
         });
      }
      
      private static function initTruck() : void
      {
         if(_map.conLevel["arrow"])
         {
            if(TasksManager.getTaskStatus(TaskController_565.TASK_ID) == TasksManager.ALR_ACCEPT)
            {
               _map.conLevel["arrow"].visible = true;
            }
         }
         ToolTipManager.add(_map.conLevel["control"],"推车货物台");
         _map.conLevel["control"].buttonMode = true;
         _map.conLevel["control"].mouseChildren = false;
         _map.conLevel["control"].addEventListener(MouseEvent.CLICK,onTruckClick);
      }
      
      private static function onTruckClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         LevelManager.closeMouseEvent();
         if(_map.conLevel["arrow"])
         {
            _map.conLevel["arrow"].visible = false;
         }
         ToolTipManager.remove(_map.conLevel["control"]);
         _map.conLevel["control"].buttonMode = false;
         _map.conLevel["control"].removeEventListener(MouseEvent.CLICK,onTruckClick);
         AnimateManager.playMcAnimate(_map.conLevel["control"],0,"",function():void
         {
            ResourceManager.getResource(ClientConfig.getResPath("pet/swf/truck.swf"),onLoadComplete,"pet");
         });
      }
      
      private static function onLoadComplete(param1:DisplayObject) : void
      {
         var o:DisplayObject = param1;
         _truck = o as MovieClip;
         _truck["truck"].gotoAndStop("right");
         playOrStopChild(_truck["truck"],"mc",false);
         if(MainManager.actorModel.nono)
         {
            NonoManager.addEventListener(NonoEvent.HOOM,function(param1:NonoEvent):void
            {
               start();
            });
            SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,0);
         }
         else
         {
            start();
         }
      }
      
      private static function start() : void
      {
         var action:PeculiarAction;
         var status:uint;
         _isTruck = true;
         LevelManager.openMouseEvent();
         NonoManager.removeEventListener(NonoEvent.HOOM,arguments.callee);
         action = new PeculiarAction();
         action.keepUp(MainManager.actorModel.skeleton as EmptySkeletonStrategy,-65);
         if(_truck)
         {
            MainManager.actorModel.addChildAt(_truck,0);
         }
         MainManager.actorModel.clickMc.y = -95;
         _map.conLevel["truck"].visible = false;
         MainManager.actorModel.pos = new Point(_map.conLevel["truck"].x,_map.conLevel["truck"].y + 20);
         MainManager.actorModel.addEventListener(RobotEvent.CHANGE_DIRECTION,onChange);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_START,onWalkStart);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_END,onWalkEnd);
         status = uint(TasksManager.getTaskStatus(TaskController_605.TASK_ID));
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_605.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  Task605.startProTwo();
               }
            });
         }
      }
      
      private static function playOrStopChild(param1:MovieClip, param2:String, param3:Boolean) : void
      {
         var mc:MovieClip = param1;
         var child:String = param2;
         var b:Boolean = param3;
         mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(mc[child])
            {
               if(b)
               {
                  mc[child].play();
               }
               else
               {
                  mc[child].gotoAndStop(1);
               }
               mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
            }
         });
      }
      
      private static function onChange(param1:DynamicEvent) : void
      {
         var _loc2_:String = param1.paramObject as String;
         _truck["truck"].gotoAndStop(_loc2_);
      }
      
      private static function onWalkStart(param1:RobotEvent) : void
      {
         playOrStopChild(_truck["truck"],"mc",true);
      }
      
      private static function onWalkEnd(param1:RobotEvent) : void
      {
         playOrStopChild(_truck["truck"],"mc",false);
      }
      
      public static function endTask_0() : void
      {
         if(_isTruck)
         {
            if(TasksManager.getTaskStatus(TaskController_565.TASK_ID) == TasksManager.ALR_ACCEPT)
            {
               TasksManager.getProStatusList(TaskController_565.TASK_ID,function(param1:Array):void
               {
                  var array:Array = param1;
                  if(!array[0])
                  {
                     TasksManager.complete(TaskController_565.TASK_ID,0,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           MapManager.changeMap(55);
                        }
                     });
                  }
                  else
                  {
                     MapManager.changeMap(55);
                  }
               });
            }
            else
            {
               MapManager.changeMap(55);
            }
         }
         else
         {
            NpcDialog.show(NPC.SOLIDMAN,["第二营地正在作战！我们的弹药已经不足，请装载一些再进入前线。"],["（点击左下角的装甲车控制台）"]);
         }
      }
      
      public static function initTask_1(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _pulse = new Timer(1000);
         _pulse.addEventListener(TimerEvent.TIMER,onTimer);
         if(TasksManager.getTaskStatus(TaskController_565.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_565.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  startPro_1();
               }
               else
               {
                  DisplayUtil.removeForParent(_map.conLevel["cloud"]);
                  _map.conLevel["cloud"] = null;
                  DisplayUtil.removeForParent(_map.conLevel["out"]);
                  _map.conLevel["out"] = null;
                  DisplayUtil.removeForParent(_map.conLevel["pet"]);
                  _map.conLevel["pet"] = null;
                  if(Boolean(param1[0]) && Boolean(param1[1]))
                  {
                     initTntTank();
                     _pulse.start();
                  }
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_map.conLevel["cloud"]);
            _map.conLevel["cloud"] = null;
            DisplayUtil.removeForParent(_map.conLevel["out"]);
            _map.conLevel["out"] = null;
            DisplayUtil.removeForParent(_map.conLevel["pet"]);
            _map.conLevel["pet"] = null;
            if(TasksManager.getTaskStatus(TaskController_565.TASK_ID) == TasksManager.COMPLETE)
            {
               initTntTank();
               _pulse.start();
            }
         }
      }
      
      private static function startPro_1() : void
      {
         ToolBarController.showOrHideAllUser(false);
         _isClock = true;
         _map.conLevel["pet"].visible = false;
         AnimateManager.playMcAnimate(_map.conLevel["out"],0,"",function():void
         {
            DisplayUtil.removeForParent(_map.conLevel["out"]);
            _map.conLevel["out"] = null;
            _map.conLevel["pet"].visible = true;
            NpcDialog.show(NPC.SOLIDMAN,["报告指挥官！已经完成一切部署，请将火炮放入相应位置！"],null,null,false,function():void
            {
               ToolTipManager.add(_map.conLevel["screen"],"显示屏");
               _map.conLevel["screen"].buttonMode = true;
               _map.conLevel["screen"].addEventListener(MouseEvent.CLICK,onScreenClick);
               initTntTank();
               _pulse.start();
            });
         });
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         var k:int;
         var len:int = 0;
         var ok:Boolean = false;
         var i:int = 0;
         var j:int = 0;
         var e:TimerEvent = param1;
         if(_isClock)
         {
            if(Boolean(_tankArray[0]) || Boolean(_tankArray[1]) || Boolean(_tankArray[2]) || Boolean(_tankArray[3]) || Boolean(_tankArray[4]) || Boolean(_tankArray[5]))
            {
               --_timeRemaining;
               _map.conLevel["num_0"].gotoAndStop(_timeRemaining % 10 + 1);
               _map.conLevel["num_1"].gotoAndStop(Math.floor(_timeRemaining % 60 * 0.1) + 1);
               _map.conLevel["num_2"].gotoAndStop(Math.floor(_timeRemaining / 60) + 1);
               if(_timeRemaining == 0)
               {
                  _pulse.reset();
                  _pulse.removeEventListener(TimerEvent.TIMER,onTimer);
                  AnimateManager.playMcAnimate(_map.conLevel["cloud"],0,"",function():void
                  {
                     DisplayUtil.removeForParent(_map.conLevel["cloud"]);
                     _map.conLevel["cloud"] = null;
                     DisplayUtil.removeForParent(_map.conLevel["pet"]);
                     _map.conLevel["pet"] = null;
                     Mouse.show();
                     NpcDialog.show(NPC.SOLIDMAN,["胜利咯！胜利咯！！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SEER,["不对啊！瘴气消散了！那精灵呢？你们赶到的时候精灵都怎么了？？？？？？？"],["（卫兵们都沉默了）"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_565_3"),function():void
                           {
                              NpcDialog.show(NPC.SEER,["可恶……可恶……事情怎么会变成这样！到底要怎么办才可以阻止咤克斯呢？"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.SEER,["现在不是我们伤感的时候！大敌当前，我们一定要从容应对！你们一定要把守好这里！我向爱丽丝去汇报！"],["（返回赛尔号资料室）"],[function():void
                                 {
                                    TasksManager.complete(TaskController_565.TASK_ID,1,function(param1:Boolean):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(9);
                                       }
                                    });
                                 }]);
                              });
                           });
                        }]);
                     });
                  });
                  return;
               }
               if(_timeRemaining % 20 == 0)
               {
                  ok = false;
                  i = 0;
                  while(!ok)
                  {
                     i = Math.floor(Math.random() * 10);
                     if(_map.conLevel["pet"]["pet_" + i].visible)
                     {
                        ok = true;
                     }
                  }
                  _map.conLevel["pet"]["pet_" + i].visible = false;
                  _map.conLevel["pet"]["cloud_" + i].gotoAndPlay(2);
               }
            }
            len = 0;
            while(len < 5)
            {
               len++;
               j = Math.floor(Math.random() * 10);
               if(_map.conLevel["pet"]["pet_" + j].visible)
               {
                  _map.conLevel["pet"]["light_" + j].gotoAndPlay(2);
               }
            }
         }
         k = 0;
         while(k < 6)
         {
            if(_tankTimerArray[k] != 0)
            {
               --_tankTimerArray[k];
               if(_tankTimerArray[k] == 0)
               {
                  _tankArray[k] = false;
                  _map.conLevel["tank"]["tank_" + k].gotoAndStop(4);
               }
            }
            k++;
         }
      }
      
      private static function initTntTank() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            _map.conLevel["tnt"]["tnt_" + _loc1_].mouseChildren = false;
            _loc1_++;
         }
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            _map.conLevel["tank"]["tank_" + _loc2_].mouseChildren = false;
            _loc2_++;
         }
         ToolTipManager.add(_map.conLevel["tnt"],"炮弹");
         _map.conLevel["tnt"].buttonMode = true;
         _map.conLevel["tnt"].addEventListener(MouseEvent.CLICK,onTntClick);
         ToolTipManager.add(_map.conLevel["tank"],"炮台");
         _map.conLevel["tank"].buttonMode = true;
         _map.conLevel["tank"].addEventListener(MouseEvent.CLICK,onTankClick);
         _map.conLevel["icon_0"].mouseEnabled = false;
         _map.conLevel["icon_0"].mouseChildren = false;
         _map.conLevel["icon_1"].mouseEnabled = false;
         _map.conLevel["icon_1"].mouseChildren = false;
         _map.conLevel["icon_2"].mouseEnabled = false;
         _map.conLevel["icon_2"].mouseChildren = false;
         _map.conLevel.root.addEventListener(MouseEvent.MOUSE_MOVE,onMouseMove);
      }
      
      private static function onTntClick(param1:MouseEvent) : void
      {
         Mouse.hide();
         resetIconPos();
         _currentTnt = param1.target.name.split("_")[1];
         _map.conLevel["icon_" + _currentTnt].x = LevelManager.stage.mouseX;
         _map.conLevel["icon_" + _currentTnt].y = LevelManager.stage.mouseY;
      }
      
      private static function resetIconPos() : void
      {
         _map.conLevel["icon_0"].x = -100;
         _map.conLevel["icon_0"].y = 0;
         _map.conLevel["icon_1"].x = -100;
         _map.conLevel["icon_1"].y = 0;
         _map.conLevel["icon_2"].x = -100;
         _map.conLevel["icon_2"].y = 0;
      }
      
      private static function onMouseMove(param1:MouseEvent) : void
      {
         if(_currentTnt != -1)
         {
            _map.conLevel["icon_" + _currentTnt].x = LevelManager.stage.mouseX;
            _map.conLevel["icon_" + _currentTnt].y = LevelManager.stage.mouseY;
         }
      }
      
      private static function onTankClick(param1:MouseEvent) : void
      {
         var i:int = 0;
         var e:MouseEvent = param1;
         i = int(e.target.name.split("_")[1]);
         if(_tankArray[i])
         {
            SimpleAlarm.show("这个炮台还不需要补充弹药",true);
            return;
         }
         if(i == 0 || i == 1)
         {
            if(_currentTnt == 0)
            {
               Mouse.show();
               resetIconPos();
               _currentTnt = -1;
               AnimateManager.playMcAnimate(_map.conLevel["tank"]["tank_" + i],2,"mc_1",function():void
               {
                  _tankArray[i] = true;
                  _tankTimerArray[i] = 30;
                  _map.conLevel["tank"]["tank_" + i].gotoAndStop(3);
               });
            }
            else
            {
               SimpleAlarm.show("需要放入对应的弹药",true);
            }
         }
         else if(i == 2 || i == 3)
         {
            if(_currentTnt == 1)
            {
               Mouse.show();
               resetIconPos();
               _currentTnt = -1;
               AnimateManager.playMcAnimate(_map.conLevel["tank"]["tank_" + i],2,"mc_1",function():void
               {
                  _tankArray[i] = true;
                  _tankTimerArray[i] = 30;
                  _map.conLevel["tank"]["tank_" + i].gotoAndStop(3);
               });
            }
            else
            {
               SimpleAlarm.show("需要放入对应的弹药",true);
            }
         }
         else if(i == 4 || i == 5)
         {
            if(_currentTnt == 2)
            {
               Mouse.show();
               resetIconPos();
               _currentTnt = -1;
               AnimateManager.playMcAnimate(_map.conLevel["tank"]["tank_" + i],2,"mc_1",function():void
               {
                  _tankArray[i] = true;
                  _tankTimerArray[i] = 30;
                  _map.conLevel["tank"]["tank_" + i].gotoAndStop(3);
               });
            }
            else
            {
               SimpleAlarm.show("需要放入对应的弹药",true);
            }
         }
      }
      
      private static function onScreenClick(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.SOLIDMAN,["曙光照射进来黑暗的瘴气就会被驱散！坚持！！"]);
      }
      
      public static function destory() : void
      {
         var _loc1_:PeculiarAction = null;
         ToolBarController.showOrHideAllUser(true);
         if(MapManager.currentMap.id == 54)
         {
            _isTruck = false;
            ResourceManager.cancel(ClientConfig.getResPath("pet/swf/truck.swf"),onLoadComplete);
            if(_truck)
            {
               DisplayUtil.removeForParent(_truck);
               _truck = null;
               _loc1_ = new PeculiarAction();
               _loc1_.standUp(MainManager.actorModel.skeleton as EmptySkeletonStrategy);
               MainManager.actorModel.clickMc.y = -50;
            }
            _map.conLevel["control"].removeEventListener(MouseEvent.CLICK,onTruckClick);
            MainManager.actorModel.removeEventListener(RobotEvent.CHANGE_DIRECTION,onChange);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_START,onWalkStart);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,onWalkEnd);
         }
         if(MapManager.currentMap.id == 55)
         {
            _pulse.reset();
            _pulse.removeEventListener(TimerEvent.TIMER,onTimer);
            Mouse.show();
            _map.conLevel.root.removeEventListener(MouseEvent.MOUSE_MOVE,onMouseMove);
            ToolTipManager.remove(_map.conLevel["tnt"]);
            _map.conLevel["tnt"].removeEventListener(MouseEvent.CLICK,onTntClick);
            ToolTipManager.remove(_map.conLevel["tank"]);
            _map.conLevel["tank"].removeEventListener(MouseEvent.CLICK,onTankClick);
            ToolTipManager.remove(_map.conLevel["screen"]);
            _map.conLevel["screen"].removeEventListener(MouseEvent.CLICK,onScreenClick);
         }
      }
   }
}
