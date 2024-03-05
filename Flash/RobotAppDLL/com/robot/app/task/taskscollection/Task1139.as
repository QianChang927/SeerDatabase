package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1139
   {
      
      public static const TASK_ID:uint = 1139;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1139()
      {
         super();
      }
      
      public static function initTaskFor698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(113);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(113);
               }
            });
         }
      }
      
      public static function initTaskFor748(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  taskMC.buttonMode = true;
                  taskMC.addEventListener(MouseEvent.CLICK,initStep1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep3();
               }
               else if(Boolean(param1[3]) && !param1[4])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep4();
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
      
      private static function initStep1(param1:MouseEvent) : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 31
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function fakeStoneClickHandler(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         (_map.conLevel["fakeStone"] as MovieClip).visible = false;
         (_map.conLevel["fakeStone"] as MovieClip).buttonMode = false;
         _map.conLevel["fakeStone"].mouseEnabled = false;
         _map.conLevel["fakeStone"].mouseChildren = false;
         (_map.conLevel["fakeStone"] as MovieClip).removeEventListener(MouseEvent.CLICK,fakeStoneClickHandler);
         ModuleManager.showModule(ClientConfig.getAppModule("SkyDoorInfoPanel"),"正在打开面板...",true);
      }
      
      private static function walkEndHandler(param1:RobotEvent) : void
      {
         MainManager.actorModel.addEventListener(RobotEvent.WALK_END,walkEndHandler);
         ModuleManager.showModule(ClientConfig.getAppModule("SkyDoorInfoPanel"),"正在打开面板...",true);
      }
      
      public static function initStep1GoOn() : void
      {
         TasksManager.complete(TASK_ID,1,function(param1:Boolean = true):void
         {
            if(param1)
            {
               initStep2();
            }
         });
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(9);
         _map.conLevel["fourDiamond"].visible = true;
         addEvent(1);
      }
      
      private static function initStep2GoOn() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 20
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function addEvent(param1:uint) : void
      {
         switch(param1)
         {
            case 1:
               CommonUI.addYellowArrow(_map.conLevel,235,227,45);
               break;
            case 2:
               CommonUI.addYellowArrow(_map.conLevel,124,79,225);
               break;
            case 3:
               CommonUI.addYellowArrow(_map.conLevel,810,76,45);
               break;
            case 4:
               CommonUI.addYellowArrow(_map.conLevel,788,298,45);
         }
         (_map.conLevel["fourDiamond"]["diamond_" + param1] as MovieClip).buttonMode = true;
         (_map.conLevel["fourDiamond"]["diamond_" + param1] as MovieClip).addEventListener(MouseEvent.CLICK,diamondClickHandler);
      }
      
      private static function removeEvent(param1:uint) : void
      {
         CommonUI.removeYellowArrow(_map.conLevel);
         (_map.conLevel["fourDiamond"]["diamond_" + param1] as MovieClip).buttonMode = false;
         (_map.conLevel["fourDiamond"]["diamond_" + param1] as MovieClip).removeEventListener(MouseEvent.CLICK,diamondClickHandler);
      }
      
      private static function diamondClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:uint = uint((param1.target as MovieClip).name.split("_")[1]);
         removeEvent(_loc2_);
         _map.conLevel["door_" + _loc2_].gotoAndStop(2);
         _map.conLevel["fourDiamond"]["diamond_" + _loc2_].gotoAndStop(2);
         if(_loc2_ < 4)
         {
            addEvent(_loc2_ + 1);
         }
         else
         {
            initStep2GoOn();
         }
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(17);
         _map.conLevel["door_1"].visible = true;
         _map.conLevel["door_2"].visible = true;
         _map.conLevel["door_3"].visible = true;
         _map.conLevel["door_4"].visible = true;
         _map.conLevel["door_5"].visible = true;
         NpcDialog.show(NPC.SADUOLANI,["尤尼卡大人，看来你的脸色不是很好看哦！"],["你给我住嘴！"],[function():void
         {
            NpcDialog.show(NPC.YOUNIKA,["你可别忘了，他和我的实力非常接近，但是这家伙不好惹，一旦激怒了他，后果非同小可！"],["还记得刚开始的时候！"],[function():void
            {
               CartoonManager.play(ClientConfig.getFullMovie("task1139_0"),function():void
               {
                  NpcDialog.show(NPC.SADUOLANI,["想不到恶魔旋涡还有如此强大的将领存在，我们还是离他远点的比较好！"],["呵呵，以后有的是机会！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["萨多拉尼，我们这次来的目的就是找你，仙女龙萨帕克的伤势你忘记了吗？"],["你们是来报仇的啊！"],[function():void
                     {
                        NpcDialog.show(NPC.YOUNIKA,["就你们几个还想报仇，别说笑话了好吗？"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                           {
                              NpcDialog.show(NPC.MAIERSI,["上次是你们从海盗手中将我拯救出来，这次就当我还你们一个人情！儿子，我们一起战斗！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.YOUNIKA,["萨多拉尼，这里就交给你了！据说幻影星最有价值的就是幻影宝石，我很想见识见识！"],["不...幻影宝石不属于你！"],[function():void
                                 {
                                    NpcDialog.show(NPC.YOUNIKA,["哈哈哈，现在不是，但不代表永远不是！"],["我不会让你离开这里的！"],[function():void
                                    {
                                       AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1139_4"),function():void
                                       {
                                          TasksManager.complete(TASK_ID,3,function(param1:Boolean = true):void
                                          {
                                             if(param1)
                                             {
                                                initStep4();
                                             }
                                          });
                                       });
                                    }]);
                                 }]);
                              });
                           });
                        });
                     }]);
                  }]);
               });
            }]);
         }]);
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(18);
         NpcDialog.show(NPC.YOUNIKA,["迈尔斯，今天算你们走运，不过圣灵峰我一定去一次！萨多拉尼你可要好好准备一下！"],["哈哈，没问题！"],[function():void
         {
            NpcDialog.show(NPC.MAIERSI,["尤尼卡，如果你敢对圣灵峰打什么主意，我保证你有来无回！不信你可以来试试！"],["哈哈，口气不小！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,18,"mc",function():void
               {
                  NpcDialog.show(NPC.SADUOLANI,["回去给我带个口信给萨帕克，想报仇就让她亲自来找我！我随时奉陪！"],["你..."],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,19,"mc",function():void
                     {
                        NpcDialog.show(NPC.MAIERSI,["不好，圣灵峰现在面临最大的挑战，我该回去保卫我的领域！伙伴们，你们是最勇敢的战士！结识你们是我的荣幸！"],["迈尔斯，守护圣灵峰也是我们的责任！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,20,"mc",function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["我这就回去通知赛尔号上的队友，这次我们一定要保卫圣灵峰！"],["恩恩，咱们相约圣灵峰！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,21,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.SEER,["尤尼卡、恶魔旋涡还有那个神秘的黑影，等待我们的将是无尽的考验！"],["我们这次的探险能顺利吗？"],[function():void
                                    {
                                       TasksManager.complete(TASK_ID,4,function(param1:Boolean = true):void
                                       {
                                          destroy();
                                       });
                                    }]);
                                 });
                              }]);
                           });
                        }]);
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 748 && Boolean(_map.conLevel["task1139MC"]))
         {
            return _map.conLevel["task1139MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,walkEndHandler);
         _map.conLevel["door_1"].visible = true;
         _map.conLevel["door_2"].visible = true;
         _map.conLevel["door_3"].visible = true;
         _map.conLevel["door_4"].visible = true;
         _map.conLevel["door_5"].visible = true;
         _map.conLevel["fourDiamond"].visible = false;
         (_map.conLevel["fakeStone"] as MovieClip).removeEventListener(MouseEvent.CLICK,fakeStoneClickHandler);
         if(MapManager.currentMap.id == 748)
         {
            KTool.showMapAllPlayerAndMonster();
            if(taskMC)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
