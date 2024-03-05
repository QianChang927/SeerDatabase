package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1231
   {
      
      public static const TASK_ID:uint = 1231;
      
      private static var _map:BaseMapProcess;
      
      private static var _clickNpc:MovieClip;
      
      private static var _bloodMc:MovieClip;
      
      private static var _evilHeartMc:MovieClip;
      
      private static var _shootTimes:int;
       
      
      public function Task1231()
      {
         super();
      }
      
      public static function initTaskFor4(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(1);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(1);
               }
            });
         }
      }
      
      public static function initTaskFor780(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskMC.gotoAndStop(1);
                  _clickNpc = taskMC.getChildByName("clickNpc") as MovieClip;
                  _clickNpc.buttonMode = true;
                  ToolTipManager.add(_clickNpc,"点击小息队长继续任务……");
                  _clickNpc.addEventListener(MouseEvent.CLICK,initStep1);
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
         var e:MouseEvent = param1;
         KTool.hideMapAllPlayerAndMonster();
         _clickNpc.removeEventListener(MouseEvent.CLICK,initStep1);
         _clickNpc.buttonMode = false;
         taskMC.gotoAndStop(2);
         NpcDialog.show(NPC.SEER,["队长！情况怎么样啦！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["赛尔！你来啦！海盗们抢走了魔神之心！说是要通过仪式让真正的魔神复活！"],["真正的魔神？"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["我也不是很清楚，可是现在的魔神已经很强大了，我们一定要阻止他们！"],["啊，那不是战神联盟嘛！"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["是呀，他们已经和艾里克对峙了好一会了！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["艾里克！海盗是坏人！你和他们同流合污是错误的决定！"],["艾里克愿意！"],[function():void
                        {
                           NpcDialog.show(NPC.AILIKE,["艾里克喜欢佐格和艾利逊！他们又听话又好玩！他们说要帮艾里克找回失去的记忆！"],["那是阴谋！"],[function():void
                           {
                              NpcDialog.show(NPC.LEIYI,["海盗狡猾的很！他们只有阴谋和诡计，肯定没按好心！"],["艾里克不信！"],[function():void
                              {
                                 NpcDialog.show(NPC.AILIKE,["你就是雷伊？！听说你很厉害，艾里克要打败你！"],null,null,false,function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["哇！现在的艾里克就能和雷伊打个平手！它的实力深不可测！要是它还能更强，真是无法想象！"],["我们得想办法帮帮忙！"],[function():void
                                       {
                                          NpcDialog.show(NPC.SEER,["战神联盟正吸引艾里克的注意，没准我们可以帮上什么忙！"],["我们先观察一下！"],[function():void
                                          {
                                             ModuleManager.showModule(ClientConfig.getTaskModule("TaskInteractive_1231"));
                                          }]);
                                       }]);
                                    });
                                 });
                              }]);
                           }]);
                        }]);
                     });
                  });
               }]);
            }]);
         });
      }
      
      public static function initStep1GoOn_1() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["他们果然在搞奇怪的仪式，中间那个邪气腾腾的东西估计就是什么魔神之心了，一看就不是好东西！"],["队长，我们该怎么办！"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["我也不知道怎么办，干脆就用头部射击打坏它！"],["好呀好呀！"],[function():void
            {
               taskMC.gotoAndStop(4);
               taskMC.addEventListener(Event.ENTER_FRAME,function():void
               {
                  _bloodMc = taskMC.getChildByName("blood") as MovieClip;
                  _evilHeartMc = taskMC.getChildByName("evilHeart") as MovieClip;
                  if(Boolean(_bloodMc) && Boolean(_evilHeartMc))
                  {
                     taskMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  }
               });
               _shootTimes = 0;
               AimatController.start(0,false,false);
               AimatController.addEventListener(AimatEvent.PLAY_END,onShootEvilHeart);
            }]);
         }]);
      }
      
      private static function onShootEvilHeart(param1:AimatEvent) : void
      {
         var _loc2_:AimatInfo = param1.info;
         if(_loc2_.userID != MainManager.actorID)
         {
            return;
         }
         if(_evilHeartMc.hitTestPoint(_loc2_.endPos.x,_loc2_.endPos.y))
         {
            ++_shootTimes;
            if(_shootTimes < 3)
            {
               (_bloodMc.hpNum as MovieClip).gotoAndStop(33 * _shootTimes);
            }
            else if(_shootTimes == 3)
            {
               _shootTimes = 0;
               AimatController.removeEventListener(AimatEvent.PLAY_END,onShootEvilHeart);
               initStep1GoOn_2();
            }
         }
      }
      
      private static function initStep1GoOn_2() : void
      {
         taskMC.gotoAndStop(5);
         AnimateManager.playMcAnimate(taskMC,5,"mc5",function():void
         {
            TasksManager.complete(TASK_ID,1,function(param1:Boolean = true):void
            {
               if(param1)
               {
                  initStep2();
               }
               else
               {
                  destroy();
               }
            });
         });
      }
      
      private static function initStep2() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 20
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(13);
         NpcDialog.show(NPC.LEIYI,["说起来，艾里克也是遭遇了不公正的待遇！这件事，还是由我来处理吧！"],["休想！"],[function():void
         {
            NpcDialog.show(NPC.AILIKE,["雷伊！你别想阻止我！"],["艾里克，听我说！"],[function():void
            {
               NpcDialog.show(NPC.LEIYI,["我代表赫尔卡星向你道歉！但是，作为赫尔卡星的守护者，作为赛尔的朋友，我不能看你任意妄为！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.LEIYI,["现在，我，雷伊，以雷神之名挑战你！让我们痛快的一战！你的委屈和怒火，我来承受！"],["……"],[function():void
                  {
                     NpcDialog.show(NPC.AILIKE,["……雷伊，我可是魔神，你不怕死么！"],["这是我的使命！"],[function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["这是我的命运！也是我的荣耀！你我一战，谁胜谁败还说不定呢！"],["好！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,13,"mc13",function():void
                           {
                              NpcDialog.show(NPC.BULAIKE_NEW,["雷伊，艾里克的实力非同一般，你确定要独自面对它？"],["是的！"],[function():void
                              {
                                 NpcDialog.show(NPC.LEIYI,["我不仅要保卫赫尔卡星和赛尔号，也要让艾里克明白一个守护者应该怎么做！"],["我支持你！"],[function():void
                                 {
                                    NpcDialog.show(NPC.GAIYA,["雷伊，我支持你！你是我一生的对手，可千万不要让我们失望！"],["你一定可以做到！"],[function():void
                                    {
                                       NpcDialog.show(NPC.KAXIUSI,["雷伊，9月30日，我们期待着这样惊天地、泣鬼神的大战！"],["还有我们也支持你！"],[function():void
                                       {
                                          NpcDialog.show(NPC.SAIXIAOXI,["我相信雷伊永远是最棒的！雷伊，你好好修炼！到时候我和米咔都会给你加油的！"],["好！"],[function():void
                                          {
                                             NpcDialog.show(NPC.LEIYI,["恩！我一定不会让大家失望的！赛小息，赛尔你们也不要大意，我觉得海盗不会善罢甘休，你们要做好防范！"],["我们会的！"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMC,14,"mc14",function():void
                                                {
                                                   TasksManager.complete(TASK_ID,3,function(param1:Boolean = true):void
                                                   {
                                                      destroy();
                                                   });
                                                });
                                             }]);
                                          }]);
                                       }]);
                                    }]);
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  }]);
               });
            }]);
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 780 && Boolean(_map.conLevel["task1231MC"]))
         {
            return _map.conLevel["task1231MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 780)
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
