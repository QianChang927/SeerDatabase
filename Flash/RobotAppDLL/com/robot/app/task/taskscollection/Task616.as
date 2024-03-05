package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_616;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.Direction;
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.media.Sound;
   import flash.utils.Timer;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task616 extends ITask
   {
      
      public static var haveLeafNum:uint;
      
      public static var haveMilkNum:uint;
      
      public static var externalUse:Boolean = false;
      
      public static var haveInteractive:Boolean = false;
      
      public static var isFirstIn:Boolean = true;
      
      private static var status:uint;
      
      private static var _map:BaseMapProcess;
      
      private static var myTree_mc:MovieClip;
      
      private static var pourAni_mc:MovieClip;
      
      private static var leafTimer:Timer;
      
      private static var showLeaf_mc:MovieClip;
      
      private static var isPumping:Boolean = false;
      
      private static var waterMarkNum:uint = 70;
      
      private static var waterDegree_mc:MovieClip;
      
      private static var water_mc1:MovieClip;
      
      private static var water_mc2:MovieClip;
      
      private static var water_mc3:MovieClip;
      
      private static var water_mc4:MovieClip;
      
      private static var shuizhu_mc:MovieClip;
      
      private static var bornBar_mc:MovieClip;
      
      private static var bornTimer:Timer;
      
      private static var bornTimeOver_mc:MovieClip;
      
      private static var allMonsters_mc:MovieClip;
      
      private static var firstNearAni_mc:MovieClip;
      
      private static var secondNearAni_mc:MovieClip;
      
      public static var _falseNpc:MovieClip;
      
      private static var footMark_mc:MovieClip;
      
      private static var _maxDis:uint = 100;
      
      private static var falseNpcPoint:Point = new Point();
      
      private static var seerPoint:Point = new Point();
      
      private static var footmarkArr:Array = [];
      
      private static var footTimer:Timer;
      
      private static var rubFootmarkTimer:Timer;
      
      private static var bmd_footMark:BitmapData;
      
      private static var footMarkNum:uint;
      
      private static var rubFootMarkNum:uint;
      
      private static var hitChildNum:uint = 0;
      
      private static var hitNum:uint;
      
      private static var hitOver:Object = {};
      
      private static var hitNpc_mc:MovieClip;
      
      private static var sound_water1:Sound;
      
      private static var sound_water2:Sound;
      
      private static var sound_water3:Sound;
      
      private static var tipNpc:DisplayObject;
      
      private static var panel:AppModel;
      
      private static var isFirst:Boolean;
      
      private static var isSecond:Boolean;
       
      
      public function Task616()
      {
         super();
      }
      
      public static function initTask_484(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         myTree_mc = _map.conLevel["myTree_mc"];
         pourAni_mc = _map.animatorLevel["pourAni_mc"];
         waterDegree_mc = _map.conLevel["waterDegree_mc"];
         bornBar_mc = _map.conLevel["bornBar_mc"];
         bornTimeOver_mc = _map.animatorLevel["bornTimeOver_mc"];
         allMonsters_mc = _map.conLevel["allMonsters_mc"];
         firstNearAni_mc = _map.animatorLevel["firstNearAni_mc"];
         secondNearAni_mc = _map.animatorLevel["secondNearAni_mc"];
         hitNpc_mc = _map.conLevel["hitNpc_mc"];
         water_mc1 = _map.conLevel["mc1"];
         water_mc2 = _map.conLevel["mc2"];
         water_mc3 = _map.conLevel["mc3"];
         water_mc4 = _map.conLevel["mc4"];
         shuizhu_mc = _map.conLevel["shuizhu_mc"];
         hideAllWater();
         water_mc1.visible = true;
         hitNpc_mc.visible = false;
         firstNearAni_mc.gotoAndStop(1);
         secondNearAni_mc.gotoAndStop(1);
         secondNearAni_mc.visible = false;
         firstNearAni_mc.visible = false;
         bornBar_mc.visible = false;
         waterDegree_mc.visible = false;
         bornTimeOver_mc.visible = false;
         allMonsters_mc.visible = false;
         if(TasksManager.getTaskStatus(TaskController_616.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            initTask();
            ToolBarController.showOrHideAllUser(false);
            return;
         }
         if(TasksManager.getTaskStatus(TaskController_616.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            TasksManager.getProStatusList(TaskController_616.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startProOne();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  startProTwo();
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  startProThree();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  startProFour();
               }
            });
         }
         else if(TasksManager.getTaskStatus(TaskController_616.TASK_ID) == TasksManager.COMPLETE)
         {
            hideMap484Game();
            showMap484Game();
         }
      }
      
      public static function hideMap484Game() : void
      {
         haveInteractive = false;
         bornBar_mc.visible = false;
         pourAni_mc.gotoAndStop(1);
         pourAni_mc.visible = false;
         bornTimeOver_mc.visible = false;
         bornTimeOver_mc.gotoAndStop(1);
         allMonsters_mc.visible = false;
         firstNearAni_mc.gotoAndStop(1);
         secondNearAni_mc.gotoAndStop(1);
         secondNearAni_mc.visible = false;
         firstNearAni_mc.visible = false;
         waterDegree_mc.visible = false;
         hitNpc_mc.visible = false;
         DisplayUtil.removeForParent(bornTimeOver_mc);
         DisplayUtil.removeForParent(allMonsters_mc);
      }
      
      public static function stopWaterAndLeafGame() : void
      {
         if(leafTimer)
         {
            leafTimer.stop();
            leafTimer.removeEventListener(TimerEvent.TIMER,onLeafTime);
            leafTimer = null;
         }
         waterDegree_mc.visible = false;
         shuizhu_mc.removeEventListener(MouseEvent.CLICK,onShuizhuClick);
         shuizhu_mc.buttonMode = false;
         if(showLeaf_mc)
         {
            showLeaf_mc.gotoAndStop(1);
            showLeaf_mc.visible = false;
         }
      }
      
      public static function showMap484Game(param1:Boolean = false) : void
      {
         externalUse = param1;
         if(externalUse || !haveInteractive)
         {
            leafGameStart();
            waterGameStart();
            if(!haveInteractive)
            {
               haveInteractive = true;
            }
         }
      }
      
      private static function leafGameStart() : void
      {
         if(!leafTimer)
         {
            leafTimer = new Timer(1000);
         }
         leafTimer.addEventListener(TimerEvent.TIMER,onLeafTime);
         leafTimer.start();
      }
      
      private static function onLeafTime(param1:TimerEvent) : void
      {
         var _loc2_:uint = Math.random() * 4 + 1;
         if(showLeaf_mc)
         {
            showLeaf_mc.gotoAndStop(1);
            showLeaf_mc.buttonMode = false;
            showLeaf_mc.removeEventListener(MouseEvent.CLICK,onLeafClick);
         }
         showLeaf_mc = myTree_mc.getChildByName("leaf" + _loc2_ + "_mc") as MovieClip;
         showLeaf_mc.addEventListener(MouseEvent.CLICK,onLeafClick);
         showLeaf_mc.gotoAndStop(2);
         showLeaf_mc.buttonMode = true;
      }
      
      private static function onLeafClick(param1:MouseEvent) : void
      {
         showLeaf_mc.removeEventListener(MouseEvent.CLICK,onLeafClick);
         showLeaf_mc.buttonMode = false;
         showLeaf_mc.gotoAndStop(1);
         if(TasksManager.getTaskStatus(619) == TasksManager.ALR_ACCEPT)
         {
            Task619.onLeafClick();
            return;
         }
         if(haveLeafNum < 5)
         {
            ++haveLeafNum;
         }
         if(!externalUse)
         {
            if(haveLeafNum < 3)
            {
               SimpleAlarm.show("你已得到" + haveLeafNum + "片艾叶草了哦！",true);
            }
            else if(haveMilkNum == 0)
            {
               if(TasksManager.getTaskStatus(TaskController_616.TASK_ID) == TasksManager.ALR_ACCEPT)
               {
                  popShowPanel(1);
               }
            }
            else
            {
               pourAni_mc.gotoAndPlay(pourAni_mc.currentFrame);
               bornTimerHandler();
            }
         }
         else if(haveLeafNum < 5)
         {
            SimpleAlarm.show("你已得到" + haveLeafNum + "片艾叶草了哦！",true);
         }
         else
         {
            SimpleAlarm.show("你已经收集完5片艾叶草了哦！",true);
         }
      }
      
      private static function popShowPanel(param1:uint) : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_616"),"正在打开任务信息");
            panel.setup();
         }
         panel.init(param1);
         panel.show();
      }
      
      private static function removeTreeEvent() : void
      {
         var _loc2_:MovieClip = null;
         if(!myTree_mc)
         {
            return;
         }
         var _loc1_:uint = 1;
         while(_loc1_ <= 4)
         {
            _loc2_ = myTree_mc.getChildByName("leaf" + _loc1_ + "_mc") as MovieClip;
            _loc2_.removeEventListener(MouseEvent.CLICK,onLeafClick);
            _loc1_++;
         }
      }
      
      private static function waterGameStart() : void
      {
         shuizhu_mc.addEventListener(MouseEvent.CLICK,onShuizhuClick);
         shuizhu_mc.buttonMode = true;
         isPumping = false;
         waterMarkNum = 0;
      }
      
      private static function hideAllWater(param1:MovieClip = null) : void
      {
         water_mc1.visible = water_mc2.visible = water_mc3.visible = water_mc4.visible = false;
         if(param1)
         {
            param1.visible = true;
         }
      }
      
      private static function onShuizhuClick(param1:MouseEvent) : void
      {
         shuizhu_mc.removeEventListener(MouseEvent.CLICK,onShuizhuClick);
         shuizhu_mc.buttonMode = false;
         if(!isPumping)
         {
            isPumping = true;
            sound_water1 = MapManager.currentMap.libManager.getSound("map484_water1");
            sound_water1.play();
            hideAllWater();
            water_mc1.visible = true;
            water_mc1.gotoAndPlay(2);
            water_mc1.addEventListener(Event.ENTER_FRAME,onWater1EnterFrame);
            waterDegree_mc.visible = true;
            waterMarkNum = 0;
            waterDegree_mc.removeEventListener(Event.ENTER_FRAME,onWaterDegreeEnterFrame);
            waterDegree_mc.addEventListener(Event.ENTER_FRAME,onWaterDegreeEnterFrame);
            waterDegree_mc.gotoAndPlay(2);
         }
         else
         {
            waterDegree_mc.removeEventListener(Event.ENTER_FRAME,onWaterDegreeEnterFrame);
            isPumping = false;
            waterDegree_mc.gotoAndStop(waterDegree_mc.currentFrame);
            waterDegree_mc.visible = false;
            if(waterMarkNum <= 50)
            {
               sound_water3 = MapManager.currentMap.libManager.getSound("map484_water3");
               sound_water3.play();
               hideAllWater(water_mc2);
               water_mc2.gotoAndPlay(2);
               water_mc2.addEventListener(Event.ENTER_FRAME,onWater2EnterFrame);
            }
            else if(waterMarkNum <= 80)
            {
               if(haveMilkNum < 5)
               {
                  ++haveMilkNum;
               }
               sound_water3 = MapManager.currentMap.libManager.getSound("map484_water3");
               sound_water3.play();
               hideAllWater(water_mc3);
               water_mc3.gotoAndPlay(2);
               water_mc3.addEventListener(Event.ENTER_FRAME,onWater3EnterFrame);
            }
            else
            {
               sound_water2 = MapManager.currentMap.libManager.getSound("map484_water2");
               sound_water2.play();
               hideAllWater(water_mc4);
               water_mc4.gotoAndPlay(2);
               water_mc4.addEventListener(Event.ENTER_FRAME,onWater4EnterFrame);
            }
         }
      }
      
      private static function onWater1EnterFrame(param1:Event) : void
      {
         if(water_mc1.currentFrame == water_mc1.totalFrames)
         {
            water_mc1.removeEventListener(Event.ENTER_FRAME,onWater1EnterFrame);
            shuizhu_mc.addEventListener(MouseEvent.CLICK,onShuizhuClick);
            shuizhu_mc.buttonMode = true;
         }
      }
      
      private static function onWater2EnterFrame(param1:Event) : void
      {
         if(water_mc2.currentFrame == water_mc2.totalFrames)
         {
            water_mc2.removeEventListener(Event.ENTER_FRAME,onWater2EnterFrame);
            shuizhu_mc.addEventListener(MouseEvent.CLICK,onShuizhuClick);
            shuizhu_mc.buttonMode = true;
            if(externalUse)
            {
               return;
            }
            littleWater();
         }
      }
      
      private static function onWater3EnterFrame(param1:Event) : void
      {
         var e:Event = param1;
         if(water_mc3.currentFrame == water_mc3.totalFrames)
         {
            water_mc3.removeEventListener(Event.ENTER_FRAME,onWater3EnterFrame);
            shuizhu_mc.addEventListener(MouseEvent.CLICK,onShuizhuClick);
            shuizhu_mc.buttonMode = true;
            if(externalUse)
            {
               if(haveMilkNum >= 5)
               {
                  SimpleAlarm.show("你已经收集完了5桶奶油水了哦！",true);
               }
               else
               {
                  SimpleAlarm.show("你已经打了" + haveMilkNum + "桶奶油水了哦！",true);
               }
               return;
            }
            waterDegree_mc.visible = false;
            if(haveMilkNum >= 1)
            {
               if(TasksManager.getTaskStatus(TaskController_616.TASK_ID) == TasksManager.ALR_ACCEPT)
               {
                  TasksManager.getProStatusList(TaskController_616.TASK_ID,function(param1:Array):void
                  {
                     if(Boolean(param1[0]) && !param1[1])
                     {
                        pourAni_mc.visible = true;
                        pourAni_mc.addEventListener(Event.ENTER_FRAME,onPourAniEnterFrame);
                        pourAni_mc.gotoAndPlay(2);
                        hideAllWater();
                        shuizhu_mc.removeEventListener(MouseEvent.CLICK,onShuizhuClick);
                        shuizhu_mc.buttonMode = false;
                     }
                  });
               }
            }
         }
      }
      
      private static function onWater4EnterFrame(param1:Event) : void
      {
         if(water_mc4.currentFrame == water_mc4.totalFrames)
         {
            water_mc4.removeEventListener(Event.ENTER_FRAME,onWater4EnterFrame);
            shuizhu_mc.addEventListener(MouseEvent.CLICK,onShuizhuClick);
            shuizhu_mc.buttonMode = true;
            if(externalUse)
            {
               return;
            }
            moreWater();
         }
      }
      
      private static function onWaterDegreeEnterFrame(param1:Event) : void
      {
         ++waterMarkNum;
         if(waterDegree_mc.currentFrame == waterDegree_mc.totalFrames)
         {
            waterDegree_mc.removeEventListener(Event.ENTER_FRAME,onWaterDegreeEnterFrame);
            waterDegree_mc.gotoAndStop(waterDegree_mc.totalFrames);
         }
      }
      
      private static function onPourAniEnterFrame(param1:Event) : void
      {
         if(pourAni_mc.currentFrame == 76)
         {
            hideAllWater(water_mc1);
            if(haveLeafNum >= 3)
            {
               bornTimerHandler();
            }
            else
            {
               pourAni_mc.visible = true;
               if(TasksManager.getTaskStatus(TaskController_616.TASK_ID) == TasksManager.ALR_ACCEPT)
               {
                  popShowPanel(2);
               }
               pourAni_mc.gotoAndStop(pourAni_mc.currentFrame);
               pourAni_mc.removeEventListener(Event.ENTER_FRAME,onPourAniEnterFrame);
            }
         }
      }
      
      private static function bornTimerHandler() : void
      {
         pourAni_mc.removeEventListener(Event.ENTER_FRAME,onPourAniEnterFrame);
         if(TasksManager.getTaskStatus(TaskController_616.TASK_ID) != TasksManager.ALR_ACCEPT)
         {
            return;
         }
         bornTimer = new Timer(1000);
         bornTimer.addEventListener(TimerEvent.TIMER,onBornTime);
         bornTimer.start();
         bornBar_mc.visible = true;
         bornBar_mc.progress_mc.width = 0;
         stopWaterAndLeafGame();
      }
      
      private static function onBornTime(param1:TimerEvent) : void
      {
         bornBar_mc.progress_mc.width += 5;
         if(bornBar_mc.progress_mc.width >= 198)
         {
            bornTimer.stop();
            bornTimer = null;
            bornBar_mc.visible = false;
            pourAni_mc.gotoAndStop(pourAni_mc.totalFrames);
            pourAni_mc.visible = false;
            bornTimeOver_mc.visible = true;
            bornTimeOver_mc.gotoAndPlay(2);
            bornTimeOver_mc.addEventListener(Event.ENTER_FRAME,onBornTimerOverEnterFrame);
         }
      }
      
      private static function onBornTimerOverEnterFrame(param1:Event) : void
      {
         var e:Event = param1;
         if(bornTimeOver_mc.currentFrame == bornTimeOver_mc.totalFrames)
         {
            bornTimeOver_mc.removeEventListener(Event.ENTER_FRAME,onBornTimerOverEnterFrame);
            TasksManager.complete(TaskController_616.TASK_ID,1,function(param1:Boolean):void
            {
               startProThree();
            });
         }
      }
      
      public static function initTask() : void
      {
         if(footMark_mc == null)
         {
            loadFalseNpc();
         }
      }
      
      private static function loadFalseNpc() : void
      {
         ResourceManager.getResource(ClientConfig.getFullMovie("falseNpc"),onLoadFalseNpc,"falseNpc");
      }
      
      private static function onLoadFalseNpc(param1:DisplayObject) : void
      {
         _falseNpc = param1 as MovieClip;
         _falseNpc.x = 500;
         _falseNpc.y = 380;
         _falseNpc.gotoAndStop(Direction.RIGHT);
         MapManager.currentMap.depthLevel.addChildAt(_falseNpc,0);
         CommonUI.addYellowExcal(_falseNpc,5,0);
         _falseNpc.addEventListener(MouseEvent.CLICK,onFalseNpcClick);
         _falseNpc.buttonMode = true;
      }
      
      private static function onLoad(param1:DisplayObject) : void
      {
         footMark_mc = param1 as MovieClip;
         var _loc2_:String = String(MainManager.actorModel.direction);
         if(footMark_mc != null)
         {
            addEvent();
         }
         bmd_footMark = new BitmapData(footMark_mc.width,footMark_mc.height,true,16777215);
         bmd_footMark.draw(footMark_mc);
         createFootMark();
      }
      
      private static function addEvent() : void
      {
         MainManager.actorModel.addEventListener(RobotEvent.WALK_START,onWalkStart);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onWalk);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_END,onWalkEnd);
         if(!rubFootmarkTimer)
         {
            rubFootmarkTimer = new Timer(1000);
            rubFootmarkTimer.addEventListener(TimerEvent.TIMER,onRubFootMark);
            rubFootmarkTimer.start();
         }
      }
      
      private static function onWalkStart(param1:RobotEvent) : void
      {
         if(!footTimer)
         {
            footTimer = new Timer(500);
         }
         footTimer.addEventListener(TimerEvent.TIMER,onFootTimerChange);
         footTimer.start();
      }
      
      private static function onFootTimerChange(param1:TimerEvent) : void
      {
         createFootMark();
      }
      
      private static function createFootMark() : void
      {
         var _loc1_:Bitmap = new Bitmap(bmd_footMark);
         _loc1_.width = footMark_mc.width;
         _loc1_.height = footMark_mc.height;
         _loc1_.x = MainManager.actorModel.x;
         _loc1_.y = MainManager.actorModel.y;
         _loc1_.name = "foot_" + footMarkNum;
         switch(MainManager.actorModel.direction)
         {
            case Direction.DOWN:
               _loc1_.rotation = 0;
               break;
            case Direction.LEFT:
               _loc1_.rotation = 90;
               break;
            case Direction.LEFT_DOWN:
               _loc1_.rotation = 45;
               break;
            case Direction.LEFT_UP:
               _loc1_.rotation = 135;
               break;
            case Direction.RIGHT:
               _loc1_.rotation = -90;
               break;
            case Direction.RIGHT_DOWN:
               _loc1_.rotation = -45;
               break;
            case Direction.RIGHT_UP:
               _loc1_.rotation = -135;
               break;
            case Direction.UP:
               _loc1_.rotation = 180;
         }
         MapManager.currentMap.depthLevel.addChildAt(_loc1_,0);
         ++footMarkNum;
      }
      
      private static function onRubFootMark(param1:TimerEvent) : void
      {
         var _loc2_:* = undefined;
         if(rubFootMarkNum > footMarkNum)
         {
            return;
         }
         _loc2_ = MapManager.currentMap.depthLevel.getChildByName("foot_" + rubFootMarkNum);
         if(_loc2_)
         {
            _loc2_.visible = false;
            ++rubFootMarkNum;
            if(_falseNpc)
            {
               _falseNpc.x = _loc2_.x;
               _falseNpc.y = _loc2_.y - _falseNpc.height / 2;
            }
            switch(_loc2_.rotation)
            {
               case 0:
                  _falseNpc.gotoAndStop(Direction.DOWN);
                  break;
               case 90:
                  _falseNpc.gotoAndStop(Direction.LEFT_DOWN);
                  break;
               case 45:
                  _falseNpc.gotoAndStop(Direction.LEFT_DOWN);
                  break;
               case 135:
                  _falseNpc.gotoAndStop(Direction.LEFT_UP);
                  break;
               case -90:
                  _falseNpc.gotoAndStop(Direction.RIGHT);
                  break;
               case -45:
                  _falseNpc.gotoAndStop(Direction.RIGHT_DOWN);
                  break;
               case -135:
                  _falseNpc.gotoAndStop(Direction.RIGHT_UP);
                  break;
               case 180:
                  _falseNpc.gotoAndStop(Direction.UP);
            }
         }
      }
      
      private static function onFalseNpcClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.QIAOKELI,["哎呀！！不要乱走啦！你脚上好脏……白色星球可不容许有黑色的东西！"],["啊~不好意思！对……对不起啊！","我还有些事，一会来找你赔不是！"],[function():void
         {
            TasksManager.accept(TaskController_616.TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  TasksManager.setTaskStatus(TaskController_616.TASK_ID,TasksManager.ALR_ACCEPT);
                  closeFalseNPc();
                  startProOne();
               }
            });
         },null]);
      }
      
      private static function closeFalseNPc() : void
      {
         DisplayUtil.removeForParent(_falseNpc);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalk);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,onWalkEnd);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_START,onWalkStart);
         if(_falseNpc)
         {
            _falseNpc.removeEventListener(MouseEvent.CLICK,onFalseNpcClick);
         }
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrameHandler);
         if(footTimer)
         {
            footTimer.stop();
            footTimer.removeEventListener(TimerEvent.TIMER,onFootTimerChange);
            footTimer = null;
         }
         if(rubFootmarkTimer)
         {
            rubFootmarkTimer.stop();
            rubFootmarkTimer.removeEventListener(TimerEvent.TIMER,onRubFootMark);
            rubFootmarkTimer = null;
         }
      }
      
      private static function onWalk(param1:RobotEvent) : void
      {
         if(Point.distance(falseNpcPoint,seerPoint) > _maxDis)
         {
         }
      }
      
      private static function onWalkEnd(param1:RobotEvent) : void
      {
         if(footTimer)
         {
            footTimer.reset();
         }
      }
      
      private static function startProOne() : void
      {
         NpcDialog.show(NPC.QIAOKELI,["来自外来的访客？孕育节？我想想……恩……这个……那个！哈哈！你来的正是时候！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.QIAOKELI,["你看我……一激动就自言自语了！对了，对了！你想不想参加我们的孕育节呢？"],["（什么是孕育节日）"],[function():void
            {
               showPics();
            }]);
         });
      }
      
      private static function showPics() : void
      {
         CartoonManager.play(ClientConfig.getFullMovie("task616_01"),thankyou);
      }
      
      private static function thankyou() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task616_1"),function():void
         {
            onClosePics();
         },false);
      }
      
      private static function onClosePics() : void
      {
         NpcDialog.show(NPC.QIAOKELI,["事不宜迟咯！快帮我们准备准备生产环境吧？恩恩！就这么决定了！要有艾叶草、要有奶油水……恩恩！我先去叫大伙！"],["天……它又开始自言自语了！"],[function():void
         {
            TasksManager.complete(TaskController_616.TASK_ID,0,function(param1:Boolean):void
            {
               startProTwo();
            });
         }]);
      }
      
      private static function onTipNpcClick(param1:*) : void
      {
         NpcDialog.show(NPC.QIAOKELI,["事不宜迟咯！快帮我们准备准备生产环境吧？恩恩！就这么决定了！要有艾叶草、要有奶油水……恩恩！我先去叫大伙！"],["天……它又开始自言自语了！"]);
      }
      
      private static function startProTwo() : void
      {
         ResourceManager.getResource(ClientConfig.getPetSwfPath(707),function(param1:MovieClip):void
         {
            param1.gotoAndStop("right");
            tipNpc = param1;
            CommonUI.addYellowExcal(param1);
            MapManager.currentMap.depthLevel.addChild(tipNpc);
            tipNpc.x = 520;
            tipNpc.y = 480;
            MapListenerManager.add(param1,onTipNpcClick,"巧克利");
         });
         showMap484Game();
      }
      
      private static function moreWater() : void
      {
         if(TasksManager.getTaskStatus(TaskController_616.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_616.TASK_ID,function(param1:Array):void
            {
               var a:Array = param1;
               if(Boolean(a[0]) && !a[1])
               {
                  NpcDialog.show(NPC.QIAOKELI,["啊……好危险！看来奶油水一次性不能盛很多呢！"],["（不能多不能少哦）"],[function():void
                  {
                     waterGameStart();
                  }]);
               }
            });
         }
      }
      
      private static function littleWater() : void
      {
         if(TasksManager.getTaskStatus(TaskController_616.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_616.TASK_ID,function(param1:Array):void
            {
               var a:Array = param1;
               if(Boolean(a[0]) && !a[1])
               {
                  NpcDialog.show(NPC.QIAOKELI,["咦……湿度好像还不够呢！我再去弄点吧！"],["（不能多不能少哦）"],[function():void
                  {
                     waterGameStart();
                  }]);
               }
            });
         }
      }
      
      private static function startProThree() : void
      {
         if(tipNpc)
         {
            DisplayUtil.removeForParent(tipNpc);
         }
         bornTimeOver_mc.visible = true;
         bornTimeOver_mc.gotoAndStop(1);
         bornTimeOver_mc.mouseChildren = false;
         bornTimeOver_mc.mouseEnabled = false;
         allMonsters_mc.visible = true;
         allMonsters_mc.addEventListener(MouseEvent.CLICK,onChildClick);
         allMonsters_mc.buttonMode = true;
      }
      
      private static function onChildClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playMcAnimate(allMonsters_mc,2,"mc",function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task616_4"),function():void
            {
               hitChildNum = 0;
               firstNearAni_mc.visible = true;
               npcFallDialog();
            });
         });
         allMonsters_mc.removeEventListener(MouseEvent.CLICK,onChildClick);
         allMonsters_mc.buttonMode = false;
         allMonsters_mc.mouseChildren = allMonsters_mc.mouseEnabled = false;
      }
      
      private static function npcFallDialog() : void
      {
         NpcDialog.show(NPC.SEER,["不行……再这样小家伙就要掉下去了。"],["（快走向小家伙试试）"],[function():void
         {
            TasksManager.complete(TaskController_616.TASK_ID,2,function(param1:Boolean):void
            {
               startProFour();
            });
         }]);
      }
      
      private static function startProFour() : void
      {
         firstNearAni_mc.visible = true;
         bornTimeOver_mc.visible = true;
         bornTimeOver_mc.gotoAndStop(1);
         bornTimeOver_mc.mouseChildren = false;
         bornTimeOver_mc.mouseEnabled = false;
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrameHandler);
      }
      
      private static function onWalkEnterFrameHandler(param1:RobotEvent) : void
      {
         var _loc2_:Point = MainManager.actorModel.pos;
         if(!hitOver["h_3"])
         {
            if(hitNum == 0)
            {
               if(Point.distance(_loc2_,new Point(firstNearAni_mc.x,firstNearAni_mc.y)) < 100 && !hitOver["h_1"])
               {
                  hitOver["h_1"] = true;
                  firstNearAni_mc.gotoAndPlay(2);
                  firstNearAni_mc.addEventListener(Event.ENTER_FRAME,onFirstNear);
                  MapManager.currentMap.spaceLevel.visible = false;
                  ++hitNum;
               }
            }
            else if(hitNum == 1 && isFirst)
            {
               if(Point.distance(_loc2_,new Point(728,188)) < 100 && !hitOver["h_2"])
               {
                  hitOver["h_2"] = true;
                  firstNearAni_mc.visible = false;
                  firstNearAni_mc.gotoAndStop(1);
                  secondNearAni_mc.visible = true;
                  secondNearAni_mc.gotoAndPlay(2);
                  MapManager.currentMap.spaceLevel.visible = false;
                  secondNearAni_mc.addEventListener(Event.ENTER_FRAME,onSecondNear);
                  ++hitNum;
               }
            }
            else if(hitNum == 2 && isSecond)
            {
               if(Point.distance(_loc2_,new Point(hitNpc_mc.x,hitNpc_mc.y)) < 100 && !hitOver["h_3"])
               {
                  hitOver["h_3"] = true;
                  hitNum = 0;
                  showCartoon();
                  hitNpc_mc.visible = false;
               }
            }
         }
      }
      
      private static function onFirstNear(param1:Event) : void
      {
         var e:Event = param1;
         if(firstNearAni_mc.currentFrame == firstNearAni_mc.totalFrames)
         {
            isFirst = true;
            firstNearAni_mc.removeEventListener(Event.ENTER_FRAME,onFirstNear);
            NpcDialog.show(NPC.SEER,["我不会伤害你的……"],["再尝试靠近看看！"],[function():void
            {
               MapManager.currentMap.spaceLevel.visible = true;
               MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrameHandler);
            }]);
         }
      }
      
      private static function onSecondNear(param1:Event) : void
      {
         var e:Event = param1;
         if(secondNearAni_mc.currentFrame == secondNearAni_mc.totalFrames)
         {
            isSecond = true;
            hitNpc_mc.visible = true;
            secondNearAni_mc.gotoAndStop(secondNearAni_mc.totalFrames);
            secondNearAni_mc.visible = false;
            secondNearAni_mc.removeEventListener(Event.ENTER_FRAME,onSecondNear);
            NpcDialog.show(NPC.SEER,["你站的位置太危险了，快下桥来！！！"],["慢慢走过去……"],[function():void
            {
               MapManager.currentMap.spaceLevel.visible = true;
               MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrameHandler);
            }]);
         }
      }
      
      private static function showCartoon() : void
      {
         CartoonManager.play(ClientConfig.getFullMovie("task616_2"),endNpcDialog);
      }
      
      private static function endNpcDialog() : void
      {
         NpcDialog.show(NPC.SEER,["黑色的小家伙……是我……如果我不靠近你可能也不会掉下去了……"],["希望奇迹会发生！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task616_3"),function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task616_5"),function():void
               {
                  endTask();
               });
            });
         }]);
      }
      
      private static function endTask() : void
      {
         TasksManager.complete(TaskController_616.TASK_ID,3,function(param1:Boolean):void
         {
            if(hitNpc_mc)
            {
               hitNpc_mc.visible = false;
            }
            DisplayUtil.removeForParent(bornTimeOver_mc);
            DisplayUtil.removeForParent(allMonsters_mc);
            Task619.initTask_484(_map);
            showMap484Game(true);
         });
      }
      
      private static function removeEvent() : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalk);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,onWalkEnd);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrameHandler);
         if(pourAni_mc)
         {
            pourAni_mc.removeEventListener(Event.ENTER_FRAME,onPourAniEnterFrame);
         }
         if(waterDegree_mc)
         {
            waterDegree_mc.removeEventListener(Event.ENTER_FRAME,onWaterDegreeEnterFrame);
         }
         if(shuizhu_mc)
         {
            shuizhu_mc.removeEventListener(MouseEvent.CLICK,onShuizhuClick);
         }
         if(water_mc1)
         {
            water_mc1.removeEventListener(Event.ENTER_FRAME,onWater1EnterFrame);
         }
         if(water_mc2)
         {
            water_mc2.removeEventListener(Event.ENTER_FRAME,onWater2EnterFrame);
         }
         if(water_mc3)
         {
            water_mc3.removeEventListener(Event.ENTER_FRAME,onWater3EnterFrame);
         }
         if(water_mc4)
         {
            water_mc4.removeEventListener(Event.ENTER_FRAME,onWater4EnterFrame);
         }
      }
      
      public static function destroy() : void
      {
         ToolBarController.showOrHideAllUser(true);
         hitNum = 0;
         hitChildNum = 0;
         hitOver = {};
         footMarkNum = 0;
         rubFootMarkNum = 0;
         haveInteractive = false;
         isFirst = isSecond = false;
         footMark_mc = null;
         MapManager.currentMap.spaceLevel.visible = true;
         closeFalseNPc();
         DisplayUtil.removeForParent(bornTimeOver_mc);
         DisplayUtil.removeForParent(firstNearAni_mc);
         DisplayUtil.removeForParent(secondNearAni_mc);
         DisplayUtil.removeForParent(allMonsters_mc);
         DisplayUtil.removeForParent(pourAni_mc);
         DisplayUtil.removeForParent(bornTimeOver_mc);
         if(leafTimer)
         {
            leafTimer.stop();
            leafTimer.removeEventListener(TimerEvent.TIMER,onLeafTime);
            leafTimer = null;
         }
         if(bornTimer)
         {
            bornTimer.removeEventListener(TimerEvent.TIMER,onBornTime);
         }
         removeEvent();
         DisplayUtil.removeForParent(_falseNpc);
      }
      
      override public function hideInMap(param1:BaseMapProcess) : void
      {
         if(MapManager.currentMap.id == 484)
         {
            _map = param1;
            myTree_mc = _map.conLevel["myTree_mc"];
            pourAni_mc = _map.animatorLevel["pourAni_mc"];
            waterDegree_mc = _map.conLevel["waterDegree_mc"];
            bornBar_mc = _map.conLevel["bornBar_mc"];
            bornTimeOver_mc = _map.animatorLevel["bornTimeOver_mc"];
            allMonsters_mc = _map.conLevel["allMonsters_mc"];
            firstNearAni_mc = _map.animatorLevel["firstNearAni_mc"];
            secondNearAni_mc = _map.animatorLevel["secondNearAni_mc"];
            hitNpc_mc = _map.conLevel["hitNpc_mc"];
            water_mc1 = _map.conLevel["mc1"];
            water_mc2 = _map.conLevel["mc2"];
            water_mc3 = _map.conLevel["mc3"];
            water_mc4 = _map.conLevel["mc4"];
            shuizhu_mc = _map.conLevel["shuizhu_mc"];
            hideAllWater();
            water_mc1.visible = true;
            hitNpc_mc.visible = false;
            firstNearAni_mc.gotoAndStop(1);
            secondNearAni_mc.gotoAndStop(1);
            secondNearAni_mc.visible = false;
            firstNearAni_mc.visible = false;
            bornBar_mc.visible = false;
            waterDegree_mc.visible = false;
            bornTimeOver_mc.visible = false;
            allMonsters_mc.visible = false;
         }
      }
      
      override public function initForMap(param1:BaseMapProcess) : void
      {
         if(MapManager.currentMap.id == 484)
         {
            initTask_484(param1);
         }
      }
      
      override public function destoryForMap() : void
      {
         if(MapManager.currentMap.id == 484)
         {
            destroy();
         }
         _map = null;
      }
   }
}
