package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.PetModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task746
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      private static const TASK_ID:uint = 746;
      
      private static var _pet:PetModel;
       
      
      public function Task746()
      {
         super();
      }
      
      public static function initTaskFor676(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["task746"].visible = false;
         _map.conLevel["mierClick"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               beforeTask();
               break;
            case TasksManager.ALR_ACCEPT:
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(TASK_ID,checkStepFor676);
               break;
            case TasksManager.COMPLETE:
         }
      }
      
      public static function initTaskFor669(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.topLevel["task746"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(TASK_ID,checkStepFor669);
               break;
            case TasksManager.COMPLETE:
         }
      }
      
      public static function initTaskFor668(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["task746"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(TASK_ID,checkStepFor668);
               break;
            case TasksManager.COMPLETE:
         }
      }
      
      public static function initTaskFor672(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["task746"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(TASK_ID,checkStepFor672);
               break;
            case TasksManager.COMPLETE:
         }
      }
      
      public static function initTaskFor671(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["task746"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(TASK_ID,checkStepFor671);
               break;
            case TasksManager.COMPLETE:
         }
      }
      
      public static function initTaskFor677(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["task746"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               ToolBarController.showOrHideAllUser(false);
               TasksManager.getProStatusList(TASK_ID,checkStepFor677);
               break;
            case TasksManager.COMPLETE:
         }
      }
      
      private static function checkStepFor668(param1:Array) : void
      {
         if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && !param1[5])
         {
            startStep4();
         }
      }
      
      private static function checkStepFor669(param1:Array) : void
      {
         if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
         {
            startStep3();
         }
      }
      
      private static function checkStepFor671(param1:Array) : void
      {
         if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
         {
            startStep2();
         }
      }
      
      private static function checkStepFor672(param1:Array) : void
      {
         if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
         {
            startStep1();
         }
      }
      
      private static function checkStepFor676(param1:Array) : void
      {
         if(!param1[0])
         {
            startTask();
         }
         else if(Boolean(param1[0]) && !param1[1])
         {
            startStep0();
         }
      }
      
      private static function checkStepFor677(param1:Array) : void
      {
         if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && Boolean(param1[5]) && !param1[6])
         {
            startStep5();
         }
      }
      
      private static function beforeTask() : void
      {
         _map.conLevel["task746"].visible = true;
         _map.conLevel["mierClick"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["task746"],1,"mc1",function():void
         {
            _map.conLevel["mierClick"].buttonMode = true;
            _map.conLevel["mierClick"].addEventListener(MouseEvent.CLICK,onClickMier);
         });
      }
      
      private static function onClickMier(param1:Event) : void
      {
         var event:Event = param1;
         NpcDialog.show(NPC.MIER,["为了光明异能王，也为了这个异能星，我们一定要守护这里，面对暗黑异能王，我们永不退缩！！"],["！恶魔封印！","我也相信邪不能胜正！"],[function():void
         {
            _map.conLevel["mierClick"].buttonMode = false;
            _map.conLevel["mierClick"].removeEventListener(MouseEvent.CLICK,onClickMier);
            TasksManager.accept(TASK_ID,startTask);
         },function():void
         {
         }]);
      }
      
      private static function startTask(param1:Boolean = true) : void
      {
         var bool:Boolean = param1;
         if(!bool)
         {
            return;
         }
         _map.conLevel["task746"].visible = true;
         _map.conLevel["task746"].gotoAndStop(2);
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.MIER,["暗黑异能王，它竟然再次苏醒，难道这就是宿命？是守护一族的命运吗？如果是这样，那我必须接受！！！"],["米尔它究竟想做什么呢？"],[function():void
         {
            NpcDialog.show(NPC.GUERZHADI,["哈哈哈！别做梦了，实话告诉你吧！只要暗黑异能王的四大守护全部苏醒，异能王真身就一定属于我们！"],["可恶，我一定要阻止你们！！！！"],[function():void
            {
               AnimateManager.playMcAnimate(_map.conLevel["task746"],3,"mc3",function():void
               {
                  NpcDialog.show(NPC.SEER,["不好，毁灭者已经有所举动了，看来一定要想办法找到雷伊他们，只有他们才能帮助这个星球！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.MIER,["但是现在我们能做什么呢？不如我们先去寻找暗黑赛尔的下落吧！说不定他会什么办法！"],["什么！你要找暗黑赛尔，他可是我们的敌人啊！"],[function():void
                     {
                        TasksManager.complete(TASK_ID,0,startStep0);
                     }]);
                  });
               });
            }]);
         }]);
      }
      
      private static function startStep0(param1:Boolean = true) : void
      {
         var bool:Boolean = param1;
         if(!bool)
         {
            return;
         }
         _map.conLevel["task746"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["task746"],4,"mc4",function():void
         {
            NpcDialog.show(NPC.DINUOEN,["哼哼！你们都想错了，暗黑异能王的目的没这么简单，其实它正在唤醒这些曾经的旧将，利用它们的强大能量能控制整个异能星了！"],["咦！你是？？？"],[function():void
            {
               NpcDialog.show(NPC.MIER,["它叫迪诺恩，在我们异能精灵中迪诺恩拥有未卜先知的能力，一般它很少会出现，但是如果一旦出现，那就说明异能星要出大事了！"],["哇！难道是先知？"],[function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["task746"],5,"mc5",function():void
                  {
                     NpcDialog.show(NPC.DINUOEN,["让我指一条明道给你们吧！想破坏暗黑异能王的计划只有一个办法，那就一定让它其余三个手下在没有苏醒前就永眠地底，并且获得它们的恶魔水晶！"],["恶魔水晶？但是它们都在哪里呢？"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_746_1"),function():void
                        {
                           NpcDialog.show(NPC.DINUOEN,["不过….相信只有他可以帮助到你了，去找暗黑赛尔吧！0xff0000他就在能量控制室！0xffffff希望你们一定要齐心啊！"],["太好了，我也真想找他，决不会让它一个人战斗的！"],[function():void
                           {
                              NpcDialog.show(NPC.DINUOEN,["赛尔，那我们抓紧时间吧！找到暗黑赛尔，消灭暗黑异能王的爪牙！"],["好，我们这就去能量控制室！"],[function():void
                              {
                                 TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                                 {
                                    if(!param1)
                                    {
                                       return;
                                    }
                                    MapManager.changeMap(672);
                                 });
                              }]);
                           }]);
                        });
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function startStep1() : void
      {
         var info:PetShowInfo;
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["task746"].visible = true;
         info = new PetShowInfo();
         info.petID = 919;
         _pet = new PetModel(MainManager.actorModel);
         _pet.show(info);
         _pet.mouseEnabled = false;
         _pet.mouseChildren = false;
         AnimateManager.playMcAnimate(_map.conLevel["task746"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["还好来得及，终于找到你了暗黑！你的信件我已经看过了，放心，我绝不会让你一个人去冒险的，我们生死与共！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.ANHEI_SEER,["恩，那好吧！接下来我们要做的可是非常危险的事情，你做好准备了吗？"],["准备好了！随时都可以出发！"],[function():void
               {
                  NpcDialog.show(NPC.ANHEI_SEER,["恩，那我们的第一站就是异能冰窟，在那里我们必须击败异能王的第一个爪牙！"],["好，立刻出发！"],[function():void
                  {
                     TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                     {
                        if(!param1)
                        {
                           return;
                        }
                        MapManager.changeMap(671);
                     });
                  }]);
               }]);
            });
         });
      }
      
      private static function startStep2() : void
      {
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         _map.conLevel["task746"].visible = true;
         _map.conLevel["arrow746"].visible = true;
         _map.conLevel["light"].visible = true;
         _map.conLevel["light"].buttonMode = true;
         _map.conLevel["light"].addEventListener(MouseEvent.CLICK,onClickLight);
      }
      
      private static function onClickLight(param1:Event) : void
      {
         var event:Event = param1;
         _map.conLevel["light"].buttonMode = false;
         _map.conLevel["light"].removeEventListener(MouseEvent.CLICK,onClickLight);
         DisplayUtil.removeForParent(_map.conLevel["arrow746"]);
         AnimateManager.playMcAnimate(_map.conLevel["task746"],2,"mc2",function():void
         {
            NpcDialog.show(NPC.ANHEI_SEER,["不好，再不阻止它就来不及了，一旦苏醒后果将会不堪设想！要想办阻止它才行！"],["那我们该怎么办呢？"],[function():void
            {
               NpcDialog.show(NPC.ANHEI_SEER,["快看，顶部有冰锥，相信利用它应该可以有所作为！"],["快射击冰锥"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_746_2"),function():void
                  {
                     DisplayUtil.removeForParent(_map.conLevel["task746"]);
                     NpcDialog.show(NPC.SEER,["耶，太棒了！这下叫你们就无法祸害异能星了，哈哈！暗黑，快把恶魔水晶收起来吧！"],["我们快去异能山谷，解决下一个！"],[function():void
                     {
                        TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
                        {
                           if(!param1)
                           {
                              return;
                           }
                           MapManager.changeMap(669);
                        });
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function startStep3() : void
      {
         OgreController.isShow = false;
         ToolBarController.showOrHideAllUser(false);
         _map.topLevel["task746"].visible = true;
         AnimateManager.playMcAnimate(_map.topLevel["task746"],1,"mc1",function():void
         {
            _map.conLevel["guidemc746"].visible = true;
            _map.topLevel["stone"].buttonMode = true;
            _map.topLevel["stone"].addEventListener(MouseEvent.CLICK,onClickStone);
         });
      }
      
      private static function onClickStone(param1:Event) : void
      {
         var event:Event = param1;
         DisplayUtil.removeForParent(_map.conLevel["guidemc746"]);
         _map.topLevel["stone"].buttonMode = false;
         _map.topLevel["stone"].removeEventListener(MouseEvent.CLICK,onClickStone);
         AnimateManager.playMcAnimate(_map.topLevel["task746"],2,"mc2",function():void
         {
            NpcDialog.show(NPC.ANHEI_SEER,["哼哼，看来不用我们找，这些可恶的家伙就自动现身了，太好了，看我不一个个解决你们！"],["赛尔我们一起上！"],[function():void
            {
               _map.depthLevel["dragon"].visible = true;
               AnimateManager.playMcAnimate(_map.depthLevel["dragon"],159,"",function():void
               {
                  NpcDialog.show(NPC.HAMO,["赛尔，让我来对付它！！！雷伊他们已经知道异能星陷入危机，他们很快就会来的！"],["啊！哈莫怎么来了！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_746_3"),function():void
                     {
                        DisplayUtil.removeForParent(_map.topLevel["task746"]);
                        NpcDialog.show(NPC.SEER,["哇！那一定是龙王波，哈莫好强啊！这下又多了一块恶魔水晶！"],["我们赶快去异能部落吧！"],[function():void
                        {
                           TasksManager.complete(TASK_ID,4,function(param1:Boolean):void
                           {
                              if(!param1)
                              {
                                 return;
                              }
                              MapManager.changeMap(668);
                           });
                        }]);
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function startStep4() : void
      {
         _map.conLevel["task746"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["task746"],1,"mc1",function():void
         {
            _map.conLevel["guideMC746"].visible = true;
            _map.conLevel["pillar"].visible = true;
            _map.conLevel["pillar"].buttonMode = true;
            _map.conLevel["pillar"].addEventListener(MouseEvent.CLICK,onClickPillar);
         });
      }
      
      private static function onClickPillar(param1:Event) : void
      {
         var event:Event = param1;
         DisplayUtil.removeForParent(_map.conLevel["guideMC746"]);
         _map.conLevel["pillar"].removeEventListener(MouseEvent.CLICK,onClickPillar);
         DisplayUtil.removeForParent(_map.conLevel["pillar"]);
         AnimateManager.playMcAnimate(_map.conLevel["task746"],2,"mc2",function():void
         {
            NpcDialog.show(NPC.ANHEI_SEER,["就剩最后一个了，这样你们的计划将会彻底破灭！"],null,null,false,function():void
            {
               _map.depthLevel["leiyi"].visible = true;
               AnimateManager.playMcAnimate(_map.depthLevel["leiyi"],1,"mc1",function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_746_4"),function():void
                  {
                     _map.conLevel["task746"].gotoAndStop(4);
                     NpcDialog.show(NPC.LEIYI,["异能星已经陷入危机，我现在就召集战神联盟和其他精灵，我发誓一定要拯救异能星！"],["雷神好帅啊！"],[function():void
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["task746"],3,"mc3",function():void
                        {
                           NpcDialog.show(NPC.DINUOEN,["我果然没有看错人，你们一定就是异能星的救世主！不，你们是整个星系乃至宇宙的救世主！相信你们一定拿到了恶魔水晶，快去封印之境与光明异能王汇合吧！"],["恩，我们这就去！"],[function():void
                           {
                              TasksManager.complete(TASK_ID,5,function(param1:Boolean):void
                              {
                                 if(!param1)
                                 {
                                    return;
                                 }
                                 MapManager.changeMap(677);
                              });
                           }]);
                        });
                     }]);
                  });
               });
            });
         });
      }
      
      private static function startStep5() : void
      {
         _map.conLevel["task746"].visible = true;
         _map.conLevel["yinengBoss"].visible = false;
         AnimateManager.playMcAnimate(_map.conLevel["task746"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.GUERZHADI,["哼哼！你已经不是当年的异能王了，现在你的实力只有从前的一半，看你还能有多强！"],["难道你不知道恶魔封印的传说吗？"],[function():void
            {
               NpcDialog.show(NPC.SEER,["什么，那些黑影不是都已经被我们给消灭了吗？怎么还会出现在这里！难道是幻觉？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.GUERZHADI,["哼哼，让你看看我的实力！！！小心啊！异能王……"],["什么！合体？"],[function():void
                  {
                     AnimateManager.playMcAnimate(_map.conLevel["task746"],2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.GUERZHADI,["啊哈哈哈！异能王接招吧！今天是你生存在异能星上的最后时刻！受死吧！"],["我绝不会输给你这样的对手！"],[function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["task746"],3,"mc3",function():void
                           {
                              NpcDialog.show(NPC.GUERZHADI,["别高兴的太早，等到暗黑异能王降临的时候，就是你们灭亡的时刻！啊哈哈哈！"],null,null,false,function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_746_5"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,6,taskComplete);
                                 });
                              });
                           });
                        }]);
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function taskComplete(param1:Boolean = true) : void
      {
         OgreController.isShow = true;
         ToolBarController.showOrHideAllUser(true);
      }
      
      public static function destroy() : void
      {
         if(Boolean(_map) && Boolean(_map.conLevel["mierClick"]))
         {
            _map.conLevel["mierClick"].removeEventListener(MouseEvent.CLICK,onClickMier);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["light"]))
         {
            _map.conLevel["light"].removeEventListener(MouseEvent.CLICK,onClickLight);
         }
         if(Boolean(_map) && Boolean(_map.topLevel["stone"]))
         {
            _map.topLevel["stone"].removeEventListener(MouseEvent.CLICK,onClickStone);
         }
         if(Boolean(_map) && Boolean(_map.conLevel["pillar"]))
         {
            _map.conLevel["pillar"].removeEventListener(MouseEvent.CLICK,onClickPillar);
         }
         OgreController.isShow = true;
         ToolBarController.showOrHideAllUser(true);
         if(_pet)
         {
            _pet.destroy();
            _pet = null;
         }
         _map = null;
      }
   }
}
