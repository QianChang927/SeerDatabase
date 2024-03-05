package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_1370;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1370
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function Task1370()
      {
         super();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["task1370mc"];
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(TaskController_1370.TASK_ID);
      }
      
      public static function initForMap741(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1370.TASK_ID,function(param1:Array):void
            {
               if(true == param1[0] && false == param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _map.topLevel.visible = false;
                  start_2();
               }
               else if(true == param1[2] && false == param1[3])
               {
                  destroy();
                  if(BufferRecordManager.getState(MainManager.actorInfo,527))
                  {
                     start_4Pro();
                  }
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      public static function initForMap812(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_1370.TASK_ID,function(param1:Array):void
            {
               if(true == param1[1] && false == param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _map.topLevel.visible = false;
                  start_3();
               }
               else if(true == param1[2] && false == param1[3])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  _map.topLevel.visible = false;
                  start_4();
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      private static function start_2() : void
      {
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,onOpenPanel);
      }
      
      private static function onOpenPanel(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SAIXIAOXI,["总部发来了通讯请求，我们看一下吧！"],null,null,false,function():void
         {
            ModuleManager.showModule(ClientConfig.getTaskModule("TaskInteractive_1370"));
         });
      }
      
      public static function start_2Pro() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1370_2_0"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1370_2"),function():void
            {
               TasksManager.complete(TaskController_1370.TASK_ID,TaskController_1370.TASK_STAGE_2,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     MapManager.changeMap(812);
                  }
               });
            },false);
         },false);
      }
      
      private static function start_3() : void
      {
         taskMc.gotoAndStop(1);
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,function():void
         {
            taskMc.buttonMode = false;
            taskMc.removeEventListener(MouseEvent.CLICK,arguments.callee);
            _playInteractiveMc(taskMc,2,5,function():void
            {
               taskMc.buttonMode = true;
               taskMc.addEventListener(MouseEvent.CLICK,function():void
               {
                  taskMc.buttonMode = false;
                  taskMc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                  taskMc.gotoAndStop(16);
                  start_3Pro();
               });
            });
         });
      }
      
      private static function start_3Pro() : void
      {
         var taskQuePro:TaskQuneProcessor = new TaskQuneProcessor();
         var dlg:Array = [[NPC.NASIQI_SUPER,["好调皮的小家伙，你们为什么要抓它？难道是想送给恶灵兽主人做点心么？"],null],[NPC.BIMOLA_NORMOL,["嘶嘶！这小个头，连塞牙缝都不够！"],null],[NPC.LAMOSI,["喵！为什么我一看见它就想打它呢？难道是因为它长的太像狗么？"],null],[NPC.ZOG,["几位大人有所不知啊！俗话说的好！虎父无犬子，额，这个家伙，偏偏就是犬子有虎父！它的爸爸非常的厉害……"],null],[NPC.ALLISON,["它爸爸就是大名鼎鼎的迈尔斯，我们见识过它的厉害，我们怕它帮助赛尔，所以把它儿子抓来做人质！"],null]];
         taskQuePro.addDialog(dlg);
         taskQuePro.addMapMv(taskMc,6,"mc6");
         taskQuePro.procesEndFun = function():void
         {
            _playInteractiveMc(taskMc,7,13,function():void
            {
               start_3Pro_1();
            });
         };
         taskQuePro.start();
      }
      
      private static function start_3Pro_1() : void
      {
         var taskQuePro:TaskQuneProcessor = new TaskQuneProcessor();
         var dlg:Array = [[NPC.ZOG,["……完了"],null],[NPC.ALLISON,["完了完了完了！这下子闯大祸了！"],null],[NPC.LAMOSI,["喵！你们两个蠢货，唧唧歪歪的说什么呢？"],null],[NPC.ALLISON,["拉摩斯大人，您闯祸了！"],null],[NPC.ZOG,["艾利逊！你委婉一点！"],null],[NPC.ALLISON,["我委婉了啊，你没注意我使用了礼貌用语“您”吗？"],["啊，没注意，这个“您”字儿用的好！"]],[NPC.LAMOSI,["我闯祸了？我闯了什么祸了？"],null]];
         taskQuePro.addDialog(dlg);
         taskQuePro.addMapMv(taskMc,14,"mc14");
         taskQuePro.procesEndFun = function():void
         {
            start_3Pro_2();
         };
         taskQuePro.start();
      }
      
      private static function start_3Pro_2() : void
      {
         var taskQuePro:TaskQuneProcessor = new TaskQuneProcessor();
         var dlg:Array = [[NPC.ZOG,["各，各位大人！我想起来基地还有点事！那什么我先走一步了！"],null]];
         taskQuePro.addDialog(dlg);
         taskQuePro.addMapMv(taskMc,15,"mc15");
         taskQuePro.procesEndFun = function():void
         {
            TasksManager.complete(TaskController_1370.TASK_ID,TaskController_1370.TASK_STAGE_3,function(param1:Boolean):void
            {
               if(param1)
               {
                  start_4();
               }
            });
         };
         taskQuePro.start();
      }
      
      private static function start_4() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1370_3"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1370_4"),function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,527,true);
               destroy();
               MapManager.changeMap(741);
            },false);
         });
      }
      
      public static function start_4Pro() : void
      {
         TasksManager.complete(TaskController_1370.TASK_ID,TaskController_1370.TASK_STAGE_4,function(param1:Boolean):void
         {
            if(param1)
            {
               destroy();
            }
         });
      }
      
      public static function destroy() : void
      {
         KTool.showMapAllPlayerAndMonster();
         if(_map)
         {
            _map.topLevel.visible = true;
            if(812 == MapManager.currentMap.id || 741 == MapManager.currentMap.id)
            {
               DisplayUtil.removeForParent(taskMc);
            }
            if(741 == MapManager.currentMap.id)
            {
               taskMc.removeEventListener(MouseEvent.CLICK,onOpenPanel);
            }
            _map = null;
         }
      }
      
      private static function _playInteractiveMc(param1:MovieClip, param2:uint = 1, param3:uint = 1, param4:Function = null) : void
      {
         var currentPos:uint = 0;
         var mc:MovieClip = param1;
         var startPos:uint = param2;
         var endPos:uint = param3;
         var callback:Function = param4;
         if(1 > startPos)
         {
            currentPos = startPos = 1;
         }
         else
         {
            currentPos = startPos;
         }
         if(endPos < startPos)
         {
            endPos = startPos;
         }
         mc.buttonMode = true;
         mc.addEventListener(MouseEvent.CLICK,function():void
         {
            var func:Function = null;
            func = arguments.callee;
            mc.buttonMode = false;
            AnimateManager.playMcAnimate(mc,currentPos,"mc" + currentPos,function():void
            {
               mc.buttonMode = true;
               ++currentPos;
               if(currentPos > endPos)
               {
                  mc.removeEventListener(MouseEvent.CLICK,func);
                  if(null != callback)
                  {
                     mc.buttonMode = false;
                     callback();
                  }
               }
            });
         });
      }
   }
}
