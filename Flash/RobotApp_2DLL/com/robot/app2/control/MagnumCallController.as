package com.robot.app2.control
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MagnumCallController
   {
      
      private static var taskId:uint = 1421;
      
      private static var _map:BaseMapProcess;
      
      public static var itemValue:uint;
      
      private static var _func:Function;
       
      
      public function MagnumCallController()
      {
         super();
      }
      
      private static function get taskState() : uint
      {
         return TasksManager.getTaskStatus(taskId);
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["taskmc"];
      }
      
      public static function stepForMap10116() : void
      {
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(taskId,function(param1:Array):void
            {
               if(!param1[0])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  startStep();
               }
            });
         }
      }
      
      public static function stepForMap10115(param1:BaseMapProcess, param2:Function) : void
      {
         var map:BaseMapProcess = param1;
         var func:Function = param2;
         _map = map;
         _func = func;
         if(taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(taskId,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  MainManager.selfVisible = false;
                  ToolBarController.showOrHideAllUser(false);
                  taskMC.buttonMode = true;
                  taskMC.addEventListener(MouseEvent.CLICK,step1);
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
      
      public static function initTask() : void
      {
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.nick + ",据说派特博士有一个神奇的发现，他一直在找你，想让你帮他去确认一下呢！"],["哈！什么神奇的发现！船长，这个任务就交给我吧！","船长大人我只是来问候你一下！"],[function():void
         {
            TasksManager.accept(taskId,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               MapManager.changeMap(5);
            });
         }]);
      }
      
      private static function startStep() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130308_262"),function():void
         {
            NpcDialog.show(NPC.DOCTOR,["不错！传说在龙族中有这样一个奇异的成员，它平时都是在睡梦之中，默默的守卫着谜域之门！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["它就是梦龙吗？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.DOCTOR,["是的！传说当有人踏入谜域之门时，召唤梦龙的时机就成熟了，只要找到梦境晶石——"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SEER,["然后呢？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.DOCTOR,["记录到这里就没了，这本书太陈旧了，后面的记录给老鼠吃掉了。"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SEER,["……"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.DOCTOR,["不要灰心，我相信龙族那边一定有线索，你就去哈莫星看看吧！"],["好嘞！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130308_2223"),function():void
                                 {
                                    TasksManager.complete(taskId,0,function(param1:Boolean):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeLocalMap(10115);
                                       }
                                    });
                                 });
                              }]);
                           });
                        });
                     });
                  });
               });
            });
         },false);
      }
      
      private static function step1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,step1);
         AnimateManager.playMcAnimate(taskMC,1,"mc1",function():void
         {
            taskMC.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               var e:MouseEvent = param1;
               taskMC.removeEventListener(MouseEvent.CLICK,arguments.callee);
               AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["阿莫雷特，你知道梦龙召唤的事情吗?"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.HAMO_LEITE,["唔，怎么，难道说召唤梦龙的时机已经成熟了吗?"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SEER,["对呀对呀！有人踏入了谜域，派特博士说可以召唤梦龙，不过需要梦龙晶石什么的！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.HAMO_LEITE,["梦龙晶石据说要在龙族秘境采集龙晶才有机会碰到，你去试一下吧！"],null,null,false,function():void
                           {
                              taskMC.gotoAndStop(3);
                              taskMC.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                              {
                                 var e:MouseEvent = param1;
                                 taskMC.removeEventListener(MouseEvent.CLICK,arguments.callee);
                                 SocketConnection.send(CommandID.MAGNUM_GETSTORE);
                                 AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                                 {
                                    taskMC.gotoAndStop(3);
                                    ModuleManager.showModule(ClientConfig.getTaskModule("Task1421Panel"),"正在打开",endStep);
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function endStep() : void
      {
         taskMC.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
         {
            var e:MouseEvent = param1;
            taskMC.removeEventListener(MouseEvent.CLICK,arguments.callee);
            if(itemValue >= 5)
            {
               NpcDialog.show(NPC.SAIXIAOXI,["哈，终于采集够5块梦龙晶石了，我们开始召唤仪式吧！"],null,null,false,function():void
               {
                  taskMC.gotoAndStop(5);
                  _map.conLevel["MagnumBtn"].addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                  {
                     ModuleManager.showModule(ClientConfig.getTaskModule("MagnumCallPanel"),"正在打开",getPet);
                  });
               });
            }
            else
            {
               SocketConnection.send(CommandID.MAGNUM_GETSTORE);
               AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
               {
                  taskMC.gotoAndStop(3);
                  ModuleManager.showModule(ClientConfig.getTaskModule("Task1421Panel"),"正在打开",endStep);
               });
            }
         });
      }
      
      private static function getPet() : void
      {
         _map.conLevel["MagnumBtn"].removeEventListener(MouseEvent.CLICK,arguments.callee);
         AnimateManager.playMcAnimate(taskMC,6,"mc6",function():void
         {
            TasksManager.complete(taskId,1,function(param1:Boolean):void
            {
               if(param1)
               {
                  MainManager.selfVisible = true;
                  ToolBarController.showOrHideAllUser(true);
                  destroy();
                  if(_func != null)
                  {
                     _func();
                  }
               }
            });
         });
      }
      
      public static function destroy() : void
      {
         if(MapManager.currentMap.id == 10115)
         {
            if(Boolean(_map) && Boolean(_map.conLevel["taskmc"]))
            {
               _map.conLevel["taskmc"].removeEventListener(MouseEvent.CLICK,step1);
               _map.conLevel["taskmc"].removeEventListener(MouseEvent.CLICK,arguments.callee);
               DisplayUtil.removeForParent(_map.conLevel["taskmc"]);
            }
            if(Boolean(_map) && Boolean(_map.conLevel["MagnumBtn"]))
            {
               _map.conLevel["MagnumBtn"].removeEventListener(MouseEvent.CLICK,arguments.callee);
            }
            _map = null;
         }
      }
   }
}
