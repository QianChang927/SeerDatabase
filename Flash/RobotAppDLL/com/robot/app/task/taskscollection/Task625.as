package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_625;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.behavior.ChangeClothBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.utils.Timer;
   import org.taomee.utils.DisplayUtil;
   
   public class Task625
   {
      
      private static var _map:BaseMapProcess;
      
      private static var trident_mc:MovieClip;
      
      private static var firstClick:Boolean = true;
      
      private static var progressBar_mc:MovieClip;
      
      private static var myBar_mc:MovieClip;
      
      private static var timer:Timer;
      
      private static var hasClick:Boolean = false;
      
      private static var hasSetTime:Boolean = false;
      
      private static var bubble_mc:MovieClip;
      
      private static var sound:Sound;
      
      private static var chanel:SoundChannel;
      
      private static var allFish_mc:MovieClip;
      
      private static var fishNum:uint = 0;
      
      private static var myClothArr:Array;
      
      private static var myNickName:String;
      
      private static var doctorNpc:BasePeoleModel;
      
      private static var dragon_mc:MovieClip;
       
      
      public function Task625()
      {
         super();
      }
      
      public static function initTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task625_0"),function():void
         {
            MapManager.changeMap(442);
         });
      }
      
      public static function initTask_442(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         trident_mc = _map.conLevel["trident_mc"];
         progressBar_mc = _map.conLevel["progressBar_mc"];
         progressBar_mc.visible = false;
         myBar_mc = progressBar_mc["bar_mc"];
         allFish_mc = _map.conLevel["allFish_mc"];
         bubble_mc = _map.animatorLevel["bubble_mc"];
         dragon_mc = _map.conLevel["dragon_mc"];
         allFish_mc.visible = false;
         ToolBarController.showOrHideAllUser(false);
         if(TasksManager.getTaskStatus(TaskController_625.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            trident_mc.gotoAndStop(1);
            removeTaskMC();
         }
         else if(TasksManager.getTaskStatus(TaskController_625.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            hideMySelf();
            TasksManager.getProStatusList(TaskController_625.TASK_ID,function(param1:Array):void
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
            });
         }
         else if(TasksManager.getTaskStatus(TaskController_625.TASK_ID) == TasksManager.COMPLETE)
         {
            trident_mc.gotoAndStop(1);
            removeTaskMC();
         }
      }
      
      private static function hideMySelf() : void
      {
         if(MainManager.actorModel.nono)
         {
            MainManager.actorModel.hideNono();
         }
         var _loc1_:Array = [100354,100355,100356,100357];
         var _loc2_:UserInfo = new UserInfo();
         doctorNpc = new BasePeoleModel(_loc2_);
         doctorNpc.name = "派特博士";
         var _loc3_:Array = new Array();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc1_.length)
         {
            _loc3_.push(new PeopleItemInfo(_loc1_[_loc4_]));
            _loc4_++;
         }
         doctorNpc.execBehavior(new ChangeClothBehavior(_loc3_,false));
         MapManager.currentMap.depthLevel.addChild(doctorNpc);
         doctorNpc.x = 400;
         doctorNpc.y = 360;
         MainManager.actorModel.visible = false;
         MapManager.currentMap.spaceLevel.addEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
      }
      
      private static function onMouseDown(param1:MouseEvent) : void
      {
         var _loc2_:Point = new Point(param1.currentTarget.mouseX,param1.currentTarget.mouseY);
         doctorNpc.walkAction(_loc2_,false);
      }
      
      private static function startProOne() : void
      {
         doctorNpc.sprite.addChild(bubble_mc);
         bubble_mc.y = -doctorNpc.height - 68;
         bubble_mc.x -= 350;
         sound = MapManager.currentMap.libManager.getSound("Map442_energy_sound");
         chanel = sound.play(0,100);
         bubble_mc.gotoAndPlay(2);
         trident_mc.gotoAndStop(2);
         trident_mc.addEventListener(MouseEvent.CLICK,onTridentClick);
         trident_mc.buttonMode = true;
      }
      
      private static function onTridentClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(firstClick)
         {
            firstClick = false;
            NpcDialog.show(NPC.DOCTOR,["这块石碑上的三叉戟摇摇欲坠，似乎受到了某种神秘力量的召唤！"],["把它拔出来，看看会发生什么！"],[function():void
            {
            }]);
         }
         else
         {
            hasClick = true;
            progressBar_mc.visible = true;
            if(!hasSetTime)
            {
               setTimer();
               hasSetTime = true;
            }
         }
      }
      
      private static function setTimer() : void
      {
         if(!timer)
         {
            timer = new Timer(500);
         }
         timer.addEventListener(TimerEvent.TIMER,onTimeHandler);
         timer.start();
      }
      
      private static function onTimeHandler(param1:TimerEvent) : void
      {
         var e:TimerEvent = param1;
         if(hasClick)
         {
            if(myBar_mc.currentFrame < myBar_mc.totalFrames - 5)
            {
               myBar_mc.gotoAndStop(myBar_mc.currentFrame + 5);
            }
            else
            {
               clearTimer();
               myBar_mc.gotoAndStop(myBar_mc.totalFrames);
               progressBar_mc.visible = false;
               chanel.stop();
               AnimateManager.playMcAnimate(trident_mc,3,"mc3",function():void
               {
                  TasksManager.complete(TaskController_625.TASK_ID,0,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        trident_mc.gotoAndStop(1);
                        trident_mc.visible = false;
                        startProTwo();
                     }
                  });
               });
            }
         }
         else if(myBar_mc.currentFrame > 2)
         {
            myBar_mc.gotoAndStop(myBar_mc.currentFrame - 2);
         }
         else
         {
            myBar_mc.gotoAndStop(1);
         }
         hasClick = false;
      }
      
      private static function clearTimer() : void
      {
         if(timer)
         {
            timer.stop();
            timer.removeEventListener(TimerEvent.TIMER,onTimeHandler);
            timer = null;
         }
      }
      
      private static function startProTwo() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task625_1"),function():void
         {
            trident_mc.visible = false;
            allFish_mc.visible = true;
            dragon_mc.visible = false;
            NpcDialog.show(NPC.DOCTOR,["看样子只要正确使用这些金色鳞甲，那就可以激发远古鱼龙体内的潜能完成超进化了！"],["下一步！"],[function():void
            {
               NpcDialog.show(NPC.DOCTOR,["嗯！我赶紧收集一些拿回去实验！"],["收集鱼龙王鳞甲！"],[function():void
               {
                  findFiveFish();
               }]);
            }]);
         });
      }
      
      private static function findFiveFish() : void
      {
         var _loc3_:MovieClip = null;
         var _loc1_:uint = 5;
         var _loc2_:uint = 1;
         while(_loc2_ <= _loc1_)
         {
            _loc3_ = allFish_mc["fish" + _loc2_ + "_mc"];
            _loc3_.addEventListener(MouseEvent.CLICK,onFishClick);
            _loc3_.buttonMode = true;
            _loc2_++;
         }
      }
      
      private static function onFishClick(param1:MouseEvent) : void
      {
         var target_mc:MovieClip;
         var e:MouseEvent = param1;
         ++fishNum;
         target_mc = e.currentTarget as MovieClip;
         target_mc.removeEventListener(MouseEvent.CLICK,onFishClick);
         DisplayUtil.removeForParent(target_mc);
         SimpleAlarm.show("你已收集到" + fishNum + "/5块鱼龙王鳞甲！");
         if(fishNum == 5)
         {
            TasksManager.complete(625,1,function(param1:Boolean):void
            {
               startProThree();
            });
            fishNum = 0;
         }
      }
      
      private static function startProThree() : void
      {
         dragon_mc.visible = false;
         NpcDialog.show(NPC.DOCTOR,["散落在这里的鱼龙王鳞甲已经收集的差不多了！是离开的时候了。"],["回忆结束，返回实验室！"],[function():void
         {
            TasksManager.complete(625,2,function(param1:Boolean):void
            {
               MapManager.changeMap(5);
            });
         }]);
      }
      
      public static function removeTaskMC() : void
      {
         DisplayUtil.removeForParent(dragon_mc);
         DisplayUtil.removeForParent(allFish_mc);
         DisplayUtil.removeForParent(progressBar_mc);
         DisplayUtil.removeForParent(bubble_mc);
      }
      
      public static function destory() : void
      {
         sound = null;
         if(chanel)
         {
            chanel.stop();
            chanel = null;
         }
         fishNum = 0;
         removeTaskMC();
         MapManager.currentMap.spaceLevel.removeEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
      }
   }
}
