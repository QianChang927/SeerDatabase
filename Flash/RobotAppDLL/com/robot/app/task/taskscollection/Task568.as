package com.robot.app.task.taskscollection
{
   import com.robot.app.mapProcess.MapProcess_463;
   import com.robot.app.mapProcess.MapProcess_464;
   import com.robot.app.task.control.TaskController_568;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.ui.Mouse;
   import flash.utils.Timer;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class Task568
   {
      
      private static var _map:BaseMapProcess;
      
      private static var starHit_mc:MovieClip;
      
      private static var blackDoor_mc:MovieClip;
      
      private static var heiwu_mc:MovieClip;
      
      private static var stone_mc:MovieClip;
      
      private static var stoneClickNum:uint = 0;
      
      public static var isSendToMap1:Boolean = false;
      
      private static var sand_mc:MovieClip;
      
      private static var sandMovie_mc:MovieClip;
      
      private static var sandHit_mc:MovieClip;
      
      private static var selected_sand_mc:MovieClip;
      
      private static var oldX:int;
      
      private static var oldY:int;
      
      private static var sandSuc_num:uint = 0;
      
      private static var intervalID:uint;
      
      private static var door_mc:MovieClip;
      
      private static var match_mc:MovieClip;
      
      private static var fireHit_mc:MovieClip;
      
      private static var fireHit1_mc:MovieClip;
      
      private static var fireHit2_mc:MovieClip;
      
      private static var hit1_flag:Boolean;
      
      private static var hit2_flag:Boolean;
      
      private static var fireNum:uint = 0;
      
      private static var match_is_down:Boolean;
      
      private static var interval_initTreeID:uint;
      
      private static var match_oldX:int;
      
      private static var match_oldY:int;
      
      private static var fire_mc:MovieClip;
      
      private static var timer:Timer;
      
      private static var guide_mc:MovieClip;
      
      private static var trees_mc:MovieClip;
      
      private static var hitTreeNum:uint;
      
      private static var card_btn:SimpleButton;
      
      private static var cardMovie_mc:MovieClip;
      
      private static var cardClose_btn:SimpleButton;
      
      public static var panel3:AppModel;
      
      public static var panel2:AppModel;
      
      public static var panel1:AppModel;
      
      public static var panel0:AppModel;
       
      
      public function Task568()
      {
         super();
      }
      
      public static function initTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_568_0"),function():void
         {
            NpcDialog.show(NPC.SEER,["我一定要前往那颗迷雾中的星球看看！或许会有什么转机……爱丽丝我该从哪里进入这颗星球呢？"],null,null,false,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_568_1"),function():void
               {
                  NpcDialog.show(NPC.SEER,["赛尔永无畏惧不是吗？呵呵……我想我该出发了！"],["前进"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_568_2"),function():void
                     {
                        MapManager.changeMap(463);
                     });
                  }]);
               });
            });
         });
      }
      
      public static function initTask_463(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         starHit_mc = _map.btnLevel["starHit_mc"];
         blackDoor_mc = _map.animatorLevel["blackDoor_mc"];
         heiwu_mc = _map.conLevel["heiwu_mc"];
         heiwu_mc.visible = false;
         stone_mc = _map.conLevel["stone_mc"];
         sand_mc = _map.depthLevel["sand_mc"];
         sandMovie_mc = _map.depthLevel["sandMovie_mc"];
         sandHit_mc = _map.depthLevel["sandHit_mc"];
         door_mc = _map.conLevel["door_mc"];
         status = uint(TasksManager.getTaskStatus(TaskController_568.TASK_ID));
         if(status == TasksManager.UN_ACCEPT)
         {
            initRoom();
         }
         else if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_568.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startProOne();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  startProTwo();
               }
               else
               {
                  initRoom();
               }
            });
         }
         else if(status == TasksManager.COMPLETE)
         {
            initRoom();
         }
      }
      
      private static function startProOne() : void
      {
         NpcDialog.show(NPC.SEER,["一阵天旋地转我这是到了哪里？这里看上去更像是一个秘密入口！周围可能会有线索！"],["周围仔细看看吧！"],[function():void
         {
            TasksManager.complete(TaskController_568.TASK_ID,0,function(param1:Boolean):void
            {
               if(param1)
               {
                  startProTwo();
               }
            });
         }]);
      }
      
      private static function startProTwo() : void
      {
         initRoom();
      }
      
      public static function initRoom() : void
      {
         starHit_mc.buttonMode = true;
         starHit_mc.addEventListener(MouseEvent.CLICK,onStarClickHandler);
         stone_mc.addEventListener(MouseEvent.CLICK,onStoneClickHandler);
         if(stoneClickNum >= 3)
         {
            stone_mc.gotoAndStop(3);
         }
         stone_mc.buttonMode = true;
         initSandGame();
      }
      
      private static function onStoneClickHandler(param1:MouseEvent) : void
      {
         ++stoneClickNum;
         if(stoneClickNum < 3)
         {
            stone_mc.gotoAndStop(stoneClickNum + 1);
         }
         else
         {
            if(panel3 == null)
            {
               panel3 = new AppModel(ClientConfig.getTaskModule("TaskPanel3_568"),"正在打开石头面板");
               panel3.setup();
            }
            panel3.show();
         }
      }
      
      private static function initSandGame() : void
      {
         initSandClick(sandSuc_num);
      }
      
      private static function initSandClick(param1:uint) : void
      {
         param1 += 1;
         var _loc2_:MovieClip = sand_mc.getChildByName("sand" + param1 + "_mc") as MovieClip;
         _loc2_.buttonMode = true;
         _loc2_.addEventListener(MouseEvent.MOUSE_DOWN,onSandClick);
         _loc2_.addEventListener(MouseEvent.MOUSE_UP,onSandClick);
      }
      
      private static function onSandClick(param1:MouseEvent) : void
      {
         var _loc2_:uint = 0;
         if(selected_sand_mc == null)
         {
            selected_sand_mc = param1.currentTarget as MovieClip;
            selected_sand_mc.parent.parent.addChild(selected_sand_mc.parent);
            oldX = selected_sand_mc.x;
            oldY = selected_sand_mc.y;
            selected_sand_mc.startDrag(true);
         }
         else
         {
            if(sandHit_mc.hitTestObject(selected_sand_mc))
            {
               selected_sand_mc.stopDrag();
               selected_sand_mc.visible = false;
               _loc2_ = uint(selected_sand_mc.name.substr(4,1));
               sandMovie_mc.gotoAndStop(_loc2_ + 1);
               ++sandSuc_num;
               if(sandSuc_num < 3)
               {
                  initSandClick(sandSuc_num);
               }
               else
               {
                  intervalID = setInterval(openDoor,2000);
               }
               selected_sand_mc.removeEventListener(MouseEvent.MOUSE_DOWN,onSandClick);
               selected_sand_mc.removeEventListener(MouseEvent.MOUSE_UP,onSandUp);
            }
            else
            {
               selected_sand_mc.stopDrag();
               selected_sand_mc.x = oldX;
               selected_sand_mc.y = oldY;
            }
            selected_sand_mc = null;
         }
      }
      
      private static function onSandUp(param1:MouseEvent) : void
      {
         if(selected_sand_mc)
         {
            selected_sand_mc.stopDrag();
            selected_sand_mc.x = oldX;
            selected_sand_mc.y = oldY;
            selected_sand_mc = null;
         }
      }
      
      private static function openDoor() : void
      {
         var status:uint;
         clearInterval(intervalID);
         door_mc.gotoAndStop(2);
         MapProcess_463.isOpen = true;
         MapProcess_463.openDoorHandler();
         status = uint(TasksManager.getTaskStatus(TaskController_568.TASK_ID));
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.complete(TaskController_568.TASK_ID,1,function(param1:Boolean):void
            {
            });
         }
      }
      
      private static function onStarClickHandler(param1:MouseEvent) : void
      {
         if(panel2 == null)
         {
            panel2 = new AppModel(ClientConfig.getTaskModule("TaskPanel2_568"),"正在打开六芒星面板");
            panel2.setup();
         }
         panel2.show();
      }
      
      public static function openBlackDoor() : void
      {
         blackDoor_mc.visible = true;
         AnimateManager.playMcAnimate(blackDoor_mc,0,"",function():void
         {
            heiwu_mc.visible = true;
            heiwu_mc.addEventListener(Event.ENTER_FRAME,onHeiwuEnterFrameHander);
            heiwu_mc.gotoAndPlay(2);
         });
      }
      
      private static function onHeiwuEnterFrameHander(param1:Event) : void
      {
         if(heiwu_mc.totalFrames == heiwu_mc.currentFrame)
         {
            heiwu_mc.removeEventListener(Event.ENTER_FRAME,onHeiwuEnterFrameHander);
            isSendToMap1 = true;
            MapManager.changeMap(1);
         }
      }
      
      public static function initTask_1(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(isSendToMap1)
         {
            isSendToMap1 = false;
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_568_3"),function():void
            {
               SimpleAlarm.show("被黑色瘴气腐蚀的机械铠甲已经整修完毕",true);
               NpcDialog.show(NPC.SEER,["难道是我刚才开启的机关出了问题？我再前往那里看看！事情一定会有转机的"],["前往未知星球"],[function():void
               {
                  MapManager.changeMap(463);
               }]);
            });
         }
      }
      
      public static function initTask_464(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         MapProcess_464.hasTaskInteractOver = false;
         match_mc = map.conLevel["match_mc"];
         fireHit_mc = map.conLevel["fireHit_mc"];
         fireHit1_mc = map.conLevel["fireHit1_mc"];
         fireHit2_mc = map.conLevel["fireHit2_mc"];
         fire_mc = map.conLevel["fire_mc"];
         trees_mc = map.conLevel["trees_mc"];
         card_btn = map.conLevel["card_btn"];
         guide_mc = map.conLevel["guide_mc"];
         status = uint(TasksManager.getTaskStatus(TaskController_568.TASK_ID));
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_568.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  map.conLevel["katuMc"].visible = true;
                  card_btn.visible = true;
                  trees_mc.visible = true;
                  map.depthLevel["spt"].visible = false;
                  startProThree();
               }
               else
               {
                  map_464_over();
               }
            });
         }
         else
         {
            map_464_over();
         }
      }
      
      private static function map_464_over() : void
      {
         fire_mc.gotoAndStop(5);
         guide_mc.visible = false;
         match_mc.visible = false;
         MapProcess_464.hasTaskInteractOver = true;
         EventManager.dispatchEvent(new DynamicEvent("taskWithoutMap","task_568_map_464"));
      }
      
      private static function startProThree() : void
      {
         NpcDialog.show(NPC.SEER,["受到黑色瘴气影响，这里可能也已经没有生物了吧！咦？那堆东西是什么？摩擦一下似乎会有火花？"],["按住鼠标左键，来回摩擦火堆"],[function():void
         {
            lightFire();
         }]);
      }
      
      private static function lightFire() : void
      {
         match_oldX = match_mc.x;
         match_oldY = match_mc.y;
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_DOWN,onFireDownHandler);
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_UP,onFireUpHandler);
         fireHit_mc.addEventListener(Event.ENTER_FRAME,onFireEnterFrame);
      }
      
      private static function onFireEnterFrame(param1:Event) : void
      {
         var _loc2_:Point = new Point(LevelManager.mapLevel.mouseX,LevelManager.mapLevel.mouseY);
         if(fireHit_mc.hitTestPoint(_loc2_.x,_loc2_.y))
         {
            match_mc.visible = true;
            match_mc.startDrag(true);
            Mouse.hide();
            if(match_is_down)
            {
               if(match_mc.hitTestObject(fireHit1_mc))
               {
                  hit1_flag = true;
               }
               if(match_mc.hitTestObject(fireHit2_mc))
               {
                  hit2_flag = true;
               }
            }
         }
         else
         {
            match_mc.visible = false;
            match_mc.stopDrag();
            Mouse.show();
         }
      }
      
      private static function onFireDownHandler(param1:MouseEvent) : void
      {
         match_is_down = true;
         setTimer();
      }
      
      private static function onFireUpHandler(param1:MouseEvent) : void
      {
         match_is_down = false;
         Mouse.show();
         match_mc.x = match_oldX;
         match_mc.y = match_oldY;
         hit1_flag = hit2_flag = false;
         clearTimer();
      }
      
      private static function setTimer() : void
      {
         timer = new Timer(2000,10);
         timer.addEventListener(TimerEvent.TIMER,onTimerHandler);
         timer.addEventListener(TimerEvent.TIMER_COMPLETE,onTimerCompleteHandler);
         timer.start();
      }
      
      private static function clearTimer() : void
      {
         if(timer)
         {
            timer.reset();
            timer.stop();
            timer.removeEventListener(TimerEvent.TIMER,onTimerHandler);
            timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimerCompleteHandler);
            timer = null;
         }
      }
      
      private static function onTimerHandler(param1:TimerEvent) : void
      {
         if(hit1_flag && hit2_flag)
         {
            ++fireNum;
            fire_mc.gotoAndStop(fireNum + 1);
            if(fireNum >= 3)
            {
               if(fireNum >= 3)
               {
                  clearTimer();
                  match_mc.visible = false;
                  guide_mc.visible = false;
                  Mouse.show();
                  removeFireEvent();
                  interval_initTreeID = setInterval(initTrees,4000);
               }
            }
            hit1_flag = false;
            hit2_flag = false;
         }
      }
      
      private static function removeFireEvent() : void
      {
         if(match_mc)
         {
            match_mc.removeEventListener(MouseEvent.MOUSE_DOWN,onFireDownHandler);
            match_mc.removeEventListener(MouseEvent.MOUSE_UP,onFireUpHandler);
         }
         if(fireHit_mc)
         {
            fireHit_mc.removeEventListener(Event.ENTER_FRAME,onFireEnterFrame);
         }
      }
      
      private static function onTimerCompleteHandler(param1:TimerEvent) : void
      {
         if(timer)
         {
            timer.stop();
            timer.removeEventListener(TimerEvent.TIMER,onTimerHandler);
            timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimerCompleteHandler);
         }
      }
      
      private static function onMatchUpHandler(param1:MouseEvent) : void
      {
         match_is_down = false;
         match_mc.stopDrag();
         Mouse.show();
         match_mc.x = match_oldX;
         match_mc.y = match_oldY;
         hit1_flag = hit2_flag = false;
         clearTimer();
      }
      
      private static function initTrees() : void
      {
         clearInterval(interval_initTreeID);
         NpcDialog.show(NPC.SEER,["难道还有精灵幸存？快拨开丛林看看！那里可能会有生命迹象……"],["事不宜迟！（快点击丛林）"],[function():void
         {
            hitTrees();
         }]);
      }
      
      private static function hitTrees() : void
      {
         var _loc3_:MovieClip = null;
         var _loc1_:uint = 3;
         var _loc2_:uint = 1;
         while(_loc2_ <= 3)
         {
            _loc3_ = trees_mc.getChildByName("tree" + _loc2_ + "_mc") as MovieClip;
            _loc3_.addEventListener(MouseEvent.CLICK,onTreeHit);
            _loc3_.gotoAndStop(1);
            _loc3_.buttonMode = true;
            _loc2_++;
         }
      }
      
      private static function onTreeHit(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var target_mc:MovieClip = e.currentTarget as MovieClip;
         target_mc.gotoAndStop(2);
         target_mc.buttonMode = false;
         target_mc.removeEventListener(MouseEvent.CLICK,onTreeHit);
         ++hitTreeNum;
         if(hitTreeNum >= 3)
         {
            NpcDialog.show(NPC.SEER,["额……这个难道是未知星球上的生物？咦！在他身边好像有一张卡片？"],["（快点击卡片看看吧）"],[function():void
            {
               card_btn.addEventListener(MouseEvent.CLICK,onCardClick);
            }]);
         }
      }
      
      private static function onCardClick(param1:MouseEvent) : void
      {
         showCard();
      }
      
      private static function showCard() : void
      {
         if(panel1 == null)
         {
            panel1 = new AppModel(ClientConfig.getTaskModule("TaskPanel1_568"),"正在打开卡片面板");
            panel1.setup();
         }
         panel1.show();
      }
      
      public static function onCardCloseHandler() : void
      {
         var status:uint = uint(TasksManager.getTaskStatus(TaskController_568.TASK_ID));
         if(status == TasksManager.ALR_ACCEPT)
         {
            NpcDialog.show(NPC.SEER,["额……卡酷星？卡兔？邀请雷伊？不管这么多了！先去找博士看看怎么救这个黄帽子家伙吧！"],["链接实验室的通讯器"],[function():void
            {
               showCommunicator();
            }]);
         }
      }
      
      private static function showCommunicator() : void
      {
         if(panel0 == null)
         {
            panel0 = new AppModel(ClientConfig.getTaskModule("TaskPanel0_568"),"正在打开通讯面板");
            panel0.setup();
         }
         panel0.show();
      }
      
      public static function onCommunicateClose() : void
      {
         NpcDialog.show(NPC.SEER,["黄帽子家伙我也不知道雷伊什么时候会出现，好吧！就来看看我们的运气，相信赫尔卡星的守护者一定会出现！"],["前往赫尔卡星"],[function():void
         {
            TasksManager.complete(TaskController_568.TASK_ID,2,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(32);
               }
            });
         }]);
      }
      
      public static function initTask_32(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         var status:uint = uint(TasksManager.getTaskStatus(TaskController_568.TASK_ID));
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_568.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  startProFour();
               }
            });
         }
      }
      
      private static function startProFour() : void
      {
         NpcDialog.show(NPC.LEIYISEER,["什么？找雷伊救命的？可是我在这里观察了很久，毫无下雨的迹象啊……"],null,null,false,function():void
         {
            NpcDialog.show(NPC.LEIYISEER,["我相信我们的守护者，我们的王者一定会在紧要时刻出现的！你把它留下吧！我一看到雷伊就会拜托救助黄帽子的！"],["好！那我先返回资料室禀报情况！"],[function():void
            {
               TasksManager.complete(TaskController_568.TASK_ID,3,function(param1:Boolean):void
               {
                  MapManager.changeMap(9);
               });
            }]);
         });
      }
      
      public static function destory() : void
      {
         sandSuc_num = 0;
         fireNum = 0;
         hitTreeNum = 0;
         MapProcess_463.isOpen = false;
         clearInterval(interval_initTreeID);
         removeFireEvent();
         if(heiwu_mc)
         {
            heiwu_mc.removeEventListener(Event.ENTER_FRAME,onHeiwuEnterFrameHander);
         }
         if(card_btn)
         {
            card_btn.removeEventListener(MouseEvent.CLICK,onCardClick);
         }
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_DOWN,onFireDownHandler);
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_UP,onFireUpHandler);
      }
   }
}
