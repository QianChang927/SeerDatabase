package com.robot.app.task.taskscollection
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class Task705
   {
      
      private static const TASK_ID:uint = 705;
      
      private static var _map:MapModel;
      
      private static var _taskState:uint;
       
      
      public function Task705()
      {
         super();
      }
      
      public static function initTaskForMap668() : void
      {
         _map = MapManager.currentMap;
         _map.controlLevel["task705_1"].visible = false;
         _map.controlLevel["guide_mc"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               _map.controlLevel["machine"].visible = false;
               _map.controlLevel["ore"].visible = false;
               _map.controlLevel["changeCapsule"].visible = false;
               TasksManager.getProStatusList(TASK_ID,checkStepForMap668);
               break;
            case TasksManager.COMPLETE:
         }
      }
      
      public static function initTaskForMap669() : void
      {
         _map = MapManager.currentMap;
         _map.controlLevel["task705_1"].visible = false;
         _map.controlLevel["pet2"].gotoAndStop(1);
         _map.controlLevel["pirate"].gotoAndStop(1);
         _map.controlLevel["guide_mc0"].visible = false;
         _map.controlLevel["guide_mc1"].visible = false;
         _map.controlLevel["guide_mc2"].visible = false;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         switch(_taskState)
         {
            case TasksManager.UN_ACCEPT:
               break;
            case TasksManager.ALR_ACCEPT:
               TasksManager.getProStatusList(TASK_ID,checkStepForMap669);
               break;
            case TasksManager.COMPLETE:
         }
      }
      
      private static function checkStepForMap668(param1:Array) : void
      {
         if(Boolean(param1[0]) && !param1[1])
         {
            ToolBarController.showOrHideAllUser(false);
            startStep0();
         }
         else
         {
            _map.controlLevel["machine"].visible = true;
         }
      }
      
      private static function checkStepForMap669(param1:Array) : void
      {
         if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
         {
            ToolBarController.showOrHideAllUser(false);
            startStep1();
         }
         else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
         {
            ToolBarController.showOrHideAllUser(false);
            startStep2();
         }
         else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
         {
            ToolBarController.showOrHideAllUser(false);
            startStep3();
         }
      }
      
      public static function startTask() : void
      {
         ToolBarController.showOrHideAllUser(false);
         NpcDialog.show(NPC.SHIPER,["对了！这次你的任务是勘察，千万不要打草惊蛇哦！特别是那些海盗，还有就是搞清楚暗黑的底细，我感觉它不是一个简单的人！"],["恩，我知道了！立刻前往异能星！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_705_3"),function():void
            {
               TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
               {
                  MapManager.changeMap(668);
               });
            });
         }]);
      }
      
      private static function startStep0() : void
      {
         _map = MapManager.currentMap;
         _map.controlLevel["task705_1"].visible = true;
         _map.controlLevel["machine"].visible = false;
         AnimateManager.playMcAnimate(_map.controlLevel["task705_1"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["那不是艾利逊吗？太可笑了，艾利逊居然说他的手下是蠢货？？？他自己就是一个宇宙无敌蠢货王！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.JIENI,["赛尔，你终于来了，暗黑没有骗我们，他说你们一定会抵达这里的，你快去异能山谷吧！暗黑会在那里等你的！"],["真的吗？那个家伙怎么什么都知道！"],[function():void
               {
                  NpcDialog.show(NPC.JIENI,["异能星变成现在这样，我们很伤心，希望你能和暗黑一起帮助我们，赶走海盗，赶走美丽图！"],["恩，我一定会的，有机会我要好好教训他们！"],[function():void
                  {
                     _map.controlLevel["machine"].visible = true;
                     AnimateManager.playMcAnimate(_map.controlLevel["task705_1"],2,"mc2",function():void
                     {
                        _map.controlLevel["guide_mc"].visible = true;
                        _map.controlLevel["task705_1"].visible = false;
                        _map.controlLevel["machine"].visible = true;
                        _map.controlLevel["machine"].gotoAndStop(1);
                        _map.controlLevel["machine"].buttonMode = true;
                        _map.controlLevel["machine"].addEventListener(MouseEvent.CLICK,onClickDoor);
                     });
                  }]);
               }]);
            });
         });
      }
      
      private static function onClickDoor(param1:Event) : void
      {
         var event:Event = param1;
         _map.controlLevel["machine"].play();
         MainManager.actorModel.moveAndAction(new Point(811,256),function():void
         {
            TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
            {
               MapManager.changeMap(669);
            });
         });
      }
      
      private static function startStep1() : void
      {
         _map = MapManager.currentMap;
         _map.controlLevel["task705_1"].visible = false;
         _map.controlLevel["pet0"].visible = true;
         _map.controlLevel["pet1"].visible = true;
         _map.controlLevel["pet2"].visible = true;
         _map.controlLevel["pirate"].visible = true;
         NpcDialog.show(NPC.SEER,["哇！这里的环境好奇怪啊！一半阴暗，一半是却是冰，果然异能啊！我还是小心为妙！"],["继续探索！"],[function():void
         {
            MainManager.actorModel.addEventListener(Event.ENTER_FRAME,onEnterFrame);
         }]);
      }
      
      private static function onEnterFrame(param1:Event) : void
      {
         if(MainManager.actorModel.x >= 300 && MainManager.actorModel.x <= 420 && MainManager.actorModel.y >= 200 && MainManager.actorModel.y <= 350)
         {
            MainManager.actorModel.stopAutoWalk();
            MainManager.actorModel.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
            showDialog();
         }
      }
      
      private static function showDialog() : void
      {
         NpcDialog.show(NPC.SEER,["石桥对面好像有点不对劲啊！那些精灵怎么都会被绑住了！"],["让我好好观察你一下"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_705_1"),function():void
            {
               NpcDialog.show(NPC.SEER,["可恶，正如暗黑所说的那样，海盗这次的目的果然是为了异能精灵而来，不行，我一定要救他们出来！"],["开始我的拯救计划吧！"],[function():void
               {
                  TasksManager.complete(TASK_ID,2,startStep2);
               }]);
            });
         }]);
      }
      
      private static function startStep2(param1:Boolean = true) : void
      {
         if(!param1)
         {
            return;
         }
         _map.controlLevel["task705_1"].visible = false;
         _map.controlLevel["pet0"].visible = true;
         _map.controlLevel["pet1"].visible = true;
         _map.controlLevel["pet2"].visible = true;
         _map.controlLevel["pirate"].visible = true;
         _map.controlLevel["btn0"].visible = true;
         _map.controlLevel["btn1"].visible = true;
         _map.controlLevel["btn2"].visible = true;
         _map.controlLevel["btn3"].visible = true;
         _map.controlLevel["btn0"].buttonMode = true;
         _map.controlLevel["guide_mc0"].visible = true;
         _map.controlLevel["btn0"].addEventListener(MouseEvent.CLICK,onClickPet0);
         _map.controlLevel["btn3"].buttonMode = true;
         _map.controlLevel["btn3"].addEventListener(MouseEvent.CLICK,onClickPirate);
      }
      
      private static function onClickPet0(param1:Event) : void
      {
         var event:Event = param1;
         MainManager.actorModel.moveAndAction(new Point(506,120),function():void
         {
            _map.controlLevel["btn0"].removeEventListener(MouseEvent.CLICK,onClickPet0);
            _map.controlLevel["btn0"].buttonMode = false;
            _map.controlLevel["guide_mc0"].visible = false;
            AnimateManager.playMcAnimate(_map.controlLevel["pet0"],2,"mc2",function():void
            {
               NpcDialog.show(NPC.SEER,["咦！怎么没了，好奇怪，让我再去解救另一个试试！"],["解救其他异能精灵！"],[function():void
               {
                  _map.controlLevel["btn1"].buttonMode = true;
                  _map.controlLevel["guide_mc1"].visible = true;
                  _map.controlLevel["btn1"].addEventListener(MouseEvent.CLICK,onClickPet1);
               }]);
            });
         });
      }
      
      private static function onClickPirate(param1:Event) : void
      {
         _map.controlLevel["btn3"].buttonMode = false;
         _map.controlLevel["btn3"].removeEventListener(MouseEvent.CLICK,onClickPirate);
         _map.controlLevel["pirate"].gotoAndStop(2);
      }
      
      private static function onClickPet1(param1:Event) : void
      {
         var event:Event = param1;
         MainManager.actorModel.moveAndAction(new Point(661,150),function():void
         {
            _map.controlLevel["btn1"].buttonMode = false;
            _map.controlLevel["guide_mc1"].visible = false;
            _map.controlLevel["btn1"].removeEventListener(MouseEvent.CLICK,onClickPet1);
            _map.controlLevel["pet1"].gotoAndStop(2);
            _map.controlLevel["btn2"].buttonMode = true;
            _map.controlLevel["guide_mc2"].visible = true;
            _map.controlLevel["btn2"].addEventListener(MouseEvent.CLICK,onClickPet2);
         });
      }
      
      private static function onClickPet2(param1:Event) : void
      {
         var event:Event = param1;
         MainManager.actorModel.moveAndAction(new Point(812,298),function():void
         {
            _map.controlLevel["btn2"].buttonMode = false;
            _map.controlLevel["guide_mc2"].visible = false;
            _map.controlLevel["btn2"].removeEventListener(MouseEvent.CLICK,onClickPet2);
            AnimateManager.playMcAnimate(_map.controlLevel["pet2"],2,"mc2",function():void
            {
               AnimateManager.playMcAnimate(_map.controlLevel["pirate"],3,"mc3",function():void
               {
                  NpcDialog.show(NPC.SEER,["什么，难道暗黑回到赛尔号的事情，海盗它们都知道了！不可能，绝对不可能！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.PIRATE_2,["哼哼！现在就让我们结束你那脆弱的小生命吧！兄弟们，一起上，把他拆了！"],["看来一场恶战在所难免了！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["海盗你们别太得意！我不会这么轻易被击败的，来吧！"],null,null,false,function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_705_2"),function():void
                           {
                              TasksManager.complete(TASK_ID,3,startStep3);
                           });
                        });
                     }]);
                  });
               });
            });
         });
      }
      
      private static function startStep3(param1:Boolean = true) : void
      {
         var bool:Boolean = param1;
         if(!bool)
         {
            return;
         }
         _map = MapManager.currentMap;
         _map.controlLevel["task705_1"].visible = true;
         _map.controlLevel["task705_1"].gotoAndStop(1);
         _map.controlLevel["pet0"].visible = false;
         _map.controlLevel["pet1"].visible = false;
         _map.controlLevel["pet2"].visible = false;
         _map.controlLevel["pirate"].visible = false;
         NpcDialog.show(NPC.ANHEI_SEER,[MainManager.actorInfo.formatNick + "，你也太不注意了，还好我及时赶到，否则后果不堪设想！"],["我也不知道原来海盗设了圈套！"],[function():void
         {
            NpcDialog.show(NPC.ANHEI_SEER,["还记得我和你说过的美丽图吗？自从美丽图掌管海盗集团，现在的海盗已经不是当初的海盗了！现在他们的实力已经有所增强！"],["太可恶了！但是接下来我该怎么办呢？"],[function():void
            {
               NpcDialog.show(NPC.ANHEI_SEER,["嗯…我告诉你一个秘密，异能星上的精灵都会有自己的特点，如果你能拥有这些精灵，对你的实力也会大大提升的！"],["真的吗？那我现在就去寻找它们！"],[function():void
               {
                  CartoonManager.play(ClientConfig.getFullMovie("cartoon/task705_6"),function():void
                  {
                     NpcDialog.show(NPC.ANHEI_SEER,["这个不急，你先和我决斗一场再说，否则，我回去很难交代！"],["什么！暗黑，你要和我对决！？"],[function():void
                     {
                        AnimateManager.playMcAnimate(_map.controlLevel["task705_1"],2,"mc2",function():void
                        {
                           NpcDialog.show(NPC.SEER,["好吧！我想你这样做，一定会有你的理由，那就来吧！暗黑，我也很想知道你的实力！"],["暗黑我不会输给你的！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_705_5"),function():void
                              {
                                 DisplayUtil.removeForParent(_map.controlLevel["task705_1"]);
                                 NpcDialog.show(NPC.SEER,["暗黑居然为了我，宁愿伤害自己也不愿伤害我，还有他的四个兄弟又是什么！难道还有其他赛尔曾经也离开了赛尔号吗？"],["在接下来的冒险中一定会有答案的！"],[function():void
                                 {
                                    NpcDialog.show(NPC.SEER,["先不管这么多了，我还是去寻找暗黑所说的异能精灵，让我的实力变的更加强大，说不定什么时候我就能保护暗黑也说不定啊！"],["异能精灵，我一定会找到你们的！"],[function():void
                                    {
                                       AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_705_4"),function():void
                                       {
                                          TasksManager.complete(TASK_ID,4,taskComplete);
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
         }]);
      }
      
      private static function taskComplete(param1:Boolean) : void
      {
         if(!param1)
         {
            return;
         }
         _map = MapManager.currentMap;
         DisplayUtil.removeForParent(_map.controlLevel["task705_1"]);
         DisplayUtil.removeForParent(_map.controlLevel["pet0"]);
         DisplayUtil.removeForParent(_map.controlLevel["pet1"]);
         DisplayUtil.removeForParent(_map.controlLevel["pet2"]);
         DisplayUtil.removeForParent(_map.controlLevel["pet2"]);
         DisplayUtil.removeForParent(_map.controlLevel["pirate"]);
         ToolBarController.showOrHideAllUser(true);
      }
      
      public static function destroyForMap669() : void
      {
         _map = MapManager.currentMap;
         if(_map)
         {
            if(_map.controlLevel["btn0"])
            {
               _map.controlLevel["btn0"].removeEventListener(MouseEvent.CLICK,onClickPet0);
            }
            if(_map.controlLevel["btn1"])
            {
               _map.controlLevel["btn1"].removeEventListener(MouseEvent.CLICK,onClickPet1);
            }
            if(_map.controlLevel["btn2"])
            {
               _map.controlLevel["btn2"].removeEventListener(MouseEvent.CLICK,onClickPet2);
            }
            if(_map.controlLevel["btn3"])
            {
               _map.controlLevel["btn3"].removeEventListener(MouseEvent.CLICK,onClickPirate);
            }
            _map = null;
         }
         ToolBarController.showOrHideAllUser(true);
         MainManager.actorModel.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
      }
   }
}
