package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_925;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task925
   {
      
      public static var isInMap709:Boolean;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task925()
      {
         super();
      }
      
      public static function initForMap4() : void
      {
         initStep1();
      }
      
      public static function initForMap709(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         isInMap709 = true;
         if(TasksManager.getTaskStatus(TaskController_925.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_925.TASK_ID,function(param1:Array):void
            {
               ToolBarController.showOrHideAllUser(false);
               OgreController.isShow = false;
               if(Boolean(param1[1]) && !param1[2])
               {
                  initStep2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  initStep3();
               }
               else if(Boolean(param1[3]) && !param1[4])
               {
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
      
      private static function initStep1() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_925_dialogue"),function():void
         {
            NpcDialog.show(NPC.SEER,["罗杰船长，那我呢！我怎么办！这么严峻的时刻，我也想为赛尔号出一份力，拜托你了！！！！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SHIPER,["第五星系对我们来说还非常陌生，这次战役我们只许成功不能失败，等我先和雷蒙他们开完0xff0000 飞船会议 0xffffff再说吧！"],["那好吧…"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_925_1"),function():void
                  {
                     NpcDialog.show(NPC.SHIPER,["赛尔，我现在命令你召集赛小息他们，立刻前往巨石星击退海盗并且拯救巨石星！明白吗？"],["没问题！我们一定会完成使命的！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["哈哈！伙伴们这次我们又能大展拳脚了！真是太激动人心了！"],["出发！目的地巨石星！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_925_2"),function():void
                           {
                              TasksManager.complete(TaskController_925.TASK_ID,1,function():void
                              {
                                 MapManager.changeMap(709);
                              });
                           });
                        }]);
                     }]);
                  });
               }]);
            });
         },false);
      }
      
      private static function initStep2() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(1);
         taskMC.buttonMode = true;
         taskMC.addEventListener(MouseEvent.CLICK,onClick_2);
      }
      
      private static function onClick_2(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,onClick_2);
         taskMC.gotoAndStop(2);
         NpcDialog.show(NPC.SEER,["大家快看，那不是拉琪和拉妮吗？"],null,null,false,function():void
         {
            NpcDialog.show(NPC.ALUOBISI_1,["哈哈哈，欢迎来到巨石营地！今天我会让你们知道什么叫做真正的黑暗！"],["我们是不会让你得逞的！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  NpcDialog.show(NPC.KALULU,["拉琪、拉妮！你们坚持住啊！一定要想办法才行，否则它们一定撑不了多久的！"],["可恶的家伙！"],[function():void
                  {
                     NpcDialog.show(NPC.ALUOBISI_1,["今天你们就别想离开这里了！因为还有你们的“好朋友”也会来哦!哈哈哈！"],["什么，我们的好朋友？"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                        {
                           NpcDialog.show(NPC.SEER,["哼哼！两个蠢货终于出现了，你们果然是一伙的！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.ALLISON,["小子别嘴硬，快求饶吧！！说不定我还能饶你一命，啊哈哈哈！"],["你这是在搞笑吗？！！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.ZOG,["阿洛比斯，快点收拾这些小鬼吧！别耽误了我们原定的计划！"],["你们两个是在和我说话吗？"],[function():void
                                    {
                                       NpcDialog.show(NPC.ALUOBISI_1,["什么时候轮到你们来命令我！滚一边去，我先要结束那两个小生命！"],["不好，快救拉妮和拉琪！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.LA_QI,["赛尔，快救拉妮！机关就在附近的石碑上！快，不然就来不及了！"],["恩恩，我这就去！"],[function():void
                                             {
                                                TasksManager.complete(TaskController_925.TASK_ID,2,function():void
                                                {
                                                   initStep3();
                                                });
                                             }]);
                                          });
                                       }]);
                                    }]);
                                 });
                              }]);
                           });
                        });
                     }]);
                  }]);
               });
            }]);
         });
      }
      
      private static function initStep3() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(6);
         if(_map.conLevel["equipment"])
         {
            _map.conLevel["equipment"].visible = false;
         }
         (_map.conLevel["task925Trigger"] as MovieClip).buttonMode = true;
         (_map.conLevel["task925Trigger"] as MovieClip).addEventListener(MouseEvent.CLICK,onTriggerClick);
         CommonUI.addYellowArrow(_map.conLevel["task925Trigger"],0,0);
      }
      
      private static function onTriggerClick(param1:MouseEvent) : void
      {
         var app:AppModel = null;
         var e:MouseEvent = param1;
         CommonUI.removeYellowArrow(_map.conLevel["task925Trigger"]);
         (_map.conLevel["task925Trigger"] as MovieClip).removeEventListener(MouseEvent.CLICK,onTriggerClick);
         if(_map.conLevel["equipment"])
         {
            _map.conLevel["equipment"].visible = true;
         }
         app = ModuleManager.getModule(ClientConfig.getTaskModule("TaskInteractive_925"));
         app.setup();
         app.show();
         app.sharedEvents.addEventListener("success",function(param1:Event):void
         {
            var evt:Event = param1;
            app.sharedEvents.removeEventListener("success",arguments.callee);
            app.destroy();
            app = null;
            AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
            {
               NpcDialog.show(NPC.SEER,["耶...太棒了！拉琪它们终于得救了！赛小息，拉琪和拉妮的生命对我们很重要，你们快离开这里，我很快就会跟上的，快走…"],["你们休想离开！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["快走！不要让我有所牵挂，这样我无法发挥最强实力！阿铁打，快带他们离开这这里！"],["好吧！赛尔，你快点赶上来啊！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                     {
                        NpcDialog.show(NPC.ALUOBISI_1,["小子，看来你是我的克星啊！每次当我要成功的时候，你总要破坏我的计划，今天我一定要解决你！"],["哈哈！所有邪恶势力的克星就是我，赛尔！"],[function():void
                        {
                           NpcDialog.show(NPC.ZOG,["你小子也不好好掂量一下，就凭你也想以一敌三？让你这次连半个电池都找不到！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.SEER,["来吧！我有七星天珠和星辰之链，我是不会退缩的！阿洛比斯，还记得上次和我的较量吗？"],["小子，你这是在找死！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_925_3"),function():void
                                 {
                                    NpcDialog.show(NPC.ZOG,["可恶！又是你，贾斯汀！为什么我们到哪里你也跟到哪里呢？"],["因为我的工作就是消灭你们！"],[function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["站长，你怎么来了！这些家伙我一个人就可以收拾了！"],["千万别掉以轻心！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.NV_DIEN,["你们都在啊！别小看海盗和这个阿洛比斯！其实很早之前他们就一起勾结，这次第五星系的灾难是他们一手导演的！"],null,null,false,function():void
                                             {
                                                CartoonManager.play(ClientConfig.getFullMovie("task_925_cartoon"),function():void
                                                {
                                                   NpcDialog.show(NPC.ZOG,["哼哼！迪恩，我们好久不见了！既然这些细节都被你知道了，那么今天必须要清理门户了！"],["呵呵！你是不是当海盗当傻啦！"],[function():void
                                                   {
                                                      NpcDialog.show(NPC.NV_DIEN,["我从未承认自己是海盗，再说我现在已经回到赛尔号了！既然这样我和贾斯汀一样是不允许你们胡作非为的！"],null,null,false,function():void
                                                      {
                                                         NpcDialog.show(NPC.ALUOBISI_1,["哈哈哈，游戏变的原来越有意思了！贾斯汀今天就让我把你们一并解决！这是对你的尊重，也是英雄之间的较量！动手吧！"],["英雄？你不配！"],[function():void
                                                         {
                                                            TasksManager.complete(TaskController_925.TASK_ID,3,function():void
                                                            {
                                                               initStep4();
                                                            });
                                                         }]);
                                                      });
                                                   }]);
                                                });
                                             });
                                          });
                                       }]);
                                    }]);
                                 });
                              }]);
                           });
                        }]);
                     });
                  }]);
               }]);
            });
         });
      }
      
      private static function initStep4() : void
      {
         MainManager.selfVisible = false;
         taskMC.gotoAndStop(9);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_925_4"),function():void
         {
            NpcDialog.show(NPC.ALUOBISI_1,["可恶，你们是谁？居然拥有如此强大能力，看来是我太轻敌了！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.YINGKALUOSI,["哼！你也太小看我们了！刚才我们才发挥了0xff0000 百分之十的力量0xffffff！如果你识相的话，还是赶快收手吧！"],["收手？？？"],[function():void
               {
                  NpcDialog.show(NPC.ALUOBISI_1,["不可能，0xff0000 今晚月圆之夜我的能量将会无限扩大0xffffff，到时候就没有谁能阻止我了！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                     {
                        NpcDialog.show(NPC.SEER,["贾斯汀站长还有迪恩,麻烦你们回去告诉船长和赛小息他们我安然无恙，请他们放心!今晚我一定会完成使命的！"],["你准备一个人对付阿洛比斯？"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["放心吧！我已经知道方法了!完成使命后我一定会回来向你们汇报的！相信我啦！"],["好吧！那你可要注意安全，绝对不能冒险啊！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["恩恩，我一定会记住的！你们先回去和船长汇报一下吧！"],["恩，那我们先回去了！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.SEER,["我也希望自己已经想到解救巨石星的方法！但是为了让你们不受到牵连，我只有这个选择！"],["晚上19:00—20:00，巨石营地再见！"],[function():void
                                    {
                                       TasksManager.complete(TaskController_925.TASK_ID,4,function():void
                                       {
                                          destroy();
                                       });
                                    }]);
                                 });
                              }]);
                           }]);
                        }]);
                     });
                  });
               }]);
            });
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 709)
         {
            return _map.conLevel["task925mc"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         isInMap709 = false;
         OgreController.isShow = true;
         if(taskMC)
         {
            if(MapManager.currentMap.id == 709)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,onClick_2);
               (_map.conLevel["task925Trigger"] as MovieClip).removeEventListener(MouseEvent.CLICK,onTriggerClick);
            }
            DisplayUtil.removeForParent(taskMC);
         }
         MainManager.selfVisible = true;
         ToolBarController.showOrHideAllUser(true);
         _map = null;
      }
   }
}
