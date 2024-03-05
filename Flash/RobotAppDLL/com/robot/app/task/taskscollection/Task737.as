package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.EventManager;
   
   public class Task737
   {
      
      private static var _mcForMap671:MovieClip;
      
      private static var _mcForMap672:MovieClip;
      
      private static const TASK_ID:uint = 737;
      
      private static var _map:BaseMapProcess;
      
      private static var _shootCount:int;
       
      
      public function Task737()
      {
         super();
      }
      
      public static function acceptTask() : void
      {
         MapManager.changeMap(5);
      }
      
      public static function initTaskForMap5(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  goStep1();
                  return;
               }
            });
         }
      }
      
      public static function initTaskForMap671(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap671 = _map.conLevel["task_737_2"];
         _mcForMap671.visible = false;
         _map.conLevel["arrow737"].visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  goStep2();
               }
            });
         }
      }
      
      public static function initTaskForMap672(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _mcForMap672 = _map.conLevel["task_737_3"];
         _mcForMap672.visible = false;
         _map.conLevel["bloodMc"].visible = false;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  goStep3();
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  goStep4();
               }
            });
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            _mcForMap672.visible = true;
            _mcForMap672.gotoAndStop(9);
         }
      }
      
      public static function goStep1() : void
      {
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.SEER,["博士这么急的找我，一定是关于异能石的事情，先去了解一下！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.DOCTOR,["这股..这股..能量太强大了！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.DOCTOR,["我还是第一次有害怕的感觉！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SEER,["派特博士他到底怎么了？？我还是头一次看见博士如此害怕的样子！先问问究竟发生什么事情吧！"],["博士你这是怎么了？？"],[function():void
                  {
                     NpcDialog.show(NPC.DOCTOR,["小赛尔，之前我在你带回来的异能碎片和异能泉水中研究出了0xff0000精灵变异仓0xffffff，但是这些只是最初级的研究结果哦！"],["哇！精灵变异仓？？？"],[function():void
                     {
                        CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_737_1"),function():void
                        {
                           NpcDialog.show(NPC.DOCTOR,["这可是精灵界又一次重大发现，相信在异能星一定还有其他值得发现的秘密！看来这这次调查异能冰窟的任务又要靠你了！"],["放心吧！博士，我一定会凯旋而归的！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["这次异能星之旅我一定要查清真相，暗黑你是正义的化身还是藏在异能星的幕后黑手！"],["异能石我来啦！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_737_2"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(671);
                                       }
                                    });
                                 });
                              }]);
                           }]);
                        });
                     }]);
                  }]);
               });
            });
         });
      }
      
      public static function goStep2() : void
      {
         _mcForMap671.visible = true;
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         NpcDialog.show(NPC.SEER,["每次来到这个鬼地方，都冷的我浑身发抖，可恶啊！之前博士拿到一部分的碎片，这次就让我好好观察一下异能石上的碑文吧！"],["点击查看异能石"],[function():void
         {
            _map.conLevel["arrow737"].visible = true;
            _map.conLevel["rockTig"].visible = true;
            _map.conLevel["rockTig"].buttonMode = true;
            _map.conLevel["rockTig"].addEventListener(MouseEvent.CLICK,onRockClick);
         }]);
      }
      
      private static function onRockClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(480,350),function():void
         {
            _map.conLevel["arrow737"].visible = false;
            _map.conLevel["rockTig"].buttonMode = false;
            _mcForMap671.gotoAndStop(2);
            _map.conLevel["rockTig"].removeEventListener(MouseEvent.CLICK,onRockClick);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_737_3"),function():void
            {
               NpcDialog.show(NPC.SEER,["完了，完了！异能石全碎了，这可如何是好啊！博士的新发明要泡汤了！ 整个异能星会不会受到牵连啊！"],["怎么办，怎么办！"],[function():void
               {
                  AnimateManager.playMcAnimate(_mcForMap671,2,"task_737_2_am1",function():void
                  {
                     NpcDialog.show(NPC.SEER,["咦？是谁！！快出来吧！别藏在后面，我已经看到你了！"],["好像没什么反应嘛！（点击冰柱试试！）"],[function():void
                     {
                        _map.conLevel["iceTig"].buttonMode = true;
                        _map.conLevel["iceTig"].addEventListener(MouseEvent.CLICK,onIceClick);
                     }]);
                  });
               }]);
            });
         });
      }
      
      private static function onIceClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         _map.conLevel["arrow737"].visiable = true;
         _map.conLevel["iceTig"].buttonMode = false;
         _map.conLevel["iceTig"].removeEventListener(MouseEvent.CLICK,onIceClick);
         AnimateManager.playMcAnimate(_mcForMap671,3,"task_737_2_am2",function():void
         {
            NpcDialog.show(NPC.AITE,["小赛尔，前面暗黑刚来过这里，他偷偷的把异能石带回了能量控制室，把我困在冰柱中，叫我千万不要告诉你！否则就……"],["否则什么？！"],[function():void
            {
               NpcDialog.show(NPC.AITE,["否则他就会彻底铲除我们，赛尔，怎么办啊！"],["暗黑，你究竟想干什么！！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["放心吧！我的朋友，有我在没人能伤害你们，我这就去能量控制室走一趟，你先回家好好休息吧！"],["暗黑，你的真面目由我来揭穿！"],[function():void
                  {
                     TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                     {
                        _map.conLevel["arrow737"].visible = true;
                        _map.conLevel["arrow737"].x = 850;
                        _map.conLevel["arrow737"].y = 300;
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      public static function goStep3() : void
      {
         _mcForMap672.visible = true;
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playMcAnimate(_mcForMap672,1,"task_737_3_am1",function():void
         {
            NpcDialog.show(NPC.SEER,["住手！暗黑，你知道自己在做什么吗？！为什么要骗我，还利用赛尔号对你的信任！你今天必须给我一个交代！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.ANHEI_SEER,["哼哼！别碍手碍脚的站在那里！奉劝你一句离开这里，我的付出永远都不会有人明白的！"],["暗黑，不管你以前发生什么！我一定要阻止你！"],[function():void
               {
                  NpcDialog.show(NPC.ANHEI_SEER,["我已经不是当年的暗黑了，就凭你一个人的力量也想阻止我的计划！做梦去吧！哈哈！"],["暗黑，你……"],[function():void
                  {
                     AnimateManager.playMcAnimate(_mcForMap672,2,"task_737_3_am2",function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_737_4"),function():void
                        {
                           NpcDialog.show(NPC.ANHEI_SEER,["异能王，彻底觉醒吧！我愿意做你的仆人！我愿意和你共创属于我们的天下！"],["不行，一定要阻止暗黑的计划！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["既然暗黑是这次计划的领导者，只要消灭了他，也许就能破坏整个计划了！先试试再说！"],["使用头部射击攻击暗黑！"],[function():void
                              {
                                 _map.conLevel["bloodMc"].visible = true;
                                 _map.conLevel["bloodMc"].data = {"blood":5};
                                 _map.conLevel["anheiTig"].buttonMode = true;
                                 _map.conLevel["anheiTig"].addEventListener(MouseEvent.CLICK,onAnheiClick);
                                 AimatController.addEventListener(AimatEvent.PLAY_END,onShootAnhei);
                              }]);
                           }]);
                        });
                     });
                  }]);
               }]);
            });
         });
      }
      
      private static function onAnheiClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         NpcDialog.show(NPC.ANHEI_SEER,["异能王，彻底觉醒吧！我愿意做你的仆人！我愿意和你共创属于我们的天下！"],["不行，一定要阻止暗黑的计划！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["既然暗黑是这次计划的领导者，只要消灭了他，也许就能破坏整个计划了！先试试再说！"],["使用头部射击攻击暗黑！"]);
         }]);
      }
      
      private static function onShootAnhei(param1:AimatEvent) : void
      {
         var point:Point;
         var bloodMc:MovieClip = null;
         var event:AimatEvent = param1;
         if(event.info.userID != MainManager.actorID)
         {
            return;
         }
         point = event.info.endPos;
         if(_map.conLevel["anheiTig"].hitTestPoint(point.x,point.y))
         {
            _mcForMap672.nextFrame();
            bloodMc = _map.conLevel["bloodMc"];
            bloodMc.data["blood"] = bloodMc.data["blood"] - 1;
            bloodMc["perTxt"].text = bloodMc.data["blood"] + "/5";
            bloodMc["perMc"].gotoAndStop(uint(101 - 20 * bloodMc.data["blood"]));
            if(bloodMc.data["blood"] <= 0)
            {
               AimatController.removeEventListener(AimatEvent.PLAY_END,onShootAnhei);
               bloodMc.visible = false;
               _map.conLevel["anheiTig"].buttonMode = false;
               _map.conLevel["anheiTig"].removeEventListener(MouseEvent.CLICK,onAnheiClick);
               NpcDialog.show(NPC.ANHEI_SEER,["可恶，碍手碍脚的小铁皮，看我不收拾你！"],null,null,false,function():void
               {
                  EventManager.addEventListener(RobotEvent.NO_PET_CAN_FIGHT,onError);
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
                  FightManager.fightWithBoss("达迪拉",0);
               });
            }
         }
      }
      
      private static function onError(param1:RobotEvent) : void
      {
         _map.conLevel["anheiTig"].buttonMode = true;
         _map.conLevel["anheiTig"].addEventListener(MouseEvent.CLICK,onFightAnhei);
      }
      
      private static function onFightAnhei(param1:MouseEvent) : void
      {
         FightManager.fightWithBoss("达迪拉",0);
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         _mcForMap672.gotoAndStop(2);
         EventManager.removeEventListener(RobotEvent.NO_PET_CAN_FIGHT,onError);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         _map.conLevel["anheiTig"].removeEventListener(MouseEvent.CLICK,onFightAnhei);
         NpcDialog.show(NPC.SEER,["什么！你怎么会有异能精灵！！！这是为什么？"],["别废话！"],[function():void
         {
            NpcDialog.show(NPC.ANHEI_SEER,["废话少说，让你看看我真实的实力，苏醒吧！异能之王！"],["什么，难道他要……"],[function():void
            {
               TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     goStep4();
                  }
               });
            }]);
         }]);
      }
      
      public static function goStep4() : void
      {
         _mcForMap672.visible = true;
         _mcForMap672.gotoAndStop(2);
         ToolBarController.showOrHideAllUser(false);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_737_5"),function():void
         {
            _mcForMap672.gotoAndStop(10);
            NpcDialog.show(NPC.ANHEI_SEER,["什么！！！！竟然出现了两个异能王，看来那个黑色的应该就是我寻找已久的主人，他一定可以帮助我获得我想要的东西！"],["异能王，你终于苏醒了！"],[function():void
            {
               NpcDialog.show(NPC.HEIAN_YINENGWANG,["哼哼！是你解封了异能石吗？哈哈哈！我会让让死亡与尖叫响彻云霄！让恐惧与迷茫的交响诗继续演奏！"],["太好了！我叫暗黑，愿意随时追随你！"],[function():void
               {
                  NpcDialog.show(NPC.GUANMING_YINENGWANG,["等等！你这家伙，你到现在还不知道悔改吗？难道你还想被我封印0xff0000一万年0xffffff吗？"],["呵呵呵！那是很久以前的事了！"],[function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_737_2"),function():void
                     {
                        NpcDialog.show(NPC.HEIAN_YINENGWANG,["来守护部落找我吧！你一定还记得那些为你奋勇出战的守护一族吧！我这就去拜访他们，0xff0000别让我等太久！否则你的守护一族即将灭亡！世界将会进入我暗黑异能的天下0xffffff，暗黑，我们走！啊哈哈哈！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(_mcForMap672,8,"task_737_3_am3",function():void
                           {
                              NpcDialog.show(NPC.GUANMING_YINENGWANG,["别担心，小个子，这件事情我会亲自解决的！让我先回异能石恢复一下元气！随后我们就向守护部落进发！"],["太好了！异能王万岁！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_737_6"),function():void
                                 {
                                    _mcForMap672.gotoAndStop(9);
                                    TasksManager.complete(TASK_ID,3);
                                 });
                              }]);
                           });
                        });
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      public static function destroy() : void
      {
         OgreController.isShow = true;
         AimatController.removeEventListener(AimatEvent.PLAY_END,onShootAnhei);
         if(_map)
         {
            if(_map.conLevel["rockTig"])
            {
               _map.conLevel["rockTig"].removeEventListener(MouseEvent.CLICK,onRockClick);
            }
            if(_map.conLevel["iceTig"])
            {
               _map.conLevel["iceTig"].removeEventListener(MouseEvent.CLICK,onIceClick);
            }
            if(_map.conLevel["anheiTig"])
            {
               _map.conLevel["anheiTig"].removeEventListener(MouseEvent.CLICK,onAnheiClick);
               _map.conLevel["anheiTig"].removeEventListener(MouseEvent.CLICK,onFightAnhei);
            }
         }
         _mcForMap671 = null;
         _mcForMap672 = null;
         _map = null;
      }
   }
}
