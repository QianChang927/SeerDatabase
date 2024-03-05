package com.robot.app.task.taskscollection
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.control.TaskController_698;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.debug.DebugTrace;
   
   public class Task698
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskStep:int = -100;
       
      
      public function Task698()
      {
         super();
      }
      
      public static function initTaskForMap507(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_698.TASK_ID));
         if(nRet == TasksManager.UN_ACCEPT)
         {
            OgreController.isShow = false;
            ToolBarController.showOrHideAllUser(false);
            _map.conLevel["bulaikeNPC"]["signMC"].visible = true;
         }
         else if(nRet == TasksManager.ALR_ACCEPT)
         {
            OgreController.isShow = false;
            ToolBarController.showOrHideAllUser(false);
            _map.conLevel["bulaikeNPC"]["signMC"].visible = false;
            TasksManager.getProStatusList(TaskController_698.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  taskStep = 0;
                  gotoStep1();
               }
               else
               {
                  destroyBlock(_map.conLevel["block1MC"]);
                  destroyBlock(_map.conLevel["block2MC"]);
                  destroyBlock(_map.conLevel["block3MC"]);
                  destroyBlock(_map.conLevel["block4MC"]);
               }
            });
         }
         else if(nRet == TasksManager.COMPLETE)
         {
            _map.conLevel["bulaikeNPC"]["signMC"].visible = false;
            destroyBlock(_map.conLevel["block1MC"]);
            destroyBlock(_map.conLevel["block2MC"]);
            destroyBlock(_map.conLevel["block3MC"]);
            destroyBlock(_map.conLevel["block4MC"]);
         }
         _map.conLevel["bulaikeNPC"].buttonMode = true;
         _map.conLevel["bulaikeNPC"].addEventListener(MouseEvent.CLICK,bulaikeHandler);
      }
      
      private static function acceptTaskFun() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_698_1"),function():void
         {
            TasksManager.accept(TaskController_698.TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  DebugTrace.show("任务接取成功");
                  _map.conLevel["bulaikeNPC"].mouseEnabled = _map.conLevel["bulaikeNPC"].mouseChildren = false;
                  taskStep = 0;
                  gotoStep1();
               }
            });
         });
      }
      
      private static function fightFun() : void
      {
         NpcDialog.show(NPC.BULAIKE_NEW,["作为光明圣坛守护者，我不畏惧任何挑战！但我认为只有一对一的决斗才能证明谁是真正的强者！你有这个胆量吗？"],["OK，我会让你心服口服的！","嘿嘿！让哥哥我再考虑考虑。"],[function():void
         {
            FightManager.fightWithBoss("布莱克",0);
         }]);
      }
      
      private static function bulaikeHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(325,215),function():void
         {
            if(_map.conLevel["bulaikeNPC"]["signMC"].visible)
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["我一定会让光明重返格雷斯星！"],["#101光明守护者重生","与布莱克对战。","算了，我还是先围观吧。"],[acceptTaskFun,fightFun]);
            }
            else if(_map.conLevel["bulaikeNPC"].currentFrame == 2)
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
               FightManager.fightWithBoss("布莱克",1);
            }
            else
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["我一定会让光明重返格雷斯星！"],["与布莱克对战。","算了，我还是先围观吧。"],[fightFun]);
            }
         });
      }
      
      private static function gotoStep1() : void
      {
         initBlock(_map.conLevel["block1MC"],new Point(223,300));
         initBlock(_map.conLevel["block2MC"],new Point(380,418));
         initBlock(_map.conLevel["block3MC"],new Point(526,413));
         initBlock(_map.conLevel["block4MC"],new Point(710,355));
         _map.conLevel["bulaikeNPC"]["signMC"].visible = false;
      }
      
      private static function initBlock(param1:MovieClip, param2:Point) : void
      {
         if(param1)
         {
            param1.gotoAndStop(2);
            param1.buttonMode = true;
            param1.data = {"p":param2};
            param1.addEventListener(MouseEvent.CLICK,blockHandler);
         }
      }
      
      private static function destroyBlock(param1:MovieClip) : void
      {
         if(param1)
         {
            param1.gotoAndStop(1);
            param1.buttonMode = false;
            param1.removeEventListener(MouseEvent.CLICK,blockHandler);
            param1.visible = false;
         }
      }
      
      private static function blockHandler(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var evt:MouseEvent = param1;
         mc = evt.currentTarget as MovieClip;
         MainManager.actorModel.moveAndAction(mc.data["p"],function():void
         {
            destroyBlock(mc);
            if(!_map.conLevel["block1MC"].visible && !_map.conLevel["block2MC"].visible && !_map.conLevel["block3MC"].visible && !_map.conLevel["block4MC"].visible)
            {
               NpcDialog.show(NPC.BULAIKE_NEW,[MainManager.actorInfo.formatNick + "，谢谢你！"],["呵呵，别客气，好好保护格雷斯星！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_698_2"),function():void
                  {
                     _map.conLevel["bulaikeNPC"].gotoAndStop(2);
                     _map.conLevel["bulaikeNPC"].mouseEnabled = _map.conLevel["bulaikeNPC"].mouseChildren = true;
                     NpcDialog.show(NPC.SEER,["太可怕了，布莱克要是这样变化无常，格雷斯星的精灵将会时刻处于危险之中！"],["我必须得让他先冷静下来。（点击布莱克对战）"]);
                  });
               }]);
            }
         });
      }
      
      private static function onFightComplete(param1:PetFightEvent) : void
      {
         var evt:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightComplete);
         destroyBlock(_map.conLevel["block1MC"]);
         destroyBlock(_map.conLevel["block2MC"]);
         destroyBlock(_map.conLevel["block3MC"]);
         destroyBlock(_map.conLevel["block4MC"]);
         _map.conLevel["bulaikeNPC"].gotoAndStop(2);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_698_3"),function():void
         {
            NpcDialog.show(NPC.SEER,["布莱克，你好点了吗？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["呼！呼！自从吸收了星际碎片的暗黑能量后，这种状况出现得越来越频繁！要不是兰特对我进行抑制，后果真不堪设想。"],["兰特，就是这条小龙吧！"],[function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["嗯，他是我最好的伙伴，每次兰特都会被耗得筋疲力尽，长久下去身体肯定吃不消！"],["咱们去怀特星找始祖灵兽！"],[function():void
                  {
                     NpcDialog.show(NPC.BULAIKE_NEW,["始祖灵兽？"],["它曾经救活了迪符特，我相信它一定有办法治疗你！"],[function():void
                     {
                        NpcDialog.show(NPC.BULAIKE_NEW,["好吧，为了不让兰特和我自己再受折磨，什么方法都要试一试。"],["嗯，立刻出发。"],[function():void
                        {
                           TasksManager.complete(TaskController_698.TASK_ID,0,function():void
                           {
                              DebugTrace.show("第一步完成");
                              taskStep = 1;
                              MapManager.changeMap(445);
                           });
                        }]);
                     }]);
                  }]);
               }]);
            });
         });
      }
      
      public static function initTaskForMap445(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_698.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_698.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  taskStep = 1;
                  gotoStep2();
               }
            });
         }
         _map.conLevel["kaxiusiMC"].buttonMode = true;
         _map.conLevel["kaxiusiMC"].addEventListener(MouseEvent.CLICK,kaxiusiHandler);
      }
      
      public static function npcClickHandler() : void
      {
      }
      
      private static function gotoStep2() : void
      {
         _map.conLevel["kaxiusiMC"].gotoAndStop(2);
      }
      
      private static function kaxiusiTaskFun() : void
      {
         _map.conLevel["kaxiusiMC"].gotoAndStop(1);
         NpcDialog.show(NPC.SEER,["卡修斯，我们现在急需始祖灵兽帮助！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.KAXIUSI_WHITE,["发生什么事了？布莱克，你看上去精神不太好！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["吸收星际碎片的能量后，我体内的暗黑元素迅速增长，负面情绪爆发时根本就控制不了！为了守护光明圣坛，我必须改变自己的现状！"],["嗯，我带你们去找始祖灵兽，看看他是否有办法。"],[function():void
               {
                  TasksManager.complete(TaskController_698.TASK_ID,1,function():void
                  {
                     DebugTrace.show("第二步完成");
                     taskStep = 2;
                     _map.conLevel["kaxiusiMC"].gotoAndStop(3);
                  });
               }]);
            });
         });
      }
      
      private static function kaxiusiHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(670,190),function():void
         {
            if(_map.conLevel["kaxiusiMC"].currentFrame == 2)
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["守护炫彩山是我的使命！"],["#101光明守护者重生","嗯，你好好站岗吧，我顶你！"],[kaxiusiTaskFun]);
            }
            else
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["守护炫彩山是我的使命！"],["嗯，你好好站岗吧，我顶你！"]);
            }
         });
      }
      
      public static function initTaskForMap446(param1:BaseMapProcess) : void
      {
         var nRet:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.conLevel["haidaoMC"].visible = false;
         nRet = uint(TasksManager.getTaskStatus(TaskController_698.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_698.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  taskStep = 2;
                  gotoStep3();
               }
            });
         }
      }
      
      private static function gotoStep3() : void
      {
         _map.conLevel["haidaoMC"].visible = true;
         _map.conLevel["haidaoMC"].buttonMode = true;
         _map.conLevel["haidaoMC"].gotoAndStop(2);
         _map.conLevel["haidaoMC"].addEventListener(MouseEvent.CLICK,haidaoHandler);
      }
      
      private static function haidaoHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(558,435),function():void
         {
            _map.conLevel["haidaoMC"].gotoAndStop(1);
            NpcDialog.show(NPC.KAXIUSI_WHITE,["炫彩山怎么又出现海盗了！这群家伙真是不依不饶啊！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["卡修斯，不能让他跑了！咱们要问个明白！"],["与海盗对战。"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_698_4"),function():void
                  {
                     NpcDialog.show(NPC.KAXIUSI_WHITE,["在怀特星偷偷摸摸的想干什么！我不会让你们的诡计得逞的！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.PIRATE_2,["哈哈哈哈！ 不久你就会尝到我们的厉害了！好汉不吃眼前亏，我先开溜。"],["这群混蛋！"],[function():void
                        {
                           NpcDialog.show(NPC.KAXIUSI_WHITE,["别管海盗了，布莱克身体里的暗黑元素似乎又开始波动，我们赶紧到炫彩山山顶找始祖灵兽。"],["嗯，我们走。"],[function():void
                           {
                              _map.conLevel["haidaoMC"].visible = false;
                              TasksManager.complete(TaskController_698.TASK_ID,2,function():void
                              {
                                 DebugTrace.show("第三步完成");
                                 taskStep = 3;
                                 MapManager.changeMap(449);
                              });
                           }]);
                        }]);
                     });
                  });
               }]);
            });
         });
      }
      
      public static function initTaskForMap449(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var nRet:uint = uint(TasksManager.getTaskStatus(TaskController_698.TASK_ID));
         if(nRet == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_698.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
               {
                  taskStep = 3;
                  _map.conLevel["holeHit"].visible = true;
                  checkTask698();
               }
            });
         }
      }
      
      public static function checkTask698() : Boolean
      {
         if(taskStep == 3)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_698_5"),function():void
            {
               NpcDialog.show(NPC.KAXIUSI_WHITE,["始祖灵兽的治疗仅仅只是辅助，要控制心中的暗黑意识最终还得靠你自己！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.BULAIKE_NEW,["放心！没有什么可以难倒我！谢谢你们的帮助！我先返回光明圣坛了，以后有什么事情多联系。"],["嗯，大家一起加油！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_698_6"),function():void
                     {
                        TasksManager.complete(TaskController_698.TASK_ID,3,function():void
                        {
                           DebugTrace.show("任务完成");
                           taskStep = 4;
                        });
                     });
                  }]);
               });
            });
            return true;
         }
         return false;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 507)
         {
            _map.conLevel["bulaikeNPC"].removeEventListener(MouseEvent.CLICK,bulaikeHandler);
            destroyBlock(_map.conLevel["block1MC"]);
            destroyBlock(_map.conLevel["block2MC"]);
            destroyBlock(_map.conLevel["block3MC"]);
            destroyBlock(_map.conLevel["block4MC"]);
            OgreController.isShow = true;
            ToolBarController.showOrHideAllUser(true);
         }
         else if(MapManager.currentMap.id == 10380)
         {
            _map.conLevel["kaxiusiMC"].removeEventListener(MouseEvent.CLICK,kaxiusiHandler);
         }
         else if(MapManager.currentMap.id == 446)
         {
            _map.conLevel["haidaoMC"].removeEventListener(MouseEvent.CLICK,haidaoHandler);
         }
         else if(MapManager.currentMap.id == 449)
         {
         }
         _map = null;
      }
   }
}
