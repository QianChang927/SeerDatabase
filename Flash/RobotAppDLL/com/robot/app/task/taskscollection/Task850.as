package com.robot.app.task.taskscollection
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class Task850
   {
      
      private static var _mcForMap464:MovieClip;
      
      private static const TASK_ID:uint = 850;
      
      private static var _map:BaseMapProcess;
       
      
      public function Task850()
      {
         super();
      }
      
      public static function initTaskForMap464(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(true);
            CommonUI.addYellowExcal(_map.conLevel["soulMaster"],70,-72,6);
            _map.conLevel["soulMaster"].visible = true;
            _map.conLevel["soulMaster"].buttonMode = true;
            _map.conLevel["soulMaster"].addEventListener(MouseEvent.CLICK,onZushiClick);
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            DisplayUtil.removeForParent(_map.conLevel["soulMaster"]);
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startPro_0();
               }
            });
         }
         else
         {
            DisplayUtil.removeForParent(_map.conLevel["soulMaster"]);
            ToolBarController.showOrHideAllUser(true);
         }
      }
      
      private static function onZushiClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         LevelManager.closeMouseEvent();
         MainManager.actorModel.moveAndAction(new Point(300,400),function():void
         {
            LevelManager.openMouseEvent();
            _map.conLevel["soulMaster"].visible = false;
            _map.conLevel["soulMaster"].buttonMode = false;
            _map.conLevel["soulMaster"].removeEventListener(MouseEvent.CLICK,onZushiClick);
            CommonUI.removeYellowExcal(_map.conLevel["soulMaster"]);
            NpcDialog.show(NPC.SOUL_MASTER,["决战的日子终于到了！咤克斯和暗黑冰龙已经前往天幕宫殿，它们的目标是吸收其余三条巨龙的灵魂！事关重大，你准备好了吗？"],["走吧！我一定要消灭它们！","我还是去其他地方逛逛吧！"],[function():void
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     startPro_0();
                  }
               });
            },function():void
            {
               CommonUI.addYellowExcal(_map.conLevel["soulMaster"],70,-72,6);
               _map.conLevel["soulMaster"].visible = true;
               _map.conLevel["soulMaster"].buttonMode = true;
               _map.conLevel["soulMaster"].addEventListener(MouseEvent.CLICK,onZushiClick);
            }]);
         });
      }
      
      private static function startPro_0() : void
      {
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.SOUL_MASTER,["看见你那充满斗志和信心的眼神，我预感天界有救了！事不宜迟，出发吧！"],["Go！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_850_1"),function():void
            {
               TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     MapManager.changeMap(24);
                  }
               });
            });
         }]);
      }
      
      public static function initTaskForMap24(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(true);
            _map.conLevel["task850MC"].gotoAndStop(6);
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            _map.conLevel["task850MC"].visible = true;
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  startPro_1();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  startPro_2();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  startPro_3();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
               {
                  startPro_4();
               }
            });
         }
         else
         {
            _map.conLevel["task850MC"].gotoAndStop(6);
            _map.topLevel.mouseEnabled = false;
            _map.topLevel.mouseChildren = false;
            ToolBarController.showOrHideAllUser(true);
         }
      }
      
      private static function startPro_1() : void
      {
         _map.conLevel["task850MC"].gotoAndStop(1);
         ToolBarController.showOrHideAllUser(true);
         NpcDialog.show(NPC.SEER,["住手！不准你玷污这片神圣的领域！赶紧终止你们的所作所为！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.ANHEIBINGLONG,["咤克斯，这应该就是你提起过的赛尔吧？看起来弱不禁风，何来的勇气敢阻止我们？！"],["冰龙，醒醒吧！咤克斯是在利用你！"],[function():void
            {
               NpcDialog.show(NPC.JUCKS,["嘿嘿，冰龙是我最得力的助手！你认为就凭几句话就能让它倒戈相向吗？别做梦了！"],["可恶！你总是利用暗黑能量侵蚀善良的心灵！"],[function():void
               {
                  NpcDialog.show(NPC.JUCKS,["如果再不离开，你们的下场会和这三条天幕巨龙一样，永远沉睡于天界的角落！我说到做到！"],["太可怕了！我们该如何是好？"],[function():void
                  {
                     TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           startPro_2();
                        }
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function startPro_2() : void
      {
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_850_2"),function():void
         {
            _map.conLevel["task850MC"].gotoAndStop(2);
            NpcDialog.show(NPC.ANHEIBINGLONG,["哈哈哈！咤克斯，我想你千算万算都没算到，曾经被你视为傀儡的我，竟然会亲手将你毁灭！我现在已经攻无不克，战无不胜了！"],["难以置信！这是真的吗？"],[function():void
            {
               NpcDialog.show(NPC.ANHEIBINGLONG,[" 毁灭吧，天幕宫殿！毁灭吧，天幕巨龙！"],["大事不妙，它似乎要破坏这座宫殿！"],[function():void
               {
                  NpcDialog.show(NPC.SOUL_MASTER,["事到如今只有一个方法可以避免这场灾难了！" + MainManager.actorInfo.formatNick + "，记得我那11个弟子吗？"],["记得，怎么了祖师？"],[function():void
                  {
                     NpcDialog.show(NPC.SOUL_MASTER,["如今咤克斯已经灭亡，它们的灵魂相信已经得到了释放，通过我们师徒齐心协力，希望可以战胜它！这是唯一的方法！"],["听上去挺简单！那就呼唤它们来吧！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_850_3"),function():void
                        {
                           TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 startPro_3();
                              }
                           });
                        });
                     }]);
                  }]);
               }]);
            }]);
         });
      }
      
      private static function startPro_3() : void
      {
         _map.conLevel["task850MC"].gotoAndStop(3);
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.ANHEIBINGLONG,["就凭这些孤魂野鬼也想战胜我？太可笑了，哈哈哈！"],["祖师，我们有下一步行动吗？"],[function():void
         {
            NpcDialog.show(NPC.SOUL_MASTER,["这是我们的最后一场战斗，所有赛尔都会记住你们！为了家园，进攻吧！"],["什么？最后一场战斗？！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_850_4"),function():void
               {
                  _map.conLevel["task850MC"].gotoAndStop(4);
                  NpcDialog.show(NPC.SOUL_MASTER,["一切都结束了，我们赢了！赛尔，我们12年后再见！"],["再见？怎么回事？"],[function():void
                  {
                     NpcDialog.show(NPC.SOUL_MASTER,["我们已经把所剩无几的能量耗尽，天界终于得救了！万物皆有生命，但必须经历轮回才能重生！12年后，相信我们会再见面！"],null,null,false,function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_850_5"),function():void
                        {
                           TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 startPro_4();
                              }
                           });
                        });
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function startPro_4() : void
      {
         _map.conLevel["task850MC"].gotoAndStop(4);
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.SEER,["不要走…………….这不是真的！"],null,null,false,function():void
         {
            AnimateManager.playMcAnimate(_map.conLevel["task850MC"],4,"recovery",function():void
            {
               NpcDialog.show(NPC.ANHEIBINGLONG,["这一切像是噩梦！难以置信我险些亲手毁灭了天界，我的故乡！赛尔，谢谢你们！"],["谢谢有什么用？祖师它们都已经……"],[function():void
               {
                  NpcDialog.show(NPC.ANHEIBINGLONG,["我明白你的感受，我向你保证，天界从此会恢复和平！至于符拉迪诺它们，相信经历12年的轮候，它们会变的更加强大！"],["恩，等待是种煎熬！希望它们早点回来！"],[function():void
                  {
                     _map.conLevel["task850MC"].gotoAndStop(5);
                     NpcDialog.show(NPC.ANHEIBINGLONG,["赛尔，对你为天界付出的贡献我们感到自豪！作为答谢，我们会把4个精元送给你！记住，每三个月来一次宫殿，我们会帮你孵化精元！"],["好的，我明白了！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_850_6"),function():void
                        {
                           TasksManager.complete(TASK_ID,4,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 DebugTrace.show("任务完成！");
                              }
                              _map.conLevel["task850MC"].gotoAndStop(6);
                              ToolBarController.showOrHideAllUser(true);
                           });
                        });
                     }]);
                  }]);
               }]);
            });
         });
      }
      
      public static function destory() : void
      {
         if(_map)
         {
            if(_map.conLevel["soulMaster"])
            {
               DisplayUtil.removeForParent(_map.conLevel["soulMaster"]);
               _map.conLevel["soulMaster"].removeEventListener(MouseEvent.CLICK,onZushiClick);
            }
            if(_map.conLevel["task850MC"])
            {
               DisplayUtil.removeForParent(_map.conLevel["task850MC"]);
            }
         }
         ToolBarController.showOrHideAllUser(true);
         _map = null;
      }
   }
}
